import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Cruz",
  shortName: "Clínica Hispana",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa, aceptamos pacientes sin seguro. Medicina familiar, urgencias menores, laboratorio y más.",
  baseUrl: "https://www.clinicahispanacruz.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "7640 Airline Dr # D",
  city: "Houston",
  state: "TX",
  zip: "77037",
  phone: "+12817412157",
  phoneFormatted: "+1 (281) 741-2157",
  // WhatsApp — constante dedicada aunque hoy coincida con `phone`: los botones
  // de chat no deben depender del número de llamadas (CallRail swap.js solo
  // reescribe el principal visible; wa.me nunca muestra número en pantalla).
  whatsapp: "12817412157", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(281) 741-2157",
  email: "clinic7640@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/Clinica+Hispana+Cruz+7640+Airline+Dr+Houston+TX+77037",
  googleMapsEmbed: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=place_id:ChIJA73gaPq3QIYRlhsV5i4qsAk&zoom=17`,
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJA73gaPq3QIYRlhsV5i4qsAk",
  placeId: "ChIJA73gaPq3QIYRlhsV5i4qsAk",
  coordinates: {
    lat: 29.8723458,
    lng: -95.3845513,
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/clinicahispanacruz/",
  instagram: "https://www.instagram.com/clinicahispanacruz/",
  google: "https://g.page/r/CZYbFeYuKrAJEBM",
  yelp: "https://www.yelp.com/biz/clinica-hispana-cruz-houston",
  tiktok: "https://www.tiktok.com/@clinica.hispana.c",
};

// Google Reviews fallback (la Places API New provee los datos en vivo).
// Valores verificados contra la web en producción (Places) el 8 oct 2026.
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 1082,
  averageRating: 5.0,
  placeId: "ChIJA73gaPq3QIYRlhsV5i4qsAk",
};

// Dedicated CallRail tracking number for the conquesting landing only.
// Used in /landing/comparacion-clinicas-houston via a route-specific layout.
// TODO(randy): sustituir por el número CallRail dedicado cuando exista; por ahora usa el principal.
export const CONQUESTING_PHONE = {
  phone: "+12817412157",
  phoneFormatted: "+1 (281) 741-2157",
} as const;

export const SERVICES: Service[] = [
  {
    "id": "condiciones-cronicas",
    "slug": "condiciones-cronicas",
    "title": "Control de Diabetes, Hipertensión y Colesterol",
    "titleEn": "Diabetes, Hypertension & Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    "descriptionEn": "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    "longDescription": "Diabetes, presión alta, colesterol y triglicéridos: en la clínica de Airline Drive juntamos el seguimiento de estas tres condiciones en una misma visita de control. El equipo médico revisa tus números, ajusta el tratamiento cuando hace falta y te explica en español qué significa cada valor para tu rutina de comida, trabajo y descanso.\n\n**¿Qué se revisa en una visita de control?**\n- Tu glucosa y los análisis de sangre que el equipo médico indique según tu caso\n- Tu presión arterial tomada en reposo, comparada con las lecturas que anotas en casa\n- Las grasas de tu sangre, separando el colesterol bueno del malo y los triglicéridos\n- Tu peso, para ver si el plan de alimentación va funcionando\n- La lista completa de pastillas que tomas hoy, incluidos tés, remedios caseros y suplementos\n\n**¿Cómo llegar preparado a tus análisis?**\n1. Si te piden la glucosa o los lípidos en ayunas, no comas en las 8 a 12 horas previas; el agua sí está permitida.\n2. Si usas insulina o pastillas para el azúcar, pregunta antes qué hacer con la dosis de esa mañana para no tener una baja de azúcar.\n3. Lleva los frascos de tus medicinas o una foto clara de cada etiqueta.\n4. Si mides tu azúcar o tu presión en casa, trae el glucómetro o la libreta con las lecturas de las últimas semanas.\n\n**¿Por qué no basta con sentirte bien?**\nLa presión alta y el azúcar elevada casi nunca avisan al principio. En silencio, años de números altos van lastimando las arterias, la retina, los riñones y la sensibilidad de tus pies. Medir con regularidad permite corregir el rumbo antes de que aparezcan complicaciones.\n\n**¿Con qué plan sales de la consulta?**\n- Tus metas de presión, glucosa y colesterol escritas en una hoja que te llevas\n- Ajustes en las dosis cuando tus números lo piden, explicados uno por uno\n- Ideas para tu plato usando la comida que ya cocinas en casa, sin dietas imposibles\n- Una forma de moverte que quepa en tu horario de trabajo\n- Aviso en cuanto lleguen tus resultados de laboratorio y, si algún valor lo requiere, la referencia a un especialista\n\n**¿Cada cuánto conviene volver?**\nPor lo general, cada 3 a 6 meses, según qué tan estable esté tu condición. Dolor de pecho, falta de aire, un lado del cuerpo débil o la boca torcida son una emergencia: llama al 911 sin esperar al control. Pasa con tu libreta de lecturas a la clínica de Airline Drive cualquier día de la semana y te atendemos por orden de llegada.",
    "longDescriptionEn": "Diabetes, high blood pressure, cholesterol and triglycerides: the Airline Drive clinic brings follow-up for all three into a single checkup visit. The medical team checks your numbers, adjusts treatment when needed and explains, in Spanish or English, what each value means for your meals, work and sleep.\n\n**Which numbers are reviewed each time you come back?**\n- Your blood sugar and any other blood work the medical team orders for your case\n- Your blood pressure taken at rest and compared with the readings you log at home\n- The fats in your blood, with good and bad cholesterol and triglycerides read separately\n- Your weight, to see whether the eating plan is working\n- The full list of pills you take today, including teas, home remedies and supplements\n\n**How do you get ready for your lab work?**\n1. When the order says fasting, your last meal should be the night before, 8 to 12 hours ahead; plain water won't affect the sample.\n2. If you use insulin or diabetes pills, ask ahead what to do with that morning's dose so your sugar doesn't drop too low.\n3. Bring your medicine bottles or a clear photo of every label.\n4. If you check your sugar or pressure at home, bring the meter or the notebook with the last few weeks of readings.\n\n**Why isn't feeling fine enough?**\nHigh blood pressure and high blood sugar rarely give warning signs early on. Meanwhile they can slowly harm the heart, kidneys, eyesight and the nerves in your feet. Regular measurements let you correct course before complications show up.\n\n**What plan do you leave with?**\n- Written goals for your pressure, glucose and cholesterol\n- Dose adjustments when your numbers call for them, explained one by one\n- Ideas for your plate built around the food you already cook at home\n- A way to stay active that fits your work schedule\n- A call as soon as your lab results arrive and, if a value calls for it, a referral to a specialist\n\n**How often should you come back?**\nUsually every 3 to 6 months, depending on how stable your condition is. Chest pain, shortness of breath, weakness on one side or a drooping face are emergencies: call 911 instead of waiting for your checkup. Bring your reading log to the Airline Drive clinic any day of the week; patients are seen in order of arrival.",
    "icon": "Activity",
    "image": "/images/services/condiciones-cronicas.webp",
    "category": "medicina-general",
    "keywords": [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston"
    ],
    "keywordsEn": [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston"
    ],
    "features": [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos"
    ],
    "featuresEn": [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan"
    ],
    "highlighted": true,
    "order": 1
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    "descriptionEn": "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    "longDescription": "Esa glándula con forma de mariposa, al frente de tu cuello, decide qué tan rápido gasta energía todo tu cuerpo. Si trabaja de menos (hipotiroidismo) o de más (hipertiroidismo), lo notas en tu energía, tu peso, tu piel y tu ánimo. Aquí se revisa con análisis de sangre y, si hace falta, se inicia y se ajusta el tratamiento.\n\n**¿Qué señales hacen pensar en la tiroides?**\n- Cansancio que no se quita aunque duermas bien\n- Subir o bajar de peso sin cambiar lo que comes\n- Cabello que se cae más de lo normal, piel reseca o uñas quebradizas\n- Andar con suéter cuando en la casa nadie tiene frío, o sudar con el aire prendido\n- Corazón acelerado, temblor en las manos o nerviosismo\n- Tristeza, lentitud para pensar o cambios en la menstruación\n\n**¿Qué mide el análisis?**\nEl punto de partida es la TSH, una señal que manda el cerebro para pedirle más o menos trabajo a la glándula. Cuando la TSH sale fuera de rango, el equipo médico puede pedir también T4 y T3 para saber cuánta hormona está produciendo tu glándula. Con esos valores juntos se distingue un hipotiroidismo de un hipertiroidismo.\n\n**¿Cómo prepararte para la toma de sangre?**\n1. Avisa si tomas biotina o suplementos para el cabello y las uñas: pueden alterar el resultado y a veces conviene suspenderlos unos días antes, siempre con indicación médica.\n2. Si ya tienes tratamiento tiroideo, consulta si esa mañana tu pastilla va antes o después del piquete.\n3. Guarda en el celular fotos de análisis viejos de TSH, aunque sean de otro país: sirven para comparar.\n\n**¿Cómo sigue el tratamiento?**\n- Si la tiroides está lenta, se suele indicar una pastilla diaria que repone la hormona\n- La dosis se ajusta según tus análisis de control, que se repiten unas semanas después de cada cambio\n- Te explicamos cómo tomarla: con el estómago vacío y separada del café, el calcio y el hierro\n- Si la tiroides está acelerada, aparece un bulto en el cuello o los valores lo requieren, se orienta la referencia a un especialista\n\nAvisamos en cuanto lleguen tus resultados. Si tu cansancio no se explica, pasa por la clínica de Airline Drive cualquier día entre 9 AM y 9 PM y empieza por una TSH.",
    "longDescriptionEn": "The thyroid is a small gland in your neck that sets the pace of your metabolism. When it runs slow (hypothyroidism) or too fast (hyperthyroidism), you feel it in your energy, weight, skin and mood. Here it is checked with blood work and, when needed, treatment is started and fine-tuned.\n\n**Which signs point to the thyroid?**\n- Fatigue that doesn't lift even after a good night's sleep\n- The scale moving up or down while your meals stay the same\n- Hair falling out more than usual, dry skin or brittle nails\n- Wearing a sweater when nobody else at home is chilly, or sweating with the AC running\n- A racing heart, shaky hands or feeling on edge\n- Low mood, foggy thinking or changes in your period\n\n**What does the blood test measure?**\nThe starting point is TSH, a signal from the brain asking the gland to speed up or slow down. When TSH comes back out of range, the medical team may also order T4 and T3 to see how much hormone your gland is actually making. Together, those values separate an underactive thyroid from an overactive one.\n\n**How should you prepare for the blood draw?**\n1. Mention it if you take biotin or hair-and-nail supplements: they can skew the result, and pausing them for a few days beforehand is sometimes advised by the medical team.\n2. If you're already on thyroid treatment, check whether that morning's pill goes before or after the needle stick.\n3. Keep photos of older TSH results on your phone, even from another country: they help with comparison.\n\n**How does treatment continue?**\n- An underactive thyroid is usually treated with a daily pill that replaces the missing hormone\n- The dose is adjusted based on follow-up blood work, repeated a few weeks after each change\n- Timing matters: swallow it before breakfast with water, keeping your morning coffee and any calcium or iron tablets for later\n- If the thyroid is overactive, a lump appears in the neck or the numbers call for it, a referral to a specialist is arranged\n\nYou'll hear from us as soon as your results arrive. If your tiredness has no clear reason, stop by the Airline Drive clinic any day between 9 AM and 9 PM and start with a TSH.",
    "icon": "Activity",
    "image": "/images/services/tiroides.webp",
    "category": "medicina-general",
    "keywords": [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston"
    ],
    "keywordsEn": [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston"
    ],
    "features": [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español"
    ],
    "featuresEn": [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish"
    ],
    "highlighted": false,
    "order": 2
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "Las alergias aparecen cuando tu cuerpo reacciona de más ante algo inofensivo, como el polen, el polvo, la humedad o las mascotas. En la clínica el equipo médico busca qué las dispara y arma un tratamiento para que vuelvas a respirar, dormir y trabajar sin estornudos ni comezón constante.\n\n**¿Qué molestias atendemos?**\n- Rinitis: nariz que gotea o se tapa, estornudos en cadena y picazón en el paladar\n- Ojos rojos, llorosos o que pican\n- Ronchas, comezón o piel enrojecida después de comer algo o de usar un producto nuevo\n- Tos seca o carraspera que empeora en ciertas épocas del año\n- Congestión que dura semanas y no se parece a un resfriado común\n\n**¿Qué pasa en la consulta?**\n1. El equipo médico te pregunta cuándo empezaron los síntomas, en qué lugar empeoran y qué cambió en tu casa o tu trabajo.\n2. Revisa tu nariz, tus ojos, tu garganta, tus pulmones y la piel afectada.\n3. Con esa información identifica los desencadenantes más probables.\n4. Sales con antihistamínicos o el tratamiento que se indique; los medicamentos de la consulta se entregan en la clínica.\n5. Si tu caso necesita pruebas de alergia más detalladas, se orienta la referencia a un especialista.\n\n**¿Por qué en Houston se sufren tanto?**\nEl clima húmedo y templado deja crecer polen casi todo el año: árboles como el roble en primavera, pastos en verano y ambrosía en otoño. Además, la humedad favorece el moho dentro de las casas. Por eso muchas personas sienten síntomas en temporadas que antes no les afectaban.\n\n**¿Qué puedes cambiar en casa?**\n- Mantén las ventanas cerradas en los días de mucho polen y usa el aire acondicionado\n- Báñate y cámbiate de ropa al llegar si trabajas al aire libre\n- Lava sábanas y fundas con agua caliente cada semana\n- Revisa manchas de humedad en baños y debajo de lavabos\n\n**¿Cuándo es una emergencia?**\nSi tras un piquete de hormiga brava, un marisco o una pastilla nueva se te hincha la cara o se te cierra la garganta, no esperes a ver si se pasa: marca al 911. Para las alergias del día a día, apunta en tu celular cuándo te dan los síntomas y trae esas notas a la clínica de Airline Drive.",
    "longDescriptionEn": "Allergies happen when your body overreacts to something harmless, like pollen, dust, dampness or pets. At the clinic the medical team looks for what sets them off and builds a treatment plan so you can breathe, sleep and work again without constant sneezing or itching.\n\n**Which symptoms do we treat?**\n- Rhinitis: a runny or stuffy nose, sneezing fits and an itchy palate\n- Red, watery or itchy eyes\n- Hives or itching that show up after a certain food or a new product\n- A dry cough or throat clearing that gets worse at certain times of year\n- Congestion that lasts for weeks and doesn't feel like an ordinary cold\n\n**What happens during the visit?**\n1. The medical team asks when your symptoms started, where they get worse and what changed at home or at work.\n2. They examine your nose, eyes, throat, lungs and any affected skin.\n3. From that, they pinpoint the most likely triggers.\n4. You walk out with antihistamines or whatever else is chosen for your allergy, supplied right at the front desk.\n5. If your case needs more detailed allergy testing, a referral to a specialist is arranged.\n\n**Why are allergies so rough in Houston?**\nThe warm, humid climate lets pollen grow almost all year: trees such as oak in spring, grasses in summer and ragweed in the fall. Humidity also feeds indoor mold. That's why many people develop symptoms in seasons that never bothered them before.\n\n**What can you change at home?**\n- Keep windows closed on high-pollen days and run the air conditioning\n- Shower and change clothes when you get home if you work outdoors\n- Wash sheets and pillowcases in hot water every week\n- Check for damp spots in bathrooms and under sinks\n\n**When is it an emergency?**\nIf a fire ant sting, shellfish or a new pill makes your face puff up or your throat feel tight, don't wait to see if it passes: dial 911. For everyday allergies, jot down on your phone when the symptoms hit and bring those notes to the Airline Drive clinic.",
    "icon": "Wind",
    "image": "/images/services/alergias.webp",
    "category": "medicina-general",
    "keywords": [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston"
    ],
    "keywordsEn": [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston"
    ],
    "features": [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español"
    ],
    "featuresEn": [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 3
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "Fiebre, tos, dolor de garganta y cuerpo cortado pueden venir de la influenza, del COVID-19 o de otra infección respiratoria. Aquí se hacen pruebas rápidas de flu y COVID con resultado en minutos, durante la misma visita, para que el equipo médico elija el tratamiento correcto desde el principio.\n\n**¿Qué se revisa cuando llegas con síntomas?**\n- Temperatura, oxigenación, pulso y presión\n- Garganta, oídos y pulmones con el estetoscopio\n- Prueba rápida de influenza A y B con un hisopo nasal\n- Prueba de COVID-19 con la misma toma o una muestra aparte\n- Cuántos días llevas enfermo y quién más en casa tiene síntomas\n\n**¿Por qué conviene hacerte la prueba pronto?**\nCon la influenza el reloj cuenta: el antiviral rinde más si arranca poco después de que aparece la fiebre. Saber si es flu, COVID u otra cosa también evita tomar antibióticos que no sirven contra los virus y te ayuda a decidir cómo cuidar a tu familia.\n\n**¿Qué tratamos además de flu y COVID?**\n- Bronquitis, esa tos con flema que sigue semanas después de la gripa\n- Infecciones de garganta, incluida la faringitis por estreptococo\n- Congestión de senos nasales con dolor en la cara\n- Molestias de oído que acompañan a la gripe\n\n**¿Cómo cuidarte en casa después de la consulta?**\n1. Toma los medicamentos que te entreguen en la clínica tal como se indicaron, sin saltarte dosis.\n2. Bebe líquidos con frecuencia: agua, caldos o suero oral.\n3. Descansa y usa cubrebocas si convives con personas mayores, bebés o alguien enfermo.\n4. Regresa al trabajo o a la escuela cuando lleves un día entero sin fiebre sin usar medicina para bajarla y te sientas mejor.\n\n**¿Cuándo ir a urgencias?**\nFalta de aire, dolor o presión en el pecho, labios morados, confusión o fiebre que vuelve con más fuerza después de mejorar son señales de alarma: llama al 911 o ve a la sala de emergencias. Para todo lo demás, la clínica de Airline Drive hace las pruebas rápidas de flu y COVID todos los días, también por la noche hasta las 9 PM.",
    "longDescriptionEn": "Fever, cough, a sore throat and body aches can come from the flu, COVID-19 or another respiratory infection. Here rapid flu and COVID tests give a result in minutes, during the same visit, so the medical team can choose the right treatment from the start.\n\n**What gets checked when you come in sick?**\n- Temperature, oxygen level, pulse and blood pressure\n- Throat, ears and lungs with a stethoscope\n- A quick nose swab that screens for influenza types A and B\n- A COVID-19 test from the same swab or a separate sample\n- How many days you've been sick and who else at home has symptoms\n\n**Why test early?**\nWith influenza the clock matters: an antiviral does more when it starts soon after the fever shows up. Knowing whether it's flu, COVID or something else also avoids antibiotics that do nothing against viruses and helps you decide how to protect your family.\n\n**What else do we treat besides flu and COVID?**\n- Bronchitis and a cough that lingers after a cold\n- Throat infections, including strep throat\n- Sinus congestion with facial pain\n- Ear pain that comes along with the flu\n\n**How do you take care of yourself at home afterward?**\n1. Take the medicines handed to you at the clinic exactly as directed, without skipping doses.\n2. Drink fluids often: water, broth or oral rehydration solution.\n3. Rest, and wear a mask if you live with older adults, babies or someone who is ill.\n4. Go back to work or school once you've gone a full day without fever, without fever-reducing medicine, and you feel better.\n\n**When should you go to the ER?**\nShortness of breath, chest pain or pressure, bluish lips, confusion or a fever that comes back stronger after improving are warning signs: call 911 or go to the emergency room. For everything else, the Airline Drive clinic runs rapid flu and COVID tests every day, evenings included, until 9 PM.",
    "icon": "Wind",
    "image": "/images/services/enfermedades-respiratorias.webp",
    "category": "medicina-general",
    "keywords": [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston"
    ],
    "keywordsEn": [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston"
    ],
    "features": [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "shortTitle": "Examen Físico",
    "description": "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles.",
    "descriptionEn": "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing.",
    "longDescription": "Antes del primer entrenamiento de futbol o del registro en HISD, Aldine ISD o un campamento de verano, casi siempre te piden una hoja de examen físico firmada. En esta clínica el equipo médico hace la revisión completa y llena el formulario que trae la familia, para que tu hijo o tu hija pueda empezar el ciclo escolar o la temporada deportiva sin pendientes.\n\n**¿Qué llevar el día del examen?**\n- El formulario de la escuela, el equipo o el campamento, con la parte del historial llenada por el padre, madre o tutor\n- Los lentes o lentes de contacto, si los usa\n- Su inhalador de rescate o su EpiPen, si los usa, para revisarlos y anotarlos en la hoja\n- Ropa cómoda y tenis, por si hay que revisar postura o movimiento\n- Una identificación del adulto que lo acompaña\n\n**¿Qué incluye la revisión?**\n1. Peso, estatura y presión arterial.\n2. Pulso y escucha del corazón y los pulmones.\n3. Prueba de visión con la tabla de letras y revisión de la audición.\n4. Revisión de columna, articulaciones y fuerza, importante en deportes de contacto.\n5. Repaso del historial: asma, alergias, golpes en la cabeza o lesiones anteriores.\n\n**¿Qué antecedentes debes mencionar sí o sí?**\nDesmayos o dolor de pecho al hacer ejercicio, falta de aire fuera de lo normal, latidos muy rápidos o algún familiar que haya muerto de forma súbita antes de los 50 años. Son datos que se revisan con cuidado antes de autorizar un deporte, y si hace falta se orienta la referencia a un especialista.\n\n**¿Qué te llevas al terminar?**\n- El formulario firmado y completo, listo para entregar\n- Recomendaciones de sueño, hidratación y alimentación para la temporada\n- Indicaciones si se detecta algo que conviene vigilar, como presión alta o problemas de visión\n\n**¿Cuándo conviene venir?**\nLas semanas antes del regreso a clases y de las pruebas para equipos suelen ser las de más movimiento. Si puedes, ven unas semanas antes de la fecha de entrega del formulario. La clínica está en Airline Drive y abre incluso sábados y domingos, así que puedes traer a tus hijos sin que falten a clases.",
    "longDescriptionEn": "Many schools, leagues and camps ask for a physical before kids and teens can sign up. At this clinic the medical team does the full exam and fills out the form your family brings, so your son or daughter can start the school year or the sports season with nothing left pending.\n\n**What should you bring on exam day?**\n- The school, team or camp form, with the history section completed by a parent or guardian\n- Glasses or contact lenses, if your child wears them\n- A list of medicines they take, including an inhaler for asthma\n- Comfortable clothes and sneakers in case posture or movement is checked\n- A photo ID for the adult who comes along\n\n**What does the exam cover?**\n1. Weight, height and blood pressure.\n2. Pulse, plus listening to the heart and lungs.\n3. An eye chart vision check and a hearing screen.\n4. Spine, joints and strength, which matter for contact sports.\n5. A history review: asthma, allergies, head injuries or past sports injuries.\n\n**Which history must you mention?**\nFainting or chest pain during exercise, unusual shortness of breath, a racing heartbeat, or a relative who died suddenly before age 50. These are reviewed carefully before clearing a child for sports, and if needed a referral to a specialist is arranged.\n\n**What do you leave with?**\n- The completed, signed form, ready to turn in\n- Tips on sleep, hydration and eating for the season\n- Guidance if something worth watching turns up, such as high blood pressure or vision problems\n\n**When is the best time to come?**\nThe weeks before back-to-school and team tryouts are the busiest. If you can, come a few weeks before the form is due. The clinic is on Airline Drive and is open on Saturdays and Sundays too, so your kids don't have to miss class.",
    "icon": "Clipboard",
    "image": "/images/services/examen-fisico-escolar.webp",
    "category": "examenes",
    "keywords": [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston"
    ],
    "keywordsEn": [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston"
    ],
    "features": [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español"
    ],
    "featuresEn": [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 5
  },
  {
    "id": "ginecologia",
    "slug": "ginecologia",
    "title": "Atención Ginecológica: Papanicolaou y Cultivos",
    "titleEn": "Gynecology Care: Pap Smear & Cultures",
    "shortTitle": "Ginecología",
    "description": "Atención ginecológica en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    "descriptionEn": "Gynecology care in Houston, TX: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing.",
    "longDescription": "La consulta ginecológica de la clínica cubre tu chequeo de rutina y también esas molestias íntimas que da pena comentar. Te atiende el equipo médico en un consultorio privado, en español, con Papanicolaou, cultivos vaginales y tratamiento de infecciones, sin tener que esperar semanas por una cita.\n\n**¿Qué servicios incluye?**\n- Papanicolaou (prueba de Pap) para detectar cambios en el cuello del útero\n- Revisión ginecológica de rutina\n- Cultivo vaginal cuando hay flujo distinto, comezón, ardor o mal olor\n- Óvulos, cremas o pastillas para la candidiasis y la vaginosis, según lo que muestre la revisión\n- Orden de mamografía y referencia a un especialista cuando tu caso lo necesita\n\n**¿Cómo prepararte para el Papanicolaou?**\n1. Elige un día en que no estés menstruando; un sangrado leve casi nunca impide la prueba, pero uno abundante puede alterar la muestra.\n2. Deja dos días de descanso antes de la toma: sin lavados internos, sin productos vaginales y sin relaciones, para que las células se vean limpias.\n3. Anota la fecha de tu última regla y de tu último Pap, si lo recuerdas.\n4. Si estás embarazada o crees que podrías estarlo, coméntalo al llegar.\n\n**¿Cómo es la toma de la muestra?**\nYa en la camilla, con las piernas apoyadas, se usa un instrumento llamado espéculo que separa con suavidad las paredes vaginales. Con un cepillo suave se toman unas células, y lo mismo ocurre con el cultivo si hace falta. Puedes sentir presión o una molestia breve, pero dura pocos minutos y puedes pedir que se detengan en cualquier momento.\n\n**¿Cada cuánto conviene hacerte el Pap?**\nLas guías generales lo recomiendan desde los 21 años y, si los resultados salen normales, cada 3 años; después de los 30 a veces se combina con la prueba de VPH. El equipo médico te dice qué frecuencia te toca según tu edad y tus resultados anteriores.\n\n**¿Qué pasa con tus resultados?**\n- Si te dan tratamiento para una infección, lo recibes en la misma consulta\n- El resultado del Pap y del cultivo llega del laboratorio y te avisamos en cuanto esté listo\n- Un Pap con cambios no significa cáncer: suele pedir una revisión adicional, y se orienta la referencia a un especialista\n\n**¿Hay paquetes para mujeres?**\nSí: el Chequeo Completo de Mujer y el de Salud Íntima Femenina aparecen en la página de promociones. Un sangrado muy abundante, dolor fuerte en el vientre con fiebre o desmayo requiere urgencias, no una consulta de rutina.",
    "longDescriptionEn": "The clinic's gynecology visit covers your routine checkup and also the intimate symptoms that can feel awkward to bring up. The medical team sees you in a private exam room, in Spanish or English, with Pap smears, vaginal cultures and treatment of infections, without waiting weeks for an appointment.\n\n**Which services are included?**\n- Pap smear (Pap test) to find changes in the cervix\n- A routine gynecological exam\n- A vaginal culture when there's unusual discharge, itching, burning or odor\n- Treatment for yeast or bacterial infections\n- A mammogram order and a referral to a specialist when your case needs it\n\n**How do you prepare for a Pap smear?**\n1. Pick a day when you're not on your period; light spotting rarely gets in the way, but heavy bleeding can affect the sample.\n2. Give it a two-day break beforehand: no douching, no vaginal products and no intercourse, so the cells show up clearly.\n3. Have two dates ready on your phone: the first day of your latest period and roughly when your previous Pap was.\n4. If you're pregnant or think you might be, mention it when you arrive.\n\n**What is the sample collection like?**\nYou lie on the exam table and a speculum is placed so the cervix can be seen. A soft brush collects a few cells, and the same goes for a culture if one is needed. You may feel pressure or brief discomfort, but it takes only a few minutes and you can ask to stop at any point.\n\n**How often should you get a Pap?**\nGeneral guidelines recommend starting at 21 and, if results are normal, repeating every 3 years; after 30 it is sometimes combined with an HPV test. The medical team tells you which schedule fits your age and past results.\n\n**What happens with your results?**\n- If you need treatment for an infection, you get it during the visit\n- Pap and culture results come back from the lab, and you'll be contacted as soon as they're ready\n- An abnormal Pap doesn't mean cancer: it usually calls for a follow-up exam, and a referral to a specialist is arranged\n\n**Are there women's health packages?**\nYes: the Complete Women's Checkup and the Women's Intimate Health package are listed on the promotions page. Very heavy bleeding, severe belly pain with fever, or fainting needs the ER, not a routine visit.",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologia en houston",
      "papanicolaou sin cita houston",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston"
    ],
    "keywordsEn": [
      "gynecology houston",
      "pap smear walk in houston",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston"
    ],
    "features": [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español"
    ],
    "featuresEn": [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish"
    ],
    "highlighted": true,
    "order": 6
  },
  {
    "id": "prueba-embarazo",
    "slug": "prueba-embarazo",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    "descriptionEn": "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    "longDescription": "Si se te atrasó la regla o tienes síntomas que te hacen dudar, aquí puedes confirmar si estás embarazada con una prueba de orina o de sangre. El equipo médico te explica el resultado en privado, en español y sin juzgarte, y te orienta sobre lo que sigue según lo que tú decidas.\n\n**¿Qué prueba te conviene?**\n- La prueba de orina busca la hormona del embarazo (hCG) y da el resultado en minutos, durante la visita\n- La prueba de sangre detecta niveles más bajos de la hormona y sirve cuando la de orina sale dudosa o cuando hay que medir la cantidad\n- El equipo médico te recomienda una u otra según los días de atraso y tus síntomas\n\n**¿Cuándo hacerla para que el resultado sea confiable?**\nLo más seguro es a partir del primer día de atraso de tu regla. Si te la haces muy pronto, la hormona todavía puede estar baja y dar un negativo falso. La primera orina de la mañana está más concentrada, así que, si puedes, guarda esa muestra o ven sin haber tomado mucha agua.\n\n**¿Qué señales te pueden hacer sospechar?**\n- Regla atrasada o más ligera de lo normal\n- Náuseas, sobre todo por la mañana\n- Senos sensibles o hinchados\n- Cansancio y sueño fuera de lo común\n- Ganas de orinar con más frecuencia\n\n**¿Qué pasa si sale positiva?**\n1. Te confirmamos el resultado y calculamos de cuántas semanas podrías estar según tu última regla.\n2. Te hablamos de empezar ácido fólico y de evitar alcohol, cigarro y medicamentos sin consultar.\n3. Recibes información sobre el control prenatal y una referencia para iniciarlo.\n4. Si sale negativa y la regla no llega, puedes repetir la prueba unos días después o revisar otras causas del atraso.\n\n**¿Cuándo es urgente?**\nUn sangrado abundante, dolor fuerte en un lado del vientre, dolor en el hombro o desmayo con prueba positiva pueden indicar un embarazo fuera del útero: ve a urgencias o llama al 911. Para salir de la duda, pasa por la clínica de Airline Drive; la prueba de orina se hace en cuanto llegas y te vas con tu respuesta.",
    "longDescriptionEn": "If your period is late or you have symptoms that make you wonder, you can confirm a pregnancy here with a urine or blood test. The medical team explains the result in private, in Spanish or English and without judgment, and walks you through the next steps based on what you decide.\n\n**Which test is right for you?**\n- The urine test looks for the pregnancy hormone (hCG) and gives a result in minutes, during the visit\n- The blood test picks up lower hormone levels and helps when the urine test is unclear or the amount needs to be measured\n- Which sample to use depends on how many days late you are and what you're feeling; that call is made with you at check-in\n\n**When should you test for a reliable answer?**\nThe safest time is from the first day of a missed period. Testing too early can give a false negative because the hormone may still be low. First-morning urine is more concentrated, so if you can, save that sample or come in without drinking a lot of water.\n\n**Which signs might make you suspect it?**\n- A late period, or one lighter than usual\n- Nausea, especially in the morning\n- Tender or swollen breasts\n- Unusual tiredness and sleepiness\n- Needing to pee more often\n\n**What happens if it's positive?**\n1. We confirm the result and estimate how many weeks along you might be from your last period.\n2. We talk about starting folic acid and avoiding alcohol, smoking and medicines without checking first.\n3. You get information about prenatal care and a referral to begin it.\n4. If it's negative and your period still doesn't come, you can repeat the test a few days later or look into other causes.\n\n**When is it urgent?**\nHeavy bleeding, sharp pain on one side of the belly, shoulder pain or fainting with a positive test can signal a pregnancy outside the uterus: go to the ER or call 911. To clear up the doubt, stop by the Airline Drive clinic; the urine test is done as soon as you arrive and you leave with your answer.",
    "icon": "Heart",
    "image": "/images/services/prueba-embarazo.webp",
    "category": "salud-mujer",
    "keywords": [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston"
    ],
    "keywordsEn": [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston"
    ],
    "features": [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español"
    ],
    "featuresEn": [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 7
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "Elegir un método anticonceptivo es una decisión tuya. En la consulta el equipo médico revisa tu salud, te explica las opciones con calma y te ayuda a empezar las pastillas o la inyección, con seguimiento para resolver dudas y molestias en los primeros meses.\n\n**¿Qué se toma en cuenta para elegir?**\n- Si quieres embarazarte pronto o dentro de varios años\n- Tu presión arterial, si fumas y tu historial de migrañas o coágulos\n- Si estás dando pecho\n- Qué tan fácil te resulta tomar algo todos los días a la misma hora\n- Cómo te fue con métodos que usaste antes\n\n**¿En qué se diferencian las pastillas y la inyección?**\nLas pastillas se toman una vez al día y su efecto depende de no olvidarlas. La inyección se aplica en la clínica cada tres meses, así que no tienes que acordarte a diario, aunque sí de la fecha de la siguiente dosis. Algunas mujeres notan cambios en el sangrado con cualquiera de las dos; el equipo médico te explica qué es normal.\n\n**¿Cómo empiezas tu método?**\n1. Revisión de presión, peso y preguntas sobre tu salud.\n2. Prueba de embarazo, si hay cualquier posibilidad de que lo estés.\n3. Te explicamos el día ideal para iniciar según tu ciclo.\n4. Te indicamos si necesitas usar condón como respaldo durante los primeros días.\n5. El primer paquete de pastillas o la primera inyección se te da ahí mismo, junto con el calendario de tu próxima dosis.\n\n**¿Qué molestias son comunes al principio?**\n- Manchado entre reglas\n- Náuseas leves o sensibilidad en los senos\n- Dolor de cabeza los primeros ciclos\n- Cambios de ánimo o de apetito\n\nSuelen mejorar con el tiempo. Si no es así, se puede cambiar de pastilla o de método.\n\n**¿Te protege de las infecciones de transmisión sexual?**\nNo: ni la pastilla ni la inyección protegen contra ETS; para eso necesitas condón. Un dolor fuerte en la pierna o en el pecho, falta de aire o un dolor de cabeza muy intenso mientras usas un método hormonal requiere urgencias. Para tu siguiente inyección o tu revisión, pasa a la clínica de Airline Drive cuando te toque, por orden de llegada.",
    "longDescriptionEn": "Choosing a birth control method is your decision. During the visit the medical team reviews your health, walks you through the options without rushing and helps you start the pill or the shot, with follow-up for questions and side effects in the first few months.\n\n**What do you weigh when choosing?**\n- Whether you want to get pregnant soon or years from now\n- Your blood pressure, whether you smoke, and any history of migraines or blood clots\n- Whether you're breastfeeding\n- How easy it is for you to take something at the same time every day\n- How methods you used before worked for you\n\n**How do the pill and the shot differ?**\nThe pill is taken once a day and works only if you don't miss it. The shot is given at the clinic every three months, so there's no daily step, though you do need to remember your next date. Some women notice bleeding changes with either one; the medical team explains what's normal.\n\n**How do you get started?**\n1. A check of your blood pressure and weight, plus questions about your health.\n2. A pregnancy test if there's any chance you might be pregnant.\n3. An explanation of the best day to start based on your cycle.\n4. Guidance on whether to use condoms as a backup for the first few days.\n5. Your first pill pack or first shot is given right there, along with a calendar for your next dose.\n\n**Which side effects are common at first?**\n- Spotting between periods\n- Mild nausea or breast tenderness\n- Headaches during the first cycles\n- Mood or appetite changes\n\nThey usually ease over time. If not, you can switch to another pill or method.\n\n**Does it protect you from sexually transmitted infections?**\nHormonas y ETS van por caminos distintos: ni una pastilla diaria ni una inyección trimestral frenan una infección; solo el condón hace esa parte. Severe leg or chest pain, shortness of breath or a very intense headache while on a hormonal method needs the ER. For your next shot or check-in, stop by the Airline Drive clinic when it's due; patients are seen in order of arrival.",
    "icon": "Syringe",
    "image": "/images/services/anticonceptivos.webp",
    "category": "salud-mujer",
    "keywords": [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston"
    ],
    "keywordsEn": [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston"
    ],
    "features": [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español"
    ],
    "featuresEn": [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 8
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Retiro de Implante Subdérmico (Implante del Brazo)",
    "titleEn": "Subdermal Implant Removal (Arm Implant)",
    "shortTitle": "Implantes",
    "description": "Retiro del implante anticonceptivo del brazo en Houston, TX: procedimiento con anestesia local, en español, sin cita y sin seguro.",
    "descriptionEn": "Contraceptive arm implant removal in Houston, TX: procedure with local anesthesia, in Spanish, walk-ins welcome, no insurance needed.",
    "longDescription": "El implante anticonceptivo del brazo tiene una fecha de vencimiento, y también puedes querer quitártelo antes porque buscas embarazarte o prefieres otro método. En la clínica el retiro se hace en la misma consulta, con anestesia local y una incisión pequeña, y te explicamos cada paso en español.\n\n**¿Qué conviene saber antes de venir?**\n- Trae, si la tienes, la tarjeta o el papel con la fecha en que te colocaron el implante\n- Avisa si tomas aspirina u otros medicamentos que adelgazan la sangre\n- Come algo ligero antes; no necesitas ayuno\n- Si quieres salir ya con otro método, dilo al llegar para planearlo juntos\n\n**¿Cómo se retira el implante?**\n1. El equipo médico palpa tu brazo para localizar la varilla bajo la piel.\n2. Limpia la zona y aplica anestesia local con una aguja fina.\n3. Hace un corte muy pequeño en un extremo del implante.\n4. Empuja suavemente la varilla hasta sacarla y comprueba que salió completa.\n5. Cierra con cintas adhesivas y coloca un vendaje de presión.\n\nEn total suele tomar entre 10 y 20 minutos y sentirás sobre todo presión, porque la piel ya está dormida.\n\n**¿Y si al tocarte el brazo no aparece la varilla?**\nA veces la varilla queda más profunda o se movió un poco. Si no se puede localizar al tacto, no se intenta sacarla a ciegas: se orienta la referencia para un estudio de imagen o a un especialista.\n\n**¿Cómo cuidar tu brazo después?**\n- Mantén el vendaje de presión seco y puesto el tiempo que te indiquen\n- Deja las cintas adhesivas unos días hasta que la herida cierre\n- Un moretón o algo de dolor es normal; mejora en pocos días\n- Vuelve a la clínica si la piel alrededor del corte se pone caliente y roja día tras día, sale líquido amarillo o te da temperatura\n\n**¿Y la protección contra el embarazo?**\nEn cuanto sale el implante, tu fertilidad regresa rápido. Si no buscas embarazarte, necesitas otro método desde ese momento: el equipo médico te puede iniciar las pastillas o la inyección en la misma visita. Sin cita, pasa por la clínica de Airline Drive con tu fecha de colocación a la mano.",
    "longDescriptionEn": "The birth control implant in your arm has an expiration date, and you may also want it out sooner because you're planning a pregnancy or prefer another method. At the clinic the removal is done during the visit, with local anesthesia and a tiny incision, and every step is explained to you.\n\n**What should you know before coming in?**\n- Bring the card or paper with your insertion date, if you have it\n- Let us know if you take aspirin or other blood thinners\n- Eat something light beforehand; no fasting is needed\n- If you want to start another method right away, say so when you arrive so it can be planned together\n\n**How is the implant removed?**\n1. The medical team feels your arm to locate the rod under the skin.\n2. The area is cleaned and numbed with a fine needle.\n3. A very small cut is made at one end of the implant.\n4. The rod is gently pushed out and checked to make sure it came out whole.\n5. The cut is closed with adhesive strips and a pressure bandage is applied.\n\nIt usually takes 10 to 20 minutes, and you'll mostly feel pressure because the skin is already numb.\n\n**What if the implant can't be felt?**\nSometimes the rod sits deeper or has shifted slightly. If it can't be located by touch, there's no blind attempt to remove it: a referral is arranged for an imaging study or a specialist.\n\n**How do you care for your arm afterward?**\n- Keep the pressure bandage dry and on for as long as instructed\n- Leave the adhesive strips for a few days until the cut closes\n- A bruise or some soreness is normal and improves within days\n- Come back if the skin around the cut gets hot and redder each day, yellow fluid drains or you run a temperature\n\n**What about pregnancy protection?**\nOnce the implant is out, fertility returns quickly. If you're not trying to get pregnant, you need another method right away: the medical team can start you on the pill or the shot during the same visit. No appointment needed; come to the Airline Drive clinic with your insertion date handy.",
    "icon": "FirstAid",
    "image": "/images/services/extraccion-implantes.webp",
    "category": "salud-mujer",
    "keywords": [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston"
    ],
    "keywordsEn": [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston"
    ],
    "features": [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 9
  },
  {
    "id": "salud-hombre",
    "slug": "salud-hombre",
    "title": "Salud del Hombre: Examen de Próstata (PSA)",
    "titleEn": "Men's Health: Prostate (PSA) Exam",
    "shortTitle": "Salud del Hombre",
    "description": "Salud del hombre en Houston, TX: examen de próstata (PSA), chequeo general y laboratorio en español, sin cita y sin seguro médico.",
    "descriptionEn": "Men's health in Houston, TX: prostate (PSA) exam, general checkup and lab work in Spanish, walk-ins welcome, no insurance needed.",
    "longDescription": "Entre el trabajo y la familia, muchos hombres dejan pasar años sin revisarse hasta que algo molesta. Este chequeo está pensado para revisar a tiempo la próstata, los niveles de testosterona y tu salud general, con el equipo médico explicándote cada resultado en español y sin rodeos.\n\n**¿Qué incluye el chequeo?**\n- Análisis de antígeno prostático específico (PSA) en sangre\n- Medición del nivel de testosterona, cuando tus síntomas lo justifican\n- Presión arterial, pulso, peso y cintura\n- Preguntas sobre cómo orinas, cómo duermes y cómo está tu energía\n- Referencia a un especialista si algún resultado lo requiere\n\n**¿Qué molestias vale la pena comentar?**\nLevantarte varias veces en la noche a orinar, un chorro débil, sentir que la vejiga no se vacía o ardor al orinar pueden venir de la próstata. Cansancio constante, menos deseo sexual o problemas de erección también merecen una revisión, porque a veces se relacionan con la presión, el azúcar, el peso o las hormonas.\n\n**¿Cómo prepararte para la toma de sangre?**\n1. Ven en la mañana si te van a medir la testosterona, porque sus niveles son más altos temprano.\n2. Durante los dos días previos al PSA evita eyacular y hacer bicicleta o ejercicio intenso, que pueden subirlo un poco.\n3. Avisa si tienes una infección urinaria reciente o si tomas medicamentos para la próstata o para el cabello.\n4. Trae resultados de PSA anteriores, si tienes: la tendencia con los años dice tanto como un solo número.\n\n**¿Qué significa un PSA alto?**\nNo es un diagnóstico de cáncer. El PSA puede subir por una próstata agrandada, una inflamación o una infección. Por eso el equipo médico lo interpreta junto con tu edad, tus síntomas y tus resultados previos, y decide si conviene repetirlo o hacer una referencia a un especialista.\n\n**¿A qué edad empezar?**\nLas guías generales sugieren platicar sobre el PSA desde los 50 años, o antes si tu papá o un hermano tuvo cáncer de próstata, o si eres de raza negra. Los resultados llegan del laboratorio y te avisamos en cuanto los tengamos. La clínica de Airline Drive abre hasta las 9 PM, así que puedes venir saliendo del trabajo.",
    "longDescriptionEn": "Many men only see a provider once something already hurts. This checkup is designed to look at your prostate, your testosterone levels and your overall health early, with the medical team explaining each result in plain Spanish or English.\n\n**What does the checkup include?**\n- A prostate-specific antigen (PSA) blood test\n- A testosterone level, when your symptoms make it worthwhile\n- Blood pressure, pulse, weight and waist size\n- Questions about how you urinate, sleep and how your energy is\n- A referral to a specialist if any result calls for it\n\n**Which symptoms are worth bringing up?**\nGetting up several times at night to pee, a weak stream, feeling that your bladder doesn't empty or burning when you urinate can come from the prostate. Constant tiredness, lower sex drive or erection problems also deserve a look, since they're sometimes tied to blood pressure, blood sugar, weight or hormones.\n\n**How should you prepare for the blood draw?**\n1. Come in the morning if testosterone is being measured, since levels are highest early in the day.\n2. For two days before a PSA test, avoid ejaculation and cycling or hard workouts, which can nudge it up.\n3. Mention a recent urinary infection or any prostate or hair-loss medicine you take.\n4. Bring earlier PSA results if you have them: the trend over the years says as much as a single number.\n\n**What does a high PSA mean?**\nIt isn't a cancer diagnosis. PSA can rise from an enlarged prostate, inflammation or infection. That's why the medical team reads it alongside your age, symptoms and earlier results, and decides whether to repeat it or arrange a referral to a specialist.\n\n**At what age should you start?**\nCommon guidance puts the PSA conversation at 50, moved earlier when a father or brother had prostate cancer and for Black men, who carry higher risk. The PSA and testosterone samples are processed by an outside lab, and you get a call once the numbers are in. The Airline Drive clinic stays open until 9 PM, so you can come straight from work.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "salud del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "chequeo del hombre houston"
    ],
    "keywordsEn": [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "mens checkup houston"
    ],
    "features": [
      "Antígeno prostático (PSA)",
      "Análisis de laboratorio",
      "Chequeo general del hombre",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate antigen (PSA)",
      "Lab tests",
      "General men's checkup",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 10
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "title": "Análisis y Exámenes de Sangre | Laboratorio",
    "titleEn": "Blood Tests | Lab",
    "shortTitle": "Análisis de Sangre",
    "description": "Análisis de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles.",
    "descriptionEn": "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing.",
    "longDescription": "Un análisis de sangre muestra lo que una revisión física no alcanza a ver: cómo andan tu azúcar, tus grasas, tu tiroides, tu hígado y tus riñones. En Clínica Hispana Cruz te sacamos la muestra aquí mismo y el equipo médico te repasa cada valor en español cuando llegan los resultados.\n\n**¿Qué valores se pueden medir?**\n- Biometría hemática completa: glóbulos rojos, glóbulos blancos y plaquetas\n- Química sanguínea con glucosa, colesterol y triglicéridos\n- Perfil de tiroides\n- Enzimas del hígado y marcadores de qué tan bien filtran los riñones\n- Paneles combinados para un chequeo general o para vigilar una condición que ya conoces\n\n**¿A quién le conviene?**\n- A quien vive con diabetes, presión alta o colesterol elevado y necesita control periódico\n- A quien lleva años sin hacerse laboratorios y quiere saber cómo está por dentro\n- A trabajadores y estudiantes que deben presentar resultados de sangre para un trámite\n\n**¿Tienes que venir en ayunas?**\nLa respuesta cambia según el panel que te toque. La glucosa y el perfil de grasas suelen pedirse con varias horas sin comer, tomando solo agua; otras pruebas no lo necesitan. Si no sabes cuál es tu caso, mándanos un WhatsApp antes de salir de casa y te decimos cómo llegar preparado.\nSigue con tus medicinas de siempre salvo que el equipo médico te diga otra cosa, y trae anotado lo que tomas, incluidas vitaminas y remedios naturales.\n\n**¿Cómo es la extracción?**\n1. En recepción nos cuentas para qué necesitas el análisis.\n2. El equipo médico revisa contigo qué pruebas tienen sentido para ti.\n3. Se limpia la piel del brazo y se toma la sangre con una aguja fina en pocos minutos.\n4. Presionas el algodón un rato para que no te quede moretón.\n\n**¿Qué sigue cuando llegan los resultados?**\nTe avisamos en cuanto están listos y te explicamos qué quiere decir cada número, sin palabras de laboratorio. Si algo sale fuera de rango, se platica el siguiente paso: ajustes en la comida, repetir la prueba más adelante, empezar un tratamiento o una referencia a un especialista cuando hace falta. Si te toca venir en ayunas, conviene llegar a primera hora, cuando abrimos a las 9 AM en Airline Drive.",
    "longDescriptionEn": "A blood test shows what a physical exam can't: how your sugar, fats, thyroid, liver and kidneys are doing. At Clínica Hispana Cruz we draw the sample right here, and the medical team walks you through every value in Spanish or English once the results come in.\n\n**What can be measured?**\n- CBC: counts of the cells that carry oxygen, fight infection and help your blood clot\n- Blood chemistry with glucose, cholesterol and triglycerides\n- Thyroid panel\n- Liver and kidney function tests\n- Combined panels for a general checkup or to keep an eye on a condition you already have\n\n**Who is it for?**\n- People living with diabetes, high blood pressure or high cholesterol who need regular monitoring\n- Anyone who hasn't had lab work in years and wants to know how things look inside\n- Workers and students who have to turn in blood results for paperwork\n\n**Do you need to fast?**\nIt depends on what is being measured. Glucose and the lipid panel are usually drawn after several hours without food, with water only; other tests don't require it. If you're not sure which applies to you, send us a WhatsApp before you leave home and we'll tell you how to come prepared.\nKeep taking your usual medicines unless the medical team says otherwise, and bring a written list of what you take, including vitamins and herbal remedies.\n\n**What is the blood draw like?**\n1. At the front desk you tell us why you need the tests.\n2. The medical team reviews with you which tests make sense.\n3. The skin on your arm is cleaned and the blood is drawn with a thin needle in a few minutes.\n4. You hold the cotton in place for a bit so you don't bruise.\n\n**What happens when the results arrive?**\nOnce they're in, we reach out and walk you through each number in plain words, skipping the lab jargon. If something is out of range, we talk through the next step: changes in your diet, repeating the test later, starting treatment, or a referral to a specialist when needed. If you have to come in fasting, it helps to arrive early, when our Airline Drive doors open at 9 AM.",
    "icon": "Flask",
    "image": "/images/services/examenes-sangre.webp",
    "category": "laboratorio",
    "keywords": [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston"
    ],
    "keywordsEn": [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston"
    ],
    "features": [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 11
  },
  {
    "id": "infecciones-urinarias",
    "slug": "infecciones-urinarias",
    "title": "Examen de Orina y Tratamiento de Infecciones Urinarias",
    "titleEn": "Urinalysis & Urinary Infection Treatment",
    "shortTitle": "Infecciones Urinarias",
    "description": "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, el mismo día. En español, con precios accesibles.",
    "descriptionEn": "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing.",
    "longDescription": "Si te arde al orinar o sientes que tienes que correr al baño a cada rato, puede tratarse de una infección de vías urinarias. Cuando llegas con esas molestias a nuestra sala de Airline Drive, te hacemos un examen de orina en la clínica y, si hay infección, sales con tu tratamiento el mismo día, después de que el equipo médico compare el resultado con tus síntomas, tus antecedentes y lo que ya hayas probado en casa para aliviarte.\n\n**¿Qué molestias hacen sospechar una infección urinaria?**\n- Ardor o punzadas justo cuando sale la orina\n- Urgencia de orinar muy seguido aunque salgan solo unas gotas\n- Orina turbia, de olor fuerte o con un tono rosado\n- Presión incómoda debajo del ombligo\n\n**¿Cómo es la visita?**\n1. Te damos un vasito estéril y te explicamos cómo limpiarte antes de llenarlo.\n2. Juntas la orina del chorro medio, dejando pasar el primer chorrito.\n3. El equipo médico revisa el urianálisis junto con tus síntomas y tus antecedentes.\n4. Con la infección confirmada, recibes una hoja que explica a qué horas y por cuántos días tomar cada dosis, y los medicamentos indicados en la consulta se entregan en la clínica antes de que te vayas a casa.\n\n**¿Para qué sirve el urocultivo?**\nHay casos en los que conviene saber qué bacteria está causando el problema: infecciones que regresan una y otra vez, molestias que siguen igual tras el primer antibiótico o una paciente embarazada. Ahí el equipo médico manda una parte de tu orina a cultivo. Ese resultado tarda más que el examen general: te llamamos en cuanto llega para confirmar que el medicamento es el adecuado o cambiarlo.\n\n**¿Cómo evitar que vuelva?**\n- Termina todo el tratamiento aunque te sientas mejor antes\n- Toma agua a lo largo del día y no aguantes las ganas de orinar\n- Orina después de tener relaciones sexuales\n- En mujeres, límpiate de adelante hacia atrás\n\n**¿Cuándo ya no es una molestia leve?**\nFiebre, escalofríos, dolor en la espalda baja o en un costado, vómito o sangre visible en la orina pueden indicar que la infección subió a los riñones. En ese caso no lo dejes para después; si además te sientes muy decaído, confundido o no puedes retener líquidos, ve a la sala de emergencias. Si el ardor empieza ya de tarde, la clínica de Airline Drive sigue recibiendo pacientes hasta las 9 PM.",
    "longDescriptionEn": "If it burns when you pee or you feel like you have to rush to the bathroom every few minutes, it may be a urinary tract infection. When you walk into our Airline Drive office with those symptoms, we do a urine test at the clinic and, if there is an infection, you leave with your treatment the same day, after the medical team weighs the result against your symptoms, your history and whatever you've already tried at home for relief.\n\n**Which symptoms point to a UTI?**\n- Burning or stinging right as the urine comes out\n- An urge to go again and again even when only a few drops come out\n- Cloudy, strong-smelling or pinkish urine\n- Uncomfortable pressure below the belly button\n\n**How does the visit go?**\n1. We give you a sterile cup and explain how to clean yourself before filling it.\n2. You collect the midstream urine, letting the first bit go.\n3. The medical team reviews the urinalysis together with your symptoms and history.\n4. With the infection confirmed, you get a sheet showing when and for how many days to take each dose, and medicines prescribed during the visit are handed to you at the clinic before you head home.\n\n**What is a urine culture for?**\nSometimes it pays to know exactly which germ is behind the problem: infections that return again and again, symptoms that stay the same after the first antibiotic, or a pregnant patient. In those cases the medical team sends part of your urine out for a culture. That result takes longer than the basic test: we call you as soon as it comes in to confirm the medicine is the right one or switch it.\n\n**What helps prevent the next UTI?**\n- Finish the full treatment even if you feel better sooner\n- Sip water all day long and use the bathroom as soon as you feel the urge\n- Pee after sex\n- For women, wipe front to back\n\n**When is it more than a mild bother?**\nFever, chills, pain in your lower back or side, vomiting or visible blood in the urine can mean the infection has reached the kidneys. Don't put it off; if you also feel very weak, confused or can't keep fluids down, go to the emergency room. If the burning starts late in the afternoon, the Airline Drive clinic keeps seeing patients until 9 PM.",
    "icon": "Drop",
    "image": "/images/services/infecciones-urinarias.webp",
    "category": "tratamientos",
    "keywords": [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston"
    ],
    "keywordsEn": [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston"
    ],
    "features": [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish"
    ],
    "highlighted": true,
    "order": 12
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    "descriptionEn": "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    "longDescription": "Cuando la diarrea no se quita, el estómago se inflama sin razón clara o notas cambios raros al ir al baño, un examen de heces fecales puede encontrar la causa. En Clínica Hispana Cruz te damos el material para recoger la muestra en casa y el equipo médico interpreta el resultado contigo, en español.\n\n**¿Qué puede revelar la muestra?**\n- Parásitos intestinales y sus huevecillos\n- Bacterias u otros gérmenes que causan infecciones del intestino\n- Sangre oculta que no se ve a simple vista, cuando el equipo médico la pide\n- Restos de grasa, moco o alimentos sin digerir que orientan sobre la digestión\n\n**¿En qué casos se pide?**\nSe piensa en este estudio ante diarrea que dura varios días, cólicos que regresan, mucho gas, heces con moco o una baja de peso que no tiene explicación. También ayuda cuando varios miembros de la familia tienen las mismas molestias o después de un viaje en el que tomaste agua o comida dudosa.\n\n**¿Cómo recoger la muestra en casa?**\n1. Pasa por la clínica a recoger el frasco limpio con tapa y la etiqueta con tu nombre.\n2. Evacúa sobre un plástico limpio o un recipiente seco, nunca directo del agua del inodoro.\n3. Usa la paletita que trae la tapa para sacar un pedacito pequeño, escogiendo las partes con moco o sangre si las ves.\n4. Cierra bien, lávate las manos y trae el frasco lo antes posible; si tienes que esperar, guárdalo en un lugar fresco.\n\n**¿Qué hacer mientras esperas el resultado?**\nToma bastante líquido para no deshidratarte y lávate las manos con frecuencia, sobre todo antes de cocinar. Te avisamos en cuanto llegue el resultado; si sale un parásito o una infección, el equipo médico te indica el tratamiento y si conviene revisar también a quienes viven contigo.\nSi notas mucha sangre en las heces, vómito que no para, mareo al ponerte de pie o casi no orinas, ve a urgencias sin esperar el examen. El frasco lo puedes recoger cualquier día de la semana entre 9 AM y 9 PM, sin apartar turno.",
    "longDescriptionEn": "When diarrhea won't go away, your stomach bloats for no clear reason or you notice odd changes in the bathroom, a stool test can find the cause. At Clínica Hispana Cruz we give you the kit to collect the sample at home, and the medical team goes over the result with you in Spanish or English.\n\n**What can the sample reveal?**\n- Intestinal parasites and their eggs\n- Bacteria or other germs that cause gut infections\n- Hidden blood you can't see, when the medical team orders it\n- Traces of fat, mucus or undigested food that give clues about digestion\n\n**When is it ordered?**\nThe test is considered for diarrhea lasting several days, cramps that keep coming back, a lot of gas, mucus in the stool or weight loss with no explanation. It also helps when several people in the family have the same symptoms, or after a trip where you had questionable water or food.\n\n**Home collection: how does it work?**\n1. Stop by the clinic to pick up the clean, lidded container and a label with your name.\n2. Pass the stool onto clean plastic wrap or a dry container, never straight from toilet water.\n3. Use the little scoop to take a portion, especially from any parts with mucus or blood.\n4. Close it tightly, wash your hands and bring it in as soon as you can; if you have to wait, keep it somewhere cool.\n\n**What should you do while you wait?**\nDrink plenty of fluids so you don't get dehydrated, and wash your hands often, especially before cooking. We let you know as soon as the result arrives; if it shows a parasite or an infection, the medical team gives you the treatment and tells you whether the people you live with should be checked too.\nIf you see a lot of blood in your stool, can't stop vomiting, feel dizzy when you stand up or are barely peeing, go to the emergency room without waiting for the test. The collection kit is waiting at our front desk seven days a week, from 9 AM to 9 PM; just ask for it.",
    "icon": "TestTube",
    "image": "/images/services/examen-heces.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston"
    ],
    "keywordsEn": [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston"
    ],
    "features": [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 13
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "Un dolor de garganta fuerte puede venir de un virus o de la bacteria estreptococo, y solo la segunda se trata con antibiótico. En Clínica Hispana Cruz hacemos la prueba rápida de strep con un hisopo y el resultado sale en minutos, durante la misma visita, para que el tratamiento se decida con datos y no a ciegas.\n\n**¿Cómo distinguir una garganta con strep de un resfriado?**\nLa faringitis por estreptococo suele empezar de golpe, con dolor intenso al tragar, fiebre, ganglios inflamados en el cuello y a veces puntitos rojos en el paladar o placas blancas en las amígdalas. En los niños puede acompañarse de dolor de panza o vómito. Si el cuadro trae tos, nariz tapada y voz ronca, apunta más bien a un virus.\nComo los síntomas se parecen tanto, la prueba es la forma más clara de saberlo, sobre todo en niños en edad escolar.\n\n**¿Cómo se toma la muestra?**\n1. Se le pide al paciente que abra bien la boca y saque la lengua.\n2. Con un hisopo largo se frota con suavidad la parte de atrás de la garganta y las amígdalas.\n3. Dura unos segundos; puede dar un poco de náusea, pero no lastima.\n4. El hisopo se analiza ahí mismo y, tras unos minutos de espera, el equipo médico te dice si dio positivo o negativo.\n\n**¿Qué pasa si la prueba sale positiva?**\n- El equipo médico indica el antibiótico adecuado según la edad y el peso\n- El antibiótico y los demás medicamentos indicados en la consulta se entregan en la clínica, sin tener que hacer otra parada\n- Se explica cómo tomarlo completo aunque el dolor mejore pronto\n- Se aclara cuándo puede volver a la escuela o al trabajo sin contagiar\n- Si sale negativa, se recomiendan cuidados para un posible virus y qué señales vigilar\n\n**¿Cuándo hay que ir a emergencias?**\nSi hay dificultad para respirar, babeo porque no puede tragar la saliva, no puede abrir la boca o la voz suena apagada, como con una papa caliente, llama al 911 o ve a urgencias. Para la prueba rápida, en cambio, basta con pasar por Airline Drive cualquier día antes de las 9 PM; si es para tu hijo, trae su peso aproximado y la lista de medicinas que ya le diste.",
    "longDescriptionEn": "A bad sore throat can come from a virus or from strep bacteria, and only strep is treated with antibiotics. At Clínica Hispana Cruz we do the rapid strep test with a swab and the result is ready in minutes, during the same visit, so treatment is decided with real information instead of guesswork.\n\n**How do you tell strep throat from a cold?**\nStrep throat usually starts suddenly, with sharp pain when swallowing, fever, swollen glands in the neck and sometimes tiny red spots on the roof of the mouth or white patches on the tonsils. In children it can come with a stomachache or vomiting. A cough, stuffy nose and scratchy voice tilt the odds toward a virus instead.\nBecause the symptoms overlap so much, the test is the clearest way to know, especially in school-age kids.\n\n**How is the sample taken?**\n1. The patient opens wide and sticks out their tongue.\n2. A long swab gently brushes the back of the throat and the tonsils.\n3. The swab is over in seconds; a brief gag reflex is common, but there's no real pain.\n4. The sample is processed at the clinic and the medical team shares the result within minutes.\n\n**What happens if the test is positive?**\n- The medical team prescribes the right antibiotic for age and weight\n- The antibiotic and any other medicines prescribed during the visit are handed to you at the clinic, with no extra stop on the way home\n- You learn how to finish the full course even if the pain eases quickly\n- You find out when it's okay to go back to school or work without spreading it\n- If it's negative, you get care tips for a likely virus and the warning signs to watch\n\n**When is it an emergency?**\nIf there is trouble breathing, drooling because saliva can't be swallowed, inability to open the mouth, or a muffled \"hot potato\" voice, call 911 or go to the ER. For the rapid test itself, just stop by Airline Drive any day before 9 PM; if it's for your child, bring their approximate weight and a list of any medicines you've already given.",
    "icon": "TestTube",
    "image": "/images/services/prueba-strep.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston"
    ],
    "keywordsEn": [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston"
    ],
    "features": [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 14
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "La prueba cutánea de tuberculosis (PPD) es la que suelen pedir hospitales, escuelas, guarderías y algunos empleos antes de que empieces. En Clínica Hispana Cruz te la aplicamos, hacemos la lectura y te damos el documento con el resultado para tu trámite, con cada paso explicado en español.\n\n**¿Cómo funciona la prueba PPD?**\nSe inyecta una cantidad muy pequeña de un líquido llamado tuberculina justo debajo de la piel del antebrazo. Si tu cuerpo ha tenido contacto con la bacteria de la tuberculosis, en esa zona se forma una pequeña elevación dura. Lo que se mide es esa dureza, no el enrojecimiento.\n\n**¿Cuáles son los pasos?**\n1. Visita de aplicación: el equipo médico revisa tus antecedentes y coloca la inyección en el antebrazo.\n2. Te damos la fecha de lectura, que según las guías de salud cae entre dos y tres días después.\n3. Visita de lectura: se mide la reacción con regla y se anota el resultado.\n4. Recibes la documentación para entregarla a tu empleador o escuela.\n\n**¿Cómo cuidar el brazo mientras tanto?**\n- No rasques ni frotes la zona aunque dé comezón\n- Puedes bañarte normalmente; solo seca con palmaditas\n- No le pongas curitas, cremas ni hielo\n- No faltes a la cita de lectura: si se pasa el plazo, la prueba se tiene que repetir\n\n**¿Qué significa un resultado positivo?**\nUn PPD positivo indica que en algún momento tuviste contacto con la bacteria, pero no quiere decir que tengas tuberculosis activa ni que contagies. Las personas que recibieron la vacuna BCG de niños a veces reaccionan también. En ese caso el equipo médico te orienta sobre los siguientes estudios, como una radiografía de tórax o un análisis de sangre, y te da una referencia si hace falta.\nSi tienes tos de varias semanas, sudores en la noche o bajas de peso sin explicación, dilo en la primera visita. Trae una identificación y el formulario que te pidió tu trabajo o escuela; la aplicación se puede hacer cualquier día de 9 AM a 9 PM, así que elige uno en el que puedas regresar para la lectura.",
    "longDescriptionEn": "The tuberculosis skin test (PPD) is the one hospitals, schools, daycares and some employers usually ask for before you start. At Clínica Hispana Cruz we place it, read it and give you a document with the result for your paperwork, with every step explained in Spanish or English.\n\n**How does the PPD test work?**\nA very small amount of a liquid called tuberculin is injected just under the skin of your forearm. If your body has been in contact with the tuberculosis bacteria, a small firm bump forms in that spot. What gets measured is that firmness, not the redness.\n\n**What are the steps?**\n1. Placement visit: the medical team reviews your history and gives the injection in your forearm.\n2. You get your reading date, which under health guidelines falls two to three days later.\n3. Reading visit: the reaction is measured with a ruler and the result is recorded.\n4. You receive the documentation to hand to your employer or school.\n\n**How do you care for your arm in the meantime?**\n- Don't scratch or rub the spot even if it itches\n- You can shower as usual; just pat it dry\n- Don't cover it with a bandage, cream or ice\n- Don't miss your reading visit: once the window passes, the test has to be repeated\n\n**What does a positive result mean?**\nA positive PPD means you were exposed to the bacteria at some point, but it doesn't mean you have active tuberculosis or that you're contagious. People who got the BCG vaccine as children sometimes react too. In that case the medical team guides you on the next tests, such as a chest X-ray or a blood test, and gives you a referral if needed.\nIf you've had a cough for several weeks, night sweats or unexplained weight loss, mention it at the first visit. Bring an ID and the form your job or school gave you; placement can be done any day from 9 AM to 9 PM, so pick a day when you can come back for the reading.",
    "icon": "ShieldCheck",
    "image": "/images/services/prueba-tuberculosis.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston"
    ],
    "keywordsEn": [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston"
    ],
    "features": [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español"
    ],
    "featuresEn": [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 15
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    "longDescription": "Hacerte pruebas de enfermedades de transmisión sexual es parte normal de cuidar tu salud, tengas síntomas o no. En Clínica Hispana Cruz la consulta es privada y sin juicios: el equipo médico te escucha, decide contigo qué pruebas tienen sentido y, si sale algo, te explica el tratamiento en español.\n\n**¿Cuándo conviene hacerte pruebas?**\n- Si el condón falló o no se usó en un encuentro reciente\n- Al empezar a salir con alguien o si tienes varias parejas a la vez\n- Si alguien con quien estuviste te contó que tiene una infección\n- Si aparecen llagas, verrugas, flujo raro, ardor o comezón en tus genitales\n- Cuando tú y una pareja estable piensan dejar el condón\n\n**¿Cómo es la consulta?**\n1. Llenas tus datos en recepción; lo que platiques adentro queda entre tú y el equipo médico.\n2. Te preguntan por tus síntomas, la fecha del posible contacto y las prácticas sexuales, sin regaños.\n3. Según tu caso, se toman muestras de sangre, de orina o con hisopo de la zona afectada.\n4. Te explican cuándo y cómo te avisaremos de los resultados.\n\n**¿Por qué importa la fecha del contacto?**\nAlgunas infecciones tardan semanas en aparecer en los análisis, aunque ya estén en el cuerpo. Si la prueba se hace demasiado pronto, puede salir negativa y luego cambiar. El equipo médico te dice si conviene repetirla más adelante para quedar tranquilo de verdad.\nMientras esperas los resultados, lo más prudente es no tener relaciones o usar condón siempre.\n\n**¿Qué pasa si una prueba sale positiva?**\nTe avisamos en cuanto llegan los resultados y te damos una consulta para hablar de ellos. Muchas infecciones se curan con el tratamiento indicado, y las que no se curan se pueden controlar; los medicamentos indicados en la consulta se entregan en la clínica. También te orientamos sobre cómo avisar a tus parejas para que se revisen, cuándo volver a tener relaciones y si hace falta una referencia a un especialista. Si prefieres que nadie te vea entrar a una hora concurrida, las últimas horas de la tarde, antes del cierre a las 9 PM, suelen ser más tranquilas.",
    "longDescriptionEn": "Getting tested for sexually transmitted infections is a normal part of taking care of your health, whether you have symptoms or not. At Clínica Hispana Cruz the visit is private and judgment-free: the medical team listens, decides with you which tests make sense and, if something comes up, explains the treatment in Spanish or English.\n\n**When is it a good idea to get tested?**\n- If a condom broke or wasn't used during a recent encounter\n- When you start seeing someone new or have several partners at once\n- If someone you were with tells you they have an infection\n- If sores, warts, odd discharge, burning or itching show up on your genitals\n- When you and a steady partner are thinking about going without condoms\n\n**What is the visit like?**\n1. You fill out your information at the front desk; what you discuss inside stays between you and the medical team.\n2. You're asked about symptoms, the date of the possible exposure and your sexual practices, with no lecturing.\n3. Depending on your case, samples are taken from blood, urine or a swab of the affected area.\n4. You're told when and how we'll reach you with the results.\n\n**Why does the exposure date matter?**\nSome infections take weeks to show up on tests, even though they're already in the body. If you test too early, the result may be negative and change later. The medical team tells you whether to repeat it down the line so you can truly have peace of mind.\nWhile you wait for results, the safest choice is no sex or always using a condom.\n\n**What happens if a test is positive?**\nWe let you know as soon as results come in and set up a visit to go over them. Many infections are cured with the prescribed treatment, and those that can't be cured can be managed; medicines prescribed during the visit are handed to you at the clinic. We also guide you on how to tell your partners so they get checked, when it's okay to have sex again, and whether a referral to a specialist is needed. If you'd rather avoid a busy waiting room, the last hours of the evening, before we close at 9 PM, tend to be quieter.",
    "icon": "ShieldCheck",
    "image": "/images/services/enfermedades-transmision-sexual.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston"
    ],
    "keywordsEn": [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston"
    ],
    "features": [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español"
    ],
    "featuresEn": [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 16
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "Te contrataron, te piden una prueba antes de empezar o un trámite exige demostrar que no hay alcohol ni drogas en tu sistema. En Clínica Hispana Cruz hacemos el examen de alcohol y drogas de forma discreta y te entregamos la documentación del resultado para tu empleador o tu trámite, con todo explicado en español.\n\n**¿Qué cubre el examen?**\n- Detección de drogas en una muestra, por lo general de orina\n- Prueba de alcohol según el método que solicite quien te la pide\n- Registro de tus datos y de la muestra para que el resultado sea válido\n- Documento con el resultado para entregar donde lo necesites\n\n**¿Qué llevar ese día?**\n- Identificación oficial con foto\n- La orden, formulario o correo de tu empleador con las pruebas que piden, si te lo dieron\n- La lista de medicinas que tomas, incluidas las de receta y las que compras sin receta\n- Tiempo suficiente: no llegues con prisa porque el proceso se hace con cuidado\n\n**¿Cómo es el proceso?**\n1. En recepción confirmamos tu identidad y qué examen pidió tu empleador o el trámite.\n2. Te explicamos cómo dar la muestra y en qué recipiente.\n3. Das la muestra en privado, siguiendo las indicaciones para que no se invalide.\n4. Se sella y etiqueta frente a ti, y se hace la prueba de alcohol si te la pidieron.\n5. Te decimos cómo y cuándo se entregará la documentación del resultado.\n\n**¿Influyen las medicinas o los alimentos?**\nAlgunos medicamentos de receta, como ciertos analgésicos fuertes o medicinas para dormir o la ansiedad, pueden aparecer en la prueba. Por eso es importante avisar lo que tomas desde el principio y, si puedes, traer el frasco o la receta con tu nombre. No intentes diluir la muestra tomando litros de agua: puede salir como inválida y tendrías que repetirla.\nSi tu empleador te dio una fecha límite, ven con tiempo: la clínica de Airline Drive recibe este examen los siete días de la semana hasta las 9 PM, sin necesidad de apartar hora.",
    "longDescriptionEn": "You got the job and need a test before you start, or some paperwork requires proof that there's no alcohol or drugs in your system. At Clínica Hispana Cruz we do alcohol and drug testing discreetly and give you documentation of the result for your employer or your paperwork, with everything explained in Spanish or English.\n\n**What does the test cover?**\n- Drug screening on a sample, usually urine\n- Alcohol testing using the method requested by whoever is asking for it\n- Recording your information and the sample so the result is valid\n- A document with the result to turn in wherever you need it\n\n**What should you bring that day?**\n- A government-issued photo ID\n- The order, form or email from your employer listing the required tests, if you got one\n- A list of the medicines you take, both prescription and over-the-counter\n- Enough time: don't come in a rush, since the process is done carefully\n\n**How does the process go?**\n1. At the front desk we confirm your identity and which test your employer or paperwork requires.\n2. We explain how to give the sample and which container to use.\n3. You give the sample in private, following the instructions so it isn't invalidated.\n4. It's sealed and labeled in front of you, and the alcohol test is done if it was requested.\n5. We tell you how and when the result documentation will be delivered.\n\n**Can medicines or food affect it?**\nSome prescription drugs, such as certain strong painkillers or medicines for sleep or anxiety, can show up on the test. That's why it matters to tell us what you take from the start and, if possible, bring the bottle or prescription with your name on it. Don't try to dilute the sample by drinking lots of water: it can come back invalid and you'd have to repeat it.\nIf your employer gave you a deadline, come in with time to spare: the Airline Drive clinic does this test seven days a week until 9 PM, no need to book a slot.",
    "icon": "Flask",
    "image": "/images/services/examen-alcohol-drogas.webp",
    "category": "examenes",
    "keywords": [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston"
    ],
    "keywordsEn": [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston"
    ],
    "features": [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado"
    ],
    "featuresEn": [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation"
    ],
    "highlighted": false,
    "order": 17
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    "descriptionEn": "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    "longDescription": "El electrocardiograma (EKG) registra en una gráfica las señales eléctricas que hacen latir a tu corazón. En Clínica Hispana Cruz lo hacemos en unos minutos, sin agujas ni dolor, como parte de un chequeo, de un examen para trabajo, deporte o cirugía, o cuando tienes molestias que hay que revisar.\n\n**¿Qué información da el EKG?**\nLa gráfica muestra si el corazón late a un ritmo regular, si va demasiado rápido o lento y cómo viaja la señal eléctrica entre sus cámaras. También puede dar pistas de un esfuerzo extra del corazón por presión alta o de daños de un problema anterior. Esa gráfica la lee el personal médico de la clínica, que te platica en español si todo se ve en orden o si conviene otro paso.\n\n**¿En qué casos se hace?**\n- Latidos que se aceleran sin motivo o que se sienten como un brinco en el pecho\n- Presión alta o diabetes que necesitan seguimiento\n- Mareos o cansancio al hacer esfuerzos que antes no te cansaban\n- Requisito antes de una cirugía, para un empleo o para practicar un deporte\n\n**¿Cómo prepararte?**\n- Ven con blusa o camisa aparte del pantalón; un vestido complica descubrir el pecho\n- Deja la crema corporal para después del estudio: los parches adhesivos se despegan con la piel grasosa\n- Sigue tomando tus medicinas y trae la lista\n- Si tienes un marcapasos, avísalo al llegar\n\n**¿Cómo es el estudio?**\n1. Te acuestas boca arriba en la camilla.\n2. Te pegan unos parches pequeños con cables en el pecho, las muñecas y los tobillos; si hay mucho vello, se rasura una zona chiquita.\n3. Te quedas quieto y respiras normal mientras el equipo registra el trazo.\n4. Al despegar los parches ya terminaste: puedes manejar, trabajar o comer como cualquier otro día.\n\n**¿Cuándo no esperar y llamar al 911?**\nSi tienes dolor u opresión en el pecho, sobre todo si se va hacia el brazo, la mandíbula o la espalda, falta de aire, sudor frío o desmayo, no vengas a la clínica: llama al 911 de inmediato. Para un EKG de rutina o de requisito, en cambio, puedes llegar a Airline Drive cualquier día entre 9 AM y 9 PM con el formulario que te pidieron.",
    "longDescriptionEn": "An electrocardiogram (EKG) records the electrical signals that make your heart beat as a tracing on paper or screen. At Clínica Hispana Cruz it takes just a few minutes, with no needles or pain, as part of a checkup, an exam for work, sports or surgery, or when you have symptoms that need a look.\n\n**What does the EKG tell you?**\nThe tracing shows whether your heart beats at a regular rhythm, whether it's too fast or too slow, and how the electrical signal travels between its chambers. It can also hint at extra strain from high blood pressure or damage from an earlier problem. Medical staff interpret the tracing and explain what they found in Spanish or English.\n\n**When is it done?**\n- A racing heartbeat for no reason, or a thump in your chest that feels like a skipped beat\n- High blood pressure or diabetes that needs follow-up\n- Dizziness or tiredness with effort that never used to wear you out\n- A requirement before surgery, for a job or for playing a sport\n\n**How do you get ready?**\n- Pick a top and pants rather than a dress, so uncovering your chest is simple\n- Save the body lotion for after the test: the sticky patches won't hold on oily skin\n- Keep taking your medicines and bring the list\n- If you have a pacemaker, say so when you arrive\n\n**What is the test like?**\n1. You lie face up and get comfortable.\n2. Small sticky patches with wires go on your chest, wrists and ankles; if there's a lot of hair, a tiny spot is shaved.\n3. For a short moment you keep still and breathe as usual while the tracing prints.\n4. Once the patches are peeled off you're done: you can drive, work or eat like any other day.\n\n**When should you skip the clinic and call 911?**\nIf you have chest pain or pressure, especially if it spreads to your arm, jaw or back, shortness of breath, a cold sweat or fainting, don't come to the clinic: call 911 right away. For a routine or required EKG, though, you can come to Airline Drive any day between 9 AM and 9 PM with the form you were given.",
    "icon": "Heartbeat",
    "image": "/images/services/electrocardiograma.webp",
    "category": "laboratorio",
    "keywords": [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston"
    ],
    "keywordsEn": [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish"
    ],
    "features": [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español"
    ],
    "featuresEn": [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish"
    ],
    "highlighted": false,
    "order": 18
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    "longDescription": "El ultrasonido usa ondas de sonido para formar imágenes de lo que hay dentro de tu cuerpo, sin radiación y sin agujas. En Clínica Hispana Cruz hacemos ultrasonidos abdominales, pélvicos, de embarazo y de tiroides o tejidos blandos, y te explicamos en español qué se está viendo y para qué sirve el estudio.\n\n**¿Qué zonas se pueden estudiar?**\n- Abdomen: hígado, vesícula y riñones, por ejemplo ante dolor después de comer o sospecha de piedras\n- Pelvis: útero, ovarios y vejiga, cuando hay dolor pélvico o sangrados irregulares\n- Embarazo: control del crecimiento y seguimiento del bebé\n- Tiroides y tejidos blandos: bolitas en el cuello o abultamientos bajo la piel\n\n**¿Cómo te preparas según el estudio?**\nPara el abdomen suele pedirse venir sin comer varias horas, porque la vesícula se ve mejor vacía de alimento y con menos gases. Para la pelvis y algunos ultrasonidos de embarazo temprano se pide la vejiga llena: tomar agua antes y aguantar las ganas de orinar hasta terminar. Para tiroides o tejidos blandos no hace falta preparación.\nSi tienes dudas sobre tu caso, pregúntanos por WhatsApp antes de venir para no perder el viaje.\n\n**¿Qué sientes durante el estudio?**\nTe acuestas en la camilla, se aplica un gel tibio sobre la piel y se desliza un transductor que envía las imágenes a la pantalla. Notarás que el transductor aprieta un poco, más todavía si llegaste con la vejiga llena, aunque no es doloroso. En la mayoría de los casos el estudio termina en poco tiempo y puedes volver a tus actividades enseguida.\n\n**¿Es seguro durante el embarazo?**\nSí. Como no usa radiación, el ultrasonido es el estudio de imagen que se usa de forma habitual para revisar al bebé en las distintas etapas del embarazo. Trae tus estudios anteriores y la fecha de tu última regla para que el seguimiento sea más completo.\n\n**¿Y después del ultrasonido?**\nEl equipo médico te explica los hallazgos y lo que significan para tu salud. Si el estudio muestra algo que requiere otro análisis, tratamiento o una referencia a un especialista, te orientamos sobre el siguiente paso. Como algunos ultrasonidos piden ayuno, la primera hora tras la apertura, a las 9 AM, suele ser la más cómoda para venir.",
    "longDescriptionEn": "Ultrasound uses sound waves to build images of what's inside your body, with no radiation and no needles. At Clínica Hispana Cruz we do abdominal, pelvic, pregnancy, and thyroid or soft-tissue ultrasounds, and we explain in Spanish or English what is on the screen and what the study is for.\n\n**Which areas can be checked?**\n- Abdomen: liver, gallbladder and kidneys, for example with pain after meals or suspected stones\n- Pelvis: uterus, ovaries and bladder, when there is pelvic pain or irregular bleeding\n- Pregnancy: tracking the baby's growth and follow-up\n- Thyroid and soft tissues: lumps in the neck or bumps under the skin\n\n**How do you prepare for each study?**\nFor the abdomen you're usually asked to skip food for several hours, since the gallbladder shows up better without food and with less gas. For the pelvis and some early pregnancy scans you'll need a full bladder: drink water beforehand and hold it until the scan is done. Thyroid and soft-tissue scans need no prep.\nIf you're unsure about your case, ask us on WhatsApp before coming in so the trip isn't wasted.\n\n**What do you feel during the scan?**\nOnce you're lying down, a warm gel is spread on your skin and a small wand is moved across it while the images appear on a monitor. The wand presses a bit, more so if you arrived with a full bladder, though it isn't painful. Most scans are over quickly and you can go right back to your day.\n\n**Is it safe during pregnancy?**\nYes. Because it uses no radiation, ultrasound is the imaging test routinely used to check on the baby at different stages of pregnancy. Bring your earlier studies and the date of your last period so the follow-up is more complete.\n\n**What happens after the ultrasound?**\nThe medical team explains the findings and what they mean for your health. If the scan shows something that needs another test, treatment or a referral to a specialist, we guide you on the next step. Since some ultrasounds require fasting, the first hour after we open at 9 AM is usually the easiest time to come.",
    "icon": "Monitor",
    "image": "/images/services/ultrasonido.webp",
    "category": "laboratorio",
    "keywords": [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston"
    ],
    "keywordsEn": [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston"
    ],
    "features": [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español"
    ],
    "featuresEn": [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 19
  },
  {
    "id": "examen-dot",
    "slug": "examen-dot",
    "title": "Examen Físico DOT - Licencia CDL",
    "titleEn": "DOT Physical Exam - CDL License",
    "shortTitle": "Examen DOT",
    "description": "Examen físico DOT en Houston, TX para licencia CDL, certificado el mismo día y en español. Con precios accesibles.",
    "descriptionEn": "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. With affordable pricing.",
    "longDescription": "Para manejar un camión, un autobús o cualquier vehículo comercial con CDL necesitas el examen físico del Departamento de Transporte (DOT) al día. En Clínica Hispana Cruz lo hacemos en español, revisamos contigo cada punto del formulario federal y, si cumples los estándares, te vas con tu certificado médico al terminar la visita.\n\n**¿Qué se revisa en el examen DOT?**\n- Agudeza visual y visión de colores, con o sin lentes\n- Audición, para comprobar que oyes bien a cierta distancia\n- Presión arterial y pulso\n- Muestra de orina para revisar azúcar, proteína y sangre\n- Revisión de cuerpo completo: se escuchan corazón y pulmones, se palpa el abdomen y se prueban columna y reflejos\n- Revisión de tu historial médico y de las medicinas que tomas\n\n**¿Qué llevar a la cita?**\n- Tu CDL o permiso de aprendizaje e identificación con foto\n- Lentes o lentes de contacto, y aparatos para la sordera si los usas\n- Lista de tus medicinas con nombre y dosis\n- Si tienes diabetes, apnea del sueño, problemas del corazón u otra condición, los papeles de tu tratamiento o una nota de quien te atiende\n\n**¿Cómo prepararte para pasar sin contratiempos?**\nToma tus medicinas de la presión o del azúcar como siempre; suspenderlas para el examen solo empeora las lecturas. Duerme bien la noche anterior y evita el café en exceso o el tabaco justo antes, porque pueden subir la presión. Llena con calma la parte del formulario que te toca y contesta con la verdad: ocultar una condición puede invalidar tu certificado.\n\n**¿Qué pasa al final del examen?**\n1. El equipo médico revisa los resultados contigo.\n2. Si cumples los requisitos, recibes tu certificado médico DOT para presentarlo donde corresponda.\n3. Si tienes una condición que hay que vigilar, como la presión alta, el certificado puede darse por un periodo más corto.\n4. Si falta información, te decimos qué documento traer para completar el examen.\n\n**¿Y si vengo saliendo de una ruta?**\nMuchos conductores llegan entre viajes, por eso atendemos sin cita y todos los días. Ven descansado y con tus papeles en una carpeta: el tráiler o la caja se puede quedar en casa, pero tu lista de medicinas no. La clínica está sobre Airline Drive y recibe a choferes de 9 AM a 9 PM.",
    "longDescriptionEn": "To drive a truck, a bus or any commercial vehicle with a CDL you need an up-to-date Department of Transportation (DOT) physical. At Clínica Hispana Cruz we do it in Spanish or English, go over every section of the federal form with you and, if you meet the standards, you leave with your medical certificate at the end of the visit.\n\n**What does the DOT exam check?**\n- Visual acuity and color vision, with or without glasses\n- Hearing, to confirm you can hear well at a set distance\n- Blood pressure and pulse\n- A urine sample to check for sugar, protein and blood\n- A head-to-toe check: listening to heart and lungs, feeling the abdomen, testing spine and reflexes\n- A review of your medical history and the medicines you take\n\n**What should you bring?**\n- Your CDL or learner's permit and a photo ID\n- Glasses or contact lenses, and hearing aids if you use them\n- Every medicine you take written down, with its name and dose\n- If you have diabetes, sleep apnea, heart problems or another condition, your treatment records or a note from whoever treats you\n\n**How do you prepare so it goes smoothly?**\nTake your blood pressure or diabetes medicines as usual; skipping them for the exam only makes the readings worse. Get a good night's sleep and avoid too much coffee or tobacco right before, since they can raise your blood pressure. Fill out your part of the form calmly and answer honestly: hiding a condition can void your certificate.\n\n**What happens at the end of the exam?**\n1. You sit down with the medical team to review what the exam found.\n2. If you meet the requirements, you receive your DOT medical certificate to present where needed.\n3. When something like high blood pressure needs closer follow-up, the certificate can come with a shorter validity.\n4. If information is missing, we tell you which document to bring to complete the exam.\n\n**What if I'm coming straight off a route?**\nMany drivers come in between trips, which is why we see patients without appointments every day. Come rested and with your papers in a folder: the trailer can stay home, but your medication list can't. The clinic sits on Airline Drive and sees drivers from 9 AM to 9 PM.",
    "icon": "Truck",
    "image": "/images/services/examen-dot.webp",
    "category": "examenes",
    "keywords": [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español"
    ],
    "keywordsEn": [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston"
    ],
    "features": [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español"
    ],
    "featuresEn": [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 20
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "title": "Examen Médico de Inmigración I-693 (Examen Migratorio)",
    "titleEn": "Immigration Medical Exam I-693",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 (examen migratorio) en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    "descriptionEn": "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    "longDescription": "Si estás tramitando tu residencia permanente, USCIS te va a pedir el examen médico del Formulario I-693. En Clínica Hispana Cruz lo hace un Civil Surgeon designado por USCIS, y al final recibes el formulario dentro de su sobre sellado para anexarlo a tu trámite de ajuste de estatus.\n\n**¿Qué revisa el Civil Surgeon en el I-693?**\n- Tu historia clínica y cualquier condición que tengas en tratamiento\n- Tu cartilla o registro de vacunas, dosis por dosis\n- Un examen físico general de pies a cabeza\n- Las pruebas de laboratorio que pide USCIS, entre ellas la de tuberculosis\n- Las vacunas que la lista de USCIS marque como pendientes en tu caso\n\n**¿Qué papeles te conviene llevar a la clínica de Airline Drive?**\n- Pasaporte u otra identificación oficial con foto\n- Tu registro de vacunas en papel, aunque esté incompleto o venga de tu país\n- Tu número A (Alien Number), si ya tienes uno asignado\n- Informes médicos de enfermedades crónicas o tratamientos previos de tuberculosis\n- La lista de los medicamentos que tomas a diario\n\n**¿Cómo avanza tu examen migratorio paso a paso?**\n1. Llegas a la clínica con tus documentos y llenas tus datos personales.\n2. El equipo médico compara tu registro de vacunas con lo que exige USCIS.\n3. El Civil Surgeon te hace el examen físico y te pregunta por tu historia de salud.\n4. Se toman las muestras para las pruebas de laboratorio requeridas.\n5. Se te aplican las vacunas que falten, si corresponde.\n6. Con todos los resultados listos, el formulario se cierra en su sobre sellado y te avisamos para que pases a recogerlo.\n\n**¿Qué pasa si te falta alguna vacuna o una prueba sale alterada?**\nNo te preocupes: es algo frecuente. Las vacunas pendientes se ponen en la misma clínica y quedan anotadas en tu formulario. Si una prueba necesita estudio adicional, el equipo médico te explica en español qué sigue y cómo afecta tu expediente.\n\n**¿Por qué no debes abrir el sobre?**\nUSCIS solo acepta el I-693 si llega con el sello intacto del Civil Surgeon. Guárdalo tal como te lo entregamos y pregunta el precio del examen completo antes de venir a 7640 Airline Dr, donde atendemos sin cita los siete días de la semana.",
    "longDescriptionEn": "If you are applying for a green card, USCIS will ask for the Form I-693 medical exam. At Clínica Hispana Cruz it is done by a USCIS-designated Civil Surgeon, and at the end you receive the form inside its sealed envelope, ready to add to your adjustment of status application.\n\n**What does the Civil Surgeon check on the I-693?**\n- Your medical history and any condition you are being treated for\n- Your vaccination card or records, dose by dose\n- A general head-to-toe physical exam\n- The lab tests USCIS requires, including the tuberculosis test\n- Any vaccines the USCIS list shows you are still missing\n\n**Which papers should you bring to our Airline Drive clinic?**\n- Passport or another official photo ID\n- Your paper vaccination record, even if it is incomplete or from your home country\n- Your A-Number (Alien Number), if one has already been assigned\n- Medical reports on chronic conditions or past tuberculosis treatment\n- A list of the medications you take every day\n\n**How does your immigration exam move forward, step by step?**\n1. You arrive with your documents and fill in your personal details.\n2. The medical team compares your vaccine record with what USCIS requires.\n3. The Civil Surgeon does the physical exam and asks about your health history.\n4. Samples are collected for the required lab tests.\n5. You receive any missing vaccines, if needed.\n6. Once every result is in, the form is closed in its sealed envelope and we let you know so you can pick it up.\n\n**What if you are missing a vaccine or a test comes back abnormal?**\nDon't worry, this is common. Missing vaccines are given right here at the clinic and recorded on your form. If a test needs further workup, the medical team explains in Spanish or English what comes next and how it affects your file.\n\n**Why must the envelope stay closed?**\nUSCIS only accepts the I-693 when the Civil Surgeon's seal is unbroken. Keep it exactly as we hand it to you, and ask the price of the full exam before coming to 7640 Airline Dr, where we see walk-in patients seven days a week.",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion houston",
      "examen migratorio houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston"
    ],
    "keywordsEn": [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston"
    ],
    "features": [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español"
    ],
    "featuresEn": [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish"
    ],
    "highlighted": false,
    "order": 21
  },
  {
    "id": "vacunas",
    "slug": "vacunas",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    "descriptionEn": "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Cruz aplicamos dos vacunas para adultos: la de la influenza (flu), que se renueva cada temporada, y el toxoide tetánico, el refuerzo que protege contra el tétanos. Te sirven si quieres pasar el invierno protegido o si te cortaste y no recuerdas tu última dosis.\n\n**¿Cuál de las dos necesitas ahora?**\n- Vacuna de la flu: los CDC la recomiendan cada año a casi todas las personas desde los 6 meses de edad; lo ideal es ponerla al empezar el otoño.\n- Toxoide tetánico: se refuerza cada 10 años en adultos.\n- Tras una herida sucia o profunda, puede tocarte el refuerzo antes, si ya pasaron 5 años o más desde la última dosis.\n- Si no sabes cuándo te vacunaste, el equipo médico te ayuda a decidir.\n\n**¿Qué debes avisar antes del pinchazo?**\nCuéntale al equipo médico si alguna vez tuviste una reacción alérgica fuerte a una vacuna, si hoy tienes fiebre alta o si padeciste el síndrome de Guillain-Barré. Un resfriado leve normalmente no impide vacunarte. También menciona si estás embarazada, para darte la orientación que corresponde a tu etapa.\n\n**¿Cómo es la visita de vacunación?**\n1. Confirmamos tus datos y repasamos tus antecedentes de salud.\n2. Te explicamos en español qué vacuna recibes y para qué sirve.\n3. Se aplica en el músculo del brazo, normalmente en el que menos usas.\n4. Te quedas unos minutos sentado en la sala por si te mareas.\n5. Te llevas anotada la fecha de la dosis para tu registro personal.\n\n**¿Qué es normal sentir después?**\nLo más frecuente es sentir el hombro pesado y sensible al dormir sobre ese lado, con algo de rojez donde entró la aguja; hay quien amanece cansado o con unas décimas de temperatura. Si notas dificultad para respirar, hinchazón de la cara o la garganta, o ronchas que se extienden, llama al 911 de inmediato. Guarda la tarjeta de tu dosis con tus papeles y pasa por Airline Drive cuando te toque la siguiente.",
    "longDescriptionEn": "At Clínica Hispana Cruz we give two adult vaccines: the influenza (flu) shot, renewed every season, and the tetanus toxoid booster that protects against tetanus. They help if you want to get through the winter protected, or if you got a cut and can't remember your last dose.\n\n**Which of the two do you need right now?**\n- Flu shot: the CDC recommends it every year for nearly everyone 6 months and older; early fall is the best time.\n- Tetanus toxoid: adults get a booster every 10 years.\n- After a dirty or deep wound, you may need it sooner if 5 or more years have passed since your last dose.\n- If you don't know when you were vaccinated, the medical team helps you decide.\n\n**What should you mention before the shot?**\nTell the medical team if you ever had a severe allergic reaction to a vaccine, if you have a high fever today, or if you have had Guillain-Barré syndrome. A mild cold usually does not stop you from getting vaccinated. Also mention if you are pregnant so we can give you guidance that fits your stage.\n\n**What happens during the vaccine visit?**\n1. We confirm your details and go over your health history.\n2. We explain in Spanish or English which vaccine you are getting and what it is for.\n3. It goes into the arm muscle, usually the arm you use less.\n4. You stay seated in the waiting area for a few minutes in case you feel dizzy.\n5. You leave with the date of the dose written down for your personal record.\n\n**What is normal to feel afterward?**\nThe most common thing is a heavy, tender shoulder when you sleep on that side, with some redness where the needle went in; some people wake up tired or slightly feverish. If you notice trouble breathing, swelling of the face or throat, or spreading hives, call 911 right away. Keep the card with your dose alongside your papers and stop by Airline Drive when the next one is due.",
    "icon": "Syringe",
    "image": "/images/services/vacunas.webp",
    "category": "tratamientos",
    "keywords": [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston"
    ],
    "keywordsEn": [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston"
    ],
    "features": [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 22
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "title": "Sueros Vitaminados Intravenosos (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) en Houston, TX: el equipo médico revisa tu salud antes de aplicarlos. En español, sin cita y sin seguro.",
    "descriptionEn": "Vitamin IV therapy in Houston, TX: the medical team reviews your health before it is given. In Spanish, walk-ins welcome, no insurance needed.",
    "longDescription": "La terapia IV o suero vitaminado se aplica gota a gota por una vena del brazo mientras estás sentado. En Clínica Hispana Cruz no se pone a nadie sin una revisión previa: el equipo médico conversa contigo, revisa tu salud y decide si el suero es apropiado para ti antes de colocar la vía.\n\n**¿Qué revisa el equipo médico antes de empezar?**\n- Tu presión, tu pulso y otros signos vitales medidos en ese momento\n- Enfermedades del corazón, de los riñones o del hígado\n- Alergias a medicamentos, al látex o a la cinta adhesiva\n- Los medicamentos y suplementos que tomas\n- Si estás embarazada o amamantando\n- Cómo te has sentido los últimos días\n\n**¿Cómo transcurre la sesión en la clínica?**\n1. Te sientas en un sillón cómodo y te explicamos el procedimiento en español.\n2. Se busca una vena cómoda del antebrazo, se desinfecta y se deja ahí un catéter fino de plástico.\n3. El suero baja despacio y el personal médico vigila la vía durante toda la aplicación.\n4. Cuando la bolsa se vacía, el personal saca el catéter y presiona el punto con algodón unos instantes.\n5. Antes de irte te damos indicaciones para cuidar el sitio del pinchazo.\n\n**¿Cuánto tiempo debes reservar?**\nLa duración depende del volumen del suero y de la velocidad que indique el equipo médico, así que calcula un rato tranquilo, sin prisas. Puedes leer, usar el celular o descansar mientras pasa. Come algo ligero antes de venir y avísanos si necesitas ir al baño a mitad de la sesión.\n\n**¿Qué preguntas vale la pena hacer?**\n- ¿Qué contiene exactamente el suero que me van a poner?\n- ¿Es compatible con mis medicamentos y mis condiciones?\n- ¿Qué molestias pueden aparecer y qué hago si se presentan?\n- ¿En qué se diferencia de una inyección de vitamina B12?\n\n**¿Cuándo debes avisar de inmediato?**\nSi durante la aplicación sientes ardor o hinchazón donde está la vía, mareo, palpitaciones, falta de aire o comezón en el cuerpo, díselo al personal en ese momento para que detenga el goteo y te revise. Pregunta el precio del suero en la recepción de Airline Drive antes de sentarte.",
    "longDescriptionEn": "A vitamin IV, or IV therapy, drips slowly through a vein in your arm while you sit back. At Clínica Hispana Cruz no one gets an IV without a check first: the medical team talks with you, reviews your health and decides whether the IV is appropriate for you before placing the line.\n\n**What does the medical team check before starting?**\n- Your blood pressure, pulse and other vital signs taken on the spot\n- Heart, kidney or liver conditions\n- Allergies to medications, latex or medical tape\n- The medications and supplements you take\n- Whether you are pregnant or breastfeeding\n- How you have been feeling the last few days\n\n**How does the session go at the clinic?**\n1. You sit in a comfortable chair and we explain the procedure in Spanish or English.\n2. A comfortable forearm vein is found and disinfected, and a thin plastic catheter is left in place.\n3. The fluid drips slowly while the medical staff watches the line the whole time.\n4. When the bag empties, the staff takes out the catheter and presses cotton on the spot for a moment.\n5. Before you leave, we tell you how to care for the needle site.\n\n**How much time should you set aside?**\nThe length depends on the volume of the IV and the drip rate the medical team sets, so plan for an unhurried visit. You can read, use your phone or rest while it runs. Eat something light beforehand and let us know if you need a restroom break midway.\n\n**Which questions are worth asking?**\n- What exactly is in the IV I am getting?\n- Is it compatible with my medications and conditions?\n- What side effects could show up, and what do I do if they do?\n- How is it different from a vitamin B12 shot?\n\n**When should you speak up right away?**\nIf during the drip you feel burning or swelling where the line is, dizziness, a racing heart, shortness of breath or itching, tell the staff at once so they can stop the flow and check you. Ask the IV price at the Airline Drive front desk before you sit down.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados houston",
      "suero intravenoso vitaminado houston",
      "vitaminas iv houston",
      "terapia iv houston",
      "suero de vitaminas houston"
    ],
    "keywordsEn": [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv therapy clinic houston",
      "vitamin drip houston"
    ],
    "features": [
      "Revisión médica previa",
      "Aplicación por personal médico",
      "Sesión en la clínica",
      "Atención en español"
    ],
    "featuresEn": [
      "Medical review beforehand",
      "Administered by medical staff",
      "Session at the clinic",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 23
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "Cuando una cortada queda abierta, sangra sin parar o sus bordes no se juntan, lo indicado es cerrarla con puntos. En Clínica Hispana Cruz el equipo médico limpia la herida, adormece la zona con anestesia local y la sutura en la misma consulta, sin cita, para que cicatrice mejor y con menos riesgo de infección.\n\n**¿Cómo sabes si tu cortada necesita puntos?**\n- Al doblar el dedo, la rodilla o el codo, la cortada se abre como una boquita\n- Es profunda y se ve grasa o tejido bajo la piel\n- La sangre sigue empapando el trapo tras diez minutos de apretar firme\n- Te la hiciste en la cara, los labios o la palma, donde importa cómo cierre\n- Tiene tierra, vidrio u otros restos adentro\n\n**¿Qué haces mientras llegas a la clínica?**\nPresiona la herida con una gasa o un trapo limpio y mantenla elevada si puedes. Enjuágala con agua limpia, pero no le pongas pomadas, polvos ni remedios caseros. Si la sangre sale a chorros, no se detiene con presión o la cortada es muy extensa, llama al 911 o ve a la sala de emergencias.\n\n**¿Qué pasa en la camilla?**\n1. El equipo médico revisa la profundidad de la herida y si hay algo dentro.\n2. Se lava y desinfecta a fondo la zona.\n3. Se aplica anestesia local para que no sientas el cierre.\n4. Se colocan los puntos y se cubren con un vendaje.\n5. Te explicamos en español cómo cuidarlos en casa y cuándo regresar para retirarlos.\n\n**¿Cómo cuidas los puntos en casa?**\n- No mojes la gasa hasta la fecha que te anote el equipo médico\n- Lava la zona con suavidad y sécala a toques, sin tallar\n- No te rasques ni tires de los hilos\n- Vuelve antes si notas pus, mal olor, enrojecimiento creciente o fiebre\n\n**¿Y la vacuna del tétanos?**\nSi la cortada fue con algo sucio u oxidado y tu último refuerzo fue hace años, pregunta por el toxoide tetánico durante la misma visita. Una cortada no espera: entra directo a nuestra clínica de Airline Drive en cuanto te pase, de 9 AM a 9 PM.",
    "longDescriptionEn": "When a cut stays open, keeps bleeding or its edges won't come together, it needs stitches. At Clínica Hispana Cruz the medical team cleans the wound, numbs the area with local anesthetic and closes it during the same visit, no appointment needed, so it heals better with less risk of infection.\n\n**How can you tell if your cut needs stitches?**\n- Bending the finger, knee or elbow makes the cut gape open\n- It is deep and you can see fat or tissue under the skin\n- Blood still soaks through the cloth after ten minutes of firm pressing\n- It's on your face, lips or palm, where the way it closes matters\n- Dirt, glass or other debris is stuck inside\n\n**What should you do on the way to the clinic?**\nPress on the wound with gauze or a clean cloth and keep it raised if you can. Rinse it with clean water, but skip ointments, powders and home remedies. If blood is spurting, won't stop with pressure, or the cut is very large, call 911 or go to the emergency room.\n\n**What happens on the exam table?**\n1. The medical team checks how deep the wound is and whether anything is inside.\n2. The area is washed and disinfected thoroughly.\n3. Local anesthetic is applied so you don't feel the closure.\n4. The stitches go in and are covered with a dressing.\n5. We explain in Spanish or English how to care for them at home and when to come back to have them removed.\n\n**How do you care for stitches at home?**\n- Don't get the gauze wet before the date the medical team writes down for you\n- Wash the area gently and pat it dry, without rubbing\n- Don't scratch or pull on the threads\n- Come back sooner if you notice pus, a bad smell, spreading redness or fever\n\n**What about the tetanus shot?**\nIf the cut came from something dirty or rusty and your last booster was years ago, ask about the tetanus toxoid during the same visit. A cut can't wait: walk into our Airline Drive clinic as soon as it happens, between 9 AM and 9 PM.",
    "icon": "Scissors",
    "image": "/images/services/suturas-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston"
    ],
    "keywordsEn": [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston"
    ],
    "features": [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 24
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "La curación de heridas es la atención que necesita una lesión después del primer momento: limpiarla, cambiar sus vendajes y vigilar que vaya sanando. En Clínica Hispana Cruz el equipo médico te acompaña con curaciones periódicas hasta que la piel cierre, y te enseña a cuidarla entre una visita y otra.\n\n**¿Qué heridas se atienden con curaciones?**\n- Heridas de una cirugía que necesitan revisión y cambio de apósito\n- Úlceras en piernas o pies que tardan en cerrar\n- Quemaduras leves con ampollas pequeñas\n- Raspones grandes y heridas que ya se ven irritadas\n- Cortadas que ya fueron suturadas y requieren control\n\n**¿Cómo es cada curación?**\n1. Se retira con cuidado el vendaje anterior.\n2. El equipo médico observa el color, el tamaño y la secreción de la herida.\n3. Se limpia y desinfecta, retirando restos que estorban la cicatrización.\n4. Se coloca un apósito adecuado al tipo de herida y se venda de nuevo.\n5. Te decimos cuándo volver para el siguiente cambio.\n\n**¿Por qué tardan más algunas heridas?**\nLa diabetes, la mala circulación, el tabaco y algunas medicinas pueden hacer que una herida sane despacio. Si tienes diabetes, revisa tus pies a diario y no esperes a que una ampolla empeore. Si la herida no mejora con las curaciones, el equipo médico orienta la referencia a un especialista.\n\n**¿Qué señales indican infección?**\n- Un halo rojo que cada día abarca más piel alrededor de la lesión\n- Calor, más dolor o hinchazón que el día anterior\n- Pus, secreción verdosa o mal olor\n- Rayas rojas que suben por la piel o fiebre\n\n**¿Cómo la cuidas entre visitas?**\nLávate las manos antes de tocar el vendaje, mantenlo seco y no lo cambies por tu cuenta si no te lo indicaron. Una quemadura extensa o en la cara, o una herida con fiebre alta y malestar general, requiere sala de emergencias. Trae a cada curación los apósitos que te hayan sobrado y la lista de tus medicamentos.",
    "longDescriptionEn": "Wound care is the attention an injury needs after the first moment: cleaning it, changing its dressings and making sure it keeps healing. At Clínica Hispana Cruz the medical team sees you for regular dressing visits until the skin closes, and shows you how to look after it between visits.\n\n**Which wounds are treated with ongoing care?**\n- Surgical wounds that need checking and a dressing change\n- Leg or foot ulcers that are slow to close\n- Minor burns with small blisters\n- Large scrapes and wounds that already look irritated\n- Cuts that were stitched and need follow-up\n\n**What happens at each dressing visit?**\n1. The old dressing is removed carefully.\n2. The medical team looks at the wound's color, size and drainage.\n3. It is cleaned and disinfected, removing debris that slows healing.\n4. A dressing suited to the wound type goes on and is wrapped again.\n5. We tell you when to come back for the next change.\n\n**Why do some wounds take longer?**\nDiabetes, poor circulation, smoking and some medications can slow healing. If you have diabetes, check your feet every day and don't wait for a blister to get worse. If the wound does not improve with care, the medical team arranges a referral to a specialist.\n\n**Which signs point to infection?**\n- A red ring that covers more skin around the injury each day\n- Warmth, more pain or swelling than the day before\n- Pus, greenish drainage or a bad smell\n- Red streaks running up the skin, or fever\n\n**How do you care for it between visits?**\nWash your hands before touching the dressing, keep it dry and don't change it yourself unless you were told to. A large burn, a burn on the face, or a wound with high fever and feeling very sick needs the emergency room. Bring any leftover dressings and your medication list to each visit.",
    "icon": "FirstAid",
    "image": "/images/services/curacion-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston"
    ],
    "keywordsEn": [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston"
    ],
    "features": [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español"
    ],
    "featuresEn": [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 25
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "Una cirugía menor es un procedimiento corto, con anestesia local, para quitar bultos o lesiones de la piel sin hospitalización. En Clínica Hispana Cruz el equipo médico extrae lunares, quistes y lipomas de forma ambulatoria: entras caminando, te atienden en el consultorio y regresas a casa al terminar.\n\n**¿Qué lesiones se pueden retirar?**\n- Lunares que molestan, se rozan con la ropa o te preocupan\n- Quistes bajo la piel, como los que aparecen en la espalda o el cuello\n- Lipomas: bolitas de grasa suaves y móviles, comunes en hombros, brazos o tronco\n- Otras lesiones pequeñas de la piel que el equipo médico considere aptas\n\n**¿Cómo se decide si es candidata a cirugía menor?**\nPrimero se evalúa la lesión: su tamaño, su profundidad y desde cuándo la tienes. Si un lunar cambió de forma, de color o de tamaño, sangra sin motivo o tiene bordes irregulares, cuéntalo. Cuando el aspecto de la lesión lo requiere, el equipo médico orienta la referencia a un especialista en lugar de retirarla en la clínica.\n\n**¿Qué ocurre el día del procedimiento?**\n1. Se marca la zona y se limpia con antiséptico.\n2. Se inyecta anestesia local para dormir solo esa área.\n3. Se retira la lesión con instrumental estéril.\n4. Se cierra la piel con puntos cuando hace falta y se coloca un vendaje.\n5. Antes de irte recibes indicaciones escritas sobre cómo cuidar la herida.\n\n**¿Cómo te preparas?**\nDesayuna normal, usa ropa holgada que deje la zona a la vista y trae la lista de tus medicamentos. Cuéntanos de antemano si usas medicina para adelgazar la sangre, como la aspirina diaria, si alguna anestesia dental te cayó mal o si vives con diabetes: con eso el equipo médico ajusta el procedimiento.\n\n**¿Qué esperar en los días siguientes?**\nEs normal un poco de molestia, que suele calmarse con un analgésico de venta libre. Regresa a la clínica si la herida se pone roja, caliente o con pus, o si tienes fiebre. Para el retiro de puntos te damos la fecha al terminar. Si notaste un bulto nuevo, enséñalo en la clínica de Airline Drive antes de que siga creciendo.",
    "longDescriptionEn": "Minor surgery is a short procedure under local anesthetic to remove skin lumps or lesions without a hospital stay. At Clínica Hispana Cruz the medical team removes moles, cysts and lipomas on an outpatient basis: you walk in, you are treated in the exam room and you go home when it's done.\n\n**Which lesions can be removed?**\n- Moles that bother you, rub against clothing or worry you\n- Cysts under the skin, like the ones that show up on the back or neck\n- Lipomas: soft, movable fatty lumps, common on the shoulders, arms or trunk\n- Other small skin lesions the medical team considers suitable\n\n**How is it decided whether minor surgery fits?**\nFirst the lesion is evaluated: its size, depth and how long you've had it. If a mole has changed shape, color or size, bleeds for no reason or has irregular borders, say so. When the lesion's appearance calls for it, the medical team arranges a referral to a specialist instead of removing it at the clinic.\n\n**What happens on the day of the procedure?**\n1. The area is marked and cleaned with antiseptic.\n2. Local anesthetic is injected to numb only that spot.\n3. The lesion is removed with sterile instruments.\n4. When the opening calls for it, a few stitches bring the skin together before a bandage goes on top.\n5. Before you leave, you get written instructions for wound care.\n\n**How do you get ready?**\nEat breakfast as usual, wear loose clothing that leaves the area easy to reach and bring your medication list. Tell us ahead of time if you take a blood thinner such as daily aspirin, if a dental numbing shot ever disagreed with you, or if you live with diabetes, so the medical team can adjust the procedure.\n\n**What to expect over the next few days?**\nSome soreness is normal and usually eases with an over-the-counter pain reliever. Come back if the wound turns red, warm or oozes pus, or if you run a fever. We give you the date for stitch removal when we finish. If you have noticed a new lump, show it at our Airline Drive clinic before it keeps growing.",
    "icon": "Scissors",
    "image": "/images/services/cirugias-menores.webp",
    "category": "tratamientos",
    "keywords": [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston"
    ],
    "keywordsEn": [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston"
    ],
    "features": [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 26
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "Piensa en un absceso como una bolsita de pus atrapada bajo la piel, que forma una bola roja y caliente cuyo dolor sube día con día. Cuando ya está lleno, casi nunca se resuelve solo. En Clínica Hispana Cruz el equipo médico lo abre y lo vacía con anestesia local en la misma consulta, sin cita, y te indica cómo seguir.\n\n**¿Cómo reconoces un absceso?**\n- Bulto que duele al tocarlo y crece con los días\n- Piel tirante, roja y caliente alrededor\n- Punta blanca o amarillenta en el centro\n- A veces fiebre o malestar general\n- Suele aparecer en axilas, ingles, glúteos o donde roza la ropa\n\n**¿Por qué no debes reventarlo en casa?**\nApretarlo o pincharlo con una aguja puede empujar la infección hacia capas más profundas y extenderla a la piel de alrededor. Mientras llegas, puedes poner compresas tibias y limpias varias veces al día, sin presionar. Cuando la bola sale en la cara o junto al ojo, o cuando vives con diabetes o con defensas bajas, no lo dejes para después.\n\n**¿Cómo se drena?**\n1. Se desinfecta la superficie del bulto y se adormece el área con una inyección local.\n2. Se hace un corte pequeño en la parte más blanda para que salga el pus.\n3. Se lava el interior de la cavidad.\n4. Si la cavidad es amplia, se rellena con una tira de gasa que ayuda a que siga saliendo lo que quede.\n5. Se cubre con un vendaje y el equipo médico decide si necesitas antibiótico.\n\n**¿Qué cuidados siguen después?**\n- Cambia el vendaje como te indiquen y lávate las manos antes\n- Es normal que salga un poco de líquido los primeros días\n- Si te recetaron antibiótico, tómalo completo aunque te sientas mejor\n- Regresa a la revisión que te indique el equipo médico\n\n**¿Cuándo ir a urgencias?**\nSi aparecen rayas rojas que suben por la piel, fiebre alta con escalofríos, el enrojecimiento avanza muy rápido o te sientes muy mal, ve a una sala de emergencias o llama al 911. Para un absceso que te late y no te deja sentarte, la clínica de Airline Drive te recibe por orden de llegada de 9 AM a 9 PM.",
    "longDescriptionEn": "Think of an abscess as a small pocket of pus trapped under the skin, forming a red, hot bump whose pain climbs day after day. Once it fills up, it rarely clears on its own. At Clínica Hispana Cruz the medical team opens and empties it under local anesthetic during the same visit, with no appointment, and tells you what to do next.\n\n**How do you recognize an abscess?**\n- A lump that hurts to the touch and grows over several days\n- Tight, red, warm skin around it\n- A white or yellowish head in the center\n- Sometimes fever or feeling unwell\n- Often shows up in the armpits, groin, buttocks or where clothing rubs\n\n**Why shouldn't you pop it at home?**\nPressing on it or jabbing it with a sewing needle may drive the bacteria further in and let the redness spread. On your way in, you can apply clean warm compresses several times a day without pressing. When the bump shows up on your face or next to an eye, or you live with diabetes or low immunity, don't put it off.\n\n**How is it drained?**\n1. The surface of the lump is disinfected and the area is numbed with a local injection.\n2. A small cut over the softest point lets the pus drain out.\n3. The inside of the pocket is rinsed.\n4. If the pocket is large, it is packed with a gauze strip that helps whatever remains keep coming out.\n5. It is covered with a dressing, and the medical team decides whether you need an antibiotic.\n\n**What care comes afterward?**\n- Change the dressing as instructed, washing your hands first\n- A little fluid draining in the first days is normal\n- If you were prescribed an antibiotic, finish it even if you feel better\n- Come back for the follow-up the medical team sets\n\n**When should you go to the ER?**\nIf red streaks run up the skin, you get a high fever with chills, the redness spreads very fast or you feel very sick, go to an emergency room or call 911. For an abscess that throbs and keeps you from sitting down, our Airline Drive clinic sees you in order of arrival from 9 AM to 9 PM.",
    "icon": "Drop",
    "image": "/images/services/drenaje-abscesos.webp",
    "category": "tratamientos",
    "keywords": [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston"
    ],
    "keywordsEn": [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston"
    ],
    "features": [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 27
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "Se habla de uña encarnada o enterrada cuando la orilla de la uña crece hacia dentro de la carne, y el dedo gordo del pie es el que más lo sufre. En Clínica Hispana Cruz el equipo médico retira la parte que se entierra con anestesia local, en la misma consulta, y trata la infección si ya la hay, para que puedas volver a usar zapato sin dolor.\n\n**¿Qué molestias te avisan?**\n- Dolor al presionar el costado del dedo o al ponerte el zapato\n- Piel roja e hinchada junto a la uña\n- Pus, sangrado o carne que crece sobre el borde\n- Molestias que vuelven aunque te hayas cortado la uña\n\n**¿Por qué no conviene arreglarla tú mismo?**\nCortar la esquina en curva o escarbar debajo de la uña con tijeras deja un pico que vuelve a enterrarse y abre la puerta a una infección peor. Si tienes diabetes, mala circulación o adormecimiento en los pies, no lo intentes en casa: una pequeña herida en el pie puede complicarse.\n\n**¿Cómo es el procedimiento?**\n1. El equipo médico revisa el dedo y qué tanto está afectado.\n2. Se duerme todo el dedo con una inyección cerca de donde se une al pie.\n3. Con el dedo ya dormido, se corta y se saca la orilla que se metió en la piel.\n4. Se limpia la zona y se coloca un vendaje.\n5. Si hay infección, se indica el tratamiento que corresponda.\n\n**¿Cómo es la recuperación?**\nPuedes caminar al salir de la consulta. Ven con sandalia o zapato abierto, porque el dedo queda vendado. En casa mantén el pie limpio, cambia el vendaje como se te indique y regresa si el dolor o el enrojecimiento aumentan en lugar de bajar. Si el dedo ya te late al caminar, pásate por la clínica de Airline Drive con calzado abierto y te atendemos sin cita.\n\n**¿Qué hábitos evitan que se vuelva a enterrar?**\n- Recorta las uñas de los pies en recto, dejando las puntas a la vista\n- No las dejes demasiado cortas\n- Evita zapatos de punta estrecha o tenis que te aprieten al frente\n- Seca bien entre los dedos después de bañarte",
    "longDescriptionEn": "A toenail is called ingrown when its side edge grows down into the flesh, and the big toe takes the brunt most often. At Clínica Hispana Cruz the medical team removes the buried part under local anesthetic during the same visit, and treats any infection that is already there, so you can wear shoes again without pain.\n\n**Which symptoms give it away?**\n- Pain when pressing the side of the toe or putting on shoes\n- Red, swollen skin next to the nail\n- Pus, bleeding or tissue growing over the edge\n- Discomfort that keeps returning even after trimming the nail\n\n**Why shouldn't you fix it yourself?**\nCutting the corner in a curve or digging under the nail with scissors leaves a spike that grows back into the skin and opens the door to a worse infection. If you have diabetes, poor circulation or numbness in your feet, don't try it at home: a small wound on the foot can turn serious.\n\n**What is the procedure like?**\n1. The medical team examines the toe and how much of it is affected.\n2. The whole toe is numbed with a shot near where it joins the foot.\n3. With the toe numb, the edge that grew into the skin is trimmed and lifted out.\n4. The area is cleaned and a dressing goes on.\n5. If there is infection, the appropriate treatment is prescribed.\n\n**What is recovery like?**\nYou can walk out of the visit on your own. Come in sandals or open-toe shoes, because the toe will be bandaged. At home keep the foot clean, change the dressing as instructed and come back if pain or redness gets worse instead of better. If your toe already throbs when you walk, stop by our Airline Drive clinic in open shoes and we'll see you without an appointment.\n\n**Which habits stop the nail from digging in again?**\n- Cut toenails straight, leaving the corners visible\n- Don't cut them too short\n- Skip narrow pointy shoes or sneakers that pinch at the front\n- Dry well between your toes after bathing",
    "icon": "Bone",
    "image": "/images/services/unas-encarnadas.webp",
    "category": "tratamientos",
    "keywords": [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston"
    ],
    "keywordsEn": [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston"
    ],
    "features": [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 28
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Farmacia dentro de la clínica en Houston, TX: los medicamentos indicados en tu consulta se entregan ahí mismo, más productos de venta libre.",
    "descriptionEn": "In-clinic pharmacy in Houston, TX: the medications prescribed during your visit are handed to you on site, plus over-the-counter products.",
    "longDescription": "Cuando el equipo médico te indica un tratamiento en tu consulta, el medicamento se te entrega ahí mismo en Clínica Hispana Cruz, antes de salir. Así no tienes que hacer otra parada con un malestar encima, y te vas a casa sabiendo en español cómo y cuándo tomarlo.\n\n**¿Qué te llevas de la farmacia al salir de la consulta?**\n- Los medicamentos que te indicaron en la consulta, de marca o genéricos\n- Medicamentos de venta libre para el dolor, la fiebre, la gripe o las alergias\n- Explicación del personal sobre la dosis y el horario de cada uno\n\n**¿Cómo funciona al terminar tu consulta?**\n1. El equipo médico te revisa y decide qué tratamiento necesitas.\n2. Pasas al área de farmacia dentro de la misma clínica.\n3. Te entregan el medicamento con su etiqueta e indicaciones.\n4. Te explican cuántas veces al día tomarlo, si va con comida y por cuántos días.\n5. Resuelves tus dudas antes de irte, sin prisas.\n\n**¿Qué debes avisar antes de recibir tu medicamento?**\nComenta si eres alérgico a algún medicamento, si estás embarazada o amamantando y qué otras medicinas, vitaminas o tés tomas. Trae una foto de las cajas o una lista: algunas combinaciones no se llevan bien y el equipo médico prefiere saberlo desde el principio.\n\n**¿Cómo tomarlo bien en casa?**\n- Respeta la dosis y el horario, aunque ya te sientas mejor\n- Termina los antibióticos completos si así te lo indicaron\n- No compartas tu tratamiento con otros familiares\n- Guarda las medicinas lejos de los niños y del calor\n\n**¿Y si algo te cae mal?**\nSi aparecen ronchas, comezón fuerte, vómito o te sientes peor, deja de tomarlo y llámanos para orientarte. Si se te hincha la cara o te falta el aire, llama al 911. Cuando una dosis te genere dudas en casa, escríbenos por WhatsApp a la clínica de Airline Drive.",
    "longDescriptionEn": "When the medical team prescribes treatment during your visit, you get the medication right there at Clínica Hispana Cruz before you leave. That spares you another stop while you are feeling sick, and you head home knowing, in Spanish or English, how and when to take it.\n\n**What can you take home from the pharmacy after your visit?**\n- The medications prescribed during your visit, brand-name or generic\n- Over-the-counter medicines for pain, fever, colds or allergies\n- Staff explanation of the dose and schedule for each one\n\n**How does it work once your visit ends?**\n1. The medical team examines you and decides which treatment you need.\n2. You go to the pharmacy area inside the same clinic.\n3. You receive the medication with its label and directions.\n4. Staff explains how many times a day to take it, whether with food and for how many days.\n5. You get your questions answered before leaving, with no rush.\n\n**What should you mention before getting your medication?**\nLet us know if you are allergic to any medicine, if you are pregnant or breastfeeding, and which other medicines, vitamins or teas you take. Bring a photo of the boxes or a list: some combinations don't mix well, and the medical team wants to know from the start.\n\n**How do you take it correctly at home?**\n- Stick to the dose and schedule, even once you feel better\n- Finish antibiotics completely if you were told to\n- Don't share your treatment with other family members\n- Store medicines away from children and heat\n\n**What if something doesn't agree with you?**\nIf you get hives, strong itching, vomiting or feel worse, stop taking it and call us for guidance. If your face swells or you can't breathe, call 911. When a dose leaves you unsure at home, message our Airline Drive clinic on WhatsApp.",
    "icon": "Pill",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia dentro de la clinica houston",
      "medicamentos en la consulta houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "in-clinic pharmacy houston",
      "medications at your visit houston"
    ],
    "features": [
      "Medicamentos indicados en la consulta",
      "Medicamentos de venta libre (OTC)",
      "Indicaciones de uso en español",
      "Sin ir a otra farmacia"
    ],
    "featuresEn": [
      "Medications prescribed at your visit",
      "Over-the-counter (OTC) medications",
      "Usage instructions in Spanish",
      "No trip to another pharmacy"
    ],
    "highlighted": false,
    "order": 29
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    slug: "examen-testosterona",
    title: "Revisa tu Testosterona",
    titleEn: "Testosterone Check",
    price: "$79",
    blurb:
      "¿Cansado, con menos energía o con menos deseo sexual? Revisa tu testosterona con examen de orina incluido y consulta médica gratis. Precio regular $220, ahora por solo $79.",
    blurbEn:
      "Tired, low on energy, or experiencing less sexual desire? Check your testosterone with a urine test included and a free medical consultation. Regular price $220, now only $79.",
    includes: [
      "Examen de testosterona",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Testosterone test",
      "Urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/examen-testosterona.webp",
    alt: "Promoción de examen de testosterona por $79 con examen de orina y consulta médica gratis en Clínica Hispana Cruz Houston",
    altEn: "Testosterone test promotion for $79 with urine test and free medical consultation at Clínica Hispana Cruz Houston",
    order: 0,
  },
  {
    slug: "salud-mamaria",
    title: "Evaluación Integral de Salud Mamaria",
    titleEn: "Comprehensive Breast Health Evaluation",
    price: "$175",
    blurb:
      "¿Hace cuánto no revisas tus senos? Evaluación integral de salud mamaria con ultrasonido mamario bilateral, examen general de sangre y consulta médica gratis. Precio regular $350, ahora por solo $175.",
    blurbEn:
      "How long since your last breast check? Comprehensive breast health evaluation with bilateral breast ultrasound, general blood test and a free medical consultation. Regular price $350, now only $175.",
    includes: [
      "Ultrasonido mamario bilateral",
      "Examen general de sangre",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Bilateral breast ultrasound",
      "General blood test",
      "Free medical consultation",
    ],
    image: "/images/promotions/salud-mamaria.webp",
    alt: "Promoción de evaluación integral de salud mamaria por $175 con ultrasonido mamario bilateral, examen general de sangre y consulta médica gratis en Clínica Hispana Cruz Houston",
    altEn: "Comprehensive breast health evaluation promotion for $175 with bilateral breast ultrasound, general blood test and free medical consultation at Clínica Hispana Cruz Houston",
    order: 1,
  },
  {
    slug: "chequeo-prostata",
    title: "Chequeo Completo de Próstata",
    titleEn: "Complete Prostate Checkup",
    price: "$149",
    blurb:
      "Chequea tu salud hoy y gana tranquilidad: PSA en sangre, ultrasonido prostático y examen de orina, con consulta gratis. Precio regular $300, ahora en promoción por $149.",
    blurbEn:
      "Check your health today and gain peace of mind: blood PSA, prostate ultrasound and urine test, with a free consultation. Regular price $300, now on promotion for $149.",
    includes: [
      "Examen de PSA (próstata) en sangre",
      "Ultrasonido prostático",
      "Examen de orina",
      "Consulta gratis",
    ],
    includesEn: [
      "Blood PSA (prostate) test",
      "Prostate ultrasound",
      "Urine test",
      "Free consultation",
    ],
    image: "/images/promotions/chequeo-prostata.webp",
    alt: "Promoción de chequeo completo de próstata por $149 con PSA, ultrasonido prostático y examen de orina en Clínica Hispana Cruz Houston",
    altEn: "Complete prostate checkup promotion for $149 with PSA, prostate ultrasound and urine test at Clínica Hispana Cruz Houston",
    order: 2,
  },
  {
    slug: "chequeo-mujer-ultrasonido",
    title: "Chequeo de la Mujer con Ultrasonido",
    titleEn: "Women's Checkup with Ultrasound",
    price: "$179",
    blurb:
      "¿Hace cuánto no revisas tu salud femenina? Chequeo completo con ultrasonido pélvico, Papanicolaou y examen de orina, más consulta médica gratis. Precio regular $300, ahora por solo $179.",
    blurbEn:
      "How long since you last checked your feminine health? Complete checkup with a pelvic ultrasound, Pap smear and urine test, plus a free medical consultation. Regular price $300, now only $179.",
    includes: [
      "Ultrasonido pélvico",
      "Examen de Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-mujer-ultrasonido.webp",
    alt: "Promoción de chequeo completo de la mujer por $179 con ultrasonido pélvico, Papanicolaou y examen de orina en Clínica Hispana Cruz Houston",
    altEn: "Complete women's checkup promotion for $179 with pelvic ultrasound, Pap smear and urine test at Clínica Hispana Cruz Houston",
    order: 3,
  },
  {
    slug: "testosterona-baja",
    title: "Señales de Testosterona Baja",
    titleEn: "Signs of Low Testosterone",
    price: null,
    blurb:
      "¿Cansancio, menos deseo sexual y aumento de barriga? No siempre es la edad: podría ser testosterona baja. Un examen de sangre puede medir tus niveles, y detectar a tiempo hace la diferencia.",
    blurbEn:
      "Tiredness, less sexual desire and belly gain? It's not always your age: it could be low testosterone. A blood test can measure your levels, and catching it early makes the difference.",
    includes: [
      "Cansancio constante",
      "Menos deseo sexual",
      "Aumento de barriga",
      "Pérdida de fuerza o molestias musculares",
    ],
    includesEn: [
      "Constant tiredness",
      "Less sexual desire",
      "Belly gain",
      "Loss of strength or muscle discomfort",
    ],
    image: "/images/promotions/testosterona-baja.webp",
    alt: "Señales de testosterona baja como cansancio, menos deseo sexual y aumento de barriga, información de Clínica Hispana Cruz Houston",
    altEn: "Signs of low testosterone such as tiredness, less sexual desire and belly gain, information from Clínica Hispana Cruz Houston",
    order: 4,
  },
  {
    slug: "salud-prostata",
    title: "Señales de Alerta de la Próstata",
    titleEn: "Prostate Warning Signs",
    price: null,
    blurb:
      "Orinar más de una vez cada noche, un chorro que sale con poca fuerza o tardar en arrancar son molestias que muchos hombres pasados los 40 van dejando para después. En la clínica se revisan en una consulta para encontrar la causa a tiempo.",
    blurbEn:
      "Waking up more than once a night to pee, a stream that comes out with little force or trouble getting it started are things many men past 40 keep putting off. At the clinic they are checked during a visit so the cause is found early.",
    includes: [
      "Chorro débil",
      "Dificultad para empezar a orinar",
      "Orinar varias veces de noche",
      "Hombres mayores de 40: presta atención",
    ],
    includesEn: [
      "Weak stream",
      "Difficulty starting to urinate",
      "Urinating several times at night",
      "Men over 40: pay attention",
    ],
    image: "/images/promotions/salud-prostata.webp",
    alt: "Señales de alerta de próstata agrandada como chorro débil y levantarse de noche a orinar, información de Clínica Hispana Cruz Houston",
    altEn: "Enlarged prostate warning signs such as a weak stream and getting up at night to urinate, information from Clínica Hispana Cruz Houston",
    order: 5,
  },
  {
    slug: "examen-completo-hombres",
    title: "Examen Completo para Hombres",
    titleEn: "Complete Checkup for Men",
    price: "$89",
    blurb:
      "Examen completo para hombres que evalúa la salud urinaria, de próstata y los niveles de testosterona, con consulta médica incluida sin costo.",
    blurbEn:
      "A complete checkup for men that evaluates urinary health, prostate health, and testosterone levels, with a medical consultation included at no cost.",
    includes: [
      "Examen de orina",
      "Examen de próstata",
      "Examen de testosterona",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Urine test",
      "Prostate test",
      "Testosterone test",
      "Free medical consultation",
    ],
    image: "/images/promotions/examen-completo-hombres.webp",
    alt: "Promoción de examen completo para hombres por $89 con orina, próstata y testosterona en Clínica Hispana Cruz Houston",
    altEn: "Complete checkup for men promotion for $89 with urine, prostate and testosterone tests at Clínica Hispana Cruz Houston",
    highlighted: true,
    order: 7,
  },
  {
    slug: "chequeo-completo-mujer",
    title: "Chequeo Completo de Mujer",
    titleEn: "Complete Women's Checkup",
    price: "$79",
    blurb:
      "Chequeo integral para la mujer que incluye examen de Papanicolaou, consulta ginecológica y orden de mamografía.",
    blurbEn:
      "A comprehensive women's checkup that includes a Pap smear, a gynecological consultation, and a mammogram order.",
    includes: [
      "Examen de Papanicolaou",
      "Consulta ginecológica",
      "Orden de mamografía",
    ],
    includesEn: [
      "Pap smear",
      "Gynecological consultation",
      "Mammogram order",
    ],
    image: "/images/promotions/chequeo-completo-mujer.webp",
    alt: "Promoción de chequeo completo de mujer por $79 con Papanicolaou, consulta ginecológica y orden de mamografía en Clínica Hispana Cruz Houston",
    altEn: "Complete women's checkup promotion for $79 with Pap smear, gynecological consultation and mammogram order at Clínica Hispana Cruz Houston",
    highlighted: true,
    order: 8,
  },
  {
    slug: "general-sangre-b12",
    title: "Examen General de Sangre + Vitamina B12",
    titleEn: "General Blood Test + Vitamin B12",
    price: "$99",
    blurb:
      "Examen general de sangre junto con una inyección de Vitamina B12 para apoyar tu energía y bienestar.",
    blurbEn:
      "A general blood test together with a Vitamin B12 injection to support your energy and well-being.",
    includes: [
      "Examen general de sangre",
      "Inyección de Vitamina B12",
      "Orientación sobre tus resultados",
    ],
    includesEn: [
      "General blood test",
      "Vitamin B12 injection",
      "Guidance on your results",
    ],
    image: "/images/promotions/general-sangre-b12.webp",
    alt: "Promoción de examen general de sangre más inyección de Vitamina B12 por $99 en Clínica Hispana Cruz Houston",
    altEn: "General blood test plus Vitamin B12 injection promotion for $99 at Clínica Hispana Cruz Houston",
    order: 9,
  },
  {
    slug: "salud-intima-femenina",
    title: "Salud Íntima Femenina",
    titleEn: "Women's Intimate Health",
    price: "$69",
    blurb:
      "Evaluación para molestias íntimas como picazón, flujo o mal olor, con atención confidencial y personal femenino.",
    blurbEn:
      "An evaluation for intimate discomfort such as itching, discharge, or odor, with confidential care and female staff.",
    includes: [
      "Cultivo íntimo",
      "Consulta médica",
      "Examen de orina gratis",
    ],
    includesEn: [
      "Intimate culture test",
      "Medical consultation",
      "Free urine test",
    ],
    image: "/images/promotions/salud-intima-femenina.webp",
    alt: "Promoción de salud íntima femenina por $69 con cultivo íntimo, consulta médica y examen de orina en Clínica Hispana Cruz Houston",
    altEn: "Women's intimate health promotion for $69 with intimate culture test, medical consultation and urine test at Clínica Hispana Cruz Houston",
    order: 10,
  },
  {
    slug: "perfil-hormonal-masculino",
    title: "Perfil Hormonal Masculino",
    titleEn: "Male Hormone Profile",
    price: "$200",
    blurb:
      "Perfil hormonal para hombres que ayuda a evaluar señales como fatiga, cambios de ánimo, calidad del sueño, libido y composición corporal.",
    blurbEn:
      "A hormone profile for men that helps evaluate signs such as fatigue, mood changes, sleep quality, libido, and body composition.",
    includes: [
      "Evaluación de desequilibrios hormonales",
      "Revisión de fatiga y cansancio",
      "Evaluación de masa muscular y libido",
      "Resultados precisos con atención profesional",
    ],
    includesEn: [
      "Hormonal imbalance evaluation",
      "Fatigue and tiredness review",
      "Muscle mass and libido assessment",
      "Precise results with professional care",
    ],
    image: "/images/promotions/perfil-hormonal-masculino.webp",
    alt: "Promoción de perfil hormonal masculino por $200 en Clínica Hispana Cruz Houston",
    altEn: "Male hormone profile promotion for $200 at Clínica Hispana Cruz Houston",
    order: 11,
  },
  {
    slug: "diagnostico-ets",
    title: "Diagnóstico de Enfermedades de Transmisión Sexual",
    titleEn: "Sexually Transmitted Disease Diagnosis",
    price: "$249",
    blurb:
      "Diagnóstico completo para enfermedades de transmisión sexual, con evaluación médica y atención confidencial y profesional.",
    blurbEn:
      "A complete diagnosis for sexually transmitted diseases, with a medical evaluation and confidential, professional care.",
    includes: [
      "Prueba RPR",
      "Prueba de HIV",
      "Prueba de Herpes",
      "Prueba de Clamidia",
      "Prueba de Gonorrea",
      "Atención confidencial",
    ],
    includesEn: [
      "RPR test",
      "HIV test",
      "Herpes test",
      "Chlamydia test",
      "Gonorrhea test",
      "Confidential care",
    ],
    image: "/images/promotions/diagnostico-ets.webp",
    alt: "Promoción de diagnóstico completo de enfermedades de transmisión sexual por $249 en Clínica Hispana Cruz Houston",
    altEn: "Complete sexually transmitted disease diagnosis promotion for $249 at Clínica Hispana Cruz Houston",
    order: 12,
  },
  {
    slug: "examen-dot",
    title: "Examen DOT",
    titleEn: "DOT Exam",
    price: null,
    blurb:
      "Examen médico DOT para conductores comerciales: rápido, con certificación oficial y atención en español.",
    blurbEn:
      "DOT medical exam for commercial drivers: fast, with official certification and service in Spanish.",
    includes: [
      "Examen rápido",
      "Certificación oficial",
      "Atención en español",
    ],
    includesEn: [
      "Fast exam",
      "Official certification",
      "Service in Spanish",
    ],
    image: "/images/promotions/examen-dot.webp",
    alt: "Promoción de examen médico DOT para conductores comerciales con certificación oficial en Clínica Hispana Cruz Houston",
    altEn: "DOT medical exam promotion for commercial drivers with official certification at Clínica Hispana Cruz Houston",
    order: 13,
  },
  {
    slug: "vitamina-b12-6-dosis",
    title: "6 Dosis de Vitamina B12",
    titleEn: "6 Vitamin B12 Doses",
    price: "$150",
    blurb:
      "Paquete de 6 dosis de Vitamina B12 con 50% de descuento (precio regular $300), para apoyar tu energía y bienestar general. Incluye consulta médica gratis.",
    blurbEn:
      "A package of 6 Vitamin B12 doses at 50% off (regular price $300) to support your energy and overall well-being. Includes a free medical consultation.",
    includes: [
      "6 dosis de Vitamina B12",
      "50% de descuento (precio regular $300)",
      "Consulta médica gratis incluida",
      "Apoya la producción de energía",
    ],
    includesEn: [
      "6 Vitamin B12 doses",
      "50% off (regular price $300)",
      "Free medical consultation included",
      "Supports energy production",
    ],
    image: "/images/promotions/vitamina-b12-6-dosis.webp",
    alt: "Promoción de 6 dosis de Vitamina B12 por $150 con consulta médica gratis en Clínica Hispana Cruz Houston",
    altEn: "6 Vitamin B12 doses promotion for $150 with free medical consultation at Clínica Hispana Cruz Houston",
    order: 14,
  },
  {
    slug: "perfil-hormonal-femenino",
    title: "Perfil Hormonal Femenino",
    titleEn: "Female Hormone Profile",
    price: "$250",
    blurb:
      "Perfil hormonal para mujeres que ayuda a evaluar desequilibrios hormonales, problemas menstruales, fertilidad, tiroides, menopausia y cambios hormonales.",
    blurbEn:
      "A hormone profile for women that helps evaluate hormonal imbalances, menstrual problems, fertility, thyroid, menopause, and hormonal changes.",
    includes: [
      "Evaluación de desequilibrios hormonales",
      "Problemas menstruales y fertilidad",
      "Revisión de tiroides",
      "Menopausia y cambios hormonales",
    ],
    includesEn: [
      "Hormonal imbalance evaluation",
      "Menstrual problems and fertility",
      "Thyroid review",
      "Menopause and hormonal changes",
    ],
    image: "/images/promotions/perfil-hormonal-femenino.webp",
    alt: "Promoción de perfil hormonal femenino por $250 en Clínica Hispana Cruz Houston",
    altEn: "Female hormone profile promotion for $250 at Clínica Hispana Cruz Houston",
    order: 15,
  },
  {
    slug: "chequeo-completo-hombre",
    title: "Chequeo Completo del Hombre",
    titleEn: "Complete Men's Health Package",
    price: "$149",
    blurb:
      "Paquete completo de salud para el hombre con PSA, testosterona y examen general de sangre, más examen de orina y consulta médica gratis.",
    blurbEn:
      "A complete men's health package with PSA, testosterone, and a general blood test, plus a free urine test and medical consultation.",
    includes: [
      "PSA",
      "Testosterona",
      "Examen general de sangre",
      "Examen de orina gratis",
      "Consulta médica gratis",
    ],
    includesEn: [
      "PSA",
      "Testosterone",
      "General blood test",
      "Free urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-completo-hombre.webp",
    alt: "Promoción de chequeo completo del hombre por $149 con PSA, testosterona y examen de sangre en Clínica Hispana Cruz Houston",
    altEn: "Complete men's health package promotion for $149 with PSA, testosterone and blood test at Clínica Hispana Cruz Houston",
    order: 16,
  },
  {
    slug: "chequeo-completo-salud",
    title: "Chequeo General Completo",
    titleEn: "Complete General Checkup",
    price: "$99",
    blurb:
      "Por $99, frente a los $250 de valor regular, este paquete reúne en una sola visita el examen general de sangre, la A1C (que refleja el promedio del azúcar de los últimos meses), el examen general de orina y la consulta médica sin costo.",
    blurbEn:
      "For $99 instead of the $250 regular value, this package brings together in one visit a general blood panel, an A1C (which reflects your average blood sugar over recent months), a general urinalysis and the medical consultation at no charge.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "General blood test",
      "A1C (glycated hemoglobin)",
      "General urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-general-completo.webp",
    alt: "Promoción de chequeo general completo por $99 (valor regular $250) con examen de sangre, A1C, orina y consulta médica gratis en Clínica Hispana Cruz Houston",
    altEn: "Complete general checkup promotion for $99 (regular value $250) with blood test, A1C, urine test and free medical consultation at Clínica Hispana Cruz Houston",
    highlighted: true,
    order: 6,
  },
  {
    slug: "salud-estomacal",
    title: "Paquete de Salud Estomacal",
    titleEn: "Stomach Health Package",
    price: "$99",
    blurb:
      "¿Acidez, gases o inflamación? Paquete de salud estomacal con consulta médica, prueba de H. Pylori y examen de orina para evaluar tus síntomas a tiempo.",
    blurbEn:
      "Heartburn, gas, or bloating? A stomach health package with a medical consultation, an H. Pylori test, and a urine test to evaluate your symptoms early.",
    includes: [
      "Consulta médica",
      "Prueba de H. Pylori",
      "Examen de orina",
    ],
    includesEn: [
      "Medical consultation",
      "H. Pylori test",
      "Urine test",
    ],
    image: "/images/promotions/salud-estomacal.webp",
    alt: "Promoción de paquete de salud estomacal por $99 con consulta médica, prueba de H. Pylori y examen de orina en Clínica Hispana Cruz Houston",
    altEn: "Stomach health package promotion for $99 with medical consultation, H. Pylori test and urine test at Clínica Hispana Cruz Houston",
    order: 18,
  },
  {
    slug: "promocion-familiar",
    title: "Promoción Especial para la Familia",
    titleEn: "Special Family Promotion",
    price: null,
    blurb:
      "Pensada para toda la familia, adultos y niños: el examen de orina y la glucosa con glucotest no cuestan nada y el chequeo médico general sale a bajo costo. En recepción pregunta por la membresía gratis, que da 20% de descuento y consulta gratis durante un año.",
    blurbEn:
      "Made for the whole family, adults and kids alike: the urine test and the glucotest blood sugar check cost nothing, and the general medical checkup is low cost. At the front desk, ask about the free membership, which gives 20% off and free visits for a year.",
    includes: [
      "Examen de orina gratis",
      "Glucosa (glucotest) gratis",
      "Chequeo médico general a bajo costo",
      "Servicio para adultos y niños",
      "Membresía gratis: 20% de descuento y consulta gratis por 1 año",
    ],
    includesEn: [
      "Free urine test",
      "Free glucose (glucotest)",
      "Low-cost general medical checkup",
      "Service for adults and children",
      "Free membership: 20% off and free consultation for 1 year",
    ],
    image: "/images/promotions/promocion-familiar.webp",
    alt: "Promoción especial familiar con examen de orina y glucosa gratis y chequeo médico a bajo costo en Clínica Hispana Cruz Houston",
    altEn: "Special family promotion with free urine test and glucose and low-cost medical checkup at Clínica Hispana Cruz Houston",
    order: 19,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "primera-visita",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
    href: "/services/examenes-inmigracion",
  },
  {
    id: "laboratorio",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.services", href: "/services" },
  { label: "nav.promotions", href: "/promociones" },
  { label: "nav.chronicCare", href: "/#enfermedades-cronicas" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contacto" },
];

