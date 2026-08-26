export const person = {
  name: 'Angelot Mpata', title: 'Ingénieur Cloud & DevOps', secondaryTitle: 'Développeur Full-Stack',
  location: 'Kinshasa, République démocratique du Congo',
  tagline: 'J’automatise les infrastructures, fiabilise les déploiements et transforme des idées en produits web performants.',
  email: 'contact@angelotmpata.net', phone: '+243 999 234 997', website: 'https://angelotmpata.net',
  links: { linkedin: 'https://www.linkedin.com/in/angelot-mpata-61a94b344/', github: 'https://github.com/DevAngelot', gitlab: 'https://gitlab.com/DevAngelot', medium: 'https://medium.com/@angelotmpata' },
}

export const about = {
  heading: 'Cloud, automatisation et développement réunis',
  body: `Ingénieur Cloud & DevOps et développeur Full-Stack, certifié AWS Cloud Practitioner (CLF-C02) et Microsoft Azure Fundamentals (AZ-900), je conçois des infrastructures automatisées et des applications web prêtes pour la production.

Ma double compétence en développement et en exploitation me permet d’intervenir sur tout le cycle de vie d’un produit : conception, conteneurisation, intégration continue, déploiement cloud, supervision et amélioration continue. J’accorde une attention particulière à la sécurité, à la reproductibilité et à la qualité de l’expérience utilisateur.`,
}

export const stats = [{ value: '2', label: 'certifications Cloud' }, { value: '5+', label: 'projets concrets' }, { value: 'Cloud + Web', label: 'double expertise' }]

