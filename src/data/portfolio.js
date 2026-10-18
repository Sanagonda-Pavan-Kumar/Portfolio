const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

export const profile = {
  firstName: 'Sanagonda',
  lastName: 'Pavan Kumar',
  role: 'Full Stack Web Developer',
  location: 'Hyderabad, India',
  photo: asset('pavan.png'),
  email: 'pavanchinna53@gmail.com',
  phone: '+91 76809 27393',
  phoneHref: 'tel:+917680927393',
  linkedin: 'https://www.linkedin.com/in/sanagonda-pavan-kumar-b53b4a242/',
  github: 'https://github.com/Sanagonda-Pavan-Kumar',
  summary:
    'Computer Science graduate building responsive, high-performance web applications with React.js, Node.js, Python and SQL. Seventeen client websites live in production, plus experience in automation and applied machine learning.'
};

export const heroStats = [
  { value: '17', label: 'Live websites' },
  { value: '04', label: 'Roles' },
  { value: '04', label: 'Certifications' }
];

export const ticker = ['React.js', 'Node.js', 'Python', 'JavaScript', 'SQL', 'Tailwind CSS', 'Playwright', 'Machine Learning', 'AWS', 'Power BI'];

// Newest first
export const websites = [
  { name: 'Skyline by Candeur', url: 'https://skylinebycandeur.in/', domain: 'skylinebycandeur.in', kind: 'Residential', img: asset('site-17.jpg'), blurb: 'Site for Candeur Skyline in Narsingi — four 59-storey towers of one-floor sky villas, residences, plans and Club Atmos.' },
  { name: 'Vertex Autograph', url: 'https://vertexautograph.com/', domain: 'vertexautograph.com', kind: 'Luxury', img: asset('site-16.jpg'), blurb: 'High-rise luxury site for Vertex Autograph in Gopanpally — 3 & 4 BHK residences by HCU, master plan, offers and floor plans.' },
  { name: 'Infinity by DSR Infra', url: 'https://infinitybydsrinfra.com/', domain: 'infinitybydsrinfra.com', kind: 'Residential', img: asset('site-15.jpg'), blurb: 'Launch site for DSR Infinity in Kondapur — G+49 sky towers across 11 acres, five wings, plans, pricing and an EOI enquiry flow.' },
  { name: 'Siaa by Yula', url: 'https://siaabyyula.com/', domain: 'siaabyyula.com', kind: 'Residential', img: asset('site-14.jpg'), blurb: 'Site for Hallmark Yula, 183 G+2 luxury villas across 22.26 acres at Patighanpur — hero slider, key-figure strip and gallery.' },
  { name: 'Nirvana', url: 'https://nirvana.subishicity.in/', domain: 'nirvana.subishicity.in', kind: 'Residential', img: asset('site-13.jpg'), blurb: 'Microsite for Nirvana by Subishi, a 73-acre gated community of 618 villas in Maheshwaram — master layout, floor plans and specifications.' },
  { name: 'Go Zamindar', url: 'https://gozamindar.in/', domain: 'gozamindar.in', kind: 'Real estate', img: asset('site-12.jpg'), blurb: 'Landowner-share homes marketplace for Hyderabad — project carousel, pricing highlights, EMI calculator and site-visit booking.' },
  { name: 'Kaa Gifts', url: 'https://lovable.dev/preview/kCssKMx4x5c0iKfYW5YPVL6y49t2Y5mS', domain: 'lovable.dev · preview', kind: 'E-commerce', img: asset('site-11.jpg'), blurb: 'Customised return-gifts catalogue built from reusable React components with Tailwind CSS, focused on clean product browsing.' },
  { name: 'Aha Foods', url: 'https://aha-foods.netlify.app/', domain: 'aha-foods.netlify.app', kind: 'Restaurant', img: asset('site-10.jpg'), blurb: 'Responsive restaurant website for Aha Tiffins and Aha Grills & Kebabs — menu, cuisine and location modules built in React.' },
  { name: 'Trump Towers Kokapet', url: 'https://trumptowerskokapet.in/', domain: 'trumptowerskokapet.in', kind: 'Luxury', img: asset('site-9.jpg'), blurb: 'High-end landing experience for Kokapet — restrained palette, large imagery and a frictionless enquiry path.' },
  { name: 'The Godrej Neopolis', url: 'https://thegodrejneopolis.in/', domain: 'thegodrejneopolis.in', kind: 'Residential', img: asset('site-8.jpg'), blurb: 'Information-dense launch site with configuration comparisons, gallery and a persistent enquiry call to action.' },
  { name: 'The Brigade Neopolis', url: 'https://thebrigadeneopolis.in/', domain: 'thebrigadeneopolis.in', kind: 'Residential', img: asset('site-7.jpg'), blurb: 'Campaign site covering pricing, amenities and location for the Neopolis address, built for paid-traffic conversion.' },
  { name: 'Subishi City', url: 'https://subishicity.in/', domain: 'subishicity.in', kind: 'Corporate', img: asset('site-6.jpg'), blurb: 'Parent brand site tying every Subishi development together — project directory, brand narrative and shared enquiry routing.' },
  { name: 'Myra by Eloria', url: 'https://myrabyeloria.in/', domain: 'myrabyeloria.in', kind: 'Luxury', img: asset('site-5.jpg'), blurb: 'Premium brand site for Myra by Eloria with a refined editorial layout, gallery experience and enquiry integration.' },
  { name: 'Forest Edge', url: 'https://forestedge.subishicity.in/', domain: 'forestedge.subishicity.in', kind: 'Residential', img: asset('site-4.jpg'), blurb: 'Nature-forward presentation of the Forest Edge development — full-bleed imagery, scroll-driven sections, fast on 4G.' },
  { name: 'Serenity', url: 'https://serenity.subishicity.in/', domain: 'serenity.subishicity.in', kind: 'Residential', img: asset('site-3.jpg'), blurb: 'Calm, typography-led microsite pairing master-plan imagery with unit configurations and location advantages.' },
  { name: 'Sierra', url: 'https://sierra.subishicity.in/', domain: 'sierra.subishicity.in', kind: 'Residential', img: asset('site-2.jpg'), blurb: 'Launch site for Sierra with a cinematic hero sequence, specification tables and a lead-capture flow for the sales team.' },
  { name: 'Breeze', url: 'https://breeze.subishicity.in/', domain: 'breeze.subishicity.in', kind: 'Residential', img: asset('site-1.jpg'), blurb: 'Project microsite for the Breeze towers — amenity storytelling, floor-plan galleries and an enquiry funnel, tuned for mobile-first traffic.' }
];

