import { Skill, Project, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const skillsData: Skill[] = [
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: 'html5',
    color: '#e34f26',
    level: 95,
    description: 'Semantic markup, accessibility standards, SEO-friendly architecture, and modern web content structures.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.3 6.078H6.55l.4 4.532h9.7l-.44 4.978-4.21 1.184-4.21-1.184-.28-3.111H5.11l.54 6.223L12 21.078l6.35-1.781.95-10.719.1-2.5H18.8z'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    icon: 'css3',
    color: '#1572b6',
    level: 90,
    description: 'Advanced flexbox/grid layouts, keyframe animations, responsive design, and custom property theming.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.03 6.023H5.161l.542 6.094h10.323l-.446 4.978-3.58 1.01-3.58-1.01-.226-2.583H5.776l.39 4.417L12 21.14l5.834-1.642.846-9.539.15-1.666v-.27z'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'wind',
    color: '#38bdf8',
    level: 95,
    description: 'Utility-first styling framework, responsive design systems, custom component abstraction, and rapid prototyping.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z'
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: 'javascript',
    color: '#f7df1e',
    level: 90,
    description: 'ES6+ syntax, DOM manipulation, asynchronous programming, closures, and functional programming patterns.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M0 0h24v24H0V0zm20.337 18.21c-.347-.738-.9-1.293-2.115-1.611-1.144-.31-1.423-.556-1.423-.974 0-.41.343-.694.945-.694.618 0 1.018.287 1.343.812l2.302-1.46c-.663-1.225-1.751-1.944-3.583-1.944-2.1 0-3.6 1.154-3.6 3.018 0 1.944 1.225 2.656 3.253 3.125 1.353.313 1.62.637 1.62 1.125 0 .544-.457.85-1.181.85-.894 0-1.488-.413-1.875-1.137l-2.313 1.35c.712 1.488 2.05 2.306 4.144 2.306 2.519 0 3.863-1.225 3.863-3.237 0-2.125-1.144-2.738-3.175-3.163zM11.5 13.5v-2h-3v8c0 1.413-.423 2.1-1.637 2.1-.925 0-1.413-.4-1.763-1.05l-2.05 1.25c.613 1.25 1.7 1.9 3.8 1.9 2.875 0 4.65-1.525 4.65-4.2v-6h3z'
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: 'typescript',
    color: '#3178c6',
    level: 80,
    description: 'Type-safe development, interface design, generics, decorators, and large-scale application architecture.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: 'react',
    color: '#61dafb',
    level: 85,
    description: 'Component-based architecture, hooks, state management, virtual DOM, and modern UI development.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M24 10.518c0-.306-.188-.635-.55-.918-.624-.483-1.638-.853-2.885-1.04-.51-.077-1.066-.118-1.656-.123l.115-.55c.164-.784.34-1.564.524-2.324.368-1.514.71-2.878.966-3.923a1.455 1.455 0 0 0-.256-1.157 1.153 1.153 0 0 0-.84-.442 1.42 1.42 0 0 0-.312-.008c-.732.062-1.743.435-2.846 1.05-.445.249-.916.536-1.41.855l.394-.412c.563-.591 1.127-1.196 1.681-1.794.945-1.023 1.727-2.023 2.213-2.831a1.272 1.272 0 0 0 .19-.882.998 0 0 0-.64-.775h-.001a1.134 1.134 0 0 0-.285-.028c-.623 0-1.472.333-2.395.932-.372.242-.77.525-1.192.845l.235-.515c.334-.732.668-1.474.992-2.201.554-1.24.996-2.397 1.267-3.238a1.214 1.214 0 0 0-.104-1.042.923.923 0 0 0-.712-.491c-.13-.016-.27-.015-.4 0-.675.074-1.547.456-2.456 1.077-.367.25-.76.544-1.176.877l.044-.548c.063-.787.125-1.58.18-2.355.093-1.32.146-2.527.135-3.418a1.2 1.2 0 0 0-.41-.95 1.01 1.01 0 0 0-.82-.25H12c-.524.048-1.144.316-1.77.78-.25.187-.514.4-.79.643l-.128-.535c-.183-.761-.383-1.517-.597-2.245-.365-1.242-.73-2.378-1.054-3.18-.173-.427-.474-.754-.852-.924A1.085 1.085 0 0 0 8 0c-.07 0-.142.003-.213.01C7.14.072 6.368.396 5.58.911c-.317.207-.655.446-.998.71l.277-.488c.394-.694.792-1.4 1.171-2.09.645-1.178 1.15-2.227 1.433-2.953a1.107 1.107 0 0 0-.012-1.04c-.2-.367-.547-.614-.94-.672a1.08 1.08 0 0 0-.256-.008c-.628.051-1.398.375-2.17.915a31.393 31.393 0 0 0-.962.72l.394-.412c.56-.591 1.12-1.2 1.666-1.796.883-.966 1.583-1.87 2.01-2.576.242-.4.32-.871.212-1.3a.92.92 0 0 0-.698-.671c-.1-.013-.205-.013-.306-.002-.577.065-1.248.39-1.928.917a26.046 26.046 0 0 0-.86.721l.462-.33c.66-.47 1.32-.953 1.954-1.42 1-.737 1.8-1.432 2.292-1.996a1.104 1.104 0 0 0 .285-1.002.859.859 0 0 0-.585-.64h-.002a.965.965 0 0 0-.27 0c-.513.064-1.114.37-1.74.872a27.172 27.172 0 0 0-1.84 1.666 56.66 56.66 0 0 0-1.9 2.032M12 8.3c-2.043 0-3.7 1.657-3.7 3.7s1.657 3.7 3.7 3.7 3.7-1.657 3.7-3.7-1.657-3.7-3.7-3.7z'
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: 'nextjs',
    color: '#000000',
    level: 75,
    description: 'Server-side rendering, static site generation, API routes, file-based routing, and full-stack React applications.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.651 18.732l-6.85-8.835v8.835h-1.636v-11.432h1.62l6.732 8.705v-8.705h1.637v11.432h-1.503zm-1.554-4.821l-1.285-1.68c.84-.576 1.388-1.547 1.388-2.628 0-1.782-1.439-3.213-3.213-3.213h-3.418v1.614h3.418c.883 0 1.599.716 1.599 1.599 0 .884-.716 1.6-1.599 1.6h-1.621l4.731 6.322z'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: 'node',
    color: '#339933',
    level: 80,
    description: 'Event-driven architecture, RESTful API development, Express.js, middleware integration, and microservices.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M12 2.375L3.325 7.375v10l8.675 5 8.675-5v-10L12 2.375zm5.7 13.5l-1.3.75v-6.5l-4.4-2.525-4.4 2.525v5l-1.3-.75v-6.5l5.7-3.275 5.7 3.275v8z'
  },
  {
    name: 'Python',
    category: 'Language',
    icon: 'python',
    color: '#3776ab',
    level: 80,
    description: 'Data processing, automation scripts, algorithmic problem-solving, and clean, readable code practices.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M11.955 0C5.352 0 5.6 2.862 5.6 2.862l.006 2.949H12v.418H4.636S2 5.922 2 12.06c0 6.14 2.311 5.952 2.311 5.952l2.065-.003v-2.91s-.075-3.489 3.485-3.489h4.06s3.18-.04 3.18-3.083V4.86S17.433 0 11.955 0zm-3.21 1.662c.504 0 .913.409.913.913 0 .504-.41.913-.913.913a.913.913 0 0 1-.913-.913c0-.504.409-.913.913-.913zM12.045 24c6.603 0 6.355-2.862 6.355-2.862l-.006-2.949H12v-.418h7.364s2.636.307 2.636-5.83c0-6.14-2.311-5.952-2.311-5.952l-2.065.003v2.91s.075 3.489-3.485 3.489h-4.06s-3.18.04-3.18 3.082V19.14S6.567 24 12.045 24zm3.21-1.662a.913.913 0 1 1 0-1.826.913.913 0 0 1 0 1.826z'
  },
  {
    name: 'Git',
    category: 'Tools & Design',
    icon: 'git',
    color: '#f05032',
    level: 88,
    description: 'Version control, branching strategies, collaborative workflows, conflict resolution, and CI/CD pipelines.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M23.546 10.93L13.07 1.453a2.44 2.44 0 0 0-3.414 0L7.545 3.562l3.417 3.418a2.41 2.41 0 0 1 3.57 3.57l3.195 3.194a2.41 2.41 0 1 1-1.34 1.34L13.19 11.89a2.41 2.41 0 0 1-3.57-3.57l-1.92-1.92-3.834 3.834a2.44 2.44 0 0 0 0 3.414l10.476 10.476a2.44 2.44 0 0 0 3.414 0l10.8-10.8a2.44 2.44 0 0 0 0-3.414z'
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    icon: 'database',
    color: '#47A248',
    level: 75,
    description: 'NoSQL database design, document-oriented storage, aggregation pipelines, indexing, and schema flexibility.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M12 0c0 0-6.136 5.852-6.136 11.16C5.864 17.51 9.273 21.364 12 24c2.727-2.636 6.136-6.49 6.136-12.84C18.136 5.852 12 0 12 0zm.682 20.318c-1.295.614-2.818.068-3.41-.955a8.775 8.775 0 0 1-.886-3.886c0-2.432 1.41-5.182 4.296-7.818v12.66z'
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    icon: 'database',
    color: '#336791',
    level: 70,
    description: 'Relational database management, complex queries, ACID compliance, foreign keys, and data integrity.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l5.5 4.5-5.5 4.5z'
  },
 {
    name: 'C++',
    category: 'Language',
    icon: 'cpp',
    color: '#00599C',
    level: 80,
    description: 'System programming, memory management, object-oriented design, algorithms, and data structures.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M21.75 6.75H19.5V4.5h-1.5v2.25H15.75v1.5H18V10.5h1.5V8.25h2.25v-1.5zm-4.5 9h-2.25V13.5h-1.5v2.25H11.25v1.5H13.5v2.25h1.5v-2.25h2.25v-1.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.31c-2.4 0-4.14-1.74-4.14-4.11 0-2.43 1.74-4.14 4.14-4.14 1.44 0 2.52.69 3.09 1.56l-1.32.78c-.36-.57-.96-.93-1.77-.93-1.41 0-2.43 1.08-2.43 2.73 0 1.62.99 2.7 2.43 2.7.84 0 1.41-.39 1.83-.99l1.32.75c-.66.99-1.8 1.65-3.15 1.65z'
  },
  {
    name: 'Java',
    category: 'Language',
    icon: 'java',
    color: '#007396',
    level: 80,
    description: 'Object-oriented programming, enterprise applications, JVM ecosystem, and robust backend systems.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M1.8 15.3c-.3 0-.5.1-.5.3s.2.3.5.3H6c1.1-.1 2.3-.5 3.3-1.1-2.6.4-5.2.5-7.5.5zm11.2 5.1c-4.4 1.1-9.2.7-12.2-.4.8.6 2.5 1 4.5 1.1 3.5.1 7.1-.6 7.7-.7zm-1.5-3.3c-2 .7-4.4 1.1-6.9 1-2.2-.1-3.6-.5-3.6-.5s1.3.5 3.6.5c3.2.1 6-.5 6.9-1zm2.3-5.5s.4-1.2-1.3-2.4c-1.8-1.3-4.6-1.5-4.6-1.5s2.9.2 4.1 1.4c1.1 1.1.8 2.5.8 2.5zm2.4-3.1c-1.3-1.2-3.1-2.5-.7-5s4.2 3.8 1.7 6.1c-1.2 1.1-1 2.1-1 2.1s.7-1.1 1.6-1.8c2.4-1.9 1-4.7-1.6-6.4zm-6.1 7.6c1.8-.2 3.6-.6 5.3-1.3-.9-.6-2-1-3.3-1-2.7 0-4.7 1.4-5.1 3.2 1-.4 2.1-.7 3.1-.9zm-6.2 1.5c1.4-.2 2.8-.2 4.3-.1.6 0 1.2.1 1.8.2.2-1-.5-1.9-2-2.1-2.1-.3-3.8.8-4.1 2zm11.2-3.6c2.4-1.5.8-3.8-1.5-4.5 1 .9 1.4 2.2-.1 3.4-1.6 1.3-.5 2.5.2 2.4.9-.1 1-.8.9-1.3z'
  },
  {
    name: 'C#',
    category: 'Language',
    icon: 'csharp',
    color: '#239120',
    level: 75,
    description: 'Component-oriented development, enterprise architecture, .NET framework, and Windows application building.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M24 12c0 6.627-5.373 12-12 12S0 19.373 0 12 5.373 0 12 0s12 5.373 12 12zM9.42 16.51c1.92 0 3.39-.62 4.14-1.64l-1.5-1.28c-.53.64-1.42 1.05-2.54 1.05-1.97 0-3.36-1.43-3.36-3.41s1.39-3.41 3.36-3.41c1.12 0 2.01.42 2.54 1.05l1.5-1.27C12.81 6.58 11.34 5.95 9.42 5.95c-3.45 0-5.91 2.45-5.91 5.98s2.46 5.98 5.91 5.98zm11.72-6.43h-2.12l.44-2.12h-1.2l-.44 2.12h-1.63l.44-2.12h-1.2l-.44 2.12H13.1l-.24 1.13h2.12l-.44 2.12h-2.13l-.24 1.13h2.13l-.44 2.13h1.2l.44-2.13h1.63l-.44 2.13h1.2l.44-2.13h2.12l.24-1.13h-2.12l.44-2.12h2.12l-.24-1.13zm-4.18 3.25h-1.63l.44-2.12h1.63l-.44 2.12z'
  },
  {
    name: 'Figma',
    category: 'Tools & Design',
    icon: 'figma',
    color: '#F24E1E',
    level: 75,
    description: 'UI/UX design, rapid prototyping, component libraries, design systems, and collaborative workflows.',
    svgViewBox: '0 0 24 24',
    svgPath: 'M8.5 24c2.485 0 4.5-2.015 4.5-4.5v-4.5H8.5C6.015 15 4 17.015 4 19.5S6.015 24 8.5 24zM4 12c0-2.485 2.015-4.5 4.5-4.5H13v9H8.5C6.015 16.5 4 14.485 4 12zm4.5-4.5C6.015 7.5 4 5.485 4 3S6.015-1.5 8.5-1.5H13v9H8.5zm4.5 0V3c0-2.485 2.015-4.5 4.5-4.5S22 .515 22 3s-2.015 4.5-4.5 4.5H13zm0 9V7.5h4.5C19.985 7.5 22 9.515 22 12s-2.015 4.5-4.5 4.5H13z'
  }
];

