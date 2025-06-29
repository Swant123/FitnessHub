import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Clock, Users, Star, Calendar, Zap } from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Nome deve essere di almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().optional(),
  className: z.string(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function ClassesSection() {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const sectionRef = useScrollReveal<HTMLElement>();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      className: "",
    },
  });

  const bookClassMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      toast({
        title: "Prenotazione Confermata!",
        description: "Ti contatteremo presto per confermare la tua lezione.",
      });
      form.reset();
      setIsDialogOpen(false);
    },
    onError: () => {
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante la prenotazione. Riprova.",
        variant: "destructive",
      });
    },
  });

  const handleBookClass = (className: string) => {
    setSelectedClass(className);
    form.setValue("className", className);
    setIsDialogOpen(true);
  };

  const onSubmit = (data: BookingFormData) => {
    bookClassMutation.mutate(data);
  };

  const classes = [
    {
      name: "CrossFit",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      intensity: "Alta Intensità",
      intensityColor: "bg-[hsl(0,91%,60%)]",
      description: "Allenamento funzionale ad alta intensità per sviluppare forza, resistenza e agilità.",
      duration: "45 min",
      maxParticipants: "Max 15",
      rating: 4.8,
      nextClass: "Oggi 18:00",
      trainer: "Marco Rossi",
      price: "€25",
    },
    {
      name: "Yoga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      intensity: "Rilassante",
      intensityColor: "bg-green-500",
      description: "Lezioni di yoga per migliorare flessibilità, equilibrio e benessere mentale.",
      duration: "60 min",
      maxParticipants: "Max 20",
      rating: 4.9,
      nextClass: "Domani 09:00",
      trainer: "Sofia Martinez",
      price: "€20",
    },
    {
      name: "Spinning",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      intensity: "Cardio",
      intensityColor: "bg-[hsl(43,96%,49%)]",
      description: "Allenamento cardiovascolare intensivo su bike stazionarie con musica motivante.",
      duration: "45 min",
      maxParticipants: "Max 25",
      rating: 4.7,
      nextClass: "Oggi 19:30",
      trainer: "Chiara Greco",
      price: "€22",
    },
    {
      name: "Pilates",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      intensity: "Core",
      intensityColor: "bg-purple-500",
      description: "Esercizi di controllo e precisione per rafforzare il core e migliorare la postura.",
      duration: "50 min",
      maxParticipants: "Max 18",
      rating: 4.6,
      nextClass: "Domani 10:30",
      trainer: "Sofia Martinez",
      price: "€23",
    },
    {
      name: "HIIT",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      intensity: "Intensivo",
      intensityColor: "bg-[hsl(0,91%,60%)]",
      description: "Allenamento ad intervalli ad alta intensità per massimizzare il consumo calorico.",
      duration: "30 min",
      maxParticipants: "Max 12",
      rating: 4.8,
      nextClass: "Oggi 17:00",
      trainer: "Alessandro Bianchi",
      price: "€28",
    },
    {
      name: "Zumba",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      intensity: "Danza",
      intensityColor: "bg-pink-500",
      description: "Fitness danzante che combina movimenti facili con musica latina e internazionale.",
      duration: "55 min",
      maxParticipants: "Max 30",
      rating: 4.9,
      nextClass: "Oggi 20:00",
      trainer: "Chiara Greco",
      price: "€18",
    },
  ];

  return (
    <section ref={sectionRef} id="corsi" className="py-20 bg-gradient-to-br from-gray-50 to-white fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            I Nostri <span className="gradient-text">Corsi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dalle lezioni ad alta intensità ai programmi di rilassamento, abbiamo il corso perfetto per ogni livello di
            fitness. Unisciti ai nostri corsi con trainers certificati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card key={index} className="overflow-hidden hover-lift bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="relative overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.name} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <Badge className={`${classItem.intensityColor} text-white border-0`}>
                    {classItem.intensity}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {classItem.price}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center">
                  <Star className="w-3 h-3 text-yellow-500 mr-1" />
                  <span className="text-sm font-semibold text-gray-800">{classItem.rating}</span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-charcoal">{classItem.name}</CardTitle>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{classItem.nextClass}</span>
                  <span className="mx-2">•</span>
                  <span>{classItem.trainer}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{classItem.description}</p>
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{classItem.maxParticipants}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Zap className="mr-2 h-4 w-4" />
                    <span>{classItem.intensity}</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleBookClass(classItem.name)}
                  className="w-full btn-enhanced bg-[hsl(217,91%,40%)] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Prenota Lezione
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Prenota {selectedClass}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Il tuo nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="la-tua-email@esempio.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefono (opzionale)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+39 123 456 7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-[hsl(217,91%,40%)] hover:bg-blue-700"
                  disabled={bookClassMutation.isPending}
                >
                  {bookClassMutation.isPending ? (
                    <div className="flex items-center">
                      <LoadingSpinner size="small" />
                      <span className="ml-2">Prenotando...</span>
                    </div>
                  ) : (
                    "Conferma Prenotazione"
                  )}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
