// Los 25 quesos del Level 1 (Associate) de la Academy of Cheese.
// Lista basada en "Level One: 25 Cheese Profiles" (2020) y en la matriz
// "Level 1 – 25 cheeses by Make / Post-Make class". Compruébalo con las
// fichas oficiales (crib sheets) de la Cheese Library por si hay cambios.
// subMake / subPostMake: sub-clases oficiales del modelo Make/Post-Make.
// subPostMake va en paralelo a postMake; null = aún no comprobada.

const MAKE_CLASSES = {
  "Soft": "Blando: mucha humedad y pasta frágil. Incluye frescos y quesos pensados para madurar más.",
  "Crumbly": "Desmenuzable: cuajada ácida y poco prensada; textura que se rompe en migas. Madura unos meses.",
  "Hard": "Duro: bastante menos humedad, prensado; puede madurar 12 meses o más.",
  "Hard Cooked": "Duro cocido: la cuajada se calienta a alta temperatura para expulsar suero; pasta muy densa y dura."
};

const POST_MAKE_CLASSES = {
  "No Post-Make": "Sin tratamiento posterior relevante: el carácter viene del proceso de elaboración (Make).",
  "External mould/yeast ripened": "Madurado por mohos o levaduras externos: corteza florida (Penicillium candidum), arrugada (Geotrichum) u otros mohos.",
  "Internal (blue) mould": "Moho interno (azul): Penicillium roqueforti; la pasta se pincha para que entre aire.",
  "Washed rind": "Corteza lavada con salmuera o alcohol; favorece bacterias (B. linens) → corteza naranja y aroma intenso.",
  "Flavoured or Smoked": "Aromatizado o ahumado; también incluye otros agentes de maduración como los ácaros (insects).",
  "Wrapped, Rolled or Processed": "Envuelto, enrollado o procesado: tela, cera o plástico, fajas, ceniza, pasta filata, etc."
};

