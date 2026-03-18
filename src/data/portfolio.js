export const person = {
  name: 'ANGELOT MPATA',
  title:
    'DevOps Engineer | Docker • Kubernetes • Terraform • Ansible • Jenkins • GitLab CI/CD • Grafana • Prometheus | Linux System Administrator | Full-Stack Developer',
  location: 'Kinshasa, Democratic Republic of the Congo',
  tagline: 'Building scalable, automated, and resilient systems.',
  email: 'contact@angelotmpata.net',
  phone: '+243 999234997',
  website: 'https://angelotmpata.net',
  links: {
    linkedin: 'https://www.linkedin.com/in/angelot-mpata-61a94b344',
    github: 'https://github.com/DevAngelot',
    gitlab: 'https://gitlab.com/DevAngelot',
    medium: 'https://medium.com/@angelotmpata',
  },
}

export const about = {
  heading: 'About me',
  body: `Angelot Mpata is a passionate DevOps Engineer with a strong foundation in Linux systems administration, networking, and cloud computing. He specializes in designing and implementing scalable, secure, and automated infrastructures using modern DevOps tools and practices.

With hands-on experience in Docker, Kubernetes, Terraform, and Ansible, he focuses on Infrastructure as Code (IaC), CI/CD automation, and system reliability. He has worked on deploying full-stack applications using GitLab CI/CD pipelines, containerization, and cloud-based environments.

His background in full-stack development (React, Node.js, PostgreSQL) allows him to bridge the gap between development and operations, ensuring efficient collaboration and faster delivery cycles.

He is also experienced in monitoring and observability using Prometheus, Grafana, and centralized logging tools, ensuring system performance and uptime.

Driven by continuous learning, he is currently deepening his expertise in cloud platforms and distributed systems.`,
}

export const skillGroups = [
  {
    title: 'DevOps',
    items: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'Jenkins',
      'GitLab CI/CD',
    ],
  },
  {
    title: 'Cloud',
    items: ['AWS (EC2, S3, IAM, Cloud fundamentals)', 'AZURE (Virtual Machines, Storage, Networking)'],
  },
  {
    title: 'Monitoring',
    items: ['Prometheus', 'Grafana', 'Loki', 'Promtail'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Goland'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server'],
  },
  {
    title: 'Systems',
    items: ['Linux', 'Bash', 'Networking'],
  },
  {
    title: 'Others',
    items: ['Git', 'Agile', 'REST APIs', 'Cybersecurity basics'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'IZZY SIGN',
    date: 'Mar 2025 – Jul 2025',
    location: 'Kinshasa',
    bullets: [
      'Developed responsive web interfaces using React.js',
      'Integrated REST APIs with backend systems',
      'Improved performance and user experience',
      'Worked in Agile environment using Git',
    ],
  },
]

export const projects = [
  {
    title: 'Hospital Cash Flow Management Application',
    description:
      'A centralized financial system for hospital cash flow and reporting, built with a DevOps-first approach (automation, repeatable deployments, and observability-minded delivery).',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    
    images: ['/cash_flow.png'],
  },
  {
    title: 'Complete Hospital Management System (Nomargueri)',
    description:
      'Full-stack hospital management platform with GitLab CI/CD pipelines, dockerized services, automated server configuration with Ansible, and deployment on Ubuntu (Contabo).',
    technologies: ['GitLab CI/CD', 'Docker', 'Ansible', 'Ubuntu', 'Full-stack'],
    
    images: ['/hopital_management.png'],
  },
  {
    title: 'POS Application',
    description:
      'A stock and transaction management POS system with an admin dashboard and core operational workflows for inventory and sales.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    
    images: ['/project-placeholder-3.svg'],
  },
  {
    title: 'Cloud Project: AWS S3 Bucket Solution (CHR Libikisi)',
    description:
      'An AWS S3 storage solution designed for secure storage and management of hospital financial reports, with cloud fundamentals and IAM-first access control mindset.',
    technologies: ['AWS S3', 'IAM', 'Cloud fundamentals'],
    
    images: ['/s3_bucket.jpg'],
  },
]

export const certifications = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    credentialUrl: '#',
    image: '/practionner.png',
    badge: 'Credly',
  },
  {
    title: 'AWS Technical Essentials',
    credentialUrl: '#',
    image: '/essantials.png',
    badge: 'Credly',
  },
  {
    title: 'Docker Foundations',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/c68477b683fcf4bc6287b717d8d680a417fdf8bf0e6d79fc0e4ac7fbbc2e87f0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8G06rPE9QwS%2Bm4GFbzCKDw%3D%3D',
    image: '/docker.png',
    badge: 'Badge',
  },
  {
    title: 'Terraform for AWS',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/0fb41548ccfeea6e97bbb9d2343546c148f2969d3319fb4ae2176425d805ba17?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8G06rPE9QwS%2Bm4GFbzCKDw%3D%3D',
    image: '/cert-placeholder-2.svg',
    badge: 'Badge',
  },
  {
    title: 'Cisco Networking Devices and Initial Configuration',
    credentialUrl: 'https://www.credly.com/badges/83dae4f5-5a91-41c6-b3a8-3eb1b6f9fc00/linked_in_profile',
    image: '/networking_device.png',
    badge: 'Badge',
  },
  {
    title: 'Cisco Linux Essentials',
    credentialUrl: 'https://www.credly.com/badges/1c1523f8-17bc-49c9-9d78-3b144504cd4f',
    image: '/linux_essantials.png',
    badge: 'Badge',
  },
  {
    title: 'Cisco Introduction to Cybersecurity',
    credentialUrl: 'https://www.credly.com/badges/25faf7ce-d1f3-4ffc-a3c1-e5ca49f0a6d6',
    image: '/cybersecurite.png',
    badge: 'Badge',
  },
  {
    title: 'Cisco Networking Basics',
    credentialUrl: 'https://www.credly.com/badges/22b52c3d-1536-4b13-b661-f54a23ba8abb',
    image: '/networking_basics.png',
    badge: 'Badge',
  },
   {
    title: 'SQL Server Database Administration',
    credentialUrl: 'https://www.udemy.com/certificate/UC-30009aee-40e5-432f-a68d-92763e853bad/',
    image: '/cert-placeholder-3.svg',
    badge: 'Badge',
  },
]

export const education = [
  {
    title: 'Master, Computer Software Engineering',
    org: 'ISIPA',
    period: 'Nov 2024 - Aug 2026',
    grade: 'In Progress',
    description: 'Skills: DevOps · Professional Software Design · Methods Development · Software Design Methodology · Software Design Standards',
  },
  {
    title: 'AWS RE/START CLOUD COMPUTING Program, Cloud Computing, DevOps & Linux',
    org: 'Orange Digital Center RDC',
    period: 'Feb 2026 - May 2026',
    description: 'Skills: Cloud Computing, IAAS, PAAS, SAAS, Network Basics, Cybersecurity',
  },
  {
    title: 'Bachelor, Software Engineering',
    org: 'ISIPA',
    period: 'Oct 2021 - Aug 2024',
    grade: '71%',
    description: 'Skills: Software Development · Object-Oriented Programming · Database Management · Web Development · Software Architecture · Algorithms & Data Structures',
  },
]

export const techStackCarousel = [
  'Docker',
  'Kubernetes',
  'Terraform',
  'Ansible',
  'Jenkins',
  'GitLab CI/CD',
  'GitHub Actions',
  'AWS',
  'AZURE',
  'Linux',
  'Prometheus',
  'Grafana',
  'Loki',
  'Promtail',
  'Node.js',
  'Goland',
  'React',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'SQL Server',
  'Redis',
]
