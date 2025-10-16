import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp.jsx'
import './index.css'
import { ChatProvider } from './context/ChatContext.jsx'

// --- Inicialización (persistencia) ---
const storedTheme = localStorage.getItem('theme'); // 'light' | 'dark' | null
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
const shouldDark = storedTheme ? storedTheme === 'dark' : !!prefersDark;
document.documentElement.classList.toggle('dark', shouldDark);

const storedBold = localStorage.getItem('bold');   // 'on' | 'off' | null
const shouldBold = storedBold ? storedBold === 'on' : false;
document.documentElement.classList.toggle('bold', shouldBold);
// -------------------------------------

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <RouterApp />
    </ChatProvider>
  </StrictMode>,
)
