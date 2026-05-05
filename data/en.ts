import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';

const data: Data = {
  name: 'Dzung Xuan Tran', 
  lastUpdatedAt: new Date('2026-05-05'),
  status: {
    color: 'active',
    label: 'Open to opportunities',
  },
  location: 'Hanoi City, Vietnam',
  bio: 'Tech Lead · Full-Stack Engineer',
  summary:
    'Tech Lead with 8+ years building and shipping scalable systems across government, fintech, social, and gaming domains. Strong in Java/Spring Boot, Python, and Node.js backends with hands-on experience in cloud infrastructure (AWS, Kubernetes), real-time architectures (WebSocket, Kafka), and cross-platform mobile (React Native, Flutter). Comfortable owning end-to-end delivery — from system design and stakeholder alignment to implementation and team mentorship.',
  avatarUrl: getAssetPath() + '/locale/en/profile.webp',
  skills: [
    'Java', 'Spring Boot', 'Python', 'FastAPI', 'GeoDjango',
    'NestJS', 'Node.js', 'React', 'React Native', 'Flutter', 'TypeScript',
    'PostgreSQL', 'PostGIS', 'Oracle SQL',
    'Apache Kafka', 'WebSocket', 'Odoo',
    'AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform',
  ],
  education: [
    {
      school: 'Hanoi University',
      degree: 'Bachelor of Science',
      start: '2013',
      end: '2017',
    },
  ],
  work: [
    {
      company: 'AHT Tech',
      badges: ['Full-time'],
      title: 'Tech Lead',
      start: '2023',
      end: 'Present',
      description: [
        'Led solution architecture across four concurrent products: a large-scale government digital platform (Java Spring Boot, Kafka, Dremio, Kubernetes, Oracle SQL); a multi-service social location app (Python/GeoDjango, NestJS, React Native, PostGIS, AI moderation); a customised Odoo CRM/e-commerce backend; and a high-concurrency real-time investment platform (NestJS, WebSocket, Blockchain, AWS, Terraform).',
        'Drove technical decisions across squads and managed CI/CD via Jenkins and Kubernetes.',
        'Mentored engineers through code reviews and workshops.',
        'Led all English-language communication with international stakeholders.',
      ],
    },
    {
      company: 'Antsoft',
      badges: ['Outsourcing'],
      title: 'Senior Software Engineer → Tech Lead',
      start: '2020',
      end: '2023',
      description: [
        'Spring Boot microservices for a Japanese client with direct cross-cultural technical communication.',
        'AWS cloud infrastructure and Jenkins CI/CD pipelines for GEM Vietnam.',
        'Cross-platform mobile app with Flutter, iOS native modules, Firebase (Auth, Firestore, Push), and LINE SDK.',
        'Netflix OSS microservice architecture (Eureka, Spring Cloud Gateway, PostgreSQL with DBA-optimised queries).',
        'Full backend for a SIM management platform including end-to-end payment processing.',
        'Real estate listing app (Flutter + Spring Boot).',
        'High-risk legacy migration from Spring Framework 2/Java 7 to Spring Boot 3/Java 11 with zero data loss or unplanned downtime.',
      ],
    },
    {
      company: 'Gameloft',
      badges: ['Full-time'],
      title: 'Android Game Developer',
      start: '2017',
      end: '2020',
      description: [
        'Built rapid game prototypes in Unity (C#) and Unreal Engine (C++) within a fast-paced creative lab, iterating on gameplay mechanics and shipping playable builds each sprint.',
        "Designed and maintained the studio's Jenkins CI pipeline for multi-platform builds across a complex build matrix, significantly reducing manual build time.",
        'Maintained and extended live features for March of Empires, resolving Android-specific bugs across rendering, memory management, and cross-device compatibility within a proprietary engine codebase.',
      ],
    },
    {
      company: 'NextTech',
      badges: ['Full-time'],
      title: 'Junior Full-Stack Developer',
      start: '2017',
      end: 'Mid 2017',
      description: [
        'Contributed to a full-stack e-commerce platform using Java Spring Boot REST APIs and AngularJS.',
        'Owned the customer-facing storefront UI and multiple admin modules covering product management, order processing, and back-office tooling.',
      ],
    },
  ],
  contacts: [
    {
      label: 'dungtx32@gmail.com',
      href: 'mailto:dungtx32@gmail.com',
      icon: Mail,
      toolbar: true,
    },
  ],
  projects: [
    {
      title: 'VPHC – Government Digital Platform',
      techStack: ['Java Spring Boot', 'Apache Kafka', 'Dremio', 'Kubernetes', 'Oracle SQL', 'Jenkins'],
      description: [
        'Large-scale government public-sector platform serving multiple agencies.',
        'Real-time data warehouse pipeline built on Kafka and Dremio.',
        'On-premises Kubernetes deployment managed via Jenkins CI/CD.',
      ],
    },
    {
      title: 'Versmap – Social Location Platform',
      techStack: ['Spring Boot', 'Python', 'FastAPI', 'GeoDjango', 'NestJS', 'React Native', 'PostGIS'],
      description: [
        'Multi-service social platform for real-time friend tracking and geo-tagged POI discovery.',
        'WebSocket live-location sharing and in-app chat.',
        'AI-powered content moderation pipeline.',
      ],
    },
    {
      title: 'FSM – Real-Time Investment Platform',
      techStack: ['NestJS', 'WebSocket', 'React SSR', 'Blockchain', 'AWS', 'Terraform'],
      description: [
        'High-concurrency investment platform with persistent WebSocket price feeds.',
        'Nest Workers for background job processing and queue management.',
        'On-chain smart contract integration for transaction settlement.',
      ],
    },
  ],
  links: [
    {
      label: 'GitHub',
      href: 'https://dungtx.github.io/cv/',
      icon: SiGithub,
    },
  ],
};

export default data;
