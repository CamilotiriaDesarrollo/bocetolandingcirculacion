export interface Modulo {
  id: string
  numero: number
  labelNav: string       // versión corta para la barra de navegación
  labelCompleto: string  // nombre completo del módulo
  descripcion: string
  color: string
}

export const modulos: Modulo[] = [
  {
    id: 'mapa',
    numero: 1,
    labelNav: 'Mapa interactivo',
    labelCompleto: 'Mapa interactivo de circulación',
    descripcion: 'Visualización georreferenciada de rutas, circuitos y nodos de la circulación cultural en Colombia. Identificación de infraestructuras, espacios comunitarios y eventos activos.',
    color: '#7C3AED',
  },
  {
    id: 'agenda',
    numero: 2,
    labelNav: 'Agenda nacional',
    labelCompleto: 'Agenda nacional de circulación',
    descripcion: 'Calendario integrado de eventos, festivales, giras y actividades de circulación cultural a nivel nacional y regional.',
    color: '#0EA5E9',
  },
  {
    id: 'agentes',
    numero: 3,
    labelNav: 'Agentes y redes',
    labelCompleto: 'Módulo de agentes y redes',
    descripcion: 'Directorio de agentes culturales, gestores, colectivos y redes que participan en la circulación de contenidos culturales en el país.',
    color: '#10B981',
  },
  {
    id: 'banco',
    numero: 4,
    labelNav: 'Banco de contenidos',
    labelCompleto: 'Banco de contenidos y circulación digital',
    descripcion: 'Repositorio de obras, producciones y contenidos culturales disponibles para su circulación física y digital en todo el territorio.',
    color: '#F59E0B',
  },
  {
    id: 'oportunidades',
    numero: 5,
    labelNav: 'Oportunidades',
    labelCompleto: 'Oportunidades y convocatorias',
    descripcion: 'Convocatorias abiertas, estímulos, apoyos y becas para la circulación cultural en Colombia y el exterior.',
    color: '#EF4444',
  },
  {
    id: 'internacionalizacion',
    numero: 6,
    labelNav: 'Internacionalización',
    labelCompleto: 'Ventana de internacionalización',
    descripcion: 'Información, alianzas y oportunidades para la circulación de la cultura colombiana en mercados y escenarios internacionales.',
    color: '#8B5CF6',
  },
  {
    id: 'circuitos',
    numero: 7,
    labelNav: 'Circuitos vivos',
    labelCompleto: 'Circuitos vivos',
    descripcion: 'Circuitos de circulación cultural activos: rutas regionales, intercambios entre territorios y programas de itinerancia artística.',
    color: '#EC4899',
  },
  {
    id: 'analitica',
    numero: 8,
    labelNav: 'Analítica',
    labelCompleto: 'Analítica y seguimiento',
    descripcion: 'Indicadores, estadísticas y seguimiento del ecosistema de circulación cultural: cobertura, impacto y movilidad de contenidos.',
    color: '#06B6D4',
  },
]
