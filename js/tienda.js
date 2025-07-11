const peluches = [
  {
    id: "FP1226",
    nombre: "Llavero Burro 12cm Azul",
    precio: 10500,
    imagen: "imagenes/FP1226-3.jpeg",
    descripcion: "Llavero de burro azul, compacto y divertido."
  },
  {
    id: "LLA-Mat-MORADO",
    nombre: "Llavero Matera Dino 10cm Morado",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-4.jpeg",
    descripcion: "Llavero matera dino en color morado. Ideal para regalar."
  },
  {
    id: "LLA-Mat-VERDE",
    nombre: "Llavero Matera Dino 10cm Verde",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-2.jpeg",
    descripcion: "Llavero matera dino en color verde, perfecto para los amantes de las plantas."
  },
  {
    id: "LLA-Mat-AZUL-OSCURO",
    nombre: "Llavero Matera Dino 10cm Azul Oscuro",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-3-1.jpeg",
    descripcion: "Llavero matera dino en azul oscuro, un accesorio único."
  },
  {
    id: "LLA-Mat-AZUL-CLARO",
    nombre: "Llavero Matera Dino 10cm Azul Claro",
    precio: 11500,
    imagen: "imagenes/LLA-Mat-1.jpeg",
    descripcion: "Llavero matera dino en azul claro, un accesorio único."
  },
  {
    id: "LLA-Din-NARANJA",
    nombre: "Llavero Dino 12cm Naranja",
    precio: 12500,
    imagen: "imagenes/LLA-Din-1.jpeg",
    descripcion: "Llavero de dinosaurio naranja, suave y llamativo."
  },
  {
    id: "LLA-Din-MORADO",
    nombre: "Llavero Dino 12cm Morado",
    precio: 12500,
    imagen: "imagenes/LLA-Din-2.jpeg",
    descripcion: "Llavero de dinosaurio morado, perfecto para mochilas."
  },
  {
    id: "LLA-Din-VERDE",
    nombre: "Llavero Dino 12cm Verde",
    precio: 12500,
    imagen: "imagenes/LLA-Din-3.jpeg",
    descripcion: "Llavero dinosaurio verde, ideal para niños y niñas."
  },
  {
    id: "LLA-Din-COLORES",
    nombre: "Llavero Dino 12cm Colores",
    precio: 12500,
    imagen: "imagenes/LLA-Din-4.jpeg",
    descripcion: "Llavero de dinosaurio en varios colores, colección divertida."
  },
  {
    id: "Eco-Sur-PANDA",
    nombre: "Peluche Económico Pequeño 15cm Panda",
    precio: 13000,
    imagen: "imagenes/WhatsApp-Image-2025-05-16-at-5.13.13-PM.jpeg",
    descripcion: "Peluche panda económico, pequeño y adorable."
  },
  {
    id: "1030-17-MEL",
    nombre: "Perro Pets Mel 25cm",
    precio: 15000,
    imagen: "imagenes/1030-17.jpeg",
    descripcion: "Peluche de perro 'Pets Mel' de 25cm, suave y amigable."
  },
  {
    id: "j300-21-OSO",
    nombre: "Osos Peludos Pequeños 20cm",
    precio: 16500,
    imagen: "imagenes/WhatsApp-Image-2025-05-08-at-5.29.43-PM.jpeg",
    descripcion: "Peluche de oso peludo pequeño, ideal para regalar."
  },
  {
    id: "FLOS-1523-GRIS",
    nombre: "Oso Corazón y Rosa 20cm Gris",
    precio: 17500,
    imagen: "imagenes/flos-1523-1.jpeg",
    descripcion: "Oso de peluche con corazón y rosa en color gris."
  },
  {
    id: "FLOS-1523-BEIGE",
    nombre: "Oso Corazón y Rosa 20cm Beige",
    precio: 17500,
    imagen: "imagenes/flos-1523-3.jpeg",
    descripcion: "Oso de peluche con corazón y rosa en color beige."
  },
  {
    id: "FLOS-1523-CAFE",
    nombre: "Oso Corazón y Rosa 20cm Café",
    precio: 17500,
    imagen: "imagenes/flos-1523-2.jpeg",
    descripcion: "Oso de peluche con corazón y rosa en color café."
  },
  /*{
    id: "uni-2023-ROSA",
    nombre: "Unicornio Estrellitas 22cm Rosa",
    precio: 19000,
    imagen: "imagenes/uni-2023-1.jpeg",
    descripcion: "Unicornio de peluche rosa con estrellitas."
  },*/
  {
    id: "uni-2023-BLANCO",
    nombre: "Unicornio Estrellitas 22cm Blanco",
    precio: 19000,
    imagen: "imagenes/uni-2023-3.jpeg",
    descripcion: "Unicornio blanco con estrellitas, suave y tierno."
  },
  {
    id: "uni-2023-MORADO",
    nombre: "Unicornio Estrellitas 22cm Morado",
    precio: 19000,
    imagen: "imagenes/uni-2023-2.jpeg",
    descripcion: "Unicornio morado con estrellitas, perfecto para decorar."
  },
  {
    id: "Leon-p",
    nombre: "León Pequeño 15cm",
    precio: 20000,
    imagen: "imagenes/leon-p-1536x1536.jpeg",
    descripcion: "Peluche de leoncito pequeño, suave y adorable."
  },
  {
    id: "A019-COCODRILO",
    nombre: "Zoológico Cabezón 20cm Cocodrilo",
    precio: 20500,
    imagen: "imagenes/A019-2.jpeg",
    descripcion: "Peluche cocodrilo cabezón de 20cm, divertido y coleccionable."
  },
  {
    id: "A019-OVEJA",
    nombre: "Zoológico Cabezón 20cm Oveja",
    precio: 20500,
    imagen: "imagenes/A019-3.jpeg",
    descripcion: "Peluche oveja cabezona, tierna y esponjosa."
  },
  {
    id: "2591-ROSA",
    nombre: "Cerdo Disfrazado ROSA 25cm",
    precio: 23500,
    imagen: "imagenes/2591-1.jpeg",
    descripcion: "Cerdito disfrazado rosa de 25cm, divertido y suave."
  },
    {
    id: "bg9-20-BLANCO",
    nombre: "Gato Corazón 25cm Blanco",
    precio: 27000,
    imagen: "imagenes/WhatsApp-Image-2025-04-21-at-4.31.41-PM.jpeg",
    descripcion: "Gato de peluche con corazón, color blanco, tamaño 25cm."
  },
  {
    id: "1896-CAFE",
    nombre: "León Pequeño Melena CAFÉ 19cm",
    precio: 28000,
    imagen: "imagenes/1896-peque.jpg",
    descripcion: "León de peluche pequeño con melena café, suave y tierno."
  },
  {
    id: "BDHSQ-20-AMARILLO",
    nombre: "Siberiano Camisa 25cm AMARILLO",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20-2.jpeg",
    descripcion: "Peluche siberiano con camisa amarilla, tamaño 25cm."
  },
  {
    id: "BDHSQ-20-ROSA",
    nombre: "Siberiano Camisa 25cm ROSA",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20-1.jpeg",
    descripcion: "Peluche siberiano con camisa rosa, tamaño 25cm."
  },
  {
    id: "BDHSQ-20-VERDE",
    nombre: "Siberiano Camisa 25cm VERDE",
    precio: 28000,
    imagen: "imagenes/BDHSQ-20.jpeg",
    descripcion: "Peluche siberiano con camisa verde, tamaño 25cm."
  },
  {
    id: "1289-30",
    nombre: "Panda Acostado 30cm",
    precio: 28000,
    imagen: "imagenes/1289-30.jpeg",
    descripcion: "Panda de peluche acostado, tamaño 30cm, suave y adorable."
  },
  {
    id: "lx-20",
    nombre: "Oso Arlequín 25cm",
    precio: 28500,
    imagen: "imagenes/WhatsApp-Image-2025-05-14-at-11.54.40-AM.jpeg",
    descripcion: "Oso arlequín de peluche, colorido y divertido, tamaño 25cm."
  },
  {
    id: "1925-MINEGLO",
    nombre: "Personajes MI NEGLO 33cm",
    precio: 29000,
    imagen: "imagenes/PhotoRoom-20220816_103412.jpg",
    descripcion: "Peluche personaje MI NEGLO, tamaño 33cm, suave y colorido."
  },
  {
    id: "1925-MAGO",
    nombre: "Personajes MAGO 33cm",
    precio: 29000,
    imagen: "imagenes/61343765-3061-5663-b361-653730343337-300x300.png",
    descripcion: "Peluche personaje MI NEGO versión mago, tamaño 33cm."
  },
  {
    id: "2220A",
    nombre: "Viejita Mediana 30cm",
    precio: 29500,
    imagen: "imagenes/2220A.jpeg",
    descripcion: "Peluche de viejita mediana, tamaño 30cm, simpática y tradicional."
  },
  {
    id: "1925-MUNECATRAPO",
    nombre: "Personajes MUÑECA DE TRAPO LISA 33cm",
    precio: 29000,
    imagen: "imagenes/1925.jpeg",
    descripcion: "Peluche personaje tipo muñeca de trapo, tamaño 33cm."
  },
  {
    id: "1925-MUNECATRAPOLISA",
    nombre: "Personajes MUÑECA DE TRAPO 33cm",
    precio: 29000,
    imagen: "imagenes/PhotoRoom-20220816_103502.jpg",
    descripcion: "Peluche personaje de encanto tipo muñeca de trapo, tamaño 33cm."
  },
  {
    id: "SUR05-30-SURTIDOS",
    nombre: "Peluche Elástico Mediano Animales Surtidos 30cm",
    precio: 32000,
    imagen: "imagenes/WhatsApp-Image-2025-04-21-at-3.07.28-PM.jpeg",
    descripcion: "Peluche elástico mediano de animales surtidos, tamaño 30cm."
  },
  {
    id: "1881-23-OSCURO",
    nombre: "Gorila Pequeño Oscuro 25cm",
    precio: 30000,
    imagen: "imagenes/1881-23-2.jpeg",
    descripcion: "Gorila de peluche pequeño, color oscuro, tamaño 25cm."
  },
  {
    id: "ele-30-MORADO",
    nombre: "Elefante Ojos Bordados 25cm MORADO",
    precio: 32500,
    imagen: "imagenes/yf1-60-2.jpg",
    descripcion: "Elefante de peluche color morado, ojos bordados, tamaño 25cm."
  },
  {
    id: "ele-30-AZUL",
    nombre: "Elefante Ojos Bordados 25cm AZUL",
    precio: 32500,
    imagen: "imagenes/yf1-40.jpg",
    descripcion: "Elefante de peluche azul, ojos bordados, tamaño 25cm."
  },
  {
    id: "YF1-40-ROSA",
    nombre: "Elefante Ojos Bordados 25cm ROSA",
    precio: 32500,
    imagen: "imagenes/yf1-40-5.jpg",
    descripcion: "Elefante de peluche rosa, ojos bordados, tamaño 25cm."
  },
  {
    id: "ele-30-GRIS",
    nombre: "Elefante Ojos Bordados 25cm GRIS",
    precio: 32500,
    imagen: "imagenes/ELE0003-5.jpg",
    descripcion: "Elefante de peluche GRIS, ojos bordados, tamaño 25cm."
  },
 
  {
    id: "1043-40",
    nombre: "Panda Vestido 40cm",
    precio: 59000,
    imagen: "imagenes/1043-40.jpeg",
    descripcion: "Panda de peluche vestido, tamaño 40cm, suave y adorable."
  },
  {
    id: "2301-40",
    nombre: "Panda Overol 40cm",
    precio: 59000,
    imagen: "imagenes/2301-40.jpeg",
    descripcion: "Panda de peluche con overol, tamaño 40cm, divertido y tierno."
  },
    /*{
  id: "JE-59-GRIS",
  nombre: "Animalito que respira (No incluye pilas) 26cm GRIS",
  precio: 65000,
  imagen: "imagenes/JE-59-1.jpeg",
  descripcion: "Peluche animalito que respira color gris de 26cm (no incluye pilas). Realista, suave y reconfortante para niños y adultos. Material: Felpa antialérgica. Función: Respira (pila no incluida)."
},
{
  id: "JE-59-AZUL",
  nombre: "Animalito que respira (No incluye pilas) 26cm AZUL",
  precio: 65000,
  imagen: "imagenes/JE-59-4.jpeg",
  descripcion: "Peluche animalito que respira color azul de 26cm (no incluye pilas). Suave, tierno y perfecto como compañía para niños pequeños. Material: Felpa antialérgica. Función: Respira (pila no incluida)."
},
{
  id: "JE-59-MARRON",
  nombre: "Animalito que respira (No incluye pilas) 26cm MARRON",
  precio: 65000,
  imagen: "imagenes/JE-59-3.jpeg",
  descripcion: "Peluche animalito que respira color marrón de 26cm (no incluye pilas). Especial para reconfortar y acompañar en la hora de dormir. Material: Felpa antialérgica. Función: Respira (pila no incluida)."
},
{
  id: "JE-59-CAFE",
  nombre: "Animalito que respira (No incluye pilas) 26cm CAFE",
  precio: 65000,
  imagen: "imagenes/JE-59-2.jpeg",
  descripcion: "Peluche animalito que respira color café de 26cm (no incluye pilas). Realista, suave y adorable para acompañar a los más pequeños. Material: Felpa antialérgica. Función: Respira (pila no incluida)."
},*/
{
  id: "2587",
  nombre: "Vaca con Bolso 40cm",
  precio: 46000,
  imagen: "imagenes/2587.jpeg",
  descripcion: "Peluche de vaca con bolso, de gran tamaño y detalles encantadores. Ideal para abrazar, decorar o regalar en ocasiones especiales. Material: Felpa antialérgica. Tamaño: 40 cm."
},
{
  id: "2332-40",
  nombre: "Panda Camisa Roja 45cm",
  precio: 61000,
  imagen: "imagenes/2332-40.jpeg",
  descripcion: "Peluche de panda con camisa roja, adorable y esponjoso. Un detalle especial para decorar o regalar a los amantes de los pandas. Material: Felpa antialérgica. Tamaño: 45 cm."
},
{
  id: "HUO-30-ROSA",
  nombre: "Dino Huevo 33cm Rosa",
  precio: 63000,
  imagen: "imagenes/HUO-30-2.jpeg",
  descripcion: "Peluche de dinosaurio saliendo del huevo, en color rosa. Original y divertido, ideal para regalar a los pequeños amantes de los dinosaurios. Material: Felpa antialérgica. Tamaño: 33 cm."
},
{
  id: "GS282-60",
  nombre: "Mico Buso Grande 60cm",
  precio: 68500,
  imagen: "imagenes/GS282-60.jpeg",
  descripcion: "Peluche de mico (mono) con buso grande, suave y llamativo. Un regalo excelente para sorprender y abrazar. Material: Felpa antialérgica. Tamaño: 60 cm."
},
{
  id: "GS377-40-45CM",
  nombre: "Mono Bolso Banana 45cm",
  precio: 69500,
  imagen: "imagenes/GS377-40 (1).jpeg",
  descripcion: "Peluche de mono con bolso en forma de banana, tamaño mediano. Divertido, suave y perfecto para regalar o decorar. Material: Felpa antialérgica. Tamaño: 45 cm."
},
{
  id: "821-l",
  nombre: "Elefante Luminosa con Cobija 60cm",
  precio: 98000,
  imagen: "imagenes/821-1.jpg",
  descripcion: "Peluche de elefante luminosa, incluye cobija. Brilla en la oscuridad y aporta calidez y ternura a cualquier espacio. Material: Felpa antialérgica. Tamaño: 60 cm."
},
{
  id: "JE-68",
  nombre: "Oso Bufanda Love 75cm",
  precio: 148000,
  imagen: "imagenes/je-68.jpeg",
  descripcion: "Peluche de oso gigante con bufanda 'Love', tierno y espectacular para regalar en ocasiones especiales. Tamaño: 75 cm."
},
{
  id: "JE-73-ROSA",
  nombre: "Oso Gigantísimo 135cm Rosa",
  precio: 416500,
  imagen: "imagenes/Je-73-2.jpeg",
  descripcion: "Peluche de oso gigante en color rosa, el más grande y espectacular de todos. Sorprende con este regalo inolvidable, ideal para ocasiones especiales. Tamaño: 135 cm."
},
{
  id: "BL-389-43-MORADO",
  nombre: "Unicornio Ojitos 40cm MORADO",
  precio: 31500,
  imagen: "imagenes/bl-398-43-1.jpeg",
  descripcion: "Peluche unicornio de 40cm color morado, con ojitos grandes y brillantes. Encantador para decorar habitaciones infantiles."
},
{
  id: "BL-389-43-ROSA",
  nombre: "Unicornio Ojitos 40cm ROSA",
  precio: 31500,
  imagen: "imagenes/bl-398-43-2.jpeg",
  descripcion: "Peluche unicornio de 40cm color rosa, con ojitos grandes y brillantes. Perfecto para regalar o coleccionar."
},
{
  id: "Sur05-30-GANZO",
  nombre: "Peluche elástico mediano GANZO 30cm",
  precio: 32000,
  imagen: "imagenes/sur05-30-9.jpeg",
  descripcion: "Peluche elástico mediano en forma de ganzo, divertido y suave. Ideal para juegos y decoración. Tamaño: 30 cm."
},
{
  id: "Sur05-30-UNICORNIO",
  nombre: "Peluche elástico mediano 30cm UNICORNIO",
  precio: 32000,
  imagen: "imagenes/sur05-30-19.jpeg",
  descripcion: "Peluche elástico mediano de unicornio de 30cm, colorido y suave, perfecto para inspirar la imaginación de los niños."
},
{
  id: "Sur05-30-OJITOS",
  nombre: "Peluche elástico mediano 30cm Cojín OJITOS",
  precio: 32000,
  imagen: "imagenes/sur05-30-8.jpeg",
  descripcion: "Peluche elástico mediano en forma de cojín con ojitos de 30cm. Suave y perfecto para descansar o decorar la cama."
},
{
  id: "BLM-098",
  nombre: "Oso con bordado 55cm",
  precio: 68000,
  imagen: "imagenes/BLM-098.jpeg",
  descripcion: "Oso de peluche con bordado, tamaño grande 55cm. Suave, elegante y especial para regalos importantes o decoración destacada."
},
{
  id: "J192-32-NARANJA",
  nombre: "Leon Despeluque 35cm NARANJA",
  precio: 68500,
  imagen: "imagenes/j192-32-2.jpeg",
  descripcion: "León despelucado naranja de 35cm. Muy divertido, original y de pelo esponjado. Ideal para destacar en tu colección."
},
{
  id: "J192-32-ROSA",
  nombre: "Leon Despeluque 35cm ROSA",
  precio: 68500,
  imagen: "imagenes/j192-32-3 (2).jpeg",
  descripcion: "León despelucado rosa de 35cm. Muy suave, llamativo y con peinado alocado. Perfecto para regalar o decorar el cuarto."
},
{
  id: "J192-32-CAFE",
  nombre: "León Despeluque 35cm CAFE",
  precio: 68500,
  imagen: "imagenes/j192-32-1.jpeg",
  descripcion: "León despelucado café de 35cm. Pelo esponjoso, muy suave y divertido. Perfecto para decorar y regalar."
},
{
  id: "XTIG-50-LEONBLANCO",
  nombre: "Tigre Acostado 50cm LEON BLANCO",
  precio: 76000,
  imagen: "imagenes/xtig-50-1.jpeg",
  descripcion: "Tigre acostado 50cm, versión león blanco. Grande, suave y de detalles realistas. Ideal para destacar en la decoración o para niños grandes."
},
{
  id: "XTIG-50-PUMA",
  nombre: "Tigre Acostado 50cm PUMA",
  precio: 76000,
  imagen: "imagenes/xtig-50-3.jpeg",
  descripcion: "Tigre acostado 50cm versión puma. Suave, grande y de diseño realista, perfecto para coleccionistas y niños grandes."
},
{
  id: "2204-049",
  nombre: "Panda Lentejuelas 40cm",
  precio: 78500,
  imagen: "imagenes/2204-049.jpeg",
  descripcion: "Panda de felpa con lentejuelas de 40cm. Brillante, sofisticado y muy tierno. Perfecto para regalos llamativos o colecciones especiales."
},
{
  id: "Ap3-6206",
  nombre: "Cocodrilo 60cm Con Cobija 160cm*90",
  precio: 82500,
  imagen: "imagenes/ap3-6206.jpeg",
  descripcion: "Cocodrilo de peluche 60cm que incluye cobija de 160cm x 90cm. Práctico, divertido y útil para niños o adultos friolentos."
},
{
  id: "JPE02-40-CAFEOSCURO",
  nombre: "Osos mediano diseños CAFE OSCURO 55cm",
  precio: 86500,
  imagen: "imagenes/jpe02-60-2 (1).jpeg",
  descripcion: "Oso mediano de 55cm, diseño café oscuro. Suave, esponjoso y de gran tamaño, ideal para regalos y decoración especial."
},
{
  id: "JPE02-40-CAFECLARO",
  nombre: "Osos mediano diseños 55cm CAFE CLARO",
  precio: 86500,
  imagen: "imagenes/jpe02-60-1.jpeg",
  descripcion: "Oso mediano de 55cm, diseño café claro. Muy suave y grande, perfecto para regalar en ocasiones importantes."
},
{
  id: "cj-3179",
  nombre: "King Kong Gigante 60cm",
  precio: 89500,
  imagen: "imagenes/cj-3179.jpeg",
  descripcion: "Peluche King Kong gigante de 60cm. Impactante, divertido y para los que aman los animales icónicos de gran tamaño."
},
{
  id: "BLM-099",
  nombre: "Oso con Moño Grande 100cm",
  precio: 261000,
  imagen: "imagenes/BLM-099.jpeg",
  descripcion: "Oso gigante de 1 metro con moño grande, el regalo perfecto para ocasiones inolvidables y decoración impactante."
},
{
  id: "BLL-016",
  nombre: "Oso con Corazon Grande 110cm",
  precio: 261000,
  imagen: "imagenes/BLL-016.jpeg",
  descripcion: "Oso gigante con corazón de 110cm. Muy suave, tierno y perfecto para sorprender en fechas especiales como aniversarios y San Valentín."
},
{
  id: "2967-CAFE",
  nombre: "Oso Carmel con Flor 100cm CAFE",
  precio: 261000,
  imagen: "imagenes/2967-2.jpeg",
  descripcion: "Oso carmel gigante de 1 metro, color café, con flor. Un detalle romántico, grande y memorable para regalar."
},
{
  id: "2967-BLANCO",
  nombre: "Oso Carmel con Flor 100cm BLANCO",
  precio: 261000,
  imagen: "imagenes/2967.jpeg",
  descripcion: "Oso carmel gigante de 1 metro, color blanco, con flor. Tierno, elegante y perfecto para sorprender a lo grande."
},
{
  id: "BL22-01",
  nombre: "Oso con Bufanda grande 120cm",
  precio: 272000,
  imagen: "imagenes/bl22-01.jpeg",
  descripcion: "Oso gigante de 120cm con bufanda. Súper suave, abrigador y perfecto para ser el centro de atención en cualquier regalo o celebración especial."
},
{
  id: "2535",
  nombre: "Oso moño Sonriente grande 110cm",
  precio: 272000,
  imagen: "imagenes/2535.jpeg",
  descripcion: "Oso gigante de 110cm con moño y sonrisa. Ideal para regalar, sorprender y llenar de alegría cualquier ambiente."
}
  
];

