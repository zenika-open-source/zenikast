import { Search, Play, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { SAISON_3_EPISODES, SAISON_2_EPISODES, SAISON_1_EPISODES } from "@/lib/constants";

export default function Episodes() {
  const allEpisodes = [...SAISON_3_EPISODES, ...SAISON_2_EPISODES, ...SAISON_1_EPISODES];


  return (
    <Layout>
      {/* Episodes by Season */}
      <section className="section-padding bg-[#1A1515] min-h-screen">
        <div className="container mx-auto container-padding max-w-[1400px]">
          {/* Saison 3 */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Saison 3</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
              {SAISON_3_EPISODES.map((episode, index) => (
                <Card
                  key={episode.id}
                  className="flex-none w-[600px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-6">
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
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Play className="w-12 h-12 text-white fill-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-2 pr-2 flex flex-col justify-between">
                        <div>
                          <div className="text-brand-red text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <div className="text-sm text-white/70">
                            {episode.status}
                          </div>

                          <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-full px-6 transition-colors border border-white/10 flex items-center gap-2">
                            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                              <Play className="w-3 h-3 fill-black ml-0.5" />
                            </span>
                            Voir Plus
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Saison 2 */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Saison 2</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
              {SAISON_2_EPISODES.map((episode, index) => (
                <Card
                  key={episode.id}
                  className="flex-none w-[600px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-6">
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
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Play className="w-12 h-12 text-white fill-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-2 pr-2 flex flex-col justify-between">
                        <div>
                          <div className="text-brand-red text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <div className="text-sm text-white/70">
                            {episode.status}
                          </div>

                          <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-full px-6 transition-colors border border-white/10 flex items-center gap-2">
                            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                              <Play className="w-3 h-3 fill-black ml-0.5" />
                            </span>
                            Voir Plus
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Saison 1 */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Saison 1</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x">
              {SAISON_1_EPISODES.map((episode, index) => (
                <Card
                  key={episode.id}
                  className="flex-none w-[600px] bg-[#221e1f] border-none rounded-[2rem] overflow-hidden snap-start hover:bg-[#2a2527] transition-colors"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-6">
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
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Play className="w-12 h-12 text-white fill-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-2 pr-2 flex flex-col justify-between">
                        <div>
                          <div className="text-brand-red text-sm font-semibold mb-2">
                            Épisode {episode.episodeNumber || index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                            {episode.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2">
                            {episode.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <div className="text-sm text-white/70">
                            {episode.status}
                          </div>

                          <Button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-full px-6 transition-colors border border-white/10 flex items-center gap-2">
                            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                              <Play className="w-3 h-3 fill-black ml-0.5" />
                            </span>
                            Voir Plus
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </section>
    </Layout>
  );
}
