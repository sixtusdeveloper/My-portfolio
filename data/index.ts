import React from "react";
// import { Services } from "@/types";


//============================= Home Page Navigation links ============================//
export const navigation = [
  { name: 'About', href: '#About' },
  { name: 'Services', href: '#Services' },
  { name: 'Experience', href: '#Experience' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Approach', href: '#Approach' },
    { name: 'Clients', href: '#Clients' },
];

//=============================  Hero Section Data ============================//
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "relative lg:col-span-3 md:col-span-6 md:row-span-4 min-h-[65vh] lg:min-h-[80vh] overflow-hidden",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "absolute bottom-4 lg:bottom-0 left-0 right-0 p-4 text-white justify-end lg:justify-end z-10",
    img: "/profile.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[42vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

//=============================  Project data ====================================//
export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/project01.avif",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
    category: "Fullstack",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/project02.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
    category: "Fullstack",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/project03.avif",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project04.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project05.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Fullstack",
  },
  {
    id: 6,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project06.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Fullstack",
  },
  {
    id: 7,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project07.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Frontend",
  },
  {
    id: 8,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project08.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Fullstack",
  },
  {
    id: 9,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project09.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Fullstack",
  },
  {
    id: 10,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project10.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Frontend",
  },
  {
    id: 11,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project11.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    cetegory: "Frontend",
  },
  {
    id: 12,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project12.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Frontend",
  },
  {
    id: 13,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project13.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Frontend",
  },
];

//=============================  Testimonials Section Data =======================//
export const testimonials = [
  {
    quote: "Sixtus’s portfolio has been instrumental in showcasing our projects. The design and functionality he implemented have enhanced our online presence and effectively communicated our brand message. His attention to detail and responsiveness have truly made a difference.",
    fullQuote: "Sixtus’s portfolio has been instrumental in showcasing our projects. The design and functionality he implemented have enhanced our online presence and effectively communicated our brand message. His attention to detail and responsiveness have truly made a difference. We are very pleased with the results and look forward to future collaborations.",
    name: "Michael Benjamin",
    title: "Marketing Director at Creative Solutions",
    imageUrl: "/user07.jpg",
    fallbackImageUrl: "/fullback.png",
    rating: 5,
  },
  {
    quote: "The enhancements Sixtus made to our website’s user interface were game-changing. His work not only improved the overall design but also made the user experience more intuitive and engaging. We’ve seen a significant increase in user satisfaction and interaction.",
    fullQuote: "The enhancements Sixtus made to our website’s user interface were game-changing. His work not only improved the overall design but also made the user experience more intuitive and engaging. We’ve seen a significant increase in user satisfaction and interaction. Sixtus's professionalism and creativity are top-notch, and we’re thrilled with the results.",
    name: "Sandra Ankana",
    title: "UI/UX Designer at Innovative Tech",
    imageUrl: "/user03.jpg",
    fallbackImageUrl: "/fallback.png",
    rating: 5,
  },
  {
    quote: "Sixtus’s expertise in front-end development brought a fresh perspective to our project. His ability to integrate advanced features seamlessly into our existing setup was impressive. The final product exceeded our expectations and has been well-received by users.",
    fullQuote: "Sixtus’s expertise in front-end development brought a fresh perspective to our project. His ability to integrate advanced features seamlessly into our existing setup was impressive. The final product exceeded our expectations and has been well-received by users. We look forward to future projects with him.",
    name: "Freedom Amos",
    title: "Senior Front-End Developer at TechSavvy",
    imageUrl: "/user06.jpg",
    fallbackImageUrl: "/fullback.png",
    rating: 5,
  },
  {
    quote: "Working with Sixtus has greatly enhanced our data analysis tools. His tailored solutions have provided deeper insights and improved our overall decision-making process. His ability to understand and address our specific needs has been invaluable.",
    fullQuote: "Working with Sixtus has greatly enhanced our data analysis tools. His tailored solutions have provided deeper insights and improved our overall decision-making process. His ability to understand and address our specific needs has been invaluable. We are very satisfied with the efficiency and effectiveness of his work.",
    name: "James Markson",
    title: "Data Analyst at Tech Oil",
    imageUrl: "/user05.jpg",
    fallbackImageUrl: "/fullback.png",
    rating: 4,
  },
  {
    quote: "Sixtus’s contributions to our project have been outstanding. His ability to deliver high-quality results under tight deadlines is impressive. His work has significantly improved our workflow and productivity, and we appreciate his dedication and expertise.",
    fullQuote: "Sixtus’s contributions to our project have been outstanding. His ability to deliver high-quality results under tight deadlines is impressive. His work has significantly improved our workflow and productivity, and we appreciate his dedication and expertise. We are excited to see what he accomplishes in future projects.",
    name: "Daniel Donald",
    title: "Project Manager at Innovate Inc.",
    imageUrl: "/user01.jpg",
    fallbackImageUrl: "/fullback.png",
    rating: 5,
  },
  {
    quote: "The level of professionalism and creativity Sixtus brings to his work is remarkable. His solutions have improved our systems' performance and user engagement. Sixtus is a valuable asset to any team and we look forward to collaborating with him again.",
    fullQuote: "The level of professionalism and creativity Sixtus brings to his work is remarkable. His solutions have improved our systems' performance and user engagement. Sixtus is a valuable asset to any team and we look forward to collaborating with him again. His attention to detail and commitment to excellence are truly commendable.",
    name: "Andofa Jameson",
    title:"C.O.O at Fintech Innovations",
    imageUrl: "/profile02.jpeg",
    fallbackImageUrl: "/fullback.png",
    rating: 4,
  },
];

