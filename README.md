## Especialista en Inteligencia Emocional y PNL

---

## CONTEXTO DEL PROYECTO

**Cliente:** Ainara Unamunzaga Santin
**Profesional:** Coach especialista en Inteligencia Emocional y PNL
**Objetivo:** Crear una página web profesional que refleje su identidad de marca y atraiga a su público objetivo

### AUDIENCIA OBJETIVO
- **Perfil:** Profesionales y empresarios de 30-50 años
- **Necesidades:** Liderazgo, gestión emocional, comunicación efectiva
- **Desafíos:** Transformar limitaciones en fortalezas, desarrollar liderazgo auténtico
- **Búsqueda:** Confianza, claridad mental, herramientas prácticas para conflictos

---

## ESPECIFICACIONES TÉCNICAS

### STACK TECNOLÓGICO REQUERIDO
- **Frontend:** React 18+ con TypeScript
- **Backend:** Supabase (autenticación, base de datos, storage)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel o Netlify
- **Formularios:** React Hook Form + validación
- **SEO:** Next.js

### ESTRUCTURA DE CARPETAS SUGERIDA
```
ainara-coach/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── hooks/
│   └── config/
├── public/
└── supabase/
```

---

## IDENTIDAD VISUAL COMPLETA

### PALETA DE COLORES
```css
:root {
  /* Colores Principales */
  --primary-blue: #1B365D;
  --sage-green: #7A9B7F;

  /* Colores de Acento */
  --warm-gold: #D4AF37;
  --pearl-gray: #F5F5F5;
  --snow-white: #FAFAFA;

  /* Variaciones */
  --primary-blue-rgb: 27, 54, 93;
  --sage-green-rgb: 122, 155, 127;
  --warm-gold-rgb: 212, 175, 55;
}
```

### TIPOGRAFÍAS
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');

/* Jerarquía tipográfica */
h1 { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 2rem; }
h2 { font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 1.5rem; }
h3 { font-family: 'Poppins', sans-serif; font-weight: 500; font-size: 1.125rem; }
body { font-family: 'Open Sans', sans-serif; font-weight: 400; font-size: 1rem; }
.quote { font-family: 'Playfair Display', serif; font-weight: 400; font-size: 1.125rem; }
```

### ELEMENTOS DE DISEÑO
- **Estilo:** Profesional pero cálido, minimalista elegante
- **Iconografía:** Líneas finas, elementos de crecimiento y transformación
- **Fotografías:** Tonos cálidos, iluminación natural, espacios limpios
- **Patrones:** Ondas sutiles, círculos concéntricos, líneas fluidas

---

## ESTRUCTURA DE PÁGINAS REQUERIDA

### 1. PÁGINA DE INICIO (/)
**Componentes necesarios:**
- Header con navegación fija
- Hero section con call-to-action principal
- Sección "Sobre mí" resumida
- Servicios destacados
- Testimonios carrusel
- Call-to-action secundario
- Footer

**Contenido específico:**
- **Headline:** "Transforma tu Liderazgo desde la Inteligencia Emocional"
- **Subheadline:** "Acompaño a profesionales y empresarios a desarrollar un liderazgo auténtico que inspire resultados"
- **CTA Principal:** "Agenda tu Sesión Gratuita"
- **Propuesta de valor:** Transformación consciente que combina ciencia y práctica

### 2. PÁGINA SOBRE MÍ (/sobre-mi)
**Contenido requerido:**
- Historia personal y profesional
- Certificaciones y formación
- Metodología "Transformación Consciente"
- Valores y filosofía
- Fotografía profesional prominente

**Elementos clave:**
- **Expertise:** PNL, Reiki, Inteligencia Emocional
- **Enfoque:** Holístico, científico, orientado a resultados
- **Diferenciación:** Combinación única de técnicas

### 3. PÁGINA SERVICIOS (/servicios)
**Servicios a mostrar:**
- Coaching individual ejecutivo
- Talleres de Inteligencia Emocional
- Programas de liderazgo empresarial
- Sesiones de PNL aplicada
- Consultoría en resolución de conflictos

**Estructura por servicio:**
- Título y descripción
- Beneficios específicos
- Metodología aplicada
- Duración y modalidad
- Botón de contacto

### 4. PÁGINA TESTIMONIOS (/testimonios)
**Características:**
- Grid de testimonios con fotografías
- Casos de éxito detallados
- Resultados medibles
- Diferentes tipos de clientes
- Filtros por categoría de servicio

### 5. PÁGINA CONTACTO (/contacto)
**Elementos necesarios:**
- Formulario de contacto funcional
- Información de contacto
- Botón de agenda online
- Mapa o dirección (si aplica)
- Redes sociales

---

## FUNCIONALIDADES REQUERIDAS

### BASE DE DATOS (SUPABASE)
```sql
-- Tabla de contactos
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  service_interest VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de testimonios
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name VARCHAR(100) NOT NULL,
  client_role VARCHAR(100),
  client_company VARCHAR(100),
  testimonial TEXT NOT NULL,
  service_category VARCHAR(50),
  image_url VARCHAR(255),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de servicios
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  benefits TEXT[],
  methodology TEXT,
  duration VARCHAR(50),
  modality VARCHAR(50),
  price_range VARCHAR(50),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### FORMULARIOS
1. **Formulario de Contacto:**
   - Nombre (requerido)
   - Email (requerido, validación)
   - Teléfono (opcional)
   - Servicio de interés (select)
   - Mensaje (requerido)
   - Validación en tiempo real
   - Envío a Supabase

