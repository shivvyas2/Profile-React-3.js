import {
  mobile,
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
  pace,
  ordex,
  turnitup,
  citizex,
  ALSM,
  threejs,
  founder,
  youtuber,
  ads,
  futeur,
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
    title: "Mobile Application Developer",
    icon: mobile,
  },

  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Co-Founder",
    icon: founder,
  },
  {
    title: "Youtuber",
    icon: youtuber,
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
    title: "iOS and Android Developer",
    company_name: "theFuteur",
    icon: futeur,
    iconBg: "#111111",
    date: "August 2024 - Now",
    points: [
      "Architected and engineered a cutting-edge mobile application for theFuteur, utilizing React Native to craft a fluid, high-performance experience across iOS and Android platforms, driving seamless accessibility for users.",
      "Integrated sophisticated real-time analytics, leveraging data from Equifax and PayNet to curate dynamic, personalized business credit insights, transforming raw data into actionable intelligence for small businesses.",
      "Pioneered the development of a secure and intuitive subscription ecosystem, optimizing user flows and employing advanced state management to enhance user engagement, leading to a significant uptick in premium subscriptions.",
    ],
  },
  {
    title: "Lab Coordinator Assistant ",
    company_name: "Pace University",
    icon: pace,
    iconBg: "#ffb71b",
    date: "April 2024 - Now",
    points: [
      "Designed the architecture for the lab using Docker, Dockerspawner and Jupyterhub which provide students required computational power for the academic work.",
      "Administered and maintained a diverse computing infrastructure consisting of Windows and Linux (Ubuntu) workstations and servers, ensuring optimal performance and uptime for academic and research activities.",
      "Served as the primary technical support resource for faculty and students, troubleshooting hardware, software, and network issues. Facilitated the installation, configuration, and deployment of essential software applications and data science tools, including JupyterHub and RStudio Server.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Ordex Technology",
    icon: ordex,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Optimized core app flows including login, sign-up, and authentication for Citizex mobile app, improving sign-up rate by 5% and boosting vehicle tracking app engagement by 20% via UX streamlining.",
      "Enhanced React Native app performance through optimization, cutting rendering times by 50% on complex screens.",
      "Supported 5 interns and shared app development insights and foster collaboration.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Autonomous Drone Delivery System",
    icon: ads,
    iconBg: "#000000",
    date: "May 2022 - Dec 2023",
    points: [
      "Developed innovative virtual air highways for drone navigation, enhancing safety and efficiency by preventing collisions.",

      "Engineered a precision delivery system, ensuring reliable and accurate item deliveries using advanced aerial navigation technology.",
      "Implemented real-time collision avoidance algorithms, significantly improving operational safety and minimizing delivery risks.",
    ],
  },
  
  
];



const projects = [
  {
    name: "TurnIt-Up",
    description:
      "Our application allows you to upload assignments and notes of any course that you have taken in the past and share it with the world. In this way, a person regardless of whether they can afford education or the big colleges can now gain access to all the resources from knowledgable professors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: turnitup,
    source_code_link: "https://github.com/shivvyas2/turnitup",
  },
  {
    name: "Citizex",
    description:
      "Citizex is a Microblogging and social networking service, where verified users can post and respond to reviews. Users can also see the representatives of their respective areas (Local, State, or National Level).",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: citizex,
  },
  {
    name: "ALSM",
    description:
      "An algorithm-less social media. A social media that enhances the productivity of a person.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: ALSM,
    source_code_link: "https://github.com/shivvyas2/conspersa",
  },
];

export { services, technologies, experiences, projects };