import { Dumbbell } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
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

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "corsi", label: "Corsi" },
    { id: "servizi", label: "Servizi" },
    { id: "abbonamenti", label: "Abbonamenti" },
    { id: "trainers", label: "Trainers" },
  ];

  const services = [
    "Personal Training",
    "Corsi di Gruppo",
    "Consulenza Nutrizionale",
    "Area Relax",
    "Valutazione Fisica",
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[hsl(217,19%,27%)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-[hsl(217,91%,40%)] mr-3" />
              <span className="text-2xl font-bold">Frimarc Sport</span>
            </div>
            <p className="text-gray-400 mb-4">
              La tua palestra moderna per un fitness innovativo e risultati eccezionali.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-[hsl(217,91%,40%)] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <MapPin className="inline mr-2 h-4 w-4" />
                Via dello Sport, 123, Milano
              </p>
              <p>
                <Phone className="inline mr-2 h-4 w-4" />
                +39 02 1234 5678
              </p>
              <p>
                <Mail className="inline mr-2 h-4 w-4" />
                info@frimarcsport.it
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Frimarc Sport. Tutti i diritti riservati.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Termini di Servizio
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Import missing icons
import { MapPin, Phone, Mail } from "lucide-react";
