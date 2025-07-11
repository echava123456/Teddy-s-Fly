// Datos de ejemplo, puedes cargarlos desde un JSON o backend en un futuro
const personajes = [

   //personajes 
   {
    id: "226-pikachu",
    nombre: "Llavero Pikachu 9×9 cms",
    precio: 11000,
    imagen: "imagenes/personajes/llavero-pikachu.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Pikachu en tamaño compacto de 9x9 cm. Ideal para fans de Pokémon y perfecto para llevar en llaves, mochila o regalar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 9 x 9 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo vibrante, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 15 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "97-8-tom",
    nombre: "Llavero TOM 7.3 cm",
    precio: 12000,
    imagen: "imagenes/personajes/llavero-tom.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Tom, el popular gato de caricaturas. Tamaño de 7.3 cm, perfecto para niños y coleccionistas.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 7.3 cm</li>
        <li>Lavable: Sí</li>
        <li>Incluye anillo metálico resistente</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "97-8-jerry",
    nombre: "Llavero JERRY 7.3 cm",
    precio: 12000,
    imagen: "imagenes/personajes/llavero-jerry.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Jerry, el ratón travieso de las caricaturas. Tamaño 7.3 cm, excelente como adorno o regalo divertido.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 7.3 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados de alta calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.7/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "5606-8.3-spiderman",
    nombre: "Llavero Superhéroes SPIDERMAN 10 cms",
    precio: 12500,
    imagen: "imagenes/personajes/llavero-spiderman.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Spiderman, el héroe arácnido favorito. Tamaño 10 cm, ligero y práctico para llevar a todos lados.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vibrantes y costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "5606-8.3-capitan",
    nombre: "Llavero Superhéroes CAPITAN AMERICA 10 cms",
    precio: 12500,
    imagen: "imagenes/personajes/llavero-capitan-america.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Capitán América. Lleva el escudo de la justicia contigo a donde vayas. Tamaño 10 cm.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Escudo bordado y colores patrióticos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 12 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "5606-8.3-batman",
    nombre: "Llavero Superhéroes BATMAN 10 cms",
    precio: 12500,
    imagen: "imagenes/personajes/llavero-batman.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Batman, el caballero oscuro. Un toque de héroe para tus llaves o mochila.</p>
      <ul>
        <li>Material: Felpa de alta calidad</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color negro y amarillo con detalles únicos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.4/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "5606-8.3-hulk",
    nombre: "Llavero Superhéroes HULK 10 cms",
    precio: 12500,
    imagen: "imagenes/personajes/llavero-hulk.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Hulk, ¡fuerza en tamaño mini! Ideal para coleccionistas y fans de Marvel.</p>
      <ul>
        <li>Material: Felpa suave y resistente</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde intenso, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
   {
    id: "lla-papy-conejo",
    nombre: "Llavero Circo Digital CONEJO 7.7 cm",
    precio: 13000,
    imagen: "imagenes/personajes/llavero-circo-conejo.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de conejo del Circo Digital, tamaño compacto ideal para adornar llaves y mochilas. Diseño tierno y suave.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 7.7 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados, colores vivos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "lla-papy-payasos",
    nombre: "Llavero Circo Digital PAYASOS 7.7 cm",
    precio: 13000,
    imagen: "imagenes/personajes/llavero-circo-payasos.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche con diseño de payasos del Circo Digital. Ideal para niños y coleccionistas, añade alegría a tus llaves.</p>
      <ul>
        <li>Material: Felpa suave y lavable</li>
        <li>Tamaño: 7.7 cm</li>
        <li>Colores: Multicolor</li>
        <li>Anillo metálico resistente</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.7/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "#0905-8.2",
    nombre: "Raton Ancheta 15 cms",
    precio: 13500,
    imagen: "imagenes/personajes/raton-ancheta.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Raton Ancheta de peluche tamaño 15 cm, perfecto para acompañar regalos o decorar espacios infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 15 cm</li>
        <li>Lavable: Sí</li>
        <li>Corte clásico, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.4/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "CJ-3900-ironman",
    nombre: "Llavero Super Heroes IRON MAN 13 cm",
    precio: 13500,
    imagen: "imagenes/personajes/llavero-ironman.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Iron Man, superhéroe favorito de Marvel. Tamaño 13 cm, ideal para fans y coleccionistas.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 13 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos y detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 12 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "5606-8.3-ironman",
    nombre: "Llavero Superhéroes IRONMAN 10 cm",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-ironman2.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Iron Man en presentación compacta de 10 cm. Lleva el poder de Tony Stark contigo.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Anilla metálica incluida</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-tristeza",
    nombre: "Llaveros Intensamente TRISTEZA",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-tristeza.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Tristeza, personaje de Intensamente. Ideal para coleccionistas de emociones.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 8.4 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul con detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-alegria",
    nombre: "Llaveros Intensamente ALEGRIA",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-alegria.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Alegría, personaje de Intensamente. Aporta felicidad a tus llaves o bolsa.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 8.4 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos y sonrisa bordada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-furia",
    nombre: "Llaveros Intensamente FURIA",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-furia.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Furia, personaje de Intensamente. Perfecto para regalar y completar la colección de emociones.</p>
      <ul>
        <li>Material: Felpa resistente</li>
        <li>Tamaño: 8.4 cm</li>
        <li>Lavable: Sí</li>
        <li>Rojo intenso, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-ansiedad",
    nombre: "Llaveros Intensamente ANSIEDAD",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-ansiedad.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Ansiedad, personaje de Intensamente. Agrega emoción y ternura a tu llavero.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 8.4 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados, diseño original</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 11 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-desagrado",
    nombre: "Llaveros Intensamente DESAGRADO",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-desagrado.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Desagrado, personaje de Intensamente. ¡Completa tu set de emociones!</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 8.4 cm</li>
        <li>Lavable: Sí</li>
        <li>Verde, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-miedo",
    nombre: "Llaveros Intensamente MIEDO",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-miedo.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Miedo, personaje de Intensamente. Expresa tu emoción favorita donde vayas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 8.4 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados, color lila</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
   {
    id: "JE-30-9-mike",
    nombre: "Llavero Mike Wazowski 9 cm",
    precio: 15000,
    imagen: "imagenes/personajes/llavero-mike.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Mike Wazowski, el simpático monstruo verde. Ideal para fans de Monsters Inc. y Pixar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 9 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 18 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "je-32-9-arenita",
    nombre: "Llavero Bob Esponja ARENITA 9 cm",
    precio: 15000,
    imagen: "imagenes/personajes/llavero-arenita.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Arenita, la ardilla aventurera de Fondo de Bikini. Adorno divertido para llaves o mochila.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 9 cm</li>
        <li>Lavable: Sí</li>
        <li>Incluye casco y traje bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "je-32-9-gary",
    nombre: "Llavero Bob Esponja GARY 9 cm",
    precio: 15000,
    imagen: "imagenes/personajes/llavero-gary.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Gary, la mascota de Bob Esponja. Perfecto para fans de la serie y coleccionistas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 9 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores pasteles, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 11 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "je-32-9-patricio",
    nombre: "Llavero Bob Esponja PATRICIO 9 cm",
    precio: 15000,
    imagen: "imagenes/personajes/llavero-patricio.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Patricio, el mejor amigo de Bob Esponja. Súper suave y adorable para decorar tus llaves.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 9 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosado, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 13 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-rosa",
    nombre: "Llavero Patrulla Canina Sentada ROSA 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-rosa.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Patrulla Canina, versión sentada color rosa. Ideal para los más pequeños y fans de la serie.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 9.5 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados, seguro para niños</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-amarillo",
    nombre: "Llavero Patrulla Canina Sentada AMARILLO 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-amarillo.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Patrulla Canina, versión sentada color amarillo. Perfecto para mochilas y regalos infantiles.</p>
      <ul>
        <li>Material: Felpa suave y lavable</li>
        <li>Tamaño: 9.5 cm</li>
        <li>Detalles coloridos y bordados de calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-naranja",
    nombre: "Llavero Patrulla Canina Sentada NARANJA 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-naranja.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Patrulla Canina, versión sentada color naranja. Añade diversión y color a tus llaves.</p>
      <ul>
        <li>Material: Felpa resistente</li>
        <li>Tamaño: 9.5 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vibrantes y costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-verde",
    nombre: "Llavero Patrulla Canina Sentada VERDE 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-verde.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Patrulla Canina, versión sentada color verde. Diseño original y divertido para niños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 9.5 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores alegres y detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-azul",
    nombre: "Llavero Patrulla Canina Sentada AZUL 22 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-azul.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Patrulla Canina, versión sentada color azul. Tamaño especial de 22 cm para los fans más grandes.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 22 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados y coloridos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 5 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "BOBI-04-9.2-kirby",
    nombre: "Llavero Kirby 10 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-kirby.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Kirby, el famoso personaje rosado de los videojuegos. Súper tierno y coleccionable.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosado, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 19 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "je-32-9-bob",
    nombre: "Llavero Bob Esponja BOB 9 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-bob.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Bob Esponja, el personaje favorito de Fondo de Bikini. Ideal para regalar a niños y adultos.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 9 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 15 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "je-33-9.5-garfield",
    nombre: "Llavero Garfield 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-garfield.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Garfield, el gato más famoso de las historietas. Perfecto para fans y coleccionistas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 9.5 cm</li>
        <li>Lavable: Sí</li>
        <li>Color naranja, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 12 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
   {
    id: "je-36-9.5-kuromi",
    nombre: "Llavero KUROMI 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-kuromi.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Kuromi, personaje icónico y tierno. Ideal para fans de Sanrio y coleccionistas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 9.5 cm</li>
        <li>Lavable: Sí</li>
        <li>Color lila y negro, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 11 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "je-37-9.5-gata",
    nombre: "Llavero GATA 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-gata.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de Gata, diseño dulce y clásico para adornar tus llaves con ternura.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 9.5 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados de alta calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "24043-9.5-cinnamaroll",
    nombre: "Llavero Monedero CINNAMAROLL 20 cm",
    precio: 16000,
    imagen: "imagenes/personajes/llavero-cinnamaroll.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero monedero de Cinnamaroll de 20 cm. Funcional y adorable para llevar monedas o pequeños objetos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, diseño original Sanrio</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 14 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "8811-20-12.8-hongo-verde",
    nombre: "Hongo de Mario VERDE 25 cm",
    precio: 21500,
    imagen: "imagenes/personajes/hongo-mario-verde.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche hongo verde de Mario Bros de 25 cm. Un clásico para coleccionistas y gamers.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos, base antideslizante</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "jo-144s-12.8-yoshi",
    nombre: "Yoshi pequeño 23 cm",
    precio: 21500,
    imagen: "imagenes/personajes/yoshi.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de Yoshi pequeño de 23 cm, el famoso dinosaurio de Nintendo. Perfecto para fans de Mario.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 23 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "XZ1-25-12.8-ojo-verde",
    nombre: "Ojo Verde pequeño 25 cm",
    precio: 21500,
    imagen: "imagenes/personajes/ojo-verde.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Ojo Verde de 25 cm. Diseño divertido y original para decorar tu habitación o regalar.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, diseño único</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "AD474-20-14.87-huevito",
    nombre: "Pokémon Huevito 15 cm",
    precio: 23000,
    imagen: "imagenes/personajes/pokemon-huevito.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Pokémon Huevito de 15 cm. Ideal para fans de la saga y coleccionistas de pokémones curiosos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 15 cm</li>
        <li>Lavable: Sí</li>
        <li>Color pastel, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "111910-14.2-unicornio",
    nombre: "Unicornio sentado 25 cm",
    precio: 24000,
    imagen: "imagenes/personajes/unicornio-sentado.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio sentado de 25 cm, suave y colorido. Perfecto para habitaciones infantiles y regalar.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores pastel, cuerno dorado</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1880-14.5-raton1",
    nombre: "Raton #1 25 cm",
    precio: 24500,
    imagen: "imagenes/personajes/raton1.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de ratón #1 de 25 cm. Diseño clásico y simpático para todas las edades.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris y rosa, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "433-23-15.9-minions-orejas",
    nombre: "Minions Orejas 2 25 cm",
    precio: 25000,
    imagen: "imagenes/personajes/minions-orejas.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Minions con orejas de 25 cm. ¡Divertido y original para fans y niños!</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 12 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-19-15.4-bobpequeno",
    nombre: "Bob esponja pequeño 26 cm",
    precio: 26000,
    imagen: "imagenes/personajes/bobpequeno.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de Bob Esponja pequeño de 26 cm. Suave, divertido y perfecto para fans de todas las edades.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "233pm-15.4-minions-letrero",
    nombre: "Minions guitarra LETRERO 25 cm",
    precio: 26000,
    imagen: "imagenes/personajes/minions-letrero.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Minion guitarra con letrero de 25 cm. Alegre y musical para los fans de Gru y los Minions.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo, detalles impresos y bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "233pm-15.4-minions-guitarra",
    nombre: "Minions guitarra 25 cm",
    precio: 26000,
    imagen: "imagenes/personajes/minions-guitarra.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Minion guitarra de 25 cm. Un personaje de película animada en versión musical y divertida.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo, detalles bordados y guitarra de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "233pm-15.4-minions-oso",
    nombre: "Minions guitarra OSO 25 cm",
    precio: 26000,
    imagen: "imagenes/personajes/minions-oso.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Minion guitarra con oso de 25 cm. Un diseño tierno y original para grandes y chicos.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo, detalles de oso en la guitarra</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
    {
    id: "Cj-1455-15.6-carl",
    nombre: "Viejitos ancheta Carl 20 cm",
    precio: 26500,
    imagen: "imagenes/personajes/viejitos-carl.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Viejitos ancheta Carl de 20 cm, inspirado en personajes entrañables. Ideal para regalar y coleccionar.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados y colores vibrantes</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "Mt03-3-15.9-unicornio-rosa",
    nombre: "Unicornio Corazon 25cm ROSA",
    precio: 27000,
    imagen: "imagenes/personajes/unicornio-corazon-rosa.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio con corazón, color rosa, de 25cm. Un regalo mágico para cualquier ocasión especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Corazón bordado, crin colorida</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 12 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "Mt03-3-15.9-unicornio-blanco",
    nombre: "Unicornio Corazon 25cm BLANCO",
    precio: 27000,
    imagen: "imagenes/personajes/unicornio-corazon-blanco.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio con corazón, color blanco, de 25cm. Perfecto para decoración infantil y como regalo.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Crin colorida, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-18-16.2-garfieldbebe",
    nombre: "Garfield Bebe 20cm",
    precio: 27500,
    imagen: "imagenes/personajes/garfield-bebe.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Garfield bebé de 20 cm, ideal para fans del gato más famoso y perezoso de las tiras cómicas.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color naranja, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "22-57-17.9-cojin-mario",
    nombre: "Cojin cara de MARIO 30x30 cm",
    precio: 30000,
    imagen: "imagenes/personajes/cojin-mario.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Cojín de peluche con la cara de Mario Bros, tamaño 30x30 cm. Ideal para cuartos infantiles y gamers.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 30 x 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos, diseño ergonómico</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "Sur05-30-18.9-buzz",
    nombre: "Peluche elástico mediano 30cm BUZZ",
    precio: 32000,
    imagen: "imagenes/personajes/buzz.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico de Buzz Lightyear, tamaño mediano de 30cm. ¡Hasta el infinito y más allá!</p>
      <ul>
        <li>Material: Felpa elástica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados, alas flexibles</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 13 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "Sur05-30-18.9-marciano",
    nombre: "Peluche elástico mediano 30cm MARCIANO",
    precio: 32000,
    imagen: "imagenes/personajes/marciano.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico de Marciano, tamaño mediano de 30cm, divertido y suave. Inspirado en Toy Story.</p>
      <ul>
        <li>Material: Felpa elástica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-03-20.2-circo-conejo",
    nombre: "Circo Digital 28cm CONEJO",
    precio: 34000,
    imagen: "imagenes/personajes/circo-conejo.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche conejo del Circo Digital, tamaño 28 cm. Un personaje tierno para los más pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 28 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-03-20.2-circo-payasos",
    nombre: "Circo Digital 28cm PAYASO",
    precio: 34000,
    imagen: "imagenes/personajes/circo-payasos.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche payaso del Circo Digital, tamaño 28 cm. Colores vivos y diseño alegre para decorar o jugar.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 28 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores multicolor, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1879-20.8-virgencita-blanca",
    nombre: "Virgencita 30 cm BLANCA",
    precio: 35000,
    imagen: "imagenes/personajes/virgencita-blanca.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Virgencita color blanco, tamaño 30 cm. Un regalo espiritual y tierno para todas las edades.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1879-20.8-virgencita-azul",
    nombre: "Virgencita 30 cm AZUL",
    precio: 35000,
    imagen: "imagenes/personajes/virgencita-azul.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Virgencita color azul, tamaño 30 cm. Suave y especial para acompañar en momentos importantes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, detalles bordados y brillantes</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "Cj-3918-21-sonic-rosa",
    nombre: "Sonic mediano y amigos 25 cm ROSA",
    precio: 35500,
    imagen: "imagenes/personajes/sonic-rosa.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Sonic mediano y amigos, versión color rosa, tamaño 25 cm. Ideal para coleccionistas y fans de SEGA.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "je-02-21.5-smiling-rosado",
    nombre: "Smiling colores 25 cm ROSADO",
    precio: 36000,
    imagen: "imagenes/personajes/smiling-rosado.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Smiling color rosado de 25 cm, diseño alegre y suave. Perfecto para regalar y coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosado, sonrisa bordada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "je-02-21.5-smiling-amarillo",
    nombre: "Smiling colores 25 cm AMARILLO",
    precio: 36000,
    imagen: "imagenes/personajes/smiling-amarillo.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Smiling color amarillo de 25 cm, brilla con alegría y suavidad en cualquier espacio.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo, sonrisa bordada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "10-11-21.5-sullivan",
    nombre: "Sullivan Camisa 30 cm",
    precio: 36000,
    imagen: "imagenes/personajes/sullivan.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Sullivan con camisa, tamaño 30 cm. Inspirado en Monsters Inc., suave y abrazable.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul y violeta, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-49-22.5-babyyoda",
    nombre: "Baby Yoda 35 cm",
    precio: 38000,
    imagen: "imagenes/personajes/babyyoda.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Baby Yoda de 35 cm, tierno y adorable. Imprescindible para fans de Star Wars y The Mandalorian.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Túnica marrón, orejas verdes</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 20 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1881-22.9-raton2",
    nombre: "Raton #2 30 cm",
    precio: 38500,
    imagen: "imagenes/personajes/raton2.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Raton #2 de 30 cm, para acompañar a los niños en su día a día o decorar su espacio favorito.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1934-25.9-kuromi-grande",
    nombre: "Kuromi 20 cm",
    precio: 44000,
    imagen: "imagenes/personajes/kuromi-grande.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Kuromi de 20 cm, la traviesa amiga de My Melody. Ideal para fans de Sanrio.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color lila y negro, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1864-26.9-bob33",
    nombre: "Bob Esponja 33 cm",
    precio: 45500,
    imagen: "imagenes/personajes/bob33.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Bob Esponja de 33 cm, el personaje más divertido de Fondo de Bikini. Abrazable y suave.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 11 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "2019p-26.9-mascota-nacional",
    nombre: "Mascota Nacional 30 cm",
    precio: 45500,
    imagen: "imagenes/personajes/mascota-nacional.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Mascota Nacional de 30 cm, símbolo de alegría y unión. Perfecto para regalar a cualquier edad.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles patrios, colores vivos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1864-26.9-patricio33",
    nombre: "Patricio 33 cm",
    precio: 45500,
    imagen: "imagenes/personajes/patricio33.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Patricio estrella de mar, amigo de Bob Esponja, tamaño 33 cm. Suave y divertido para todos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 10 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-56-28-zootopia-zorro",
    nombre: "Zootopia 35cm ZORRO",
    precio: 47000,
    imagen: "imagenes/personajes/zootopia-zorro.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Zorro de Zootopia, tamaño 35 cm. Ideal para aventuras y juegos imaginativos.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color naranja, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-56-28-zootopia-conejo",
    nombre: "Zootopia 35cm CONEJO",
    precio: 47000,
    imagen: "imagenes/personajes/zootopia-conejo.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Conejo de Zootopia, tamaño 35 cm. Suave, tierno y con detalles de gran calidad.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "xh-35-29.5-ratones-rosa",
    nombre: "Ratones pijama 35cm ROSA",
    precio: 50000,
    imagen: "imagenes/personajes/ratones-pijama-rosa.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche ratón con pijama color rosa, tamaño 35 cm. Detalles adorables y perfecto para dormir acompañado.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, pijama de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1839-31.9-viejita-mediana",
    nombre: "Viejita Cuerpo entero Mediana 28 cms",
    precio: 54000,
    imagen: "imagenes/personajes/viejita-mediana.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Viejita cuerpo entero, tamaño mediana de 28 cm. Un personaje dulce y especial para regalar.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 28 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados, vestido de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1940-31.9-luigi",
    nombre: "Personajes LUIGI 30 Cms",
    precio: 54000,
    imagen: "imagenes/personajes/luigi.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Luigi de 30 cm, el inseparable hermano de Mario Bros. Un clásico para gamers y coleccionistas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, bigote bordado</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1940-31.9-peach",
    nombre: "Personajes PRINCESA PEACH 30 Cms",
    precio: 54000,
    imagen: "imagenes/personajes/peach.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Princesa Peach de 30 cm, la princesa favorita de los videojuegos. Suave y elegante.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, corona bordada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1940-31.9-toad",
    nombre: "Personajes TOAD 30 Cms",
    precio: 54000,
    imagen: "imagenes/personajes/toad.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Toad de 30 cm, el amigo fiel de Mario y Luigi. Ideal para decorar o jugar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y rojo, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1882-32.5-raton3",
    nombre: "Raton #3 40 cm",
    precio: 55000,
    imagen: "imagenes/personajes/raton3.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Raton #3 de 40 cm, tamaño grande y suave. Ideal para abrazar y acompañar en el descanso.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris, orejas rosas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-25-34.9-stitch-panda",
    nombre: "Stitch disfraz panda 35cm",
    precio: 59000,
    imagen: "imagenes/personajes/stitch-panda.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Stitch disfrazado de panda, tamaño 35 cm. Diseño adorable y divertido para fans de Disney.</p>
      <ul>
        <li>Material: Felpa suave</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul y negro, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 5 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1964-39.9-envidia",
    nombre: "Personajes Intensamente ENVIDIA 30 cm",
    precio: 62500,
    imagen: "imagenes/personajes/envidia.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Envidia de Intensamente, tamaño 30 cm. Completa tu colección de emociones con este personaje único.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde y azul, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1840-37.9-viejito-mediano",
    nombre: "Viejito Cuerpo entero Mediano 30 cm",
    precio: 64000,
    imagen: "imagenes/personajes/viejito-mediano.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Viejito cuerpo entero mediano, tamaño 30 cm. Un personaje simpático y entrañable para regalar.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados y vestimenta de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1980-39.8-lilo-stitch",
    nombre: "Lilo Y Stitch 40cm",
    precio: 67500,
    imagen: "imagenes/personajes/lilo-stitch.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Lilo y Stitch juntos, tamaño 40 cm. Un dúo inseparable para los fans de Disney.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 9 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1974-42.5-kuromi-grande",
    nombre: "Kuromi Grande 40cm",
    precio: 70500,
    imagen: "imagenes/personajes/kuromi-grande2.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Kuromi grande de 40 cm, edición especial para fans de Sanrio. Suave y abrazable.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color lila y negro, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "50PU-46.0-unicornio-estrellas",
    nombre: "Unicornio Estrellas Bordado 45cm",
    precio: 70500,
    imagen: "imagenes/personajes/unicornio-estrellas.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio estrellas de 45 cm, bordado y brillante. Un regalo mágico para cualquier edad.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 45 cm</li>
        <li>Lavable: Sí</li>
        <li>Estrellas bordadas, crin colorida</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "MT-111-44.5-stitch-sonriente",
    nombre: "Stitch Sonriente 40cm",
    precio: 75500,
    imagen: "imagenes/personajes/stitch-sonriente.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Stitch sonriente de 40 cm. Perfecto para abrazar y sonreír junto a él.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, sonrisa bordada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "JE-16-45.0-gata-fresa",
    nombre: "Gata con fresa 30cm",
    precio: 76500,
    imagen: "imagenes/personajes/gata-fresa.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche gata con fresa, tamaño 30 cm. Diseño original y tierno para todas las edades.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles de fresa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 5 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1883-51.4-raton4",
    nombre: "Raton #4 50 cm",
    precio: 87000,
    imagen: "imagenes/personajes/raton4.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Raton #4 tamaño gigante de 50 cm. Súper suave y abrazable para niños y adultos.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 50 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris y rosa, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "2502-53.9-stitch-audifonos",
    nombre: "Stitch con audifonos 40cm",
    precio: 91000,
    imagen: "imagenes/personajes/stitch-audifonos.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Stitch con audífonos, tamaño 40 cm. Para los fans de la música y el personaje más divertido.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Audífonos de tela, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 5 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1837-66.5-viejita-grande",
    nombre: "Viejita cuerpo entero Grande 50 cms",
    precio: 113500,
    imagen: "imagenes/personajes/viejita-grande.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Viejita cuerpo entero tamaño grande de 50 cm. Ideal para decorar o regalar en ocasiones especiales.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 50 cm</li>
        <li>Lavable: Sí</li>
        <li>Vestido de tela, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 4 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1838-77.5-viejito-grande",
    nombre: "Viejito Cuerpo entero Grande 50 cms v",
    precio: 131500,
    imagen: "imagenes/personajes/viejito-grande.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Viejito cuerpo entero tamaño grande de 50 cm. Perfecto para acompañar o decorar con estilo.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 50 cm</li>
        <li>Lavable: Sí</li>
        <li>Detalles bordados, vestimenta de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 4 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1884-82.9-raton5",
    nombre: "Ratón #5 95 cms",
    precio: 140500,
    imagen: "imagenes/personajes/raton5.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Ratón #5 tamaño extra grande de 95 cm. El peluche más grande y abrazable de la colección.</p>
      <ul>
        <li>Material: Felpa ultra suave</li>
        <li>Tamaño: 95 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris y rosa, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 3 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  },
  {
    id: "1878-122-ratona-extra",
    nombre: "Ratona Extra Gigante #6 120 Cms",
    precio: 207500,
    imagen: "imagenes/personajes/ratona-extra.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche Ratona Extra Gigante #6 de 120 cm. Un peluche espectacular, perfecto para los más grandes abrazos.</p>
      <ul>
        <li>Material: Felpa premium</li>
        <li>Tamaño: 120 cm</li>
        <li>Lavable: Sí</li>
        <li>Costuras reforzadas, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 2 opiniones)</p>
      </div>
    `,
    categoria: "personajes"
  }
  ];

const peluches = [
   // Bloque 1
  {
    id: "FP1226",
    nombre: "Llavero Burro 12cm Azul",
    precio: 10500,
    imagen: "imagenes/FP1226-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Un llavero peluche con diseño de burro en color azul, compacto y divertido. Perfecto para decorar tus llaves, mochila o regalar como detalle especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 9 opiniones)</p>
      </div>
    `,categoria: "peluches"
     
  },
  {
    id: "LLA-Mat-MORADO",
    nombre: "Llavero Matera Dino 10cm Morado",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-3-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche matera con forma de dinosaurio en color morado. Ideal para regalar o coleccionar, pequeño y práctico para llevar a todos lados.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.7/5 basado en 12 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "LLA-Mat-VERDE",
    nombre: "Llavero Matera Dino 10cm Verde",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Divertido llavero de dinosaurio, pequeño y suave, en color verde. Perfecto para personalizar tus pertenencias y llevar contigo a todas partes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, costuras de calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 8 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "LLA-Mat-AZUL-OSCURO",
    nombre: "Llavero Matera Dino 10cm Azul Oscuro",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-3-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero de felpa con forma de dinosaurio en azul oscuro. Ideal para niños y adultos que buscan un accesorio original y suave.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul oscuro, detalles en costura</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 11 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "LLA-Mat-AZUL-CLARO",
    nombre: "Llavero Matera Dino 10cm Azul Claro",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero matera con diseño de dinosaurio en azul claro. Tamaño perfecto para mochilas, estuches o llaves. Suave y resistente.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 10 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul claro, texturas agradables</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 7 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "LLA-Din-NARANJA",
    nombre: "Llavero Dinosaurio 12cm Naranja",
    precio: 12500,
    imagen: "imagenes/LLA-Din-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche de dinosaurio color naranja. Alegre y llamativo, perfecto para niños o amantes de los dinosaurios.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Color naranja, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "LLA-Din-MORADO",
    nombre: "Llavero Dinosaurio 12cm Morado",
    precio: 12500,
    imagen: "imagenes/LLA-Din-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero peluche con diseño de dinosaurio en color morado. Suave, seguro y muy original como regalo o accesorio para tus llaves.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, costura reforzada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 9 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "LLA-Din-VERDE",
    nombre: "Llavero Dinosaurio 12cm Verde",
    precio: 12500,
    imagen: "imagenes/LLA-Din-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero pequeño con forma de dinosaurio en color verde, perfecto para llevar en la mochila o regalar a niños y niñas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 11 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "LLA-Din-COLORES",
    nombre: "Llavero Dinosaurio 12cm Colores",
    precio: 12500,
    imagen: "imagenes/LLA-Din-4.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Llavero de dinosaurio en colores surtidos, ideal para fans de los peluches pequeños y coleccionistas de accesorios originales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 12 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores variados, costura de calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.5/5 basado en 8 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "Eco-Sur-PANDA",
    nombre: "Peluche económico pequeño 15cm Panda",
    precio: 13000,
    imagen: "imagenes/WhatsApp-Image-2025-05-16-at-5.13.13-PM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche económico pequeño con diseño de panda. Suave, tierno y perfecto para niños pequeños o para decorar escritorios y habitaciones.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 15 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, textura agradable</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 10 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "1030-17-MEL",
    nombre: "Perro Pets Mel 25cm",
    precio: 15000,
    imagen: "imagenes/1030-17.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de perro "Pets Mel", de tamaño mediano. Suave y amigable, ideal para abrazar y acompañar el descanso de los más pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos y textura agradable</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 13 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "j300-21-OSO",
    nombre: "Osos Peludos Pequeños 20cm",
    precio: 16500,
    imagen: "imagenes/WhatsApp-Image-2025-05-08-at-5.29.43-PM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluches osos peludos pequeños, tiernos y suaves. Perfecto para niños o como detalle especial en cualquier ocasión.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores diferentes, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 14 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },

  // BLOQUE 2
  {
    id: "FLOS-1523-GRIS",
    nombre: "Osos Corazón y Rosa 20cm Gris",
    precio: 17500,
    imagen: "imagenes/flos-1523-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso con corazón y rosa en color gris, ideal para regalar en ocasiones especiales. Su tamaño compacto lo hace perfecto para decorar cualquier espacio o como detalle romántico.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris, detalles bordados y costura resistente</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 14 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "FLOS-1523-BEIGE",
    nombre: "Osos Corazón y Rosa 20cm Beige",
    precio: 17500,
    imagen: "imagenes/flos-1523-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso en color beige con corazón y rosa. Un detalle tierno y suave, perfecto para regalar y expresar cariño en cualquier momento especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color beige, acabados de alta calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 11 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "FLOS-1523-CAFE",
    nombre: "Osos Corazón y Rosa 20cm Café",
    precio: 17500,
    imagen: "imagenes/flos-1523-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso de peluche en color café con corazón y rosa. Suave, adorable y con detalles delicados. Ideal para regalar, decorar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
     {
    id: "uni-2023-ROSA",
    nombre: "Unicornio Estrellitas 22cm ROSA",
    precio: 19000,
    imagen: "imagenes/uni-2023-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio color rosa con estrellitas bordadas, suave y adorable. Ideal para regalar a niños y amantes de los unicornios.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 22 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles de estrellas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "uni-2023-BLANCO",
    nombre: "Unicornio Estrellitas 22cm BLANCO",
    precio: 19000,
    imagen: "imagenes/uni-2023-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Unicornio de peluche color blanco con estrellitas, pequeño y tierno. Perfecto para decorar habitaciones o regalar como detalle especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 22 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles de estrellas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 8 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "uni-2023-MORADO",
    nombre: "Unicornio Estrellitas 22cm MORADO",
    precio: 19000,
    imagen: "imagenes/uni-2023-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Unicornio de peluche color morado con estrellitas bordadas. Suave y colorido, especial para coleccionistas y niños pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 22 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, detalles de estrellas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 7 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "Leon-p",
    nombre: "Leon mechudo pequeño",
    precio: 20000,
    imagen: "imagenes/leon-p-1536x1536.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche león pequeño con melena mechuda, suave y divertido. Ideal para niños y para decorar espacios infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 15 cm</li>
        <li>Lavable: Sí</li>
        <li>Color amarillo y marrón, melena esponjosa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "A019-COCODRILO",
    nombre: "Zoologico cabezon 20cm COCODRILO",
    precio: 20500,
    imagen: "imagenes/A019-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche cabezón de cocodrilo, divertido y suave. Perfecto para juegos, colecciones o como regalo especial para los niños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, diseño simpático</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 8 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "A019-OVEJA",
    nombre: "Zoológico cabezón 20cm OVEJA",
    precio: 20500,
    imagen: "imagenes/A019-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche cabezón de oveja, tierno y esponjoso. Un detalle encantador para regalar o para decorar habitaciones infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 20 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles en rosa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "2591-ROSA",
    nombre: "Cerdo disfrazado ROSA 25cm",
    precio: 23500,
    imagen: "imagenes/2591-ROSA.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de cerdo disfrazado color rosa, tierno y gracioso. Ideal para regalar, coleccionar o decorar espacios infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles de disfraz</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 6 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
    // BLOQUE 3
  {
    id: "bg9-20-BLANCO",
    nombre: "Gato Corazón 25cm Blanco",
    precio: 27000,
    imagen: "imagenes/WhatsApp-Image-2025-04-21-at-4.31.41-PM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de gato blanco con corazón, suave y tierno. Ideal para acompañar a los más pequeños en sus juegos o para regalar como muestra de cariño.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
    {
    id: "1896-CAFE",
    nombre: "León pequeño melena CAFÉ 19cm",
    precio: 28000,
    imagen: "imagenes/1896-peque.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de león pequeño con melena café, suave y tierno. Perfecto para niños y decoraciones temáticas de animales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 19 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café claro y oscuro</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 9 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "BDHSQ-20-AMARILLO",
    nombre: "Siberiano Camisa 25cm AMARILLO",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche siberiano con camisa amarilla, elegante y suave. Ideal para obsequios y coleccionistas de peluches originales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y amarillo, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "BDHSQ-20-ROSA",
    nombre: "Siberiano Camisa 25cm ROSA",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche siberiano con camisa rosa, tierno y alegre. Ideal para decorar habitaciones infantiles y regalar en ocasiones especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y rosa, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "BDHSQ-20-VERDE",
    nombre: "Siberiano Camisa 25cm VERDE",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche siberiano con camisa verde, suave y original. Perfecto para amantes de los perros y coleccionistas de peluches.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y verde, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "1289-30",
    nombre: "Panda Acostado 30cm",
    precio: 28000,
    imagen: "imagenes/1289-30.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche panda acostado, suave, esponjoso y de tamaño ideal para abrazar o decorar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 10 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "lxd-20",
    nombre: "Oso Arlequín 25cm",
    precio: 28500,
    imagen: "imagenes/WhatsApp-Image-2025-05-14-at-11.54.40-AM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso arlequín de 25 cm, colorido y alegre. Ideal para regalar y decorar ambientes infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores variados, diseño arlequín</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 6 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "1925-MINEGLO",
    nombre: "Personajes curiosos MI NEGLO",
    precio: 29000,
    imagen: "imagenes/PhotoRoom-20220816_103412.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche personaje curioso MI NEGLO, divertido y suave. Ideal para coleccionistas y como regalo original.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Diseño único, colores variados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
   {
    id: "1925-MAGO",
    nombre: "Personajes curiosos MAGO 33cm",
    precio: 29000,
    imagen: "imagenes/1925-MAGO.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche personaje curioso MAGO de 33 cm, con outfit de mago y gorro. Perfecto para regalar y para coleccionistas de personajes especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores vivos y diseño temático</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
   {
    id: "2220A",
    nombre: "Viejita mediana 30cm",
    precio: 29500,
    imagen: "imagenes/2220A.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de viejita mediana de 30cm, simpática y tradicional. Perfecta para evocaciones tiernas y decoraciones nostálgicas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores y vestimenta tradicional</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 9 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "1925-MUNECATRAPO",
    nombre: "Personajes curiosos MUÑEQUITA DE TRAPO 33cm",
    precio: 29000,
    imagen: "imagenes/1925.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche personaje curioso MUÑEQUITA DE TRAPO de 33 cm, tradicional, suave y tierno. Perfecto para regalar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores variados, vestimenta de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  {
    id: "1925-MUNECATRAPOLISA",
    nombre: "Personajes curiosos MUÑEQUITA TRAPO LISA 33cm",
    precio: 29000,
    imagen: "imagenes/PhotoRoom-20220816_103502.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche personaje curioso MUÑEQUITA TRAPO LISA de 33 cm, de diseño sencillo y tradicional. Ideal para decoración y como regalo clásico.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Color liso, vestido de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.6/5 basado en 6 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  // ... resto del Bloque 3 ...
  {
    id: "j129-22-NEGRO",
    nombre: "Perro Gafas 25cm Negro",
    precio: 29000,
    imagen: "imagenes/J129-22-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de perro con gafas, color negro. Divertido y suave, ideal para regalar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color negro, gafas decorativas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 14 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
   {
    id: "tzjd-20",
    nombre: "Ratón con Queso Pequeño 25cm",
    precio: 31000,
    imagen: "imagenes/tzjd- (1).jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche ratón pequeño de 25cm con queso, tierno y gracioso. Ideal para regalar a niños y amantes de los animales de fantasía.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris y detalles de queso amarillo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },

  // BLOQUE 4
  {
    id: "j129-22-CAFE",
    nombre: "Perro Gafas 25cm Café",
    precio: 30000,
    imagen: "imagenes/J129-22-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de perro con gafas, color café. Suave, divertido y con un toque simpático gracias a sus gafas decorativas, perfecto para regalar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café, gafas de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 11 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
  // ... resto del Bloque 4 ...
  {
    id: "Sur05-30-SURTIDOS",
    nombre: "Peluche Elástico Mediano Animales Surtidos 30cm",
    precio: 32000,
    imagen: "imagenes/WhatsApp-Image-2025-04-21-at-3.07.28-PM.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico mediano de animales surtidos. Excelente opción para quienes aman los peluches variados y coleccionables.</p>
      <ul>
        <li>Material: Felpa elástica antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Diferentes colores y diseños</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 12 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
    {
    id: "1881-23-OSCURO",
    nombre: "Gorila Pequeño OSCURO 25cm",
    precio: 30000,
    imagen: "imagenes/1881-23-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche gorila pequeño de 25cm en color oscuro, robusto y suave, ideal para niños y coleccionistas de animales exóticos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color oscuro, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 10 opiniones)</p>
      </div>
    `,categoria: "peluches"
  },
   {
    id: "ele-30-MORADO",
    nombre: "Elefante Ojos bordado 25cm MORADO",
    precio: 32500,
    imagen: "imagenes/yf1-60-2.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de elefante color morado con ojos bordados. Suave, tierno y perfecto para regalar o decorar habitaciones infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, detalles bordados de alta calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "J207-20-NEGRO",
    nombre: "Dragon alas brillantes 25cm NEGRO",
    precio: 33500,
    imagen: "imagenes/j207-20-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche dragón de 25cm color negro con alas brillantes. Perfecto para niños y coleccionistas de criaturas fantásticas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color negro, alas con brillo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
    {
    id: "J207-20-VERDE",
    nombre: "Dragon alas brillantes 25cm VERDE",
    precio: 35500,
    imagen: "imagenes/j207-20-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche dragón verde de 25cm con alas brillantes. Suave y lleno de fantasía, ideal para niños y coleccionistas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, alas con brillo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "J207-20-MORADO",
    nombre: "Dragon alas brillantes 25cm MORADO",
    precio: 35500,
    imagen: "imagenes/j207-20-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche dragón morado de 25cm con alas brillantes. Tierno, original y perfecto para regalar a los amantes de la fantasía.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, alas con brillo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "FP1486-GRIS",
    nombre: "Tiburón pequeño GRIS 30CM",
    precio: 34000,
    imagen: "imagenes/FP1486-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche tiburón pequeño color gris, suave y divertido. Ideal para regalar a niños aventureros y fanáticos del mar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color gris, detalles realistas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "FP1486-AZUL",
    nombre: "Tiburón pequeño AZUL 30CM",
    precio: 34000,
    imagen: "imagenes/FP1486-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche tiburón pequeño color azul, suave y tierno. Perfecto para decorar, regalar o acompañar a los niños en sus aventuras.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, detalles realistas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 7 opiniones)</p>
      </div>
    `
  },
 
  {
    id: "2584",
    nombre: "Vaca Babero 35cm",
    precio: 43000,
    imagen: "imagenes/2584.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche vaca de 35cm con babero, adorable y esponjosa. Perfecta para decorar habitaciones infantiles y como regalo especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, babero de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 5
  {
    id: "ele-30-AZUL",
    nombre: "Elefante Ojos Bordado 25cm Azul",
    precio: 32500,
    imagen: "imagenes/yf1-40.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de elefante azul con ojos bordados, suave al tacto y de tamaño mediano. Perfecto para niños y para regalar a quienes aman los animales tiernos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 25 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, detalles bordados de alta calidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 5 ...
  {
    id: "ele-30-GRIS",
    nombre: "Elefante Almohada Colores 40cm Azul",
    precio: 45500,
    imagen: "imagenes/ELE0003-5.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Elefante almohada azul, suave y funcional como cojín. Perfecto para niños y para regalar en cualquier ocasión especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul claro, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 14 opiniones)</p>
      </div>
    `
  },
   
  {
    id: "YF1-40-ROSA",
    nombre: "Elefante Almohada colores ROSA 40cm",
    precio: 45500,
    imagen: "imagenes/yf1-40-5.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Elefante almohada color rosa de 40cm. Suave, esponjoso y perfecto como cojín o peluche de compañía para niños y niñas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, costuras reforzadas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  {
    id: "xh-35-AZUL",
    nombre: "Ratones pijama 35cm AZUL",
    precio: 50000,
    imagen: "imagenes/XH-25-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche ratón en pijama azul de 35cm. Muy suave, perfecto como regalo o para acompañar la hora de dormir de los pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, detalles de pijama</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "8773-40-AZUL",
    nombre: "Oso Ropa rayas 42cm AZUL",
    precio: 52000,
    imagen: "imagenes/8773-40-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso de 42cm con ropa de rayas azules. Elegante, suave y perfecto para decorar o regalar a grandes y pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 42 cm</li>
        <li>Lavable: Sí</li>
        <li>Color azul, ropa de rayas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "8773-40-VERDE",
    nombre: "Oso Ropa rayas 42cm VERDE",
    precio: 52000,
    imagen: "imagenes/8773-40-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche oso de 42cm con ropa de rayas verdes. Tierno, elegante y especial para decorar habitaciones infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 42 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, ropa de rayas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 10 opiniones)</p>
      </div>
    `
  },
  {
    id: "1043-40",
    nombre: "Panda Vestido 40cm",
    precio: 59000,
    imagen: "imagenes/1043-40.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche panda vestido de 40cm, suave y adorable. Ideal como regalo especial o para decorar espacios infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, vestido de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  {
    id: "2301-40",
    nombre: "Panda Overol 40cm",
    precio: 59000,
    imagen: "imagenes/2301-40.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche panda con overol de 40cm, esponjoso y tierno. Perfecto para regalar, coleccionar o decorar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, overol de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 10 opiniones)</p>
      </div>
    `
  },
  {
    id: "JE-59-GRIS",
    nombre: "Animalito que respira (No incluye pilas) 26cm GRIS",
    precio: 65000,
    imagen: "imagenes/JE-59-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche animalito que respira color gris de 26cm (no incluye pilas). Realista, suave y reconfortante para niños y adultos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Función: Respira (pila no incluida)</li>
        <li>Color gris</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 13 opiniones)</p>
      </div>
    `
  },
  {
    id: "JE-59-AZUL",
    nombre: "Animalito que respira (No incluye pilas) 26cm AZUL",
    precio: 65000,
    imagen: "imagenes/JE-59-4.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche animalito que respira color azul de 26cm (no incluye pilas). Suave, tierno y perfecto como compañía para niños pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Función: Respira (pila no incluida)</li>
        <li>Color azul</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  {
    id: "JE-59-MARRON",
    nombre: "Animalito que respira (No incluye pilas) 26cm MARRON",
    precio: 65000,
    imagen: "imagenes/JE-59-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche animalito que respira color marrón de 26cm (no incluye pilas). Especial para reconfortar y acompañar en la hora de dormir.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Función: Respira (pila no incluida)</li>
        <li>Color marrón</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  {
    id: "JE-59-CAFE",
    nombre: "Animalito que respira (No incluye pilas) 26cm CAFE",
    precio: 65000,
    imagen: "imagenes/JE-59-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche animalito que respira color café de 26cm (no incluye pilas). Realista, suave y adorable para acompañar a los más pequeños.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 26 cm</li>
        <li>Función: Respira (pila no incluida)</li>
        <li>Color café</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 12 opiniones)</p>
      </div>
    `
  },


  // BLOQUE 6
  {
    id: "2587",
    nombre: "Vaca con Bolso 40cm",
    precio: 46000,
    imagen: "imagenes/2587.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de vaca con bolso, de gran tamaño y detalles encantadores. Ideal para abrazar, decorar o regalar en ocasiones especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, bolso colorido incluido</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (4.9/5 basado en 14 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 6 ...
  {
    id: "2332-40",
    nombre: "Panda Camisa Roja 45cm",
    precio: 61000,
    imagen: "imagenes/2332-40.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de panda con camisa roja, adorable y esponjoso. Un detalle especial para decorar o regalar a los amantes de los pandas.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 45 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco y negro, camisa roja</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 13 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 7
  {
    id: "HUO-30-ROSA",
    nombre: "Dino Huevo 33cm Rosa",
    precio: 63000,
    imagen: "imagenes/HUO-30-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de dinosaurio saliendo del huevo, en color rosa. Un diseño original y divertido, ideal para regalar a los pequeños amantes de los dinosaurios.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 33 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles bordados y diseño interactivo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 11 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 7 ...
  {
    id: "GS282-60",
    nombre: "Mico Buso Grande 60cm",
    precio: 68500,
    imagen: "imagenes/GS282-60.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de mico (mono) con buso grande, suave y llamativo. Un regalo excelente para sorprender y abrazar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 60 cm</li>
        <li>Lavable: Sí</li>
        <li>Color marrón, buso colorido</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 15 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 8
  {
    id: "GS377-40-45CM",
    nombre: "Mono Bolso Banana 45cm",
    precio: 69500,
    imagen: "imagenes/GS377-40 (1).jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de mono con bolso en forma de banana, tamaño mediano. Divertido, suave y perfecto para regalar o decorar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 45 cm</li>
        <li>Lavable: Sí</li>
        <li>Color marrón, bolso tipo banana</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 8 ...
  {
    id: "821-l",
    nombre: "Elefante Luminosa con Cobija 60cm",
    precio: 98000,
    imagen: "imagenes/821-1.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de elefante luminosa, incluye cobija. Brilla en la oscuridad y aporta calidez y ternura a cualquier espacio.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 60 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosado, luz suave y cobija incluida</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 13 opiniones)</p>
      </div>
    `
  },

  // BLOQUE 9
  {
    id: "JE-68",
    nombre: "Oso Bufanda Love 75cm",
    precio: 148000,
    imagen: "imagenes/je-68.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de oso gigante con bufanda "Love", tierno y espectacular para regalar en ocasiones especiales. Su tamaño lo hace ideal para abrazar y decorar grandes espacios.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 75 cm</li>
        <li>Lavable: Sí</li>
        <li>Color beige, bufanda decorativa con mensaje Love</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 16 opiniones)</p>
      </div>
    `
  },
  // ... resto del Bloque 9 ...
  {
    id: "JE-73-ROSA",
    nombre: "Oso Gigantísimo 135cm Rosa",
    precio: 416500,
    imagen: "imagenes/Je-73-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche de oso gigante en color rosa, el más grande y espectacular de todos. Sorprende con este regalo inolvidable, ideal para ocasiones verdaderamente especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 135 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles premium y gran suavidad</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 20 opiniones)</p>
      </div>
    `
  },
   {
    id: "BL-389-43-MORADO",
    nombre: "Unicornio Ojitos 40cm MORADO",
    precio: 31500,
    imagen: "imagenes/bl-398-43-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio de 40cm color morado, con ojitos grandes y brillantes. Encantador para decorar habitaciones infantiles.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color morado, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
    {
    id: "BL-389-43-ROSA",
    nombre: "Unicornio Ojitos 40cm ROSA",
    precio: 31500,
    imagen: "imagenes/bl-398-43-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche unicornio de 40cm color rosa, con ojitos grandes y brillantes. Perfecto para regalar o coleccionar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, detalles bordados</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "Sur05-30-GANZO",
    nombre: "Peluche elástico mediano GANZO 30cm",
    precio: 32000,
    imagen: "imagenes/sur05-30-9.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico mediano en forma de ganzo, divertido y suave. Ideal para juegos y decoración.</p>
      <ul>
        <li>Material: Felpa elástica antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles naranjas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "Sur05-30-UNICORNIO",
    nombre: "Peluche elástico mediano 30cm UNICORNIO",
    precio: 32000,
    imagen: "imagenes/sur05-30-19.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico mediano de unicornio de 30cm, colorido y suave, perfecto para inspirar la imaginación de los niños.</p>
      <ul>
        <li>Material: Felpa elástica antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores pastel, detalles de unicornio</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "Sur05-30-OJITOS",
    nombre: "Peluche elástico mediano 30cm Cojín OJITOS",
    precio: 32000,
    imagen: "imagenes/sur05-30-8.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche elástico mediano en forma de cojín con ojitos de 30cm. Suave y perfecto para descansar o decorar la cama.</p>
      <ul>
        <li>Material: Felpa elástica antialérgica</li>
        <li>Tamaño: 30 cm</li>
        <li>Lavable: Sí</li>
        <li>Colores variados, detalles de ojitos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 8 opiniones)</p>
      </div>
    `
  },
       {
    id: "BLM-098",
    nombre: "Oso con bordado 55cm",
    precio: 68000,
    imagen: "imagenes/BLM-098.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso de peluche con bordado, tamaño grande 55cm. Suave, elegante y especial para regalos importantes o decoración destacada.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 55 cm</li>
        <li>Lavable: Sí</li>
        <li>Bordado personalizado, color café claro</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "J192-32-NARANJA",
    nombre: "Leon Despeluque 35cm NARANJA",
    precio: 68500,
    imagen: "imagenes/j192-32-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>León despelucado naranja de 35cm. Muy divertido, original y de pelo esponjado. Ideal para destacar en tu colección.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color naranja, melena voluminosa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.9/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "J192-32-ROSA",
    nombre: "Leon Despeluque 35cm ROSA",
    precio: 68500,
    imagen: "imagenes/j192-32-3 (2).jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>León despelucado rosa de 35cm. Muy suave, llamativo y con peinado alocado. Perfecto para regalar o decorar el cuarto.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color rosa, melena desordenada</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.8/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "J192-32-CAFE",
    nombre: "León Despeluque 35cm CAFE",
    precio: 68500,
    imagen: "imagenes/j192-32-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>León despelucado café de 35cm. Pelo esponjoso, muy suave y divertido. Perfecto para decorar y regalar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 35 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café, melena abundante</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐ (4.7/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "XTIG-50-LEONBLANCO",
    nombre: "Tigre Acostado 50cm LEON BLANCO",
    precio: 76000,
    imagen: "imagenes/xtig-50-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Tigre acostado 50cm, versión león blanco. Grande, suave y de detalles realistas. Ideal para destacar en la decoración o para niños grandes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 50 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, detalles de león</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "XTIG-50-PUMA",
    nombre: "Tigre Acostado 50cm PUMA",
    precio: 76000,
    imagen: "imagenes/xtig-50-3.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Tigre acostado 50cm versión puma. Suave, grande y de diseño realista, perfecto para coleccionistas y niños grandes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 50 cm</li>
        <li>Lavable: Sí</li>
        <li>Color puma, detalles realistas</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 6 opiniones)</p>
      </div>
    `
  },
  {
    id: "2204-049",
    nombre: "Panda Lentejuelas 40cm",
    precio: 78500,
    imagen: "imagenes/2204-049.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Panda de felpa con lentejuelas de 40cm. Brillante, sofisticado y muy tierno. Perfecto para regalos llamativos o colecciones especiales.</p>
      <ul>
        <li>Material: Felpa antialérgica con lentejuelas</li>
        <li>Tamaño: 40 cm</li>
        <li>Lavable: Superficialmente</li>
        <li>Color blanco y negro, detalles brillantes</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "Ap3-6206",
    nombre: "Cocodrilo 60cm Con Cobija 160cm*90",
    precio: 82500,
    imagen: "imagenes/ap3-6206.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Cocodrilo de peluche 60cm que incluye cobija de 160cm x 90cm. Práctico, divertido y útil para niños o adultos friolentos.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: Peluche 60 cm, cobija 160 x 90 cm</li>
        <li>Lavable: Sí</li>
        <li>Color verde, diseño funcional</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 5 opiniones)</p>
      </div>
    `
  },
  {
    id: "JPE02-40-CAFEOSCURO",
    nombre: "Osos mediano diseños CAFE OSCURO 55cm",
    precio: 86500,
    imagen: "imagenes/jpe02-60-2 (1).jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso mediano de 55cm, diseño café oscuro. Suave, esponjoso y de gran tamaño, ideal para regalos y decoración especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 55 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café oscuro, detalles de diseño</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "JPE02-40-CAFECLARO",
    nombre: "Osos mediano diseños 55cm CAFE CLARO",
    precio: 86500,
    imagen: "imagenes/jpe02-60-1.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso mediano de 55cm, diseño café claro. Muy suave y grande, perfecto para regalar en ocasiones importantes.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 55 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café claro, detalles decorativos</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "cj-3179",
    nombre: "King Kong Gigante 60cm",
    precio: 89500,
    imagen: "imagenes/cj-3179.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Peluche King Kong gigante de 60cm. Impactante, divertido y para los que aman los animales icónicos de gran tamaño.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 60 cm</li>
        <li>Lavable: Sí</li>
        <li>Color negro, detalles de gorila</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "BLM-099",
    nombre: "Oso con Moño Grande 100cm",
    precio: 261000,
    imagen: "imagenes/BLM-099.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso gigante de 1 metro con moño grande, el regalo perfecto para ocasiones inolvidables y decoración impactante.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 100 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café claro, moño decorativo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 12 opiniones)</p>
      </div>
    `
  },
  {
    id: "BLL-016",
    nombre: "Oso con Corazon Grande 110cm",
    precio: 261000,
    imagen: "imagenes/BLL-016.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso gigante con corazón de 110cm. Muy suave, tierno y perfecto para sorprender en fechas especiales como aniversarios y San Valentín.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 110 cm</li>
        <li>Lavable: Sí</li>
        <li>Color marrón claro, corazón rojo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 9 opiniones)</p>
      </div>
    `
  },
  {
    id: "2967-CAFE",
    nombre: "Oso Carmel con Flor 100cm CAFE",
    precio: 261000,
    imagen: "imagenes/2967-2.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso carmel gigante de 1 metro, color café, con flor. Un detalle romántico, grande y memorable para regalar.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 100 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café, flor decorativa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "2967-BLANCO",
    nombre: "Oso Carmel con Flor 100cm BLANCO",
    precio: 261000,
    imagen: "imagenes/2967.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso carmel gigante de 1 metro, color blanco, con flor. Tierno, elegante y perfecto para sorprender a lo grande.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 100 cm</li>
        <li>Lavable: Sí</li>
        <li>Color blanco, flor decorativa</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  },
  {
    id: "BL22-01",
    nombre: "Oso con Bufanda grande 120cm",
    precio: 272000,
    imagen: "imagenes/bl22-01.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso gigante de 120cm con bufanda. Súper suave, abrigador y perfecto para ser el centro de atención en cualquier regalo o celebración especial.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 120 cm</li>
        <li>Lavable: Sí</li>
        <li>Color marrón claro, bufanda de tela</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 7 opiniones)</p>
      </div>
    `
  },
  {
    id: "2535",
    nombre: "Oso moño Sonriente grande 110cm",
    precio: 272000,
    imagen: "imagenes/2535.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Oso gigante de 110cm con moño y sonrisa. Ideal para regalar, sorprender y llenar de alegría cualquier ambiente.</p>
      <ul>
        <li>Material: Felpa antialérgica</li>
        <li>Tamaño: 110 cm</li>
        <li>Lavable: Sí</li>
        <li>Color café claro, moño decorativo</li>
      </ul>
      <div class="valoraciones">
        <h3>Valoraciones</h3>
        <p>⭐⭐⭐⭐⭐ (5/5 basado en 8 opiniones)</p>
      </div>
    `
  }
    
];

const variedades = [
   {
    id: "srb-135-lata-carino-17",
    nombre: "SRB| 13.5 Simpson Roll Lata CON CARIÑO 17 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-lata-carino-17.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Simpson Roll presentado en lata con el mensaje "CON CARIÑO". Tamaño: 17 cm. Ideal para regalar y sorprender.</p>
      <ul>
        <li>Presentación: Lata</li>
        <li>Mensaje: CON CARIÑO</li>
        <li>Tamaño: 17 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "srb-135-lata-felizdia-17",
    nombre: "SRB| 13.5 Simpson Roll Lata FELIZ DIA 17 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-lata-felizdia-17.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Simpson Roll en lata con el mensaje "FELIZ DIA". Tamaño de 17 cm. Un detalle especial para ocasiones felices.</p>
      <ul>
        <li>Presentación: Lata</li>
        <li>Mensaje: FELIZ DIA</li>
        <li>Tamaño: 17 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "srb-135-botella-parati-24",
    nombre: "SRB| 13.5 Simpson Roll Botella PARA TI 24 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-botella-parati-24.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Simpson Roll en botella con el mensaje "PARA TI". Tamaño: 24 cm. Perfecto para regalos personalizados.</p>
      <ul>
        <li>Presentación: Botella</li>
        <li>Mensaje: PARA TI</li>
        <li>Tamaño: 24 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "srb-135-lata-felicidades-17",
    nombre: "SRB| 13.5 Simpson Roll Lata FELICIDADES EN TU DIA 17 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-lata-felicidadesentu-17.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Simpson Roll en lata con el mensaje "FELICIDADES EN TU DIA". Tamaño: 17 cm. Un regalo ideal para celebrar.</p>
      <ul>
        <li>Presentación: Lata</li>
        <li>Mensaje: FELICIDADES EN TU DIA</li>
        <li>Tamaño: 17 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "srb-135-lata-parati-felizdia-17",
    nombre: "SRB| 13.5 Simpson Roll Lata PARA TI FELIZ DIA 17 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-lata-paratifelizdia-17.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Simpson Roll en lata con mensaje "PARA TI FELIZ DIA". Tamaño: 17 cm. Un detalle único.</p>
      <ul>
        <li>Presentación: Lata</li>
        <li>Mensaje: PARA TI FELIZ DIA</li>
        <li>Tamaño: 17 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "srb-135-botella-felicidades-24",
    nombre: "SRB| 13.5 Simpson Roll Botella FELICIDADES 24 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-botella-felicidades-24.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Simpson Roll en botella con el mensaje "FELICIDADES". Tamaño: 24 cm. Perfecto para celebraciones.</p>
      <ul>
        <li>Presentación: Botella</li>
        <li>Mensaje: FELICIDADES</li>
        <li>Tamaño: 24 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "srb-135-botella-milfelicidades-24",
    nombre: "SRB| 13.5 Simpson Roll Botella MIL FELICIDADES 24 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-botella-milfelicidades-24.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Simpson Roll en botella con el mensaje "MIL FELICIDADES". Tamaño: 24 cm. Regalo ideal para felicitar.</p>
      <ul>
        <li>Presentación: Botella</li>
        <li>Mensaje: MIL FELICIDADES</li>
        <li>Tamaño: 24 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "srb-135-botella-entudia-24",
    nombre: "SRB| 13.5 Simpson Roll Botella EN TU DIA 24 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-botella-entudia-24.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Simpson Roll en botella con el mensaje "EN TU DIA". Tamaño: 24 cm. Perfecto para cualquier celebración.</p>
      <ul>
        <li>Presentación: Botella</li>
        <li>Mensaje: EN TU DIA</li>
        <li>Tamaño: 24 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "bsb-89-beer-homero-29",
    nombre: "BSB|8.9 Cerveza beer simpsons HOMERO FELIZ DIA 7.5x7x29 cms",
    precio: 15000,
    imagen: "imagenes/variedades/bsb-89-beer-homero-29.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Cerveza de peluche estilo Simpsons, personaje Homero con mensaje "FELIZ DIA". Tamaño: 7.5x7x29 cm.</p>
      <ul>
        <li>Personaje: Homero</li>
        <li>Mensaje: FELIZ DIA</li>
        <li>Tamaño: 7.5x7x29 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "bsb-89-beer-duffman-29",
    nombre: "BSB|8.9 Cerveza beer simpsons DUFFMAN ESPECIAMENTE PARA TI 7.5x7x29 cms",
    precio: 15000,
    imagen: "imagenes/variedades/bsb-89-beer-duffman-29.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Cerveza de peluche estilo Simpsons, personaje DuffMan con mensaje "ESPECIAMENTE PARA TI". Tamaño: 7.5x7x29 cm.</p>
      <ul>
        <li>Personaje: DuffMan</li>
        <li>Mensaje: ESPECIAMENTE PARA TI</li>
        <li>Tamaño: 7.5x7x29 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "bsb-88-beer-bart-29",
    nombre: "BSB|8.8 Cerveza beer simpsons BART: FELIZ CUMPLE 7.5x7x29 cms",
    precio: 14500,
    imagen: "imagenes/variedades/bsb-88-beer-bart-29.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Cerveza de peluche estilo Simpsons, personaje Bart con mensaje "FELIZ CUMPLE". Tamaño: 7.5x7x29 cm.</p>
      <ul>
        <li>Personaje: Bart</li>
        <li>Mensaje: FELIZ CUMPLE</li>
        <li>Tamaño: 7.5x7x29 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "bsb-88-beer-nelson-29",
    nombre: "BSB|8.8 Cerveza beer simpsons NELSON: CON CARIÑO PARA TI 7.5x7x29 cms",
    precio: 14500,
    imagen: "imagenes/variedades/bsb-88-beer-nelson-29.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Cerveza de peluche estilo Simpsons, personaje Nelson con mensaje "CON CARIÑO PARA TI". Tamaño: 7.5x7x29 cm.</p>
      <ul>
        <li>Personaje: Nelson</li>
        <li>Mensaje: CON CARIÑO PARA TI</li>
        <li>Tamaño: 7.5x7x29 cm</li>
      </ul>
    `,
    categoria: "variedades"
  },
{
    id: "5161-32-splash-vct-60ml",
    nombre: "5161| 3.2 Splash 60ml Vct",
    precio: 5500,
    imagen: "imagenes/5161-1536x1536.jpeg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Splash Vct de 60ml, ideal para refrescarte en cualquier momento. Presentación pequeña y práctica.</p>
      <ul>
        <li>Contenido: 60ml</li>
        <li>Tipo: Vct</li>
        <li>Presentación: mini splash</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "1278-87-splash-vct-250ml-dorada",
    nombre: "1278|8.7 Splash Vct tapa dorada 250ml SURTIDO",
    precio: 14500,
    imagen: "imagenes/tapa-dorada-.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Splash Vct de 250ml con tapa dorada. Fragancias surtidas para todos los gustos.</p>
      <ul>
        <li>Contenido: 250ml</li>
        <li>Tipo: Vct</li>
        <li>Presentación: tapa dorada, surtido</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "1819-47-splash-vct-125ml",
    nombre: "1819|4.7 Splash Vct 125ml SURTIDO",
    precio: 7500,
    imagen: "imagenes/splash-250.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Splash Vct de 125ml, fragancias surtidas. Una excelente opción para el día a día.</p>
      <ul>
        <li>Contenido: 125ml</li>
        <li>Tipo: Vct</li>
        <li>Presentación: surtido</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "1317-79-splash-pk-250ml",
    nombre: "1317|7.9 Splash Pk 250ml SURTIDO",
    precio: 13000,
    imagen: "imagenes/pink-250.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Splash Pk de 250ml, fragancias surtidas. Disfruta de aromas frescos y duraderos.</p>
      <ul>
        <li>Contenido: 250ml</li>
        <li>Tipo: Pk</li>
        <li>Presentación: surtido</li>
      </ul>
    `,
    categoria: "variedades"
  },
  {
    id: "1186-47-splash-mini-pk-75ml",
    nombre: "1186|4.7 Splash mini Pk 75ml SURTIDO",
    precio: 7500,
    imagen: "imagenes/mini-pink-75.jpg",
    descripcion: `
      <h3>Descripción</h3>
      <p>Splash mini Pk de 75ml, fragancias surtidas. Práctico para llevar en el bolso o mochila.</p>
      <ul>
        <li>Contenido: 75ml</li>
        <li>Tipo: Pk mini</li>
        <li>Presentación: surtido</li>
      </ul>
    `,
    categoria: "variedades"
  }
   ];
// 1. Array unificado con todos los productos locales
const todosLosProductos = [
  ...(typeof personajes !== "undefined" ? personajes : []),
  ...(typeof peluches !== "undefined" ? peluches : []),
  ...(typeof variedades !== "undefined" ? variedades : [])
];

   // Busca el parámetro ?id=... en la URL
function getParameterByName(name) {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get(name);
}

// Muestra un mensaje de error si no se encuentra el producto
function mostrarError() {
    document.title = "Producto no encontrado | Teddy's Fly";
    document.body.innerHTML = `
      <main>
        <h2>Producto no encontrado</h2>
        <p>El producto solicitado no existe o no se especificó un ID válido.</p>
        <a href="tienda.html">Volver a la tienda</a>
      </main>`;
}

// Busca el producto en arrays locales y Firestore (por id slug y por doc.id)
async function mostrarDetalleProducto() {
    const id = getParameterByName("id");
    if (!id) return mostrarError();

    let producto = undefined;

    // 1. Buscar en array global "productos" si existe (compatibilidad local)
    if (typeof productos !== "undefined" && Array.isArray(productos)) {
        producto = productos.find(p => p.id === id);
    }

    // 2. Buscar en Firestore por campo 'id' (slug)
    if (!producto && typeof db !== "undefined") {
        try {
            const snap = await db.collection("productos").where("id", "==", id).get();
            if (!snap.empty) {
                producto = snap.docs[0].data();
                producto.id = producto.id || snap.docs[0].id;
            }
        } catch (e) {
            console.error("Error buscando por id (slug) en Firestore", e);
            return mostrarError();
        }
    }

    // 3. Buscar en Firestore por doc.id (ID automático, productos viejos)
    if (!producto && typeof db !== "undefined") {
        try {
            const docSnap = await db.collection("productos").doc(id).get();
            if (docSnap.exists) {
                producto = docSnap.data();
                producto.id = docSnap.id;
            }
        } catch (e) {
            console.error("Error buscando por doc.id en Firestore", e);
            return mostrarError();
        }
    }

    // Si después de todos los métodos NO encontró el producto, muestra error
    if (!producto) return mostrarError();

    // Compatibilidad de campos
    const nombre = producto.nombre || producto.name || "(Sin nombre)";
    const imagen = producto.imagen || producto.image || "";
    const descripcion = producto.descripcion || producto.detail || "";
    const precio = producto.precio || 0;

    // Mostrar la información del producto en la página
    document.title = `${nombre} | Teddy's Fly`;
    if (document.getElementById("nombre-producto")) document.getElementById("nombre-producto").textContent = nombre;
    if (document.getElementById("img-principal")) {
        document.getElementById("img-principal").src = imagen;
        document.getElementById("img-principal").alt = nombre;
    }
    if (document.getElementById("descripcion-producto")) document.getElementById("descripcion-producto").innerHTML = descripcion;
    if (document.getElementById("precio-producto")) document.getElementById("precio-producto").textContent = "$" + precio.toLocaleString();

    // Miniatura de imagen (si hay más imágenes, aquí puedes expandir)
    if (document.getElementById("miniaturas")) {
        document.getElementById("miniaturas").innerHTML = "";
        const mini = document.createElement("img");
        mini.src = imagen;
        mini.alt = nombre;
        mini.width = 60;
        mini.style.margin = "4px";
        mini.onclick = () => {
            document.getElementById("img-principal").src = imagen;
        };
        document.getElementById("miniaturas").appendChild(mini);
    }

    // Botón "Agregar al carrito"
    const btnAgregar = document.getElementById("btn-agregar-carrito");
    if (btnAgregar) {
        btnAgregar.onclick = function() {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            const item = carrito.find(p => p.id === producto.id);
            if (item) {
                item.cantidad += 1;
            } else {
                carrito.push({
                    id: producto.id,
                    nombre: nombre,
                    precio: precio,
                    imagen: imagen,
                    cantidad: 1
                });
            }
            localStorage.setItem("carrito", JSON.stringify(carrito));
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                let totalUnidades = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);
                cartCount.textContent = totalUnidades;
            }
            alert('Producto añadido al carrito');
        };
    }
}

// Ejecuta la función cuando la página termine de cargar
document.addEventListener("DOMContentLoaded", mostrarDetalleProducto);
