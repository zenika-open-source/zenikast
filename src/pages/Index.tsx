import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import EpisodeCover from "@/components/EpisodeCover";
import { useLocation, Link, useParams } from "react-router-dom";
import {
  SAISON_4_EPISODES,
  SAISON_3_EPISODES,
  SAISON_2_EPISODES,
  SAISON_1_EPISODES,
  FEATURED_EPISODE,
} from "@/lib/constants";
import { getAssetUrl } from "@/lib/utils";

export default function Index() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Calculate the highest identifier of the last season (Saison 4)
  const lastSeasonEpisodes = SAISON_4_EPISODES || [];
  const maxIdOfLastSeason =
    lastSeasonEpisodes.length > 0
      ? Math.max(...lastSeasonEpisodes.map((e) => e.id))
      : 0;

  // Choose default tab based on URL path
  let defaultTab = "saison-4";
  if (currentPath.includes("/saison/1")) defaultTab = "saison-1";
  else if (currentPath.includes("/saison/2")) defaultTab = "saison-2";
  else if (currentPath.includes("/saison/3")) defaultTab = "saison-3";
  else if (currentPath.includes("/saison/4")) defaultTab = "saison-4";

  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Video Background Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster={getAssetUrl("/img/Zenikast_bg.png")}
          >
            <source src={getAssetUrl("/Zenikast-intro.mp4")} type="video/mp4" />
          </video>
          {/* Overlay to ensure readability and match brand colors */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <div className="absolute inset-0 grid-overlay opacity-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full mb-8">
          <div className="w-full mx-auto max-w-6xl">
            <Link
              to={`/saison/${FEATURED_EPISODE.season}/episode/${FEATURED_EPISODE.id}`}
              className="glass-card rounded-[40px] p-6 sm:p-12 md:p-16 relative overflow-hidden w-full block group transition-all duration-300 hover:bg-white/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                    Zenikast
                  </h1>
                  <p className="text-2xl text-white/90 font-medium mb-12">
                    {FEATURED_EPISODE.title}
                  </p>

                  <p className="text-lg text-white/80 max-w-md mb-12">
                    {FEATURED_EPISODE.description}
                  </p>

                  <div
                    className="inline-flex items-center justify-center whitespace-nowrap bg-white text-black font-bold h-14 px-8 rounded-full shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-white/90 text-[15px]"
                  >
                    <Mic className="w-5 h-5 mr-3" />
                    Écouter maintenant
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-end gap-6">
                  <p className="text-lg text-white/60 font-medium italic">
                    {FEATURED_EPISODE.date
                      ? `Sorti le ${FEATURED_EPISODE.date}`
                      : "Nouvel épisode"}
                  </p>
                  {FEATURED_EPISODE.image && (
                    <div className="w-[200px] h-[200px] rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 relative">
                      <img
                        src={getAssetUrl(FEATURED_EPISODE.image)}
                        alt={FEATURED_EPISODE.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Saison Sections with Tabs */}
      <section className="bg-[#000000] py-12 pb-16">
        <div className="container mx-auto container-padding">
          <Tabs defaultValue={defaultTab} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16 px-2 overflow-hidden">
              <h2 className="text-4xl font-bold text-white tracking-tighter">
                Épisodes
              </h2>
              <div className="w-full md:w-auto overflow-x-auto scrollbar-hide pb-2 md:pb-0 -mb-2 md:mb-0">
                <TabsList className="bg-white/5 border border-white/10 p-1 h-12 rounded-full inline-flex w-max md:w-auto">
                  <TabsTrigger
                    value="saison-1"
                    className="rounded-full px-5 sm:px-8 h-10 data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-bold transition-all"
                  >
                    Saison 1
                  </TabsTrigger>
                  <TabsTrigger
                    value="saison-2"
                    className="rounded-full px-5 sm:px-8 h-10 data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-bold transition-all"
                  >
                    Saison 2
                  </TabsTrigger>
                  <TabsTrigger
                    value="saison-3"
                    className="rounded-full px-5 sm:px-8 h-10 data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-bold transition-all"
                  >
                    Saison 3
                  </TabsTrigger>
                  <TabsTrigger
                    value="saison-4"
                    className="rounded-full px-5 sm:px-8 h-10 data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-bold transition-all"
                  >
                    Saison 4
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent
              value="saison-4"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
                {SAISON_4_EPISODES.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/saison/${episode.season}/episode/${episode.id}`}
                    className="w-full bg-[#2A2A2A] border border-white/5 rounded-[1.5rem] overflow-hidden hover:bg-[#3A3A3A] transition-colors p-4 relative block"
                  >
                    <div className="flex flex-row gap-6 h-full items-center">
                      {/* Episode Artwork */}
                      <div className="w-[160px] h-[160px] flex-shrink-0 relative overflow-hidden rounded-[1rem] bg-black">
                        {episode.image ? (
                          <img
                            src={getAssetUrl(episode.image)}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                            <div className="w-16 h-16 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                              <Mic className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col h-[160px] justify-between">
                        <div>
                          <div className="text-[#D64F68] text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-sm text-white/70 flex items-center gap-2">
                            <span>{episode.date || "À venir"}</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>{episode.duration || "Durée inconnue"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent
              value="saison-3"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
                {SAISON_3_EPISODES.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/saison/${episode.season}/episode/${episode.id}`}
                    className="w-full bg-[#2A2A2A] border border-white/5 rounded-[1.5rem] overflow-hidden hover:bg-[#3A3A3A] transition-colors p-4 relative block"
                  >
                    <div className="flex flex-row gap-6 h-full items-center">
                      {/* Episode Artwork */}
                      <div className="w-[160px] h-[160px] flex-shrink-0 relative overflow-hidden rounded-[1rem] bg-black">
                        {episode.image ? (
                          <img
                            src={getAssetUrl(episode.image)}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                            <div className="w-16 h-16 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                              <Mic className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col h-[160px] justify-between">
                        <div>
                          <div className="text-[#D64F68] text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-sm text-white/70 flex items-center gap-2">
                            <span>{episode.date || "À venir"}</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>{episode.duration || "Durée inconnue"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent
              value="saison-2"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
                {SAISON_2_EPISODES.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/saison/${episode.season}/episode/${episode.id}`}
                    className="w-full bg-[#2A2A2A] border border-white/5 rounded-[1.5rem] overflow-hidden hover:bg-[#3A3A3A] transition-colors p-4 relative block"
                  >
                    <div className="flex flex-row gap-6 h-full items-center">
                      {/* Episode Artwork */}
                      <div className="w-[160px] h-[160px] flex-shrink-0 relative overflow-hidden rounded-[1rem] bg-black">
                        {episode.image ? (
                          <img
                            src={getAssetUrl(episode.image)}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                            <div className="w-16 h-16 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                              <Mic className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col h-[160px] justify-between">
                        <div>
                          <div className="text-[#D64F68] text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-sm text-white/70 flex items-center gap-2">
                            <span>{episode.date || "À venir"}</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>{episode.duration || "Durée inconnue"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent
              value="saison-1"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
                {SAISON_1_EPISODES.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/saison/${episode.season}/episode/${episode.id}`}
                    className="w-full bg-[#2A2A2A] border border-white/5 rounded-[1.5rem] overflow-hidden hover:bg-[#3A3A3A] transition-colors p-4 relative block"
                  >
                    <div className="flex flex-row gap-6 h-full items-center">
                      {/* Episode Artwork */}
                      <div className="w-[160px] h-[160px] flex-shrink-0 relative overflow-hidden rounded-[1rem] bg-black">
                        {episode.image ? (
                          <img
                            src={getAssetUrl(episode.image)}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                            <div className="w-16 h-16 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                              <Mic className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col h-[160px] justify-between">
                        <div>
                          <div className="text-[#D64F68] text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-sm text-white/70 flex items-center gap-2">
                            <span>{episode.date || "À venir"}</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>{episode.duration || "Durée inconnue"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