2. **Formulario de Newsletter:**
   - Email (requerido)
   - Nombre (requerido)
   - Intereses (checkboxes)

### CARACTERÍSTICAS TÉCNICAS
- **Responsive Design:** Mobile-first approach
- **Performance:** Lazy loading, optimización de imágenes
- **SEO:** Meta tags, structured data, sitemap
- **Accesibilidad:** ARIA labels, contraste adecuado
- **Seguridad:** Validación de formularios, sanitización

---

## COMPONENTES ESPECÍFICOS A DESARROLLAR

### 1. HEADER COMPONENT
```typescript
interface HeaderProps {
  isScrolled: boolean;
  currentPage: string;
}
```
- Logo responsivo
- Navegación desktop/mobile
- Efecto scroll
- CTA button destacado

### 2. HERO SECTION
```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage?: string;
}
```
- Texto principal impactante
- Imagen de fondo con overlay
- Botón CTA prominente
- Animaciones sutiles

### 3. SERVICES CARD
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  price?: string;
}
```
- Diseño consistente con marca
- Hover effects
- Call-to-action integrado

### 4. TESTIMONIAL CAROUSEL
```typescript
interface TestimonialProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  showNavigation?: boolean;
}
```
- Carousel responsive
- Auto-play opcional
- Navegación intuitiva

### 5. CONTACT FORM
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactData) => void;
  isLoading?: boolean;
}
```
- Validación completa
- Estados de carga
- Mensajes de éxito/error
- Integración con Supabase

---

## CONTENIDO ESPECÍFICO

### COPY PRINCIPAL
- **Tagline:** "Transformación Consciente"
- **Propósito:** "Liberar el potencial humano a través del autoconocimiento emocional"
- **Misión:** "Acompañar a líderes en su evolución personal para crear impacto positivo"
- **Valores:** Autenticidad, Crecimiento, Empatía, Resultados, Integralidad

### SECCIONES DE CONTENIDO
1. **¿Por qué elegir Ainara?**
   - Metodología científica comprobada
   - Experiencia en resolución de conflictos empresariales
   - Enfoque holístico persona-profesional
   - Resultados medibles y tangibles

2. **Metodología "Transformación Consciente"**
   - Autoconocimiento emocional
   - Desarrollo de herramientas prácticas
   - Aplicación en contexto profesional
   - Medición de resultados

3. **Casos de Éxito**
   - Líderes que transformaron su estilo de comunicación
   - Empresarios que mejoraron la gestión de equipos
   - Profesionales que desarrollaron inteligencia emocional

---

## REQUISITOS DE IMPLEMENTACIÓN

### PERFORMANCE
- **Lighthouse Score:** >90 en todas las métricas
- **Tiempo de carga:** <3 segundos
- **Optimización de imágenes:** WebP, lazy loading
- **Minificación:** CSS, JS optimizados

### SEO
- **Meta tags:** Únicos por página
- **Structured data:** Persona, Organización, Servicios
- **Sitemap:** Generado automáticamente
- **URLs:** Semánticas y limpias

### RESPONSIVE DESIGN
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+
- **Breakpoints:** Tailwind standard

### ACCESIBILIDAD
- **WCAG 2.1:** Nivel AA
- **Contraste:** Mínimo 4.5:1
- **Navegación:** Keyboard friendly
- **Screen readers:** ARIA labels

---

## ENTREGABLES ESPECÍFICOS

### ARCHIVOS REQUERIDOS
1. **Código fuente completo**
2. **Documentación técnica**
3. **Manual de usuario**
4. **Guía de deployment**
5. **Credenciales de Supabase configuradas**

### CONFIGURACIÓN INICIAL
- Proyecto React con TypeScript
- Supabase configurado y conectado
- Tailwind CSS instalado
- Componentes base creados
- Formularios funcionales
- Base de datos inicializada

### TESTING
- Formularios funcionando correctamente
- Responsive design validado
- Performance optimizada
- SEO básico implementado
- Accesibilidad verificada

---

## INSTRUCCIONES PARA EL DESARROLLADOR

### PASO 1: CONFIGURACIÓN INICIAL
1. Crear proyecto React con TypeScript
2. Instalar dependencias: Tailwind, Supabase, React Hook Form
3. Configurar variables de entorno
4. Establecer estructura de carpetas

### PASO 2: CONFIGURACIÓN SUPABASE
1. Crear proyecto en Supabase
2. Configurar tablas según esquema proporcionado
3. Establecer conexión en React
4. Implementar funciones de base de datos

### PASO 3: DESARROLLO DE COMPONENTES
1. Crear layout base (Header, Footer)
2. Desarrollar componentes de cada sección
3. Implementar formularios con validación
4. Integrar base de datos

### PASO 4: STYLING Y RESPONSIVE
1. Aplicar paleta de colores y tipografías
2. Implementar diseño responsive
3. Añadir animaciones sutiles
4. Optimizar performance

### PASO 5: TESTING Y DEPLOYMENT
1. Validar funcionalidad completa
2. Verificar responsive design
3. Testear formularios
4. Preparar para deployment

---

## NOTAS IMPORTANTES

- **Mantener consistencia** con la identidad visual en todo momento
- **Priorizar la experiencia del usuario** por encima de elementos decorativos
- **Optimizar para conversión** con CTAs claros y estratégicos
- **Asegurar accesibilidad** para llegar a la mayor audiencia posible
- **Documentar todo** para futuras actualizaciones
