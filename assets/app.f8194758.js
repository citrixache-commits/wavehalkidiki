/* fonts: activate the print-media stylesheet without an inline handler */
document.querySelectorAll('link[data-fonts]').forEach(l => { l.media = 'all'; });

/* ---------------- i18n ---------------- */
const I18N = {
en: {
  h1_tail:" — Coffee &amp; Food, beachfront restaurant in Ouranoupoli, near Mount Athos",
  _title: "Waves Coffee & Food — Ouranoupoli Restaurant by Mount Athos",
  _desc: "Beachfront taverna & café in Ouranoupoli, by the Mount Athos ferry. Fresh seafood, Greek grill, breakfast from 05:30. 4.9★ on Google.",
  tagline:"☀ Breakfast before the Mount Athos ferry — seaside meals when you return.",
  faq_pill:"GOOD TO KNOW", faq_h2:"Before you sail to Athos", faq_script:"questions pilgrims ask us",
  fq1:"What time do you open before the boat to Mount Athos?",
  fa1:"We open at 05:30, every single day — coffee, warm pastries and a full breakfast before the first ferry leaves Ouranoupoli.",
  fq2:"Do you serve fasting (lenten) dishes?",
  fa2:"Yes. Alongside fresh seafood, the menu includes lenten options — fasting pizza, vegetable soups and salads. Ask us for today's fasting dishes.",
  fq3:"Where exactly are you in Ouranoupoli?",
  fa3:"Right on the beach, a short walk from the port where the boats leave for Mount Athos. Look for the Waves sign on the seafront.",
  fq4:"Can we come as a group before the pilgrimage?",
  fa4:"Of course — call +30 2377 071088 and the table will be ready before your boat departs.",
  _strip: ["Fresh Fish Daily","Charcoal Grill","Breakfast from 05:30","Handmade Crepes","Freddo by the Sea"],
  nav_story:"Our Story", nav_sig:"Signature", nav_menu:"Menu", nav_gal:"Gallery", nav_rev:"Reviews", nav_visit:"Visit Us",
  kicker:"OURANOUPOLI · HALKIDIKI",
  lead:"A beachfront taverna, grill &amp; all-day café on the Ouranoupoli shore — where the fish is fresh, the grill is smoking and the coffee starts at dawn.",
  cta_menu:"See the Menu", cta_dir:"Get Directions",
  st_rev:"414 Google reviews", st_open:"open every day", st_pp:"per person",
  story_pill:"OUR STORY", story_h2:"A taverna on the<br>Ouranoupoli shore", story_script:"where the day begins with the waves",
  story_p:"Steps from the beach in Ouranoupoli — the last village before Mount Athos — Waves serves the Halkidiki day in full: sunrise coffee and warm pastries, long seaside lunches of grilled fish and octopus, and slow evenings of mixed grills, crepes and cocktails under the wicker lamps.",
  f1_h:"From the sea, daily", f1_p:"Octopus, calamari, sardines and whole fish, straight to the charcoal.",
  f2_h:"The Greek grill", f2_p:"Souvlaki, ribs, bifteki and chops — generous portions, honest prices.",
  f3_h:"Coffee from 05:30", f3_p:"First freddo before the ferry to Athos leaves the pier.",
  f4_h:"Right on the water", f4_p:"Terrace tables with the Singitic Gulf for a horizon.",
  sig_pill:"SIGNATURE", sig_h2:"Plates worth the trip", sig_script:"from the Aegean, with love",
  s1_h:"Grilled Octopus", s1_p:"Char-grilled tentacle over greens, shaved onion and a balsamic glaze.",
  s2_h:"Fisherman's Platter", s2_p:"Calamari, prawns, anchovies, mussels and octopus over oregano fries.",
  s3_h:"Whole Grilled Dorada", s3_p:"Fresh sea bream chargrilled whole, with grilled vegetables and lemon.",
  s4_h:"Whole Grilled Squid", s4_p:"Crosshatched and charred, with seasoned fries and lemon.",
  menu_pill:"THE MENU", menu_h2:"Eat with the tide", menu_script:"the complete menu",
  note_3:"Prices as shown on our in-house menu — small seasonal changes possible; today's menu always applies at the table.",
  m1_h:"From the Sea", m1_s:"fresh every day",
  m1_1:"Grilled octopus", m1_2:"Fritto misto", m1_3:"Langoustines", m1_4:"Grilled sardines &amp; gavros", m1_5:"Whole fish of the day",
  m2_h:"From the Grill", m2_s:"smoke &amp; fire",
  m2_1:"Mixed grill platters", m2_2:"Pork ribs &amp; chops", m2_3:"Souvlaki &amp; gyros", m2_4:"Burgers with potatoes <b>10 €</b>", m2_5:"Gyros pizza",
  m3_h:"Morning &amp; Coffee", m3_s:"from 05:30",
  m3_1:"Greek breakfast plates", m3_2:"Omelettes &amp; fried eggs", m3_3:"Warm cheese pies", m3_4:"Freddo espresso &amp; cappuccino", m3_5:"Fresh orange juice",
  m4_h:"Sweet Waves", m4_s:"crepes &amp; more",
  m4_1:"Crepes with ice cream", m4_2:"American pancakes <b>10 €</b>", m4_3:"Savory pancakes <b>12 €</b>", m4_4:"Waffles &amp; sundaes", m4_5:"Baklava &amp; walnut cake",
  note_1:"<b>Around 10–15 € per person.</b> Fresh fish priced daily — ask for today's catch. Bread 2 € · pita 1 €.",
  note_2:"Dine-in · Takeaway · Contactless delivery",
  gal_pill:"GALLERY", gal_h2:"Straight from our plates", gal_script:"no filters needed",
  g1:"Grill platter for two", g2:"House coolers", g3:"Greek breakfast", g4:"From the charcoal", g5:"Fritto misto", g6:"Gelato by the sea",
  g7:"Pizza &amp; local wine", g8:"Octopus, simply", g9:"Waffle, all in", g10:"Gavros &amp; fries", g11:"Summer sundae", g12:"The view from your table",
  g13:"Whole dorada, grilled", g14:"Octopus in tomato sauce", g15:"Shrimp linguine", g16:"Seafood pizza", g17:"Shrimp saganaki", g18:"Seafood in tomato sauce", rev_pill:"REVIEWS", rev_h2:"Word of mouth", rev_script:"straight from Google",
  r1_q:"“If you're in Ouranoupoli, this taverna is the best choice in the area. The food is always fresh.”",
  r2_q:"“A taverna right on the seafront with fresh, delicious dishes — and the portions are huge.”",
  r3_q:"“Fantastic food, the staff is great and we had an amazing time!”",
  r_lg:"Local Guide · Google", r_lg2:"Local Guide · Google", r3_n:"Google visitor", r3_t:"Visitor update · Google",
  rev_badge:"from 414 reviews on",
  v_pill:"VISIT US", v_h2:"Find the waves", v_script:"we're right on the beach",
  v_addr_h:"Address", v_addr_p:"Ouranoupoli 630 75, Halkidiki, Greece", v_open_h:"Open every day", v_ph_h:"Phone",
  cta_dir2:"Get Directions", cta_call:"Call Us",
  nav_story2:"Our Story", nav_sig2:"Signature", nav_menu2:"Menu", nav_gal2:"Gallery", nav_visit2:"Visit Us",
  foot_c:"© 2026 Waves Coffee &amp; Food · Ouranoupoli, Halkidiki", foot_ph:"Photos from our kitchen &amp; guests"
},
el: {
  h1_tail:" — Coffee &amp; Food, παραλιακή ταβέρνα στην Ουρανούπολη, δίπλα στο Άγιο Όρος",
  _title: "Waves Coffee & Food — Ταβέρνα στην Ουρανούπολη, Άγιο Όρος",
  _desc: "Παραλιακή ταβέρνα και καφέ στην Ουρανούπολη, δίπλα στο καράβι για το Άγιο Όρος. Φρέσκα θαλασσινά, σχάρα, πρωινό από 05:30. 4,9★ στο Google.",
  tagline:"☀ Πρωινό πριν το καράβι για τον Άθω — θαλασσινές γεύσεις όταν επιστρέψετε.",
  faq_pill:"ΚΑΛΟ ΝΑ ΤΟ ΞΕΡΕΤΕ", faq_h2:"Πριν σαλπάρετε για τον Άθω", faq_script:"όσα μας ρωτούν οι προσκυνητές",
  fq1:"Τι ώρα ανοίγετε πριν το καράβι για το Άγιο Όρος;",
  fa1:"Ανοίγουμε στις 05:30, κάθε μέρα — καφές, ζεστά αρτοσκευάσματα και πλήρες πρωινό πριν φύγει το πρώτο καράβι από την Ουρανούπολη.",
  fq2:"Έχετε νηστίσιμα πιάτα;",
  fa2:"Ναι. Δίπλα στα φρέσκα θαλασσινά, το μενού έχει και νηστίσιμες επιλογές — νηστίσιμη πίτσα, σούπες λαχανικών και σαλάτες. Ρωτήστε μας για τα νηστίσιμα της ημέρας.",
  fq3:"Πού ακριβώς είστε στην Ουρανούπολη;",
  fa3:"Πάνω στην παραλία, λίγα λεπτά με τα πόδια από το λιμάνι απ' όπου φεύγουν τα καράβια για το Άγιο Όρος. Ψάξτε την πινακίδα Waves στον παραλιακό.",
  fq4:"Μπορούμε να έρθουμε γκρουπ πριν το προσκύνημα;",
  fa4:"Φυσικά — καλέστε στο +30 2377 071088 και το τραπέζι θα είναι έτοιμο πριν φύγει το καράβι σας.",
  _strip: ["Φρέσκο ψάρι καθημερινά","Σχάρα στα κάρβουνα","Πρωινό από τις 05:30","Χειροποίητες κρέπες","Freddo δίπλα στο κύμα"],
  nav_story:"Η ιστορία μας", nav_sig:"Σπεσιαλιτέ", nav_menu:"Μενού", nav_gal:"Γκαλερί", nav_rev:"Κριτικές", nav_visit:"Επισκεφθείτε μας",
  kicker:"ΟΥΡΑΝΟΥΠΟΛΗ · ΧΑΛΚΙΔΙΚΗ",
  lead:"Παραλιακή ταβέρνα, ψησταριά &amp; all-day καφέ στην ακτή της Ουρανούπολης — εκεί όπου το ψάρι είναι φρέσκο, η σχάρα καίει και ο καφές ξεκινά με την αυγή.",
  cta_menu:"Δείτε το μενού", cta_dir:"Οδηγίες πρόσβασης",
  st_rev:"414 κριτικές στο Google", st_open:"ανοιχτά κάθε μέρα", st_pp:"ανά άτομο",
  story_pill:"Η ΙΣΤΟΡΙΑ ΜΑΣ", story_h2:"Μια ταβέρνα στην ακτή<br>της Ουρανούπολης", story_script:"εκεί όπου η μέρα ξεκινά με τα κύματα",
  story_p:"Λίγα βήματα από την παραλία της Ουρανούπολης — το τελευταίο χωριό πριν το Άγιο Όρος — το Waves σερβίρει όλη τη μέρα της Χαλκιδικής: καφέ με την ανατολή και ζεστά αρτοσκευάσματα, μεγάλα μεσημέρια δίπλα στη θάλασσα με ψητό ψάρι και χταπόδι, και χαλαρά βράδια με σχάρα, κρέπες και κοκτέιλ κάτω από τα ψάθινα φωτιστικά.",
  f1_h:"Από τη θάλασσα, καθημερινά", f1_p:"Χταπόδι, καλαμάρι, σαρδέλες και ολόκληρα ψάρια, κατευθείαν στα κάρβουνα.",
  f2_h:"Ελληνική ψησταριά", f2_p:"Σουβλάκι, παϊδάκια, μπιφτέκι και μπριζόλες — γενναιόδωρες μερίδες, τίμιες τιμές.",
  f3_h:"Καφές από τις 05:30", f3_p:"Ο πρώτος freddo πριν φύγει το καράβι για τον Άθω.",
  f4_h:"Πάνω στο κύμα", f4_p:"Τραπέζια στη βεράντα με ορίζοντα τον Σιγγιτικό κόλπο.",
  sig_pill:"ΣΠΕΣΙΑΛΙΤΕ", sig_h2:"Πιάτα που αξίζουν το ταξίδι", sig_script:"από το Αιγαίο, με αγάπη",
  s1_h:"Χταπόδι σχάρας", s1_p:"Ψητό πλοκάμι πάνω σε πράσινα, κρεμμύδι και γλάσο βαλσάμικο.",
  s2_h:"Πιατέλα του ψαρά", s2_p:"Καλαμάρι, γαρίδες, γαύρος, μύδια και χταπόδι πάνω σε πατάτες με ρίγανη.",
  s3_h:"Τσιπούρα σχάρας", s3_p:"Ολόκληρη φρέσκια τσιπούρα στα κάρβουνα, με ψητά λαχανικά και λεμόνι.",
  s4_h:"Ολόκληρο καλαμάρι σχάρας", s4_p:"Χαρακωμένο και καψαλισμένο, με πατάτες και λεμόνι.",
  menu_pill:"ΤΟ ΜΕΝΟΥ", menu_h2:"Στον ρυθμό του κύματος", menu_script:"όλο το μενού",
  note_3:"Οι τιμές όπως αναγράφονται στον κατάλογο του καταστήματος — ενδέχεται μικρές εποχιακές αλλαγές· ισχύει πάντα ο κατάλογος στο τραπέζι.",
  m1_h:"Από τη θάλασσα", m1_s:"φρέσκο κάθε μέρα",
  m1_1:"Χταπόδι σχάρας", m1_2:"Fritto misto", m1_3:"Καραβίδες", m1_4:"Σαρδέλες &amp; γαύρος σχάρας", m1_5:"Ψάρι ημέρας",
  m2_h:"Από τη σχάρα", m2_s:"φωτιά &amp; κάπνα",
  m2_1:"Ποικιλίες σχάρας", m2_2:"Παϊδάκια &amp; μπριζόλες", m2_3:"Σουβλάκι &amp; γύρος", m2_4:"Burgers με πατάτες <b>10 €</b>", m2_5:"Πίτσα γύρος",
  m3_h:"Πρωινό &amp; καφές", m3_s:"από τις 05:30",
  m3_1:"Ελληνικά πρωινά", m3_2:"Ομελέτες &amp; αυγά τηγανητά", m3_3:"Ζεστές τυρόπιτες", m3_4:"Freddo espresso &amp; cappuccino", m3_5:"Φρέσκος χυμός πορτοκάλι",
  m4_h:"Γλυκά κύματα", m4_s:"κρέπες &amp; άλλα",
  m4_1:"Κρέπες με παγωτό", m4_2:"Αμερικάνικα pancakes <b>10 €</b>", m4_3:"Αλμυρά pancakes <b>12 €</b>", m4_4:"Βάφλες &amp; sundae", m4_5:"Μπακλαβάς &amp; καρυδόπιτα",
  note_1:"<b>Περίπου 10–15 € το άτομο.</b> Το φρέσκο ψάρι τιμολογείται καθημερινά — ρωτήστε για την ψαριά της ημέρας. Ψωμί 2 € · πίτα 1 €.",
  note_2:"Στο κατάστημα · Take away · Ανέπαφη παράδοση",
  gal_pill:"ΓΚΑΛΕΡΙ", gal_h2:"Κατευθείαν από τα πιάτα μας", gal_script:"χωρίς φίλτρα",
  g1:"Πιατέλα σχάρας για δύο", g2:"Σπιτικές λεμονάδες", g3:"Ελληνικό πρωινό", g4:"Από τα κάρβουνα", g5:"Fritto misto", g6:"Παγωτό δίπλα στο κύμα",
  g7:"Πίτσα &amp; τοπικό κρασί", g8:"Χταπόδι, απλά", g9:"Βάφλα με τα όλα της", g10:"Γαύρος &amp; πατάτες", g11:"Καλοκαιρινό sundae", g12:"Η θέα από το τραπέζι σας",
  g13:"Τσιπούρα σχάρας", g14:"Χταπόδι κοκκινιστό", g15:"Γαριδομακαρονάδα", g16:"Πίτσα θαλασσινών", g17:"Γαρίδες σαγανάκι", g18:"Θαλασσινά κοκκινιστά", rev_pill:"ΚΡΙΤΙΚΕΣ", rev_h2:"Από στόμα σε στόμα", rev_script:"κατευθείαν από το Google",
  r1_q:"«Αν βρίσκεστε στην Ουρανούπολη, αυτή η ταβέρνα είναι η καλύτερη επιλογή στην περιοχή. Το φαγητό είναι πάντα φρέσκο.»",
  r2_q:"«Ταβέρνα πάνω στο κύμα με φρέσκα, νόστιμα πιάτα — και οι μερίδες είναι τεράστιες.»",
  r3_q:"«Φανταστικό φαγητό, υπέροχο προσωπικό — περάσαμε καταπληκτικά!»",
  r_lg:"Local Guide · Google", r_lg2:"Local Guide · Google", r3_n:"Επισκέπτης Google", r3_t:"Ενημέρωση επισκέπτη · Google",
  rev_badge:"από 414 κριτικές στο",
  v_pill:"ΕΠΙΣΚΕΦΘΕΙΤΕ ΜΑΣ", v_h2:"Βρείτε τα κύματα", v_script:"είμαστε πάνω στην παραλία",
  v_addr_h:"Διεύθυνση", v_addr_p:"Ουρανούπολη 630 75, Χαλκιδική", v_open_h:"Ανοιχτά κάθε μέρα", v_ph_h:"Τηλέφωνο",
  cta_dir2:"Οδηγίες πρόσβασης", cta_call:"Καλέστε μας",
  nav_story2:"Η ιστορία μας", nav_sig2:"Σπεσιαλιτέ", nav_menu2:"Μενού", nav_gal2:"Γκαλερί", nav_visit2:"Επισκεφθείτε μας",
  foot_c:"© 2026 Waves Coffee &amp; Food · Ουρανούπολη, Χαλκιδική", foot_ph:"Φωτογραφίες από την κουζίνα &amp; τους πελάτες μας"
},
ro: {
  h1_tail:" — Coffee &amp; Food, restaurant pe plajă în Ouranoupoli, lângă Muntele Athos",
  _title: "Waves Coffee & Food — Restaurant Ouranoupoli, Muntele Athos",
  _desc: "Tavernă pe plajă în Ouranoupoli, lângă feribotul spre Muntele Athos. Fructe de mare, grătar grecesc, mic dejun de la 05:30. 4,9★ pe Google.",
  tagline:"☀ Mic dejun înainte de feribotul spre Muntele Athos — masă lângă mare la întoarcere.",
  faq_pill:"BINE DE ȘTIUT", faq_h2:"Înainte să pleci spre Athos", faq_script:"ce ne întreabă pelerinii",
  fq1:"La ce oră deschideți înainte de feribotul spre Muntele Athos?",
  fa1:"Deschidem la 05:30, în fiecare zi — cafea, patiserie caldă și mic dejun complet înainte să plece primul feribot din Ouranoupoli.",
  fq2:"Aveți mâncare de post?",
  fa2:"Da. Pe lângă fructele de mare proaspete, meniul are și opțiuni de post — pizza de post, supe de legume și salate. Întreabă-ne de preparatele de post ale zilei.",
  fq3:"Unde exact sunteți în Ouranoupoli?",
  fa3:"Chiar pe plajă, la câteva minute de mers pe jos de portul din care pleacă vasele spre Muntele Athos. Caută firma Waves de pe faleză.",
  fq4:"Putem veni în grup înainte de pelerinaj?",
  fa4:"Sigur — sună la +30 2377 071088 și masa va fi pregătită înainte de plecarea vasului.",
  _strip: ["Pește proaspăt zilnic","Grătar pe cărbuni","Mic dejun de la 05:30","Clătite făcute în casă","Freddo lângă mare"],
  nav_story:"Povestea noastră", nav_sig:"Specialități", nav_menu:"Meniu", nav_gal:"Galerie", nav_rev:"Recenzii", nav_visit:"Vizitează-ne",
  kicker:"OURANOUPOLI · HALKIDIKI",
  lead:"O tavernă pe plajă, grill &amp; cafenea all-day pe malul mării din Ouranoupoli — unde peștele e proaspăt, grătarul fumegă și cafeaua începe în zori.",
  cta_menu:"Vezi meniul", cta_dir:"Cum ajungi",
  st_rev:"414 recenzii Google", st_open:"deschis zilnic", st_pp:"de persoană",
  story_pill:"POVESTEA NOASTRĂ", story_h2:"O tavernă pe malul mării<br>din Ouranoupoli", story_script:"unde ziua începe cu valurile",
  story_p:"La câțiva pași de plaja din Ouranoupoli — ultimul sat înainte de Muntele Athos — Waves servește întreaga zi din Halkidiki: cafea la răsărit și patiserie caldă, prânzuri lungi lângă mare cu pește la grătar și caracatiță, și seri tihnite cu grătar, clătite și cocktailuri sub lămpile de rattan.",
  f1_h:"Din mare, zilnic", f1_p:"Caracatiță, calamar, sardine și pește întreg, direct pe cărbuni.",
  f2_h:"Grătar grecesc", f2_p:"Souvlaki, coaste, bifteki și cotlete — porții generoase, prețuri corecte.",
  f3_h:"Cafea de la 05:30", f3_p:"Primul freddo înainte să plece feribotul spre Athos.",
  f4_h:"Chiar pe malul apei", f4_p:"Mese pe terasă cu golful Singitic drept orizont.",
  sig_pill:"SPECIALITĂȚI", sig_h2:"Farfurii pentru care merită drumul", sig_script:"din Egeea, cu drag",
  s1_h:"Caracatiță la grătar", s1_p:"Tentacul fript pe verdețuri, ceapă și glazură balsamică.",
  s2_h:"Platoul pescarului", s2_p:"Calamari, creveți, hamsii, midii și caracatiță peste cartofi cu oregano.",
  s3_h:"Doradă la grătar", s3_p:"Doradă proaspătă, întreagă, pe cărbuni, cu legume la grătar și lămâie.",
  s4_h:"Calamar întreg la grătar", s4_p:"Crestat și rumenit, cu cartofi și lămâie.",
  menu_pill:"MENIUL", menu_h2:"Mănânci în ritmul mării", menu_script:"meniul complet",
  note_3:"Prețurile sunt cele din meniul tipărit al localului — pot apărea mici modificări de sezon; la masă e valabil întotdeauna meniul zilei.",
  m1_h:"Din mare", m1_s:"proaspăt în fiecare zi",
  m1_1:"Caracatiță la grătar", m1_2:"Fritto misto", m1_3:"Langustine", m1_4:"Sardine &amp; gavros la grătar", m1_5:"Peștele zilei",
  m2_h:"De pe grătar", m2_s:"foc &amp; fum",
  m2_1:"Platouri mixte la grătar", m2_2:"Coaste &amp; cotlete de porc", m2_3:"Souvlaki &amp; gyros", m2_4:"Burgeri cu cartofi <b>10 €</b>", m2_5:"Pizza gyros",
  m3_h:"Dimineața &amp; cafea", m3_s:"de la 05:30",
  m3_1:"Mic dejun grecesc", m3_2:"Omlete &amp; ochiuri", m3_3:"Plăcinte calde cu brânză", m3_4:"Freddo espresso &amp; cappuccino", m3_5:"Fresh de portocale",
  m4_h:"Valuri dulci", m4_s:"clătite &amp; nu numai",
  m4_1:"Crepes cu înghețată", m4_2:"Pancakes americane <b>10 €</b>", m4_3:"Pancakes sărate <b>12 €</b>", m4_4:"Vafe &amp; sundae", m4_5:"Baclava &amp; prăjitură cu nuci",
  note_1:"<b>Aproximativ 10–15 € de persoană.</b> Peștele proaspăt are preț zilnic — întreabă de captura zilei. Pâine 2 € · lipie 1 €.",
  note_2:"În local · La pachet · Livrare fără contact",
  gal_pill:"GALERIE", gal_h2:"Direct din farfuriile noastre", gal_script:"fără filtre",
  g1:"Platou la grătar pentru doi", g2:"Limonade de casă", g3:"Mic dejun grecesc", g4:"De pe cărbuni", g5:"Fritto misto", g6:"Înghețată lângă mare",
  g7:"Pizza &amp; vin local", g8:"Caracatiță, simplu", g9:"Vafă cu de toate", g10:"Gavros &amp; cartofi", g11:"Sundae de vară", g12:"Priveliștea de la masa ta",
  g13:"Doradă întreagă la grătar", g14:"Caracatiță în sos de roșii", g15:"Linguine cu creveți", g16:"Pizza cu fructe de mare", g17:"Creveți saganaki", g18:"Fructe de mare în sos de roșii", rev_pill:"RECENZII", rev_h2:"Din gură în gură", rev_script:"direct de pe Google",
  r1_q:"„Dacă ești în Uranopoli, această tavernă este cea mai bună alegere din zonă. Mâncarea este mereu proaspătă.”",
  r2_q:"„O tavernă pe malul mării cu preparate proaspete și delicioase — iar porțiile sunt foarte mari.”",
  r3_q:"„Mâncare fantastică, personal de treabă — ne-am simțit minunat!”",
  r_lg:"Local Guide · Google", r_lg2:"Local Guide · Google", r3_n:"Vizitator Google", r3_t:"Actualizare vizitator · Google",
  rev_badge:"din 414 recenzii pe",
  v_pill:"VIZITEAZĂ-NE", v_h2:"Găsește valurile", v_script:"suntem chiar pe plajă",
  v_addr_h:"Adresă", v_addr_p:"Ouranoupoli 630 75, Halkidiki, Grecia", v_open_h:"Deschis zilnic", v_ph_h:"Telefon",
  cta_dir2:"Cum ajungi", cta_call:"Sună-ne",
  nav_story2:"Povestea noastră", nav_sig2:"Specialități", nav_menu2:"Meniu", nav_gal2:"Galerie", nav_visit2:"Vizitează-ne",
  foot_c:"© 2026 Waves Coffee &amp; Food · Ouranoupoli, Halkidiki", foot_ph:"Fotografii din bucătăria noastră &amp; de la oaspeți"
}
,
bg: {
  tagline:"☀ Закуска преди ферибота за Света гора — море и вкусна храна на връщане.",
  h1_tail:" — Coffee &amp; Food, ресторант на плажа в Урануполи, до Света гора",
  _title:"Waves Coffee & Food — Таверна в Урануполи, до Света гора",
  _desc:"Таверна на плажа в Урануполи, до ферибота за Света гора. Пресни морски дарове, скара, закуска от 05:30. 4,9★ в Google.",
  _strip:["Прясна риба всеки ден", "Скара на жар", "Закуска от 05:30", "Ръчно приготвени палачинки", "Freddo край морето"],
  nav_story:"Нашата история",
  nav_sig:"Специалитети",
  nav_menu:"Меню",
  nav_gal:"Галерия",
  nav_rev:"Отзиви",
  nav_visit:"Посетете ни",
  kicker:"УРАНУПОЛИ · ХАЛКИДИКИ",
  lead:"Таверна, скара и целодневно кафене на самия бряг в Урануполи — където рибата е прясна, скарата дими, а кафето започва още на разсъмване.",
  cta_menu:"Вижте менюто",
  cta_dir:"Как да ни намерите",
  st_rev:"414 отзива в Google",
  st_open:"отворено всеки ден",
  st_pp:"на човек",
  story_pill:"НАШАТА ИСТОРИЯ",
  story_h2:"Таверна на брега<br>на Урануполи",
  story_script:"където денят започва с вълните",
  story_p:"На две крачки от плажа в Урануполи — последното селище преди Света гора — Waves поднася деня в Халкидики от начало до край: кафе на изгрев и топли печива, дълги обеди край морето с риба и октопод на скара и бавни вечери с плата от скарата, палачинки и коктейли под ратановите лампи.",
  f1_h:"От морето, всеки ден",
  f1_p:"Октопод, калмари, сардини и цяла риба — направо върху жаравата.",
  f2_h:"Гръцката скара",
  f2_p:"Сувлаки, ребърца, бифтеки и котлети — щедри порции на честни цени.",
  f3_h:"Кафе от 05:30",
  f3_p:"Първото freddo, преди фериботът за Атон да отплава от кея.",
  f4_h:"На самата вода",
  f4_p:"Маси на терасата със Сингитския залив за хоризонт.",
  sig_pill:"СПЕЦИАЛИТЕТИ",
  sig_h2:"Ястия, заради които си струва пътят",
  sig_script:"от Егейско море, с любов",
  s1_h:"Октопод на скара",
  s1_p:"Пипало на жар върху свежи зелени листа, с тънко нарязан лук и балсамова глазура.",
  s2_h:"Рибарско плато",
  s2_p:"Калмари, скариди, хамсия, миди и октопод върху пържени картофки с риган.",
  s3_h:"Ципура на скара",
  s3_p:"Прясна ципура, цяла на жар, с печени зеленчуци и лимон.",
  s4_h:"Цял калмар на скара",
  s4_p:"Нарязан на решетка и препечен на жар, с овкусени картофки и лимон.",
  menu_pill:"МЕНЮТО",
  menu_h2:"Хапнете в ритъма на морето",
  menu_script:"цялото меню",
  note_1:"<b>Около 10–15 € на човек.</b> Прясната риба е с цена за деня — попитайте за днешния улов. Хляб 2 € · пита 1 €.",
  note_2:"На място · За вкъщи · Безконтактна доставка",
  note_3:"Цените са според менюто в заведението — възможни са малки сезонни промени; на масата винаги важи актуалното меню за деня.",
  gal_pill:"ГАЛЕРИЯ",
  gal_h2:"Направо от нашите чинии",
  gal_script:"без нужда от филтри",
  g1:"Плато от скарата за двама",
  g2:"Домашни разхладителни напитки",
  g3:"Гръцка закуска",
  g4:"От жаравата",
  g5:"Fritto misto",
  g6:"Джелато край морето",
  g7:"Пица и местно вино",
  g8:"Просто октопод",
  g9:"Гофрета с всичко",
  g10:"Гаврос и картофки",
  g11:"Лятна мелба",
  g12:"Гледката от вашата маса",
  g13:"Цяла ципура на скара", g14:"Октопод в доматен сос", g15:"Лингуини със скариди", g16:"Пица с морски дарове", g17:"Скариди саганаки", g18:"Морски дарове в доматен сос", rev_pill:"ОТЗИВИ",
  rev_h2:"От уста на уста",
  rev_script:"направо от Google",
  r1_q:"„Ако сте в Урануполи, тази таверна е най-добрият избор в района. Храната винаги е прясна.“",
  r2_q:"„Таверна на самия бряг с пресни и вкусни ястия — а порциите са огромни.“",
  r3_q:"„Страхотна храна, персоналът е чудесен и си прекарахме невероятно!“",
  r_lg:"Local Guide · Google",
  r_lg2:"Local Guide · Google",
  r3_n:"Посетител в Google",
  r3_t:"Актуализация от посетител · Google",
  rev_badge:"от 414 отзива в",
  faq_pill:"ДОБРЕ Е ДА ЗНАЕТЕ",
  faq_h2:"Преди да отплавате към Света гора",
  faq_script:"въпроси, които поклонниците ни задават",
  fq1:"В колко часа отваряте преди корабчето за Света гора?",
  fa1:"Отваряме в 05:30, всеки ден без изключение — кафе, топли печива и богата закуска преди тръгването на първия ферибот от Урануполи.",
  fq2:"Предлагате ли постни ястия?",
  fa2:"Да. Освен пресните морски дарове, в менюто има и постни ястия — постна пица, зеленчукови супи и салати. Попитайте ни за постните ястия за деня.",
  fq3:"Къде точно се намирате в Урануполи?",
  fa3:"Направо на плажа, на няколко минути пеша от пристанището, откъдето тръгват корабчетата за Света гора. Търсете табелата Waves на крайбрежната.",
  fq4:"Може ли да дойдем с група преди поклонението?",
  fa4:"Разбира се — обадете се на +30 2377 071088 и масата ще ви чака, преди корабчето да отплава.",
  v_pill:"ПОСЕТЕТЕ НИ",
  v_h2:"Намерете вълните",
  v_script:"намираме се направо на плажа",
  v_addr_h:"Адрес",
  v_addr_p:"Урануполи 630 75, Халкидики, Гърция",
  v_open_h:"Отворено всеки ден",
  v_ph_h:"Телефон",
  cta_dir2:"Как да ни намерите",
  cta_call:"Обадете ни се",
  nav_story2:"Нашата история",
  nav_sig2:"Специалитети",
  nav_menu2:"Меню",
  nav_gal2:"Галерия",
  nav_visit2:"Посетете ни",
  foot_c:"© 2026 Waves Coffee &amp; Food · Урануполи, Халкидики",
  foot_ph:"Снимки от нашата кухня и нашите гости"
},
sr: {
  tagline:"☀ Doručak pre trajekta za Svetu Goru — obrok kraj mora po povratku.",
  h1_tail:" — Coffee &amp; Food, restoran na plaži u Uranopolisu, kod Svete Gore",
  _title:"Waves Coffee & Food — Taverna u Uranopolisu, Sveta Gora",
  _desc:"Taverna na plaži u Uranopolisu, kod trajekta za Svetu Goru. Sveži plodovi mora, roštilj, doručak od 05:30. 4,9★ na Google-u.",
  _strip:["Sveža riba svakog dana", "Roštilj na ćumur", "Doručak od 05:30", "Domaće palačinke", "Freddo kraj mora"],
  nav_story:"Naša priča",
  nav_sig:"Specijaliteti",
  nav_menu:"Meni",
  nav_gal:"Galerija",
  nav_rev:"Recenzije",
  nav_visit:"Posetite nas",
  kicker:"URANOPOLIS · HALKIDIKI",
  lead:"Taverna, roštilj i kafić na samoj plaži Uranopolisa — gde je riba uvek sveža, roštilj se dimi, a kafa miriše već od zore.",
  cta_menu:"Pogledajte meni",
  cta_dir:"Kako do nas",
  st_rev:"414 Google recenzija",
  st_open:"otvoreno svakog dana",
  st_pp:"po osobi",
  story_pill:"NAŠA PRIČA",
  story_h2:"Taverna na obali<br>Uranopolisa",
  story_script:"gde dan počinje uz šum talasa",
  story_p:"Na par koraka od plaže u Uranopolisu — poslednjem mestu pred Svetom Gorom — Waves prati ceo dan na Halkidikiju: kafa u svitanje i topla peciva, dugi ručkovi kraj mora uz ribu i hobotnicu sa roštilja, i lagane večeri uz mešano meso sa žara, palačinke i koktele pod pletenim lampama.",
  f1_h:"Iz mora, svakog dana",
  f1_p:"Hobotnica, lignje, sardine i cela riba — pravo na žar.",
  f2_h:"Grčki roštilj",
  f2_p:"Souvlaki, rebarca, bifteki i kotleti — bogate porcije, poštene cene.",
  f3_h:"Kafa od 05:30",
  f3_p:"Prvi freddo pre nego što trajekt za Svetu Goru isplovi sa pristaništa.",
  f4_h:"Tik uz more",
  f4_p:"Stolovi na terasi sa Singitskim zalivom na horizontu.",
  sig_pill:"SPECIJALITETI",
  sig_h2:"Jela zbog kojih vredi doći",
  sig_script:"iz Egeja, s ljubavlju",
  s1_h:"Hobotnica sa roštilja",
  s1_p:"Krak hobotnice sa žara preko zelene salate, uz tanko sečen luk i balzamiko glazuru.",
  s2_h:"Ribarska plata",
  s2_p:"Lignje, gambori, inćuni, dagnje i hobotnica na pomfritu sa origanom.",
  s3_h:"Orada sa roštilja",
  s3_p:"Sveža orada, cela sa žara, uz grilovano povrće i limun.",
  s4_h:"Cela lignja sa roštilja",
  s4_p:"Zarezana i zapečena na žaru, uz začinjeni pomfrit i limun.",
  menu_pill:"MENI",
  menu_h2:"Jedite u ritmu mora",
  menu_script:"kompletan meni",
  note_1:"<b>Oko 10–15 € po osobi.</b> Sveža riba po dnevnoj ceni — pitajte za današnji ulov. Hleb 2 € · pita 1 €.",
  note_2:"U restoranu · Za poneti · Beskontaktna dostava",
  note_3:"Cene su prema našem meniju u lokalu — moguće su manje sezonske izmene; za stolom uvek važi današnji meni.",
  gal_pill:"GALERIJA",
  gal_h2:"Pravo iz naših tanjira",
  gal_script:"bez ikakvih filtera",
  g1:"Roštilj plata za dvoje",
  g2:"Kućna osveženja",
  g3:"Grčki doručak",
  g4:"Pravo sa žara",
  g5:"Fritto misto",
  g6:"Gelato kraj mora",
  g7:"Pica i domaće vino",
  g8:"Hobotnica, jednostavno",
  g9:"Vafl, sa svime",
  g10:"Gavros i pomfrit",
  g11:"Letnji sladoledni kup",
  g12:"Pogled sa vašeg stola",
  g13:"Cela orada sa roštilja", g14:"Hobotnica u paradajz sosu", g15:"Linguine sa škampima", g16:"Pica sa plodovima mora", g17:"Škampi saganaki", g18:"Plodovi mora u paradajz sosu", rev_pill:"RECENZIJE",
  rev_h2:"Šta kažu gosti",
  rev_script:"direktno sa Google-a",
  r1_q:"„Ako ste u Uranopolisu, ova taverna je najbolji izbor u okolini. Hrana je uvek sveža.“",
  r2_q:"„Taverna na samoj obali mora, sa svežim i ukusnim jelima — a porcije su ogromne.“",
  r3_q:"„Fantastična hrana, osoblje je sjajno, a mi smo se odlično proveli!“",
  r_lg:"Local Guide · Google",
  r_lg2:"Local Guide · Google",
  r3_n:"Google posetilac",
  r3_t:"Utisak posetioca · Google",
  rev_badge:"na osnovu 414 recenzija na",
  faq_pill:"DOBRO JE ZNATI",
  faq_h2:"Pre nego što isplovite ka Svetoj Gori",
  faq_script:"pitanja koja nam postavljaju hodočasnici",
  fq1:"Od koliko sati radite pre polaska broda za Svetu Goru?",
  fa1:"Otvaramo u 05:30, svakog dana — kafa, topla peciva i pun doručak pre nego što prvi trajekt isplovi iz Uranopolisa.",
  fq2:"Da li imate posna jela?",
  fa2:"Da. Pored svežih morskih plodova, u meniju su i posna jela — posna pica, čorbe od povrća i salate. Pitajte nas za današnju posnu ponudu.",
  fq3:"Gde se tačno nalazite u Uranopolisu?",
  fa3:"Na samoj plaži, na par minuta hoda od pristaništa odakle brodovi polaze za Svetu Goru. Potražite natpis Waves na šetalištu uz more.",
  fq4:"Možemo li doći kao grupa pre hodočašća?",
  fa4:"Naravno — pozovite +30 2377 071088 i sto će vas čekati pre polaska vašeg broda.",
  v_pill:"POSETITE NAS",
  v_h2:"Pronađite talase",
  v_script:"nalazimo se na samoj plaži",
  v_addr_h:"Adresa",
  v_addr_p:"Uranopolis 630 75, Halkidiki, Grčka",
  v_open_h:"Otvoreno svakog dana",
  v_ph_h:"Telefon",
  cta_dir2:"Kako do nas",
  cta_call:"Pozovite nas",
  nav_story2:"Naša priča",
  nav_sig2:"Specijaliteti",
  nav_menu2:"Meni",
  nav_gal2:"Galerija",
  nav_visit2:"Posetite nas",
  foot_c:"© 2026 Waves Coffee &amp; Food · Uranopolis, Halkidiki",
  foot_ph:"Fotografije iz naše kuhinje i od naših gostiju"
},
ru: {
  tagline:"☀ Завтрак перед паромом на Афон — обед у моря по возвращении.",
  h1_tail:" — Coffee &amp; Food, ресторан на пляже в Уранополисе, рядом с Афоном",
  _title:"Waves Coffee & Food — Таверна в Уранополисе, Афон",
  _desc:"Таверна на пляже в Уранополисе, у парома на Афон. Свежие морепродукты, гриль, завтрак с 05:30. 4,9★ в Google.",
  _strip:["Свежая рыба каждый день", "Гриль на углях", "Завтрак с 05:30", "Домашние блинчики", "Фреддо у моря"],
  nav_story:"Наша история",
  nav_sig:"Фирменные блюда",
  nav_menu:"Меню",
  nav_gal:"Галерея",
  nav_rev:"Отзывы",
  nav_visit:"Как нас найти",
  kicker:"УРАНОПОЛИС · ХАЛКИДИКИ",
  lead:"Таверна, гриль и кафе на самом берегу моря в Уранополисе — со свежей рыбой, дымящимся грилем и кофе с самого рассвета, весь день напролёт.",
  cta_menu:"Смотреть меню",
  cta_dir:"Проложить маршрут",
  st_rev:"414 отзывов в Google",
  st_open:"открыто каждый день",
  st_pp:"на человека",
  story_pill:"НАША ИСТОРИЯ",
  story_h2:"Таверна на берегу<br>Уранополиса",
  story_script:"где день начинается с шума волн",
  story_p:"В нескольких шагах от пляжа Уранополиса — последнего посёлка перед Святой Горой Афон — Waves проживает день Халкидики целиком: кофе с тёплой выпечкой на рассвете, долгие обеды у моря с рыбой и осьминогом на гриле и неспешные вечера с мясным ассорти с углей, блинчиками и коктейлями под плетёными абажурами.",
  f1_h:"Из моря — каждый день",
  f1_p:"Осьминоги, кальмары, сардины и целая рыба — прямо на угли.",
  f2_h:"Греческий гриль",
  f2_p:"Сувлаки, рёбрышки, бифтеки и отбивные — щедрые порции и честные цены.",
  f3_h:"Кофе с 05:30",
  f3_p:"Первый фреддо — ещё до отправления парома на Афон.",
  f4_h:"У самой воды",
  f4_p:"Столики на террасе, а вместо горизонта — Сингитский залив.",
  sig_pill:"ФИРМЕННЫЕ БЛЮДА",
  sig_h2:"Блюда, ради которых стоит приехать",
  sig_script:"из Эгейского моря, с любовью",
  s1_h:"Осьминог на гриле",
  s1_p:"Щупальце, обожжённое на углях, на подушке из зелени — с тонко нарезанным луком и бальзамической глазурью.",
  s2_h:"Рыбацкое плато",
  s2_p:"Кальмары, креветки, анчоусы, мидии и осьминог на картофеле фри с орегано.",
  s3_h:"Дорада на гриле",
  s3_p:"Свежая дорада целиком на углях, с овощами гриль и лимоном.",
  s4_h:"Целый кальмар на гриле",
  s4_p:"С надрезами-сеточкой, подрумяненный на углях, с ароматным картофелем фри и лимоном.",
  menu_pill:"МЕНЮ",
  menu_h2:"Трапеза под шум волн",
  menu_script:"полное меню",
  note_1:"<b>В среднем 10–15 € на человека.</b> Свежая рыба — по цене дня: спрашивайте сегодняшний улов. Хлеб 2 € · пита 1 €.",
  note_2:"В зале · Навынос · Бесконтактная доставка",
  note_3:"Цены соответствуют нашему основному меню — возможны небольшие сезонные изменения; за столом всегда действует меню дня.",
  gal_pill:"ГАЛЕРЕЯ",
  gal_h2:"Прямо с наших тарелок",
  gal_script:"без всяких фильтров",
  g1:"Гриль-плато на двоих",
  g2:"Домашние освежающие напитки",
  g3:"Греческий завтрак",
  g4:"Прямо с углей",
  g5:"Фритто мисто",
  g6:"Джелато у моря",
  g7:"Пицца и местное вино",
  g8:"Осьминог, без лишнего",
  g9:"Вафля со всем и сразу",
  g10:"Гаврос и картофель фри",
  g11:"Летний сандей",
  g12:"Вид с вашего столика",
  g13:"Дорада на гриле", g14:"Осьминог в томатном соусе", g15:"Лингвини с креветками", g16:"Пицца с морепродуктами", g17:"Креветки саганаки", g18:"Морепродукты в томатном соусе", rev_pill:"ОТЗЫВЫ",
  rev_h2:"Из первых уст",
  rev_script:"прямо из Google",
  r1_q:"«Если вы в Уранополисе — эта таверна лучший выбор в округе. Еда здесь всегда свежая».",
  r2_q:"«Таверна прямо на набережной, свежие и очень вкусные блюда — а порции огромные».",
  r3_q:"«Еда фантастическая, персонал замечательный — мы прекрасно провели время!»",
  r_lg:"Местный эксперт · Google",
  r_lg2:"Местный эксперт · Google",
  r3_n:"Посетитель Google",
  r3_t:"Отзыв посетителя · Google",
  rev_badge:"на основе 414 отзывов в",
  faq_pill:"ПОЛЕЗНО ЗНАТЬ",
  faq_h2:"Перед отплытием на Афон",
  faq_script:"о чём нас спрашивают паломники",
  fq1:"Во сколько вы открываетесь перед паромом на Афон?",
  fa1:"Мы открываемся в 05:30 каждый день, без исключений: кофе, тёплая выпечка и полноценный завтрак до отправления первого парома из Уранополиса.",
  fq2:"Есть ли у вас постные блюда?",
  fa2:"Да. Помимо свежих морепродуктов, в меню есть постные варианты — постная пицца, овощные супы и салаты. Спросите нас о постных блюдах дня.",
  fq3:"Где именно вы находитесь в Уранополисе?",
  fa3:"Прямо на пляже, в паре минут ходьбы от причала, откуда отправляются паромы на Святую Гору Афон. Ищите вывеску Waves на набережной.",
  fq4:"Можно ли прийти группой перед паломничеством?",
  fa4:"Конечно! Позвоните нам по номеру +30 2377 071088 — и стол будет накрыт ещё до отправления вашего парома.",
  v_pill:"КАК НАС НАЙТИ",
  v_h2:"Идите на шум волн",
  v_script:"мы прямо на пляже",
  v_addr_h:"Адрес",
  v_addr_p:"Уранополис 630 75, Халкидики, Греция",
  v_open_h:"Открыто каждый день",
  v_ph_h:"Телефон",
  cta_dir2:"Проложить маршрут",
  cta_call:"Позвонить нам",
  nav_story2:"Наша история",
  nav_sig2:"Фирменные блюда",
  nav_menu2:"Меню",
  nav_gal2:"Галерея",
  nav_visit2:"Как нас найти",
  foot_c:"© 2026 Waves Coffee &amp; Food · Уранополис, Халкидики",
  foot_ph:"Фото — из нашей кухни и от наших гостей"
}
};

