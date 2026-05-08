import type { SistemaDemo } from '@/data/sistemasDemo'

const stripXmlDecl = (svg: string) => svg.replace(/^<\?xml[^?]*\?>\s*/i, '')

export default function TirillaStatic({
  sistemas,
  dark = false,
  label = 'Explorar la cultura',
}: {
  sistemas: SistemaDemo[]
  dark?: boolean
  label?: string
}) {
  return (
    <div className={`tirilla-s${dark ? ' tirilla-s--dark' : ''}`}>
      <div className="tirilla-s__inner">
        {label && <span className="tirilla-s__label">{label}</span>}
        <div className="tirilla-s__logos">
          {sistemas.map(s => (
            <a key={s.id} href="#" className="tirilla-s__item" title={s.descripcion}>
              <div className="tirilla-s__logo-wrap">
                {s.svgRaw ? (
                  <span
                    className="tirilla-s__svg-logo"
                    dangerouslySetInnerHTML={{ __html: stripXmlDecl(s.svgRaw) }}
                  />
                ) : (
                  <span className="tirilla-s__sigla">{s.sigla}</span>
                )}
              </div>
              <span className="tirilla-s__nombre">{s.descripcion}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
