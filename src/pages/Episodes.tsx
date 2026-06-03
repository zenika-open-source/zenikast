import { Search, Play, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import {
  SAISON_4_EPISODES,
  SAISON_3_EPISODES,
  SAISON_2_EPISODES,
  SAISON_1_EPISODES,
} from "@/lib/constants";
import { Link } from "react-router-dom";

export default function Episodes() {
  const allEpisodes = [
    ...SAISON_4_EPISODES,
    ...SAISON_3_EPISODES,
    ...SAISON_2_EPISODES,
    ...SAISON_1_EPISODES,
  ];

  return (
    <Layout>
      {/* Episodes by Season */}
      <section className="section-padding bg-[#1A1515] min-h-screen">
        <div className="container mx-auto container-padding max-w-[1400px]">
          {/* Saison 4 */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Saison 4</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
              {SAISON_4_EPISODES.map((episode, index) => (
                <Link
                  key={episode.id}
                  to={`/episodes/${episode.season}/episode/${episode.id}`}
                  className="flex-none w-[600px] h-[232px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors p-4 relative block"
                >
                  <div className="flex flex-row gap-6 h-full items-stretch">
                    {/* Episode Artwork */}
                    <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-black">
                      {episode.image ? (
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                          <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                            <Play className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <Play className="w-12 h-12 text-white fill-white" />
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
          </div>

          {/* Saison 3 */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Saison 3</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
              {SAISON_3_EPISODES.map((episode, index) => (
                <Link
                  key={episode.id}
                  to={`/episodes/${episode.season}/episode/${episode.id}`}
                  className="flex-none w-[600px] h-[232px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors p-4 relative block"
                >
                  <div className="flex flex-row gap-6 h-full items-stretch">
                    {/* Episode Artwork */}
                    <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-black">
                      {episode.image ? (
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                          <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                            <Play className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <Play className="w-12 h-12 text-white fill-white" />
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
          </div>

          {/* Saison 2 */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Saison 2</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
              {SAISON_2_EPISODES.map((episode, index) => (
                <Link
                  key={episode.id}
                  to={`/episodes/${episode.season}/episode/${episode.id}`}
                  className="flex-none w-[600px] h-[232px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors p-4 relative block"
                >
                  <div className="flex flex-row gap-6 h-full items-stretch">
                    {/* Episode Artwork */}
                    <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-black">
                      {episode.image ? (
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                          <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                            <Play className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <Play className="w-12 h-12 text-white fill-white" />
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
          </div>

          {/* Saison 1 */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Saison 1</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
              {SAISON_1_EPISODES.map((episode, index) => (
                <Link
                  key={episode.id}
                  to={`/episodes/${episode.season}/episode/${episode.id}`}
                  className="flex-none w-[600px] h-[232px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors p-4 relative block"
                >
                  <div className="flex flex-row gap-6 h-full items-stretch">
                    {/* Episode Artwork */}
                    <div className="w-[200px] h-[200px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-black">
                      {episode.image ? (
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-brand-red/20 flex items-center justify-center">
                          <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                            <Play className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <Play className="w-12 h-12 text-white fill-white" />
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
