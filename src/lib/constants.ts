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

import episodes from './episodes.json';

export const SAISON_3_EPISODES = episodes.saison3;
export const SAISON_2_EPISODES = episodes.saison2;
export const SAISON_1_EPISODES = episodes.saison1;
export const FEATURED_EPISODE = episodes.featured;


export const SOCIAL_LINKS = [
  {
    name: "YouTube",
    url: "#",
    icon: "youtube",
  },
] as const;
