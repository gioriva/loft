/* ═══════════════════════════════════════════════════
   ARCHITECT'S LOFT — Language Engine v4
   Storage: window.name (works on file:// AND http://)
   ═══════════════════════════════════════════════════ */

var SUPPORTED = ['it','en','fr','de'];

function readLang() {
  return 'it'; /* Default always Italian */
}
function writeLang(lang) { /* no-op */ }

var T = {

  "nav.home": {
  it: "Home",
  en: "Home",
  fr: "Accueil",
  de: "Start"
  },
  "nav.info": {
  it: "Info",
  en: "Info",
  fr: "Infos",
  de: "Info"
  },
  "nav.gallery": {
  it: "Galleria",
  en: "Gallery",
  fr: "Galerie",
  de: "Galerie"
  },
  "nav.book": {
  it: "Prenota ora",
  en: "Book now",
  fr: "Réserver",
  de: "Jetzt buchen"
  },
  "footer.tagline": {
  it: "Un loft di design nel cuore di Como. Spazi architettonici, atmosfera unica.",
  en: "A design loft in the heart of Como. Architectural spaces, unique atmosphere.",
  fr: "Un loft de design au cœur de Côme. Espaces architecturaux, atmosphère unique.",
  de: "Ein Design-Loft im Herzen von Como. Architektonische äume, einzigartige Atmosphäre."
  },
  "footer.nav": {
  it: "Navigazione",
  en: "Navigation",
  fr: "Navigation",
  de: "Navigation"
  },
  "footer.where": {
  it: "Dove siamo",
  en: "Location",
  fr: "Où nous sommes",
  de: "Lage"
  },
  "footer.bookon": {
  it: "Prenota su",
  en: "Book on",
  fr: "Réserver sur",
  de: "Buchen auf"
  },
  "footer.rights": {
  it: "© 2025 Architect’s Loft Como. Tutti i diritti riservati.",
  en: "© 2025 Architect’s Loft Como. All rights reserved.",
  fr: "© 2025 Architect’s Loft Como. Tous droits réservés.",
  de: "© 2025 Architect’s Loft Como. Alle Rechte vorbehalten."
  },
  "home.hero.tag": {
  it: "LAGO DI COMO",
  en: "LAKE COMO",
  fr: "LAC DE CÔME",
  de: "COMER SEE"
  },
  "home.hero.sub": {
  it: "Un loft di design nel cuore di Como. Spazi ad altezza doppia, scala a chiocciola e ogni dettaglio pensato per regalarti un soggiorno indimenticabile.",
  en: "A design loft in the heart of Como. Double-height ceilings, spiral staircase and every detail crafted to give you an unforgettable stay.",
  fr: "Un loft de design au cœur de Côme. Doubles hauteurs, escalier en colimaçon et chaque détail pensé pour vous offrir un séjour inoubliable.",
  de: "Ein Design-Loft im Herzen von Como. Doppelte Raumhöhe, Wendeltreppe und jedes Detail für einen unvergeßlichen Aufenthalt."
  },
  "home.hero.cta1": {
  it: "Prenota ora",
  en: "Book now",
  fr: "Réserver maintenant",
  de: "Jetzt buchen"
  },
  "home.hero.cta2": {
  it: "Scopri gli spazi",
  en: "Explore the spaces",
  fr: "Découvrir les espaces",
  de: "Räume entdecken"
  },
  "home.strip.1l": {
  it: "Su due livelli",
  en: "Two levels",
  fr: "Sur deux niveaux",
  de: "Auf zwei Ebenen"
  },
  "home.strip.2l": {
  it: "Ospiti",
  en: "Guests",
  fr: "Voyageurs",
  de: "Gäste"
  },
  "home.strip.3l": {
  it: "Dal lago",
  en: "From the lake",
  fr: "Du lac",
  de: "Vom See"
  },
  "home.strip.4l": {
  it: "Posto auto gratuito",
  en: "Free private parking",
  fr: "Parking gratuit inclus",
  de: "Kostenloser Parkplatz"
  },
  "home.intro.label": {
  it: "Chi siamo",
  en: "About",
  fr: "À propos",
  de: "Über uns"
  },
  "home.intro.title": {
  it: "Dove l'architettura<br>incontra l'ospitalità",
  en: "Where architecture<br>meets hospitality",
  fr: "Là où l'architecture<br>rencontre l'hospitalité",
  de: "Wo Architektur auf<br>Gastfreundschaft trifft"
  },
  "home.intro.quote": {
  it: "Un rifugio pensato da architetti per chi ama la bellezza dei dettagli.",
  en: "A retreat designed by architects for those who love beauty in every detail.",
  fr: "Un refuge conçu par des architectes pour ceux qui aiment la beauté des détails.",
  de: "Ein Rückzugsort, entworfen von Architekten für Menschen, die die Schönheit im Detail lieben."
  },
  "home.intro.p1": {
  it: "Architect's Loft è un appartamento su due livelli immerso nel tessuto storico di Como, a pochi passi dal centro e dal lungolago. L'abitazione è stata progettata con cura per unire comfort contemporaneo e fascino industriale: soffitti alti, scala a chiocciola in acciaio, grandi finestre che inondano di luce ogni angolo.",
  en: "Architect's Loft is a two-level apartment nestled in the historic heart of Como, steps from the centre and the lake. The space has been carefully designed to blend contemporary comfort with industrial charm: high ceilings, a steel spiral staircase, and large windows flooding every corner with light.",
  fr: "Architect's Loft est un appartement sur deux niveaux niché dans le tissu historique de Côme, à deux pas du centre et du bord du lac. L'espace a été conçu pour allier confort contemporain et charme industriel : hauts plafonds, escalier en colimaçon en acier, grandes fenêtres inondant chaque recoin de lumière.",
  de: "Architect's Loft ist eine zweigeschossige Wohnung im historischen Kern von Como, nur wenige Schritte vom Zentrum und dem Seeufer entfernt. Der Raum verbindet modernen Komfort mit industriellem Charme: hohe Decken, eine Wendeltreppe aus Stahl, große Fenster."
  },
  "home.intro.p2": {
  it: "Appena completamente ristrutturato, ogni elemento — dal parquet alle lampade — è stato scelto con attenzione per creare un'atmosfera unica, romantica e sofisticata. Il tuo soggiorno a Como non sarà semplicemente una notte in più.",
  en: "Freshly and fully renovated, every element — from the parquet to the light fittings — has been chosen with care to create a unique, romantic and sophisticated atmosphere. Your stay in Como will be far more than just another night away.",
  fr: "Entièrement rénové, chaque élément — du parquet aux luminaires — a été choisi avec soin pour créer une atmosphère unique, romantique et sophistiquée.",
  de: "Frisch und vollständig renoviert wurde jedes Element — vom Parkett bis zu den Leuchten — mit Bedacht ausgewählt für eine einzigartige, romantische und stilvolle Atmosphäre."
  },
  "home.intro.btn": {
  it: "Tutte le informazioni",
  en: "Full information",
  fr: "Toutes les informations",
  de: "Alle Informationen"
  },
  "home.spaces.label": {
  it: "Gli spazi",
  en: "The spaces",
  fr: "Les espaces",
  de: "Die Räume"
  },
  "home.spaces.title": {
  it: "Quattro ambienti,<br>un'unica anima",
  en: "Four spaces,<br>one soul",
  fr: "Quatre ambiances,<br>une seule âme",
  de: "Vier Bereiche,<br>eine einzige Seele"
  },
  "home.spaces.living": {
  it: "Living",
  en: "Living Room",
  fr: "Séjour",
  de: "Wohnzimmer"
  },
  "home.spaces.cucina": {
  it: "Cucina",
  en: "Kitchen",
  fr: "Cuisine",
  de: "Küche"
  },
  "home.spaces.camera": {
  it: "Camera",
  en: "Bedroom",
  fr: "Chambre",
  de: "Schlafzimmer"
  },
  "home.spaces.bagno": {
  it: "Bagno",
  en: "Bathroom",
  fr: "Salle de bain",
  de: "Badezimmer"
  },
  "home.why.label": {
  it: "Perché sceglierci",
  en: "Why choose us",
  fr: "Pourquoi nous choisir",
  de: "Warum uns wählen"
  },
  "home.why.title": {
  it: "Tutto quello che<br>cerchi, e qualcosa in più",
  en: "Everything you need,<br>and a little more",
  fr: "Tout ce que vous cherchez,<br>et un peu plus",
  de: "Alles, was Sie suchen,<br>und noch etwas mehr"
  },
  "home.why.1t": {
  it: "Posizione privilegiata",
  en: "Prime location",
  fr: "Emplacement privilégié",
  de: "Bevorzugte Lage"
  },
  "home.why.1p": {
  it: "In pieno centro storico, a 5 minuti a piedi dal lago e dalla Cattedrale di Como. Tutto a portata di mano.",
  en: "Right in the historic centre, 5 minutes' walk from the lake and Como Cathedral. Everything within easy reach.",
  fr: "À 5 minutes à pied du lac et de la cathédrale de Côme. Tout à portée de main.",
  de: "Im historischen Zentrum, 5 Gehminuten vom See und der Kathedrale von Como. Alles in greifbarer Nähe."
  },
  "home.why.2t": {
  it: "Posto auto dedicato",
  en: "Dedicated parking",
  fr: "Parking dédié",
  de: "Eigener Parkplatz"
  },
  "home.why.2p": {
  it: "Un posto auto privato gratuito incluso nel soggiorno — un lusso raro nel centro di Como.",
  en: "A free private parking space included with your stay — a rare luxury in central Como.",
  fr: "Une place de parking privée et gratuite incluse dans votre séjour.",
  de: "Ein kostenloser, privater Parkplatz im Aufenthalt enthalten — ein seltener Luxus im Zentrum von Como."
  },
  "home.why.3t": {
  it: "Design architettonico",
  en: "Architectural design",
  fr: "Design architectural",
  de: "Architektonisches Design"
  },
  "home.why.3p": {
  it: "Appena ristrutturato, loft su due livelli con scala a chiocciola, soffitti alti e arredi curati.",
  en: "Freshly renovated, two-level loft with spiral staircase, high ceilings and curated furnishings.",
  fr: "Entièrement rénové, loft sur deux niveaux avec escalier en colimaçon et hauts plafonds.",
  de: "Frisch renoviert, zweigeschossiges Loft mit Wendeltreppe, hohen Decken und ausgewählten Möbeln."
  },
  "home.why.4t": {
  it: "Comfort completo",
  en: "Full comfort",
  fr: "Confort complet",
  de: "Vollständiger Komfort"
  },
  "home.why.4p": {
  it: "Cucina attrezzata, Wi-Fi ad alta velocità, TV, biancheria di qualità.",
  en: "Fully equipped kitchen, high-speed Wi-Fi, TV, quality linen.",
  fr: "Cuisine équipée, Wi-Fi haut débit, TV, literie de qualité.",
  de: "Voll ausgestattete Küche, Hochgeschwindigkeits-WLAN, TV, hochwertige Bettwäsche."
  },
  "home.why.5t": {
  it: "Luce naturale",
  en: "Natural light",
  fr: "Lumière naturelle",
  de: "Natürliches Licht"
  },
  "home.why.5p": {
  it: "Grandi finestre esposte a sud che inondano di luce il living e la camera.",
  en: "Large south-facing windows flooding the living area and bedroom with light.",
  fr: "De grandes fenêtres orientées au sud inondent de lumière le séjour et la chambre.",
  de: "Große, nach Süden ausgerichtete Fenster fluten Wohnzimmer und Schlafzimmer mit Licht."
  },
  "home.why.6t": {
  it: "Ospitalità italiana",
  en: "Italian hospitality",
  fr: "Hospitalité italienne",
  de: "Italienische Gastfreundschaft"
  },
  "home.why.6p": {
  it: "Check-in flessibile, risposta rapida e attenzione vera per ogni esigenza.",
  en: "Flexible check-in, quick responses and genuine care for every need.",
  fr: "Check-in flexible, réponses rapides et attention sincère pour chaque besoin.",
  de: "Flexibler Check-in, schnelle Antworten und echte Aufmerksamkeit für jedes Bedürfnis."
  },
  "home.loc.label": {
  it: "Dove siamo",
  en: "Location",
  fr: "Notre emplacement",
  de: "Lage"
  },
  "home.loc.title": {
  it: "Nel cuore pulsante di Como",
  en: "In the heart of Como",
  fr: "Au cœur battant de Côme",
  de: "Im pulsierenden Herzen von Como"
  },
  "home.loc.text": {
  it: "Viale Innocenzo XI, 70 — Como<br>A due passi dalla stazione San Giovanni, dal Duomo e dal lungolago.",
  en: "Viale Innocenzo XI, 70 — Como<br>Steps from Como San Giovanni station, the Cathedral and the lakefront.",
  fr: "Viale Innocenzo XI, 70 — Côme<br>À deux pas de la gare San Giovanni, du Dôme et du bord du lac.",
  de: "Viale Innocenzo XI, 70 — Como<br>Zwei Schritte vom Bahnhof San Giovanni, dem Dom und der Seepromenade."
  },
  "home.loc.btn": {
  it: "Tutte le info pratiche",
  en: "Practical information",
  fr: "Toutes les infos pratiques",
  de: "Alle praktischen Infos"
  },
  "info.pg.title": {
  it: "Informazioni",
  en: "Information",
  fr: "Informations",
  de: "Informationen"
  },
  "info.hl.1l": {
  it: "Su due livelli",
  en: "Two levels",
  fr: "Sur deux niveaux",
  de: "Auf zwei Ebenen"
  },
  "info.hl.2s": {
  it: "2 + 2",
  en: "2 + 2",
  fr: "2 + 2",
  de: "2 + 2"
  },
  "info.hl.2l": {
  it: "Ospiti",
  en: "Guests",
  fr: "Voyageurs",
  de: "Gäste"
  },
  "info.hl.3s": {
  it: "1 letto",
  en: "1 bed",
  fr: "1 lit",
  de: "1 Bett"
  },
  "info.hl.3l": {
  it: "Matrimoniale",
  en: "Double",
  fr: "Double",
  de: "Doppelbett"
  },
  "info.hl.4l": {
  it: "Privato",
  en: "Private",
  fr: "Privée",
  de: "Privat"
  },
  "info.park.title": {
  it: "Posto auto privato incluso — gratuito",
  en: "Private parking included — free",
  fr: "Place de parking privée incluse — gratuite",
  de: "Privater Parkplatz inklusive — kostenlos"
  },
  "info.park.text": {
  it: "Uno dei vantaggi più preziosi nel centro di Como: disponiamo di un posto auto dedicato e riservato agli ospiti, incluso nel soggiorno senza costi aggiuntivi. Niente stress da parcheggio, niente strisce blu.",
  en: "One of the most valuable perks in central Como: a dedicated, private parking space reserved for guests, included with your stay at no extra cost. No parking stress, no pay-and-display tickets.",
  fr: "L'un des avantages les plus précieux au centre de Côme : une place dédiée et réservée aux hôtes, incluse dans le séjour sans frais supplémentaires. Zéro stress de stationnement.",
  de: "Einer der wertvollsten Vorteile im Zentrum von Como: ein eigener, für Gäste reservierter Parkplatz, ohne Aufpreis im Aufenthalt enthalten. Kein Parkstress, keine Parkgebühren."
  },
  "info.dot.title": {
  it: "Dotazioni e comfort",
  en: "Amenities & comfort",
  fr: "Équipements et confort",
  de: "Ausstattung und Komfort"
  },
  "info.dot.wifi": {
  it: "Wi-Fi ultra-veloce",
  en: "High-speed Wi-Fi",
  fr: "Wi-Fi ultra-rapide",
  de: "Ultraschnelles WLAN"
  },
  "info.dot.tv": {
  it: "Smart TV",
  en: "Smart TV",
  fr: "Smart TV",
  de: "Smart TV"
  },
  "info.dot.ac": {
  it: "Aria condizionata",
  en: "Air conditioning",
  fr: "Climatisation",
  de: "Klimaanlage"
  },
  "info.dot.heat": {
  it: "Riscaldamento",
  en: "Heating",
  fr: "Chauffage",
  de: "Heizung"
  },
  "info.dot.kit": {
  it: "Cucina attrezzata",
  en: "Fully equipped kitchen",
  fr: "Cuisine entièrement équipée",
  de: "Voll ausgestattete Küche"
  },
  "info.dot.cof": {
  it: "Macchina del caffè",
  en: "Coffee machine",
  fr: "Machine à café",
  de: "Kaffeemaschine"
  },
  "info.dot.dw": {
  it: "Lavastoviglie",
  en: "Dishwasher",
  fr: "Lave-vaisselle",
  de: "Geschirrspüler"
  },
  "info.dot.wm": {
  it: "Lavatrice",
  en: "Washing machine",
  fr: "Lave-linge",
  de: "Waschmaschine"
  },
  "info.dot.bath": {
  it: "Vasca/doccia",
  en: "Bath/shower",
  fr: "Baignoire/douche",
  de: "Badewanne/Dusche"
  },
  "info.dot.bed": {
  it: "Letto matrimoniale",
  en: "Double bed",
  fr: "Lit double",
  de: "Doppelbett"
  },
  "info.dot.des": {
  it: "Arredo di design",
  en: "Designer furniture",
  fr: "Mobilier design",
  de: "Designmöbel"
  },
  "info.dot.ci": {
  it: "Check-in autonomo",
  en: "Self check-in",
  fr: "Check-in autonome",
  de: "Selbst-Check-in"
  },
  "info.dot.lin": {
  it: "Set biancheria",
  en: "Linen set",
  fr: "Linge de maison",
  de: "Bettwäsche-Set"
  },
  "info.dot.dry": {
  it: "Asciugacapelli",
  en: "Hair dryer",
  fr: "Sèche-cheveux",
  de: "Haartrockner"
  },
  "info.dot.park": {
  it: "Posto auto privato",
  en: "Private parking",
  fr: "Parking privé",
  de: "Privater Parkplatz"
  },
  "info.dot.ent": {
  it: "Ingresso indipendente",
  en: "Independent entrance",
  fr: "Entrée indépendante",
  de: "Eigener Eingang"
  },
  "info.rules.title": {
  it: "Regole della casa",
  en: "House rules",
  fr: "Règles de la maison",
  de: "Hausregeln"
  },
  "info.r1t": {
  it: "Check-in",
  en: "Check-in",
  fr: "Check-in",
  de: "Check-in"
  },
  "info.r1p": {
  it: "A partire dalle ore 15:00. Check-in autonomo con cassetta porta-chiavi.",
  en: "From 3:00 PM. Self check-in via key safe.",
  fr: "À partir de 15h00. Check-in autonome via boîte à clés.",
  de: "Ab 15:00 Uhr. Selbst-Check-in über Schlüsseltresor."
  },
  "info.r2t": {
  it: "Check-out",
  en: "Check-out",
  fr: "Check-out",
  de: "Check-out"
  },
  "info.r2p": {
  it: "Entro le ore 11:00. Riconsegna chiavi nella cassetta all'ingresso.",
  en: "By 11:00 AM. Return keys to the key safe at the entrance.",
  fr: "Avant 11h00. Remise des clés dans la boîte à l'entrée.",
  de: "Bis 11:00 Uhr. Schlüsselrückgabe im Tresor am Eingang."
  },
  "info.r3t": {
  it: "Non fumatori",
  en: "Non-smoking",
  fr: "Non-fumeur",
  de: "Nichtraucher"
  },
  "info.r3p": {
  it: "E' severamente vietato fumare all'interno dell'appartamento.",
  en: "Smoking is strictly prohibited inside the apartment.",
  fr: "Il est strictement interdit de fumer à l'intérieur de l'appartement.",
  de: "Das Rauchen innerhalb der Wohnung ist streng verboten."
  },
  "info.r4t": {
  it: "Animali",
  en: "Pets",
  fr: "Animaux",
  de: "Haustiere"
  },
  "info.r4p": {
  it: "Animali domestici non ammessi. Contattaci per eventuali deroghe.",
  en: "Pets are not allowed. Contact us for exceptions.",
  fr: "Animaux de compagnie non admis. Contactez-nous pour d'éventuelles dérogations.",
  de: "Haustiere nicht erlaubt. Kontaktieren Sie uns für mögliche Ausnahmen."
  },
  "info.r5t": {
  it: "Rispetto del silenzio",
  en: "Quiet hours",
  fr: "Silence",
  de: "Ruhezeiten"
  },
  "info.r5p": {
  it: "Si prega di rispettare il silenzio dalle 22:00 alle 08:00.",
  en: "Please respect quiet hours from 10:00 PM to 8:00 AM.",
  fr: "Veuillez respecter le silence de 22h00 à 08h00.",
  de: "Bitte respektieren Sie die Ruhezeiten von 22:00 bis 08:00 Uhr."
  },
  "info.r6t": {
  it: "Ospiti aggiuntivi",
  en: "Additional guests",
  fr: "Invités supplémentaires",
  de: "Zusätzliche Gäste"
  },
  "info.r6p": {
  it: "Non sono ammesse feste o eventi. Il numero di ospiti deve rispettare il limite dichiarato.",
  en: "Parties and events are not allowed. Guest numbers must respect the stated limit.",
  fr: "Les fêtes et événements ne sont pas autorisés. Le nombre de personnes doit respecter la limite déclarée.",
  de: "Partys und Veranstaltungen sind nicht gestattet. Die Gästeanzahl muss innerhalb des angegebenen Limits bleiben."
  },
  "info.how.title": {
  it: "Come raggiungere il Loft",
  en: "Getting to the Loft",
  fr: "Comment rejoindre le Loft",
  de: "So erreichen Sie das Loft"
  },
  "info.how.addr": {
  it: "<strong>Architect's Loft</strong> — Viale Innocenzo XI, 70 — 22100 Como (CO)",
  en: "<strong>Architect's Loft</strong> — Viale Innocenzo XI, 70 — 22100 Como (CO)",
  fr: "<strong>Architect's Loft</strong> — Viale Innocenzo XI, 70 — 22100 Côme (CO)",
  de: "<strong>Architect's Loft</strong> — Viale Innocenzo XI, 70 — 22100 Como (CO)"
  },
  "info.d1": {
  it: "🚶 Lago di Como",
  en: "🚶 Lake Como",
  fr: "🚶 Lac de Côme",
  de: "🚶 Comer See"
  },
  "info.d2": {
  it: "🚶 Duomo di Como",
  en: "🚶 Como Cathedral",
  fr: "🚶 Cathédrale de Côme",
  de: "🚶 Dom von Como"
  },
  "info.d3": {
  it: "🚉 Stazione Como San Giovanni",
  en: "🚉 Como San Giovanni station",
  fr: "🚉 Gare Como San Giovanni",
  de: "🚉 Bahnhof Como San Giovanni"
  },
  "info.d4": {
  it: "✈️ Aeroporto Malpensa",
  en: "✈️ Malpensa Airport",
  fr: "✈️ Aéroport de Malpensa",
  de: "✈️ Flughafen Malpensa"
  },
  "info.d5": {
  it: "🚗 Autostrada A9 (uscita Como Sud)",
  en: "🚗 Motorway A9 (Como Sud exit)",
  fr: "🚗 Autoroute A9 (sortie Como Sud)",
  de: "🚗 Autobahn A9 (Ausfahrt Como Sud)"
  },
  "info.d6": {
  it: "🏙 Milano Centro",
  en: "🏙 Milan City Centre",
  fr: "🏙 Milan Centre",
  de: "🏙 Mailand Zentrum"
  },
  "info.cta.label": {
  it: "Pronto a prenotare?",
  en: "Ready to book?",
  fr: "Prêt à réserver ?",
  de: "Bereit zu buchen?"
  },
  "info.cta.title": {
  it: "Scegli le tue date",
  en: "Choose your dates",
  fr: "Choisissez vos dates",
  de: "Wählen Sie Ihre Daten"
  },
  "info.cta.btn": {
  it: "Verifica disponibilità →",
  en: "Check availability →",
  fr: "Vérifier les disponibilités →",
  de: "Verfügbarkeit prüfen →"
  },
  "reno.title": {
  it: "Completamente ristrutturato",
  en: "Fully renovated",
  fr: "Entièrement rénové",
  de: "Vollständig renoviert"
  },
  "reno.text": {
  it: "Il loft è stato appena oggetto di una ristrutturazione completa: nuovi impianti, nuovi arredi, nuove finiture. Tutto il comfort del nuovo, con il carattere unico di un loft architettonico.",
  en: "The loft has just undergone a complete renovation: new systems, new furnishings, new finishes. All the comfort of the new, with the unique character of an architectural loft.",
  fr: "Le loft vient de faire l'objet d'une rénovation complète : nouvelles installations, nouveau mobilier, nouvelles finitions.",
  de: "Das Loft wurde gerade vollständig renoviert: neue Installationen, neue Möbel, neue Oberflächen. Aller Komfort des Neuen, mit dem einzigartigen Charakter eines Architekturlofts."
  },
  "gal.pg.title": {
  it: "Galleria fotografica",
  en: "Photo Gallery",
  fr: "Galerie photos",
  de: "Fotogalerie"
  },
  "gal.tab.living": {
  it: "Living",
  en: "Living Room",
  fr: "Séjour",
  de: "Wohnzimmer"
  },
  "gal.tab.cucina": {
  it: "Cucina",
  en: "Kitchen",
  fr: "Cuisine",
  de: "Küche"
  },
  "gal.tab.camera": {
  it: "Camera",
  en: "Bedroom",
  fr: "Chambre",
  de: "Schlafzimmer"
  },
  "gal.tab.bagno": {
  it: "Bagno",
  en: "Bathroom",
  fr: "Salle de bain",
  de: "Badezimmer"
  },
  "gal.liv.label": {
  it: "Il cuore del Loft",
  en: "The heart of the Loft",
  fr: "Le cœur du Loft",
  de: "Das Herz des Lofts"
  },
  "gal.liv.title": {
  it: "Living",
  en: "Living Room",
  fr: "Séjour",
  de: "Wohnzimmer"
  },
  "gal.liv.text": {
  it: "Il soggiorno a doppia altezza con scala a chiocciola è il simbolo dell'Architect's Loft. Ampie finestre, divano angolare e zona pranzo per momenti di relax o convivialità.",
  en: "The double-height living room with spiral staircase is the signature of Architect's Loft. Large windows, a corner sofa and a dining area perfect for relaxing or entertaining.",
  fr: "Le séjour à double hauteur avec escalier en colimaçon est le symbole de l'Architect's Loft.",
  de: "Das Wohnzimmer mit doppelter Raumhöhe und Wendeltreppe ist das Wahrzeichen des Architect's Loft."
  },
  "gal.cuc.label": {
  it: "Il piacere del cucinare",
  en: "The pleasure of cooking",
  fr: "Le plaisir de cuisiner",
  de: "Das Vergnügen des Kochens"
  },
  "gal.cuc.title": {
  it: "Cucina",
  en: "Kitchen",
  fr: "Cuisine",
  de: "Küche"
  },
  "gal.cuc.text": {
  it: "Cucina completamente attrezzata con tutto il necessario per preparare colazioni, aperitivi o cene romantiche.",
  en: "Fully equipped kitchen with everything you need to prepare breakfasts, aperitivos or romantic dinners.",
  fr: "Cuisine entièrement équipée avec tout le nécessaire pour préparer petits-déjeuners, apéritifs ou dîners romantiques.",
  de: "Voll ausgestattete Küche mit allem Nötigen für Frühstücke, Aperitifs oder romantische Abendessen."
  },
  "gal.cam.label": {
  it: "Il riposo perfetto",
  en: "The perfect rest",
  fr: "Le repos parfait",
  de: "Die perfekte Ruhe"
  },
  "gal.cam.title": {
  it: "Camera",
  en: "Bedroom",
  fr: "Chambre",
  de: "Schlafzimmer"
  },
  "gal.cam.text": {
  it: "La camera da letto è ricavata al piano superiore del loft, con accesso dalla scala a chiocciola. Un letto matrimoniale comodo, cuscini soffici e luce naturale per risvegli indimenticabili.",
  en: "The bedroom is on the upper level of the loft, accessed via the spiral staircase. A comfortable double bed, soft pillows and natural light for unforgettable mornings.",
  fr: "La chambre est aménagée au niveau supérieur du loft, accessible par l'escalier en colimaçon.",
  de: "Das Schlafzimmer befindet sich auf der oberen Ebene des Lofts, erreichbar über die Wendeltreppe."
  },
  "gal.bag.label": {
  it: "Il tuo angolo di benessere",
  en: "Your wellness corner",
  fr: "Votre espace bien-être",
  de: "Ihr Wellness-Bereich"
  },
  "gal.bag.title": {
  it: "Bagno",
  en: "Bathroom",
  fr: "Salle de bain",
  de: "Badezimmer"
  },
  "gal.bag.text": {
  it: "Il bagno privato è dotato di doccia/vasca, asciugacapelli, biancheria da bagno di qualità e prodotti di cortesia.",
  en: "The private bathroom features a bath/shower, hair dryer, quality towels and toiletries.",
  fr: "La salle de bain privée est dotée d'une baignoire/douche, d'un sèche-cheveux et de serviettes de qualité.",
  de: "Das private Badezimmer verfügt über Badewanne/Dusche, Haartrockner und hochwertige Handtuchä."
  },
  "gal.cta": {
  it: "Prenota il tuo soggiorno →",
  en: "Book your stay →",
  fr: "Réserver votre séjour →",
  de: "Ihren Aufenthalt buchen →"
  },
  "book.pg.title": {
  it: "Prenota il tuo soggiorno",
  en: "Book your stay",
  fr: "Réserver votre séjour",
  de: "Ihren Aufenthalt buchen"
  },
  "book.pg.sub": {
  it: "Scegli il portale che preferisci per verificare le date disponibili",
  en: "Choose your preferred platform to check availability and rates",
  fr: "Choisissez votre plateforme préférée pour vérifier les disponibilités",
  de: "Wählen Sie Ihre bevorzugte Plattform zur Verfügbarkeitsprüfung"
  },
  "book.intro.label": {
  it: "Disponibile su tre portali",
  en: "Available on three platforms",
  fr: "Disponible sur trois plateformes",
  de: "Auf drei Plattformen verfügbar"
  },
  "book.intro.title": {
  it: "Come prenotare",
  en: "How to book",
  fr: "Comment réserver",
  de: "So buchen Sie"
  },
  "book.intro.text": {
  it: "Puoi prenotare Architect's Loft tramite i tre principali portali di affitti brevi. Scegli quello che usi abitualmente per verificare disponibilità e tariffe aggiornate in tempo reale.",
  en: "You can book Architect's Loft through three leading short-let platforms. Choose the one you use most to check live availability and rates.",
  fr: "Vous pouvez réserver l'Architect's Loft via les trois principales plateformes de location courte durée.",
  de: "Sie können das Architect's Loft über drei führende Kurzzeitvermietungsplattformen buchen."
  },
  "book.rentall.tag": {
  it: "Specialisti Como",
  en: "Como specialists",
  fr: "Spécialistes Côme",
  de: "Como-Spezialisten"
  },
  "book.rentall.desc": {
  it: "Il portale specializzato negli affitti brevi sul Lago di Como. Assistenza locale, conoscenza del territorio e prenotazione dedicata.",
  en: "The specialist platform for short lets on Lake Como. Local support, local knowledge and dedicated booking service.",
  fr: "La plateforme spécialisée dans les locations courte durée sur le lac de Côme.",
  de: "Die Spezialistenplattform für Kurzzeitmieten am Comer See."
  },
  "book.rentall.btn": {
  it: "Cerca su RentAllComo →",
  en: "Search on RentAllComo →",
  fr: "Rechercher sur RentAllComo →",
  de: "Auf RentAllComo suchen →"
  },
  "book.airbnb.tag": {
  it: "Più prenotato",
  en: "Most booked",
  fr: "Le plus réservé",
  de: "Am meisten gebucht"
  },
  "book.airbnb.desc": {
  it: "Prenota con le garanzie di Airbnb: recensioni verificate, pagamenti sicuri e supporto 24/7.",
  en: "Book with Airbnb's guarantees: verified reviews, secure payments and 24/7 support.",
  fr: "Réservez avec les garanties Airbnb : avis vérifiés, paiements sécurisés et assistance 24h/24.",
  de: "Buchen Sie mit den Garantien von Airbnb: verifizierte Bewertungen, sichere Zahlungen und 24/7-Support."
  },
  "book.airbnb.btn": {
  it: "Cerca su Airbnb →",
  en: "Search on Airbnb →",
  fr: "Rechercher sur Airbnb →",
  de: "Auf Airbnb suchen →"
  },
  "book.bk.tag": {
  it: "Genius rewards",
  en: "Genius rewards",
  fr: "Genius rewards",
  de: "Genius rewards"
  },
  "book.bk.desc": {
  it: "Prenota con Booking.com per accedere al programma Genius, cancellazione flessibile e la più ampia scelta di date e tariffe.",
  en: "Book on Booking.com to access the Genius programme, flexible cancellation and the widest choice of dates and rates.",
  fr: "Réservez sur Booking.com pour accéder au programme Genius, annulation flexible et le plus large choix de dates et tarifs.",
  de: "Buchen Sie auf Booking.com für Zugang zum Genius-Programm, flexible Stornierung und die größte Auswahl."
  },
  "book.bk.btn": {
  it: "Cerca su Booking →",
  en: "Search on Booking →",
  fr: "Rechercher sur Booking →",
  de: "Auf Booking suchen →"
  },
  "book.park.title": {
  it: "Non dimenticare: hai il posto auto incluso",
  en: "Don't forget: free parking is included",
  fr: "N'oubliez pas : votre parking est inclus",
  de: "Nicht vergessen: Ihr Parkplatz ist inklusive"
  },
  "book.park.text": {
  it: "Con ogni prenotazione ottieni un posto auto privato e dedicato — gratuito — nel cuore di Como.",
  en: "Every booking includes a private, dedicated parking space — free of charge — in central Como.",
  fr: "Chaque réservation comprend une place de parking privée et dédiée — gratuite — au cœur de Côme.",
  de: "Jede Buchung beinhaltet einen privaten, dedizierten Parkplatz — kostenlos — im Herzen von Como."
  },
  "book.why.title": {
  it: "Perché scegliere Architect's Loft",
  en: "Why choose Architect's Loft",
  fr: "Pourquoi choisir Architect's Loft",
  de: "Warum Architect's Loft wählen"
  },
  "book.why.1t": {
  it: "Posizione unica",
  en: "Unique location",
  fr: "Emplacement unique",
  de: "Einzigartige Lage"
  },
  "book.why.1p": {
  it: "Centro storico di Como, a 5 minuti a piedi dal lago.",
  en: "Como's historic centre, 5 minutes' walk from the lake.",
  fr: "Centre historique de Côme, à 5 minutes à pied du lac.",
  de: "Historisches Zentrum von Como, 5 Gehminuten vom See."
  },
  "book.why.2t": {
  it: "Posto auto gratuito",
  en: "Free parking",
  fr: "Parking gratuit",
  de: "Kostenloser Parkplatz"
  },
  "book.why.2p": {
  it: "Un vero lusso in centro città: riservato, privato e incluso nel tuo soggiorno.",
  en: "A true luxury in the city centre: reserved, private and included with your stay.",
  fr: "Un vrai luxe en centre-ville : réservé, privé et inclus dans votre séjour.",
  de: "Ein echter Luxus im Stadtzentrum: reserviert, privat und im Aufenthalt enthalten."
  },
  "book.why.3t": {
  it: "Loft architettonico",
  en: "Architectural loft",
  fr: "Loft architectural",
  de: "Architekturloft"
  },
  "book.why.3p": {
  it: "Doppia altezza, scala a chiocciola, arredi di design. Un'esperienza abitativa unica.",
  en: "Double height, spiral staircase, designer furnishings. A truly unique living experience.",
  fr: "Double hauteur, escalier en colimaçon, mobilier design. Une expérience unique.",
  de: "Doppelte Raumhöhe, Wendeltreppe, Designmöbel. Ein einzigartiges Wohnerlebnis."
  },
  "book.faq.label": {
  it: "Domande frequenti",
  en: "Frequently asked questions",
  fr: "Questions fréquentes",
  de: "Häufig gestellte Fragen"
  },
  "book.faq.title": {
  it: "FAQ",
  en: "FAQ",
  fr: "FAQ",
  de: "FAQ"
  },
  "book.q1q": {
  it: "Qual è l'orario di check-in e check-out?",
  en: "What are the check-in and check-out times?",
  fr: "Quels sont les horaires de check-in et check-out ?",
  de: "Wie sind die Check-in- und Check-out-Zeiten?"
  },
  "book.q1a": {
  it: "Il check-in è possibile a partire dalle ore 15:00, il check-out deve avvenire entro le ore 11:00. Il check-in è autonomo tramite cassetta porta-chiavi.",
  en: "Check-in is from 3:00 PM, check-out by 11:00 AM. Check-in is self-managed via key safe.",
  fr: "Le check-in est possible à partir de 15h00, le check-out doit avoir lieu avant 11h00.",
  de: "Check-in ist ab 15:00 Uhr möglich, Check-out muss bis 11:00 Uhr erfolgen."
  },
  "book.q2q": {
  it: "Il posto auto è davvero gratuito?",
  en: "Is the parking really free?",
  fr: "Le parking est-il vraiment gratuit ?",
  de: "Ist der Parkplatz wirklich kostenlos?"
  },
  "book.q2a": {
  it: "Sì, assolutamente! Ogni prenotazione include un posto auto privato, dedicato e riservato agli ospiti, senza alcun costo aggiuntivo.",
  en: "Yes, absolutely! Every booking includes a private parking space dedicated to guests, at no extra cost.",
  fr: "Oui, absolument ! Chaque réservation comprend une place de parking privée, sans frais supplémentaires.",
  de: "Ja, absolut! Jede Buchung beinhaltet einen privaten Parkplatz für Gäste, ohne zusätzliche Kosten."
  },
  "book.q3q": {
  it: "Quante persone può ospitare il Loft?",
  en: "How many guests can the Loft accommodate?",
  fr: "Combien de personnes le Loft peut-il accueillir ?",
  de: "Wie viele Personen kann das Loft beherbergen?"
  },
  "book.q3a": {
  it: "Il Loft può ospitare fino a 4 persone (2+2). La camera da letto al piano superiore dispone di un letto matrimoniale.",
  en: "The Loft can accommodate up to 4 guests (2+2). The upper-level bedroom has a double bed.",
  fr: "Le Loft peut accueillir jusqu'à 4 personnes (2+2). La chambre dispose d'un lit double.",
  de: "Das Loft kann bis zu 4 Personen (2+2) beherbergen. Das Schlafzimmer verfügt über ein Doppelbett."
  },
  "book.q4q": {
  it: "È possibile portare animali domestici?",
  en: "Are pets allowed?",
  fr: "Les animaux de compagnie sont-ils admis ?",
  de: "Sind Haustiere erlaubt?"
  },
  "book.q4a": {
  it: "Di norma gli animali domestici non sono ammessi. In casi particolari è possibile fare eccezione.",
  en: "Pets are generally not allowed. Exceptions may be considered: please contact us before booking.",
  fr: "En général, les animaux de compagnie ne sont pas admis. Des exceptions peuvent être envisagées.",
  de: "Haustiere sind grundsätzlich nicht erlaubt. Ausnahmen können berücksichtigt werden."
  },
  "book.q5q": {
  it: "Come si raggiunge il Loft dall'aeroporto?",
  en: "How do I get to the Loft from the airport?",
  fr: "Comment rejoindre le Loft depuis l'aéroport ?",
  de: "Wie erreiche ich das Loft vom Flughafen?"
  },
  "book.q5a": {
  it: "Dall'aeroporto di Malpensa: circa 45 minuti in auto (autostrada A9). In treno: da Malpensa Terminal 1 prendere il treno per Milano Centrale, poi IC/RE per Como San Giovanni (circa 1h30).",
  en: "From Malpensa Airport: approximately 45 minutes by car (motorway A9). By train: from Malpensa Terminal 1 take the train to Milano Centrale, then IC/RE to Como San Giovanni (approx. 1h30).",
  fr: "Depuis l'aéroport de Malpensa : environ 45 minutes en voiture (autoroute A9). En train : environ 1h30.",
  de: "Vom Flughafen Malpensa: ca. 45 Minuten mit dem Auto (Autobahn A9). Mit dem Zug: ca. 1h30."
  },
  "book.q6q": {
  it: "È inclusa la pulizia finale?",
  en: "Is the final cleaning included?",
  fr: "Le nettoyage final est-il inclus ?",
  de: "Ist die Endreinigung inklusive?"
  },
  "book.q6a": {
  it: "Sì, la pulizia finale è inclusa nel prezzo del soggiorno. Ti chiediamo solo di lasciare l'appartamento in ordine prima del check-out.",
  en: "Yes, final cleaning is included in the price. We only ask that you leave the apartment tidy before check-out.",
  fr: "Oui, le nettoyage final est inclus dans le prix du séjour.",
  de: "Ja, die Endreinigung ist im Preis des Aufenthalts inbegriffen."
  }
};

/* ── Core engine ──────────────────────────────────── */
function applyLang(lang) {
  document.documentElement.setAttribute('lang', lang);
  var els = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var key = el.getAttribute('data-i18n');
    var entry = T[key];
    if (!entry) continue;
    var val = (entry[lang] !== undefined) ? entry[lang] : entry['it'];
    if (!val) continue;
    if (el.getAttribute('data-i18n-html') !== null) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  }
}

function updateToggle(lang) {
  var btns = document.querySelectorAll('.lang-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === lang);
  }
}

function setLang(lang) {
  writeLang(lang);
  applyLang(lang);
  updateToggle(lang);
}

function initLang() {
  var lang = readLang();
  applyLang(lang);
  updateToggle(lang);
  var btns = document.querySelectorAll('.lang-btn');
  for (var i = 0; i < btns.length; i++) {
    (function(btn) {
      btn.addEventListener('click', function() {
        setLang(btn.getAttribute('data-lang'));
      });
    })(btns[i]);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}
