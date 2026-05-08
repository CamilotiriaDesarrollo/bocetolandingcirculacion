import { useState, useMemo, useRef, useEffect, forwardRef } from 'react'
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {
  eventosInternacionales,
  REGIONES,
  TIPOS_EVENTO,
  REGION_COLORS,
  COUNTRY_CENTERS,
  type EventoInternacional,
} from '@/data/eventosInternacionales'

const WORLD_BOUNDS: [[number, number], [number, number]] = [[-60, -170], [75, 180]]

const REGION_BOUNDS: Record<string, [[number, number], [number, number]]> = {
  'Europa':            [[34, -25],  [72,  42]],
  'América del Sur':   [[-56, -82], [13, -34]],
  'América del Norte': [[ 15, -170],[72, -52]],
  'América Central':   [[  7,  -92],[23, -60]],
  'Asia':              [[  1,   26], [55, 148]],
  'África':            [[-35,  -18],[38,  52]],
  'Oceanía':           [[-47,  110],[-8, 180]],
}

/* ── Controlador de vista del mapa ── */
function MapViewController({
  region, pais, evento,
}: {
  region: string | null
  pais: string
  evento: EventoInternacional | null
}) {
  const map = useMap()

  useEffect(() => {
    if (evento) {
      map.setView([evento.lat, evento.lng], 8, { animate: true, duration: 0.7 })
      map.closePopup()
      L.popup({ className: 'int-popup-wrap', offset: [0, -6] })
        .setLatLng([evento.lat, evento.lng])
        .setContent(`
          <div class="int-map-popup">
            <p class="imp-tipo">${evento.tipo}</p>
            <strong class="imp-nombre">${evento.nombre}</strong>
            <p class="imp-loc">${evento.ciudad}, ${evento.pais}</p>
            ${evento.estado ? `<span class="imp-badge imp-badge--${evento.estado === 'Próximo' ? 'proximo' : 'fin'}">${evento.estado}</span>` : ''}
          </div>
        `)
        .openOn(map)
      return
    }
    map.closePopup()
    if (region && REGION_BOUNDS[region]) {
      map.fitBounds(REGION_BOUNDS[region], { padding: [24, 24], animate: true, duration: 0.9 })
    } else if (pais && COUNTRY_CENTERS[pais]) {
      map.setView(COUNTRY_CENTERS[pais], 5, { animate: true, duration: 0.8 })
    } else {
      map.fitBounds(WORLD_BOUNDS, { padding: [10, 10], animate: true, duration: 0.8 })
    }
  }, [evento, region, pais, map])

  return null
}

/* Deshabilita el zoom con rueda del mouse de forma explícita */
function DisableScrollZoom() {
  const map = useMap()
  useEffect(() => {
    map.scrollWheelZoom.disable()
  }, [map])
  return null
}

function jitter(val: number, idx: number, scale = 0.08): number {
  return val + (((idx * 17 + 7) % 10) - 4.5) * scale
}

const ChevronDown = () => (
  <svg viewBox="0 0 12 12" width="11" height="11" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 4 6 8 10 4" />
  </svg>
)

/* ── Componente de card con ref para scroll ── */
const EventoCard = forwardRef<HTMLElement, {
  ev: EventoInternacional
  selected: boolean
  onClick: () => void
}>(({ ev, selected, onClick }, ref) => {
  const color = REGION_COLORS[ev.region] ?? '#7C3AED'
  const estadoClass = ev.estado === 'Próximo' ? 'int-badge--proximo' : 'int-badge--finalizado'

  useEffect(() => {
    if (selected && ref && typeof ref === 'object' && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [selected])

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`int-card${selected ? ' int-card--selected' : ''}`}
      style={{ '--card-color': color } as React.CSSProperties}
      onClick={onClick}
    >
      <div className="int-card__top">
        {ev.estado && <span className={`int-badge ${estadoClass}`}>{ev.estado}</span>}
        <span className="int-card__tipo">{ev.tipo}</span>
      </div>
      <h3 className="int-card__title">{ev.nombre}</h3>
      <div className="int-card__loc">
        <span className="int-card__loc-dot" style={{ background: color }} />
        <span>{ev.ciudad}, <strong>{ev.pais}</strong></span>
        <span className="int-card__region">{ev.region}</span>
      </div>
      {(ev.fechaInicio || ev.fechaFin) && (
        <div className="int-card__fecha">
          <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="1" y="3" width="14" height="12" rx="2" />
            <path d="M5 1v4M11 1v4M1 7h14" />
          </svg>
          {ev.fechaInicio}{ev.fechaFin && ev.fechaFin !== ev.fechaInicio ? ` → ${ev.fechaFin}` : ''}
        </div>
      )}
      <div className="int-card__meta">
        <span className="int-card__sector">{ev.sector}</span>
        {ev.modalidad && (
          <span className={`int-mod-badge int-mod-badge--${ev.modalidad.toLowerCase().replace('í','i')}`}>
            {ev.modalidad}
          </span>
        )}
      </div>
      {selected && (
        <div className="int-card__expanded">
          {ev.disciplina && <p className="int-card__disciplina">{ev.disciplina}</p>}
          {ev.organizador && <p className="int-card__org"><em>Organiza:</em> {ev.organizador}</p>}
          {ev.fechaLimite && <p className="int-card__limite"><em>Fecha límite:</em> {ev.fechaLimite}</p>}
          <div className="int-card__links">
            {ev.web?.startsWith('http') && (
              <a href={ev.web} target="_blank" rel="noopener noreferrer"
                className="int-card__link int-card__link--web"
                onClick={e => e.stopPropagation()}>Sitio web →</a>
            )}
            {ev.inscripcion?.startsWith('http') && ev.inscripcion !== ev.web && (
              <a href={ev.inscripcion} target="_blank" rel="noopener noreferrer"
                className="int-card__link int-card__link--ins"
                onClick={e => e.stopPropagation()}>Inscripción →</a>
            )}
          </div>
        </div>
      )}
    </article>
  )
})
EventoCard.displayName = 'EventoCard'

