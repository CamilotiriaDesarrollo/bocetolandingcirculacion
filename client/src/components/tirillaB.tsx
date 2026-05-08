import type { SistemaDemo } from '@/data/sistemasDemo'

export default function TirillaB({ sistemas }: { sistemas: SistemaDemo[] }) {
  return (
    <div className="tirilla-b">
      <div className="tirilla-b__inner">
        {sistemas.map(s => (
          <a key={s.id} href="#" className="tirilla-b__item">
            <div className="tirilla-b__dot" style={{ backgroundColor: s.color }} />
            {s.nombre}
          </a>
        ))}
      </div>
    </div>
  )
}
