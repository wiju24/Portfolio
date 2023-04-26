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
    uoft,
    shoppers,
    vts,
    quality,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "MERN Stack Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
    {
      name: "Redux Toolkit",
      icon: redux,
    },
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
  ];
  
  const experiences = [
    {
      title: "Customer Service/Cash Supervisor",
      company_name: "Shoppers Drug Mart",
      icon: shoppers,
      iconBg: "#383E56",
      date: "August 2011 - March 2020",
      points: [
        "Maximized donation and sales, leading to the achievement of the store's overall goals. ",
        "Provided a positive customer experience with courteous service while managing transactions by scanning items, applying discounts and processing payments",
        "Proficient in cash handling, product knowledge and understanding of customer base.",
        "Trained newly hired staff on customer service protocols, issued refunds/exchanges and handled customer care; answered inquiries via phone and email.",
        "Problem solved issues within the store to maintain business protocols and efficiently met customer demands and needs; promoted a positive attitude and provided guidance and motivation to the team."
      ],
    },
    {
      title: "VTS Distribution",
      company_name: "Customer Service Representative",
      icon: vts,
      iconBg: "#E6DEDD",
      date: "January 2015 - March 2020",
      points: [
        "Operated delivery vehicle in a safe and efficient manner to ensure products were delivered safely.",
        "Coordinated orders, calculated payments/tips, and addressed customer inquiries to achieve satisfaction of business partners and customers.",
        "Communicated emerging and ongoing issues with team members and external clients in a clear and effective manner.",
      ],
    },
    {
      title: "Quality Assurance Technologist",
      company_name: "Quality Cheese Inc.",
      icon: quality,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Responsible for R&D of new products and supervised product development prior to their release to customers.",
        "Demonstrated strong analytical and quantitative skills by ensuring documentation was current and validated for potential audits or inspections.",
        "Collaborated with other departments to create, verify, and update documentation and Standard Operating Procedures (SOPs), ensuring accuracy and completeness.",
        "Conducted regular testing and maintenance on samples, adhering to established protocols and standards, prior to shipment to external vendors.",
        "Conducted sample reviews and performed extensive testing to guarantee top-quality products.",
        "Collaborated with Hazard Analysis Critical Control Point Coordinator and Manager to ensure facilities were current and compliant.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "University of Toronto Web Development Bootcamp",
      icon: uoft,
      iconBg: "#E6DEDD",
      date: "August 2022 - February 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
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