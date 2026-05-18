import { Users, Heart, Mic, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { SITE_CONFIG } from "@/lib/constants";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />

        <div className="container mx-auto container-padding relative z-10">
          <div className="py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Zenikast<span className="text-brand-red">.</span>
              </h1>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                {SITE_CONFIG.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-brand-dark-light border border-border/30 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Partage
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Nos experts-es accompagnés d'invités-ées partagent leurs connaissances et leurs expériences sur des sujets variés.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark-light border border-border/30 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Veille & Expertise
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    La veille et le partage font partie de Zenika. Dans nos épisodes, nous partageons notre expertise et nos retours d'expérience sur des sujets variés et d'actualité.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark-light border border-border/30 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mic className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Diffusion
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Zenikast est disponible sur les principales plateformes de podcasts (Deezer, Spotify, Apple podcast) et sur Youtube.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
