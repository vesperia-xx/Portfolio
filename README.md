# Portafolio · Ricardo Aguilera

Portafolio personal de **Ricardo Aguilera**, Ingeniero en Informática y desarrollador full-stack. Sitio de una sola página con proyectos, servicios, sección de contacto, modo claro/oscuro persistente y versión en español e inglés.

## Stack

- [Next.js 16](https://nextjs.org) (Pages Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- `next/font` (Inter + Sora)
- [react-icons](https://react-icons.github.io/react-icons/)

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera `sitemap.xml`/`robots.txt` y hace el build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |

## Estructura

```
components/
  ThemeProvider.jsx   # Tema claro/oscuro con persistencia en localStorage
  LanguageSwitcher.jsx # Selector ES / EN con cookie NEXT_LOCALE
  Seo.jsx             # title, description, Open Graph y hreflang
  Navbar.jsx          # Navegación sticky + idioma + toggle de tema + CV
  Hero.jsx            # Portada, redes y stack principal
  About.jsx           # Sobre mí
  Services.jsx        # Servicios & especialidades
  Projects.jsx        # Grid de proyectos
  Contact.jsx         # Llamada a la acción
  Footer.jsx
  SectionHeading.jsx  # Encabezado de sección reutilizable
content/
  es.js               # Todo el copy en español
  en.js               # Todo el copy en inglés
data/
  projects.js         # Proyectos con descripciones bilingües
lib/
  i18n.js             # Hook useTranslation basado en router.locale
pages/
  index.js            # Composición de la landing
  _app.js             # Fuentes y CSS global
  _document.js        # lang dinámico, favicon y script anti-parpadeo del tema
scripts/
  generate-sitemap.mjs # sitemap.xml y robots.txt en el build
  cv/
    cv-en.html         # Fuente del CV inglés (A4, una página)
    build-cv-en.mjs    # HTML a PDF con Edge/Chrome (`npm run cv:build`)
styles/
  globals.css         # Tokens de Tailwind, modo oscuro y estilos base
proxy.js              # Redirección de `/` según Accept-Language o NEXT_LOCALE
```

## Personalización

- **Proyectos**: edita `data/projects.js` (título, descripción bilingüe, tags, imagen y enlaces).
- **Copy**: todo el texto vive en `content/es.js` y `content/en.js`.
- **Redes y correo**: `components/Hero.jsx`, `components/Contact.jsx` y `components/Footer.jsx`.
- **CV**: hay una versión por idioma. Reemplaza `public/cv-ricardo-aguilera.pdf` (español) y `public/cv-ricardo-aguilera-en.pdf` (inglés); el botón usa la que corresponde al idioma de la página.
  - Para editar el CV inglés, modifica `scripts/cv/cv-en.html` y ejecuta `npm run cv:build` (usa Edge o Chrome ya instalados; con `EDGE_PATH` puedes indicar otra ruta).
  - El diseño está pensado para una sola página A4: si añades contenido, revisa que no salte a la segunda.
- **Imágenes**: `public/avatar.jpg` y `public/projects/*`.
- **SEO / Open Graph**: se usa `NEXT_PUBLIC_SITE_URL` para el canonical y las URLs absolutas. En Vercel se toma automáticamente el dominio de producción, así que solo necesitas definirlo si usas otro dominio (copia `.env.example` a `.env.local`):

```bash
cp .env.example .env.local
```

Sin valor, el sitio funciona igual pero omite `canonical` y `og:image`.

## Modo oscuro

El tema se guarda en `localStorage` (`theme`) y, si el usuario no ha elegido, sigue a `prefers-color-scheme`. Un script inline en `_document.js` aplica la clase `.dark` antes del primer paint para evitar el destello blanco.

## Idiomas

- `/` sirve **inglés** y `/es` sirve **español** (i18n nativo de Next.js, sin dependencias).
- Al entrar en `/`, un proxy lee `Accept-Language` (incluidas variantes regionales como `es-CL` o `es-419`): un navegador en español va a `/es`; el resto se queda en inglés.
- El selector `ES / EN` del navbar guarda la preferencia en la cookie `NEXT_LOCALE`, que tiene prioridad sobre el navegador en visitas posteriores.
- `Seo.jsx` genera canonical, `hreflang` (`en`, `es`, `x-default`) y `og:locale` por idioma.
- `npm run build` genera `public/sitemap.xml` y `public/robots.txt` con ambas versiones y sus alternates cuando hay dominio configurado.
