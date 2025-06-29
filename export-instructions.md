# Come Esportare il Progetto sul PC

## Metodo 1: Tramite Git (Consigliato)

1. **Nella shell di Replit**:
   ```bash
   git init
   git add .
   git commit -m "Export progetto completo"
   ```

2. **Puoi fare il push su GitHub**:
   - Crea repository su github.com
   - Collega e fai push del codice
   - Scarica dal tuo GitHub

## Metodo 2: Manuale file per file

1. **Nel pannello Files di Replit**:
   - Seleziona tutto il contenuto di una cartella
   - Copia (Ctrl+C)
   - Incolla in un editor locale (VS Code, ecc.)

2. **Cartelle principali da copiare**:
   - `client/` (tutto il frontend)
   - `server/` (tutto il backend)  
   - `shared/` (schema database)
   - File root: `package.json`, `README.md`, etc.

## Metodo 2: Clone con Git (Per sviluppatori)

```bash
git clone https://github.com/[tuo-username]/frimarc-sport.git
```

## Metodo 3: Copia manuale file per file

1. Apri ogni file nel editor
2. Copia il contenuto
3. Incolla in file locale sul PC
4. Mantieni la stessa struttura cartelle

## File Importanti da Salvare

```
frimarc-sport-website/
├── client/                 # Frontend completo
├── server/                 # Backend
├── shared/                 # Database schema
├── package.json           # Dipendenze
├── README.md              # Documentazione
├── ADMIN_GUIDE.md         # Guida admin
├── DEPLOYMENT_GUIDE.md    # Guida vendita
└── replit.md             # Note tecniche
```

## Cosa NON scaricare

- `node_modules/` (troppo grande, si ricrea con npm install)
- `.git/` (storia del codice, non necessaria)
- `.cache/` e `.local/` (file temporanei)

## Dopo il Download

1. **Installa Node.js** sul tuo PC (se non ce l'hai)
2. **Apri terminale** nella cartella del progetto
3. **Installa dipendenze**: `npm install`
4. **Avvia progetto**: `npm run dev`

Il progetto sarà pronto per funzionare anche sul tuo PC!