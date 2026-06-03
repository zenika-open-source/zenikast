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
            <div className="glass-card rounded-[40px] p-6 sm:p-12 md:p-16 relative overflow-hidden w-full">
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

                  <Link
                    to={`/saison/${FEATURED_EPISODE.season}/episode/${FEATURED_EPISODE.id}`}
                  >
                    <Button
                      size="lg"
                      className="bg-white hover:bg-white/90 text-black font-bold h-14 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Mic className="w-5 h-5 mr-3" />
                      Écouter maintenant
                    </Button>
                  </Link>
                </div>

                <div className="hidden md:flex flex-col items-end gap-6">
                  <p className="text-lg text-white/60 font-medium italic">
                    {FEATURED_EPISODE.date
                      ? `Sorti le ${FEATURED_EPISODE.date}`
                      : "Nouvel épisode"}
                  </p>
                  {FEATURED_EPISODE.image && (
                    <div className="w-[200px] h-[200px] rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 relative group">
                      <img
                        src={getAssetUrl(FEATURED_EPISODE.image)}
                        alt={FEATURED_EPISODE.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saison Sections with Tabs */}
      <section className="bg-[#000000] py-12 pb-16">
        <div className="container mx-auto container-padding">
          <Tabs defaultValue={defaultTab} className="w-full">
            <div className="flex items-center justify-between mb-16 px-2">
              <h2 className="text-4xl font-bold text-white tracking-tighter">
                Épisodes
              </h2>
              <TabsList className="bg-white/5 border border-white/10 p-1 h-12 rounded-full">
                <TabsTrigger
                  value="saison-4"
                  className="rounded-full px-8 h-10 data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-bold transition-all"
                >
                  Saison 4
                </TabsTrigger>
                <TabsTrigger
                  value="saison-3"
                  className="rounded-full px-8 h-10 data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-bold transition-all"
                >
                  Saison 3
                </TabsTrigger>
                <TabsTrigger
                  value="saison-2"
                  className="rounded-full px-8 h-10 data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-bold transition-all"
                >
                  Saison 2
                </TabsTrigger>
                <TabsTrigger
                  value="saison-1"
                  className="rounded-full px-8 h-10 data-[state=active]:bg-white data-[state=active]:text-black text-white/70 font-bold transition-all"
                >
                  Saison 1
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="saison-4"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
                {SAISON_4_EPISODES.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/saison/${episode.season}/episode/${episode.id}`}
                    className="flex-none w-[600px] h-[232px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors p-4 relative block"
                  >
                    <div className="flex flex-row gap-6 h-full items-stretch">
                      {/* Episode Artwork */}
                      <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-black">
                        {episode.image ? (
                          <img
                            src={getAssetUrl(episode.image)}
                            alt={episode.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                            <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                              <Mic className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                          <Mic className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col justify-between">
                        <div>
                          <div className="text-brand-red text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-sm text-white/70 flex items-center gap-2">
                            <span>À venir</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>Durée inconnue</span>
                          </div>

                          <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-full px-6 py-5 transition-colors border border-white/10 flex items-center gap-2 font-semibold">
                            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                              <svg
                                width="10"
                                height="12"
                                viewBox="0 0 10 12"
                                fill="none"
                                className="ml-0.5"
                              >
                                <path
                                  d="M9.5 5.13397C10.1667 5.51888 10.1667 6.48113 9.5 6.86603L1.25 11.6292C0.583334 12.0141 -4.16209e-08 11.533 -8.08376e-09 10.7631L3.35515e-07 1.23686C3.69032e-07 0.467061 0.583333 -0.0140643 1.25 0.370836L9.5 5.13397Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            Voir Plus
                          </Button>
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
              <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
                {SAISON_3_EPISODES.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/saison/${episode.season}/episode/${episode.id}`}
                    className="flex-none w-[600px] h-[232px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors p-4 relative block"
                  >
                    <div className="flex flex-row gap-6 h-full items-stretch">
                      {/* Episode Artwork */}
                      <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-black">
                        {episode.image ? (
                          <img
                            src={getAssetUrl(episode.image)}
                            alt={episode.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                            <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                              <Mic className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                          <Mic className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col justify-between">
                        <div>
                          <div className="text-brand-red text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-sm text-white/70 flex items-center gap-2">
                            <span>À venir</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>Durée inconnue</span>
                          </div>

                          <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-full px-6 py-5 transition-colors border border-white/10 flex items-center gap-2 font-semibold">
                            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                              <svg
                                width="10"
                                height="12"
                                viewBox="0 0 10 12"
                                fill="none"
                                className="ml-0.5"
                              >
                                <path
                                  d="M9.5 5.13397C10.1667 5.51888 10.1667 6.48113 9.5 6.86603L1.25 11.6292C0.583334 12.0141 -4.16209e-08 11.533 -8.08376e-09 10.7631L3.35515e-07 1.23686C3.69032e-07 0.467061 0.583333 -0.0140643 1.25 0.370836L9.5 5.13397Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            Voir Plus
                          </Button>
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
              <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
                {SAISON_2_EPISODES.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/saison/${episode.season}/episode/${episode.id}`}
                    className="flex-none w-[600px] h-[232px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors p-4 relative block"
                  >
                    <div className="flex flex-row gap-6 h-full items-stretch">
                      {/* Episode Artwork */}
                      <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-black">
                        {episode.image ? (
                          <img
                            src={getAssetUrl(episode.image)}
                            alt={episode.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                            <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                              <Mic className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                          <Mic className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col justify-between">
                        <div>
                          <div className="text-brand-red text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-sm text-white/70 flex items-center gap-2">
                            <span>À venir</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>Durée inconnue</span>
                          </div>

                          <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-full px-6 py-5 transition-colors border border-white/10 flex items-center gap-2 font-semibold">
                            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                              <svg
                                width="10"
                                height="12"
                                viewBox="0 0 10 12"
                                fill="none"
                                className="ml-0.5"
                              >
                                <path
                                  d="M9.5 5.13397C10.1667 5.51888 10.1667 6.48113 9.5 6.86603L1.25 11.6292C0.583334 12.0141 -4.16209e-08 11.533 -8.08376e-09 10.7631L3.35515e-07 1.23686C3.69032e-07 0.467061 0.583333 -0.0140643 1.25 0.370836L9.5 5.13397Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            Voir Plus
                          </Button>
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
              <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
                {SAISON_1_EPISODES.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/saison/${episode.season}/episode/${episode.id}`}
                    className="flex-none w-[600px] h-[232px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors p-4 relative block"
                  >
                    <div className="flex flex-row gap-6 h-full items-stretch">
                      {/* Episode Artwork */}
                      <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-black">
                        {episode.image ? (
                          <img
                            src={getAssetUrl(episode.image)}
                            alt={episode.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                            <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                              <Mic className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                          <Mic className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col justify-between">
                        <div>
                          <div className="text-brand-red text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 leading-relaxed">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-sm text-white/70 flex items-center gap-2">
                            <span>À venir</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>Durée inconnue</span>
                          </div>

                          <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-full px-6 py-5 transition-colors border border-white/10 flex items-center gap-2 font-semibold">
                            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                              <svg
                                width="10"
                                height="12"
                                viewBox="0 0 10 12"
                                fill="none"
                                className="ml-0.5"
                              >
                                <path
                                  d="M9.5 5.13397C10.1667 5.51888 10.1667 6.48113 9.5 6.86603L1.25 11.6292C0.583334 12.0141 -4.16209e-08 11.533 -8.08376e-09 10.7631L3.35515e-07 1.23686C3.69032e-07 0.467061 0.583333 -0.0140643 1.25 0.370836L9.5 5.13397Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            Voir Plus
                          </Button>
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
