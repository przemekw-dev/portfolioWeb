import { ProjectsType, ServiceTech } from "types/home";
import AccessControlSystem from "../../public/assets/AccessControlSys.png";
import AIAgent from "../../public/assets/AIAgentCalls.png";

export const services: ServiceTech[] = [
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps with React Native or native Android using Kotlin. Includes Bluetooth, UWB, and app store deployment",
    stack: [
      "React Native",
      "Kotlin / Java",
      "Bluetooth",
      "UWB",
      "Google Play / App Store",
    ],
  },
  {
    title: "Cloud Backend Development",
    description:
      "Backends using AWS, Firebase, or Azure. Covers APIs, databases, and CI/CD",
    stack: [
      "Next.js / React.js",
      "TypeScript",
      "Node.js",
      "PHP Slim 4",
      "AWS Services",
      "CI/CD",
      "SQL / NoSQL",
    ],
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Frontend, backend, and cloud infrastructure for web and mobile apps. Including AI, payment, voice calls integration",
    stack: [
      "React / React Native",
      "Node.js",
      "AWS",
      "GraphQL / REST",
      "CI/CD",
      "PostgreSQL / DynamoDB",
    ],
  },
];

export const projects: ProjectsType[] = [
  {
    title: "Access Control System",
    description:
      "Cloud-based physical access management system. Integrated three components for pass management, retrieval and verification via UWB/BLE and ECDSA.",
    stack: [
      "Next.js",
      "React-Native",
      "AWS Services",
      "UWB/BLE",
      "ECDSA Encryption",
    ],
    features: [
      {
        icon: "FaAws",
        tech: "Cloud Backend",
        description:
          "Centralised AWS-Based Backend for pass creation, updates and entry logs.",
      },
      {
        icon: "TbBrandReactNative",
        tech: "Mobile App",
        description: "Mobile app for pass retrieval and physical entry",
      },
      {
        icon: "RiNextjsFill",
        tech: "Dashboard",
        description:
          "Admin dashboard for pass management, access logs and user management.",
      },
      // {
      //   icon: "FiCpu",
      //   tech: "Access Point",
      //   description:
      //     "Embedded board that verifies user's passes and performs close proximity checks.",
      // },
    ],
    content: {
      image: AccessControlSystem,
      video: "",
    },
    href: "/projects/access-control-system",
  },
  {
    title: "Real-Time Tracking Dashboard",
    description:
      "Dashboard for managing GPS tracking devices in delivery logistics. Includes live map, device data, and Kafka event stream integration. Integrated with PostgreSQL backend.",

    stack: ["Next.js", "Node.js", "AWS", "PostgreSQL", "Kafka"],
    content: {
      image: "",
      video: "/assets/TrackerAdminDashboard.mp4",
    },
    href: "/projects/real-time-tracking-dashboard",
  },
  {
    title: "AI Agent",
    description:
      "Voice and chat assistant for appointment booking. Uses OpenAI for responses, Twilio for phone calls, and serverless AWS backend with WebSocket support.",
    stack: [
      "Next.js",
      "Node.js",
      "OpenAI",
      "Twilio",
      "AWS Lambda",
      "WebSocket",
      "API Gateway",
    ],
    content: {
      image: AIAgent,
      video: "",
    },
    href: "/projects/ai-agent",
  },
  {
    title: "Bluwbee Website",
    description: "Company website built with Next.js and deployed on AWS.",
    stack: ["Next.js", "AWS Services"],
    content: {
      image: "",
      video: "/assets/BBWebsite.webm",
    },
    href: "/projects/company-website",
  },
];

export type OtherServicesProps = {};

export const otherServices = [
  {
    title: "Twilio",
    services: [
      "Programmable Voice (inbound/outbound calls)",
      "SMS and MMS messaging",
      "Transactional and marketing emails (SendGrid)",
    ],
  },
  {
    title: "OpenAI",
    services: [
      "Text generation (prompt chaining, assistant logic)",
      "Long-term memory storage (RAG, embeddings)",
      "Streaming audio inputs (e.g. live transcription)",
    ],
  },
  {
    title: "Stripe",
    services: [
      "One-time payments",
      "Recurring billing and subscriptions",
      "Webhooks and payment event handling",
    ],
  },
  {
    title: "AWS Services",
    services: [
      "Lambda-based backend logic",
      "DynamoDB for structured data",
      "S3 for file uploads and asset storage",
    ],
  },
];
