// English version of the cheese profiles in data.js (same ids).
// Make / Post-Make class names are the official English terms and are shared.

const MAKE_CLASSES_EN = {
  "Soft": "High moisture and a fragile paste. Includes fresh cheeses and those intended for further ripening.",
  "Crumbly": "Acidic, lightly pressed curd that breaks into crumbs. Matured for a few months.",
  "Hard": "Much less moisture, pressed; can be matured for 12 months or more.",
  "Hard Cooked": "The curd is heated to a high temperature to expel whey; very dense, hard paste."
};

const POST_MAKE_CLASSES_EN = {
  "No Post-Make": "No significant post-make treatment: the character comes from the make process.",
  "Internal Mould (Blue)": "Internal (blue) mould: Penicillium roqueforti; the paste is pierced to let air in.",
  "External Mould / Yeast": "External mould or yeast: bloomy rind (Penicillium candidum) or wrinkly rind (Geotrichum).",
  "Washed Rind": "Washed rind: washed with brine/alcohol, encouraging bacteria (B. linens) → orange rind and strong aroma.",
  "Flavoured / Smoked": "Flavoured, coloured or smoked after (or during) the make.",
  "Wrapped / Coated": "Wrapped or coated: cloth (cloth-bound), wax, plastic, etc.",
  "Matured in Brine": "Matured in brine."
};

