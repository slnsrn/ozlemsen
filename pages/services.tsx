import { Layout } from "../components/Layout";
import { ServiceSection } from "../components/Services/ServiceSection";

const services = [
  {
    id: "video-production",
    title: "Videoproduktion",
    background: "/images/services/video-production.jpg",
    text: "Sie brauchen einen Unternehmensfilm? Ihr nächstes Event soll für die Nachwelt festgehalten werden? Oder haben Sie bereits Material und suchen jemanden für den Feinschliff? Als professionelle Videografen übernehmen wir vom Script bis zur Postproduction den kompletten Produktionsprozess.",
    offers: {
      basic: ["Postproduktion (Schnitt, Ton, Farbkorrektur, Musik, End Card)"],
      standart: ["Shooting", "Postproduktion"],
      premium: [
        "Konzept",
        "Shooting",
        "Postproduktion (inkl. visuelle Effekte, Voice-Over, Untertitel, Musik)",
      ],
    },
  },
  {
    id: "social-media",
    title: "Social Media",
    background: "/images/services/social-media.jpg",
    text: "Keine Zeit zum Posten? Ob Instagram, LinkedIn oder TikTok: Wir halten Ihre Followers auf dem Laufenden und etablieren Ihre Marke nachhaltig auf Social Media – damit Sie immer in Verbindung bleiben.",
    offers: {
      basic: [
        "Themenrecherche",
        "Texterstellung",
        "inkl. Beitragsoptimierung mittels Link, Keyword und Hashtag",
        "inkl. Antworten auf Beitragsreaktionen",
        "Social Media Strategie",
        "1 Tag Photoshoot oder Bildrecherche und Bearbeitung",
        "2 Posts pro Woche",
        "2 Stories pro Woche",
      ],
      standart: [
        "Basic Plus",
        "2 Tag Photoshoot oder Bildrecherche und Bearbeitung",
        "3 Posts pro Woche",
        "3 Stories pro Woche",
      ],
      premium: [
        "Basic Plus",
        "3 Tag Photoshoot oder Bildrecherche und Bearbeitung",
        "5 Posts pro Woche",
        "5 Stories pro Woche",
        "Community Management",
      ],
    },
  },
  {
    id: "branding",
    title: "Branding/Corporate Design",
    background: "/images/services/branding.jpg",
    text: "Kleidung macht bekanntlich Leute. Wir stellen sicher, dass Ihr Unternehmen das richtige Outfit trägt. Vom Logo bis zur Visitenkarte – lassen Sie uns auf einen Blick vermitteln, warum Ihre Marke einzigartig ist!",
    offers: {
      basic: ["Logo Design", "Visitenkarte"],
      standart: ["Logo Design", "Visitenkarte", "Badges", "Mockups"],
      premium: [
        "Konzept (Corporate Identity / Rebranding)",
        "Logo Design",
        "Visitenkarte",
        "Visitenkarte Premium Drucken",
        "Badges",
        "Mockups",
        "Außenwerbung",
        "Laden/Shop Konzept Design",
      ],
    },
  },
];

export default function Services() {
  return (
    <Layout>
      {services.map((service, i) => (
        <ServiceSection key={service.id} {...service} />
      ))}
    </Layout>
  );
}
