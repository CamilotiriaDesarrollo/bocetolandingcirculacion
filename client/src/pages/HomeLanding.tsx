import { useState } from 'react'

interface Props {
  onNavClick: (id: string) => void
}

const MARCO_ITEMS = [
  {
    year: '1997',
    titulo: 'Ley 397 de 1997',
    subtitulo: 'Ley General de Cultura',
    descripcion: 'Establece los principios fundamentales de la cultura como derecho y bien público en Colombia. Define el Sistema Nacional de Cultura y los mecanismos para proteger, fomentar y difundir las expresiones culturales del país, reconociendo la circulación como eje del desarrollo cultural.',
    bg: 'linear-gradient(145deg, #16103a 0%, #2d1b6e 100%)',
  },
  {
    year: '2003',
    titulo: 'CONPES 3162 de 2003',
    subtitulo: 'Plan Nacional de Cultura 2001–2010',
    descripcion: 'Define los lineamientos para la sostenibilidad del Plan Nacional de Cultura "Hacia una ciudadanía democrática cultural", estableciendo la circulación y el intercambio cultural como ejes estratégicos de política pública territorial.',
    bg: 'linear-gradient(145deg, #1a0e50 0%, #3d1fa8 100%)',
  },
  {
    year: '2008',
    titulo: 'Ley 1185 de 2008',
    subtitulo: 'Patrimonio cultural de la nación',
    descripcion: 'Modifica y adiciona la Ley General de Cultura, fortaleciendo el régimen de protección del patrimonio cultural. Amplía las competencias del Ministerio para la gestión, circulación y valoración del patrimonio cultural inmaterial y material en todo el territorio.',
    bg: 'linear-gradient(145deg, #200d5c 0%, #4c1d95 100%)',
  },
  {
    year: '2015',
    titulo: 'Decreto 1080 de 2015',
    subtitulo: 'Decreto Único Reglamentario del Sector Cultura',
    descripcion: 'Compila y unifica la normatividad reglamentaria vigente del sector cultura. Regula los mecanismos de fomento, circulación, formación artística y participación ciudadana en el ecosistema cultural colombiano.',
    bg: 'linear-gradient(145deg, #1e1060 0%, #3730a3 100%)',
  },
  {
    year: '2018',
    titulo: 'Decreto 2120 de 2018',
    subtitulo: 'Sistema Nacional de Cultura',
    descripcion: 'Reglamenta la organización, funcionamiento y articulación de los subsistemas del Sistema Nacional de Cultura. Define los espacios de participación ciudadana, la gobernanza territorial y las responsabilidades institucionales en procesos de circulación cultural.',
    bg: 'linear-gradient(145deg, #2e1065 0%, #6d28d9 100%)',
  },
  {
    year: '2022',
    titulo: 'Plan Nacional de Desarrollo 2022–2026',
    subtitulo: '"Colombia, potencia mundial de la vida"',
    descripcion: 'Incorpora la circulación cultural como eje de desarrollo territorial y equidad. Establece metas para la descentralización del acceso a bienes y servicios culturales y el fortalecimiento de redes culturales en todo el territorio nacional.',
    bg: 'linear-gradient(145deg, #1a0e58 0%, #5b21b6 100%)',
  },
]

const EQUIPO = [
  {
    inicial: 'CC',
    titulo: 'Área de Circulación Cultural',
    subtitulo: 'Coordinación y estrategia nacional',
    descripcion: 'Diseña y coordina la política de circulación cultural a nivel nacional, articulando actores, territorios y plataformas institucionales del Ministerio.',
    detalle: 'Trabaja en estrecha colaboración con las secretarías de cultura departamentales y las casas de cultura municipales para garantizar que las estrategias de circulación lleguen a todos los rincones del país. Define los lineamientos técnicos, los indicadores de impacto y los estándares de calidad de la plataforma Circulaturas.',
    color: '#7C3AED',
  },
  {
    inicial: 'GT',
    titulo: 'Gestión Territorial',
    subtitulo: 'Redes regionales y agentes culturales',
    descripcion: 'Fortalece las redes de agentes culturales en los territorios, facilitando intercambios, alianzas y rutas de circulación en todo Colombia.',
    detalle: 'Opera a través de nodos regionales en las cinco macrorregiones del país: Caribe, Andina, Pacífico, Orinoquía y Amazonia. Acompaña a los gestores culturales locales en el registro y vinculación a los circuitos de circulación cultural, con énfasis especial en territorios con menor cobertura histórica.',
    color: '#6D28D9',
  },
  {
    inicial: 'SI',
    titulo: 'Sistemas de Información',
    subtitulo: 'Datos, tecnología y analítica cultural',
    descripcion: 'Desarrolla y mantiene la infraestructura tecnológica de Circulaturas, garantizando la trazabilidad de datos culturales y la interoperabilidad con otros sistemas del Ministerio.',
    detalle: 'Integra los sistemas SINIC, SipaWeb y la agenda cultural nacional en una plataforma unificada. Produce reportes de cobertura, indicadores de movilidad cultural y dashboards de analítica para la toma de decisiones. Lidera el cumplimiento de los estándares de accesibilidad NTC 5854.',
    color: '#4C1D95',
  },
]

