import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import {
  SITE_CONFIG,
  PODCAST_PLATFORMS,
  SAISON_2_EPISODES,
  SAISON_1_EPISODES,
  FEATURED_EPISODE,
} from "@/lib/constants";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-brand-dark overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-overlay opacity-30" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-brand-red/20" />
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full border border-brand-red/15" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full border border-brand-red/10" />

        <div className="container mx-auto container-padding relative z-10">
          <div className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Content - Main Hero */}
              <div className="lg:col-span-7">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                    Saison 2 disponible
                    <br />
                    dès maintenant.
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 mb-16">
                    1 nouvel épisode chaque mois
                  </p>

                  {/* Platform Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white font-medium px-6 py-3 h-12 rounded-lg transition-all duration-300"
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <span className="text-base mr-2">▶</span>
                        YouTube
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-medium px-6 py-3 h-12 rounded-lg transition-all duration-300"
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <span className="text-base mr-2">♪</span>
                        Spotify
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="bg-[#A238FF] hover:bg-[#A238FF]/90 text-white font-medium px-6 py-3 h-12 rounded-lg transition-all duration-300"
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <span className="text-base mr-2">🎵</span>
                        Deezer
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-[#FA7268] to-[#FF6B9D] hover:from-[#FA7268]/90 hover:to-[#FF6B9D]/90 text-white font-medium px-6 py-3 h-12 rounded-lg transition-all duration-300"
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <span className="text-base mr-2">🎧</span>
                        Apple Podcast
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Content - Featured Episode */}
              <div className="lg:col-span-5">
                <div className="max-w-sm ml-auto">
                  <Badge className="bg-brand-red text-white mb-6 text-sm px-3 py-1.5 font-medium uppercase tracking-wide">
                    DERNIER ÉPISODE
                  </Badge>

                  <Card className="bg-brand-dark-light border border-border/30 rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      {/* Episode Image with people silhouettes */}
                      <div className="aspect-video bg-gradient-to-br from-brand-red/40 to-brand-red/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* People silhouettes in bottom left */}
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          <div className="w-8 h-8 bg-orange-400/80 rounded-full border-2 border-white/30" />
                          <div className="w-8 h-8 bg-blue-400/80 rounded-full border-2 border-white/30" />
                          <div className="w-8 h-8 bg-green-400/80 rounded-full border-2 border-white/30" />
                          <div className="w-8 h-8 bg-purple-400/80 rounded-full border-2 border-white/30" />
                        </div>

                        {/* Play button in center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            size="lg"
                            className="bg-white/25 backdrop-blur-sm border border-white/40 text-white hover:bg-white/35 w-16 h-16 rounded-full p-0"
                          >
                            <Play className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="p-6">
                        <h3 className="text-base font-semibold text-white mb-4 leading-tight">
                          DevQuest : Création d'une conférence dan...
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">
                            À venir • Durée inconnue
                          </span>
                          <Button
                            size="sm"
                            className="bg-brand-red hover:bg-brand-red/90 text-white text-sm px-4 py-2 h-8 rounded-lg"
                          >
                            <Play className="w-3 h-3 mr-2" />
                            Voir Plus
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Sections */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto container-padding">
          {/* Saison 2 */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12">Saison 2</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SAISON_2_EPISODES.map((episode, index) => (
                <Card
                  key={episode.id}
                  className="bg-brand-dark-light border border-border/30 rounded-2xl overflow-hidden hover:border-brand-red/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Episode Thumbnail with people */}
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-red/40 to-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* People silhouettes */}
                        <div className="absolute bottom-2 left-2 flex gap-1">
                          <div className="w-3 h-3 bg-orange-400/80 rounded-full" />
                          <div className="w-3 h-3 bg-blue-400/80 rounded-full" />
                          <div className="w-3 h-3 bg-green-400/80 rounded-full" />
                          <div className="w-3 h-3 bg-purple-400/80 rounded-full" />
                        </div>

                        <Button
                          size="sm"
                          className="bg-white/25 backdrop-blur-sm border border-white/40 text-white hover:bg-white/35 w-8 h-8 rounded-full p-0 relative z-10"
                        >
                          <Play className="w-3 h-3" />
                        </Button>
                      </div>

                      {/* Episode Content */}
                      <div className="flex-1 min-w-0">
                        <Badge className="bg-brand-red/20 text-brand-red border-0 mb-3 text-xs px-2 py-1 rounded-md">
                          Épisode {index + 1}
                        </Badge>
                        <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                          {episode.title}
                        </h3>
                        <p className="text-sm text-white/70 mb-4 leading-relaxed line-clamp-2">
                          {episode.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">
                            {episode.status}
                          </span>
                          <Button
                            size="sm"
                            className="bg-brand-red hover:bg-brand-red/90 text-white text-sm px-4 py-2 h-8 rounded-lg"
                          >
                            <Play className="w-3 h-3 mr-2" />
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
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Saison 1</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SAISON_1_EPISODES.map((episode, index) => (
                <Card
                  key={episode.id}
                  className="bg-brand-dark-light border border-border/30 rounded-2xl overflow-hidden hover:border-brand-red/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Episode Thumbnail with people */}
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-red/40 to-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* People silhouettes */}
                        <div className="absolute bottom-2 left-2 flex gap-1">
                          <div className="w-3 h-3 bg-orange-400/80 rounded-full" />
                          <div className="w-3 h-3 bg-blue-400/80 rounded-full" />
                          <div className="w-3 h-3 bg-green-400/80 rounded-full" />
                          <div className="w-3 h-3 bg-purple-400/80 rounded-full" />
                        </div>

                        <Button
                          size="sm"
                          className="bg-white/25 backdrop-blur-sm border border-white/40 text-white hover:bg-white/35 w-8 h-8 rounded-full p-0 relative z-10"
                        >
                          <Play className="w-3 h-3" />
                        </Button>
                      </div>

                      {/* Episode Content */}
                      <div className="flex-1 min-w-0">
                        <Badge className="bg-green-600/20 text-green-400 border-0 mb-3 text-xs px-2 py-1 rounded-md">
                          Épisode {index + 1}
                        </Badge>
                        <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                          {episode.title}
                        </h3>
                        <p className="text-sm text-white/70 mb-4 leading-relaxed line-clamp-2">
                          {episode.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">
                            {episode.status}
                          </span>
                          <Button
                            size="sm"
                            className="bg-brand-red hover:bg-brand-red/90 text-white text-sm px-4 py-2 h-8 rounded-lg"
                          >
                            <Play className="w-3 h-3 mr-2" />
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
