import sipaLogoRaw from '@/assets/logos/logo_sipa.svg?raw'
import sinicLogoRaw from '@/assets/logos/logo_sinic.svg?raw'
import soyCulturaLogoRaw from '@/assets/logos/logo_soycultura.svg?raw'
import siaLogoRaw from '@/assets/logos/logo_sia.svg?raw'
import estimulosLogoRaw from '@/assets/logos/logo_estimulos.svg?raw'

export interface SistemaDemo {
  id: string
  nombre: string
  descripcion: string
  sigla: string
  color: string
  svgRaw?: string
}

export const sistemasDemo: SistemaDemo[] = [
  // ── fijos (primeros FIXED_COUNT = 4) ──────────────────────
  { id: 'sinic',        nombre: 'SINIC',        descripcion: 'Sistema nacional de información cultural',              sigla: 'SNIC', color: '#2E7D32', svgRaw: sinicLogoRaw },
  { id: 'sipa',         nombre: 'SIPA',         descripcion: 'Sistema de información de patrimonio y memoria',       sigla: 'SIPA', color: '#1565C0', svgRaw: sipaLogoRaw },
  { id: 'si-artes',     nombre: 'SI ARTES',     descripcion: 'Sistema de información para las artes',               sigla: 'SIA',  color: '#C2410C', svgRaw: siaLogoRaw },
  { id: 'cineproyecto', nombre: 'CINEPROYECTO', descripcion: 'Cineproyecto',                                        sigla: 'CIN',  color: '#B71C1C' },
  // ── carrusel ──────────────────────────────────────────────
  { id: 'soy-cultura',  nombre: 'SOY CULTURA',        descripcion: 'Soy Cultura',                                          sigla: 'SC',   color: '#00A9A5', svgRaw: soyCulturaLogoRaw },
  { id: 'estimulos',    nombre: 'ESTÍMULOS',          descripcion: 'Programa Nacional de Estímulos',                       sigla: 'EST',  color: '#7C3AED', svgRaw: estimulosLogoRaw },
  { id: 'artes-paz',    nombre: 'ARTES PAZ',          descripcion: 'Artes para la Paz',                                    sigla: 'APZ',  color: '#C2410C' },
  { id: 'gastro',       nombre: 'GASTROHERENCIA',     descripcion: 'Gastroherencia Colombia',                              sigla: 'GHC',  color: '#B45309' },
  { id: 'maguare',      nombre: 'MAGUARÉ',            descripcion: 'Maguaré',                                              sigla: 'MAG',  color: '#0369A1' },
  { id: 'maguared',     nombre: 'MAGUARED',           descripcion: 'Maguared',                                             sigla: 'MGD',  color: '#0891B2' },
  { id: 'concertacion', nombre: 'CONCERTACIÓN',       descripcion: 'Programa Nacional de Concertación Cultural',           sigla: 'PNCC', color: '#6D28D9' },
  { id: 'reading',      nombre: 'READING',            descripcion: 'Reading Colombia',                                     sigla: 'RC',   color: '#065F46' },
  { id: 'celebra',      nombre: 'CELEBRA',            descripcion: 'Celebra la música',                                    sigla: 'CLM',  color: '#9D174D' },
]
