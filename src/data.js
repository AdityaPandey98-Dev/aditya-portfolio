export const profile = {
  name: 'Aditya Kumar Pandey',
  title: 'Java Full Stack Developer',
  tagline: 'Building resilient, cloud-native microservices with Java, Spring Boot, Kafka and React.js.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'adityapandey98.dev@gmail.com',
  phone: '+91 8217789132',
  github: 'https://github.com/adityapandey98-dev',
  website: 'adityapandey98.dev',
}

export const gmailComposeUrl = (to, subject = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}${
    subject ? `&su=${encodeURIComponent(subject)}` : ''
  }`

export const stats = [
  { label: 'Years of experience', value: '3.4+' },
  { label: 'Key projects shipped', value: '3' },
  { label: 'Core technologies', value: '15+' },
  { label: 'Architecture style', value: 'Microservices' },
]

export const about = `Results-driven Java Full Stack Developer with 3.4 years of experience designing, developing, and deploying scalable enterprise applications using Java, Spring Boot, Spring Cloud, Microservices, and React.js. Experienced in building secure RESTful APIs, distributed systems, and cloud-native applications leveraging Spring Security, JWT, OAuth2, Kafka, RabbitMQ, Redis, Docker, Kubernetes, AWS, and CI/CD. Strong expertise in SOLID principles, design patterns, clean architecture, Agile/Scrum, TDD, and modern AI integration using Spring AI, OpenAI GPT, Google Gemini, MCP, and Retrieval-Augmented Generation (RAG).`

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java 8', 'Java 17', 'Java 21', 'Java 25+', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Spring MVC', 'Spring Cloud', 'Spring Data JPA', 'Hibernate', 'JDBC', 'RESTful APIs', 'GraphQL', 'gRPC', 'Spring Security', 'JWT', 'OAuth2', 'Apache Kafka', 'RabbitMQ'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Redux', 'Context API', 'React Router', 'Axios', 'React Hooks'],
  },
  {
    title: 'Microservices & Architecture',
    items: ['Monolithic Architecture', 'Event-Driven Architecture', 'DDD', 'Clean Architecture', 'Hexagonal Architecture', 'API Gateway', 'Spring Cloud Gateway', 'Spring Cloud Config', 'Eureka Discovery', 'OpenFeign', 'Resilience4j', 'Circuit Breaker', 'Saga Pattern', 'CQRS', 'Event Sourcing'],
  },
  {
    title: 'Databases & Caching',
    items: ['MySQL', 'MongoDB', 'Amazon DynamoDB', 'Spring Data JPA', 'Hibernate ORM', 'Redis', 'Elasticsearch'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS ECS', 'AWS EKS', 'Lambda', 'IAM', 'CloudWatch', 'Docker', 'Docker Compose', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Terraform', 'Ansible'],
  },
  {
    title: 'Testing & Monitoring',
    items: ['JUnit 5', 'Mockito', 'Spring Boot Test', 'Postman', 'SonarQube', 'SLF4J', 'Grafana', 'ELK Stack', 'Zipkin'],
  },
  {
    title: 'Artificial Intelligence',
    items: ['Spring AI', 'OpenAI GPT', 'Google Gemini', 'Anthropic Claude', 'Llama', 'Ollama', 'MCP', 'RAG', 'AI Agents', 'Prompt Engineering'],
  },
]

export const experience = {
  role: 'Java Full Stack Developer',
  company: 'Metrolabs Services Pvt. Ltd.',
  location: 'Hyderabad, Telangana',
  period: 'March 2023 — Present',
  points: [
    'Designed and developed scalable cloud-native microservices using Java, Spring Boot, Spring Cloud, Eureka Service Discovery, Spring Cloud Config, OpenFeign, and Spring Cloud Gateway to build resilient distributed systems.',
    'Developed secure RESTful APIs implementing Spring Security, JWT authentication, and OAuth2 authorization to ensure secure, stateless communication across services.',
    'Built responsive frontend applications using React.js, Redux, Context API, React Router, and Axios with reusable components integrated seamlessly with backend microservices.',
    'Enhanced application resilience by implementing Resilience4j Circuit Breaker, Retry, Rate Limiter, and Fallback mechanisms to improve fault tolerance and system stability.',
    'Designed and optimized relational and NoSQL databases using MySQL, MongoDB, Spring Data JPA, and Hibernate while integrating Redis caching to improve application performance.',
    'Implemented asynchronous event-driven communication using Apache Kafka and RabbitMQ for scalable inter-service messaging.',
    'Containerized applications using Docker and Docker Compose and automated CI/CD pipelines using Jenkins and GitHub Actions for AWS deployments.',
    'Developed comprehensive unit and integration tests using JUnit 5, Mockito, and Spring Boot Test following Test-Driven Development (TDD).',
    'Monitored applications using Spring Boot Actuator, SLF4J, Zipkin, and ELK Stack for centralized logging, distributed tracing, and proactive issue resolution.',
    'Collaborated with Product Owners, UI/UX Designers, QA Engineers, and DevOps teams to deliver enterprise software throughout the SDLC.',
  ],
}

export const projects = [
  {
    title: 'Enterprise E-Commerce Platform',
    subtitle: 'Microservices',
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'React.js', 'MySQL', 'MongoDB', 'Redis', 'Apache Kafka'],
    points: [
      'Architected Product, User, Order, and Inventory microservices following distributed architecture principles.',
      'Integrated Apache Kafka for asynchronous order processing and inventory management.',
      'Leveraged Redis caching to reduce database load and improve response times.',
      'Developed scalable RESTful APIs and React-based user interfaces following clean architecture.',
    ],
  },
  {
    title: 'Enterprise AI-Powered Chatbot Platform',
    subtitle: 'AI Integration',
    tech: ['Spring AI', 'Spring Boot', 'React.js', 'OpenAI API', 'Google Gemini API', 'Docker', 'REST APIs'],
    points: [
      'Designed and developed an enterprise AI chatbot platform using Spring AI integrating OpenAI GPT and Google Gemini models.',
      'Implemented asynchronous REST APIs with session memory for real-time conversational workflows.',
      'Built an interactive React.js frontend with optimized API payload handling and state management.',
      'Containerized the platform using Docker for consistent deployment across environments.',
    ],
  },
  {
    title: 'Banking Management System',
    subtitle: 'Secure Transactions',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MySQL', 'Docker', 'AWS'],
    points: [
      'Engineered secure banking modules for account management, fund transfers, and transaction processing.',
      'Implemented Role-Based Access Control (RBAC) using Spring Security and JWT authentication.',
      'Built secure REST APIs and responsive React interfaces for banking operations.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Technology (B.Tech) in Mechanical Engineering',
  school: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai',
  year: 'Graduated 2019',
  cgpa: 'CGPA: 7.5 / 10',
}

export const achievements = [
  'Successfully developed and deployed scalable cloud-native microservices.',
  'Built secure enterprise applications using Spring Security, JWT, and OAuth2.',
  'Designed event-driven architectures using Apache Kafka and RabbitMQ.',
  'Automated build and deployment pipelines using Jenkins and GitHub Actions.',
  'Contributed to Agile sprint planning, code reviews, and architectural discussions.',
]

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Tamil', level: 'Elementary' },
]

export const terminalLines = [
  { cmd: 'whoami', out: 'Aditya Kumar Pandey — Java Full Stack Developer' },
  { cmd: 'uptime --experience', out: '3.4 years building enterprise microservices' },
  { cmd: 'cat core-stack.txt', out: 'Java · Spring Boot · React.js · Kafka · AWS · Docker' },
  { cmd: 'echo $STATUS', out: 'Open to new opportunities' },
]
