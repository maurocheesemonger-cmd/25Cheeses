# 25 Cheeses · Level 1

Una app web sencilla para estudiar los **25 quesos del Level 1 (Associate) de la Academy of Cheese**.

## Qué incluye

- **Fichas**: los 25 quesos con país, región, leche, tratamiento, protección (PDO/PGI), clase Make y Post-Make, aspecto, sabor y datos clave. Tienen buscador y filtro por clase Make.
- **Tarjetas**: flashcards que se giran al tocarlas. Tienen un modo "al revés" (te da las pistas y tú adivinas el queso) y un modo para repasar solo las que no te sabes.
- **Quiz**: preguntas tipo test que se generan al azar (10, 25 o 50). Puedes centrarte en una clase Make o en tus puntos débiles. Para aprobar se pide un 80%, como en el examen oficial.
- **Tabla Make / Post-Make**: la matriz de clasificación con los 25 quesos.
- **Progreso**: aciertos por queso, guardados en el navegador.
- **Idioma**: botón ES / EN arriba a la derecha para pasar toda la app (interfaz y fichas) a español o inglés.

Funciona en el móvil, se puede añadir a la pantalla de inicio y, después de abrirla una vez, también sin conexión.

## Cómo usarla

- **En local**: abre `index.html` en el navegador.
- **Desde cualquier sitio (GitHub Pages)**: en GitHub ve a *Settings → Pages*, elige *Deploy from a branch*, selecciona la rama y la carpeta `/ (root)`. Tendrás la app en `https://<usuario>.github.io/25Cheeses/`.

## Fuentes y aviso

La lista de quesos sale de los documentos de la Academy of Cheese "Level One: 25 Cheese Profiles" (2020) y "Level 1 – 25 cheeses by Make / Post-Make class". Los textos de cada ficha son un resumen propio. Contrasta siempre los datos con las crib sheets oficiales de la [Cheese Library](https://academyofcheese.org/cheese-library/). Las clases Make/Post-Make y sus sub-clases (`subMake`, `subPostMake`) se han revisado con las fichas oficiales; donde una sub-clase aún no está comprobada vale `null`. Los datos están en `data.js` (español) y `data-en.js` (inglés).
