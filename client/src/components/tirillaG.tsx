import type { SistemaDemo } from '@/data/sistemasDemo'

export default function TirillaG({ sistemas }: { sistemas: SistemaDemo[] }) {
  return (
    <div className="tirilla-g">
      <div className="tirilla-g__inner">
        {sistemas.map(s => (
          <a key={s.id} href="#" className="tirilla-g__item" title={s.nombre}>
            <div className="tirilla-g__logo-wrap">
              {s.svgRaw ? (
                <div className="tirilla-g__img" dangerouslySetInnerHTML={{ __html: s.svgRaw }} />
              ) : (
                <div className="tirilla-g__placeholder" style={{ backgroundColor: s.color }}>
                  {s.sigla}
                </div>
              )}
              <div className="tirilla-g__glow" style={{ '--glow-color': s.color } as React.CSSProperties} />
            </div>
            <span className="tirilla-g__nombre">{s.nombre}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
