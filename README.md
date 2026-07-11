# Clínica Hispana Houston

Website profesional para clínica médica hispana en Houston, TX. Sitio bilingüe (Español/Inglés) optimizado para SEO local y conversiones.

## Stack Tecnológico

- **Framework:** Next.js 15+ (App Router)
- **UI:** React 19+, TypeScript, Tailwind CSS v4
- **Componentes:** shadcn/ui
- **Internacionalización:** next-intl
- **Formularios:** React Hook Form + Zod
- **Animaciones:** Framer Motion, CSS Animations
- **Email:** Resend

## Inicio Rápido

### Requisitos

- Node.js 18+
- npm o pnpm

### Instalación

```bash
# Clonar repositorio
git clone [url-del-repo]
cd clinica-hispana-houston

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Iniciar desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

### Variables de Entorno

```env
RESEND_API_KEY=re_xxxxxxxxxx
GOOGLE_PLACES_API_KEY=AIzaxxxxxxxxxx
GOOGLE_PLACE_ID=ChIJxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://www.clinicahispanahouston.com
```

## Estructura del Proyecto

```
src/
├── app/[locale]/        # Rutas internacionalizadas
├── components/
│   ├── ui/              # shadcn/ui
│   ├── sections/        # Hero, Services, Contact, etc.
│   ├── layout/          # Header, Footer
│   └── forms/           # Formulario de contacto
├── lib/
│   ├── constants.ts     # Datos del negocio
│   └── validations.ts   # Schemas Zod
├── messages/            # Traducciones (es.json, en.json)
└── i18n/                # Configuración next-intl
```

## Personalización

### 1. Información del Negocio

Editar `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Tu Clínica",
  baseUrl: "https://tuclinica.com",
  // ...
};

export const CONTACT_INFO = {
  phone: "+17135551234",
  address: "123 Main St",
  // ...
};
```

### 2. Servicios

Agregar/modificar servicios en `SERVICES` array en `constants.ts`.

### 3. Traducciones

- Español: `src/messages/es.json`
- Inglés: `src/messages/en.json`

### 4. Imágenes

Agregar imágenes en `/public/images/`:
- `logo.png` - Logo de la clínica
- `hero-bg.webp` - Imagen del hero
- `og-image.jpg` - Open Graph (1200x630)
- `services/*.webp` - Imágenes de servicios

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run start    # Iniciar producción
npm run lint     # Linter
```

## Deployment

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

### Otros Hostings

```bash
npm run build
npm run start
```

## SEO

- **JSON-LD:** MedicalClinic, FAQPage, BreadcrumbList
- **Sitemap:** Generado automáticamente
- **Robots:** Configurado para indexación

## Accesibilidad

- Skip to content link
- Navegación por teclado
- Alt text en imágenes
- ARIA labels
- Soporte para lectores de pantalla

## Licencia

MIT