export default function HomeLanding({ onNavClick }: Props) {
  const [activeMarco, setActiveMarco] = useState(0)
  const [expandedEq, setExpandedEq] = useState<number | null>(null)

  function goTo(idx: number) {
    if (idx < 0 || idx >= MARCO_ITEMS.length) return
    setActiveMarco(idx)
  }

  return (
    <div className="home-landing">

      {/* ══ PRESENTACIÓN ═══════════════════════════════════════════ */}
      <section className="home-pres">
        <span className="home-watermark home-pres__watermark" aria-hidden="true">CIRCULATURAS</span>
        <div className="home-pres__inner">

          <div className="home-pres__left">
            <span className="home-sec-label">Presentación</span>
            <h2 className="home-sec-title">Plataforma Nacional<br />de Circulación Cultural</h2>
            <p className="home-pres__p">
              La cultura nos conecta y nos permite expresar quiénes somos. En Colombia, nuestra diversidad
              cultural fortalece los vínculos comunitarios y refleja la riqueza de cada región. Circulaturas
              es la plataforma del <strong>Ministerio de las Culturas, las Artes y los Saberes</strong> para
              visibilizar, gestionar y potenciar la circulación de bienes y expresiones culturales en el país.
            </p>
            <p className="home-pres__p">
              Entendemos la cultura como un derecho y una herramienta fundamental para la equidad y la
              construcción de paz. Esta plataforma nace de un proceso participativo que pone en el centro
              a los agentes, territorios y comunidades que hacen posible la vida cultural de Colombia.
            </p>
          </div>

          <div className="home-pres__obj-card">
            <div className="home-pres__obj-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="#c4b5fd" stroke="none" />
              </svg>
            </div>
            <span className="home-pres__obj-label">Objetivo general</span>
            <p className="home-pres__obj-text">
              Consolidar la equidad de condiciones y oportunidades en el campo de la circulación cultural,
              promoviendo la participación y el ejercicio pleno de los derechos culturales en todos los territorios.
            </p>
            <div className="home-pres__obj-dots" aria-hidden="true">
              <span className="home-pres__obj-dot home-pres__obj-dot--on" />
              <span className="home-pres__obj-dot" />
              <span className="home-pres__obj-dot" />
            </div>
          </div>

        </div>
      </section>

      {/* ══ MARCO NORMATIVO ════════════════════════════════════════ */}
      <section className="home-marco">
        <span className="home-watermark home-marco__watermark" aria-hidden="true">NORMATIVO</span>

        <div className="home-marco__top">
          <span className="home-sec-label">Evolución histórica</span>
          <p className="home-marco__intro">
            Este marco articula leyes, decretos, documentos de política y planes nacionales que orientan
            la formación, la circulación, la participación y la gobernanza cultural en Colombia.
          </p>
        </div>

        {/* Horizontal accordion */}
        <div className="home-marco__accord-wrap">
          {MARCO_ITEMS.map((item, i) => (
            <div
              key={item.year}
              className={`home-marco__accord-item${i === activeMarco ? ' home-marco__accord-item--active' : ''}`}
              onClick={() => goTo(i)}
              role="button"
              aria-expanded={i === activeMarco}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && goTo(i)}
            >
              {/* Vertical year — visible when collapsed */}
              <div className="home-marco__accord-yr-v" aria-hidden="true">
                <span>{item.year}</span>
              </div>

              {/* Full content — visible when active */}
              <div className="home-marco__accord-body">
                <span className="home-marco__card-year">{item.year}</span>
                <p className="home-marco__card-sub">{item.subtitulo}</p>
                <h3 className="home-marco__card-title">{item.titulo}</h3>
                <p className="home-marco__card-desc">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ══ EQUIPO ═════════════════════════════════════════════════ */}
      <section className="home-equipo">
        <div className="home-equipo__inner">
          <div className="home-equipo__hdr">
            <div>
              <span className="home-sec-label">Equipo de trabajo</span>
              <h2 className="home-sec-title">Quiénes somos</h2>
            </div>
            <p className="home-equipo__intro">
              Circulaturas es construida por equipos interdisciplinares del Ministerio comprometidos con
              la gestión de información cultural y el acceso equitativo a la cultura en todo el territorio.
            </p>
          </div>
          <div className="home-equipo__grid">
            {EQUIPO.map((eq, i) => {
              const open = expandedEq === i
              return (
                <div
                  key={eq.titulo}
                  className={`home-equipo__card${open ? ' home-equipo__card--open' : ''}`}
                  style={{ '--eq-color': eq.color } as React.CSSProperties}
                >
                  <span className="home-equipo__bg-letra" aria-hidden="true">{eq.inicial}</span>
                  <button
                    className="home-equipo__card-btn"
                    onClick={() => setExpandedEq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <div className="home-equipo__card-top">
                      <div>
                        <p className="home-equipo__subtitulo">{eq.subtitulo}</p>
                        <h3 className="home-equipo__titulo">{eq.titulo}</h3>
                      </div>
                      <svg
                        className="home-equipo__chevron"
                        viewBox="0 0 24 24" width="18" height="18"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <p className="home-equipo__desc">{eq.descripcion}</p>
                  </button>
                  <div className="home-equipo__extra">
                    <p className="home-equipo__detalle">{eq.detalle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ CIERRE ═════════════════════════════════════════════════ */}
      <div className="home-cierre" />

    </div>
  )
}
