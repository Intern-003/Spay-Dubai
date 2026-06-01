import {
  FiCreditCard,
  FiLayers,
  FiGlobe,
  FiServer,
  FiTrendingUp,
  FiBriefcase,
  FiDollarSign,
  FiActivity,
  FiShuffle,
  FiShield,
  FiBarChart2,
  FiSettings,
  FiSmartphone,
  FiLock,
  FiBook,
  FiFileText,
  FiUsers,
  FiMap,
} from "react-icons/fi";

export const menuData = {
  product: {
    title: "Products",
    description:
      "Empower your payment ecosystem with enterprise-grade payment infrastructure designed for PSPs, fintechs, banks, merchants, and financial institutions. Built for scalability, compliance, and innovation.",

    items: [
      {
        icon: FiLayers,
        title: "White-Label Payment Gateway",
        description:
          "Ready-to-launch payment software for PSPs and fintech providers.",
        path: "/white-label-payment-gateway",
      },
      {
        icon: FiGlobe,
        title: "Payment Orchestration Platform",
        description:
          "Intelligent routing and payment optimization across multiple providers.",
        path: "/payment-orchestration-platform",
      },
      {
        icon: FiServer,
        title: "Payment Infrastructure",
        description:
          "Enterprise-grade payment infrastructure for modern financial businesses.",
        path: "/payment-infrastructure",
      },
      // {
      //   icon: FiCreditCard,
      //   title: "Merchant Management",
      //   description:
      //     "Manage merchants, transactions, settlements and reporting from one dashboard.",
      //   path: "/products/merchant-management",
      // },
    ],
  },

  useCases: {
    title: "Use Cases",
    description:
      "Discover how SPAY helps PSPs, banks, fintechs and merchants launch, scale and optimize payment operations through intelligent payment technologies.",

    items: [
      {
        icon: FiTrendingUp,
        title: "Launching a Payment Platform",
        description:
          "Build your PSP ecosystem from scratch using scalable payment infrastructure.",
        path: "/use-cases/launching-a-payment-platform",
      },
      {
        icon: FiBriefcase,
        title: "Growing Your Payment Business",
        description:
          "Expand payment capabilities with advanced integrations and automation.",
        path: "/use-cases/growing-your-payment-business",
      },
      {
        icon: FiDollarSign,
        title: "Modernizing Payment Technology",
        description:
          "Replace outdated systems with modern payment orchestration tools.",
        path: "/use-cases/modernizing-payment-technology",
      },
      {
        icon: FiActivity,
        title: "Embedded Payments",
        description:
          "Integrate payment services directly into your platform and unlock new revenue.",
        path: "/use-cases/embedded-payments",
      },
    ],
  },

  features: {
    title: "Features",
    description:
      "Unlock next-generation payment capabilities with smart routing, fraud prevention, tokenization, analytics and merchant management tools.",

    items: [
      {
        icon: FiShuffle,
        title: "Intelligent Payment Routing",
        description:
          "Automatically route transactions to maximize approval rates.",
        path: "/features/intelligent-payment-routing",
      },
      {
        icon: FiShield,
        title: "Payment Fraud Prevention",
        description:
          "Detect, analyze and prevent suspicious payment activity.",
        path: "/features/payment-fraud-prevention",
      },
      {
        icon: FiLock,
        title: "Tokenization",
        description:
          "Secure sensitive payment information with advanced tokenization.",
        path: "/features/tokenization",
      },
      {
        icon: FiBarChart2,
        title: "Payment Analytics",
        description:
          "Gain actionable insights through real-time reporting and analytics.",
        path: "/features/payment-analytics",
      },
      {
        icon: FiSmartphone,
        title: "Mobile SDK",
        description:
          "Integrate secure payments into Android and iOS applications.",
        path: "/features/mobile-sdk",
      },
      {
        icon: FiSettings,
        title: "Admin Dashboard",
        description:
          "Control merchants, transactions and payment operations from one place.",
        path: "/features/admin-dashboard",
      },
    ],
  },

  resources: {
    title: "Resources",
    description:
      "Explore documentation, developer resources, industry insights, payment guides and implementation best practices.",

    items: [
      {
        icon: FiFileText,
        title: "Blog",
        description:
          "Latest fintech, payment gateway and industry insights.",
        path: "/resources/blog",
      },
      {
        icon: FiUsers,
        title: "Case Studies",
        description:
          "Discover how our clients scale payment businesses worldwide.",
        path: "/resources/case-studies",
      },
      {
        icon: FiBook,
        title: "Documentation",
        description:
          "Complete API integration and developer resources.",
        path: "/resources/documentation",
      },
      {
        icon: FiMap,
        title: "Global Coverage",
        description:
          "Explore supported payment methods and regional availability.",
        path: "/resources/global-coverage",
      },
    ],
  },
};