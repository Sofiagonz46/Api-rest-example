# API REST Example

Proyecto de práctica que consume distintas API REST públicas y muestra los resultados en tarjetas.

## Estructura

- `home.html` — página de inicio con acceso a las 3 secciones.
- `demon-slayer/` — personajes de Demon Slayer ([demonslayer-api.com](https://www.demonslayer-api.com)).
- `dragon-ball/` — personajes de Dragon Ball ([dragonball-api.com](https://dragonball-api.com)).
- `productos/` — catálogo de productos ([fakestoreapi.com](https://fakestoreapi.com)).

Cada sección tiene una lista (`.html` principal) y una vista de detalle, siguiendo el mismo patrón: `fetch` a la API, se arma una tarjeta por elemento y al hacer click se navega al detalle usando el `id` en la URL (`?id=`).

## Cómo correrlo

Abrí `home.html` en el navegador (recomendado con Live Server, porque las páginas usan `fetch`).