export const experience = [
  { company: 'Gorealty LLP', place: 'Hyderabad', period: 'Jan 2026 – Present', type: 'Full-time', title: 'Website Developer',
    points: ['Design and develop responsive, high-performance websites for premium residential real-estate projects.', 'Build launch microsites with floor plans, amenities, location and pricing sections tuned for lead conversion.', 'Integrate enquiry forms and optimise pages for speed, SEO and mobile-first traffic.'],
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'SEO', 'Responsive UI'] },
  { company: 'The AI School', place: 'Hyderabad', period: 'Sep 2025 – Dec 2025', type: 'Full-time Intern', title: 'Data Annotation Analyst',
    points: ['Performed image, video, bounding-box annotation and audio transcription for AI/ML training datasets in CVAT.', 'Maintained annotation quality through QA processes and strict labeling guidelines.', 'Supported model development with accurate annotations across image, video and audio data.'],
    tech: ['CVAT', 'Computer Vision', 'QA Workflows', 'Audio Transcription'] },
  { company: 'Blumin', place: 'Hyderabad', period: 'Sep 2024 – Jan 2025', type: 'Internship', title: 'Full Stack Web Developer',
    points: ['Developed responsive web applications using React.js, HTML5, CSS3 and JavaScript.', 'Built reusable UI components with Material UI and Ant Design while integrating REST APIs.', 'Collaborated via Git to optimise performance, responsive UI and user experience.'],
    tech: ['React.js', 'Material UI', 'Ant Design', 'REST APIs', 'Git'] },
  { company: 'Internshala', place: 'Remote', period: '2024', type: 'Internship', title: 'Web Development Intern',
    points: ['Designed and developed responsive web applications with modern frontend technologies.', 'Improved accessibility and cross-browser compatibility of UI components.'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'] }
];

export const projects = [
  { tag: 'Automation', name: 'Automated Web Scraping & Data Extraction System', stack: ['Node.js', 'Playwright', 'JavaScript'],
    blurb: 'A resilient scraping pipeline for dynamic, JavaScript-rendered websites — handling navigation, pagination and DOM interaction, then exporting clean structured data.' },
  { tag: 'Machine learning', name: 'Medical Social Media Text Classification', stack: ['Python', 'NLP', 'Machine Learning'],
    blurb: 'An NLP classification system that categorises medical queries from structured healthcare datasets, enabling intelligent routing of patient questions.' }
];

export const about = [
  "I'm a Computer Science graduate from Kakatiya Institute of Technology and Science, Warangal, working across the full stack — React.js front ends, Node.js services, SQL data layers — with additional experience in AI data annotation and machine learning.",
  "My focus is clean, accessible interfaces that perform: responsive layouts, reusable components, measured performance. I'm seeking Software Engineer or AI Engineer roles where I can build scalable products."
];

export const education = [
  { school: 'Kakatiya Institute of Technology and Science, Warangal', detail: 'B.Tech, Computer Science and Engineering · CGPA 7.72/10', period: '2020 – 2024' },
  { school: 'Sigma Junior College, Warangal', detail: 'Intermediate · MPC · 95.3%', period: '2018 – 2020' },
  { school: 'Vignan High School, Warangal', detail: 'SSC · GPA 9.7/10', period: '2017 – 2018' }
];

export const skills = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'Java', 'SQL', 'HTML5', 'CSS3'] },
  { label: 'Frameworks', items: ['React.js', 'Node.js', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap'] },
  { label: 'Data & Tools', items: ['PostgreSQL', 'MSSQL Server', 'Power BI', 'Git', 'GitHub', 'Playwright', 'CVAT'] },
  { label: 'Cloud', items: ['AWS Compute', 'AWS Storage', 'AWS Databases', 'Networking', 'Security'] },
  { label: 'Soft skills', items: ['Communication', 'Public speaking', 'Team collaboration', 'Event management', 'Time management'] }
];

export const certifications = [
  { issuer: 'Oracle Academy', title: 'AI/ML & Database Design' },
  { issuer: 'ServiceNow', title: 'Certified Implementation Specialist — Data Foundations (CMDB & CSDM)' },
  { issuer: 'Cisco', title: 'Cybersecurity Certification' },
  { issuer: 'GUVI', title: 'HTML5 & JavaScript Development' }
];

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'Profile' }
];
