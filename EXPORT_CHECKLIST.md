# Checklist Export Manuale

## File da Copiare Sul PC

### 1. File di Configurazione Root
- [ ] `package.json` 
- [ ] `package-lock.json`
- [ ] `vite.config.ts`
- [ ] `tailwind.config.ts`
- [ ] `tsconfig.json`
- [ ] `postcss.config.js`
- [ ] `drizzle.config.ts`
- [ ] `components.json`

### 2. Documentazione
- [ ] `README.md`
- [ ] `ADMIN_GUIDE.md` 
- [ ] `DEPLOYMENT_GUIDE.md`
- [ ] `PACKAGE_CONTENTS.md`
- [ ] `replit.md`

### 3. Cartella CLIENT (Frontend)
```
client/
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── ui/ (tutti i file)
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ClassesSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TrainersSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── NotificationSystem.tsx
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   ├── use-mobile.tsx
│   │   └── useScrollReveal.ts
│   ├── lib/
│   │   ├── queryClient.ts
│   │   └── utils.ts
│   └── pages/
│       ├── Home.tsx
│       ├── Admin.tsx
│       ├── Checkout.tsx
│       └── not-found.tsx
```

### 4. Cartella SERVER (Backend)
```
server/
├── index.ts
├── routes.ts
├── storage.ts
└── vite.ts
```

### 5. Cartella SHARED
```
shared/
└── schema.ts
```

## Come Copiare

1. **Per ogni file**:
   - Apri in Replit
   - Seleziona tutto (Ctrl+A)
   - Copia (Ctrl+C)
   - Crea file sul PC
   - Incolla contenuto

2. **Mantieni struttura cartelle identica**

3. **Dopo il copy**:
   - Installa Node.js sul PC
   - Vai nella cartella progetto
   - Esegui: `npm install`
   - Esegui: `npm run dev`

## Dimensioni Orientative
- File totali: ~80 file
- Dimensione: ~2-3 MB (senza node_modules)
- Tempo copy: 15-20 minuti

Il progetto sarà identico e funzionante sul tuo PC!