//============================  data/experienceData.js ============================//

export const experiences = [
  {
    date: "March 2023 - Present",
    title: "Software Engineer",
    img: "/profile.jpg",
    organization: "Upwork",
    type: "Remote",
    nature: "Contract",
    location: "United Kingdom",
    description: "Designing and implementing software applications and APIs for clients across diverse industries.",
    fullDesc: "Designing and implementing software applications and APIs for clients across diverse industries, including e-commerce, healthcare, and education. Collaborating with cross-functional teams to deliver high-quality products and services, leveraging agile methodologies and best practices. Conducting code reviews, implementing automated testing, and optimizing application performance to ensure scalability and reliability. Contributing to the design and architecture of web applications, APIs, and databases, utilizing modern technologies such as React, TypeScript, Node.js, MongoDB, and TypeScript.",
    technologies: ["React", "TypeScript", "Node.js", "PHP", "SQL", "Express", "Docker", "AWS", "Stripe", "OAuth", "RESTful APIs", "WebSockets", "Shadcn", "Framer-motion", "GitLab CI/CD", "Google Analytics", "Google Optimize", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Figma", "Aceternity UI", "Tailwindcss", "Appwrite", "Clerk"],
  },  
  {
    date: "June 2024 - Present",
    title: "Software Engineer",
    img: "/profile.jpg",
    organization: "SkilledUp Life",
    type: "Remote",
    nature: "Volunteer",
    location: "Ontario, Canada",  
    description: "Assisted in developing enterprise ready software solutions for clients across various industries",
    fullDesc: "Assisted in developing enterprise-ready software solutions for clients across various industries, including e-commerce, healthcare, and education. Collaborated with cross-functional teams to deliver high-quality products and services, leveraging agile methodologies and best practices. Conducted code reviews, implemented automated testing, and optimized application performance to ensure scalability and reliability. Contributed to the design and architecture of web applications, APIs, and databases, utilizing modern technologies such as React, Next.js, Node.js, MongoDB, Clerk, Appwrite and TypeScript.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "PHP", "SQL", "Express", "TypeScript", "Tailwind CSS", "Firebase", "Clerk", "Appwrite", "Vercel", "AWS", "Aceternity UI", "Chakra", "RESTful APIs", "GraphQL", "WebSockets", "GitLab CI/CD", "OAuth",  "Google Analytics", "Google Tag Manager", "Google Optimize", "Hotjar", "Figma", "Adobe XD", "Sketch", "InVision", "Jira", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva", "Stripe", "tawk to"],
  },
  {
    date: "Feb 2020 - Feb 2023",
    title: "Full-stack Developer",
    img: "/profile.jpg",
    organization: "Upwork",
    type: "Remote",
    nature: "Contract",
    location: "United Kingdom",
    description: "Worked on web applications and APIs for clients across various industries",
    fullDesc: "Assisted in developing software solutions for clients across various industries, including e-commerce, healthcare, and education. Collaborated with cross-functional teams to deliver high-quality products and services, leveraging agile methodologies and best practices. Conducted code reviews, implemented automated testing, and optimized application performance to ensure scalability and reliability. Contributed to the design and architecture of web applications, APIs, and databases, utilizing modern technologies such as React, Next.js, Node.js, MongoDB, Clerk, Appwrite, Stripe, TypeScript and many more...",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "Firebase", "Clerk", "Appwrite", "Vercel", "AWS", "Aceternity UI", "Chakra", "RESTful APIs", "GraphQL", "WebSockets", "GitLab CI/CD", "OAuth",  "Google Analytics", "Google Tag Manager", "Google Optimize", "Hotjar", "Figma", "Adobe XD", "Sketch", "InVision", "Jira", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva"],
  },
  {
    date: "Jan 2022 - Aug 2023",
    title: "Software Specialist",
    img: "/profile.jpg",
    organization: "Freelancer",
    type: "Remote",
    nature: "Contract",
    location: "Stockholm County, Sweden",
    description: "Contributed to the development and maintenance of software solutions for clients across diverse industries",
    fullDesc: "Assisted in performing software development tasks, including coding, testing, debugging, and maintenance. Collaborated with team members to design and implement software solutions that met client requirements and specifications. Utilized agile methodologies to deliver high-quality products within project timelines. Conducted code reviews, identified bugs and issues, and implemented fixes to ensure optimal performance. Developed web applications, APIs, and databases using modern technologies such as React, Node.js, MongoDB and TypeScript.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS", "Firebase", "Aceternity UI", "Vercel", "AWS", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "OAuth", "JWT", "RESTful APIs", "GraphQL", "WebSockets", "PWA", "SEO", "Google Analytics", "Google Tag Manager", "Google Optimize", "Hotjar", "Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Jira", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Asana", "Monday.com", "Airtable", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva", "Trello", "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Notion", "Asana", "Monday.com", "Airtable", "Google Workspace", "Microsoft Office", "Adobe Creative Cloud", "Canva"],
  },
];