/* <picture> with modern formats; ASSET_V is filled in at build time */
const ASSET_V = {};
function pictureFor(jpg, attrs){
  const base = jpg.replace(/\.jpg$/, '');
  const v = ASSET_V[jpg] ? '?v=' + ASSET_V[jpg] : '';
  return `<picture><source type="image/avif" srcset="${base}.avif${v}"><source type="image/webp" srcset="${base}.webp${v}"><img src="${jpg}${v}" ${attrs}></picture>`;
}

/* ---------------- full menu data (transcribed from the in-house menu) ---------------- */
const MENU = [
 {
  "img": "/images/seafood-grill-800.jpg",
  "t": {
   "en": "From the Sea",
   "el": "Ψαρικά",
   "ro": "Din mare",
   "bg": "От морето",
   "sr": "Iz mora",
   "ru": "Дары моря"
  },
  "s": {
   "en": "fresh &amp; grilled",
   "el": "φρέσκα, στη σχάρα",
   "ro": "proaspăt, la grătar",
   "bg": "прясно и на скара",
   "sr": "sveže i sa roštilja",
   "ru": "свежее и с гриля"
  },
  "items": [
   {
    "n": {
     "en": "Grilled octopus",
     "el": "Χταπόδι σχάρας",
     "ro": "Caracatiță la grătar",
     "bg": "Октопод на скара",
     "sr": "Hobotnica sa roštilja",
     "ru": "Осьминог на гриле"
    },
    "p": "18"
   },
   {
    "n": {
     "en": "Grilled calamari",
     "el": "Καλαμάρι σχάρας",
     "ro": "Calamar la grătar",
     "bg": "Калмари на скара",
     "sr": "Lignje sa roštilja",
     "ru": "Кальмары на гриле"
    },
    "p": "20"
   },
   {
    "n": {
     "en": "Fried calamari",
     "el": "Καλαμαράκια τηγανητά",
     "ro": "Calamari prăjiți",
     "bg": "Пържени калмари",
     "sr": "Pržene lignje",
     "ru": "Жареные кальмары"
    },
    "p": "14"
   },
   {
    "n": {
     "en": "Fried anchovies (gavros)",
     "el": "Γαύρος",
     "ro": "Hamsii prăjite (gavros)",
     "bg": "Пържена хамсия (гаврос)",
     "sr": "Prženi inćuni (gavros)",
     "ru": "Жареные анчоусы (гаврос)"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Shrimps",
     "el": "Γαρίδες",
     "ro": "Creveți",
     "bg": "Скариди",
     "sr": "Gambori",
     "ru": "Креветки"
    },
    "p": "18"
   },
   {
    "n": {
     "en": "Shrimp pasta",
     "el": "Γαριδομακαρονάδα",
     "ro": "Paste cu creveți",
     "bg": "Паста със скариди",
     "sr": "Pasta sa gamborima",
     "ru": "Паста с креветками"
    },
    "p": "18"
   },
   {
    "n": {
     "en": "Seafood spaghetti",
     "el": "Μακαρόνια θαλασσινών",
     "ro": "Spaghete cu fructe de mare",
     "bg": "Спагети с морски дарове",
     "sr": "Špagete sa morskim plodovima",
     "ru": "Спагетти с морепродуктами"
    },
    "p": "18"
   },
   {
    "n": {
     "en": "Seafood mix",
     "el": "Μιξ θαλασσινών",
     "ro": "Mix de fructe de mare",
     "bg": "Микс от морски дарове",
     "sr": "Miks morskih plodova",
     "ru": "Ассорти из морепродуктов"
    },
    "p": "23"
   },
   {
    "n": {
     "en": "Sea bream (dorada)",
     "el": "Τσιπούρα",
     "ro": "Doradă",
     "bg": "Ципура (дорада)",
     "sr": "Orada",
     "ru": "Дорада (морской лещ)"
    },
    "p": "22"
   }
  ]
 },
 {
  "img": "/images/pork-ribs-800.jpg",
  "t": {
   "en": "Grilled Meat",
   "el": "Κρεατικά σχάρας",
   "ro": "De pe grătar",
   "bg": "Месо на скара",
   "sr": "Meso sa roštilja",
   "ru": "Мясо на гриле"
  },
  "s": {
   "en": "over charcoal",
   "el": "στα κάρβουνα",
   "ro": "pe cărbuni",
   "bg": "на жар",
   "sr": "na ćumuru",
   "ru": "на раскалённых углях"
  },
  "items": [
   {
    "n": {
     "en": "Lamb chops",
     "el": "Παϊδάκια αρνίσια",
     "ro": "Cotlete de miel",
     "bg": "Агнешки котлети",
     "sr": "Jagnjeći kotleti",
     "ru": "Отбивные из ягнёнка"
    },
    "p": "20"
   },
   {
    "n": {
     "en": "Pork steak",
     "el": "Μπριζόλα",
     "ro": "Cotlet de porc",
     "bg": "Свинска пържола",
     "sr": "Svinjski stek",
     "ru": "Свиной стейк"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Pork ribs (pancetta)",
     "el": "Πανσέτα",
     "ro": "Coaste de porc",
     "bg": "Свински ребърца (пансета)",
     "sr": "Svinjska rebarca (panceta)",
     "ru": "Свиные рёбрышки (панчетта)"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Souvlaki",
     "el": "Σουβλάκια",
     "ro": "Frigărui souvlaki",
     "bg": "Сувлаки",
     "sr": "Souvlaki",
     "ru": "Сувлаки"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Gyros (pork or chicken)",
     "el": "Γύρος (χοιρινός / κοτόπουλο)",
     "ro": "Gyros (porc sau pui)",
     "bg": "Гирос (свинско или пилешко)",
     "sr": "Gyros (svinjetina ili piletina)",
     "ru": "Гирос (свинина или курица)"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Gyros chicken / gyros mix",
     "el": "Γύρος κοτόπουλο / μιξ",
     "ro": "Gyros de pui / mix",
     "bg": "Гирос пиле / микс",
     "sr": "Giros piletina / miks",
     "ru": "Гирос курица / микс"
    },
    "p": "13"
   },
   {
    "n": {
     "en": "Bifteki (Greek burger patty)",
     "el": "Μπιφτέκι",
     "ro": "Bifteki (biftec grecesc)",
     "bg": "Бифтеки (гръцко кюфте на скара)",
     "sr": "Bifteki (grčka pljeskavica)",
     "ru": "Бифтеки (греческая рубленая котлета)"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Soutzoukakia",
     "el": "Σουτζουκάκια",
     "ro": "Suzukaki",
     "bg": "Суджукакия",
     "sr": "Sudžukakia",
     "ru": "Судзукакья"
    },
    "p": "12"
   }
  ]
 },
 {
  "t": {
   "en": "Burgers",
   "el": "Μπέργκερ",
   "ro": "Burgeri",
   "bg": "Бургери",
   "sr": "Burgeri",
   "ru": "Бургеры"
  },
  "s": {
   "en": "street classics",
   "el": "τα κλασικά",
   "ro": "clasicii",
   "bg": "улична класика",
   "sr": "klasici ulične hrane",
   "ru": "классика стрит-фуда"
  },
  "items": [
   {
    "n": {
     "en": "Classic Burger",
     "el": "Classic Burger",
     "ro": "Classic Burger",
     "bg": "Класически бургер",
     "sr": "Classic Burger",
     "ru": "Классический бургер"
    },
    "d": {
     "en": "sauce, tomato, lettuce, cheddar, ketchup",
     "el": "σως, ντομάτα, μαρούλι, τσένταρ, κέτσαπ",
     "ro": "sos, roșii, salată, cheddar, ketchup",
     "bg": "сос, домат, маруля, чедър, кетчуп",
     "sr": "sos, paradajz, zelena salata, čedar, kečap",
     "ru": "соус, помидор, салат, чеддер, кетчуп"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Golden Burger",
     "el": "Golden Burger",
     "ro": "Golden Burger",
     "bg": "Голдън бургер",
     "sr": "Golden Burger",
     "ru": "Бургер «Голден»"
    },
    "d": {
     "en": "grated cheese, bacon, tomato, lettuce, mayonnaise",
     "el": "τριμμένο τυρί, μπέικον, ντομάτα, μαρούλι, μαγιονέζα",
     "ro": "cașcaval ras, bacon, roșii, salată, maioneză",
     "bg": "настърган кашкавал, бекон, домат, маруля, майонеза",
     "sr": "rendani sir, slanina, paradajz, zelena salata, majonez",
     "ru": "тёртый сыр, бекон, помидор, салат, майонез"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Texas BBQ Burger",
     "el": "Texas BBQ Burger",
     "ro": "Texas BBQ Burger",
     "bg": "Тексас BBQ бургер",
     "sr": "Texas BBQ Burger",
     "ru": "Бургер «Техас BBQ»"
    },
    "d": {
     "en": "cheddar, bacon, lettuce, tomato, BBQ sauce",
     "el": "τσένταρ, μπέικον, μαρούλι, ντομάτα, BBQ σως",
     "ro": "cheddar, bacon, salată, roșii, sos BBQ",
     "bg": "чедър, бекон, маруля, домат, BBQ сос",
     "sr": "čedar, slanina, zelena salata, paradajz, BBQ sos",
     "ru": "чеддер, бекон, салат, помидор, соус барбекю"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Angus Burger",
     "el": "Angus Burger",
     "ro": "Angus Burger",
     "bg": "Ангус бургер",
     "sr": "Angus Burger",
     "ru": "Бургер «Ангус»"
    },
    "d": {
     "en": "Philadelphia, lettuce, tomato, cheddar, bacon, ketchup",
     "el": "τυρί Φιλαδέλφεια, μαρούλι, ντομάτα, τσένταρ, μπέικον, κέτσαπ",
     "ro": "Philadelphia, salată, roșii, cheddar, bacon, ketchup",
     "bg": "крема сирене Philadelphia, маруля, домат, чедър, бекон, кетчуп",
     "sr": "Philadelphia, zelena salata, paradajz, čedar, slanina, kečap",
     "ru": "сыр Филадельфия, салат, помидор, чеддер, бекон, кетчуп"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Crispy Chicken Burger",
     "el": "Crispy Chicken Burger",
     "ro": "Crispy Chicken Burger",
     "bg": "Криспи чикън бургер",
     "sr": "Crispy Chicken Burger",
     "ru": "Бургер с хрустящей курицей"
    },
    "d": {
     "en": "chicken schnitzel, cheddar, tomato, lettuce, crispy sauce, bacon",
     "el": "σνίτσελ κοτόπουλο, τσένταρ, ντομάτα, μαρούλι, σως Κρίσπι, μπέικον",
     "ro": "șnițel de pui, cheddar, roșii, salată, sos crispy, bacon",
     "bg": "пилешки шницел, чедър, домат, маруля, криспи сос, бекон",
     "sr": "pileća šnicla, čedar, paradajz, zelena salata, krispi sos, slanina",
     "ru": "куриный шницель, чеддер, помидор, салат, соус криспи, бекон"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Any burger with country potatoes",
     "el": "Κάθε μπέργκερ με πατάτες",
     "ro": "Orice burger cu cartofi",
     "bg": "Всеки бургер със селски картофи",
     "sr": "Bilo koji burger sa seoskim krompirićima",
     "ru": "Любой бургер с картофелем по-деревенски"
    },
    "p": "10"
   }
  ],
  "img": "/images/burger-classic-800.jpg"
 },
 {
  "t": {
   "en": "Sandwiches &amp; Snacks",
   "el": "Σάντουιτς &amp; σνακ",
   "ro": "Sandvișuri &amp; gustări",
   "bg": "Сандвичи и снаксове",
   "sr": "Sendviči i zalogaji",
   "ru": "Сэндвичи и закуски"
  },
  "s": {
   "en": "grab &amp; go",
   "el": "στο χέρι",
   "ro": "rapid, la pachet",
   "bg": "бързо и вкусно",
   "sr": "brzo i ukusno",
   "ru": "быстро и вкусно"
  },
  "items": [
   {
    "n": {
     "en": "White baguette with chicken",
     "el": "Μπαγκέτα λευκή με κοτόπουλο",
     "ro": "Baghetă albă cu pui",
     "bg": "Бяла багета с пиле",
     "sr": "Bela bageta sa piletinom",
     "ru": "Белый багет с курицей"
    },
    "d": {
     "en": "mayonnaise, parmesan, arugula",
     "el": "μαγιονέζα, παρμεζάνα, ρόκα",
     "ro": "maioneză, parmezan, rucola",
     "bg": "майонеза, пармезан, рукола",
     "sr": "majonez, parmezan, rukola",
     "ru": "майонез, пармезан, руккола"
    },
    "p": "7"
   },
   {
    "n": {
     "en": "Whole wheat baguette",
     "el": "Μπαγκέτα ολικής",
     "ro": "Baghetă integrală",
     "bg": "Пълнозърнеста багета",
     "sr": "Integralna bageta",
     "ru": "Цельнозерновой багет"
    },
    "d": {
     "en": "mayonnaise, lettuce, turkey, tomato, feta",
     "el": "μαγιονέζα, μαρούλι, γαλοπούλα, ντομάτα, φέτα",
     "ro": "maioneză, salată, curcan, roșii, feta",
     "bg": "майонеза, салата, пуешко, домати, фета",
     "sr": "majonez, zelena salata, ćuretina, paradajz, feta",
     "ru": "майонез, салат, индейка, помидоры, фета"
    },
    "p": "6"
   },
   {
    "n": {
     "en": "Greek baguette",
     "el": "Ελληνική μπαγκέτα",
     "ro": "Baghetă grecească",
     "bg": "Гръцка багета",
     "sr": "Grčka bageta",
     "ru": "Греческий багет"
    },
    "d": {
     "en": "lettuce, feta, tomato, cucumber, olives",
     "el": "μαρούλι, φέτα, ντομάτα, αγγούρι, ελιές",
     "ro": "salată, feta, roșii, castraveți, măsline",
     "bg": "салата, фета, домати, краставици, маслини",
     "sr": "zelena salata, feta, paradajz, krastavac, masline",
     "ru": "салат, фета, помидоры, огурец, маслины"
    },
    "p": "6"
   },
   {
    "n": {
     "en": "Savory croissant",
     "el": "Κρουασάν αλμυρό",
     "ro": "Croissant sărat",
     "bg": "Солен кроасан",
     "sr": "Slani kroasan",
     "ru": "Пикантный круассан"
    },
    "d": {
     "en": "gouda, turkey, tomato, mayonnaise",
     "el": "γκούντα, γαλοπούλα, ντομάτα, μαγιονέζα",
     "ro": "gouda, curcan, roșii, maioneză",
     "bg": "гауда, пуешко, домати, майонеза",
     "sr": "gauda, ćuretina, paradajz, majonez",
     "ru": "гауда, индейка, помидоры, майонез"
    },
    "p": "6"
   },
   {
    "n": {
     "en": "Club sandwich",
     "el": "Κλαμπ σάντουιτς",
     "ro": "Club sandwich",
     "bg": "Клуб сандвич",
     "sr": "Klub sendvič",
     "ru": "Клаб-сэндвич"
    },
    "p": "10"
   },
   {
    "n": {
     "en": "Club sandwich with chicken",
     "el": "Κλαμπ σάντουιτς κοτόπουλο",
     "ro": "Club sandwich cu pui",
     "bg": "Клуб сандвич с пиле",
     "sr": "Klub sendvič sa piletinom",
     "ru": "Клаб-сэндвич с курицей"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Chicken nuggets",
     "el": "Κοτομπουκιές",
     "ro": "Nuggets de pui",
     "bg": "Пилешки хапки",
     "sr": "Pileći nageti",
     "ru": "Куриные наггетсы"
    },
    "p": "11"
   },
   {
    "n": {
     "en": "Fried potatoes",
     "el": "Τηγανητές πατάτες",
     "ro": "Cartofi prăjiți",
     "bg": "Пържени картофи",
     "sr": "Pomfrit",
     "ru": "Картофель фри"
    },
    "p": "6"
   },
   {
    "n": {
     "en": "Gyros sandwich",
     "el": "Γύρος σάντουιτς",
     "ro": "Sandviș cu gyros",
     "bg": "Сандвич с гирос",
     "sr": "Giros sendvič",
     "ru": "Сэндвич с гиросом"
    },
    "p": "5"
   },
   {
    "n": {
     "en": "Hot dog",
     "el": "Hot dog",
     "ro": "Hot dog",
     "bg": "Хот-дог",
     "sr": "Hot dog",
     "ru": "Хот-дог"
    },
    "p": "5"
   }
  ],
  "img": "/images/nuggets-800.jpg"
 },
 {
  "t": {
   "en": "Soups",
   "el": "Σούπες",
   "ro": "Supe &amp; ciorbe",
   "bg": "Супи",
   "sr": "Supe i čorbe",
   "ru": "Супы"
  },
  "s": {
   "en": "warm from the pot",
   "el": "ζεστές από την κατσαρόλα",
   "ro": "calde, din oală",
   "bg": "топли, направо от тенджерата",
   "sr": "toplo iz lonca",
   "ru": "горячие, только с плиты"
  },
  "items": [
   {
    "n": {
     "en": "Seafood soup",
     "el": "Θαλασσινών",
     "ro": "Supă de fructe de mare",
     "bg": "Супа от морски дарове",
     "sr": "Čorba od morskih plodova",
     "ru": "Суп из морепродуктов"
    },
    "p": "18"
   },
   {
    "n": {
     "en": "Fish soup",
     "el": "Ψαρόσουπα",
     "ro": "Ciorbă de pește",
     "bg": "Рибена супа",
     "sr": "Riblja čorba",
     "ru": "Рыбный суп"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Mushroom soup",
     "el": "Μανιταρόσουπα",
     "ro": "Supă de ciuperci",
     "bg": "Гъбена супа",
     "sr": "Supa od pečuraka",
     "ru": "Грибной суп"
    },
    "p": "9"
   },
   {
    "n": {
     "en": "Vegetable soup",
     "el": "Λαχανικών",
     "ro": "Supă de legume",
     "bg": "Зеленчукова супа",
     "sr": "Supa od povrća",
     "ru": "Овощной суп"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Tomato soup",
     "el": "Τοματόσουπα",
     "ro": "Supă de roșii",
     "bg": "Доматена супа",
     "sr": "Paradajz supa",
     "ru": "Томатный суп"
    },
    "p": "8"
   }
  ],
  "img": "/images/soups-800.jpg"
 },
 {
  "t": {
   "en": "Salads",
   "el": "Σαλάτες",
   "ro": "Salate",
   "bg": "Салати",
   "sr": "Salate",
   "ru": "Салаты"
  },
  "s": {
   "en": "crisp &amp; fresh",
   "el": "δροσερές",
   "ro": "proaspete",
   "bg": "хрупкави и свежи",
   "sr": "hrskavo i sveže",
   "ru": "свежесть и хруст"
  },
  "items": [
   {
    "n": {
     "en": "Greek salad",
     "el": "Χωριάτικη",
     "ro": "Salată grecească",
     "bg": "Гръцка салата",
     "sr": "Grčka salata",
     "ru": "Греческий салат"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Caesar's salad",
     "el": "Καίσαρα",
     "ro": "Salată Caesar",
     "bg": "Салата Цезар",
     "sr": "Cezar salata",
     "ru": "Салат «Цезарь»"
    },
    "p": "13"
   },
   {
    "n": {
     "en": "Tuna salad",
     "el": "Τονοσαλάτα",
     "ro": "Salată cu ton",
     "bg": "Салата с риба тон",
     "sr": "Salata sa tunjevinom",
     "ru": "Салат с тунцом"
    },
    "p": "13"
   },
   {
    "n": {
     "en": "Lettuce salad",
     "el": "Μαρούλι",
     "ro": "Salată verde",
     "bg": "Салата от маруля",
     "sr": "Zelena salata",
     "ru": "Зелёный салат"
    },
    "p": "10"
   },
   {
    "n": {
     "en": "Bougiourdi (baked spicy feta)",
     "el": "Μπουγιουρντί",
     "ro": "Bougiourdi (feta picantă la cuptor)",
     "bg": "Буюрди (запечена пикантна фета)",
     "sr": "Bougiourdi (zapečena ljuta feta)",
     "ru": "Бугиурди (запечённая острая фета)"
    },
    "p": "8"
   }
  ],
  "img": "/images/greek-salad-800.jpg"
 },
 {
  "img": "/images/pizza-wine-800.jpg",
  "t": {
   "en": "Pizza",
   "el": "Πίτσες",
   "ro": "Pizza",
   "bg": "Пица",
   "sr": "Pice",
   "ru": "Пицца"
  },
  "s": {
   "en": "stone-baked",
   "el": "στην πέτρα",
   "ro": "pe vatră",
   "bg": "изпечена на камък",
   "sr": "pečene na kamenu",
   "ru": "из каменной печи"
  },
  "items": [
   {
    "n": {
     "en": "Special",
     "el": "Σπέσιαλ",
     "ro": "Specială",
     "bg": "Специална",
     "sr": "Specijal",
     "ru": "Спешл"
    },
    "p": "15"
   },
   {
    "n": {
     "en": "Margherita",
     "el": "Μαργαρίτα",
     "ro": "Margherita",
     "bg": "Margherita",
     "sr": "Margherita",
     "ru": "Маргарита"
    },
    "d": {
     "en": "mozzarella &amp; tomato sauce",
     "el": "μοτσαρέλα &amp; σάλτσα ντομάτας",
     "ro": "mozzarella &amp; sos de roșii",
     "bg": "моцарела и доматен сос",
     "sr": "mocarela i paradajz sos",
     "ru": "моцарелла и томатный соус"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Tuna pizza",
     "el": "Πίτσα με τόνο",
     "ro": "Pizza cu ton",
     "bg": "Пица с риба тон",
     "sr": "Pica sa tunjevinom",
     "ru": "Пицца с тунцом"
    },
    "p": "15"
   },
   {
    "n": {
     "en": "Gyros pizza",
     "el": "Πίτσα με γύρο",
     "ro": "Pizza cu gyros",
     "bg": "Пица с гирос",
     "sr": "Gyros pica",
     "ru": "Пицца с гиросом"
    },
    "p": "15"
   },
   {
    "n": {
     "en": "Pepperoni pizza",
     "el": "Πίτσα πεπερόνι",
     "ro": "Pizza cu pepperoni",
     "bg": "Пица с пеперони",
     "sr": "Pepperoni pica",
     "ru": "Пицца пепперони"
    },
    "p": "15"
   },
   {
    "n": {
     "en": "Lenten (vegan) pizza",
     "el": "Νηστίσιμη",
     "ro": "Pizza de post",
     "bg": "Постна (веган) пица",
     "sr": "Posna (veganska) pica",
     "ru": "Постная (веганская) пицца"
    },
    "p": "12"
   }
  ]
 },
 {
  "t": {
   "en": "Breakfast &amp; Pies",
   "el": "Πρωινό &amp; πίτες",
   "ro": "Mic dejun &amp; plăcinte",
   "bg": "Закуска и баници",
   "sr": "Doručak i pite",
   "ru": "Завтрак и пироги"
  },
  "s": {
   "en": "warm from 05:30",
   "el": "ζεστά από τις 05:30",
   "ro": "calde de la 05:30",
   "bg": "топли от 05:30",
   "sr": "toplo od 05:30",
   "ru": "горячее с 05:30"
  },
  "items": [
   {
    "n": {
     "en": "Bougatsa (cream / cheese / spinach / spinach &amp; cheese / minced meat)",
     "el": "Μπουγάτσα (κρέμα / τυρί / σπανάκι / σπανάκι &amp; τυρί / κιμάς)",
     "ro": "Bougatsa (cremă / brânză / spanac / spanac &amp; brânză / carne tocată)",
     "bg": "Бугаца (крем / сирене / спанак / спанак и сирене / кайма)",
     "sr": "Bugaca (krem / sir / spanać / spanać i sir / mleveno meso)",
     "ru": "Бугаца (крем / сыр / шпинат / шпинат и сыр / фарш)"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Sausage pie / ham &amp; cheese pie / potato pie",
     "el": "Λουκανικόπιτα / ζαμπονοκασερόπιτα / πατατόπιτα",
     "ro": "Plăcintă cu cârnați / șuncă &amp; brânză / cartofi",
     "bg": "Баница с наденица / шунка и кашкавал / картофи",
     "sr": "Pita sa kobasicom / šunkom i sirom / krompirom",
     "ru": "Пирог с колбаской / ветчиной и сыром / картофелем"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Croissant",
     "el": "Κρουασάν",
     "ro": "Croissant",
     "bg": "Кроасан",
     "sr": "Kroasan",
     "ru": "Круассан"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "WAVES Breakfast (full plate)",
     "el": "Πρωινό WAVES",
     "ro": "Mic dejun WAVES (platou complet)",
     "bg": "Закуска WAVES (пълна чиния)",
     "sr": "WAVES doručak (pun tanjir)",
     "ru": "Завтрак WAVES (полная тарелка)"
    },
    "p": "15"
   }
  ],
  "img": "/images/pies-800.jpg"
 },
 {
  "img": "/images/breakfast-eggs-800.jpg",
  "t": {
   "en": "Omelettes &amp; Eggs",
   "el": "Ομελέτες",
   "ro": "Omlete &amp; ouă",
   "bg": "Омлети и яйца",
   "sr": "Omleti i jaja",
   "ru": "Омлеты и яйца"
  },
  "s": {
   "en": "from 05:30",
   "el": "από τις 05:30",
   "ro": "de la 05:30",
   "bg": "от 05:30",
   "sr": "od 05:30",
   "ru": "с 05:30"
  },
  "items": [
   {
    "n": {
     "en": "Fried eggs plate",
     "el": "Αυγά μάτια",
     "ro": "Ochiuri",
     "bg": "Порция пържени яйца",
     "sr": "Jaja na oko",
     "ru": "Яичница-глазунья"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Omelette with sausage or bacon",
     "el": "Ομελέτα με λουκάνικο ή μπέικον",
     "ro": "Omletă cu cârnați sau bacon",
     "bg": "Омлет с наденица или бекон",
     "sr": "Omlet sa kobasicom ili slaninom",
     "ru": "Омлет с колбасками или беконом"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Vegetarian omelette",
     "el": "Ομελέτα λαχανικών",
     "ro": "Omletă de legume",
     "bg": "Вегетариански омлет",
     "sr": "Vegetarijanski omlet",
     "ru": "Вегетарианский омлет"
    },
    "p": "12"
   },
   {
    "n": {
     "en": "Scrambled eggs",
     "el": "Σκραμπλ αυγά",
     "ro": "Ouă scrambled",
     "bg": "Бъркани яйца",
     "sr": "Kajgana",
     "ru": "Скрэмбл"
    },
    "p": "13"
   }
  ]
 },
 {
  "t": {
   "en": "Savory Crepes",
   "el": "Αλμυρές κρέπες",
   "ro": "Clătite sărate",
   "bg": "Солени палачинки",
   "sr": "Slane palačinke",
   "ru": "Сытные блинчики"
  },
  "s": {
   "en": "handmade",
   "el": "χειροποίητες",
   "ro": "făcute în casă",
   "bg": "ръчно приготвени",
   "sr": "ručno pravljene",
   "ru": "готовим вручную"
  },
  "items": [
   {
    "n": {
     "en": "Vegetarian",
     "el": "Χορτοφαγική",
     "ro": "Vegetariană",
     "bg": "Вегетарианска",
     "sr": "Vegetarijanska",
     "ru": "Вегетарианский"
    },
    "d": {
     "en": "gouda, tomato, mushrooms, olives, pepper",
     "el": "γκούντα, ντομάτα, μανιτάρια, ελιές, πιπεριά",
     "ro": "gouda, roșii, ciuperci, măsline, ardei",
     "bg": "гауда, домати, гъби, маслини, чушки",
     "sr": "gauda, paradajz, pečurke, masline, paprika",
     "ru": "гауда, помидор, грибы, оливки, перец"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Light",
     "el": "Λάιτ",
     "ro": "Light",
     "bg": "Лайт",
     "sr": "Lagana",
     "ru": "Лайт"
    },
    "d": {
     "en": "gouda, turkey, tomato, corn, pepper",
     "el": "γκούντα, γαλοπούλα, ντομάτα, καλαμπόκι, πιπεριές",
     "ro": "gouda, curcan, roșii, porumb, ardei",
     "bg": "гауда, пуешко филе, домати, царевица, чушки",
     "sr": "gauda, ćuretina, paradajz, kukuruz, paprika",
     "ru": "гауда, индейка, помидор, кукуруза, перец"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Chef",
     "el": "Σεφ",
     "ro": "Chef",
     "bg": "Шеф",
     "sr": "Šef",
     "ru": "От шефа"
    },
    "d": {
     "en": "gouda, turkey, corn, egg, tomato, lettuce",
     "el": "γκούντα, γαλοπούλα, καλαμπόκι, αυγό, ντομάτα, μαρούλι",
     "ro": "gouda, curcan, porumb, ou, roșii, salată verde",
     "bg": "гауда, пуешко филе, царевица, яйце, домати, маруля",
     "sr": "gauda, ćuretina, kukuruz, jaje, paradajz, zelena salata",
     "ru": "гауда, индейка, кукуруза, яйцо, помидор, салат"
    },
    "p": "9"
   },
   {
    "n": {
     "en": "Caesar's",
     "el": "Καίσαρα",
     "ro": "Caesar",
     "bg": "Цезар",
     "sr": "Cezar",
     "ru": "Цезарь"
    },
    "d": {
     "en": "gouda, chicken, corn, parmesan",
     "el": "γκούντα, κοτόπουλο, καλαμπόκι, παρμεζάνα",
     "ro": "gouda, pui, porumb, parmezan",
     "bg": "гауда, пилешко, царевица, пармезан",
     "sr": "gauda, piletina, kukuruz, parmezan",
     "ru": "гауда, курица, кукуруза, пармезан"
    },
    "p": "9"
   },
   {
    "n": {
     "en": "Special",
     "el": "Σπέσιαλ",
     "ro": "Specială",
     "bg": "Специална",
     "sr": "Specijal",
     "ru": "Спешл"
    },
    "d": {
     "en": "gouda, ham, bacon, mushrooms, tomato, mayonnaise",
     "el": "γκούντα, πάριζα, μπέικον, μανιτάρια, ντομάτα, μαγιονέζα",
     "ro": "gouda, șuncă, bacon, ciuperci, roșii, maioneză",
     "bg": "гауда, шунка, бекон, гъби, домати, майонеза",
     "sr": "gauda, šunka, slanina, pečurke, paradajz, majonez",
     "ru": "гауда, ветчина, бекон, грибы, помидор, майонез"
    },
    "p": "9"
   },
   {
    "n": {
     "en": "Crepe with gyros",
     "el": "Κρέπα με γύρο",
     "ro": "Clătită cu gyros",
     "bg": "Палачинка с гирос",
     "sr": "Palačinka sa gyrosom",
     "ru": "Блинчик с гиросом"
    },
    "p": "10"
   },
   {
    "n": {
     "en": "Crepe with minced meat",
     "el": "Κρέπα με κιμά",
     "ro": "Clătită cu carne tocată",
     "bg": "Палачинка с кайма",
     "sr": "Palačinka sa mlevenim mesom",
     "ru": "Блинчик с мясным фаршем"
    },
    "p": "10"
   }
  ],
  "img": "/images/savory-crepe-800.jpg"
 },
 {
  "img": "/images/waffle-800.jpg",
  "t": {
   "en": "Sweet Crepes",
   "el": "Γλυκές κρέπες",
   "ro": "Clătite dulci",
   "bg": "Сладки палачинки",
   "sr": "Slatke palačinke",
   "ru": "Сладкие блинчики"
  },
  "s": {
   "en": "the sweet spot",
   "el": "για το τέλος",
   "ro": "partea dulce",
   "bg": "сладкото изкушение",
   "sr": "za sladokusce",
   "ru": "для сладкоежек"
  },
  "items": [
   {
    "n": {
     "en": "Banoffee",
     "el": "Banoffee",
     "ro": "Banoffee",
     "bg": "Banoffee",
     "sr": "Banoffee",
     "ru": "Banoffee"
    },
    "d": {
     "en": "merenda, biscuit, banana, caramel syrup",
     "el": "μερέντα, μπισκότο, μπανάνα, σιρόπι καραμέλας",
     "ro": "merenda, biscuiți, banană, sirop de caramel",
     "bg": "Merenda, бисквити, банан, карамелен сироп",
     "sr": "Merenda, keks, banana, karamel sirup",
     "ru": "Merenda, печенье, банан, карамельный сироп"
    },
    "p": "9"
   },
   {
    "n": {
     "en": "White",
     "el": "Λευκή",
     "ro": "Albă",
     "bg": "Бяла",
     "sr": "Bela",
     "ru": "Белый"
    },
    "d": {
     "en": "white praline, strawberry, biscuit",
     "el": "λευκή πραλίνα, φράουλα, μπισκότο",
     "ro": "pralină albă, căpșuni, biscuiți",
     "bg": "бял течен шоколад, ягоди, бисквити",
     "sr": "beli krem, jagoda, keks",
     "ru": "белое пралине, клубника, печенье"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Oreo Madness",
     "el": "Oreo Madness",
     "ro": "Oreo Madness",
     "bg": "Oreo Madness",
     "sr": "Oreo Madness",
     "ru": "Oreo Madness"
    },
    "d": {
     "en": "white praline, merenda, Oreo cookies",
     "el": "λευκή πραλίνα, μερέντα, μπισκότα Oreo",
     "ro": "pralină albă, merenda, biscuiți Oreo",
     "bg": "бял течен шоколад, Merenda, бисквити Oreo",
     "sr": "beli krem, Merenda, Oreo keks",
     "ru": "белое пралине, Merenda, печенье Oreo"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Caprice",
     "el": "Caprice",
     "ro": "Caprice",
     "bg": "Caprice",
     "sr": "Caprice",
     "ru": "Caprice"
    },
    "d": {
     "en": "merenda, white praline, Caprice",
     "el": "μερέντα, λευκή πραλίνα, Caprice",
     "ro": "merenda, pralină albă, Caprice",
     "bg": "Merenda, бял течен шоколад, Caprice",
     "sr": "Merenda, beli krem, Caprice",
     "ru": "Merenda, белое пралине, вафельки Caprice"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Snow White",
     "el": "Χιονάτη",
     "ro": "Albă ca Zăpada",
     "bg": "Снежанка",
     "sr": "Snežana",
     "ru": "Белоснежка"
    },
    "d": {
     "en": "white chocolate, coconut, banana",
     "el": "λευκή σοκολάτα, καρύδα, μπανάνα",
     "ro": "ciocolată albă, cocos, banană",
     "bg": "бял шоколад, кокос, банан",
     "sr": "bela čokolada, kokos, banana",
     "ru": "белый шоколад, кокос, банан"
    },
    "p": "8"
   },
   {
    "n": {
     "en": "Bueno",
     "el": "Bueno",
     "ro": "Bueno",
     "bg": "Bueno",
     "sr": "Bueno",
     "ru": "Bueno"
    },
    "d": {
     "en": "Bueno praline, biscuit",
     "el": "πραλίνα Bueno, μπισκότο",
     "ro": "pralină Bueno, biscuiți",
     "bg": "крем Bueno, бисквити",
     "sr": "Bueno krem, keks",
     "ru": "пралине Bueno, печенье"
    },
    "p": "7"
   },
   {
    "n": {
     "en": "Choco",
     "el": "Σοκο",
     "ro": "Ciocolată",
     "bg": "Шоко",
     "sr": "Čoko",
     "ru": "Шоко"
    },
    "d": {
     "en": "merenda, biscuit",
     "el": "μερέντα, μπισκότο",
     "ro": "merenda, biscuiți",
     "bg": "Merenda, бисквити",
     "sr": "Merenda, keks",
     "ru": "Merenda, печенье"
    },
    "p": "6"
   }
  ]
 },
 {
  "img": "/images/pancakes-kinder-800.jpg",
  "t": {
   "en": "Pancakes",
   "el": "Pancakes",
   "ro": "Pancakes",
   "bg": "Панкейки",
   "sr": "Američke palačinke",
   "ru": "Панкейки"
  },
  "s": {
   "en": "American style",
   "el": "αμερικάνικα",
   "ro": "americane",
   "bg": "в американски стил",
   "sr": "u američkom stilu",
   "ru": "по-американски"
  },
  "items": [
   {
    "n": {
     "en": "Banana, honey &amp; walnuts",
     "el": "Με μέλι, μπανάνα &amp; καρύδια",
     "ro": "Cu miere, banane și nuci",
     "bg": "Банан, мед и орехи",
     "sr": "Banana, med i orasi",
     "ru": "Банан, мёд и грецкие орехи"
    },
    "p": "10"
   },
   {
    "n": {
     "en": "Bueno",
     "el": "Bueno",
     "ro": "Bueno",
     "bg": "Bueno",
     "sr": "Bueno",
     "ru": "Bueno"
    },
    "p": "10"
   },
   {
    "n": {
     "en": "Oreo",
     "el": "Oreo",
     "ro": "Oreo",
     "bg": "Oreo",
     "sr": "Oreo",
     "ru": "Oreo"
    },
    "p": "10"
   },
   {
    "n": {
     "en": "White chocolate &amp; strawberries",
     "el": "Λευκή σοκολάτα &amp; φράουλες",
     "ro": "Ciocolată albă și căpșuni",
     "bg": "Бял шоколад и ягоди",
     "sr": "Bela čokolada i jagode",
     "ru": "Белый шоколад и клубника"
    },
    "p": "10"
   },
   {
    "n": {
     "en": "Biscuit",
     "el": "Μπισκότο",
     "ro": "Cu biscuiți",
     "bg": "Бисквита",
     "sr": "Keks",
     "ru": "Печенье"
    },
    "p": "10"
   },
   {
    "n": {
     "en": "Savory pancakes",
     "el": "Αλμυρά pancakes",
     "ro": "Pancakes sărate",
     "bg": "Солени панкейки",
     "sr": "Slane američke palačinke",
     "ru": "Сытные панкейки"
    },
    "p": "12"
   }
  ]
 },
 {
  "img": "/images/sundae-800.jpg",
  "t": {
   "en": "Sweets &amp; Ice Cream",
   "el": "Γλυκά &amp; παγωτά",
   "ro": "Dulciuri &amp; înghețată",
   "bg": "Десерти и сладолед",
   "sr": "Slatkiši i sladoled",
   "ru": "Десерты и мороженое"
  },
  "s": {
   "en": "Greek classics",
   "el": "τα κλασικά μας",
   "ro": "clasice grecești",
   "bg": "гръцка класика",
   "sr": "grčki klasici",
   "ru": "греческая классика"
  },
  "items": [
   {
    "n": {
     "en": "Baklava",
     "el": "Μπακλαβάς",
     "ro": "Baclava",
     "bg": "Баклава",
     "sr": "Baklava",
     "ru": "Пахлава"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Ekmek kantaifi",
     "el": "Εκμέκ κανταΐφι",
     "ro": "Ekmek kantaifi",
     "bg": "Екмек кадаиф",
     "sr": "Ekmek kadaif",
     "ru": "Экмек кантаифи"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Kantaifi",
     "el": "Κανταΐφι",
     "ro": "Kantaifi",
     "bg": "Кадаиф",
     "sr": "Kadaif",
     "ru": "Кантаифи"
    },
    "p": "2"
   },
   {
    "n": {
     "en": "Ice cream (per scoop)",
     "el": "Παγωτό (η μπάλα)",
     "ro": "Înghețată (cupa)",
     "bg": "Сладолед (топка)",
     "sr": "Sladoled (kugla)",
     "ru": "Мороженое (шарик)"
    },
    "d": {
     "en": "vanilla, chocolate, strawberry, fig, cookies, banana",
     "el": "βανίλια, σοκολάτα, φράουλα, σύκο, cookies, μπανάνα",
     "ro": "vanilie, ciocolată, căpșuni, smochine, cookies, banană",
     "bg": "ванилия, шоколад, ягода, смокиня, бисквити, банан",
     "sr": "vanila, čokolada, jagoda, smokva, keks, banana",
     "ru": "ваниль, шоколад, клубника, инжир, печенье, банан"
    },
    "p": "1.50"
   }
  ]
 },
 {
  "img": "/images/coolers-800.jpg",
  "t": {
   "en": "Coffee &amp; Drinks",
   "el": "Καφέδες &amp; ροφήματα",
   "ro": "Cafea &amp; băuturi",
   "bg": "Кафе и напитки",
   "sr": "Kafa i pića",
   "ru": "Кофе и напитки"
  },
  "s": {
   "en": "from dawn till dusk",
   "el": "από το πρωί",
   "ro": "din zori",
   "bg": "от зори до здрач",
   "sr": "od zore do sumraka",
   "ru": "с рассвета до заката"
  },
  "items": [
   {
    "hdr": {
     "en": "Coffee",
     "el": "Καφέδες",
     "ro": "Cafea",
     "bg": "Кафе",
     "sr": "Kafa",
     "ru": "Кофе"
    }
   },
   {
    "n": {
     "en": "Espresso / ristretto / macchiato",
     "el": "Espresso / ristretto / macchiato",
     "ro": "Espresso / ristretto / macchiato",
     "bg": "Еспресо / ристрето / макиато",
     "sr": "Espresso / ristretto / macchiato",
     "ru": "Эспрессо / ристретто / макиато"
    },
    "p": "2.50"
   },
   {
    "n": {
     "en": "Espresso double / lungo",
     "el": "Espresso διπλός / lungo",
     "ro": "Espresso dublu / lungo",
     "bg": "Еспресо двойно / лунго",
     "sr": "Dupli espresso / lungo",
     "ru": "Двойной эспрессо / лунго"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Americano",
     "el": "Americano",
     "ro": "Americano",
     "bg": "Американо",
     "sr": "Americano",
     "ru": "Американо"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Cappuccino / latte",
     "el": "Cappuccino / latte",
     "ro": "Cappuccino / latte",
     "bg": "Капучино / лате",
     "sr": "Cappuccino / latte",
     "ru": "Капучино / латте"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Freddo espresso / freddo cappuccino",
     "el": "Freddo espresso / freddo cappuccino",
     "ro": "Freddo espresso / freddo cappuccino",
     "bg": "Freddo еспресо / freddo капучино",
     "sr": "Freddo espresso / freddo cappuccino",
     "ru": "Фреддо эспрессо / фреддо капучино"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Nes / frappe / filter coffee",
     "el": "Νες / φραπέ / γαλλικός",
     "ro": "Nes / frappe / cafea la filtru",
     "bg": "Нес / фрапе / филтърно кафе",
     "sr": "Nes / frape / filter kafa",
     "ru": "Нескафе / фраппе / фильтр-кофе"
    },
    "p": "2.50"
   },
   {
    "n": {
     "en": "Greek coffee",
     "el": "Ελληνικός",
     "ro": "Cafea grecească",
     "bg": "Гръцко кафе",
     "sr": "Grčka kafa",
     "ru": "Кофе по-гречески"
    },
    "p": "1.50"
   },
   {
    "n": {
     "en": "Greek coffee double",
     "el": "Ελληνικός διπλός",
     "ro": "Cafea grecească dublă",
     "bg": "Двойно гръцко кафе",
     "sr": "Dupla grčka kafa",
     "ru": "Двойной кофе по-гречески"
    },
    "p": "2"
   },
   {
    "hdr": {
     "en": "Beverages",
     "el": "Ροφήματα",
     "ro": "Băuturi calde &amp; reci",
     "bg": "Напитки",
     "sr": "Napici",
     "ru": "Напитки"
    }
   },
   {
    "n": {
     "en": "Hot chocolate / cold chocolate",
     "el": "Ζεστή / κρύα σοκολάτα",
     "ro": "Ciocolată caldă / rece",
     "bg": "Топъл шоколад / студен шоколад",
     "sr": "Topla čokolada / hladna čokolada",
     "ru": "Горячий шоколад / холодный шоколад"
    },
    "p": "3"
   },
   {
    "n": {
     "en": "Hot tea",
     "el": "Ζεστό τσάι",
     "ro": "Ceai cald",
     "bg": "Горещ чай",
     "sr": "Topli čaj",
     "ru": "Горячий чай"
    },
    "p": "2"
   },
   {
    "n": {
     "en": "Granita (strawberry, lemon)",
     "el": "Γρανίτα (φράουλα, λεμόνι)",
     "ro": "Granita (căpșuni, lămâie)",
     "bg": "Гранита (ягода, лимон)",
     "sr": "Granita (jagoda, limun)",
     "ru": "Гранита (клубника, лимон)"
    },
    "p": "3.50"
   },
   {
    "n": {
     "en": "Milkshake",
     "el": "Μιλκσέικ",
     "ro": "Milkshake",
     "bg": "Милкшейк",
     "sr": "Milkshake",
     "ru": "Молочный коктейль"
    },
    "p": "3.50"
   },
   {
    "n": {
     "en": "Juice (cherry, orange, peach, apple, exotic)",
     "el": "Χυμός (βύσσινο, πορτοκάλι, ροδάκινο, μήλο, εξωτικά)",
     "ro": "Suc (vișine, portocale, piersici, măr, exotic)",
     "bg": "Сок (вишна, портокал, праскова, ябълка, екзотик)",
     "sr": "Sok (višnja, pomorandža, breskva, jabuka, egzotično voće)",
     "ru": "Сок (вишня, апельсин, персик, яблоко, экзотик)"
    },
    "p": "3"
   },
   {
    "hdr": {
     "en": "Refreshments",
     "el": "Αναψυκτικά",
     "ro": "Răcoritoare",
     "bg": "Безалкохолни",
     "sr": "Osvežavajuća pića",
     "ru": "Прохладительные напитки"
    }
   },
   {
    "n": {
     "en": "Coca-Cola / Fanta / Sprite / Schweppes / Fuze Tea 330ml",
     "el": "Coca-Cola / Fanta / Sprite / Schweppes / Fuze Tea 330ml",
     "ro": "Coca-Cola / Fanta / Sprite / Schweppes / Fuze Tea 330ml",
     "bg": "Coca-Cola / Fanta / Sprite / Schweppes / Fuze Tea 330ml",
     "sr": "Coca-Cola / Fanta / Sprite / Schweppes / Fuze Tea 330ml",
     "ru": "Coca-Cola / Fanta / Sprite / Schweppes / Fuze Tea 330 мл"
    },
    "p": "2"
   },
   {
    "n": {
     "en": "Coca-Cola / Fanta 500ml",
     "el": "Coca-Cola / Fanta 500ml",
     "ro": "Coca-Cola / Fanta 500ml",
     "bg": "Coca-Cola / Fanta 500ml",
     "sr": "Coca-Cola / Fanta 500ml",
     "ru": "Coca-Cola / Fanta 500 мл"
    },
    "p": "2.50"
   },
   {
    "n": {
     "en": "Water 500ml",
     "el": "Νερό 500ml",
     "ro": "Apă 500ml",
     "bg": "Вода 500ml",
     "sr": "Voda 500ml",
     "ru": "Вода 500 мл"
    },
    "p": "0.50"
   },
   {
    "n": {
     "en": "Water 1.5L",
     "el": "Νερό 1,5lt",
     "ro": "Apă 1,5L",
     "bg": "Вода 1.5L",
     "sr": "Voda 1.5L",
     "ru": "Вода 1,5 л"
    },
    "p": "1"
   }
  ]
 }
];

