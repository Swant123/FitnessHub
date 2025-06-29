import { Weight, TrainTrack, UserCheck, Waves, Apple } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Weight,
      title: "Sala Pesi Attrezzata",
      description: "Attrezzature all'avanguardia per allenamento con pesi liberi e macchine isotoniche professionali.",
      color: "bg-[hsl(217,91%,40%)]",
    },
    {
      icon: TrainTrack,
      title: "Area Cardio",
      description: "Tapis roulant, cyclette, ellittiche e stepper di ultima generazione con monitor individuali.",
      color: "bg-[hsl(43,96%,49%)]",
    },
    {
      icon: UserCheck,
      title: "Personal Training",
      description: "Allenamenti personalizzati con istruttori qualificati per raggiungere i tuoi obiettivi specifici.",
      color: "bg-green-500",
    },
    {
      icon: Waves,
      title: "Area Relax",
      description: "Spazi dedicati al recupero con sauna, bagno turco e area stretching per il tuo benessere.",
      color: "bg-purple-500",
    },
    {
      icon: Apple,
      title: "Consulenza Nutrizionale",
      description: "Supporto professionale per un'alimentazione equilibrata e programmi nutrizionali personalizzati.",
      color: "bg-blue-500",
    },
  ];

  return (
    <section id="servizi" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">I Nostri Servizi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi per supportare il tuo percorso di fitness e benessere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                  <service.icon className="text-white text-xl h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Gym Facilities"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(217,91%,40%)]/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
