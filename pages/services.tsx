import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { Layout } from "../components/Layout";

const supportLinks = [
  {
    name: "Basic",
    href: "#",
    description:
      "Postproduktion (Schnitt, Ton, Farbkorrektur, Musik, End Card)",
    icon: PhoneIcon,
  },
  {
    name: "Standart",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: LifebuoyIcon,
  },
  {
    name: "Premium",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: NewspaperIcon,
  },
];

const videoProduction = {
  tiers: [
    {
      title: "Basic",
      price: 24,
      frequency: "/month",
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
    {
      title: "Standart",
      price: 32,
      frequency: "/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      title: "Premium",
      price: 48,
      frequency: "/month",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom integrations",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
};
const social = {
  tiers: [
    {
      title: "Basic",
      price: 24,
      frequency: "/month",
      description: "The essentials to provide your best work for clients.",
      features: [
        "Themenrecherche",
        "Texterstellung",
        "1 Tag Photoshoot oder Bildrecherche und Bearbeitung",
        "inkl. Beitragsoptimierung mittels Link, Keyword und Hashtag",
        "inkl. Antworten auf Beitragsreaktionen",
        "Social Media Strategie",
        "2 Posts pro Woche",
        "2 Stories pro Woche",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
    {
      title: "Standart",
      price: 32,
      frequency: "/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "Themenrecherche",
        "Texterstellung",
        "2 Tag Photoshoot oder Bildrecherche und Bearbeitung",
        "inkl. Beitragsoptimierung mittels Link, Keyword und Hashtag",
        "inkl. Antworten auf Beitragsreaktionen",
        "Social Media Strategie",
        "3 Posts pro Woche",
        "3 Stories pro Woche",
      ],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      title: "Premium",
      price: 48,
      frequency: "/month",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Themenrecherche",
        "Texterstellung",
        "3 Tag Photoshoot oder Bildrecherche und Bearbeitung",
        "inkl. Beitragsoptimierung mittels Link, Keyword und Hashtag",
        "inkl. Antworten auf Beitragsreaktionen",
        "Social Media Strategie",
        "5 Posts pro Woche",
        "5 Stories pro Woche",
        "Community Management",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
};
const branding = [
  {
    title: "Basic",
    featured: false,
    description: "All your essential business finances, taken care of.",
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
    ],
  },
  {
    title: "Standart",
    featured: true,
    description: "The best financial services for your thriving business.",
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: "Advanced invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
      { id: 5, value: "VAT & VATMOSS filing" },
      { id: 6, value: "Free bank transfers" },
    ],
  },
  {
    title: "Premium",
    featured: false,
    description: "Convenient features to take your business to the next level.",
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
    ],
  },
];
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Services() {
  return <Layout></Layout>;
}