function renderMenu(lang){
  const root = document.getElementById('fullmenu');
  if(!root) return;
  root.innerHTML = MENU.map(cat=>{
    const img = cat.img ? `<div class="mc-img">${pictureFor(cat.img, 'alt="" loading="lazy"')}</div>` : '';
    const rows = cat.items.map(it=>{
      if(it.hdr) return `<li class="fm-hdr">${it.hdr[lang]||it.hdr.en}</li>`;
      const nm = it.n[lang]||it.n.en;
      const d = it.d ? `<div class="fm-desc">${it.d[lang]||it.d.en}</div>` : '';
      return `<li><div class="fm-row"><span class="nm">${nm}</span><span class="ld"></span><span class="pr">${it.p} €</span></div>${d}</li>`;
    }).join('');
    return `<div class="fm-card">${img}<h3><button type="button" class="fm-t" aria-expanded="true">${cat.t[lang]||cat.t.en}</button></h3><span class="script">${cat.s[lang]||cat.s.en}</span><ul>${rows}</ul></div>`;
  }).join('');
}

const LPATH = {en:'/', el:'/el/', ro:'/ro/', bg:'/bg/', sr:'/sr/', ru:'/ru/'};
function setLang(lang){
  renderMenu(lang);
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(dict[k] !== undefined) el.innerHTML = dict[k];
  });
  const items = dict._strip;
  const seq = items.map(t=>`<span>${t}</span><span class="sep">✦</span>`).join('');
  document.getElementById('strip-track').innerHTML = seq + seq;
  document.documentElement.lang = lang === 'sr' ? 'sr-Latn' : lang;
  document.title = dict._title;
  document.getElementById('meta-desc').setAttribute('content', dict._desc);
  document.querySelectorAll('.lang-sw button').forEach(b=>{
    const on = b.dataset.lang===lang;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', String(on));
  });
  try{ localStorage.setItem('wave-lang', lang); }catch(e){}
}
document.querySelectorAll('.lang-sw button').forEach(b=>b.addEventListener('click',()=>{
  const l = b.dataset.lang;
  try{ localStorage.setItem('wave-lang', l); }catch(e){}
  if(location.protocol === 'http:' || location.protocol === 'https:'){
    location.href = LPATH[l] || '/';
  } else {
    setLang(l);
  }
}));
let saved = null;
try{ saved = localStorage.getItem('wave-lang'); }catch(e){}
const FORCE = document.documentElement.getAttribute('data-lang') || null;
setLang(FORCE || (saved && I18N[saved] ? saved : 'en'));

/* ---------------- nav & reveal ---------------- */
const nav=document.getElementById('nav');
const burgerBtn=document.getElementById('burger');
burgerBtn.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  burgerBtn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burgerBtn.setAttribute('aria-expanded','false')}));
/* small screens: EN/RO stay in the bar; the other languages live in the burger panel (.lang-sw-more) */
/* mobile: menu categories collapse into an accordion (semantic buttons, keyboard-operable) */
function syncMenuAria(){
  const mob = matchMedia('(max-width:640px)').matches;
  document.querySelectorAll('#fullmenu .fm-t').forEach(b=>{
    const card = b.closest('.fm-card');
    b.setAttribute('aria-expanded', String(!mob || card.classList.contains('open')));
  });
}
document.getElementById('fullmenu').addEventListener('click', e=>{
  const b = e.target.closest('.fm-t');
  if(!b || !matchMedia('(max-width:640px)').matches) return;
  const open = b.closest('.fm-card').classList.toggle('open');
  b.setAttribute('aria-expanded', String(open));
});
const mqMenu = matchMedia('(max-width:640px)');
if(mqMenu.addEventListener) mqMenu.addEventListener('change', syncMenuAria); else mqMenu.addListener(syncMenuAria);
syncMenuAria();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
