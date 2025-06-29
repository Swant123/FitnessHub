import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";

export default function PricingSection() {
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

  const plans = [
    {
      name: "Basic",
      price: "€29",
      period: "/mese",
      description: "Perfetto per iniziare",
      features: [
        "Accesso alla sala pesi",
        "Area cardio illimitata",
        "Spogliatoi e docce",
        "Supporto base",
      ],
      buttonText: "Scegli Basic",
      buttonClass: "bg-[hsl(217,91%,40%)] hover:bg-blue-700",
      popular: false,
    },
    {
      name: "Premium",
      price: "€49",
      period: "/mese",
      description: "Il massimo valore",
      features: [
        "Tutto dal piano Basic",
        "Accesso a tutti i corsi",
        "Area relax e spa",
        "1 sessione personal training/mese",
        "Consulenza nutrizionale",
      ],
      buttonText: "Scegli Premium",
      buttonClass: "bg-[hsl(43,96%,49%)] hover:bg-orange-600",
      popular: true,
    },
    {
      name: "Elite",
      price: "€79",
      period: "/mese",
      description: "Esperienza VIP",
      features: [
        "Tutto dal piano Premium",
        "Personal training illimitato",
        "Accesso VIP 24/7",
        "Programmi esclusivi",
        "Priority booking",
      ],
      buttonText: "Scegli Elite",
      buttonClass: "bg-[hsl(217,19%,27%)] hover:bg-gray-800",
      popular: false,
    },
  ];

  return (
    <section id="abbonamenti" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Piani di Abbonamento</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scegli il piano perfetto per le tue esigenze. Tutti i nostri abbonamenti includono accesso completo alle
            strutture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-xl transition-shadow duration-300 relative ${
                plan.popular ? "border-2 border-[hsl(43,96%,49%)] shadow-xl" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[hsl(43,96%,49%)] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Più Popolare
                  </span>
                </div>
              )}
              <CardHeader className="text-center mb-8">
                <CardTitle className="text-2xl font-bold text-charcoal mb-2">{plan.name}</CardTitle>
                <div className={`text-4xl font-bold mb-2 ${plan.popular ? "text-[hsl(43,96%,49%)]" : "text-[hsl(217,91%,40%)]"}`}>
                  {plan.price}
                  <span className="text-lg text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-3 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => window.location.href = `/checkout?plan=${plan.name.toLowerCase()}`}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${plan.buttonClass} text-white`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <Shield className="mr-2 h-5 w-5" />
            <span className="font-semibold">Garanzia soddisfatti o rimborsati entro 30 giorni</span>
          </div>
        </div>
      </div>
    </section>
  );
}
