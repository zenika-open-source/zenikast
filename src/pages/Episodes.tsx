import { Search, Play, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { SAISON_2_EPISODES, SAISON_1_EPISODES } from "@/lib/constants";

export default function Episodes() {
  const allEpisodes = [...SAISON_2_EPISODES, ...SAISON_1_EPISODES];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-brand-dark">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Tous les <span className="text-brand-red">Épisodes</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Explorez notre bibliothèque complète d'épisodes sur la mindfulness
              et la croissance personnelle.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Rechercher des épisodes..."
                  className="pl-10 h-12 bg-card border-border text-white"
                />
              </div>
              <Button
                variant="outline"
                className="h-12 px-6 border-border text-white hover:bg-card"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes by Season */}
      <section className="section-padding bg-brand-dark">
        <div className="container mx-auto container-padding">
          {/* Saison 2 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Saison 2</h2>
            <div className="space-y-6">
              {SAISON_2_EPISODES.map((episode, index) => (
                <Card
                  key={episode.id}
                  className="episode-card bg-card-gradient"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Episode Artwork */}
                      <div className="md:w-48 md:h-48 aspect-square bg-brand-red/20 relative overflow-hidden md:rounded-l-2xl flex items-center justify-center">
                        <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                          <Play className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 mb-3">
                                Saison 2 • Épisode {index + 1}
                              </Badge>
                              <h3 className="text-xl font-bold mb-2 text-white hover:text-brand-red transition-colors cursor-pointer">
                                {episode.title}
                              </h3>
                              <p className="text-white/70 leading-relaxed">
                                {episode.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                            <div className="text-sm text-white/60">
                              {episode.status}
                            </div>

                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-border text-white hover:bg-card"
                              >
                                Partager
                              </Button>
                              <Button className="bg-primary hover:bg-primary/90">
                                <Play className="w-4 h-4 mr-2" />
                                Écouter
                              </Button>
                            </div>
                          </div>
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
            <h2 className="text-3xl font-bold text-white mb-8">Saison 1</h2>
            <div className="space-y-6">
              {SAISON_1_EPISODES.map((episode, index) => (
                <Card
                  key={episode.id}
                  className="episode-card bg-card-gradient"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Episode Artwork */}
                      <div className="md:w-48 md:h-48 aspect-square bg-brand-red/20 relative overflow-hidden md:rounded-l-2xl flex items-center justify-center">
                        <div className="w-20 h-20 bg-brand-red/30 rounded-2xl flex items-center justify-center">
                          <Play className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-3">
                                Saison 1 • Épisode {index + 1}
                              </Badge>
                              <h3 className="text-xl font-bold mb-2 text-white hover:text-brand-red transition-colors cursor-pointer">
                                {episode.title}
                              </h3>
                              <p className="text-white/70 leading-relaxed">
                                {episode.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                            <div className="text-sm text-white/60">
                              {episode.status}
                            </div>

                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-border text-white hover:bg-card"
                              >
                                Partager
                              </Button>
                              <Button className="bg-primary hover:bg-primary/90">
                                <Play className="w-4 h-4 mr-2" />
                                Écouter
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-border text-white hover:bg-card"
            >
              Charger plus d'épisodes
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
