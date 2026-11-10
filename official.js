// Datos de las fichas oficiales de la Cheese Library (Academy of Cheese, 2026),
// en quesos/*.pdf, y preguntas difíciles sacadas de ellas.
// Para cada queso: es / en = datos de "The Basics" (null = no aplica o "various");
// hard = preguntas [ [pregunta, respuesta correcta, 3 incorrectas] en ES, ídem en EN ].

const OFFICIAL = {
  "goats-curd": {
    es: { age: "Una semana", weight: null, breed: null, rennet: null, milk: null, protected: null, variations: null,
      pairing: "Blancos frescos (godello, grüner veltliner) o un rosado de Provenza" },
    en: { age: "One week", weight: null, breed: null, rennet: null, milk: null, protected: null, variations: null,
      pairing: "Crisp whites (godello, grüner veltliner) or a Provençal rosé" },
    hard: [
      [["¿Hasta qué pH aproximado se acidifica la leche para hacer Goats' Curd?", "4,60", "6,70", "3,00", "5,50"],
       ["To roughly what pH is the milk acidified to make Goats' Curd?", "4.60", "6.70", "3.00", "5.50"]],
      [["¿A qué temperatura se conserva normalmente el Goats' Curd y por qué?", "Por debajo de 8 °C, para evitar levaduras y mohos", "Por encima de 15 °C, para que madure", "A 20 °C, para que forme corteza", "Congelado, para alargar su vida"],
       ["At what temperature is Goats' Curd typically stored, and why?", "Below 8°C, to prevent yeasts and moulds", "Above 15°C, so it ripens", "At 20°C, so it forms a rind", "Frozen, to extend its life"]],
      [["¿Por qué la leche de cabra es especialmente buena para hacer una cuajada cremosa?", "Por su alto contenido en grasa", "Porque se le añade nata", "Por su bajo contenido en proteína", "Porque siempre es pasteurizada"],
       ["Why is goats' milk particularly good for making creamy curd?", "It is high in fat", "Cream is added to it", "It is low in protein", "It is always pasteurised"]],
      [["¿Cómo se escurre normalmente el Goats' Curd?", "A través de una tela, y se envasa en tarrinas", "Prensado en moldes de madera", "En cestas de esparto", "Colgado en cuevas"],
       ["How is Goats' Curd usually drained?", "Through cloth, then packed in tubs", "Pressed in wooden moulds", "In esparto baskets", "Hung in caves"]]
    ]
  },
  "mozzarella-di-bufala": {
    es: { age: "Una semana", weight: "Varias formas y tamaños", breed: "Búfala mediterránea italiana", rennet: "Normalmente animal",
      milk: "Ambas, según el quesero", protected: "PDO: provincias de Caserta y Salerno, o partes de Benevento, Nápoles, Frosinone, Latina y Roma",
      variations: "Ahumada (affumicato)", pairing: "Rosado; ensaladas y pizza" },
    en: { age: "One week", weight: "Various shapes and sizes", breed: "Italian Mediterranean buffalo", rennet: "Typically animal",
      milk: "Both, depending on the cheesemaker", protected: "PDO: Caserta and Salerno provinces, or parts of Benevento, Naples, Frosinone, Latina and Rome",
      variations: "Smoked (affumicato)", pairing: "Rosé; salads and pizza" },
    hard: [
      [["¿Cuándo se introdujeron los búfalos en la región de la Mozzarella di Bufala Campana?", "En el siglo VII, para trabajar en las marismas", "En el siglo XVII, por los Borbones", "En el siglo XX, tras la guerra", "En época romana, para la guerra"],
       ["When were buffalo introduced to the Mozzarella di Bufala Campana region?", "In the 7th century, to work in the marshes", "In the 17th century, by the Bourbons", "In the 20th century, after the war", "In Roman times, for warfare"]],
      [["¿A qué temperatura se calienta la leche para la Mozzarella di Bufala Campana?", "33-39 °C", "54-59 °C", "4-8 °C", "70-80 °C"],
       ["To what temperature is the milk heated for Mozzarella di Bufala Campana?", "33-39°C", "54-59°C", "4-8°C", "70-80°C"]],
      [["Tras salarla en salmuera, ¿en qué se envasa la Mozzarella di Bufala Campana?", "En agua acidificada", "En aceite de oliva", "En suero de leche dulce", "En vinagre"],
       ["After brining, what is Mozzarella di Bufala Campana packed in?", "Acidified water", "Olive oil", "Sweet whey", "Vinegar"]],
      [["Al cortar una buena Mozzarella di Bufala Campana, ¿qué debe verse?", "Gotas de suero lechoso y capas como las de una cebolla", "Vetas azules", "Una línea de ceniza", "Cristales crujientes"],
       ["When you slice a good Mozzarella di Bufala Campana, what should you see?", "Droplets of milky whey and onion-like layers", "Blue veins", "A line of ash", "Crunchy crystals"]]
    ]
  },
  "feta": {
    es: { age: "Mínimo dos meses", weight: null, breed: "No especificada", rennet: "Ambos, según el quesero", milk: "Ambas, según el quesero",
      protected: "PDO: en Grecia con leche de oveja (mínimo 70% de oveja; el resto, cabra)", variations: null,
      pairing: "Cerveza refrescante tipo Pilsner; empanadas, hojaldres y ensaladas" },
    en: { age: "Minimum two months", weight: null, breed: "Not specified", rennet: "Both, depending on the cheesemaker", milk: "Both, depending on the cheesemaker",
      protected: "PDO: made in Greece with sheep's milk (minimum 70% sheep; the rest goat)", variations: null,
      pairing: "Crisp, refreshing beers such as Pilsner; pies, pastries and salads" },
    hard: [
      [["¿En qué año consiguió Grecia la PDO para el Feta?", "2002", "1996", "1925", "2013"],
       ["In which year did Greece secure the PDO for Feta?", "2002", "1996", "1925", "2013"]],
      [["¿Qué porcentaje mínimo de leche de oveja exige la PDO del Feta?", "70%", "50%", "100%", "30%"],
       ["What minimum percentage of sheep's milk does the Feta PDO require?", "70%", "50%", "100%", "30%"]],
      [["¿En qué obra antigua aparece la cueva del Cíclope llena de un queso de oveja, antecesor del Feta?", "La Odisea de Homero", "La Ilíada", "La Eneida", "Las Metamorfosis de Ovidio"],
       ["In which ancient work is the Cyclops' cave filled with a sheep's cheese, forerunner of Feta?", "Homer's Odyssey", "The Iliad", "The Aeneid", "Ovid's Metamorphoses"]],
      [["¿Cómo se salan algunas versiones tradicionales de Feta?", "En seco, en barriles: la sal extrae el suero, que forma la salmuera", "Frotándolas con ceniza", "Ahumándolas en cuevas", "Lavándolas con vino"],
       ["How are some traditional versions of Feta salted?", "Dry salted in barrels: the salt draws out whey, which forms the brine", "Rubbed with ash", "Smoked in caves", "Washed with wine"]]
    ]
  },
  "brie-de-meaux": {
    es: { age: "Mínimo cuatro semanas; en su punto a las 6-10 semanas", weight: "2,6 kg", breed: "No especificada", rennet: "Animal",
      milk: "Cruda de vaca", protected: "PDO: leche cruda de vaca y cuajo animal, en la cuenca este de París", variations: null,
      pairing: "Borgoña blanco mantecoso, tintos ligeros (pinot noir, gamay), espumoso o cerveza saison" },
    en: { age: "Minimum four weeks; typically ripe at six to 10 weeks", weight: "2.6kg", breed: "Not specified", rennet: "Animal",
      milk: "Raw cows' milk", protected: "PDO: raw cows' milk and animal rennet, in the Eastern Parisian basin", variations: null,
      pairing: "Buttery white burgundy, lighter fruity reds (pinot noir, gamay), sparkling wine or saison beer" },
    hard: [
      [["¿Qué temperatura máxima de coagulación permite la PDO del Brie de Meaux?", "37 °C", "32 °C", "42 °C", "55 °C"],
       ["What is the maximum coagulation temperature allowed by the Brie de Meaux PDO?", "37°C", "32°C", "42°C", "55°C"]],
      [["Según la leyenda, ¿de qué emperador era el queso favorito el Brie de Meaux?", "Carlomagno", "Napoleón", "Luis XIV", "Julio César"],
       ["According to legend, which emperor's favourite cheese was Brie de Meaux?", "Charlemagne", "Napoleon", "Louis XIV", "Julius Caesar"]],
      [["¿Qué indica un fuerte olor a amoniaco en un Brie de Meaux?", "Que está sobremadurado", "Que es muy joven", "Que es de leche pasteurizada", "Que tiene la corteza lavada"],
       ["What does a strong smell of ammonia in Brie de Meaux indicate?", "It is over-matured", "It is very young", "It is made with pasteurised milk", "It has a washed rind"]],
      [["¿Cuándo se sala el Brie de Meaux?", "Después de escurrir y acidificar en los moldes", "Antes de cuajar la leche", "Durante el corte de la cuajada", "Nunca: no lleva sal"],
       ["When is Brie de Meaux salted?", "After draining and acidifying in the moulds", "Before the milk is set", "While the curd is cut", "Never: it has no salt"]]
    ]
  },
  "camembert-de-normandie": {
    es: { age: "Un mes", weight: "250 g", breed: "Al menos el 50% del rebaño, raza Normande", rennet: "Normalmente animal",
      milk: "Cruda de vaca", protected: "PDO: leche cruda de vaca en Normandía (Orne, Manche, Eure, Calvados)", variations: null,
      pairing: "Borgoña blanco mantecoso; cerveza saison" },
    en: { age: "One month", weight: "250g", breed: "At least 50% of the herd must be Normande cows", rennet: "Typically animal",
      milk: "Raw cows' milk", protected: "PDO: raw cows' milk in Normandy (Orne, Manche, Eure, Calvados)", variations: null,
      pairing: "Buttery white burgundy; saison beer" },
    hard: [
      [["La cuajada del Camembert de Normandie se pone en el molde en cinco cucharones. ¿Cuánto tiempo pasa entre uno y otro?", "40 minutos", "5 minutos", "2 horas", "24 horas"],
       ["Camembert de Normandie curd is ladled into the mould in five scoops. How long between each one?", "40 minutes", "5 minutes", "2 hours", "24 hours"]],
      [["¿Qué porcentaje mínimo del rebaño debe ser de raza Normande para el Camembert de Normandie?", "50%", "100%", "30%", "75%"],
       ["What minimum share of the herd must be Normande cows for Camembert de Normandie?", "50%", "100%", "30%", "75%"]],
      [["¿Cuánto escurre como mínimo el Camembert de Normandie?", "18 horas, volteándolo una vez", "2 horas, sin voltear", "7 días, volteándolo a diario", "No escurre: se prensa"],
       ["How long does Camembert de Normandie drain for at least?", "18 hours, turned once", "2 hours, not turned", "7 days, turned daily", "It does not drain: it is pressed"]],
      [["¿Cómo se prefiere el Camembert en la propia Normandía?", "Con el corazón todavía calcáreo (chalky)", "Totalmente líquido", "Muy curado y duro", "Fundido al horno"],
       ["How is Camembert preferred in Normandy itself?", "With a chalky heart still in the centre", "Completely runny", "Very aged and hard", "Baked and melted"]]
    ]
  },
  "brillat-savarin": {
    es: { age: "Cuatro semanas", weight: "500 g, 250 g", breed: "No especificada", rennet: "Ambos, según el quesero", milk: "Ambas, según el quesero",
      protected: "PGI: Aube, Côte-d'Or, Saône-et-Loire, Seine-et-Marne y Yonne", variations: null, pairing: "Champán" },
    en: { age: "Four weeks", weight: "500g, 250g", breed: "Not specified", rennet: "Both, depending on the cheesemaker", milk: "Both, depending on the cheesemaker",
      protected: "PGI: Aube, Côte-d'Or, Saône-et-Loire, Seine-et-Marne and Yonne", variations: null, pairing: "Champagne" },
    hard: [
      [["¿Quién fue Brillat-Savarin, el personaje que da nombre al queso?", "Un famoso escritor gastronómico francés del siglo XVIII", "Un rey de Francia", "Un monje cisterciense", "Un quesero normando del siglo XX"],
       ["Who was Brillat-Savarin, after whom the cheese is named?", "A famous 18th-century French food writer and gourmand", "A king of France", "A Cistercian monk", "A 20th-century Normandy cheesemaker"]],
      [["¿Dónde se elabora hoy principalmente el Brillat-Savarin?", "En Normandía y Borgoña", "En el Jura y Saboya", "En Aveyron", "En el valle del Loira"],
       ["Where is Brillat-Savarin mainly made today?", "Normandy and Burgundy", "Jura and Savoie", "Aveyron", "The Loire Valley"]],
      [["¿Qué hace que el Brillat-Savarin sea un 'triple crema'?", "Se añade nata a la leche para subir la grasa", "Se lava tres veces con nata", "Se prensa tres veces", "Se mezclan tres leches distintas"],
       ["What makes Brillat-Savarin a 'triple cream' cheese?", "Cream is added to the milk to increase the fat", "It is washed three times with cream", "It is pressed three times", "Three different milks are blended"]],
      [["¿Cuál es el maridaje clásico del Brillat-Savarin según la ficha?", "Champán", "Oporto", "Sauternes", "Cerveza stout"],
       ["What is the classic pairing for Brillat-Savarin according to the profile?", "Champagne", "Port", "Sauternes", "Stout"]]
    ]
  },
  "crottin-de-chavignol": {
    es: { age: "Mínimo 10 días; típicamente dos meses", weight: "60 g", breed: "Alpina", rennet: "Normalmente animal",
      milk: "Cruda de cabra", protected: "PDO: leche cruda de cabra en los departamentos de Cher, Loiret y Nièvre", variations: null,
      pairing: "Sancerre (sauvignon blanc)" },
    en: { age: "Minimum 10 days, but typically two months", weight: "60g", breed: "Alpine", rennet: "Typically animal",
      milk: "Raw goats' milk", protected: "PDO: raw goats' milk in the Cher, Loiret and Nièvre departments", variations: null,
      pairing: "Sancerre (sauvignon blanc)" },
    hard: [
      [["¿De dónde se cree que viene el nombre 'Crottin'?", "De 'crot', una pequeña lámpara de aceite para iluminar bodegas", "De un tipo de molde de madera", "Del nombre de un monje", "De una cueva del Loira"],
       ["Where is the name 'Crottin' believed to come from?", "'Crot', a small oil lamp used to light wine cellars", "A type of wooden mould", "The name of a monk", "A cave in the Loire"]],
      [["¿A qué temperatura debe madurar el Crottin de Chavignol?", "Por encima de 10 °C", "Por debajo de 4 °C", "Por encima de 30 °C", "Exactamente a 0 °C"],
       ["At what temperature must Crottin de Chavignol be matured?", "Above 10°C", "Below 4°C", "Above 30°C", "Exactly 0°C"]],
      [["¿Qué raza de cabra figura en la ficha del Crottin de Chavignol?", "Alpina", "Saanen", "Anglo-nubia", "Golden Guernsey"],
       ["Which goat breed is listed for Crottin de Chavignol?", "Alpine", "Saanen", "Anglo-Nubian", "Golden Guernsey"]],
      [["¿Cuándo se sala el Crottin de Chavignol?", "En seco, después de desmoldarlo", "En salmuera antes de cuajar", "Nunca", "Lavándolo con Sancerre"],
       ["When is Crottin de Chavignol salted?", "Dry-salted after unmoulding", "In brine before setting", "Never", "Washed with Sancerre"]]
    ]
  },
  "livarot": {
    es: { age: "Dos meses (mínimo 35 días)", weight: "450-500 g (también Petit 200 g y Grand 1,2 kg)", breed: "Normande", rennet: "Normalmente animal",
      milk: "Ambas, según el quesero", protected: "PDO: leche de vaca en Calvados, Orne o Eure (Normandía)", variations: null,
      pairing: "Sidra o Calvados; un tinto ligero y afrutado como Chinon" },
    en: { age: "Two months (minimum 35 days)", weight: "450-500g (Petit 200g and Grand 1.2kg also permitted)", breed: "Normande", rennet: "Typically animal",
      milk: "Both, depending on the cheesemaker", protected: "PDO: cows' milk in the Calvados, Orne or Eure departments of Normandy", variations: null,
      pairing: "Cider or Calvados; a light fruity red such as Chinon" },
    hard: [
      [["¿Cuántas tiras de juncia (sedge) rodean al Livarot, 'el Coronel'?", "Tres o cinco", "Siete", "Una", "Diez"],
       ["How many strips of sedge encircle Livarot, 'the Colonel'?", "Three or five", "Seven", "One", "Ten"]],
      [["¿Qué capacidad máxima tienen las cubas en las que se elabora el Livarot?", "Menos de 320 litros", "Más de 10.000 litros", "Exactamente 1.000 litros", "Menos de 20 litros"],
       ["What is the maximum capacity of the vats Livarot is made in?", "Less than 320 litres", "More than 10,000 litres", "Exactly 1,000 litres", "Less than 20 litres"]],
      [["¿Cuánto tiempo al año deben pastar al aire libre las vacas del Livarot?", "Al menos seis meses", "Al menos un mes", "Todo el año", "No se exige"],
       ["How long a year must Livarot's cows graze outside?", "At least six months", "At least one month", "All year round", "It is not required"]],
      [["¿Qué se puede añadir a la solución de lavado del Livarot para colorear la corteza?", "Achiote (annatto)", "Azafrán", "Carbón vegetal", "Pimentón"],
       ["What can be added to Livarot's wash solution to colour the rind?", "Annatto", "Saffron", "Vegetable charcoal", "Paprika"]]
    ]
  },
  "epoisses": {
    es: { age: "Seis semanas (mínimo cuatro)", weight: "250-350 g o 700 g-1,2 kg", breed: "Brune (parda francesa), Montbéliarde o Simmental francesa", rennet: "Normalmente animal",
      milk: "Ambas, según el quesero", protected: "PDO: departamentos de Côte-d'Or, Yonne o Haute-Marne (Borgoña y Champaña-Ardenas)", variations: null,
      pairing: "Vinos de Borgoña: chardonnay con cuerpo y pinot noir carnoso" },
    en: { age: "Six weeks (minimum four)", weight: "250-350g or 700g-1.2kg", breed: "Brune (French Brown), Montbéliarde or French Simmental", rennet: "Typically animal",
      milk: "Both, depending on the cheesemaker", protected: "PDO: Côte-d'Or, Yonne or Haute-Marne departments (Burgundy and Champagne-Ardenne)", variations: null,
      pairing: "Burgundy wines: full-bodied chardonnay and meaty pinot noir" },
    hard: [
      [["¿Cuánto tiempo, como mínimo, acidifica y coagula la cuajada del Époisses?", "16 horas", "30 minutos", "2 horas", "3 días"],
       ["For at least how long does Époisses curd acidify and coagulate?", "16 hours", "30 minutes", "2 hours", "3 days"]],
      [["¿Cuántos productores de Époisses había en 1900?", "300", "3", "30", "3.000"],
       ["How many Époisses producers were there in 1900?", "300", "3", "30", "3,000"]],
      [["¿Quiénes recuperaron el Époisses en 1956?", "Los hermanos Robert y Simone Berthaut", "Marie Harel y su marido", "Henri Androuët", "Los monjes de Jouarre"],
       ["Who revived Époisses in 1956?", "The brothers Robert and Simone Berthaut", "Marie Harel and her husband", "Henri Androuët", "The monks of Jouarre"]],
      [["¿Con qué frecuencia se lava la corteza del Époisses durante la maduración?", "Hasta tres veces por semana, con agua y marc", "Una vez al mes, con vino tinto", "A diario, con cerveza", "Nunca: solo se cepilla"],
       ["How often is the Époisses rind washed during maturation?", "Up to three times a week, with water and marc", "Once a month, with red wine", "Daily, with beer", "Never: it is only brushed"]],
      [["¿Quiénes crearon el Époisses en el siglo XVI?", "Monjes cistercienses, para los días de ayuno", "Soldados de Napoleón", "Pastores del Jura", "Los duques de Borgoña"],
       ["Who created Époisses in the 16th century?", "Cistercian monks, for fast days", "Napoleon's soldiers", "Jura shepherds", "The Dukes of Burgundy"]]
    ]
  },
  "single-gloucester": {
    es: { age: "Dos meses", weight: "2,25 kg", breed: "Old Gloucester", rennet: "Ambos, según el quesero", milk: "Ambas, según el quesero",
      protected: "UK GI – PDO: en Gloucestershire con al menos parte de la leche de vacas Old Gloucester", variations: null,
      pairing: "Perry (sidra de pera)" },
    en: { age: "Two months", weight: "2.25kg", breed: "Old Gloucester", rennet: "Both, depending on the cheesemaker", milk: "Both, depending on the cheesemaker",
      protected: "UK GI – PDO: made in Gloucestershire with at least some milk from Old Gloucester cows", variations: null,
      pairing: "Perry (traditional pear cider)" },
    hard: [
      [["¿Cuándo se recuperó el Single Gloucester, que había desaparecido por completo?", "En los años 90", "En 1956", "En 1791", "En 2013"],
       ["When was Single Gloucester, which had completely died out, revived?", "In the 1990s", "In 1956", "In 1791", "In 2013"]],
      [["¿A qué temperatura se escalda la cuajada del Single Gloucester?", "32-35 °C", "54-59 °C", "38-42 °C", "No se escalda"],
       ["To what temperature are Single Gloucester curds scalded?", "32-35°C", "54-59°C", "38-42°C", "They are not scalded"]],
      [["¿Por qué se llama 'Single' Gloucester?", "Se hacía con leche desnatada o más ligera (de invierno): menos grasa que el Double", "Porque se hace con la leche de un solo ordeño", "Porque lo hace una sola granja", "Porque se prensa una sola vez"],
       ["Why is it called 'Single' Gloucester?", "It was made with skimmed or thinner (winter) milk: less fat than Double", "It uses milk from a single milking", "Only one farm makes it", "It is pressed only once"]],
      [["¿Qué bebida recomienda la ficha con el Single Gloucester?", "Perry (sidra de pera)", "Oporto", "Champán", "Stout"],
       ["Which drink does the profile recommend with Single Gloucester?", "Perry (pear cider)", "Port", "Champagne", "Stout"]]
    ]
  },
  "yorkshire-wensleydale": {
    es: { age: "Normalmente uno o dos meses (de una semana a 12 meses)", weight: "5 kg", breed: "No especificada", rennet: "Ambos, según el quesero",
      milk: "Ambas, según el quesero", protected: "UK GI – PGI: debe elaborarse en la zona de Wensleydale", variations: "Aromatizados con arándanos rojos o albaricoques",
      pairing: "IPA; tintos ligeros y afrutados" },
    en: { age: "Typically one to two months (one week to 12 months)", weight: "5kg", breed: "Not specified", rennet: "Both, depending on the cheesemaker",
      milk: "Both, depending on the cheesemaker", protected: "UK GI – PGI: must be made in the Wensleydale area", variations: "Flavoured with cranberries or apricots",
      pairing: "IPAs; light fruity reds" },
    hard: [
      [["¿Qué tipo de queso hacían originalmente los monjes cistercienses en Wensleydale?", "De oveja, intentando recrear el Roquefort", "De vaca, imitando el Cheddar", "De cabra, como el Crottin", "De búfala"],
       ["What kind of cheese did the Cistercian monks originally make in Wensleydale?", "A sheep's milk cheese, trying to recreate Roquefort", "A cows' milk cheese imitating Cheddar", "A goats' cheese like Crottin", "A buffalo cheese"]],
      [["¿Cuánto tiempo se prensa como máximo el Yorkshire Wensleydale?", "Hasta dos días", "Dos horas", "Dos semanas", "No se prensa"],
       ["For up to how long is Yorkshire Wensleydale pressed?", "Up to two days", "Two hours", "Two weeks", "It is not pressed"]],
      [["¿Qué sabores destaca la ficha del Yorkshire Wensleydale?", "Lácteos y cítricos", "Ahumados y a madera", "Umami y piña", "A corral y carne"],
       ["Which flavours does the Yorkshire Wensleydale profile highlight?", "Dairy and citrus", "Smoky and woody", "Umami and pineapple", "Farmyard and meaty"]],
      [["¿Qué bebida recomienda la ficha con el Wensleydale, porque su amargor aguanta la acidez?", "IPA", "Sauternes", "Oporto", "Champán"],
       ["Which drink does the profile suggest with Wensleydale, its bitterness standing up to the acidity?", "IPA", "Sauternes", "Port", "Champagne"]]
    ]
  },
  "cloth-bound-cheshire": {
    es: { age: "Cuatro meses", weight: "8 kg", breed: "No especificada", rennet: "Ambos, según el quesero", milk: "Ambas, según el quesero",
      protected: null, variations: null, pairing: "Tintos de cuerpo medio (Côtes du Rhône, Rioja); pale ales lupuladas" },
    en: { age: "Four months", weight: "8kg", breed: "Not specified", rennet: "Both, depending on the cheesemaker", milk: "Both, depending on the cheesemaker",
      protected: null, variations: null, pairing: "Medium-bodied reds (Côtes du Rhône, Rioja); hoppy pale ales" },
    hard: [
      [["¿Cuántos productores de granja hacen hoy el Cheshire tradicional envuelto en tela con leche cruda?", "Uno", "Seis", "Unos 165", "Ninguno"],
       ["How many farmhouse producers still make traditional cloth-bound Cheshire with unpasteurised milk?", "One", "Six", "Around 165", "None"]],
      [["Comparado con el Cheddar, ¿cómo se escalda la cuajada del Cheshire?", "A menor temperatura, por eso retiene más humedad", "A mayor temperatura, para secarla más", "Igual que el Cheddar", "No se escalda"],
       ["Compared with Cheddar, how are Cheshire curds scalded?", "At lower temperatures, so more moisture is retained", "At higher temperatures, to dry them more", "The same as Cheddar", "They are not scalded"]],
      [["¿Qué paso ayuda a crear la textura escamosa del Cheshire?", "Dejar la cuajada salada una noche antes de prensarla", "Lavar la cuajada con agua caliente", "Estirar la cuajada", "Ahumar la cuajada"],
       ["Which step helps create Cheshire's flaky texture?", "Leaving the salted curd overnight before pressing", "Washing the curd with hot water", "Stretching the curd", "Smoking the curd"]],
      [["¿A qué se atribuye el sabor único del Cheshire de granja?", "Al suelo rico en minerales de la llanura de Cheshire", "A las cuevas de piedra caliza", "A la leche de oveja", "Al lavado con sidra"],
       ["What is farmhouse Cheshire's unique flavour linked to?", "The mineral-rich soil of the Cheshire Plain", "Limestone caves", "Sheep's milk", "Washing with cider"]]
    ]
  },
  "block-cheddar": {
    es: { age: "Varias", weight: "18 kg", breed: "Varias, normalmente Holstein Friesian", rennet: "Normalmente vegetal", milk: "Pasteurizada",
      protected: null, variations: null, pairing: "Cervezas bitter; sándwiches, fundido en tostadas o pasta" },
    en: { age: "Various", weight: "18kg", breed: "Various, typically Holstein Friesian", rennet: "Typically vegetarian", milk: "Pasteurised",
      protected: null, variations: null, pairing: "Bitter beers; sandwiches, melted on toast or pasta" },
    hard: [
      [["Según el British Cheese Board, ¿a qué edad se vende normalmente un Cheddar 'vintage'?", "18 meses o más", "9 meses", "15 meses", "6 meses"],
       ["According to the British Cheese Board, at what age is 'vintage' cheddar typically sold?", "18 months or more", "Nine months", "15 months", "Six months"]],
      [["Según el British Cheese Board, ¿a qué edad se vende normalmente un Cheddar 'mature'?", "9 meses", "3 meses", "18 meses", "24 meses"],
       ["According to the British Cheese Board, at what age is 'mature' cheddar typically sold?", "Nine months", "Three months", "18 months", "24 months"]],
      [["¿Por qué el Block Cheddar madura en bolsas de plástico selladas?", "Para que no se forme corteza y no pierda peso", "Para darle sabor ahumado", "Para que crezca moho azul", "Para que respire mejor"],
       ["Why is Block Cheddar matured in sealed plastic bags?", "To stop a rind forming and prevent weight loss", "To give it a smoky flavour", "To grow blue mould", "So it breathes better"]],
      [["¿Qué capacidad pueden tener las máquinas automáticas de cheddaring del Block Cheddar?", "Hasta 15 toneladas por hora", "Hasta 15 kg por hora", "Hasta 150 litros al día", "Una rueda al día"],
       ["What capacity can automated cheddaring machines for Block Cheddar have?", "Up to 15 tonnes per hour", "Up to 15kg per hour", "Up to 150 litres a day", "One wheel a day"]]
    ]
  },
  "cloth-bound-cheddar": {
    es: { age: "De tres a 24 meses", weight: "Normalmente ruedas (truckles) de 25 kg", breed: null, rennet: "Ambos, según el quesero", milk: "Ambas, según el quesero",
      protected: "West Country Farmhouse Cheddar PDO: Somerset, Dorset, Devon o Cornwall, con maduración mínima de nueve meses", variations: null,
      pairing: "Cerveza: golden ale, bitter, IPA, cervezas de granja belgas" },
    en: { age: "Three to 24 months", weight: "Typically 25kg truckles", breed: null, rennet: "Both, depending on the cheesemaker", milk: "Both, depending on the cheesemaker",
      protected: "West Country Farmhouse Cheddar PDO: Somerset, Dorset, Devon or Cornwall, matured for a minimum of nine months", variations: null,
      pairing: "Beer: golden ales, bitters, IPAs, Belgian farmhouse beers" },
    hard: [
      [["¿Qué maduración mínima exige la PDO West Country Farmhouse Cheddar?", "Nueve meses", "Tres meses", "18 meses", "24 meses"],
       ["What minimum maturation does the West Country Farmhouse Cheddar PDO require?", "Nine months", "Three months", "18 months", "24 months"]],
      [["¿Qué condados cubre la PDO West Country Farmhouse Cheddar?", "Somerset, Dorset, Devon y Cornwall", "Derbyshire, Leicestershire y Nottinghamshire", "Cheshire y Shropshire", "Gloucestershire y Wiltshire"],
       ["Which counties does the West Country Farmhouse Cheddar PDO cover?", "Somerset, Dorset, Devon and Cornwall", "Derbyshire, Leicestershire and Nottinghamshire", "Cheshire and Shropshire", "Gloucestershire and Wiltshire"]],
      [["¿A qué temperatura se escalda la cuajada del Cheddar?", "Alrededor de 38-42 °C", "32-35 °C", "54-59 °C", "No se escalda"],
       ["To what temperature are Cheddar curds scalded?", "Around 38-42°C", "32-35°C", "54-59°C", "They are not scalded"]],
      [["¿Qué cristales pueden aparecer en un Cheddar envuelto en tela maduro?", "De lactato cálcico", "De sal marina", "De azúcar", "De ceniza"],
       ["Which crystals can develop in a mature cloth-bound Cheddar?", "Calcium lactate", "Sea salt", "Sugar", "Ash"]],
      [["¿De dónde toma su nombre el Cheddar?", "De una garganta y un pueblo de Somerset", "De un monje cisterciense", "De una ciudad de Escocia", "De una raza de vaca"],
       ["Where does Cheddar take its name from?", "A gorge and village in Somerset", "A Cistercian monk", "A Scottish town", "A breed of cow"]]
    ]
  },
  "smoked-cheddar": {
    es: { age: "De tres a 12 meses", weight: null, breed: null, rennet: "Ambos, según el quesero", milk: "Ambas, según el quesero",
      protected: null, variations: null, pairing: "Cervezas británicas (bitter, golden ale); Gewürztraminer de Alsacia" },
    en: { age: "Three to 12 months", weight: null, breed: null, rennet: "Both, depending on the cheesemaker", milk: "Both, depending on the cheesemaker",
      protected: null, variations: null, pairing: "Traditional British beers (bitter, golden ale); Alsatian Gewürztraminer" },
    hard: [
      [["¿Sobre qué maderas se suele ahumar en frío el Smoked Cheddar según la ficha?", "Roble o arce", "Pino o eucalipto", "Olivo o vid", "Cedro o bambú"],
       ["Over which woods is Smoked Cheddar typically cold smoked, according to the profile?", "Oak or maple", "Pine or eucalyptus", "Olive or vine", "Cedar or bamboo"]],
      [["¿Por qué se corta a menudo el Smoked Cheddar en cuñas o lonchas antes de ahumarlo?", "Para que el sabor del humo penetre mejor", "Para que madure más rápido", "Para venderlo más barato", "Para que no forme corteza"],
       ["Why is Smoked Cheddar often cut into wedges or slices before smoking?", "To help the smoke flavour penetrate", "So it matures faster", "To sell it cheaper", "So no rind forms"]],
      [["¿Qué métodos usan los productores de Smoked Cheddar?", "Aroma de humo en la cuajada, ahumado en frío o ambos", "Solo ahumado en caliente", "Solo lavado con whisky ahumado", "Madurarlo en chimeneas"],
       ["Which methods do Smoked Cheddar producers use?", "Smoke flavouring in the curd, cold smoking, or both", "Hot smoking only", "Washing with smoky whisky only", "Maturing in chimneys"]]
    ]
  },
  "blue-stilton": {
    es: { age: "Tres meses", weight: "8 kg", breed: "No especificada", rennet: "Ambos, según el quesero", milk: "Pasteurizada",
      protected: "UK GI – PDO: Leicestershire, Derbyshire o Nottinghamshire, con leche de vaca pasteurizada", variations: "White Stilton PDO; Blue Stilton PDO Mature/Vintage",
      pairing: "Oporto; vinos de postre y porter" },
    en: { age: "Three months", weight: "8kg", breed: "Not specified", rennet: "Both, depending on the cheesemaker", milk: "Pasteurised",
      protected: "UK GI – PDO: Leicestershire, Derbyshire or Nottinghamshire, using pasteurised cows' milk", variations: "White Stilton PDO; Mature/Vintage Blue Stilton PDO",
      pairing: "Port; dessert wines and porters" },
    hard: [
      [["¿Cuántos productores de Blue Stilton hay actualmente?", "Seis", "Tres", "25", "Unos 165"],
       ["How many Blue Stilton producers are currently in operation?", "Six", "Three", "25", "Around 165"]],
      [["¿Cuándo se pincha el Blue Stilton para activar el moho azul?", "A las cinco semanas", "A los dos días", "A los seis meses", "Nunca se pincha"],
       ["When is Blue Stilton pierced to activate the blue mould?", "At five weeks", "After two days", "At six months", "It is never pierced"]],
      [["¿Qué escritor contó que el Stilton se servía plagado de ácaros o gusanos?", "Daniel Defoe", "Charles Dickens", "William Shakespeare", "Samuel Pepys"],
       ["Which writer said Stilton was served riddled with mites or maggots?", "Daniel Defoe", "Charles Dickens", "William Shakespeare", "Samuel Pepys"]],
      [["¿En qué condado está el pueblo de Stilton, que da nombre al queso?", "Cambridgeshire", "Leicestershire", "Derbyshire", "Somerset"],
       ["In which county is the village of Stilton, which gave the cheese its name?", "Cambridgeshire", "Leicestershire", "Derbyshire", "Somerset"]],
      [["¿Qué se hace con el Blue Stilton en el molde para lograr su textura abierta?", "Se voltea, pero no se prensa", "Se prensa con fuerza", "Se lava con salmuera", "Se envuelve en hojas"],
       ["What is done to Blue Stilton in its hoop to create an open texture?", "It is turned, not pressed", "It is pressed hard", "It is washed in brine", "It is wrapped in leaves"]]
    ]
  },
  "gorgonzola": {
    es: { age: "Mínimo 50 días (ruedas grandes); típicamente 3-6 meses; Piccante, mínimo 80 días", weight: "6-13 kg", breed: "No especificada", rennet: "Animal",
      milk: "Pasteurizada", protected: "PDO: leche de vaca pasteurizada en Lombardía y Piamonte", variations: "Dolce y Piccante",
      pairing: "Tintos afrutados y vinos de postre" },
    en: { age: "Minimum 50 days for the largest wheels, typically three to six months; Piccante minimum 80 days", weight: "6-13kg", breed: "Not specified", rennet: "Animal",
      milk: "Pasteurised", protected: "PDO: pasteurised cows' milk in Lombardy and Piedmont", variations: "Dolce and Piccante",
      pairing: "Fruity reds and dessert wines" },
    hard: [
      [["¿Qué maduración mínima tiene el Gorgonzola Piccante?", "80 días", "50 días", "30 días", "Un año"],
       ["What is the minimum maturation for Gorgonzola Piccante?", "80 days", "50 days", "30 days", "One year"]],
      [["¿Se debe comer la corteza rosada del Gorgonzola?", "No", "Sí, siempre", "Solo la del Piccante", "Solo si está muy curado"],
       ["Should the pink rind of Gorgonzola be eaten?", "No", "Yes, always", "Only on Piccante", "Only when very mature"]],
      [["¿Qué tipo de Gorgonzola supone la gran mayoría de la producción?", "Dolce", "Piccante", "Mascarpone", "Bianco"],
       ["Which type of Gorgonzola makes up the vast majority of production?", "Dolce", "Piccante", "Mascarpone", "Bianco"]],
      [["¿Cómo se sala el Gorgonzola?", "En seco, durante varios días, antes de pincharlo", "En salmuera durante 24 días", "Lavándolo con vino", "No lleva sal"],
       ["How is Gorgonzola salted?", "Dry-salted over several days, before piercing", "In brine for 24 days", "Washed with wine", "It is not salted"]],
      [["¿Por qué el Gorgonzola Piccante tiene textura más desmenuzable y sabor más fuerte?", "Madura más tiempo y a mayor temperatura", "Lleva leche de oveja", "Se ahúma", "No se pincha"],
       ["Why is Gorgonzola Piccante more crumbly and stronger?", "It is aged longer and at higher temperatures", "It uses sheep's milk", "It is smoked", "It is not pierced"]]
    ]
  },
  "roquefort": {
    es: { age: "Mínimo 90 días (al menos dos semanas en las cuevas de Combalou)", weight: "2,5-3 kg", breed: "Lacaune", rennet: "Normalmente animal",
      milk: "Cruda de oveja", protected: "PDO: leche cruda de oveja en Aveyron, Aude, Lozère, Gard, Hérault y Tarn", variations: null,
      pairing: "Sauternes; vinos dulces; tintos potentes del Languedoc" },
    en: { age: "Minimum 90 days (at least two weeks in the Combalou caves)", weight: "2.5-3kg", breed: "Lacaune", rennet: "Typically animal",
      milk: "Raw sheep's milk", protected: "PDO: raw sheep's milk in Aveyron, Aude, Lozère, Gard, Hérault and Tarn", variations: null,
      pairing: "Sauternes; sweet wines; robust Languedoc reds" },
    hard: [
      [["¿Cuánto tiempo mínimo debe pasar el Roquefort en las cuevas de Combalou?", "Dos semanas", "90 días", "Un año", "Dos días"],
       ["What is the minimum time Roquefort must spend in the Combalou caves?", "Two weeks", "90 days", "One year", "Two days"]],
      [["¿Cuándo se pincha el Roquefort?", "A los dos días", "A las cinco semanas", "A los seis meses", "Nunca"],
       ["When is Roquefort pierced?", "After two days", "At five weeks", "At six months", "Never"]],
      [["¿Cómo se añade el Penicillium roqueforti al Roquefort?", "A la leche o espolvoreado sobre la cuajada antes de moldear", "Frotando la corteza al final", "Inyectándolo a los 90 días", "Con el agua de lavado"],
       ["How is Penicillium roqueforti added to Roquefort?", "To the milk, or sprinkled on the curds before moulding", "Rubbed on the rind at the end", "Injected at 90 days", "In the wash water"]],
      [["¿Qué vino es el maridaje tradicional del Roquefort?", "Sauternes", "Sancerre", "Champán", "Chinon"],
       ["Which wine is the traditional pairing for Roquefort?", "Sauternes", "Sancerre", "Champagne", "Chinon"]]
    ]
  },
  "morbier": {
    es: { age: "Tres meses", weight: "5-8 kg", breed: "Montbéliarde o Simmental francesa", rennet: "Normalmente animal", milk: "Cruda de vaca",
      protected: "PDO: leche cruda en los departamentos de Ain, Doubs, Jura o Saône-et-Loire", variations: null,
      pairing: "Vinos de Arbois (Jura): tintos ligeros (pinot noir, trousseau, poulsard) y blancos (chardonnay, savagnin)" },
    en: { age: "Three months", weight: "5-8kg", breed: "Montbéliarde or French Simmental", rennet: "Typically animal", milk: "Raw cows' milk",
      protected: "PDO: raw milk in the Ain, Doubs, Jura or Saône-et-Loire departments", variations: null,
      pairing: "Arbois wines (Jura): light spicy reds (pinot noir, trousseau, poulsard) and whites (chardonnay, savagnin)" },
    hard: [
      [["Antiguamente, ¿con qué se protegía durante la noche la cuajada de la leche de la tarde del Morbier?", "Con hollín", "Con cera", "Con pimentón", "Con hojas de castaño"],
       ["Historically, what protected Morbier's evening-milk curd overnight?", "A sprinkling of soot", "Wax", "Paprika", "Chestnut leaves"]],
      [["¿Qué queso se hacía en verano con la leche reunida de varias granjas, en vez de Morbier?", "Comté", "Roquefort", "Brie de Meaux", "Époisses"],
       ["In summer, which cheese was made with milk pooled from several farms instead of Morbier?", "Comté", "Roquefort", "Brie de Meaux", "Époisses"]],
      [["¿A qué temperatura se coagula la leche cruda del Morbier?", "Por debajo de 40 °C", "Por encima de 55 °C", "Exactamente a 25 °C", "A 70 °C"],
       ["At what temperature is Morbier's raw milk coagulated?", "Below 40°C", "Above 55°C", "Exactly 25°C", "70°C"]],
      [["¿En qué tamaño se corta la cuajada del Morbier?", "En cubos de 1 cm", "En granos de arroz", "Del tamaño de una nuez", "En cubos de 10 cm"],
       ["What size is Morbier curd cut into?", "1cm cubes", "Rice grains", "Walnut-sized pieces", "10cm cubes"]],
      [["¿Cómo se hace hoy la línea negra del Morbier?", "Las tortas de cuajada se cortan por la mitad, una cara se baña en carbón vegetal y se vuelven a prensar", "Se pinta por fuera al final", "Con tinta de calamar", "Mezclando la leche de la tarde con ceniza"],
       ["How is Morbier's black line made today?", "Curd cakes are sliced in half, one side dipped in charcoal, then pressed together again", "It is painted on at the end", "With squid ink", "By mixing ash into the evening milk"]]
    ]
  },
  "manchego": {
    es: { age: "De 30 días a dos años", weight: "De 400 g a 4 kg", breed: "Manchega", rennet: "Normalmente animal",
      milk: "Ambas; el de leche cruda debe llevar la mención 'Artesano'", protected: "PDO: Queso Manchego, con leche de oveja en La Mancha (Albacete, Ciudad Real, Cuenca y Toledo)", variations: null,
      pairing: "Jerez Pedro Ximénez" },
    en: { age: "30 days to two years", weight: "400g to 4kg", breed: "Manchega", rennet: "Typically animal",
      milk: "Both; raw milk cheese must carry the term 'Artesano'", protected: "PDO: Queso Manchego, sheep's milk in La Mancha (Albacete, Ciudad Real, Cuenca and Toledo)", variations: null,
      pairing: "Pedro Ximénez sherry" },
    hard: [
      [["¿Qué término debe llevar el Manchego elaborado con leche cruda?", "Artesano", "Curado", "Viejo", "Reserva"],
       ["Which term must Manchego made with raw milk carry?", "Artesano", "Curado", "Viejo", "Reserva"]],
      [["¿A qué temperatura máxima se escalda la cuajada del Manchego?", "Hasta 40 °C", "Hasta 55 °C", "Hasta 25 °C", "No se escalda"],
       ["Up to what temperature are Manchego curds scalded?", "Up to 40°C", "Up to 55°C", "Up to 25°C", "They are not scalded"]],
      [["¿Qué estilo de Manchego tiene de tres a seis meses?", "Curado", "Fresco", "Semicurado", "Viejo"],
       ["Which style of Manchego is three to six months old?", "Curado", "Fresco", "Semicurado", "Viejo"]],
      [["¿En qué provincias se elabora el Manchego PDO?", "Albacete, Ciudad Real, Cuenca y Toledo", "Madrid, Toledo y Ávila", "Badajoz y Cáceres", "Burgos, León y Zamora"],
       ["In which provinces is Manchego PDO made?", "Albacete, Ciudad Real, Cuenca and Toledo", "Madrid, Toledo and Ávila", "Badajoz and Cáceres", "Burgos, León and Zamora"]],
      [["¿De dónde viene el dibujo en zigzag de la corteza del Manchego?", "De las cestas de esparto trenzado donde escurría (hoy, impreso en el molde)", "De las cuerdas con que se cuelga", "De un cepillo metálico", "De las hojas de vid con que se envuelve"],
       ["Where does the zig-zag pattern on Manchego's rind come from?", "The plaited esparto baskets it drained in (now imprinted by the mould)", "The ropes it hangs from", "A wire brush", "Vine leaves it is wrapped in"]]
    ]
  },
  "pecorino-sardo": {
    es: { age: "Dolce: 20-60 días; maturo: de dos a 12 meses", weight: "Dolce: 2 kg; maturo: 3-4 kg", breed: "No especificada", rennet: "Animal",
      milk: "Normalmente pasteurizada o termizada", protected: "PDO: en Cerdeña con leche de oveja", variations: null,
      pairing: "Cannonau (garnacha); rallado sobre pasta y en culurgiones" },
    en: { age: "Mild: 20-60 days; mature: two to 12 months", weight: "Mild: 2kg; mature: 3-4kg", breed: "Not specified", rennet: "Animal",
      milk: "Typically pasteurised or thermised", protected: "PDO: made in Sardinia with sheep's milk", variations: null,
      pairing: "Cannonau (grenache); grated over pasta and in culurgiones" },
    hard: [
      [["¿Con qué otro queso sardo dice la ficha que no hay que confundir el Pecorino Sardo?", "Fiore Sardo", "Pecorino Toscano", "Canestrato Pugliese", "Ricotta Romana"],
       ["Which other Sardinian cheese does the profile say Pecorino Sardo should not be confused with?", "Fiore Sardo", "Pecorino Toscano", "Canestrato Pugliese", "Ricotta Romana"]],
      [["Para el Pecorino Sardo maturo, ¿a qué tamaño se rompe la cuajada?", "Granos de arroz", "Avellanas", "Nueces", "Cubos de 5 cm"],
       ["For mature Pecorino Sardo, what size is the curd broken into?", "Grains of rice", "Hazelnuts", "Walnuts", "5cm cubes"]],
      [["¿Cómo son los lados del Pecorino Sardo dolce?", "Ligeramente convexos", "Rectos", "Cóncavos", "Con dibujo de pleita"],
       ["What are the sides of mild (dolce) Pecorino Sardo like?", "Slightly convex", "Straight", "Concave", "With a basket-weave pattern"]],
      [["¿Qué plato típico sardo lleva Pecorino Sardo, ricotta y menta?", "Culurgiones", "Arancini", "Pesto alla genovese", "Carbonara"],
       ["Which Sardinian speciality is stuffed with ricotta, Pecorino Sardo and mint?", "Culurgiones", "Arancini", "Pesto alla genovese", "Carbonara"]],
      [["Tradicionalmente, ¿cómo se calentaba la leche del Pecorino Sardo?", "En calderos al fuego, con piedras calientes dentro", "Al sol", "Con vapor industrial", "En hornos de leña"],
       ["How was Pecorino Sardo milk traditionally heated?", "In cauldrons over open fires, with hot stones inside", "In the sun", "With industrial steam", "In wood-fired ovens"]]
    ]
  },
  "aged-gouda": {
    es: { age: "Normalmente más de 12 meses", weight: "Normalmente 5-10 kg", breed: null, rennet: "Ambos, según el quesero", milk: "Ambas, según el quesero",
      protected: "Boerenkaas TSG (leche cruda, en granja, Países Bajos); Gouda Holland PGI; Noord-Hollandse Gouda PDO", variations: "Con comino y otras hierbas y especias",
      pairing: "Stout y porter; un tinto robusto y afrutado como Barolo" },
    en: { age: "Typically over 12 months", weight: "Typically 5-10kg", breed: null, rennet: "Both, depending on the cheesemaker", milk: "Both, depending on the cheesemaker",
      protected: "Boerenkaas TSG (raw milk, on the farm, Netherlands); Gouda Holland PGI; Noord-Hollandse Gouda PDO", variations: "Cumin seeds and other herbs and spices",
      pairing: "Stouts and porters; a robust fruity red such as Barolo" },
    hard: [
      [["Al lavar la cuajada del Gouda con agua caliente, ¿a qué temperatura se escalda?", "36 °C", "55 °C", "20 °C", "72 °C"],
       ["When Gouda curds are washed with hot water, to what temperature are they scalded?", "36°C", "55°C", "20°C", "72°C"]],
      [["¿Qué es el Boerenkaas TSG?", "Gouda de leche cruda elaborado en la granja en los Países Bajos", "Gouda ahumado industrial", "Gouda con comino", "Gouda de leche de cabra"],
       ["What is Boerenkaas TSG?", "Raw-milk Gouda made on the farm in the Netherlands", "Industrial smoked Gouda", "Gouda with cumin", "Goats' milk Gouda"]],
      [["¿Por qué lavar la cuajada da al Gouda notas dulces de caramelo?", "Elimina lactosa, así las bacterias producen menos acidez", "Añade azúcar", "Carameliza la leche", "Mata todas las bacterias"],
       ["Why does washing the curd give Gouda sweet caramel notes?", "It removes lactose, so the bacteria produce less acidity", "It adds sugar", "It caramelises the milk", "It kills all the bacteria"]],
      [["¿Cómo cierran los tratos los granjeros y comerciantes en la plaza de Gouda?", "Dándose palmadas en las manos y un apretón de manos", "Con una subasta a la baja", "Brindando con ginebra", "Firmando ante notario"],
       ["How do farmers and merchants seal deals in Gouda's square?", "Slapping hands, then a handshake", "With a Dutch auction", "Toasting with gin", "Signing before a notary"]],
      [["¿Qué NO debe tener la pasta de un buen Aged Gouda?", "Grietas o aberturas irregulares", "Textura cerrada", "Cristales crujientes", "Ojos pequeños"],
       ["What should a good Aged Gouda NOT have?", "Splits or jagged, uneven openings", "A closed texture", "Crunchy crystals", "Small eyes"]]
    ]
  },
  "mimolette": {
    es: { age: "De tres a 24 meses", weight: "3-4 kg", breed: "No especificada", rennet: "Normalmente animal", milk: "Ambas, según el quesero",
      protected: null, variations: null, pairing: "Malbec; ales de granja belgas (saison)" },
    en: { age: "Three to 24 months", weight: "3-4kg", breed: "Not specified", rennet: "Typically animal", milk: "Both, depending on the cheesemaker",
      protected: null, variations: null, pairing: "Malbec; Belgian farmhouse ales (saison)" },
    hard: [
      [["¿Con qué otro nombre se conoce la Mimolette?", "Boule de Lille", "Boule de Paris", "Tête de Moine", "Vieux Hollande"],
       ["What other name is Mimolette known by?", "Boule de Lille", "Boule de Paris", "Tête de Moine", "Vieux Hollande"]],
      [["¿Durante qué guerra se desarrolló la Mimolette?", "La guerra franco-holandesa del siglo XVII", "La Guerra de los Cien Años", "Las guerras napoleónicas", "La Primera Guerra Mundial"],
       ["During which war was Mimolette developed?", "The 17th-century Franco-Dutch war", "The Hundred Years' War", "The Napoleonic Wars", "World War I"]],
      [["¿Qué proceso comparte la Mimolette con el Aged Gouda?", "La cuajada se lava para eliminar lactosa", "Se pincha para el moho azul", "Se ahúma en frío", "Se estira en agua caliente"],
       ["Which process does Mimolette share with Aged Gouda?", "The curds are washed to remove lactose", "It is pierced for blue mould", "It is cold smoked", "It is stretched in hot water"]],
      [["¿Hasta qué edad madura una Mimolette 'très vieille'?", "Hasta 24 meses", "Hasta 3 meses", "Hasta 5 años", "Hasta 6 semanas"],
       ["Up to what age is a 'très vieille' Mimolette matured?", "Up to 24 months", "Up to three months", "Up to five years", "Up to six weeks"]]
    ]
  },
  "le-gruyere": {
    es: { age: "De seis a 18 meses (Classic 6-9; Réserve, mínimo 10)", weight: "35 kg", breed: "No especificada", rennet: "Animal", milk: "Cruda de vaca",
      protected: "AOP: cantones de Friburgo, Vaud, Neuchâtel, Jura y Berna", variations: "Gruyère AOP Classic, Réserve, Bio y Gruyère d'Alpage AOP",
      pairing: "Tintos afrutados (Borgoña, Côtes du Rhône); fondue y repostería salada" },
    en: { age: "Six to 18 months (Classic six to nine; Réserve at least 10)", weight: "35kg", breed: "Not specified", rennet: "Animal", milk: "Raw cows' milk",
      protected: "AOP: cantons of Fribourg, Vaud, Neuchâtel, Jura and Berne", variations: "Gruyère AOP Classic, Réserve, Bio and Gruyère d'Alpage AOP",
      pairing: "Fruity reds (Burgundy, Côtes du Rhône); fondue and baking" },
    hard: [
      [["¿Desde qué año se puede rastrear la historia del Gruyère?", "1115", "1791", "1925", "1515"],
       ["Gruyère can trace its history back to which year?", "1115", "1791", "1925", "1515"]],
      [["¿Cuántas queserías de pueblo elaboran aproximadamente Le Gruyère?", "Unas 165", "Seis", "Unas 1.500", "Una"],
       ["Roughly how many village dairies make Le Gruyère?", "Around 165", "Six", "Around 1,500", "One"]],
      [["¿De dónde vienen normalmente los fermentos (starter) del Gruyère?", "Del suero de la producción del día anterior", "De cultivos liofilizados de laboratorio", "Del pan de centeno", "De las cuevas"],
       ["Where do Gruyère's starter cultures typically come from?", "Whey from the previous day's production", "Freeze-dried lab cultures", "Rye bread", "The caves"]],
      [["¿Cuánto tiempo como mínimo se prensa el Gruyère?", "16 horas", "2 horas", "2 días", "No se prensa"],
       ["For at least how long is Gruyère pressed?", "16 hours", "2 hours", "2 days", "It is not pressed"]],
      [["¿Qué Gruyère se hace en verano en cabañas de montaña, en calderos de cobre al fuego?", "Gruyère d'Alpage AOP", "Gruyère Réserve", "Gruyère Bio", "Gruyère Classic"],
       ["Which Gruyère is made in summer in mountain huts, in copper cauldrons over open fires?", "Gruyère d'Alpage AOP", "Gruyère Réserve", "Gruyère Bio", "Gruyère Classic"]],
      [["¿De qué distancia máxima procede la leche de cada quesería de Gruyère?", "De granjas a menos de 20 km", "De toda Suiza", "De granjas a menos de 200 km", "De la propia quesería"],
       ["How far away can the milk for each Gruyère dairy come from?", "Farms within 20km", "Anywhere in Switzerland", "Farms within 200km", "Only the dairy's own farm"]]
    ]
  },
  "parmigiano-reggiano": {
    es: { age: "De 12 a 36 meses", weight: "38 kg", breed: "No especificada", rennet: "Animal", milk: "Cruda de vaca",
      protected: "PDO: provincias de Parma, Reggio Emilia, Módena y zonas de Mantua y Bolonia", variations: null,
      pairing: "Tintos potentes: Barolo y Primitivo de Apulia" },
    en: { age: "12-36 months", weight: "38kg", breed: "Not specified", rennet: "Animal", milk: "Raw cows' milk",
      protected: "PDO: Parma, Reggio Emilia, Modena and areas of Mantua and Bologna", variations: null,
      pairing: "Powerful reds: Barolo and Primitivo from Puglia" },
    hard: [
      [["¿Qué sello recibe un Parmigiano Reggiano madurado más de 22 meses?", "Plata", "Rojo", "Oro", "Azul"],
       ["Which seal is given to Parmigiano Reggiano matured for over 22 months?", "Silver", "Red", "Gold", "Blue"]],
      [["¿A partir de qué maduración recibe el Parmigiano Reggiano el sello de oro?", "Más de 30 meses", "Más de 18 meses", "Más de 22 meses", "Más de 12 meses"],
       ["Above what maturation does Parmigiano Reggiano get the gold seal?", "Over 30 months", "Over 18 months", "Over 22 months", "Over 12 months"]],
      [["¿Cómo se llama el molde redondo sin fondo del Parmigiano Reggiano?", "Fascèra", "Pelle à brie", "Pleita", "Louche"],
       ["What is the round, bottomless mould for Parmigiano Reggiano called?", "Fascèra", "Pelle à brie", "Pleita", "Louche"]],
      [["¿Cuántos días está aproximadamente en salmuera el Parmigiano Reggiano?", "Unos 24 días", "Unas 24 horas", "Unos 2 meses", "No se sala en salmuera"],
       ["For roughly how long is Parmigiano Reggiano brined?", "About 24 days", "About 24 hours", "About two months", "It is not brined"]],
      [["¿Qué comen las vacas del Parmigiano Reggiano?", "Solo hierba y heno, sin ensilado", "Ensilado de maíz", "Pienso y ensilado", "Lo que quieran"],
       ["What do Parmigiano Reggiano's cows eat?", "Only grass and hay, no silage", "Maize silage", "Feed and silage", "Anything"]],
      [["¿Para qué se usaba tradicionalmente el suero sobrante del Parmigiano Reggiano?", "Para alimentar a los cerdos del jamón de Parma", "Para hacer mozzarella", "Para lavar las cortezas", "Para regar los viñedos"],
       ["What was Parmigiano Reggiano's waste whey traditionally used for?", "Feeding the pigs used for Parma ham", "Making mozzarella", "Washing the rinds", "Watering vineyards"]]
    ]
  }
};
