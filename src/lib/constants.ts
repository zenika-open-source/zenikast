export const SITE_CONFIG = {
  name: "Zenikast",
  title: "Zenikast",
  description:
    "Zenikast est un podcast porté par les collaboratrices et collaborateurs Zenika afin de parler de sujet tech, mais pas que.",
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

import episodes from "./episodes.json";

export const SAISON_4_EPISODES = episodes.saison4;
export const SAISON_3_EPISODES = episodes.saison3;
export const SAISON_2_EPISODES = episodes.saison2;
export const SAISON_1_EPISODES = episodes.saison1;

const allEpisodes = [
  ...SAISON_4_EPISODES,
  ...SAISON_3_EPISODES,
  ...SAISON_2_EPISODES,
  ...SAISON_1_EPISODES,
];

const months: Record<string, string> = {
  Janvier: "01",
  Février: "02",
  Mars: "03",
  Avril: "04",
  Mai: "05",
  Juin: "06",
  Juillet: "07",
  Août: "08",
  Septembre: "09",
  Octobre: "10",
  Novembre: "11",
  Décembre: "12",
};

const parseDate = (dateStr?: string) => {
  if (!dateStr) return 0;
  const parts = dateStr.split(" ");
  if (parts.length === 3) {
    const day = parts[0].padStart(2, "0");
    const month = months[parts[1]] || "01";
    const year = parts[2];
    return new Date(`${year}-${month}-${day}T00:00:00Z`).getTime();
  }
  return 0;
};

export const FEATURED_EPISODE = [...allEpisodes].sort((a, b) => {
  if (a.season !== b.season) return b.season - a.season;
  return b.id - a.id;
})[0];

export const SOCIAL_LINKS = [
  {
    name: "YouTube",
    url: "#",
    icon: "youtube",
  },
] as const;
