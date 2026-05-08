import type { SistemaDemo } from '@/data/sistemasDemo'

export default function TirillaA({ sistemas }: { sistemas: SistemaDemo[] }) {
  return (
    <div className="tirilla-a">
      <div className="tirilla-a__inner">
        {sistemas.map(s => (
          <a key={s.id} href="#" className="tirilla-a__item">
            <div className="tirilla-a__logo" style={{ backgroundColor: s.color }}>
              {s.sigla}
            </div>
            <span className="tirilla-a__nombre">{s.nombre}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
