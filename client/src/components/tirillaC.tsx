import type { SistemaDemo } from '@/data/sistemasDemo'

export default function TirillaC({ sistemas }: { sistemas: SistemaDemo[] }) {
  return (
    <div className="tirilla-c">
      <div className="tirilla-c__inner">
        {sistemas.map(s => (
          <a key={s.id} href="#" className="tirilla-c__item">
            <span className="tirilla-c__tooltip">{s.nombre}</span>
            <div className="tirilla-c__logo" style={{ backgroundColor: s.color }}>
              {s.sigla}
            </div>
            <div className="tirilla-c__line" />
          </a>
        ))}
      </div>
    </div>
  )
}
