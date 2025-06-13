export const SITE_CONFIG = {
  name: "Zenikast",
  description:
    "Un podcast explorant la mindfulness, la croissance personnelle et le chemin vers la paix intérieure.",
  tagline: "Saison 2 disponible dès maintenant",
  subtitle: "1 nouvel épisode chaque mois",
  url: "https://zenikast.com",
  creator: "@zenikast",
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Accueil", href: "/" },
  { name: "Épisodes", href: "/episodes" },
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const PODCAST_PLATFORMS = [
  {
    name: "YouTube",
    icon: "▶",
    url: "#",
    color: "bg-platforms-youtube",
  },
  {
    name: "Spotify",
    icon: "♪",
    url: "#",
    color: "bg-platforms-spotify",
  },
  {
    name: "Deezer",
    icon: "🎵",
    url: "#",
    color: "bg-platforms-deezer",
  },
  {
    name: "Apple Podcast",
    icon: "����",
    url: "#",
    color: "bg-gradient-to-r from-platforms-apple to-pink-500",
  },
] as const;

export const SAISON_2_EPISODES = [
  {
    id: 1,
    title: "Approche produit, une bonne idée ?",
    description:
      "Découvre les points clés pour réussir une expérience de personnes du métier UX/Produit.",
    duration: "À venir",
    status: "À venir • Durée inconnue",
    image: "/placeholder.svg",
    audioUrl: "#",
    season: 2,
    episodeNumber: 1,
  },
  {
    id: 2,
    title: "DevQuest : Création d'une conférence dans le bassin nantais",
    description: "Organisez des événements tech avec passion et innovation.",
    duration: "À venir",
    status: "À venir • Durée inconnue",
    image: "/placeholder.svg",
    audioUrl: "#",
    season: 2,
    episodeNumber: 2,
  },
] as const;

export const SAISON_1_EPISODES = [
  {
    id: 3,
    title: "Présentation du projet",
    description:
      "Introduction à Zenikast et présentation de l'équipe made by Zenika Nantes.",
    duration: "7 m 30s",
    status: "13 Juin 2024 • 7 m 30 sec",
    image: "/placeholder.svg",
    audioUrl: "#",
    season: 1,
    episodeNumber: 1,
  },
  {
    id: 4,
    title:
      "Intérêt de l'utilisation au quotidien de l'IA pour créer une application",
    description:
      "Découvrez comment l'IA transforme le développement d'applications au quotidien.",
    duration: "30 m 56 sec",
    status: "1 Juillet 2024 • 30 m 56 sec",
    image: "/placeholder.svg",
    audioUrl: "#",
    season: 1,
    episodeNumber: 2,
  },
] as const;

export const FEATURED_EPISODE = {
  id: 5,
  title: "DevQuest : Création d'une conférence dans le bassin nantais",
  description:
    "Comment organiser des événements tech avec passion et innovation dans l'écosystème nantais.",
  duration: "À venir",
  status: "À venir • Durée inconnue",
  image: "/placeholder.svg",
  audioUrl: "#",
  label: "DERNIER ÉPISODE",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "Twitter",
    url: "#",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    url: "#",
    icon: "youtube",
  },
  {
    name: "Email",
    url: "mailto:hello@zenikast.com",
    icon: "mail",
  },
] as const;
