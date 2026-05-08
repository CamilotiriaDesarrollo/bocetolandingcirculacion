import govCoFooterSrc   from '@/assets/logos/gov-co-arriba.svg'
import logoCoColombiaSrc from '@/assets/logos/logo-co-colombia.svg'

const socialLinks = [
  {
    id: 'youtube', label: 'YouTube',
    d: 'M21.8 8a2.8 2.8 0 0 0-2-2C18 5.5 12 5.5 12 5.5S6 5.5 4.2 6a2.8 2.8 0 0 0-2 2C1.8 9.8 1.8 12 1.8 12s0 2.2.4 4a2.8 2.8 0 0 0 2 2c1.8.5 7.8.5 7.8.5s6 0 7.8-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-4 .4-4s0-2.2-.4-4zM9.8 14.8V9.2l5.2 2.8-5.2 2.8z',
  },
  {
    id: 'instagram', label: 'Instagram',
    d: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.2.5 2.3.1 1.3.1 1.6.1 4.8s0 3.5-.1 4.8c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.2.4-2.3.5-1.3.1-1.6.1-4.8.1s-3.5 0-4.8-.1c-1.2-.1-1.9-.3-2.3-.5a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.5-.4-1.2-.5-2.3C2.2 15.5 2.2 15.2 2.2 12s0-3.5.1-4.8c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.2-.4 2.3-.5 1.3-.1 1.6-.1 4.8-.1zm0-2.2C8.7 0 8.3 0 7.1.1 5.8.1 4.9.4 4.1.7A6 6 0 0 0 2 2 6 6 0 0 0 .7 4.1C.4 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.2.6 3A6 6 0 0 0 2 22a6 6 0 0 0 2.1 1.3c.8.3 1.7.5 3 .6C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.2-.3 3-.6A6 6 0 0 0 22 22a6 6 0 0 0 1.3-2.1c.3-.8.5-1.7.6-3 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.2-.6-3A6 6 0 0 0 22 2a6 6 0 0 0-2.1-1.3c-.8-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z',
  },
  {
    id: 'facebook', label: 'Facebook',
    d: 'M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6.1 4.4 11.1 10.1 11.9V15.6H7v-3.5h3.1V9.5c0-3.1 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8v8.4C19.6 23.2 24 18.2 24 12.1z',
  },
  {
    id: 'x', label: 'X (Twitter)',
    d: 'M18.9 1h3.6l-7.9 9 9.4 12.4h-7.3L11 14.7 4.4 22.4H.7l8.5-9.7L0 1h7.5l5.2 6.8zm-1.3 19.3h2L6.5 3H4.2z',
  },
  {
    id: 'whatsapp', label: 'WhatsApp',
    d: 'M12 0A12 12 0 0 0 1.8 18.3L0 24l5.9-1.8A12 12 0 1 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.4-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A9.9 9.9 0 0 1 12 2.1 9.9 9.9 0 0 1 22 12a9.9 9.9 0 0 1-9.9 9.9zm5.4-7.4c-.3-.2-1.6-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.5-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.6-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.4 1.6.5.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z',
  },
  {
    id: 'tiktok', label: 'TikTok',
    d: 'M19.6 0h-3.3v13.4a2.7 2.7 0 0 1-2.7 2.7 2.7 2.7 0 0 1-2.7-2.7 2.7 2.7 0 0 1 2.7-2.7c.3 0 .5 0 .8.1V7.4a6 6 0 0 0-.8-.1 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6V7.6a7.8 7.8 0 0 0 4.6 1.5V5.7A4.5 4.5 0 0 1 19.6 0z',
  },
]

export default function FooterMincultura() {
  return (
    <footer className="footer-min">
      <div className="footer-min__inner">

        {/* ── Columna 1: Logos institucionales ───────────────── */}
        <div className="footer-min__logos-col">
          <div className="footer-min__logos-row">
            <img src={govCoFooterSrc}    alt="GOV.CO"      className="footer-min__govco-img" />
            <img src={logoCoColombiaSrc} alt="CO Colombia" className="footer-min__co-img" />
          </div>
          <div className="footer-min__social">
            {socialLinks.map(s => (
              <a key={s.id} href="#" aria-label={s.label} className="footer-min__social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ── Columna 2: Datos del Ministerio ────────────────── */}
        <div className="footer-min__col">
          <p className="footer-min__nombre">
            Ministerio de las Culturas,<br />las Artes y los Saberes
          </p>
          <p className="footer-min__dir">
            Dirección: Calle 9 No. 8 - 31 Bogotá<br />
            Horario de atención: 8:00 a.m. a 5:00 p.m. jornada continua.<br />
            Teléfono: +57 (601) 3424100<br />
            Línea gratuita: 018000 938081
          </p>
        </div>

        {/* ── Columna 3: Contacto y Correspondencia ──────────── */}
        <div className="footer-min__col">
          <h4>Contacto Correspondencia:</h4>
          <p>
            Dirección: Calle 9 No. 8 - 31 Bogotá<br />
            Lunes a viernes de 8:00 a.m. a 4:00 p.m.<br />
            jornada continua
          </p>
          <p style={{ marginTop: 10 }}>
            Correo:{' '}
            <a href="mailto:servicioalciudadano@mincultura.gov.co">
              servicioalciudadano@mincultura.gov.co
            </a>
          </p>
          <p style={{ marginTop: 6 }}>
            (Los correos que se reciban después de las 5:00 p. m., se radicarán el siguiente día hábil)
          </p>
          <p style={{ marginTop: 10 }}>
            <strong>Registro de denuncias de corrupción:</strong><br />
            <a href="mailto:soytransparente@mincultura.gov.co">soytransparente@mincultura.gov.co</a>
          </p>
          <p style={{ marginTop: 8 }}>
            <strong>Notificaciones judiciales:</strong><br />
            <a href="mailto:notificaciones@mincultura.gov.co">notificaciones@mincultura.gov.co</a>
          </p>
        </div>

        {/* ── Columna 4: Servicios y Acerca del sitio ────────── */}
        <div className="footer-min__col footer-min__col--services">
          <h4>Servicios a la Ciudadanía</h4>
          <a href="#">PQRSD</a>
          <a href="#">Preguntas Frecuentes</a>
          <a href="#">Glosario</a>
          <a href="#">Trámites y servicios</a>

          <h4 style={{ marginTop: 20 }}>Acerca del sitio</h4>
          <a href="#">Políticas</a>
          <a href="#">Política de privacidad y protección de datos</a>
          <a href="#">Mapa del sitio</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">Accesibilidad</a>

          <p className="footer-min__copyright">Copyright © 2026</p>
        </div>

      </div>
    </footer>
  )
}
