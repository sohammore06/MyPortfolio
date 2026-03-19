import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  factech,
  intellifySolutions,
  smartSolutions,
  tesla,
  shopify,
  microsoft,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  linux,
  github,
  frontendimg,
  backendimg,
  mycredworldStorefront,
  flashcard,
  diary,
  resumeBlog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End",
    icon: web,
    backendIcon: backend,
    backendimg: backendimg,
    frontendimg: frontendimg,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "linux",
  //   icon: linux,
  // },
  // {
  //   name: "github",
  //   icon: github,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Intellify Solutions",
    icon: intellifySolutions,
    iconBg: "#E8EEF8",
    date: "June 2025 - Present",
    points: [
      `<b>Automation & Data Pipelines</b>: Built <b>Python</b>-based automation to capture and <b>push attendance into databases</b> reliably, reducing manual entry and improving data freshness for downstream reporting.`,
      `<b>UNDP — .NET Platform</b>: Delivered enhancements on <b>.NET</b> solutions for UNDP initiatives; led <b>authentication modernization</b> by migrating from <b>SharePoint</b>-based auth to <b>MSAL</b>, plus broader <b>performance, stability, and UX</b> improvements across the stack.`,
      `<b>Ingivity — Azure AI & Agents</b>: Used <b>Azure Portal</b> and <b>Azure AI Foundry</b> to design production-minded <b>AI agents</b> with <b>indexes, vector search, and curated knowledge sources</b> (Copilot-style grounding), iterating toward <b>lower latency and higher answer quality</b>.`,
      `<b>Xometry / ThomasNet — .NET Engineering</b>: Own day-to-day <b>.NET</b> delivery: production <b>support</b>, <b>new feature development</b>, and <b>bug fixes</b> in fast-moving B2B workflows.`,
      `<b>Engineering Craft & Cloud Growth</b>: Preparing for <b>AZ-204</b>; sharpening <b>DSA</b> and system design fundamentals; adopting <b>AI-assisted tooling</b> (e.g. Cursor, Claude) and exploring <b>agentic AI</b> patterns to ship faster with higher quality.`,
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Factech",
    icon: factech,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2025",
    points: [
      `<a href="#project" rel="noopener noreferrer" style="color: #3498db; text-decoration: underline;">
        <b>My Cred World</b>
      </a>: Architected and shipped <b>mycredworld.com</b> — a <b>mobile-first</b>, full-stack digital goods & gaming top-up store on <b>Spring Boot 3</b> + <b>Angular 19</b> — serving <b>3,500+ users</b> with strong performance under <b>peak traffic</b>, <b>Docker</b> deployment on <b>Hostinger</b>, multi-gateway payments, and automated supplier fulfillment.`,
      `<b>Frontend Leadership</b>: Redesigned UI/UX for the entire
      <a href="https://factech.co.in/" target="_blank" rel="noopener noreferrer" style="color: #3498db; text-decoration: underline;">
        Factech site
      </a>including the Admin portal and other products like Kaizen, Purchase, and Inventory, boosting user engagement by <b>30%</b> and reducing support tickets by <b>20%</b>.`,
      "<b>Backend Optimization</b>: Streamlined RESTful APIs, achieving a <b>40% increase</b> in data processing speed and a <b>25% improvement</b> in system response time, enhancing platform performance.",
      "<b>Mentorship & Team Building</b>: Mentored and guided interns to achieve a <b>100% task completion rate</b>, fostering team collaboration and productivity."
    ],       
  },
  {
    title: "Python [Django] Developer",
    company_name: "Smart Solutions",
    icon: smartSolutions,
    iconBg: "#fff",
    date: "Dec 2022 - Mar 2023",
    points: [
      `<b>UI/UX Enhancement</b>: Led the design and implementation of <b>Responsive UI/UX</b> for a new project from the ground up, leveraging Google Charts to deliver visually engaging and data-driven insights, resulting in a <b>40%</b> improvement in user interaction and satisfaction through effective data visualization.`,
      `<b>Backend Development</b>: Developed optimized Python functions to emulate complex Excel functionalities, while managing efficient database CRUD operations via <b>Django</b>, creating a seamless, user-friendly solution that streamlined decision-making processes and improved operational efficiency by <b>30%</b>.`
    ],
  },
  {
    title: "Microsoft Virtual Intern",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56",
    date: "Dec 2021 - Mar 2022",
    points: [
      `Earned recognition as one of the <b>Top 1000 interns</b>, receiving a 
      <a href="https://www.linkedin.com/posts/soham-shankar-more_learn-futurereadytalent-internship-activity-6916800984048431104-zLKg?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" style="color: #3498db; text-decoration: underline;">
        Microsoft Azure Certification
      </a>, 
      for outstanding performance.`,
      "Completed 190+ hours of self-paced learning on core Azure services, covering essential <b>cloud skills</b> for industry relevance.",
      "Attended 5 industry-aligned sessions and participated in hands-on labs with Microsoft Learn sandbox for practical experience.",
      "Successfully deployed a <b>Project</b> on Microsoft Azure, gaining real-world insights into various Azure services and their applications.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "My Cred World",
    description:
      "Production <b>digital goods & gaming top-up marketplace</b> at <b>mycredworld.com</b> — designed <b>mobile-first</b> (PWA-style shell, bottom navigation, cart-first flows) and scaled to <b>3,500+ registered users</b> with headroom for <b>peak-hour traffic</b> during promos and game launches. <b>Backend</b>: <b>Spring Boot 3</b> on <b>Java 17</b>, <b>PostgreSQL</b> + <b>Redis</b>, <b>JWT + refresh</b> rotation, <b>Google OAuth</b> & <b>OTP</b>, <b>Spring Actuator</b>, structured logging, and <b>automated tests</b> on payment + fulfillment paths. <b>Integrations</b>: multiple <b>payment gateways</b>, <b>wallet / Cred Coins</b> ledger flows, and <b>automated provisioning</b> via <b>SmileOne</b>, <b>Moogold</b>, <b>GakoShop</b>, plus internal & subscription SKUs. <b>Frontend</b>: <b>Angular 19</b>, <b>Angular Material</b> + <b>Bootstrap</b>, charts & rich merchandising UI, <b>lazy-loaded</b> routes, role-based <b>auth guards</b>, and a full <b>admin</b> surface. <b>DevOps</b>: <b>Docker</b>-based images, health checks, and live deployment on <b>Hostinger</b> with observability for real-world SRE-style operations.",
    tags: [
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "angular-19",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: mycredworldStorefront,
    source_code_link: "https://mycredworld.com",
  },
  {
    name: "FlashCard.AI",
    description:
      "AI-Based Flashcard Generator: Engineered an AI-driven tool using the Gemini API to create tailored study aids, enhancing learning and retention; built with React and Vite for high-speed performance, and designed with Tailwind CSS featuring sophisticated animations and interactive elements to boost user engagement; prioritized accessibility and usability to support efficient learning for a diverse audience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-api",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: flashcard,
    // source_code_link: "https://flash-card-ai-plum.vercel.app/",
    source_code_link: "https://github.com/sohammore06/FlashCard.AI",
  },
  {
    name: "Python [Django] Diary",
    description:
      "Personal Diary Web Application: Developed a secure, dynamic diary application using Python Django, featuring comprehensive user authentication, including signup, login, and logout functionalities. The platform includes a dashboard that displays total notes, note categories, and recent notes. Users can manage their entries with options to add, edit, and delete notes and categories, organized by category for streamlined access. Additionally, the application offers a search functionality to quickly locate specific notes, enhancing user efficiency and interaction.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: diary,
    source_code_link: "https://github.com/sohammore06/MyDiary",
  },
];

/** Blog posts — `slug` must match a route in `pages/BlogArticlePage.jsx` (BLOG_REGISTRY). */
export const blogPosts = [
  {
    id: 1,
    slug: "job-hunt-latex-resume",
    title: "Job Hunt Guide: Create a Professional Resume using LaTeX (Overleaf)",
    description:
      "Having a standout resume is the first step toward securing that dream job. Learn how to build a polished resume with LaTeX and Overleaf.",
    image: resumeBlog,
  },
];

export { services, technologies, experiences, testimonials, projects };