const personajes = [ 
  {
    id: "226-pikachu",
    nombre: "Llavero Pikachu 9×9 cms",
    precio: 11000,
    imagen: "imagenes/personajes/llavero-pikachu.jpg",
    descripcionCorta: "Llavero peluche de Pikachu en tamaño compacto de 9x9 cm. Ideal para fans de Pokémon.",
    categoria: "personajes"
  },
  {
    id: "97-8-tom",
    nombre: "Llavero TOM 7.3 cm",
    precio: 12000,
    imagen: "imagenes/personajes/llavero-tom.jpg",
    descripcionCorta: "Llavero peluche de Tom, el popular gato de caricaturas. Tamaño de 7.3 cm.",
    categoria: "personajes"
  },
  {
    id: "97-8-jerry",
    nombre: "Llavero JERRY 7.3 cm",
    precio: 12000,
    imagen: "imagenes/personajes/llavero-jerry.jpg",
    descripcionCorta: "Llavero peluche de Jerry, el ratón travieso de las caricaturas. Tamaño 7.3 cm.",
    categoria: "personajes"
  },
  {
    id: "5606-8.3-spiderman",
    nombre: "Llavero Superhéroes SPIDERMAN 10 cms",
    precio: 12500,
    imagen: "imagenes/personajes/llavero-spiderman.jpg",
    descripcionCorta: "Llavero peluche de Spiderman, el héroe arácnido favorito. Tamaño 10 cm.",
    categoria: "personajes"
  },
  {
    id: "5606-8.3-capitan",
    nombre: "Llavero Superhéroes CAPITAN AMERICA 10 cms",
    precio: 12500,
    imagen: "imagenes/personajes/llavero-capitan-america.jpg",
    descripcionCorta: "Llavero peluche de Capitán América. Lleva el escudo de la justicia contigo.",
    categoria: "personajes"
  },
 
  {
    id: "5606-8.3-batman",
    nombre: "Llavero Superhéroes BATMAN 10 cms",
    precio: 12500,
    imagen: "imagenes/personajes/llavero-batman.jpg",
    descripcionCorta: "Llavero peluche de Batman, el caballero oscuro. Un toque de héroe para tus llaves o mochila.",
    categoria: "personajes"
  },
  {
    id: "5606-8.3-hulk",
    nombre: "Llavero Superhéroes HULK 10 cms",
    precio: 12500,
    imagen: "imagenes/personajes/llavero-hulk.jpg",
    descripcionCorta: "Llavero peluche de Hulk, ¡fuerza en tamaño mini! Ideal para fans de Marvel.",
    categoria: "personajes"
  },
  {
    id: "lla-papy-conejo",
    nombre: "Llavero Circo Digital CONEJO 7.7 cm",
    precio: 13000,
    imagen: "imagenes/personajes/llavero-circo-conejo.jpg",
    descripcionCorta: "Llavero peluche de conejo del Circo Digital, compacto y tierno para llaves y mochilas.",
    categoria: "personajes"
  },
  {
    id: "lla-papy-payasos",
    nombre: "Llavero Circo Digital PAYASOS 7.7 cm",
    precio: 13000,
    imagen: "imagenes/personajes/llavero-circo-payasos.jpg",
    descripcionCorta: "Llavero peluche de payasos del Circo Digital, añade alegría a tus llaves.",
    categoria: "personajes"
  },
  {
    id: "#0905-8.2",
    nombre: "Raton Ancheta 15 cms",
    precio: 13500,
    imagen: "imagenes/personajes/raton-ancheta.jpg",
    descripcionCorta: "Raton Ancheta de peluche tamaño 15 cm, ideal para regalos o decorar.",
    categoria: "personajes"
  },
  {
    id: "CJ-3900-ironman",
    nombre: "Llavero Super Heroes IRON MAN 13 cm",
    precio: 13500,
    imagen: "imagenes/personajes/llavero-ironman.jpg",
    descripcionCorta: "Llavero peluche de Iron Man, superhéroe favorito de Marvel. Tamaño 13 cm.",
    categoria: "personajes"
  },
  {
    id: "5606-8.3-ironman",
    nombre: "Llavero Superhéroes IRONMAN 10 cm",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-ironman2.jpg",
    descripcionCorta: "Llavero peluche de Iron Man, compacto de 10 cm. Lleva el poder de Tony Stark.",
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-tristeza",
    nombre: "Llaveros Intensamente TRISTEZA",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-tristeza.jpg",
    descripcionCorta: "Llavero peluche de Tristeza, personaje de Intensamente. Ideal para coleccionistas.",
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-alegria",
    nombre: "Llaveros Intensamente ALEGRIA",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-alegria.jpg",
    descripcionCorta: "Llavero peluche de Alegría, personaje de Intensamente. Lleva felicidad contigo.",
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-furia",
    nombre: "Llaveros Intensamente FURIA",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-furia.jpg",
    descripcionCorta: "Llavero peluche de Furia, personaje de Intensamente. Completa tu colección.",
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-ansiedad",
    nombre: "Llaveros Intensamente ANSIEDAD",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-ansiedad.jpg",
    descripcionCorta: "Llavero peluche de Ansiedad, personaje de Intensamente. Agrega emoción a tu llavero.",
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-desagrado",
    nombre: "Llaveros Intensamente DESAGRADO",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-desagrado.jpg",
    descripcionCorta: "Llavero peluche de Desagrado, personaje de Intensamente. ¡Completa tu set!",
    categoria: "personajes"
  },
  {
    id: "JE-57-8.4-miedo",
    nombre: "Llaveros Intensamente MIEDO",
    precio: 14000,
    imagen: "imagenes/personajes/llavero-intensamente-miedo.jpg",
    descripcionCorta: "Llavero peluche de Miedo, personaje de Intensamente. Expresa tu emoción favorita.",
    categoria: "personajes"
  },
  {
    id: "JE-30-9-mike",
    nombre: "Llavero Mike Wazowski 9 cm",
    precio: 15000,
    imagen: "imagenes/personajes/llavero-mike.jpg",
    descripcionCorta: "Llavero peluche de Mike Wazowski, el simpático monstruo verde. Ideal para fans de Monsters Inc. y Pixar.",
    categoria: "personajes"
  },
  {
    id: "je-32-9-arenita",
    nombre: "Llavero Bob Esponja ARENITA 9 cm",
    precio: 15000,
    imagen: "imagenes/personajes/llavero-arenita.jpg",
    descripcionCorta: "Llavero peluche de Arenita, la ardilla aventurera de Fondo de Bikini. Adorno divertido para llaves o mochila.",
    categoria: "personajes"
  },
  {
    id: "je-32-9-gary",
    nombre: "Llavero Bob Esponja GARY 9 cm",
    precio: 15000,
    imagen: "imagenes/personajes/llavero-gary.jpg",
    descripcionCorta: "Llavero peluche de Gary, la mascota de Bob Esponja. Perfecto para fans y coleccionistas.",
    categoria: "personajes"
  },
  {
    id: "je-32-9-patricio",
    nombre: "Llavero Bob Esponja PATRICIO 9 cm",
    precio: 15000,
    imagen: "imagenes/personajes/llavero-patricio.jpg",
    descripcionCorta: "Llavero peluche de Patricio, el mejor amigo de Bob Esponja. Súper suave y adorable.",
    categoria: "personajes"
  },
  /*{
    id: "JE-38-9.5-rosa",
    nombre: "Llavero Patrulla Canina Sentada ROSA 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-rosa.jpg",
    descripcionCorta: "Llavero peluche de Patrulla Canina, versión sentada color rosa. Ideal para los más pequeños.",
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-amarillo",
    nombre: "Llavero Patrulla Canina Sentada AMARILLO 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-amarillo.jpg",
    descripcionCorta: "Llavero peluche de Patrulla Canina, versión sentada color amarillo. Perfecto para mochilas y regalos infantiles.",
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-naranja",
    nombre: "Llavero Patrulla Canina Sentada NARANJA 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-naranja.jpg",
    descripcionCorta: "Llavero peluche de Patrulla Canina, versión sentada color naranja. Añade color a tus llaves.",
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-verde",
    nombre: "Llavero Patrulla Canina Sentada VERDE 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-verde.jpg",
    descripcionCorta: "Llavero peluche de Patrulla Canina, versión sentada color verde. Diseño original para niños.",
    categoria: "personajes"
  },
  {
    id: "JE-38-9.5-azul",
    nombre: "Llavero Patrulla Canina Sentada AZUL 22 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-patrulla-azul.jpg",
    descripcionCorta: "Llavero peluche de Patrulla Canina, versión sentada color azul. Tamaño especial para fans.",
    categoria: "personajes"
  },*/
  {
    id: "BOBI-04-9.2-kirby",
    nombre: "Llavero Kirby 10 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-kirby.jpg",
    descripcionCorta: "Llavero peluche de Kirby, personaje rosado de videojuegos. Súper tierno y coleccionable.",
    categoria: "personajes"
  },
  {
    id: "je-32-9-bob",
    nombre: "Llavero Bob Esponja BOB 9 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-bob.jpg",
    descripcionCorta: "Llavero peluche de Bob Esponja, favorito de Fondo de Bikini. Ideal para niños y adultos.",
    categoria: "personajes"
  },
  {
    id: "je-33-9.5-garfield",
    nombre: "Llavero Garfield 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-garfield.jpg",
    descripcionCorta: "Llavero peluche de Garfield, el gato más famoso de las historietas. Perfecto para fans.",
    categoria: "personajes"
  },
  {
    id: "je-36-9.5-kuromi",
    nombre: "Llavero KUROMI 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-kuromi.jpg",
    descripcionCorta: "Llavero peluche de Kuromi, personaje icónico. Ideal para fans de Sanrio y coleccionistas.",
    categoria: "personajes"
  },
  {
    id: "je-37-9.5-gata",
    nombre: "Llavero GATA 9.5 cm",
    precio: 15500,
    imagen: "imagenes/personajes/llavero-gata.jpg",
    descripcionCorta: "Llavero peluche de Gata, diseño dulce y clásico para tus llaves.",
    categoria: "personajes"
  },
  {
    id: "24043-9.5-cinnamaroll",
    nombre: "Llavero Monedero CINNAMAROLL 20 cm",
    precio: 16000,
    imagen: "imagenes/personajes/llavero-cinnamaroll.jpg",
    descripcionCorta: "Llavero monedero de Cinnamaroll de 20 cm. Funcional y adorable.",
    categoria: "personajes"
  },
  {
    id: "8811-20-12.8-hongo-verde",
    nombre: "Hongo de Mario VERDE 25 cm",
    precio: 21500,
    imagen: "imagenes/personajes/hongo-mario-verde.jpg",
    descripcionCorta: "Peluche hongo verde de Mario Bros de 25 cm. Un clásico para coleccionistas.",
    categoria: "personajes"
  },
  {
    id: "jo-144s-12.8-yoshi",
    nombre: "Yoshi pequeño 23 cm",
    precio: 21500,
    imagen: "imagenes/personajes/yoshi.jpg",
    descripcionCorta: "Peluche de Yoshi pequeño de 23 cm, famoso dinosaurio de Nintendo.",
    categoria: "personajes"
  },
  {
    id: "XZ1-25-12.8-ojo-verde",
    nombre: "Ojo Verde pequeño 25 cm",
    precio: 21500,
    imagen: "imagenes/personajes/ojo-verde.jpg",
    descripcionCorta: "Peluche Ojo Verde de 25 cm. Diseño divertido y original.",
    categoria: "personajes"
  },
  /*
{
    id: "AD474-20-14.87-huevito",
    nombre: "Pokémon Huevito 15 cm",
    precio: 23000,
    imagen: "imagenes/personajes/pokemon-huevito.jpg",
    descripcionCorta: "Peluche Pokémon Huevito de 15 cm. Ideal para fans y coleccionistas.",
    categoria: "personajes"
  },
  */
  // {
  //   id: "111910-14.2-unicornio",
  //   nombre: "Unicornio sentado 25 cm",
  //   precio: 24000,
  //   imagen: "imagenes/personajes/unicornio-sentado.jpg",
  //   descripcionCorta: "Peluche unicornio sentado de 25 cm, suave y colorido.",
  //   categoria: "personajes"
  // },
  // {
  //   id: "1880-14.5-raton1",
  //   nombre: "Raton #1 25 cm",
  //   precio: 24500,
  //   imagen: "imagenes/personajes/raton1.jpg",
  //   descripcionCorta: "Peluche de ratón #1 de 25 cm. Diseño clásico para todas las edades.",
  //   categoria: "personajes"
  // },
  {
  id: "433-23-15.9-minions-orejas",
  nombre: "Minions Orejas 2 25 cm",
  precio: 25000,
  imagen: "imagenes/personajes/minions-orejas.jpg",
  descripcionCorta: "Peluche Minions con orejas de 25 cm. ¡Divertido y original para fans y niños!",
  categoria: "personajes"
},
{
  id: "233pm-15.4-minions-guitarra",
  nombre: "Minions guitarra 25 cm",
  precio: 26000,
  imagen: "imagenes/personajes/minions-guitarra.jpg",
  descripcionCorta: "Peluche Minion guitarra de 25 cm. Un personaje en versión musical y divertida.",
  categoria: "personajes"
},
{
  id: "233pm-15.4-minions-oso",
  nombre: "Minions guitarra OSO 25 cm",
  precio: 26000,
  imagen: "imagenes/personajes/minions-oso.jpg",
  descripcionCorta: "Peluche Minion guitarra con oso de 25 cm. Un diseño tierno y original.",
  categoria: "personajes"
},
// {
//   id: "Cj-1455-15.6-carl",
//   nombre: "Viejitos ancheta Carl 20 cm",
//   precio: 26500,
//   imagen: "imagenes/personajes/viejitos-carl.jpg",
//   descripcionCorta: "Peluche Viejitos ancheta Carl de 20 cm, inspirado en personajes entrañables.",
//   categoria: "personajes"
// },
// {
//   id: "Mt03-3-15.9-unicornio-rosa",
//   nombre: "Unicornio Corazon 25cm ROSA",
//   precio: 27000,
//   imagen: "imagenes/personajes/unicornio-corazon-rosa.jpg",
//   descripcionCorta: "Peluche unicornio con corazón, color rosa, de 25cm. Un regalo mágico.",
//   categoria: "personajes"
// },
// {
//   id: "Mt03-3-15.9-unicornio-blanco",
//   nombre: "Unicornio Corazon 25cm BLANCO",
//   precio: 27000,
//   imagen: "imagenes/personajes/unicornio-corazon-blanco.jpg",
//   descripcionCorta: "Peluche unicornio con corazón, color blanco, de 25cm. Perfecto para regalar.",
//   categoria: "personajes"
// },
// {
//   id: "JE-18-16.2-garfieldbebe",
//   nombre: "Garfield Bebe 20cm",
//   precio: 27500,
//   imagen: "imagenes/personajes/garfield-bebe.jpg",
//   descripcionCorta: "Peluche Garfield bebé de 20 cm, ideal para fans del gato más famoso.",
//   categoria: "personajes"
// },
// {
//   id: "22-57-17.9-cojin-mario",
//   nombre: "Cojin cara de MARIO 30x30 cm",
//   precio: 30000,
//   imagen: "imagenes/personajes/cojin-mario.jpg",
//   descripcionCorta: "Cojín de peluche con la cara de Mario Bros, tamaño 30x30 cm. Ideal para gamers.",
//   categoria: "personajes"
// },
// {
//   id: "Sur05-30-18.9-buzz",
//   nombre: "Peluche elástico mediano 30cm BUZZ",
//   precio: 32000,
//   imagen: "imagenes/personajes/buzz.jpg",
//   descripcionCorta: "Peluche elástico de Buzz Lightyear, tamaño mediano de 30cm. ¡Hasta el infinito y más allá!",
//   categoria: "personajes"
// },
// {
//   id: "Sur05-30-18.9-marciano",
//   nombre: "Peluche elástico mediano 30cm MARCIANO",
//   precio: 32000,
//   imagen: "imagenes/personajes/marciano.jpg",
//   descripcionCorta: "Peluche elástico de Marciano, tamaño mediano de 30cm, divertido y suave. Inspirado en Toy Story.",
//   categoria: "personajes"
// },
// {
//   id: "JE-03-20.2-circo-conejo",
//   nombre: "Circo Digital 28cm CONEJO",
//   precio: 34000,
//   imagen: "imagenes/personajes/circo-conejo.jpg",
//   descripcionCorta: "Peluche conejo del Circo Digital, tamaño 28 cm. Un personaje tierno.",
//   categoria: "personajes"
// },
// {
//   id: "JE-03-20.2-circo-payasos",
//   nombre: "Circo Digital 28cm PAYASO",
//   precio: 34000,
//   imagen: "imagenes/personajes/circo-payasos.jpg",
//   descripcionCorta: "Peluche payaso del Circo Digital, tamaño 28 cm. Colores vivos y diseño alegre.",
//   categoria: "personajes"
// },
// {
//   id: "1879-20.8-virgencita-blanca",
//   nombre: "Virgencita 30 cm BLANCA",
//   precio: 35000,
//   imagen: "imagenes/personajes/virgencita-blanca.jpg",
//   descripcionCorta: "Peluche Virgencita color blanco, tamaño 30 cm. Un regalo espiritual y tierno.",
//   categoria: "personajes"
// },
// {
//   id: "1879-20.8-virgencita-azul",
//   nombre: "Virgencita 30 cm AZUL",
//   precio: 35000,
//   imagen: "imagenes/personajes/virgencita-azul.jpg",
//   descripcionCorta: "Peluche Virgencita color azul, tamaño 30 cm. Suave y especial.",
//   categoria: "personajes"
// },
// {
//   id: "Cj-3918-21-sonic-rosa",
//   nombre: "Sonic mediano y amigos 25 cm ROSA",
//   precio: 35500,
//   imagen: "imagenes/personajes/sonic-rosa.jpg",
//   descripcionCorta: "Peluche Sonic mediano y amigos, versión rosa, 25 cm. Ideal para coleccionistas.",
//   categoria: "personajes"
// },
// {
//   id: "je-02-21.5-smiling-rosado",
//   nombre: "Smiling colores 25 cm ROSADO",
//   precio: 36000,
//   imagen: "imagenes/personajes/smiling-rosado.jpg",
//   descripcionCorta: "Peluche Smiling color rosado de 25 cm, diseño alegre y suave.",
//   categoria: "personajes"
// },
// {
//   id: "je-02-21.5-smiling-amarillo",
//   nombre: "Smiling colores 25 cm AMARILLO",
//   precio: 36000,
//   imagen: "imagenes/personajes/smiling-amarillo.jpg",
//   descripcionCorta: "Peluche Smiling color amarillo de 25 cm, brilla con alegría.",
//   categoria: "personajes"
// },
// {
//   id: "10-11-21.5-sullivan",
//   nombre: "Sullivan Camisa 30 cm",
//   precio: 36000,
//   imagen: "imagenes/personajes/sullivan.jpg",
//   descripcionCorta: "Peluche Sullivan con camisa, tamaño 30 cm. Inspirado en Monsters Inc.",
//   categoria: "personajes"
// },
// {
//   id: "JE-49-22.5-babyyoda",
//   nombre: "Baby Yoda 35 cm",
//   precio: 38000,
//   imagen: "imagenes/personajes/babyyoda.jpg",
//   descripcionCorta: "Peluche Baby Yoda de 35 cm, tierno y adorable. Fans de Star Wars.",
//   categoria: "personajes"
// },
// {
//   id: "1881-22.9-raton2",
//   nombre: "Raton #2 30 cm",
//   precio: 38500,
//   imagen: "imagenes/personajes/raton2.jpg",
//   descripcionCorta: "Peluche Raton #2 de 30 cm, para niños o decorar su espacio favorito.",
//   categoria: "personajes"
// },
{
  id: "1934-25.9-kuromi-grande",
  nombre: "Kuromi 20 cm",
  precio: 44000,
  imagen: "imagenes/personajes/kuromi-grande.jpg",
  descripcionCorta: "Peluche Kuromi de 20 cm, la traviesa amiga de My Melody. Fans de Sanrio.",
  categoria: "personajes"
},
// {
//   id: "1864-26.9-bob33",
//   nombre: "Bob Esponja 33 cm",
//   precio: 45500,
//   imagen: "imagenes/personajes/bob33.jpg",
//   descripcionCorta: "Peluche Bob Esponja de 33 cm, el personaje más divertido de Fondo de Bikini. Abrazable y suave.",
//   categoria: "personajes"
// },
// {
//   id: "2019p-26.9-mascota-nacional",
//   nombre: "Mascota Nacional 30 cm",
//   precio: 45500,
//   imagen: "imagenes/personajes/mascota-nacional.jpg",
//   descripcionCorta: "Peluche Mascota Nacional de 30 cm, símbolo de alegría y unión. Perfecto para regalar a cualquier edad.",
//   categoria: "personajes"
// },
// {
//   id: "1864-26.9-patricio33",
//   nombre: "Patricio 33 cm",
//   precio: 45500,
//   imagen: "imagenes/personajes/patricio33.jpg",
//   descripcionCorta: "Peluche Patricio estrella de mar, amigo de Bob Esponja, tamaño 33 cm. Suave y divertido para todos.",
//   categoria: "personajes"
// },
// {
//   id: "JE-56-28-zootopia-zorro",
//   nombre: "Zootopia 35cm ZORRO",
//   precio: 47000,
//   imagen: "imagenes/personajes/zootopia-zorro.jpg",
//   descripcionCorta: "Peluche Zorro de Zootopia, tamaño 35 cm. Ideal para aventuras y juegos imaginativos.",
//   categoria: "personajes"
// },
// {
//   id: "JE-56-28-zootopia-conejo",
//   nombre: "Zootopia 35cm CONEJO",
//   precio: 47000,
//   imagen: "imagenes/personajes/zootopia-conejo.jpg",
//   descripcionCorta: "Peluche Conejo de Zootopia, tamaño 35 cm. Suave, tierno y con detalles de gran calidad.",
//   categoria: "personajes"
// },
// {
//   id: "xh-35-29.5-ratones-rosa",
//   nombre: "Ratones pijama 35cm ROSA",
//   precio: 50000,
//   imagen: "imagenes/personajes/ratones-pijama-rosa.jpg",
//   descripcionCorta: "Peluche ratón con pijama color rosa, tamaño 35 cm. Detalles adorables y perfecto para dormir acompañado.",
//   categoria: "personajes"
// },
// {
//   id: "1839-31.9-viejita-mediana",
//   nombre: "Viejita Cuerpo entero Mediana 28 cms",
//   precio: 54000,
//   imagen: "imagenes/personajes/viejita-mediana.jpg",
//   descripcionCorta: "Peluche Viejita cuerpo entero, tamaño mediana de 28 cm. Un personaje dulce y especial para regalar.",
//   categoria: "personajes"
// },
// {
//   id: "1940-31.9-luigi",
//   nombre: "Personajes LUIGI 30 Cms",
//   precio: 54000,
//   imagen: "imagenes/personajes/luigi.jpg",
//   descripcionCorta: "Peluche Luigi de 30 cm, el inseparable hermano de Mario Bros. Un clásico para gamers y coleccionistas.",
//   categoria: "personajes"
// },
// {
//   id: "1940-31.9-peach",
//   nombre: "Personajes PRINCESA PEACH 30 Cms",
//   precio: 54000,
//   imagen: "imagenes/personajes/peach.jpg",
//   descripcionCorta: "Peluche Princesa Peach de 30 cm, la princesa favorita de los videojuegos. Suave y elegante.",
//   categoria: "personajes"
// },
// {
//   id: "1940-31.9-toad",
//   nombre: "Personajes TOAD 30 Cms",
//   precio: 54000,
//   imagen: "imagenes/personajes/toad.jpg",
//   descripcionCorta: "Peluche Toad de 30 cm, el amigo fiel de Mario y Luigi. Ideal para decorar o jugar.",
//   categoria: "personajes"
// },
// {
//   id: "1882-32.5-raton3",
//   nombre: "Raton #3 40 cm",
//   precio: 55000,
//   imagen: "imagenes/personajes/raton3.jpg",
//   descripcionCorta: "Peluche Raton #3 de 40 cm, tamaño grande y suave. Ideal para abrazar y acompañar en el descanso.",
//   categoria: "personajes"
// },
{
  id: "JE-25-34.9-stitch-panda",
  nombre: "Stitch disfraz panda 35cm",
  precio: 59000,
  imagen: "imagenes/personajes/stitch-panda.jpg",
  descripcionCorta: "Peluche Stitch disfrazado de panda, tamaño 35 cm. Diseño adorable y divertido para fans de Disney.",
  categoria: "personajes"
},
// {
//   id: "1964-39.9-envidia",
//   nombre: "Personajes Intensamente ENVIDIA 30 cm",
//   precio: 62500,
//   imagen: "imagenes/personajes/envidia.jpg",
//   descripcionCorta: "Peluche Envidia de Intensamente, tamaño 30 cm. Completa tu colección de emociones.",
//   categoria: "personajes"
// },
// {
//   id: "1840-37.9-viejito-mediano",
//   nombre: "Viejito Cuerpo entero Mediano 30 cm",
//   precio: 64000,
//   imagen: "imagenes/personajes/viejito-mediano.jpg",
//   descripcionCorta: "Peluche Viejito cuerpo entero mediano, tamaño 30 cm. Un personaje simpático y entrañable.",
//   categoria: "personajes"
// },
{
  id: "1980-39.8-lilo-stitch",
  nombre: "Lilo Y Stitch 40cm",
  precio: 67500,
  imagen: "imagenes/personajes/lilo-stitch.jpg",
  descripcionCorta: "Peluche Lilo y Stitch juntos, tamaño 40 cm. Un dúo inseparable para los fans de Disney.",
  categoria: "personajes"
},
// {
//   id: "1974-42.5-kuromi-grande",
//   nombre: "Kuromi Grande 40cm",
//   precio: 70500,
//   imagen: "imagenes/personajes/kuromi-grande2.jpg",
//   descripcionCorta: "Peluche Kuromi grande de 40 cm, edición especial para fans de Sanrio.",
//   categoria: "personajes"
// },
// {
//   id: "50PU-46.0-unicornio-estrellas",
//   nombre: "Unicornio Estrellas Bordado 45cm",
//   precio: 70500,
//   imagen: "imagenes/personajes/unicornio-estrellas.jpg",
//   descripcionCorta: "Peluche unicornio estrellas de 45 cm, bordado y brillante. Un regalo mágico para cualquier edad.",
//   categoria: "personajes"
// },
/*{
  id: "MT-111-44.5-stitch-sonriente",
  nombre: "Stitch Sonriente 40cm",
  precio: 75500,
  imagen: "imagenes/personajes/stitch-sonriente.jpg",
  descripcionCorta: "Peluche Stitch sonriente de 40 cm. Perfecto para abrazar y sonreír junto a él.",
  categoria: "personajes"
},*/
// {
//   id: "JE-16-45.0-gata-fresa",
//   nombre: "Gata con fresa 30cm",
//   precio: 76500,
//   imagen: "imagenes/personajes/gata-fresa.jpg",
//   descripcionCorta: "Peluche gata con fresa, tamaño 30 cm. Diseño original y tierno.",
//   categoria: "personajes"
// },
// {
//   id: "1883-51.4-raton4",
//   nombre: "Raton #4 50 cm",
//   precio: 87000,
//   imagen: "imagenes/personajes/raton4.jpg",
//   descripcionCorta: "Peluche Raton #4 tamaño gigante de 50 cm. Súper suave y abrazable.",
//   categoria: "personajes"
// },
{
  id: "2502-53.9-stitch-audifonos",
  nombre: "Stitch con audifonos 40cm",
  precio: 91000,
  imagen: "imagenes/personajes/stitch-audifonos.jpg",
  descripcionCorta: "Peluche Stitch con audífonos, tamaño 40 cm. Para los fans de la música.",
  categoria: "personajes"
},
// {
//   id: "1837-66.5-viejita-grande",
//   nombre: "Viejita cuerpo entero Grande 50 cms",
//   precio: 113500,
//   imagen: "imagenes/personajes/viejita-grande.jpg",
//   descripcionCorta: "Peluche Viejita cuerpo entero tamaño grande de 50 cm. Ideal para decorar o regalar.",
//   categoria: "personajes"
// },
// {
//   id: "1838-77.5-viejito-grande",
//   nombre: "Viejito Cuerpo entero Grande 50 cms v",
//   precio: 131500,
//   imagen: "imagenes/personajes/viejito-grande.jpg",
//   descripcionCorta: "Peluche Viejito cuerpo entero tamaño grande de 50 cm. Perfecto para acompañar o decorar.",
//   categoria: "personajes"
// },
// {
//   id: "1884-82.9-raton5",
//   nombre: "Ratón #5 95 cms",
//   precio: 140500,
//   imagen: "imagenes/personajes/raton5.jpg",
//   descripcionCorta: "Peluche Ratón #5 tamaño extra grande de 95 cm. El peluche más grande y abrazable.",
//   categoria: "personajes"
// },
// {
//   id: "1878-122-ratona-extra",
//   nombre: "Ratona Extra Gigante #6 120 Cms",
//   precio: 207500,
//   imagen: "imagenes/personajes/ratona-extra.jpg",
//   descripcionCorta: "Peluche Ratona Extra Gigante #6 de 120 cm. Un peluche espectacular para abrazos gigantes.",
//   categoria: "personajes"
// }

  ];

