import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
import LoadingSpinner from "@/components/LoadingSpinner";
import NotificationSystem from "@/components/NotificationSystem";
import { 
  Users, 
  Calendar, 
  CreditCard, 
  TrendingUp, 
  Mail, 
  Phone, 
  Search,
  Filter,
  Download,
  Eye,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock,
  ArrowLeft
} from "lucide-react";
import { format } from "date-fns";
import { it } from "date-fns/locale";

export default function Admin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Fetch contacts
  const { data: contactsResponse, isLoading: contactsLoading } = useQuery({
    queryKey: ['/api/contacts'],
    queryFn: async () => {
      const response = await apiRequest('GET', '/api/contacts');
      return response.json();
    },
  });

  // Fetch bookings
  const { data: bookingsResponse, isLoading: bookingsLoading } = useQuery({
    queryKey: ['/api/bookings'],
    queryFn: async () => {
      const response = await apiRequest('GET', '/api/bookings');
      return response.json();
    },
  });

  const contacts = contactsResponse || [];
  const bookings = bookingsResponse || [];

  // Mock payment data (in realtà verrebbe da Stripe)
  const mockPayments = [
    {
      id: 1,
      customerName: "Marco Rossi",
      email: "marco.rossi@email.com",
      plan: "Premium",
      amount: "€49",
      status: "completed",
      date: new Date(),
      transactionId: "pi_1234567890"
    },
    {
      id: 2,
      customerName: "Sofia Bianchi",
      email: "sofia.bianchi@email.com",
      plan: "Elite",
      amount: "€79",
      status: "completed",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      transactionId: "pi_0987654321"
    },
    {
      id: 3,
      customerName: "Luca Verdi",
      email: "luca.verdi@email.com",
      plan: "Basic",
      amount: "€29",
      status: "failed",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      transactionId: "pi_1122334455"
    }
  ];

  const filteredContacts = contacts.filter((contact: any) =>
    contact.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBookings = bookings.filter((booking: any) =>
    booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.className?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completato</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Fallito</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">In Attesa</Badge>;
      default:
        return <Badge variant="secondary">Sconosciuto</Badge>;
    }
  };

  const stats = [
    {
      title: "Nuovi Contatti",
      value: contacts.length,
      icon: Mail,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Prenotazioni Corsi",
      value: bookings.length,
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Pagamenti Oggi",
      value: mockPayments.filter(p => 
        format(p.date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
      ).length,
      icon: CreditCard,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Ricavi Mensili",
      value: "€" + mockPayments.filter(p => p.status === 'completed')
        .reduce((sum, p) => sum + parseInt(p.amount.replace('€', '')), 0),
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  if (contactsLoading || bookingsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center mb-2">
              <Button
                variant="ghost"
                onClick={() => window.location.href = "/"}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Torna al Sito
              </Button>
              <h1 className="text-3xl font-bold text-charcoal">Pannello Amministrativo</h1>
            </div>
            <p className="text-gray-600">Gestisci contatti, prenotazioni e pagamenti di Frimarc Sport</p>
          </div>
          <NotificationSystem />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                    <p className="text-3xl font-bold text-charcoal">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Cerca per nome, email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filtra per stato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutti gli stati</SelectItem>
                  <SelectItem value="completed">Completati</SelectItem>
                  <SelectItem value="pending">In attesa</SelectItem>
                  <SelectItem value="failed">Falliti</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Esporta CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="contacts" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contacts">Contatti ({contacts.length})</TabsTrigger>
            <TabsTrigger value="bookings">Prenotazioni ({bookings.length})</TabsTrigger>
            <TabsTrigger value="payments">Pagamenti ({mockPayments.length})</TabsTrigger>
          </TabsList>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Richieste di Contatto</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Telefono</TableHead>
                      <TableHead>Interesse</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Azioni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact: any) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">
                          {contact.firstName} {contact.lastName}
                        </TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.phone || 'Non fornito'}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{contact.interest || 'Generale'}</Badge>
                        </TableCell>
                        <TableCell>
                          {format(new Date(contact.createdAt), 'dd MMM yyyy', { locale: it })}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Mail className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Prenotazioni Corsi</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Corso</TableHead>
                      <TableHead>Telefono</TableHead>
                      <TableHead>Data Prenotazione</TableHead>
                      <TableHead>Stato</TableHead>
                      <TableHead>Azioni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking: any) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.name}</TableCell>
                        <TableCell>{booking.email}</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800">{booking.className}</Badge>
                        </TableCell>
                        <TableCell>{booking.phone || 'Non fornito'}</TableCell>
                        <TableCell>
                          {format(new Date(booking.createdAt), 'dd MMM yyyy HH:mm', { locale: it })}
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">Confermata</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Transazioni e Abbonamenti</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Piano</TableHead>
                      <TableHead>Importo</TableHead>
                      <TableHead>Stato</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>ID Transazione</TableHead>
                      <TableHead>Azioni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.customerName}</TableCell>
                        <TableCell>{payment.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{payment.plan}</Badge>
                        </TableCell>
                        <TableCell className="font-semibold">{payment.amount}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell>
                          {format(payment.date, 'dd MMM yyyy HH:mm', { locale: it })}
                        </TableCell>
                        <TableCell className="font-mono text-sm">{payment.transactionId}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}