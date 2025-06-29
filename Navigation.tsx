import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Dumbbell } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "corsi", label: "Corsi" },
    { id: "servizi", label: "Servizi" },
    { id: "abbonamenti", label: "Abbonamenti" },
    { id: "trainers", label: "Trainers" },
    { id: "contatti", label: "Contatti" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 navbar-blur border-b border-gray-200 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
              <Dumbbell className="h-8 w-8 text-electric-blue mr-3" />
              <span className="text-2xl font-bold text-charcoal">Frimarc Sport</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-charcoal hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => window.location.href = "/admin"}
              variant="outline"
              className="text-sm"
            >
              Admin
            </Button>
            <Button
              onClick={() => scrollToSection("abbonamenti")}
              className="bg-[hsl(217,91%,40%)] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Iscriviti Ora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left px-3 py-2 text-base font-medium text-charcoal hover:text-electric-blue hover:bg-gray-50 rounded-md transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4">
                    <Button
                      onClick={() => scrollToSection("abbonamenti")}
                      className="w-full bg-[hsl(217,91%,40%)] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                    >
                      Iscriviti Ora
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
