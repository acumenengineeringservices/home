import { useEffect, useRef } from 'react';

const ANIMATION_SELECTOR = '.fade-up, .fade-in, .slide-left, .slide-right, .stagger-children';

function prepareElement(el) {
  if (el.classList.contains('stagger-children')) {
    Array.from(el.children).forEach((child, index) => {
      child.style.setProperty('--stagger-i', index);
    });
  }
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function useScrollAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = () => document.querySelectorAll(ANIMATION_SELECTOR);

    if (reduceMotion) {
      elements().forEach((el) => el.classList.add('is-visible'));
      return;
    }

    document.documentElement.classList.add('js-animations');

    const revealed = new Set();

    const reveal = (el) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      prepareElement(el);
      el.classList.add('is-visible');
    };

    const revealInView = () => {
      elements().forEach((el) => {
        if (isInViewport(el)) reveal(el);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.01 }
    );

    const observe = (el) => {
      if (revealed.has(el) || el.classList.contains('is-visible')) {
        revealed.add(el);
        return;
      }
      prepareElement(el);
      observer.observe(el);
    };

    const scan = (root = document) => {
      const nodes =
        root instanceof Document
          ? root.querySelectorAll(ANIMATION_SELECTOR)
          : root.matches?.(ANIMATION_SELECTOR)
            ? [root, ...root.querySelectorAll(ANIMATION_SELECTOR)]
            : [...(root.querySelectorAll?.(ANIMATION_SELECTOR) ?? [])];

      nodes.forEach(observe);
      revealInView();
    };

    scan();
    requestAnimationFrame(revealInView);
    window.addEventListener('load', revealInView);

    let scanFrame = 0;
    const scheduleScan = (root) => {
      cancelAnimationFrame(scanFrame);
      scanFrame = requestAnimationFrame(() => scan(root));
    };

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            scheduleScan(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(scanFrame);
      window.removeEventListener('load', revealInView);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}

export function useCounterAnimation(end, duration = 2) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frameId;
    let startTime;
    let observer;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) ** 2;
      el.textContent = Math.round(end * eased).toLocaleString();
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        frameId = requestAnimationFrame(animate);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return ref;
}
