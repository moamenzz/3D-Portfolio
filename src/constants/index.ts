import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

interface NavLink {
  name: string;
  link: string;
}

interface Word {
  text: string;
  imgPath: string;
}

interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

export interface LogoIcon {
  imgPath: string;
  name?: string;
}

interface Ability {
  imgPath: string;
  title: string;
  desc: string;
}

interface TechStack {
  name: string;
  imgPath: string;
}

export interface TechStackIcon {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}

export interface ExpCard {
  id: number;
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

interface ExpLogo {
  name: string;
  imgPath: string;
}

export interface Testimonial {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

interface SocialImg {
  name: string;
  iconElement?: React.ReactNode;
  imgPath?: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Coursemedia - LMS Platform",
    des: "Learning Management System (LMS) platform designed to facilitate online learning by providing tools for course creation, user management, and content delivery. It supports different user roles, including students and instructors, and offers a responsive, intuitive interface for both desktop and mobile users.",
    img: "/images/Coursemedia-cover.PNG",
    iconLists: [
      "/images/logos/ts.svg",
      "/images/logos/re.svg",
      "/images/logos/node.svg",
      "/images/logos/mongo.svg",
      "/images/logos/tail.svg",
    ],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Spotify Clone – Music Streaming App",
    des: "Spotify Clone is a music streaming platform where users can browse, play, and manage music playlists. The app mimics core features of Spotify, providing an engaging audio experience with a modern and responsive UI.",
    img: "/images/Spotify-cover.PNG",
    iconLists: [
      "/images/logos/ts.svg",
      "/images/logos/re.svg",
      "/images/logos/node.svg",
      "/images/logos/mongo.svg",
      "/images/logos/tail.svg",
    ],
    link: "/ui.apple.com",
  },
  {
    id: 3,
    title: "Todoist – Task Management App",
    des: "Todoist is a productivity-focused to-do list application that helps users manage tasks efficiently. Users can create, update, and categorize tasks with due dates, priorities, and completion statuses.",
    img: "/images/Todoist-cover.PNG",
    iconLists: [
      "/images/logos/ts.svg",
      "/images/logos/re.svg",
      "/images/logos/node.svg",
      "/images/logos/mongo.svg",
      "/images/logos/tail.svg",
    ],
    link: "/ui.apple.com",
  },
  {
    id: 4,
    title: "XClone - Social Media Application",
    des: "XClone is a full-stack social media platform inspired by Twitter (formerly known as X). Users can sign up, create posts (tweets), follow other users, like content, and interact in real time. It offers a sleek and responsive UI that mimics a modern social experience with notifications and a personalized feed.",
    img: "/images/XClone-cover.PNG",
    iconLists: [
      "/images/logos/js.svg",
      "/images/logos/re.svg",
      "/images/logos/node.svg",
      "/images/logos/mongo.svg",
      "/images/logos/tail.svg",
    ],
    link: "/ui.yoom.com",
  },
  {
    id: 5,
    title: "Blogify – Blogging Platform",
    des: "Blogify is a full-stack blogging application that allows users to create, publish, and read blogs. Users can upload images, write formatted content, and explore blogs posted by other users in a clean, content-focused layout.",
    img: "/images/Blogify-cover.PNG",
    iconLists: [
      "/images/logos/js.svg",
      "/images/logos/re.svg",
      "/images/logos/node.svg",
      "/images/logos/mongo.svg",
      "/images/logos/tail.svg",
    ],
    link: "/ui.aiimg.com",
  },
  {
    id: 6,
    title: "Chatty – Real-Time Messaging Application",
    des: "Chatty is a real-time messaging application that enables users to communicate instantly through private and group chats. Built with the MERN stack and powered by WebSocket technology, the app ensures fast and smooth communication with live message updates.",
    img: "/images/Chatty-cover.PNG",
    iconLists: [
      "/images/logos/js.svg",
      "/images/logos/re.svg",
      "/images/logos/node.svg",
      "/images/logos/mongo.svg",
      "/images/logos/tail.svg",
    ],
    link: "/ui.aiimg.com",
  },
  {
    id: 7,
    title: "Dankeschön – Real Estate Platform",
    des: "Dankeschön is a real estate listing application where users can post their properties for rent and connect with others interested in renting. The platform enables property browsing, listing management, and direct communication between users.",
    img: "/images/Dankeschon-cover.PNG",
    iconLists: [
      "/images/logos/ts.svg",
      "/images/logos/re.svg",
      "/images/logos/node.svg",
      "/images/logos/mongo.svg",
      "/images/logos/tail.svg",
    ],
    link: "/ui.aiimg.com",
  },
];

const navLinks: NavLink[] = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words: Word[] = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems: CounterItem[] = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 18, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList: LogoIcon[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities: Ability[] = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs: TechStack[] = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons: TechStackIcon[] = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards: ExpCard[] = [
  {
    id: 1,
    review:
      "Moamen demonstrated exceptional backend and API design skills. His attention to detail and secure authentication system helped us deliver a product that felt both professional and reliable",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "February 2024 - March 2024",
    responsibilities: [
      "Designed and implemented a modern Hostinger clone using React and Tailwind CSS, focusing on responsive design and accessibility.",
      "Implemented user role management and JWT-based secure login system for simulated user accounts.",
      "Created a dark mode toggle with persistent theme using localStorage and React Context API.",
    ],
  },
  {
    id: 2,
    review:
      "Moamen brought a sharp eye for modern UI and seamless interactivity. His work on real-time functionality made the clone feel dynamic and engaging. He balanced performance and design like a true full-stack engineer",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "July 2024 - June 2024",
    responsibilities: [
      "Containerized a full-stack MERN application with Docker for consistent local and production environments.",
      "Created efficient Dockerfiles and docker-compose.yml to orchestrate frontend, backend, and MongoDB services.",
      "Optimized build processes and enabled seamless deployment to cloud environments.",
    ],
  },
  {
    id: 3,
    review:
      "Moamen’s creativity and technical depth were key to replicating the feel of a world-class streaming platform. From smooth frontend transitions to user-role management, he delivered high-quality code and UX",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Full Stack Developer",
    date: "Aug 2024 - Sept 2024",
    responsibilities: [
      "Integrated Appwrite as a backend service to manage user authentication, databases, and storage for a modern web app.",
      "Implemented secure user registration, login, and session handling using Appwrite’s Auth API",
      "Designed and connected frontend components to Appwrite collections via SDK, enabling real-time content management without custom server code.",
    ],
  },
];

const expLogos: ExpLogo[] = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Jacob Reynolds",
    mentions: "@jacobreyn",
    review:
      "Moamen’s work exceeded all expectations. Reliable, fast, and clean code throughout. all while staying professional, proactive, and detail-oriented.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Ándres López",
    mentions: "@ándrescodes",
    review:
      "He brought clarity and structure to our chaotic ideas. His technical expertise and calm attitude under pressure made the entire process smooth and enjoyable. A real asset to any tech team",
    imgPath: "/images/client3.png",
  },
  {
    name: "Jamal Ortiz",
    mentions: "@jamaldevs",
    review:
      "Every milestone was delivered on time, and the quality was always top-tier. Moamen's dedication to excellence and attention to detail is commendable. He's a true professional in the tech industry",
    imgPath: "/images/client2.png",
  },
  {
    name: "Jordan Yoon",
    mentions: "@jordanyoontech",
    review:
      "I was impressed by Moamen’s ability to simplify complex problems and build elegant solutions. He made sure everyone on the team stayed aligned and brought a lot of clarity to the project.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Kevin Blake",
    mentions: "@kevbldev",
    review:
      "Great communicator, efficient developer, and highly dependable under pressure. He was focused, responsive, and always thinking ahead. ",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Moamen was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socials: SocialImg[] = [
  {
    name: "github",
    imgPath: "/images/logos/github.png",
    iconElement: React.createElement(FaSquareGithub, { size: 30 }),
    link: "https://github.com/moamenzz",
  },
  {
    name: "discord",
    imgPath: "/images/logos/discord.png",
    iconElement: React.createElement(IoLogoDiscord, { size: 30 }),
    link: "https://discord.com/users/422389211535114240",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    iconElement: React.createElement(FaSquareXTwitter, { size: 30 }),
    link: "https://twitter.com/moamenzz",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    iconElement: React.createElement(FaLinkedin, { size: 30 }),
    link: "https://www.linkedin.com/in/moamen-muhammed-18a9b7223/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socials,
  techStackIcons,
  techStackImgs,
  navLinks,
};
