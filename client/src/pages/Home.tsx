import { useState } from 'react'
import HeaderMincultura from '@/components/headerMincultura'
import TirillaF from '@/components/tirillaF'
import FooterMincultura from '@/components/footerMincultura'
import AccesibilidadBar from '@/components/accesibilidadBar'
import HomeLanding from '@/pages/HomeLanding'
import MapaCirculacion from '@/pages/MapaCirculacion'
import InternacionalizacionPage from '@/pages/InternacionalizacionPage'
import ModuloPlaceholder from '@/pages/ModuloPlaceholder'
import { sistemasDemo } from '@/data/sistemasDemo'
import { modulos } from '@/data/modulos'

function renderContenido(moduloActivo: string, onNavClick: (id: string) => void) {
  if (moduloActivo === 'home') {
    return <HomeLanding onNavClick={onNavClick} />
  }
  if (moduloActivo === 'mapa') {
    return <MapaCirculacion />
  }
  if (moduloActivo === 'internacionalizacion') {
    return <InternacionalizacionPage />
  }
  const modulo = modulos.find(m => m.id === moduloActivo)
  if (modulo) {
    return <ModuloPlaceholder modulo={modulo} />
  }
  return <HomeLanding onNavClick={onNavClick} />
}

export default function Home() {
  const [moduloActivo, setModuloActivo] = useState('home')

  return (
    <div className="page-layout">
      <AccesibilidadBar />
      <HeaderMincultura
        moduloActivo={moduloActivo}
        onNavClick={setModuloActivo}
      />

      <main className="page-main">
        {renderContenido(moduloActivo, setModuloActivo)}
      </main>

      <TirillaF
        sistemas={sistemasDemo}
        labelFixed="Explora la cultura"
        labelCarousel="Aliados — Otras plataformas"
      />
      <FooterMincultura />
    </div>
  )
}