export const skillGroups = [
  { title: 'DevOps & automatisation', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI/CD'] },
  { title: 'Cloud Computing', items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'IAM', 'VPC', 'Azure Monitor'] },
  { title: 'Monitoring & observabilité', items: ['Prometheus', 'Grafana', 'Loki', 'Azure Monitor & Insights'] },
  { title: 'Développement', items: ['React.js', 'Node.js', 'Go', 'Python', 'API REST'] },
  { title: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'] },
  { title: 'Systèmes & méthodes', items: ['Linux', 'Ubuntu', 'Debian', 'Red Hat', 'Windows', 'Agile / Scrum'] },
]

export const experience = [
  { role: 'Software Engineer & Project Management Officer (PMO)', company: 'Beni Futur', date: 'Août 2026 — Présent', location: 'Kinshasa', bullets: ['Conception, développement et déploiement de solutions web et plateformes digitales.', 'Pilotage et suivi de projets selon la méthodologie Agile/Scrum.', 'Coordination des équipes avec Jira, Microsoft Planner et Trello.'] },
  { role: 'Ingénieur Cloud & DevOps — Stage', company: 'Orange Digital Center RDC', date: 'Fév. 2026 — Juin 2026', location: 'Kinshasa', bullets: ['Mise en œuvre de solutions Cloud & DevOps.', 'Administration Linux, réseaux, conteneurisation Docker et automatisation CI/CD.', 'Déploiement d’infrastructures Cloud avec AWS et Terraform.'] },
  { role: 'Développeur Frontend', company: 'IZZY SIGN', date: 'Mars 2025 — Juil. 2025', location: 'Kinshasa', bullets: ['Développement d’interfaces web responsives avec React.js.', 'Intégration d’API REST et optimisation des performances et de l’expérience utilisateur.'] },
]

export const projects = [
  { title: 'Marketplace e-commerce avancée — Beni Futur', date: 'Août 2026', description: 'Conception et développement full-stack d’une marketplace avancée, déployée sur Microsoft Azure avec un pipeline CI/CD complet automatisant l’intégration, les tests et le déploiement.', technologies: ['React', 'Full-Stack', 'Microsoft Azure', 'CI/CD'], links: { demo: 'https://benifutur.com/' } },
  { title: 'Gestion des flux de trésorerie — CH-R Libikisi', date: 'Janvier 2026', description: 'Application de gestion financière hospitalière appuyée par une infrastructure AWS sécurisée et scalable avec Terraform, VPC personnalisé, sous-réseaux publics et privés, IAM et accès SSM sans SSH.', technologies: ['AWS', 'Terraform', 'VPC', 'IAM', 'AWS SSM'], links: { demo: 'https://chr-libikisi.org/' } },
  { title: 'Site web & plateforme de gestion — CCCN', date: 'Juin 2026', description: 'Plateforme web complète pour le Centre Chrétien Cantiques Nouveau, comprenant un site vitrine moderne, un espace membres et une interface d’administration.', technologies: ['React', 'Node.js', 'Administration', 'Web responsive'], links: { demo: 'https://ccc-n.org/' } },
  { title: 'Paiement de factures médicales — Becky', date: 'Avril 2026', description: 'Application permettant aux patients de régler leurs factures via M-Pesa, Orange Money, Airtel Money et Afrimoney, avec suivi sécurisé et interfaces dédiées.', technologies: ['Mobile Money', 'Sécurité', 'Full-Stack', 'Paiement'], links: { demo: 'https://app-becky.angelotmpata.net/login' } },
  { title: 'Pipeline DevOps CI/CD — Beni Futur', date: 'Août 2026', description: 'Pipeline automatisant l’intégration et le déploiement du site et de la plateforme d’administration sur un VPS Ubuntu, pour des mises en production rapides, fiables et reproductibles.', technologies: ['GitLab CI/CD', 'Docker', 'Ubuntu', 'VPS', 'Automatisation'], links: { demo: 'https://benifutur.org/' } },
]

export const certifications = [
  { title: 'AWS Certified Cloud Practitioner (CLF-C02)', credentialUrl: 'https://www.credly.com/badges/8f4ab8ae-f9a6-44b9-b09b-cb9b7a9a772c/linked_in_profile', badge: 'AWS' },
  { title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', credentialUrl: 'https://learn.microsoft.com/en-us/users/angelotmpatabugslayer-8105/credentials/85ac982250cf9dcf', image: '/essantials.png', badge: 'Microsoft' },
  { title: 'AWS re/Start Graduate', credentialUrl: 'https://www.credly.com/badges/2217a61d-b91e-4c6c-8eaa-6c03e3a2443a/linked_in_profile', image: '/terraform.png', badge: 'AWS re/Start' },
  { title: 'Docker Foundations Professional Certificate', credentialUrl: 'https://www.linkedin.com/learning/certificates/c68477b683fcf4bc6287b717d8d680a417fdf8bf0e6d79fc0e4ac7fbbc2e87f0', image: '/docker.png', badge: 'Docker' },
  { title: 'Administration de bases de données SQL Server', credentialUrl: 'https://www.udemy.com/certificate/UC-30009aee-40e5-432f-a68d-92763e853bad/', image: '/udemy.png', badge: 'Udemy' },
  { title: 'Authentication & Authorization for Web/API', credentialUrl: 'https://www.credly.com/badges/4f785a55-e96b-468d-a52d-82443e1c967e', badge: 'The Linux Foundation' },
  { title: 'XSS Exploits and Defenses', credentialUrl: 'https://www.credly.com/badges/35e6b504-349b-48d2-bf24-38f3d990d3c6', badge: 'The Linux Foundation' },
  { title: 'Introduction to Linux', credentialUrl: null, badge: 'The Linux Foundation' },
]

export const education = [
  { title: 'Master en Ingénierie Logiciel', org: 'ISIPA Shaumba — Kinshasa', period: '2024 — 2026' },
  { title: 'Programme AWS re/Start', org: 'Orange Digital Center RDC', period: 'Février 2026 — Juin 2026', description: 'Cloud Computing, DevOps, Linux, réseaux et cybersécurité.' },
  { title: 'Licence en Génie Logiciel', org: 'ISIPA Shaumba — Kinshasa', period: '2021 — 2024' },
  { title: 'Diplôme d’État', org: 'Lycée Technique Esengo', period: '2014 — 2020' },
]
export const techStackCarousel = ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitLab CI/CD', 'Jenkins', 'Linux', 'Prometheus', 'Grafana', 'React', 'Node.js', 'Go', 'Python', 'PostgreSQL']
