import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function TrainersSection() {
  const trainers = [
    {
      name: "Marco Rossi",
      role: "Personal Trainer Senior",
      specialization: "Specializzato in CrossFit, Powerlifting e Functional Training",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      certifications: ["CrossFit L2", "NASM-CPT"],
      colors: ["bg-[hsl(217,91%,40%)]", "bg-[hsl(43,96%,49%)]"],
    },
    {
      name: "Sofia Martinez",
      role: "Istruttrice Yoga & Pilates",
      specialization: "Esperta in Hatha Yoga, Vinyasa e Pilates Matwork",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      certifications: ["RYT-500", "Pilates Mat"],
      colors: ["bg-green-500", "bg-purple-500"],
    },
    {
      name: "Alessandro Bianchi",
      role: "Strength & Conditioning",
      specialization: "Specialista in forza atletica e preparazione sportiva",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      certifications: ["CSCS", "FMS"],
      colors: ["bg-[hsl(0,91%,60%)]", "bg-blue-500"],
    },
    {
      name: "Chiara Greco",
      role: "Cardio & Dance Fitness",
      specialization: "Istruttrice Zumba, HIIT e Spinning certificata",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      certifications: ["Zumba", "Spinning"],
      colors: ["bg-pink-500", "bg-[hsl(43,96%,49%)]"],
    },
  ];

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
    <section id="trainers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Il Nostro Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Incontra i nostri istruttori certificati, esperti e appassionati che ti guideranno verso il raggiungimento
            dei tuoi obiettivi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative mb-6">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-[hsl(217,91%,40%)]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">{trainer.name}</h3>
              <p className="text-energetic-orange font-semibold mb-3">{trainer.role}</p>
              <p className="text-gray-600 text-sm mb-4">{trainer.specialization}</p>
              <div className="flex justify-center space-x-2 mb-4">
                {trainer.certifications.map((cert, certIndex) => (
                  <span
                    key={certIndex}
                    className={`${trainer.colors[certIndex]} text-white px-3 py-1 rounded-full text-xs`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <Button
                onClick={() => scrollToSection("contatti")}
                variant="ghost"
                className="text-[hsl(217,91%,40%)] hover:text-blue-700 font-semibold text-sm"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contatta
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
