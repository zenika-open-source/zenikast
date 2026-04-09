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
  { name: "Saison 2", href: "/saison-2" },
  { name: "Saison 1", href: "/saison-1" },
  { name: "À propos", href: "/about" },
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
    title: "Être une femme dans la tech",
    description: "Conversations authentiques sur le parcours des femmes dans l'écosystème technologique.",
    duration: "45 min",
    status: "Disponible",
    image: "/covers/s2e1.jpg",
    season: 2,
    episodeNumber: 1,
    commentedBy: "PRÉNOM NOM",
    guests: "LISS MELISSA COTIN, LINE QUESNEL, CYRIELLE EUDELINE"
  },
  {
    id: 2,
    title: "D'UX Designer à Product Manager",
    description: "Le passage du design à la gestion de produit : enjeux et opportunités.",
    duration: "38 min",
    status: "Disponible",
    image: "/covers/s2e2.jpg",
    season: 2,
    episodeNumber: 2,
    commentedBy: "PRÉNOM NOM",
    guests: "MARIE DUPONT, JEAN MARTIN"
  },
] as const;

export const SAISON_1_EPISODES = [
  {
    id: 3,
    title: "L'IA au quotidien",
    description: "Comment l'IA transforme notre façon de travailler et de créer.",
    duration: "31 min",
    status: "Disponible",
    image: "/covers/s1e1.jpg",
    season: 1,
    episodeNumber: 1,
    commentedBy: "PRÉNOM NOM",
    guests: "GARY KASPAROV, ALAN TURING"
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
] as const;
