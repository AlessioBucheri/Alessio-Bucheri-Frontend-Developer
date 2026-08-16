# Alessio Bucheri — Frontend Developer Portfolio

Portfolio personale realizzato con React e Vite: landing page, sezione about, elenco progetti e form di contatto.

## Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) per la navigazione tra le pagine
- [styled-components](https://styled-components.com/) per lo styling
- [Framer Motion](https://www.framer.com/motion/) per le animazioni e le transizioni tra le route
- [EmailJS](https://www.emailjs.com/) per l'invio del form di contatto

## Setup

```bash
npm install
```

Crea un file `.env` (vedi `.env.example`) con le credenziali EmailJS:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Script disponibili

- `npm run dev` — avvia il server di sviluppo
- `npm run build` — build di produzione in `dist/`
- `npm run preview` — anteprima della build di produzione
- `npm run lint` — esegue ESLint su tutto il progetto

## Struttura

```
src/
  Components/   componenti UI riutilizzabili
  Pages/        pagine mappate sulle route
  Hooks/        custom hook (animazioni, scroll, ecc.)
  Style/        styled-components per componente/pagina
  Database/     dati statici (progetti, CV)
```