//==================================  Education data ==============================//
export const education = [
  {
    degree: "Advanced Diploma in Software Engineering",
    institution: "AltSchool Africa",
    date: "2023 - 2024",
    type: "Full-time",
    description: "Specialized in Software engineering - Mean stack, Mern stack, and more...",
    status: "Graduated - Awaiting Certification",
    img: '/cert06.png'
  },
  {
    degree: "Diploma in DevOps Engineering",
    institution: "Alison Institute",
    date: "2021 - 2022",
    type: "Full-time",
    description: "Specialized in DevOps engineering - Kubernetes, Docker, Google-cloud CI/CD pipelines and automation...",
    status: "Graduated - Certified",
    img: '/cert01.jpg'
  },
  {
    degree: "Diploma in Software Project Management", 
    institution: "Alison Institute",  
    date: "2019 - 2020",
    type: "Full-time",
    description: "Specialized in software development project management - Agile, Scrum, Kanban, and more...",
    status: "Graduated - Certified",
    img: '/cert02.png'
  },
];

//================================= Services data  ================================//
export const services: Service[] = [
  {
    id: 1,
    title: "User Registration and Authentication",
    desc: "Secure and seamless user onboarding with email and social media authentication.",
    detailedDesc: {
      paragraphs: [
        "Implement robust user authentication systems using industry-standard protocols like OAuth and JWT.",
        "Whether you need email verification, multi-factor authentication, or social media logins, I provide secure and scalable solutions to ensure that your users have a seamless registration experience.",
        "My services include custom user management dashboards and integration with popular platforms like Firebase, Appwrite, Auth0, or custom backends."
      ],
      images: [
        {
          src: "/authentication02.jpg",
          alt: "User Management Dashboard"
        },
        {
          src: "/authentication.jpg",
          alt: "Multi-Factor Authentication"
        }
      ],
      textDesc: [
      "In today's digital landscape, where data breaches and cyber threats are increasingly prevalent, ensuring robust security measures is paramount. OAuth, a widely adopted open standard for access delegation, exemplifies this commitment to security. By enabling secure, token-based authentication and authorization, OAuth provides a mechanism for applications to access user resources without exposing sensitive credentials.",
      "The significance of OAuth in maintaining security cannot be overstated. It minimizes the risk of credential leakage by eliminating the need for users to share their passwords with third-party applications. Instead, OAuth leverages access tokens that are securely managed and periodically refreshed, reducing the potential for unauthorized access.",
      "In addition to OAuth, JSON Web Tokens (JWT) offer a secure method for transmitting information between parties. JWTs are digitally signed, ensuring data integrity and authenticity. By leveraging JWTs in user authentication processes, developers can enhance security and mitigate the risk of data tampering or interception.",
      "Implementing OAuth and JWT in user authentication systems is essential for safeguarding user data and maintaining trust. By adopting these industry-standard protocols, organizations can enhance security, protect user privacy, and build a foundation of trust with their user base."
      ],
      icons: [
        {
          src: "/OAuth01.png",
          alt: "OAuth Icon"
        },
        {
          src: "/OAuth02.png",  
          alt: "JWT Icon"
        }
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Content Creation and Publishing",
    desc: "Rich text editor for creating and publishing engaging content with ease.",
    detailedDesc: {
      paragraphs: [
        "Develop dynamic content creation platforms that allow users to create, edit, and publish content effortlessly.",
        "I specialize in building intuitive WYSIWYG editors, markdown-based editors, and custom content management systems tailored to your needs.",
        "Whether it's a blogging platform, an article publication site, or a full-fledged content management system (CMS), my solutions are designed for scalability and ease of use."
      ],
      images: [
        {
          src: "/content03.jpg",
          alt: "Content Creation Platform"
        },
        {
          src: "/content.jpg",
          alt: "WYSIWYG Editor"
        }
      ],
      textDesc: [
        "Create a user-friendly interface that supports rich text formatting, image embedding, and media integration.",
        "Ensure seamless content publishing with version control, draft management, and live preview functionalities.",
        "Implement customizable templates and themes to enhance content presentation and user engagement."
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
  id: 3,
  title: "Personalized Content Discovery",
  desc: "Discover new content based on your interests and reading history.",
  detailedDesc: {
    paragraphs: [
      "Leverage advanced algorithms and AI to provide users with personalized content recommendations.",
      "My services include developing recommendation engines that analyze user behavior, preferences, and content interactions to serve up relevant articles, videos, and other media.",
      "Enhance user engagement by helping them discover new and exciting content tailored to their tastes."
    ],
    images: [
      {
        src: "/content.jpg",
        alt: "Content Discovery"
      },
      {
        src: "/AI.png",
        alt: "AI Recommendation Engine"
      }
    ],
    textDesc: [
      "Develop machine learning models to analyze user preferences and predict relevant content.",
      "Integrate real-time data processing to deliver up-to-date content recommendations based on user activity.",
      "Design intuitive interfaces for users to easily discover and interact with personalized content."
    ],
  },
   className: "md:col-span-2",
   thumbnail: "/exp3.svg",
  },

  {
    id: 4,
    title: "Social Interactions",
    desc: "Engage with other users through comments and likes.",
    detailedDesc: {
      paragraphs: [
        "Boost user engagement on your platform by integrating social interaction features such as comments, likes, shares, and more.",
        "I create scalable solutions that foster community building, including real-time comment systems, user-generated content moderation, and integration with social media platforms.",
        "My services ensure that your users can connect, interact, and share seamlessly."
      ],
      images: [
        {
          src: "/socials01.png",
          alt: "Social Interactions"
        },
        {
          src: "/images.jpg", 
          alt: "Comment System"
        }
      ],
      textDesc: [
        "Implement interactive features like comments, likes, and shares to enhance user participation.",
        "Ensure real-time updates and notifications to keep users engaged with ongoing interactions.",
        "Integrate moderation tools to manage and filter user-generated content effectively."
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  }
  
];
