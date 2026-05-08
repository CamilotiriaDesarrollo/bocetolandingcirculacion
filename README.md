# Tirilla de Plataformas — Ministerio de las Culturas

Portal de entrada a los sistemas de información del **Ministerio de las Culturas, las Artes y los Saberes** de Colombia.

Incluye el componente `TirillaF`: barra institucional de logos con efecto **dock magnético** y **carrusel infinito animado**, en versión clara y oscura, con responsive completo desde 320px hasta 4K.

---

## Cómo correrlo localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/CamilotiriaDesarrollo/tirillaplataformasmincultura.git
cd tirillaplataformasmincultura

# 2. Instalar dependencias del cliente
cd client
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

> El backend (`/server`) no es necesario para ver las tirillas. Solo se necesita para la API de sistemas.

---

## Stack tecnológico

| Capa        | Tecnología                              |
|-------------|-----------------------------------------|
| Lenguaje    | TypeScript 5                            |
| UI          | React 18 (hooks funcionales)            |
| Build       | Vite 5                                  |
| Estilos     | CSS puro (metodología BEM)              |
| Backend     | Node.js + Express + TypeScript          |
| Logos       | SVG inline                              |

Sin librerías de UI externas (sin Tailwind, sin Bootstrap, sin Material UI).

---

## Estructura del proyecto

```
tirillaplataformasmincultura/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── tirillaF.tsx          ← Componente principal de las barras
│   │   │   ├── headerMincultura.tsx  ← Header institucional
│   │   │   ├── footerMincultura.tsx  ← Footer institucional
│   │   │   ├── accesibilidadBar.tsx  ← Barra de accesibilidad flotante
│   │   │   └── TIRILLA_F_README.md  ← Documentación técnica del componente
│   │   ├── data/
│   │   │   └── sistemasDemo.ts       ← Datos y logos SVG de los sistemas
│   │   ├── pages/
│   │   │   └── Home.tsx              ← Página principal
│   │   └── index.css                 ← Todos los estilos (BEM)
│   └── index.html
└── server/
    └── src/
        ├── config/sistemas.json      ← Lista de sistemas (fuente de datos)
        └── index.ts                  ← API REST en puerto 3000
```

---

## Componente TirillaF

Barra institucional con dos secciones:

**Sección fija (izquierda):** logos de los sistemas principales con efecto dock magnético. Al pasar el cursor, los logos escalan dinámicamente según la distancia del mouse (estilo macOS).

**Carrusel (derecha):** scroll infinito automático via `requestAnimationFrame`. Los logos se desplazan continuamente sin librerías de animación externas.

### Props

```tsx
<TirillaF
  sistemas={sistemasDemo}          // array de sistemas con logos SVG
  labelFixed="Explora la cultura"  // título sección izquierda
  labelCarousel="Aliados"          // título sección derecha
  dark={false}                     // variante fondo oscuro con tonos violeta
  staticMode={false}               // desactiva auto-scroll (versión estática)
/>
```

### Responsive

| Breakpoint | Comportamiento |
|------------|---------------|
| ≥ 2560px   | Escala 4K     |
| 1920–2559px | Escala 2K    |
| 1440px     | Diseño base   |
| 1024–1279px | Compacto     |
| 768–1023px  | Tablet        |
| ≤ 767px    | Mobile: layout vertical (fija arriba, carrusel abajo) |
| ≤ 375px    | Mobile M      |
| ≤ 320px    | Mobile S      |

---

## Documentación técnica completa del componente

Ver [`client/src/components/TIRILLA_F_README.md`](client/src/components/TIRILLA_F_README.md)

---

## Contexto institucional

Proyecto desarrollado para el **Ministerio de las Culturas, las Artes y los Saberes** de Colombia bajo los lineamientos técnicos DI-GSI-010:

- Accesibilidad grado AA (NTC 5854)
- Responsive Design
- Sin dependencias de UI externas
- Compatible con infraestructura Windows Server / IIS del Ministerio
