import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";


//============================= Home Page Navigation links ============================//
export const navigation = [
  { name: 'About', href: '#About' },
  { name: 'Services', href: '#Services' },
  { name: 'Experience', href: '#Experience' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Approach', href: '#Approach' },
    { name: 'Clients', href: '#Clients' },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "relative lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[80vh] overflow-hidden",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "absolute bottom-0 left-0 right-0 p-4 text-white justify-end z-10",
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

//========================== Work Experience Section Data ==========================//
export const services  = [
    {
        id: 1,
        title: "User Registration and Authentication",
        desc: "Secure and seamless user onboarding with email and social media authentication.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Content Creation and Publishing",
        desc: "Rich text editor for creating and publishing engaging content with ease.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Personalized Content Discovery",
        desc: "Discover new content based on your interests and reading history.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Social Interactions",
        desc: "Engage with other users through comments and likes..",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    ];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/project01.avif",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/project02.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/project03.avif",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project04.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project05.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 6,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project06.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 7,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project07.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 8,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project08.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 9,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project09.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 10,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project10.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 11,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project11.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 12,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project12.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 13,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project13.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 14,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project14.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 15,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project15.avif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

//===============================  Testimonials Section Data ================================//
export const testimonials = [
    {
      quote: "Our experience with Chatter has been transformative. Sixtus’s platform has significantly streamlined our communication and project management. His prompt responses and the intuitive design of Chatter have truly elevated our team's productivity and collaboration, making it an indispensable tool for us.",
      fullQuote: "Our experience with Chatter has been transformative. Sixtus’s platform has significantly streamlined our communication and project management. His prompt responses and the intuitive design of Chatter have truly elevated our team's productivity and collaboration, making it an indispensable tool for us. We are extremely grateful for this tool.",
      name: "Michael Benjamin",
      title: "Co-Founder / CTO at Pestins Ltd",
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/profile.svg",
      rating: 4,
    },
    {
      quote: "Chatter has been a game-changer for our design team. The platform's seamless integration and user-friendly interface have allowed us to collaborate more effectively and efficiently. Sandra's commitment to using Chatter has resulted in a more cohesive and creative team, driving our design projects to new heights.",
      fullQuote: "Chatter has been a game-changer for our design team. The platform's seamless integration and user-friendly interface have allowed us to collaborate more effectively and efficiently. Sandra's commitment to using Chatter has resulted in a more cohesive and creative team, driving our design projects to new heights. We are thrilled with the results and look forward to continuing our partnership with Chatter.",
      name: "Sandra Ankana",
      title: "Lead Designer at Google",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
      rating: 5,
    },
    {
      quote: "Chatter's advanced features have been invaluable for our SEO strategies. The platform's insightful analytics and ease of use have enabled Stephenie to implement more effective SEO campaigns. Chatter has been a crucial part of our growth strategy, thanks to its powerful tools and user-centric design.",
      fullQuote: "Chatter's advanced features have been invaluable for our SEO strategies. The platform's insightful analytics and ease of use have enabled Stephenie to implement more effective SEO campaigns. Chatter has been a crucial part of our growth strategy, thanks to its powerful tools and user-centric design. We couldn't have achieved our goals without it.",
      name: "Stephenie Bruce",
      title: "SEO Specialist at Pinacle",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials03.jpg",
      rating: 3,
    },
    {
      quote: "Working with Chatter has revolutionized our frontend development process. Freedom's integration of Chatter into our workflow has enhanced our UI significantly. The platform’s features are not only robust but also flexible, allowing us to create a more engaging user experience.",
      fullQuote: "Working with Chatter has revolutionized our frontend development process. Freedom's integration of Chatter into our workflow has enhanced our UI significantly. The platform’s features are not only robust but also flexible, allowing us to create a more engaging user experience. We are excited about the future developments and improvements Chatter will bring to our projects.",
      name: "Freedom Amos",
      title: "Frontend Engineer at Pinacle",
      imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials04.jpg",
      rating: 5,
    },
    {
      quote: "Chatter has greatly improved our data analysis and decision-making processes. Ella's use of the platform has enabled her to extract valuable insights and collaborate more effectively. Chatter’s analytical tools and intuitive design have made a substantial difference in our data-driven strategies.",
      fullQuote: "Chatter has greatly improved our data analysis and decision-making processes. Ella's use of the platform has enabled her to extract valuable insights and collaborate more effectively. Chatter’s analytical tools and intuitive design have made a substantial difference in our data-driven strategies. We are very satisfied with the performance and efficiency it brings to our operations.",
      name: "James Markson",
      title: "Data Analyst at Amazon",
      imageUrl: "/user05.jpg",
      fallbackImageUrl: "/user05.jpg",
      rating: 3,
    },
    {
      quote: "Chatter has greatly improved our data analysis and decision-making processes. Ella's use of the platform has enabled her to extract valuable insights and collaborate more effectively. Chatter’s analytical tools and intuitive design have made a substantial difference in our data-driven strategies.",
      fullQuote: "Chatter has greatly improved our data analysis and decision-making processes. Ella's use of the platform has enabled her to extract valuable insights and collaborate more effectively. Chatter’s analytical tools and intuitive design have made a substantial difference in our data-driven strategies. We are very satisfied with the performance and efficiency it brings to our operations.",
      name: "Daniel Donald",
      title: "Data Analyst at Amazon",
      imageUrl: "/user01.jpg",
      fallbackImageUrl: "/user01.jpg",
      rating: 5,
    },
    {
      quote: "Chatter has greatly improved our data analysis and decision-making processes. Ella's use of the platform has enabled her to extract valuable insights and collaborate more effectively. Chatter’s analytical tools and intuitive design have made a substantial difference in our data-driven strategies.",
      fullQuote: "Chatter has greatly improved our data analysis and decision-making processes. Ella's use of the platform has enabled her to extract valuable insights and collaborate more effectively. Chatter’s analytical tools and intuitive design have made a substantial difference in our data-driven strategies. We are very satisfied with the performance and efficiency it brings to our operations.",
      name: "Andofa Jameson",
      title:"S.Software specialist at Fintech",
      imageUrl: "/profile02.jpeg",
      fallbackImageUrl: "/profile02.jpeg",
      rating: 4,
    },
  ];

// data/experienceData.js

export const experiences = [
  {
    date: "March 2023 - Present",
    title: "Software Engineer",
    location: "Upwork",
    type: "Remote",
    description: "Working on web applications...",
  },
  {
    date: "June 2024 - Present",
    title: "Software Engineer",
    location: "SkilledUp Life",
    type: "Remote",
    description: "Worked on mobile apps...",
  },
  {
    date: "Feb 2020 - Feb 2023",
    title: "Full-stack Developer",
    location: "Upwork",
    type: "Remote",
    description: "Assisted in developing software solutions...",
  },
  {
    date: "Jan 2022 - Aug 2023",
    title: "Software Specialist",
    location: "Freelance",
    type: "Remote",
    description: "Assisted in developing software solutions...",
  },
];