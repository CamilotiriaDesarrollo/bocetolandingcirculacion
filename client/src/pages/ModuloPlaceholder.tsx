import type { Modulo } from '@/data/modulos'

interface Props {
  modulo: Modulo
}

export default function ModuloPlaceholder({ modulo }: Props) {
  return (
    <div className="mod-ph">
      <div className="mod-ph__inner">
        <span
          className="mod-ph__num"
          style={{ color: modulo.color, borderColor: modulo.color }}
        >
          {String(modulo.numero).padStart(2, '0')}
        </span>
        <h1 className="mod-ph__title">{modulo.labelCompleto}</h1>
        <p className="mod-ph__desc">{modulo.descripcion}</p>
        <div className="mod-ph__badge">
          <span className="mod-ph__badge-dot" style={{ background: modulo.color }} />
          Módulo en desarrollo
        </div>
      </div>
    </div>
  )
}
