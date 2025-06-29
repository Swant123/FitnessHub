import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";
import { z } from "zod";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "Nome deve essere di almeno 2 caratteri"),
  lastName: z.string().min(2, "Cognome deve essere di almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().min(10, "Numero di telefono non valido"),
  cardNumber: z.string().min(16, "Numero carta non valido"),
  expiryDate: z.string().min(5, "Data scadenza non valida"),
  cvv: z.string().min(3, "CVV non valido"),
  billingAddress: z.string().min(5, "Indirizzo richiesto"),
  city: z.string().min(2, "Città richiesta"),
  postalCode: z.string().min(5, "CAP richiesto"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      billingAddress: "",
      city: "",
      postalCode: "",
    },
  });

  useEffect(() => {
    // Get the selected plan from URL params or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const planType = urlParams.get('plan');
    
    const plans = {
      basic: {
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
      },
      premium: {
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
      },
      elite: {
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
      },
    };

    if (planType && plans[planType as keyof typeof plans]) {
      setSelectedPlan(plans[planType as keyof typeof plans]);
    } else {
      // Default to premium if no plan specified
      setSelectedPlan(plans.premium);
    }
  }, []);

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Pagamento Completato!",
      description: `Benvenuto in Frimarc Sport! Il tuo abbonamento ${selectedPlan?.name} è ora attivo.`,
    });
    
    setIsProcessing(false);
    
    // Redirect to success page or home
    setTimeout(() => {
      setLocation("/");
    }, 2000);
  };

  if (!selectedPlan) {
    return <div>Caricamento...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla Home
          </Button>
          <h1 className="text-3xl font-bold text-charcoal">Completa il tuo Acquisto</h1>
          <p className="text-gray-600 mt-2">Finalizza il tuo abbonamento a Frimarc Sport</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-charcoal flex items-center">
                <CreditCard className="mr-3 h-6 w-6" />
                Dettagli di Pagamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Informazioni Personali</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Mario" {...field} />
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
                              <Input placeholder="Rossi" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="mario.rossi@email.com" {...field} />
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
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Informazioni di Pagamento</h3>
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numero Carta</FormLabel>
                          <FormControl>
                            <Input placeholder="1234 5678 9012 3456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Data Scadenza</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/AA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cvv"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVV</FormLabel>
                            <FormControl>
                              <Input placeholder="123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Billing Address */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Indirizzo di Fatturazione</h3>
                    <FormField
                      control={form.control}
                      name="billingAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Indirizzo</FormLabel>
                          <FormControl>
                            <Input placeholder="Via Roma, 123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Città</FormLabel>
                            <FormControl>
                              <Input placeholder="Milano" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CAP</FormLabel>
                            <FormControl>
                              <Input placeholder="20100" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[hsl(217,91%,40%)] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Elaborando Pagamento..." : `Paga ${selectedPlan.price}${selectedPlan.period}`}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-charcoal">Riepilogo Ordine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">{selectedPlan.name}</h4>
                    <span className="text-2xl font-bold text-[hsl(217,91%,40%)]">
                      {selectedPlan.price}{selectedPlan.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{selectedPlan.description}</p>
                  
                  <Separator />
                  
                  <div>
                    <h5 className="font-semibold mb-3">Incluso nel piano:</h5>
                    <ul className="space-y-2">
                      {selectedPlan.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <Check className="text-green-500 mr-3 h-4 w-4" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotale</span>
                      <span>{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IVA (22%)</span>
                      <span>€{Math.round(parseInt(selectedPlan.price.replace('€', '')) * 0.22)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Totale</span>
                      <span>€{Math.round(parseInt(selectedPlan.price.replace('€', '')) * 1.22)}{selectedPlan.period}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <Shield className="text-green-600 mr-3 h-5 w-5" />
                  <h4 className="font-semibold text-green-800">Pagamento Sicuro</h4>
                </div>
                <p className="text-green-700 text-sm">
                  I tuoi dati di pagamento sono protetti con crittografia SSL a 256 bit. 
                  Non memorizziamo le informazioni della tua carta di credito.
                </p>
              </CardContent>
            </Card>

            {/* Money Back Guarantee */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <Shield className="text-blue-600 mr-3 h-5 w-5" />
                  <h4 className="font-semibold text-blue-800">Garanzia 30 Giorni</h4>
                </div>
                <p className="text-blue-700 text-sm">
                  Non soddisfatto? Cancella entro 30 giorni per un rimborso completo, 
                  senza domande.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}