const variedades = [
  {
    id: "srb-135-lata-carino-17",
    nombre: "SRB| 13.5 Simpson Roll Lata CON CARIÑO 17 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-lata-carino-17.jpg",
    descripcionCorta: "Simpson Roll presentado en lata con el mensaje 'CON CARIÑO'. Tamaño: 17 cm. Ideal para regalar y sorprender.",
    categoria: "variedades"
  },
  {
    id: "srb-135-lata-felizdia-17",
    nombre: "SRB| 13.5 Simpson Roll Lata FELIZ DIA 17 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-lata-felizdia-17.jpg",
    descripcionCorta: "Simpson Roll en lata con el mensaje 'FELIZ DIA'. Tamaño de 17 cm. Un detalle especial para ocasiones felices.",
    categoria: "variedades"
  },
  {
    id: "srb-135-botella-parati-24",
    nombre: "SRB| 13.5 Simpson Roll Botella PARA TI 24 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-botella-parati-24.jpg",
    descripcionCorta: "Simpson Roll en botella con el mensaje 'PARA TI'. Tamaño: 24 cm. Perfecto para regalos personalizados.",
    categoria: "variedades"
  },
  {
    id: "srb-135-lata-felicidades-17",
    nombre: "SRB| 13.5 Simpson Roll Lata FELICIDADES EN TU DIA 17 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-lata-felicidadesentu-17.jpg",
    descripcionCorta: "Simpson Roll en lata con el mensaje 'FELICIDADES EN TU DIA'. Tamaño: 17 cm. Un regalo ideal para celebrar.",
    categoria: "variedades"
  },
  {
    id: "srb-135-lata-parati-felizdia-17",
    nombre: "SRB| 13.5 Simpson Roll Lata PARA TI FELIZ DIA 17 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-lata-paratifelizdia-17.jpg",
    descripcionCorta: "Simpson Roll en lata con mensaje 'PARA TI FELIZ DIA'. Tamaño: 17 cm. Un detalle único.",
    categoria: "variedades"
  },
  {
    id: "srb-135-botella-felicidades-24",
    nombre: "SRB| 13.5 Simpson Roll Botella FELICIDADES 24 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-botella-felicidades-24.jpg",
    descripcionCorta: "Simpson Roll en botella con el mensaje 'FELICIDADES'. Tamaño: 24 cm. Perfecto para celebraciones.",
    categoria: "variedades"
  },
  {
    id: "srb-135-botella-milfelicidades-24",
    nombre: "SRB| 13.5 Simpson Roll Botella MIL FELICIDADES 24 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-botella-milfelicidades-24.jpg",
    descripcionCorta: "Simpson Roll en botella con el mensaje 'MIL FELICIDADES'. Tamaño: 24 cm. Regalo ideal para felicitar.",
    categoria: "variedades"
  },
  {
    id: "srb-135-botella-entudia-24",
    nombre: "SRB| 13.5 Simpson Roll Botella EN TU DIA 24 cm",
    precio: 22500,
    imagen: "imagenes/variedades/srb-135-botella-entudia-24.jpg",
    descripcionCorta: "Simpson Roll en botella con el mensaje 'EN TU DIA'. Tamaño: 24 cm. Perfecto para cualquier celebración.",
    categoria: "variedades"
  },
  {
    id: "bsb-89-beer-homero-29",
    nombre: "BSB|8.9 Cerveza beer simpsons HOMERO FELIZ DIA 7.5x7x29 cms",
    precio: 15000,
    imagen: "imagenes/variedades/bsb-89-beer-homero-29.jpg",
    descripcionCorta: "Cerveza de peluche estilo Simpsons, personaje Homero con mensaje 'FELIZ DIA'. Tamaño: 7.5x7x29 cm.",
    categoria: "variedades"
  },
  {
    id: "bsb-89-beer-duffman-29",
    nombre: "BSB|8.9 Cerveza beer simpsons DUFFMAN ESPECIAMENTE PARA TI 7.5x7x29 cms",
    precio: 15000,
    imagen: "imagenes/variedades/bsb-89-beer-duffman-29.jpg",
    descripcionCorta: "Cerveza de peluche estilo Simpsons, personaje DuffMan con mensaje 'ESPECIAMENTE PARA TI'. Tamaño: 7.5x7x29 cm.",
    categoria: "variedades"
  },
  {
    id: "bsb-88-beer-bart-29",
    nombre: "BSB|8.8 Cerveza beer simpsons BART: FELIZ CUMPLE 7.5x7x29 cms",
    precio: 14500,
    imagen: "imagenes/variedades/bsb-88-beer-bart-29.jpg",
    descripcionCorta: "Cerveza de peluche estilo Simpsons, personaje Bart con mensaje 'FELIZ CUMPLE'. Tamaño: 7.5x7x29 cm.",
    categoria: "variedades"
  },
  {
    id: "bsb-88-beer-nelson-29",
    nombre: "BSB|8.8 Cerveza beer simpsons NELSON: CON CARIÑO PARA TI 7.5x7x29 cms",
    precio: 14500,
    imagen: "imagenes/variedades/bsb-88-beer-nelson-29.jpg",
    descripcionCorta: "Cerveza de peluche estilo Simpsons, personaje Nelson con mensaje 'CON CARIÑO PARA TI'. Tamaño: 7.5x7x29 cm.",
    categoria: "variedades"
  },
  {
    id: "5161-32-splash-vct-60ml",
    nombre: "5161| 3.2 Splash 60ml Vct",
    precio: 5500,
    imagen: "imagenes/5161-1536x1536.jpeg",
    descripcionCorta: "Splash Vct de 60ml, ideal para refrescarte en cualquier momento. Presentación pequeña y práctica.",
    categoria: "variedades"
  },
  {
    id: "1278-87-splash-vct-250ml-dorada",
    nombre: "1278|8.7 Splash Vct tapa dorada 250ml SURTIDO",
    precio: 14500,
    imagen: "imagenes/tapa-dorada-.jpg",
    descripcionCorta: "Splash Vct de 250ml con tapa dorada. Fragancias surtidas para todos los gustos.",
    categoria: "variedades"
  },
  {
    id: "1819-47-splash-vct-125ml",
    nombre: "1819|4.7 Splash Vct 125ml SURTIDO",
    precio: 7500,
    imagen: "imagenes/splash-250.jpg",
    descripcionCorta: "Splash Vct de 125ml, fragancias surtidas. Una excelente opción para el día a día.",
    categoria: "variedades"
  },
  {
    id: "1317-79-splash-pk-250ml",
    nombre: "1317|7.9 Splash Pk 250ml SURTIDO",
    precio: 13000,
    imagen: "imagenes/pink-250.jpg",
    descripcionCorta: "Splash Pk de 250ml, fragancias surtidas. Disfruta de aromas frescos y duraderos.",
    categoria: "variedades"
  },
  {
    id: "1186-47-splash-mini-pk-75ml",
    nombre: "1186|4.7 Splash mini Pk 75ml SURTIDO",
    precio: 7500,
    imagen: "imagenes/mini-pink-75.jpg",
    descripcionCorta: "Splash mini Pk de 75ml, fragancias surtidas. Práctico para llevar en el bolso o mochila.",
    categoria: "variedades"
  }
];

