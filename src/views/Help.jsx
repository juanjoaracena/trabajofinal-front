export default function Help() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>Ayuda</h1>
      <p style={{ color: "var(--muted)" }}>
        Esta página reúne información general sobre el proyecto: cómo empezar, funciones básicas, configuración y resolución de problemas.
      </p>

      {/* Índice */}
      <nav className="card" style={{ marginTop: 16 }}>
        <strong>Contenido</strong>
        <ol style={{ marginTop: 8, lineHeight: 1.6 }}>
          <li><a href="#que-es">¿Qué es este proyecto?</a></li>
          <li><a href="#primeros-pasos">Primeros pasos</a></li>
          <li><a href="#acciones-comunes">Acciones comunes</a></li>
          <li><a href="#apariencia">Apariencia (tema y tipografía)</a></li>
          <li><a href="#atajos">Atajos de teclado</a></li>
          <li><a href="#problemas">Solución de problemas</a></li>
          <li><a href="#faq">Preguntas frecuentes (FAQ)</a></li>
          <li><a href="#privacidad">Privacidad y datos</a></li>
          <li><a href="#contacto">Contacto y soporte</a></li>
        </ol>
      </nav>

      <section id="que-es" style={{ marginTop: 24 }}>
        <h2>¿Qué es este proyecto?</h2>
        <p>
          Es una aplicación construida con <strong>React + Vite</strong> que permite interactuar con una interfaz de chat,
          administrar conversaciones y personalizar la experiencia (tema claro/oscuro, tipografía y más).
        </p>
      </section>

      <section id="primeros-pasos" style={{ marginTop: 24 }}>
        <h2>Primeros pasos</h2>
        <ol>
          <li>Abrí la app y, si corresponde, iniciá sesión.</li>
          <li>Elegí un usuario/conversación desde la barra lateral.</li>
          <li>Escribí un mensaje en el cuadro de texto y presioná <kbd>Enter</kbd> o el botón de enviar.</li>
        </ol>
        <p className="card" style={{ marginTop: 12 }}>
          <strong>Consejo:</strong> usá el botón de engranaje para abrir la <em>Configuración</em> y ajustar el tema y el estilo de texto.
        </p>
      </section>

      <section id="acciones-comunes" style={{ marginTop: 24 }}>
        <h2>Acciones comunes</h2>
        <ul>
          <li><strong>Enviar mensaje:</strong> escribí y presioná <kbd>Enter</kbd>.</li>
          <li><strong>Abrir Configuración:</strong> icono <span aria-label="engranaje" title="Configuración">⚙️</span> en la parte superior.</li>
          <li><strong>Ir a Ayuda:</strong> icono <span aria-label="ayuda" title="Ayuda">❓</span> (o el enlace “Ayuda”).</li>
        </ul>
      </section>

      <section id="apariencia" style={{ marginTop: 24 }}>
        <h2>Apariencia (tema y tipografía)</h2>
        <details open className="card">
          <summary><strong>Tema claro / oscuro</strong></summary>
          <p style={{ marginTop: 8 }}>
            En <em>Configuración</em> podés alternar entre <strong>claro</strong> y <strong>oscuro</strong>. La preferencia se guarda en tu navegador.
          </p>
        </details>
        <details className="card" style={{ marginTop: 12 }}>
          <summary><strong>Texto normal / negrita</strong></summary>
          <p style={{ marginTop: 8 }}>
            Podés activar <strong>negrita global</strong> para mejorar la legibilidad. También se guarda automáticamente.
          </p>
        </details>
      </section>

      <section id="atajos" style={{ marginTop: 24 }}>
        <h2>Atajos de teclado</h2>
        <ul>
          <li><kbd>Enter</kbd> — Enviar mensaje</li>
          <li><kbd>Esc</kbd> — Cerrar popups (si están abiertos)</li>
          <li><kbd>Ctrl</kbd> + <kbd>K</kbd> — (opcional) abrir búsqueda, si está implementada</li>
        </ul>
      </section>

      <section id="problemas" style={{ marginTop: 24 }}>
        <h2>Solución de problemas</h2>
        <details className="card">
          <summary><strong>No se ve bien el modo oscuro</strong></summary>
          <p style={{ marginTop: 8 }}>
            Algunos elementos pueden tener colores fijos. Actualizá los estilos para usar variables
            <code> var(--bg), var(--text), var(--card), var(--border) </code> en lugar de valores absolutos.
          </p>
        </details>
        <details className="card" style={{ marginTop: 12 }}>
          <summary><strong>No se guarda el tema o la negrita</strong></summary>
          <p style={{ marginTop: 8 }}>
            Verificá que el navegador permita <code>localStorage</code> y que no estés en modo incógnito con restricciones.
          </p>
        </details>
      </section>

      <section id="faq" style={{ marginTop: 24 }}>
        <h2>Preguntas frecuentes (FAQ)</h2>
        <details className="card">
          <summary><strong>¿Necesito internet para usar la app?</strong></summary>
          <p style={{ marginTop: 8 }}>
            Depende de las funciones que utilices. La UI funciona localmente, pero algunas características pueden requerir conexión.
          </p>
        </details>
        <details className="card" style={{ marginTop: 12 }}>
          <summary><strong>¿Dónde se guardan mis preferencias?</strong></summary>
          <p style={{ marginTop: 8 }}>
            En <code>localStorage</code> del navegador (solo en tu dispositivo).
          </p>
        </details>
      </section>

      <section id="privacidad" style={{ marginTop: 24 }}>
        <h2>Privacidad y datos</h2>
        <p>
          La aplicación almacena localmente preferencias de apariencia (tema, negrita). No se comparten con terceros.
          Revisá el archivo <em>README</em> o la política de privacidad del proyecto si aplica.
        </p>
      </section>

      <section id="contacto" style={{ marginTop: 24 }}>
        <h2>Contacto y soporte</h2>
        <p>
          ¿Necesitás ayuda adicional o querés reportar un problema? Escribinos a
          {" "}
          <a href="mailto:juanjoaracena@gmail.com">juanjoaracena@gmail.com</a>
          {" "}
           </p>
           <button
  className="btn"
  onClick={() => {
    localStorage.removeItem("theme");
    localStorage.removeItem("bold");
    document.documentElement.classList.remove("dark", "bold");
    alert("Preferencias restablecidas. Volvé a elegir desde Configuración.");
  }}
>
  Restablecer preferencias
</button>
      </section>
    </div>
  );
}

