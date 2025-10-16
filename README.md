# 📱 Chat App – Proyecto Front End (React + Vite)

> **Trabajo final para la Diplomatura de Front End – UTN**  
> **Profesor:** Gabriel Alberini

Aplicación web construida con **React + Vite** que simula una interfaz de chat con **configuración de apariencia** (tema **claro/oscuro** y **texto normal/negrita**), página de **Ayuda** y almacenamiento de preferencias en el **navegador**.

![screenshot-placeholder](./docs/logo-juan-jose-aracena-dark.png

---

## ✨ Características

- ⚙️ **Popup de Configuración** con:
  - 🌗 **Tema** Claro / Oscuro (persistente)
  - 𝐁 **Texto** Normal / Negrita (persistente)
- 💬 Interfaz de **chat** con envío de mensajes y listado de conversaciones.
- ❓ **Página de Ayuda** (`/help`) con guía rápida, FAQ y resolución de problemas.
- ⚡️ **Vite** para dev server rápido y build optimizado.
- ♻️ Preferencias guardadas en **localStorage**.

---

## 🧠 ¿Cómo funciona?

### Modo Claro/Oscuro
- Se usa una clase global en `<html>`: `dark`.
- Los colores se definen con **variables CSS**:
  ```css
  :root { --bg:#fff; --text:#0f1115; --card:#fff; --border:#e5e7eb; }
  .dark { --bg:#0b0c0f; --text:#f3f4f6; --card:#0f1115; --border:#283241; }
  body  { background:var(--bg); color:var(--text); }
  ```
- El botón alterna la clase `dark` y guarda `theme = 'light' | 'dark'` en `localStorage`.

### Texto Normal / Negrita
- Se usa una clase global en `<html>`: `bold`.
- El peso tipográfico se controla con variable:
  ```css
  :root { --fw: 400; }
  .bold { --fw: 700; }
  body  { font-weight: var(--fw); }
  ```
- El botón alterna `bold` y guarda `bold = 'on' | 'off'` en `localStorage`.

### Inicialización (antes de renderizar)
En `main.jsx` se leen las preferencias guardadas y se aplican las clases a `<html>`:
```js
const storedTheme = localStorage.getItem('theme')
const prefersDark  = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
document.documentElement.classList.toggle('dark', storedTheme ? storedTheme === 'dark' : !!prefersDark)

const storedBold = localStorage.getItem('bold')
document.documentElement.classList.toggle('bold', storedBold ? storedBold === 'on' : false)
```

---

## 🧩 Estructura del proyecto (sugerida)

```
src/
  components/
    ThemeAndBoldButtons.jsx   # Dos botones: tema y negrita
    ...                       # Otros componentes (Sidebar, Chat, etc.)
  pages/
    Help.jsx                  # Página de Ayuda (/help)
  router/
    RouterApp.jsx             # Rutas (/, /help, ...)
  context/
    ChatContext.jsx           # Estado para listado de usuarios/mensajes
  index.css                   # Variables CSS y estilos base
  main.jsx                    # Bootstrap + inicialización de preferencias
  App.jsx                     # Layout principal
```

---

## 🚀 Empezar

### Requisitos
- Node.js 18+ y npm

### Instalación
```bash
# Clonar
git clone https://[github.com/tu-usuario/tu-repo.git](https://github.com/juanjoaracena/trabajofinal-front)
cd tu-repo

# Instalar dependencias
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre la URL que te muestre Vite (ej.: `http://localhost:5173`).

### Build de producción
```bash
npm run build
```

### Vista previa del build
```bash
npm run preview
```

> **Despliegue:** Podés usar **Vercel**, **Netlify** o cualquier hosting estático.  
> Si usás Vercel, la carpeta a publicar es `dist/`.

---

## 🧭 Rutas principales

- `/` – Pantalla principal (chat / layout general)
- `/help` – Página de **Ayuda** con guía, FAQ y soporte

---

## 🧰 Componentes clave

### `ThemeAndBoldButtons.jsx`
Componente que renderiza dos botones:
- **Tema**: alterna `light`/`dark`
- **Negrita**: alterna `on`/`off`

Uso:
```jsx
import ThemeAndBoldButtons from './components/ThemeAndBoldButtons'

export default function Header() {
  return (
    <header>
      <h1>Mi App</h1>
      <ThemeAndBoldButtons />
    </header>
  )
}
```

> También podés renderizarlo **dentro del popup** de Configuración.

---

## 🧪 Accesibilidad (A11y)

- Contrastes de color pensados para tema oscuro/claro (ajustables con variables).
- Estados persistentes para no forzar al usuario a reconfigurar.
- Botones con `aria-label` y `title`.
- Se recomienda testear con Lighthouse/axe.

---

## 🧰 Resolución de problemas

- **“En oscuro algunas letras no se ven”**  
  Hay estilos con colores fijos. Reemplazá `#fff / #000 / white / black` por variables:
  - Fondo: `var(--bg)` / `var(--card)`
  - Texto: `var(--text)`
  - Bordes: `var(--border)`

- **No se guardan preferencias**  
  Revisá que el navegador permita `localStorage` (modo incógnito puede bloquear).

- **El popup se ve negro**  
  Asegurate que `.popup`, `.modal`, `.btn`, `input`, `select` usen `var(--card)`/`var(--text)`/`var(--border)`.

---

## 🗺️ Roadmap (ideas futuras)

- Cambiar **familia tipográfica** (Inter/Roboto/Serif/Mono) y **tamaño** desde Configuración.
- Temas adicionales (alto contraste, sepia).
- Internacionalización (i18n).
- Persistencia de chats en backend / IndexedDB.

---

## 🤝 Contribuir

1. Creá una rama: `feat/nueva-funcionalidad`
2. Hacé commits con **Conventional Commits** (`feat: …`, `fix: …`)
3. Abrí un Pull Request con descripción clara y capturas si aplica.

---

## 🙌 Créditos académicos

**Trabajo final para la Diplomatura de Front End de la UTN**  
**Profesor:** Gabriel Alberini

---

## 🆘 Soporte

Si encontrás un problema o necesitás ayuda, escribime a:  
**juanjoaracena@gmail.com**
