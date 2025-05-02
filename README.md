# Nicola e Lorena

Questo progetto è stato realizzato con React + Vite e pubblicato tramite GitHub Pages, con un dominio personalizzato acquistato su Register.it.

## 📦 Tecnologie utilizzate

- **React** – Libreria JS per interfacce utente dinamiche
- **Vite** – Dev server e bundler super veloce
- **CSS** – Styling manuale (senza framework)
- **GitHub Pages** – Hosting gratuito del sito
- **Register.it** – Per il dominio personalizzato

## 🛠️ Creazione del progetto

Il progetto è stato creato con i seguenti comandi iniziali:

```bash
npm create vite@latest nome-progetto -- --template react
cd nome-progetto
npm install
```

## 🚧 Modalità di sviluppo

Per modificare e visualizzare il sito in tempo reale nel browser:

```bash
npm run dev
```

Il sito sarà visibile su `http://localhost:5173`.  
Ogni modifica verrà aggiornata automaticamente (hot reload).

## 📁 Struttura del progetto

```
src/
├── assets/            → Immagini standard
├── App.jsx            → Componente principale
├── App.css            → Stile principale del sito
├── index.css          → File generato automaticamente (può creare confusione)
├── main.jsx           → Entry point
public/
└── CNAME              → Dominio personalizzato (senza www ma con .it o altro)
```

> ⚠️ Attenzione: il progetto generato da Vite include **due file CSS** (`App.css` e `index.css`).  
> Può essere utile **eliminare `index.css`** o assicurarsi di usare solo uno dei due, per evitare confusione e sovrapposizioni di stile.

## 🎨 Font utilizzati

Il sito utilizza una combinazione di font tipografici personalizzati per ottenere uno stile elegante e classico:

- **Cormorant Garamond**
- **Playfair Display**
- **Dancing Script**
- **Great Vibes**
- **Cinzel**
- **Satisfy**

I font sono importati da [Google Fonts](https://fonts.google.com/) nel file `index.html`, tramite tag `<link>`.

Per aggiungerne altri, modifica la sezione `<head>` in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=NomeFont&display=swap" rel="stylesheet">
```

E usali nel CSS con `font-family`.

Controlla il file `index.html` per vedere le ottimizzazioni per non avere l'effetto del cambio carattere al caricamento della pagina.

## 🚀 Deploy su GitHub Pages

### 📄 Configurazione `package.json`

Esempio reale usato in questo progetto:

```json
{
  "name": "nicolaelorena",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://xxx.github.io/nome-repo",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

> 🔍 Il campo `"homepage"` è fondamentale per far funzionare GitHub Pages: assicurati che punti all'URL corretto del tuo sito (senza slash finale!).

### ⚙️ Configurazione `vite.config.js`

Nel caso di **dominio personalizzato**, **non è necessario** impostare `base`.  
Quindi il file può rimanere così:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/',
  plugins: [react()],
});
```

> Se non usi un dominio personalizzato, devi invece aggiungere: `base: '/nome-repo/'`.

### 📦 Comandi per il deploy

1. **Assicurati di aver fatto push delle modifiche su GitHub**:

```bash
git add .
git commit -m "..."
git push
```

2. **Costruisci il sito** (opzionale, viene fatto in automatico da `predeploy`):

```bash
npm run build
```

3. **Pubblica su GitHub Pages**:

```bash
npm run deploy
```

Il sito sarà visibile all'indirizzo configurato nel campo `homepage`.

## 🌐 Dominio personalizzato (Register.it)

### 1. File `CNAME`

Nel progetto è stato aggiunto il file `public/CNAME` (senza estensione!) con il dominio **senza `www`**:

```
nicolaelorena.it
```

> Includere questo file evita di dover reinserire l’URL ogni volta dalle impostazioni GitHub Pages.

### 2. Configurazione DNS su Register.it

Sul pannello DNS del dominio sono stati aggiunti questi record:

- **A record**
  - `@` → `185.199.108.153`
  - `@` → `185.199.109.153`
  - `@` → `185.199.110.153`
  - `@` → `185.199.111.153`
- **CNAME record**
  - `www` → `tuo-utente.github.io`

Nello specifico, in Register.it si presenta in questo modo:
- nicolaelorena.it A 185.199.111.153
- nicolaelorena.it A 185.199.110.153
- nicolaelorena.it A 185.199.109.153
- nicolaelorena.it A 185.199.108.153
- www.nicolaelorena.it CNAME nicolaelorena.github.io

> La propagazione DNS può richiedere fino a 24h, perciò se il dominio non mostra immediatamenti il sito della github pages dopo la configurazione, è normale.

## 🔒 Repository privato

⚠️ Se il repository è **privato**, GitHub Pages **non funzionerà** a meno di avere un **piano a pagamento** (GitHub Pro, Team o Enterprise).  
Per uso gratuito, il repository deve restare **pubblico**.

## 🧹 Linting (opzionale ma utile)

La creazione del progetto o qualche plugin ha creato anche una configurazione di **ESLint** per mantenere il codice ordinato:

- Comando per analizzare il codice:

```bash
npm run lint
```

- File di configurazione: `eslint.config.js` nella root del progetto

In questo progetto non è stato utilizzato, nel caso si volesse farlo bisogna assicurarsi di installare eventuali estensioni ESLint nell'editor per il supporto live durante la scrittura.
** 

## ✅ Consigli finali

- Per debug su mobile, usa Chrome DevTools con simulazione dispositivi
- Tutte le immagini vanno messe in `src/assets` (foto da mostrare nel sito)  o in `public/` (favicon) o in `public/img/` (sfondo, icone)
- Per compatibilità mouse/touch (evita bug di colori quando si clicca da mobile), usa media query come `@media (hover: hover)`
- Il file `CNAME` va incluso SEMPRE nel progetto (verrà copiato in `dist/` durante il build)
- Se il sito non si aggiorna subito dopo il deploy (ci può volere qualche minuto), prova a forzare il refresh o svuotare la cache del browser

---

