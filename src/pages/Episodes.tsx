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
import { getAssetUrl } from "@/lib/utils";

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
          {[
            { id: 1, name: "Saison 1", episodes: SAISON_1_EPISODES },
            { id: 2, name: "Saison 2", episodes: SAISON_2_EPISODES },
            { id: 3, name: "Saison 3", episodes: SAISON_3_EPISODES },
            { id: 4, name: "Saison 4", episodes: SAISON_4_EPISODES },
          ].map((season) => (
            <div key={season.id} className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">{season.name}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {season.episodes.map((episode, index) => (
                  <Link
                    key={episode.id}
                    to={`/episodes/${episode.season}/episode/${episode.id}`}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-[1.5rem] overflow-hidden hover:bg-[#222222] transition-colors p-4 relative block"
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
                              <Play className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 py-1 pr-2 flex flex-col h-[160px] justify-between">
                        <div>
                          <div className="text-brand-red text-sm font-semibold mb-2">
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
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
