import { Dumbbell, Users, Clock, Heart, Award, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FeaturesSection() {
  const featuresRef = useScrollReveal<HTMLDivElement>();

  const features = [
    {
      icon: Dumbbell,
      title: "Attrezzature Moderne",
      description: "Macchinari di ultima generazione per ogni tipo di allenamento",
      color: "bg-[hsl(217,91%,40%)] group-hover:bg-[hsl(43,96%,49%)]",
      stats: "200+ Attrezzi",
    },
    {
      icon: Users,
      title: "Trainers Esperti",
      description: "Istruttori certificati pronti a guidarti verso i tuoi obiettivi",
      color: "bg-[hsl(217,91%,40%)] group-hover:bg-[hsl(43,96%,49%)]",
      stats: "15+ Trainers",
    },
    {
      icon: Clock,
      title: "Orari Flessibili",
      description: "Aperto dalle 6:00 alle 24:00, 7 giorni su 7",
      color: "bg-[hsl(217,91%,40%)] group-hover:bg-[hsl(43,96%,49%)]",
      stats: "18h/Giorno",
    },
    {
      icon: Heart,
      title: "Ambiente Motivante",
      description: "Comunità di fitness entusiasta e supportiva",
      color: "bg-[hsl(217,91%,40%)] group-hover:bg-[hsl(43,96%,49%)]",
      stats: "500+ Membri",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Palestra dell'Anno 2024",
      subtitle: "Riconoscimento Fitness Italia"
    },
    {
      icon: Zap,
      title: "Tecnologia Smart",
      subtitle: "App dedicata e tracking"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={featuresRef} className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Perché Scegliere <span className="gradient-text">Frimarc Sport</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La nostra palestra combina tecnologia all'avanguardia, istruttori qualificati e un ambiente motivante per
            garantirti risultati eccezionali. Scopri cosa ci rende unici.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover-lift bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:rotate-6`}
              >
                <feature.icon className="text-white text-3xl h-10 w-10" />
              </div>
              <div className="mb-2">
                <span className="inline-block bg-[hsl(43,96%,49%)] text-white text-sm px-3 py-1 rounded-full font-semibold">
                  {feature.stats}
                </span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gradient-to-r from-[hsl(217,91%,40%)] to-[hsl(43,96%,49%)] rounded-2xl p-6 text-white hover-lift"
            >
              <achievement.icon className="w-8 h-8 mr-4" />
              <div>
                <h4 className="font-bold text-lg">{achievement.title}</h4>
                <p className="text-white/90 text-sm">{achievement.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-6">La Tua Soddisfazione è Garantita</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">7 Giorni Gratis</h4>
                <p className="text-gray-600 text-sm">Prova tutti i nostri servizi</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-xl">30</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">Garanzia 30 Giorni</h4>
                <p className="text-gray-600 text-sm">Rimborso completo se non soddisfatto</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-xl">∞</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">Nessun Vincolo</h4>
                <p className="text-gray-600 text-sm">Cancellazione in qualsiasi momento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
