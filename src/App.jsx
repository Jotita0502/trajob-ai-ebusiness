import { useState } from "react";
import "./App.css";

const servicios = [
  {
    nombre: "CV Pro",
    precio: "S/ 29.90",
    icono: "📄",
    descripcion: "Revisión y mejora de tu currículum profesional.",
    detalle:
      "Ideal para ordenar tu experiencia, proyectos y habilidades técnicas.",
  },
  {
    nombre: "LinkedIn Boost",
    precio: "S/ 29.90",
    icono: "💼",
    descripcion: "Optimización de perfil LinkedIn para reclutadores.",
    detalle:
      "Mejora tu titular, extracto profesional, experiencia y habilidades.",
  },
  {
    nombre: "GitHub Portfolio",
    precio: "S/ 29.90",
    icono: "💻",
    descripcion: "Mejora de repositorios, README y presentación técnica.",
    detalle: "Organiza tus proyectos para que tu perfil técnico destaque.",
  },
  {
    nombre: "Entrevista Junior",
    precio: "S/ 29.90",
    icono: "🎤",
    descripcion: "Preparación para entrevistas de prácticas y puestos junior.",
    detalle: "Practica respuestas, presentación personal y preguntas técnicas.",
  },
  {
    nombre: "TraJob Full",
    precio: "S/ 89.90",
    icono: "👑",
    descripcion: "Paquete completo: CV, LinkedIn, GitHub y entrevista.",
    detalle: "La solución integral para potenciar tu perfil profesional.",
    destacado: true,
  },
];

const testimonios = [
  {
    nombre: "María López",
    rol: "Estudiante de Ingeniería",
    comentario:
      "TraJob AI me ayudó a ordenar mi CV y presentar mejor mis proyectos para postular a prácticas.",
  },
  {
    nombre: "Carlos Ruiz",
    rol: "Egresado junior",
    comentario:
      "Mejoré mi LinkedIn y GitHub. Ahora mi portafolio se ve más profesional.",
  },
  {
    nombre: "Ana Torres",
    rol: "Postulante trainee",
    comentario:
      "La preparación de entrevista me dio más seguridad para responder preguntas técnicas.",
  },
];

