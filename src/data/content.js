export const stats = [
  { value: 850, suffix: '+', label: 'Projects Completed' },
  { value: 320, suffix: '+', label: 'Clients Worldwide' },
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 12, suffix: '', label: 'Countries Served' },
];

export const values = [
  {
    title: 'Insight',
    description: 'Deep understanding of structural systems and client requirements drives every decision.',
    icon: '◈',
  },
  {
    title: 'Precision',
    description: 'Millimeter-accurate detailing and rigorous quality checks on every deliverable.',
    icon: '◎',
  },
  {
    title: 'Quality',
    description: 'ISO-aligned workflows ensuring consistent, error-free documentation.',
    icon: '◆',
  },
  {
    title: 'Innovation',
    description: 'Leveraging BIM, automation, and cutting-edge tools for smarter engineering.',
    icon: '◇',
  },
  {
    title: 'Integrity',
    description: 'Transparent communication, ethical practices, and on-time delivery.',
    icon: '◉',
  },
];

export const serviceCategories = [
  {
    id: 'steel',
    title: 'Rebar, Steel and Precast Detailing',
    icon: '⬡',
    color: '#FF8C00',
    overview:
      'We offer a wide range of rebar sizes, diameters, and strength levels to suit different construction needs. Our expertise in breaking down rebar elements into precise bending shapes, lengths, steel grades, and diameters ensures efficient material use and minimizes construction errors.',
    servicesHeading: 'The cost management also covers services such as:',
    services: [
      { name: 'Rebar Concrete Shop Drawings', description: 'Fabrication-ready shop drawings for concrete reinforcement per project standards.' },
      { name: 'Bar Bending Schedules', description: 'Accurate BBS with bar marks, shapes, lengths, and quantities for efficient placement.' },
      { name: 'Concrete Masonry Detailing', description: 'Detailed masonry unit layouts, reinforcement, and connection documentation.' },
      { name: 'Rebar Placement Drawings', description: 'Clear placement plans showing bar locations, spacing, and installation sequences.' },
      { name: 'As Built Drawings Services', description: 'Field-verified record drawings reflecting actual constructed conditions.' },
      { name: 'Retaining Wall Detailing', description: 'Complete rebar and structural detailing for retaining and earth-retention systems.' },
      { name: 'High Quality Detailing Suiting', description: 'Precision detailing aligned with project specifications and fabricator standards.' },
      { name: 'Rebar Detailing, Drawing & Estimating', description: 'Integrated detailing, drawing production, and quantity estimating services.' },
      { name: '3D Modeling Of Rebar Using Tekla Structures', description: 'Intelligent 3D rebar models with clash detection and fabrication output.' },
      { name: 'Quality Take-Offs Including Rebar & Concrete', description: 'Reliable material take-offs for rebar and concrete to support bidding and procurement.' },
    ],
  },
  {
    id: 'bim',
    title: 'BIM — Building Information Modeling',
    icon: '◫',
    color: '#4DA6FF',
    services: [
      { name: '3D BIM Modeling', description: 'LOD 300–500 structural models in Revit, Tekla, and Navisworks.' },
      { name: 'Clash Detection & Coordination', description: 'Multi-discipline clash resolution and federated model management.' },
      { name: '4D / 5D BIM Services', description: 'Construction sequencing and cost integration for project planning.' },
      { name: 'Scan to BIM', description: 'Point cloud to BIM conversion for renovation and as-built projects.' },
      { name: 'BIM Standards & Templates', description: 'Custom Revit/Tekla families, templates, and company BIM protocols.' },
      { name: 'Model Auditing & QA/QC', description: 'Automated and manual model checks against project standards.' },
    ],
  },
  {
    id: 'cad',
    title: 'CAD Drawings, Drafting & Detailing',
    icon: '▣',
    color: '#50C878',
    services: [
      { name: 'Structural CAD Drafting', description: 'Foundation, framing, and connection plans per AISC/ACI standards.' },
      { name: 'Shop & Fabrication Drawings', description: 'Production-ready drawings for steel, precast, and rebar fabricators.' },
      { name: 'As-Built Documentation', description: 'Red-line incorporation and final record drawing packages.' },
      { name: 'Permit & Construction Drawings', description: 'Code-compliant drawing sets for municipal approval and construction.' },
      { name: 'PDF to CAD Conversion', description: 'Legacy drawing digitization with layer standards and title blocks.' },
      { name: 'Quantity Takeoffs', description: 'Material estimates from drawings for bidding and procurement.' },
    ],
  },
];

export const projects = [
  {
    name: 'Skyline Commercial Tower',
    type: 'CIP',
    scope: 'Full structural BIM & rebar detailing for 42-story mixed-use tower',
    manhours: '18,500',
    tonnage: '12,400 MT',
    location: 'Mumbai, India',
  },
  {
    name: 'Pacific Industrial Park',
    type: 'CMU',
    scope: 'Steel structure detailing and precast panel coordination',
    manhours: '9,200',
    tonnage: '6,800 MT',
    location: 'Pune, India',
  },
  {
    name: 'Metro Transit Hub',
    type: 'CIP',
    scope: 'Post-tensioned slab detailing and clash-free BIM coordination',
    manhours: '14,000',
    tonnage: '9,600 MT',
    location: 'Delhi, India',
  },
  {
    name: 'Harbor Bridge Retrofit',
    type: 'CMU',
    scope: 'Steel retrofit detailing, shop drawings, and erection sequencing',
    manhours: '7,800',
    tonnage: '4,200 MT',
    location: 'Chennai, India',
  },
  {
    name: 'Greenfield Data Center',
    type: 'CIP',
    scope: 'Foundation & superstructure rebar detailing with 3D BIM',
    manhours: '11,300',
    tonnage: '8,100 MT',
    location: 'Bangalore, India',
  },
  {
    name: 'University Science Block',
    type: 'CMU',
    scope: 'Precast & steel hybrid structure detailing and coordination',
    manhours: '6,500',
    tonnage: '3,900 MT',
    location: 'Hyderabad, India',
  },
];

export const technologies = [
  { name: 'Tekla Structures', abbr: 'TEKLA' },
  { name: 'Autodesk Revit', abbr: 'REVIT' },
  { name: 'AutoCAD', abbr: 'CAD' },
  { name: 'Navisworks', abbr: 'NAVIS' },
  { name: 'Point Cloud', abbr: 'PC' },
  { name: 'Advance Steel', abbr: 'AS' },
  { name: 'SDS/2', abbr: 'SDS' },
  { name: 'Bluebeam', abbr: 'BB' },
  { name: 'BIM 360', abbr: '360' },
  { name: 'SketchUp', abbr: 'SU' },
];

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/acumen-engineering-services', icon: 'in' },
  { name: 'Facebook', url: 'https://www.facebook.com/acumenengservices', icon: 'fb' },
  { name: 'Instagram', url: 'https://www.instagram.com/acumenengservices', icon: 'ig' },
  { name: 'YouTube', url: 'https://www.youtube.com/@acumenengservices', icon: 'yt' },
];

export const formEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

export const contactInfo = {
  address: '123 Engineering Way, Industrial Area, Mumbai, Maharashtra, India - 400001',
  phone: '+91 98765 43210',
  email: 'info@acumenengservices.com',
  website: 'www.acumenengservices.com',
  hours: 'Mon - Sat (9:00 AM - 6:00 PM)',
  whatsapp: '919876543210',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.665474887887!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#contact', label: 'Contact' },
];
