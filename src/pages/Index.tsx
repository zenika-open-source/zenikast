import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import EpisodeCover from "@/components/EpisodeCover";
import {
  SAISON_2_EPISODES,
  SAISON_1_EPISODES,
} from "@/lib/constants";

export default function Index() {
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
            poster="/Zenikast_bg.png"
          >
            <source src="/Zenikast-intro.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure readability and match brand colors */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <div className="absolute inset-0 grid-overlay opacity-10" />
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card rounded-[40px] p-12 md:p-16 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                    Zenikast
                  </h1>
                  <p className="text-2xl text-white/90 font-medium mb-12">
                    Saison 2
                  </p>
                  
                  <p className="text-lg text-white/80 max-w-md mb-12">
                    Première épisode disponible dès maintenant sur toutes les plateformes
                  </p>

                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/90 text-black font-bold h-14 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Mic className="w-5 h-5 mr-3" />
                    Écouter maintenant
                  </Button>
                </div>

                <div className="hidden md:flex justify-end pt-2">
                  <p className="text-lg text-white/60 font-medium italic">
                    1 nouvel épisode chaque mois
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saison Sections with Tabs */}
      <section className="bg-[#000000] py-12 min-h-screen">
        <div className="container mx-auto container-padding">
          <Tabs defaultValue="saison-2" className="w-full">
            <div className="flex items-center justify-between mb-16 px-2">
              <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Épisodes</h2>
              <TabsList className="bg-white/5 border border-white/10 p-1 h-12 rounded-full">
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

            <TabsContent value="saison-2" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SAISON_2_EPISODES.map((episode) => (
                  <EpisodeCover
                    key={episode.id}
                    title={episode.title}
                    commentedBy={episode.commentedBy}
                    guests={episode.guests}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saison-1" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SAISON_1_EPISODES.map((episode) => (
                  <EpisodeCover
                    key={episode.id}
                    title={episode.title}
                    commentedBy={episode.commentedBy}
                    guests={episode.guests}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
