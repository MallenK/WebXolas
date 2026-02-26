<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# ⚽ WebXolas — XOLAS FC Official Website

Sitio web oficial del equipo de fútbol sala **XOLAS FC**, desarrollado con React, Vite y TailwindCSS. Proyecto optimizado para GitHub Pages, con galería dinámica, animaciones modernas y formulario funcional con EmailJS.

---

## 🚀 Tech Stack

- React + Vite  
- TypeScript  
- TailwindCSS  
- Framer Motion  
- EmailJS  
- Lucide Icons  
- Deploy en GitHub Pages  

---

## ✨ Features

### 🧍‍♀️ Jugadoras
- Grid responsive 3x3
- Número destacado estilo jersey
- Mote personalizado
- Frase divertida
- Hover interactivo en desktop
- Cambio de imagen animado en mobile

### 🖼 Galería dinámica
Carga automática de todas las imágenes ubicadas en:

```
src/assets/fotos/fotos_equip
```

No requiere actualizar código al añadir nuevas fotos.

- Lightbox fullscreen animado
- Compatible con móvil y desktop
- Animaciones suaves

### 📩 Formulario de contacto
Integrado con EmailJS usando variables:

```
{{from_name}}
{{from_email}}
{{message}}
```

---

## 📂 Estructura del proyecto

```
src/
 ├── assets/
 │   └── fotos/
 │       ├── fotos_jugadoras/
 │       └── fotos_equip/
 ├── constants.ts
 ├── App.tsx
 └── main.tsx
```

---

# 🧑‍💻 Run Locally

## Prerequisites

Node.js 18+

---

## 1️⃣ Install dependencies

```
npm install
```

---

## 2️⃣ Environment variables

Crea un archivo `.env`:

```
VITE_EMAIL_SERVICE=your_service_id
VITE_EMAIL_TEMPLATE=your_template_id
VITE_EMAIL_PUBLIC=your_public_key
```

---

## 3️⃣ Run development server

```
npm run dev
```

---

# 🚀 Deploy to GitHub Pages

Asegúrate de que en `vite.config.ts` tengas:

```
export default defineConfig({
  base: "/WebXolas/",
});
```

(Sustituye por el nombre real del repositorio.)

---

## Comandos de despliegue

```
git add .
git commit -m "Update site"
git push origin main

npm run build
npm run deploy
```

---

# 👨‍🎨 Author

Designed & created by  
**mallenK**

https://mallenk.github.io/Portfolio/

---

# 📄 License

Proyecto desarrollado para uso del equipo XOLAS FC.