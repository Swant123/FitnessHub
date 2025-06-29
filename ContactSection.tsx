import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2, "Nome deve essere di almeno 2 caratteri"),
  lastName: z.string().min(2, "Cognome deve essere di almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Messaggio deve essere di almeno 10 caratteri"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Messaggio Inviato!",
        description: "Ti contatteremo presto. Grazie per il tuo interesse!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Errore",
        description: "Si è verificato un errore nell'invio del messaggio. Riprova.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Indirizzo",
      content: ["Via dello Sport, 123", "20100 Milano, MI"],
      color: "bg-[hsl(217,91%,40%)]",
    },
    {
      icon: Phone,
      title: "Telefono",
      content: ["+39 02 1234 5678"],
      color: "bg-[hsl(43,96%,49%)]",
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@frimarcsport.it"],
      color: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Orari di Apertura",
      content: ["Lunedì - Venerdì: 6:00 - 24:00", "Sabato - Domenica: 8:00 - 22:00"],
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="contatti" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Contattaci</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hai domande o vuoi iniziare il tuo percorso fitness? Siamo qui per aiutarti. Contattaci o vieni a trovarci!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-charcoal">Invia un Messaggio</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Il tuo nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cognome</FormLabel>
                          <FormControl>
                            <Input placeholder="Il tuo cognome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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
                        <FormLabel>Telefono</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+39 123 456 7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interesse</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleziona il tuo interesse" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="membership">Abbonamento</SelectItem>
                            <SelectItem value="personal-training">Personal Training</SelectItem>
                            <SelectItem value="classes">Corsi di gruppo</SelectItem>
                            <SelectItem value="nutrition">Consulenza nutrizionale</SelectItem>
                            <SelectItem value="other">Altro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Messaggio</FormLabel>
                        <FormControl>
                          <Textarea rows={4} placeholder="Scrivi il tuo messaggio qui..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[hsl(217,91%,40%)] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                    disabled={contactMutation.isPending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? "Inviando..." : "Invia Messaggio"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-charcoal">Informazioni di Contatto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="text-white text-xl h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">{info.title}</h4>
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-gray-600">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-charcoal">Dove Siamo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mb-4 mx-auto" />
                    <p className="font-semibold">Mappa Interattiva</p>
                    <p className="text-sm">Via dello Sport, 123 - Milano</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
