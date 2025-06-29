# Guida Amministrativa - Frimarc Sport

## Come Gestire le Prenotazioni e i Pagamenti

Questa guida spiega come la palestra può monitorare e gestire tutte le attività del sito web dopo la vendita.

### Accesso al Pannello Amministrativo

1. **URL di accesso**: `https://tuo-sito.replit.app/admin`
2. **Accesso rapido**: Clicca sul pulsante "Admin" nella barra di navigazione del sito
3. **Bookmark consigliato**: Salva l'URL nei preferiti per accesso rapido

### Dashboard Principale

Il pannello mostra immediatamente:
- **Nuovi Contatti**: Richieste di informazioni
- **Prenotazioni Corsi**: Lezioni prenotate dai clienti  
- **Pagamenti**: Transazioni completate oggi
- **Ricavi Mensili**: Totale entrate del mese

### Gestione Contatti

**Sezione: Contatti**
- Visualizza tutte le richieste di informazioni
- Filtri per nome, email, tipo di interesse
- Informazioni complete: nome, email, telefono, messaggio
- Data e ora di invio della richiesta

**Azioni disponibili**:
- **Visualizza**: Dettagli completi del messaggio
- **Email**: Risposta diretta (integrazione email)
- **Esporta**: Download CSV per backup

### Gestione Prenotazioni Corsi

**Sezione: Prenotazioni**
- Lista completa delle prenotazioni per corso
- Dettagli partecipante: nome, email, telefono
- Corso prenotato e orario
- Stato della prenotazione

**Azioni disponibili**:
- **Conferma**: Conferma presenza
- **Cancella**: Cancellazione prenotazione
- **Contatta**: Comunicazione diretta con il cliente

### Gestione Pagamenti e Abbonamenti

**Sezione: Pagamenti**
- Cronologia completa delle transazioni
- Stati pagamento: Completato, Fallito, In Attesa
- Dettagli cliente e piano scelto
- ID transazione Stripe per riferimento
- Importi e date

**Informazioni per ogni transazione**:
- Nome cliente e email
- Piano acquistato (Basic, Premium, Elite)
- Importo pagato
- Data e ora del pagamento
- Codice di riferimento univoco

### Sistema di Notifiche

**Notifiche in tempo reale**:
- Campanella rossa indica nuove attività
- Notifiche immediate per:
  - Nuovi contatti
  - Prenotazioni corsi
  - Pagamenti completati

**Come funziona**:
1. Nuova attività = notifica immediata
2. Clicca sulla campanella per vedere dettagli
3. "Segna come letta" per rimuovere l'avviso

### Funzioni di Ricerca e Filtro

**Ricerca globale**:
- Cerca per nome, email in tutte le sezioni
- Filtri per stato (completato, in attesa, fallito)
- Filtri per data e periodo

**Esportazione dati**:
- Bottone "Esporta CSV" per backup
- Include tutti i dati filtrati
- Utile per contabilità e analisi

### Flusso Tipico di Lavoro

**Mattina**:
1. Accedi al pannello admin
2. Controlla notifiche nuove
3. Revisa prenotazioni del giorno
4. Conferma presenza corsisti

**Durante il giorno**:
- Ricevi notifiche in tempo reale
- Rispondi a richieste di contatto
- Monitora nuovi abbonamenti

**Sera**:
- Controlla ricavi giornalieri
- Esporta dati se necessario
- Pianifica attività seguente

### Integrazione con Stripe

**Per i pagamenti**:
- Tutti i pagamenti passano attraverso Stripe
- ID transazione univoco per ogni pagamento
- Stati automatici: successo/fallimento
- Rimborsi gestiti tramite dashboard Stripe

**Accesso Stripe**:
- Dashboard separata su stripe.com
- Stessi ID transazione per confronto
- Gestione rimborsi e dispute

### Supporto e Manutenzione

**Backup automatico**:
- Tutti i dati sono salvati automaticamente
- Esporta CSV regolarmente per sicurezza

**Accesso sicuro**:
- URL admin deve essere protetto
- Solo staff autorizzato deve conoscere l'accesso
- Cambiare URL se necessario per sicurezza

### Domande Frequenti

**Q: Come vedo se qualcuno ha comprato un abbonamento?**
A: Sezione "Pagamenti" mostra tutte le transazioni completate con dettagli cliente e piano.

**Q: Posso cancellare una prenotazione?**
A: Si, nella sezione "Prenotazioni" clicca l'icona X per cancellare.

**Q: Come contatto un cliente?**
A: Clicca l'icona email in qualsiasi sezione per aprire il client di posta.

**Q: I dati sono sicuri?**
A: Si, tutto è criptato e salvato automaticamente. Esporta CSV per backup extra.

**Q: Posso vedere le statistiche?**
A: Il dashboard mostra conteggi in tempo reale e ricavi. Per analisi avanzate esporta i dati.

### Contatti Tecnici

Per problemi tecnici o modifiche al sistema:
- Sviluppatore: [contatto sviluppatore]
- Hosting: Replit (automatico)
- Pagamenti: Stripe (stripe.com)

---
*Questa guida è aggiornata al 28 Giugno 2025*