// ---- Renderizado por sección ----
function renderProductos(lista, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = "";
    // Filtra productos válidos: deben tener nombre, imagen y precio
    const productosValidos = lista.filter(
        p => p && p.nombre && p.imagen && typeof p.precio !== "undefined"
    );
    if (!productosValidos.length) {
        grid.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }
    productosValidos.forEach(producto => {
        grid.innerHTML += `
        <div class="producto-card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio.toLocaleString('es-CO')}</p>
            <a href="detalle-producto.html?id=${producto.id}" class="btn-secondary">Ver Detalles</a>
            <button class="btn-cart"
                data-id="${producto.id}"
                data-nombre="${producto.nombre}"
                data-precio="${producto.precio}"
                data-imagen="${producto.imagen}"
                title="Añadir al carrito">
                <img src="assets/icons/cart.svg" alt="Añadir al carrito">
            </button>
        </div>
        `;
    });
  const seccion = grid.closest('.seccion-productos');
    if (seccion) {
        seccion.style.display = productosValidos.length > 0 ? "" : "none";
    }
}

// ---- Carrito ----
document.addEventListener("click", function(e) {
    const btn = e.target.closest(".btn-cart");
    if (btn) {
        const id = btn.getAttribute("data-id");
        const nombre = btn.getAttribute("data-nombre");
        const precio = parseInt(btn.getAttribute("data-precio"));
        const imagen = btn.getAttribute("data-imagen");
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const item = carrito.find(p => p.id === id);
        if (item) {
            item.cantidad += 1;
        } else {
            carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        // Actualiza el contador visual (total unidades en el carrito)
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let totalUnidades = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);
            cartCount.textContent = totalUnidades;
        }
        alert('Producto añadido al carrito');
    }
});

