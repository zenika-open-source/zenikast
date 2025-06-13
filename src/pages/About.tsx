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
                À propos de <span className="text-brand-red">Zenikast</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Notre Mission
                </h2>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Chez Zenikast, nous croyons que la mindfulness et la
                  croissance personnelle doivent être accessibles à tous. Notre
                  podcast explore les sujets qui comptent vraiment dans notre
                  développement personnel et professionnel.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Chaque épisode est conçu pour vous offrir des insights
                  pratiques, des conversations authentiques et des outils
                  concrets pour votre parcours de développement.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-red/40 to-brand-red/20 rounded-2xl flex items-center justify-center">
                  <Headphones className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-brand-dark-light border border-border/30 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Authenticité
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Nous privilégions les conversations vraies et les
                    expériences authentiques plutôt que les discours
                    superficiels.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark-light border border-border/30 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Communauté
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Nous construisons une communauté bienveillante où chacun
                    peut partager et apprendre ensemble.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark-light border border-border/30 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mic className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Qualité
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Chaque épisode est soigneusement préparé pour vous offrir le
                    meilleur contenu possible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              L'Équipe Zenikast
            </h2>
            <p className="text-lg text-white/80 mb-16 leading-relaxed">
              Notre équipe est composée de passionnés de développement
              personnel, de technologie et de mindfulness. Nous apportons notre
              expertise et notre expérience pour créer des contenus qui
              comptent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <Card
                  key={member}
                  className="bg-brand-dark-light border border-border/30 rounded-2xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-red/40 to-brand-red/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Membre de l'équipe
                    </h3>
                    <p className="text-sm text-white/70">
                      Expert en développement personnel
                    </p>
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