/* ── Página principal ── */
export default function InternacionalizacionPage() {
  const [selectedEvento, setSelectedEvento] = useState<EventoInternacional | null>(null)
  const [expandedRegion, setExpandedRegion] = useState<string | null>('Europa')
  const [filtroTipo, setFiltroTipo] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('')
  const [filtroModalidad, setFiltroModalidad] = useState('')
  const [filtroPais, setFiltroPais] = useState('')

  const cardRefs = useRef<Record<string, HTMLElement | null>>({})

  const paises = useMemo(() => {
    const set = new Set(eventosInternacionales.map(e => e.pais))
    return Array.from(set).sort()
  }, [])

  const eventosFiltrados = useMemo(() => {
    return eventosInternacionales.filter(e => {
      if (filtroTipo && e.tipo !== filtroTipo) return false
      if (filtroEstado && e.estado !== filtroEstado) return false
      if (filtroModalidad && e.modalidad !== filtroModalidad) return false
      if (filtroPais && e.pais !== filtroPais) return false
      return true
    })
  }, [filtroTipo, filtroEstado, filtroModalidad, filtroPais])

  function clearFiltros() {
    setFiltroTipo(''); setFiltroEstado(''); setFiltroModalidad(''); setFiltroPais('')
  }

  function handleMarkerClick(ev: EventoInternacional) {
    setSelectedEvento(prev => prev?.id === ev.id ? null : ev)
    if (expandedRegion !== ev.region) setExpandedRegion(ev.region)
  }

  function handleCardClick(ev: EventoInternacional) {
    setSelectedEvento(prev => prev?.id === ev.id ? null : ev)
  }

  const hayFiltros = filtroTipo || filtroEstado || filtroModalidad || filtroPais

  return (
    <div className="int-page">

      {/* ── Header ── */}
      <div className="int-header">
        <span className="int-header__watermark" aria-hidden="true">INTERNACIONALIZACIÓN</span>
        <div className="int-header__inner">
          <div className="int-header__left">
            <span className="home-sec-label">Ventana de</span>
            <h1 className="int-header__title">Internacionalización</h1>
            <p className="int-header__desc">
              Festivales, ferias, congresos y oportunidades para la circulación
              de la cultura colombiana en escenarios y mercados del mundo.
            </p>
          </div>
          <div className="int-header__stats">
            <div className="int-stat">
              <span className="int-stat__num">{eventosFiltrados.length}</span>
              <span className="int-stat__label">Eventos</span>
            </div>
            <div className="int-stat__div" aria-hidden="true" />
            <div className="int-stat">
              <span className="int-stat__num">{new Set(eventosFiltrados.map(e => e.pais)).size}</span>
              <span className="int-stat__label">Países</span>
            </div>
            <div className="int-stat__div" aria-hidden="true" />
            <div className="int-stat">
              <span className="int-stat__num">{new Set(eventosFiltrados.map(e => e.region)).size}</span>
              <span className="int-stat__label">Regiones</span>
            </div>
            <div className="int-stat__div" aria-hidden="true" />
            <div className="int-stat">
              <span className="int-stat__num">{eventosFiltrados.filter(e => e.estado === 'Próximo').length}</span>
              <span className="int-stat__label">Próximos</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mapa ── */}
      <div className="int-map-wrap">
        <MapContainer
          bounds={WORLD_BOUNDS}
          boundsOptions={{ padding: [10, 10] }}
          className="int-leaflet"
          scrollWheelZoom={false}
          zoomControl={true}
          minZoom={2}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          <DisableScrollZoom />
          <MapViewController
            region={expandedRegion}
            pais={filtroPais}
            evento={selectedEvento}
          />
          {eventosFiltrados.map((ev, i) => {
            const color = REGION_COLORS[ev.region] ?? '#7C3AED'
            const isSelected = selectedEvento?.id === ev.id
            return (
              <CircleMarker
                key={ev.id}
                center={[jitter(ev.lat, i), jitter(ev.lng, i + 1)]}
                radius={isSelected ? 7 : 4}
                pathOptions={{
                  fillColor: color,
                  fillOpacity: isSelected ? 1 : 0.72,
                  color: isSelected ? '#fff' : color,
                  weight: isSelected ? 2 : 0.4,
                }}
                eventHandlers={{ click: () => handleMarkerClick(ev) }}
              >
                <Tooltip direction="top" offset={[0, -5]} opacity={0.96}>
                  <div className="int-tooltip">
                    <strong>{ev.nombre}</strong>
                    <span>{ev.ciudad}, {ev.pais}</span>
                    <span>{ev.tipo} · {ev.fechaInicio}</span>
                  </div>
                </Tooltip>
              </CircleMarker>
            )
          })}
        </MapContainer>
      </div>

      {/* ── Filtros ── */}
      <div className="int-filtros">
        <div className="int-filtros__inner">
          <div className="int-filtros__selects">
            <div className="int-filter-pill">
              <select className={`int-select${filtroPais ? ' int-select--active' : ''}`}
                value={filtroPais} onChange={e => setFiltroPais(e.target.value)}>
                <option value="">País</option>
                {paises.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <ChevronDown />
            </div>
            <div className="int-filter-pill">
              <select className={`int-select${filtroTipo ? ' int-select--active' : ''}`}
                value={filtroTipo} onChange={e => setFiltroTipo(e.target.value)}>
                <option value="">Tipo de evento</option>
                {TIPOS_EVENTO.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown />
            </div>
            <div className="int-filter-pill">
              <select className={`int-select${filtroEstado ? ' int-select--active' : ''}`}
                value={filtroEstado} onChange={e => setFiltroEstado(e.target.value)}>
                <option value="">Estado</option>
                <option value="Próximo">Próximo</option>
                <option value="Finalizado">Finalizado</option>
              </select>
              <ChevronDown />
            </div>
            <div className="int-filter-pill">
              <select className={`int-select${filtroModalidad ? ' int-select--active' : ''}`}
                value={filtroModalidad} onChange={e => setFiltroModalidad(e.target.value)}>
                <option value="">Modalidad</option>
                <option value="Presencial">Presencial</option>
                <option value="Virtual">Virtual</option>
                <option value="Híbrido">Híbrido</option>
                <option value="Semipresencial">Semipresencial</option>
              </select>
              <ChevronDown />
            </div>
            {hayFiltros && (
              <button className="int-clear-btn" onClick={clearFiltros}>✕ Limpiar</button>
            )}
          </div>
          <div className="int-filtros__result">
            <span className="int-filtros__result-num">{eventosFiltrados.length}</span>
            <span className="int-filtros__result-label">resultado{eventosFiltrados.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>

      {/* ── Acordeón horizontal de regiones ── */}
      <div className="int-hacc-outer">
      <div className="int-hacc">
        {eventosFiltrados.length === 0 ? (
          <div className="int-hacc-empty">
            <p>Sin eventos con estos filtros</p>
            <button className="int-clear-btn" onClick={clearFiltros}>Ver todos</button>
          </div>
        ) : (
          REGIONES.map(region => {
            const evs = eventosFiltrados.filter(e => e.region === region)
            if (evs.length === 0) return null
            const color = REGION_COLORS[region] ?? '#7C3AED'
            const open = expandedRegion === region
            return (
              <div
                key={region}
                className={`int-hacc__item${open ? ' int-hacc__item--open' : ''}`}
                style={{ '--reg-color': color } as React.CSSProperties}
              >
                {/* Cuerpo va ANTES del trigger → el panel se expande hacia la izquierda */}
                <div className="int-hacc__body">
                  <div className="int-hacc__body-hdr">
                    <span className="int-hacc__body-title">{region}</span>
                    <span className="int-hacc__body-count">{evs.length} evento{evs.length !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="int-cards-grid">
                    {evs.map(ev => (
                      <EventoCard
                        key={ev.id}
                        ev={ev}
                        ref={el => { cardRefs.current[ev.id] = el }}
                        selected={selectedEvento?.id === ev.id}
                        onClick={() => handleCardClick(ev)}
                      />
                    ))}
                  </div>
                </div>

                <button
                  className="int-hacc__trigger"
                  onClick={() => setExpandedRegion(open ? null : region)}
                  aria-expanded={open}
                >
                  <span className="int-hacc__count">{evs.length}</span>
                  <span className="int-hacc__label">{region}</span>
                </button>
              </div>
            )
          })
        )}
      </div>
      </div>
    </div>
  )
}
