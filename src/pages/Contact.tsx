import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />

        <div className="container mx-auto container-padding relative z-10">
          <div className="py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Contactez <span className="text-brand-red">Zenikast</span>
              </h1>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Nous serions ravis d'entendre vos retours, suggestions ou
                questions. N'hésitez pas à nous contacter !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="bg-brand-dark-light border border-border/30 rounded-2xl">
                  <CardHeader className="p-8 pb-6">
                    <CardTitle className="text-2xl font-bold text-white">
                      Envoyez-nous un message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Prénom
                          </label>
                          <Input
                            placeholder="Votre prénom"
                            className="bg-brand-dark border-border text-white placeholder:text-white/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Nom
                          </label>
                          <Input
                            placeholder="Votre nom"
                            className="bg-brand-dark border-border text-white placeholder:text-white/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="votre.email@exemple.com"
                          className="bg-brand-dark border-border text-white placeholder:text-white/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Sujet
                        </label>
                        <Input
                          placeholder="Le sujet de votre message"
                          className="bg-brand-dark border-border text-white placeholder:text-white/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Message
                        </label>
                        <Textarea
                          placeholder="Votre message..."
                          rows={6}
                          className="bg-brand-dark border-border text-white placeholder:text-white/50 resize-none"
                        />
                      </div>

                      <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-3 h-12">
                        <Mail className="w-4 h-4 mr-2" />
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Informations de contact
                  </h2>
                  <p className="text-lg text-white/80 mb-8 leading-relaxed">
                    Vous pouvez nous contacter directement via les moyens
                    suivants ou utiliser le formulaire ci-contre.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-brand-dark-light border border-border/30 rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-brand-red" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Email
                          </h3>
                          <p className="text-white/70">hello@zenikast.com</p>
                          <p className="text-sm text-white/60 mt-1">
                            Nous répondons généralement sous 24h
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-brand-dark-light border border-border/30 rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-6 h-6 text-brand-red" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Réseaux sociaux
                          </h3>
                          <p className="text-white/70">@zenikast</p>
                          <p className="text-sm text-white/60 mt-1">
                            Suivez-nous pour les dernières actualités
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-brand-dark-light border border-border/30 rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-brand-red" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Horaires de réponse
                          </h3>
                          <p className="text-white/70">Lundi - Vendredi</p>
                          <p className="text-sm text-white/60 mt-1">
                            9h00 - 18h00 (CET)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-brand-dark-light border border-border/30 rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-brand-red" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Localisation
                          </h3>
                          <p className="text-white/70">Nantes, France</p>
                          <p className="text-sm text-white/60 mt-1">
                            Bassin nantais
                          </p>
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

      {/* FAQ Section */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Comment puis-je proposer un sujet d'épisode ?",
                  answer:
                    "Nous sommes toujours ouverts à vos suggestions ! Envoyez-nous un email avec votre idée et nous l'étudierons pour de futurs épisodes.",
                },
                {
                  question: "Puis-je être invité sur le podcast ?",
                  answer:
                    "Absolument ! Si vous avez une expertise intéressante à partager, contactez-nous avec une présentation de votre parcours et de ce que vous aimeriez partager.",
                },
                {
                  question:
                    "À quelle fréquence sortent les nouveaux épisodes ?",
                  answer:
                    "Nous publions un nouvel épisode chaque mois. Abonnez-vous à notre newsletter pour être notifié des nouvelles sorties.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="bg-brand-dark-light border border-border/30 rounded-xl"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {faq.answer}
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
