/* ================================================================
   GLOBAL TRADE FINDER — Datos de referencia
   - Geografía: regiones y subregiones según la clasificación M49 de la ONU
   - Productos: Sistema Armonizado (HS 2022) — 21 secciones, 96 capítulos,
     partidas y subpartidas seleccionadas
   - Empresas: DATOS DE DEMOSTRACIÓN (ficticias) generados en app.js
   ================================================================ */

const GEO = [
  { id:"AF", es:"África", en:"Africa", subs:[
    { id:"AF-N", es:"Norte de África", en:"Northern Africa", c:["DZ","EG","MA","TN"] },
    { id:"AF-W", es:"África Occidental", en:"Western Africa", c:["NG","GH","CI","SN"] },
    { id:"AF-E", es:"África Oriental", en:"Eastern Africa", c:["KE","ET","TZ","UG"] },
    { id:"AF-M", es:"África Central", en:"Middle Africa", c:["CM","AO"] },
    { id:"AF-S", es:"África Austral", en:"Southern Africa", c:["ZA","BW","NA"] } ]},
  { id:"AM", es:"América", en:"Americas", subs:[
    { id:"AM-N", es:"Norteamérica", en:"Northern America", c:["US","CA"] },
    { id:"AM-C", es:"Centroamérica y México", en:"Central America & Mexico", c:["MX","GT","HN","SV","CR","PA"] },
    { id:"AM-K", es:"Caribe", en:"Caribbean", c:["DO","JM","TT","PR"] },
    { id:"AM-S", es:"Sudamérica", en:"South America", c:["CO","BR","AR","CL","PE","EC","UY","PY","BO"] } ]},
  { id:"AS", es:"Asia", en:"Asia", subs:[
    { id:"AS-E", es:"Asia Oriental", en:"Eastern Asia", c:["CN","JP","KR","MN"] },
    { id:"AS-SE", es:"Sudeste Asiático", en:"South-eastern Asia", c:["VN","TH","ID","MY","SG","PH"] },
    { id:"AS-S", es:"Asia Meridional", en:"Southern Asia", c:["IN","BD","PK","LK"] },
    { id:"AS-W", es:"Asia Occidental", en:"Western Asia", c:["AE","SA","TR","IL","QA"] },
    { id:"AS-C", es:"Asia Central", en:"Central Asia", c:["KZ","UZ"] } ]},
  { id:"EU", es:"Europa", en:"Europe", subs:[
    { id:"EU-W", es:"Europa Occidental", en:"Western Europe", c:["DE","FR","NL","BE","CH","AT"] },
    { id:"EU-N", es:"Europa del Norte", en:"Northern Europe", c:["GB","IE","SE","NO","DK","FI"] },
    { id:"EU-S", es:"Europa Meridional", en:"Southern Europe", c:["ES","IT","PT","GR"] },
    { id:"EU-E", es:"Europa Oriental", en:"Eastern Europe", c:["PL","CZ","RO","HU","UA"] } ]},
  { id:"OC", es:"Oceanía", en:"Oceania", subs:[
    { id:"OC-A", es:"Australia y Nueva Zelanda", en:"Australia & New Zealand", c:["AU","NZ"] },
    { id:"OC-M", es:"Melanesia", en:"Melanesia", c:["PG","FJ"] } ]}
];

/* Moneda y sufijo societario de demostración por país */
const LEGAL = { CO:"S.A.S.", MX:"S.A. de C.V.", BR:"Ltda.", AR:"S.R.L.", CL:"SpA", PE:"S.A.C.", EC:"Cía. Ltda.", UY:"S.R.L.", PY:"S.A.", BO:"S.R.L.",
  GT:"S.A.", HN:"S. de R.L.", SV:"S.A. de C.V.", CR:"S.R.L.", PA:"Corp.", DO:"S.R.L.", JM:"Ltd.", TT:"Ltd.", PR:"LLC",
  US:"Inc.", CA:"Inc.", GB:"Ltd.", IE:"Ltd.", DE:"GmbH", AT:"GmbH", CH:"AG", FR:"SAS", BE:"BV", NL:"B.V.", ES:"S.L.", IT:"S.r.l.", PT:"Lda.", GR:"S.A.",
  SE:"AB", NO:"AS", DK:"ApS", FI:"Oy", PL:"Sp. z o.o.", CZ:"s.r.o.", RO:"S.R.L.", HU:"Kft.", UA:"LLC",
  CN:"Co., Ltd.", JP:"K.K.", KR:"Co., Ltd.", MN:"LLC", VN:"JSC", TH:"Co., Ltd.", ID:"PT", MY:"Sdn. Bhd.", SG:"Pte. Ltd.", PH:"Inc.",
  IN:"Pvt. Ltd.", BD:"Ltd.", PK:"(Pvt.) Ltd.", LK:"(Pvt) Ltd.", AE:"LLC", SA:"Co.", TR:"A.Ş.", IL:"Ltd.", QA:"W.L.L.", KZ:"LLP", UZ:"LLC",
  AU:"Pty Ltd", NZ:"Ltd.", PG:"Ltd.", FJ:"Ltd.", ZA:"(Pty) Ltd", BW:"(Pty) Ltd", NA:"(Pty) Ltd", NG:"Ltd.", GH:"Ltd.", CI:"SARL", SN:"SARL",
  KE:"Ltd.", ET:"PLC", TZ:"Ltd.", UG:"Ltd.", CM:"SARL", AO:"Lda.", DZ:"SARL", EG:"S.A.E.", MA:"SARL", TN:"SARL" };

/* Sectores económicos (agrupan partidas HS) */
const SECTORS = [
  { id:"agro", es:"Agroindustria y alimentos frescos", en:"Agribusiness & fresh produce" },
  { id:"food", es:"Alimentos procesados y bebidas", en:"Processed food & beverages" },
  { id:"flor", es:"Flores y plantas", en:"Flowers & plants" },
  { id:"ener", es:"Energía y minería", en:"Energy & mining" },
  { id:"chem", es:"Química, farmacia y cosmética", en:"Chemicals, pharma & cosmetics" },
  { id:"plas", es:"Plásticos y caucho", en:"Plastics & rubber" },
  { id:"text", es:"Textil, confección y calzado", en:"Textiles, apparel & footwear" },
  { id:"wood", es:"Madera, papel y empaques", en:"Wood, paper & packaging" },
  { id:"metl", es:"Metales y piedras preciosas", en:"Metals & precious stones" },
  { id:"mach", es:"Maquinaria y electrónica", en:"Machinery & electronics" },
  { id:"auto", es:"Automotriz y transporte", en:"Automotive & transport" },
  { id:"med",  es:"Dispositivos médicos", en:"Medical devices" },
  { id:"cons", es:"Construcción y hogar", en:"Construction & home" }
];

/* HS 2022 — Secciones */
const HS_SECTIONS = [
  { id:"I",    ch:[1,5],   es:"Animales vivos y productos del reino animal", en:"Live animals; animal products" },
  { id:"II",   ch:[6,14],  es:"Productos del reino vegetal", en:"Vegetable products" },
  { id:"III",  ch:[15,15], es:"Grasas y aceites animales o vegetales", en:"Animal or vegetable fats and oils" },
  { id:"IV",   ch:[16,24], es:"Productos de las industrias alimentarias; bebidas; tabaco", en:"Prepared foodstuffs; beverages; tobacco" },
  { id:"V",    ch:[25,27], es:"Productos minerales", en:"Mineral products" },
  { id:"VI",   ch:[28,38], es:"Productos de las industrias químicas", en:"Products of the chemical industries" },
  { id:"VII",  ch:[39,40], es:"Plástico y caucho, y sus manufacturas", en:"Plastics and rubber" },
  { id:"VIII", ch:[41,43], es:"Pieles, cueros y sus manufacturas", en:"Hides, skins, leather" },
  { id:"IX",   ch:[44,46], es:"Madera, corcho y cestería", en:"Wood, cork and basketware" },
  { id:"X",    ch:[47,49], es:"Pasta de madera, papel y cartón", en:"Pulp, paper and paperboard" },
  { id:"XI",   ch:[50,63], es:"Materias textiles y sus manufacturas", en:"Textiles and textile articles" },
  { id:"XII",  ch:[64,67], es:"Calzado, sombreros y paraguas", en:"Footwear, headgear, umbrellas" },
  { id:"XIII", ch:[68,70], es:"Manufacturas de piedra, cerámica y vidrio", en:"Stone, ceramic and glass" },
  { id:"XIV",  ch:[71,71], es:"Perlas, piedras y metales preciosos", en:"Pearls, precious stones and metals" },
  { id:"XV",   ch:[72,83], es:"Metales comunes y sus manufacturas", en:"Base metals and articles" },
  { id:"XVI",  ch:[84,85], es:"Máquinas y aparatos eléctricos", en:"Machinery and electrical equipment" },
  { id:"XVII", ch:[86,89], es:"Material de transporte", en:"Vehicles, aircraft, vessels" },
  { id:"XVIII",ch:[90,92], es:"Óptica, instrumentos médicos y de medida", en:"Optical, medical and measuring instruments" },
  { id:"XIX",  ch:[93,93], es:"Armas y municiones", en:"Arms and ammunition" },
  { id:"XX",   ch:[94,96], es:"Mercancías y productos diversos", en:"Miscellaneous manufactured articles" },
  { id:"XXI",  ch:[97,97], es:"Objetos de arte y antigüedades", en:"Works of art and antiques" }
];

/* HS 2022 — Capítulos [código, español, inglés] (el 77 está reservado) */
const HS_CHAPTERS = [
 ["01","Animales vivos","Live animals"],
 ["02","Carne y despojos comestibles","Meat and edible offal"],
 ["03","Pescados, crustáceos y moluscos","Fish, crustaceans and molluscs"],
 ["04","Leche y lácteos; huevos; miel","Dairy produce; eggs; honey"],
 ["05","Demás productos de origen animal","Other products of animal origin"],
 ["06","Plantas vivas y flores cortadas","Live plants and cut flowers"],
 ["07","Hortalizas, plantas, raíces y tubérculos","Edible vegetables, roots and tubers"],
 ["08","Frutas y frutos comestibles","Edible fruit and nuts"],
 ["09","Café, té, yerba mate y especias","Coffee, tea, maté and spices"],
 ["10","Cereales","Cereals"],
 ["11","Productos de la molinería; malta; almidón","Milling products; malt; starches"],
 ["12","Semillas y frutos oleaginosos","Oil seeds and oleaginous fruits"],
 ["13","Gomas, resinas y extractos vegetales","Lac; gums, resins, vegetable extracts"],
 ["14","Materias trenzables vegetales","Vegetable plaiting materials"],
 ["15","Grasas y aceites animales o vegetales","Animal or vegetable fats and oils"],
 ["16","Preparaciones de carne o pescado","Preparations of meat or fish"],
 ["17","Azúcares y artículos de confitería","Sugars and sugar confectionery"],
 ["18","Cacao y sus preparaciones","Cocoa and cocoa preparations"],
 ["19","Preparaciones a base de cereales o leche","Preparations of cereals, flour or milk"],
 ["20","Preparaciones de hortalizas y frutas","Preparations of vegetables and fruit"],
 ["21","Preparaciones alimenticias diversas","Miscellaneous edible preparations"],
 ["22","Bebidas, líquidos alcohólicos y vinagre","Beverages, spirits and vinegar"],
 ["23","Residuos alimentarios; alimentos para animales","Food residues; animal fodder"],
 ["24","Tabaco y sucedáneos","Tobacco and substitutes"],
 ["25","Sal, azufre, tierras, piedras, cales y cementos","Salt, sulphur, earths, stone, cement"],
 ["26","Minerales metalíferos, escorias y cenizas","Ores, slag and ash"],
 ["27","Combustibles y aceites minerales","Mineral fuels and mineral oils"],
 ["28","Productos químicos inorgánicos","Inorganic chemicals"],
 ["29","Productos químicos orgánicos","Organic chemicals"],
 ["30","Productos farmacéuticos","Pharmaceutical products"],
 ["31","Abonos","Fertilisers"],
 ["32","Extractos curtientes y tintóreos; pinturas","Tanning and dyeing extracts; paints"],
 ["33","Aceites esenciales; perfumería y cosmética","Essential oils; perfumery and cosmetics"],
 ["34","Jabones, ceras y preparaciones de limpieza","Soap, waxes, cleaning preparations"],
 ["35","Materias albuminoideas; colas; enzimas","Albuminoidal substances; glues; enzymes"],
 ["36","Pólvoras y explosivos; fósforos","Explosives; matches"],
 ["37","Productos fotográficos y cinematográficos","Photographic and cinematographic goods"],
 ["38","Productos diversos de las industrias químicas","Miscellaneous chemical products"],
 ["39","Plástico y sus manufacturas","Plastics and articles thereof"],
 ["40","Caucho y sus manufacturas","Rubber and articles thereof"],
 ["41","Pieles y cueros","Raw hides, skins and leather"],
 ["42","Manufacturas de cuero; artículos de viaje","Articles of leather; travel goods"],
 ["43","Peletería","Furskins and artificial fur"],
 ["44","Madera y manufacturas de madera","Wood and articles of wood"],
 ["45","Corcho y sus manufacturas","Cork and articles of cork"],
 ["46","Manufacturas de espartería o cestería","Basketware and wickerwork"],
 ["47","Pasta de madera; papel para reciclar","Pulp of wood; recovered paper"],
 ["48","Papel y cartón","Paper and paperboard"],
 ["49","Productos editoriales y de imprenta","Printed books and newspapers"],
 ["50","Seda","Silk"],
 ["51","Lana y pelo fino","Wool and fine animal hair"],
 ["52","Algodón","Cotton"],
 ["53","Demás fibras textiles vegetales","Other vegetable textile fibres"],
 ["54","Filamentos sintéticos o artificiales","Man-made filaments"],
 ["55","Fibras sintéticas o artificiales discontinuas","Man-made staple fibres"],
 ["56","Guata, fieltro y cordelería","Wadding, felt and twine"],
 ["57","Alfombras","Carpets"],
 ["58","Tejidos especiales; encajes; bordados","Special woven fabrics; lace; embroidery"],
 ["59","Tejidos impregnados o recubiertos","Coated or laminated textile fabrics"],
 ["60","Tejidos de punto","Knitted or crocheted fabrics"],
 ["61","Prendas de vestir de punto","Apparel, knitted or crocheted"],
 ["62","Prendas de vestir, excepto de punto","Apparel, not knitted"],
 ["63","Demás artículos textiles confeccionados","Other made-up textile articles"],
 ["64","Calzado","Footwear"],
 ["65","Sombreros y tocados","Headgear"],
 ["66","Paraguas y bastones","Umbrellas and walking sticks"],
 ["67","Plumas preparadas; flores artificiales","Prepared feathers; artificial flowers"],
 ["68","Manufacturas de piedra, yeso y cemento","Articles of stone, plaster, cement"],
 ["69","Productos cerámicos","Ceramic products"],
 ["70","Vidrio y sus manufacturas","Glass and glassware"],
 ["71","Perlas, piedras y metales preciosos; joyería","Pearls, precious stones, metals; jewellery"],
 ["72","Fundición, hierro y acero","Iron and steel"],
 ["73","Manufacturas de hierro o acero","Articles of iron or steel"],
 ["74","Cobre y sus manufacturas","Copper and articles thereof"],
 ["75","Níquel y sus manufacturas","Nickel and articles thereof"],
 ["76","Aluminio y sus manufacturas","Aluminium and articles thereof"],
 ["78","Plomo y sus manufacturas","Lead and articles thereof"],
 ["79","Cinc y sus manufacturas","Zinc and articles thereof"],
 ["80","Estaño y sus manufacturas","Tin and articles thereof"],
 ["81","Demás metales comunes; cermets","Other base metals; cermets"],
 ["82","Herramientas y cuchillería","Tools, implements, cutlery"],
 ["83","Manufacturas diversas de metal común","Miscellaneous articles of base metal"],
 ["84","Reactores nucleares, calderas y máquinas","Nuclear reactors, boilers, machinery"],
 ["85","Máquinas y aparatos eléctricos","Electrical machinery and equipment"],
 ["86","Vehículos y material ferroviario","Railway locomotives and rolling stock"],
 ["87","Vehículos automóviles, tractores y partes","Vehicles other than railway, and parts"],
 ["88","Aeronaves y vehículos espaciales","Aircraft and spacecraft"],
 ["89","Barcos y estructuras flotantes","Ships, boats and floating structures"],
 ["90","Instrumentos de óptica, medida y médico-quirúrgicos","Optical, measuring and medical instruments"],
 ["91","Relojería","Clocks and watches"],
 ["92","Instrumentos musicales","Musical instruments"],
 ["93","Armas y municiones","Arms and ammunition"],
 ["94","Muebles; colchones; luminarias; prefabricados","Furniture; bedding; lighting; prefabricated buildings"],
 ["95","Juguetes, juegos y artículos de deporte","Toys, games and sports requisites"],
 ["96","Manufacturas diversas","Miscellaneous manufactured articles"],
 ["97","Objetos de arte y antigüedades","Works of art and antiques"]
];

/* Partidas (4 dígitos) y subpartidas (6 dígitos) con productos de búsqueda.
   [código, español, inglés, sector, palabras clave adicionales] */
const HS_CODES = [
 ["0201","Carne de bovino, fresca o refrigerada","Meat of bovine animals, fresh or chilled","agro","res carne beef"],
 ["0207","Carne de aves de corral","Meat of poultry","agro","pollo chicken"],
 ["0306","Crustáceos","Crustaceans","agro","camarón langostino shrimp"],
 ["030617","Camarones y langostinos congelados","Frozen shrimps and prawns","agro","camarón shrimp"],
 ["0402","Leche y nata concentradas o en polvo","Milk and cream, concentrated or powdered","food","leche en polvo milk powder"],
 ["0409","Miel natural","Natural honey","agro","honey"],
 ["0603","Flores y capullos cortados","Cut flowers and flower buds","flor","flores flowers"],
 ["060311","Rosas cortadas frescas","Fresh cut roses","flor","rosas roses"],
 ["060312","Claveles frescos","Fresh carnations","flor","clavel carnation"],
 ["060319","Demás flores frescas (crisantemos, hortensias, alstroemerias)","Other fresh cut flowers","flor","hortensia crisantemo"],
 ["0709","Demás hortalizas frescas","Other vegetables, fresh or chilled","agro","pimentón pimiento peppers"],
 ["0803","Bananas y plátanos","Bananas, including plantains","agro","banano plátano"],
 ["080390","Bananas frescas","Fresh bananas","agro","banano banana"],
 ["0804","Dátiles, piñas, aguacates, guayabas y mangos","Dates, pineapples, avocados, guavas, mangoes","agro","piña"],
 ["080440","Aguacates (paltas)","Avocados","agro","aguacate hass palta avocado"],
 ["080450","Guayabas y mangos","Guavas and mangoes","agro","mango guayaba"],
 ["0805","Agrios (cítricos)","Citrus fruit","agro","limón naranja lime lemon orange"],
 ["0810","Demás frutas frescas","Other fresh fruit","agro","pitahaya gulupa uchuva arándano berries"],
 ["0901","Café","Coffee","agro","café coffee"],
 ["090111","Café sin tostar, sin descafeinar (café verde)","Coffee, not roasted, not decaffeinated (green coffee)","agro","café verde green coffee"],
 ["090121","Café tostado, sin descafeinar","Roasted coffee, not decaffeinated","food","café tostado roasted coffee"],
 ["0902","Té","Tea","agro","té tea"],
 ["0904","Pimienta y ajíes secos","Pepper; dried capsicum","agro","pimienta pepper chili"],
 ["1001","Trigo y morcajo","Wheat and meslin","agro","trigo wheat"],
 ["1005","Maíz","Maize (corn)","agro","maíz corn"],
 ["1006","Arroz","Rice","agro","arroz rice"],
 ["1201","Habas de soja","Soya beans","agro","soya soy"],
 ["1511","Aceite de palma","Palm oil","food","palma palm oil"],
 ["151110","Aceite de palma en bruto","Crude palm oil","food","palma cruda crude palm"],
 ["1701","Azúcar de caña o remolacha","Cane or beet sugar","food","azúcar sugar"],
 ["170114","Azúcar de caña en bruto","Raw cane sugar","food","azúcar crudo raw sugar"],
 ["1801","Cacao en grano","Cocoa beans","agro","cacao cocoa"],
 ["1806","Chocolate y preparaciones con cacao","Chocolate and cocoa preparations","food","chocolate"],
 ["2009","Jugos de frutas","Fruit juices","food","jugo zumo juice"],
 ["2204","Vino de uvas frescas","Wine of fresh grapes","food","vino wine"],
 ["2208","Alcohol etílico sin desnaturalizar; licores","Undenatured ethyl alcohol; spirits","food","licor spirits"],
 ["220840","Ron y demás aguardientes de caña","Rum and other cane spirits","food","ron rum"],
 ["2304","Tortas de soja","Soya-bean oil-cake","agro","torta soya soybean meal"],
 ["2402","Cigarros y cigarrillos","Cigars and cigarettes","food","tabaco cigars"],
 ["2523","Cemento","Portland cement","cons","cemento cement"],
 ["2603","Minerales de cobre","Copper ores and concentrates","ener","cobre copper ore"],
 ["2701","Hullas; carbón mineral","Coal","ener","carbón coal"],
 ["270112","Hulla bituminosa","Bituminous coal","ener","carbón térmico thermal coal"],
 ["2709","Aceites crudos de petróleo","Crude petroleum oils","ener","petróleo crudo crude oil"],
 ["2710","Aceites de petróleo refinados (combustibles)","Refined petroleum oils (fuels)","ener","diésel gasolina diesel fuel"],
 ["2711","Gas de petróleo e hidrocarburos gaseosos","Petroleum gases","ener","gas natural lng glp"],
 ["271111","Gas natural licuado (GNL)","Liquefied natural gas (LNG)","ener","gnl lng"],
 ["3004","Medicamentos dosificados","Medicaments in measured doses","chem","medicamentos medicines pharma"],
 ["3102","Abonos minerales nitrogenados","Mineral nitrogenous fertilisers","chem","urea fertilizante fertilizer"],
 ["3304","Productos de belleza y maquillaje","Beauty and make-up preparations","chem","cosméticos cosmetics"],
 ["3901","Polímeros de etileno","Polymers of ethylene","plas","polietileno polyethylene"],
 ["3923","Envases y tapas de plástico","Plastic packaging and closures","plas","empaques envases packaging"],
 ["4011","Neumáticos nuevos de caucho","New pneumatic rubber tyres","plas","llantas tires"],
 ["4107","Cuero preparado","Prepared leather","text","cuero leather"],
 ["4202","Baúles, maletas, bolsos y carteras","Trunks, suitcases, handbags","text","bolsos maletas handbags"],
 ["4407","Madera aserrada","Sawn wood","wood","madera lumber"],
 ["4819","Cajas y envases de papel o cartón","Cartons and boxes of paper","wood","cajas cartón boxes"],
 ["5201","Algodón sin cardar ni peinar","Cotton, not carded or combed","text","algodón cotton"],
 ["6109","Camisetas de punto","T-shirts, knitted","text","camisetas t-shirts"],
 ["6110","Suéteres y chalecos de punto","Jerseys and pullovers, knitted","text","suéter sweater"],
 ["6203","Trajes y pantalones para hombre","Men's suits and trousers","text","pantalones jeans"],
 ["6204","Trajes, vestidos y faldas para mujer","Women's suits, dresses and skirts","text","vestidos dresses"],
 ["6212","Sostenes, fajas y corsés","Brassieres, girdles and corsets","text","fajas shapewear brasieres"],
 ["6403","Calzado con parte superior de cuero","Footwear with leather uppers","text","zapatos calzado shoes"],
 ["6907","Baldosas y placas cerámicas","Ceramic flags and tiles","cons","baldosas pisos tiles"],
 ["7102","Diamantes","Diamonds","metl","diamantes diamonds"],
 ["7103","Piedras preciosas (excepto diamantes)","Precious stones (other than diamonds)","metl","esmeraldas emeralds"],
 ["7108","Oro en bruto o semilabrado","Gold, unwrought or semi-manufactured","metl","oro gold"],
 ["710812","Oro en bruto (no monetario)","Gold, unwrought, non-monetary","metl","oro gold bullion"],
 ["7113","Artículos de joyería","Articles of jewellery","metl","joyas jewelry"],
 ["7208","Productos laminados planos de hierro o acero","Flat-rolled iron or steel","metl","acero steel"],
 ["7403","Cobre refinado","Refined copper","metl","cobre cátodos copper cathodes"],
 ["7601","Aluminio en bruto","Unwrought aluminium","metl","aluminio aluminum"],
 ["8471","Máquinas para procesamiento de datos (computadores)","Automatic data-processing machines","mach","computadores laptops computers"],
 ["8481","Válvulas y grifería","Taps, cocks and valves","mach","válvulas valves"],
 ["8517","Teléfonos y equipos de telecomunicación","Telephones and telecom equipment","mach","celulares phones"],
 ["851713","Teléfonos inteligentes","Smartphones","mach","smartphone celular"],
 ["8541","Semiconductores y celdas fotovoltaicas","Semiconductors and photovoltaic cells","mach","paneles solares solar panels"],
 ["854143","Módulos fotovoltaicos (paneles solares)","Photovoltaic modules (solar panels)","ener","paneles solares solar"],
 ["8544","Cables y conductores eléctricos aislados","Insulated wire and cable","mach","cables wire"],
 ["8703","Automóviles de turismo","Motor cars for passengers","auto","carros autos cars"],
 ["8708","Partes y accesorios de vehículos","Parts and accessories of vehicles","auto","autopartes auto parts"],
 ["9018","Instrumentos y aparatos de medicina","Medical and surgical instruments","med","equipos médicos medical devices"],
 ["9021","Artículos de ortopedia y prótesis","Orthopaedic appliances and prostheses","med","prótesis ortopedia"],
 ["9403","Demás muebles","Other furniture","cons","muebles furniture"],
 ["9506","Artículos para deporte","Sports equipment","cons","deportes sports"]
];

/* Especialización exportadora / importadora de demostración por país
   (partidas en las que se concentran las empresas de ejemplo). */
const SPEC = {
  CO:{ s:["1211","1302","3004","7113","3304","090111","060311","060319","080390","080440","2709","270112","7103","6212","1701","151110","1801"], b:["8471","3004","8703","1005","2710","8517"] },
  BR:{ s:["1201","090111","1701","0201","2709","2304","0207","1005"], b:["3102","8471","2710","3004"] },
  AR:{ s:["2304","1201","0201","2204","1001","1005"], b:["8703","3004","2711"] },
  CL:{ s:["7403","2603","0810","2204","0805"], b:["2709","8703","8517"] },
  PE:{ s:["2603","7108","080440","0810","090111","030617"], b:["2710","8471","1005"] },
  EC:{ s:["080390","030617","0603","1801","2709"], b:["2710","3004","8703"] },
  MX:{ s:["8703","8708","8471","080440","2208","0709"], b:["1005","2710","8541","3901"] },
  GT:{ s:["090111","080390","1701","0904"], b:["2710","3004"] },
  CR:{ s:["9018","080390","0804","9021"], b:["2710","8471"] },
  HN:{ s:["090111","6109","080390"], b:["2710","5201"] },
  PA:{ s:["080390","030617"], b:["2710","8703"] },
  DO:{ s:["9018","2402","1801","7108"], b:["2710","1005"] },
  US:{ s:["2711","1005","1201","8471","9018","2710","3004"], b:["0901","080440","0603","8703","8517","2709","6109"] },
  CA:{ s:["2709","1001","4407","7601","2711"], b:["8703","080440","0901","8517"] },
  CN:{ s:["8517","851713","8471","854143","6109","9403","9506","3923","8544"], b:["2709","1201","2603","2701","7403","1511"] },
  JP:{ s:["8703","8708","8481","9018"], b:["2711","2709","0901","0201","1005"] },
  KR:{ s:["8541","8703","8517","3901"], b:["2709","2711","2603","1005"] },
  VN:{ s:["851713","6403","6109","0901","1006","030617"], b:["5201","8541","3901"] },
  TH:{ s:["1006","8703","4011","1701"], b:["2709","8541"] },
  ID:{ s:["151110","2701","1801","4011"], b:["1001","2710","3004"] },
  MY:{ s:["1511","8541","4011"], b:["2710","1005"] },
  SG:{ s:["2710","8541","3004"], b:["2709","8471"] },
  PH:{ s:["8541","080390","2009"], b:["1006","2710"] },
  IN:{ s:["3004","1006","7102","7113","2710","5201","6204"], b:["2709","2711","7108","1511","8517"] },
  BD:{ s:["6109","6110","6203","6204"], b:["5201","2710"] },
  PK:{ s:["1006","6203","5201","6109"], b:["2709","1511"] },
  LK:{ s:["0902","6212","4011"], b:["2710","1001"] },
  AE:{ s:["2709","2710","7108","7601"], b:["7108","8517","0201","0603","080390"] },
  SA:{ s:["2709","3901","3102"], b:["8703","1006","0201"] },
  TR:{ s:["8703","6109","7208","0810"], b:["2709","7208","5201"] },
  IL:{ s:["9018","3004","8541"], b:["2709","1001"] },
  QA:{ s:["271111","3102"], b:["0201","8703"] },
  DE:{ s:["8703","8708","3004","8481","9018"], b:["0901","2711","8471","0603","1801"] },
  FR:{ s:["2204","3304","8802","3004"], b:["2709","080440","0803"] },
  NL:{ s:["0603","2711","8541","0402"], b:["0603","080440","1801","0901","1201"] },
  BE:{ s:["3004","7102","1806"], b:["1801","2709"] },
  CH:{ s:["3004","7108","9018"], b:["7108","1801","0901"] },
  AT:{ s:["8708","4407"], b:["0901","2711"] },
  GB:{ s:["3004","2208","8703"], b:["0603","080390","0901","8471"] },
  IE:{ s:["3004","9018","0402"], b:["8703","2710"] },
  SE:{ s:["8703","4407","9018"], b:["2709","0901"] },
  NO:{ s:["2709","2711","0306"], b:["8703","0901"] },
  DK:{ s:["3004","0201","8502"], b:["0901","2710"] },
  FI:{ s:["4819","4407"], b:["2709","0901"] },
  ES:{ s:["8703","0805","2204","1511"], b:["2709","0901","1801","080440"] },
  IT:{ s:["8481","2204","6403","4202","3304"], b:["2709","0901","1801","0201"] },
  PT:{ s:["6403","4502","2204"], b:["2709","0901"] },
  GR:{ s:["1511","2710"], b:["2709","0901"] },
  PL:{ s:["8708","9403","0207"], b:["2709","0901"] },
  CZ:{ s:["8703","8708"], b:["2711","0901"] },
  RO:{ s:["8544","1001"], b:["2711","3004"] },
  HU:{ s:["8703","3004"], b:["2711","0901"] },
  UA:{ s:["1001","1005","1511","7208"], b:["2710","8703"] },
  AU:{ s:["2701","2603","2711","0201","7108"], b:["8703","2710","0901"] },
  NZ:{ s:["0402","0201","4407"], b:["8703","2710"] },
  ZA:{ s:["7108","2701","0805","8703"], b:["2709","1006"] },
  NG:{ s:["2709","1801"], b:["1001","2710","8703"] },
  GH:{ s:["7108","1801","2709"], b:["1006","2710"] },
  CI:{ s:["1801","1806","7108"], b:["1006","2710"] },
  KE:{ s:["0902","0603","060311"], b:["2710","1511"] },
  ET:{ s:["090111","0603"], b:["2710","1001"] },
  EG:{ s:["2711","0805","3102"], b:["1001","1005"] },
  MA:{ s:["3102","8708","0709"], b:["2710","1001"] },
  KZ:{ s:["2709","1001","7403"], b:["8703","8471"] },
  UZ:{ s:["5201","7108"], b:["8703","3004"] }
};

/* Sinónimos y variantes regionales para la búsqueda de productos */
const SYN = {
"0201": "carne res vacuno ternera bovino beef meat",
"0207": "pollo gallina pavo aves poultry chicken turkey",
"0306": "mariscos langosta cangrejo seafood lobster crab",
"030617": "gambas camarones prawns",
"0402": "lacteos leche polvo dairy milk",
"0409": "miel abejas honey",
"0603": "flores rosas claveles ramos bouquets flowers",
"060311": "rosa roses",
"060312": "claveles carnations",
"060319": "hortensias crisantemos alstroemerias lirios",
"0709": "verduras vegetales hortalizas pimenton aji vegetables",
"0803": "platano guineo cambur bananas",
"080390": "banano guineo",
"0804": "pina anana mango palta",
"080440": "palta avocado hass",
"080450": "mango guayaba",
"0805": "naranjas limones mandarinas citricos lime",
"0810": "frutas exoticas fresas arandanos pitaya maracuya granadilla uchuva gulupa fruits berries",
"0901": "cafe grano coffee beans arabica",
"090111": "cafe verde pergamino excelso green coffee",
"090121": "cafe molido tostado roasted ground coffee",
"0902": "te aromaticas tea",
"0904": "pimienta especias ajies spices pepper",
"1001": "trigo harina wheat",
"1005": "maiz choclo corn maize",
"1006": "arroz rice",
"1201": "soja soya soybeans",
"1511": "aceite palma palm oil",
"151110": "aceite crudo palma",
"1701": "azucar panela sugar",
"170114": "azucar cruda",
"1801": "cacao grano cocoa beans",
"1806": "chocolates bombones chocolate",
"2009": "jugos zumos pulpa juice",
"2204": "vinos wine",
"2208": "licores aguardiente whisky vodka spirits liquor",
"220840": "ron rum",
"2304": "harina soya torta soymeal",
"2402": "tabacos puros cigarrillos cigars cigarettes",
"2523": "cemento concreto cement",
"2603": "cobre mineral copper ore",
"2701": "carbon coal",
"270112": "carbon termico",
"2709": "petroleo crudo oil crude petroleum",
"2710": "gasolina diesel combustibles acpm fuel gasoline",
"2711": "gas natural glp propano lng gas",
"271111": "gnl gas licuado",
"3004": "medicamentos medicinas farmacos drogas pastillas medicines drugs pharmaceuticals",
"3102": "fertilizantes abonos urea fertilizers",
"3304": "cosmeticos maquillaje belleza cremas makeup cosmetics",
"3901": "polietileno plastico resinas plastic",
"3923": "envases botellas empaques plasticos bolsas packaging bottles bags",
"4011": "llantas neumaticos cauchos tires tyres",
"4107": "cuero cueros pieles leather",
"4202": "bolsos carteras maletas morrales billeteras handbags bags luggage",
"4407": "madera tablas aserrada lumber wood timber",
"4819": "cajas carton empaques boxes cartons",
"5201": "algodon cotton",
"6109": "camisetas camisas franelas playeras t-shirts tshirts",
"6110": "sueteres sacos buzos jerseys sweaters",
"6203": "pantalones jeans ropa hombre trousers menswear",
"6204": "vestidos faldas ropa mujer dresses womenswear",
"6212": "fajas brasieres sostenes lenceria shapewear bras lingerie",
"6403": "zapatos calzado botas shoes footwear boots",
"6907": "baldosas pisos ceramica azulejos tiles flooring",
"7102": "diamantes diamonds",
"7103": "esmeraldas piedras preciosas gemas emeralds gems",
"7108": "oro gold",
"710812": "oro lingotes bullion",
"7113": "joyas joyeria anillos collares jewelry jewellery",
"7208": "acero laminas hierro steel iron",
"7403": "cobre catodos copper",
"7601": "aluminio aluminum aluminium",
"8471": "computadoras computadores ordenadores laptops portatiles pc tablets servidores computers notebooks",
"8481": "valvulas griferia llaves valves taps",
"8517": "telefonos celulares moviles routers telecomunicaciones phones mobile",
"851713": "celulares smartphones telefonos inteligentes moviles iphone android",
"8541": "semiconductores chips celdas solares",
"854143": "paneles solares modulos fotovoltaicos energia solar solar panels",
"8544": "cables alambres conductores wires cables",
"8703": "carros autos automoviles coches vehiculos cars vehicles automobiles",
"8708": "autopartes repuestos partes vehiculos auto parts spare",
"9018": "equipos medicos instrumentos medicos jeringas medical equipment devices syringes",
"9021": "protesis ortopedia ortesis implantes prosthetics orthopedic",
"9403": "muebles sillas mesas escritorios furniture chairs tables",
"9506": "deportes balones gimnasio articulos deportivos sports equipment balls"
};

/* ================================================================
   GLOBAL TRADE FINDER — núcleo: idioma, datos, estado y búsqueda
   ================================================================ */
const SG = { mail:"contacto@skynetgenesis.com", wa:"3044375758", waIntl:"573044375758" };
const CATALOG_URL = "https://skynetgenesis.com/#contratar-global-trade-finder";
const FRAMED = (() => { try { return window.self !== window.top; } catch(e){ return true; } })();

/* ---------- Almacenamiento seguro ---------- */
const MEM = {};
const store = {
  get(k, d){
    let v;
    try { const raw = localStorage.getItem("gtf-"+k); v = raw==null ? (k in MEM ? MEM[k] : d) : JSON.parse(raw); } catch(e){ v = k in MEM ? MEM[k] : d; }
    if(v==null) return d;
    if(Array.isArray(d) && !Array.isArray(v)) return d;           // datos corruptos: lista esperada
    if(typeof d==="string" && typeof v!=="string") return d;
    return v;
  },
  set(k, v){ MEM[k] = v; try { localStorage.setItem("gtf-"+k, JSON.stringify(v)); return true; } catch(e){ return false; } },
  del(k){ delete MEM[k]; try { localStorage.removeItem("gtf-"+k); } catch(e){} }
};

/* ---------- Idioma ---------- */
let LANG = store.get("lang", ({en:"en",pt:"pt"})[(navigator.language||"es").slice(0,2)] || "es");
if(!["es","en","pt"].includes(LANG)) LANG = "es";
const T = {
 es:{
  err_qty:"Escriba una cantidad entre 1 y 10.000.000", demo_try:"Probar la demostración:", demo_obs:"Observador", demo_on:"Está en la demostración con la cuenta demo@skynetgenesis.com.", demo_exit:"Salir de la demostración", showing_last:"Se muestran las 100 más recientes.",
 plan_free:"Registro gratuito (observador)", plan_free_who:"Solo para mirar la plataforma", pf1:"Navegar mercados, países y códigos HS", pf2:"Consultar el directorio de empresas", pf3:"Sin perfil de empresa ni datos de contacto", pf4:"Sin alertas, búsquedas guardadas, solicitudes ni exportación",
  obs_title:"Registro gratuito de observador", obs_lead:"Con el registro gratuito puede navegar y consultar la plataforma. Para crear el perfil de su empresa, guardar búsquedas, crear alertas, enviar solicitudes, ver contactos o exportar necesita un plan de suscripción.", obs_name:"Nombre completo", obs_save:"Crear registro gratuito", obs_saved:"Registro gratuito creado. Ya puede navegar la plataforma.",
  gate_title:"Disponible en los planes de suscripción", gate_msg:"Sin un plan pago (visitante u observador) puede navegar y consultar, pero no {what}. Para hacerlo elija un plan Comprador, Proveedor o Comprador y proveedor.",
  w_profile:"crear el perfil de su empresa", w_save:"guardar búsquedas", w_alert:"crear alertas", w_rfq:"enviar solicitudes ni ofertas", w_export:"exportar resultados",
  nav_signup:"Registrarse gratis", acc_observer:"Cuenta de observador", obs_locked:"Las búsquedas guardadas, las alertas y las solicitudes están incluidas en los planes de suscripción.", create_profile:"Crear perfil de mi empresa", no_profile:"Su plan permite crear el perfil de su empresa en el directorio.",
  nav_search:"Buscar", nav_markets:"Mercados", nav_hs:"Códigos HS", nav_companies:"Empresas", nav_plans:"Planes", nav_account:"Mi cuenta", nav_register:"Registrar empresa",
  demo_strip:"<b>Versión de demostración.</b> Las empresas que aparecen son ficticias y sus datos se generan para pruebas. Lo que usted registre se guarda solo en este navegador.",
  eyebrow:"Global Trade Search & Intelligence",
  hero_lead:"Encuentre compradores y proveedores en más de 80 países. Navegue de continente a país, sector, producto y código arancelario HS hasta llegar a las empresas que comercian lo que usted vende o necesita.",
  tab_buyers:"Buscar compradores", tab_suppliers:"Buscar proveedores", tab_products:"Buscar productos", tab_markets:"Explorar mercados",
  ph_buyers:"Producto, código HS o país. Ej.: café verde, 080440, Alemania", ph_suppliers:"¿Qué necesita comprar? Ej.: paneles solares, 6212, Vietnam", ph_products:"Nombre del producto o código HS. Ej.: aguacate, 0901", ph_markets:"País o región. Ej.: Países Bajos, Sudeste Asiático",
  btn_search:"Buscar", popular:"Búsquedas frecuentes:",
  path_title:"Ruta de navegación", lv_cont:"Continente", lv_sub:"Subregión", lv_country:"País", lv_sector:"Sector", lv_product:"Producto", lv_hs:"Código HS", lv_comp:"Empresas",
  st_countries:"países y territorios", st_chapters:"capítulos del Sistema Armonizado", st_codes:"partidas y subpartidas con empresas", st_companies:"empresas en el directorio",
  sec_continents:"Explore por continente", sec_featured:"Mercados destacados", sec_popular_hs:"Productos más buscados",
  buyers:"Compradores", suppliers:"Proveedores", buyer:"Comprador", supplier:"Proveedor", both:"Comprador y proveedor", companies:"Empresas",
  countries:"países", subregions:"subregiones",
  results:"Resultados", results_for:"para", no_results:"No encontramos resultados", no_results_hint:"Pruebe con otra palabra, un código HS más corto (por ejemplo 0901 en vez de 090111) o quite filtros.",
  filters:"Filtros", f_region:"Continente", f_sub:"Subregión", f_country:"País", f_sector:"Sector", f_hs:"Código HS", f_role:"Perfil", f_verified:"Solo empresas verificadas", f_all:"Todos", f_clear:"Limpiar filtros", f_sort:"Ordenar",
  sort_rel:"Relevancia", sort_name:"Nombre", sort_active:"Actividad reciente", sort_size:"Tamaño",
  save_search:"Guardar búsqueda", saved_ok:"Búsqueda guardada en Mi cuenta", export:"Exportar", create_alert:"Crear alerta",
  view_profile:"Ver perfil", verified:"Verificada", demo:"Ficticia (demo)", fake_note:"Empresa ficticia de demostración: el nombre, el correo, el teléfono y la web no existen. Las empresas reales aparecerán cuando se registren en la versión con servidor.", yours:"Su empresa",
  founded:"Fundada", employees:"Empleados", volume:"Volumen anual", active:"Última actividad", days:"días", today:"hoy",
  about:"Acerca de la empresa", products:"Productos y códigos HS", markets_served:"Mercados", sourcing_from:"Compra en", selling_to:"Vende a",
  certs:"Certificaciones", incoterms:"Incoterms habituales", contact:"Contacto", contact_dept:"Área", email:"Correo", phone:"Teléfono", website:"Sitio web",
  locked_title:"Datos de contacto reservados para suscriptores", locked_buyers:"Para ver el contacto de compradores necesita el plan Proveedor o Comprador y proveedor.", locked_suppliers:"Para ver el contacto de proveedores necesita el plan Comprador o Comprador y proveedor.",
  see_plans:"Ver planes", request_contact:"Solicitar contacto", send_rfq:"Enviar solicitud de cotización", send_offer:"Enviar oferta",
  rfq_title:"Solicitud de cotización", offer_title:"Oferta comercial", rfq_product:"Producto (código HS)", rfq_qty:"Cantidad", rfq_unit:"Unidad", rfq_incoterm:"Incoterm", rfq_dest:"Puerto o ciudad de destino", rfq_msg:"Mensaje",
  rfq_note:"En la versión de demostración la solicitud se guarda en Mi cuenta y no se envía a la empresa.", cancel:"Cancelar", save:"Guardar", close:"Cerrar", send:"Guardar solicitud",
  rfq_ok:"Solicitud guardada en Mi cuenta", need_account:"Primero cree el perfil de su empresa para enviar solicitudes y alertas.",
  country_suppliers:"Proveedores en", country_buyers:"Compradores en", top_hs:"Principales códigos HS", by_sector:"Empresas por sector", select_sector:"Elija un sector", all_sectors:"Todos los sectores", products_in:"Productos en",
  hs_title:"Sistema Armonizado (HS 2022)", hs_lead:"La clasificación internacional de mercancías de la Organización Mundial de Aduanas: 21 secciones, 96 capítulos, partidas de 4 dígitos y subpartidas de 6 dígitos. Busque un código o navegue por sección.",
  hs_search_ph:"Código o descripción. Ej.: 0603, flores, acero", section:"Sección", chapter:"Capítulo", heading:"Partida", subheading:"Subpartida", chapters:"capítulos",
  hs_no_codes:"Este capítulo aún no tiene partidas cargadas con empresas en la versión de demostración.", where_trade:"Dónde se comercia", world:"Mundo", companies_with:"empresas con este código",
  markets_title:"Mercados del mundo", markets_lead:"Elija un continente, luego la subregión y el país para ver sus compradores y proveedores por sector y producto.",
  dir_title:"Directorio de empresas", dir_lead:"Compradores y proveedores registrados. Use los filtros para encontrar socios por país, sector y código HS.",
  plans_title:"Planes de suscripción", plans_lead:"El registro gratuito es de observador: navega y consulta la plataforma. Suscríbase como comprador, proveedor o ambos para crear el perfil de su empresa, ver contactos, enviar solicitudes y recibir alertas de oportunidades.",
  plan_buyer_who:"Encuentre proveedores", plan_supplier_who:"Encuentre compradores", plan_both_who:"Acceso completo",
  price_free:"Gratis", price_quote:"Precio en skynetgenesis.com", recommended:"Recomendado", current:"Plan actual",
  pb1:"Contacto completo de proveedores", pb2:"Solicitudes de cotización sin límite", pb3:"10 alertas de nuevos proveedores", pb4:"Exportación de resultados",
  ps1:"Contacto completo de compradores", ps2:"Perfil destacado en las búsquedas", ps3:"10 alertas de nuevos compradores", ps4:"Ofertas comerciales sin límite",
  pa1:"Todo lo de Comprador y Proveedor", pa2:"Alertas ilimitadas", pa3:"Informes por país y código HS", pa4:"Soporte prioritario por WhatsApp",
  hire:"Contratar", try_demo:"Probar este plan (demo)", demo_plan_on:"Plan de demostración activado:", using_free:"Está usando el registro gratuito.",
  reg_title:"Registrar empresa", reg_edit:"Editar mi empresa", reg_lead:"Su empresa aparecerá en el directorio y podrá buscar, guardar búsquedas, crear alertas y enviar solicitudes.",
  reg_profile:"¿Cómo participa en el comercio internacional?", reg_buyer_d:"Importa o compra insumos y productos", reg_supplier_d:"Exporta o vende productos", reg_both_d:"Compra y vende",
  r_name:"Nombre de la empresa", r_taxid:"Identificación tributaria (NIT, RUT, VAT…)", r_country:"País", r_city:"Ciudad", r_sector:"Sector principal", r_hs:"Productos o códigos HS", r_hs_ph:"Escriba y elija. Ej.: café, 0901", r_web:"Sitio web", r_contact:"Persona de contacto", r_role:"Cargo", r_email:"Correo", r_phone:"Teléfono / WhatsApp", r_desc:"Descripción breve", r_markets:"Mercados de interés", r_accept:"Acepto los términos de uso y autorizo el tratamiento de los datos de mi empresa.",
  r_save:"Guardar empresa", r_saved:"Empresa registrada. Ya aparece en el directorio.", r_updated:"Datos actualizados", choose:"Elija…",
  err_req:"Este dato es obligatorio", err_email:"Escriba un correo válido, por ejemplo ventas@empresa.com", err_hs:"Agregue al menos un producto o código HS", err_accept:"Debe aceptar para continuar", err_profile:"Elija un perfil",
  acc_title:"Mi cuenta", acc_none:"Aún no ha registrado su empresa", acc_none_d:"El registro es gratis y toma dos minutos.", my_company:"Mi empresa", my_plan:"Mi plan", saved_searches:"Búsquedas guardadas", alerts:"Alertas", requests:"Solicitudes enviadas",
  none_saved:"Todavía no tiene búsquedas guardadas.", none_alerts:"Todavía no tiene alertas.", none_requests:"Todavía no ha enviado solicitudes de cotización ni de contacto. Las cotizaciones que usted envía a requerimientos quedan en Mensajes y en Seguimiento de prospectos.",
  run:"Abrir", del:"Eliminar", edit:"Editar", logout:"Salir de esta cuenta", logout_confirm:"¿Seguro? Se borrarán de este navegador su registro, su empresa, búsquedas, alertas y solicitudes.", yes_delete:"Sí, borrar", matches_now:"coincidencias hoy",
  alert_title:"Nueva alerta", alert_lead:"Le avisaremos cuando aparezcan empresas nuevas que coincidan.", alert_what:"Buscar", alert_name:"Nombre de la alerta", alert_freq:"Frecuencia", daily:"Diaria", weekly:"Semanal", alert_ok:"Alerta creada", alert_limit:"Llegó al límite de alertas de su plan.",
  limit_req:"Llegó al límite de 3 solicitudes del registro gratuito este mes.",
  export_title:"Exportar resultados", export_lead:"Vista previa del informe. Incluye hasta 200 filas.", copy:"Copiar tabla", copied:"Tabla copiada", download_csv:"Descargar CSV", print:"Imprimir o guardar PDF",
  export_locked:"La exportación está incluida en los planes de suscripción.", generated:"Generado", report_by:"Informe generado por Global Trade Finder, una aplicación de SkyNet Genesis",
  footer:"© {y} Global Trade Finder · Una aplicación de SkyNet Genesis · contacto@skynetgenesis.com · WhatsApp 304 437 5758", terms:"Términos", privacy:"Datos personales", support:"Soporte",
  back:"Volver", home:"Inicio", all:"Todos", more:"Ver más", showing:"Mostrando", of:"de",
  terms_title:"Términos de uso", privacy_title:"Tratamiento de datos personales",
  emp_1:"1 a 10", emp_2:"11 a 50", emp_3:"51 a 200", emp_4:"201 a 1.000", emp_5:"Más de 1.000",
  vol_1:"Menos de US$ 500 mil", vol_2:"US$ 500 mil a 2 millones", vol_3:"US$ 2 a 10 millones", vol_4:"US$ 10 a 50 millones", vol_5:"Más de US$ 50 millones",
  d_sup:"Empresa {sec} de {city}, {country}. Exporta {prod} a {mk}. Trabaja con {inc}.",
  d_buy:"Empresa {sec} de {city}, {country}. Importa {prod} con compras recurrentes. Busca proveedores con {cert}.",
  d_both:"Empresa {sec} de {city}, {country}. Comercializa {prod} y compra insumos en el exterior.",
  dept_sup:"Gerencia comercial de exportaciones", dept_buy:"Departamento de compras internacionales",
  ent_kind:"del sector"
 },
 en:{
  err_qty:"Enter a quantity between 1 and 10,000,000", demo_try:"Try the demo:", demo_obs:"Observer", demo_on:"You are in the demo with the account demo@skynetgenesis.com.", demo_exit:"Leave the demo", showing_last:"Showing the 100 most recent.",
 plan_free:"Free sign-up (observer)", plan_free_who:"Just to look around", pf1:"Browse markets, countries and HS codes", pf2:"View the company directory", pf3:"No company profile or contact details", pf4:"No alerts, saved searches, requests or export",
  obs_title:"Free observer sign-up", obs_lead:"With the free sign-up you can browse and look up the platform. To create your company profile, save searches, create alerts, send requests, see contacts or export you need a subscription plan.", obs_name:"Full name", obs_save:"Create free sign-up", obs_saved:"Free sign-up created. You can now browse the platform.",
  gate_title:"Available in subscription plans", gate_msg:"Without a paid plan (visitor or observer) you can browse and look things up, but you cannot {what}. To do so, choose a Buyer, Supplier or Buyer & supplier plan.",
  w_profile:"create your company profile", w_save:"save searches", w_alert:"create alerts", w_rfq:"send requests or offers", w_export:"export results",
  nav_signup:"Sign up free", acc_observer:"Observer account", obs_locked:"Saved searches, alerts and requests are included in the subscription plans.", create_profile:"Create my company profile", no_profile:"Your plan lets you create your company profile in the directory.",
  nav_search:"Search", nav_markets:"Markets", nav_hs:"HS codes", nav_companies:"Companies", nav_plans:"Plans", nav_account:"My account", nav_register:"List your company",
  demo_strip:"<b>Demo version.</b> The companies shown are fictitious and generated for testing. Anything you register is saved only in this browser.",
  eyebrow:"Global Trade Search & Intelligence",
  hero_lead:"Find buyers and suppliers in more than 80 countries. Drill down from continent to country, sector, product and HS tariff code until you reach the companies trading what you sell or need.",
  tab_buyers:"Find buyers", tab_suppliers:"Find suppliers", tab_products:"Find products", tab_markets:"Explore markets",
  ph_buyers:"Product, HS code or country. E.g. green coffee, 080440, Germany", ph_suppliers:"What do you need to buy? E.g. solar panels, 6212, Vietnam", ph_products:"Product name or HS code. E.g. avocado, 0901", ph_markets:"Country or region. E.g. Netherlands, South-eastern Asia",
  btn_search:"Search", popular:"Popular searches:",
  path_title:"Navigation path", lv_cont:"Continent", lv_sub:"Subregion", lv_country:"Country", lv_sector:"Sector", lv_product:"Product", lv_hs:"HS code", lv_comp:"Companies",
  st_countries:"countries and territories", st_chapters:"Harmonized System chapters", st_codes:"headings and subheadings with companies", st_companies:"companies in the directory",
  sec_continents:"Explore by continent", sec_featured:"Featured markets", sec_popular_hs:"Most searched products",
  buyers:"Buyers", suppliers:"Suppliers", buyer:"Buyer", supplier:"Supplier", both:"Buyer & supplier", companies:"Companies",
  countries:"countries", subregions:"subregions",
  results:"Results", results_for:"for", no_results:"No results found", no_results_hint:"Try another word, a shorter HS code (e.g. 0901 instead of 090111) or remove filters.",
  filters:"Filters", f_region:"Continent", f_sub:"Subregion", f_country:"Country", f_sector:"Sector", f_hs:"HS code", f_role:"Profile", f_verified:"Verified companies only", f_all:"All", f_clear:"Clear filters", f_sort:"Sort by",
  sort_rel:"Relevance", sort_name:"Name", sort_active:"Recent activity", sort_size:"Size",
  save_search:"Save search", saved_ok:"Search saved to My account", export:"Export", create_alert:"Create alert",
  view_profile:"View profile", verified:"Verified", demo:"Fictitious (demo)", fake_note:"Fictitious demo company: the name, email, phone and website do not exist. Real companies will appear once they register in the server version.", yours:"Your company",
  founded:"Founded", employees:"Employees", volume:"Annual volume", active:"Last activity", days:"days ago", today:"today",
  about:"About the company", products:"Products and HS codes", markets_served:"Markets", sourcing_from:"Sources from", selling_to:"Sells to",
  certs:"Certifications", incoterms:"Usual Incoterms", contact:"Contact", contact_dept:"Department", email:"Email", phone:"Phone", website:"Website",
  locked_title:"Contact details are for subscribers", locked_buyers:"To see buyer contacts you need the Supplier or Buyer & supplier plan.", locked_suppliers:"To see supplier contacts you need the Buyer or Buyer & supplier plan.",
  see_plans:"See plans", request_contact:"Request contact", send_rfq:"Send request for quotation", send_offer:"Send offer",
  rfq_title:"Request for quotation", offer_title:"Commercial offer", rfq_product:"Product (HS code)", rfq_qty:"Quantity", rfq_unit:"Unit", rfq_incoterm:"Incoterm", rfq_dest:"Destination port or city", rfq_msg:"Message",
  rfq_note:"In the demo version the request is saved to My account and is not sent to the company.", cancel:"Cancel", save:"Save", close:"Close", send:"Save request",
  rfq_ok:"Request saved to My account", need_account:"Create your company profile first to send requests and alerts.",
  country_suppliers:"Suppliers in", country_buyers:"Buyers in", top_hs:"Top HS codes", by_sector:"Companies by sector", select_sector:"Choose a sector", all_sectors:"All sectors", products_in:"Products in",
  hs_title:"Harmonized System (HS 2022)", hs_lead:"The World Customs Organization's international goods classification: 21 sections, 96 chapters, 4-digit headings and 6-digit subheadings. Search a code or browse by section.",
  hs_search_ph:"Code or description. E.g. 0603, flowers, steel", section:"Section", chapter:"Chapter", heading:"Heading", subheading:"Subheading", chapters:"chapters",
  hs_no_codes:"This chapter has no headings with companies in the demo version yet.", where_trade:"Where it is traded", world:"World", companies_with:"companies with this code",
  markets_title:"World markets", markets_lead:"Choose a continent, then the subregion and country to see its buyers and suppliers by sector and product.",
  dir_title:"Company directory", dir_lead:"Registered buyers and suppliers. Use the filters to find partners by country, sector and HS code.",
  plans_title:"Subscription plans", plans_lead:"The free sign-up is observer-only: browse and look up the platform. Subscribe as a buyer, supplier or both to create your company profile, see contacts, send requests and get opportunity alerts.",
  plan_buyer_who:"Find suppliers", plan_supplier_who:"Find buyers", plan_both_who:"Full access",
  price_free:"Free", price_quote:"Price at skynetgenesis.com", recommended:"Recommended", current:"Current plan",
  pb1:"Full supplier contact details", pb2:"Unlimited requests for quotation", pb3:"10 new-supplier alerts", pb4:"Export results",
  ps1:"Full buyer contact details", ps2:"Featured profile in searches", ps3:"10 new-buyer alerts", ps4:"Unlimited commercial offers",
  pa1:"Everything in Buyer and Supplier", pa2:"Unlimited alerts", pa3:"Reports by country and HS code", pa4:"Priority WhatsApp support",
  hire:"Subscribe", try_demo:"Try this plan (demo)", demo_plan_on:"Demo plan active:", using_free:"You are on the free observer sign-up.",
  reg_title:"List your company", reg_edit:"Edit my company", reg_lead:"Your company will appear in the directory and you can search, save searches, create alerts and send requests.",
  reg_profile:"How do you take part in international trade?", reg_buyer_d:"You import or buy products and inputs", reg_supplier_d:"You export or sell products", reg_both_d:"You buy and sell",
  r_name:"Company name", r_taxid:"Tax ID (NIT, RUT, VAT…)", r_country:"Country", r_city:"City", r_sector:"Main sector", r_hs:"Products or HS codes", r_hs_ph:"Type and choose. E.g. coffee, 0901", r_web:"Website", r_contact:"Contact person", r_role:"Job title", r_email:"Email", r_phone:"Phone / WhatsApp", r_desc:"Short description", r_markets:"Target markets", r_accept:"I accept the terms of use and authorize the processing of my company's data.",
  r_save:"Save company", r_saved:"Company listed. It now appears in the directory.", r_updated:"Details updated", choose:"Choose…",
  err_req:"This field is required", err_email:"Enter a valid email, e.g. sales@company.com", err_hs:"Add at least one product or HS code", err_accept:"You must accept to continue", err_profile:"Choose a profile",
  acc_title:"My account", acc_none:"You haven't listed your company yet", acc_none_d:"Listing is free and takes two minutes.", my_company:"My company", my_plan:"My plan", saved_searches:"Saved searches", alerts:"Alerts", requests:"Sent requests",
  none_saved:"No saved searches yet.", none_alerts:"No alerts yet.", none_requests:"No quote or contact requests sent yet. Quotes you send to buyer requests are in Messages and Prospect tracking.",
  run:"Open", del:"Delete", edit:"Edit", logout:"Leave this account", logout_confirm:"Are you sure? Your company, searches, alerts and requests will be erased from this browser.", yes_delete:"Yes, erase", matches_now:"matches today",
  alert_title:"New alert", alert_lead:"We'll notify you when new companies match.", alert_what:"Look for", alert_name:"Alert name", alert_freq:"Frequency", daily:"Daily", weekly:"Weekly", alert_ok:"Alert created", alert_limit:"You've reached your plan's alert limit.",
  limit_req:"You've reached the free listing's 3 requests this month.",
  export_title:"Export results", export_lead:"Report preview. Includes up to 200 rows.", copy:"Copy table", copied:"Table copied", download_csv:"Download CSV", print:"Print or save PDF",
  export_locked:"Export is included in the subscription plans.", generated:"Generated", report_by:"Report generated by Global Trade Finder, a SkyNet Genesis application",
  footer:"© {y} Global Trade Finder · A SkyNet Genesis application · contacto@skynetgenesis.com · WhatsApp +57 304 437 5758", terms:"Terms", privacy:"Personal data", support:"Support",
  back:"Back", home:"Home", all:"All", more:"See more", showing:"Showing", of:"of",
  terms_title:"Terms of use", privacy_title:"Personal data policy",
  emp_1:"1 to 10", emp_2:"11 to 50", emp_3:"51 to 200", emp_4:"201 to 1,000", emp_5:"Over 1,000",
  vol_1:"Under US$ 500k", vol_2:"US$ 500k to 2M", vol_3:"US$ 2M to 10M", vol_4:"US$ 10M to 50M", vol_5:"Over US$ 50M",
  d_sup:"{sec} company based in {city}, {country}. Exports {prod} to {mk}. Works with {inc}.",
  d_buy:"{sec} company based in {city}, {country}. Imports {prod} on a recurring basis. Looking for suppliers with {cert}.",
  d_both:"{sec} company based in {city}, {country}. Trades {prod} and sources inputs abroad.",
  dept_sup:"Export sales management", dept_buy:"International purchasing department",
  ent_kind:"sector"
 }
};
const t = (k, vars) => { let s = (T[LANG][k] ?? T.es[k] ?? k); if(vars) for(const v in vars) s = s.replaceAll("{"+v+"}", vars[v]); return s; };
let RN = null;
const cname = (cc) => { try { if(!RN || RN.lang!==LANG){ RN = new Intl.DisplayNames([LANG],{type:"region"}); RN.lang = LANG; } return RN.of(cc) || cc; } catch(e){ return cc; } };
const L = (o) => o ? (o[LANG] || o.es) : "";
const fmt = (n) => Number(n).toLocaleString(LANG==="en"?"en-US":"es-CO");

/* ---------- Utilidades ---------- */
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = (s) => String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
function mulberry32(a){ return function(){ a |= 0; a = a + 0x6D2B79F5 | 0; let t2 = Math.imul(a ^ a >>> 15, 1 | a); t2 = t2 + Math.imul(t2 ^ t2 >>> 7, 61 | t2) ^ t2; return ((t2 ^ t2 >>> 14) >>> 0) / 4294967296; }; }
const hashStr = (s) => { let h = 2166136261; for(const ch of s){ h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const pick = (r, arr) => arr[Math.floor(r()*arr.length)];

/* ---------- Índices de geografía y HS ---------- */
const COUNTRY = {};   // cc -> {cc, sub, cont}
const SUB = {}; const CONT = {};
GEO.forEach(ct => { CONT[ct.id] = ct; ct.subs.forEach(s => { SUB[s.id] = {...s, cont:ct.id}; s.c.forEach(cc => COUNTRY[cc] = {cc, sub:s.id, cont:ct.id}); }); });
const ALL_CC = Object.keys(COUNTRY);
const SECTOR = Object.fromEntries(SECTORS.map(s => [s.id, s]));
const CHAP = Object.fromEntries(HS_CHAPTERS.map(c => [c[0], {code:c[0], es:c[1], en:c[2]}]));
/* sector económico de cada capítulo HS */
const CH_SECTOR = (ch) => { const n = +ch;
  if(n===4 || n===11 || (n>=15 && n<=24)) return "food"; if(n===6) return "flor"; if(n<=14) return "agro";
  if(n===25) return "cons"; if(n<=27) return "ener"; if(n<=38) return "chem"; if(n<=40) return "plas"; if(n<=43) return "text";
  if(n<=49) return "wood"; if(n<=67) return "text"; if(n<=70) return "cons"; if(n<=83) return "metl"; if(n<=85) return "mach";
  if(n<=89) return "auto"; if(n===90) return "med"; return "cons"; };
const CODE = {};
/* las 1.229 partidas del Sistema Armonizado… */
HS4.forEach(c => { if(!CHAP[c[0].slice(0,2)]) return; CODE[c[0]] = {code:c[0], es:c[1], en:c[2], sector:CH_SECTOR(c[0].slice(0,2)), kw:c[3]||"", full:true}; });
/* …y las partidas y subpartidas destacadas, con nombres y palabras propias */
const FEATURED = HS_CODES.map(c => c[0]);
HS_CODES.forEach(c => { const prev = CODE[c[0]]; CODE[c[0]] = {code:c[0], es:c[1], en:c[2], sector:c[3], kw:(c[4]||"")+" "+(prev?prev.kw:""), full:!!prev}; });
const sectionOf = (ch) => { const n = parseInt(ch,10); return HS_SECTIONS.find(s => n>=s.ch[0] && n<=s.ch[1]); };
const codeLabel = (code) => CODE[code] ? L(CODE[code]) : (code.length===2 && CHAP[code] ? L(CHAP[code]) : code);
const fmtCode = (c) => c.length===6 ? c.slice(0,4)+"."+c.slice(4) : c;
const codeLevel = (c) => c.length===2 ? t("chapter") : c.length===4 ? t("heading") : t("subheading");
/* un código "cubre" a otro si es prefijo (0901 cubre 090111) o al revés */
const related = (a, b) => a.startsWith(b) || b.startsWith(a);

/* ---------- Empresas de demostración ---------- */
const ES_CC = new Set(["CO","MX","GT","HN","SV","CR","PA","DO","PR","AR","CL","PE","EC","UY","PY","BO","ES"]);
const PRE_ES = ["Andes","Pacífico","Cóndor","Horizonte","Vértice","Cumbre","Bahía","Altiplano","Sierra Alta","Costa Azul","Brisa","Terranova","Zenit","Aldea","Puerto Real","Caribe Sur","Estrella","Nevado","Ceiba","Guayacán","Palmar","Llanura","Arrecife","Monteverde"];
const PRE_EN = ["Atlas","Meridian","Aurora","Delta","Northgate","Vertex","Orion","Harbor","Summit","Lotus","Zenith","Silverline","Keystone","Sunrise","Granite","Oakridge","Bluewave","Pioneer","Evergreen","Crestline","Riverton","Halcyon","Lighthouse","Cobalt"];
const CORE = {
  agro:{es:["Agro","Cosechas","Agroindustrial"],en:["Agri","Harvest","Agro"]},
  food:{es:["Alimentos","Food Group","Ingredientes"],en:["Foods","Ingredients","Food Group"]},
  flor:{es:["Flores","Floricultura","Blooms"],en:["Flowers","Blooms","Floral"]},
  ener:{es:["Energía","Minerales","Recursos"],en:["Energy","Resources","Minerals"]},
  chem:{es:["Farma","Químicos","Laboratorios"],en:["Pharma","Chemicals","Labs"]},
  plas:{es:["Polímeros","Empaques","Plásticos"],en:["Polymers","Packaging","Plastics"]},
  text:{es:["Textiles","Confecciones","Moda"],en:["Textiles","Apparel","Garments"]},
  wood:{es:["Maderas","Empaques","Papeles"],en:["Timber","Packaging","Paper"]},
  metl:{es:["Metales","Minería","Aceros"],en:["Metals","Mining","Steel"]},
  mach:{es:["Tecnología","Maquinaria","Electrónica"],en:["Technologies","Machinery","Electronics"]},
  auto:{es:["Autopartes","Motores"],en:["Auto Parts","Motors","Automotive"]},
  med:{es:["Médica","Dispositivos Médicos"],en:["Medical","MedTech"]},
  cons:{es:["Materiales","Hogar y Construcción"],en:["Building Supplies","Home & Living"]}
};
/* nombre según el producto principal, para que la empresa "suene" a lo que vende */
const CORE_BY = [
  [["0901"], {es:["Cafés de Origen","Café Especial"],en:["Coffee Traders","Coffee Co."]}],
  [["0803","0804","0805","0806","0807","0808","0809","0810","0811"], {es:["Frutas Frescas","Frutícola"],en:["Fresh Produce","Fruits"]}],
  [["1211","1302","1207"], {es:["Botánicos","Extractos Naturales","Fitoterapia"],en:["Botanicals","Plant Extracts","Phyto"]}],
  [["3001","3002","3003","3004","3005","3006","2936","2937","2941"], {es:["Farma","Laboratorios","Farmacéutica"],en:["Pharma","Labs","Pharmaceuticals"]}],
  [["7106","7107","7108","7109","7110","7111","7112","7113","7114","7115","7116","7117","7118"], {es:["Joyería","Metales Preciosos","Orfebres"],en:["Jewelry","Precious Metals","Bullion"]}],
  [["7101","7102","7103","7104","7105"], {es:["Gemas","Esmeraldas y Gemas"],en:["Gems","Gemstones"]}],
  [["3303","3304","3305","3307"], {es:["Cosméticos","Belleza"],en:["Cosmetics","Beauty"]}]
];
const groupOf = (code) => CORE_BY.findIndex(g => g[0].some(c => related(c, code)));
const coreFor = (code, sector, lg, r) => { const g = groupOf(code); return pick(r, g>=0 ? CORE_BY[g][1][lg] : CORE[sector][lg]); };
const BUY_WORD = {es:["Importadora","Distribuidora","Comercializadora"], en:["Imports","Trading","Distribution"]};
const CERTS = {
  agro:["GlobalG.A.P.","Rainforest Alliance","Fairtrade","Orgánico USDA","BASC"], food:["HACCP","ISO 22000","FSSC 22000","BRCGS","Halal","Kosher"],
  flor:["Florverde","Rainforest Alliance","MPS-ABC"], ener:["ISO 14001","ISO 45001","IRMA"], chem:["BPM / GMP","ISO 9001","FDA registrada","INVIMA"],
  plas:["ISO 9001","ISO 14001"], text:["WRAP","OEKO-TEX","BSCI","ISO 9001"], wood:["FSC","PEFC","ISO 9001"], metl:["LBMA","RJC","ISO 9001"],
  mach:["CE","ISO 9001","UL","RoHS"], auto:["IATF 16949","ISO 9001"], med:["ISO 13485","CE","FDA registrada","INVIMA"], cons:["ISO 9001","CE"]
};
const CITY = { CO:["Bogotá","Medellín","Barranquilla","Cartagena","Santa Marta","Cali","Bucaramanga","Rionegro"], BR:["São Paulo","Santos","Rio de Janeiro","Curitiba"], AR:["Buenos Aires","Rosario","Córdoba"], CL:["Santiago","Valparaíso","Antofagasta"], PE:["Lima","Callao","Arequipa"], EC:["Guayaquil","Quito","Machala"], MX:["Ciudad de México","Monterrey","Guadalajara","Querétaro"], US:["Miami","Houston","Los Angeles","New York","Chicago"], CA:["Toronto","Vancouver","Montréal"], CN:["Shenzhen","Shanghai","Ningbo","Guangzhou"], JP:["Tokyo","Osaka","Yokohama"], KR:["Seoul","Busan","Incheon"], DE:["Hamburg","Frankfurt","Munich","Bremen"], NL:["Rotterdam","Amsterdam","Aalsmeer"], ES:["Madrid","Valencia","Barcelona","Algeciras"], IT:["Milano","Genova","Torino"], FR:["Paris","Marseille","Le Havre"], GB:["London","Manchester","Felixstowe"], IN:["Mumbai","Chennai","Ahmedabad","New Delhi"], AE:["Dubai","Abu Dhabi","Sharjah"], VN:["Ho Chi Minh City","Hanoi","Hai Phong"], AU:["Sydney","Melbourne","Perth"], ZA:["Johannesburg","Durban","Cape Town"], TR:["Istanbul","Izmir","Mersin"] };
const INCOS = ["EXW","FCA","FOB","CFR","CIF","DAP","DDP"];

function genCompanies(){
  const out = []; let id = 1;
  const validCodes = FEATURED.slice();
  ALL_CC.forEach(cc => {
    const r = mulberry32(hashStr("gtf-"+cc));
    const sp = SPEC[cc]; const sCodes = (sp?.s||[]).filter(c=>CODE[c]); const bCodes = (sp?.b||[]).filter(c=>CODE[c]);
    const n = cc==="CO" ? 22 : (sp ? 9 : 3) + Math.floor(r()*(sp?7:3));
    const used = new Set();
    for(let i=0;i<n;i++){
      let role = r() < 0.2 ? "both" : (r() < (sCodes.length/(sCodes.length+bCodes.length+0.01) || 0.5) ? "supplier" : "buyer");
      if(!sp) role = pick(r,["supplier","buyer","both"]);
      const pool = role==="buyer" ? (bCodes.length?bCodes:validCodes) : role==="supplier" ? (sCodes.length?sCodes:validCodes) : [...sCodes, ...bCodes].length ? [...sCodes,...bCodes] : validCodes;
      const k = 1 + Math.floor(r()*3); const codes = [];
      for(let j=0;j<k*4 && codes.length<k;j++){ const c = pick(r,pool); if(codes.some(x=>related(x,c))) continue; if(codes.length && (CODE[c].sector!==CODE[codes[0]].sector || groupOf(c)!==groupOf(codes[0]))) continue; codes.push(c); }   // mismo sector: el nombre de la empresa coincide con lo que vende
      const sector = CODE[codes[0]].sector;
      const es = ES_CC.has(cc); const lg = es ? "es" : "en";
      let name, tries = 0;
      do {
        const pre = pick(r, es?PRE_ES:PRE_EN), core = coreFor(codes[0], sector, lg, r);
        name = role==="buyer" && r()<0.6 ? (es ? `${pick(r,BUY_WORD.es)} ${pre} ${core}` : `${pre} ${core} ${pick(r,BUY_WORD.en)}`) : `${pre} ${core}`;
        name += " " + (LEGAL[cc]||"Ltd.");
        tries++;
      } while(used.has(name) && tries<10);
      used.add(name);
      const city = pick(r, CITY[cc] || [null]) ;
      const mkPool = role==="buyer" ? ALL_CC.filter(x => SPEC[x]?.s?.some(c => codes.some(cd=>related(cd,c)))) : ALL_CC.filter(x => SPEC[x]?.b?.some(c => codes.some(cd=>related(cd,c))));
      const markets = [...new Set(Array.from({length:2+Math.floor(r()*3)},()=> pick(r, mkPool.length?mkPool:ALL_CC)))].filter(x=>x!==cc);
      const certPool = CERTS[sector]; const certs = [...new Set([pick(r,certPool), pick(r,certPool)])];
      const inc = [...new Set([pick(r,INCOS.slice(1,6)), pick(r,INCOS)])];
      const slug = norm(name).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").split("-").slice(0,3).join("-");
      out.push({ id:"d"+(id++), demo:true, name, cc, city, role, codes, sector,
        founded: 1972 + Math.floor(r()*50), emp: 1+Math.floor(r()*5), vol: 1+Math.floor(r()*5),
        verified: (r(), false) /* una empresa ficticia nunca se muestra como verificada */, active: Math.floor(r()*40), certs, inc, markets,
        web: "www."+slug+".example", email: (role==="buyer"?"compras@":"ventas@")+slug+".example",
        phone: "+"+(r()*80+10|0)+" "+(r()*900+100|0)+" "+(r()*9000+1000|0) });
    }
  });
  return out;
}
const DEMO = genCompanies();
/* demostración: cada producto tiene al menos un comprador y un proveedor de ejemplo */
(function fillGaps(){
  const r = mulberry32(hashStr("gtf-gaps"));
  let id = DEMO.length + 1;
  Object.keys(CODE).filter(c => c.length===4 && !c.startsWith("93") && c!=="9999").forEach(code => {
    ["supplier","buyer"].forEach(role => {
      /* cada partida queda con al menos 3 empresas de cada tipo, en países distintos */
      const have = DEMO.filter(co => (co.role===role || co.role==="both") && co.codes.some(c => related(c, code)));
      const used = new Set(have.map(co => co.cc));
      /* Colombia (mercado de origen) siempre aparece en los productos que produce o compra */
      if(SPEC.CO && (role==="supplier" ? SPEC.CO.s : SPEC.CO.b).some(c => related(c, code)) && !used.has("CO")) have.push(null);
      for(let k = have.length; k < 3 + (have.includes(null)?1:0); k++){
      const pool = ALL_CC.filter(cc => !used.has(cc) && (role==="supplier" ? SPEC[cc]?.s : SPEC[cc]?.b)?.some(c => related(c, code)));
      const cc = (have.includes(null) && !used.has("CO")) ? "CO" : pool.length ? pick(r, pool) : pick(r, ALL_CC.filter(c => !used.has(c))); used.add(cc);
      const sector = CODE[code].sector, es = ES_CC.has(cc), lg = es ? "es" : "en";
      const name = (role==="buyer" ? (es ? `${pick(r,BUY_WORD.es)} ${pick(r,PRE_ES)} ${coreFor(code,sector,"es",r)}` : `${pick(r,PRE_EN)} ${coreFor(code,sector,"en",r)} ${pick(r,BUY_WORD.en)}`) : `${pick(r, es?PRE_ES:PRE_EN)} ${coreFor(code,sector,lg,r)}`) + " " + (LEGAL[cc]||"Ltd.");
      const slug = norm(name).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").split("-").slice(0,3).join("-");
      DEMO.push({ id:"d"+(id++), demo:true, name, cc, city: pick(r, CITY[cc] || [null]), role, codes:[code], sector,
        founded: 1980 + Math.floor(r()*40), emp: 1+Math.floor(r()*5), vol: 1+Math.floor(r()*5), verified: (r(), false), active: Math.floor(r()*40),
        certs:[pick(r, CERTS[sector])], inc:[pick(r, INCOS)], markets: [pick(r, ALL_CC)].filter(x=>x!==cc),
        web:"www."+slug+".example", email:(role==="buyer"?"compras@":"ventas@")+slug+".example", phone:"+"+(r()*80+10|0)+" "+(r()*900+100|0)+" "+(r()*9000+1000|0) });
      }
    });
  });
})();
const cityOf = (co) => co.city || cname(co.cc);

/* ---------- Cuenta y plan (en este navegador) ---------- */
let ACC = store.get("account", null);    // empresa registrada por el usuario
let PLAN = store.get("plan", "free");    // free | buyer | supplier | both
let OBS = store.get("observer", null);   // registro gratuito de observador
/* descarta datos guardados dañados o de versiones anteriores */
if(!["free","buyer","supplier","both"].includes(PLAN)) PLAN = "free";
if(ACC && (typeof ACC!=="object" || typeof ACC.name!=="string" || !["buyer","supplier","both"].includes(ACC.role) || !Array.isArray(ACC.codes) || !COUNTRY[ACC.cc] || !SECTOR[ACC.sector])) ACC = null;
if(ACC){ ACC.codes = ACC.codes.filter(c => CODE[c]||CHAP[c]); ACC.markets = Array.isArray(ACC.markets) ? ACC.markets.filter(c=>COUNTRY[c]) : []; if(!ACC.codes.length) ACC = null; }
if(OBS && (typeof OBS!=="object" || typeof OBS.name!=="string" || typeof OBS.email!=="string")) OBS = null;
if(OBS && !COUNTRY[OBS.cc]) OBS.cc = "CO";
const PAID = () => PLAN !== "free";
const LOGGED = () => !!(OBS || ACC);
const allCompanies = () => { const base = (typeof ALLC!=="undefined") ? ALLC : DEMO; return (ACC && PAID()) ? [accCompany(), ...base] : base; };
function accCompany(){ return { id:"me", demo:false, mine:true, name:ACC.name, cc:ACC.cc, city:ACC.city, role:ACC.role, codes:ACC.codes, sector:ACC.sector,
  founded:null, emp:null, vol:null, verified:(ACC.verif&&ACC.verif.status==="ok"), active:0, certs:[], inc:[], markets:ACC.markets||[], web:ACC.web, email:ACC.email, phone:ACC.phone, desc:ACC.desc, contact:ACC.contact, jobrole:ACC.jobrole }; }
const codesFor = (co, role) => role==="supplier" ? (co.scodes||co.codes) : role==="buyer" ? (co.bcodes||co.codes) : co.codes;
const nameKey = (co) => co._nk || (co._nk = norm(co.name+" "+cityOf(co)));
const getCo = (id) => (typeof REAL_BY_ID!=="undefined" && REAL_BY_ID[id]) || allCompanies().find(c => c.id===id);
/* ¿puede ver el contacto de esta empresa? */
function canSee(co){
  if(co.mine) return true;
  if(typeof can==='function' && !can('contacts')) return false;   // nivel de usuario sin acceso a contactos
  if(PLAN==="both") return true;
  if(PLAN==="buyer") return co.role!=="buyer";      // ve proveedores (y mixtas)
  if(PLAN==="supplier") return co.role!=="supplier"; // ve compradores (y mixtas)
  return false;
}
const alertLimit = () => PLAN==="free" ? 1 : PLAN==="both" ? 999 : 10;
const reqLimit = () => PLAN==="free" ? 3 : 9999;

/* ---------- Búsqueda ---------- */
const S = { mode:"suppliers", q:"", cont:"", sub:"", cc:"", sector:"", hs:"", verified:false, sort:"rel" };

/* interpreta el texto: códigos, países, regiones y palabras */
const PQ_CACHE = new Map();
function parseQuery(q){ const k = String(q||"")+"|"+allCompanies().length; if(PQ_CACHE.has(k)) return PQ_CACHE.get(k); if(PQ_CACHE.size>200) PQ_CACHE.clear(); const r = parseQueryNow(q); PQ_CACHE.set(k, r); return r; }
function parseQueryNow(q){
  const nq = norm(q); const res = { codes:[], ccs:[], conts:[], subs:[], words:[] };
  if(!nq) return res;
  const digits = nq.replace(/[.\s]/g,"");
  if(/^\d{2,6}$/.test(digits)){ res.codes.push(digits); return res; }
  ALL_CC.forEach(cc => { const n = norm(cname(cc)); if(n && (nq===n || nq.includes(n) || (nq.length>=4 && n.startsWith(nq)))) res.ccs.push(cc); });
  GEO.forEach(ct => { if([ct.es,ct.en].some(x => norm(x)===nq)) res.conts.push(ct.id); ct.subs.forEach(s => { if([s.es,s.en].some(x => norm(x)===nq)) res.subs.push(s.id); }); });
  let rest = nq; res.ccs.forEach(cc => rest = rest.replace(norm(cname(cc)),""));
  res.words = rest.split(/\s+/).filter(w => w.length>1 && !["de","del","la","el","los","las","en","y","of","the","and","for","para","con","un","una","hacer","fabricar","comprar","vender","busco","quiero"].includes(w));
  /* si una palabra no aparece en ningún producto ni empresa, se corrige al término más parecido */
  if(res.words.length){
    const fixed = res.words.map(w => {
      if(Object.values(CODE).some(c => wordHits(w, hayOf(c)))) return w;
      if(allCompanies().some(co => nameKey(co).includes(w))) return w;
      return fixWord(w);
    });
    /* una palabra que sigue sin coincidir (p. ej. "18k") no debe vaciar la búsqueda si las demás sí coinciden */
    const hits = (w) => Object.values(CODE).some(c => wordHits(w, hayOf(c))) || allCompanies().some(co => nameKey(co).includes(w));
    const ok = fixed.filter(hits);
    const final = ok.length && ok.length < fixed.length ? ok : fixed;
    if(final.join(" ") !== res.words.join(" ")){ res.orig = res.words; res.words = final; res.fixed = final.join(" "); }
  }
  return res;
}
/* ---------- Motor de coincidencias ----------
   Español: singular/plural y masculino/femenino compatibles (vaca≈vacas, computador≈computadoras),
   sin confundir palabras distintas (plata ≠ plato ≠ plátano, cerdo ≠ cerda, pólvora ≠ polvo).
   Inglés (título técnico del HS): solo la palabra exacta o su plural, para que "plata" no caiga en "plates". */
const sing = (w) => { if(w.length>5 && /[^aeiou]es$/.test(w)) return w.slice(0,-2); if(w.length>3 && /[^s]s$/.test(w)) return w.slice(0,-1); return w; };
const stem = (w) => { w = sing(w); return w.length>4 && /[aoe]$/.test(w) ? w.slice(0,-1) : w; };
const esHit = (a, b) => { if(a===b) return true; const x = sing(a), y = sing(b); if(x===y) return true;
  return (x.length>=4 && y.length===x.length+1 && y.startsWith(x) && /[aoe]$/.test(y)) || (y.length>=4 && x.length===y.length+1 && x.startsWith(y) && /[aoe]$/.test(x)); };
const enHit = (w, t) => t===w || t===w+"s" || t===w+"es" || w===t+"s" || w===t+"es";
const toks = (s) => norm(s).split(/[^a-z0-9]+/).filter(Boolean);
const HAY = {};
function hayOf(c){
  if(!HAY[c.code]) HAY[c.code] = { es: toks(c.es+" "+c.kw+" "+(SYN[c.code]||"")+" "+(EXTRA[c.code]||"")+" "+(typeof EXT!=="undefined"&&EXT[c.code]||"")+" "+(SECTOR[c.sector]?.es||"")), en: toks(c.en+" "+(SECTOR[c.sector]?.en||"")),
    title: toks(c.es), entitle: toks(c.en), extra: toks((c.kw||"").split(",")[0]+" "+(SYN[c.code]||"")+" "+(EXTRA[c.code]||"")) };
  return HAY[c.code];
}
const wordHits = (w, h) => Array.isArray(h) ? h.some(t => esHit(w,t)) : (h.es.some(t => esHit(w,t)) || h.en.some(t => enHit(w,t)));
/* códigos HS cuyo texto coincide con TODAS las palabras */
/* coincidencia fuerte: misma palabra en singular o plural (panela = panelas, pero no "paneles") */
const strongHit = (w, h) => { const sw = sing(w); return h.es.some(t => t===w || sing(t)===sw) || h.en.some(t => enHit(w,t)); };
function codesForWords(words){
  if(!words.length) return [];
  const all = Object.values(CODE);
  const strong = all.filter(c => { const h = hayOf(c); return words.every(w => strongHit(w, h)); }).map(c => c.code);
  if(strong.length) return strong;
  return all.filter(c => { const h = hayOf(c); return words.every(w => wordHits(w, h)); }).map(c => c.code);
}
/* ---------- Corrección de errores de escritura (canabis → cannabis, acetaminoifen → acetaminofen) ---------- */
let VOCAB = null;
function vocab(){
  if(VOCAB) return VOCAB; VOCAB = new Map();
  Object.values(CODE).forEach(c => { const h = hayOf(c); h.es.concat(h.en).forEach(t => { if(t.length>=4 && !/^\d+$/.test(t)){ const v = VOCAB.get(t); if(v) v.f++; else VOCAB.set(t, {f:1, s:sound(t)}); } }); });
  return VOCAB;
}
const sound = (w) => w.replace(/h/g,"").replace(/z/g,"s").replace(/v/g,"b").replace(/y/g,"i").replace(/(.)\1+/g,"$1");
function lev(a, b, max){
  if(Math.abs(a.length-b.length)>max) return max+1;
  let prev = Array.from({length:b.length+1}, (_,i)=>i);
  for(let i=1;i<=a.length;i++){ const cur=[i]; let best=i;
    for(let j=1;j<=b.length;j++){ cur[j] = Math.min(prev[j]+1, cur[j-1]+1, prev[j-1]+(a[i-1]===b[j-1]?0:1)); if(cur[j]<best) best=cur[j]; }
    if(best>max) return max+1; prev=cur; }
  return prev[b.length];
}
function fixWord(w){
  if(w.length<4 || /\d/.test(w)) return w;
  const max = w.length>=8 ? 2 : 1, sw = sound(w);
  let best = null, bd = 9, bf = 0;
  vocab().forEach((v, t) => { const f = v.f; const d = Math.min(lev(w,t,max), lev(sw,v.s,max)) + (t[0]===w[0] ? 0 : 0.5) - (t.startsWith(sing(w)) ? 0.3 : 0);
    if(d<=max && (d<bd || (d===bd && f>bf))){ best=t; bd=d; bf=f; } });
  return best || w;
}
/* sugerencias cuando no hay resultados: productos que coinciden con ALGUNA palabra */
function nearCodes(q){
  const words = parseQuery(q).words; if(!words.length) return [];
  return Object.values(CODE).map(c => ({c:c.code, n:words.filter(w => wordHits(w, hayOf(c))).length})).filter(x=>x.n).sort((a,b)=>b.n-a.n).slice(0,6).map(x=>x.c);
}
function geoOk(co, f){
  if(f.cc && co.cc!==f.cc) return false;
  if(f.sub && COUNTRY[co.cc]?.sub!==f.sub) return false;
  if(f.cont && COUNTRY[co.cc]?.cont!==f.cont) return false;
  return true;
}
function searchCompanies(f){
  const p = parseQuery(f.q);
  const wordCodes = codesForWords(p.words);
  const role = f.mode==="buyers" ? "buyer" : f.mode==="suppliers" ? "supplier" : (f.role||"");
  let list = allCompanies().filter(co => {
    if(role && co.role!==role && co.role!=="both") return false;
    const cds = codesFor(co, role);   /* empresas reales: lo exportado y lo importado son listas distintas */
    if(!geoOk(co, f)) return false;
    if(f.sector && co.sector!==f.sector) return false;
    if(f.hs && !cds.some(c => related(c, f.hs))) return false;
    if(f.verified && !co.verified && !co.mine) return false;
    if(p.ccs.length && !p.ccs.includes(co.cc)) return false;
    if(p.conts.length && !p.conts.includes(COUNTRY[co.cc]?.cont)) return false;
    if(p.subs.length && !p.subs.includes(COUNTRY[co.cc]?.sub)) return false;
    if(p.codes.length && !cds.some(c => p.codes.some(q2 => related(c,q2)))) return false;
    if(p.words.length){
      const byCode = cds.some(c => wordCodes.some(w => related(c,w)));
      const byName = p.words.every(w => nameKey(co).includes(w));
      if(!byCode && !byName) return false;
    }
    return true;
  });
  const score = (co) => (co.mine?100:0) + (co.real?30+Math.log10(1+(co.fob||0)+(co.cif||0)):0) + (co.verified?5:0) - (co.active||0)/10 + co.codes.length;
  if(f.sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  else if(f.sort==="active") list.sort((a,b)=>a.active-b.active);
  else if(f.sort==="size") list.sort((a,b)=>(b.vol||0)-(a.vol||0));
  else if(p.words.length && wordCodes.length>1){
    /* relevancia: primero las empresas del producto que mejor coincide (cannabis → plantas y extractos antes que fibra) */
    const pos = {}; searchCodes(f.q).forEach((c,i) => pos[c] = i);
    const best = (co) => Math.min(99, ...co.codes.map(c => { let m = 99; for(const w of wordCodes) if(related(c,w) && pos[w]!==undefined) m = Math.min(m, pos[w]); return m; }));
    /* dentro del mismo producto, primero las empresas para las que ese producto es el principal */
    const idx = (co) => { const cs = codesFor(co, role); const i = cs.findIndex(c => wordCodes.some(w => related(c,w))); return i<0 ? 9 : i; };
    const B = new Map(list.map(co => [co, Math.min(best(co),3)*10 + Math.min(idx(co),9)]));
    list.sort((a,b) => (B.get(a) - B.get(b)) || score(b)-score(a));
  }
  else if(wordCodes.length===1 || p.codes.length || f.hs){
    const target = wordCodes.length===1 ? wordCodes : p.codes.length ? p.codes : [f.hs];
    const idx = (co) => { const cs = codesFor(co, role); const i = cs.findIndex(c => target.some(w => related(c,w))); return i<0 ? 9 : i; };
    list.sort((a,b) => (Math.min(idx(a),3) - Math.min(idx(b),3)) || score(b)-score(a));
  }
  else list.sort((a,b)=>score(b)-score(a));
  return list;
}
function searchCodes(q){
  const p = parseQuery(q);
  let codes;
  if(p.codes.length){ const d = p.codes[0]; codes = Object.keys(CODE).filter(c => related(c,d)); }
  else if(p.words.length){
    /* más relevantes primero: la palabra está en el nombre del producto, luego en sus palabras de búsqueda */
    const score = (code) => { const c = CODE[code], h = hayOf(c);
      return p.words.reduce((n,w) => n + (h.title.some(t=>t===w||sing(t)===sing(w))||h.entitle.some(t=>enHit(w,t))?4:wordHits(w,h.title)?1:0) + (wordHits(w,h.extra)?4:0) + (h.extra.length && esHit(w,h.extra[0]) ? 5 : 0) + (toks(EXTRA[code]||"").slice(0,3).some(t=>esHit(w,t)) ? 4 : 0), 0) + (code.length===4?0.5:0); };
    return codesForWords(p.words).map(c=>[c,score(c)]).sort((a,b)=>b[1]-a[1] || a[0].localeCompare(b[0])).map(x=>x[0]);
  }
  else codes = Object.keys(CODE);
  return codes.sort();
}
/* conteo de proveedores/compradores por código: índice por filtro geográfico (rápido con decenas de miles de empresas) */
const CF_CACHE = new Map();
function cfIndex(filt){
  const all = allCompanies();
  const key = [filt.cont||"", filt.sub||"", filt.cc||"", all.length, ACC && PAID() ? (ACC.codes||[]).join(",")+ACC.role : ""].join("|");
  let idx = CF_CACHE.get(key); if(idx) return idx;
  idx = new Map();
  all.forEach(co => { if(!geoOk(co, filt)) return;
    if(co.role!=="buyer") new Set(codesFor(co,"supplier")).forEach(c => { const v = idx.get(c) || {s:0,b:0,ss:new Set(),bs:new Set()}; v.ss.add(co.id); idx.set(c, v); });
    if(co.role!=="supplier") new Set(codesFor(co,"buyer")).forEach(c => { const v = idx.get(c) || {s:0,b:0,ss:new Set(),bs:new Set()}; v.bs.add(co.id); idx.set(c, v); }); });
  if(CF_CACHE.size > 60) CF_CACHE.clear();
  CF_CACHE.set(key, idx); return idx;
}
const countFor = (code, filt={}) => {
  const idx = cfIndex(filt); const ss = new Set(), bs = new Set();
  idx.forEach((v, c) => { if(related(c, code)){ v.ss.forEach(x => ss.add(x)); v.bs.forEach(x => bs.add(x)); } });
  return {s:ss.size, b:bs.size};
};
const countryStats = (cc) => { const cs = allCompanies().filter(c=>c.cc===cc); return { s:cs.filter(c=>c.role!=="buyer").length, b:cs.filter(c=>c.role!=="supplier").length, n:cs.length }; };

/* sugerencias del buscador */
function suggestions(q){
  const nq = norm(q); if(nq.length<2) return [];
  const out = [];
  const digits = nq.replace(/[.\s]/g,"");
  if(/^\d+$/.test(digits)){
    Object.values(CODE).filter(c=>c.code.startsWith(digits)).slice(0,6).forEach(c => out.push({k:"HS", v:fmtCode(c.code), d:L(c), q:c.code}));
    HS_CHAPTERS.filter(c=>c[0].startsWith(digits.slice(0,2))).slice(0,2).forEach(c => out.push({k:t("chapter"), v:c[0], d:LANG==="en"?c[2]:c[1], q:c[0]}));
    return out;
  }
  Object.values(CODE).filter(c => norm(c.es+" "+c.en+" "+c.kw).includes(nq)).slice(0,6).forEach(c => out.push({k:"HS", v:fmtCode(c.code), d:L(c), q:c.code}));
  ALL_CC.filter(cc => norm(cname(cc)).includes(nq)).slice(0,4).forEach(cc => out.push({k:t("lv_country"), v:cc, d:cname(cc), q:cname(cc)}));
  GEO.forEach(ct => ct.subs.forEach(s => { if(norm(L(s)).includes(nq)) out.push({k:t("lv_sub"), v:"", d:L(s), q:L(s)}); }));
  return out.slice(0,10);
}

/* ================================================================
   GLOBAL TRADE FINDER — vistas y navegación
   ================================================================ */
const V = $("#view");
const ICON = {
  check:'<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8.2 14.6 3.6 10l1.4-1.4 3.2 3.2 6.8-6.8 1.4 1.4z"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z"/></svg>',
  logo:'<svg viewBox="0 0 200 200" aria-hidden="true"><rect x="4" y="4" width="192" height="192" rx="46" fill="#1E3A4C"/><g stroke="#FFFFFF" stroke-linecap="round"><polygon points="100,42 150.2,71 150.2,129 100,158 49.8,129 49.8,71" fill="none" stroke-opacity=".35" stroke-width="4"/><path d="M100 100L100 42M100 100L150.2 71M100 100L150.2 129M100 100L100 158M100 100L49.8 129M100 100L49.8 71" stroke-width="6"/></g><g fill="#FFFFFF"><circle cx="150.2" cy="71" r="10"/><circle cx="150.2" cy="129" r="10"/><circle cx="100" cy="158" r="10"/><circle cx="49.8" cy="129" r="10"/><circle cx="49.8" cy="71" r="10"/></g><circle cx="100" cy="42" r="13" fill="#E0A21A"/><circle cx="100" cy="100" r="20" fill="#E0A21A"/></svg>'
};
const roleTag = (r) => `<span class="role ${r}">${t(r)}</span>`;
const ccTag = (cc) => `<span class="cc" title="${esc(cname(cc))}">${cc}</span>`;
const codeChip = (c, extra="") => `<a class="chip" href="#hs-${c}${extra}" title="${esc(codeLabel(c))}"><span class="mono">${fmtCode(c)}</span> ${esc(shorten(codeLabel(c),34))}</a>`;
const shorten = (s,n) => s.length>n ? s.slice(0,n-1)+"…" : s;
const crumbs = (items) => `<nav class="crumbs" aria-label="Ruta">${items.map((it,i)=> (i?'<span class="sep">›</span>':'') + (it.href ? `<a href="${it.href}">${it.lv?`<span class="lv">${it.lv}</span>`:''}${esc(it.label)}</a>` : `<span>${it.lv?`<span class="lv">${it.lv}</span>`:''}${esc(it.label)}</span>`)).join("")}</nav>`;
function toast(msg){ $$(".toast").forEach(x=>x.remove()); const d = document.createElement("div"); d.className="toast"; d.setAttribute("role","status"); d.textContent = msg; document.body.appendChild(d); setTimeout(()=>d.remove(), 2800); }
const go = (h) => { if(location.hash === "#"+h) render(); else location.hash = h; };

/* ---------- Encabezado, franja y pie ---------- */
function chrome(){
  document.documentElement.lang = LANG;
  const cur = (location.hash||"#inicio").slice(1).split("-")[0];
  const items = [["buscar","nav_search"],["oportunidades","nav_opps"],["mercados","nav_markets"],["hs","nav_hs"],["empresas","nav_companies"],["herramientas","nav_tools"],["apoyos","nav_apoyos"],["planes","nav_plans"]];
  const map = {region:"mercados",sub:"mercados",pais:"mercados",pc:"mercados",sec:"hs",cap:"hs",empresa:"empresas",ferias:"herramientas",plantillas:"herramientas",clasificar:"herramientas",calculadora:"herramientas",tablero:"herramientas"};
  const active = map[cur] || cur;
  $("#mainNav").innerHTML = items.map(([h,k])=>`<a href="#${h}" class="${active===h?'on':''}">${t(k)}</a>`).join("") +
    (LOGGED() ? `<a href="#cuenta" class="${active==='cuenta'?'on':''}">${t("nav_account")}${typeof unreadCount==="function"&&unreadCount()?` <span class="pill">${unreadCount()}</span>`:""}</a>` : `<a href="#registro" class="cta">${t("nav_signup")}</a>`);
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang===LANG));
  const inDemo = (OBS && OBS.email===DEMO_EMAIL) || (ACC && ACC.email===DEMO_EMAIL);
  $("#demoStrip").innerHTML = `<div class="wrap"><span>${t("demo_strip")}</span>
    <span class="demo-try">${inDemo ? `<b>${t("demo_on")}</b> ${[["free","demo_obs"],["buyer","buyer"],["supplier","supplier"],["both","both"]].filter(([p])=>p!==PLAN).map(([p,k])=>`<button type="button" class="chip" data-start-demo="${p}">${t(k)}</button>`).join(" ")} <button type="button" class="linkbtn" data-demo-exit>${t("demo_exit")}</button>${PAID() && ACC ? `<span class="demo-lvl"><b>${t("lvl_demo")}</b> ${LEVELS.map(l=>`<button type="button" class="chip" data-lvl="${l}" aria-pressed="${ULEVEL===l}">${t("lvl_"+l)}</button>`).join(" ")}</span>` : ""}`
      : LOGGED() ? "" : `<b>${t("demo_try")}</b> ${[["free","demo_obs"],["buyer","buyer"],["supplier","supplier"],["both","both"]].map(([p,k])=>`<button type="button" class="chip" data-start-demo="${p}">${t(k)}</button>`).join(" ")}`}</span></div>`;
  $$("[data-start-demo]").forEach(b => b.onclick = () => startDemo(b.dataset.startDemo));
  const ex = $("[data-demo-exit]"); if(ex) ex.onclick = exitDemo;
  $$("[data-lvl]").forEach(b => b.onclick = () => setLevel(b.dataset.lvl));
  $("#footTxt").textContent = t("footer",{y:new Date().getFullYear()});
  $("#footLinks").innerHTML = `<a href="#terminos">${t("terms")}</a><a href="#privacidad">${t("privacy")}</a><a href="https://skynetgenesis.com" target="_blank" rel="noopener">skynetgenesis.com</a>`;
  $("#waTxt").textContent = t("support");
  $("#waFloat").href = "https://wa.me/"+SG.waIntl+"?text="+encodeURIComponent(LANG==="en"?"Hello, I need help with Global Trade Finder.":"Hola, necesito ayuda con Global Trade Finder.");
}

/* ---------- Buscador central (portada y resultados) ---------- */
const MODES = [["buyers","tab_buyers"],["suppliers","tab_suppliers"],["products","tab_products"],["markets","tab_markets"]];
function searchBox(){
  return `<form class="searchbox" id="sform" role="search" autocomplete="off">
    <div class="stabs" role="tablist">${MODES.map(([m,k])=>`<button type="button" role="tab" id="tab-${m}" data-mode="${m}" aria-selected="${S.mode===m}">${t(k)}</button>`).join("")}</div>
    <div class="srow">
      <input id="q" type="search" value="${esc(S.q)}" placeholder="${esc(t("ph_"+S.mode))}" aria-label="${esc(t("btn_search"))}" aria-autocomplete="list" aria-controls="suggest">
      <button class="btn btn-main" type="submit">${t("btn_search")}</button>
      <div class="suggest" id="suggest" hidden role="listbox"></div>
    </div>
    <div class="quick"><span class="lbl">${t("popular")}</span>
      ${["090111","080440","060311","854143","270112","6212"].map(c=>`<button type="button" class="chip" data-quick="${c}"><span class="mono">${fmtCode(c)}</span> ${esc(shorten(codeLabel(c),26))}</button>`).join("")}
    </div>
  </form>`;
}
function bindSearchBox(){
  const f = $("#sform"); if(!f) return;
  const q = $("#q"), box = $("#suggest"); let act = -1, items = [];
  $$("[data-mode]", f).forEach(b => b.onclick = () => { S.mode = b.dataset.mode; $$("[data-mode]",f).forEach(x=>x.setAttribute("aria-selected", x===b)); q.placeholder = t("ph_"+S.mode); q.focus(); });
  $$("[data-quick]", f).forEach(b => b.onclick = () => { S.q = ""; S.hs = b.dataset.quick; if(S.mode==="markets") S.mode="suppliers"; go("buscar"); });
  const close = () => { box.hidden = true; act=-1; };
  q.oninput = () => {
    items = suggestions(q.value);
    if(!items.length){ close(); return; }
    box.innerHTML = items.map((s,i)=>`<button type="button" role="option" data-i="${i}"><span class="k">${esc(s.k)}</span><span class="mono">${esc(s.v)}</span><span>${esc(s.d)}</span></button>`).join("");
    box.hidden = false;
    $$("button", box).forEach(b => b.onmousedown = (e) => { e.preventDefault(); choose(items[+b.dataset.i]); });
  };
  q.onkeydown = (e) => {
    if(box.hidden) return;
    const bs = $$("button", box);
    if(e.key==="ArrowDown"){ act = Math.min(act+1, bs.length-1); e.preventDefault(); }
    else if(e.key==="ArrowUp"){ act = Math.max(act-1, 0); e.preventDefault(); }
    else if(e.key==="Enter" && act>=0){ e.preventDefault(); choose(items[act]); return; }
    else if(e.key==="Escape"){ close(); return; }
    bs.forEach((b,i)=>b.classList.toggle("act", i===act));
  };
  q.onblur = () => setTimeout(close, 120);
  const choose = (s) => { close(); if(s.k==="HS" || s.k===t("chapter")){ S.hs = s.q; S.q = ""; } else { S.q = s.q; } submit(); };
  const submit = () => { if(S.mode==="markets"){ const p = parseQuery(S.q); if(p.ccs.length===1){ go("pais-"+p.ccs[0]); return; } if(p.subs.length){ go("sub-"+p.subs[0]); return; } if(p.conts.length){ go("region-"+p.conts[0]); return; } } go("buscar"); };
  f.onsubmit = (e) => { e.preventDefault(); S.q = q.value.trim(); submit(); };
}

/* ---------- Portada ---------- */
function vHome(){
  const nCodes = new Set(allCompanies().flatMap(c=>c.codes)).size;
  const featured = ["CO","US","DE","NL","CN","MX","AE","BR"];
  return `<div class="wrap">
  <div class="hero">
    <div class="eyebrow">${t("eyebrow")}</div>
    <h1>${t("hero_a")} <span>${t("hero_b")}</span> ${t("hero_c")}</h1>
    <p class="lead">${t("hero_lead")}</p>
    ${searchBox()}
  </div>
  ${howBlock()}
  <div>
    <div class="path" aria-label="${esc(t("path_title"))}">
      ${[["lv_cont","5"],["lv_sub","20"],["lv_country",ALL_CC.length],["lv_sector",SECTORS.length],["lv_product",Object.keys(CODE).length],["lv_hs","HS 2022"],["lv_comp",allCompanies().length]].map(([k,v])=>`<div><b>${t(k)}</b><span class="num">${v}</span></div>`).join("")}
    </div>
    <div class="stats">
      <div class="stat"><b>${ALL_CC.length}</b><span>${t("st_countries")}</span></div>
      <div class="stat"><b>96</b><span>${t("st_chapters")}</span></div>
      <div class="stat"><b>${nCodes}</b><span>${t("st_codes")}</span></div>
      <div class="stat"><b>${allCompanies().length}</b><span>${t("st_companies")}</span></div>
    </div>
  </div>
  <section>
    <div class="sec-head"><h2>${t("sec_continents")}</h2><a class="btn btn-ghost btn-sm" href="#mercados">${t("more")}</a></div>
    <div class="grid">${GEO.map(ct => { const ccs = ct.subs.flatMap(s=>s.c); const n = allCompanies().filter(c=>ccs.includes(c.cc)).length;
      return `<a class="tile" href="#region-${ct.id}"><h3>${esc(L(ct))}</h3><div class="meta"><span><b>${ct.subs.length}</b> ${t("subregions")}</span><span><b>${ccs.length}</b> ${t("countries")}</span><span><b>${n}</b> ${t("companies").toLowerCase()}</span></div></a>`; }).join("")}</div>
  </section>
  <section>
    <div class="sec-head"><h2>${t("sec_featured")}</h2></div>
    <div class="grid">${featured.map(cc => { const st = countryStats(cc); return `<a class="tile" href="#pais-${cc}"><div style="display:flex;gap:8px;align-items:center">${ccTag(cc)}<h3>${esc(cname(cc))}</h3></div><div class="meta"><span><b>${st.s}</b> ${t("suppliers").toLowerCase()}</span><span><b>${st.b}</b> ${t("buyers").toLowerCase()}</span></div></a>`; }).join("")}</div>
  </section>
  <section>
    <div class="sec-head"><h2>${t("sec_popular_hs")}</h2><a class="btn btn-ghost btn-sm" href="#hs">${t("nav_hs")}</a></div>
    ${codesTable(["090111","080440","060311","2709","851713","854143","6212","7108","3004","1511"])}
  </section>
  </div>`;
}
function codesTable(codes, filt={}, extra=""){
  return `<div class="tablewrap"><table class="t"><thead><tr><th>${t("lv_hs")}</th><th>${t("lv_product")}</th><th>${t("lv_sector")}</th><th class="r">${t("suppliers")}</th><th class="r">${t("buyers")}</th></tr></thead><tbody>
  ${codes.map(c => { const n = countFor(c, filt); return `<tr><td class="codecell"><a href="#${extra?extra+c:"hs-"+c}">${fmtCode(c)}</a></td><td>${esc(codeLabel(c))}</td><td class="muted">${esc(L(SECTOR[CODE[c]?.sector]))}</td><td class="r">${n.s}</td><td class="r">${n.b}</td></tr>`; }).join("")}
  </tbody></table></div>`;
}

/* ---------- Resultados de búsqueda ---------- */
function filtersPanel(showRole){
  const subs = S.cont ? CONT[S.cont].subs : GEO.flatMap(g=>g.subs);
  const ccs = S.sub ? SUB[S.sub].c : S.cont ? CONT[S.cont].subs.flatMap(s=>s.c) : ALL_CC;
  const opt = (v,l,sel) => `<option value="${esc(v)}" ${sel?"selected":""}>${esc(l)}</option>`;
  return `<aside class="filters" aria-label="${t("filters")}">
    <h3>${t("filters")}</h3>
    ${showRole?`<div class="field"><label for="f-role">${t("f_role")}</label><select id="f-role">${opt("",t("f_all"))}${["supplier","buyer","both"].map(r=>opt(r,t(r),S.role===r)).join("")}</select></div>`:""}
    <div class="field"><label for="f-cont">${t("f_region")}</label><select id="f-cont">${opt("",t("f_all"))}${GEO.map(g=>opt(g.id,L(g),S.cont===g.id)).join("")}</select></div>
    <div class="field"><label for="f-sub">${t("f_sub")}</label><select id="f-sub">${opt("",t("f_all"))}${subs.map(s=>opt(s.id,L(s),S.sub===s.id)).join("")}</select></div>
    <div class="field"><label for="f-cc">${t("f_country")}</label><select id="f-cc">${opt("",t("f_all"))}${ccs.map(cc=>[cc,cname(cc)]).sort((a,b)=>a[1].localeCompare(b[1])).map(([cc,n])=>opt(cc,n,S.cc===cc)).join("")}</select></div>
    <div class="field"><label for="f-sector">${t("f_sector")}</label><select id="f-sector">${opt("",t("f_all"))}${SECTORS.map(s=>opt(s.id,L(s),S.sector===s.id)).join("")}</select></div>
    <div class="field"><label for="f-hs">${t("f_hs")}</label><input id="f-hs" value="${esc(S.hs)}" placeholder="0901" inputmode="numeric" maxlength="7"><span class="hint">${S.hs && codeLabel(S.hs)!==S.hs ? esc(codeLabel(S.hs)) : "2, 4 o 6 dígitos"}</span></div>
    <label class="check"><input type="checkbox" id="f-ver" ${S.verified?"checked":""}><span>${t("f_verified")}</span></label>
    <button type="button" class="btn btn-ghost btn-sm" id="f-clear">${t("f_clear")}</button>
  </aside>`;
}
function bindFilters(rerender){
  const on = (id, fn) => { const el = $("#"+id); if(el) el.onchange = fn; };
  on("f-role", e => { S.role = e.target.value; rerender(); });
  on("f-cont", e => { S.cont = e.target.value; S.sub=""; S.cc=""; rerender(); });
  on("f-sub", e => { S.sub = e.target.value; S.cc=""; if(S.sub) S.cont = SUB[S.sub].cont; rerender(); });
  on("f-cc", e => { S.cc = e.target.value; if(S.cc){ S.sub = COUNTRY[S.cc].sub; S.cont = COUNTRY[S.cc].cont; } rerender(); });
  on("f-sector", e => { S.sector = e.target.value; rerender(); });
  on("f-hs", e => { S.hs = e.target.value.replace(/\D/g,"").slice(0,6); rerender(); });
  on("f-ver", e => { S.verified = e.target.checked; rerender(); });
  const c = $("#f-clear"); if(c) c.onclick = () => { Object.assign(S,{cont:"",sub:"",cc:"",sector:"",hs:"",verified:false,role:""}); rerender(); };
}
function coRow(co){
  const desc = co.codes.slice(0,3).map(c=>codeChip(c)).join("");
  return `<article class="co">
    <div style="min-width:0">
      <h3><a href="#empresa-${co.id}">${esc(co.name)}</a></h3>
      <div class="line">${ccTag(co.cc)}<span>${esc(cityOf(co))}${co.city?", "+esc(cname(co.cc)):""}</span><span>·</span><span>${esc(L(SECTOR[co.sector]))}</span>${co.verified?`<span class="ver">${ICON.check}${t("verified")}</span>`:""}</div>
    </div>
    <div class="side">${roleTag(co.role)}${co.mine?`<span class="mine">${t("yours")}</span>`:co.demo?`<span class="demo">${t("demo")}</span>`:co.real?realBadge():""}</div>
    <div class="codes">${desc}<a class="btn btn-ghost btn-sm" href="#empresa-${co.id}" style="margin-left:auto">${t("view_profile")}</a></div>
  </article>`;
}
const PAGE = 25;
let shown = PAGE;
function vSearch(){
  const isCo = S.mode==="buyers" || S.mode==="suppliers";
  let body;
  if(isCo){
    const list = searchCompanies(S);
    LAST = { kind:"companies", rows:list };
    body = `<div class="resbar"><h2>${t(S.mode)} <span class="muted num" style="font-size:1.1rem">· ${list.length}</span></h2>
      <div class="acts"><select id="f-sort" aria-label="${t("f_sort")}" class="btn btn-ghost btn-sm">${["rel","name","active","size"].map(s=>`<option value="${s}" ${S.sort===s?"selected":""}>${t("sort_"+({rel:"rel",name:"name",active:"active",size:"size"})[s])}</option>`).join("")}</select>
      <button class="btn btn-ghost btn-sm" id="b-save">${t("save_search")}</button><button class="btn btn-ghost btn-sm" id="b-alert">${t("create_alert")}</button><button class="btn btn-main btn-sm" id="b-export">${t("export")}</button></div></div>
      ${list.length ? `<div class="list">${list.slice(0,shown).map(coRow).join("")}</div>${list.length>shown?`<p style="text-align:center"><button class="btn btn-ghost" id="b-more">${t("more")} (${t("showing")} ${shown} ${t("of")} ${list.length})</button></p>`:""}` : emptyBox(S.q)}`;
  } else if(S.mode==="products"){
    const codes = searchCodes(S.q || S.hs).filter(c => !S.sector || CODE[c].sector===S.sector);
    LAST = { kind:"codes", rows:codes };
    body = `<div class="resbar"><h2>${t("products")} <span class="muted num" style="font-size:1.1rem">· ${codes.length}</span></h2><div class="acts"><button class="btn btn-main btn-sm" id="b-export">${t("export")}</button></div></div>
      ${codes.length ? codesTable(codes.slice(0,100), {cont:S.cont,sub:S.sub,cc:S.cc}) + (codes.length>100?`<p class="muted" style="font-size:.88rem">${t("showing")} 100 ${t("of")} ${codes.length}. ${t("refine")}</p>`:"") : emptyBox(S.q)}`;
  } else {
    const p = parseQuery(S.q);
    let ccs = ALL_CC.filter(cc => (!S.cont || COUNTRY[cc].cont===S.cont) && (!S.sub || COUNTRY[cc].sub===S.sub) && (!p.ccs.length || p.ccs.includes(cc)));
    LAST = { kind:"countries", rows:ccs };
    body = `<div class="resbar"><h2>${t("tab_markets")} <span class="muted num" style="font-size:1.1rem">· ${ccs.length}</span></h2></div>
      <div class="grid">${ccs.map(cc=>{const st=countryStats(cc);return `<a class="tile" href="#pais-${cc}"><div style="display:flex;gap:8px;align-items:center">${ccTag(cc)}<h3>${esc(cname(cc))}</h3></div><div class="meta"><span>${esc(L(SUB[COUNTRY[cc].sub]))}</span><span><b>${st.s}</b> ${t("suppliers").toLowerCase()}</span><span><b>${st.b}</b> ${t("buyers").toLowerCase()}</span></div></a>`;}).join("")}</div>`;
  }
  const pq = parseQuery(S.q);
  const fixNote = pq.fixed && S.mode!=="markets" ? `<p class="muted" style="margin:0 0 10px;font-size:.95rem">${t("fixed_for")} <b>«${esc(pq.fixed)}»</b> · ${t("fixed_typed")} «${esc(pq.orig.join(" "))}»</p>` : "";
  const demoNote = S.mode!=="markets" ? `<p class="muted" style="margin:10px 0 0;font-size:.82rem">${t("demo_note")}</p>` : "";
  return `<div class="wrap page">${searchBox()}<div class="layout" style="margin-top:18px">${filtersPanel(false)}<div id="res">${fixNote}${body}${demoNote}</div></div></div>`;
}
const emptyBox = (q) => { const near = q ? nearCodes(q) : [];
  return `<div class="empty"><b>${t("no_results")}</b>${t("no_results_hint")}${typeof ayudaCorta==="function" ? ayudaCorta() : ""}${near.length?`<div style="margin-top:12px"><b style="display:inline;font-size:.95rem">${t("maybe")}</b><div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-top:8px">${near.map(c=>`<button type="button" class="chip" data-near="${c}"><span class="mono">${fmtCode(c)}</span> ${esc(shorten(codeLabel(c),34))}</button>`).join("")}</div></div>`:""}</div>`; };
let LAST = { kind:"companies", rows:[] };
function bindSearch(){
  bindSearchBox(); bindFilters(() => { shown = PAGE; render(); });
  const s = $("#f-sort"); if(s) s.onchange = e => { S.sort = e.target.value; render(); };
  const m = $("#b-more"); if(m) m.onclick = () => { shown += PAGE; render(); };
  const sv = $("#b-save"); if(sv) sv.onclick = saveSearch;
  const al = $("#b-alert"); if(al) al.onclick = () => openAlert();
  const ex = $("#b-export"); if(ex) ex.onclick = openExport;
  $$("[data-near]").forEach(b => b.onclick = () => { S.hs = b.dataset.near; S.q = ""; shown = PAGE; render(); });
}
function describeSearch(f){
  const parts = [t(f.mode)];
  if(f.q) parts.push("“"+f.q+"”");
  if(f.hs) parts.push("HS "+fmtCode(f.hs));
  if(f.cc) parts.push(cname(f.cc)); else if(f.sub) parts.push(L(SUB[f.sub])); else if(f.cont) parts.push(L(CONT[f.cont]));
  if(f.sector) parts.push(L(SECTOR[f.sector]));
  if(f.verified) parts.push(t("verified"));
  return parts.join(" · ");
}
/* demostración pública con la cuenta demo@skynetgenesis.com */
const DEMO_EMAIL = "demo@skynetgenesis.com";
function startDemo(plan){
  OBS = { name:"Cuenta de demostración", email:DEMO_EMAIL, cc:"CO", at:new Date().toISOString() };
  PLAN = plan;
  ACC = plan==="free" ? null : { role:plan, name:"Empresa Demo SkyNet S.A.S.", taxid:"900000000-0", cc:"CO", city:"Santa Marta", sector:"agro",
    codes: plan==="buyer" ? ["8471","3004"] : plan==="supplier" ? ["090111","080440"] : ["090111","8471"], markets:["US","DE","NL"],
    web:"www.skynetgenesis.com", contact:"Usuario demo", jobrole:"Gerencia", email:DEMO_EMAIL, phone:"304 437 5758",
    desc: LANG==="en" ? "Demo company to try Global Trade Finder." : "Empresa de demostración para probar Global Trade Finder.", ok:true };
  ["saved","alerts","requests","users","catalog","threads","myopps","quotes","notify","ratings","crm"].forEach(store.del); ULEVEL = "admin"; store.set("ulevel","admin");
  store.set("observer", OBS); store.set("plan", PLAN); if(ACC) store.set("account", ACC); else store.del("account");
  toast(t("demo_on")); go(plan==="free" ? "cuenta" : "empresa-me");
}
/* la demostración solo se ofrece a visitantes o a quien ya está en ella, para no borrar datos de una cuenta real */
const isDemo = () => (OBS && OBS.email===DEMO_EMAIL) || (ACC && ACC.email===DEMO_EMAIL);
const canDemo = () => !LOGGED() || isDemo();
function exitDemo(){ ["account","saved","alerts","requests","plan","observer","ulevel","users"].forEach(store.del); ACC=null; OBS=null; PLAN="free"; ULEVEL="admin"; go("inicio"); }
/* bloqueo del registro gratuito (solo observador) */
function gate(what){ if(PAID()) return false; modal(`<h2>${t("gate_title")}</h2><p>${t("gate_msg",{what:t(what)})}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("close")}</button><a class="btn btn-main" href="#planes" data-close>${t("see_plans")}</a></div>`); return true; }
function saveSearch(){
  if(gateP("save","w_save")) return;
  const list = store.get("saved", []);
  const f = {...S}; delete f.sort;
  list.unshift({ id:Date.now(), f, at:new Date().toISOString() });
  store.set("saved", list.slice(0,30)); toast(t("saved_ok"));
}

/* ---------- Mercados: continente → subregión → país → sector → producto ---------- */
function vMarkets(){
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_markets")}])}
  <h1>${t("markets_title")}</h1><p class="lead">${t("markets_lead")}</p>
  <div class="stack" style="margin-top:18px">${GEO.map(ct => `<div class="panel"><div class="sec-head" style="margin-bottom:10px"><h2 style="margin:0"><a href="#region-${ct.id}" style="color:inherit;text-decoration:none">${esc(L(ct))}</a></h2><a class="btn btn-ghost btn-sm" href="#region-${ct.id}">${t("more")}</a></div>
    <div class="grid">${ct.subs.map(s=>`<a class="tile" href="#sub-${s.id}"><h3>${esc(L(s))}</h3><div class="meta">${s.c.map(cc=>ccTag(cc)).join(" ")}</div></a>`).join("")}</div></div>`).join("")}</div></div>`;
}
function vRegion(id){
  const ct = CONT[id]; if(!ct) return vNotFound();
  return `<div class="wrap page">${crumbs([{label:t("nav_markets"),href:"#mercados"},{lv:t("lv_cont"),label:L(ct)}])}
  <h1>${esc(L(ct))}</h1>
  <div class="grid" style="margin-top:16px">${ct.subs.map(s=>{const n=allCompanies().filter(c=>s.c.includes(c.cc)).length;return `<a class="tile" href="#sub-${s.id}"><h3>${esc(L(s))}</h3><div class="meta"><span><b>${s.c.length}</b> ${t("countries")}</span><span><b>${n}</b> ${t("companies").toLowerCase()}</span></div><div class="meta">${s.c.map(cc=>esc(cname(cc))).join(" · ")}</div></a>`;}).join("")}</div></div>`;
}
function vSub(id){
  const s = SUB[id]; if(!s) return vNotFound(); const ct = CONT[s.cont];
  return `<div class="wrap page">${crumbs([{label:t("nav_markets"),href:"#mercados"},{lv:t("lv_cont"),label:L(ct),href:"#region-"+ct.id},{lv:t("lv_sub"),label:L(s)}])}
  <h1>${esc(L(s))}</h1>
  <div class="grid" style="margin-top:16px">${s.c.map(cc=>{const st=countryStats(cc);return `<a class="tile" href="#pais-${cc}"><div style="display:flex;gap:8px;align-items:center">${ccTag(cc)}<h3>${esc(cname(cc))}</h3></div><div class="meta"><span><b>${st.s}</b> ${t("suppliers").toLowerCase()}</span><span><b>${st.b}</b> ${t("buyers").toLowerCase()}</span></div></a>`;}).join("")}</div></div>`;
}
function vCountry(cc, sector){
  if(!COUNTRY[cc]) return vNotFound();
  const s = SUB[COUNTRY[cc].sub], ct = CONT[COUNTRY[cc].cont];
  const cos = allCompanies().filter(c => c.cc===cc);
  const st = countryStats(cc);
  const secCount = {}; cos.forEach(c => new Set([c.sector, ...c.codes.map(cd=>CODE[cd]?.sector).filter(Boolean)]).forEach(k => secCount[k] = (secCount[k]||0)+1));
  const inSec = sector ? cos.filter(c => c.codes.some(cd => CODE[cd]?.sector===sector) || c.sector===sector) : cos;
  const codes = [...new Set(inSec.flatMap(c=>c.codes))].filter(c => !sector || CODE[c].sector===sector).sort();
  const max = Math.max(1, ...codes.map(c => { const n=countFor(c,{cc}); return n.s+n.b; }));
  const cr = [{label:t("nav_markets"),href:"#mercados"},{lv:t("lv_cont"),label:L(ct),href:"#region-"+ct.id},{lv:t("lv_sub"),label:L(s),href:"#sub-"+s.id},{lv:t("lv_country"),label:cname(cc),href:sector?"#pais-"+cc:null}];
  if(sector) cr.push({lv:t("lv_sector"),label:L(SECTOR[sector])});
  return `<div class="wrap page">${crumbs(cr)}
  <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">${ccTag(cc)}<h1>${esc(cname(cc))}</h1></div>
  ${cc==="CO" && typeof REAL!=="undefined" ? `<div class="legalnote"><b>${t("real_count",{n:REAL.length.toLocaleString(LANG==="en"?"en-US":"es-CO"), y:DIAN_META.year})}.</b> ${t("real_legal",{y:DIAN_META.year, y2:DIAN_META.year2, mail:SG.mail})}</div>` : ""}
  <div class="stats" style="grid-template-columns:repeat(3,1fr)"><div class="stat"><b>${st.s}</b><span>${t("suppliers")}</span></div><div class="stat"><b>${st.b}</b><span>${t("buyers")}</span></div><div class="stat"><b>${codes.length}</b><span>${t("lv_hs")}</span></div></div>
  <section style="padding-bottom:22px"><div class="sec-head" style="margin-bottom:10px"><h2>${t("by_sector")}</h2></div>
    <div style="display:flex;gap:6px;flex-wrap:wrap"><a class="chip" href="#pais-${cc}" ${!sector?'style="background:var(--petroleo);color:#fff;border-color:var(--petroleo)"':''}>${t("all_sectors")} · ${cos.length}</a>
    ${Object.entries(secCount).sort((a,b)=>b[1]-a[1]).map(([k,n])=>`<a class="chip" href="#pais-${cc}-${k}" ${sector===k?'style="background:var(--petroleo);color:#fff;border-color:var(--petroleo)"':''}>${esc(L(SECTOR[k]))} · ${n}</a>`).join("")}</div>
  </section>
  <div class="two">
    <div class="stack">
      <div><div class="sec-head" style="margin-bottom:8px"><h2>${t("products_in")} ${esc(cname(cc))}</h2></div>
      ${codes.length ? codesTable(codes, {cc}, "pc-"+cc+"-") : emptyBox()}</div>
    </div>
    <div class="panel"><h2>${t("top_hs")}</h2>
      <div class="legend"><span><i style="background:var(--petroleo)"></i>${t("suppliers")}</span><span><i style="background:var(--ambar)"></i>${t("buyers")}</span></div>
      <div class="bars">${codes.map(c=>({c,n:countFor(c,{cc})})).sort((a,b)=>(b.n.s+b.n.b)-(a.n.s+a.n.b)).slice(0,10).map(({c,n})=>`<a class="bar" href="#pc-${cc}-${c}" style="color:inherit;text-decoration:none" title="${esc(codeLabel(c))}"><span class="lab"><span class="mono">${fmtCode(c)}</span> ${esc(codeLabel(c))}</span><span class="trk"><span class="s" style="width:${n.s/max*100}%"></span><span class="b" style="width:${n.b/max*100}%"></span></span><span class="v">${n.s+n.b}</span></a>`).join("")}</div>
    </div>
  </div>
  <section style="padding-bottom:0">${tradeCountryPanel(cc)}</section>
  <section><div class="sec-head"><h2>${t("companies")}</h2>
    <div class="acts" style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" data-goto="suppliers">${t("country_suppliers")} ${esc(cname(cc))}</button><button class="btn btn-ghost btn-sm" data-goto="buyers">${t("country_buyers")} ${esc(cname(cc))}</button></div></div>
    <div class="list">${inSec.slice(0,12).map(coRow).join("") || emptyBox()}</div>
  </section></div>`;
}
function bindCountry(cc, sector){
  $$("[data-goto]").forEach(b => b.onclick = () => { Object.assign(S,{mode:b.dataset.goto,q:"",hs:"",sector:sector||"",cc,sub:COUNTRY[cc].sub,cont:COUNTRY[cc].cont,verified:false}); shown=PAGE; go("buscar"); });
}
/* país + código: el último paso de la ruta (empresas) */
function vCountryCode(cc, code){
  if(!COUNTRY[cc] || !(CODE[code]||CHAP[code])) return vNotFound();
  const s = SUB[COUNTRY[cc].sub], ct = CONT[COUNTRY[cc].cont];
  const sec = CODE[code]?.sector;
  const cos = allCompanies().filter(c => c.cc===cc && c.codes.some(x=>related(x,code)));
  const sup = cos.filter(c=>c.role!=="buyer" && codesFor(c,"supplier").some(x=>related(x,code))), buy = cos.filter(c=>c.role!=="supplier" && codesFor(c,"buyer").some(x=>related(x,code)));
  return `<div class="wrap page">${crumbs([{label:t("nav_markets"),href:"#mercados"},{lv:t("lv_cont"),label:L(ct),href:"#region-"+ct.id},{lv:t("lv_sub"),label:L(s),href:"#sub-"+s.id},{lv:t("lv_country"),label:cname(cc),href:"#pais-"+cc},
    sec?{lv:t("lv_sector"),label:L(SECTOR[sec]),href:"#pais-"+cc+"-"+sec}:null,{lv:t("lv_product"),label:codeLabel(code)},{lv:t("lv_hs"),label:fmtCode(code),href:"#hs-"+code}].filter(Boolean))}
  <div class="eyebrow">${codeLevel(code)} ${fmtCode(code)}</div>
  <h1>${esc(codeLabel(code))} · ${esc(cname(cc))}</h1>
  <div class="two" style="margin-top:16px">
    <div><h2 style="font-size:1.5rem;text-transform:uppercase;margin-bottom:8px">${t("suppliers")} · ${sup.length}</h2><div class="list">${sup.map(coRow).join("") || emptyBox()}</div></div>
    <div><h2 style="font-size:1.5rem;text-transform:uppercase;margin-bottom:8px">${t("buyers")} · ${buy.length}</h2><div class="list">${buy.map(coRow).join("") || emptyBox()}</div></div>
  </div>${CODE[code] ? `<div class="two" style="margin-top:20px">${tradePanel(code, cc)}${tariffPanel(code, cc)}</div>` : ""}</div>`;
}

/* ---------- Sistema Armonizado ---------- */
function vHS(){
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_hs")}])}
  <h1>${t("hs_title")}</h1><p class="lead">${t("hs_lead")}</p>
  <form id="hsform" class="srow" style="margin:16px 0;max-width:640px" role="search"><input id="hsq" type="search" placeholder="${esc(t("hs_search_ph"))}" aria-label="${esc(t("hs_search_ph"))}"><button class="btn btn-main" type="submit">${t("btn_search")}</button></form>
  <div id="hsres"></div>
  <div class="tablewrap"><table class="t"><thead><tr><th>${t("section")}</th><th>${t("lv_product")}</th><th class="r">${t("chapters")}</th></tr></thead><tbody>
  ${HS_SECTIONS.map(s=>`<tr><td class="codecell"><a href="#sec-${s.id}">${s.id}</a></td><td><a href="#sec-${s.id}" style="color:inherit">${esc(L(s))}</a></td><td class="r mono">${String(s.ch[0]).padStart(2,"0")}–${String(s.ch[1]).padStart(2,"0")}</td></tr>`).join("")}
  </tbody></table></div></div>`;
}
function bindHS(){
  const f = $("#hsform"); if(!f) return;
  f.onsubmit = (e) => { e.preventDefault(); const q = $("#hsq").value.trim(); const d = q.replace(/[.\s]/g,"");
    if(/^\d{2}$/.test(d) && CHAP[d]){ go("cap-"+d); return; }
    if(/^\d{4,6}$/.test(d) && CODE[d]){ go("hs-"+d); return; }
    const codes = searchCodes(q); const chaps = HS_CHAPTERS.filter(c => norm(c[1]+" "+c[2]).includes(norm(q)));
    $("#hsres").innerHTML = `<div class="stack" style="margin-bottom:18px">${chaps.length?`<div class="grid">${chaps.map(c=>`<a class="tile" href="#cap-${c[0]}"><span class="mono" style="font-weight:700">${t("chapter")} ${c[0]}</span><h3>${esc(LANG==="en"?c[2]:c[1])}</h3></a>`).join("")}</div>`:""}${codes.length?codesTable(codes.slice(0,100)):(!chaps.length?emptyBox(q):"")}</div>`; };
}
function vSection(id){
  const s = HS_SECTIONS.find(x=>x.id===id); if(!s) return vNotFound();
  const chs = HS_CHAPTERS.filter(c => { const n=+c[0]; return n>=s.ch[0] && n<=s.ch[1]; });
  return `<div class="wrap page">${crumbs([{label:t("nav_hs"),href:"#hs"},{lv:t("section"),label:s.id+" · "+L(s)}])}
  <div class="eyebrow">${t("section")} ${s.id}</div><h1>${esc(L(s))}</h1>
  <div class="grid" style="margin-top:16px">${chs.map(c=>{const n=Object.keys(CODE).filter(k=>k.startsWith(c[0])&&k.length===4).length;return `<a class="tile" href="#cap-${c[0]}"><span class="mono" style="font-weight:700">${t("chapter")} ${c[0]}</span><h3>${esc(LANG==="en"?c[2]:c[1])}</h3><div class="meta"><span><b>${n}</b> ${t("heading").toLowerCase()}s</span></div></a>`;}).join("")}</div></div>`;
}
function vChapter(ch){
  const c = CHAP[ch]; if(!c) return vNotFound(); const s = sectionOf(ch);
  const codes = Object.keys(CODE).filter(k=>k.startsWith(ch)).sort();
  return `<div class="wrap page">${crumbs([{label:t("nav_hs"),href:"#hs"},{lv:t("section"),label:s.id,href:"#sec-"+s.id},{lv:t("chapter"),label:ch+" · "+L(c)}])}
  <div class="eyebrow">${t("chapter")} ${ch}</div><h1>${esc(L(c))}</h1>
  <div style="margin-top:16px">${codes.length ? codesTable(codes) : `<div class="empty">${t("hs_no_codes")}</div>`}</div></div>`;
}
function vCode(code){
  const c = CODE[code]; if(!c) return CHAP[code] ? vChapter(code) : vNotFound();
  const ch = code.slice(0,2), s = sectionOf(ch);
  const cr = [{label:t("nav_hs"),href:"#hs"},{lv:t("section"),label:s.id,href:"#sec-"+s.id},{lv:t("chapter"),label:ch,href:"#cap-"+ch}];
  if(code.length===6 && CODE[code.slice(0,4)]) cr.push({lv:t("heading"),label:fmtCode(code.slice(0,4)),href:"#hs-"+code.slice(0,4)});
  cr.push({lv:codeLevel(code),label:fmtCode(code)});
  const children = Object.keys(CODE).filter(k=>k.length===6 && k.startsWith(code) && k!==code);
  const cos = allCompanies().filter(co => co.codes.some(x=>related(x,code)));
  const byCc = {}; cos.forEach(co => { byCc[co.cc] = byCc[co.cc] || {s:0,b:0}; if(co.role!=="buyer" && codesFor(co,"supplier").some(x=>related(x,code))) byCc[co.cc].s++; if(co.role!=="supplier" && codesFor(co,"buyer").some(x=>related(x,code))) byCc[co.cc].b++; });
  const rows = Object.entries(byCc).sort((a,b)=>(b[1].s+b[1].b)-(a[1].s+a[1].b));
  const max = Math.max(1,...rows.map(r=>r[1].s+r[1].b));
  const n = countFor(code);
  return `<div class="wrap page">${crumbs(cr)}
  <div class="eyebrow">${codeLevel(code)} ${fmtCode(code)} · ${esc(L(SECTOR[c.sector]))}</div><h1>${esc(L(c))}</h1>
  <p class="lead">${({es:"Nombre en inglés: ",en:"In Spanish: ",pt:"Nome em inglês: "})[LANG]||""}${esc(LANG==="en"?c.es:c.en)}</p>
  <div class="stats" style="grid-template-columns:repeat(3,1fr)"><div class="stat"><b>${n.s}</b><span>${t("suppliers")}</span></div><div class="stat"><b>${n.b}</b><span>${t("buyers")}</span></div><div class="stat"><b>${rows.length}</b><span>${t("countries")}</span></div></div>
  ${children.length?`<section style="padding-bottom:0"><div style="display:flex;gap:6px;flex-wrap:wrap">${children.map(k=>codeChip(k)).join("")}</div></section>`:""}
  <div class="two" style="margin-top:20px">
    <div class="stack">
      <div class="sec-head" style="margin:0"><h2 style="font-size:1.5rem">${t("companies")} · ${cos.length}</h2>
        <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" data-cgo="suppliers">${t("tab_suppliers")}</button><button class="btn btn-ghost btn-sm" data-cgo="buyers">${t("tab_buyers")}</button></div></div>
      <div class="list">${cos.slice(0,15).map(coRow).join("") || emptyBox()}</div>
    </div>
    <div class="stack">
      ${tradePanel(code)}
    <div class="panel"><h2>${t("where_trade")}</h2>
      <div class="legend"><span><i style="background:var(--petroleo)"></i>${t("suppliers")}</span><span><i style="background:var(--ambar)"></i>${t("buyers")}</span></div>
      <div class="bars">${rows.map(([cc,v])=>`<a class="bar" href="#pc-${cc}-${code}" style="color:inherit;text-decoration:none"><span class="lab">${ccTag(cc)} ${esc(cname(cc))}</span><span class="trk"><span class="s" style="width:${v.s/max*100}%"></span><span class="b" style="width:${v.b/max*100}%"></span></span><span class="v">${v.s+v.b}</span></a>`).join("")}</div>
    </div>
    </div>
  </div></div>`;
}
function bindCode(code){ $$("[data-cgo]").forEach(b => b.onclick = () => { Object.assign(S,{mode:b.dataset.cgo,q:"",hs:code,cc:"",sub:"",cont:"",sector:"",verified:false}); shown=PAGE; go("buscar"); }); }

/* ---------- Directorio ---------- */
function vDirectory(){
  const f = {...S, mode:"all", q:S.dq||""};
  const list = searchCompanies(f);
  LAST = { kind:"companies", rows:list };
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_companies")}])}
  <h1>${t("dir_title")}</h1><p class="lead">${t("dir_lead")}</p>
  <div class="layout" style="margin-top:16px">${filtersPanel(true)}<div>
    <form id="dform" class="srow" style="margin-bottom:12px" role="search"><input id="dq" type="search" value="${esc(S.dq||"")}" placeholder="${esc(t("ph_buyers"))}" aria-label="${esc(t("btn_search"))}"><button class="btn btn-main" type="submit">${t("btn_search")}</button></form>
    <div class="resbar"><h2>${t("companies")} <span class="muted num" style="font-size:1.1rem">· ${list.length}</span></h2><div class="acts"><button class="btn btn-main btn-sm" id="b-export">${t("export")}</button></div></div>
    ${list.length?`<div class="list">${list.slice(0,shown).map(coRow).join("")}</div>${list.length>shown?`<p style="text-align:center"><button class="btn btn-ghost" id="b-more">${t("more")} (${t("showing")} ${shown} ${t("of")} ${list.length})</button></p>`:""}`:emptyBox()}
  </div></div></div>`;
}
function bindDirectory(){
  bindFilters(() => { shown = PAGE; render(); });
  $("#dform").onsubmit = (e) => { e.preventDefault(); S.dq = $("#dq").value.trim(); shown=PAGE; render(); };
  const m = $("#b-more"); if(m) m.onclick = () => { shown += PAGE; render(); };
  $("#b-export").onclick = openExport;
}

/* ---------- Perfil de empresa ---------- */
function coDesc(co){
  if(co.desc) return co.desc;
  const prod = co.codes.map(c=>codeLabel(c).toLowerCase()).slice(0,2).join(LANG==="en"?" and ":" y ");
  const mk = co.markets.slice(0,3).map(cname).join(", ") || t("world");
  const sec = LANG==="en" ? L(SECTOR[co.sector]) : t("ent_kind")+" "+L(SECTOR[co.sector]).toLowerCase();
  const key = (co.mine || !co.inc.length) ? "d_both" : co.role==="buyer"?"d_buy":co.role==="supplier"?"d_sup":"d_both";
  const txt = t(key,{sec, city:cityOf(co), country:cname(co.cc), prod, mk, inc:co.inc.join(" / "), cert:co.certs.join(" / ")});
  /* sin ciudad conocida no se repite el país ("de Argelia, Argelia") */
  return co.city ? txt : txt.replace(cname(co.cc)+", "+cname(co.cc), cname(co.cc));
}
function vCompany(id){
  const co = getCo(id); if(!co) return vNotFound();
  if(co.real) return vRealCompany(co);
  const see = canSee(co);
  const lockMsg = co.role==="buyer" ? t("locked_buyers") : t("locked_suppliers");
  const ct = CONT[COUNTRY[co.cc].cont];
  const contact = see ? `<dl class="kv">
      <dt>${co.contact?t("r_contact"):t("contact_dept")}</dt><dd>${esc(co.contact ? co.contact+(co.jobrole?" · "+co.jobrole:"") : (co.role==="buyer"?t("dept_buy"):t("dept_sup")))}</dd>
      <dt>${t("email")}</dt><dd class="mono" style="user-select:all">${esc(co.email||"—")}</dd>
      <dt>${t("phone")}</dt><dd class="mono" style="user-select:all">${esc(co.phone||"—")}</dd>
      <dt>${t("website")}</dt><dd class="mono">${esc(co.web||"—")}</dd></dl>`
    : `<div class="lock"><b>${t("locked_title")}</b>${lockMsg}<dl class="kv blur" aria-hidden="true" style="margin-top:10px"><dt>${t("email")}</dt><dd>xxxxx@xxxxxxx.xxx</dd><dt>${t("phone")}</dt><dd>+00 000 0000000</dd></dl><a class="btn btn-amb btn-sm" href="#planes" style="margin-top:10px">${t("see_plans")}</a></div>`;
  const isSup = co.role!=="buyer";
  return `<div class="wrap page">${crumbs([{label:t("nav_companies"),href:"#empresas"},{lv:t("lv_cont"),label:L(ct),href:"#region-"+ct.id},{lv:t("lv_country"),label:cname(co.cc),href:"#pais-"+co.cc},{label:co.name}])}
  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:6px">${roleTag(co.role)}${co.verified?`<span class="ver">${ICON.check}${t("verified")}</span>`:""}${co.mine?`<span class="mine">${t("yours")}</span>`:co.demo?`<span class="demo">${t("demo")}</span>`:""}</div>
  <h1>${esc(co.name)}</h1>
  ${co.demo?`<p class="muted" style="background:#FFF6E0;border:1px solid #F0D58A;border-radius:10px;padding:10px 12px;font-size:.92rem;margin:6px 0 10px">${t("fake_note")}</p>`:""}
  <p class="lead" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">${ccTag(co.cc)} ${esc(cityOf(co))}${co.city?", "+esc(cname(co.cc)):""} · ${esc(L(SECTOR[co.sector]))}</p>
  <div class="two" style="margin-top:18px">
    <div class="stack">
      ${catalogSection(co)}
      ${ratingSection(co)}
      <div class="panel"><h2>${t("about")}</h2><p style="margin:0 0 12px">${esc(coDesc(co))}</p>
        <dl class="kv">${co.founded?`<dt>${t("founded")}</dt><dd class="num">${co.founded}</dd>`:""}${co.emp?`<dt>${t("employees")}</dt><dd>${t("emp_"+co.emp)}</dd>`:""}${co.vol?`<dt>${t("volume")}</dt><dd>${t("vol_"+co.vol)}</dd>`:""}
        <dt>${t("active")}</dt><dd>${co.active===0?t("today"):(LANG==="en"?co.active+" "+t("days"):"hace "+co.active+" "+t("days"))}</dd></dl></div>
      <div class="panel"><h2>${t("products")}</h2>${codesTable(co.codes)}</div>
      <div class="panel"><h2>${isSup?t("selling_to"):t("sourcing_from")}</h2><div style="display:flex;gap:6px;flex-wrap:wrap">${(co.markets.length?co.markets:[]).map(cc=>`<a class="chip" href="#pais-${cc}">${ccTag(cc)} ${esc(cname(cc))}</a>`).join("") || `<span class="muted">${t("world")}</span>`}</div>
        ${co.certs.length?`<h2 style="margin-top:16px">${t("certs")}</h2><div style="display:flex;gap:6px;flex-wrap:wrap">${co.certs.map(c=>`<span class="chip">${esc(c)}</span>`).join("")}</div>`:""}
        ${co.inc.length?`<h2 style="margin-top:16px">${t("incoterms")}</h2><div style="display:flex;gap:6px;flex-wrap:wrap">${co.inc.map(c=>`<span class="chip mono">${c}</span>`).join("")}</div>`:""}</div>
    </div>
    <div class="stack">
      <div class="panel"><h2>${t("contact")}</h2>${contact}</div>
      ${co.mine ? (can("profile") ? `<a class="btn btn-main" href="#registro">${t("reg_edit")}</a>` : "") : `<div class="panel" style="display:flex;flex-direction:column;gap:8px">
        <button class="btn btn-main" id="b-rfq">${isSup?t("send_rfq"):t("send_offer")}</button>
        <button class="btn btn-ghost" id="b-msg">${t("msg_send")}</button>
        ${PAID() && ACC && can("contacts") ? `<button class="btn btn-ghost" id="b-crm">${prospects().some(p=>p.coId===co.id)?t("crm_in"):t("crm_add")}</button>` : ""}
        <button class="btn btn-ghost" id="b-contact">${t("request_contact")}</button></div>`}
    </div>
  </div></div>`;
}
function bindCompany(id){
  const co = getCo(id); if(!co) return;
  if(co.real) return bindRealCompany(co);
  const isSup = co.role!=="buyer";
  const r = $("#b-rfq"); if(r) r.onclick = () => openRFQ(co, isSup ? "rfq" : "offer");
  const c = $("#b-contact"); if(c) c.onclick = () => openRFQ(co, "contact");
  const mg = $("#b-msg"); if(mg) mg.onclick = () => openThread(co.id);
  const rt = $("#b-rate"); if(rt) rt.onclick = () => openRate(co);
  const cr = $("#b-crm"); if(cr) cr.onclick = () => { addProspect(co, "new"); render(); };
}

/* ---------- Planes ---------- */
const PLANS = [
  { id:"free", name:"plan_free", who:"plan_free_who", feats:["pf1","pf2","pf3","pf4"] },
  { id:"buyer", name:"buyer", who:"plan_buyer_who", feats:["pb1","pb2","pb3","pb4"] },
  { id:"supplier", name:"supplier", who:"plan_supplier_who", feats:["ps1","ps2","ps3","ps4"] },
  { id:"both", name:"both", who:"plan_both_who", feats:["pa1","pa2","pa3","pa4"], rec:true }
];
function vPlans(){
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_plans")}])}
  <h1>${t("plans_title")}</h1><p class="lead">${t("plans_lead")}</p>
  <div class="plans" style="margin-top:18px">${PLANS.map(p=>`<div class="plan ${p.rec?"rec":""}">
    ${PLAN===p.id && (typeof LOGGED!=="function" || LOGGED())?`<span class="badge-cur">${t("current")}</span>`:p.rec?`<span class="badge-cur" style="background:var(--ambar-2);color:#fff">${t("recommended")}</span>`:""}
    <h3>${t(p.name)}</h3><div class="who">${t(p.who)}</div>
    <div class="price">${p.id==="free"?t("price_free"):money(PRICES[p.id])+` <span class="who">${t("per_month")}</span>`}</div>${p.id!=="free" && typeof TRM!=="undefined" ? `<div class="who">≈ US$ ${Math.round(PRICES[p.id]/TRM.v)} · ${t("trm")} ${trmFmt()}</div>` : ""}${p.id==="free"?"":`<div class="who"><b>${t("users_incl")}</b></div>`}
    <ul>${p.feats.map(f=>`<li>${t(f)}</li>`).join("")}</ul>
    <div class="acts">${p.id==="free" ? (LOGGED()?"":`<a class="btn btn-main" href="#registro">${t("nav_signup")}</a>`) : `<a class="btn btn-main" href="${CATALOG_URL}" target="_blank" rel="noopener">${t("hire")}</a>${canDemo() ? `<button class="btn btn-ghost btn-sm" data-demo="${esc(p.id)}" ${PLAN===p.id?"disabled":""}>${t("try_demo")}</button>` : ""}`}
    ${p.id==="free" && PLAN!=="free" && canDemo() ? `<button class="btn btn-ghost btn-sm" data-demo="free">${t("try_demo")}</button>`:""}</div>
  </div>`).join("")}</div>
  <p class="muted" style="margin-top:14px;font-size:.9rem">${PLAN==="free"?t("using_free"):t("demo_plan_on")+" <b>"+t(PLAN)+"</b>"}</p></div>`;
}
function bindPlans(){ $$("[data-demo]").forEach(b => b.onclick = () => startDemo(b.dataset.demo)); }

/* ================================================================
   GLOBAL TRADE FINDER — niveles de usuario, equipo, plan y pagos,
   botón "atrás" y guía de uso
   ================================================================ */
Object.assign(T.es, {
  fixed_for:"Mostramos resultados para", fixed_typed:"Usted escribió", demo_note:"Datos de demostración: las empresas son ficticias. En la versión con servidor aparecerán empresas reales registradas.",
  refine:"Escriba una palabra más precisa para acotar la lista.",
  maybe:"Quizás busca:",
  per_month:"/ mes", users_incl:"Usuarios ilimitados, sin costo por usuario.", monthly_value:"Valor mensual", users_count:"Usuarios: {a} · ilimitados, sin costo adicional",
  lvl_title:"Nivel de usuario", lvl_demo:"Nivel de usuario:",
  lvl_admin:"Administrador", lvl_director:"Director comercial", lvl_asesor:"Consultor comercial", lvl_analista:"Analista de mercados", lvl_consulta:"Solo consulta",
  lvl_admin_d:"Maneja usuarios, plan y pagos, y el perfil de la empresa. Ve y hace todo.",
  lvl_director_d:"Ve contactos, envía solicitudes y ofertas, aprueba las de los asesores y exporta informes.",
  lvl_asesor_d:"Busca empresas, ve contactos y prepara solicitudes y ofertas, que quedan pendientes de aprobación.",
  lvl_analista_d:"Estudia mercados, guarda búsquedas, crea alertas y exporta informes. No ve contactos ni envía nada.",
  lvl_consulta_d:"Mira el directorio y los mercados. No ve contactos ni hace acciones.",
  perm_title:"No disponible para su nivel de usuario", perm_msg:"Su nivel de usuario ({lvl}) no permite {what}. Si lo necesita, pídaselo al administrador de su empresa.",
  w_contacts:"ver datos de contacto", w_approve:"aprobar solicitudes", w_users:"administrar usuarios", w_billing:"ver el plan y los pagos",
  team:"Usuarios de la empresa", team_add:"Agregar usuario", team_email:"Correo del usuario", team_level:"Nivel", team_added:"Usuario agregado", team_removed:"Usuario retirado", team_you:"Usted", team_note:"En la versión real, cada usuario recibe una invitación por correo y crea su propia contraseña.", team_dup:"Ese correo ya está en la lista", team_remove:"Retirar",
  billing:"Plan y pagos", paid_until:"Pagado hasta", bill_status:"Estado", st_active:"Activa", st_demo:"Demostración sin cobro", pay_bold:"Pagar en línea con Bold",
  bold_demo_title:"Pago en línea con Bold", bold_demo_msg:"En la demostración no se cobra. En la versión real este botón abre la pasarela segura de Bold (tarjeta, PSE, Nequi y otros medios) y, cuando el pago se aprueba, la cuenta de la empresa queda al día sola, sin enviar comprobantes.",
  bill_other:"El plan y los pagos los gestiona el administrador de su empresa.",
  status_sent:"Enviada", status_pending:"Por aprobar", status_rejected:"Rechazada",
  to_approve:"Solicitudes por aprobar", approve:"Aprobar", reject:"Rechazar", approved_ok:"Solicitud aprobada y enviada", rejected_ok:"Solicitud rechazada", none_pending:"No hay solicitudes por aprobar.",
  rfq_pending_ok:"Solicitud guardada. Queda pendiente de aprobación del director comercial.", by:"Preparada por",
  back_exit:"Pulse \"atrás\" otra vez para salir de Global Trade Finder.",
  how_title:"¿Para qué le sirve a su empresa?",
  how1_t:"Vender afuera", how1_d:"Encuentre compradores de su producto en otros países y envíeles una oferta.", how1_b:"Buscar compradores",
  how2_t:"Comprar afuera", how2_d:"Encuentre proveedores de lo que necesita y pídales una cotización.", how2_b:"Buscar proveedores",
  how3_t:"Estudiar mercados", how3_d:"Antes de exportar, vea en qué países se compra su producto y cuántas empresas hay.", how3_b:"Explorar mercados",
  how_steps:"1. Busque por producto o código HS · 2. Revise el perfil de la empresa · 3. Envíe su oferta o solicitud · 4. Reciba alertas de nuevas oportunidades"
});
Object.assign(T.en, {
  fixed_for:"Showing results for", fixed_typed:"You typed", demo_note:"Demo data: companies are fictitious. The server version will list real registered companies.",
  refine:"Type a more specific word to narrow the list.",
  maybe:"Maybe you are looking for:",
  per_month:"/ month", users_incl:"Unlimited users, no per-user fee.", monthly_value:"Monthly amount", users_count:"Users: {a} · unlimited, no extra cost",
  lvl_title:"User level", lvl_demo:"User level:",
  lvl_admin:"Administrator", lvl_director:"Sales director", lvl_asesor:"Sales advisor", lvl_analista:"Market analyst", lvl_consulta:"View only",
  lvl_admin_d:"Manages users, plan, payments and the company profile. Sees and does everything.",
  lvl_director_d:"Sees contacts, sends requests and offers, approves the advisors' ones and exports reports.",
  lvl_asesor_d:"Searches companies, sees contacts and prepares requests and offers, which wait for approval.",
  lvl_analista_d:"Studies markets, saves searches, creates alerts and exports reports. Does not see contacts or send anything.",
  lvl_consulta_d:"Browses the directory and markets. No contacts and no actions.",
  perm_title:"Not available for your user level", perm_msg:"Your user level ({lvl}) does not allow you to {what}. If you need it, ask your company administrator.",
  w_contacts:"see contact details", w_approve:"approve requests", w_users:"manage users", w_billing:"see the plan and payments",
  team:"Company users", team_add:"Add user", team_email:"User email", team_level:"Level", team_added:"User added", team_removed:"User removed", team_you:"You", team_note:"In the live version each user gets an email invitation and creates their own password.", team_dup:"That email is already on the list", team_remove:"Remove",
  billing:"Plan and payments", paid_until:"Paid until", bill_status:"Status", st_active:"Active", st_demo:"Demo, no charge", pay_bold:"Pay online with Bold",
  bold_demo_title:"Online payment with Bold", bold_demo_msg:"The demo does not charge. In the live version this button opens Bold's secure checkout (card, PSE, Nequi and more) and, once the payment is approved, the company account is brought up to date automatically, with no receipts to send.",
  bill_other:"The plan and payments are managed by your company administrator.",
  status_sent:"Sent", status_pending:"Awaiting approval", status_rejected:"Rejected",
  to_approve:"Requests awaiting approval", approve:"Approve", reject:"Reject", approved_ok:"Request approved and sent", rejected_ok:"Request rejected", none_pending:"No requests awaiting approval.",
  rfq_pending_ok:"Request saved. It awaits approval by the sales director.", by:"Prepared by",
  back_exit:"Press \"back\" again to leave Global Trade Finder.",
  how_title:"How does it help your company?",
  how1_t:"Sell abroad", how1_d:"Find buyers of your product in other countries and send them an offer.", how1_b:"Find buyers",
  how2_t:"Buy abroad", how2_d:"Find suppliers of what you need and ask them for a quote.", how2_b:"Find suppliers",
  how3_t:"Study markets", how3_d:"Before exporting, see which countries buy your product and how many companies there are.", how3_b:"Explore markets",
  how_steps:"1. Search by product or HS code · 2. Review the company profile · 3. Send your offer or request · 4. Get alerts on new opportunities"
});

/* ---------- Precios mensuales (COP), aprobados oct 2026 ---------- */
const PRICES = { buyer:149000, supplier:149000, both:249000 };
const money = (n) => (LANG==="en" ? "COP $" : "$") + Number(n).toLocaleString(LANG==="en"?"en-US":"es-CO");
/* usuarios ilimitados: el valor mensual es solo el del plan, sin cobro por usuario */
const monthlyTotal = () => ({ total: PRICES[PLAN]||0 });

/* ---------- Niveles y permisos ---------- */
const LEVELS = ["admin","director","asesor","analista","consulta"];
const PERM = {
  admin:    { contacts:1, send:1, approve:1, export:1, alerts:1, save:1, profile:1, users:1, billing:1 },
  director: { contacts:1, send:1, approve:1, export:1, alerts:1, save:1 },
  asesor:   { contacts:1, send:1, alerts:1, save:1 },
  analista: { export:1, alerts:1, save:1 },
  consulta: {}
};
let ULEVEL = store.get("ulevel", "admin");
if(!LEVELS.includes(ULEVEL)) ULEVEL = "admin";
/* ¿el usuario actual puede hacer esto? (las empresas sin perfil aún: solo crear el perfil) */
function can(p){
  if(!PAID()) return false;
  if(!ACC) return p==="profile";
  return !!PERM[ULEVEL][p];
}
/* aviso cuando el plan es gratuito o el nivel no lo permite; devuelve true si bloquea */
function gateP(perm, what){
  if(gate(what)) return true;
  if(can(perm)) return false;
  if(PAID() && !ACC){ const L = ({es:["Primero cree el perfil de su empresa","Para usar esta función, su empresa necesita su perfil en el directorio (nombre, productos y mercados). Toma un par de minutos.","Crear el perfil"],en:["First create your company profile","To use this feature your company needs its directory profile (name, products and markets). It takes a couple of minutes.","Create the profile"],pt:["Primeiro crie o perfil da sua empresa","Para usar esta função, sua empresa precisa do perfil no diretório (nome, produtos e mercados). Leva poucos minutos.","Criar o perfil"]})[LANG] || []; modal(`<h2>${L[0]}</h2><p>${L[1]}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("close")}</button><a class="btn btn-main" href="#registro" data-close>${L[2]}</a></div>`); return true; }
  modal(`<h2>${t("perm_title")}</h2><p>${t("perm_msg",{lvl:t("lvl_"+ULEVEL), what:t(what)})}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`);
  return true;
}
function setLevel(l){ if(!LEVELS.includes(l)) return; ULEVEL = l; store.set("ulevel", l); toast(t("lvl_title")+": "+t("lvl_"+l)); render(); }

/* ---------- Equipo de la empresa (demostración) ---------- */
function teamList(){
  let list = store.get("users", []);
  if(!list.length && ACC){
    list = [
      { email: ACC.email || DEMO_EMAIL, level:"admin", me:true },
      { email:"direccion.comercial@empresa-demo.example", level:"director" },
      { email:"asesor1@empresa-demo.example", level:"asesor" },
      { email:"mercados@empresa-demo.example", level:"analista" },
      { email:"contabilidad@empresa-demo.example", level:"consulta" }
    ];
    store.set("users", list);
  }
  return list;
}
function teamPanel(){
  if(!can("users")) return "";
  const list = teamList();
  const opt = (sel) => LEVELS.map(l=>`<option value="${l}" ${sel===l?"selected":""}>${t("lvl_"+l)}</option>`).join("");
  return `<div class="panel"><h2>${t("team")}</h2>
    <p class="muted" style="margin:0 0 8px;font-size:.9rem">${t("users_count",{a:list.length})}</p>
    <div class="tablewrap" style="border:0"><table class="t"><thead><tr><th>${t("team_email")}</th><th>${t("team_level")}</th><th></th></tr></thead><tbody>
    ${list.map((u,i)=>`<tr><td style="overflow-wrap:anywhere">${esc(u.email)}${u.me?` <span class="mine">${t("team_you")}</span>`:""}</td>
      <td>${(u.me||u.titular) ? esc(t("lvl_"+(u.level||"admin"))) : `<select data-ulvl="${i}" aria-label="${esc(t("team_level"))}">${opt(u.level)}</select>`}</td>
      <td class="r">${(u.me||u.titular)?"":`<button class="linkbtn" data-urem="${i}">${t("team_remove")}</button>`}</td></tr>`).join("")}
    </tbody></table></div>
    <form id="uform" class="fields" style="margin-top:12px" novalidate>
      <div class="field"><label for="u-email">${t("team_email")}</label><input id="u-email" type="email" placeholder="nombre@empresa.com"><div class="err" id="e-uemail"></div></div>
      <div class="field"><label for="u-level">${t("team_level")}</label><select id="u-level">${opt("asesor")}</select></div>
      <div class="full"><button class="btn btn-ghost btn-sm" type="submit">${t("team_add")}</button></div>
    </form>
    <p class="muted" style="font-size:.85rem;margin:10px 0 0">${t("team_note")}</p></div>`;
}
function bindTeam(){
  const f = $("#uform"); if(!f) return;
  f.onsubmit = (e) => { e.preventDefault();
    const email = $("#u-email").value.trim().toLowerCase(), list = teamList();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ $("#e-uemail").textContent = t("err_email"); return; }
    if(list.some(u=>u.email===email)){ $("#e-uemail").textContent = t("team_dup"); return; }
    list.push({ email, level: LEVELS.includes($("#u-level").value) ? $("#u-level").value : "consulta" });
    store.set("users", list.slice(0,1000)); toast(t("team_added")); render(); };
  $$("[data-ulvl]").forEach(s => s.onchange = () => { const list = teamList(); const u = list[+s.dataset.ulvl]; if(u && !u.me && LEVELS.includes(s.value)){ u.level = s.value; store.set("users", list); } });
  $$("[data-urem]").forEach(b => b.onclick = () => { const list = teamList(); const u = list[+b.dataset.urem]; if(u && !u.me && !u.titular && confirm(({es:"¿Retirar a ",en:"Remove ",pt:"Remover "})[LANG]+u.email+"?")){ list.splice(+b.dataset.urem,1); store.set("users", list); toast(t("team_removed")); render(); } });
}

/* ---------- Plan y pagos (solo el administrador ve el detalle) ---------- */
function billingPanel(){
  if(!PAID()) return "";
  const planName = t(PLAN);
  if(!can("billing")) return `<div class="panel"><h2>${t("my_plan")}</h2><p style="margin:0 0 6px"><b>${planName}</b></p><p class="muted" style="margin:0">${t("bill_other")}</p></div>`;
  const end = new Date(); end.setMonth(end.getMonth()+1, 0);
  const demo = isDemo();
  return `<div class="panel"><h2>${t("billing")}</h2>
    <dl class="kv"><dt>${t("my_plan")}</dt><dd>${planName}</dd>
      <dt>${t("monthly_value")}</dt><dd class="num">${money(monthlyTotal().total)}</dd>
      <dt>${t("paid_until")}</dt><dd class="num">${end.toLocaleDateString(LANG==="en"?"en-US":"es-CO",{day:"numeric",month:"long",year:"numeric"})}</dd>
      <dt>${t("bill_status")}</dt><dd><span class="role both">${demo?t("st_demo"):t("st_active")}</span></dd></dl>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px"><button class="btn btn-main btn-sm" id="b-bold">${t("pay_bold")}</button><a class="btn btn-ghost btn-sm" href="#planes">${t("see_plans")}</a></div></div>`;
}
function bindBilling(){
  const b = $("#b-bold"); if(b) b.onclick = () => modal(`<h2>${t("bold_demo_title")}</h2><p><b>${t("monthly_value")}: ${money(monthlyTotal().total)}</b></p><p>${t("bold_demo_msg")}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`);
}

/* ---------- Aprobación de solicitudes ---------- */
function approvalPanel(){
  if(!can("approve")) return "";
  const pend = store.get("requests", []).filter(r => r.status==="pending");
  const pOpps = (typeof myOpps==="function" ? myOpps() : []).filter(o => o.status==="pending");
  const pQts = (typeof myQuotes==="function" ? myQuotes() : []).filter(q => q.status==="pending");
  const W = ({es:{req:"Requerimiento de compra",qt:"Cotización",price:"precio"},en:{req:"Purchase request",qt:"Quote",price:"price"},pt:{req:"Requerimento de compra",qt:"Cotação",price:"preço"}})[LANG] || {req:"Requerimiento de compra",qt:"Cotización",price:"precio"};
  const extra = [...pOpps.map(o=>`<tr><td><b>${W.req}</b><div class="muted" style="font-size:.8rem">${esc(o.qty||"")} ${esc(o.unit||"")} · ${esc(o.inc||"")} · ${t("by")}: ${esc(t("lvl_"+(o.by||"asesor")))}</div></td><td class="codecell">${fmtCode(o.code||"")}</td><td class="r" style="white-space:nowrap"><button class="btn btn-main btn-sm" data-appo="${esc(o.id)}">${t("approve")}</button> <button class="linkbtn" data-rejo="${esc(o.id)}">${t("reject")}</button></td></tr>`),
    ...pQts.map(q=>`<tr><td><b>${W.qt}</b><div class="muted" style="font-size:.8rem">US$ ${esc(Number(q.price).toLocaleString(LANG==="en"?"en-US":"es-CO",{maximumFractionDigits:2}))} · ${esc(String(q.lead))} ${({es:"días",en:"days",pt:"dias"})[LANG]||"días"} · ${t("by")}: ${esc(t("lvl_"+(q.by||"asesor")))}</div></td><td class="codecell">${fmtCode(q.code||"")}</td><td class="r" style="white-space:nowrap"><button class="btn btn-main btn-sm" data-apq="${esc(q.id)}">${t("approve")}</button> <button class="linkbtn" data-rejq="${esc(q.id)}">${t("reject")}</button></td></tr>`)].join("");
  if(!pend.length && extra) return `<div class="panel"><h2>${t("to_approve")} · ${pOpps.length+pQts.length}</h2><div class="tablewrap" style="border:0"><table class="t"><tbody>${extra}</tbody></table></div></div>`;
  return `<div class="panel"><h2>${t("to_approve")} · ${pend.length+pOpps.length+pQts.length}</h2>${extra?`<div class="tablewrap" style="border:0"><table class="t"><tbody>${extra}</tbody></table></div>`:""}
    ${pend.length ? `<div class="tablewrap" style="border:0"><table class="t"><tbody>${pend.slice(0,50).map(r=>`<tr>
      <td><a href="#empresa-${esc(r.coId)}">${esc(r.coName)}</a><div class="muted" style="font-size:.8rem">${t(r.kind==="offer"?"offer_title":r.kind==="contact"?"request_contact":"rfq_title")} · ${t("by")}: ${esc(t("lvl_"+(r.by||"asesor")))}</div></td>
      <td class="codecell">${r.code?fmtCode(r.code):"—"}</td>
      <td class="r" style="white-space:nowrap"><button class="btn btn-main btn-sm" data-appr="${esc(r.id)}">${t("approve")}</button> <button class="linkbtn" data-rej="${esc(r.id)}">${t("reject")}</button></td></tr>`).join("")}</tbody></table></div>`
      : `<p class="muted">${t("none_pending")}</p>`}</div>`;
}
function bindApproval(){
  const act = (id, st) => {
    if(!can("approve")) return;
    const list = store.get("requests", []); const r = list.find(x => String(x.id)===String(id));
    if(!r || r.status!=="pending") { render(); return; }      // solo si sigue pendiente (evita doble clic)
    r.status = st; r.decidedAt = new Date().toISOString(); store.set("requests", list);
    toast(st==="sent" ? t("approved_ok") : t("rejected_ok")); render();
  };
  $$("[data-appr]").forEach(b => b.onclick = () => act(b.dataset.appr, "sent"));
  $$("[data-rej]").forEach(b => b.onclick = () => act(b.dataset.rej, "rejected"));
  const actO = (id, st) => { if(!can("approve")) return; const l = myOpps(); const o = l.find(x => String(x.id)===String(id)); if(!o || o.status!=="pending"){ render(); return; } o.status = st; store.set("myopps", l); toast(st==="open" ? t("op_posted") : t("rejected_ok")); render(); };
  const actQ = (id, st) => { if(!can("approve")) return; const l = myQuotes(); const q = l.find(x => String(x.id)===String(id)); if(!q || q.status!=="pending"){ render(); return; } q.status = st; store.set("quotes", l); toast(st==="sent" ? t("approved_ok") : t("rejected_ok")); render(); };
  $$("[data-appo]").forEach(b => b.onclick = () => actO(b.dataset.appo, "open"));
  $$("[data-rejo]").forEach(b => b.onclick = () => actO(b.dataset.rejo, "closed"));
  $$("[data-apq]").forEach(b => b.onclick = () => actQ(b.dataset.apq, "sent"));
  $$("[data-rejq]").forEach(b => b.onclick = () => actQ(b.dataset.rejq, "rejected"));
}
const statusPill = (s) => { s = s || "sent"; const cls = s==="pending" ? "buyer" : s==="rejected" ? "supplier" : "both"; return `<span class="role ${cls}">${t("status_"+s)}</span>`; };

/* ---------- Guía de uso en la portada ---------- */
function howBlock(){
  return `<section style="padding-top:8px"><div class="sec-head"><h2>${t("how_title")}</h2></div>
    <div class="grid">
      <div class="tile"><h3>${t("how1_t")}</h3><p style="margin:0" class="muted">${t("how1_d")}</p><button class="btn btn-amb btn-sm" style="align-self:flex-start;margin-top:6px" data-how="buyers">${t("how1_b")}</button></div>
      <div class="tile"><h3>${t("how2_t")}</h3><p style="margin:0" class="muted">${t("how2_d")}</p><button class="btn btn-amb btn-sm" style="align-self:flex-start;margin-top:6px" data-how="suppliers">${t("how2_b")}</button></div>
      <div class="tile"><h3>${t("how3_t")}</h3><p style="margin:0" class="muted">${t("how3_d")}</p><a class="btn btn-amb btn-sm" style="align-self:flex-start;margin-top:6px" href="#mercados">${t("how3_b")}</a></div>
    </div>
    <p class="muted" style="margin:12px 0 0;font-size:.92rem">${t("how_steps")}</p></section>`;
}
function bindHow(){ $$("[data-how]").forEach(b => b.onclick = () => { Object.assign(S,{mode:b.dataset.how,q:"",hs:"",cc:"",sub:"",cont:"",sector:"",verified:false}); shown=PAGE; go("buscar"); }); }

/* ---------- Botón "atrás": nunca saca de la app sin aviso ---------- */
function installBackGuard(){
  try {
    history.replaceState({ gtf:"root" }, "", location.href);
    history.pushState({ gtf:"app" }, "", location.href);
    let warned = 0;
    window.addEventListener("popstate", (e) => {
      if($(".modal-bg")) closeModal();
      if(e.state && e.state.gtf==="root"){
        if(Date.now() - warned < 3000){ history.back(); return; }   // segundo "atrás": sale
        warned = Date.now(); toast(t("back_exit"));
        history.pushState({ gtf:"app" }, "", location.href);
      }
    });
  } catch(e){ /* navegador sin historial manipulable: se usa el comportamiento normal */ }
}

/* =====================================================================
   Global Trade Finder · Empresas reales de Colombia (directorio público DIAN)
   - Solo personas jurídicas; no se publican datos de personas naturales ni datos de contacto
   - Cada empresa puede reclamar su perfil o pedir que se retire
   ===================================================================== */
const TXT8 = {
  es:{ real_b:"Empresa real · DIAN", real_unreg:"Aún no registrada en la plataforma",
    real_legal:"Información pública publicada por la DIAN en su Directorio de importadores y exportadores {y} (Ley 1712 de 2014, de transparencia y del derecho de acceso a la información pública). No se publican datos sensibles ni datos de personas naturales (Ley 1581 de 2012 y Decreto 1377 de 2013): los datos de contacto de una empresa solo se muestran cuando ella misma se registra y lo autoriza. La empresa puede reclamar este perfil o pedir que se retire escribiendo a {mail}.",
    real_strip:"Las empresas de Colombia marcadas \"DIAN\" son reales: provienen del directorio público de importadores y exportadores de la DIAN (Ley 1712 de 2014). No se publican datos sensibles ni de contacto sin autorización de la empresa. Las demás empresas son ficticias de demostración.",
    real_nit:"NIT", real_fob:"Exportaciones {y} (FOB)", real_cif:"Importaciones {y} (CIF)", real_kgE:"Peso exportado", real_kgI:"Peso importado",
    real_exp:"Principales productos que exporta", real_imp:"Principales productos que importa", real_contact:"Datos de contacto",
    real_nocontact:"Esta empresa aún no se ha registrado en Global Trade Finder, por eso no se muestran teléfonos ni correos. Puede agregarla a sus prospectos y consultar su registro mercantil en el RUES.",
    real_claim:"¿Es su empresa? Reclame el perfil", real_remove:"Pedir que se retire este perfil", real_rues:"Consultar en el RUES (Cámaras de Comercio)",
    real_claim_t:"Reclamar el perfil de su empresa", real_claim_1:"Elija un plan y cree su cuenta.", real_claim_2:"Registre la empresa con el mismo NIT ({nit}); se precargan los datos de la DIAN.", real_claim_3:"Suba el RUT y el certificado de Cámara de Comercio en Mi cuenta. Cuando SkyNet Genesis los verifique, este perfil público queda a su nombre y usted decide qué datos de contacto publicar.",
    real_use:"Usar estos datos para crear mi perfil", real_noreg:"Esta empresa aún no está registrada: no puede recibir solicitudes ni mensajes dentro de la plataforma.",
    real_count:"{n} empresas reales de Colombia (DIAN {y})", real_kind_e:"Exportadora", real_kind_i:"Importadora", real_kind_b:"Exportadora e importadora",
    real_mail_subj:"Global Trade Finder - perfil de la empresa NIT {nit}", real_src:"Fuente: DIAN, Directorio de importadores y exportadores {y} (acumulado a diciembre)." },
  en:{ real_b:"Real company · DIAN", real_unreg:"Not yet registered on the platform",
    real_legal:"Public information published by Colombia's tax and customs authority (DIAN) in its {y} Directory of importers and exporters (Law 1712 of 2014 on transparency and access to public information). No sensitive data or data of natural persons is published (Law 1581 of 2012 and Decree 1377 of 2013): a company's contact details are shown only when the company registers and authorizes it. The company may claim this profile or ask for its removal by writing to {mail}.",
    real_strip:"Colombian companies marked \"DIAN\" are real: they come from DIAN's public directory of importers and exporters (Law 1712 of 2014). No sensitive or contact data is published without the company's authorization. All other companies are fictitious demo companies.",
    real_nit:"Tax ID (NIT)", real_fob:"Exports {y} (FOB)", real_cif:"Imports {y} (CIF)", real_kgE:"Exported weight", real_kgI:"Imported weight",
    real_exp:"Main products exported", real_imp:"Main products imported", real_contact:"Contact details",
    real_nocontact:"This company has not registered on Global Trade Finder yet, so no phones or emails are shown. You can add it to your prospects and check its business registration in RUES.",
    real_claim:"Is this your company? Claim the profile", real_remove:"Request removal of this profile", real_rues:"Check in RUES (Chambers of Commerce)",
    real_claim_t:"Claim your company's profile", real_claim_1:"Choose a plan and create your account.", real_claim_2:"Register the company with the same NIT ({nit}); DIAN data is preloaded.", real_claim_3:"Upload the tax ID document and Chamber of Commerce certificate in My account. Once SkyNet Genesis verifies them, this public profile becomes yours and you decide which contact details to publish.",
    real_use:"Use this data to create my profile", real_noreg:"This company is not registered yet: it cannot receive requests or messages on the platform.",
    real_count:"{n} real Colombian companies (DIAN {y})", real_kind_e:"Exporter", real_kind_i:"Importer", real_kind_b:"Exporter and importer",
    real_mail_subj:"Global Trade Finder - company profile NIT {nit}", real_src:"Source: DIAN, Directory of importers and exporters {y} (accumulated to December)." },
  pt:{ real_b:"Empresa real · DIAN", real_unreg:"Ainda não cadastrada na plataforma",
    real_legal:"Informação pública publicada pela DIAN (autoridade tributária e aduaneira da Colômbia) em seu Diretório de importadores e exportadores {y} (Lei 1712 de 2014, de transparência e acesso à informação pública). Não são publicados dados sensíveis nem dados de pessoas físicas (Lei 1581 de 2012 e Decreto 1377 de 2013): os dados de contato de uma empresa só aparecem quando ela mesma se cadastra e autoriza. A empresa pode reivindicar este perfil ou pedir sua remoção escrevendo para {mail}.",
    real_strip:"As empresas da Colômbia marcadas \"DIAN\" são reais: vêm do diretório público de importadores e exportadores da DIAN (Lei 1712 de 2014). Não são publicados dados sensíveis nem de contato sem autorização da empresa. As demais empresas são fictícias de demonstração.",
    real_nit:"NIT", real_fob:"Exportações {y} (FOB)", real_cif:"Importações {y} (CIF)", real_kgE:"Peso exportado", real_kgI:"Peso importado",
    real_exp:"Principais produtos que exporta", real_imp:"Principais produtos que importa", real_contact:"Dados de contato",
    real_nocontact:"Esta empresa ainda não se cadastrou no Global Trade Finder, por isso não aparecem telefones nem e-mails. Você pode adicioná-la aos seus prospects e consultar seu registro mercantil no RUES.",
    real_claim:"É a sua empresa? Reivindique o perfil", real_remove:"Pedir a remoção deste perfil", real_rues:"Consultar no RUES (Câmaras de Comércio)",
    real_claim_t:"Reivindicar o perfil da sua empresa", real_claim_1:"Escolha um plano e crie sua conta.", real_claim_2:"Cadastre a empresa com o mesmo NIT ({nit}); os dados da DIAN são pré-carregados.", real_claim_3:"Envie o documento fiscal e a certidão da Câmara de Comércio em Minha conta. Quando a SkyNet Genesis verificar, este perfil público passa a ser seu e você decide quais dados de contato publicar.",
    real_use:"Usar estes dados para criar meu perfil", real_noreg:"Esta empresa ainda não está cadastrada: não pode receber solicitações nem mensagens na plataforma.",
    real_count:"{n} empresas reais da Colômbia (DIAN {y})", real_kind_e:"Exportadora", real_kind_i:"Importadora", real_kind_b:"Exportadora e importadora",
    real_mail_subj:"Global Trade Finder - perfil da empresa NIT {nit}", real_src:"Fonte: DIAN, Diretório de importadores e exportadores {y} (acumulado até dezembro)." }
};
Object.assign(TXT8.es, { demo_strip:"<b>Versión de demostración.</b> Las empresas de Colombia marcadas \"DIAN\" son reales (directorio público de la DIAN, sin datos de contacto); las de otros países son ficticias. Lo que usted registre se guarda solo en este navegador.",
  demo_note:"Empresas de Colombia: datos públicos de la DIAN, solo personas jurídicas (Ley 1712 de 2014), sin datos sensibles ni de contacto. Empresas de otros países: ficticias de demostración." });
Object.assign(TXT8.en, { demo_strip:"<b>Demo version.</b> Colombian companies marked \"DIAN\" are real (DIAN public directory, no contact data); companies from other countries are fictitious. Anything you register is saved only in this browser.",
  demo_note:"Colombian companies: DIAN public data, legal entities only (Law 1712 of 2014), with no sensitive or contact data. Companies from other countries: fictitious demo data." });
Object.assign(TXT8.pt, { demo_strip:"<b>Versão de demonstração.</b> As empresas da Colômbia marcadas \"DIAN\" são reais (diretório público da DIAN, sem dados de contato); as de outros países são fictícias. O que você cadastrar fica salvo apenas neste navegador.",
  demo_note:"Empresas da Colômbia: dados públicos da DIAN, somente pessoas jurídicas (Lei 1712 de 2014), sem dados sensíveis nem de contato. Empresas de outros países: fictícias de demonstração." });

/* textos del directorio DIAN con las precauciones legales (reemplazan los anteriores) */
Object.assign(TXT8.es, {"real_b": "Empresa real · DIAN", "real_legal": "Datos tomados del Directorio de importadores y exportadores que publica la DIAN ({y}, acumulado a diciembre, y {y2}, acumulado del año), información pública según la Ley 1712 de 2014. La DIAN rotula este directorio como «Información pública clasificada» y no publica el NIT ni el nombre de las personas naturales: Global Trade Finder no muestra esos registros y solo incluye personas jurídicas. Se muestran únicamente los datos que la DIAN publica (NIT, razón social, valor FOB o CIF, peso neto, número de registros o declaraciones y principales subpartidas); no se agregan direcciones, teléfonos, correos, ciudades ni otros datos. Los datos de contacto solo aparecen si la empresa se registra y lo autoriza (Ley 1581 de 2012 y Decreto 1377 de 2013). La empresa puede reclamar este perfil o pedir que se retire escribiendo a {mail}.", "real_strip": "Las empresas de Colombia marcadas \"DIAN\" son reales: vienen del directorio público de importadores y exportadores de la DIAN (Ley 1712 de 2014), solo personas jurídicas y sin datos de contacto. Las demás empresas son ficticias de demostración.", "real_src": "Fuente: DIAN, Directorio de importadores y exportadores {y} (acumulado a diciembre) y {y2} (acumulado a {h2}).", "real_count": "{n} empresas reales de Colombia (directorio público de la DIAN)", "real_exp": "Principales subpartidas exportadas", "real_imp": "Principales subpartidas importadas", "real_exps": "Exportaciones", "real_imps": "Importaciones", "real_period": "Periodo", "real_fobh": "Valor FOB", "real_cifh": "Valor CIF", "real_kg": "Peso neto", "real_regs": "Número de registros", "real_decl": "Número de declaraciones", "real_name": "Razón social", "real_per": "{y} (enero a {h})", "real_sp_note": "Subpartidas arancelarias de 10 dígitos tal como las publica la DIAN, en el orden que ella les da. La descripción corresponde a la partida del Sistema Armonizado.", "mes_enero": "enero", "mes_febrero": "febrero", "mes_marzo": "marzo", "mes_abril": "abril", "mes_mayo": "mayo", "mes_junio": "junio", "mes_julio": "julio", "mes_agosto": "agosto", "mes_septiembre": "septiembre", "mes_octubre": "octubre", "mes_noviembre": "noviembre", "mes_diciembre": "diciembre", "mes_setiembre": "septiembre"});
Object.assign(TXT8.en, {"real_b": "Real company · DIAN", "real_legal": "Data taken from the Directory of importers and exporters published by DIAN, Colombia's tax and customs authority ({y}, full year, and {y2}, year to date), public information under Law 1712 of 2014. DIAN labels this directory \"classified public information\" and does not publish the tax ID or name of natural persons: Global Trade Finder does not show those records and only includes legal entities. Only the data DIAN publishes is shown (tax ID, company name, FOB or CIF value, net weight, number of records or declarations and main tariff subheadings); no addresses, phones, emails, cities or other data are added. Contact details appear only if the company registers and authorizes it (Law 1581 of 2012 and Decree 1377 of 2013). The company may claim this profile or ask for its removal by writing to {mail}.", "real_strip": "Colombian companies marked \"DIAN\" are real: they come from DIAN's public directory of importers and exporters (Law 1712 of 2014), legal entities only and with no contact data. All other companies are fictitious demo data.", "real_src": "Source: DIAN, Directory of importers and exporters {y} (full year) and {y2} (January to {h2}).", "real_count": "{n} real Colombian companies (DIAN public directory)", "real_exp": "Main subheadings exported", "real_imp": "Main subheadings imported", "real_exps": "Exports", "real_imps": "Imports", "real_period": "Period", "real_fobh": "FOB value", "real_cifh": "CIF value", "real_kg": "Net weight", "real_regs": "Number of records", "real_decl": "Number of declarations", "real_name": "Company name", "real_per": "{y} (January to {h})", "real_sp_note": "10-digit tariff subheadings exactly as published by DIAN, in DIAN's order. The description is that of the Harmonized System heading.", "mes_enero": "January", "mes_febrero": "February", "mes_marzo": "March", "mes_abril": "April", "mes_mayo": "May", "mes_junio": "June", "mes_julio": "July", "mes_agosto": "August", "mes_septiembre": "September", "mes_octubre": "October", "mes_noviembre": "November", "mes_diciembre": "December", "mes_setiembre": "September"});
Object.assign(TXT8.pt, {"real_b": "Empresa real · DIAN", "real_legal": "Dados extraídos do Diretório de importadores e exportadores publicado pela DIAN ({y}, ano completo, e {y2}, acumulado do ano), informação pública segundo a Lei 1712 de 2014. A DIAN classifica este diretório como «Informação pública classificada» e não publica o NIT nem o nome das pessoas físicas: o Global Trade Finder não mostra esses registros e inclui apenas pessoas jurídicas. São mostrados somente os dados que a DIAN publica (NIT, razão social, valor FOB ou CIF, peso líquido, número de registros ou declarações e principais subposições); não são acrescentados endereços, telefones, e-mails, cidades nem outros dados. Os dados de contato só aparecem se a empresa se cadastrar e autorizar (Lei 1581 de 2012 e Decreto 1377 de 2013). A empresa pode reivindicar este perfil ou pedir sua remoção escrevendo para {mail}.", "real_strip": "As empresas da Colômbia marcadas \"DIAN\" são reais: vêm do diretório público de importadores e exportadores da DIAN (Lei 1712 de 2014), somente pessoas jurídicas e sem dados de contato. As demais empresas são fictícias de demonstração.", "real_src": "Fonte: DIAN, Diretório de importadores e exportadores {y} (ano completo) e {y2} (janeiro a {h2}).", "real_count": "{n} empresas reais da Colômbia (diretório público da DIAN)", "real_exp": "Principais subposições exportadas", "real_imp": "Principais subposições importadas", "real_exps": "Exportações", "real_imps": "Importações", "real_period": "Período", "real_fobh": "Valor FOB", "real_cifh": "Valor CIF", "real_kg": "Peso líquido", "real_regs": "Número de registros", "real_decl": "Número de declarações", "real_name": "Razão social", "real_per": "{y} (janeiro a {h})", "real_sp_note": "Subposições tarifárias de 10 dígitos exatamente como a DIAN as publica, na ordem dela. A descrição é a da posição do Sistema Harmonizado.", "mes_enero": "janeiro", "mes_febrero": "fevereiro", "mes_marzo": "março", "mes_abril": "abril", "mes_mayo": "maio", "mes_junio": "junho", "mes_julio": "julho", "mes_agosto": "agosto", "mes_septiembre": "setembro", "mes_octubre": "outubro", "mes_noviembre": "novembro", "mes_diciembre": "dezembro", "mes_setiembre": "setembro"});
TXT8.es.demo_strip = "<b>Versión de demostración.</b> " + TXT8.es.real_strip;
TXT8.en.demo_strip = "<b>Demo version.</b> " + TXT8.en.real_strip;
TXT8.pt.demo_strip = "<b>Versão de demonstração.</b> " + TXT8.pt.real_strip;
["es","en","pt"].forEach(l => Object.assign(T[l] = T[l] || {}, TXT8[l]));

/* las empresas ficticias de Colombia se retiran: Colombia se muestra con empresas reales */
for(let i = DEMO.length-1; i >= 0; i--) if(DEMO[i].cc==="CO") DEMO.splice(i, 1);

/* Solo datos que publica la DIAN: NIT, razón social, valor FOB/CIF, peso neto, número de registros o declaraciones y las 5 principales subpartidas */
const dianBlk = (x) => Array.isArray(x) ? x : x ? [x, null, null, []] : null;
const sp4 = (lst) => [...new Set((lst||[]).map(i => String(DIAN_SP[i]||"").slice(0,4)).filter(c => CODE[c]))];
const REAL = DIAN.map(([nit, name, e1, i1, e2, i2]) => {
  const E1 = dianBlk(e1), I1 = dianBlk(i1), E2 = dianBlk(e2), I2 = dianBlk(i2);
  const exp = !!(E1 || E2), imp = !!(I1 || I2);
  const role = exp && imp ? "both" : exp ? "supplier" : "buyer";
  const scodes = sp4((E1 && E1[3].length ? E1 : E2 || [])[3]), bcodes = sp4((I1 && I1[3].length ? I1 : I2 || [])[3]);
  const codes = [...new Set([...scodes, ...bcodes])];
  const fob = E1 ? E1[0] : E2 ? E2[0] : 0, cif = I1 ? I1[0] : I2 ? I2[0] : 0;
  const total = fob + cif;
  return { id:"co"+nit, real:true, demo:false, nit:String(nit), name, cc:"CO", city:null, role, E1, I1, E2, I2,
    scodes, bcodes, codes, sector: CODE[codes[0]] ? CODE[codes[0]].sector : "cons", fob, cif,
    vol: total>=1e8?5:total>=1e7?4:total>=1e6?3:total>=2e5?2:1, verified:false, active:0, certs:[], inc:[], markets:[] };
}).filter(c => c.codes.length);
const REAL_BY_ID = Object.fromEntries(REAL.map(c => [c.id, c]));
const ALLC = [...REAL, ...DEMO];

const realBadge = () => `<span class="realb">${t("real_b")}</span>`;
const fmtSP = (c) => c.slice(0,4)+"."+c.slice(4,6)+"."+c.slice(6,8)+"."+c.slice(8,10);
function spTable(lst){
  const rows = (lst||[]).map(i => String(DIAN_SP[i]||"")).filter(Boolean);
  if(!rows.length) return `<p class="muted" style="margin:0">—</p>`;
  return `<div class="tablewrap" style="border:0"><table class="t"><tbody>${rows.map(c => { const d = CODE[c.slice(0,6)] || CODE[c.slice(0,4)];
    return `<tr><td class="mono" style="white-space:nowrap">${fmtSP(c)}</td><td>${d?`<a href="#hs-${d.code}">${esc(L(d))}</a>`:"—"}</td></tr>`; }).join("")}</tbody></table></div>
    <p class="muted" style="font-size:.78rem;margin:6px 0 0">${t("real_sp_note")}</p>`;
}
function vRealCompany(co){
  const M = DIAN_META, n = (v) => Number(v).toLocaleString(LANG==="en"?"en-US":LANG==="pt"?"pt-BR":"es-CO");
  const kind = t("real_kind_"+(co.role==="both"?"b":co.role==="supplier"?"e":"i"));
  const ct = CONT[COUNTRY.CO.cont];
  const inCrm = typeof prospects==="function" && prospects().some(p => p.coId===co.id);
  const per = (y) => y===M.year ? t("real_per",{y, h:t("mes_"+M.hasta)}) : t("real_per",{y, h:t("mes_"+M.hasta2)});
  const fila = (blk, y, imp) => !blk ? "" : `<tr><td><b>${per(y)}</b></td><td class="r num">US$ ${n(blk[0])}${typeof copOf==="function"?`<div class="muted" style="font-size:.78rem">≈ ${copOf(blk[0])}</div>`:""}</td><td class="r num">${blk[1]!==null?n(blk[1])+" kg":"—"}</td><td class="r num">${blk[2]!==null?n(blk[2]):"—"}</td></tr>`;
  const tabla = (B1, B2, imp) => `<div class="tablewrap" style="border:0"><table class="t"><thead><tr><th>${t("real_period")}</th><th class="r">${imp?t("real_cifh"):t("real_fobh")}</th><th class="r">${t("real_kg")}</th><th class="r">${imp?t("real_decl"):t("real_regs")}</th></tr></thead><tbody>${fila(B1, M.year, imp)}${fila(B2, M.year2, imp)}</tbody></table></div>`;
  const spE = (co.E1 && co.E1[3].length ? co.E1 : co.E2 || [])[3], spI = (co.I1 && co.I1[3].length ? co.I1 : co.I2 || [])[3];
  const yE = co.E1 && co.E1[3].length ? M.year : M.year2, yI = co.I1 && co.I1[3].length ? M.year : M.year2;
  return `<div class="wrap page">${crumbs([{label:t("nav_companies"),href:"#empresas"},{lv:t("lv_cont"),label:L(ct),href:"#region-"+ct.id},{lv:t("lv_country"),label:cname("CO"),href:"#pais-CO"},{label:co.name}])}
  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:6px">${roleTag(co.role)}${realBadge()}<span class="chip" style="cursor:default">${t("real_unreg")}</span></div>
  <h1>${esc(co.name)}</h1>
  <p class="lead" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">${ccTag("CO")} ${esc(cname("CO"))} · ${esc(kind)}</p>
  <div class="legalnote">${t("real_legal",{y:M.year, y2:M.year2, mail:SG.mail})}</div>
  <div class="two" style="margin-top:16px">
    <div class="stack">
      <div class="panel"><dl class="kv"><dt>${t("real_nit")}</dt><dd class="mono">${esc(co.nit)}</dd><dt>${t("real_name")}</dt><dd>${esc(co.name)}</dd></dl>
        ${co.E1||co.E2?`<h3 style="font-size:1.05rem;margin:14px 0 4px">${t("real_exps")}</h3>${tabla(co.E1, co.E2, false)}`:""}
        ${co.I1||co.I2?`<h3 style="font-size:1.05rem;margin:14px 0 4px">${t("real_imps")}</h3>${tabla(co.I1, co.I2, true)}`:""}
        <p class="muted" style="font-size:.8rem;margin:8px 0 0">${t("real_src",{y:M.year, y2:M.year2, h2:t("mes_"+M.hasta2)})} <a href="${M.fuente}" target="_blank" rel="noopener">dian.gov.co</a></p></div>
      ${spE && spE.length?`<div class="panel"><h2>${t("real_exp")} · ${yE}</h2>${spTable(spE)}</div>`:""}
      ${spI && spI.length?`<div class="panel"><h2>${t("real_imp")} · ${yI}</h2>${spTable(spI)}</div>`:""}
    </div>
    <div class="stack">
      <div class="panel"><h2>${t("real_contact")}</h2><p style="margin:0">${t("real_nocontact")}</p>
        <p style="margin:10px 0 0"><a class="btn btn-ghost btn-sm" href="https://www.rues.org.co/" target="_blank" rel="noopener">${t("real_rues")}</a></p></div>
      <div class="panel" style="display:flex;flex-direction:column;gap:8px">
        ${PAID() && ACC && can("contacts") ? `<button class="btn btn-main" id="b-crm">${inCrm?t("crm_in"):t("crm_add")}</button>` : ""}
        <p class="muted" style="margin:0;font-size:.88rem">${t("real_noreg")}</p>
        <button class="btn btn-ghost" id="b-claim">${t("real_claim")}</button>
        <a class="btn btn-ghost" href="mailto:${SG.mail}?subject=${encodeURIComponent(t("real_mail_subj",{nit:co.nit}))}">${t("real_remove")}</a>
      </div>
    </div>
  </div></div>`;
}
function bindRealCompany(co){
  const cr = $("#b-crm"); if(cr) cr.onclick = () => { addProspect(co, "new"); render(); };
  const cl = $("#b-claim"); if(cl) cl.onclick = () => modal(`<h2>${t("real_claim_t")}</h2>
    <ol style="padding-left:20px;margin:0 0 12px"><li>${t("real_claim_1")}</li><li>${t("real_claim_2",{nit:esc(co.nit)})}</li><li>${t("real_claim_3")}</li></ol>
    <div class="acts"><button class="btn btn-ghost" data-close>${t("close")}</button>${PAID() && can("profile") ? `<button class="btn btn-main" id="m-use">${t("real_use")}</button>` : `<a class="btn btn-main" href="#planes" data-close>${t("see_plans")}</a>`}</div>`, (m) => {
      const u = $("#m-use", m); if(u) u.onclick = () => {
        REG = { ...regDraft(), name: co.name, taxid: co.nit, cc:"CO", role: co.role, codes: co.codes.slice(0, 10), claimOf: co.id };
        closeModal(); go("registro"); };
    });
}

(() => { const st = document.createElement("style"); st.textContent = `
  .realb{display:inline-block;background:#E8F1FA;color:#0B4F8A;border:1px solid #b9d2ea;border-radius:6px;padding:1px 7px;font-size:.72rem;font-weight:700;letter-spacing:.02em;text-transform:uppercase}
  .legalnote{background:#F4F8FB;border:1px solid var(--line);border-left:4px solid #0B4F8A;border-radius:8px;padding:10px 12px;font-size:.86rem;color:#1C2B39;margin-top:8px}
`; document.head.appendChild(st); })();

/* =====================================================================
   Global Trade Finder · módulos nuevos (oct 2026)
   1. Cifras reales de comercio (UN Comtrade 2024)
   2. Verificación real de empresas (RUT + Cámara de Comercio)
   3. Catálogo de productos del proveedor
   4. Mensajería entre empresas
   5. Tablero de requerimientos (el comprador publica, los proveedores cotizan)
   6. Sugerencias automáticas y avisos por correo (Brevo, versión con servidor)
   ===================================================================== */

Object.assign(T.es, {
  nav_opps:"Requerimientos",
  tr_title:"Comercio mundial real", tr_src:"Fuente: UN Comtrade (ONU), año {y}. Cifras oficiales reportadas por cada país, en dólares (US$). Algunos países aún no han reportado ese año.",
  tr_imp:"Importaciones mundiales", tr_exp:"Exportaciones mundiales", tr_ncty:"{n} países reportaron",
  tr_top_imp:"Países que más compran", tr_top_exp:"Países que más venden", tr_co:"Colombia", tr_co_imp:"Colombia importó", tr_co_exp:"Colombia exportó",
  tr_none:"No hay cifras de UN Comtrade para este producto.", tr_lock:"Con un plan pago ve los 15 principales países compradores y vendedores, y la posición de Colombia.",
  tr_cty_title:"Comercio real de {c}", tr_cty_imp:"Productos en los que {c} es de los mayores compradores del mundo", tr_cty_exp:"Productos en los que {c} es de los mayores vendedores del mundo", tr_cty_none:"{c} no aparece entre los 15 principales países de ningún producto en las cifras disponibles.",
  tr_rank:"Puesto {r} en el mundo", tr_here:"{c} en este producto",
  vf_title:"Verificación de la empresa", vf_none:"Su empresa aún no está verificada. Las empresas verificadas aparecen primero y generan más confianza.",
  vf_rut:"RUT (PDF o imagen)", vf_cc:"Certificado de Cámara de Comercio (no mayor a 30 días)", vf_send:"Enviar documentos a revisión",
  vf_review:"Documentos en revisión por SkyNet Genesis.", vf_ok:"Empresa verificada por SkyNet Genesis.", vf_rej:"Documentos rechazados: {why}. Puede enviarlos de nuevo.",
  vf_need:"Adjunte los dos documentos.", vf_sent:"Documentos enviados a revisión", vf_sim:"Simular aprobación de SkyNet Genesis (solo demostración)",
  vf_note:"En la versión con servidor, el equipo de SkyNet Genesis revisa los documentos y solo entonces la empresa recibe la marca \"Verificada\".",
  cat_title:"Catálogo de productos", cat_add:"Agregar producto", cat_name:"Nombre del producto", cat_code:"Código HS", cat_desc:"Descripción y especificaciones",
  cat_moq:"Pedido mínimo", cat_unit:"Unidad", cat_pmin:"Precio de referencia desde (US$)", cat_pmax:"hasta (US$)", cat_certs:"Certificaciones", cat_img:"Foto (opcional)",
  cat_save:"Guardar producto", cat_empty:"Aún no tiene productos en el catálogo.", cat_price_neg:"Precio a convenir", cat_moq_l:"Pedido mínimo", cat_del:"Eliminar", cat_edit:"Editar",
  cat_err_name:"Escriba el nombre del producto", cat_err_code:"Elija un código HS", cat_max:"Máximo 30 productos.", cat_fake:"Producto ficticio de demostración", cat_saved:"Producto guardado",
  msg_title:"Mensajes", msg_send:"Enviar mensaje", msg_new:"Escribir mensaje", msg_ph:"Escriba su mensaje…", msg_empty:"No tiene conversaciones todavía.",
  msg_auto:"Respuesta automática de demostración: esta empresa es ficticia. En la versión con servidor, aquí llega la respuesta de la empresa real.",
  msg_open:"Abrir", msg_with:"Conversación con {c}", msg_unread:"{n} sin leer",
  op_title:"Requerimientos de compra", op_lead:"Compradores que publican lo que necesitan. Los proveedores les envían su cotización.",
  op_post:"Publicar un requerimiento", op_quote:"Cotizar", op_qty:"Cantidad", op_dest:"Destino", op_deadline:"Recibe cotizaciones hasta", op_buyer:"Comprador",
  op_hidden:"Comprador en {c} (el nombre se ve con un plan pago)", op_details:"Detalles", op_mine:"Mis requerimientos", op_quotes:"{n} cotizaciones",
  op_search:"Buscar producto o código HS", op_all:"Todos los destinos", op_none:"No hay requerimientos con esos filtros.",
  op_price:"Precio unitario (US$)", op_lead_t:"Tiempo de entrega (días)", op_sent:"Cotización enviada", op_posted:"Requerimiento publicado", op_pending:"Pendiente de aprobación",
  op_approve:"Aprobar y publicar", op_need_buyer:"Para publicar requerimientos necesita el plan Comprador o Comprador y proveedor.",
  op_need_sup:"Para cotizar necesita el plan Proveedor o Comprador y proveedor.", op_fake:"Requerimiento ficticio de demostración", op_myq:"Cotizaciones enviadas",
  op_closed:"Cerrado", op_days:"{n} días", op_err_qty:"Escriba una cantidad válida", op_err_price:"Escriba un precio válido",
  sg_title:"Sugerencias para su empresa", sg_lead:"Según los productos de su perfil.", sg_reqs:"Requerimientos que puede cotizar", sg_buyers:"Compradores de sus productos",
  sg_sups:"Proveedores de lo que usted compra", sg_none:"Agregue productos a su perfil para recibir sugerencias.",
  nt_title:"Avisos por correo", nt_freq:"Frecuencia", nt_daily:"Diario", nt_weekly:"Semanal", nt_off:"Desactivados", nt_email:"Correo que recibe los avisos",
  nt_save:"Guardar", nt_saved:"Preferencia guardada", nt_prev:"Ver ejemplo del correo",
  nt_note:"Los correos se envían con Brevo cuando la plataforma funcione en el servidor. Incluyen requerimientos nuevos, empresas nuevas de sus productos y respuestas a sus mensajes.",
  nt_subject:"Global Trade Finder · Nuevas oportunidades para {c}", nt_hello:"Hola, estas son las novedades de sus productos:",
  pf5:"Cifras mundiales básicas (3 principales países)", pb5:"Cifras reales de comercio mundial (UN Comtrade)", pb6:"Publicar requerimientos y recibir cotizaciones", pb7:"Mensajería, verificación y avisos por correo",
  ps5:"Cifras reales de comercio mundial (UN Comtrade)", ps6:"Catálogo de productos y cotizar requerimientos", ps7:"Mensajería, verificación y avisos por correo",
  pa5:"Cifras del comercio mundial con la serie de 5 años", pa6:"Catálogo, requerimientos, mensajería y verificación", pa7:"Sugerencias automáticas y avisos por correo"
});
Object.assign(T.en, {
  nav_opps:"Requests",
  tr_title:"Real world trade", tr_src:"Source: UN Comtrade (United Nations), year {y}. Official figures reported by each country, in US dollars. Some countries have not reported that year yet.",
  tr_imp:"World imports", tr_exp:"World exports", tr_ncty:"{n} countries reported",
  tr_top_imp:"Top buying countries", tr_top_exp:"Top selling countries", tr_co:"Colombia", tr_co_imp:"Colombia imported", tr_co_exp:"Colombia exported",
  tr_none:"No UN Comtrade figures for this product.", tr_lock:"Paid plans show the top 15 buying and selling countries and Colombia's position.",
  tr_cty_title:"Real trade of {c}", tr_cty_imp:"Products where {c} is among the top world buyers", tr_cty_exp:"Products where {c} is among the top world sellers", tr_cty_none:"{c} is not among the top 15 countries for any product in the available figures.",
  tr_rank:"Rank {r} worldwide", tr_here:"{c} in this product",
  vf_title:"Company verification", vf_none:"Your company is not verified yet. Verified companies appear first and earn more trust.",
  vf_rut:"Tax ID document (PDF or image)", vf_cc:"Chamber of Commerce certificate (max. 30 days old)", vf_send:"Send documents for review",
  vf_review:"Documents under review by SkyNet Genesis.", vf_ok:"Company verified by SkyNet Genesis.", vf_rej:"Documents rejected: {why}. You can send them again.",
  vf_need:"Attach both documents.", vf_sent:"Documents sent for review", vf_sim:"Simulate SkyNet Genesis approval (demo only)",
  vf_note:"In the server version, the SkyNet Genesis team reviews the documents and only then the company gets the \"Verified\" badge.",
  cat_title:"Product catalog", cat_add:"Add product", cat_name:"Product name", cat_code:"HS code", cat_desc:"Description and specifications",
  cat_moq:"Minimum order", cat_unit:"Unit", cat_pmin:"Reference price from (US$)", cat_pmax:"to (US$)", cat_certs:"Certifications", cat_img:"Photo (optional)",
  cat_save:"Save product", cat_empty:"No products in the catalog yet.", cat_price_neg:"Price on request", cat_moq_l:"Minimum order", cat_del:"Delete", cat_edit:"Edit",
  cat_err_name:"Enter the product name", cat_err_code:"Choose an HS code", cat_max:"Maximum 30 products.", cat_fake:"Fictitious demo product", cat_saved:"Product saved",
  msg_title:"Messages", msg_send:"Send message", msg_new:"Write a message", msg_ph:"Type your message…", msg_empty:"No conversations yet.",
  msg_auto:"Automatic demo reply: this company is fictitious. In the server version, the real company's reply arrives here.",
  msg_open:"Open", msg_with:"Conversation with {c}", msg_unread:"{n} unread",
  op_title:"Purchase requests", op_lead:"Buyers post what they need. Suppliers send them a quote.",
  op_post:"Post a request", op_quote:"Quote", op_qty:"Quantity", op_dest:"Destination", op_deadline:"Accepts quotes until", op_buyer:"Buyer",
  op_hidden:"Buyer in {c} (name visible with a paid plan)", op_details:"Details", op_mine:"My requests", op_quotes:"{n} quotes",
  op_search:"Search product or HS code", op_all:"All destinations", op_none:"No requests match those filters.",
  op_price:"Unit price (US$)", op_lead_t:"Lead time (days)", op_sent:"Quote sent", op_posted:"Request posted", op_pending:"Pending approval",
  op_approve:"Approve and post", op_need_buyer:"Posting requests needs the Buyer or Buyer & supplier plan.",
  op_need_sup:"Quoting needs the Supplier or Buyer & supplier plan.", op_fake:"Fictitious demo request", op_myq:"Quotes sent",
  op_closed:"Closed", op_days:"{n} days", op_err_qty:"Enter a valid quantity", op_err_price:"Enter a valid price",
  sg_title:"Suggestions for your company", sg_lead:"Based on the products in your profile.", sg_reqs:"Requests you can quote", sg_buyers:"Buyers of your products",
  sg_sups:"Suppliers of what you buy", sg_none:"Add products to your profile to get suggestions.",
  nt_title:"Email notices", nt_freq:"Frequency", nt_daily:"Daily", nt_weekly:"Weekly", nt_off:"Off", nt_email:"Email that receives notices",
  nt_save:"Save", nt_saved:"Preference saved", nt_prev:"See a sample email",
  nt_note:"Emails are sent with Brevo once the platform runs on the server. They include new requests, new companies for your products and replies to your messages.",
  nt_subject:"Global Trade Finder · New opportunities for {c}", nt_hello:"Hello, here is what's new for your products:",
  pf5:"Basic world figures (top 3 countries)", pb5:"Real world trade figures (UN Comtrade)", pb6:"Post requests and receive quotes", pb7:"Messaging, verification and email notices",
  ps5:"Real world trade figures (UN Comtrade)", ps6:"Product catalog and quoting requests", ps7:"Messaging, verification and email notices",
  pa5:"World trade figures with the 5-year series", pa6:"Catalog, requests, messaging and verification", pa7:"Automatic suggestions and email notices"
});
PLANS.forEach(p => { const k = {free:"pf",buyer:"pb",supplier:"ps",both:"pa"}[p.id]; (p.id==="free"?["5"]:["5","6","7"]).forEach(n => p.feats.push(k+n)); });

/* ---------- utilidades ---------- */
const usd = (n) => { n = Number(n)||0; const a = Math.abs(n), en = LANG==="en", loc = en?"en-US":"es-CO";
  const f = (x,d) => x.toLocaleString(loc,{maximumFractionDigits:d});
  if(en) return "US$ " + (a>=1e9 ? f(n/1e9,1)+" B" : a>=1e6 ? f(n/1e6,1)+" M" : a>=1e3 ? f(n/1e3,0)+" K" : f(n,0));
  return "US$ " + (a>=1e6 ? f(n/1e6, a>=1e8?0:1)+(LANG==="pt"?" milhões":" millones") : a>=1e3 ? f(n/1e3,0)+" mil" : f(n,0)); };
const todayISO = () => new Date().toISOString().slice(0,10);
const addDays = (d) => { const x = new Date(); x.setDate(x.getDate()+d); return x.toISOString().slice(0,10); };
const daysLeft = (iso) => Math.ceil((new Date(iso+"T23:59:59") - new Date())/864e5);
const myRoleSup = () => ACC && (ACC.role==="supplier" || ACC.role==="both");
const myRoleBuy = () => ACC && (ACC.role==="buyer" || ACC.role==="both");

/* =====================================================================
   1. CIFRAS REALES DE COMERCIO (UN Comtrade)
   ===================================================================== */
const TRADE_Y = (typeof TRADE_META!=="undefined" && TRADE_META.year) || 2024;
const tradeOf = (code) => (typeof TRADE==="undefined") ? null : (TRADE[code] || TRADE[code.slice(0,4)] || null);
/* índice por país: productos donde el país está entre los 15 principales */
const TRADE_CC = {};
if(typeof TRADE!=="undefined") Object.entries(TRADE).forEach(([code, d]) => ["M","X"].forEach(f => (d[f]?.r||[]).forEach(([cc,v],i) => {
  (TRADE_CC[cc] = TRADE_CC[cc] || {M:[],X:[]})[f].push([code, v, i+1]); })));
Object.values(TRADE_CC).forEach(o => ["M","X"].forEach(f => o[f].sort((a,b)=>b[1]-a[1])));

function tradeBars(list, max, lockedAfter){
  return `<div class="bars">${list.map(([cc,v],i) => {
    const locked = lockedAfter!=null && i>=lockedAfter;
    return `<div class="bar ${locked?"blur":""}" ${locked?'aria-hidden="true"':""}><span class="lab">${locked?"··":ccTag(cc)} ${locked?"•••••":esc(cname(cc))}</span><span class="trk"><span class="s" style="width:${Math.max(2,v/max*100)}%"></span></span><span class="num">${locked?"•••":usd(v)}</span></div>`; }).join("")}</div>`;
}
function tradePanel(code, focusCC){
  const d = tradeOf(code);
  if(!d) return `<div class="panel"><h2>${t("tr_title")}</h2><p class="muted" style="margin:0">${t("tr_none")}</p></div>`;
  const full = PAID();
  const block = (f, title) => { const x = d[f]; if(!x || !x.r.length) return "";
    const lst = x.r.slice(0, full?15:5), max = x.r[0][1];
    return `<div><h3 style="font-size:1.05rem;margin:14px 0 2px">${title}</h3>
      <p class="muted" style="margin:0 0 8px;font-size:.88rem"><b class="num">${usd(x.t)}</b> · ${t(f==="M"?"tr_imp":"tr_exp")} · ${t("tr_ncty",{n:x.n})}</p>
      ${tradeBars(lst, max, full?null:3)}</div>`; };
  const fc = focusCC || "CO";
  const focus = (f) => { const x = d[f]; if(!x) return null; const i = x.r.findIndex(r=>r[0]===fc);
    if(i>=0) return {v:x.r[i][1], rank:i+1}; if(fc==="CO" && x.co) return {v:x.co[0], rank:null}; return null; };
  const fi = focus("M"), fx = focus("X");
  const focusHtml = full && (fi || fx) ? `<div class="stats" style="grid-template-columns:repeat(2,1fr);margin-top:12px">
      <div class="stat"><b class="num">${fi?usd(fi.v):"—"}</b><span>${esc(cname(fc))} · ${t("tr_imp").toLowerCase()}${fi&&fi.rank?" · "+t("tr_rank",{r:fi.rank}):""}</span></div>
      <div class="stat"><b class="num">${fx?usd(fx.v):"—"}</b><span>${esc(cname(fc))} · ${t("tr_exp").toLowerCase()}${fx&&fx.rank?" · "+t("tr_rank",{r:fx.rank}):""}</span></div></div>` : "";
  return `<div class="panel trade"><h2>${t("tr_title")} · ${TRADE_Y}</h2>
    ${block("M", t("tr_top_imp"))}${block("X", t("tr_top_exp"))}${focusHtml}
    ${full?"":`<div class="lock" style="margin-top:12px"><b>${t("gate_title")}</b>${t("tr_lock")} <a href="#planes">${t("see_plans")}</a></div>`}
    <p class="muted" style="margin:12px 0 0;font-size:.8rem">${t("tr_src",{y:TRADE_Y})}${typeof trmChip==="function" ? " · "+trmChip() : ""}</p></div>`;
}
function tradeCountryPanel(cc){
  const o = TRADE_CC[cc];
  if(typeof TRADE==="undefined") return "";
  if(!o) return `<div class="panel"><h2>${t("tr_cty_title",{c:cname(cc)})}</h2><p class="muted" style="margin:0">${t("tr_cty_none",{c:cname(cc)})}</p></div>`;
  const full = PAID();
  const tbl = (arr) => arr.length ? `<div class="tablewrap" style="border:0"><table class="t"><tbody>${arr.slice(0, full?10:3).map(([code,v,rank])=>`<tr><td><a href="#pc-${cc}-${code}"><span class="mono">${fmtCode(code)}</span> ${esc(shorten(codeLabel(code),46))}</a><div class="muted" style="font-size:.8rem">${t("tr_rank",{r:rank})}</div></td><td class="r num">${usd(v)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">—</p>`;
  return `<div class="panel trade"><h2>${t("tr_cty_title",{c:cname(cc)})} · ${TRADE_Y}</h2>
    <h3 style="font-size:1.05rem;margin:10px 0 4px">${t("tr_cty_imp",{c:cname(cc)})}</h3>${tbl(o.M)}
    <h3 style="font-size:1.05rem;margin:14px 0 4px">${t("tr_cty_exp",{c:cname(cc)})}</h3>${tbl(o.X)}
    ${full?"":`<div class="lock" style="margin-top:12px"><b>${t("gate_title")}</b>${t("tr_lock")} <a href="#planes">${t("see_plans")}</a></div>`}
    <p class="muted" style="margin:12px 0 0;font-size:.8rem">${t("tr_src",{y:TRADE_Y})}</p></div>`;
}

/* =====================================================================
   2. VERIFICACIÓN REAL
   ===================================================================== */
const verifOf = () => (ACC && ACC.verif && typeof ACC.verif==="object") ? ACC.verif : {status:"none"};
const isVerifiedMe = () => verifOf().status==="ok";
function saveAcc(){ store.set("account", ACC); }
function verifPanel(){
  if(!ACC || !can("profile")) return "";
  const v = verifOf();
  const pill = v.status==="ok" ? `<span class="ver">${ICON.check}${t("verified")}</span>` : "";
  const msg = v.status==="ok" ? t("vf_ok") : v.status==="review" ? t("vf_review") : v.status==="rejected" ? t("vf_rej",{why:esc(v.why||"")}) : t("vf_none");
  const form = (v.status==="none" || v.status==="rejected") ? `<form id="vform" class="stack" style="margin-top:10px" novalidate>
      <div class="field"><label for="vf-rut">${t("vf_rut")}</label><input id="vf-rut" type="file" accept=".pdf,image/*"></div>
      <div class="field"><label for="vf-cc">${t("vf_cc")}</label><input id="vf-cc" type="file" accept=".pdf,image/*"></div>
      <div class="err" id="e-vf"></div>
      <div><button class="btn btn-main btn-sm" type="submit">${t("vf_send")}</button></div></form>` : "";
  const sim = v.status==="review" && isDemo() ? `<button class="btn btn-ghost btn-sm" id="vf-sim" style="margin-top:10px">${t("vf_sim")}</button>` : "";
  const files = v.rut ? `<p class="muted" style="font-size:.85rem;margin:8px 0 0">${esc(v.rut)} · ${esc(v.camara||"")}</p>` : "";
  return `<div class="panel"><h2>${t("vf_title")} ${pill}</h2><p style="margin:0">${msg}</p>${files}${form}${sim}
    <p class="muted" style="font-size:.84rem;margin:10px 0 0">${t("vf_note")}</p></div>`;
}
function bindVerif(){
  const f = $("#vform");
  if(f) f.onsubmit = (e) => { e.preventDefault();
    const a = $("#vf-rut").files[0], b = $("#vf-cc").files[0];
    if(!a || !b){ $("#e-vf").textContent = t("vf_need"); return; }
    if(a.size > 10e6 || b.size > 10e6){ $("#e-vf").textContent = "Máx. 10 MB"; return; }
    ACC.verif = { status:"review", rut:a.name, camara:b.name, at:new Date().toISOString() }; saveAcc(); toast(t("vf_sent")); render(); };
  const s = $("#vf-sim"); if(s) s.onclick = () => { ACC.verif = {...verifOf(), status:"ok", okAt:new Date().toISOString()}; saveAcc(); toast(t("vf_ok")); render(); };
}

/* =====================================================================
   3. CATÁLOGO DE PRODUCTOS
   ===================================================================== */
const UNITS = ["kg","t","unidades","cajas","litros","contenedor 20'","contenedor 40'","m²","m"];
function catalogMine(){ const c = store.get("catalog", []); return Array.isArray(c) ? c.filter(x => x && typeof x.name==="string") : []; }
/* catálogo ficticio, coherente con los productos de cada empresa de demostración */
function catalogDemo(co){
  if(!co.demo || co.role==="buyer") return [];
  const r = mulberry32(hashStr("cat-"+co.id));
  return co.codes.slice(0,3).map((code,i) => ({ id:co.id+"-"+i, fake:true, name: shorten(codeLabel(code), 60), code,
    moq: [1,5,10,20,50,100,500,1000][Math.floor(r()*8)], unit: pick(r, ["kg","t","unidades","cajas","contenedor 20'"]),
    certs: co.certs?.[0] || "", desc:"" }));
}
const catalogOf = (co) => co.mine ? catalogMine() : catalogDemo(co);
function catCard(p, editable){
  const price = (p.pmin || p.pmax) ? `US$ ${esc(p.pmin||"")}${p.pmax?" – "+esc(p.pmax):""} / ${esc(p.unit||"")}` : t("cat_price_neg");
  return `<div class="catcard">${p.img?`<img src="${apiUrl(p.img)}" alt="${esc(p.name)}" loading="lazy">`:`<div class="catph">${ICON.box||""}<span class="mono">${fmtCode(p.code||"")}</span></div>`}
    <div class="catbody"><b>${esc(p.name)}</b>
      <div class="muted" style="font-size:.84rem"><span class="mono">${fmtCode(p.code||"")}</span> · ${t("cat_moq_l")}: ${esc(p.moq && !isNaN(Number(p.moq)) ? Number(p.moq).toLocaleString(LANG==="en"?"en-US":"es-CO") : (p.moq||"—"))} ${esc(p.unit||"")}</div>
      <div style="font-size:.9rem;margin-top:2px">${price}</div>${p.pmin && typeof copOf==="function" ? `<div class="muted" style="font-size:.8rem">≈ ${copOf(p.pmin)}${p.pmax?" – "+copOf(p.pmax):""}</div>` : ""}
      ${p.certs?`<div class="muted" style="font-size:.82rem">${esc(p.certs)}</div>`:""}
      ${p.desc?`<p style="margin:6px 0 0;font-size:.88rem">${esc(shorten(p.desc,180))}</p>`:""}
      ${p.fake?`<span class="demo" style="margin-top:6px;display:inline-block">${t("cat_fake")}</span>`:""}
      ${editable?`<div style="display:flex;gap:10px;margin-top:8px"><button class="linkbtn" data-catedit="${esc(p.id)}">${t("cat_edit")}</button><button class="linkbtn" data-catdel="${esc(p.id)}" style="color:var(--danger)">${t("cat_del")}</button></div>`:""}
    </div></div>`;
}
function catalogSection(co){
  const list = catalogOf(co); if(!list.length && (!co.mine || co.role==="buyer")) return "";
  return `<div class="panel"><h2>${t("cat_title")} · ${list.length}</h2>${list.length?`<div class="catgrid">${list.map(p=>catCard(p,false)).join("")}</div>`:`<p class="muted" style="margin:0">${t("cat_empty")}</p>`}</div>`;
}
function catalogPanel(){
  if(!ACC || !myRoleSup() || !can("profile")) return "";
  const list = catalogMine();
  return `<div class="panel"><div class="sec-head" style="margin-bottom:8px"><h2 style="margin:0">${t("cat_title")} · ${list.length}</h2><button class="btn btn-ghost btn-sm" id="b-catadd">${t("cat_add")}</button></div>
    ${list.length?`<div class="catgrid">${list.map(p=>catCard(p,true)).join("")}</div>`:`<p class="muted" style="margin:0">${t("cat_empty")}</p>`}</div>`;
}
function resizeImg(file){ return new Promise((res, rej) => {
  if(!file) return res(""); if(!/^image\//.test(file.type) || file.size > 15e6) return rej("img");
  const fr = new FileReader(); fr.onerror = () => rej("img");
  fr.onload = () => { const im = new Image(); im.onerror = () => rej("img"); im.onload = () => {
    const s = Math.min(1, 480/Math.max(im.width, im.height)); const c = document.createElement("canvas");
    c.width = Math.round(im.width*s); c.height = Math.round(im.height*s); c.getContext("2d").drawImage(im,0,0,c.width,c.height);
    res(c.toDataURL("image/jpeg", 0.72)); }; im.src = fr.result; };
  fr.readAsDataURL(file); }); }
function openCatForm(id){
  const list = catalogMine(); const p = list.find(x=>x.id==id) || {};
  if(!p.id && list.length >= 30){ toast(t("cat_max")); return; }
  const codes = [...new Set([...(ACC.codes||[]), ...(p.code?[p.code]:[])])];
  modal(`<h2>${p.id?t("cat_edit"):t("cat_add")}</h2><form id="cform" class="fields" novalidate>
    <div class="field full"><label for="c-name">${t("cat_name")}</label><input id="c-name" maxlength="90" value="${esc(p.name||"")}"><div class="err" id="e-cname"></div></div>
    <div class="field full"><label for="c-code">${t("cat_code")}</label><select id="c-code">${codes.map(c=>`<option value="${c}" ${p.code===c?"selected":""}>${fmtCode(c)} · ${esc(shorten(codeLabel(c),50))}</option>`).join("")}</select><div class="err" id="e-ccode"></div></div>
    <div class="field"><label for="c-moq">${t("cat_moq")}</label><input id="c-moq" type="number" min="1" max="10000000" value="${esc(p.moq||1)}"></div>
    <div class="field"><label for="c-unit">${t("cat_unit")}</label><select id="c-unit">${UNITS.map(u=>`<option ${p.unit===u?"selected":""}>${u}</option>`).join("")}</select></div>
    <div class="field"><label for="c-pmin">${t("cat_pmin")}</label><input id="c-pmin" type="number" min="0" step="0.01" value="${esc(p.pmin||"")}"></div>
    <div class="field"><label for="c-pmax">${t("cat_pmax")}</label><input id="c-pmax" type="number" min="0" step="0.01" value="${esc(p.pmax||"")}"></div>
    <div class="field full"><label for="c-certs">${t("cat_certs")}</label><input id="c-certs" maxlength="120" value="${esc(p.certs||"")}"></div>
    <div class="field full"><label for="c-desc">${t("cat_desc")}</label><textarea id="c-desc" maxlength="1200">${esc(p.desc||"")}</textarea></div>
    <div class="field full"><label for="c-img">${t("cat_img")}</label><input id="c-img" type="file" accept="image/*"><div class="err" id="e-cimg"></div></div>
    <div class="acts full"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button type="submit" class="btn btn-main">${t("cat_save")}</button></div></form>`, (m) => {
    $("#cform",m).onsubmit = async (e) => { e.preventDefault();
      const name = $("#c-name",m).value.trim(), code = $("#c-code",m).value;
      $("#e-cname",m).textContent = name ? "" : t("cat_err_name"); $("#e-ccode",m).textContent = code ? "" : t("cat_err_code");
      if(!name || !code) return;
      let img = p.img || "";
      try { const f = $("#c-img",m).files[0]; if(f) img = await resizeImg(f); } catch(x){ $("#e-cimg",m).textContent = LANG==="en"?"Invalid image":"Imagen no válida"; return; }
      const num = (v) => { const n = Number(v); return v!=="" && Number.isFinite(n) && n>=0 ? String(n) : ""; };
      let pmin = num($("#c-pmin",m).value), pmax = num($("#c-pmax",m).value);
      if(pmin && pmax && Number(pmax) < Number(pmin)) [pmin, pmax] = [pmax, pmin];
      const moq = Math.min(1e7, Math.max(1, Math.round(Number($("#c-moq",m).value)||1)));
      const item = { id: p.id || Date.now(), name, code, moq, unit:$("#c-unit",m).value, pmin, pmax, certs:$("#c-certs",m).value.trim(), desc:$("#c-desc",m).value.trim(), img };
      const next = p.id ? list.map(x => x.id==p.id ? item : x) : [item, ...list];
      if(!store.set("catalog", next)){ $("#e-cimg",m).textContent = LANG==="en"?"Not enough space: use a smaller photo.":"No hay espacio: use una foto más pequeña."; return; }
      closeModal(); toast(t("cat_saved")); render(); };
  });
}
function bindCatalog(){
  const a = $("#b-catadd"); if(a) a.onclick = () => openCatForm(null);
  $$("[data-catedit]").forEach(b => b.onclick = () => openCatForm(b.dataset.catedit));
  $$("[data-catdel]").forEach(b => b.onclick = () => { store.set("catalog", catalogMine().filter(x => x.id!=b.dataset.catdel)); render(); });
}

/* =====================================================================
   4. MENSAJERÍA
   ===================================================================== */
function threads(){ const v = store.get("threads", []); return Array.isArray(v) ? v.filter(x => x && x.coId && Array.isArray(x.msgs)) : []; }
const unreadCount = () => threads().reduce((n,th) => n + (th.unread||0), 0);
function openThread(coId){
  if(gateP("send","w_rfq")) return;
  if(!ACC){ toast(t("need_account")); go("registro"); return; }
  const co = getCo(coId); if(!co) return;
  let all = threads(); let th = all.find(x => x.coId===coId);
  if(th && th.unread){ th.unread = 0; store.set("threads", all); }
  const body = () => (th ? th.msgs : []).map(m => `<div class="msg ${m.me?"me":""}"><div>${esc(m.text)}</div><span class="muted">${esc(new Date(m.at).toLocaleString(LANG==="en"?"en-US":"es-CO",{dateStyle:"short",timeStyle:"short"}))}</span></div>`).join("") || `<p class="muted">${t("msg_empty")}</p>`;
  modal(`<h2>${t("msg_with",{c:esc(co.name)})}</h2>${co.demo?`<p class="muted" style="margin-top:0;font-size:.86rem">${t("demo")}</p>`:""}
    <div class="msgs" id="msgs">${body()}</div>
    <form id="mform" style="display:flex;gap:8px;margin-top:10px"><label class="sr" for="m-text">${t("msg_ph")}</label><textarea id="m-text" rows="2" maxlength="2000" placeholder="${esc(t("msg_ph"))}" style="flex:1"></textarea><button class="btn btn-main" type="submit">${t("send")}</button></form>`, (m) => {
    const box = $("#msgs",m); box.scrollTop = box.scrollHeight;
    $("#mform",m).onsubmit = (e) => { e.preventDefault();
      const txt = $("#m-text",m).value.trim(); if(!txt) return;
      all = threads(); th = all.find(x => x.coId===coId);
      if(!th){ th = { coId, coName: co.name, msgs:[], unread:0 }; all.unshift(th); }
      th.msgs.push({ me:true, text: txt, at: new Date().toISOString() }); th.msgs = th.msgs.slice(-200);
      store.set("threads", all.slice(0,200)); $("#m-text",m).value = ""; box.innerHTML = body(); box.scrollTop = box.scrollHeight;
      if(co.demo) setTimeout(() => { const a2 = threads(), t2 = a2.find(x => x.coId===coId); if(!t2) return;
        t2.msgs.push({ me:false, text: t("msg_auto"), at: new Date().toISOString() });
        const open = $("#msgs"); if(open){ store.set("threads", a2); open.innerHTML = (t2.msgs).map(x => `<div class="msg ${x.me?"me":""}"><div>${esc(x.text)}</div></div>`).join(""); open.scrollTop = open.scrollHeight; }
        else { t2.unread = (t2.unread||0)+1; store.set("threads", a2); } }, 900);
    };
  });
}
function messagesPanel(){
  if(!ACC) return "";
  const list = threads();
  return `<div class="panel"><h2>${t("msg_title")}${unreadCount()?` <span class="pill">${t("msg_unread",{n:unreadCount()})}</span>`:""}</h2>
    ${list.length?`<div class="tablewrap" style="border:0"><table class="t"><tbody>${list.slice(0,50).map(th=>{ const last = th.msgs[th.msgs.length-1]||{};
      return `<tr><td><b>${esc(th.coName)}</b>${th.unread?` <span class="pill">${th.unread}</span>`:""}<div class="muted" style="font-size:.84rem">${esc(shorten(last.text||"",70))}</div></td><td class="r"><button class="btn btn-ghost btn-sm" data-thread="${esc(th.coId)}">${t("msg_open")}</button></td></tr>`; }).join("")}</tbody></table></div>`
      : `<p class="muted" style="margin:0">${t("msg_empty")}</p>`}</div>`;
}
function bindMessages(){ $$("[data-thread]").forEach(b => b.onclick = () => openThread(b.dataset.thread)); }

/* =====================================================================
   5. TABLERO DE REQUERIMIENTOS
   ===================================================================== */
const OPP_DEMO = (() => {
  const r = mulberry32(hashStr("gtf-opps")); const buyers = DEMO.filter(c => c.role!=="supplier");
  const out = [];
  for(let i=0;i<120;i++){
    const co = buyers[Math.floor(r()*buyers.length)]; const code = co.codes[Math.floor(r()*co.codes.length)];
    const unit = pick(r, ["t","kg","contenedor 20'","contenedor 40'","unidades","cajas"]);
    const qty = unit.startsWith("contenedor") ? 1+Math.floor(r()*12) : unit==="t" ? 5+Math.floor(r()*500) : 100+Math.floor(r()*50000);
    out.push({ id:"op"+(i+1), demo:true, coId:co.id, code, qty, unit, inc: pick(r, ["FOB","CIF","DAP","CFR","EXW"]), dest: co.cc,
      until: addDays(3+Math.floor(r()*55)), posted: addDays(-Math.floor(r()*20)),
      details: LANG==="en" ? "" : "" , quotes: Math.floor(r()*6) });
  }
  return out;
})();
function myOpps(){ const v = store.get("myopps", []); return Array.isArray(v) ? v.filter(x => x && x.id && x.code) : []; }
function myQuotes(){ const v = store.get("quotes", []); return Array.isArray(v) ? v : []; }
function allOpps(){ return [...myOpps().filter(o => o.status!=="pending").map(o => ({...o, mine:true})), ...OPP_DEMO]; }
const OF = { q:"", cc:"" };
function oppCard(o){
  const co = o.mine ? (ACC?accCompany():null) : getCo(o.coId);
  const left = daysLeft(o.until);
  const buyer = o.mine ? `<span class="mine">${t("yours")}</span>` : PAID() && co ? `<a href="#empresa-${co.id}">${esc(co.name)}</a> <span class="demo">${t("demo")}</span>` : esc(t("op_hidden",{c:cname(o.dest)}));
  const quoted = myQuotes().some(q => q.oppId===o.id);
  return `<article class="co"><div style="min-width:0"><h3>${esc(shorten(codeLabel(o.code),80))}</h3>
      <div class="line"><span class="mono">${fmtCode(o.code)}</span><span>·</span><span><b>${t("op_qty")}:</b> ${Number(o.qty).toLocaleString(LANG==="en"?"en-US":"es-CO")} ${esc(o.unit)}</span><span>·</span><span>${esc(o.inc)}</span></div>
      <div class="line">${ccTag(o.dest)}<span>${t("op_dest")}: ${esc(cname(o.dest))}</span><span>·</span><span>${t("op_deadline")}: ${esc(/^\d{4}-\d{2}-\d{2}$/.test(o.until||"") ? fdate(o.until) : o.until)} (${left>0?t("op_days",{n:left}):t("op_closed")})</span></div>
      <div class="line"><span><b>${t("op_buyer")}:</b> ${buyer}</span></div>
      ${o.details?`<p style="margin:6px 0 0;font-size:.9rem">${esc(o.details)}</p>`:""}</div>
    <div class="side"><span class="muted" style="font-size:.85rem">${(()=>{ const nq = (o.mine && typeof QUOTES_IN!=="undefined") ? QUOTES_IN.filter(q=>q.oppId===o.id || String(q.oppId).endsWith(":"+o.id)).length : (o.quotes||0)+(quoted?1:0); return nq===1 ? ({es:"1 cotización",en:"1 quote",pt:"1 cotação"})[LANG]||"1 cotización" : t("op_quotes",{n:nq}); })()}</span>${o.demo?`<span class="demo">${t("op_fake")}</span>`:""}
      ${o.mine?"":left>0?`<button class="btn btn-main btn-sm" data-quote="${esc(o.id)}" ${quoted?"disabled":""}>${quoted?t("op_sent"):t("op_quote")}</button>`:""}</div></article>`;
}
function vOpps(){
  const nq = norm(OF.q), p = parseQuery(OF.q);
  const codes = p.codes.length ? null : (p.words.length ? new Set(codesForWords(p.words)) : null);
  const list = allOpps().filter(o => (!OF.cc || o.dest===OF.cc) && (!nq || (p.codes.length ? p.codes.some(c=>related(c,o.code)) : codes && [...codes].some(c=>related(c,o.code)))))
    .sort((a,b) => (b.mine?1:0)-(a.mine?1:0) || (daysLeft(b.until)>0)-(daysLeft(a.until)>0) || b.posted.localeCompare(a.posted));
  const ccs = [...new Set(allOpps().map(o=>o.dest))].sort((a,b)=>cname(a).localeCompare(cname(b)));
  const mine = myOpps();
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("op_title")}])}
    <div class="sec-head"><div><h1>${t("op_title")}</h1><p class="lead" style="margin:4px 0 0">${t("op_lead")}</p></div><button class="btn btn-main" id="b-oppost">${t("op_post")}</button></div>
    <form id="oform" class="panel" style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin:16px 0">
      <div class="field" style="flex:2;min-width:200px"><label for="o-q">${t("op_search")}</label><input id="o-q" value="${esc(OF.q)}" placeholder="café, 0901, aguacate…"></div>
      <div class="field" style="flex:1;min-width:160px"><label for="o-cc">${t("op_dest")}</label><select id="o-cc"><option value="">${t("op_all")}</option>${ccs.map(c=>`<option value="${c}" ${OF.cc===c?"selected":""}>${esc(cname(c))}</option>`).join("")}</select></div>
      <button class="btn btn-ghost" type="submit">${t("btn_search")}</button></form>
    ${mine.length?`<div class="panel" style="margin-bottom:16px"><h2>${t("op_mine")}</h2>${mine.map(o=>`<div style="display:flex;justify-content:space-between;gap:10px;align-items:center;border-top:1px solid var(--line);padding:8px 0">
      <div><b>${esc(shorten(codeLabel(o.code),60))}</b> · ${esc(o.qty)} ${esc(o.unit)} → ${esc(cname(o.dest))}<div class="muted" style="font-size:.84rem">${o.status==="pending"?t("op_pending"):t("op_deadline")+": "+esc(/^\d{4}-\d{2}-\d{2}$/.test(o.until||"") ? fdate(o.until) : o.until)}</div></div>
      ${o.status==="pending" && can("approve")?`<button class="btn btn-ghost btn-sm" data-oppok="${esc(o.id)}">${t("op_approve")}</button>`:""}</div>`).join("")}</div>`:""}
    <p class="muted">${list.length} · ${t("op_title").toLowerCase()}</p>
    <div class="list">${list.slice(0, shownOpps).map(oppCard).join("") || `<div class="empty"><b>${t("op_none")}</b>${({es:"Los compradores registrados publican aquí lo que necesitan. Publique el suyo con «Publicar un requerimiento» o cree una alerta para enterarse cuando aparezcan.",en:"Registered buyers post what they need here. Post yours with «Post a request» or create an alert to hear when new ones appear.",pt:"Os compradores cadastrados publicam aqui o que precisam. Publique o seu ou crie um alerta para saber quando aparecerem."})[LANG]||""}</div>`}</div>
    ${list.length>shownOpps?`<p style="text-align:center"><button class="btn btn-ghost" id="b-omore">${t("more")}</button></p>`:""}
    <p class="muted" style="font-size:.82rem;margin-top:12px">${t("demo_note")}</p></div>`;
}
let shownOpps = 25;
function bindOpps(){
  $("#oform").onsubmit = (e) => { e.preventDefault(); OF.q = $("#o-q").value.trim(); OF.cc = $("#o-cc").value; shownOpps = 25; render(); };
  $("#o-cc").onchange = () => { OF.cc = $("#o-cc").value; shownOpps = 25; render(); };
  const mo = $("#b-omore"); if(mo) mo.onclick = () => { shownOpps += 25; render(); };
  $("#b-oppost").onclick = openOppForm;
  $$("[data-quote]").forEach(b => b.onclick = () => openQuote(b.dataset.quote));
  $$("[data-oppok]").forEach(b => b.onclick = () => { store.set("myopps", myOpps().map(o => o.id==b.dataset.oppok ? {...o, status:"open", by: o.by} : o)); toast(t("op_posted")); render(); });
}
function openOppForm(){
  if(gateP("send","w_rfq")) return;
  if(!ACC){ toast(t("need_account")); go("registro"); return; }
  if(!myRoleBuy()){ modal(`<h2>${t("op_post")}</h2><p>${t("op_need_buyer")}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("close")}</button><a class="btn btn-main" href="#planes" data-close>${t("see_plans")}</a></div>`); return; }
  modal(`<h2>${t("op_post")}</h2><form id="opform" class="fields" novalidate>
    <div class="field full"><label for="op-code">${t("rfq_product")}</label><select id="op-code">${ACC.codes.map(c=>`<option value="${c}">${fmtCode(c)} · ${esc(shorten(codeLabel(c),50))}</option>`).join("")}</select></div>
    <div class="field"><label for="op-qty">${t("op_qty")}</label><input id="op-qty" type="number" min="1" max="10000000" value="1"><div class="err" id="e-opqty"></div></div>
    <div class="field"><label for="op-unit">${t("cat_unit")}</label><select id="op-unit">${UNITS.map(u=>`<option>${u}</option>`).join("")}</select></div>
    <div class="field"><label for="op-inc">${t("rfq_incoterm")}</label><select id="op-inc">${INCOS.map(i=>`<option ${i==="CIF"?"selected":""}>${i}</option>`).join("")}</select></div>
    <div class="field"><label for="op-until">${t("op_deadline")}</label><input id="op-until" type="date" min="${addDays(1)}" max="${addDays(180)}" value="${addDays(21)}"></div>
    <div class="field full"><label for="op-det">${t("op_details")}</label><textarea id="op-det" maxlength="1000"></textarea></div>
    <div class="acts full"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button type="submit" class="btn btn-main">${t("op_post")}</button></div></form>`, (m) => {
    $("#opform",m).onsubmit = (e) => { e.preventDefault();
      const qty = Number($("#op-qty",m).value); if(!Number.isFinite(qty) || qty<1 || qty>1e7){ $("#e-opqty",m).textContent = t("op_err_qty"); return; }
      let until = $("#op-until",m).value; if(!/^\d{4}-\d{2}-\d{2}$/.test(until) || daysLeft(until) < 1) until = addDays(21);
      const pending = !can("approve");
      const o = { id:"my"+Date.now(), code:$("#op-code",m).value, qty, unit:$("#op-unit",m).value, inc:$("#op-inc",m).value, dest:ACC.cc, until, posted:todayISO(), details:$("#op-det",m).value.trim(), quotes:0, status: pending?"pending":"open", by:ULEVEL };
      store.set("myopps", [o, ...myOpps()].slice(0,200)); closeModal(); toast(pending?t("op_pending"):t("op_posted")); render(); };
  });
}
function openQuote(id){
  if(gateP("send","w_rfq")) return;
  if(!ACC){ toast(t("need_account")); go("registro"); return; }
  if(!myRoleSup()){ modal(`<h2>${t("op_quote")}</h2><p>${t("op_need_sup")}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("close")}</button><a class="btn btn-main" href="#planes" data-close>${t("see_plans")}</a></div>`); return; }
  const o = allOpps().find(x => x.id===id); if(!o) return;
  modal(`<h2>${t("op_quote")}</h2><p class="muted" style="margin-top:0">${esc(codeLabel(o.code))} · ${esc(o.qty)} ${esc(o.unit)} → ${esc(cname(o.dest))}</p>
    <form id="qtform" class="fields" novalidate>
    <div class="field"><label for="qt-price">${t("op_price")}</label><input id="qt-price" type="number" min="0.01" step="0.01"><div class="err" id="e-qtp"></div></div>
    <div class="field"><label for="qt-lead">${t("op_lead_t")}</label><input id="qt-lead" type="number" min="1" max="365" value="30"></div>
    <div class="field full"><label for="qt-msg">${t("rfq_msg")}</label><textarea id="qt-msg" maxlength="1500"></textarea></div>
    <div class="acts full"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button type="submit" class="btn btn-main">${t("send")}</button></div></form>`, (m) => {
    $("#qtform",m).onsubmit = (e) => { e.preventDefault();
      const price = Number($("#qt-price",m).value); if(!Number.isFinite(price) || price<=0 || price>1e9){ $("#e-qtp",m).textContent = t("op_err_price"); return; }
      const lead = Math.min(365, Math.max(1, Math.round(Number($("#qt-lead",m).value)||30)));
      const q = { id:Date.now(), oppId:o.id, code:o.code, coId:o.coId, price, lead, msg:$("#qt-msg",m).value.trim(), at:new Date().toISOString(), status: can("approve")?"sent":"pending", by:ULEVEL };
      store.set("quotes", [q, ...myQuotes()].slice(0,500));
      if(can("contacts")) addProspect(getCo(o.coId), "quote", true);
      /* la cotización también queda en la conversación con el comprador */
      const co = getCo(o.coId);
      if(co && q.status==="sent"){ const all = threads(); let th = all.find(x=>x.coId===co.id); if(!th){ th = {coId:co.id, coName:co.name, msgs:[], unread:0}; all.unshift(th); }
        th.msgs.push({ me:true, text:`${({es:"Cotización",en:"Quote",pt:"Cotação"})[LANG]||"Cotización"}: ${codeLabel(o.code)} · US$ ${Number(price).toLocaleString(LANG==="en"?"en-US":"es-CO",{maximumFractionDigits:2})} · ${lead} ${LANG==="en"?"days":"días"}${q.msg?" · "+q.msg:""}`, at:q.at }); store.set("threads", all.slice(0,200)); }
      closeModal(); toast(q.status==="pending"?t("rfq_pending_ok"):t("op_sent")); render(); };
  });
}

/* =====================================================================
   6. SUGERENCIAS Y AVISOS POR CORREO
   ===================================================================== */
function suggestions6(){
  if(!ACC || !ACC.codes?.length) return null;
  const mine = ACC.codes;
  const hit = (cs) => cs.some(c => mine.some(m => related(c,m)));
  const reqs = myRoleSup() ? OPP_DEMO.filter(o => daysLeft(o.until)>0 && hit([o.code])).slice(0,5) : [];
  /* primero las empresas registradas, luego las reales de la DIAN y al final las de demostración */
  const yo = (typeof accCompany==="function" && accCompany()) ? accCompany().id : "me";
  const pool = allCompanies().filter(c => c && c.id!==yo && c.id!=="me");
  const rank = c => c.registered && !c.demo ? 0 : c.real ? 1 : 2;
  const pick = (f) => pool.filter(f).sort((a,b)=>rank(a)-rank(b)).slice(0,6);
  const buyers = myRoleSup() ? pick(c => c.role!=="supplier" && hit(codesFor(c,"buyer"))) : [];
  const sups = myRoleBuy() ? pick(c => c.role!=="buyer" && hit(codesFor(c,"supplier"))) : [];
  return { reqs, buyers, sups };
}
function suggestPanel(){
  if(!ACC) return "";
  const s = suggestions6();
  if(!s) return `<div class="panel"><h2>${t("sg_title")}</h2><p class="muted" style="margin:0">${t("sg_none")}</p></div>`;
  const li = (co) => `<li><a href="#empresa-${co.id}">${esc(co.name)}</a> · ${esc(cname(co.cc))} ${co.demo?`<span class="demo">${t("demo")}</span>`:co.real?`<span class="mono" style="font-size:.75rem">DIAN</span>`:""}</li>`;
  return `<div class="panel"><h2>${t("sg_title")}</h2><p class="muted" style="margin:0 0 8px;font-size:.9rem">${t("sg_lead")}</p>
    ${s.reqs.length?`<h3 style="font-size:1rem;margin:8px 0 4px">${t("sg_reqs")}</h3><ul class="plain">${s.reqs.map(o=>`<li><a href="#oportunidades">${esc(shorten(codeLabel(o.code),50))}</a> · ${esc(o.qty)} ${esc(o.unit)} → ${esc(cname(o.dest))}</li>`).join("")}</ul>`:""}
    ${s.buyers.length?`<h3 style="font-size:1rem;margin:8px 0 4px">${t("sg_buyers")}</h3><ul class="plain">${s.buyers.map(li).join("")}</ul>`:""}
    ${s.sups.length?`<h3 style="font-size:1rem;margin:8px 0 4px">${t("sg_sups")}</h3><ul class="plain">${s.sups.map(li).join("")}</ul>`:""}</div>`;
}
function notifyPanel(){
  if(!ACC || !can("alerts")) return "";
  const n = store.get("notify", {freq:"weekly", email: ACC.email||""});
  return `<div class="panel"><h2>${t("nt_title")}</h2><form id="nform" class="fields" novalidate>
    <div class="field"><label for="n-freq">${t("nt_freq")}</label><select id="n-freq">${["daily","weekly","off"].map(f=>`<option value="${f}" ${n.freq===f?"selected":""}>${t("nt_"+f)}</option>`).join("")}</select></div>
    <div class="field"><label for="n-email">${t("nt_email")}</label><input id="n-email" type="email" value="${esc(n.email||"")}"><div class="err" id="e-nemail"></div></div>
    <div class="acts full" style="justify-content:flex-start"><button class="btn btn-ghost btn-sm" type="submit">${t("nt_save")}</button><button class="btn btn-ghost btn-sm" type="button" id="n-prev">${t("nt_prev")}</button></div></form>
    <p class="muted" style="font-size:.84rem;margin:10px 0 0">${t("nt_note")}</p></div>`;
}
function bindNotify(){
  const f = $("#nform"); if(!f) return;
  f.onsubmit = (e) => { e.preventDefault(); const email = $("#n-email").value.trim();
    if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){ $("#e-nemail").textContent = t("err_email")||"Correo no válido"; return; }
    store.set("notify", {freq:$("#n-freq").value, email}); toast(t("nt_saved")); };
  $("#n-prev").onclick = () => { const s = suggestions6() || {reqs:[],buyers:[],sups:[]};
    const items = [...s.reqs.map(o=>`• ${codeLabel(o.code)} — ${o.qty} ${o.unit} → ${cname(o.dest)}`), ...s.buyers.map(c=>`• ${c.name} (${cname(c.cc)})`), ...s.sups.map(c=>`• ${c.name} (${cname(c.cc)})`)].slice(0,8);
    modal(`<h2>${t("nt_prev")}</h2><div class="panel" style="background:#fff">
      <p class="muted" style="margin:0 0 6px;font-size:.85rem"><b>${esc(t("nt_subject",{c:ACC.name}))}</b></p>
      <p>${t("nt_hello")}</p><pre style="white-space:pre-wrap;font-family:inherit;margin:0">${esc(items.join("\n")||"—")}</pre>
      <hr style="border:0;border-top:1px solid var(--line);margin:14px 0"><p class="muted" style="font-size:.82rem;margin:0">Global Trade Finder · SkyNet Genesis · ${SG.mail} · WhatsApp ${SG.wa}</p></div>
      <div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`); };
}

/* ---------- estilos de los módulos nuevos ---------- */
(() => { const st = document.createElement("style"); st.textContent = `
  .catgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px}
  .catcard{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;display:flex;flex-direction:column}
  .catcard img,.catph{width:100%;aspect-ratio:4/3;object-fit:cover;background:#E8F1FA;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;color:#5D6B78}
  .catbody{padding:10px 12px;display:flex;flex-direction:column;gap:2px}
  .msgs{max-height:340px;overflow:auto;display:flex;flex-direction:column;gap:8px;padding:8px;background:#F4F8FB;border-radius:10px;border:1px solid var(--line)}
  .msg{max-width:85%;background:#fff;border:1px solid var(--line);border-radius:12px;padding:8px 10px;font-size:.92rem}
  .msg.me{align-self:flex-end;background:#E3F6F2;border-color:#bfe8de}
  .msg span{display:block;font-size:.72rem;margin-top:3px}
  .pill{display:inline-block;background:#14A38B;color:#fff;border-radius:999px;padding:1px 8px;font-size:.75rem;vertical-align:middle;font-family:'Public Sans',sans-serif}
  ul.plain{margin:0;padding-left:18px} ul.plain li{margin:3px 0}
  .trade .bar{grid-template-columns:minmax(0,1.3fr) minmax(40px,1fr) auto}
  .trade .bar .num{font-size:.82rem;text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}
  .trade .stat b{font-size:1.5rem}
  @media (max-width:560px){ .trade .bar{grid-template-columns:minmax(0,1fr) 56px auto;gap:6px} .trade .bar .num{font-size:.76rem} }
  .bar.blur{filter:blur(3px);user-select:none}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
`; document.head.appendChild(st); })();

/* =====================================================================
   Global Trade Finder · módulos 7-9 (oct 2026)
   7. Aranceles y requisitos por país (fuentes oficiales gratuitas + acuerdos de Colombia)
   8. Calificaciones entre empresas (solo tras haber tenido contacto)
   9. CRM sencillo: seguimiento de prospectos por etapas
   ===================================================================== */
Object.assign(T.es, {
  ar_title:"Aranceles y requisitos", ar_lead:"Para {p} en {c}.",
  ar_tariff:"Arancel de importación", ar_tariff_d:"Consulte el arancel exacto de {c} para el código {h} en estas fuentes oficiales gratuitas:",
  ar_macmap:"Market Access Map (ITC – ONU/OMC): aranceles, requisitos y medidas por país", ar_tao:"Tariff Analysis Online (OMC): aranceles aplicados",
  ar_fta:"Acuerdo comercial con Colombia", ar_fta_yes:"Colombia tiene acuerdo comercial vigente con {c} ({a}). Su producto puede entrar con arancel preferencial si cumple las reglas de origen y lleva certificado de origen.",
  ar_fta_no:"Colombia no tiene un acuerdo comercial vigente con {c}: normalmente se paga el arancel general.", ar_fta_src:"Confirme en tlc.gov.co (Ministerio de Comercio).",
  ar_req:"Requisitos que suelen pedir", ar_req_note:"Orientación general. Confirme siempre con la autoridad del país de destino o con su agente de aduanas.",
  ar_co:"Trámites en Colombia", ar_vuce:"VUCE: vistos buenos y registros de importación/exportación", ar_dian:"DIAN: arancel colombiano, declaración y certificado de origen",
  ar_proco:"ProColombia: asesoría gratuita para exportar", ar_invima:"INVIMA: registro sanitario (alimentos, medicamentos, cosméticos, dispositivos médicos)", ar_ica:"ICA: certificados fitosanitarios y zoosanitarios",
  rq_all:"Factura comercial, lista de empaque y documento de transporte (conocimiento de embarque o guía aérea)", rq_origin:"Certificado de origen (para usar el arancel preferencial de un acuerdo)",
  rq_agro:"Certificado fitosanitario o zoosanitario del país de origen y registro del exportador ante la autoridad agrícola", rq_food:"Registro o notificación sanitaria del alimento, etiquetado en el idioma del destino y, en EE. UU., registro de la planta ante la FDA",
  rq_pharma:"Registro sanitario del medicamento o producto en el país de destino (por ejemplo INVIMA, FDA, EMA) y certificado de buenas prácticas de manufactura", rq_cannabis:"Licencias de cannabis en origen y destino, permisos de exportación e importación por envío; muchos países lo prohíben",
  rq_chem:"Hoja de datos de seguridad (SDS), clasificación de mercancía peligrosa y, si aplica, permisos de sustancias controladas",
  rq_mach:"Certificaciones técnicas del destino (por ejemplo marcado CE en Europa, UL o FCC en EE. UU.) y manual en el idioma del destino",
  rq_text:"Etiqueta con composición de la fibra, país de origen e instrucciones de cuidado", rq_metal:"Certificado de ensayo o pureza y, para metales preciosos, prueba de origen lícito",
  rq_med:"Registro sanitario del dispositivo médico en el destino (por ejemplo INVIMA, FDA 510(k), marcado CE)", rq_wood:"Certificado de origen legal de la madera y tratamiento fitosanitario de embalajes (NIMF 15)",
  rt_title:"Calificaciones", rt_avg:"{a} de 5 · {n} calificaciones", rt_none:"Aún no tiene calificaciones.", rt_rate:"Calificar a esta empresa",
  rt_need:"Puede calificar a una empresa después de haberle enviado una solicitud, un mensaje o una cotización.", rt_stars:"Calificación", rt_text:"Comentario sobre la experiencia",
  rt_saved:"Calificación guardada", rt_fake:"Calificaciones ficticias de demostración", rt_mine:"Su calificación", rt_err:"Elija de 1 a 5 estrellas",
  rt_q1:"Cumplió los tiempos", rt_q2:"Calidad según lo acordado", rt_q3:"Buena comunicación",
  crm_nav:"Prospectos", crm_active:"Prospectos activos", crm_title:"Seguimiento de prospectos", crm_lead:"Las empresas con las que está negociando, por etapas. Cambie la etapa, anote el próximo paso y la fecha.",
  crm_add:"Agregar a mis prospectos", crm_added:"Agregada a sus prospectos", crm_in:"Ya está en sus prospectos", crm_empty:"Aún no tiene prospectos. Agréguelos desde el perfil de cualquier empresa.",
  crm_st_new:"Nuevo", crm_st_contact:"Contactado", crm_st_quote:"Cotización", crm_st_nego:"Negociación", crm_st_won:"Ganado", crm_st_lost:"Perdido",
  crm_next:"Próximo paso", crm_date:"Fecha", crm_value:"Valor estimado (US$)", crm_note:"Notas", crm_save:"Guardar", crm_del:"Quitar", crm_late:"Vencido",
  crm_total:"Valor en negociación", crm_won:"Ganado", crm_open:"Abrir", crm_auto:"Se agrega sola cuando envía una cotización o una solicitud.", crm_saved:"Prospecto actualizado"
});
Object.assign(T.en, {
  ar_title:"Tariffs and requirements", ar_lead:"For {p} in {c}.",
  ar_tariff:"Import tariff", ar_tariff_d:"Check the exact tariff of {c} for code {h} in these free official sources:",
  ar_macmap:"Market Access Map (ITC – UN/WTO): tariffs, requirements and measures by country", ar_tao:"Tariff Analysis Online (WTO): applied tariffs",
  ar_fta:"Trade agreement with Colombia", ar_fta_yes:"Colombia has a trade agreement in force with {c} ({a}). Your product may enter with a preferential tariff if it meets the rules of origin and carries a certificate of origin.",
  ar_fta_no:"Colombia has no trade agreement in force with {c}: the general tariff usually applies.", ar_fta_src:"Confirm at tlc.gov.co (Ministry of Trade).",
  ar_req:"Usual requirements", ar_req_note:"General guidance. Always confirm with the destination authority or your customs broker.",
  ar_co:"Procedures in Colombia", ar_vuce:"VUCE: import/export approvals and registrations", ar_dian:"DIAN: Colombian tariff, declarations and certificate of origin",
  ar_proco:"ProColombia: free export advice", ar_invima:"INVIMA: sanitary registration (food, medicines, cosmetics, medical devices)", ar_ica:"ICA: phytosanitary and animal health certificates",
  rq_all:"Commercial invoice, packing list and transport document (bill of lading or air waybill)", rq_origin:"Certificate of origin (to use an agreement's preferential tariff)",
  rq_agro:"Phytosanitary or animal health certificate from the origin country and exporter registration with the agricultural authority", rq_food:"Food sanitary registration or notification, labeling in the destination language and, in the US, FDA facility registration",
  rq_pharma:"Sanitary registration of the medicine or product in the destination (e.g. INVIMA, FDA, EMA) and GMP certificate", rq_cannabis:"Cannabis licenses in origin and destination, per-shipment export and import permits; many countries prohibit it",
  rq_chem:"Safety data sheet (SDS), dangerous goods classification and, if applicable, controlled substance permits",
  rq_mach:"Destination technical certifications (e.g. CE marking in Europe, UL or FCC in the US) and manual in the destination language",
  rq_text:"Label with fiber content, country of origin and care instructions", rq_metal:"Assay or purity certificate and, for precious metals, proof of lawful origin",
  rq_med:"Medical device registration in the destination (e.g. INVIMA, FDA 510(k), CE marking)", rq_wood:"Certificate of legal origin of the timber and phytosanitary treatment of packaging (ISPM 15)",
  rt_title:"Ratings", rt_avg:"{a} of 5 · {n} ratings", rt_none:"No ratings yet.", rt_rate:"Rate this company",
  rt_need:"You can rate a company after sending it a request, a message or a quote.", rt_stars:"Rating", rt_text:"Comment on the experience",
  rt_saved:"Rating saved", rt_fake:"Fictitious demo ratings", rt_mine:"Your rating", rt_err:"Choose 1 to 5 stars",
  rt_q1:"Met deadlines", rt_q2:"Quality as agreed", rt_q3:"Good communication",
  crm_nav:"Prospects", crm_active:"Active prospects", crm_title:"Prospect tracking", crm_lead:"The companies you are negotiating with, by stage. Change the stage, note the next step and its date.",
  crm_add:"Add to my prospects", crm_added:"Added to your prospects", crm_in:"Already in your prospects", crm_empty:"No prospects yet. Add them from any company profile.",
  crm_st_new:"New", crm_st_contact:"Contacted", crm_st_quote:"Quote", crm_st_nego:"Negotiation", crm_st_won:"Won", crm_st_lost:"Lost",
  crm_next:"Next step", crm_date:"Date", crm_value:"Estimated value (US$)", crm_note:"Notes", crm_save:"Save", crm_del:"Remove", crm_late:"Overdue",
  crm_total:"Value in negotiation", crm_won:"Won", crm_open:"Open", crm_auto:"Added automatically when you send a quote or a request.", crm_saved:"Prospect updated"
});

/* =====================================================================
   7. ARANCELES Y REQUISITOS
   ===================================================================== */
/* acuerdos comerciales vigentes de Colombia (orientativo; confirmar en tlc.gov.co) */
const CO_FTA = {
  US:"TLC Colombia – Estados Unidos", CA:"TLC Colombia – Canadá", MX:"TLC Colombia – México / Alianza del Pacífico", CL:"TLC Colombia – Chile / Alianza del Pacífico",
  PE:"Comunidad Andina / Alianza del Pacífico", EC:"Comunidad Andina", BO:"Comunidad Andina", AR:"Acuerdo CAN – Mercosur (ACE 72)", BR:"Acuerdo CAN – Mercosur (ACE 72)",
  PY:"Acuerdo CAN – Mercosur (ACE 72)", UY:"Acuerdo CAN – Mercosur (ACE 72)", GT:"TLC Triángulo Norte", SV:"TLC Triángulo Norte", HN:"TLC Triángulo Norte",
  CR:"TLC Colombia – Costa Rica", KR:"TLC Colombia – Corea", IL:"TLC Colombia – Israel", GB:"Acuerdo Colombia – Reino Unido",
  CH:"TLC Colombia – AELC (EFTA)", NO:"TLC Colombia – AELC (EFTA)", IS:"TLC Colombia – AELC (EFTA)", LI:"TLC Colombia – AELC (EFTA)", CU:"Acuerdo de alcance parcial (ACE 49)", VE:"Acuerdo de alcance parcial"
};
["DE","FR","IT","ES","NL","BE","PT","IE","AT","SE","FI","DK","PL","CZ","SK","HU","RO","BG","GR","HR","SI","EE","LV","LT","LU","MT","CY"].forEach(cc => CO_FTA[cc] = "Acuerdo Comercial Colombia – Unión Europea");
function reqList(code){
  const ch = Number(code.slice(0,2)), h = code.slice(0,4), out = ["rq_all","rq_origin"];
  if(["1211","1302","1207"].includes(h)) out.push("rq_cannabis");
  if(ch<=14) out.push("rq_agro");
  if(ch<=24) out.push("rq_food");
  if(ch===30 || ["2936","2937","2939","2941","3304"].includes(h)) out.push("rq_pharma");
  if(ch>=28 && ch<=38 && ch!==30) out.push("rq_chem");
  if(ch>=44 && ch<=46) out.push("rq_wood");
  if(ch>=50 && ch<=63) out.push("rq_text");
  if(ch===71) out.push("rq_metal");
  if(ch>=84 && ch<=89) out.push("rq_mach");
  if(h==="9018" || h==="9019" || h==="9021" || h==="9022") out.push("rq_med");
  return [...new Set(out)];
}
function tariffPanel(code, cc){
  const h = code.slice(0,4), ch = Number(code.slice(0,2));
  const link = (url, txt) => `<li><a href="${url}" target="_blank" rel="noopener">${esc(txt)}</a></li>`;
  const fta = cc==="CO" ? "" : CO_FTA[cc]
    ? `<p style="margin:0">${t("ar_fta_yes",{c:esc(cname(cc)), a:esc(CO_FTA[cc])})}</p>`
    : `<p style="margin:0">${t("ar_fta_no",{c:esc(cname(cc))})}</p>`;
  const coLinks = [link("https://www.vuce.gov.co/", t("ar_vuce")), link("https://www.dian.gov.co/", t("ar_dian")), link("https://procolombia.co/", t("ar_proco"))];
  if(ch<=24 || ch===30 || ch===33 || ["9018","9019","9021"].includes(h)) coLinks.push(link("https://www.invima.gov.co/", t("ar_invima")));
  if(ch<=14 || (ch>=44 && ch<=46)) coLinks.push(link("https://www.ica.gov.co/", t("ar_ica")));
  return `<div class="panel tariff"><h2>${t("ar_title")}</h2><p class="muted" style="margin:0 0 10px">${t("ar_lead",{p:esc(codeLabel(code)), c:esc(cname(cc))})}</p>
    <h3 style="font-size:1.05rem;margin:8px 0 4px">${t("ar_tariff")}</h3>
    <p style="margin:0 0 4px;font-size:.92rem">${t("ar_tariff_d",{c:esc(cname(cc)), h:fmtCode(h)})}</p>
    <ul class="plain">${link("https://www.macmap.org/", t("ar_macmap"))}${link("https://tao.wto.org/", t("ar_tao"))}</ul>
    ${fta?`<h3 style="font-size:1.05rem;margin:12px 0 4px">${t("ar_fta")}</h3>${fta}<p class="muted" style="margin:4px 0 0;font-size:.84rem">${t("ar_fta_src")} <a href="https://www.tlc.gov.co/" target="_blank" rel="noopener">tlc.gov.co</a></p>`:""}
    <h3 style="font-size:1.05rem;margin:12px 0 4px">${t("ar_req")}</h3><ul class="plain">${reqList(code).map(k=>`<li>${t(k)}</li>`).join("")}</ul>
    <h3 style="font-size:1.05rem;margin:12px 0 4px">${t("ar_co")}</h3><ul class="plain">${coLinks.join("")}</ul>
    <p class="muted" style="margin:10px 0 0;font-size:.82rem">${t("ar_req_note")}</p></div>`;
}

/* =====================================================================
   8. CALIFICACIONES
   ===================================================================== */
function myRatings(){ const v = store.get("ratings", []); return Array.isArray(v) ? v.filter(r => r && r.coId && r.stars>=1 && r.stars<=5) : []; }
function demoRatings(co){
  if(!co.demo) return [];
  const r = mulberry32(hashStr("rt-"+co.id)); const n = Math.floor(r()*5);
  const txt = LANG==="en" ? ["Good communication and on-time delivery.","Quality as agreed.","Some delay in the documents, but it was solved.","Recommended supplier.","Answered quickly."]
                          : ["Buena comunicación y entrega a tiempo.","Calidad según lo acordado.","Hubo demora en los documentos, pero se resolvió.","Proveedor recomendado.","Respondieron rápido."];
  return Array.from({length:n}, (_,i) => ({ stars: 3 + Math.floor(r()*3), text: pick(r, txt), fake:true }));
}
const hadContact = (coId) => store.get("requests",[]).some(q => q.coId===coId) || threads().some(t => t.coId===coId && t.msgs.some(m=>m.me)) || myQuotes().some(q => q.coId===coId);
function ratingSection(co){
  if(co.mine) return "";
  const all = [...demoRatings(co), ...myRatings().filter(r => r.coId===co.id)];
  const avg = all.length ? (all.reduce((s,r)=>s+r.stars,0)/all.length).toFixed(1) : null;
  const star = (n) => `<span class="stars" aria-label="${n}/5">${"★".repeat(n)}${"☆".repeat(5-n)}</span>`;
  const mine = myRatings().find(r => r.coId===co.id);
  return `<div class="panel"><h2>${t("rt_title")}</h2>
    ${avg?`<p style="margin:0 0 8px">${star(Math.round(avg))} <b>${t("rt_avg",{a:avg.replace(".", LANG==="en"?".":","), n:all.length})}</b></p>`:`<p class="muted" style="margin:0 0 8px">${t("rt_none")}</p>`}
    ${all.slice(0,6).map(r=>`<div style="border-top:1px solid var(--line);padding:6px 0">${star(r.stars)} <span style="font-size:.9rem">${esc(r.text||"")}</span>${r.fake?"":` <span class="mine">${t("rt_mine")}</span>`}</div>`).join("")}
    ${all.some(r=>r.fake)?`<p class="muted" style="font-size:.8rem;margin:6px 0 0">${t("rt_fake")}</p>`:""}
    <button class="btn btn-ghost btn-sm" id="b-rate" style="margin-top:10px">${mine?t("cat_edit"):t("rt_rate")}</button></div>`;
}
function openRate(co){
  if(gateP("send","w_rfq")) return;
  if(!ACC){ toast(t("need_account")); go("registro"); return; }
  if(!hadContact(co.id)){ modal(`<h2>${t("rt_rate")}</h2><p>${t("rt_need")}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`); return; }
  const prev = myRatings().find(r => r.coId===co.id) || {};
  modal(`<h2>${t("rt_rate")}</h2><p class="muted" style="margin-top:0">${esc(co.name)}</p><form id="rtform" class="stack" novalidate>
    <fieldset class="rtstars"><legend>${t("rt_stars")}</legend>${[1,2,3,4,5].map(n=>`<label><input type="radio" name="rt" value="${n}" ${prev.stars===n?"checked":""}> ${"★".repeat(n)}</label>`).join("")}</fieldset>
    <div class="err" id="e-rt"></div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">${["rt_q1","rt_q2","rt_q3"].map(k=>`<label class="check"><input type="checkbox" data-rtq="${k}" ${prev.tags?.includes(k)?"checked":""}><span>${t(k)}</span></label>`).join("")}</div>
    <div class="field"><label for="rt-text">${t("rt_text")}</label><textarea id="rt-text" maxlength="600">${esc(prev.text||"")}</textarea></div>
    <div class="acts"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button type="submit" class="btn btn-main">${t("send")}</button></div></form>`, (m) => {
    $("#rtform",m).onsubmit = (e) => { e.preventDefault();
      const v = Number(($("input[name=rt]:checked",m)||{}).value); if(!(v>=1 && v<=5)){ $("#e-rt",m).textContent = t("rt_err"); return; }
      const tags = $$("[data-rtq]",m).filter(x=>x.checked).map(x=>x.dataset.rtq);
      const r = { coId:co.id, stars:v, tags, text:$("#rt-text",m).value.trim(), at:new Date().toISOString(), by:ULEVEL };
      store.set("ratings", [r, ...myRatings().filter(x => x.coId!==co.id)].slice(0,500)); closeModal(); toast(t("rt_saved")); render(); };
  });
}

/* =====================================================================
   9. CRM DE PROSPECTOS
   ===================================================================== */
const STAGES = ["new","contact","quote","nego","won","lost"];
function prospects(){ const v = store.get("crm", []); return Array.isArray(v) ? v.filter(p => p && p.coId && STAGES.includes(p.stage)) : []; }
function addProspect(co, stage, silent){
  if(!ACC || !co || co.mine) return;
  const list = prospects(); const i = list.findIndex(p => p.coId===co.id);
  if(i>=0){ if(stage && STAGES.indexOf(stage) > STAGES.indexOf(list[i].stage) && !["won","lost"].includes(list[i].stage)){ list[i].stage = stage; list[i].upd = new Date().toISOString(); store.set("crm", list); } if(!silent) toast(t("crm_in")); return; }
  list.unshift({ coId:co.id, coName:co.name, cc:co.cc, stage: stage||"new", next:"", date:"", value:"", note:"", upd:new Date().toISOString() });
  store.set("crm", list.slice(0,500)); if(!silent) toast(t("crm_added"));
}
function vCRM(){
  if(!PAID()) return `<div class="wrap page"><div class="empty"><b>${t("gate_title")}</b>${t("gate_msg",{what:t("crm_title").toLowerCase()})}<p><a class="btn btn-main" href="#planes">${t("see_plans")}</a></p></div></div>`;
  if(!ACC) return `<div class="wrap page"><div class="empty"><b>${t("crm_title")}</b>${t("no_profile")}<p><a class="btn btn-main" href="#registro">${t("create_profile")}</a></p></div></div>`;
  if(!can("contacts")) return `<div class="wrap page"><div class="empty"><b>${t("perm_title")}</b>${t("perm_msg",{lvl:t("lvl_"+ULEVEL), what:t("crm_title").toLowerCase()})}</div></div>`;
  const list = prospects(), today = todayISO();
  const sum = (arr) => arr.reduce((s,p)=>s+(Number(p.value)||0),0);
  const open = list.filter(p => !["won","lost"].includes(p.stage)), won = list.filter(p => p.stage==="won");
  const card = (p) => { const late = p.date && p.date < today && !["won","lost"].includes(p.stage);
    return `<div class="crmcard ${late?"late":""}"><a href="#empresa-${esc(p.coId)}"><b>${esc(p.coName)}</b></a> ${ccTag(p.cc)}
      ${p.next?`<div style="font-size:.86rem">${t("crm_next")}: ${esc(p.next)}</div>`:""}
      ${p.date?`<div class="muted" style="font-size:.82rem">${esc(p.date)}${late?` · <b style="color:var(--danger)">${t("crm_late")}</b>`:""}</div>`:""}
      ${p.value?`<div style="font-size:.86rem">US$ ${Number(p.value).toLocaleString(LANG==="en"?"en-US":"es-CO")}</div>`:""}
      <button class="linkbtn" data-crm="${esc(p.coId)}" style="margin-top:4px">${t("crm_open")}</button></div>`; };
  return `<div class="wrap page">${crumbs([{label:t("acc_title"),href:"#cuenta"},{label:t("crm_title")}])}
    <h1>${t("crm_title")}</h1><p class="lead">${t("crm_lead")}</p><p class="muted" style="font-size:.88rem">${t("crm_auto")}</p>
    <div class="stats" style="grid-template-columns:repeat(3,1fr);margin:12px 0"><div class="stat"><b>${open.length}</b><span>${t("crm_active")}</span></div>
      <div class="stat"><b class="num">US$ ${sum(open).toLocaleString(LANG==="en"?"en-US":"es-CO")}</b><span>${t("crm_total")}</span></div>
      <div class="stat"><b class="num">US$ ${sum(won).toLocaleString(LANG==="en"?"en-US":"es-CO")}</b><span>${t("crm_won")}</span></div></div>
    ${list.length ? `<div class="crmboard">${STAGES.map(s => { const items = list.filter(p => p.stage===s);
      return `<div class="crmcol"><h3>${t("crm_st_"+s)} · ${items.length}</h3>${items.map(card).join("")}</div>`; }).join("")}</div>`
      : `<div class="empty"><b>${t("crm_empty")}</b><p><a class="btn btn-main" href="#empresas">${t("nav_companies")}</a></p></div>`}</div>`;
}
function bindCRM(){ $$("[data-crm]").forEach(b => b.onclick = () => openProspect(b.dataset.crm)); }
function openProspect(coId){
  const list = prospects(); const p = list.find(x => x.coId===coId); if(!p) return;
  modal(`<h2>${esc(p.coName)}</h2><form id="crmform" class="fields" novalidate>
    <div class="field"><label for="cr-stage">${t("bill_status")}</label><select id="cr-stage">${STAGES.map(s=>`<option value="${s}" ${p.stage===s?"selected":""}>${t("crm_st_"+s)}</option>`).join("")}</select></div>
    <div class="field"><label for="cr-value">${t("crm_value")}</label><input id="cr-value" type="number" min="0" max="1000000000" value="${esc(p.value||"")}"></div>
    <div class="field"><label for="cr-next">${t("crm_next")}</label><input id="cr-next" maxlength="140" value="${esc(p.next||"")}"></div>
    <div class="field"><label for="cr-date">${t("crm_date")}</label><input id="cr-date" type="date" value="${esc(p.date||"")}"></div>
    <div class="field full"><label for="cr-note">${t("crm_note")}</label><textarea id="cr-note" maxlength="2000">${esc(p.note||"")}</textarea></div>
    <div class="acts full"><button type="button" class="btn btn-ghost" id="cr-del" style="color:var(--danger)">${t("crm_del")}</button><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button type="submit" class="btn btn-main">${t("crm_save")}</button></div></form>`, (m) => {
    $("#crmform",m).onsubmit = (e) => { e.preventDefault();
      const v = $("#cr-value",m).value, n = Number(v); const date = $("#cr-date",m).value;
      Object.assign(p, { stage:$("#cr-stage",m).value, value: v!=="" && Number.isFinite(n) && n>=0 && n<=1e9 ? String(Math.round(n)) : "", next:$("#cr-next",m).value.trim(),
        date: /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "", note:$("#cr-note",m).value.trim(), upd:new Date().toISOString() });
      store.set("crm", list); closeModal(); toast(t("crm_saved")); render(); };
    $("#cr-del",m).onclick = () => { store.set("crm", list.filter(x => x.coId!==coId)); closeModal(); render(); };
  });
}

/* estilos */
(() => { const st = document.createElement("style"); st.textContent = `
  .stars{color:#E2A400;letter-spacing:1px}
  fieldset.rtstars{border:1px solid var(--line);border-radius:10px;padding:8px 12px;display:flex;flex-wrap:wrap;gap:10px}
  fieldset.rtstars label{color:#E2A400;cursor:pointer}
  .crmboard{display:grid;grid-template-columns:repeat(6,minmax(170px,1fr));gap:10px;overflow-x:auto;padding-bottom:6px}
  .crmcol{background:#E8F1FA;border-radius:12px;padding:10px;min-height:120px;display:flex;flex-direction:column;gap:8px}
  .crmcol h3{font-size:1rem;margin:0}
  .crmcard{background:#fff;border:1px solid var(--line);border-radius:10px;padding:8px 10px;font-size:.92rem;overflow-wrap:anywhere}
  .crmcard a{color:var(--text);text-decoration:none} .crmcard.late{border-color:#E7A1A1}
  @media (max-width:900px){ .crmboard{grid-template-columns:1fr} }
`; document.head.appendChild(st); })();

/* Português (Brasil) — interface. Nomes de produtos HS usam o espanhol quando não há tradução. */
T.pt = Object.assign(T.pt || {}, {"err_qty": "Digite uma quantidade entre 1 e 10.000.000", "demo_try": "Experimentar a demonstração:", "demo_obs": "Observador", "demo_on": "Você está na demonstração com a conta demo@skynetgenesis.com.", "demo_exit": "Sair da demonstração", "showing_last": "Exibindo as 100 mais recentes.", "plan_free": "Cadastro gratuito (observador)", "plan_free_who": "Apenas para conhecer a plataforma", "pf1": "Navegar por mercados, países e códigos HS", "pf2": "Consultar o diretório de empresas", "pf3": "Sem perfil de empresa nem dados de contato", "pf4": "Sem alertas, buscas salvas, solicitações nem exportação", "obs_title": "Cadastro gratuito de observador", "obs_lead": "Com o cadastro gratuito você pode navegar e consultar a plataforma. Para criar o perfil da sua empresa, salvar buscas, criar alertas, enviar solicitações, ver contatos ou exportar, é necessário um plano de assinatura.", "obs_name": "Nome completo", "obs_save": "Criar cadastro gratuito", "obs_saved": "Cadastro gratuito criado. Você já pode navegar pela plataforma.", "gate_title": "Disponível nos planos de assinatura", "gate_msg": "Sem um plano pago (visitante ou observador) você pode navegar e consultar, mas não pode {what}. Para isso, escolha um plano Comprador, Fornecedor ou Comprador e fornecedor.", "w_profile": "criar o perfil da sua empresa", "w_save": "salvar buscas", "w_alert": "criar alertas", "w_rfq": "enviar solicitações nem ofertas", "w_export": "exportar resultados", "nav_signup": "Cadastre-se grátis", "acc_observer": "Conta de observador", "obs_locked": "As buscas salvas, os alertas e as solicitações estão incluídos nos planos de assinatura.", "create_profile": "Criar o perfil da minha empresa", "no_profile": "Seu plano permite criar o perfil da sua empresa no diretório.", "nav_search": "Buscar", "nav_markets": "Mercados", "nav_hs": "Códigos HS", "nav_companies": "Empresas", "nav_plans": "Planos", "nav_account": "Minha conta", "nav_register": "Cadastrar empresa", "demo_strip": "<b>Versão de demonstração.</b> As empresas exibidas são fictícias e seus dados são gerados para testes. O que você cadastrar é salvo apenas neste navegador.", "eyebrow": "Global Trade Search & Intelligence", "hero_lead": "Encontre compradores e fornecedores em mais de 80 países. Navegue do continente ao país, setor, produto e código tarifário HS até chegar às empresas que comercializam o que você vende ou precisa.", "tab_buyers": "Buscar compradores", "tab_suppliers": "Buscar fornecedores", "tab_products": "Buscar produtos", "tab_markets": "Explorar mercados", "ph_buyers": "Produto, código HS ou país. Ex.: café verde, 080440, Alemanha", "ph_suppliers": "O que você precisa comprar? Ex.: painéis solares, 6212, Vietnã", "ph_products": "Nome do produto ou código HS. Ex.: abacate, 0901", "ph_markets": "País ou região. Ex.: Países Baixos, Sudeste Asiático", "btn_search": "Buscar", "popular": "Buscas frequentes:", "path_title": "Caminho de navegação", "lv_cont": "Continente", "lv_sub": "Sub-região", "lv_country": "País", "lv_sector": "Setor", "lv_product": "Produto", "lv_hs": "Código HS", "lv_comp": "Empresas", "st_countries": "países e territórios", "st_chapters": "capítulos do Sistema Harmonizado", "st_codes": "posições e subposições com empresas", "st_companies": "empresas no diretório", "sec_continents": "Explore por continente", "sec_featured": "Mercados em destaque", "sec_popular_hs": "Produtos mais buscados", "buyers": "Compradores", "suppliers": "Fornecedores", "buyer": "Comprador", "supplier": "Fornecedor", "both": "Comprador e fornecedor", "companies": "Empresas", "countries": "países", "subregions": "sub-regiões", "results": "Resultados", "results_for": "para", "no_results": "Não encontramos resultados", "no_results_hint": "Tente outra palavra, um código HS mais curto (por exemplo 0901 em vez de 090111) ou remova filtros.", "filters": "Filtros", "f_region": "Continente", "f_sub": "Sub-região", "f_country": "País", "f_sector": "Setor", "f_hs": "Código HS", "f_role": "Perfil", "f_verified": "Somente empresas verificadas", "f_all": "Todos", "f_clear": "Limpar filtros", "f_sort": "Ordenar", "sort_rel": "Relevância", "sort_name": "Nome", "sort_active": "Atividade recente", "sort_size": "Porte", "save_search": "Salvar busca", "saved_ok": "Busca salva em Minha conta", "export": "Exportar", "create_alert": "Criar alerta", "view_profile": "Ver perfil", "verified": "Verificada", "demo": "Fictícia (demo)", "fake_note": "Empresa fictícia de demonstração: o nome, o e-mail, o telefone e o site não existem. As empresas reais aparecerão quando se cadastrarem na versão com servidor.", "yours": "Sua empresa", "founded": "Fundada", "employees": "Funcionários", "volume": "Volume anual", "active": "Última atividade", "days": "dias", "today": "hoje", "about": "Sobre a empresa", "products": "Produtos e códigos HS", "markets_served": "Mercados", "sourcing_from": "Compra em", "selling_to": "Vende para", "certs": "Certificações", "incoterms": "Incoterms habituais", "contact": "Contato", "contact_dept": "Área", "email": "E-mail", "phone": "Telefone", "website": "Site", "locked_title": "Dados de contato reservados para assinantes", "locked_buyers": "Para ver o contato dos compradores, você precisa do plano Fornecedor ou Comprador e fornecedor.", "locked_suppliers": "Para ver o contato dos fornecedores, você precisa do plano Comprador ou Comprador e fornecedor.", "see_plans": "Ver planos", "request_contact": "Solicitar contato", "send_rfq": "Enviar solicitação de cotação", "send_offer": "Enviar oferta", "rfq_title": "Solicitação de cotação", "offer_title": "Oferta comercial", "rfq_product": "Produto (código HS)", "rfq_qty": "Quantidade", "rfq_unit": "Unidade", "rfq_incoterm": "Incoterm", "rfq_dest": "Porto ou cidade de destino", "rfq_msg": "Mensagem", "rfq_note": "Na versão de demonstração, a solicitação é salva em Minha conta e não é enviada à empresa.", "cancel": "Cancelar", "save": "Salvar", "close": "Fechar", "send": "Salvar solicitação", "rfq_ok": "Solicitação salva em Minha conta", "need_account": "Primeiro crie o perfil da sua empresa para enviar solicitações e alertas.", "country_suppliers": "Fornecedores em", "country_buyers": "Compradores em", "top_hs": "Principais códigos HS", "by_sector": "Empresas por setor", "select_sector": "Escolha um setor", "all_sectors": "Todos os setores", "products_in": "Produtos em", "hs_title": "Sistema Harmonizado (HS 2022)", "hs_lead": "A classificação internacional de mercadorias da Organização Mundial das Alfândegas: 21 seções, 96 capítulos, posições de 4 dígitos e subposições de 6 dígitos. Busque um código ou navegue por seção.", "hs_search_ph": "Código ou descrição. Ex.: 0603, flores, aço", "section": "Seção", "chapter": "Capítulo", "heading": "Posição", "subheading": "Subposição", "chapters": "capítulos", "hs_no_codes": "Este capítulo ainda não tem posições carregadas com empresas na versão de demonstração.", "where_trade": "Onde se comercializa", "world": "Mundo", "companies_with": "empresas com este código", "markets_title": "Mercados do mundo", "markets_lead": "Escolha um continente, depois a sub-região e o país para ver seus compradores e fornecedores por setor e produto.", "dir_title": "Diretório de empresas", "dir_lead": "Compradores e fornecedores cadastrados. Use os filtros para encontrar parceiros por país, setor e código HS.", "plans_title": "Planos de assinatura", "plans_lead": "O cadastro gratuito é de observador: você navega e consulta a plataforma. Assine como comprador, fornecedor ou ambos para criar o perfil da sua empresa, ver contatos, enviar solicitações e receber alertas de oportunidades.", "plan_buyer_who": "Encontre fornecedores", "plan_supplier_who": "Encontre compradores", "plan_both_who": "Acesso completo", "price_free": "Grátis", "price_quote": "Preço em skynetgenesis.com", "recommended": "Recomendado", "current": "Plano atual", "pb1": "Contato completo dos fornecedores", "pb2": "Solicitações de cotação sem limite", "pb3": "10 alertas de novos fornecedores", "pb4": "Exportação de resultados", "ps1": "Contato completo dos compradores", "ps2": "Perfil em destaque nas buscas", "ps3": "10 alertas de novos compradores", "ps4": "Ofertas comerciais sem limite", "pa1": "Tudo do Comprador e do Fornecedor", "pa2": "Alertas ilimitados", "pa3": "Relatórios por país e código HS", "pa4": "Suporte prioritário por WhatsApp", "hire": "Contratar", "try_demo": "Experimentar este plano (demo)", "demo_plan_on": "Plano de demonstração ativado:", "using_free": "Você está usando o cadastro gratuito.", "reg_title": "Cadastrar empresa", "reg_edit": "Editar minha empresa", "reg_lead": "Sua empresa aparecerá no diretório e você poderá buscar, salvar buscas, criar alertas e enviar solicitações.", "reg_profile": "Como você participa do comércio internacional?", "reg_buyer_d": "Importa ou compra insumos e produtos", "reg_supplier_d": "Exporta ou vende produtos", "reg_both_d": "Compra e vende", "r_name": "Nome da empresa", "r_taxid": "Identificação fiscal (NIT, RUT, VAT, CNPJ…)", "r_country": "País", "r_city": "Cidade", "r_sector": "Setor principal", "r_hs": "Produtos ou códigos HS", "r_hs_ph": "Digite e escolha. Ex.: café, 0901", "r_web": "Site", "r_contact": "Pessoa de contato", "r_role": "Cargo", "r_email": "E-mail", "r_phone": "Telefone / WhatsApp", "r_desc": "Descrição breve", "r_markets": "Mercados de interesse", "r_accept": "Aceito os termos de uso e autorizo o tratamento dos dados da minha empresa.", "r_save": "Salvar empresa", "r_saved": "Empresa cadastrada. Ela já aparece no diretório.", "r_updated": "Dados atualizados", "choose": "Escolha…", "err_req": "Este dado é obrigatório", "err_email": "Digite um e-mail válido, por exemplo vendas@empresa.com", "err_hs": "Adicione pelo menos um produto ou código HS", "err_accept": "É preciso aceitar para continuar", "err_profile": "Escolha um perfil", "acc_title": "Minha conta", "acc_none": "Você ainda não cadastrou sua empresa", "acc_none_d": "O cadastro é gratuito e leva dois minutos.", "my_company": "Minha empresa", "my_plan": "Meu plano", "saved_searches": "Buscas salvas", "alerts": "Alertas", "requests": "Solicitações enviadas", "none_saved": "Você ainda não tem buscas salvas.", "none_alerts": "Você ainda não tem alertas.", "none_requests": "Você ainda não enviou solicitações de cotação nem de contato. As cotações que você envia ficam em Mensagens e no Acompanhamento de prospectos.", "run": "Abrir", "del": "Excluir", "edit": "Editar", "logout": "Sair desta conta", "logout_confirm": "Tem certeza? Seu cadastro, sua empresa, buscas, alertas e solicitações serão apagados deste navegador.", "yes_delete": "Sim, apagar", "matches_now": "correspondências hoje", "alert_title": "Novo alerta", "alert_lead": "Avisaremos você quando surgirem novas empresas que correspondam.", "alert_what": "Buscar", "alert_name": "Nome do alerta", "alert_freq": "Frequência", "daily": "Diária", "weekly": "Semanal", "alert_ok": "Alerta criado", "alert_limit": "Você atingiu o limite de alertas do seu plano.", "limit_req": "Você atingiu o limite de 3 solicitações do cadastro gratuito neste mês.", "export_title": "Exportar resultados", "export_lead": "Pré-visualização do relatório. Inclui até 200 linhas.", "copy": "Copiar tabela", "copied": "Tabela copiada", "download_csv": "Baixar CSV", "print": "Imprimir ou salvar PDF", "export_locked": "A exportação está incluída nos planos de assinatura.", "generated": "Gerado em", "report_by": "Relatório gerado pelo Global Trade Finder, um aplicativo da SkyNet Genesis", "footer": "© {y} Global Trade Finder · Um aplicativo da SkyNet Genesis · contacto@skynetgenesis.com · WhatsApp 304 437 5758", "terms": "Termos", "privacy": "Dados pessoais", "support": "Suporte", "back": "Voltar", "home": "Início", "all": "Todos", "more": "Ver mais", "showing": "Exibindo", "of": "de", "terms_title": "Termos de uso", "privacy_title": "Tratamento de dados pessoais", "emp_1": "1 a 10", "emp_2": "11 a 50", "emp_3": "51 a 200", "emp_4": "201 a 1.000", "emp_5": "Mais de 1.000", "vol_1": "Menos de US$ 500 mil", "vol_2": "US$ 500 mil a 2 milhões", "vol_3": "US$ 2 a 10 milhões", "vol_4": "US$ 10 a 50 milhões", "vol_5": "Mais de US$ 50 milhões", "d_sup": "Empresa {sec} de {city}, {country}. Exporta {prod} para {mk}. Trabalha com {inc}.", "d_buy": "Empresa {sec} de {city}, {country}. Importa {prod} com compras recorrentes. Procura fornecedores com {cert}.", "d_both": "Empresa {sec} de {city}, {country}. Comercializa {prod} e compra insumos no exterior.", "dept_sup": "Gerência comercial de exportações", "dept_buy": "Departamento de compras internacionais", "ent_kind": "do setor", "fixed_for": "Exibimos resultados para", "fixed_typed": "Você digitou", "demo_note": "Dados de demonstração: as empresas são fictícias. Na versão com servidor aparecerão empresas reais cadastradas.", "refine": "Digite uma palavra mais precisa para refinar a lista.", "maybe": "Talvez você procure:", "per_month": "/ mês", "users_incl": "Usuários ilimitados, sem custo por usuário.", "monthly_value": "Valor mensal", "users_count": "Usuários: {a} · ilimitados, sem custo adicional", "lvl_title": "Nível de usuário", "lvl_demo": "Nível de usuário:", "lvl_admin": "Administrador", "lvl_director": "Diretor comercial", "lvl_asesor": "Consultor comercial", "lvl_analista": "Analista de mercados", "lvl_consulta": "Somente consulta", "lvl_admin_d": "Gerencia usuários, plano e pagamentos, e o perfil da empresa. Vê e faz tudo.", "lvl_director_d": "Vê contatos, envia solicitações e ofertas, aprova as dos consultores e exporta relatórios.", "lvl_asesor_d": "Busca empresas, vê contatos e prepara solicitações e ofertas, que ficam pendentes de aprovação.", "lvl_analista_d": "Estuda mercados, salva buscas, cria alertas e exporta relatórios. Não vê contatos nem envia nada.", "lvl_consulta_d": "Consulta o diretório e os mercados. Não vê contatos nem realiza ações.", "perm_title": "Não disponível para o seu nível de usuário", "perm_msg": "Seu nível de usuário ({lvl}) não permite {what}. Se precisar, solicite ao administrador da sua empresa.", "w_contacts": "ver dados de contato", "w_approve": "aprovar solicitações", "w_users": "gerenciar usuários", "w_billing": "ver o plano e os pagamentos", "team": "Usuários da empresa", "team_add": "Adicionar usuário", "team_email": "E-mail do usuário", "team_level": "Nível", "team_added": "Usuário adicionado", "team_removed": "Usuário removido", "team_you": "Você", "team_note": "Na versão real, cada usuário recebe um convite por e-mail e cria a própria senha.", "team_dup": "Esse e-mail já está na lista", "team_remove": "Remover", "billing": "Plano e pagamentos", "paid_until": "Pago até", "bill_status": "Status", "st_active": "Ativa", "st_demo": "Demonstração sem cobrança", "pay_bold": "Pagar online com Bold", "bold_demo_title": "Pagamento online com Bold", "bold_demo_msg": "Na demonstração não há cobrança. Na versão real, este botão abre o gateway seguro da Bold (cartão, PSE, Nequi e outros meios) e, quando o pagamento é aprovado, a conta da empresa fica em dia automaticamente, sem envio de comprovantes.", "bill_other": "O plano e os pagamentos são gerenciados pelo administrador da sua empresa.", "status_sent": "Enviada", "status_pending": "Aguardando aprovação", "status_rejected": "Rejeitada", "to_approve": "Solicitações a aprovar", "approve": "Aprovar", "reject": "Rejeitar", "approved_ok": "Solicitação aprovada e enviada", "rejected_ok": "Solicitação rejeitada", "none_pending": "Não há solicitações a aprovar.", "rfq_pending_ok": "Solicitação salva. Ficou pendente de aprovação do diretor comercial.", "by": "Preparada por", "back_exit": "Toque em \"voltar\" novamente para sair do Global Trade Finder.", "how_title": "Para que serve à sua empresa?", "how1_t": "Vender para o exterior", "how1_d": "Encontre compradores do seu produto em outros países e envie uma oferta a eles.", "how1_b": "Buscar compradores", "how2_t": "Comprar do exterior", "how2_d": "Encontre fornecedores do que você precisa e peça uma cotação a eles.", "how2_b": "Buscar fornecedores", "how3_t": "Estudar mercados", "how3_d": "Antes de exportar, veja em quais países seu produto é comprado e quantas empresas existem.", "how3_b": "Explorar mercados", "how_steps": "1. Busque por produto ou código HS · 2. Revise o perfil da empresa · 3. Envie sua oferta ou solicitação · 4. Receba alertas de novas oportunidades", "nav_opps": "Demandas", "tr_title": "Comércio mundial real", "tr_src": "Fonte: UN Comtrade (ONU), ano {y}. Números oficiais informados por cada país, em dólares (US$). Alguns países ainda não informaram esse ano.", "tr_imp": "Importações mundiais", "tr_exp": "Exportações mundiais", "tr_ncty": "{n} países informaram", "tr_top_imp": "Países que mais compram", "tr_top_exp": "Países que mais vendem", "tr_co": "Colômbia", "tr_co_imp": "A Colômbia importou", "tr_co_exp": "A Colômbia exportou", "tr_none": "Não há números da UN Comtrade para este produto.", "tr_lock": "Com um plano pago você vê os 15 principais países compradores e vendedores, e a posição da Colômbia.", "tr_cty_title": "Comércio real de {c}", "tr_cty_imp": "Produtos em que {c} está entre os maiores compradores do mundo", "tr_cty_exp": "Produtos em que {c} está entre os maiores vendedores do mundo", "tr_cty_none": "{c} não aparece entre os 15 principais países de nenhum produto nos números disponíveis.", "tr_rank": "{r}º lugar no mundo", "tr_here": "{c} neste produto", "vf_title": "Verificação da empresa", "vf_none": "Sua empresa ainda não foi verificada. As empresas verificadas aparecem primeiro e geram mais confiança.", "vf_rut": "RUT (PDF ou imagem)", "vf_cc": "Certificado da Câmara de Comércio (com no máximo 30 dias)", "vf_send": "Enviar documentos para análise", "vf_review": "Documentos em análise pela SkyNet Genesis.", "vf_ok": "Empresa verificada pela SkyNet Genesis.", "vf_rej": "Documentos rejeitados: {why}. Você pode enviá-los novamente.", "vf_need": "Anexe os dois documentos.", "vf_sent": "Documentos enviados para análise", "vf_sim": "Simular aprovação da SkyNet Genesis (somente demonstração)", "vf_note": "Na versão com servidor, a equipe da SkyNet Genesis analisa os documentos e somente então a empresa recebe o selo \"Verificada\".", "cat_title": "Catálogo de produtos", "cat_add": "Adicionar produto", "cat_name": "Nome do produto", "cat_code": "Código HS", "cat_desc": "Descrição e especificações", "cat_moq": "Pedido mínimo", "cat_unit": "Unidade", "cat_pmin": "Preço de referência a partir de (US$)", "cat_pmax": "até (US$)", "cat_certs": "Certificações", "cat_img": "Foto (opcional)", "cat_save": "Salvar produto", "cat_empty": "Você ainda não tem produtos no catálogo.", "cat_price_neg": "Preço a combinar", "cat_moq_l": "Pedido mínimo", "cat_del": "Excluir", "cat_edit": "Editar", "cat_err_name": "Digite o nome do produto", "cat_err_code": "Escolha um código HS", "cat_max": "Máximo de 30 produtos.", "cat_fake": "Produto fictício de demonstração", "cat_saved": "Produto salvo", "msg_title": "Mensagens", "msg_send": "Enviar mensagem", "msg_new": "Escrever mensagem", "msg_ph": "Digite sua mensagem…", "msg_empty": "Você ainda não tem conversas.", "msg_auto": "Resposta automática de demonstração: esta empresa é fictícia. Na versão com servidor, aqui chega a resposta da empresa real.", "msg_open": "Abrir", "msg_with": "Conversa com {c}", "msg_unread": "{n} não lidas", "op_title": "Demandas de compra", "op_lead": "Compradores que publicam o que precisam. Os fornecedores enviam a eles sua cotação.", "op_post": "Publicar uma demanda", "op_quote": "Cotar", "op_qty": "Quantidade", "op_dest": "Destino", "op_deadline": "Recebe cotações até", "op_buyer": "Comprador", "op_hidden": "Comprador em {c} (o nome é exibido com um plano pago)", "op_details": "Detalhes", "op_mine": "Minhas demandas", "op_quotes": "{n} cotações", "op_search": "Buscar produto ou código HS", "op_all": "Todos os destinos", "op_none": "Não há demandas com esses filtros.", "op_price": "Preço unitário (US$)", "op_lead_t": "Prazo de entrega (dias)", "op_sent": "Cotação enviada", "op_posted": "Demanda publicada", "op_pending": "Aguardando aprovação", "op_approve": "Aprovar e publicar", "op_need_buyer": "Para publicar demandas você precisa do plano Comprador ou Comprador e fornecedor.", "op_need_sup": "Para cotar você precisa do plano Fornecedor ou Comprador e fornecedor.", "op_fake": "Demanda fictícia de demonstração", "op_myq": "Cotações enviadas", "op_closed": "Encerrada", "op_days": "{n} dias", "op_err_qty": "Digite uma quantidade válida", "op_err_price": "Digite um preço válido", "sg_title": "Sugestões para a sua empresa", "sg_lead": "Com base nos produtos do seu perfil.", "sg_reqs": "Demandas que você pode cotar", "sg_buyers": "Compradores dos seus produtos", "sg_sups": "Fornecedores do que você compra", "sg_none": "Adicione produtos ao seu perfil para receber sugestões.", "nt_title": "Avisos por e-mail", "nt_freq": "Frequência", "nt_daily": "Diário", "nt_weekly": "Semanal", "nt_off": "Desativados", "nt_email": "E-mail que recebe os avisos", "nt_save": "Salvar", "nt_saved": "Preferência salva", "nt_prev": "Ver exemplo do e-mail", "nt_note": "Os e-mails são enviados com Brevo quando a plataforma estiver funcionando no servidor. Incluem novas demandas, novas empresas dos seus produtos e respostas às suas mensagens.", "nt_subject": "Global Trade Finder · Novas oportunidades para {c}", "nt_hello": "Olá, estas são as novidades dos seus produtos:", "pf5": "Números mundiais básicos (3 principais países)", "pb5": "Números reais do comércio mundial (UN Comtrade)", "pb6": "Publicar demandas e receber cotações", "pb7": "Mensagens, verificação e avisos por e-mail", "ps5": "Números reais do comércio mundial (UN Comtrade)", "ps6": "Catálogo de produtos e cotação de demandas", "ps7": "Mensagens, verificação e avisos por e-mail", "pa5": "Cifras do comércio mundial com a série de 5 anos", "pa6": "Catálogo, demandas, mensagens e verificação", "pa7": "Sugestões automáticas e avisos por e-mail", "ar_title": "Tarifas e requisitos", "ar_lead": "Para {p} em {c}.", "ar_tariff": "Tarifa de importação", "ar_tariff_d": "Consulte a tarifa exata de {c} para o código {h} nestas fontes oficiais gratuitas:", "ar_macmap": "Market Access Map (ITC – ONU/OMC): tarifas, requisitos e medidas por país", "ar_tao": "Tariff Analysis Online (OMC): tarifas aplicadas", "ar_fta": "Acordo comercial com a Colômbia", "ar_fta_yes": "A Colômbia tem acordo comercial em vigor com {c} ({a}). Seu produto pode entrar com tarifa preferencial se cumprir as regras de origem e tiver certificado de origem.", "ar_fta_no": "A Colômbia não tem acordo comercial em vigor com {c}: normalmente se paga a tarifa geral.", "ar_fta_src": "Confirme em tlc.gov.co (Ministério do Comércio).", "ar_req": "Requisitos geralmente exigidos", "ar_req_note": "Orientação geral. Confirme sempre com a autoridade do país de destino ou com seu despachante aduaneiro.", "ar_co": "Trâmites na Colômbia", "ar_vuce": "VUCE: vistos prévios e registros de importação/exportação", "ar_dian": "DIAN: tarifa colombiana, declaração e certificado de origem", "ar_proco": "ProColombia: assessoria gratuita para exportar", "ar_invima": "INVIMA: registro sanitário (alimentos, medicamentos, cosméticos, dispositivos médicos)", "ar_ica": "ICA: certificados fitossanitários e zoossanitários", "rq_all": "Fatura comercial, romaneio de embarque e documento de transporte (conhecimento de embarque ou conhecimento aéreo)", "rq_origin": "Certificado de origem (para usar a tarifa preferencial de um acordo)", "rq_agro": "Certificado fitossanitário ou zoossanitário do país de origem e registro do exportador junto à autoridade agrícola", "rq_food": "Registro ou notificação sanitária do alimento, rotulagem no idioma do destino e, nos EUA, registro da planta na FDA", "rq_pharma": "Registro sanitário do medicamento ou produto no país de destino (por exemplo INVIMA, FDA, EMA) e certificado de boas práticas de fabricação", "rq_cannabis": "Licenças de cannabis na origem e no destino, permissões de exportação e importação por remessa; muitos países proíbem", "rq_chem": "Ficha de dados de segurança (SDS), classificação de mercadoria perigosa e, se aplicável, autorizações de substâncias controladas", "rq_mach": "Certificações técnicas do destino (por exemplo marcação CE na Europa, UL ou FCC nos EUA) e manual no idioma do destino", "rq_text": "Etiqueta com composição da fibra, país de origem e instruções de cuidado", "rq_metal": "Certificado de ensaio ou pureza e, para metais preciosos, comprovação de origem lícita", "rq_med": "Registro sanitário do dispositivo médico no destino (por exemplo INVIMA, FDA 510(k), marcação CE)", "rq_wood": "Certificado de origem legal da madeira e tratamento fitossanitário de embalagens (NIMF 15)", "rt_title": "Avaliações", "rt_avg": "{a} de 5 · {n} avaliações", "rt_none": "Ainda não tem avaliações.", "rt_rate": "Avaliar esta empresa", "rt_need": "Você pode avaliar uma empresa depois de ter enviado a ela uma solicitação, uma mensagem ou uma cotação.", "rt_stars": "Avaliação", "rt_text": "Comentário sobre a experiência", "rt_saved": "Avaliação salva", "rt_fake": "Avaliações fictícias de demonstração", "rt_mine": "Sua avaliação", "rt_err": "Escolha de 1 a 5 estrelas", "rt_q1": "Cumpriu os prazos", "rt_q2": "Qualidade conforme o combinado", "rt_q3": "Boa comunicação", "crm_nav": "Prospects", "crm_active": "Prospects ativos", "crm_title": "Acompanhamento de prospects", "crm_lead": "As empresas com as quais você está negociando, por etapas. Altere a etapa, anote o próximo passo e a data.", "crm_add": "Adicionar aos meus prospects", "crm_added": "Adicionada aos seus prospects", "crm_in": "Já está nos seus prospects", "crm_empty": "Você ainda não tem prospects. Adicione-os pelo perfil de qualquer empresa.", "crm_st_new": "Novo", "crm_st_contact": "Contatado", "crm_st_quote": "Cotação", "crm_st_nego": "Negociação", "crm_st_won": "Ganho", "crm_st_lost": "Perdido", "crm_next": "Próximo passo", "crm_date": "Data", "crm_value": "Valor estimado (US$)", "crm_note": "Observações", "crm_save": "Salvar", "crm_del": "Remover", "crm_late": "Vencido", "crm_total": "Valor em negociação", "crm_won": "Ganho", "crm_open": "Abrir", "crm_auto": "É adicionada automaticamente quando você envia uma cotação ou uma solicitação.", "crm_saved": "Prospect atualizado"});
(() => { const G = {"AF": "África", "AF-N": "Norte da África", "AF-W": "África Ocidental", "AF-E": "África Oriental", "AF-M": "África Central", "AF-S": "África Austral", "AM": "Américas", "AM-N": "América do Norte", "AM-C": "América Central e México", "AM-K": "Caribe", "AM-S": "América do Sul", "AS": "Ásia", "AS-E": "Leste Asiático", "AS-SE": "Sudeste Asiático", "AS-S": "Sul da Ásia", "AS-W": "Oeste da Ásia", "AS-C": "Ásia Central", "EU": "Europa", "EU-W": "Europa Ocidental", "EU-N": "Norte da Europa", "EU-S": "Sul da Europa", "EU-E": "Europa Oriental", "OC": "Oceania", "OC-A": "Austrália e Nova Zelândia", "OC-M": "Melanésia"}, S = {"agro": "Agroindústria e alimentos frescos", "food": "Alimentos processados e bebidas", "flor": "Flores e plantas", "ener": "Energia e mineração", "chem": "Química, farmacêutica e cosméticos", "plas": "Plásticos e borracha", "text": "Têxtil, confecção e calçados", "wood": "Madeira, papel e embalagens", "metl": "Metais e pedras preciosas", "mach": "Máquinas e eletrônicos", "auto": "Automotivo e transporte", "med": "Dispositivos médicos", "cons": "Construção e casa"};
  GEO.forEach(g => { if(G[g.id]) g.pt = G[g.id]; g.subs.forEach(s => { if(G[s.id]) s.pt = G[s.id]; }); });
  SECTORS.forEach(s => { if(S[s.id]) s.pt = S[s.id]; }); if(typeof SECTOR!=='undefined') Object.values(SECTOR).forEach(s => { if(S[s.id]) s.pt = S[s.id]; });
  if(typeof CONT!=='undefined') Object.values(CONT).forEach(c => { if(G[c.id]) c.pt = G[c.id]; }); if(typeof SUB!=='undefined') Object.values(SUB).forEach(c => { if(G[c.id]) c.pt = G[c.id]; });
})();

/* =====================================================================
   Global Trade Finder · TRM del día y página de Financiación y apoyos
   - TRM oficial (Superfinanciera, datos.gov.co), consultada en vivo una vez al día
   - Bancóldex, ProColombia, iNNpulsa / MinTIC y Cámaras de Comercio
   ===================================================================== */
const TRM_FALLBACK = { v: 3174.67, d: "2026-10-17" };   // última TRM conocida al publicar
const TXT7 = {
  es:{ trm:"TRM hoy", trm_src:"Tasa de cambio oficial (Superfinanciera)", approx:"≈", nav_apoyos:"Apoyos",
    ap_title:"Financiación y apoyos para exportar e importar", ap_lead:"Entidades de Colombia que financian, asesoran y conectan a las empresas con compradores del exterior. Global Trade Finder le ayuda a encontrar con quién negociar; estas entidades le ayudan a financiar y preparar la operación.",
    ap_bx:"Bancóldex: crédito en dólares para comercio exterior", ap_bx_d:"Banco de desarrollo empresarial de Colombia. Presta a través de bancos, corporaciones financieras y cooperativas aliadas.",
    ap_bx1:"Línea USD Flex largo plazo: modernización, maquinaria, capital de trabajo y sustitución de deudas, de 5 a 15 años con hasta 1 año de gracia (cupo anunciado en 2025: US$100 millones).",
    ap_bx2:"Línea USD Flex corto plazo: financiar importaciones y exportaciones y capital de trabajo, hasta 12 meses con 6 meses de gracia (cupo anunciado en 2025: US$35 millones).",
    ap_bx3:"Para empresas de todos los tamaños y sectores. Las condiciones y cupos cambian: confírmelos con Bancóldex o con su banco.",
    ap_pc:"ProColombia: conexión con compradores internacionales", ap_pc1:"Ruedas y macrorruedas de negocio con compradores extranjeros.", ap_pc2:"Agendas comerciales con clientes potenciales a través de sus oficinas en el exterior.",
    ap_pc3:"Pabellón de Colombia en ferias internacionales y showrooms.", ap_pc4:"Primera asesoría de comercio exterior y programas para adecuar la oferta exportable.", ap_pc5:"Seminarios gratuitos sobre oportunidades de mercado y requisitos de acceso.",
    ap_inn:"iNNpulsa y MinTIC: emprendimiento e innovación", ap_inn1:"Programas de acompañamiento, mentoría y consultoría para empresas digitales y en crecimiento (por ejemplo Emprendimiento Digital).", ap_inn2:"Convocatorias regionales para mipymes; revise las vigentes en su página.",
    ap_cc:"Cámaras de Comercio", ap_cc1:"Programas de internacionalización, capacitación y misiones comerciales para sus afiliados.", ap_cc2:"Certificado de existencia y representación legal, que también sirve para verificar su empresa en Global Trade Finder.",
    ap_gov:"Trámites y normas", ap_gov1:"VUCE: vistos buenos y registros de importación y exportación.", ap_gov2:"DIAN: arancel, declaraciones, certificado de origen y estadísticas de comercio exterior.", ap_gov3:"Ministerio de Comercio: acuerdos comerciales vigentes (tlc.gov.co).",
    ap_note:"Información de orientación con enlaces a las páginas oficiales. Global Trade Finder no es aliado ni representante de estas entidades.", ap_visit:"Ir a la página", ap_cta:"¿Ya sabe a quién venderle? Busque compradores", ap_trm_t:"Tasa de cambio del día" },
  en:{ trm:"Today's TRM", trm_src:"Official exchange rate (Colombian Financial Superintendency)", approx:"≈", nav_apoyos:"Support",
    ap_title:"Financing and support to export and import", ap_lead:"Colombian institutions that finance, advise and connect companies with foreign buyers. Global Trade Finder helps you find who to deal with; these institutions help you finance and prepare the operation.",
    ap_bx:"Bancóldex: US dollar credit for foreign trade", ap_bx_d:"Colombia's business development bank. It lends through partner banks, financial corporations and cooperatives.",
    ap_bx1:"USD Flex long-term line: modernization, machinery, working capital and debt substitution, 5 to 15 years with up to 1 year grace (2025 announced amount: US$100 million).",
    ap_bx2:"USD Flex short-term line: financing imports, exports and working capital, up to 12 months with 6 months grace (2025 announced amount: US$35 million).",
    ap_bx3:"For companies of all sizes and sectors. Terms and amounts change: confirm them with Bancóldex or your bank.",
    ap_pc:"ProColombia: connection with international buyers", ap_pc1:"Business matchmaking events (ruedas and macrorruedas) with foreign buyers.", ap_pc2:"Commercial agendas with potential clients through its offices abroad.",
    ap_pc3:"Colombia pavilion at international trade fairs and showrooms.", ap_pc4:"First foreign-trade advice and programs to adapt the export offer.", ap_pc5:"Free seminars on market opportunities and access requirements.",
    ap_inn:"iNNpulsa and MinTIC: entrepreneurship and innovation", ap_inn1:"Support, mentoring and consulting programs for digital and growing companies (e.g. Emprendimiento Digital).", ap_inn2:"Regional calls for SMEs; check the current ones on their website.",
    ap_cc:"Chambers of Commerce", ap_cc1:"Internationalization programs, training and trade missions for members.", ap_cc2:"Certificate of existence and legal representation, which also verifies your company on Global Trade Finder.",
    ap_gov:"Procedures and rules", ap_gov1:"VUCE: import and export approvals and registrations.", ap_gov2:"DIAN: tariff, declarations, certificate of origin and trade statistics.", ap_gov3:"Ministry of Trade: trade agreements in force (tlc.gov.co).",
    ap_note:"Guidance with links to the official websites. Global Trade Finder is not a partner or representative of these institutions.", ap_visit:"Visit website", ap_cta:"Already know who to sell to? Find buyers", ap_trm_t:"Exchange rate today" },
  pt:{ trm:"TRM hoje", trm_src:"Taxa de câmbio oficial da Colômbia (Superfinanciera)", approx:"≈", nav_apoyos:"Apoios",
    ap_title:"Financiamento e apoio para exportar e importar", ap_lead:"Instituições da Colômbia que financiam, assessoram e conectam empresas com compradores do exterior. O Global Trade Finder ajuda a encontrar com quem negociar; essas instituições ajudam a financiar e preparar a operação.",
    ap_bx:"Bancóldex: crédito em dólares para comércio exterior", ap_bx_d:"Banco de desenvolvimento empresarial da Colômbia. Empresta por meio de bancos, corporações financeiras e cooperativas parceiras.",
    ap_bx1:"Linha USD Flex longo prazo: modernização, máquinas, capital de giro e substituição de dívidas, de 5 a 15 anos com até 1 ano de carência (valor anunciado em 2025: US$100 milhões).",
    ap_bx2:"Linha USD Flex curto prazo: financiar importações, exportações e capital de giro, até 12 meses com 6 meses de carência (valor anunciado em 2025: US$35 milhões).",
    ap_bx3:"Para empresas de todos os portes e setores. Condições e valores mudam: confirme com o Bancóldex ou com seu banco.",
    ap_pc:"ProColombia: conexão com compradores internacionais", ap_pc1:"Rodadas de negócios com compradores estrangeiros.", ap_pc2:"Agendas comerciais com clientes potenciais por meio de seus escritórios no exterior.",
    ap_pc3:"Pavilhão da Colômbia em feiras internacionais e showrooms.", ap_pc4:"Primeira assessoria de comércio exterior e programas para adequar a oferta exportável.", ap_pc5:"Seminários gratuitos sobre oportunidades de mercado e requisitos de acesso.",
    ap_inn:"iNNpulsa e MinTIC: empreendedorismo e inovação", ap_inn1:"Programas de acompanhamento, mentoria e consultoria para empresas digitais e em crescimento (por exemplo Emprendimiento Digital).", ap_inn2:"Chamadas regionais para micro, pequenas e médias empresas; confira as vigentes no site.",
    ap_cc:"Câmaras de Comércio", ap_cc1:"Programas de internacionalização, capacitação e missões comerciais para associados.", ap_cc2:"Certidão de existência e representação legal, que também serve para verificar sua empresa no Global Trade Finder.",
    ap_gov:"Trâmites e normas", ap_gov1:"VUCE: autorizações e registros de importação e exportação.", ap_gov2:"DIAN: tarifa aduaneira, declarações, certificado de origem e estatísticas de comércio exterior.", ap_gov3:"Ministério do Comércio: acordos comerciais vigentes (tlc.gov.co).",
    ap_note:"Informação de orientação com links para os sites oficiais. O Global Trade Finder não é parceiro nem representante dessas instituições.", ap_visit:"Ir ao site", ap_cta:"Já sabe para quem vender? Encontre compradores", ap_trm_t:"Taxa de câmbio do dia" }
};
Object.assign(TXT7.es, {hero_a:"Encuentre compradores.", hero_b:"Encuentre proveedores.", hero_c:"Explore mercados globales.", eyebrow:"Búsqueda e inteligencia de comercio global"});
Object.assign(TXT7.en, {hero_a:"Find Buyers.", hero_b:"Find Suppliers.", hero_c:"Explore Global Markets."});
Object.assign(TXT7.pt, {hero_a:"Encontre compradores.", hero_b:"Encontre fornecedores.", hero_c:"Explore mercados globais.", eyebrow:"Busca e inteligência de comércio global"});
["es","en","pt"].forEach(l => Object.assign(T[l], TXT7[l]));

/* ---------- TRM del día ---------- */
let TRM = (() => { const c = store.get("trm", null); return (c && typeof c.v==="number" && c.v>1000 && c.v<20000 && typeof c.d==="string") ? c : TRM_FALLBACK; })();
(async () => {
  try {
    const today = new Date().toISOString().slice(0,10);
    if(TRM.checked===today) return;
    const ctl = new AbortController(); setTimeout(() => ctl.abort(), 6000);
    const r = await fetch("https://www.datos.gov.co/resource/32sa-8pi3.json?$limit=1&$order=vigenciadesde%20DESC", {signal:ctl.signal});
    if(!r.ok) return;
    const j = await r.json(); const v = Number(j?.[0]?.valor), d = String(j?.[0]?.vigenciadesde||"").slice(0,10);
    if(v>1000 && v<20000 && /^\d{4}-\d{2}-\d{2}$/.test(d)){ TRM = {v, d, checked:today}; store.set("trm", TRM); const el = $("#trmChip"); if(el) el.innerHTML = trmChip(true); }
  } catch(e){ /* sin conexión: se usa la última TRM conocida */ }
})();
const trmFmt = () => "$" + TRM.v.toLocaleString(LANG==="en"?"en-US":"es-CO",{minimumFractionDigits:2, maximumFractionDigits:2});
const trmChip = (inner) => `${inner?"":`<span id="trmChip">`}<span class="trm" title="${esc(t("trm_src"))} · ${esc(TRM.d)}">${t("trm")}: <b>${trmFmt()}</b></span>${inner?"":`</span>`}`;
/* valor en pesos aproximado de un monto en dólares */
const copOf = (usdAmount) => { const n = Number(usdAmount)*TRM.v; return Number.isFinite(n) ? "$" + Math.round(n).toLocaleString(LANG==="en"?"en-US":"es-CO") + " COP" : ""; };

/* ---------- Página de apoyos ---------- */
function vApoyos(){
  const link = (u, n) => `<a class="btn btn-ghost btn-sm" href="${u}" target="_blank" rel="noopener">${t("ap_visit")}: ${n}</a>`;
  const card = (title, items, url, extra="") => `<div class="panel"><h2 style="font-size:1.35rem">${title}</h2>${extra}<ul class="plain">${items.map(k=>`<li>${t(k)}</li>`).join("")}</ul><div style="margin-top:10px">${url}</div></div>`;
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_apoyos")}])}
    <h1>${t("ap_title")}</h1><p class="lead">${t("ap_lead")}</p>
    <div class="panel" style="margin:14px 0;display:flex;gap:12px;align-items:center;flex-wrap:wrap"><b>${t("ap_trm_t")}:</b> ${trmChip()} <span class="muted" style="font-size:.85rem">${esc(t("trm_src"))} · ${esc(TRM.d)}</span></div>
    <div class="grid2">
      ${card(t("ap_bx"), ["ap_bx1","ap_bx2","ap_bx3"], link("https://www.bancoldex.com/","Bancóldex"), `<p class="muted" style="margin:0 0 6px">${t("ap_bx_d")}</p>`)}
      ${card(t("ap_pc"), ["ap_pc1","ap_pc2","ap_pc3","ap_pc4","ap_pc5"], link("https://procolombia.co/","ProColombia"))}
      ${card(t("ap_inn"), ["ap_inn1","ap_inn2"], link("https://www.innpulsacolombia.com/","iNNpulsa")+" "+link("https://www.mintic.gov.co/","MinTIC"))}
      ${card(t("ap_cc"), ["ap_cc1","ap_cc2"], link("https://www.confecamaras.org.co/","Confecámaras")+" "+link("https://www.rues.org.co/","RUES"))}
      ${card(t("ap_gov"), ["ap_gov1","ap_gov2","ap_gov3"], link("https://www.vuce.gov.co/","VUCE")+" "+link("https://www.dian.gov.co/","DIAN")+" "+link("https://www.tlc.gov.co/","tlc.gov.co"))}
    </div>
    <p style="margin-top:16px"><a class="btn btn-main" href="#buscar" id="ap-cta">${t("ap_cta")}</a></p>
    <p class="muted" style="font-size:.84rem">${t("ap_note")}</p></div>`;
}
function bindApoyos(){ const c = $("#ap-cta"); if(c) c.onclick = (e) => { e.preventDefault(); S.mode = "buyers"; go("buscar"); }; }

(() => { const st = document.createElement("style"); st.textContent = `
  .trm{display:inline-block;background:#E3F6F2;border:1px solid #bfe8de;border-radius:999px;padding:2px 10px;font-size:.84rem;white-space:nowrap}
  @media (min-width:901px){ .nav a{padding:8px 7px;font-size:.88rem} .nav a.cta{padding:7px 9px} .lang button{padding:5px 7px} }
  @media (min-width:901px){ .brand .wm b{font-size:1.15rem} .nav a{padding:7px 5px;font-size:.84rem} }
  @media (min-width:901px) and (max-width:1180px){ .nav a{padding:7px 5px;font-size:.8rem} .brand .wm b{font-size:1.02rem} .brand svg{width:30px;height:30px} .brand{gap:6px} }
  @media (min-width:901px) and (max-width:1000px){ .brand .wm{display:none} }
  h1,h2,h3{overflow-wrap:anywhere;hyphens:auto}
  #view p, #view dd, #view li, #view td, #view .lead, #view .line span{overflow-wrap:anywhere}
  .crumbs{flex-wrap:wrap} .crumbs > *{min-width:0;overflow-wrap:anywhere;white-space:normal}
  .grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px}
`; document.head.appendChild(st); })();

/* =====================================================================
   Global Trade Finder · Herramientas (recomendaciones del año de servicio)
   - Nombres de productos en portugués (NCM) y búsqueda en portugués
   - Historial de 5 años y precio por kilo (UN Comtrade)
   - Calendario de ferias y ruedas de negocio
   - Plantillas: cotización, factura proforma, contrato con Incoterms 2020
   - Asistente de clasificación arancelaria
   - Calculadora de costos de exportación con la TRM
   - Informe de mercado en PDF y tablero de resultados
   ===================================================================== */

/* ---------- 1. Nombres en portugués ---------- */
(() => {
  if(typeof HS_PT==="undefined") return;
  for(const k in CODE){ const p = HS_PT["F"+k] || HS_PT[k]; if(p) CODE[k].pt = p; }
  for(const k in CHAP){ const p = HS_PT["C"+k]; if(p) CHAP[k].pt = p; }
  HS_SECTIONS.forEach(s => { const p = HS_PT["S"+s.id]; if(p) s.pt = p; });
})();
/* el buscador también entiende las palabras en portugués */
{ const _hayOf = hayOf;
  hayOf = function(c){ const fresh = !HAY[c.code]; const h = _hayOf(c);
    if(fresh && c.pt){ const extra = toks(c.pt).filter(w => w.length>2); h.es.push(...extra); h.title.push(...extra); }
    return h; };
}

/* ---------- Textos ---------- */
const TXT9 = {
  es:{ nav_tools:"Herramientas", tl_title:"Herramientas para negociar y exportar", tl_lead:"Todo lo que necesita para preparar una operación de comercio exterior, en un solo lugar.",
    tl_fairs:"Ferias y ruedas de negocio", tl_fairs_d:"Calendario de ferias nacionales e internacionales con fechas confirmadas.",
    tl_tpl:"Plantillas de documentos", tl_tpl_d:"Cotización, factura proforma y contrato de compraventa internacional con Incoterms 2020.",
    tl_hs:"Asistente de clasificación", tl_hs_d:"Describa su producto y encuentre su partida arancelaria.",
    tl_calc:"Calculadora de exportación", tl_calc_d:"Calcule su precio EXW, FCA, FOB, CFR, CIF, DAP y DDP en dólares y pesos con la TRM del día.",
    tl_dash:"Tablero de resultados", tl_dash_d:"Mensajes, cotizaciones, prospectos y negocios ganados de su empresa.",
    tl_open:"Abrir",
    hi_title:"Evolución del comercio mundial", hi_lead:"Importaciones mundiales reportadas a la ONU, últimos 5 años. Se suman los países con datos comparables cada año, por eso el total de 2024 puede diferir un poco del panel de arriba.", hi_kg:"Precio medio por kilo", hi_co:"Importaciones de Colombia", hi_chg:"Cambio {a}–{b}",
    hi_src:"Fuente: UN Comtrade (ONU), importaciones anuales reportadas por los países. El precio por kilo es el valor dividido por el peso neto de los países que reportan peso.", hi_none:"Aún no hay serie histórica para este producto.", hi_lock:"Con un plan pago ve los 5 años completos, el precio por kilo y lo que importa Colombia.",
    fe_title:"Ferias y ruedas de negocio", fe_lead:"Ferias nacionales e internacionales útiles para exportadores e importadores colombianos, con fechas confirmadas en la página oficial de cada organizador.",
    fe_all_s:"Todos los sectores", fe_all_c:"Todos los países", fe_month:"Mes", fe_all_m:"Todos los meses", fe_ics:"Añadir a mi calendario", fe_site:"Página oficial", fe_none:"No hay ferias con esos filtros.",
    fe_note:"Fechas consultadas el {d} en la página oficial de cada feria. Confírmelas antes de viajar. ProColombia anuncia sus macrorruedas en procolombia.co.", fe_for:"Ferias para este producto", fe_past:"Ya pasó", fe_colombia:"En Colombia",
    tp_title:"Plantillas de documentos", tp_lead:"Llene los datos una vez y genere el documento listo para imprimir o guardar en PDF.",
    tp_quote:"Cotización", tp_pro:"Factura proforma", tp_contract:"Contrato de compraventa internacional", tp_doclang:"Idioma del documento",
    tp_seller:"Vendedor (exportador)", tp_buyer:"Comprador (importador)", tp_name:"Razón social", tp_id:"NIT o identificación tributaria", tp_addr:"Dirección", tp_city:"Ciudad y país", tp_contact:"Contacto (nombre, correo, teléfono)",
    tp_goods:"Mercancía", tp_desc:"Descripción del producto", tp_hs:"Partida arancelaria", tp_qty:"Cantidad", tp_unit:"Unidad", tp_price:"Precio unitario (US$)",
    tp_inco:"Incoterm 2020", tp_place:"Lugar convenido", tp_pay:"Forma de pago", tp_valid:"Validez de la oferta (días)", tp_lead_t:"Plazo de entrega (días)", tp_pack:"Empaque", tp_weight:"Peso bruto total (kg)", tp_num:"Número del documento",
    tp_gen:"Generar documento", tp_legal:"Modelo de referencia. Revíselo con su asesor legal antes de firmarlo.",
    pay_adv:"Pago anticipado por transferencia", pay_part:"30% anticipado y 70% contra copia de documentos de embarque", pay_lc:"Carta de crédito irrevocable a la vista", pay_coll:"Cobranza documentaria", pay_open:"Cuenta abierta a 30 días",
    ic_title:"Incoterms 2020: quién paga y quién asume el riesgo", ic_any:"Cualquier medio de transporte", ic_sea:"Solo transporte marítimo y fluvial",
    ic_EXW:"El comprador recoge en la bodega del vendedor y asume todo desde allí, incluso el despacho de exportación.",
    ic_FCA:"El vendedor entrega al transportista del comprador en el lugar convenido, con el despacho de exportación hecho.",
    ic_CPT:"El vendedor paga el transporte hasta el destino; el riesgo pasa al comprador al entregar al primer transportista.",
    ic_CIP:"Como CPT, más un seguro con cobertura amplia (cláusulas A) a favor del comprador.",
    ic_DAP:"El vendedor entrega en el lugar de destino, listo para descargar; el comprador hace la importación.",
    ic_DPU:"El vendedor entrega la mercancía descargada en el lugar de destino.",
    ic_DDP:"El vendedor entrega en destino con la importación hecha y los impuestos pagados.",
    ic_FAS:"El vendedor deja la mercancía al costado del buque en el puerto de embarque.",
    ic_FOB:"El vendedor entrega la mercancía a bordo del buque en el puerto de embarque.",
    ic_CFR:"El vendedor paga el flete hasta el puerto de destino; el riesgo pasa al subir a bordo.",
    ic_CIF:"Como CFR, más un seguro mínimo (cláusulas C) a favor del comprador.",
    as_title:"Asistente de clasificación arancelaria", as_lead:"Describa su producto con palabras sencillas: qué es, de qué está hecho y para qué sirve.", as_ph:"Ej.: café verde en grano sin tostar", as_go:"Buscar partida",
    as_res:"Partidas posibles", as_none:"No encontramos una partida con esa descripción. Pruebe con otras palabras o con el nombre técnico.", as_see:"Ver partida", as_tariff:"Arancel en Colombia", as_use:"Usar en una plantilla",
    as_steps:"Cómo confirmar la clasificación", as_s1:"Lea el texto de la partida y las notas de su sección y capítulo (Regla General Interpretativa 1).",
    as_s2:"Si el producto está incompleto, sin armar o es una mezcla, se clasifica como el producto terminado o según el material que le da su carácter esencial (Reglas 2 y 3).",
    as_s3:"Entre varias partidas posibles, prefiera la más específica (Regla 3a).", as_s4:"Para tener seguridad jurídica, pida a la DIAN una resolución anticipada de clasificación arancelaria.",
    as_warn:"Esta ayuda orienta la búsqueda; la clasificación oficial la decide la DIAN.", as_match:"Coincide con",
    ca_title:"Calculadora de costos de exportación", ca_lead:"Escriba sus costos y obtenga el precio de su producto en cada Incoterm, en dólares y en pesos.",
    ca_goods:"Producto", ca_unitcop:"Precio de venta en su bodega por unidad (COP)", ca_units:"Unidades del envío",
    ca_origin:"Costos en Colombia (COP, por envío)", ca_pack:"Empaque, embalaje y marcado", ca_inland:"Transporte interno hasta puerto o aeropuerto", ca_agent:"Agencia de aduanas y despacho de exportación", ca_docs:"Certificados y documentos (origen, fitosanitario, vistos buenos)", ca_port:"Gastos de puerto o terminal en origen",
    ca_intl:"Costos internacionales (US$, por envío)", ca_freight:"Flete internacional", ca_ins:"Tasa del seguro (%)", ca_dest:"Gastos en destino hasta el lugar de entrega",
    ca_imp:"Importación en destino (para DDP)", ca_duty:"Arancel en destino (%)", ca_vat:"IVA o impuesto en destino (%)", ca_dagent:"Agente de aduanas en destino (US$)",
    ca_trm:"TRM usada (COP por US$)", ca_calc:"Calcular", ca_term:"Incoterm", ca_total:"Total del envío", ca_unit:"Por unidad",
    ca_note:"El seguro se calcula sobre el 110% del valor CFR, como exigen CIF y CIP. Los impuestos de destino son una estimación: confirme el arancel del país de destino.", ca_print:"Imprimir o guardar en PDF",
    rp_btn:"Informe de mercado (PDF)", rp_title:"Informe de mercado", rp_world:"Comercio mundial", rp_cos:"Empresas en Global Trade Finder", rp_trend:"Tendencia de 5 años",
    db_title:"Tablero de resultados", db_lead:"Así va su empresa en Global Trade Finder.", db_conv:"Conversaciones", db_sent:"Mensajes enviados", db_recv:"Mensajes recibidos", db_req:"Solicitudes enviadas",
    db_quotes:"Cotizaciones enviadas", db_opps:"Requerimientos publicados", db_pros:"Prospectos activos", db_won:"Negocios ganados", db_wonv:"Valor ganado (US$)", db_conv_r:"Tasa de cierre",
    db_funnel:"Embudo de prospectos", db_act:"Actividad de los últimos 6 meses", db_views:"Visitas a su perfil", db_views_n:"Se cuentan cuando la aplicación funciona en el servidor.", db_need:"El tablero está disponible para empresas con suscripción y perfil creado." },
  en:{ nav_tools:"Tools", tl_title:"Tools to negotiate and export", tl_lead:"Everything you need to prepare a foreign-trade operation, in one place.",
    tl_fairs:"Trade fairs and matchmaking", tl_fairs_d:"Calendar of national and international fairs with confirmed dates.",
    tl_tpl:"Document templates", tl_tpl_d:"Quotation, proforma invoice and international sales contract with Incoterms 2020.",
    tl_hs:"Classification assistant", tl_hs_d:"Describe your product and find its tariff heading.",
    tl_calc:"Export cost calculator", tl_calc_d:"Work out your EXW, FCA, FOB, CFR, CIF, DAP and DDP price in dollars and pesos with today's TRM.",
    tl_dash:"Results dashboard", tl_dash_d:"Your company's messages, quotes, prospects and won deals.",
    tl_open:"Open",
    hi_title:"World trade trend", hi_lead:"World imports reported to the UN, last 5 years. Only countries with comparable data each year are added, so the 2024 total may differ slightly from the panel above.", hi_kg:"Average price per kilo", hi_co:"Colombia's imports", hi_chg:"Change {a}–{b}",
    hi_src:"Source: UN Comtrade (UN), annual imports reported by countries. Price per kilo is value divided by net weight for countries that report weight.", hi_none:"No historical series for this product yet.", hi_lock:"With a paid plan you see all 5 years, the price per kilo and what Colombia imports.",
    fe_title:"Trade fairs and matchmaking events", fe_lead:"National and international fairs useful for Colombian exporters and importers, with dates confirmed on each organizer's official website.",
    fe_all_s:"All sectors", fe_all_c:"All countries", fe_month:"Month", fe_all_m:"All months", fe_ics:"Add to my calendar", fe_site:"Official website", fe_none:"No fairs match those filters.",
    fe_note:"Dates checked on {d} on each fair's official website. Confirm them before travelling. ProColombia announces its matchmaking events on procolombia.co.", fe_for:"Fairs for this product", fe_past:"Past", fe_colombia:"In Colombia",
    tp_title:"Document templates", tp_lead:"Fill in the data once and generate the document ready to print or save as PDF.",
    tp_quote:"Quotation", tp_pro:"Proforma invoice", tp_contract:"International sales contract", tp_doclang:"Document language",
    tp_seller:"Seller (exporter)", tp_buyer:"Buyer (importer)", tp_name:"Company name", tp_id:"Tax ID", tp_addr:"Address", tp_city:"City and country", tp_contact:"Contact (name, email, phone)",
    tp_goods:"Goods", tp_desc:"Product description", tp_hs:"HS code", tp_qty:"Quantity", tp_unit:"Unit", tp_price:"Unit price (US$)",
    tp_inco:"Incoterm 2020", tp_place:"Named place", tp_pay:"Payment terms", tp_valid:"Offer validity (days)", tp_lead_t:"Delivery time (days)", tp_pack:"Packaging", tp_weight:"Total gross weight (kg)", tp_num:"Document number",
    tp_gen:"Generate document", tp_legal:"Reference model. Review it with your legal adviser before signing.",
    pay_adv:"Advance payment by bank transfer", pay_part:"30% in advance and 70% against copy of shipping documents", pay_lc:"Irrevocable letter of credit at sight", pay_coll:"Documentary collection", pay_open:"Open account at 30 days",
    ic_title:"Incoterms 2020: who pays and who bears the risk", ic_any:"Any mode of transport", ic_sea:"Sea and inland waterway transport only",
    ic_EXW:"The buyer collects at the seller's premises and bears everything from there, including export clearance.",
    ic_FCA:"The seller hands over to the buyer's carrier at the named place, export-cleared.",
    ic_CPT:"The seller pays carriage to destination; risk passes when goods are handed to the first carrier.",
    ic_CIP:"Like CPT, plus broad insurance cover (clauses A) for the buyer.",
    ic_DAP:"The seller delivers at the destination, ready for unloading; the buyer clears import.",
    ic_DPU:"The seller delivers the goods unloaded at the destination.",
    ic_DDP:"The seller delivers at destination with import cleared and duties paid.",
    ic_FAS:"The seller places the goods alongside the ship at the port of shipment.",
    ic_FOB:"The seller delivers the goods on board the vessel at the port of shipment.",
    ic_CFR:"The seller pays freight to the destination port; risk passes once on board.",
    ic_CIF:"Like CFR, plus minimum insurance (clauses C) for the buyer.",
    as_title:"Tariff classification assistant", as_lead:"Describe your product in plain words: what it is, what it is made of and what it is for.", as_ph:"E.g.: green coffee beans, not roasted", as_go:"Find heading",
    as_res:"Possible headings", as_none:"We could not find a heading for that description. Try other words or the technical name.", as_see:"View heading", as_tariff:"Tariff in Colombia", as_use:"Use in a template",
    as_steps:"How to confirm the classification", as_s1:"Read the heading text and the notes of its section and chapter (General Interpretative Rule 1).",
    as_s2:"If the product is incomplete, unassembled or a mixture, classify it as the finished article or by the material giving its essential character (Rules 2 and 3).",
    as_s3:"Among several possible headings, prefer the most specific one (Rule 3a).", as_s4:"For legal certainty, ask DIAN for an advance tariff classification ruling.",
    as_warn:"This tool guides your search; DIAN makes the official classification.", as_match:"Matches",
    ca_title:"Export cost calculator", ca_lead:"Enter your costs and get your product's price under each Incoterm, in dollars and pesos.",
    ca_goods:"Product", ca_unitcop:"Ex-works selling price per unit (COP)", ca_units:"Units in the shipment",
    ca_origin:"Costs in Colombia (COP, per shipment)", ca_pack:"Packing and marking", ca_inland:"Inland transport to port or airport", ca_agent:"Customs broker and export clearance", ca_docs:"Certificates and documents (origin, phytosanitary, approvals)", ca_port:"Port or terminal charges at origin",
    ca_intl:"International costs (US$, per shipment)", ca_freight:"International freight", ca_ins:"Insurance rate (%)", ca_dest:"Charges at destination up to the delivery place",
    ca_imp:"Import at destination (for DDP)", ca_duty:"Import duty at destination (%)", ca_vat:"VAT or tax at destination (%)", ca_dagent:"Customs broker at destination (US$)",
    ca_trm:"TRM used (COP per US$)", ca_calc:"Calculate", ca_term:"Incoterm", ca_total:"Shipment total", ca_unit:"Per unit",
    ca_note:"Insurance is calculated on 110% of the CFR value, as CIF and CIP require. Destination taxes are an estimate: confirm the destination country's tariff.", ca_print:"Print or save as PDF",
    rp_btn:"Market report (PDF)", rp_title:"Market report", rp_world:"World trade", rp_cos:"Companies on Global Trade Finder", rp_trend:"5-year trend",
    db_title:"Results dashboard", db_lead:"How your company is doing on Global Trade Finder.", db_conv:"Conversations", db_sent:"Messages sent", db_recv:"Messages received", db_req:"Requests sent",
    db_quotes:"Quotes sent", db_opps:"Requests published", db_pros:"Active prospects", db_won:"Deals won", db_wonv:"Value won (US$)", db_conv_r:"Win rate",
    db_funnel:"Prospect funnel", db_act:"Activity in the last 6 months", db_views:"Profile views", db_views_n:"Counted when the application runs on the server.", db_need:"The dashboard is available to subscribed companies with a profile." },
  pt:{ nav_tools:"Ferramentas", tl_title:"Ferramentas para negociar e exportar", tl_lead:"Tudo o que você precisa para preparar uma operação de comércio exterior, em um só lugar.",
    tl_fairs:"Feiras e rodadas de negócios", tl_fairs_d:"Calendário de feiras nacionais e internacionais com datas confirmadas.",
    tl_tpl:"Modelos de documentos", tl_tpl_d:"Cotação, fatura pró-forma e contrato de compra e venda internacional com Incoterms 2020.",
    tl_hs:"Assistente de classificação", tl_hs_d:"Descreva seu produto e encontre sua posição tarifária.",
    tl_calc:"Calculadora de exportação", tl_calc_d:"Calcule seu preço EXW, FCA, FOB, CFR, CIF, DAP e DDP em dólares e pesos com a TRM do dia.",
    tl_dash:"Painel de resultados", tl_dash_d:"Mensagens, cotações, prospectos e negócios ganhos da sua empresa.",
    tl_open:"Abrir",
    hi_title:"Evolução do comércio mundial", hi_lead:"Importações mundiais informadas à ONU, últimos 5 anos. Somam-se os países com dados comparáveis a cada ano, por isso o total de 2024 pode diferir um pouco do painel acima.", hi_kg:"Preço médio por quilo", hi_co:"Importações da Colômbia", hi_chg:"Variação {a}–{b}",
    hi_src:"Fonte: UN Comtrade (ONU), importações anuais informadas pelos países. O preço por quilo é o valor dividido pelo peso líquido dos países que informam peso.", hi_none:"Ainda não há série histórica para este produto.", hi_lock:"Com um plano pago você vê os 5 anos completos, o preço por quilo e o que a Colômbia importa.",
    fe_title:"Feiras e rodadas de negócios", fe_lead:"Feiras nacionais e internacionais úteis para exportadores e importadores colombianos, com datas confirmadas no site oficial de cada organizador.",
    fe_all_s:"Todos os setores", fe_all_c:"Todos os países", fe_month:"Mês", fe_all_m:"Todos os meses", fe_ics:"Adicionar à minha agenda", fe_site:"Site oficial", fe_none:"Não há feiras com esses filtros.",
    fe_note:"Datas consultadas em {d} no site oficial de cada feira. Confirme antes de viajar. A ProColombia anuncia suas rodadas em procolombia.co.", fe_for:"Feiras para este produto", fe_past:"Já passou", fe_colombia:"Na Colômbia",
    tp_title:"Modelos de documentos", tp_lead:"Preencha os dados uma vez e gere o documento pronto para imprimir ou salvar em PDF.",
    tp_quote:"Cotação", tp_pro:"Fatura pró-forma", tp_contract:"Contrato de compra e venda internacional", tp_doclang:"Idioma do documento",
    tp_seller:"Vendedor (exportador)", tp_buyer:"Comprador (importador)", tp_name:"Razão social", tp_id:"Identificação fiscal", tp_addr:"Endereço", tp_city:"Cidade e país", tp_contact:"Contato (nome, e-mail, telefone)",
    tp_goods:"Mercadoria", tp_desc:"Descrição do produto", tp_hs:"Posição tarifária", tp_qty:"Quantidade", tp_unit:"Unidade", tp_price:"Preço unitário (US$)",
    tp_inco:"Incoterm 2020", tp_place:"Local designado", tp_pay:"Forma de pagamento", tp_valid:"Validade da oferta (dias)", tp_lead_t:"Prazo de entrega (dias)", tp_pack:"Embalagem", tp_weight:"Peso bruto total (kg)", tp_num:"Número do documento",
    tp_gen:"Gerar documento", tp_legal:"Modelo de referência. Revise com seu assessor jurídico antes de assinar.",
    pay_adv:"Pagamento antecipado por transferência", pay_part:"30% antecipado e 70% contra cópia dos documentos de embarque", pay_lc:"Carta de crédito irrevogável à vista", pay_coll:"Cobrança documentária", pay_open:"Conta aberta a 30 dias",
    ic_title:"Incoterms 2020: quem paga e quem assume o risco", ic_any:"Qualquer modal de transporte", ic_sea:"Somente transporte marítimo e fluvial",
    ic_EXW:"O comprador retira no armazém do vendedor e assume tudo a partir daí, inclusive o desembaraço de exportação.",
    ic_FCA:"O vendedor entrega ao transportador do comprador no local designado, com o desembaraço de exportação feito.",
    ic_CPT:"O vendedor paga o transporte até o destino; o risco passa ao comprador na entrega ao primeiro transportador.",
    ic_CIP:"Como CPT, mais um seguro de cobertura ampla (cláusulas A) a favor do comprador.",
    ic_DAP:"O vendedor entrega no local de destino, pronto para descarga; o comprador faz a importação.",
    ic_DPU:"O vendedor entrega a mercadoria descarregada no local de destino.",
    ic_DDP:"O vendedor entrega no destino com a importação feita e os impostos pagos.",
    ic_FAS:"O vendedor coloca a mercadoria ao lado do navio no porto de embarque.",
    ic_FOB:"O vendedor entrega a mercadoria a bordo do navio no porto de embarque.",
    ic_CFR:"O vendedor paga o frete até o porto de destino; o risco passa no embarque.",
    ic_CIF:"Como CFR, mais um seguro mínimo (cláusulas C) a favor do comprador.",
    as_title:"Assistente de classificação tarifária", as_lead:"Descreva seu produto com palavras simples: o que é, de que é feito e para que serve.", as_ph:"Ex.: café verde em grão, não torrado", as_go:"Buscar posição",
    as_res:"Posições possíveis", as_none:"Não encontramos uma posição com essa descrição. Tente outras palavras ou o nome técnico.", as_see:"Ver posição", as_tariff:"Tarifa na Colômbia", as_use:"Usar em um modelo",
    as_steps:"Como confirmar a classificação", as_s1:"Leia o texto da posição e as notas da seção e do capítulo (Regra Geral Interpretativa 1).",
    as_s2:"Se o produto estiver incompleto, desmontado ou for uma mistura, classifique como o produto acabado ou pela matéria que lhe dá a característica essencial (Regras 2 e 3).",
    as_s3:"Entre várias posições possíveis, prefira a mais específica (Regra 3a).", as_s4:"Para ter segurança jurídica, peça à DIAN uma resolução antecipada de classificação tarifária.",
    as_warn:"Esta ajuda orienta a busca; a classificação oficial é decidida pela DIAN.", as_match:"Coincide com",
    ca_title:"Calculadora de custos de exportação", ca_lead:"Digite seus custos e obtenha o preço do seu produto em cada Incoterm, em dólares e em pesos.",
    ca_goods:"Produto", ca_unitcop:"Preço de venda no seu armazém por unidade (COP)", ca_units:"Unidades do envio",
    ca_origin:"Custos na Colômbia (COP, por envio)", ca_pack:"Embalagem e marcação", ca_inland:"Transporte interno até porto ou aeroporto", ca_agent:"Despachante e desembaraço de exportação", ca_docs:"Certificados e documentos (origem, fitossanitário, autorizações)", ca_port:"Despesas de porto ou terminal na origem",
    ca_intl:"Custos internacionais (US$, por envio)", ca_freight:"Frete internacional", ca_ins:"Taxa do seguro (%)", ca_dest:"Despesas no destino até o local de entrega",
    ca_imp:"Importação no destino (para DDP)", ca_duty:"Imposto de importação no destino (%)", ca_vat:"IVA ou imposto no destino (%)", ca_dagent:"Despachante no destino (US$)",
    ca_trm:"TRM usada (COP por US$)", ca_calc:"Calcular", ca_term:"Incoterm", ca_total:"Total do envio", ca_unit:"Por unidade",
    ca_note:"O seguro é calculado sobre 110% do valor CFR, como exigem CIF e CIP. Os impostos de destino são uma estimativa: confirme a tarifa do país de destino.", ca_print:"Imprimir ou salvar em PDF",
    rp_btn:"Relatório de mercado (PDF)", rp_title:"Relatório de mercado", rp_world:"Comércio mundial", rp_cos:"Empresas no Global Trade Finder", rp_trend:"Tendência de 5 anos",
    db_title:"Painel de resultados", db_lead:"Como sua empresa está indo no Global Trade Finder.", db_conv:"Conversas", db_sent:"Mensagens enviadas", db_recv:"Mensagens recebidas", db_req:"Solicitações enviadas",
    db_quotes:"Cotações enviadas", db_opps:"Demandas publicadas", db_pros:"Prospectos ativos", db_won:"Negócios ganhos", db_wonv:"Valor ganho (US$)", db_conv_r:"Taxa de fechamento",
    db_funnel:"Funil de prospectos", db_act:"Atividade dos últimos 6 meses", db_views:"Visitas ao seu perfil", db_views_n:"Contadas quando o aplicativo funciona no servidor.", db_need:"O painel está disponível para empresas com assinatura e perfil criado." }
};
["es","en","pt"].forEach(l => { T[l] = T[l] || {}; Object.assign(T[l], TXT9[l]); });

const loc9 = () => LANG==="en" ? "en-US" : LANG==="pt" ? "pt-BR" : "es-CO";
const n0 = (v) => Number(v).toLocaleString(loc9(), {maximumFractionDigits:0});
const n2 = (v) => Number(v).toLocaleString(loc9(), {minimumFractionDigits:2, maximumFractionDigits:2});
const fdate = (iso, o) => { try { return new Date(iso+"T12:00:00").toLocaleDateString(loc9(), o || {day:"numeric", month:"short", year:"numeric"}); } catch(e){ return iso; } };
const pctTxt = (a, b) => { if(!a || !b) return "—"; const p = (b/a - 1)*100; return (p>=0?"+":"") + p.toFixed(1).replace(".", LANG==="en"?".":",") + "%"; };
const printDoc = () => { document.body.classList.add("pr"); window.print(); setTimeout(()=>document.body.classList.remove("pr"), 500); };
const docFoot = () => `<div class="report-foot">${ICON.logo}<span>${esc(typeof reportFootText==="function" ? reportFootText() : "SkyNet Genesis")}</span></div>`;
const printBtn = (id) => FRAMED ? "" : `<button class="btn btn-main" id="${id}">${t("ca_print")}</button>`;

/* ---------- 2. Historial de 5 años y precio por kilo ---------- */
const histOf = (code) => (typeof HIST==="undefined") ? null : (HIST[code] || HIST[code.slice(0,4)] || null);
function sparkBars(vals, labels){
  const max = Math.max(1, ...vals);
  return `<div class="hbars">${vals.map((v,i) => `<div class="hb"><div class="hbv" style="height:${Math.max(3, Math.round(v/max*100))}%" title="${esc(labels[i])}: ${esc(usd(v))}"></div><span>${esc(labels[i])}</span></div>`).join("")}</div>`;
}
function histPanel(code){
  const h = histOf(code); if(!h || !h.length) return "";
  const full = PAID();
  const ys = h.map(r => String(r[0])), vs = h.map(r => r[1]), kg = h.map(r => r[2]);
  const first = h[0], last = h[h.length-1];
  const kgRow = kg.some(x => x>0) ? `<div class="stat"><b class="num">${last[2]>0 ? "US$ "+n2(last[2]) : "—"}</b><span>${t("hi_kg")} · ${last[0]}</span></div>` : "";
  const coRow = last[3]>0 ? `<div class="stat"><b class="num">${usd(last[3])}</b><span>${t("hi_co")} · ${last[0]}</span></div>` : "";
  return `<div class="panel trade"><h2>${t("hi_title")}</h2><p class="muted" style="margin:0 0 8px;font-size:.88rem">${t("hi_lead")}</p>
    ${full ? sparkBars(vs, ys) : sparkBars(vs.map((v,i)=> i===vs.length-1 ? v : 0), ys)}
    <div class="stats" style="grid-template-columns:repeat(auto-fit,minmax(130px,1fr));margin-top:10px">
      <div class="stat"><b class="num">${full ? pctTxt(first[1], last[1]) : "—"}</b><span>${t("hi_chg",{a:first[0], b:last[0]})}</span></div>${full ? kgRow + coRow : ""}</div>
    ${full && kg.filter(x=>x>0).length>1 ? `<div class="tablewrap" style="border:0;margin-top:8px"><table class="t"><thead><tr><th></th>${ys.map(y=>`<th class="r">${y}</th>`).join("")}</tr></thead><tbody>
      <tr><td>US$</td>${vs.map(v=>`<td class="r num">${usd(v)}</td>`).join("")}</tr>
      <tr><td>US$/kg</td>${kg.map(v=>`<td class="r num">${v>0?n2(v):"—"}</td>`).join("")}</tr></tbody></table></div>` : ""}
    ${full ? "" : `<div class="lock" style="margin-top:12px"><b>${t("gate_title")}</b>${t("hi_lock")} <a href="#planes">${t("see_plans")}</a></div>`}
    <p class="muted" style="margin:10px 0 0;font-size:.8rem">${t("hi_src")}</p></div>`;
}

/* ---------- 3. Ferias ---------- */
const FAIR_TODAY = () => new Date().toISOString().slice(0,10);
const fairName = (e) => e[LANG] || e.es || "";
const fairsFor = (code) => (typeof FERIAS==="undefined") ? [] : FERIAS.filter(e => e.d2 >= FAIR_TODAY() && (e.hs||[]).includes(code.slice(0,2)));
function fairCard(e){
  const past = e.d2 < FAIR_TODAY();
  const when = e.d1===e.d2 ? fdate(e.d1) : `${fdate(e.d1,{day:"numeric",month:"short"})} – ${fdate(e.d2)}`;
  return `<div class="fair${past?" past":""}"><div class="fd"><b>${esc(fdate(e.d1,{day:"numeric"}))}</b><span>${esc(fdate(e.d1,{month:"short"}))}</span></div>
    <div class="fb"><h3>${esc(e.n)}</h3><div class="muted" style="font-size:.86rem">${esc(when)} · ${esc(e.c)} · ${esc(cname(e.cc))}${past?` · <b>${t("fe_past")}</b>`:""}</div>
    <p style="margin:6px 0">${esc(fairName(e))}</p>
    <div style="display:flex;gap:6px;flex-wrap:wrap">${SECTOR[e.s] ? `<span class="pill">${esc(L(SECTOR[e.s]))}</span>` : ""}${(e.hs||[]).map(ch => CHAP[ch] ? `<a class="pill" href="#cap-${ch}" title="${esc(L(CHAP[ch]))}">HS ${ch}</a>` : "").join("")}</div>
    <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap"><a class="btn btn-ghost btn-sm" href="${esc(e.u)}" target="_blank" rel="noopener">${t("fe_site")}</a>${FRAMED?"":`<button class="btn btn-ghost btn-sm" data-ics="${esc(e.n)}">${t("fe_ics")}</button>`}</div></div></div>`;
}
let FE = { s:"", cc:"", m:"" };
function vFairs(){
  if(typeof FERIAS==="undefined") return vNotFound();
  const months = [...new Set(FERIAS.map(e => e.d1.slice(0,7)))].sort();
  const ccs = [...new Set(FERIAS.map(e => e.cc))].sort((a,b) => cname(a).localeCompare(cname(b)));
  const secs = [...new Set(FERIAS.map(e => e.s))].filter(s => SECTOR[s]);
  const list = FERIAS.filter(e => e.d2 >= FAIR_TODAY() && (!FE.s || e.s===FE.s) && (!FE.cc || e.cc===FE.cc) && (!FE.m || e.d1.startsWith(FE.m)));
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_tools"),href:"#herramientas"},{label:t("fe_title")}])}
    <h1>${t("fe_title")}</h1><p class="lead">${t("fe_lead")}</p>
    <div class="filters" style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0">
      <select id="fe-s" aria-label="${t("fe_all_s")}"><option value="">${t("fe_all_s")}</option>${secs.map(s=>`<option value="${s}" ${FE.s===s?"selected":""}>${esc(L(SECTOR[s]))}</option>`).join("")}</select>
      <select id="fe-c" aria-label="${t("fe_all_c")}"><option value="">${t("fe_all_c")}</option>${ccs.map(c=>`<option value="${c}" ${FE.cc===c?"selected":""}>${esc(cname(c))}</option>`).join("")}</select>
      <select id="fe-m" aria-label="${t("fe_month")}"><option value="">${t("fe_all_m")}</option>${months.map(m=>`<option value="${m}" ${FE.m===m?"selected":""}>${esc(fdate(m+"-15",{month:"long",year:"numeric"}))}</option>`).join("")}</select>
    </div>
    <div class="fairs">${list.map(fairCard).join("") || `<div class="empty">${t("fe_none")}</div>`}</div>
    <p class="muted" style="font-size:.84rem;margin-top:14px">${t("fe_note",{d:fdate(FERIAS_META.checked)})}</p></div>`;
}
function bindFairs(){
  ["s","c","m"].forEach(k => { const el = $("#fe-"+k); if(el) el.onchange = () => { FE[k==="c"?"cc":k] = el.value; render(); }; });
  bindIcs();
}
function bindIcs(){
  $$("[data-ics]").forEach(b => b.onclick = () => {
    const e = FERIAS.find(x => x.n===b.dataset.ics); if(!e) return;
    const d = (s) => s.replaceAll("-","");
    const end = new Date(e.d2+"T12:00:00Z"); end.setUTCDate(end.getUTCDate()+1);
    const clean = (s) => String(s).replace(/[\\;,]/g, m => "\\"+m).replace(/\n/g," ");
    const ics = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//SkyNet Genesis//Global Trade Finder//ES","BEGIN:VEVENT",
      "UID:"+d(e.d1)+"-"+hashStr(e.n)+"@globaltradefinder", "DTSTAMP:"+new Date().toISOString().replace(/[-:]/g,"").slice(0,15)+"Z",
      "DTSTART;VALUE=DATE:"+d(e.d1), "DTEND;VALUE=DATE:"+end.toISOString().slice(0,10).replaceAll("-",""),
      "SUMMARY:"+clean(e.n), "LOCATION:"+clean(e.c+", "+cname(e.cc)), "DESCRIPTION:"+clean(fairName(e)+" "+e.u), "URL:"+e.u, "END:VEVENT","END:VCALENDAR"].join("\r\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([ics],{type:"text/calendar;charset=utf-8"}));
    a.download = e.n.replace(/[^\w\d-]+/g,"-").toLowerCase()+".ics"; document.body.appendChild(a); a.click(); a.remove();
  });
}
function fairsPanel(code){
  const fs = fairsFor(code).slice(0,4); if(!fs.length) return "";
  return `<div class="panel"><div class="sec-head" style="margin:0 0 6px"><h2 style="margin:0;font-size:1.3rem">${t("fe_for")}</h2><a class="btn btn-ghost btn-sm" href="#ferias">${t("tl_open")}</a></div>
    <ul class="plain">${fs.map(e => `<li><a href="${esc(e.u)}" target="_blank" rel="noopener"><b>${esc(e.n)}</b></a> <span class="muted">· ${esc(fdate(e.d1))} · ${esc(e.c)}, ${esc(cname(e.cc))}</span></li>`).join("")}</ul></div>`;
}

/* panel del producto: comercio 2024 + historia + ferias */
{ const _tradePanel = tradePanel;
  tradePanel = function(code, focusCC){ return _tradePanel(code, focusCC) + histPanel(code) + (focusCC ? "" : fairsPanel(code)) + (focusCC ? "" : reportButton(code)); };
}

/* ---------- 4. Informe de mercado en PDF ---------- */
function reportButton(code){ return `<div class="no-print" style="margin-top:-4px"><button class="btn btn-ghost btn-sm" data-report="${esc(code)}">${t("rp_btn")}</button></div>`; }
document.addEventListener("click", (ev) => {
  const b = ev.target.closest && ev.target.closest("[data-report]"); if(!b) return;
  ev.preventDefault(); openReport(b.dataset.report);
});
function openReport(code){
  if(!PAID()){ toast(t("tr_lock")); go("planes"); return; }
  if(typeof gateP==="function" && gateP("export","w_export")) return;
  const c = CODE[code]; if(!c) return;
  const d = tradeOf(code), h = histOf(code), n = countFor(code), fs = fairsFor(code).slice(0,6);
  const top = (f) => d && d[f] ? `<table class="t"><thead><tr><th>#</th><th>${t("countries")}</th><th class="r">US$</th></tr></thead><tbody>${d[f].r.slice(0,10).map((r,i)=>`<tr><td>${i+1}</td><td>${esc(cname(r[0]))}</td><td class="r num">${usd(r[1])}</td></tr>`).join("")}</tbody></table>` : `<p class="muted">—</p>`;
  modal(`<div class="doc"><div style="display:flex;gap:10px;align-items:center;margin-bottom:6px"><span style="width:34px;height:34px;display:block">${ICON.logo}</span><div><h2 style="margin:0">${t("rp_title")}</h2><div class="muted" style="font-size:.86rem">Global Trade Finder · ${new Date().toLocaleDateString(loc9())}</div></div></div>
    <h3 style="margin:10px 0 2px">${fmtCode(code)} · ${esc(L(c))}</h3><p class="muted" style="margin:0 0 10px">${esc(L(SECTOR[c.sector]))}</p>
    <h4>${t("rp_world")} · ${TRADE_Y}</h4>
    ${d ? `<p>${t("tr_imp")}: <b>${usd(d.M?.t||0)}</b> · ${t("tr_exp")}: <b>${usd(d.X?.t||0)}</b></p>` : `<p class="muted">${t("tr_none")}</p>`}
    <div class="grid2"><div><h4>${t("tr_top_imp")}</h4>${top("M")}</div><div><h4>${t("tr_top_exp")}</h4>${top("X")}</div></div>
    ${h && h.length ? `<h4>${t("rp_trend")}</h4><table class="t"><thead><tr><th></th>${h.map(r=>`<th class="r">${r[0]}</th>`).join("")}</tr></thead><tbody><tr><td>US$</td>${h.map(r=>`<td class="r num">${usd(r[1])}</td>`).join("")}</tr><tr><td>US$/kg</td>${h.map(r=>`<td class="r num">${r[2]>0?n2(r[2]):"—"}</td>`).join("")}</tr></tbody></table><p class="muted" style="font-size:.8rem">${t("hi_chg",{a:h[0][0],b:h[h.length-1][0]})}: ${pctTxt(h[0][1], h[h.length-1][1])}</p>` : ""}
    <h4>${t("rp_cos")}</h4><p>${t("suppliers")}: <b>${n.s}</b> · ${t("buyers")}: <b>${n.b}</b></p>
    ${fs.length ? `<h4>${t("fe_for")}</h4><ul class="plain">${fs.map(e=>`<li><b>${esc(e.n)}</b> · ${esc(fdate(e.d1))} · ${esc(e.c)}, ${esc(cname(e.cc))}</li>`).join("")}</ul>` : ""}
    <p class="muted" style="font-size:.78rem">${t("tr_src",{y:TRADE_Y})} ${t("hi_src")}</p>
    ${docFoot()}</div>
    <div class="acts no-print"><button class="btn btn-ghost" data-close>${t("close")}</button>${printBtn("rp-print")}</div>`, (m) => { const p = $("#rp-print",m); if(p) p.onclick = printDoc; });
}

/* ---------- 5. Herramientas (portada) ---------- */
function vTools(){
  const card = (href, title, desc) => `<a class="panel toolcard" href="${href}"><h2 style="font-size:1.3rem;margin:0 0 6px">${title}</h2><p class="muted" style="margin:0 0 10px">${desc}</p><span class="btn btn-ghost btn-sm">${t("tl_open")}</span></a>`;
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_tools")}])}
    <h1>${t("tl_title")}</h1><p class="lead">${t("tl_lead")}</p>
    <div class="grid2" style="margin-top:14px">
      ${card("#tablero", t("tl_dash"), t("tl_dash_d"))}
      ${card("#ferias", t("tl_fairs"), t("tl_fairs_d"))}
      ${card("#plantillas", t("tl_tpl"), t("tl_tpl_d"))}
      ${card("#clasificar", t("tl_hs"), t("tl_hs_d"))}
      ${card("#calculadora", t("tl_calc"), t("tl_calc_d"))}
      ${card("#apoyos", t("ap_title"), t("ap_lead"))}
    </div></div>`;
}

/* ---------- 6. Asistente de clasificación ---------- */
let ASQ = "";
function vClassify(){
  let res = "";
  if(ASQ){
    const codes = searchCodes(ASQ).filter(c => CODE[c]).slice(0, 10);
    const words = parseQuery(ASQ).words;
    res = `<h2 style="font-size:1.4rem;margin:18px 0 8px">${t("as_res")}</h2>` + (codes.length ? `<div class="list">${codes.map(code => { const c = CODE[code], ch = code.slice(0,2), s = sectionOf(ch); const h = hayOf(c);
      const hits = words.filter(w => wordHits(w, h));
      return `<div class="row" style="display:block;padding:12px 14px">
        <div class="muted" style="font-size:.8rem">${t("section")} ${s.id} · ${esc(L(s))} › ${t("chapter")} ${ch} · ${esc(L(CHAP[ch]))}</div>
        <div style="margin:4px 0"><span class="mono" style="font-weight:700">${fmtCode(code)}</span> ${esc(L(c))}</div>
        ${hits.length ? `<div class="muted" style="font-size:.82rem">${t("as_match")}: ${hits.map(esc).join(", ")}</div>` : ""}
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px"><a class="btn btn-ghost btn-sm" href="#hs-${code}">${t("as_see")}</a><a class="btn btn-ghost btn-sm" href="#pc-CO-${code.slice(0,4)}">${t("as_tariff")}</a><button class="btn btn-ghost btn-sm" data-usehs="${code}">${t("as_use")}</button></div></div>`; }).join("")}</div>` : `<div class="empty">${t("as_none")}</div>`);
  }
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_tools"),href:"#herramientas"},{label:t("as_title")}])}
    <h1>${t("as_title")}</h1><p class="lead">${t("as_lead")}</p>
    <form id="as-form" class="panel" style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><div class="field" style="flex:1;min-width:220px;margin:0"><label for="as-q">${t("tp_desc")}</label><input id="as-q" maxlength="200" value="${esc(ASQ)}" placeholder="${esc(t("as_ph"))}"></div><button class="btn btn-main" type="submit">${t("as_go")}</button></form>
    ${res}
    <div class="panel" style="margin-top:16px"><h2 style="font-size:1.25rem">${t("as_steps")}</h2><ol>${["as_s1","as_s2","as_s3","as_s4"].map(k=>`<li>${t(k)}</li>`).join("")}</ol>
      <p class="muted" style="margin:0;font-size:.86rem">${t("as_warn")} <a href="https://www.dian.gov.co/" target="_blank" rel="noopener">dian.gov.co</a></p></div></div>`;
}
function bindClassify(){
  const f = $("#as-form"); if(f) f.onsubmit = (e) => { e.preventDefault(); ASQ = $("#as-q").value.trim().slice(0,200); render(); };
  $$("[data-usehs]").forEach(b => b.onclick = () => { TPL.hs = b.dataset.usehs; if(!TPL.desc) TPL.desc = L(CODE[b.dataset.usehs]); go("plantillas"); });
}

/* ---------- 7. Calculadora de costos de exportación ---------- */
const CALC_DEF = { goods:"", unit:"", units:"", pack:"", inland:"", agent:"", docs:"", port:"", freight:"", ins:"0.3", dest:"", duty:"", vat:"", dagent:"", trm:"" };
let CALC = Object.assign({}, CALC_DEF, store.get("calc", {}));
const numIn = (v) => { const n = Number(String(v).replace(/\s/g,"").replace(",",".")); return Number.isFinite(n) && n>=0 && n<1e13 ? n : 0; };
function calcRows(){
  const trm = numIn(CALC.trm) || TRM.v, u = Math.max(1, Math.round(numIn(CALC.units)) || 1);
  const exwCOP = numIn(CALC.unit) * u;
  const fcaCOP = exwCOP + numIn(CALC.pack) + numIn(CALC.inland) + numIn(CALC.agent) + numIn(CALC.docs);
  const fobCOP = fcaCOP + numIn(CALC.port);
  const fob = fobCOP / trm, cfr = fob + numIn(CALC.freight);
  const insur = cfr * 1.10 * numIn(CALC.ins) / 100;
  const cif = cfr + insur, dap = cif + numIn(CALC.dest);
  const duty = cif * numIn(CALC.duty)/100, vat = (cif + duty) * numIn(CALC.vat)/100;
  const ddp = dap + duty + vat + numIn(CALC.dagent);
  return { trm, u, rows: [["EXW", exwCOP/trm], ["FCA", fcaCOP/trm], ["FOB", fob], ["CFR", cfr], ["CIF", cif], ["CPT", cfr], ["CIP", cif], ["DAP", dap], ["DDP", ddp]] };
}
function vCalc(){
  const f = (k, label, ph="") => `<div class="field"><label for="ca-${k}">${label}</label><input id="ca-${k}" data-ca="${k}" inputmode="decimal" maxlength="16" value="${esc(CALC[k])}" placeholder="${esc(ph)}"></div>`;
  const { trm, u, rows } = calcRows();
  const hasData = numIn(CALC.unit) > 0;
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_tools"),href:"#herramientas"},{label:t("ca_title")}])}
    <h1>${t("ca_title")}</h1><p class="lead">${t("ca_lead")}</p>
    <div class="two" style="margin-top:14px">
      <form class="panel" id="ca-form">
        <div class="field"><label for="ca-goods">${t("ca_goods")}</label><input id="ca-goods" data-ca="goods" maxlength="120" value="${esc(CALC.goods)}"></div>
        <div class="grid2" style="gap:0 12px">${f("unit", t("ca_unitcop"), "25000")}${f("units", t("ca_units"), "1000")}</div>
        <h3 style="font-size:1.05rem;margin:10px 0 4px">${t("ca_origin")}</h3>
        <div class="grid2" style="gap:0 12px">${f("pack",t("ca_pack"))}${f("inland",t("ca_inland"))}${f("agent",t("ca_agent"))}${f("docs",t("ca_docs"))}${f("port",t("ca_port"))}</div>
        <h3 style="font-size:1.05rem;margin:10px 0 4px">${t("ca_intl")}</h3>
        <div class="grid2" style="gap:0 12px">${f("freight",t("ca_freight"))}${f("ins",t("ca_ins"),"0.3")}${f("dest",t("ca_dest"))}</div>
        <h3 style="font-size:1.05rem;margin:10px 0 4px">${t("ca_imp")}</h3>
        <div class="grid2" style="gap:0 12px">${f("duty",t("ca_duty"))}${f("vat",t("ca_vat"))}${f("dagent",t("ca_dagent"))}${f("trm",t("ca_trm"),String(TRM.v))}</div>
        <button class="btn btn-main" type="submit">${t("ca_calc")}</button>
      </form>
      <div class="stack"><div class="panel" id="ca-out"><div style="display:flex;gap:10px;align-items:center;margin-bottom:6px"><span style="width:30px;height:30px;display:block">${ICON.logo}</span><h2 style="margin:0;font-size:1.3rem">${esc(CALC.goods || t("ca_title"))}</h2></div>
        <p class="muted" style="margin:0 0 8px;font-size:.86rem">TRM: $${n2(trm)} · ${t("ca_units")}: ${n0(u)}</p>
        <div class="tablewrap" style="border:0"><table class="t"><thead><tr><th>${t("ca_term")}</th><th class="r">${t("ca_total")} US$</th><th class="r">${t("ca_unit")} US$</th><th class="r">${t("ca_total")} COP</th></tr></thead>
        <tbody>${rows.map(([k,v]) => `<tr><td><b>${k}</b></td><td class="r num">${hasData?n2(v):"—"}</td><td class="r num">${hasData?n2(v/u):"—"}</td><td class="r num">${hasData?"$"+n0(v*trm):"—"}</td></tr>`).join("")}</tbody></table></div>
        <p class="muted" style="font-size:.8rem;margin:8px 0 0">${t("ca_note")}</p>${docFoot()}</div>
        <div class="no-print">${printBtn("ca-print")}</div>
        ${incotermsTable()}</div>
    </div></div>`;
}
function bindCalc(){
  const save = () => { $$("[data-ca]").forEach(i => { CALC[i.dataset.ca] = i.value.slice(0, i.dataset.ca==="goods"?120:16); }); store.set("calc", CALC); };
  const fm = $("#ca-form"); if(fm) fm.onsubmit = (e) => { e.preventDefault(); save(); render(); };
  const p = $("#ca-print"); if(p) p.onclick = () => { save(); modal($("#ca-out").outerHTML + `<div class="acts no-print"><button class="btn btn-ghost" data-close>${t("close")}</button>${printBtn("ca-print2")}</div>`, (m) => { const q = $("#ca-print2",m); if(q) q.onclick = printDoc; }); };
}
const INCO_ANY = ["EXW","FCA","CPT","CIP","DAP","DPU","DDP"], INCO_SEA = ["FAS","FOB","CFR","CIF"];
function incotermsTable(){
  const tb = (arr) => `<table class="t"><tbody>${arr.map(k=>`<tr><td style="width:56px"><b>${k}</b></td><td>${t("ic_"+k)}</td></tr>`).join("")}</tbody></table>`;
  return `<div class="panel"><h2 style="font-size:1.25rem">${t("ic_title")}</h2><h3 style="font-size:1rem;margin:8px 0 2px">${t("ic_any")}</h3>${tb(INCO_ANY)}<h3 style="font-size:1rem;margin:12px 0 2px">${t("ic_sea")}</h3>${tb(INCO_SEA)}</div>`;
}

/* ---------- 8. Plantillas de documentos ---------- */
const TPL_DEF = { kind:"quote", dl:"es", sname:"", sid:"", saddr:"", scity:"", scontact:"", bname:"", bid:"", baddr:"", bcity:"", bcontact:"", desc:"", hs:"", qty:"", unit:"kg", price:"", inco:"FOB", place:"", pay:"pay_adv", valid:"30", lead:"30", pack:"", weight:"", num:"" };
let TPL = Object.assign({}, TPL_DEF, store.get("tpl", {}));
const PAYS = ["pay_adv","pay_part","pay_lc","pay_coll","pay_open"];
/* textos del documento, en el idioma que el usuario elija para el documento */
const DOCT = {
  es:{ quote:"COTIZACIÓN", pro:"FACTURA PROFORMA", contract:"CONTRATO DE COMPRAVENTA INTERNACIONAL DE MERCADERÍAS", date:"Fecha", num:"N.º", seller:"Vendedor", buyer:"Comprador", desc:"Descripción", hs:"Partida", qty:"Cantidad", unit:"Unidad", price:"Precio unitario US$", total:"Total US$",
    inco:"Incoterm 2020", pay:"Forma de pago", valid:"Validez de la oferta", days:"días", lead:"Plazo de entrega", pack:"Empaque", weight:"Peso bruto", origin:"País de origen", bank:"Datos bancarios para el pago", bank_n:"(a completar por el vendedor)", sign:"Firma y sello", proforma_n:"Este documento no es una factura de venta; sirve para el trámite de pago, licencias o cartas de crédito del comprador.",
    c_intro:"Entre {s}, en adelante EL VENDEDOR, y {b}, en adelante EL COMPRADOR, se celebra el presente contrato, que se regirá por las siguientes cláusulas:",
    cl:[["Objeto","EL VENDEDOR se obliga a vender y entregar, y EL COMPRADOR a comprar y pagar, la mercancía descrita: {desc}, partida arancelaria {hs}, en cantidad de {qty} {unit}."],
      ["Precio","El precio unitario es de US$ {price} y el valor total del contrato es de US$ {total}, en condición {inco} {place} según las reglas Incoterms® 2020 de la Cámara de Comercio Internacional."],
      ["Entrega y transmisión del riesgo","La entrega se hará en un plazo de {lead} días contados desde la confirmación del pago o del instrumento de pago. El riesgo y los costos se transmiten al COMPRADOR conforme al Incoterm {inco} pactado."],
      ["Pago","{pay}. Los gastos bancarios en el país de cada parte corren por cuenta de esa parte."],
      ["Calidad, empaque e inspección","La mercancía cumplirá las especificaciones acordadas y se entregará en {pack}. EL COMPRADOR podrá inspeccionarla antes del embarque por cuenta propia. Los reclamos por calidad o cantidad se presentarán por escrito dentro de los 15 días siguientes a la llegada."],
      ["Documentos","EL VENDEDOR entregará factura comercial, lista de empaque, documento de transporte y certificado de origen cuando aplique, y los demás documentos que exija el Incoterm pactado."],
      ["Fuerza mayor","Ninguna parte responderá por incumplimientos causados por hechos imprevisibles e irresistibles ajenos a su control, siempre que avise a la otra parte por escrito dentro de los 5 días siguientes."],
      ["Ley aplicable","Este contrato se rige por la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías (Viena, 1980), aprobada en Colombia por la Ley 518 de 1999, y en lo no previsto por la ley colombiana."],
      ["Solución de controversias","Las diferencias se intentarán resolver de forma directa. Si no hay acuerdo en 30 días, se someterán a arbitraje del Centro de Arbitraje y Conciliación de la Cámara de Comercio de Bogotá, con un árbitro, en idioma español."],
      ["Notificaciones e idioma","Las comunicaciones se harán por escrito a las direcciones y correos indicados. Este contrato se firma en dos ejemplares del mismo tenor."]] },
  en:{ quote:"QUOTATION", pro:"PROFORMA INVOICE", contract:"INTERNATIONAL SALE OF GOODS CONTRACT", date:"Date", num:"No.", seller:"Seller", buyer:"Buyer", desc:"Description", hs:"HS code", qty:"Quantity", unit:"Unit", price:"Unit price US$", total:"Total US$",
    inco:"Incoterm 2020", pay:"Payment terms", valid:"Offer validity", days:"days", lead:"Delivery time", pack:"Packaging", weight:"Gross weight", origin:"Country of origin", bank:"Bank details for payment", bank_n:"(to be completed by the seller)", sign:"Signature and stamp", proforma_n:"This document is not a sales invoice; it is issued for the buyer's payment, licence or letter of credit procedures.",
    c_intro:"This contract is entered into by {s}, hereinafter THE SELLER, and {b}, hereinafter THE BUYER, under the following clauses:",
    cl:[["Subject","THE SELLER agrees to sell and deliver, and THE BUYER to buy and pay for, the goods described: {desc}, HS code {hs}, in a quantity of {qty} {unit}."],
      ["Price","The unit price is US$ {price} and the total contract value is US$ {total}, {inco} {place} under the International Chamber of Commerce Incoterms® 2020 rules."],
      ["Delivery and transfer of risk","Delivery shall take place within {lead} days from confirmation of payment or of the payment instrument. Risk and costs pass to THE BUYER according to the agreed Incoterm {inco}."],
      ["Payment","{pay}. Bank charges in each party's country are borne by that party."],
      ["Quality, packaging and inspection","The goods shall meet the agreed specifications and be delivered in {pack}. THE BUYER may inspect them before shipment at its own cost. Quality or quantity claims shall be made in writing within 15 days after arrival."],
      ["Documents","THE SELLER shall provide commercial invoice, packing list, transport document and certificate of origin where applicable, and any other documents required by the agreed Incoterm."],
      ["Force majeure","Neither party shall be liable for non-performance caused by unforeseeable and irresistible events beyond its control, provided it notifies the other party in writing within 5 days."],
      ["Governing law","This contract is governed by the United Nations Convention on Contracts for the International Sale of Goods (Vienna, 1980), approved in Colombia by Law 518 of 1999, and otherwise by Colombian law."],
      ["Dispute resolution","The parties shall first try to settle any dispute directly. If no agreement is reached within 30 days, it shall be submitted to arbitration at the Arbitration and Conciliation Center of the Bogotá Chamber of Commerce, with one arbitrator."],
      ["Notices and language","Notices shall be given in writing to the addresses and emails stated. This contract is signed in two counterparts of equal content."]] },
  pt:{ quote:"COTAÇÃO", pro:"FATURA PRÓ-FORMA", contract:"CONTRATO DE COMPRA E VENDA INTERNACIONAL DE MERCADORIAS", date:"Data", num:"N.º", seller:"Vendedor", buyer:"Comprador", desc:"Descrição", hs:"Posição", qty:"Quantidade", unit:"Unidade", price:"Preço unitário US$", total:"Total US$",
    inco:"Incoterm 2020", pay:"Forma de pagamento", valid:"Validade da oferta", days:"dias", lead:"Prazo de entrega", pack:"Embalagem", weight:"Peso bruto", origin:"País de origem", bank:"Dados bancários para pagamento", bank_n:"(a preencher pelo vendedor)", sign:"Assinatura e carimbo", proforma_n:"Este documento não é uma fatura de venda; serve para os trâmites de pagamento, licenças ou cartas de crédito do comprador.",
    c_intro:"Entre {s}, doravante O VENDEDOR, e {b}, doravante O COMPRADOR, é celebrado o presente contrato, regido pelas seguintes cláusulas:",
    cl:[["Objeto","O VENDEDOR se obriga a vender e entregar, e O COMPRADOR a comprar e pagar, a mercadoria descrita: {desc}, posição tarifária {hs}, na quantidade de {qty} {unit}."],
      ["Preço","O preço unitário é de US$ {price} e o valor total do contrato é de US$ {total}, na condição {inco} {place} conforme as regras Incoterms® 2020 da Câmara de Comércio Internacional."],
      ["Entrega e transferência do risco","A entrega será feita em {lead} dias contados da confirmação do pagamento ou do instrumento de pagamento. O risco e os custos passam ao COMPRADOR conforme o Incoterm {inco} pactuado."],
      ["Pagamento","{pay}. As despesas bancárias no país de cada parte correm por conta dessa parte."],
      ["Qualidade, embalagem e inspeção","A mercadoria cumprirá as especificações acordadas e será entregue em {pack}. O COMPRADOR poderá inspecioná-la antes do embarque por sua conta. As reclamações de qualidade ou quantidade serão feitas por escrito em até 15 dias após a chegada."],
      ["Documentos","O VENDEDOR entregará fatura comercial, romaneio, documento de transporte e certificado de origem quando aplicável, e os demais documentos exigidos pelo Incoterm pactuado."],
      ["Força maior","Nenhuma parte responderá por descumprimentos causados por fatos imprevisíveis e irresistíveis alheios ao seu controle, desde que avise a outra parte por escrito em até 5 dias."],
      ["Lei aplicável","Este contrato rege-se pela Convenção das Nações Unidas sobre Contratos de Compra e Venda Internacional de Mercadorias (Viena, 1980), aprovada na Colômbia pela Lei 518 de 1999, e no que não estiver previsto pela lei colombiana."],
      ["Solução de controvérsias","As divergências serão tratadas primeiro de forma direta. Sem acordo em 30 dias, serão submetidas à arbitragem do Centro de Arbitragem e Conciliação da Câmara de Comércio de Bogotá, com um árbitro."],
      ["Notificações e idioma","As comunicações serão feitas por escrito nos endereços e e-mails indicados. Este contrato é assinado em duas vias de igual teor."]] }
};
const PAY_TXT = {
  es:{pay_adv:"Pago anticipado por transferencia bancaria", pay_part:"30% anticipado y 70% contra copia de los documentos de embarque", pay_lc:"Carta de crédito irrevocable a la vista", pay_coll:"Cobranza documentaria", pay_open:"Cuenta abierta a 30 días"},
  en:{pay_adv:"Advance payment by bank transfer", pay_part:"30% in advance and 70% against copy of shipping documents", pay_lc:"Irrevocable letter of credit at sight", pay_coll:"Documentary collection", pay_open:"Open account at 30 days"},
  pt:{pay_adv:"Pagamento antecipado por transferência bancária", pay_part:"30% antecipado e 70% contra cópia dos documentos de embarque", pay_lc:"Carta de crédito irrevogável à vista", pay_coll:"Cobrança documentária", pay_open:"Conta aberta a 30 dias"}
};
function vTemplates(){
  if(ACC && !TPL.sname){ TPL.sname = ACC.name || ""; TPL.scity = [ACC.city, cname(ACC.cc)].filter(Boolean).join(", "); TPL.sid = ACC.nit || ""; }
  const f = (k, label, extra="") => `<div class="field"><label for="tp-${k}">${label}</label><input id="tp-${k}" data-tp="${k}" maxlength="${["desc","saddr","baddr","scontact","bcontact"].includes(k)?200:80}" value="${esc(TPL[k])}" ${extra}></div>`;
  const kinds = [["quote","tp_quote"],["pro","tp_pro"],["contract","tp_contract"]];
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_tools"),href:"#herramientas"},{label:t("tp_title")}])}
    <h1>${t("tp_title")}</h1><p class="lead">${t("tp_lead")}</p>
    <form class="panel" id="tp-form" style="margin-top:14px">
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px" role="radiogroup">${kinds.map(([k,l])=>`<label class="tchip"><input type="radio" name="tp-kind" value="${k}" ${TPL.kind===k?"checked":""}> ${t(l)}</label>`).join("")}</div>
      <div class="field" style="max-width:260px"><label for="tp-dl">${t("tp_doclang")}</label><select id="tp-dl" data-tp="dl"><option value="es" ${TPL.dl==="es"?"selected":""}>Español</option><option value="en" ${TPL.dl==="en"?"selected":""}>English</option><option value="pt" ${TPL.dl==="pt"?"selected":""}>Português</option></select></div>
      <div class="grid2">
        <div><h3 style="font-size:1.05rem">${t("tp_seller")}</h3>${f("sname",t("tp_name"))}${f("sid",t("tp_id"))}${f("saddr",t("tp_addr"))}${f("scity",t("tp_city"))}${f("scontact",t("tp_contact"))}</div>
        <div><h3 style="font-size:1.05rem">${t("tp_buyer")}</h3>${f("bname",t("tp_name"))}${f("bid",t("tp_id"))}${f("baddr",t("tp_addr"))}${f("bcity",t("tp_city"))}${f("bcontact",t("tp_contact"))}</div>
      </div>
      <h3 style="font-size:1.05rem">${t("tp_goods")}</h3>
      ${f("desc",t("tp_desc"))}
      <div class="grid2" style="gap:0 12px">${f("hs",t("tp_hs"),'inputmode="numeric" placeholder="0901.11"')}${f("qty",t("tp_qty"),'inputmode="decimal"')}${f("unit",t("tp_unit"))}${f("price",t("tp_price"),'inputmode="decimal"')}
        <div class="field"><label for="tp-inco">${t("tp_inco")}</label><select id="tp-inco" data-tp="inco">${[...INCO_ANY,...INCO_SEA].map(k=>`<option ${TPL.inco===k?"selected":""}>${k}</option>`).join("")}</select></div>
        ${f("place",t("tp_place"),'placeholder="Cartagena, Colombia"')}
        <div class="field"><label for="tp-pay">${t("tp_pay")}</label><select id="tp-pay" data-tp="pay">${PAYS.map(k=>`<option value="${k}" ${TPL.pay===k?"selected":""}>${t(k)}</option>`).join("")}</select></div>
        ${f("valid",t("tp_valid"),'inputmode="numeric"')}${f("lead",t("tp_lead_t"),'inputmode="numeric"')}${f("pack",t("tp_pack"))}${f("weight",t("tp_weight"),'inputmode="decimal"')}${f("num",t("tp_num"))}</div>
      <p class="muted" style="font-size:.84rem">${t("tp_legal")}</p>
      <button class="btn btn-main" type="submit">${t("tp_gen")}</button>
    </form>
    ${incotermsTable()}</div>`;
}
function bindTemplates(){
  const save = () => { $$("[data-tp]").forEach(i => { TPL[i.dataset.tp] = String(i.value).slice(0,200); }); const k = $("input[name=tp-kind]:checked"); if(k) TPL.kind = k.value; store.set("tpl", TPL); };
  $$("input[name=tp-kind]").forEach(r => r.onchange = save);
  const fm = $("#tp-form"); if(fm) fm.onsubmit = (e) => { e.preventDefault(); save(); openDoc(); };
}
function openDoc(){
  const D = DOCT[TPL.dl] || DOCT.es, P = PAY_TXT[TPL.dl] || PAY_TXT.es, dl = TPL.dl;
  const lc = dl==="en"?"en-US":dl==="pt"?"pt-BR":"es-CO";
  const q = numIn(TPL.qty), p = numIn(TPL.price), tot = q*p;
  const money = (v) => v.toLocaleString(lc,{minimumFractionDigits:2, maximumFractionDigits:2});
  const today = new Date().toLocaleDateString(lc,{day:"numeric",month:"long",year:"numeric"});
  const hs = TPL.hs ? (TPL.hs.replace(/\D/g,"").length===6 ? fmtCode(TPL.hs.replace(/\D/g,"")) : TPL.hs) : "—";
  const party = (who, n, id, a, c, ct) => `<div><div class="muted" style="font-size:.8rem;text-transform:uppercase">${who}</div><b>${esc(n||"—")}</b>${id?`<div>${esc(id)}</div>`:""}${a?`<div>${esc(a)}</div>`:""}${c?`<div>${esc(c)}</div>`:""}${ct?`<div>${esc(ct)}</div>`:""}</div>`;
  const parties = `<div class="grid2" style="margin:10px 0">${party(D.seller,TPL.sname,TPL.sid,TPL.saddr,TPL.scity,TPL.scontact)}${party(D.buyer,TPL.bname,TPL.bid,TPL.baddr,TPL.bcity,TPL.bcontact)}</div>`;
  const items = `<table class="t"><thead><tr><th>${D.desc}</th><th>${D.hs}</th><th class="r">${D.qty}</th><th>${D.unit}</th><th class="r">${D.price}</th><th class="r">${D.total}</th></tr></thead>
    <tbody><tr><td>${esc(TPL.desc||"—")}</td><td class="mono">${esc(hs)}</td><td class="r num">${q?q.toLocaleString(lc):"—"}</td><td>${esc(TPL.unit)}</td><td class="r num">${p?money(p):"—"}</td><td class="r num"><b>${tot?money(tot):"—"}</b></td></tr></tbody></table>`;
  const terms = `<dl class="kv" style="margin-top:10px"><dt>${D.inco}</dt><dd>${esc(TPL.inco)} ${esc(TPL.place)}</dd><dt>${D.pay}</dt><dd>${esc(P[TPL.pay]||"")}</dd>
    ${TPL.kind==="quote"?`<dt>${D.valid}</dt><dd>${esc(TPL.valid)} ${D.days}</dd>`:""}<dt>${D.lead}</dt><dd>${esc(TPL.lead)} ${D.days}</dd>
    ${TPL.pack?`<dt>${D.pack}</dt><dd>${esc(TPL.pack)}</dd>`:""}${TPL.weight?`<dt>${D.weight}</dt><dd>${esc(TPL.weight)} kg</dd>`:""}<dt>${D.origin}</dt><dd>${esc(cname("CO"))}</dd></dl>`;
  const sig = `<div class="grid2" style="margin-top:34px">${[TPL.sname, TPL.kind==="contract"?TPL.bname:null].filter(x=>x!==null).map(n=>`<div style="border-top:1px solid #333;padding-top:6px">${D.sign}<br><b>${esc(n||"")}</b></div>`).join("")}</div>`;
  let body;
  if(TPL.kind==="contract"){
    const fill = (s) => s.replace(/\{(\w+)\}/g, (m,k) => esc(({desc:TPL.desc||"—", hs, qty:q?q.toLocaleString(lc):"—", unit:TPL.unit, price:p?money(p):"—", total:tot?money(tot):"—", inco:TPL.inco, place:TPL.place, lead:TPL.lead||"—", pay:P[TPL.pay]||"", pack:TPL.pack||"—", s:TPL.sname||"—", b:TPL.bname||"—"})[k] ?? m));
    body = `<h2 style="text-align:center;font-size:1.25rem">${D.contract}</h2><p class="muted" style="text-align:center">${D.date}: ${today}${TPL.num?` · ${D.num} ${esc(TPL.num)}`:""}</p>${parties}
      <p>${fill(D.c_intro)}</p><ol>${D.cl.map(([h,x])=>`<li><b>${h}.</b> ${fill(x)}</li>`).join("")}</ol>${sig}`;
  } else {
    body = `<div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><h2 style="margin:0;font-size:1.4rem">${TPL.kind==="pro"?D.pro:D.quote}</h2><div class="muted">${D.date}: ${today}${TPL.num?`<br>${D.num} ${esc(TPL.num)}`:""}</div></div>
      ${parties}${items}${terms}${TPL.kind==="pro"?`<p><b>${D.bank}</b> ${D.bank_n}</p><p class="muted" style="font-size:.84rem">${D.proforma_n}</p>`:""}${sig}`;
  }
  modal(`<div class="doc">${body}<p class="muted no-print" style="font-size:.8rem">${t("tp_legal")}</p>${docFoot()}</div><div class="acts no-print"><button class="btn btn-ghost" data-close>${t("close")}</button>${printBtn("tp-print")}</div>`, (m) => { const b = $("#tp-print",m); if(b) b.onclick = printDoc; });
}

/* ---------- 9. Tablero de resultados ---------- */
function vDashboard(){
  const head = `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("nav_tools"),href:"#herramientas"},{label:t("db_title")}])}<h1>${t("db_title")}</h1>`;
  if(!PAID() || !ACC) return head + `<div class="empty" style="margin-top:16px"><b>${t("db_title")}</b>${t("db_need")}<p><a class="btn btn-main" href="${PAID()?"#registro":"#planes"}">${PAID()?t("create_profile"):t("see_plans")}</a></p></div></div>`;
  const ths = threads(), msgs = ths.flatMap(x => x.msgs);
  const sent = msgs.filter(m => m.me).length, recv = msgs.length - sent;
  const reqs = store.get("requests", []), quotes = myQuotes(), opps = myOpps(), pros = prospects();
  const won = pros.filter(p => p.stage==="won"), lost = pros.filter(p => p.stage==="lost");
  const wonV = won.reduce((s,p) => s + (Number(p.value)||0), 0);
  const rate = (won.length+lost.length) ? Math.round(won.length/(won.length+lost.length)*100)+"%" : "—";
  const kpi = (v, l) => `<div class="stat"><b class="num">${v}</b><span>${l}</span></div>`;
  const maxSt = Math.max(1, ...STAGES.map(s => pros.filter(p=>p.stage===s).length));
  const funnel = STAGES.map(s => { const n = pros.filter(p=>p.stage===s).length; return `<div class="fun"><span>${t("crm_st_"+s)}</span><div class="funb"><i style="width:${Math.round(n/maxSt*100)}%"></i></div><b class="num">${n}</b></div>`; }).join("");
  /* actividad por mes: mensajes enviados, solicitudes y cotizaciones */
  const now = new Date(), months = [];
  for(let i=5;i>=0;i--){ const d = new Date(now.getFullYear(), now.getMonth()-i, 1); months.push(d.toISOString().slice(0,7)); }
  const dates = [...msgs.filter(m=>m.me).map(m=>m.at), ...reqs.map(r=>r.at), ...quotes.map(q=>q.at)].map(x => { try { return new Date(x).toISOString().slice(0,7); } catch(e){ return ""; } });
  const per = months.map(m => dates.filter(d => d===m).length);
  const labels = months.map(m => fdate(m+"-15",{month:"short"}));
  const maxA = Math.max(1, ...per);
  return head + `<p class="lead">${t("db_lead")}</p>
    <div class="stats" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-top:14px">
      ${kpi(ths.length, t("db_conv"))}${kpi(sent, t("db_sent"))}${kpi(recv, t("db_recv"))}${kpi(reqs.length, t("db_req"))}
      ${kpi(quotes.length, t("db_quotes"))}${kpi(opps.length, t("db_opps"))}${kpi(pros.filter(p=>!["won","lost"].includes(p.stage)).length, t("db_pros"))}${kpi(won.length, t("db_won"))}
      ${kpi(wonV ? n0(wonV) : "—", t("db_wonv"))}${kpi(rate, t("db_conv_r"))}${kpi("—", t("db_views"))}</div>
    <p class="muted" style="font-size:.8rem;margin:4px 0 0">${t("db_views")}: ${t("db_views_n")}</p>
    <div class="two" style="margin-top:16px">
      <div class="panel"><h2 style="font-size:1.3rem">${t("db_funnel")}</h2>${funnel}<p style="margin:10px 0 0"><a class="btn btn-ghost btn-sm" href="#prospectos">${t("crm_open")}</a></p></div>
      <div class="panel"><h2 style="font-size:1.3rem">${t("db_act")}</h2><div class="hbars">${per.map((v,i)=>`<div class="hb"><div class="hbv" style="height:${Math.max(3,Math.round(v/maxA*100))}%" title="${v}"></div><span>${esc(labels[i])}</span><em>${v}</em></div>`).join("")}</div></div>
    </div></div>`;
}

/* ---------- Estilos ---------- */
(() => { const st = document.createElement("style"); st.textContent = `
  .hbars{display:flex;gap:8px;align-items:flex-end;height:150px;padding:6px 0 22px;position:relative}
  .hb{flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;position:relative;min-width:0}
  .hbv{width:100%;max-width:46px;background:var(--brand,#1E3A4C);border-radius:6px 6px 0 0}
  .hb span{position:absolute;bottom:-20px;font-size:.78rem;color:var(--muted,#5b6b75);white-space:nowrap}
  .hb em{font-style:normal;font-size:.78rem;font-weight:600}
  .fairs{display:grid;gap:12px}
  .fair{display:grid;grid-template-columns:64px minmax(0,1fr);gap:12px;background:#fff;border:1px solid var(--line,#dde5ea);border-radius:14px;padding:14px}
  .fair.past{opacity:.6}
  .fair h3{margin:0;font-size:1.15rem}
  .fd{background:#E3F6F2;border-radius:12px;text-align:center;padding:8px 4px;align-self:start}
  .fd b{display:block;font-size:1.5rem;line-height:1} .fd span{font-size:.8rem;text-transform:uppercase}
  .toolcard{display:block;text-decoration:none;color:inherit} .toolcard:hover{border-color:var(--brand,#1E3A4C)}
  .fun{display:grid;grid-template-columns:120px minmax(0,1fr) 34px;gap:8px;align-items:center;margin:6px 0;font-size:.9rem}
  .funb{background:#eef3f6;border-radius:999px;height:12px;overflow:hidden} .funb i{display:block;height:100%;background:#E0A21A;border-radius:999px}
  .tchip{display:inline-flex;gap:6px;align-items:center;border:1px solid var(--line,#dde5ea);border-radius:999px;padding:6px 12px;cursor:pointer;background:#fff}
  .doc h4{margin:14px 0 4px;font-size:1rem} .doc ol li{margin:6px 0}
  @media (max-width:520px){ .fun{grid-template-columns:90px minmax(0,1fr) 28px} .fair{grid-template-columns:52px minmax(0,1fr)} }
`; document.head.appendChild(st); })();

/* =====================================================================
   Global Trade Finder · versión con servidor (solo entra en la compilación del servidor)
   La pantalla habla con el servidor: cuentas reales, datos en la base (Neon),
   mensajes y cotizaciones entre empresas, verificación, pagos con Bold y panel del Superadministrador.
   Las claves que antes se guardaban en el navegador ahora se guardan en el servidor.
   ===================================================================== */
const SRV = true;
const LS_TOKEN = "gtf-sesion";
let TOKEN = (() => { try { return localStorage.getItem(LS_TOKEN) || null; } catch(e){ return null; } })();
let PUB = null, YO = null, COBRO = null, EMPRESA = null, QUOTES_IN = [], NOTIFS = [], PAGOS = [], BITACORA = [], SA_DATA = null, SA_REAL = false;
const SYNC_KEYS = ["account","saved","alerts","requests","users","catalog","threads","myopps","quotes","notify","ratings","crm","calc","tpl","observer"];
const SV = {};
let USERS_SNAP = new Set();   // datos de la sesión (no quedan en el navegador al salir)

/* ---------- Producción solo con empresas reales; la demostración con ejemplos (19 nov 2026) ----------
   En la app real se muestran solo las empresas de la DIAN y las registradas. Las ficticias quedan
   solo en la demostración (?demo=1 o #demo), con una franja que lo dice; una sesión iniciada nunca ve ficticias. */
const MODO_DEMO = (() => { try {
  if(/[?&]demo\b/.test(location.search) || /^#demo\b/.test(location.hash)) sessionStorage.setItem("gtf-demo", "1");
  if(/[?&]real\b/.test(location.search) || /^#(registro|ingresar|clave=)/.test(location.hash)) sessionStorage.removeItem("gtf-demo");
  return !TOKEN && sessionStorage.getItem("gtf-demo") === "1";
} catch(e){ return false; } })();
if(!MODO_DEMO){ for(let i = ALLC.length-1; i >= 0; i--) if(ALLC[i].demo) ALLC.splice(i, 1); }
function salirDemo(){ try { sessionStorage.removeItem("gtf-demo"); } catch(e){} location.href = location.pathname + "#inicio"; }
function entrarDemo(){ try { sessionStorage.setItem("gtf-demo", "1"); } catch(e){} location.href = location.pathname + "?demo=1#inicio"; }

/* ---------- Textos ---------- */
const TXT10 = {
  es:{ login:"Ingresar", login_t:"Ingresar a Global Trade Finder", email:"Correo", pass:"Contraseña", forgot:"¿Olvidó o aún no tiene contraseña?", forgot_t:"Enlace para su contraseña",
    forgot_d:"Escriba su correo. Si tiene cuenta, le enviamos un enlace para crear o cambiar la contraseña (sirve una vez y vence en 1 hora).", send_link:"Enviar enlace", link_sent:"Si el correo tiene cuenta, en unos minutos le llega el enlace. Revise también el correo no deseado.",
    newpass_t:"Cree su contraseña", newpass:"Nueva contraseña (mínimo 10 caracteres)", newpass2:"Repita la contraseña", save_pass:"Guardar contraseña", pass_ok:"Contraseña guardada. Ya puede ingresar.", pass_mismatch:"Las contraseñas no coinciden.",
    su_title:"Cree su cuenta", su_co:"Empresa · 15 días gratis", su_co_d:"Busque compradores y proveedores, envíe mensajes y cotizaciones. Pague solo si le sirve.", su_obs:"Observador · gratis", su_obs_d:"Explore mercados y empresas con acceso limitado.",
    su_company:"Nombre de la empresa", su_nit:"NIT (sin dígito de verificación)", su_you:"Su nombre", su_plan:"Plan para la prueba", su_accept:"Acepto los términos y autorizo el tratamiento de mis datos (Ley 1581 de 2012)",
    su_go:"Crear cuenta", su_ok:"Listo. Le enviamos un correo a {e} con el enlace para crear su contraseña (vence en 1 hora).", have_acc:"¿Ya tiene cuenta?",
    sub_t:"Suscripción", sub_state:"Estado", sub_trial:"Prueba gratis hasta", sub_paid:"Pagado hasta", sub_next:"Plan siguiente", sub_pay:"Pagar mensualidad con Bold", sub_pay_d:"Tarjeta, PSE, Nequi o llave Bre-B. La pasarela es de Bold.",
    sub_closed:"El acceso de su empresa está cerrado por pago. Sus datos siguen guardados: pague la mensualidad para volver a usar la plataforma.", sub_pending:"Su mensualidad venció. El acceso se cierra el {d} a las 24:00 si no se paga.", cb_warn:"Su mensualidad está vencida: el acceso se cierra en {n} día(s).", alerts_paid:"Las alertas por correo son de los planes pagos. Cree una cuenta de empresa con 15 días gratis.",
    pay_t:"Pagar en línea", pay_ref:"Referencia {r}. Al terminar, Bold lo trae de vuelta y todo se activa solo cuando el pago quede aprobado.", pay_until:"Con este pago la mensualidad queda al día hasta el {d}.",
    pay_conf:"Confirmando su pago con Bold…", pay_ok:"Pago aprobado", pay_rev:"Recibimos su pago, pero hay que revisarlo. SkyNet Genesis le escribe; no pague de nuevo.", pay_pend:"Bold todavía no confirma el pago. Si pagó, se activa solo en unos minutos.", pay_rej:"El pago no fue aprobado. No se activó nada.",
    chpass:"Cambiar contraseña", cur_pass:"Contraseña actual", notifs:"Avisos", log_t:"Bitácora de la empresa", qin_t:"Cotizaciones recibidas", qin_none:"Aún no recibe cotizaciones para sus requerimientos.",
    fict_block:"Esta es una empresa ficticia de demostración: no recibe mensajes ni solicitudes.", sess_end:"Su sesión terminó. Ingrese de nuevo.", net_err:"Sin conexión con el servidor. Revise su internet.",
    saved_srv:"Guardado", rejected:"No se guardó: {m}", contact_req:"Solicitar contacto a SkyNet Genesis", contact_req_d:"SkyNet Genesis busca a esta empresa, le presenta su interés y le avisa cuando acepte el contacto.",
    contact_msg:"¿Qué le interesa de esta empresa? (producto, cantidades, mercado)", contact_ok:"Solicitud enviada. Le avisamos por correo y en Avisos.",
    claim_form:"Formulario de reclamo o retiro", claim_kind:"¿Qué desea?", claim_k1:"Reclamar el perfil y publicar datos de contacto", claim_k2:"Retirar el perfil de la plataforma", claim_name:"Su nombre", claim_role:"Cargo en la empresa", claim_tel:"Teléfono", claim_msg:"Mensaje",
    claim_acc:"Declaro que represento a esta empresa y autorizo el tratamiento de mis datos para atender esta solicitud (Ley 1581 de 2012).", claim_ok:"Recibimos su solicitud. Le respondemos en máximo 15 días hábiles.",
    claimed:"Perfil reclamado por la empresa", publish:"Autorizo publicar los datos de contacto de la empresa a las empresas con plan (Ley 1581 de 2012).",
    reg_strip:"<b>Global Trade Finder.</b> Empresas de Colombia: directorio público de la DIAN (sin datos de contacto). Empresas marcadas \"Registrada\": tienen cuenta y reciben mensajes. Cifras mundiales: UN Comtrade (ONU).", demo_mode_strip:"<b>Está viendo la demostración.</b> Las empresas de otros países que aparecen aquí son ejemplos ficticios para mostrar cómo funciona; en la plataforma real solo aparecen empresas reales.", demo_exit:"Salir de la demostración", demo_enter:"Ver la demostración",
    registered:"Registrada", sa_title:"Superadministrador", sa_back:"Volver al panel del Superadministrador", sa_in:"Está dentro de {e} como administrador (control de calidad).", srv_save_err:"No se pudo guardar en el servidor: {m}" },
  en:{ login:"Log in", login_t:"Log in to Global Trade Finder", email:"Email", pass:"Password", forgot:"Forgot or don't have a password yet?", forgot_t:"Password link",
    forgot_d:"Enter your email. If you have an account, we will send you a link to create or change your password (single use, valid for 1 hour).", send_link:"Send link", link_sent:"If the email has an account, the link will arrive in a few minutes. Check your spam folder too.",
    newpass_t:"Create your password", newpass:"New password (at least 10 characters)", newpass2:"Repeat the password", save_pass:"Save password", pass_ok:"Password saved. You can log in now.", pass_mismatch:"Passwords do not match.",
    su_title:"Create your account", su_co:"Company · 15 days free", su_co_d:"Find buyers and suppliers, send messages and quotes. Pay only if it works for you.", su_obs:"Observer · free", su_obs_d:"Explore markets and companies with limited access.",
    su_company:"Company name", su_nit:"Tax ID (NIT)", su_you:"Your name", su_plan:"Plan for the trial", su_accept:"I accept the terms and authorize the processing of my data (Colombian Law 1581 of 2012)",
    su_go:"Create account", su_ok:"Done. We sent an email to {e} with the link to create your password (valid for 1 hour).", have_acc:"Already have an account?",
    sub_t:"Subscription", sub_state:"Status", sub_trial:"Free trial until", sub_paid:"Paid until", sub_next:"Next plan", sub_pay:"Pay monthly fee with Bold", sub_pay_d:"Card, PSE, Nequi or Bre-B key. The payment gateway is Bold.",
    sub_closed:"Your company's access is closed for non-payment. Your data is kept: pay the monthly fee to use the platform again.", sub_pending:"Your monthly fee is overdue. Access closes on {d} at midnight if unpaid.", cb_warn:"Your monthly fee is overdue: access closes in {n} day(s).", alerts_paid:"Email alerts are part of the paid plans. Create a company account with 15 free days.",
    pay_t:"Pay online", pay_ref:"Reference {r}. When you finish, Bold brings you back and everything activates once the payment is approved.", pay_until:"With this payment your subscription is paid until {d}.",
    pay_conf:"Confirming your payment with Bold…", pay_ok:"Payment approved", pay_rev:"We received your payment but it needs review. SkyNet Genesis will contact you; do not pay again.", pay_pend:"Bold has not confirmed the payment yet. If you paid, it will activate in a few minutes.", pay_rej:"The payment was not approved. Nothing was activated.",
    chpass:"Change password", cur_pass:"Current password", notifs:"Notices", log_t:"Company activity log", qin_t:"Quotes received", qin_none:"You have not received quotes for your requests yet.",
    fict_block:"This is a fictitious demo company: it does not receive messages or requests.", sess_end:"Your session ended. Please log in again.", net_err:"No connection to the server. Check your internet.",
    saved_srv:"Saved", rejected:"Not saved: {m}", contact_req:"Ask SkyNet Genesis for the contact", contact_req_d:"SkyNet Genesis reaches out to this company, presents your interest and lets you know when it accepts the contact.",
    contact_msg:"What interests you about this company? (product, quantities, market)", contact_ok:"Request sent. We will let you know by email and in Notices.",
    claim_form:"Claim or removal form", claim_kind:"What would you like?", claim_k1:"Claim the profile and publish contact details", claim_k2:"Remove the profile from the platform", claim_name:"Your name", claim_role:"Position in the company", claim_tel:"Phone", claim_msg:"Message",
    claim_acc:"I declare that I represent this company and authorize the processing of my data to handle this request (Colombian Law 1581 of 2012).", claim_ok:"We received your request. We will reply within 15 business days.",
    claimed:"Profile claimed by the company", publish:"I authorize showing the company's contact details to subscribed companies (Colombian Law 1581 of 2012).",
    reg_strip:"<b>Global Trade Finder.</b> Colombian companies: DIAN public directory (no contact data). Companies marked \"Registered\" have an account and receive messages. World figures: UN Comtrade.", demo_mode_strip:"<b>You are viewing the demo.</b> Companies from other countries shown here are fictitious examples; the real platform only shows real companies.", demo_exit:"Leave the demo", demo_enter:"View the demo",
    registered:"Registered", sa_title:"Superadministrator", sa_back:"Back to the Superadministrator panel", sa_in:"You are inside {e} as administrator (quality control).", srv_save_err:"Could not save on the server: {m}" },
  pt:{ login:"Entrar", login_t:"Entrar no Global Trade Finder", email:"E-mail", pass:"Senha", forgot:"Esqueceu ou ainda não tem senha?", forgot_t:"Link para sua senha",
    forgot_d:"Digite seu e-mail. Se tiver conta, enviamos um link para criar ou trocar a senha (uso único, vale 1 hora).", send_link:"Enviar link", link_sent:"Se o e-mail tiver conta, o link chega em alguns minutos. Confira também o spam.",
    newpass_t:"Crie sua senha", newpass:"Nova senha (mínimo 10 caracteres)", newpass2:"Repita a senha", save_pass:"Salvar senha", pass_ok:"Senha salva. Já pode entrar.", pass_mismatch:"As senhas não coincidem.",
    su_title:"Crie sua conta", su_co:"Empresa · 15 dias grátis", su_co_d:"Encontre compradores e fornecedores, envie mensagens e cotações. Pague só se for útil.", su_obs:"Observador · grátis", su_obs_d:"Explore mercados e empresas com acesso limitado.",
    su_company:"Nome da empresa", su_nit:"Identificação fiscal (NIT)", su_you:"Seu nome", su_plan:"Plano para o teste", su_accept:"Aceito os termos e autorizo o tratamento dos meus dados (Lei colombiana 1581 de 2012)",
    su_go:"Criar conta", su_ok:"Pronto. Enviamos um e-mail para {e} com o link para criar sua senha (vale 1 hora).", have_acc:"Já tem conta?",
    sub_t:"Assinatura", sub_state:"Situação", sub_trial:"Teste grátis até", sub_paid:"Pago até", sub_next:"Próximo plano", sub_pay:"Pagar mensalidade com Bold", sub_pay_d:"Cartão, PSE, Nequi ou chave Bre-B. O gateway é da Bold.",
    sub_closed:"O acesso da sua empresa está fechado por falta de pagamento. Seus dados continuam salvos: pague a mensalidade para voltar a usar a plataforma.", sub_pending:"Sua mensalidade venceu. O acesso fecha em {d} às 24:00 se não for paga.", cb_warn:"Sua mensalidade está vencida: o acesso fecha em {n} dia(s).", alerts_paid:"Os alertas por e-mail são dos planos pagos. Crie uma conta de empresa com 15 dias grátis.",
    pay_t:"Pagar on-line", pay_ref:"Referência {r}. Ao terminar, a Bold traz você de volta e tudo é ativado quando o pagamento for aprovado.", pay_until:"Com este pagamento a mensalidade fica em dia até {d}.",
    pay_conf:"Confirmando seu pagamento com a Bold…", pay_ok:"Pagamento aprovado", pay_rev:"Recebemos seu pagamento, mas ele precisa ser revisado. A SkyNet Genesis entrará em contato; não pague de novo.", pay_pend:"A Bold ainda não confirmou o pagamento. Se você pagou, será ativado em alguns minutos.", pay_rej:"O pagamento não foi aprovado. Nada foi ativado.",
    chpass:"Trocar senha", cur_pass:"Senha atual", notifs:"Avisos", log_t:"Registro de atividades da empresa", qin_t:"Cotações recebidas", qin_none:"Ainda não recebeu cotações para suas demandas.",
    fict_block:"Esta é uma empresa fictícia de demonstração: não recebe mensagens nem solicitações.", sess_end:"Sua sessão terminou. Entre novamente.", net_err:"Sem conexão com o servidor. Verifique sua internet.",
    saved_srv:"Salvo", rejected:"Não foi salvo: {m}", contact_req:"Pedir o contato à SkyNet Genesis", contact_req_d:"A SkyNet Genesis procura esta empresa, apresenta seu interesse e avisa quando ela aceitar o contato.",
    contact_msg:"O que interessa nesta empresa? (produto, quantidades, mercado)", contact_ok:"Solicitação enviada. Avisaremos por e-mail e em Avisos.",
    claim_form:"Formulário de reivindicação ou remoção", claim_kind:"O que deseja?", claim_k1:"Reivindicar o perfil e publicar dados de contato", claim_k2:"Remover o perfil da plataforma", claim_name:"Seu nome", claim_role:"Cargo na empresa", claim_tel:"Telefone", claim_msg:"Mensagem",
    claim_acc:"Declaro que represento esta empresa e autorizo o tratamento dos meus dados para atender esta solicitação (Lei colombiana 1581 de 2012).", claim_ok:"Recebemos sua solicitação. Responderemos em até 15 dias úteis.",
    claimed:"Perfil reivindicado pela empresa", publish:"Autorizo mostrar os dados de contato da empresa às empresas com plano (Lei colombiana 1581 de 2012).",
    reg_strip:"<b>Global Trade Finder.</b> Empresas da Colômbia: diretório público da DIAN (sem dados de contato). Empresas marcadas \"Cadastrada\" têm conta e recebem mensagens. Cifras mundiais: UN Comtrade (ONU).", demo_mode_strip:"<b>Você está vendo a demonstração.</b> As empresas de outros países são exemplos fictícios; na plataforma real aparecem só empresas reais.", demo_exit:"Sair da demonstração", demo_enter:"Ver a demonstração",
    registered:"Cadastrada", sa_title:"Superadministrador", sa_back:"Voltar ao painel do Superadministrador", sa_in:"Você está dentro de {e} como administrador (controle de qualidade).", srv_save_err:"Não foi possível salvar no servidor: {m}" }
};
["es","en","pt"].forEach(l => { T[l] = T[l] || {}; Object.assign(T[l], TXT10[l]); T[l].demo_strip = TXT10[l].reg_strip; });

/* ---------- Llamadas al servidor ---------- */
/* La página vive en GitHub Pages y el servidor en Render: window.GTF_API (puesto en index.html) es la dirección del servidor; vacío = mismo sitio */
function apiUrl(u){ return (typeof u==="string" && u.startsWith("/api/")) ? (window.GTF_API||"") + u : u; }
async function api(ruta, body, metodo){
  let r;
  try { r = await fetch(apiUrl(ruta), { method: metodo || (body ? "POST" : "GET"), headers: Object.assign({"content-type":"application/json"}, TOKEN ? {authorization:"Bearer "+TOKEN} : {}), body: body ? JSON.stringify(body) : undefined, cache:"no-store" }); }
  catch(e){ const x = new Error(t("net_err")); x.red = true; throw x; }
  let j = null; try { j = await r.json(); } catch(e){}
  if(!r.ok){ const x = new Error((j && j.error) || ("Error " + r.status)); x.status = r.status; x.code = j && j.code; if(r.status===401 && TOKEN) sesionVencida(); throw x; }
  return j;
}
function sesionVencida(){ TOKEN = null; try { localStorage.removeItem(LS_TOKEN); } catch(e){} limpiarSesion(); toast(t("sess_end")); go("ingresar"); }
function limpiarSesion(){ for(const k of Object.keys(SV)) delete SV[k]; ACC = null; OBS = null; PLAN = "free"; ULEVEL = "admin"; YO = null; COBRO = null; EMPRESA = null; QUOTES_IN = []; NOTIFS = []; PAGOS = []; BITACORA = []; SA_DATA = null; SA_REAL = false; aplicarContactos([]); }

/* ---------- El guardado pasa por el servidor ---------- */
const _get = store.get, _set = store.set, _del = store.del;
let HYD = false; const PEND = new Set(); let tPush = null, ENVIANDO = false;
store.get = (k, d) => SYNC_KEYS.includes(k) || k==="plan" || k==="ulevel" ? (k in SV ? JSON.parse(JSON.stringify(SV[k])) : d) : _get(k, d);
store.set = (k, v) => {
  if(SYNC_KEYS.includes(k) || k==="plan" || k==="ulevel"){ SV[k] = JSON.parse(JSON.stringify(v)); if(!HYD && TOKEN && SYNC_KEYS.includes(k)){ PEND.add(k); programarEnvio(); } return true; }
  return _set(k, v);
};
store.del = (k) => { if(SYNC_KEYS.includes(k) || k==="plan" || k==="ulevel"){ delete SV[k]; return; } return _del(k); };
function programarEnvio(){ clearTimeout(tPush); tPush = setTimeout(enviar, 350); }
async function enviar(){
  if(ENVIANDO){ programarEnvio(); return; }
  if(!PEND.size || !TOKEN) return;
  ENVIANDO = true; const ks = [...PEND]; PEND.clear(); const cambios = {}; ks.forEach(k => cambios[k] = SV[k]);
  if(ks.includes("users")){ const ahora = new Set((SV.users||[]).map(u => String(u.email).toLowerCase())); cambios._usersRemoved = [...USERS_SNAP].filter(x => !ahora.has(x)); }
  try {
    const r = await api("/api/guardar", {cambios});
    if(r.rechazos && r.rechazos.length) toast(t("rejected",{m:r.rechazos[0].motivo}));
    if(!PEND.size) hidratar(r.datos, true);
  } catch(e){ if(!e.status || e.status>=500){ ks.forEach(k => PEND.add(k)); setTimeout(programarEnvio, 4000); } toast(t("srv_save_err",{m:e.message})); }
  finally { ENVIANDO = false; }
}

/* ---------- Empresas registradas, perfiles DIAN y requerimientos públicos ---------- */
const REG_IDS = new Set();
function integrarPublico(p){
  if(!p) return; PUB = p;
  /* quita las registradas anteriores y agrega las de ahora (sin la empresa propia) */
  for(let i = ALLC.length-1; i >= 0; i--) if(REG_IDS.has(ALLC[i].id)) ALLC.splice(i,1);
  REG_IDS.clear();
  const propia = EMPRESA ? "g_"+EMPRESA.id : "";
  const regs = (p.cuentas||[]).filter(c => c.id !== propia).map(c => ({ id:c.id, name:c.name, cc:c.cc||"CO", city:c.city||"", role:c.role||"both", codes:(c.codes||[]).filter(x => CODE[x]||CHAP[x]), sector:c.sector||"cons",
    markets:c.markets||[], desc:c.desc||"", verified:!!c.verified, registered:true, demo:false, real:false, catalog:c.catalog||[], rating:c.rating, active:0, certs:[], inc:[], nit:c.nit||"", vol:0 }));
  regs.forEach(c => { REG_IDS.add(c.id); ALLC.unshift(c); });
  /* perfiles DIAN retirados a pedido de la empresa */
  const ocultos = new Set(p.dianOcultos||[]);
  if(ocultos.size){ for(let i = ALLC.length-1; i >= 0; i--) if(ALLC[i].real && ocultos.has(ALLC[i].nit)){ delete REAL_BY_ID[ALLC[i].id]; ALLC.splice(i,1); } for(let i = REAL.length-1; i >= 0; i--) if(ocultos.has(REAL[i].nit)) REAL.splice(i,1); }
  for(const [nit, pf] of Object.entries(p.dianPerfiles||{})){ const co = REAL_BY_ID["co"+nit]; if(co) co.claimed = pf; }
  OPP_DEMO.length = 0;
  PQ_CACHE.clear(); if(typeof CF_CACHE!=="undefined") CF_CACHE.clear();
}
function aplicarContactos(lista){ const m = Object.fromEntries((lista||[]).map(c => [c.id, c])); for(const co of ALLC) if(REG_IDS.has(co.id)){ const c = m[co.id]; Object.assign(co, c ? {web:c.web, email:c.email, phone:c.phone, contact:c.contact, jobrole:c.jobrole} : {web:"", email:"", phone:"", contact:"", jobrole:""}); } }

function hidratar(v, suave){
  if(!v) return;
  HYD = true;
  try {
    YO = v.yo; SA_REAL = !!v.sa;
    if(v.publico){ EMPRESA = v.empresa || null; integrarPublico(v.publico); }
    COBRO = v.cobro || null; EMPRESA = v.empresa || null;
    QUOTES_IN = v.quotesIn || []; NOTIFS = v.notifs || []; PAGOS = v.pagos || []; BITACORA = v.bitacora || [];
    if(v.sa){ PLAN = "free"; ACC = null; OBS = null; ULEVEL = "admin"; for(const k of Object.keys(SV)) delete SV[k]; }
    else {
      const st = v.store || {};
      for(const k of SYNC_KEYS) if(k in st) store.set(k, st[k]); else if(!suave) store.del(k);
      PLAN = v.plan || "free"; store.set("plan", PLAN);
      ACC = st.account || null; OBS = st.observer || null; ULEVEL = st.ulevel && LEVELS.includes(st.ulevel) ? st.ulevel : "admin"; store.set("ulevel", ULEVEL);
      aplicarContactos(v.contactos);
      USERS_SNAP = new Set((st.users||[]).map(u => String(u.email).toLowerCase()));
      for(const [nit, pf] of Object.entries(v.dianContactos||{})){ const co = REAL_BY_ID["co"+nit]; if(co) co.claimed = pf; }
    }
  } finally { HYD = false; }
}

/* ---------- Arranque: se espera a la sesión antes de dibujar ---------- */
const _render = render; let LISTO = false;
render = function(){ if(LISTO) return _render(); };
(async () => {
  try { integrarPublico(await api("/api/publico/config")); } catch(e){}
  if(TOKEN){ try { hidratar(await api("/api/estado")); } catch(e){ if(e.status===401){ TOKEN = null; try { localStorage.removeItem(LS_TOKEN); } catch(_){} } } }
  LISTO = true;
  const q = new URLSearchParams(location.search);
  if(q.get("bold-order-id")) volverDeBold(q);
  render();
  setInterval(refrescar, 60000);
})();
async function refrescar(){
  if(!TOKEN || document.hidden || PEND.size || ENVIANDO) return;
  try { const v = await api("/api/estado"); const antes = unreadCount(); hidratar(v); if(!$(".modal-bg") && (location.hash||"").startsWith("#cuenta")) render(); else { chrome(); if(unreadCount() > antes) toast(t("msg_title")+": "+unreadCount()); } } catch(e){}
}


/* textos propios de la versión real (Prueba Ácida 18 nov 2026) */
(function(){ const R = {
  es:{ team_note:"Cada usuario nuevo recibe una invitación por correo y crea su propia contraseña. El titular de la cuenta no se puede retirar ni cambiar de nivel.", vf_note:"El equipo de SkyNet Genesis revisa los documentos y solo entonces la empresa recibe la marca \"Verificada\".", nt_note:"Los avisos incluyen requerimientos nuevos, empresas nuevas de sus productos y respuestas a sus mensajes.", send:"Enviar", rfq_ok:"Solicitud enviada. La respuesta le llega a Mensajes, en Mi cuenta.", rfq_note:"La solicitud llega a la empresa como mensaje. Si es una empresa de la DIAN sin cuenta, SkyNet Genesis la contacta por usted." },
  en:{ team_note:"Each new user receives an email invitation and creates their own password. The account holder cannot be removed or change level.", vf_note:"The SkyNet Genesis team reviews the documents and only then does the company get the \"Verified\" badge.", nt_note:"Notices include new requests, new companies for your products and replies to your messages.", send:"Send", rfq_ok:"Request sent. The reply arrives in Messages, in My account.", rfq_note:"The request reaches the company as a message. If it is a DIAN company without an account, SkyNet Genesis contacts it for you." },
  pt:{ team_note:"Cada novo usuário recebe um convite por e-mail e cria sua própria senha. O titular da conta não pode ser removido nem mudar de nível.", vf_note:"A equipe da SkyNet Genesis revisa os documentos e só então a empresa recebe o selo \"Verificada\".", nt_note:"Os avisos incluem novos requerimentos, novas empresas dos seus produtos e respostas às suas mensagens.", send:"Enviar", rfq_ok:"Solicitação enviada. A resposta chega em Mensagens, em Minha conta.", rfq_note:"A solicitação chega à empresa como mensagem. Se for uma empresa da DIAN sem conta, a SkyNet Genesis a contata por você." } };
  for(const l in R) if(T[l]) Object.assign(T[l], R[l]); })();
/* ---------- Países sin empresas: ayuda real en lugar de empresas ficticias ---------- */
(() => { const R = {
  es:{ ap_title:"Aún no hay empresas registradas de este país", ap_lead:"Las cifras de comercio de esta página son reales (UN Comtrade, ONU). Mientras llegan empresas de {p}, estos son los caminos oficiales y gratuitos para encontrar compradores allí:",
       ap_pc:"<b>ProColombia</b>: oportunidades por país, ruta exportadora y asesoría gratuita.", ap_can:"<b>Embajadas y consulados de Colombia</b> (Cancillería): apoyo comercial en el país de destino.", ap_fer:"<b>Ferias internacionales</b>: el calendario de ferias de esta plataforma.",
       ap_inv:"<b>Invite a sus clientes de {p}</b>: si ya tiene contactos allí, envíeles el enlace para que se registren y le escriban por aquí.", ap_copy:"Copiar enlace de invitación", ap_copied:"Enlace copiado",
       ap_help:"Pídanos ayuda para encontrar compradores en este país", ap_help_note:"SkyNet Genesis revisa su pedido y le escribe con lo que encuentre.", ap_login:"Ingrese con su cuenta para pedir ayuda", ap_sent:"Recibimos su pedido de ayuda. Le escribimos pronto.", ap_short:"¿Busca empresas de {p}? Vea la página del país: tiene cifras reales y caminos para encontrar compradores." },
  en:{ ap_title:"No companies registered from this country yet", ap_lead:"Trade figures on this page are real (UN Comtrade). While companies from {p} join, these are the official, free ways to find buyers there:",
       ap_pc:"<b>ProColombia</b>: opportunities by country, export route and free advice.", ap_can:"<b>Colombian embassies and consulates</b> (Foreign Ministry): trade support in the destination country.", ap_fer:"<b>International trade fairs</b>: this platform's fair calendar.",
       ap_inv:"<b>Invite your customers in {p}</b>: if you already have contacts there, send them the link to sign up and message you here.", ap_copy:"Copy invitation link", ap_copied:"Link copied",
       ap_help:"Ask us for help finding buyers in this country", ap_help_note:"SkyNet Genesis reviews your request and writes back with what it finds.", ap_login:"Sign in to ask for help", ap_sent:"We received your request. We will write to you soon.", ap_short:"Looking for companies from {p}? See the country page: it has real figures and ways to find buyers." },
  pt:{ ap_title:"Ainda não há empresas cadastradas deste país", ap_lead:"As cifras de comércio desta página são reais (UN Comtrade, ONU). Enquanto chegam empresas de {p}, estes são os caminhos oficiais e gratuitos para encontrar compradores lá:",
       ap_pc:"<b>ProColombia</b>: oportunidades por país, rota exportadora e assessoria gratuita.", ap_can:"<b>Embaixadas e consulados da Colômbia</b> (Chancelaria): apoio comercial no país de destino.", ap_fer:"<b>Feiras internacionais</b>: o calendário de feiras desta plataforma.",
       ap_inv:"<b>Convide seus clientes de {p}</b>: se já tem contatos lá, envie o link para que se cadastrem e escrevam para você aqui.", ap_copy:"Copiar link de convite", ap_copied:"Link copiado",
       ap_help:"Peça-nos ajuda para encontrar compradores neste país", ap_help_note:"A SkyNet Genesis analisa seu pedido e escreve com o que encontrar.", ap_login:"Entre com sua conta para pedir ajuda", ap_sent:"Recebemos seu pedido. Escreveremos em breve.", ap_short:"Procura empresas de {p}? Veja a página do país: tem cifras reais e caminhos para encontrar compradores." } };
  for(const l in R) if(T[l]) Object.assign(T[l], R[l]); })();
if(!MODO_DEMO){ const R = {
  es:{ hero_lead:"Encuentre compradores y proveedores reales. Navegue de continente a país, sector, producto y código arancelario HS con cifras de comercio de la ONU, y llegue a las empresas que comercian lo que usted vende o necesita.", demo_note:"Empresas de Colombia: datos públicos de la DIAN, solo personas jurídicas (Ley 1712 de 2014), sin datos sensibles ni de contacto. Empresas marcadas \"Registrada\": tienen cuenta y reciben mensajes." },
  en:{ hero_lead:"Find real buyers and suppliers. Drill down from continent to country, sector, product and HS tariff code with UN trade figures, and reach the companies trading what you sell or need.", demo_note:"Colombian companies: DIAN public data, legal entities only (Law 1712 of 2014), with no sensitive or contact data. Companies marked \"Registered\" have an account and receive messages." },
  pt:{ hero_lead:"Encontre compradores e fornecedores reais. Navegue de continente a país, setor, produto e código tarifário HS com cifras de comércio da ONU, e chegue às empresas que comercializam o que você vende ou precisa.", demo_note:"Empresas da Colômbia: dados públicos da DIAN, somente pessoas jurídicas (Lei 1712 de 2014), sem dados sensíveis nem de contato. Empresas marcadas \"Cadastrada\" têm conta e recebem mensagens." } };
  for(const l in R) if(T[l]) Object.assign(T[l], R[l]); }
function ayudaPais(cc){
  const p = esc(cname(cc)), li = "display:block;padding:8px 0;border-top:1px solid var(--linea, #e3e8ee)";
  return `<div class="panel" id="ayudaPais" style="margin-top:8px"><h2 style="margin-bottom:6px">${t("ap_title")}</h2><p class="muted">${t("ap_lead",{p})}</p>
    <div style="margin:10px 0">
      <a style="${li}" href="https://procolombia.co/" target="_blank" rel="noopener">${t("ap_pc")}</a>
      <a style="${li}" href="https://www.cancilleria.gov.co/" target="_blank" rel="noopener">${t("ap_can")}</a>
      <a style="${li}" href="#ferias">${t("ap_fer")}</a>
      <div style="${li}">${t("ap_inv",{p})} <button type="button" class="btn btn-ghost btn-sm" id="apCopy">${t("ap_copy")}</button></div></div>
    ${TOKEN ? `<button type="button" class="btn btn-main" id="apHelp" data-cc="${cc}">${t("ap_help")}</button> <span class="muted" style="font-size:.85rem">${t("ap_help_note")}</span>` : `<a class="btn btn-main" href="#ingresar">${t("ap_login")}</a>`}</div>`;
}
function ayudaCorta(){ return (S.cc && S.cc!=="CO" && COUNTRY[S.cc] && !MODO_DEMO) ? `<div style="margin-top:10px"><a href="#pais-${S.cc}">${t("ap_short",{p:esc(cname(S.cc))})}</a></div>` : ""; }
function bindAyudaPais(){
  const c = $("#apCopy"); if(c) c.onclick = async () => { const u = location.origin + location.pathname + "#registro"; try { await navigator.clipboard.writeText(u); toast(t("ap_copied")); } catch(e){ prompt("", u); } };
  const h = $("#apHelp"); if(h) h.onclick = async () => { h.disabled = true; try { await api("/api/ayuda-pais", { cc:h.dataset.cc, pais:cname(h.dataset.cc) }); toast(t("ap_sent")); h.textContent = t("ap_sent"); } catch(e){ h.disabled = false; toast(e.message || "Error"); } };
}
const _vCountry = vCountry;
vCountry = function(cc, sector){
  if(!COUNTRY[cc] || allCompanies().some(c => c.cc===cc)) return _vCountry(cc, sector);
  const s = SUB[COUNTRY[cc].sub], ct = CONT[COUNTRY[cc].cont];
  return `<div class="wrap page">${crumbs([{label:t("nav_markets"),href:"#mercados"},{lv:t("lv_cont"),label:L(ct),href:"#region-"+ct.id},{lv:t("lv_sub"),label:L(s),href:"#sub-"+s.id},{lv:t("lv_country"),label:cname(cc)}])}
  <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">${ccTag(cc)}<h1>${esc(cname(cc))}</h1></div>
  <section style="padding-bottom:0">${tradeCountryPanel(cc)}</section>
  ${ayudaPais(cc)}</div>`;
};
/* ---------- Rutas propias del servidor ---------- */
const _renderNow = renderNow;
renderNow = function(){
  let hh; try { hh = decodeURIComponent((location.hash||"#inicio").slice(1)); } catch(e){ hh = ""; }
  if(/^registro[&?]/.test(hh)){ const q = new URLSearchParams(hh.slice(9)); const pl = q.get("plan"); SU = { tipo:"empresa", plan: ["buyer","supplier","both"].includes(pl) ? pl : "both" }; history.replaceState(null, "", location.pathname + location.search + "#registro"); hh = "registro"; }
  if(hh.startsWith("clave=")){ pantalla(vClave(hh.slice(6)), () => bindClave(hh.slice(6))); return; }
  if(hh==="demo"){ if(!MODO_DEMO && !TOKEN){ entrarDemo(); return; } history.replaceState(null, "", location.pathname + location.search + "#inicio"); hh = "inicio"; }
  const r = hh.split("-")[0];
  if(r==="ingresar"){ pantalla(vLogin(), bindLogin); return; }
  if(r==="sa"){ if(!SA_REAL){ go("ingresar"); return; } pantalla(vSA(), bindSA); return; }
  if(SA_REAL && !["sa","empresa","hs","pais","pc","cap","sec","mercados","region","sub","ferias","herramientas","clasificar","calculadora","plantillas","apoyos","terminos","privacidad"].includes(r)){ go("sa"); return; }
  _renderNow(); bindAyudaPais();
  if(YO && YO.superComo){ const b = document.createElement("div"); b.className = "wrap"; b.innerHTML = `<div class="legalnote" style="margin:10px 0">${t("sa_in",{e:esc(EMPRESA?EMPRESA.nombre:"")})} <button class="btn btn-ghost btn-sm" id="sa-volver">${t("sa_back")}</button></div>`; V.prepend(b); $("#sa-volver").onclick = saVolver; }
};
function pantalla(html, bind){ chrome(); V.innerHTML = html; bind && bind(); $("#mainNav").classList.remove("open"); }
const _chrome = chrome;
chrome = function(){
  _chrome();
  const nav = $("#mainNav");
  if(SA_REAL){ nav.innerHTML = `<a href="#sa" class="${(location.hash||"").startsWith("#sa")?"on":""}">${t("sa_title")}</a><a href="#herramientas">${t("nav_tools")}</a>`; }
  else if(!LOGGED()) nav.insertAdjacentHTML("beforeend", `<a href="#ingresar" class="${(location.hash||"").startsWith("#ingresar")?"on":""}">${t("login")}</a>`);
  if(TOKEN && SA_REAL) nav.insertAdjacentHTML("beforeend", `<a href="#" id="nav-salir">${t("logout")}</a>`);
  const s = $("#nav-salir"); if(s) s.onclick = (e) => { e.preventDefault(); salir(); };
  const ds = $("#demoStrip"); if(ds){ let aviso = "";
    if(COBRO && COBRO.k==="pendiente") aviso = `<div class="wrap" style="background:#FDECEC;border:1px solid #F3B4B4;color:#8A1F1F;border-radius:10px;padding:8px 12px;margin-bottom:6px"><b>${t("cb_warn",{n:COBRO.dias})}</b> <a href="#cuenta">${t("sub_pay")}</a> · <a href="https://wa.me/${SG.waIntl}" target="_blank" rel="noopener">WhatsApp ${SG.wa}</a></div>`;
    else if(COBRO && COBRO.k==="prueba" && COBRO.dias<=3 && EMPRESA && !(YO&&YO.superComo)) aviso = `<div class="wrap" style="background:#FFF6E0;border:1px solid #F0D58A;color:#6B4E00;border-radius:10px;padding:8px 12px;margin-bottom:6px"><b>${({es:"Su prueba gratis termina en {n} día(s). Pague la mensualidad para no perder el acceso.",en:"Your free trial ends in {n} day(s). Pay the monthly fee to keep access.",pt:"Seu teste grátis termina em {n} dia(s). Pague a mensalidade para não perder o acesso."})[LANG].replace("{n}",COBRO.dias)}</b> <a href="#cuenta">${t("sub_pay")}</a></div>`;
    else if(COBRO && COBRO.k==="cerrada" && EMPRESA) aviso = `<div class="wrap" style="background:#FDECEC;border:1px solid #F3B4B4;color:#8A1F1F;border-radius:10px;padding:8px 12px;margin-bottom:6px"><b>${t("sub_closed")}</b> <a href="#cuenta">${t("sub_pay")}</a> · <a href="https://wa.me/${SG.waIntl}" target="_blank" rel="noopener">WhatsApp ${SG.wa}</a></div>`;
    ds.innerHTML = aviso + (MODO_DEMO
      ? `<div class="wrap" style="background:#FFF6E0;border:1px solid #F0D58A;color:#6B4E00;border-radius:10px;padding:8px 12px"><span>${t("demo_mode_strip")}</span> <button type="button" class="btn sm" id="salirDemo" style="margin-left:8px">${t("demo_exit")}</button></div>`
      : `<div class="wrap"><span>${t("demo_strip")}</span>${TOKEN ? "" : ` · <a href="#" id="verDemo">${t("demo_enter")}</a>`}</div>`);
    const sd = $("#salirDemo"); if(sd) sd.onclick = salirDemo;
    const vd = $("#verDemo"); if(vd) vd.onclick = (e) => { e.preventDefault(); entrarDemo(); }; }
};
async function salir(){ try { await api("/api/salir", {}); } catch(e){} TOKEN = null; try { localStorage.removeItem(LS_TOKEN); } catch(e){} limpiarSesion(); go("inicio"); render(); }

/* ---------- Ingreso y contraseña ---------- */
function vLogin(){
  return `<div class="wrap page" style="max-width:520px">${crumbs([{label:t("home"),href:"#inicio"},{label:t("login")}])}
    <h1>${t("login_t")}</h1>
    <form class="panel stack" id="lg-form" novalidate>
      <div class="field"><label for="lg-email">${t("email")}</label><input id="lg-email" type="email" autocomplete="username" maxlength="160"></div>
      <div class="field"><label for="lg-pass">${t("pass")}</label><input id="lg-pass" type="password" autocomplete="current-password" maxlength="200"></div>
      <div class="err" id="lg-err"></div>
      <button class="btn btn-main" type="submit">${t("login")}</button>
      <button class="linkbtn" type="button" id="lg-forgot" style="align-self:flex-start">${t("forgot")}</button>
    </form>
    <p class="muted">${({es:"¿Aún no tiene cuenta?",en:"Don't have an account yet?",pt:"Ainda não tem conta?"})[LANG]||"¿Aún no tiene cuenta?"} <a href="#registro">${t("nav_signup")}</a></p></div>`;
}
function bindLogin(){
  $("#lg-form").onsubmit = async (e) => { e.preventDefault(); const b = $("#lg-form button[type=submit]"); b.disabled = true; $("#lg-err").textContent = "";
    try { const r = await api("/api/login", {email:$("#lg-email").value, clave:$("#lg-pass").value}); TOKEN = r.token; try { localStorage.setItem(LS_TOKEN, TOKEN); } catch(_){} hidratar(r.datos); go(SA_REAL ? "sa" : "cuenta"); render(); }
    catch(x){ $("#lg-err").textContent = x.message; b.disabled = false; } };
  $("#lg-forgot").onclick = () => modal(`<h2>${t("forgot_t")}</h2><p>${t("forgot_d")}</p><form id="fg-form" class="stack"><div class="field"><label for="fg-email">${t("email")}</label><input id="fg-email" type="email" value="${esc($("#lg-email").value)}"></div><div class="err" id="fg-err"></div><div class="acts"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button class="btn btn-main" type="submit">${t("send_link")}</button></div></form>`, (m) => {
    $("#fg-form",m).onsubmit = async (e) => { e.preventDefault(); try { await api("/api/recuperar", {email:$("#fg-email",m).value}); closeModal(); modal(`<h2>${t("forgot_t")}</h2><p>${t("link_sent")}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`); } catch(x){ $("#fg-err",m).textContent = x.message; } };
  });
}
function vClave(tk){
  return `<div class="wrap page" style="max-width:520px"><h1>${t("newpass_t")}</h1><form class="panel stack" id="pw-form" novalidate>
    <p class="muted" id="pw-who" style="margin:0"></p>
    <div class="field"><label for="pw-1">${t("newpass")}</label><input id="pw-1" type="password" autocomplete="new-password" minlength="10" maxlength="200"></div>
    <div class="field"><label for="pw-2">${t("newpass2")}</label><input id="pw-2" type="password" autocomplete="new-password" maxlength="200"></div>
    <div class="err" id="pw-err"></div><button class="btn btn-main" type="submit">${t("save_pass")}</button></form></div>`;
}
function bindClave(tk){
  api("/api/enlace?t="+encodeURIComponent(tk)).then(r => { $("#pw-who").textContent = r.email; }).catch(x => { const f = $("#pw-form"); if(f){ f.innerHTML = `<p class="err" style="font-size:1rem">${esc(x.message)}</p><p><a class="btn btn-main" href="#ingresar">${({es:"Ir a ingresar y pedir otro enlace",en:"Go to log in and request a new link",pt:"Ir para entrar e pedir outro link"})[LANG]||"Ir a ingresar"}</a></p>`; } });
  $("#pw-form").onsubmit = async (e) => { e.preventDefault(); const a = $("#pw-1").value, b = $("#pw-2").value; if(a!==b){ $("#pw-err").textContent = t("pass_mismatch"); return; }
    try { await api("/api/clave", {token:tk, clave:a}); history.replaceState(null, "", location.pathname + "#ingresar"); toast(t("pass_ok")); render(); } catch(x){ $("#pw-err").textContent = x.message; } };
}

/* ---------- Registro ---------- */
let SU = { tipo:"empresa", plan:"both" };
const _vObserver = vObserver, _bindObserver = bindObserver;
vObserver = function(){
  if(LOGGED()) return _vObserver();
  const ccOpts = ALL_CC.map(cc=>[cc,cname(cc)]).sort((a,b)=>a[1].localeCompare(b[1])).map(([cc,n])=>`<option value="${cc}" ${cc==="CO"?"selected":""}>${esc(n)}</option>`).join("");
  const emp = SU.tipo==="empresa";
  return `<div class="wrap page" style="max-width:760px">${crumbs([{label:t("home"),href:"#inicio"},{label:t("su_title")}])}
    <h1>${t("su_title")}</h1>
    <div class="opts" style="margin:12px 0">${[["empresa","su_co","su_co_d"],["observador","su_obs","su_obs_d"]].map(([k,a,b])=>`<button type="button" class="opt" data-sut="${k}" aria-pressed="${SU.tipo===k}"><b>${t(a)}</b><span>${t(b)}</span></button>`).join("")}</div>
    <form class="panel" id="su-form" novalidate><div class="fields">
      ${emp ? `<div class="field"><label for="su-co">${t("su_company")}</label><input id="su-co" maxlength="160"></div><div class="field"><label for="su-nit">${t("su_nit")}</label><input id="su-nit" inputmode="numeric" maxlength="15"></div>` : ""}
      <div class="field"><label for="su-name">${t("su_you")}</label><input id="su-name" maxlength="120" autocomplete="name"></div>
      <div class="field"><label for="su-email">${t("email")}</label><input id="su-email" type="email" maxlength="160" autocomplete="email"></div>
      <div class="field"><label for="su-cc">${t("r_country")}</label><select id="su-cc">${ccOpts}</select></div>
      ${emp ? `<div class="field"><label for="su-plan">${t("su_plan")}</label><select id="su-plan">${["buyer","supplier","both"].map(p=>`<option value="${p}" ${SU.plan===p?"selected":""}>${t(p)} · ${money(PRICES[p])}${t("per_month")}</option>`).join("")}</select></div>` : ""}
      <input type="text" id="su-web" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px" aria-hidden="true">
    </div>
    <label class="check"><input type="checkbox" id="su-ok"><span>${t("su_accept")} · <a href="#terminos">${t("terms")}</a> · <a href="#privacidad">${t("privacy")}</a></span></label>
    <div class="err" id="su-err"></div><button class="btn btn-main" type="submit">${t("su_go")}</button></form>
    <p class="muted">${t("have_acc")} <a href="#ingresar">${t("login")}</a></p></div>`;
};
bindObserver = function(){
  if(LOGGED()) return _bindObserver();
  $$("[data-sut]").forEach(b => b.onclick = () => { SU.tipo = b.dataset.sut; render(); });
  const pl = $("#su-plan"); if(pl) pl.onchange = () => SU.plan = pl.value;
  $("#su-form").onsubmit = async (e) => { e.preventDefault(); const btn = $("#su-form button[type=submit]"); btn.disabled = true; $("#su-err").textContent = "";
    const body = { tipo: SU.tipo, empresa: $("#su-co")?.value || "", nit: $("#su-nit")?.value || "", nombre: $("#su-name").value, email: $("#su-email").value, cc: $("#su-cc").value, plan: $("#su-plan")?.value || "both", acepta: $("#su-ok").checked, web: $("#su-web").value };
    try { await api("/api/registro", body); history.replaceState(null, "", location.pathname + location.search + "#registro-ok"); V.innerHTML = `<div class="wrap page" style="max-width:640px"><div class="panel"><h1>${t("su_title")}</h1><p>${t("su_ok",{e:esc(body.email)})}</p><p><a class="btn btn-ghost" href="#ingresar">${t("login")}</a></p></div></div>`; }
    catch(x){ $("#su-err").textContent = x.message; btn.disabled = false; } };
};
/* perfil: autorización para publicar los datos de contacto */
const _vRegister = vRegister, _bindRegister = bindRegister;
vRegister = function(){ if(!ACC && EMPRESA && (!REG || !REG.name)){ REG = Object.assign(REG || regDraft(), { name: EMPRESA.nombre, taxid: EMPRESA.nit || "", role: EMPRESA.plan || "both" }); } if(REG && REG.publish===undefined) REG.publish = !!(ACC && ACC.publish); return _vRegister().replace(`<label class="check"><input type="checkbox" id="r-ok"`, `<label class="check"><input type="checkbox" id="r-pub" ${REG&&REG.publish?"checked":""}><span>${t("publish")}</span></label><label class="check"><input type="checkbox" id="r-ok"`); };
bindRegister = function(){ _bindRegister(); const p = $("#r-pub"); if(p) p.onchange = () => { REG.publish = p.checked; }; };

/* ---------- Planes: probar 15 días o pagar ---------- */
const _vPlans = vPlans, _bindPlans = bindPlans;
vPlans = function(){ return _vPlans().replaceAll(`href="${CATALOG_URL}" target="_blank" rel="noopener"`, `href="#registro" data-hire`).replace(/<button class="btn btn-ghost btn-sm" data-demo="[^"]*"[^>]*>[^<]*<\/button>/g, "").replace(/<p class="muted" style="margin-top:14px;font-size:.9rem">[\s\S]*?<\/p><\/div>$/, "</div>"); };
startDemo = function(){ go("registro"); };
bindPlans = function(){
  _bindPlans();
  $$("[data-hire]").forEach((a, i) => { const pid = ["buyer","supplier","both"][i]; a.textContent = TOKEN && EMPRESA ? t("sub_pay") : t("su_co"); a.onclick = (e) => { e.preventDefault(); if(TOKEN && EMPRESA){ pagar(pid); } else if(TOKEN){ toast(t("su_co_d")); } else { SU = {tipo:"empresa", plan:pid}; go("registro"); } }; });
};

/* ---------- Empresas ficticias: no reciben mensajes ---------- */
const _openThread = openThread, _openRFQ = openRFQ;
openThread = function(coId){ const co = getCo(coId); if(co && co.demo){ modal(`<p>${t("fict_block")}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`); return; } return _openThread(coId); };
openRFQ = function(co, kind){ if(co && co.demo){ modal(`<p>${t("fict_block")}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`); return; } return _openRFQ(co, kind); };
const _catalogDemo = catalogDemo; catalogDemo = function(co){ return co.registered ? (co.catalog||[]) : _catalogDemo(co); };
const _demoRatings = demoRatings; demoRatings = function(co){ return co.registered ? [] : _demoRatings(co); };
const _ratingSection = ratingSection;
ratingSection = function(co){ let h = _ratingSection(co); if(co.registered && co.rating) h = h.replace(`<h2>${t("rt_title")}</h2>`, `<h2>${t("rt_title")}</h2><p style="margin:0 0 8px"><b>${t("rt_avg",{a:String(co.rating.avg).replace(".", LANG==="en"?".":","), n:co.rating.n})}</b></p>`); return h; };
const _vCompany = vCompany;
vCompany = function(id){ let h = _vCompany(id); const co = getCo(id); if(co && co.registered) h = h.replace(`${roleTag(co.role)}`, `${roleTag(co.role)}<span class="realb" style="background:#E3F6F2;color:#0F6B57;border-color:#bfe8de">${t("registered")}</span>`); return h; };
const _oppCard = oppCard;
oppCard = function(o){ let h = _oppCard(o); if(o.coId && o.coId.startsWith("g_")) h = h.replace(` <span class="demo">${t("demo")}</span>`, ""); return h; };
allOpps = function(){ const mine = myOpps().filter(o => o.status!=="pending").map(o => ({...o, mine:true})); const prop = EMPRESA ? "g_"+EMPRESA.id : ""; return [...mine, ...((PUB && PUB.opps) || []).filter(o => o.coId!==prop)]; };

/* ---------- Empresas DIAN: solicitar contacto, reclamar o retirar ---------- */
const _vRealCompany = vRealCompany, _bindRealCompany = bindRealCompany;
vRealCompany = function(co){
  let h = _vRealCompany(co);
  h = h.replace(/<a class="btn btn-ghost" href="mailto:[^"]*">/, `<a class="btn btn-ghost" href="#" id="b-remove">`);
  if(co.claimed){ const c = co.claimed; h = h.replace(`<p style="margin:0">${t("real_nocontact")}</p>`, `<p style="margin:0 0 6px"><span class="realb">${t("claimed")}</span></p>${PAID() ? `<dl class="kv">${c.contact?`<dt>${t("contact")}</dt><dd>${esc(c.contact)}</dd>`:""}${c.email?`<dt>${t("email")}</dt><dd><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></dd>`:""}${c.phone?`<dt>${t("phone")}</dt><dd>${esc(c.phone)}</dd>`:""}${c.web?`<dt>${t("website")}</dt><dd><a href="${esc(c.web)}" target="_blank" rel="noopener">${esc(c.web)}</a></dd>`:""}</dl>` : `<div class="lock"><b>${t("locked_title")}</b><a href="#planes">${t("see_plans")}</a></div>`}`); }
  if(PAID() && ACC && can("contacts") && !co.claimed) h = h.replace(`<p class="muted" style="margin:0;font-size:.88rem">${t("real_noreg")}</p>`, `<p class="muted" style="margin:0;font-size:.88rem">${t("real_noreg")}</p><button class="btn btn-main" id="b-ctreq">${t("contact_req")}</button><p class="muted" style="margin:0;font-size:.82rem">${t("contact_req_d")}</p>`);
  return h;
};
bindRealCompany = function(co){
  _bindRealCompany(co);
  const r = $("#b-remove"); if(r) r.onclick = (e) => { e.preventDefault(); openClaim(co, "retiro"); };
  const ct = $("#b-ctreq"); if(ct) ct.onclick = () => modal(`<h2>${t("contact_req")}</h2><p class="muted">${t("contact_req_d")}</p><form id="ct-form" class="stack"><div class="field"><label for="ct-msg">${t("contact_msg")}</label><textarea id="ct-msg" maxlength="1500" rows="4"></textarea></div><div class="err" id="ct-err"></div><div class="acts"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button class="btn btn-main" type="submit">${t("send")}</button></div></form>`, (m) => {
    $("#ct-form",m).onsubmit = async (e) => { e.preventDefault(); try { await api("/api/contacto-dian", {nit:co.nit, nombre:co.name, motivo:$("#ct-msg",m).value}); closeModal(); toast(t("contact_ok")); } catch(x){ $("#ct-err",m).textContent = x.message; } };
  });
  /* el reclamo también puede hacerse por formulario, sin cuenta */
  const cl = $("#b-claim"); if(cl){ const prev = cl.onclick; cl.onclick = () => { prev && prev(); const acts = $(".modal .acts"); if(acts) acts.insertAdjacentHTML("afterbegin", `<button class="btn btn-ghost" id="m-claimform">${t("claim_form")}</button>`); const f = $("#m-claimform"); if(f) f.onclick = () => openClaim(co, "reclamo"); }; }
};
function openClaim(co, tipo){
  modal(`<h2>${t("claim_form")}</h2><p class="muted" style="margin-top:0">${esc(co.name)} · NIT ${esc(co.nit)}</p><form id="cl-form" class="stack" novalidate>
    <div class="field"><label for="cl-k">${t("claim_kind")}</label><select id="cl-k"><option value="reclamo" ${tipo==="reclamo"?"selected":""}>${t("claim_k1")}</option><option value="retiro" ${tipo==="retiro"?"selected":""}>${t("claim_k2")}</option></select></div>
    <div class="field"><label for="cl-n">${t("claim_name")}</label><input id="cl-n" maxlength="120"></div>
    <div class="field"><label for="cl-r">${t("claim_role")}</label><input id="cl-r" maxlength="120"></div>
    <div class="field"><label for="cl-e">${t("email")}</label><input id="cl-e" type="email" maxlength="160"></div>
    <div class="field"><label for="cl-t">${t("claim_tel")}</label><input id="cl-t" maxlength="40"></div>
    <div class="field"><label for="cl-m">${t("claim_msg")}</label><textarea id="cl-m" maxlength="1500" rows="3"></textarea></div>
    <input type="text" id="cl-w" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px" aria-hidden="true">
    <label class="check"><input type="checkbox" id="cl-ok"><span>${t("claim_acc")}</span></label>
    <div class="err" id="cl-err"></div><div class="acts"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button class="btn btn-main" type="submit">${t("send")}</button></div></form>`, (m) => {
    $("#cl-form",m).onsubmit = async (e) => { e.preventDefault();
      try { await api("/api/publico/reclamo", {nit:co.nit, empresa:co.name, tipo:$("#cl-k",m).value, nombre:$("#cl-n",m).value, cargo:$("#cl-r",m).value, correo:$("#cl-e",m).value, tel:$("#cl-t",m).value, msg:$("#cl-m",m).value, acepta:$("#cl-ok",m).checked, web:$("#cl-w",m).value}); closeModal(); toast(t("claim_ok")); }
      catch(x){ $("#cl-err",m).textContent = x.message; } };
  });
}

/* ---------- Verificación: los documentos se suben al servidor ---------- */
const leerArchivo = (f) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(f); });
bindVerif = function(){
  const f = $("#vform"); if(!f) return;
  f.onsubmit = async (e) => { e.preventDefault();
    const a = $("#vf-rut").files[0], b = $("#vf-cc").files[0];
    if(!a || !b){ $("#e-vf").textContent = t("vf_need"); return; }
    if(a.size > 3e6 || b.size > 3e6){ $("#e-vf").textContent = "Máx. 3 MB"; return; }
    const btn = $("#vform button[type=submit]"); btn.disabled = true;
    try { const r = await api("/api/verificacion", { rut:{name:a.name, data:await leerArchivo(a)}, camara:{name:b.name, data:await leerArchivo(b)} }); hidratar(r.datos); toast(t("vf_sent")); render(); }
    catch(x){ $("#e-vf").textContent = x.message; btn.disabled = false; } };
};

/* ---------- Mi cuenta: suscripción, pagos, avisos, cotizaciones recibidas, bitácora ---------- */
const fF = (iso) => iso ? new Date(iso.length===10 ? iso+"T12:00:00" : iso).toLocaleDateString(LANG==="en"?"en-US":LANG==="pt"?"pt-BR":"es-CO",{day:"numeric",month:"long",year:"numeric"}) : "—";
billingPanel = function(){
  if(!EMPRESA) return "";
  const c = COBRO || {k:"cerrada", t:""};
  const cls = c.k==="activa"||c.k==="interna" ? "both" : c.k==="prueba" ? "buyer" : "supplier";
  const admin = can("billing") || ULEVEL==="admin";
  return `<div class="panel"><h2>${t("sub_t")}</h2>
    ${c.k==="cerrada" ? `<div class="lock" style="margin-bottom:10px">${t("sub_closed")}</div>` : c.k==="pendiente" ? `<div class="lock" style="margin-bottom:10px">${t("sub_pending",{d:fF(c.limite)})}</div>` : ""}
    <dl class="kv"><dt>${t("my_plan")}</dt><dd>${t(EMPRESA.plan||"both")} · ${money(PRICES[EMPRESA.plan||"both"])}${t("per_month")}</dd>
      <dt>${t("sub_state")}</dt><dd><span class="role ${cls}">${esc(c.t)}${c.dias && c.k==="prueba"?` · ${c.dias} ${c.dias===1?({es:"día",en:"day",pt:"dia"})[LANG]||"día":({es:"días",en:"days",pt:"dias"})[LANG]||"días"}`:""}</span></dd>
      ${EMPRESA.pruebaHasta && c.k==="prueba" ? `<dt>${t("sub_trial")}</dt><dd>${fF(EMPRESA.pruebaHasta)}</dd>` : ""}
      ${EMPRESA.pagadoHasta ? `<dt>${t("sub_paid")}</dt><dd>${fF(EMPRESA.pagadoHasta)}</dd>` : ""}
      ${EMPRESA.planNuevo ? `<dt>${t("sub_next")}</dt><dd>${t(EMPRESA.planNuevo.id)} · ${fF(EMPRESA.planNuevo.desde)}</dd>` : ""}</dl>
    ${admin && !EMPRESA.interna && !(YO&&YO.superComo) ? `<p class="muted" style="font-size:.86rem;margin:10px 0 6px">${t("sub_pay_d")}</p><div style="display:flex;gap:6px;flex-wrap:wrap">${["buyer","supplier","both"].map(p=>`<button class="btn ${p===EMPRESA.plan?"btn-main":"btn-ghost"} btn-sm" data-pay="${p}">${t("sub_pay")} · ${t(p)}</button>`).join("")}</div>` : ""}
    ${PAGOS.length ? `<div class="tablewrap" style="border:0;margin-top:10px"><table class="t"><tbody>${PAGOS.slice(0,12).map(p=>`<tr><td class="num">${fF(p.fecha)}</td><td class="mono" style="font-size:.8rem">${esc(p.ref)}</td><td class="r num">${money(p.total)}</td><td>${esc(p.estado)}</td></tr>`).join("")}</tbody></table></div>` : ""}</div>`;
};
bindBilling = function(){ $$("[data-pay]").forEach(b => b.onclick = () => pagar(b.dataset.pay)); };
async function pagar(plan){
  try {
    const r = await api("/api/pedido", {plan}); const f = r.bold;
    modal(`<h2>${t("pay_t")}</h2><p class="muted">${t("sub_pay_d")}</p><ul class="plain">${r.pedido.items.map(x=>`<li>${esc(x.nombre)}: <b>${money(x.precio)}</b></li>`).join("")}</ul>
      ${r.hasta?`<p class="muted" style="font-size:.86rem">${t("pay_until",{d:fF(r.hasta)})}</p>`:""}<div id="bold-caja" style="margin:14px 0;min-height:52px;display:flex;justify-content:center"></div>
      <p class="muted" style="font-size:.84rem">${t("pay_ref",{r:esc(f.orderId)})}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("cancel")}</button></div>`);
    const s = document.createElement("script"); s.src = "https://checkout.bold.co/library/boldPaymentButton.js";
    const at = { "data-bold-button":"dark-L", "data-order-id":f.orderId, "data-currency":f.currency||"COP", "data-amount":String(f.amount), "data-api-key":f.apiKey, "data-integrity-signature":f.signature, "data-redirection-url":f.redirectionUrl, "data-description":f.description||"Global Trade Finder" };
    for(const [k,v] of Object.entries(at)) s.setAttribute(k, v);
    $("#bold-caja").appendChild(s);
  } catch(x){ modal(`<p>${esc(x.message)}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`); }
}
async function volverDeBold(q){
  const ref = q.get("bold-order-id") || "", st = (q.get("bold-tx-status") || "").toLowerCase();
  history.replaceState(null, "", location.pathname + (location.hash || "#cuenta"));
  if(!ref) return;
  if(st && /reject|fail|rechaz/.test(st)){ modal(`<h2>${t("pay_t")}</h2><p>${t("pay_rej")}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`); return; }
  modal(`<h2>${t("pay_t")}</h2><p>${t("pay_conf")}</p>`);
  let r = {estado:"pendiente"};
  for(let i=0;i<8;i++){ try { r = await api("/api/bold/volver?ref="+encodeURIComponent(ref)); } catch(e){} if(r.estado==="aplicado" || r.estado==="revisar") break; await new Promise(z => setTimeout(z, 2500)); }
  const msg = r.estado==="aplicado" ? `<b>${t("pay_ok")}</b>${r.resultado?`<br>${esc(r.resultado)}`:""}` : r.estado==="revisar" ? t("pay_rev") : t("pay_pend");
  closeModal(); modal(`<h2>${t("pay_t")}</h2><p>${msg}</p><div class="acts"><button class="btn btn-main" data-close>${t("close")}</button></div>`);
  if(TOKEN){ try { hidratar(await api("/api/estado")); render(); } catch(e){} }
}
function srvPanels(){
  const notifs = NOTIFS.slice(0, 8);
  const qin = QUOTES_IN;
  return `${qin.length || myOpps().length ? `<div class="panel"><h2>${t("qin_t")} · ${qin.length}</h2>${qin.length ? `<div class="tablewrap" style="border:0"><table class="t"><tbody>${qin.slice(0,30).map(q=>`<tr><td><a href="#empresa-${esc(q.fromId)}">${esc(q.fromName)}</a><div class="muted" style="font-size:.8rem"><span class="mono">${fmtCode(q.code||"")}</span> · ${esc(q.msg||"")}</div></td><td class="r num">US$ ${esc(q.price)}<div class="muted" style="font-size:.8rem">${esc(q.lead)} ${LANG==="en"?"days":"días"}</div></td><td class="r"><button class="btn btn-ghost btn-sm" data-thread="${esc(q.fromId)}">${t("msg_open")}</button></td></tr>`).join("")}</tbody></table></div>` : `<p class="muted" style="margin:0">${t("qin_none")}</p>`}</div>` : ""}
    ${notifs.length ? `<div class="panel"><h2>${t("notifs")}</h2><ul class="plain">${notifs.map(n=>`<li><span class="muted" style="font-size:.8rem">${fF(n.fecha)}</span> · ${esc(n.texto)}</li>`).join("")}</ul></div>` : ""}`;
}
function srvPanelsRight(){
  return `<div class="panel"><h2>${t("chpass")}</h2><form id="cp-form" class="stack" novalidate>
      <div class="field"><label for="cp-a">${t("cur_pass")}</label><input id="cp-a" type="password" autocomplete="current-password" maxlength="200"></div>
      <div class="field"><label for="cp-b">${t("newpass")}</label><input id="cp-b" type="password" autocomplete="new-password" maxlength="200"></div>
      <div class="err" id="cp-err"></div><div><button class="btn btn-ghost btn-sm" type="submit">${t("save_pass")}</button></div></form></div>
    ${BITACORA.length ? `<div class="panel"><h2>${t("log_t")}</h2><div class="tablewrap" style="border:0;max-height:260px;overflow:auto"><table class="t"><tbody>${BITACORA.slice(0,60).map(b=>`<tr><td class="num" style="white-space:nowrap;font-size:.8rem">${fF(b.fecha)}</td><td style="font-size:.86rem">${esc(b.quien)}: ${esc(b.que)}</td></tr>`).join("")}</tbody></table></div></div>` : ""}`;
}
const _vAccount = vAccount, _bindAccount = bindAccount;
vAccount = function(){
  if(TOKEN && EMPRESA && COBRO && COBRO.k==="cerrada" && !(YO&&YO.superComo)) return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("acc_title")}])}<h1>${t("acc_title")}</h1><p class="lead">${esc(EMPRESA.nombre||"")}</p><div class="stack" style="max-width:760px;margin-top:12px">${billingPanel()}</div><p style="margin-top:14px"><button class="linkbtn" id="b-logout">${t("logout")}</button></p></div>`;
  let h = _vAccount();
  if(!TOKEN) return h;
  if(EMPRESA && !ACC) h = h.replace(`</div></div>`, `</div>${billingPanel()}</div>`);
  const i = h.indexOf(`<div class="stack">`); if(i>=0) h = h.slice(0, i+19) + srvPanels() + h.slice(i+19);
  const j = h.lastIndexOf(`<button class="linkbtn" id="b-logout"`); if(j>=0) h = h.slice(0, j) + srvPanelsRight() + h.slice(j);
  return h;
};
bindAccount = function(){
  _bindAccount();
  const lo = $("#b-logout"); if(lo) lo.onclick = () => salir();
  bindBilling(); bindMessages();
  const cp = $("#cp-form"); if(cp) cp.onsubmit = async (e) => { e.preventDefault(); try { await api("/api/cambiar-clave", {actual:$("#cp-a").value, nueva:$("#cp-b").value}); toast(t("pass_ok")); $("#cp-a").value = $("#cp-b").value = ""; } catch(x){ $("#cp-err").textContent = x.message; } };
};
/* el equipo muestra quién aún no ha creado su contraseña */
const _teamPanel = teamPanel; teamPanel = function(){ return _teamPanel(); };

/* ---------- Panel del Superadministrador ---------- */
let SA_TAB = "empresas";
async function cargarSA(){ try { SA_DATA = await api("/api/sa/datos"); } catch(x){ toast(x.message); } }
function vSA(){
  if(!SA_DATA){ cargarSA().then(() => { if((location.hash||"").startsWith("#sa")) render(); }); return `<div class="wrap page"><h1>${t("sa_title")}</h1><p class="muted">…</p></div>`; }
  const d = SA_DATA;
  const tabs = [["empresas","Empresas · "+d.empresas.length],["verificar","Verificaciones · "+d.verificaciones.length],["reclamos","Reclamos DIAN · "+d.reclamos.filter(r=>r.estado==="nuevo").length],["contactos","Solicitudes de contacto · "+d.contactos.filter(c=>c.estado==="nuevo").length],["pagos","Pagos"],["correos","Correos"],["bitacora","Bitácora"],["datos","Datos y respaldo"]];
  const tbl = (head, rows) => `<div class="tablewrap"><table class="t"><thead><tr>${head.map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.join("") || `<tr><td colspan="${head.length}" class="muted">—</td></tr>`}</tbody></table></div>`;
  let body = "";
  if(SA_TAB==="empresas") body = tbl(["Empresa","Plan","Estado","Usuarios","Verificación","Acciones"], d.empresas.map(e => `<tr><td><b>${esc(e.nombre)}</b><div class="muted" style="font-size:.8rem">NIT ${esc(e.nit||"—")} · ${esc(e.cc||"")} · ${fF(e.creada)}${e.oculta?" · OCULTA":""}</div></td><td>${t(e.plan)}</td><td>${esc(e.cobro.t)}${e.pagadoHasta?`<div class="muted" style="font-size:.8rem">hasta ${fF(e.pagadoHasta)}</div>`:""}</td>
      <td style="font-size:.84rem">${e.usuarios.map(u=>`${esc(u.email)} · ${esc(({admin:"Administrador",director:"Director comercial",asesor:"Consultor comercial",analista:"Analista de mercados",consulta:"Solo consulta"})[u.rol]||u.rol)}${u.tieneClave?"":" (sin contraseña)"} <button class="linkbtn" data-saenl="${u.id}">enlace</button>`).join("<br>")}</td><td>${esc(({none:"Sin enviar",pending:"Por revisar",sent:"Por revisar",verified:"Verificada",ok:"Verificada",rejected:"Rechazada"})[(e.verif||{}).status||"none"]||(e.verif||{}).status)}</td>
      <td style="white-space:nowrap"><button class="btn btn-ghost btn-sm" data-saentrar="${e.id}">Entrar</button> <button class="linkbtn" data-sainterna="${e.id}">${e.interna?"Quitar interna":"Hacer interna"}</button> <button class="linkbtn" data-saocultar="${e.id}">${e.oculta?"Mostrar":"Ocultar"}</button>${e.interna?"":` <button class="linkbtn" style="color:#B42318" data-saborrar="${e.id}">Borrar (prueba)</button>`}</td></tr>`))
      + `<h3 style="margin-top:16px">Observadores · ${d.observadores.length}</h3>` + tbl(["Correo","Nombre","País"], d.observadores.slice(0,300).map(u=>`<tr><td>${esc(u.email)}</td><td>${esc(u.nombre)}</td><td>${esc(u.cc||"")}</td></tr>`));
  if(SA_TAB==="verificar") body = tbl(["Empresa","Documentos","Fecha","Decisión"], d.verificaciones.map(v => { const e = d.empresas.find(x=>x.id===v.empresaId)||{}; return `<tr><td><b>${esc(e.nombre||"")}</b><div class="muted" style="font-size:.8rem">NIT ${esc(e.nit||"")}</div></td><td><button class="linkbtn" data-sadoc="${v.id}" data-cual="rut">RUT: ${esc(v.rut)}</button><br><button class="linkbtn" data-sadoc="${v.id}" data-cual="camara">Cámara: ${esc(v.camara)}</button></td><td>${fF(v.fecha)}</td><td style="white-space:nowrap"><button class="btn btn-main btn-sm" data-saver="${e.id}" data-ok="1">Aprobar</button> <button class="btn btn-ghost btn-sm" data-saver="${e.id}" data-ok="0">Rechazar</button></td></tr>`; }));
  if(SA_TAB==="reclamos") body = tbl(["Empresa","Tipo","Persona","Estado","Acciones"], d.reclamos.map(r => `<tr><td><b>${esc(r.empresa||"")}</b><div class="muted" style="font-size:.8rem">NIT ${esc(r.nit)} · ${fF(r.fecha)}</div><div style="font-size:.84rem">${esc(r.msg||"")}</div></td><td>${esc(r.tipo)}</td><td style="font-size:.84rem">${esc(r.nombre)} · ${esc(r.cargo)}<br>${esc(r.correo)} · ${esc(r.tel||"")}</td><td>${esc(r.estado)}</td>
      <td style="white-space:nowrap"><button class="linkbtn" data-sarc="${r.id}" data-acc="ocultar">Retirar perfil</button><br><button class="linkbtn" data-sarc="${r.id}" data-acc="perfil">Publicar contacto</button><br><button class="linkbtn" data-sarc="${r.id}" data-acc="mostrar">Volver a mostrar</button><br><button class="linkbtn" data-sarc="${r.id}" data-acc="cerrar">Cerrar</button></td></tr>`));
  if(SA_TAB==="contactos") body = tbl(["Solicitante","Empresa buscada","Motivo","Estado"], d.contactos.map(c => `<tr><td><b>${esc(c.solicitante)}</b><div class="muted" style="font-size:.8rem">${esc(c.usuario)} · ${esc(c.correo)} · ${fF(c.fecha)}</div></td><td>${esc(c.nombre)}<div class="muted" style="font-size:.8rem">${/^pais-/.test(c.nit) ? "Pedido de ayuda por país · "+esc(c.nit.slice(5)) : `NIT ${esc(c.nit)} · <a href="https://www.rues.org.co/" target="_blank" rel="noopener">RUES</a>`}</div></td><td style="font-size:.84rem">${esc(c.motivo)}${c.notas?`<div class="muted">Notas: ${esc(c.notas)}</div>`:""}</td><td>${esc(c.estado)}<br><button class="linkbtn" data-sact="${c.id}">Actualizar</button></td></tr>`));
  if(SA_TAB==="pagos") body = `<p><button class="btn btn-main btn-sm" id="sa-prueba">Hacer pago de prueba de $1.000</button></p>` + tbl(["Fecha","Empresa","Referencia","Valor","Estado"], d.pagos.map(p => `<tr><td>${fF(p.fecha)}</td><td>${esc((d.empresas.find(e=>e.id===p.empresaId)||{nombre:p.empresaId}).nombre)}</td><td class="mono" style="font-size:.8rem">${esc(p.ref)}</td><td class="r num">${money(p.total)}</td><td>${esc(p.estado)}${p.resultado?`<div class="muted" style="font-size:.8rem">${esc(p.resultado)}</div>`:""}</td></tr>`));
  if(SA_TAB==="correos") body = `<p class="muted">Cupo de hoy: ${d.cupo ? d.cupo.n : 0} de 120.</p>` + tbl(["Fecha","Para","Asunto","Enviado"], d.correos.map(c => `<tr><td>${fF(c.fecha)}</td><td>${esc(c.para)}</td><td>${esc(c.asunto)}</td><td>${c.ok?"Sí":"No · "+esc(c.detalle)}</td></tr>`));
  if(SA_TAB==="bitacora") body = tbl(["Fecha","Quién","Qué"], d.bitacora.map(b => `<tr><td style="white-space:nowrap">${fF(b.fecha)}</td><td>${esc(b.quien)}</td><td>${esc(b.que)}</td></tr>`));
  if(SA_TAB==="datos") body = `<div class="panel"><h2>Datos de la plataforma</h2><dl class="kv"><dt>DIAN (directorio anual)</dt><dd>${esc(d.datosMeta.dian||"—")} <button class="linkbtn" data-sadat="dian">Marcar actualizado</button></dd><dt>UN Comtrade (trimestral)</dt><dd>${esc(d.datosMeta.comtrade||"—")} <button class="linkbtn" data-sadat="comtrade">Marcar actualizado</button></dd><dt>Ferias (cada 2 meses)</dt><dd>${esc(d.datosMeta.ferias||"—")} <button class="linkbtn" data-sadat="ferias">Marcar actualizado</button></dd></dl>
      <p class="muted" style="font-size:.86rem">Para actualizar los datos, pídale a Claude que corra las herramientas de la carpeta <span class="mono">herramientas/</span> y publique la nueva versión.</p></div>
      <div class="panel"><h2>Actividad</h2><dl class="kv"><dt>Conversaciones</dt><dd>${d.stats.hilos}</dd><dt>Mensajes</dt><dd>${d.stats.mensajes}</dd><dt>Solicitudes</dt><dd>${d.stats.solicitudes}</dd><dt>Requerimientos</dt><dd>${d.stats.requerimientos}</dd><dt>Cotizaciones</dt><dd>${d.stats.cotizaciones}</dd></dl></div>
      <div class="panel"><h2>Respaldo</h2><p>Descarga todas las empresas y sus datos (las contraseñas van cifradas).</p><button class="btn btn-main btn-sm" id="sa-resp">Descargar respaldo</button></div>
      <div class="panel"><h2>Avisos de la plataforma</h2><ul class="plain">${d.notifs.slice(0,40).map(n=>`<li><span class="muted" style="font-size:.8rem">${fF(n.fecha)}</span> · ${esc(n.texto)}</li>`).join("") || "<li class='muted'>—</li>"}</ul></div>`;
  return `<div class="wrap page"><h1>${t("sa_title")}</h1><p class="muted">${esc(YO?YO.email:"")}</p>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin:10px 0 14px">${tabs.map(([k,l])=>`<button class="btn ${SA_TAB===k?"btn-main":"btn-ghost"} btn-sm" data-satab="${k}">${esc(l)}</button>`).join("")} <button class="btn btn-ghost btn-sm" id="sa-reload">↻</button></div>${body}</div>`;
}
function bindSA(){
  const act = async (fn) => { try { await fn(); await cargarSA(); render(); } catch(x){ toast(x.message); } };
  const pedir = (titulo, campos, cb) => modal(`<h2>${esc(titulo)}</h2><form id="sa-f" class="stack">${campos.map(([id,l,tp])=>`<div class="field"><label for="${id}">${esc(l)}</label>${tp==="area"?`<textarea id="${id}" rows="3"></textarea>`:tp && tp.startsWith("sel:")?`<select id="${id}">${tp.slice(4).split("|").map(o=>`<option>${o}</option>`).join("")}</select>`:`<input id="${id}">`}</div>`).join("")}<div class="err" id="sa-ferr"></div><div class="acts"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button class="btn btn-main" type="submit">OK</button></div></form>`, (m) => {
    $("#sa-f",m).onsubmit = async (e) => { e.preventDefault(); const vals = Object.fromEntries(campos.map(([id]) => [id, $("#"+id,m).value])); try { await cb(vals); closeModal(); await cargarSA(); render(); } catch(x){ $("#sa-ferr",m).textContent = x.message; } }; });
  $$("[data-satab]").forEach(b => b.onclick = () => { SA_TAB = b.dataset.satab; render(); });
  const rl = $("#sa-reload"); if(rl) rl.onclick = () => act(async () => {});
  $$("[data-saentrar]").forEach(b => b.onclick = async () => { try { const v = await api("/api/sa/entrar", {empresaId:b.dataset.saentrar}); SA_REAL = false; hidratar(v); go("cuenta"); render(); } catch(x){ toast(x.message); } });
  $$("[data-sainterna]").forEach(b => b.onclick = () => pedir("Motivo", [["m-mot","Motivo"]], v => api("/api/sa/interna", {empresaId:b.dataset.sainterna, motivo:v["m-mot"]})));
  $$("[data-saocultar]").forEach(b => b.onclick = () => pedir("Motivo", [["m-mot","Motivo"]], v => api("/api/sa/ocultar", {empresaId:b.dataset.saocultar, motivo:v["m-mot"]})));
  $$("[data-saenl]").forEach(b => b.onclick = () => act(() => api("/api/sa/enlace", {usuarioId:b.dataset.saenl}).then(() => toast("Enlace enviado"))));
  $$("[data-sadoc]").forEach(b => b.onclick = async () => { try { const r = await fetch(apiUrl("/api/sa/doc?id="+b.dataset.sadoc+"&cual="+b.dataset.cual), {headers:{authorization:"Bearer "+TOKEN}}); if(!r.ok) throw new Error("No se pudo abrir"); const u = URL.createObjectURL(await r.blob()); window.open(u, "_blank", "noopener"); } catch(x){ toast(x.message); } });
  $$("[data-saborrar]").forEach(b => b.onclick = () => { const e = (SA_DATA.empresas||[]).find(x=>x.id===b.dataset.saborrar)||{}; pedir("Borrar empresa de prueba", [["m-nom","Escriba el nombre exacto: "+(e.nombre||"")]], async (v) => { await api("/api/sa/borrar", {empresaId:b.dataset.saborrar, nombre:v["m-nom"]}); toast("Empresa de prueba borrada"); }); });
  $$("[data-saver]").forEach(b => b.onclick = () => b.dataset.ok==="1" ? act(() => api("/api/sa/verificar", {empresaId:b.dataset.saver, ok:true})) : pedir("Motivo del rechazo", [["m-mot","Motivo (lo verá la empresa)"]], v => api("/api/sa/verificar", {empresaId:b.dataset.saver, ok:false, motivo:v["m-mot"]})));
  $$("[data-sarc]").forEach(b => b.onclick = () => b.dataset.acc==="perfil" ? pedir("Datos de contacto autorizados", [["p-c","Persona de contacto"],["p-e","Correo"],["p-t","Teléfono"],["p-w","Sitio web"]], v => api("/api/sa/reclamo", {id:b.dataset.sarc, accion:"perfil", perfil:{contact:v["p-c"], email:v["p-e"], phone:v["p-t"], web:v["p-w"]}})) : act(() => api("/api/sa/reclamo", {id:b.dataset.sarc, accion:b.dataset.acc})));
  $$("[data-sact]").forEach(b => b.onclick = () => pedir("Solicitud de contacto", [["c-e","Estado","sel:nuevo|en curso|contactada|sin respuesta|cerrado"],["c-n","Notas internas","area"],["c-m","Mensaje para la empresa solicitante (opcional, se envía por correo)","area"]], v => api("/api/sa/contacto", {id:b.dataset.sact, estado:v["c-e"], notas:v["c-n"], avisar:!!v["c-m"].trim(), mensaje:v["c-m"]})));
  $$("[data-sadat]").forEach(b => b.onclick = () => act(() => api("/api/sa/datos-actualizados", {cual:b.dataset.sadat})));
  const pr = $("#sa-prueba"); if(pr) pr.onclick = async () => { try { const r = await api("/api/sa/pago-prueba", {}); const f = r.bold; modal(`<h2>Pago de prueba</h2><div id="bold-caja" style="margin:14px 0;min-height:52px;display:flex;justify-content:center"></div><p class="muted">${t("pay_ref",{r:esc(f.orderId)})}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("cancel")}</button></div>`); const s = document.createElement("script"); s.src = "https://checkout.bold.co/library/boldPaymentButton.js"; const at = { "data-bold-button":"dark-L", "data-order-id":f.orderId, "data-currency":"COP", "data-amount":String(f.amount), "data-api-key":f.apiKey, "data-integrity-signature":f.signature, "data-redirection-url":f.redirectionUrl, "data-description":"Global Trade Finder - prueba" }; for(const [k,v] of Object.entries(at)) s.setAttribute(k, v); $("#bold-caja").appendChild(s); } catch(x){ toast(x.message); } };
  const rp = $("#sa-resp"); if(rp) rp.onclick = async () => { try { const r = await fetch(apiUrl("/api/sa/respaldo"), {headers:{authorization:"Bearer "+TOKEN}}); if(!r.ok) throw new Error("No se pudo descargar"); const a = document.createElement("a"); a.href = URL.createObjectURL(await r.blob()); a.download = "gtf-respaldo-"+new Date().toISOString().slice(0,10)+".json"; document.body.appendChild(a); a.click(); a.remove(); } catch(x){ toast(x.message); } };
}
async function saVolver(){ try { const v = await api("/api/sa/volver", {}); limpiarSesion(); hidratar(v); SA_DATA = null; go("sa"); render(); } catch(x){ toast(x.message); } }

/* ---------- Términos y privacidad de la versión con servidor ---------- */
const LEGAL10 = {
  es:{ sub:`<p><b>Suscripción.</b> El registro de observador es gratuito. Las empresas tienen 15 días de prueba gratis con el plan que elijan; después, los planes Comprador, Proveedor y Comprador y proveedor se pagan por mes dentro de la aplicación con Bold (tarjeta, PSE, Nequi o llave Bre-B). El primer pago cubre el resto del mes, o hasta el fin del mes siguiente si se hace después del día 5. Si la mensualidad vence, del día 1 al 5 del mes siguiente aparece un aviso con cuenta regresiva y al terminar el día 5 (24:00) se cierra el acceso; los datos se conservan. Puede dejar de pagar en cualquier momento.</p>`,
    demo:`<p><b>Empresas reales y demostración.</b> En la plataforma solo aparecen empresas reales: las de Colombia, del directorio público de la DIAN, y las que tienen cuenta (marcadas "Registrada"). Las empresas ficticias de otros países aparecen únicamente en el modo de demostración, marcadas "Ficticia", y no reciben mensajes ni solicitudes.</p>`,
    priv:`<p><b>Dónde se guardan los datos.</b> Los datos de las cuentas se guardan cifrados en tránsito en los servidores de SkyNet Genesis (Render y Neon, Estados Unidos, región Ohio). Las contraseñas se guardan con cifrado irreversible. Los documentos de verificación se borran después de revisarlos. Los datos de contacto de su empresa solo se muestran a empresas con plan, y solo si usted lo autoriza en su perfil.</p>` },
  en:{ sub:`<p><b>Subscription.</b> Observer registration is free. Companies get a 15-day free trial with the plan they choose; after that, the Buyer, Supplier and Buyer & supplier plans are paid monthly inside the application with Bold (card, PSE, Nequi or Bre-B key). The first payment covers the rest of the month, or until the end of the following month if made after the 5th. If the fee is overdue, a countdown warning appears from the 1st to the 5th of the following month and access closes at the end of the 5th (midnight); data is kept. You may stop paying at any time.</p>`,
    demo:`<p><b>Real companies and demo.</b> The platform only lists real companies: Colombian ones from the DIAN public directory, and those with an account (marked "Registered"). Fictitious companies from other countries appear only in demo mode, marked "Fictitious", and do not receive messages or requests.</p>`,
    priv:`<p><b>Where data is stored.</b> Account data is stored on SkyNet Genesis servers (Render and Neon, United States, Ohio region), encrypted in transit. Passwords are stored with one-way encryption. Verification documents are deleted after review. Your company's contact details are shown only to subscribed companies, and only if you authorize it in your profile.</p>` },
  pt:{ sub:`<p><b>Assinatura.</b> O cadastro de observador é gratuito. As empresas têm 15 dias de teste grátis com o plano que escolherem; depois, os planos Comprador, Fornecedor e Comprador e fornecedor são pagos por mês dentro do aplicativo com a Bold (cartão, PSE, Nequi ou chave Bre-B). O primeiro pagamento cobre o resto do mês, ou até o fim do mês seguinte se feito depois do dia 5. Se a mensalidade vencer, do dia 1 ao 5 do mês seguinte aparece um aviso com contagem regressiva e ao terminar o dia 5 (24:00) o acesso é fechado; os dados são mantidos. Você pode deixar de pagar a qualquer momento.</p>`,
    demo:`<p><b>Empresas reais e demonstração.</b> Na plataforma aparecem só empresas reais: as da Colômbia, do diretório público da DIAN, e as que têm conta (marcadas "Cadastrada"). As empresas fictícias de outros países aparecem somente no modo de demonstração, marcadas "Fictícia", e não recebem mensagens nem solicitações.</p>`,
    priv:`<p><b>Onde os dados ficam.</b> Os dados das contas ficam nos servidores da SkyNet Genesis (Render e Neon, Estados Unidos, região Ohio), criptografados em trânsito. As senhas são guardadas com criptografia irreversível. Os documentos de verificação são apagados após a revisão. Os dados de contato da sua empresa só são mostrados a empresas com plano, e só se você autorizar no seu perfil.</p>` }
};
const _vTerms = vTerms, _vPrivacy = vPrivacy;
vTerms = function(){ const x = LEGAL10[LANG] || LEGAL10.es; return _vTerms().replace(/<p><b>(Suscripción|Subscription|Assinatura)\.<\/b>[\s\S]*?<\/p>/, x.sub).replace(/<p><b>(Versión de demostración|Demo version|Versão de demonstração)\.<\/b>[\s\S]*?<\/p>/, x.demo); };
vPrivacy = function(){ const x = LEGAL10[LANG] || LEGAL10.es; return _vPrivacy().replace(/<p><b>(En esta demostración|In this demo|Nesta demonstração)<\/b>[\s\S]*?<\/p>/, x.priv); };

/* ---------- Manuales en PDF ---------- */
const GUIA = { admin:"Administrador", director:"Director-comercial", asesor:"Consultor-comercial", analista:"Analista-de-mercados", consulta:"Solo-consulta" };
const MAN_T = { es:["Manuales","Manual general y la guía de su nivel de usuario, en PDF.","Manual general","Guía de mi nivel"], en:["Manuals","General manual and the guide for your user level, in PDF (Spanish).","General manual","Guide for my level"], pt:["Manuais","Manual geral e o guia do seu nível de usuário, em PDF (espanhol).","Manual geral","Guia do meu nível"] };
const _vTools = vTools;
vTools = function(){
  const m = MAN_T[LANG] || MAN_T.es; const g = OBS ? "Observador" : GUIA[ULEVEL] || "Administrador";
  return _vTools().replace(/<\/div><\/div>$/, `<div class="panel"><h2 style="font-size:1.3rem;margin:0 0 6px">${m[0]}</h2><p class="muted" style="margin:0 0 10px">${m[1]}</p><div style="display:flex;gap:6px;flex-wrap:wrap"><a class="btn btn-ghost btn-sm" href="/manuales/GTF-Manual-general.pdf" target="_blank" rel="noopener">${m[2]}</a><a class="btn btn-ghost btn-sm" href="/manuales/GTF-Guia-${g}.pdf" target="_blank" rel="noopener">${m[3]}</a></div></div></div></div>`);
};

/* las alertas por correo son de los planes pagos */
const _openAlert = openAlert;
openAlert = function(){ if(!PAID()){ modal(`<p>${t("alerts_paid")}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("close")}</button><a class="btn btn-main" href="#planes" data-close>${t("see_plans")}</a></div>`); return; } return _openAlert(); };

/* ================================================================
   GLOBAL TRADE FINDER — registro, cuenta, ventanas y enrutador
   ================================================================ */
/* ---------- Registro de empresa ---------- */
let REG = null;
function regDraft(){ return ACC ? JSON.parse(JSON.stringify(ACC)) : { role:"", name:"", taxid:"", cc:"CO", city:"", sector:"", codes:[], markets:[], web:"", contact:"", jobrole:"", email:"", phone:"", desc:"", ok:false }; }
function vObserver(){
  const o = OBS || {name:"",email:"",cc:"CO"};
  const ccOpts = ALL_CC.map(cc=>[cc,cname(cc)]).sort((a,b)=>a[1].localeCompare(b[1])).map(([cc,n])=>`<option value="${cc}" ${o.cc===cc?"selected":""}>${esc(n)}</option>`).join("");
  return `<div class="wrap page" style="max-width:760px">${crumbs([{label:t("home"),href:"#inicio"},{label:t("obs_title")}])}
  <h1>${t("obs_title")}</h1><p class="lead">${t("obs_lead")}</p>
  <form id="oform" class="panel stack" style="margin-top:16px" novalidate>
    <div class="fields">
      <div class="field full"><label for="o-name">${t("obs_name")}</label><input id="o-name" value="${esc(o.name)}"><div class="err" id="e-oname"></div></div>
      <div class="field"><label for="o-email">${t("r_email")}</label><input id="o-email" type="email" value="${esc(o.email)}"><div class="err" id="e-oemail"></div></div>
      <div class="field"><label for="o-cc">${t("r_country")}</label><select id="o-cc">${ccOpts}</select></div>
    </div>
    <label class="check"><input type="checkbox" id="o-ok"><span>${t("r_accept")} <a href="#terminos">${t("terms")}</a> · <a href="#privacidad">${t("privacy")}</a></span></label>
    <div class="err" id="e-ook"></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button type="submit" class="btn btn-main">${t("obs_save")}</button><a class="btn btn-ghost" href="#planes">${t("see_plans")}</a></div>
  </form></div>`;
}
function bindObserver(){
  $("#oform").onsubmit = (e) => { e.preventDefault();
    const name=$("#o-name").value.trim(), email=$("#o-email").value.trim(); let bad=false;
    $("#e-oname").textContent = name?"":(bad=true,t("err_req"));
    $("#e-oemail").textContent = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)?"":(bad=true,t("err_email"));
    $("#e-ook").textContent = $("#o-ok").checked?"":(bad=true,t("err_accept"));
    if(bad) return;
    OBS = {name,email,cc:$("#o-cc").value,at:new Date().toISOString()}; store.set("observer",OBS);
    toast(t("obs_saved")); go("cuenta"); };
}
function vRegister(){
  if(!REG) REG = regDraft();
  const f = (id,label,type="text",full=false,ph="") => `<div class="field ${full?"full":""}"><label for="r-${id}">${label}</label><input id="r-${id}" data-k="${id}" type="${type}" value="${esc(REG[id]||"")}" placeholder="${esc(ph)}"><div class="err" id="e-${id}"></div></div>`;
  const ccOpts = ALL_CC.map(cc=>[cc,cname(cc)]).sort((a,b)=>a[1].localeCompare(b[1])).map(([cc,n])=>`<option value="${cc}" ${REG.cc===cc?"selected":""}>${esc(n)}</option>`).join("");
  return `<div class="wrap page" style="max-width:900px">${crumbs([{label:t("home"),href:"#inicio"},{label:ACC?t("reg_edit"):t("reg_title")}])}
  <h1>${ACC?t("reg_edit"):t("reg_title")}</h1><p class="lead">${t("reg_lead")}</p>
  <form id="rform" class="panel stack" style="margin-top:16px" novalidate>
    <div><h2 style="font-size:1.3rem">${t("reg_profile")}</h2>
      <div class="opts">${[["buyer","reg_buyer_d"],["supplier","reg_supplier_d"],["both","reg_both_d"]].map(([r,d])=>`<button type="button" class="opt" id="r-role-${r}" data-role="${r}" aria-pressed="${REG.role===r}"><b>${t(r)}</b><span>${t(d)}</span></button>`).join("")}</div>
      <div class="err" id="e-role"></div></div>
    <div class="fields">
      ${f("name",t("r_name"),"text",true,"Ej. Café Sierra Nevada S.A.S.")}
      ${f("taxid",t("r_taxid"))}
      <div class="field"><label for="r-cc">${t("r_country")}</label><select id="r-cc" data-k="cc">${ccOpts}</select></div>
      ${f("city",t("r_city"),"text",false,"Santa Marta")}
      <div class="field"><label for="r-sector">${t("r_sector")}</label><select id="r-sector" data-k="sector"><option value="">${t("choose")}</option>${SECTORS.map(s=>`<option value="${s.id}" ${REG.sector===s.id?"selected":""}>${esc(L(s))}</option>`).join("")}</select><div class="err" id="e-sector"></div></div>
      <div class="field full"><label for="r-hs">${t("r_hs")}</label>
        <div class="srow"><input id="r-hs" type="text" placeholder="${esc(t("r_hs_ph"))}" list="hslist" autocomplete="off"><button type="button" class="btn btn-ghost" id="r-hs-add">+</button></div>
        <datalist id="hslist">${Object.values(CODE).map(c=>`<option value="${c.code} · ${esc(L(c))}"></option>`).join("")}</datalist>
        <div class="chips-in" id="r-codes">${REG.codes.map(c=>`<span class="chip"><span class="mono">${fmtCode(c)}</span> ${esc(shorten(codeLabel(c),30))}<button type="button" data-rm="${c}" aria-label="${t("del")} ${c}">×</button></span>`).join("")}</div>
        <div class="err" id="e-codes"></div></div>
      <div class="field full"><label for="r-markets">${t("r_markets")}</label><select id="r-markets" multiple size="5">${ALL_CC.map(cc=>[cc,cname(cc)]).sort((a,b)=>a[1].localeCompare(b[1])).map(([cc,n])=>`<option value="${cc}" ${REG.markets.includes(cc)?"selected":""}>${esc(n)}</option>`).join("")}</select><span class="hint">${({es:"Para elegir varios: en computador, Ctrl + clic; en celular, toque cada país.",en:"To choose several: on a computer, Ctrl + click; on a phone, tap each country.",pt:"Para escolher vários: no computador, Ctrl + clique; no celular, toque em cada país."})[LANG]}</span></div>
      ${f("web",t("r_web"),"text",false,"www.empresa.com")}
      ${f("contact",t("r_contact"))}
      ${f("jobrole",t("r_role"))}
      ${f("email",t("r_email"),"email")}
      ${f("phone",t("r_phone"),"tel")}
      <div class="field full"><label for="r-desc">${t("r_desc")}</label><textarea id="r-desc" data-k="desc" maxlength="500">${esc(REG.desc||"")}</textarea></div>
    </div>
    <label class="check"><input type="checkbox" id="r-ok" ${REG.ok?"checked":""}><span>${t("r_accept")} <a href="#terminos">${t("terms")}</a> · <a href="#privacidad">${t("privacy")}</a></span></label>
    <div class="err" id="e-ok"></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button type="submit" class="btn btn-main">${t("r_save")}</button>${ACC?`<a class="btn btn-ghost" href="#cuenta">${t("cancel")}</a>`:""}</div>
  </form></div>`;
}
function bindRegister(){
  const form = $("#rform");
  $$("[data-role]",form).forEach(b => b.onclick = () => { REG.role = b.dataset.role; $$("[data-role]",form).forEach(x=>x.setAttribute("aria-pressed", x===b)); $("#e-role").textContent=""; });
  $$("[data-k]",form).forEach(el => el.addEventListener("input", () => { REG[el.dataset.k] = el.value; }));
  $("#r-markets").onchange = (e) => { REG.markets = [...e.target.selectedOptions].map(o=>o.value); };
  $("#r-ok").onchange = (e) => REG.ok = e.target.checked;
  const addCode = () => {
    if(!$("#r-hs")) return;               // el usuario ya salió del formulario
    const v = $("#r-hs").value.trim(); if(!v) return;
    let code = (v.replace(/[.\s]/g,"").match(/^\d{2,6}/)||[])[0];
    if(code && !(CODE[code]||CHAP[code])) code = [6,4,2].map(n=>code.length>=n?code.slice(0,n):"").find(c=>c && (CODE[c]||CHAP[c])) || null;
    if(!code){ const found = searchCodes(v)[0]; code = found; }
    if(!code || !(CODE[code]||CHAP[code])){ toast(({es:"No encontramos «{v}». Pruebe con otra palabra (por ejemplo café, aguacate) o con el código HS.",en:"We couldn't find «{v}». Try another word (e.g. coffee, avocado) or the HS code.",pt:"Não encontramos «{v}». Tente outra palavra (por exemplo café, abacate) ou o código HS."})[LANG].replace("{v}", v)); return; }
    if(!REG.codes.includes(code)){ REG.codes.push(code); if(!REG.sector && CODE[code]) REG.sector = CODE[code].sector; }
    $("#r-hs").value = ""; setTimeout(() => { render(); $("#r-hs")?.focus(); }, 0);
  };
  $("#r-hs-add").onclick = addCode;
  $("#r-hs").addEventListener("change", () => setTimeout(addCode, 0));
  $("#r-hs").addEventListener("keydown", e => { if(e.key==="Enter"){ e.preventDefault(); addCode(); } });
  $$("[data-rm]",form).forEach(b => b.onclick = () => { REG.codes = REG.codes.filter(c=>c!==b.dataset.rm); render(); });
  form.onsubmit = (e) => {
    e.preventDefault();
    $$(".err",form).forEach(x=>x.textContent="");
    const errs = {};
    if(!REG.role) errs.role = t("err_profile");
    ["name","city","contact","email"].forEach(k => { if(!String(REG[k]||"").trim()) errs[k] = t("err_req"); });
    if(REG.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(REG.email)) errs.email = t("err_email");
    if(!REG.sector) errs.sector = t("err_req");
    if(!REG.codes.length) errs.codes = t("err_hs");
    if(!REG.ok) errs.ok = t("err_accept");
    Object.entries(errs).forEach(([k,v]) => { const el = $("#e-"+k); if(el) el.textContent = v; });
    if(Object.keys(errs).length){ const first = $(".err:not(:empty)",form); first?.scrollIntoView({behavior:"smooth",block:"center"}); return; }
    const wasNew = !ACC;
    const prevAcc = ACC;
    ACC = {...REG, updated:new Date().toISOString()};
    /* si cambia el nombre o el NIT, la verificación se pierde y hay que enviar documentos de nuevo */
    if(prevAcc && prevAcc.verif && (prevAcc.name!==ACC.name || prevAcc.taxid!==ACC.taxid)) ACC.verif = {status:"none"};
    store.set("account", ACC); REG = null;
    toast(wasNew ? t("r_saved") : t("r_updated")); go("empresa-me");
  };
}

/* ---------- Mi cuenta ---------- */
function vAccount(){
  if(!PAID()){
    if(!OBS) return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("acc_title")}])}<div class="empty" style="margin-top:20px"><b>${t("obs_title")}</b>${t("obs_lead")}<p><a class="btn btn-main" href="#registro">${t("nav_signup")}</a> <a class="btn btn-ghost" href="#planes">${t("see_plans")}</a></p></div></div>`;
    return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("acc_title")}])}
    <h1>${t("acc_title")}</h1>
    <div class="two" style="margin-top:16px">
      <div class="panel"><h2>${t("acc_observer")}</h2><dl class="kv"><dt>${t("obs_name")}</dt><dd>${esc(OBS.name)}</dd><dt>${t("r_email")}</dt><dd>${esc(OBS.email)}</dd><dt>${t("r_country")}</dt><dd>${esc(cname(OBS.cc))}</dd></dl>
        <div class="lock" style="margin-top:14px"><b>${t("gate_title")}</b>${t("obs_locked")}</div></div>
      <div class="stack"><div class="panel"><h2>${t("my_plan")}</h2><p style="margin:0 0 10px"><b>${t("plan_free")}</b></p><a class="btn btn-main btn-sm" href="#planes">${t("see_plans")}</a></div>
      <button class="linkbtn" id="b-logout" style="align-self:flex-start;color:var(--danger)">${t("logout")}</button></div>
    </div></div>`;
  }
  if(!ACC) return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("acc_title")}])}<div class="empty" style="margin-top:20px"><b>${t(PLAN)}</b>${t("no_profile")}<p><a class="btn btn-main" href="#registro">${t("create_profile")}</a></p></div></div>`;

  const saved = store.get("saved", []), alerts = store.get("alerts", []).slice(0,100), allReqs = store.get("requests", []), reqs = allReqs.slice(0,100);
  return `<div class="wrap page">${crumbs([{label:t("home"),href:"#inicio"},{label:t("acc_title")}])}
  <h1>${t("acc_title")}</h1>
  <div class="two" style="margin-top:16px">
    <div class="stack">
      ${approvalPanel()}
      ${PAID() && ACC && can("contacts") ? `<div class="panel"><div class="sec-head" style="margin:0"><h2 style="margin:0">${t("crm_title")} · ${prospects().filter(p=>!["won","lost"].includes(p.stage)).length}</h2><a class="btn btn-main btn-sm" href="#prospectos">${t("crm_open")}</a></div><p class="muted" style="margin:6px 0 0;font-size:.9rem">${t("crm_auto")}</p></div>` : ""}
      ${suggestPanel()}
      ${messagesPanel()}
      <div class="panel"><h2>${t("saved_searches")}</h2>${saved.length?`<div class="tablewrap" style="border:0"><table class="t"><tbody>${saved.map(s=>`<tr><td>${esc(describeSearch(s.f))}</td><td class="r num">${searchCompanies(s.f).length}</td><td class="r" style="white-space:nowrap"><button class="btn btn-ghost btn-sm" data-run="${esc(s.id)}">${t("run")}</button> <button class="linkbtn" data-delsaved="${esc(s.id)}">${t("del")}</button></td></tr>`).join("")}</tbody></table></div>`:`<p class="muted">${t("none_saved")}</p>`}</div>
      <div class="panel"><div class="sec-head" style="margin-bottom:8px"><h2 style="margin:0">${t("alerts")}</h2>${can("alerts")?`<button class="btn btn-ghost btn-sm" id="b-newalert">${t("create_alert")}</button>`:""}</div>
        ${alerts.length?`<div class="tablewrap" style="border:0"><table class="t"><tbody>${alerts.map(a=>`<tr><td><b>${esc(a.name)}</b><div class="muted" style="font-size:.84rem">${esc(describeSearch(a.f))} · ${t(a.freq)}</div></td><td class="r num">${searchCompanies(a.f).length} <span class="muted" style="font-size:.8rem">${t("matches_now")}</span></td><td class="r"><button class="linkbtn" data-delalert="${esc(a.id)}">${t("del")}</button></td></tr>`).join("")}</tbody></table></div>`:`<p class="muted">${t("none_alerts")}</p>`}</div>
      <div class="panel"><h2>${t("requests")}</h2>${reqs.length?`<div class="tablewrap" style="border:0"><table class="t"><thead><tr><th>${t("companies")}</th><th>${t("lv_hs")}</th><th>${t("rfq_qty")}</th><th>${t("bill_status")}</th><th>${t("generated")}</th></tr></thead><tbody>${reqs.map(r=>`<tr><td><a href="#empresa-${esc(r.coId)}">${esc(r.coName)}</a><div class="muted" style="font-size:.8rem">${t(r.kind==="offer"?"offer_title":r.kind==="contact"?"request_contact":"rfq_title")}</div></td><td class="codecell">${r.code?fmtCode(r.code):"—"}</td><td class="num">${esc(r.qty?r.qty+" "+r.unit:"—")}</td><td>${statusPill(r.status)}</td><td class="num">${new Date(r.at).toLocaleDateString(LANG==="en"?"en-US":"es-CO")}</td></tr>`).join("")}</tbody></table></div>${allReqs.length>100?`<p class="muted" style="font-size:.85rem">${t("showing_last")}</p>`:""}`:`<p class="muted">${t("none_requests")}</p>`}</div>
      ${catalogPanel()}
      ${teamPanel()}
    </div>
    <div class="stack">
      <div class="panel"><h2>${t("my_company")}</h2>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">${roleTag(ACC.role)}${ccTag(ACC.cc)}</div>
        <h3 style="font-size:1.4rem">${esc(ACC.name)}</h3><p class="muted" style="margin:4px 0 10px">${esc(ACC.city)}, ${esc(cname(ACC.cc))} · ${esc(L(SECTOR[ACC.sector]))}</p>
        <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px">${ACC.codes.map(c=>codeChip(c)).join("")}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn btn-ghost btn-sm" href="#empresa-me">${t("view_profile")}</a>${can("profile")?`<a class="btn btn-ghost btn-sm" href="#registro">${t("edit")}</a>`:""}</div></div>
      <div class="panel"><h2>${t("lvl_title")}</h2><p style="margin:0 0 4px"><b>${t("lvl_"+ULEVEL)}</b></p><p class="muted" style="margin:0;font-size:.92rem">${t("lvl_"+ULEVEL+"_d")}</p></div>
      ${verifPanel()}
      ${notifyPanel()}
      ${billingPanel()}
      <button class="linkbtn" id="b-logout" style="align-self:flex-start;color:var(--danger)">${t("logout")}</button>
    </div>
  </div></div>`;
}
function bindAccount(){
  $$("[data-run]").forEach(b => b.onclick = () => { const s = store.get("saved",[]).find(x=>x.id==b.dataset.run); if(s){ Object.assign(S, {cont:"",sub:"",cc:"",sector:"",hs:"",verified:false,q:""}, s.f); shown=PAGE; go("buscar"); } });
  $$("[data-delsaved]").forEach(b => b.onclick = () => { store.set("saved", store.get("saved",[]).filter(x=>x.id!=b.dataset.delsaved)); render(); });
  $$("[data-delalert]").forEach(b => b.onclick = () => { store.set("alerts", store.get("alerts",[]).filter(x=>x.id!=b.dataset.delalert)); render(); });
  const na = $("#b-newalert"); if(na) na.onclick = () => openAlert();
  bindTeam(); bindBilling(); bindApproval(); bindVerif(); bindCatalog(); bindMessages(); bindNotify();
  const lo = $("#b-logout"); if(lo) lo.onclick = () => modal(`<h2>${t("logout")}</h2><p>${t("logout_confirm")}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("cancel")}</button><button class="btn btn-main" id="m-yes" style="background:var(--danger)">${t("yes_delete")}</button></div>`, (m) => {
    $("#m-yes",m).onclick = () => { ["account","saved","alerts","requests","plan","observer","ulevel","users","catalog","threads","myopps","quotes","notify","ratings","crm"].forEach(store.del); ACC=null; OBS=null; PLAN="free"; ULEVEL="admin"; closeModal(); go("inicio"); };
  });
}

/* ---------- Ventanas ---------- */
function modal(html, bind){
  const root = $("#modalRoot");
  root.innerHTML = `<div class="modal-bg" id="mbg"><div class="modal" role="dialog" aria-modal="true">${html}</div></div>`;
  const m = $(".modal", root);
  $("#mbg").addEventListener("mousedown", e => { if(e.target.id==="mbg") closeModal(); });
  $$("[data-close]", m).forEach(b => b.onclick = closeModal);
  document.addEventListener("keydown", escClose);
  bind && bind(m);
  setTimeout(() => { const first = $("input,select,textarea,button", m); first && first.focus(); }, 30);
}
function escClose(e){ if(e.key==="Escape") closeModal(); }
function closeModal(){ $("#modalRoot").innerHTML = ""; document.body.classList.remove("pr"); document.removeEventListener("keydown", escClose); }

function openRFQ(co, kind){
  if(gateP("send","w_rfq")) return;
  if(!ACC){ modal(`<h2>${t(kind==="offer"?"offer_title":kind==="contact"?"request_contact":"rfq_title")}</h2><p>${t("need_account")}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("cancel")}</button><a class="btn btn-main" href="#registro" data-close>${t("create_profile")}</a></div>`); return; }
  const reqs = store.get("requests", []);
  const month = new Date().toISOString().slice(0,7);
  if(reqs.filter(r=>r.at.startsWith(month)).length >= reqLimit()){ modal(`<h2>${t("nav_plans")}</h2><p>${t("limit_req")}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("close")}</button><a class="btn btn-main" href="#planes" data-close>${t("see_plans")}</a></div>`); return; }
  const title = t(kind==="offer"?"offer_title":kind==="contact"?"request_contact":"rfq_title");
  const prod = kind!=="contact" ? `<div class="fields">
      <div class="field full"><label for="q-code">${t("rfq_product")}</label><select id="q-code">${co.codes.map(c=>`<option value="${c}">${fmtCode(c)} · ${esc(codeLabel(c))}</option>`).join("")}</select></div>
      <div class="field"><label for="q-qty">${t("rfq_qty")}</label><input id="q-qty" type="number" min="1" value="1"></div>
      <div class="field"><label for="q-unit">${t("rfq_unit")}</label><select id="q-unit">${["t (toneladas)","kg","contenedor 20'","contenedor 40'","unidades","cajas","litros"].map(u=>`<option>${u}</option>`).join("")}</select></div>
      <div class="field"><label for="q-inc">${t("rfq_incoterm")}</label><select id="q-inc">${INCOS.map(i=>`<option ${i==="FOB"?"selected":""}>${i}</option>`).join("")}</select></div>
      <div class="field"><label for="q-dest">${t("rfq_dest")}</label><input id="q-dest" value="${esc(ACC.city||"")}"></div>
    </div>` : "";
  modal(`<h2>${title}</h2><p class="muted" style="margin-top:0">${esc(co.name)} · ${esc(cname(co.cc))}</p>
    <form id="qform" class="stack">${prod}
      <div class="field"><label for="q-msg">${t("rfq_msg")}</label><textarea id="q-msg">${esc(kind==="contact" ? (LANG==="en"?`Hello, ${ACC.name} would like to get in touch.`:`Hola, en ${ACC.name} queremos ponernos en contacto con ustedes.`) : "")}</textarea></div>
      <p class="muted" style="margin:0;font-size:.86rem">${t("rfq_note")}</p>
      <div class="acts"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button type="submit" class="btn btn-main">${t("send")}</button></div>
    </form>`, (m) => {
    $$("[data-close]", m).forEach(b => b.onclick = closeModal);
    $("#qform", m).onsubmit = (e) => { e.preventDefault();
      const qtyEl = $("#q-qty",m);
      if(qtyEl){ const n = Number(qtyEl.value); if(!Number.isFinite(n) || n < 1 || n > 1e7){ qtyEl.setCustomValidity(t("err_qty")); qtyEl.reportValidity(); qtyEl.focus(); return; } qtyEl.setCustomValidity(""); }
      const r = { id:Date.now(), kind, coId:co.id, coName:co.name, code:$("#q-code",m)?.value||"", qty:$("#q-qty",m)?.value||"", unit:$("#q-unit",m)?.value||"", inc:$("#q-inc",m)?.value||"", dest:$("#q-dest",m)?.value||"", msg:$("#q-msg",m).value, at:new Date().toISOString(), by:ULEVEL, status: can("approve") ? "sent" : "pending" };
      store.set("requests", [r, ...store.get("requests", [])].slice(0, 500)); if(can("contacts")) addProspect(co, kind==="contact"?"contact":"quote", true); closeModal(); toast(r.status==="pending" ? t("rfq_pending_ok") : t("rfq_ok")); };
  });
}

function openAlert(){
  if(gateP("alerts","w_alert")) return;
  if(!ACC){ modal(`<h2>${t("alert_title")}</h2><p>${t("need_account")}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("cancel")}</button><a class="btn btn-main" href="#registro" data-close>${t("create_profile")}</a></div>`); return; }
  const alerts = store.get("alerts", []);
  if(alerts.length >= alertLimit()){ modal(`<h2>${t("alert_title")}</h2><p>${t("alert_limit")}</p><div class="acts"><button class="btn btn-ghost" data-close>${t("close")}</button><a class="btn btn-main" href="#planes" data-close>${t("see_plans")}</a></div>`); return; }
  const base = (S.mode==="buyers"||S.mode==="suppliers") ? {...S} : {...S, mode: ACC.role==="buyer" ? "suppliers" : "buyers", hs: S.hs || ACC.codes[0] || ""};
  delete base.sort;
  modal(`<h2>${t("alert_title")}</h2><p class="muted" style="margin-top:0">${t("alert_lead")}</p>
    <form id="aform" class="stack">
      <div class="fields">
        <div class="field"><label for="a-mode">${t("alert_what")}</label><select id="a-mode"><option value="buyers" ${base.mode==="buyers"?"selected":""}>${t("buyers")}</option><option value="suppliers" ${base.mode==="suppliers"?"selected":""}>${t("suppliers")}</option></select></div>
        <div class="field"><label for="a-hs">${t("f_hs")}</label><input id="a-hs" value="${esc(base.hs||"")}" inputmode="numeric" maxlength="6"></div>
        <div class="field"><label for="a-cc">${t("f_country")}</label><select id="a-cc"><option value="">${t("world")}</option>${ALL_CC.map(cc=>[cc,cname(cc)]).sort((a,b)=>a[1].localeCompare(b[1])).map(([cc,n])=>`<option value="${cc}" ${base.cc===cc?"selected":""}>${esc(n)}</option>`).join("")}</select></div>
        <div class="field"><label for="a-freq">${t("alert_freq")}</label><select id="a-freq"><option value="daily">${t("daily")}</option><option value="weekly" selected>${t("weekly")}</option></select></div>
        <div class="field full"><label for="a-name">${t("alert_name")}</label><input id="a-name" value="${esc(describeSearch(base))}"></div>
      </div>
      <div class="acts"><button type="button" class="btn btn-ghost" data-close>${t("cancel")}</button><button type="submit" class="btn btn-main">${t("save")}</button></div>
    </form>`, (m) => {
    $$("[data-close]", m).forEach(b => b.onclick = closeModal);
    $("#aform", m).onsubmit = (e) => { e.preventDefault();
      const cc = $("#a-cc",m).value;
      const f = { mode:$("#a-mode",m).value, q:base.q||"", hs:$("#a-hs",m).value.replace(/\D/g,""), cc, sub:cc?COUNTRY[cc].sub:"", cont:cc?COUNTRY[cc].cont:"", sector:base.sector||"", verified:!!base.verified };
      store.set("alerts", [{ id:Date.now(), name:$("#a-name",m).value || describeSearch(f), f, freq:$("#a-freq",m).value, at:new Date().toISOString() }, ...alerts]);
      closeModal(); toast(t("alert_ok")); if((location.hash||"")==="#cuenta") render(); };
  });
}

/* ---------- Exportar (con referencia a SkyNet Genesis) ---------- */
function exportRows(){
  if(LAST.kind==="companies") return { head:[t("companies"),t("f_role"),t("lv_country"),t("r_city"),t("lv_sector"),t("lv_hs"),t("verified"),t("email"),t("phone")],
    rows: LAST.rows.slice(0,200).map(co => [co.name, t(co.role), cname(co.cc), co.city||"—", L(SECTOR[co.sector]), co.codes.map(fmtCode).join(" "), co.verified?"✓":"", canSee(co)?co.email:"—", canSee(co)?co.phone:"—"]) };
  if(LAST.kind==="codes") return { head:[t("lv_hs"),t("lv_product"),t("lv_sector"),t("suppliers"),t("buyers")],
    rows: LAST.rows.slice(0,200).map(c => { const n = countFor(c,{cont:S.cont,sub:S.sub,cc:S.cc}); return [fmtCode(c), codeLabel(c), L(SECTOR[CODE[c]?.sector]), n.s, n.b]; }) };
  return { head:[t("lv_country"),t("lv_sub"),t("suppliers"),t("buyers")], rows: LAST.rows.map(cc => { const s=countryStats(cc); return [cname(cc), L(SUB[COUNTRY[cc].sub]), s.s, s.b]; }) };
}
const reportFootText = () => `${t("report_by")} · ${SG.mail} · WhatsApp ${SG.wa} · ${t("generated")}: ${new Date().toLocaleString(LANG==="en"?"en-US":"es-CO")}`;
function openExport(){
  if(gateP("export","w_export")) return;
  const { head, rows } = exportRows();
  const title = describeSearch(S);
  modal(`<div style="display:flex;gap:10px;align-items:center;margin-bottom:6px"><span style="width:34px;height:34px;display:block">${ICON.logo}</span><div><h2 style="margin:0">Global Trade Finder</h2><div class="muted" style="font-size:.86rem">${esc(title)}</div></div></div>
    <p class="muted no-print" style="margin:6px 0 10px;font-size:.88rem">${t("export_lead")}</p>
    <div class="tablewrap"><table class="t" id="exp-table"><thead><tr>${head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(v=>`<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
    <div class="report-foot">${ICON.logo}<span>${esc(reportFootText())}</span></div>
    <div class="acts no-print"><button class="btn btn-ghost" data-close>${t("close")}</button><button class="btn btn-ghost" id="x-copy">${t("copy")}</button>${FRAMED?"":`<button class="btn btn-ghost" id="x-csv">${t("download_csv")}</button><button class="btn btn-main" id="x-print">${t("print")}</button>`}</div>`, (m) => {
    const tsv = [head, ...rows].map(r => r.join("\t")).join("\n") + "\n\n" + reportFootText();
    $("#x-copy",m).onclick = () => { const ok = () => toast(t("copied")); try { navigator.clipboard.writeText(tsv).then(ok, () => selectTable()); } catch(e){ selectTable(); } };
    const selectTable = () => { const r = document.createRange(); r.selectNode($("#exp-table",m)); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    const csvB = $("#x-csv",m); if(csvB) csvB.onclick = () => {
      const q = (v) => '"'+String(v).replaceAll('"','""')+'"';
      const csv = "﻿" + [head, ...rows].map(r => r.map(q).join(",")).join("\r\n") + "\r\n\r\n" + q(reportFootText()) + "\r\n";
      const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"})); a.download = "global-trade-finder-"+new Date().toISOString().slice(0,10)+".csv"; document.body.appendChild(a); a.click(); a.remove(); };
    const pB = $("#x-print",m); if(pB) pB.onclick = () => { document.body.classList.add("pr"); window.print(); setTimeout(()=>document.body.classList.remove("pr"), 500); };
  });
}

/* ---------- Páginas legales ---------- */
function vTerms(){
  const es = LANG!=="en";
  return `<div class="wrap page" style="max-width:780px"><h1>${t("terms_title")}</h1><div class="stack" style="margin-top:14px">
  ${LANG==="pt" ? `<p>O Global Trade Finder é um aplicativo da SkyNet Genesis que permite às empresas se cadastrarem como compradoras, fornecedoras ou ambas, e buscar contrapartes por país, setor, produto e código HS.</p>
  <p><b>Informações das empresas.</b> Cada empresa responde pela veracidade dos dados que publica. O selo "Verificada" indica que seus documentos de existência foram revisados; não é uma garantia comercial. As operações são acordadas diretamente entre as partes.</p>
  <p><b>Assinatura.</b> O cadastro básico é gratuito. Os planos Comprador, Fornecedor e Comprador e fornecedor são pagos por assinatura em skynetgenesis.com e podem ser cancelados a qualquer momento.</p>
  <p><b>Demandas, cotações e mensagens.</b> As demandas publicadas e as cotações enviadas são ofertas entre empresas; o Global Trade Finder não intervém no pagamento, no envio nem na qualidade da mercadoria.</p>
  <p><b>Dados de comércio.</b> Os dados mundiais vêm do UN Comtrade (Nações Unidas) e são exibidos com a fonte; podem mudar quando os países atualizam seus relatórios.</p>
  <p><b>Uso permitido.</b> Não é permitido copiar o diretório em massa, enviar publicidade não solicitada nem publicar produtos de comércio proibido.</p>
  <p><b>${LANG==="en"?"Real companies of Colombia":LANG==="pt"?"Empresas reais da Colômbia":"Empresas reales de Colombia"}.</b> ${t("real_legal",{y:DIAN_META.year, y2:DIAN_META.year2, mail:SG.mail})}</p>
  <p><b>Versão de demonstração.</b> As empresas de outros países são fictícias; seus nomes, e-mails e telefones são gerados apenas para testes.</p>
  <p class="muted">Estes termos são regidos pela legislação da Colômbia.</p>` : es ? `<p>Global Trade Finder es una aplicación de SkyNet Genesis que permite a empresas registrarse como compradoras, proveedoras o ambas, y buscar contrapartes por país, sector, producto y código HS.</p>
  <p><b>Información de las empresas.</b> Cada empresa responde por la veracidad de los datos que publica. La marca "Verificada" indica que se revisaron sus documentos de existencia; no es una garantía comercial. Las operaciones se acuerdan directamente entre las partes.</p>
  <p><b>Suscripción.</b> El registro básico es gratuito. Los planes Comprador, Proveedor y Comprador y proveedor se pagan por suscripción en skynetgenesis.com y pueden cancelarse en cualquier momento.</p>
  <p><b>Requerimientos, cotizaciones y mensajes.</b> Los requerimientos publicados y las cotizaciones enviadas son ofertas entre empresas; Global Trade Finder no interviene en el pago, el envío ni la calidad de la mercancía.</p>
  <p><b>Cifras de comercio.</b> Las cifras mundiales provienen de UN Comtrade (Naciones Unidas) y se muestran con su fuente; pueden cambiar cuando los países actualizan sus reportes.</p>
  <p><b>Uso permitido.</b> No se permite copiar masivamente el directorio, enviar publicidad no solicitada ni publicar productos de comercio prohibido.</p>
  <p><b>${LANG==="en"?"Real companies of Colombia":LANG==="pt"?"Empresas reais da Colômbia":"Empresas reales de Colombia"}.</b> ${t("real_legal",{y:DIAN_META.year, y2:DIAN_META.year2, mail:SG.mail})}</p>
  <p><b>Versión de demostración.</b> Las empresas de otros países son ficticias; sus nombres, correos y teléfonos se generan solo para pruebas.</p>`
  : `<p>Global Trade Finder is a SkyNet Genesis application that lets companies list themselves as buyers, suppliers or both, and find counterparts by country, sector, product and HS code.</p>
  <p><b>Company information.</b> Each company is responsible for the accuracy of what it publishes. The "Verified" mark means its registration documents were reviewed; it is not a commercial guarantee. Deals are agreed directly between the parties.</p>
  <p><b>Subscription.</b> The basic listing is free. The Buyer, Supplier and Buyer & supplier plans are paid by subscription at skynetgenesis.com and can be cancelled at any time.</p>
  <p><b>Requests, quotes and messages.</b> Posted requests and quotes are offers between companies; Global Trade Finder does not handle payment, shipping or product quality.</p>
  <p><b>Trade figures.</b> World figures come from UN Comtrade (United Nations) and are shown with their source; they may change when countries update their reports.</p>
  <p><b>Permitted use.</b> Bulk copying of the directory, unsolicited advertising and listing prohibited goods are not allowed.</p>
  <p><b>${LANG==="en"?"Real companies of Colombia":LANG==="pt"?"Empresas reais da Colômbia":"Empresas reales de Colombia"}.</b> ${t("real_legal",{y:DIAN_META.year, y2:DIAN_META.year2, mail:SG.mail})}</p>
  <p><b>Demo version.</b> Companies from other countries are fictitious; their names, emails and phone numbers are generated for testing only.</p>`}
  <p class="muted">SkyNet Genesis · ${SG.mail} · WhatsApp ${SG.wa}</p></div></div>`;
}
function vPrivacy(){
  const es = LANG!=="en";
  return `<div class="wrap page" style="max-width:780px"><h1>${t("privacy_title")}</h1><div class="stack" style="margin-top:14px">
  ${LANG==="pt" ? `<p>A SkyNet Genesis trata os dados das empresas e de seus contatos conforme a Lei 1581 de 2012 da Colômbia e o Decreto 1377 de 2013.</p>
  <p><b>Finalidade.</b> Publicar o perfil comercial e o catálogo da empresa, permitir que outras empresas a encontrem, entregar mensagens, demandas e cotações entre empresas, enviar avisos de oportunidades por e-mail e gerenciar a assinatura.</p>
  <p><b>Documentos de verificação.</b> O documento fiscal e a certidão da Câmara de Comércio são usados apenas para verificar a existência da empresa; não são publicados.</p>
  <p><b>Direitos.</b> Você pode conhecer, atualizar, retificar e pedir a exclusão de seus dados, e revogar a autorização, escrevendo para ${SG.mail}.</p>
  <p><b>${LANG==="en"?"Public DIAN data":LANG==="pt"?"Dados públicos da DIAN":"Datos públicos de la DIAN"}.</b> ${t("real_legal",{y:DIAN_META.year, y2:DIAN_META.year2, mail:SG.mail})}</p>
  <p><b>Nesta demonstração</b> os dados que você digita ficam salvos apenas no seu navegador e não são enviados a nenhum servidor.</p>` : es ? `<p>SkyNet Genesis trata los datos de las empresas y de sus personas de contacto conforme a la Ley 1581 de 2012 de Colombia y el Decreto 1377 de 2013.</p>
  <p><b>Finalidad.</b> Publicar el perfil comercial y el catálogo de la empresa, permitir que otras empresas la encuentren, entregar los mensajes, requerimientos y cotizaciones entre empresas, enviar avisos de oportunidades por correo y gestionar la suscripción.</p>
  <p><b>Documentos de verificación.</b> El RUT y el certificado de Cámara de Comercio se usan solo para verificar la existencia de la empresa; no se publican.</p>
  <p><b>Derechos.</b> Usted puede conocer, actualizar, rectificar y pedir la supresión de sus datos, y revocar la autorización, escribiendo a ${SG.mail}.</p>
  <p><b>${LANG==="en"?"Public DIAN data":LANG==="pt"?"Dados públicos da DIAN":"Datos públicos de la DIAN"}.</b> ${t("real_legal",{y:DIAN_META.year, y2:DIAN_META.year2, mail:SG.mail})}</p>
  <p><b>En esta demostración</b> los datos que usted escribe se guardan solo en su navegador y no se envían a ningún servidor.</p>`
  : `<p>SkyNet Genesis processes the data of companies and their contact persons under Colombian Law 1581 of 2012 and Decree 1377 of 2013.</p>
  <p><b>Purpose.</b> To publish the company's business profile and catalog, let other companies find it, deliver messages, requests and quotes between companies, send opportunity notices by email and manage the subscription.</p>
  <p><b>Verification documents.</b> The tax ID document and Chamber of Commerce certificate are used only to verify that the company exists; they are not published.</p>
  <p><b>Rights.</b> You may access, update, correct and request deletion of your data, and revoke your authorization, by writing to ${SG.mail}.</p>
  <p><b>${LANG==="en"?"Public DIAN data":LANG==="pt"?"Dados públicos da DIAN":"Datos públicos de la DIAN"}.</b> ${t("real_legal",{y:DIAN_META.year, y2:DIAN_META.year2, mail:SG.mail})}</p>
  <p><b>In this demo</b> the data you enter is stored only in your browser and is not sent to any server.</p>`}</div></div>`;
}
const vNotFound = () => `<div class="wrap page"><div class="empty"><b>404</b><a href="#inicio">${t("home")}</a></div></div>`;

/* ---------- Enrutador ---------- */
let RENDERING = false;
function render(){
  if(RENDERING){ setTimeout(render, 0); return; }   // evita redibujar dentro de otro redibujo (blur/change)
  RENDERING = true;
  try { renderNow(); } finally { RENDERING = false; }
}
function renderNow(){
  let h; try { h = decodeURIComponent((location.hash||"#inicio").slice(1)) || "inicio"; } catch(e){ h = "404"; }
  h = h.replace(/^(pais|pc)-([a-z]{2})/, (m,a,b)=>a+"-"+b.toUpperCase());
  const [r, a, b] = h.split("-");
  let html, bind = null;
  switch(r){
    case "inicio": html = vHome(); bind = () => { bindSearchBox(); bindHow(); }; break;
    case "buscar": html = vSearch(); bind = bindSearch; break;
    case "mercados": html = vMarkets(); break;
    case "region": html = vRegion(a); break;
    case "sub": html = vSub(a+"-"+b); break;
    case "pais": html = vCountry(a, b); bind = () => bindCountry(a, b); break;
    case "pc": html = vCountryCode(a, b); break;
    case "hs": if(a){ html = vCode(a); bind = () => bindCode(a); } else { html = vHS(); bind = bindHS; } break;
    case "sec": html = vSection(a); break;
    case "cap": html = vChapter(a); break;
    case "empresas": html = vDirectory(); bind = bindDirectory; break;
    case "empresa": html = vCompany(a); bind = () => bindCompany(a); break;
    case "planes": html = vPlans(); bind = bindPlans; break;
    case "oportunidades": html = vOpps(); bind = bindOpps; break;
    case "prospectos": html = vCRM(); bind = bindCRM; break;
    case "apoyos": html = vApoyos(); bind = bindApoyos; break;
    case "herramientas": html = vTools(); break;
    case "ferias": html = vFairs(); bind = bindFairs; break;
    case "plantillas": html = vTemplates(); bind = bindTemplates; break;
    case "clasificar": html = vClassify(); bind = bindClassify; break;
    case "calculadora": html = vCalc(); bind = bindCalc; break;
    case "tablero": html = vDashboard(); break;
    case "registro": if(PAID() && !can("profile")){ html = `<div class="wrap page"><div class="empty"><b>${t("perm_title")}</b>${t("perm_msg",{lvl:t("lvl_"+ULEVEL),what:t("w_profile")})}</div></div>`; } else if(PAID()){ html = vRegister(); bind = bindRegister; } else { html = vObserver(); bind = bindObserver; } break;
    case "cuenta": html = vAccount(); bind = bindAccount; break;
    case "terminos": html = vTerms(); break;
    case "privacidad": html = vPrivacy(); break;
    default: html = vNotFound();
  }
  if(r!=="registro") REG = null;
  chrome();
  V.innerHTML = html;
  bind && bind();
  $("#mainNav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false");
}
let lastRoute = "";
window.addEventListener("hashchange", () => {
  const r = (location.hash||"#inicio").slice(1);
  if($(".modal-bg")) closeModal();
  if(r!==lastRoute){ if(!r.startsWith("buscar") && !r.startsWith("empresas")) shown = PAGE; lastRoute = r; render(); window.scrollTo(0,0); }
});
$$(".lang button").forEach(b => b.onclick = () => { LANG = b.dataset.lang; store.set("lang", LANG); render(); });
$("#menuBtn").onclick = () => { const n = $("#mainNav"); n.classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", n.classList.contains("open")); };
lastRoute = (location.hash||"#inicio").slice(1);
installBackGuard();
render();
