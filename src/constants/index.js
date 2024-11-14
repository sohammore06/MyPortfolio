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
  backendimg
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    company_name: "Factech",
    icon: factech,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Vendor Management App Development: Currently developing a vendor management app, enabling vendors to manage invoices and monitor purchase orders efficiently. This solution is expected to generate a profit of over 50K per month for a single client, with scalability potential across multiple clients, providing a substantial revenue stream and improved client satisfaction",
      "Frontend Development: Led the redesign and enhancement of the total system Admin portal and products like Kaizen , Purchase, Inventory,etc..., increasing user engagement by 30% and reducing customer support requests by 20% through optimized UI/UX improvements, resulting in heightened system satisfaction and ease of use.",
      "Backend Development: Developed and optimized RESTful APIs, achieving a 40% increase in data processing speed and a 25% improvement in system response time by streamlining backend processes, directly impacting overall platform efficiency and user experience.",
      "Mentorship and Team Support: Mentored and managed multiple interns, successfully guiding them to complete key tasks on schedule and fostering their growth, resulting in a 100% task completion rate and enhancing team productivity and cohesion.",
    ],
  },
  {
    title: "Python [Django] Developer",
    company_name: "Smart Solutions",
    icon: smartSolutions,
    iconBg: "#fff",
    date: "Dec 2022 - Mar 2023",
    points: [
      "UI/UX Enhancement: Led the design and implementation of UI/UX for a new project from the ground up, leveraging Google Charts to deliver visually engaging and data-driven insights, resulting in a 40% improvement in user interaction and satisfaction through effective data visualization.",
      "Backend Development: Developed optimized Python functions to emulate complex Excel functionalities, while managing efficient database CRUD operations via Django, creating a seamless, user-friendly solution that streamlined decision-making processes and improved operational efficiency by 30%."
    ],
  },
  {
    title: "Microsoft Virtual Intern",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56",
    date: "Dec 2021 - Mar 2022",
    points: [
      "Earned recognition as one of the top 1000 interns, receiving a Microsoft Azure-branded T-shirt and certification for outstanding performance.",
      "Completed 190+ hours of self-paced learning on core Azure services, covering essential cloud skills for industry relevance.",
      "Attended 5 industry-aligned sessions and participated in hands-on labs with Microsoft Learn sandbox for practical experience.",
      "Successfully deployed a project on Microsoft Azure, gaining real-world insights into various Azure services and their applications.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
