# Frimarc Sport - Website Completo per Palestra

Un sito web moderno e completo per palestre con sistema di gestione integrato, pagamenti Stripe e pannello amministrativo.

## Caratteristiche Principali

### Frontend
- **Design Moderno**: Interfaccia professionale e mobile-responsive
- **Prenotazione Corsi**: Sistema di booking per lezioni di gruppo
- **Pagamenti Integrati**: Checkout sicuro con Stripe per abbonamenti
- **SEO Ottimizzato**: Meta tags, structured data e Open Graph completi
- **Animazioni Avanzate**: Effetti di scroll e micro-interazioni

### Backend e Gestione
- **Pannello Admin**: Dashboard completa per gestire l'attività
- **Database Integrato**: Storage sicuro per contatti e prenotazioni
- **Notifiche Real-time**: Avvisi immediati per nuove attività
- **Esportazione Dati**: CSV export per backup e analisi
- **API RESTful**: Endpoint organizzati per tutte le funzionalità

### Funzionalità Business
- **Gestione Contatti**: Raccolta e organizzazione richieste
- **Prenotazioni Corsi**: Booking system con conferma automatica
- **Abbonamenti**: Vendita piani mensili con Stripe
- **Statistiche**: Dashboard con metriche in tempo reale
- **Ricerca e Filtri**: Strumenti per gestire grandi volumi di dati

## Installazione e Setup

### 1. Clona il Progetto
```bash
git clone [repository-url]
cd frimarc-sport
```

### 2. Installa Dipendenze
```bash
npm install
```

### 3. Configura Variabili d'Ambiente
Crea file `.env` con:
```env
STRIPE_SECRET_KEY=sk_test_...
VITE_STRIPE_PUBLIC_KEY=pk_test_...
DATABASE_URL=postgresql://...
```

### 4. Avvia in Sviluppo
```bash
npm run dev
```

### 5. Build per Produzione
```bash
npm run build
npm start
```

## Struttura del Progetto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componenti UI riutilizzabili
│   │   ├── pages/          # Pagine principali
│   │   ├── hooks/          # Custom hooks React
│   │   └── lib/           # Utility e configurazioni
├── server/                 # Backend Express
│   ├── index.ts           # Server principale
│   ├── routes.ts          # API endpoints
│   ├── storage.ts         # Gestione database
│   └── vite.ts           # Integrazione Vite
├── shared/                # Codice condiviso
│   └── schema.ts         # Schema database e validazioni
└── docs/                 # Documentazione
```

## Utilizzo

### Per l'Utente Finale
1. **Homepage**: Panoramica servizi e informazioni palestra
2. **Sezione Corsi**: Sfoglia e prenota lezioni di gruppo
3. **Abbonamenti**: Acquista piani mensili con pagamento sicuro
4. **Contatti**: Invia richieste di informazioni

### Per la Palestra (Admin)
1. **Accesso**: Vai su `/admin` per il pannello di controllo
2. **Dashboard**: Visualizza statistiche e attività recenti
3. **Gestione**: Organizza contatti, prenotazioni e pagamenti
4. **Notifiche**: Ricevi avvisi in tempo reale per nuove attività

## Personalizzazione

### Contenuti
- Modifica testi in `client/src/components/`
- Sostituisci immagini con foto della tua palestra
- Aggiorna informazioni di contatto in `ContactSection.tsx`

### Styling
- Colori principali in `client/src/index.css`
- Componenti UI in `client/src/components/ui/`
- Layout responsive con Tailwind CSS

### Funzionalità
- Aggiungi nuovi corsi in `ClassesSection.tsx`
- Modifica piani pricing in `PricingSection.tsx`
- Estendi schema database in `shared/schema.ts`

## Integrazione Stripe

### Setup Account Stripe
1. Registrati su [stripe.com](https://stripe.com)
2. Ottieni chiavi API da "Developers > API Keys"
3. Configura webhook per pagamenti (opzionale)

### Test Pagamenti
Usa carte di test Stripe:
- Successo: `4242 4242 4242 4242`
- Fallimento: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

## Database

### Schema Principale
- **users**: Gestione utenti base
- **contacts**: Richieste di contatto dal sito
- **class_bookings**: Prenotazioni corsi di gruppo

### Operazioni CRUD
- Storage in memoria per sviluppo
- PostgreSQL per produzione
- Migrazioni automatiche con Drizzle

## Deployment

### Opzione 1: Replit (Consigliata)
1. Importa progetto su Replit
2. Configura variabili d'ambiente
3. Clicca "Deploy" per andare live

### Opzione 2: Hosting Esterno
1. Build: `npm run build`
2. Deploy cartella `dist/` su Vercel/Netlify
3. Configura database PostgreSQL
4. Imposta variabili d'ambiente

## Supporto e Manutenzione

### Backup
- Esporta dati regolarmente tramite pannello admin
- Backup automatico database (se configurato)

### Aggiornamenti
- Dipendenze: `npm update`
- Security patches automatici
- Nuove funzionalità su richiesta

### Monitoraggio
- Logs accessibili tramite hosting provider
- Metriche business nel pannello admin
- Alerting per errori critici

## Sicurezza

### Dati Sensibili
- Criptografia SSL/TLS automatica
- Validazione input lato server
- Sanitizzazione dati database

### Pagamenti
- PCI compliance tramite Stripe
- Nessun dato carta memorizzato
- Transazioni sicure end-to-end

## Performance

### Ottimizzazioni
- Lazy loading componenti
- Compressione immagini automatica
- Caching strategico
- Bundle splitting intelligente

### Metriche
- Core Web Vitals ottimizzate
- Lighthouse score 90+
- Mobile-first responsive design

## Licenza e Supporto

### Utilizzo Commerciale
- Licenza completa inclusa nell'acquisto
- Codice sorgente modificabile
- Nessuna limitazione d'uso

### Supporto Incluso
- 30 giorni supporto tecnico
- Documentazione completa
- Training 1 ora per pannello admin

### Supporto Esteso (Opzionale)
- Manutenzione continuativa
- Nuove funzionalità custom
- Supporto prioritario

---

**Sviluppato per Frimarc Sport** - Una soluzione completa per palestre moderne che vogliono digitalizzare e automatizzare la gestione clienti.