import type { SistemaDemo } from '@/data/sistemasDemo'

function LogoItem({ s }: { s: SistemaDemo }) {
  return (
    <a href="#" className="tirilla-d__item" title={s.nombre}>
      <div className="tirilla-d__logo-wrap">
        {s.logoUrl ? (
          <img
            src={s.logoUrl}
            alt={s.nombre}
            className="tirilla-d__img"
          />
        ) : (
          <div className="tirilla-d__placeholder" style={{ backgroundColor: s.color }}>
            {s.sigla}
          </div>
        )}
        <div className="tirilla-d__glow" style={{ background: s.color }} />
      </div>
      <span className="tirilla-d__nombre">{s.nombre}</span>
    </a>
  )
}

export default function TirillaD({ sistemas }: { sistemas: SistemaDemo[] }) {
  return (
    <div className="tirilla-d">
      <div className="tirilla-d__inner">
        {sistemas.map(s => <LogoItem key={s.id} s={s} />)}
      </div>
    </div>
  )
}