const CHEESES = [
  {
    id: "goats-curd",
    name: "Goats' Curd",
    country: "Reino Unido",
    region: "Evesham, Worcestershire (Cheese Cellar Dairy)",
    milk: "Cabra",
    treatment: "Cruda",
    rennet: "Vegetal",
    status: "Marca (Brand)",
    make: "Soft",
    postMake: ["No Post-Make"],
    subMake: null,
    subPostMake: [null],
    appearance: "Sin corteza; pasta blanca, húmeda, untuosa, tipo mousse.",
    flavour: "Fresco, láctico, limpio, ligeramente ácido y cítrico.",
    facts: [
      "Cuajada láctica (lactic set): coagulación lenta, sobre todo por acidez, con muy poco cuajo.",
      "Es el queso más joven del Level 1: se consume en días.",
      "Ejemplo del punto de partida de la escala Make: queso fresco, sin maduración."
    ]
  },
  {
    id: "mozzarella-di-bufala",
    name: "Mozzarella di Bufala Campana PDO",
    country: "Italia",
    region: "Campania (también zonas de Lazio, Apulia y Molise)",
    milk: "Búfala de agua",
    treatment: "Pasteurizada o cruda (termizada)",
    status: "PDO / DOP (1996)",
    make: "Soft",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: ["Pasta filata"],
    appearance: "Bolas blancas de porcelana, superficie lisa y brillante; se conserva en su líquido.",
    flavour: "Láctico, fresco, ligeramente ácido; textura elástica y jugosa que suelta suero.",
    facts: [
      "Pasta filata: la cuajada se estira en agua caliente y se moldea a mano (mozzare = cortar). En el modelo MPM es su Post-Make (Wrapped, Rolled or Processed).",
      "Formatos: tondo, bocconcini, ciliegine, treccia (trenza)…",
      "Se come muy fresca, en pocos días."
    ]
  },
  {
    id: "feta",
    name: "Feta PDO",
    country: "Grecia",
    region: "Grecia continental y la isla de Lesbos",
    milk: "Oveja (hasta un 30% de cabra)",
    treatment: "Pasteurizada o cruda",
    status: "PDO / DOP (2002)",
    make: "Soft",
    postMake: ["Flavoured or Smoked"],
    subMake: "Predominantly rennet set cheese for further ripening",
    subPostMake: [null],
    appearance: "Bloques blancos sin corteza, con pequeños agujeros irregulares.",
    flavour: "Salado, ácido, cremoso; desmenuzable pero húmedo.",
    facts: [
      "Madura en salmuera un mínimo de 2 meses.",
      "Solo puede llevar leche de oveja o mezcla con cabra (máx. 30%). Nunca vaca.",
      "La palabra feta significa 'loncha' en griego."
    ]
  },
  {
    id: "brie-de-meaux",
    name: "Brie de Meaux PDO",
    country: "Francia",
    region: "Cuenca de París (Seine-et-Marne, Île-de-France)",
    milk: "Vaca",
    treatment: "Cruda",
    status: "PDO / AOP (AOC 1980)",
    make: "Soft",
    postMake: ["External mould/yeast ripened"],
    subMake: null,
    subPostMake: [null],
    appearance: "Disco grande y plano (~36 cm, ~3 kg); corteza blanca aterciopelada con manchas rojizas; pasta paja.",
    flavour: "Champiñón, mantequilla, nuez, notas vegetales; se vuelve más intenso al madurar.",
    facts: [
      "Corteza florida de Penicillium candidum (camemberti).",
      "La cuajada se moldea con una pala perforada: la 'pelle à brie'.",
      "Conocido como 'el rey de los quesos'."
    ]
  },
  {
    id: "camembert-de-normandie",
    name: "Camembert de Normandie PDO",
    country: "Francia",
    region: "Normandía",
    milk: "Vaca (parte de raza Normande)",
    treatment: "Cruda",
    status: "PDO / AOP (AOC 1983)",
    make: "Soft",
    postMake: ["External mould/yeast ripened"],
    subMake: null,
    subPostMake: [null],
    appearance: "Disco pequeño (~11 cm, 250 g) en caja de madera; corteza blanca florida.",
    flavour: "Champiñón, mantequilla, col/ajo cuando está muy maduro.",
    facts: [
      "La cuajada se pone en moldes en 5 capas con cucharón (louche).",
      "Tradición: Marie Harel, 1791.",
      "Corteza de Penicillium candidum; madura un mínimo de 3 semanas."
    ]
  },
  {
    id: "brillat-savarin",
    name: "Brillat-Savarin PGI",
    country: "Francia",
    region: "Borgoña e Île-de-France",
    milk: "Vaca, con nata añadida",
    treatment: "Pasteurizada o cruda",
    status: "PGI / IGP (2017)",
    make: "Soft",
    postMake: ["External mould/yeast ripened"],
    subMake: null,
    subPostMake: [null],
    appearance: "Cilindro alto; corteza blanca florida fina; pasta muy cremosa.",
    flavour: "Mantequilla, nata, ligeramente ácido; muy rico.",
    facts: [
      "Triple crema: leche enriquecida con nata (≥ 75% de grasa sobre extracto seco).",
      "Nombre en honor al gastrónomo Jean Anthelme Brillat-Savarin; creado en los años 30 por Henri Androuët.",
      "Puede venderse fresco (sin corteza) o afinado con corteza florida."
    ]
  },
  {
    id: "crottin-de-chavignol",
    name: "Crottin de Chavignol PDO",
    country: "Francia",
    region: "Valle del Loira (Sancerre, Cher)",
    milk: "Cabra",
    treatment: "Cruda",
    status: "PDO / AOP (AOC 1976)",
    make: "Soft",
    postMake: ["External mould/yeast ripened"],
    subMake: null,
    subPostMake: [null],
    appearance: "Pequeño tambor (~60 g); corteza fina blanca (Geotrichum) que se vuelve azul-gris al madurar.",
    flavour: "Joven: fresco, ácido, avellana. Maduro: más denso, intenso, a cabra.",
    facts: [
      "Cuajada láctica, como la mayoría de quesos de cabra del Loira.",
      "Maridaje clásico: Sancerre (Sauvignon Blanc).",
      "Se vende a distintas edades: jeune, demi-sec, sec, repassé."
    ]
  },
  {
    id: "livarot",
    name: "Livarot PDO",
    country: "Francia",
    region: "Normandía (Pays d'Auge)",
    milk: "Vaca",
    treatment: "Cruda o pasteurizada",
    status: "PDO / AOP (AOC 1975)",
    make: "Soft",
    postMake: ["Washed rind", "Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: ["Unflavoured wash solution", "Natural girdle"],
    appearance: "Disco con corteza naranja (coloreada con achiote/roucou) rodeado de 5 tiras de junco o papel.",
    flavour: "Aroma potente, carnoso, a corral; pasta más suave que su olor.",
    facts: [
      "Apodado 'el Coronel' por sus cinco tiras (como los galones de un coronel).",
      "Las tiras (laîches) sujetaban el queso para que no se hundiera.",
      "Corteza lavada → bacterias tipo Brevibacterium linens."
    ]
  },
  {
    id: "epoisses",
    name: "Époisses PDO",
    country: "Francia",
    region: "Borgoña",
    milk: "Vaca",
    treatment: "Cruda o pasteurizada",
    status: "PDO / AOP (AOC 1991)",
    make: "Soft",
    postMake: ["Washed rind"],
    subMake: null,
    subPostMake: [null],
    appearance: "Disco en caja de madera; corteza naranja-rojiza brillante y pegajosa; pasta fundente.",
    flavour: "Carnoso, salado, intenso; pasta cremosa, casi líquida en el centro.",
    facts: [
      "Se lava con Marc de Bourgogne (aguardiente de orujo).",
      "Casi desaparece tras la 2ª Guerra Mundial; lo recuperó Robert Berthaut en 1956.",
      "Cuajada mayoritariamente láctica."
    ]
  },
  {
    id: "single-gloucester",
    name: "Single Gloucester PDO",
    country: "Reino Unido (Inglaterra)",
    region: "Gloucestershire",
    milk: "Vaca",
    treatment: "Cruda o pasteurizada",
    status: "PDO (1996)",
    make: "Crumbly",
    postMake: ["External mould/yeast ripened"],
    subMake: "Curd from a single day",
    subPostMake: ["Other mould ripened"],
    appearance: "Rueda pequeña con corteza natural; pasta blanca-pálida, abierta.",
    flavour: "Suave, láctico, ligeramente herbáceo y limpio.",
    facts: [
      "Debe llevar, al menos en parte, leche de vacas de raza Old Gloucester.",
      "Tradicionalmente con leche parcialmente desnatada; más joven y ligero que el Double Gloucester.",
      "Era el queso que consumían los propios granjeros."
    ]
  },
  {
    id: "yorkshire-wensleydale",
    name: "Yorkshire Wensleydale PGI",
    country: "Reino Unido (Inglaterra)",
    region: "Wensleydale, North Yorkshire",
    milk: "Vaca",
    treatment: "Cruda o pasteurizada",
    status: "PGI (2013)",
    make: "Crumbly",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: ["Natural (cloth)"],
    appearance: "Pasta blanca, desmenuzable, húmeda.",
    flavour: "Fresco, láctico, ácido, a miel suave; 'flaky'.",
    facts: [
      "Su origen se atribuye a los monjes cistercienses franceses (siglo XII, abadía de Jervaulx).",
      "Se elabora en Hawes (Wensleydale Creamery). Famoso por Wallace & Gromit.",
      "Tradicionalmente se toma con tarta de manzana o fruitcake."
    ]
  },
  {
    id: "cloth-bound-cheshire",
    name: "Cloth-bound Cheshire",
    country: "Reino Unido (Inglaterra)",
    region: "Cheshire y Shropshire",
    milk: "Vaca",
    treatment: "Cruda (p. ej. Appleby's) o pasteurizada",
    status: "Sin protección",
    make: "Crumbly",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: [null],
    appearance: "Cilindro alto envuelto en tela; pasta desmenuzable, a menudo color melocotón (achiote).",
    flavour: "Salado, mineral, ácido, fresco.",
    facts: [
      "Considerado uno de los quesos con nombre más antiguos de Gran Bretaña.",
      "Su carácter salino se atribuye a los depósitos de sal bajo los pastos de Cheshire.",
      "Envuelto en tela (cloth-bound), lo que permite que el queso respire."
    ]
  },
  {
    id: "block-cheddar",
    name: "Block Cheddar",
    country: "Reino Unido (y todo el mundo)",
    region: "Producción industrial",
    milk: "Vaca",
    treatment: "Pasteurizada",
    status: "Sin protección",
    make: "Hard",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: [null],
    appearance: "Bloques rectangulares sin corteza (~20 kg), madurados en plástico/vacío.",
    flavour: "Láctico, dulce, ligeramente ácido; de suave (mild) a muy curado (extra mature).",
    facts: [
      "Proceso de cheddaring: los bloques de cuajada se apilan y voltean para expulsar suero y acidificar.",
      "Sin corteza: madura envasado al vacío en plástico.",
      "Es el queso más consumido del Reino Unido."
    ]
  },
  {
    id: "cloth-bound-cheddar",
    name: "Cloth-bound Cheddar",
    country: "Reino Unido (Inglaterra)",
    region: "Somerset / West Country",
    milk: "Vaca",
    treatment: "A menudo cruda",
    status: "Puede ser West Country Farmhouse Cheddar PDO",
    make: "Hard",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: [null],
    appearance: "Rueda alta envuelta en tela con manteca; corteza natural con mohos; pasta amarilla.",
    flavour: "Complejo: caldo, nueces, terroso, afrutado, persistente.",
    facts: [
      "Cheddaring + molienda (milling) + prensado; madura 12 meses o más.",
      "La tela se unta con manteca (lard) y deja respirar el queso.",
      "Ejemplos: Montgomery's, Keen's, Westcombe (Somerset Artisan Cheddar)."
    ]
  },
  {
    id: "smoked-cheddar",
    name: "Smoked Cheddar",
    country: "Reino Unido",
    region: "Varios",
    milk: "Vaca",
    treatment: "Normalmente pasteurizada",
    status: "Sin protección",
    make: "Hard",
    postMake: ["Flavoured or Smoked", "Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: ["Smoked", "Artificial (plastic/wax coating)"],
    appearance: "Corteza/superficie marrón-dorada del humo; pasta amarilla.",
    flavour: "Ahumado, a madera, combinado con el sabor del cheddar.",
    facts: [
      "Make = Hard (cheddar); el ahumado es el Post-Make.",
      "Ejemplo de que un queso tiene un único Make pero puede tener uno o más Post-Make.",
      "Puede ahumarse en frío con maderas como roble o haya."
    ]
  },
  {
    id: "blue-stilton",
    name: "Blue Stilton PDO",
    country: "Reino Unido (Inglaterra)",
    region: "Derbyshire, Leicestershire y Nottinghamshire",
    milk: "Vaca",
    treatment: "Pasteurizada (obligatorio)",
    status: "PDO (1996)",
    make: "Crumbly",
    postMake: ["Internal (blue) mould"],
    subMake: null,
    subPostMake: [null],
    appearance: "Cilindro alto con corteza natural rugosa; pasta crema con vetas azules radiales.",
    flavour: "Cremoso, mineral, salado, picante; textura mantecosa y desmenuzable.",
    facts: [
      "Solo en 3 condados; debe ser con leche pasteurizada, en forma cilíndrica, sin prensar y con su propia corteza.",
      "Toma el nombre del pueblo de Stilton, donde se vendía, pero allí no se puede hacer.",
      "Se pincha con agujas para que entre aire y crezca Penicillium roqueforti. Ej.: Colston Bassett."
    ]
  },
  {
    id: "gorgonzola",
    name: "Gorgonzola PDO",
    country: "Italia",
    region: "Lombardía y Piamonte",
    milk: "Vaca",
    treatment: "Pasteurizada",
    status: "PDO / DOP (1996)",
    make: "Soft",
    postMake: ["Internal (blue) mould"],
    subMake: null,
    subPostMake: [null],
    appearance: "Pasta blanca-paja con vetas verdeazuladas; envuelto en papel de aluminio.",
    flavour: "Dolce: cremoso, suave, dulce. Piccante: más firme, picante e intenso.",
    facts: [
      "Dos tipos: Dolce y Piccante.",
      "Debe su nombre a la localidad de Gorgonzola, cerca de Milán.",
      "Penicillium roqueforti; se pincha para airear."
    ]
  },
  {
    id: "roquefort",
    name: "Roquefort PDO",
    country: "Francia",
    region: "Aveyron (Roquefort-sur-Soulzon)",
    milk: "Oveja (raza Lacaune)",
    treatment: "Cruda (obligatorio)",
    status: "PDO / AOP (primera AOC francesa, 1925)",
    make: "Soft",
    postMake: ["Internal (blue) mould"],
    subMake: null,
    subPostMake: [null],
    appearance: "Cilindro sin corteza envuelto en papel de aluminio; pasta marfil muy veteada de azul-verde.",
    flavour: "Salado, intenso, picante, mantecoso, con notas dulces de leche de oveja.",
    facts: [
      "Madura en las cuevas naturales del monte Combalou (fleurines = grietas de ventilación).",
      "Fue el primer queso con AOC de Francia (1925).",
      "El Penicillium roqueforti se cultivaba tradicionalmente en pan de centeno."
    ]
  },
  {
    id: "morbier",
    name: "Morbier PDO",
    country: "Francia",
    region: "Franche-Comté (macizo del Jura)",
    milk: "Vaca (Montbéliarde / Simmental francesa)",
    treatment: "Cruda",
    status: "PDO / AOP (AOC 2000)",
    make: "Hard",
    postMake: ["Washed rind", "Wrapped, Rolled or Processed"],
    subMake: "Cheeses which acidify in the mould",
    subPostMake: ["Unflavoured wash solution", "Ash/charcoal"],
    appearance: "Rueda con corteza frotada beige-anaranjada; línea horizontal negra de ceniza vegetal en el centro.",
    flavour: "Suave, lácteo, afrutado, a nuez; aroma de corteza más fuerte que la pasta.",
    facts: [
      "La raya de carbón vegetal separaba antes la cuajada de la mañana y la de la tarde.",
      "La corteza se frota/lava con salmuera.",
      "Pasta flexible y untuosa, con pocos ojos."
    ]
  },
  {
    id: "manchego",
    name: "Manchego PDO",
    country: "España",
    region: "La Mancha (Castilla-La Mancha)",
    milk: "Oveja (raza Manchega)",
    treatment: "Cruda o pasteurizada",
    status: "PDO / DOP (DO 1984)",
    make: "Hard",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: ["Artificial (plastic/wax coating)"],
    appearance: "Corteza con dibujo de pleita (cestería de esparto) y la 'flor' en las caras; pasta marfil.",
    flavour: "Nuez, mantequilla, caramelo, ligeramente picante con la edad.",
    facts: [
      "Solo leche de oveja de raza Manchega.",
      "Maduración mínima 60 días (30 para formatos pequeños), hasta 2 años.",
      "La pleita (zig-zag) y la flor (relieve floral) imitan los moldes tradicionales."
    ]
  },
  {
    id: "pecorino-sardo",
    name: "Pecorino Sardo PDO",
    country: "Italia",
    region: "Cerdeña",
    milk: "Oveja",
    treatment: "Normalmente pasteurizada o termizada",
    status: "PDO / DOP (1996)",
    make: "Hard",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: ["Artificial (plastic/wax coating)"],
    appearance: "Corteza lisa de paja a marrón; pasta blanca a amarilla pálida.",
    flavour: "Dolce: suave, láctico. Maturo: más intenso, salado, a nuez.",
    facts: [
      "Dos tipos: Dolce (20-60 días) y Maturo (más de 2 meses).",
      "'Pecora' = oveja en italiano.",
      "No confundir con Pecorino Romano, más salado y más duro."
    ]
  },
  {
    id: "aged-gouda",
    name: "Aged Gouda",
    country: "Países Bajos",
    region: "Holanda",
    milk: "Vaca",
    treatment: "Normalmente pasteurizada (Boerenkaas: cruda)",
    status: "Puede ser Gouda Holland PGI",
    make: "Hard",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: null,
    subPostMake: [null],
    appearance: "Rueda con recubrimiento de cera/plástico; pasta ámbar con cristales.",
    flavour: "Caramelo, toffee, butterscotch, nuez; crujiente por los cristales.",
    facts: [
      "Cuajada lavada (washed curd): parte del suero se sustituye por agua caliente → menos ácido, más dulce.",
      "Los cristales crujientes son de tirosina (aminoácido) y lactato cálcico.",
      "Recubierto con cera o una capa plástica para madurar."
    ]
  },
  {
    id: "mimolette",
    name: "Mimolette",
    country: "Francia",
    region: "Norte de Francia (Lille)",
    milk: "Vaca",
    treatment: "Normalmente pasteurizada",
    status: "Sin protección",
    make: "Hard",
    postMake: ["Flavoured or Smoked"],
    subMake: null,
    subPostMake: ["Insects (mites)"],
    appearance: "Bola tipo melón; corteza gris-marrón picada; pasta naranja intensa.",
    flavour: "A nuez, frutos secos, caramelo; más intenso con la edad.",
    facts: [
      "Color naranja por el achiote (annatto).",
      "Creado en tiempos de Luis XIV (Colbert) para sustituir al Edam holandés.",
      "Su Post-Make se debe a los ácaros del queso (cirons, sub-Post-Make \"Insects\"): se alimentan de la corteza, le dan su aspecto picado y aportan sabor."
    ]
  },
  {
    id: "le-gruyere",
    name: "Le Gruyère PDO",
    country: "Suiza",
    region: "Cantones de Friburgo, Vaud, Neuchâtel, Jura y parte de Berna",
    milk: "Vaca",
    treatment: "Cruda (obligatorio)",
    status: "AOP suiza (2001) / PDO",
    make: "Hard Cooked",
    postMake: ["Washed rind"],
    subMake: null,
    subPostMake: [null],
    appearance: "Rueda grande (~35 kg); corteza marrón granulosa; pasta marfil sin apenas ojos.",
    flavour: "Afrutado, a nuez, caldo, ligeramente salado; puede tener cristales.",
    facts: [
      "La corteza se frota con salmuera (smear) durante la maduración.",
      "Elaborado en cubas de cobre; la cuajada se cuece (~57 °C).",
      "Nombre del pueblo de Gruyères (Friburgo). Maduración mínima 5 meses."
    ]
  },
  {
    id: "parmigiano-reggiano",
    name: "Parmigiano Reggiano PDO",
    country: "Italia",
    region: "Parma, Reggio Emilia, Módena, Bolonia (oeste del Reno) y Mantua (sur del Po)",
    milk: "Vaca",
    treatment: "Cruda (obligatorio)",
    status: "PDO / DOP (1996)",
    make: "Hard Cooked",
    postMake: ["Wrapped, Rolled or Processed"],
    subMake: "Grana",
    subPostMake: ["Other wrapped"],
    appearance: "Rueda grande (~40 kg); corteza dorada con el nombre punteado; pasta granulosa (grana).",
    flavour: "Umami, caldo, frutos secos, piña, salado; cristales crujientes.",
    facts: [
      "Leche desnatada de la tarde (por afloramiento) + leche entera de la mañana.",
      "Cubas de cobre; cuajada cocida a ~55 °C. Sin aditivos (solo leche, sal y cuajo).",
      "Maduración mínima 12 meses; el consorcio inspecciona y marca las ruedas."
    ]
  }
];