// ---- Buscador Global ----
const inputBusqueda = document.getElementById('busqueda-productos');
const formBusqueda = document.querySelector('.search-form');

// Si no existe alguna sección, que sea array vacío
const personajesArray = typeof personajes !== "undefined" ? personajes : [];
const peluchesArray = typeof peluches !== "undefined" ? peluches : [];
const variedadesArray = typeof variedades !== "undefined" ? variedades : [];

// --- Filtrar productos ocultos (eliminados desde el panel admin localmente) ---
let productosOcultos = JSON.parse(localStorage.getItem("productosOcultos")) || [];

function filtraOcultos(arr) {
    return arr.filter(p => !productosOcultos.includes(p.id));
}

// Función para renderizar y filtrar según la categoría
function inicializarVista(personajesArr, peluchesArr, variedadesArr) {
    // Actualiza contador carrito al cargar
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        let totalUnidades = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);
        cartCount.textContent = totalUnidades;
    }

    // Mostrar por categoría
    const cat = getCategoriaURL();

    if (cat === "personajes") {
        renderProductos(personajesArr, "grid-personajes");
        document.getElementById("seccion-personajes").style.display = "";
        document.getElementById("seccion-peluches").style.display = "none";
        document.getElementById("seccion-variedades").style.display = "none";
        document.getElementById("seccion-personajes").scrollIntoView({behavior: "smooth"});
    } else if (cat === "peluches") {
        renderProductos(peluchesArr, "grid-peluches");
        document.getElementById("seccion-personajes").style.display = "none";
        document.getElementById("seccion-peluches").style.display = "";
        document.getElementById("seccion-variedades").style.display = "none";
        document.getElementById("seccion-peluches").scrollIntoView({behavior: "smooth"});
    } else if (cat === "variedades") {
        renderProductos(variedadesArr, "grid-variedades");
        document.getElementById("seccion-personajes").style.display = "none";
        document.getElementById("seccion-peluches").style.display = "none";
        document.getElementById("seccion-variedades").style.display = "";
        document.getElementById("seccion-variedades").scrollIntoView({behavior: "smooth"});
    } else {
        document.getElementById("seccion-personajes").style.display = "";
        document.getElementById("seccion-peluches").style.display = "";
        document.getElementById("seccion-variedades").style.display = "";
        renderProductos(personajesArr, "grid-personajes");
        renderProductos(peluchesArr, "grid-peluches");
        renderProductos(variedadesArr, "grid-variedades");
    }
}

