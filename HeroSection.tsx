import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HeroSection() {
  const heroRef = useScrollReveal<HTMLDivElement>();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(31, 41, 55, 0.8)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[hsl(43,96%,49%)] opacity-20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-10 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[hsl(217,91%,40%)] opacity-30 rounded-full animate-pulse"></div>

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
        {/* Stats bar */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-6 text-white text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>4.9/5 Recensioni</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <span>500+ Membri Attivi</span>
            <div className="w-px h-4 bg-white/30"></div>
            <span>Aperto 7/7</span>
          </div>
        </div>

        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Trasforma il Tuo</span>
            <span className="block gradient-text">Corpo & Mente</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Benvenuto in <strong>Frimarc Sport</strong>, dove innovazione e fitness si incontrano per offrirti un'esperienza di
            allenamento senza pari. Unisciti alla nostra community di oltre 500 membri soddisfatti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => scrollToSection("contatti")}
              className="btn-enhanced bg-[hsl(43,96%,49%)] hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Prova Gratuita - 7 Giorni
            </Button>
            <Button
              onClick={() => scrollToSection("servizi")}
              variant="outline"
              className="btn-enhanced border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Guarda il Tour Virtuale
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Nessun Contratto Vincolante</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Garanzia Soddisfatti o Rimborsati</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Trainers Certificati</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
           onClick={() => scrollToSection("features")}>
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-80">Scorri per esplorare</span>
          <ChevronDown className="text-2xl h-8 w-8" />
        </div>
      </div>
    </section>
  );
}
