# Estado del Proyecto: ainara-coach

## 1. Stack y estructura
- **Next.js 15** (app directory)
- **TypeScript**
- **Tailwind CSS v4** (con @tailwindcss/postcss)
- **PostCSS**
- **Supabase** (configurado, pero no probado en producción)
- **Estructura**: `/src/app`, `/src/components`, `/src/styles/globals.css`, `/public/images`, etc.

## 2. Identidad visual
- Paleta de colores, tipografías y clases personalizadas definidas en `tailwind.config.js` y `globals.css`.
- Fuentes: Poppins, Open Sans (como `font-sans`), Playfair Display.
- Clases personalizadas para botones, cards, secciones, etc.

## 3. Estado de los estilos
- **Tailwind v4 y @tailwindcss/postcss están instalados y configurados.**
- El archivo `globals.css` contiene las directivas y estilos base.
- El archivo `postcss.config.js` usa el plugin correcto (`@tailwindcss/postcss`).
- El archivo `tailwind.config.js` está en la raíz y el campo `content` cubre `/src/app`, `/src/components`, `/src/pages`.
- Las clases de fuente se han actualizado para cumplir con Tailwind v4 (`font-sans`, `font-poppins`, `font-playfair`).

## 4. Problema actual
- **El CSS generado por Tailwind (layout.css) está vacío o casi vacío.**
- En el navegador, el contenido se muestra pero sin estilos de Tailwind.
- No hay errores críticos en la terminal ni en la consola del navegador.
- Las advertencias de consola (`resize-handle.css`, pseudo-clases desconocidas) no afectan a Tailwind ni al diseño.
- El problema parece estar en la compilación de Tailwind: no detecta las clases usadas en los archivos fuente.

## 5. Acciones realizadas
- Instalación y configuración de Tailwind v4 y @tailwindcss/postcss.
- Actualización de las clases de fuente en todo el proyecto.
- Limpieza de caché (`rm -rf .next`) y reinicio del servidor.
- Verificación de rutas, imports y configuración de todos los archivos clave.
- Pruebas de build y revisión de la red en el navegador.

## 6. Próximos pasos recomendados
1. **Revisar el campo `content` en `tailwind.config.js`**
   - Asegurarse de que todas las rutas relevantes estén incluidas y que los archivos fuente usen clases de Tailwind.
2. **Probar con una clase básica de Tailwind**
   - Añadir `<div className="bg-red-500 text-white">Test Tailwind</div>` en una página y ver si se aplica el estilo.
3. **Verificar que el CSS global se importe correctamente en el layout.**
4. **Revisar si hay algún error de permisos o de caché en el sistema operativo.**
5. **Si todo falla, crear un proyecto Next.js + Tailwind limpio y migrar los archivos fuente poco a poco para aislar el problema.**

## 7. Estado funcional
- El contenido y la estructura de la web están presentes.
- Los estilos de Tailwind y la identidad visual **no se aplican** por un problema de build/configuración.
- El proyecto es funcional a nivel de React/Next.js, pero no a nivel visual.

---

**Este documento resume el estado y los problemas actuales para que otro desarrollador o IA pueda continuar la depuración y el desarrollo.** 