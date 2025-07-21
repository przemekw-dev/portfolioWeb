import AccessControlSystem from "../../public/assets/AccessControlSys.png";
import AIAgent from "../../public/assets/AIAgentCalls.png";

export const services = [
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

export const projects = [
  {
    title: "Access Control System",
    description:
      "Integrated Admin Dashboard, mobile app for access entry, nRF52840dk boards for access point, verification and encryption.",
    stack: [
      "Next.js",
      "React-Native",
      "AWS Services",
      "UWB/BLE",
      "ECDSA Encryption",
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
      "Streamlining internal operations, real-time dashboard for Tracking Devices management.",
    stack: ["Next.js", "Node.js", "AWS", "PostgreSQL", "Kafka API"],
    content: {
      image: "",
      video: "/assets/TrackerAdminDashboard.mp4",
    },
    href: "/projects/real-time-tracking-dashboard",
  },
  {
    title: "AI Agent",
    description:
      "Integrated Admin Dashboard, mobile app for access entry, nRF52840dk boards for access point, verification and encryption.",
    stack: ["Next.js", "Node.js", "OpenAI", "AWS Serverless", "WebSocket"],
    content: {
      image: AIAgent,
      video: "",
    },
    href: "/projects/ai-agent",
  },
  {
    title: "Bluwbee Website",
    description:
      "Redesigned and built a company website, increasing user interaction.",
    stack: ["Next.js", "AWS Serverless", "Shadcn"],
    content: {
      image: "",
      video: "/assets/BBWebsite.webm",
    },
    href: "/projects/company-website",
  },
];