const CHEESES_EN = {
  "goats-curd": {
    country: "United Kingdom",
    region: "Various British producers",
    milk: "Goat",
    treatment: "Usually pasteurised",
    status: "Not protected",
    appearance: "Rindless; white, moist, spreadable, mousse-like paste.",
    flavour: "Fresh, lactic, clean, slightly acidic and citrusy.",
    facts: [
      "Lactic set: slow coagulation, mainly by acidity, with very little rennet.",
      "The youngest cheese in Level 1: eaten within days.",
      "The starting point of the Make scale: a fresh, unripened cheese."
    ]
  },
  "mozzarella-di-bufala": {
    country: "Italy",
    region: "Campania (also parts of Lazio, Apulia and Molise)",
    milk: "Water buffalo",
    treatment: "Pasteurised or raw (thermised)",
    status: "PDO / DOP (1996)",
    appearance: "Porcelain-white balls with a smooth, shiny surface; kept in its own liquid.",
    flavour: "Milky, fresh, slightly acidic; elastic, juicy texture that releases whey.",
    facts: [
      "Pasta filata: the curd is stretched in hot water and shaped by hand (mozzare = to cut off).",
      "Shapes: tondo, bocconcini, ciliegine, treccia (plait)…",
      "Eaten very fresh, within a few days."
    ]
  },
  "feta": {
    country: "Greece",
    region: "Mainland Greece and the island of Lesbos",
    milk: "Sheep (up to 30% goat)",
    treatment: "Pasteurised or raw",
    status: "PDO (2002)",
    appearance: "Rindless white blocks with small, irregular holes.",
    flavour: "Salty, tangy, creamy; crumbly but moist.",
    facts: [
      "Matured in brine for at least 2 months.",
      "Only sheep's milk, or a blend with goat's milk (max. 30%). Never cow.",
      "The word feta means 'slice' in Greek."
    ]
  },
  "brie-de-meaux": {
    country: "France",
    region: "Paris Basin (Seine-et-Marne, Île-de-France)",
    milk: "Cow",
    treatment: "Raw",
    status: "PDO / AOP (AOC 1980)",
    appearance: "Large flat disc (~36 cm, ~3 kg); velvety white rind with reddish patches; straw-coloured paste.",
    flavour: "Mushroom, butter, nuts, vegetal notes; more intense as it ripens.",
    facts: [
      "Bloomy rind of Penicillium candidum (camemberti).",
      "The curd is moulded with a perforated shovel: the 'pelle à brie'.",
      "Known as 'the king of cheeses'."
    ]
  },
  "camembert-de-normandie": {
    country: "France",
    region: "Normandy",
    milk: "Cow (partly Normande breed)",
    treatment: "Raw",
    status: "PDO / AOP (AOC 1983)",
    appearance: "Small disc (~11 cm, 250 g) in a wooden box; white bloomy rind.",
    flavour: "Mushroom, butter; cabbage/garlic when very ripe.",
    facts: [
      "The curd is ladled into moulds in 5 layers (louche).",
      "Tradition credits Marie Harel, 1791.",
      "Penicillium candidum rind; matured for at least 3 weeks."
    ]
  },
  "brillat-savarin": {
    country: "France",
    region: "Burgundy and Île-de-France",
    milk: "Cow, with added cream",
    treatment: "Pasteurised or raw",
    status: "PGI / IGP (2017)",
    appearance: "Tall cylinder; thin white bloomy rind; very creamy paste.",
    flavour: "Butter, cream, slightly sour; very rich.",
    facts: [
      "Triple cream: milk enriched with cream (≥ 75% fat in dry matter).",
      "Named after the gastronome Jean Anthelme Brillat-Savarin; created in the 1930s by Henri Androuët.",
      "Can be sold fresh (rindless) or ripened with a bloomy rind."
    ]
  },
  "crottin-de-chavignol": {
    country: "France",
    region: "Loire Valley (Sancerre, Cher)",
    milk: "Goat",
    treatment: "Raw",
    status: "PDO / AOP (AOC 1976)",
    appearance: "Small drum (~60 g); thin white rind (Geotrichum) turning blue-grey with age.",
    flavour: "Young: fresh, acidic, hazelnut. Aged: denser, intense, goaty.",
    facts: [
      "Lactic set, like most Loire goats' cheeses.",
      "Classic pairing: Sancerre (Sauvignon Blanc).",
      "Sold at different ages: jeune, demi-sec, sec, repassé."
    ]
  },
  "livarot": {
    country: "France",
    region: "Normandy (Pays d'Auge)",
    milk: "Cow",
    treatment: "Raw or pasteurised",
    status: "PDO / AOP (AOC 1975)",
    appearance: "Disc with an orange rind (coloured with annatto/roucou) bound by 5 strips of reed or paper.",
    flavour: "Powerful, meaty, farmyard aroma; paste milder than its smell.",
    facts: [
      "Nicknamed 'the Colonel' for its five strips (like a colonel's stripes).",
      "The strips (laîches) held the cheese together so it would not slump.",
      "Washed rind → Brevibacterium linens-type bacteria."
    ]
  },
  "epoisses": {
    country: "France",
    region: "Burgundy",
    milk: "Cow",
    treatment: "Raw or pasteurised",
    status: "PDO / AOP (AOC 1991)",
    appearance: "Disc in a wooden box; shiny, sticky orange-red rind; runny paste.",
    flavour: "Meaty, salty, intense; creamy paste, almost liquid in the centre.",
    facts: [
      "Washed with Marc de Bourgogne (grape-pomace brandy).",
      "Almost disappeared after World War II; revived by Robert Berthaut in 1956.",
      "Mainly lactic curd."
    ]
  },
  "single-gloucester": {
    country: "United Kingdom (England)",
    region: "Gloucestershire",
    milk: "Cow",
    treatment: "Raw or pasteurised",
    status: "PDO (1996)",
    appearance: "Small wheel with a natural rind; pale white, open paste.",
    flavour: "Mild, milky, slightly grassy and clean.",
    facts: [
      "Can only be made on Gloucestershire farms with a herd of Gloucester cattle.",
      "Traditionally made with partly skimmed milk; younger and lighter than Double Gloucester.",
      "It was the cheese the farmers ate themselves."
    ]
  },
  "yorkshire-wensleydale": {
    country: "United Kingdom (England)",
    region: "Wensleydale, North Yorkshire",
    milk: "Cow",
    treatment: "Pasteurised",
    status: "PGI (2013)",
    appearance: "White, crumbly, moist paste.",
    flavour: "Fresh, milky, acidic, mild honey; flaky.",
    facts: [
      "Its origin is credited to French Cistercian monks (12th century, Jervaulx Abbey).",
      "Made in Hawes (Wensleydale Creamery). Famous thanks to Wallace & Gromit.",
      "Traditionally eaten with apple pie or fruitcake."
    ]
  },
  "cloth-bound-cheshire": {
    country: "United Kingdom (England)",
    region: "Cheshire and Shropshire",
    milk: "Cow",
    treatment: "Raw (e.g. Appleby's) or pasteurised",
    status: "Not protected",
    appearance: "Tall cloth-wrapped cylinder; crumbly paste, often peach-coloured (annatto).",
    flavour: "Salty, mineral, tangy, fresh.",
    facts: [
      "Considered one of the oldest named cheeses in Britain.",
      "Its salty character is attributed to the salt deposits beneath the Cheshire pastures.",
      "Cloth-bound, which lets the cheese breathe."
    ]
  },
  "block-cheddar": {
    country: "United Kingdom (and worldwide)",
    region: "Industrial production",
    milk: "Cow",
    treatment: "Pasteurised",
    status: "Not protected",
    appearance: "Rindless rectangular blocks (~20 kg), matured in plastic/vacuum packs.",
    flavour: "Milky, sweet, slightly acidic; from mild to extra mature.",
    facts: [
      "Cheddaring: blocks of curd are stacked and turned to expel whey and develop acidity.",
      "Rindless: matured vacuum-packed in plastic.",
      "The most eaten cheese in the United Kingdom."
    ]
  },
  "cloth-bound-cheddar": {
    country: "United Kingdom (England)",
    region: "Somerset / West Country",
    milk: "Cow",
    treatment: "Often raw",
    status: "May be West Country Farmhouse Cheddar PDO",
    appearance: "Tall wheel wrapped in lard-rubbed cloth; natural rind with moulds; yellow paste.",
    flavour: "Complex: brothy, nutty, earthy, fruity, long finish.",
    facts: [
      "Cheddaring + milling + pressing; matured for 12 months or more.",
      "The cloth is rubbed with lard and lets the cheese breathe.",
      "Examples: Montgomery's, Keen's, Westcombe (Somerset Artisan Cheddar)."
    ]
  },
  "smoked-cheddar": {
    country: "United Kingdom",
    region: "Various",
    milk: "Cow",
    treatment: "Usually pasteurised",
    status: "Not protected",
    appearance: "Golden-brown smoked surface; yellow paste.",
    flavour: "Smoky, woody, combined with the cheddar flavour.",
    facts: [
      "Make = Hard (cheddar); the smoking is the Post-Make.",
      "Example of a cheese having one Make class but one or more Post-Make classes.",
      "Can be cold-smoked over woods such as oak or beech."
    ]
  },
  "blue-stilton": {
    country: "United Kingdom (England)",
    region: "Derbyshire, Leicestershire and Nottinghamshire",
    milk: "Cow",
    treatment: "Pasteurised (mandatory)",
    status: "PDO (1996)",
    appearance: "Tall cylinder with a rough natural crust; cream paste with radiating blue veins.",
    flavour: "Creamy, mineral, salty, tangy; buttery, crumbly texture.",
    facts: [
      "Only in 3 counties; must be pasteurised, cylindrical, unpressed and form its own crust.",
      "Named after the village of Stilton, where it was sold, but it cannot be made there.",
      "Pierced with needles so air gets in and Penicillium roqueforti grows. E.g. Colston Bassett."
    ]
  },
  "gorgonzola": {
    country: "Italy",
    region: "Lombardy and Piedmont",
    milk: "Cow",
    treatment: "Pasteurised",
    status: "PDO / DOP (1996)",
    appearance: "White-to-straw paste with green-blue veins; wrapped in foil.",
    flavour: "Dolce: creamy, mild, sweet. Piccante: firmer, spicy and intense.",
    facts: [
      "Two types: Dolce and Piccante.",
      "Named after the town of Gorgonzola, near Milan.",
      "Penicillium roqueforti; pierced to let air in."
    ]
  },
  "roquefort": {
    country: "France",
    region: "Aveyron (Roquefort-sur-Soulzon)",
    milk: "Sheep (Lacaune breed)",
    treatment: "Raw (mandatory)",
    status: "PDO / AOP (first French AOC, 1925)",
    appearance: "Rindless cylinder wrapped in foil; ivory paste heavily veined blue-green.",
    flavour: "Salty, intense, spicy, buttery, with sweet sheep's-milk notes.",
    facts: [
      "Matured in the natural caves of Mont Combalou (fleurines = ventilation fissures).",
      "It was the first French cheese to get an AOC (1925).",
      "Penicillium roqueforti was traditionally grown on rye bread."
    ]
  },
  "morbier": {
    country: "France",
    region: "Franche-Comté (Jura mountains)",
    milk: "Cow (Montbéliarde / French Simmental)",
    treatment: "Raw",
    status: "PDO / AOP (AOC 2000)",
    appearance: "Wheel with a rubbed beige-orange rind; black horizontal line of vegetable ash in the middle.",
    flavour: "Mild, milky, fruity, nutty; the rind smells stronger than the paste.",
    facts: [
      "The charcoal line used to separate the morning curd from the evening curd.",
      "The rind is rubbed/washed with brine.",
      "Supple, unctuous paste with few eyes."
    ]
  },
  "manchego": {
    country: "Spain",
    region: "La Mancha (Castilla-La Mancha)",
    milk: "Sheep (Manchega breed)",
    treatment: "Raw or pasteurised",
    status: "PDO / DOP (DO 1984)",
    appearance: "Rind with a woven esparto-grass pattern (pleita) and the 'flor' on the faces; ivory paste.",
    flavour: "Nutty, buttery, caramel, slightly piquant with age.",
    facts: [
      "Only milk from Manchega sheep.",
      "Minimum maturation 60 days (30 for small formats), up to 2 years.",
      "The pleita (zig-zag) and flor (floral relief) imitate the traditional moulds."
    ]
  },
  "pecorino-sardo": {
    country: "Italy",
    region: "Sardinia",
    milk: "Sheep",
    treatment: "Raw or thermised/pasteurised",
    status: "PDO / DOP (1996)",
    appearance: "Smooth rind from straw to brown; white to pale yellow paste.",
    flavour: "Dolce: mild, milky. Maturo: more intense, salty, nutty.",
    facts: [
      "Two types: Dolce (20-60 days) and Maturo (over 2 months).",
      "'Pecora' = sheep in Italian.",
      "Not to be confused with Pecorino Romano, which is saltier and harder."
    ]
  },
  "aged-gouda": {
    country: "Netherlands",
    region: "Holland",
    milk: "Cow",
    treatment: "Usually pasteurised (Boerenkaas: raw)",
    status: "May be Gouda Holland PGI",
    appearance: "Wheel with a wax/plastic coating; amber paste with crystals.",
    flavour: "Caramel, toffee, butterscotch, nutty; crunchy from the crystals.",
    facts: [
      "Washed curd: some of the whey is replaced with hot water → less acidic, sweeter.",
      "The crunchy crystals are tyrosine (an amino acid) and calcium lactate.",
      "Coated with wax or a plastic layer for maturing."
    ]
  },
  "mimolette": {
    country: "France",
    region: "Northern France (Lille)",
    milk: "Cow",
    treatment: "Usually pasteurised",
    status: "Not protected",
    appearance: "Melon-like ball; pitted grey-brown rind; bright orange paste.",
    flavour: "Nutty, dried fruit, caramel; more intense with age.",
    facts: [
      "Orange colour from annatto.",
      "Created under Louis XIV (Colbert) to replace Dutch Edam.",
      "Cheese mites (cirons) feed on the rind and give it its pitted look."
    ]
  },
  "le-gruyere": {
    country: "Switzerland",
    region: "Cantons of Fribourg, Vaud, Neuchâtel, Jura and part of Bern",
    milk: "Cow",
    treatment: "Raw (mandatory)",
    status: "Swiss AOP (2001) / PDO",
    appearance: "Large wheel (~35 kg); grainy brown rind; ivory paste with hardly any eyes.",
    flavour: "Fruity, nutty, brothy, slightly salty; may have crystals.",
    facts: [
      "The rind is rubbed with brine (smear) during maturation.",
      "Made in copper vats; the curd is cooked (~57 °C).",
      "Named after the town of Gruyères (Fribourg). Minimum maturation 5 months."
    ]
  },
  "parmigiano-reggiano": {
    country: "Italy",
    region: "Parma, Reggio Emilia, Modena, Bologna (west of the Reno) and Mantua (south of the Po)",
    milk: "Cow",
    treatment: "Raw (mandatory)",
    status: "PDO / DOP (1996)",
    appearance: "Large wheel (~40 kg); golden rind with the dotted name; grainy paste (grana).",
    flavour: "Umami, brothy, nutty, pineapple, salty; crunchy crystals.",
    facts: [
      "Evening milk skimmed by natural creaming + whole morning milk.",
      "Copper vats; curd cooked to ~55 °C. No additives (only milk, salt and rennet).",
      "Minimum maturation 12 months; the consortium inspects and fire-brands the wheels."
    ]
  }
};
