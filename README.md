# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# 🏥 Medical Claim Review Dashboard

A frontend dashboard built to review medical insurance claims.  
The application displays the original claim PDF alongside structured extracted JSON data for easy validation and auditing.

---

##  Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- react-pdf
- tailwind-merge

---

## Features

### 1️ Split Screen Layout
- **Left Panel:** Claim PDF viewer
- **Right Panel:** Structured claim data

---

### 2️ Claim Summary
- Claim ID
- Claim Type
- Status Badge
- Claimed Amount
- Total Bills Amount
- Discrepancy Amount
- Discrepancy Reason

---

### 3️ Patient Information
- Name
- Date of Birth
- Policy Number
- Email
- Mobile Number

---

### 4️ Bills Section
Each bill includes:
- Invoice Number
- Bill Date
- Page Number
- Net Amount
- Itemized table:
  - Item Name
  - Category
  - Amount
  - NME Flag
  - Deduction Reason

✔ NME items are highlighted in red  
✔ Deduction reasons are displayed clearly below flagged items  

---

### 5️ Audit Issues
- Medical Legibility Issues (with count)
- Policy Violations (with count)
- Recommendations for each issue

---

### 6️ Document Segments
- Lists document types
- Displays page numbers
- Page numbers are clickable and navigate the PDF

---

## Project Structure

```
src/
│
├── components/
│   ├── claim/
│   ├── layout/
│   ├── pdf/
│   └── ui/
│
├── hooks/
├── utils/
├── types/
├── data/
│
└── App.tsx
```

---

## Installation & Setup

### 1️ Clone the repository

```bash
git clone https://github.com/pittu777/medical.git
cd project name
```

---

### 2️ Install dependencies

```bash
npm install
```

---

### 3️ Start development server

```bash
npm run dev
```

---

### 4️ Open in browser

```
http://localhost:5173
```

## Author

PITTU PRASANTH 
Frontend Assignment – SuperClaims