// ---- Buscador adaptado ----
function filtrarProductos(texto, personajesArr, peluchesArr, variedadesArr) {
    texto = texto.trim().toLowerCase();
    const productosTotales = [
        ...personajesArr,
        ...peluchesArr,
        ...variedadesArr
    ].filter(producto => producto && producto.nombre); // Evita productos vacíos

    const filtrados = productosTotales.filter(producto =>
        producto.nombre.toLowerCase().includes(texto) ||
        (producto.descripcionCorta && producto.descripcionCorta.toLowerCase().includes(texto)) ||
        (producto.descripcion && producto.descripcion.toLowerCase().includes(texto))
    );

    renderProductos(
        filtrados.filter(p => p.__seccion === "personajes"),
        "grid-personajes"
    );
    renderProductos(
        filtrados.filter(p => p.__seccion === "peluches"),
        "grid-peluches"
    );
    renderProductos(
        filtrados.filter(p => p.__seccion === "variedades"),
        "grid-variedades"
    );
}
// ---- Inicializar: MOSTRAR CATEGORÍA O TODO ----
function getCategoriaURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('cat');
}

// ---- CARGAR PRODUCTOS DE FIRESTORE + FIJOS ----
document.addEventListener("DOMContentLoaded", function() {
    // Copias de los arrays para combinar fijos y Firestore
   let personajesArrayFull = filtraOcultos(personajesArray.slice()).map(p => ({...p, __seccion: "personajes"}));
    let peluchesArrayFull = filtraOcultos(peluchesArray.slice()).map(p => ({...p, __seccion: "peluches"}));
    let variedadesArrayFull = filtraOcultos(variedadesArray.slice()).map(p => ({...p, __seccion: "variedades"}));
    // 1. Carga productos Firestore y agrégalos según categoría
    if (typeof db !== "undefined") {
        db.collection("productos").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const p = doc.data();
                // Usa el campo p.id (slug) si existe, si no, usa doc.id (compatibilidad productos viejos)
                const adaptado = {
                    ...p,
                    __seccion: p.categoria,
                    imagen: p.image,
                    nombre: p.name,
                    descripcion: p.detail || "",
                    precio: p.precio || 0,
                    id: p.id ? p.id : doc.id
                };
                if (p.categoria === "personajes") personajesArrayFull.push(adaptado);
                if (p.categoria === "peluches") peluchesArrayFull.push(adaptado);
                if (p.categoria === "variedades") variedadesArrayFull.push(adaptado);
            });

            // Ahora sí, renderiza con todos los productos (fijos + Firestore)
            inicializarVista(personajesArrayFull, peluchesArrayFull, variedadesArrayFull);

            // Buscador global con todos los productos
            if (formBusqueda && inputBusqueda) {
                formBusqueda.addEventListener('submit', function(e) {
                    e.preventDefault();
                    filtrarProductos(inputBusqueda.value, personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
                });
                inputBusqueda.addEventListener('input', function() {
                    filtrarProductos(this.value, personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
                });
            }
        });
    } else {
        // Si no hay db (por algún error), muestra solo los fijos
        inicializarVista(personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
        if (formBusqueda && inputBusqueda) {
            formBusqueda.addEventListener('submit', function(e) {
                e.preventDefault();
                filtrarProductos(inputBusqueda.value, personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
            });
            inputBusqueda.addEventListener('input', function() {
                filtrarProductos(this.value, personajesArrayFull, peluchesArrayFull, variedadesArrayFull);
            });
        }
    }
});