function App() {
  const [servicioSeleccionado, setServicioSeleccionado] =
    useState("TraJob Full");
  const [enviado, setEnviado] = useState(false);
  const [loginAbierto, setLoginAbierto] = useState(false);

  const registrarEvento = (evento, datos = {}) => {
    console.log("Evento Google Analytics:", evento, datos);
    if (window.gtag) {
      window.gtag("event", evento, datos);
    }
  };

  const seleccionarServicio = (servicio) => {
    setServicioSeleccionado(servicio);
    registrarEvento("select_service", { servicio });
    document
      .getElementById("formulario")
      .scrollIntoView({ behavior: "smooth" });
  };

  const abrirLogin = () => {
    setLoginAbierto(true);
    registrarEvento("login_click");
  };

  const cerrarLogin = () => setLoginAbierto(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    setEnviado(true);
    registrarEvento("generate_lead", { servicio: servicioSeleccionado });
    document
      .getElementById("confirmacion")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="navbar">
        <div className="brand">
          <div className="logo">T</div>
          <span>TraJob AI</span>
        </div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#formulario">Solicitar</a>
          <a href="#dashboard">Dashboard</a>
        </nav>

        <button className="btn btn-outline" type="button" onClick={abrirLogin}>
          Iniciar sesión
        </button>
      </header>

      {loginAbierto && (
        <div className="modal-backdrop" onClick={cerrarLogin}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={cerrarLogin}>
              ×
            </button>
            <div className="modal-icon">🔐</div>
            <h2>Acceso de usuarios</h2>
            <p>
              Esta pantalla simula el inicio de sesión del cliente para
              consultar solicitudes, avances y recomendaciones recibidas.
            </p>
            <input placeholder="Correo electrónico" />
            <input placeholder="Contraseña" type="password" />
            <button className="btn btn-primary full" onClick={cerrarLogin}>
              Entrar al panel
            </button>
            <small>Funcionalidad simulada para el prototipo E-Business.</small>
          </div>
        </div>
      )}

      <main>
        <section id="inicio" className="hero">
          <div className="hero-text">
            <span className="badge">✨ Tu carrera, potenciada por IA</span>
            <h1>
              Impulsa tu perfil profesional con{" "}
              <span>inteligencia artificial</span>
            </h1>
            <p>
              Mejora tu CV, LinkedIn, GitHub y preparación para entrevistas en
              un solo lugar. Ideal para estudiantes, egresados y postulantes
              junior.
            </p>

            <div className="buttons">
              <a
                className="btn btn-primary"
                href="#servicios"
                onClick={() => registrarEvento("click_ver_servicios")}
              >
                Ver servicios
              </a>
              <a
                className="btn btn-light"
                href="#formulario"
                onClick={() => registrarEvento("click_solicitar_asesoria")}
              >
                Solicitar asesoría
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>+2,500</strong>
                <small>Perfiles mejorados</small>
              </div>
              <div>
                <strong>95%</strong>
                <small>Tasa de recomendación</small>
              </div>
              <div>
                <strong>24/7</strong>
                <small>Atención digital</small>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-top">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <h3>Tu centro profesional</h3>
            <p>Todo lo que necesitas para destacar.</p>

            <div className="mini-cards">
              <div>
                <span>📄</span>
                <strong>CV</strong>
                <small>Optimizado</small>
              </div>
              <div>
                <span>💼</span>
                <strong>LinkedIn</strong>
                <small>Profesional</small>
              </div>
              <div>
                <span>💻</span>
                <strong>GitHub</strong>
                <small>Mejorado</small>
              </div>
              <div>
                <span>🎤</span>
                <strong>Entrevistas</strong>
                <small>Junior</small>
              </div>
            </div>

            <div className="progress">
              <p>Perfil mejorado</p>
              <strong>90%</strong>
            </div>
            <div className="ai-tip">
              <strong>💡 Sugerencia IA</strong>
              <p>
                Agrega métricas, tecnologías y enlaces a tus proyectos
                principales.
              </p>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div>
            <h3>📄 CV optimizado</h3>
            <p>Mejoramos estructura, redacción y palabras clave.</p>
          </div>
          <div>
            <h3>💼 LinkedIn profesional</h3>
            <p>Potenciamos tu perfil para atraer reclutadores.</p>
          </div>
          <div>
            <h3>💻 GitHub mejorado</h3>
            <p>Ordenamos tus proyectos y repositorios.</p>
          </div>
          <div>
            <h3>🎤 Entrevistas junior</h3>
            <p>Practica con preguntas reales y feedback.</p>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="section-title">
            <span>Servicios</span>
            <h2>Nuestros paquetes</h2>
            <p>Elige el servicio que mejor se adapta a tus necesidades.</p>
          </div>

          <div className="services-grid">
            {servicios.map((servicio) => (
              <article
                className={`service-card ${servicio.destacado ? "featured" : ""}`}
                key={servicio.nombre}
              >
                <div className="icon">{servicio.icono}</div>
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
                <small>{servicio.detalle}</small>
                <strong>{servicio.precio}</strong>
                <button
                  className={
                    servicio.destacado ? "btn btn-green" : "btn btn-primary"
                  }
                  onClick={() => seleccionarServicio(servicio.nombre)}
                >
                  Solicitar
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="section steps-zone">
          <div className="section-title">
            <span>Proceso</span>
            <h2>¿Cómo funciona TraJob AI?</h2>
            <p>
              Un flujo simple para convertir tu información en un perfil más
              competitivo.
            </p>
          </div>

          <div className="steps">
            <div>
              <span>1</span>
              <h3>Elige un paquete</h3>
              <p>
                Selecciona CV, LinkedIn, GitHub, entrevista o el paquete
                completo.
              </p>
            </div>
            <div>
              <span>2</span>
              <h3>Envía tu información</h3>
              <p>
                Completa el formulario con tus datos, enlaces y comentarios.
              </p>
            </div>
            <div>
              <span>3</span>
              <h3>Recibe recomendaciones</h3>
              <p>
                Obtén una propuesta de mejora personalizada para tu perfil
                laboral.
              </p>
            </div>
          </div>
        </section>

        <section id="formulario" className="section form-zone">
          <div className="section-title">
            <span>Formulario</span>
            <h2>Solicitar servicio</h2>
            <p>Completa tu información para iniciar tu mejora profesional.</p>
          </div>

          <div className="form-layout">
            <form className="form-card" onSubmit={enviarFormulario}>
              <label>
                Nombre completo
                <input required placeholder="Ejemplo: Joaquín Conde" />
              </label>
              <label>
                Correo electrónico
                <input required type="email" placeholder="ejemplo@correo.com" />
              </label>
              <label>
                Carrera
                <input required placeholder="Ingeniería de Sistemas" />
              </label>
              <label>
                Ciclo académico
                <select required>
                  <option value="">Seleccione</option>
                  <option>8vo ciclo</option>
                  <option>9no ciclo</option>
                  <option>10mo ciclo</option>
                  <option>Egresado</option>
                </select>
              </label>
              <label>
                Servicio solicitado
                <select
                  value={servicioSeleccionado}
                  onChange={(e) => setServicioSeleccionado(e.target.value)}
                >
                  {servicios.map((servicio) => (
                    <option key={servicio.nombre}>{servicio.nombre}</option>
                  ))}
                </select>
              </label>
              <label>
                LinkedIn
                <input placeholder="https://linkedin.com/in/..." />
              </label>
              <label>
                GitHub
                <input placeholder="https://github.com/..." />
              </label>
              <label className="full">
                Comentarios
                <textarea placeholder="Cuéntanos qué deseas mejorar..." />
              </label>
              <button className="btn btn-primary full" type="submit">
                Continuar solicitud
              </button>
            </form>

            <aside className="summary">
              <h3>Resumen de solicitud</h3>
              <p>Servicio seleccionado:</p>
              <h2>{servicioSeleccionado}</h2>
              <ul>
                <li>Revisión inicial del perfil</li>
                <li>Recomendaciones personalizadas</li>
                <li>Entrega estimada: 3 a 5 días</li>
              </ul>
              <p>
                Este envío será tomado como conversión para Google Analytics y
                Power BI.
              </p>
            </aside>
          </div>
        </section>

        <section id="confirmacion" className="confirmation">
          <div className="confirmation-card">
            {enviado ? (
              <>
                <div className="check">✓</div>
                <h2>¡Solicitud registrada con éxito!</h2>
                <p>
                  Gracias por confiar en TraJob AI. Revisaremos tu información y
                  enviaremos recomendaciones personalizadas.
                </p>
              </>
            ) : (
              <>
                <h2>Confirmación pendiente</h2>
                <p>Completa el formulario para generar una solicitud.</p>
              </>
            )}
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-title">
            <span>Testimonios</span>
            <h2>Usuarios que potenciaron su perfil</h2>
            <p>
              Comentarios simulados para representar la experiencia del cliente.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonios.map((item) => (
              <div className="testimonial" key={item.nombre}>
                <p>“{item.comentario}”</p>
                <strong>{item.nombre}</strong>
                <small>{item.rol}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="section faq">
          <div className="section-title">
            <span>FAQ</span>
            <h2>Preguntas frecuentes</h2>
          </div>

          <div className="faq-grid">
            <div>
              <h3>¿Cuánto demora el servicio?</h3>
              <p>
                La entrega estimada es de 3 a 5 días hábiles según el paquete.
              </p>
            </div>
            <div>
              <h3>¿Puedo enviar mi GitHub?</h3>
              <p>
                Sí, puedes enviar tu perfil para recibir recomendaciones de
                mejora.
              </p>
            </div>
            <div>
              <h3>¿Sirve para prácticas?</h3>
              <p>
                Sí, está orientado principalmente a estudiantes y postulantes
                junior.
              </p>
            </div>
            <div>
              <h3>¿La asesoría usa IA?</h3>
              <p>
                La plataforma simula recomendaciones con apoyo de inteligencia
                artificial.
              </p>
            </div>
          </div>
        </section>

        <section id="dashboard" className="section dashboard">
          <div className="section-title">
            <span>Vista interna</span>
            <h2>Dashboard administrativo</h2>
            <p>Indicadores simulados para la gestión del negocio.</p>
          </div>

          <div className="kpis">
            <div>
              <span>Usuarios registrados</span>
              <strong>2,589</strong>
              <small>+12.5%</small>
            </div>
            <div>
              <span>Solicitudes</span>
              <strong>1,325</strong>
              <small>+8.2%</small>
            </div>
            <div>
              <span>Conversiones</span>
              <strong>532</strong>
              <small>+15.6%</small>
            </div>
            <div>
              <span>Ingresos estimados</span>
              <strong>S/ 47,568</strong>
              <small>+16.3%</small>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="chart-card">
              <h3>Servicios más solicitados</h3>
              <div className="bar">
                <span style={{ width: "88%" }}></span>
                <p>TraJob Full</p>
              </div>
              <div className="bar">
                <span style={{ width: "70%" }}></span>
                <p>CV Pro</p>
              </div>
              <div className="bar">
                <span style={{ width: "56%" }}></span>
                <p>LinkedIn Boost</p>
              </div>
              <div className="bar">
                <span style={{ width: "43%" }}></span>
                <p>GitHub Portfolio</p>
              </div>
            </div>

            <div className="table-card">
              <h3>Solicitudes recientes</h3>
              <table>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Servicio</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Juan Pérez</td>
                    <td>TraJob Full</td>
                    <td>
                      <span className="status process">En proceso</span>
                    </td>
                    <td>13/06/2026</td>
                  </tr>
                  <tr>
                    <td>María López</td>
                    <td>CV Pro</td>
                    <td>
                      <span className="status pending">Pendiente</span>
                    </td>
                    <td>13/06/2026</td>
                  </tr>
                  <tr>
                    <td>Carlos Ruiz</td>
                    <td>GitHub Portfolio</td>
                    <td>
                      <span className="status done">Finalizado</span>
                    </td>
                    <td>12/06/2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <strong>TraJob AI</strong>
        <p>Proyecto E-Business y Analítica Web</p>
      </footer>
    </>
  );
}

export default App;
