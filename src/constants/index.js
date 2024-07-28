import project1 from "../assets/assets/projects/project-1.jpg";
import project2 from "../assets/assets/projects/project-2.jpg";
import hotel from "../assets/assets/projects/hotel.png";
import task from "../assets/assets/projects/task.jpeg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React.js and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React.js, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "Feb,2024 - Present",
    role: "Full Stack Web Developer Intern",
    company: "Techuz Infoweb Pvt. Ltd.",
    description: `Utilized React.js, Next.js, Node.js, and Express.js to develop web applications, gaining full lifecycle experience. Collaborated with senior developers to implement best coding practices and deployment strategies.`,
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "HTML",
      "CSS",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    year: "May, 2023 - July, 2023",
    role: "Front-end Web Developer Intern",
    company: "Cloud Ladder Consulting",
    description: `Led dynamic website design with HTML/CSS for front-end and Django for back-end, enhancing user engagement and usability with responsive interfaces.`,
    technologies: ["HTML", "CSS", "Javascript", "Django"],
  },
  {
    year: "May 2022 - June 2022",
    role: "Android Developer Intern",
    company: "BrainyBeam Technologies Pvt. Ltd.",
    description: `Worked on developing and enhancing features of an e-commerce application. Implemented user authentication, product listing, and shopping cart functionalities using Java and Android Studio.`,
    technologies: ["Java", "Android Studio", "REST APIs"],
  },
];

export const PROJECTS = [
  {
    title: "Taskify: Full-Stack Task Management Application",
    image: task,
    description:
      "Developed a full-stack web app with React.js, Express.js, and MySQL, featuring authentication, task management, and form validation. Designed admin interfaces and user dashboards with Redux Toolkit.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Redux Toolkit",
    ],
  },
  {
    title: "QuickLink: Easy File Sharing Platform",
    image: project2,
    description:
      "Created a file transfer platform for secure file sharing with MongoDB for metadata storage, emphasizing intuitive UI/UX design for enhanced user experience.",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
  },
  {
    title: "The Wild Oasis: Hotel Booking Website",
    image: hotel,
    description:
      "Developed a hotel booking website using Next.js and Supabase, featuring Google Sign-In functionality. The platform allows users to search for hotels, view details, and make bookings seamlessly.",
    technologies: ["Next.js", "Supabase", "JavaScript", "React.js"],
  },
  {
    title: "OptiMem: Virtual Memory Optimization Engine",
    image: project1,
    description:
      "Developed a memory optimization app with FIFO, LRU, and OPT algorithms, featuring real-time analytics and a user-friendly algorithm selection UI.",
    technologies: ["Java", "Android Studio"],
  },
];

export const CONTACT = {
  address: "Surat, Gujarat, India",
  phoneNo: "+91-6359020572",
  email: "arpitdobariya23@gmail.com",
};