export const projectsData: Project[] = [
  {
    id: 'p1',
    title: 'Agantuk – NGO Management',
    description: 'Developed a responsive web platform for a non-profit organization using HTML, Tailwind CSS, and JavaScript. The website features a blood donor search and registration system integrated with Google Sheets API, project showcase gallery, volunteer and donation sections, admin authentication, and interactive UI components to support social service activities and community engagement.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
    imageUrl: 'assets/p1.png',
    projectUrl: 'https://agantukbd.netlify.app/',
    githubUrl: 'https://github.com/AdnanAhamedArif',
    role: 'Full-Stack Coder',
    date: 'Jan 2026'
  },
  {
    id: 'p2',
    title: 'Restaurant Management System 🍽️',
    description: 'A Java Swing-based application for managing restaurant orders, billing, and inventory with an intuitive GUI interface.',
    tags: ['Java'],
    imageUrl: 'assets/p2.png',
    projectUrl: 'https://github.com/adnanahamedarif/Restaurant-Management-System-',
    githubUrl: 'https://github.com/adnanahamedarif/Restaurant-Management-System-',
    role: 'Full-Stack Coder',
    date: 'Dec 2025'
  },
  {
    id: 'p3',
    title: 'Fund Management System',
    description: 'A responsive fund management platform featuring an interactive financial dashboard, real-time data analytics via Chart.js, a secure admin control panel, and automated WhatsApp confirmation workflows.',
    tags: ['HTML', 'CSS3', 'JavaScript'],
    imageUrl: 'assets/p3.png',
    projectUrl: 'https://agantukfundmanager.netlify.app/',
    githubUrl: 'https://github.com/AdnanAhamedArif',
    role: 'Full-Stack Coder',
    date: 'Nov 2025'
  },
  {
    id: 'p4',
    title: 'Blood Bank Platform',
    description: 'A mobile-responsive web application connecting blood seekers with regional donors. Features include dynamic JavaScript search queries, real-time donor filtering, a secure self-registration system with Google Apps Script API integration, duplication checks, and instant click-to-call functionality.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: 'assets/p4.png',
    projectUrl: 'https://agantukbloodbank.netlify.app/',
    githubUrl: 'https://github.com/AdnanAhamedArif',
    role: 'Full-Stack Coder',
    date: 'Oct 2025'
  },
  {
    id: 'p5',
    title: 'Obstacle-Avoiding Robot',
    description: 'An Arduino-powered robotic vehicle featuring an ultrasonic sensor mounted on a micro-servo motor for real-time distance scanning and autonomous navigation.',
    tags: ['Arduino', 'C++','Robotics','Hardware Prototyping'],
    imageUrl: 'assets/p5.jpg',
    projectUrl: '#',
    githubUrl: 'https://github.com/AdnanAhamedArif',
    role: 'Lead Developer',
    date: 'Aug 2023'
  },
  {
    id: 'p6',
    title: 'Custom Quadcopter',
    description: 'An F450-class quadcopter built for stable aerial flight, configured with a multi-axis flight controller, high-efficiency brushless motors, and an integrated multi-channel RF transmitter system for real-time remote telemetry.',
    tags: ['Flight Controllers', 'RF Communication', 'Robotics', 'Git'],
    imageUrl: 'assets/p6.jpg',
    projectUrl: '#',
    githubUrl: 'https://github.com/AdnanAhamedArif',
    role: 'Lead Developer',
    date: 'Jul 2021'
  }
];
