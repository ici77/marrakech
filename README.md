# Guía digital · Marruecos 2026

Aplicación Astro para una guía privada y móvil de un viaje familiar del 19 al 30 de diciembre de 2026. Esta primera fase contiene arquitectura, interfaz y datos de demostración claramente provisionales: no incluye reservas, precios, horarios ni recomendaciones reales.

## Uso

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
npm run check
npm run build
```

## Arquitectura

- `src/data/trip.ts`: fuente de datos demostrativa centralizada y relaciones por ID.
- `src/types/travel.ts`: contratos TypeScript para viaje, jornadas, reservas, gastos, monumentos, restaurantes y moneda.
- `src/content.config.ts`: colecciones Astro preparadas para migrar contenido editorial Markdown validado.
- `src/components`: layout, navegación, componentes de itinerario y UI reutilizable.
- `src/pages`: rutas de la guía; las jornadas y destinos usan rutas dinámicas estáticas.
- `public/scripts/app.js`: pequeñas interacciones sin framework: filtros, favoritos, checklist, gastos y búsqueda.
- `public/sw.js` y `public/manifest.webmanifest`: base PWA.

## Datos y privacidad

Las cantidades monetarias se modelan en unidades menores (`Money.amount`) y con moneda y nivel de confianza. Antes de publicar, se deben sustituir los ejemplos y mantener los localizadores completos, datos de contacto, documentos y datos bancarios fuera del repositorio público. Un `noindex` no reemplaza autenticación real.

Los datos operativos sanitizados se actualizan en `src/data/trip.ts`: modificar una hora en `days`, una reserva o su estado en `reservations`, un restaurante en `restaurants` y una ficha cultural en `monuments`. El material de importación está en `docs/importacion/`, excluido por `.gitignore`; nunca se empaqueta ni se publica. Las discrepancias se documentan en `docs/importacion/INFORME_INTEGRACION.md`.

## Añadir contenido en la segunda fase

1. Incorporar destinos, días y entidades reales en una fuente de datos privada y validada.
2. Mantener los ID estables para enlazar jornadas, monumentos, restaurantes y reservas sin duplicar datos.
3. Cargar la información cultural en las colecciones de `src/content/` (Markdown) y ampliar sus esquemas en `src/content.config.ts`.
4. Completar las fichas y sustituir los SVG provisionales por imágenes locales optimizadas con texto alternativo real.
5. Revisar los importes y conversión EUR/MAD; nunca almacenar duplicados de gastos incluidos en reservas.

## Sin conexión y limitaciones actuales

El service worker guarda recursos del mismo origen y las páginas visitadas. La instalación requiere servir la web mediante HTTPS (o localhost). La opción de descarga completa se preparará cuando exista el contenido real, para precachear explícitamente las rutas e imágenes. Los enlaces de Google Maps requieren conexión.

Las fotografías de las jornadas se seleccionan en `src/data/itinerary-images.ts` e incluyen autor, fuente y licencia en cada página. Salvo la imagen del 19 de diciembre, se cargan desde Wikimedia Commons y necesitan conexión; si no están disponibles se mantiene la imagen local de fondo. Las solicitudes a Wikimedia no envían la dirección de la página como referente, pero sí exponen la IP del visitante al proveedor.

## Accesibilidad

Incluye estructura semántica, enlace de salto, foco nativo visible, etiquetas de formulario, controles táctiles y diseño mobile-first. La revisión automática y manual de contrastes, lector de pantalla y navegación en todos los tamaños debe repetirse al incorporar el contenido real.
"# marrakech" 
