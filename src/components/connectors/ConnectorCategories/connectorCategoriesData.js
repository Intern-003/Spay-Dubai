import {
  FaUniversity,
  FaWallet,
  FaShieldAlt,
  FaCreditCard,
  FaExchangeAlt,
} from "react-icons/fa";

export const connectorCategories = [
  {
    id: 1,
    icon: FaExchangeAlt,
    title: "Open Banking",
    items: [
      "SEPA",
      "UPI",
      "PIX",
      "A2A Payments",
    ],
  },

  {
    id: 2,
    icon: FaCreditCard,
    title: "Acquiring",
    items: [
      "MPGS",
      "Checkout",
      "Network",
      "Tap Payments",
    ],
  },

  {
    id: 3,
    icon: FaWallet,
    title: "Digital Wallets",
    items: [
      "Apple Pay",
      "Google Pay",
      "Samsung Pay",
      "PayPal",
    ],
  },

  {
    id: 4,
    icon: FaShieldAlt,
    title: "Fraud & Risk",
    items: [
      "Fraud Detection",
      "Risk Scoring",
      "AML",
      "KYC",
    ],
  },

  {
    id: 5,
    icon: FaUniversity,
    title: "Local Payments",
    items: [
      "MADA",
      "KNET",
      "BENEFIT",
      "STC Pay",
    ],
  },
];