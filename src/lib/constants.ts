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
};

// Google Reviews fallback (la Places API New provee los datos en vivo).
// Valores verificados contra la Places API el 10 jul 2026.
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 952,
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
    "longDescription": "Las enfermedades crónicas como la diabetes, la hipertensión y las dislipidemias (colesterol y triglicéridos altos) se controlan mejor con seguimiento constante. En Clínica Hispana Cruz diseñamos un plan claro y te acompañamos paso a paso, en español.\n\n**¿Qué incluye?**\n- Evaluación inicial y exámenes de laboratorio\n- Monitoreo de glucosa, presión arterial, colesterol y triglicéridos\n- Ajuste de medicamentos según tu evolución\n- Plan de alimentación y actividad física\n- Educación sobre tu condición en tu idioma\n\n**Por qué es importante el control**\nUna diabetes, presión o colesterol mal controlados dañan con el tiempo el corazón, los riñones, los ojos y los nervios. Un buen seguimiento previene complicaciones y mejora tu calidad de vida.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Chronic conditions like diabetes, hypertension and dyslipidemia (high cholesterol and triglycerides) are best controlled with consistent follow-up. At Clínica Hispana Cruz we design a clear plan and support you every step of the way, in Spanish.\n\n**What's included?**\n- Initial evaluation and lab work\n- Monitoring of glucose, blood pressure, cholesterol and triglycerides\n- Medication adjustment based on your progress\n- Nutrition and physical-activity plan\n- Education about your condition in your language\n\n**Why control matters**\nPoorly managed diabetes, blood pressure or cholesterol damage the heart, kidneys, eyes and nerves over time. Good follow-up prevents complications and improves your quality of life.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "La tiroides regula tu energía, tu peso y tu ánimo. Cuando funciona de más o de menos aparecen síntomas que afectan tu día a día. En Clínica Hispana Cruz evaluamos tu tiroides con análisis de laboratorio y te damos el tratamiento adecuado.\n\n**¿Qué incluye?**\n- Evaluación de síntomas\n- Pruebas de función tiroidea (TSH, T3, T4)\n- Diagnóstico de hipotiroidismo o hipertiroidismo\n- Inicio y ajuste del tratamiento\n- Seguimiento periódico\n\n**Síntomas frecuentes**\nCansancio, cambios de peso sin explicación, caída del cabello, frío o calor excesivo, nerviosismo o tristeza. Si los notas, una prueba sencilla puede dar la respuesta.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "The thyroid regulates your energy, weight and mood. When it works too much or too little, symptoms appear that affect your daily life. At Clínica Hispana Cruz we evaluate your thyroid with lab work and provide the right treatment.\n\n**What's included?**\n- Symptom evaluation\n- Thyroid function tests (TSH, T3, T4)\n- Diagnosis of hypothyroidism or hyperthyroidism\n- Treatment start and adjustment\n- Periodic follow-up\n\n**Common symptoms**\nFatigue, unexplained weight changes, hair loss, feeling too cold or too hot, nervousness or sadness. If you notice them, a simple test can give the answer.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Las alergias pueden afectar tu respiración, tu piel y tu descanso. En Clínica Hispana Cruz identificamos qué las provoca y te ayudamos a controlarlas para que recuperes tu bienestar.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y posibles desencadenantes\n- Tratamiento de alergias estacionales y respiratorias\n- Manejo de rinitis, estornudos y congestión\n- Atención de alergias en la piel (ronchas, comezón)\n- Recomendaciones para evitar las crisis\n\n**Cuándo consultar**\nEstornudos frecuentes, ojos llorosos, comezón, ronchas o congestión que no mejora son señales de alergia. Un tratamiento adecuado marca la diferencia.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Allergies can affect your breathing, your skin and your rest. At Clínica Hispana Cruz we identify what triggers them and help you control them so you feel well again.\n\n**What's included?**\n- Evaluation of symptoms and possible triggers\n- Treatment of seasonal and respiratory allergies\n- Management of rhinitis, sneezing and congestion\n- Care for skin allergies (hives, itching)\n- Recommendations to avoid flare-ups\n\n**When to seek care**\nFrequent sneezing, watery eyes, itching, hives or congestion that won't improve are signs of allergy. The right treatment makes the difference.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Cuando empiezan la fiebre, la tos o el malestar, saber si es flu o COVID ayuda a tratarte a tiempo. En Clínica Hispana Cruz hacemos pruebas rápidas y te damos tratamiento el mismo día, sin cita.\n\n**¿Qué incluye?**\n- Prueba rápida de influenza (flu)\n- Prueba de COVID-19\n- Evaluación de síntomas respiratorios\n- Tratamiento de gripe, tos, bronquitis e infecciones de garganta\n- Indicaciones de recuperación y cuidado\n\n**No dejes que avance**\nSi la fiebre es alta, la tos no mejora o cuesta respirar, es mejor evaluarte. Un diagnóstico oportuno acorta la enfermedad y evita complicaciones.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "When fever, cough or discomfort begin, knowing whether it's flu or COVID helps treat you in time. At Clínica Hispana Cruz we run rapid tests and provide same-day treatment, no appointment needed.\n\n**What's included?**\n- Rapid influenza (flu) test\n- COVID-19 test\n- Respiratory symptom evaluation\n- Treatment of flu, cough, bronchitis and throat infections\n- Recovery and care instructions\n\n**Don't let it progress**\nIf the fever is high, the cough won't improve or breathing is hard, it's best to get evaluated. Timely diagnosis shortens the illness and prevents complications.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Antes de inscribirse en la escuela o practicar un deporte, los niños y jóvenes necesitan un chequeo físico. En Clínica Hispana Cruz lo hacemos de forma rápida y completa, con todos los formularios listos.\n\n**¿Qué incluye?**\n- Examen físico general\n- Revisión de signos vitales (peso, talla, presión)\n- Evaluación de visión y audición\n- Llenado de los formularios requeridos\n- Recomendaciones de salud\n\n**Para la escuela y el deporte**\nCumple los requisitos de inscripción escolar y la evaluación para practicar deportes con seguridad. Trae el formulario de tu escuela o equipo y lo completamos.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Before enrolling in school or playing a sport, children and teens need a physical exam. At Clínica Hispana Cruz we do it quickly and thoroughly, with all the forms ready.\n\n**What's included?**\n- General physical exam\n- Vital-signs check (weight, height, blood pressure)\n- Vision and hearing screening\n- Completion of required forms\n- Health recommendations\n\n**For school and sports**\nMeet school enrollment requirements and the evaluation to play sports safely. Bring your school or team form and we'll complete it.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Tu salud como mujer merece un espacio de confianza. En Clínica Hispana Cruz ofrecemos atención ginecológica en español, con la privacidad y el respeto que mereces.\n\n**¿Qué incluye?**\n- Papanicolaou y chequeo ginecológico\n- Cultivos vaginales para identificar infecciones\n- Tratamiento de infecciones vaginales (hongos, bacterias)\n- Evaluación de molestias y flujo anormal\n- Referencias cuando se necesita un especialista\n\n**No te quedes con la duda**\nComezón, ardor, flujo diferente o mal olor son señales de que algo necesita atención. Un cultivo permite un diagnóstico correcto y un tratamiento que sí resuelve.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Your health as a woman deserves a space of trust. At Clínica Hispana Cruz we offer gynecology care in Spanish, with the privacy and respect you deserve.\n\n**What's included?**\n- Pap smear and gynecological checkup\n- Vaginal cultures to identify infections\n- Treatment of vaginal infections (yeast, bacteria)\n- Evaluation of discomfort and abnormal discharge\n- Referrals when a specialist is needed\n\n**Don't stay in doubt**\nItching, burning, unusual discharge or odor are signs that something needs attention. A culture allows an accurate diagnosis and treatment that truly resolves it.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston"
    ],
    "keywordsEn": [
      "gynecologist houston spanish",
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
    "longDescription": "Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Cruz realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.\n\n**¿Qué incluye?**\n- Prueba de embarazo (orina o sangre)\n- Confirmación médica del resultado\n- Orientación sobre tus siguientes pasos\n- Información sobre control prenatal y referencias\n\n**Con confianza y respeto**\nTe explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Cruz we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.\n\n**What's included?**\n- Pregnancy test (urine or blood)\n- Medical confirmation of the result\n- Guidance on your next steps\n- Information on prenatal care and referrals\n\n**With trust and respect**\nWe explain the result clearly and support you in whatever decision you make, always with respect and privacy.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Cruz te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.\n\n**¿Qué incluye?**\n- Consulta de orientación personalizada\n- Información sobre los distintos métodos\n- Pastillas anticonceptivas e inyección\n- Inicio y seguimiento del método elegido\n- Resolución de dudas y efectos secundarios\n\n**Una decisión informada**\nCada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Deciding when and how to build your family is your right. At Clínica Hispana Cruz we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.\n\n**What's included?**\n- Personalized guidance visit\n- Information about the different methods\n- Birth control pills and injection\n- Starting and following up on the chosen method\n- Answers to questions and side effects\n\n**An informed decision**\nEvery body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Cruz lo hacemos de forma segura, rápida y con cuidado.\n\n**¿Qué incluye?**\n- Evaluación y localización del implante\n- Extracción ambulatoria con anestesia local\n- Indicaciones claras de cuidado posterior\n- Orientación sobre tus próximos pasos de planificación\n\n**Un procedimiento sencillo**\nEl retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Cruz we do it safely, quickly and with care.\n\n**What's included?**\n- Evaluation and location of the implant\n- Outpatient removal with local anesthesia\n- Clear after-care instructions\n- Guidance on your next family-planning steps\n\n**A simple procedure**\nRemoval usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "title": "Exámenes del Hombre: PSA y Testosterona",
    "titleEn": "Men's Health Exams: PSA & Testosterone",
    "shortTitle": "Salud del Hombre",
    "description": "Exámenes del hombre en Houston, TX: PSA y testosterona. Laboratorio y atención en español, con precios accesibles.",
    "descriptionEn": "Men's health exams in Houston, TX: PSA and testosterone. Lab work and care in Spanish, with affordable pricing.",
    "longDescription": "La salud del hombre muchas veces se posterga. En Clínica Hispana Cruz facilitamos los exámenes que ayudan a detectar a tiempo cambios importantes, con resultados explicados en español.\n\n**¿Qué incluye?**\n- Examen de antígeno prostático (PSA)\n- Medición del nivel de testosterona\n- Chequeo general y de signos vitales\n- Evaluación de síntomas urinarios o de energía\n- Referencia a especialista si se requiere\n\n**Por qué es importante**\nEl PSA ayuda a vigilar la salud de la próstata y la testosterona influye en la energía, el ánimo y la salud general. Un control sencillo te da tranquilidad.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Men's health is often postponed. At Clínica Hispana Cruz we make it easy to get the exams that help catch important changes early, with results explained in Spanish.\n\n**What's included?**\n- Prostate antigen (PSA) test\n- Testosterone level measurement\n- General checkup and vital signs\n- Evaluation of urinary or energy symptoms\n- Referral to a specialist if needed\n\n**Why it matters**\nPSA helps monitor prostate health, and testosterone influences energy, mood and overall health. A simple check gives you peace of mind.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "examen de testosterona houston"
    ],
    "keywordsEn": [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "testosterone test houston"
    ],
    "features": [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 10
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "title": "Exámenes de Sangre | Laboratorio",
    "titleEn": "Blood Tests | Lab",
    "shortTitle": "Análisis de Sangre",
    "description": "Exámenes de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles.",
    "descriptionEn": "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing.",
    "longDescription": "Un buen diagnóstico empieza con un buen laboratorio. En Clínica Hispana Cruz tomamos tus muestras en el momento y te explicamos los resultados en español, sin tecnicismos.\n\n**¿Qué incluye?**\n- Biometría hemática completa (conteo de células)\n- Química sanguínea (glucosa, colesterol, triglicéridos)\n- Pruebas de tiroides, hígado y riñón\n- Paneles para chequeo general o seguimiento\n- Resultados rápidos en la mayoría de los casos\n\n**Para qué sirven**\nLos análisis ayudan a detectar problemas antes de que den síntomas, dar seguimiento a una condición crónica o completar un examen de trabajo o escuela.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "A good diagnosis starts with a good lab. At Clínica Hispana Cruz we draw your samples on the spot and explain your results in Spanish, without the jargon.\n\n**What's included?**\n- Complete blood count (CBC)\n- Blood chemistry (glucose, cholesterol, triglycerides)\n- Thyroid, liver and kidney tests\n- Panels for general checkups or follow-up\n- Fast results in most cases\n\n**Why they matter**\nBlood tests help detect problems before symptoms appear, follow up on a chronic condition or complete a work or school exam.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "El examen de orina ayuda a detectar infecciones urinarias y otras condiciones. En Clínica Hispana Cruz te hacemos la prueba y, si hay infección, empezamos el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Examen general de orina (urianálisis)\n- Evaluación de síntomas\n- Diagnóstico de infección urinaria\n- Tratamiento adecuado el mismo día\n- Indicaciones para evitar que regrese\n\n**Síntomas frecuentes**\nArdor al orinar, ganas constantes de ir al baño, orina turbia o con mal olor y dolor en la parte baja del abdomen. No esperes: una infección sin tratar puede llegar a los riñones.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "A urine test helps detect urinary infections and other conditions. At Clínica Hispana Cruz we run the test and, if there's an infection, we start treatment the same day.\n\n**What's included?**\n- General urinalysis\n- Symptom evaluation\n- Diagnosis of urinary infection\n- Appropriate same-day treatment\n- Tips to prevent it from coming back\n\n**Common symptoms**\nBurning when urinating, a constant urge to go, cloudy or foul-smelling urine and lower-abdomen pain. Don't wait: an untreated infection can reach the kidneys.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "highlighted": false,
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
    "longDescription": "Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana Cruz realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.\n\n**¿Qué incluye?**\n- Análisis general de heces fecales\n- Detección de parásitos\n- Identificación de infecciones intestinales\n- Evaluación de sangre oculta cuando se requiere\n- Resultados explicados en español\n\n**Cuándo es útil**\nDiarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana Cruz we perform stool tests to find the source and give you the right treatment.\n\n**What's included?**\n- General stool analysis\n- Parasite detection\n- Identification of intestinal infections\n- Occult-blood evaluation when needed\n- Results explained in Spanish\n\n**When it helps**\nPersistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Cruz hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Prueba rápida de estreptococo (hisopado de garganta)\n- Resultado en pocos minutos\n- Evaluación del dolor de garganta\n- Tratamiento adecuado si el resultado es positivo\n- Indicaciones de recuperación\n\n**Cuándo hacerla**\nDolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Cruz we run the rapid strep test and give you the result and treatment the same day.\n\n**What's included?**\n- Rapid strep test (throat swab)\n- Result in minutes\n- Sore-throat evaluation\n- Appropriate treatment if the result is positive\n- Recovery instructions\n\n**When to get it**\nSevere sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Cruz la aplicamos y leemos el resultado, con todo explicado en español.\n\n**¿Qué incluye?**\n- Prueba cutánea de tuberculosis (PPD)\n- Cita de lectura del resultado (48–72 horas después)\n- Documentación del resultado para tu trámite\n- Orientación si el resultado requiere seguimiento\n\n**Para qué la piden**\nEmpleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Cruz we administer it and read the result, with everything explained in Spanish.\n\n**What's included?**\n- Tuberculosis skin test (PPD)\n- Result-reading appointment (48–72 hours later)\n- Documentation of the result for your paperwork\n- Guidance if the result needs follow-up\n\n**Why it's required**\nHealthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana Cruz ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial y respetuosa, con tratamiento cuando es necesario.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y factores de riesgo\n- Pruebas de las infecciones más comunes\n- Análisis de laboratorio\n- Tratamiento y orientación si el resultado es positivo\n- Total confidencialidad\n\n**Cuándo hacerte la prueba**\nSi tuviste contacto de riesgo, tienes síntomas o simplemente quieres estar tranquilo, hacerte la prueba es la mejor decisión. La detección temprana facilita el tratamiento.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Taking care of your sexual health is an act of responsibility. At Clínica Hispana Cruz we offer confidential, respectful testing for sexually transmitted diseases, with treatment when needed.\n\n**What's included?**\n- Symptom and risk-factor assessment\n- Testing for the most common infections\n- Laboratory analysis\n- Treatment and guidance if the result is positive\n- Complete confidentiality\n\n**When to get tested**\nIf you had a risky encounter, have symptoms or simply want peace of mind, getting tested is the best decision. Early detection makes treatment easier.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Cruz la realizamos de forma rápida y te entregamos la documentación que necesitas.\n\n**¿Qué incluye?**\n- Prueba de detección de drogas\n- Prueba de alcohol\n- Proceso ágil y discreto\n- Documentación del resultado para tu empleador o trámite\n\n**Para trabajo y trámites**\nAtendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and processes require an alcohol and drug test. At Clínica Hispana Cruz we perform it quickly and give you the documentation you need.\n\n**What's included?**\n- Drug screening test\n- Alcohol test\n- Quick, discreet process\n- Result documentation for your employer or paperwork\n\n**For work and paperwork**\nWe handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana Cruz lo realizamos como parte de chequeos y exámenes médicos.\n\n**¿Qué incluye?**\n- Estudio del ritmo y la actividad del corazón\n- Interpretación por personal médico\n- Útil para exámenes de trabajo, deporte o cirugía\n- Resultados explicados en español\n\n**Cuándo se recomienda**\nSi tienes palpitaciones, presión alta, dolor en el pecho o necesitas un examen médico completo, el EKG aporta información valiosa sobre tu corazón.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "The electrocardiogram (EKG) records your heart's electrical activity in just a few minutes with no discomfort. At Clínica Hispana Cruz we perform it as part of checkups and medical exams.\n\n**What's included?**\n- Study of your heart's rhythm and activity\n- Interpretation by medical staff\n- Useful for work, sports or surgery exams\n- Results explained in Spanish\n\n**When it's recommended**\nIf you have palpitations, high blood pressure, chest discomfort or need a complete medical exam, the EKG provides valuable information about your heart.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "El ultrasonido es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana Cruz contamos con equipo moderno y personal que te explica todo en español.\n\n**¿Qué incluye?**\n- Ultrasonido abdominal (hígado, vesícula, riñones)\n- Ultrasonido pélvico\n- Ultrasonido de embarazo (control y seguimiento)\n- Evaluación de tiroides y tejidos blandos\n\n**Sin radiación y sin dolor**\nA diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo. El estudio es rápido y no requiere preparación complicada.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Ultrasound is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana Cruz we have modern equipment and staff who explain everything in Spanish.\n\n**What's included?**\n- Abdominal ultrasound (liver, gallbladder, kidneys)\n- Pelvic ultrasound\n- Pregnancy ultrasound (monitoring and follow-up)\n- Thyroid and soft-tissue evaluation\n\n**No radiation, no pain**\nUnlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy. The study is quick and requires little preparation.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Si manejas vehículos comerciales necesitas tu examen físico DOT vigente. En Clínica Hispana Cruz lo realizamos de forma rápida y te entregamos tu certificado el mismo día.\n\n**¿Qué incluye?**\n- Revisión de visión y audición\n- Toma de presión arterial\n- Examen físico requerido por el DOT\n- Revisión de historial médico\n- Certificado médico DOT el mismo día\n\n**Para conductores comerciales**\nEl examen es obligatorio para obtener o renovar tu licencia CDL. Te explicamos cada paso en español y agilizamos el proceso para que vuelvas pronto a la carretera.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "If you drive commercial vehicles you need a current DOT physical exam. At Clínica Hispana Cruz we perform it quickly and give you your certificate the same day.\n\n**What's included?**\n- Vision and hearing screening\n- Blood-pressure check\n- DOT-required physical exam\n- Medical-history review\n- Same-day DOT medical certificate\n\n**For commercial drivers**\nThe exam is required to obtain or renew your CDL license. We explain every step in Spanish and speed up the process so you get back on the road soon.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "highlighted": true,
    "order": 20
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "title": "Examen Médico de Inmigración I-693",
    "titleEn": "Immigration Medical Exam I-693",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    "descriptionEn": "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    "longDescription": "El examen médico de inmigración (Formulario I-693) es un requisito para el ajuste de estatus. En Clínica Hispana Cruz lo realizamos con un médico autorizado por USCIS (civil surgeon) y te entregamos el formulario sellado listo para enviar.\n\n**¿Qué incluye?**\n- Revisión de historial médico y de vacunas\n- Examen físico completo\n- Pruebas requeridas por USCIS (incluida la de tuberculosis)\n- Aplicación de las vacunas que te falten\n- Formulario I-693 completado y sellado en sobre oficial\n\n**Qué traer a tu cita**\nIdentificación con foto, registro de vacunas si lo tienes y cualquier documento médico relevante. Te explicamos todo el proceso en español para que llegues tranquilo.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "The immigration medical exam (Form I-693) is required for adjustment of status. At Clínica Hispana Cruz we perform it with a USCIS-authorized physician (civil surgeon) and give you the sealed form ready to submit.\n\n**What's included?**\n- Review of medical and vaccination history\n- Complete physical exam\n- USCIS-required tests (including tuberculosis)\n- Administration of any missing vaccines\n- Form I-693 completed and sealed in the official envelope\n\n**What to bring**\nPhoto ID, your vaccination record if you have it and any relevant medical documents. We explain the entire process in Spanish so you arrive with peace of mind.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion houston",
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
    "longDescription": "Las vacunas son una de las formas más sencillas de cuidar tu salud. En Clínica Hispana Cruz aplicamos la vacuna contra la influenza y el toxoide tetánico de forma segura y rápida.\n\n**¿Qué incluye?**\n- Vacuna anual contra la influenza (flu)\n- Toxoide tetánico (refuerzo del tétanos)\n- Aplicación por personal médico\n- Orientación sobre cuándo aplicar refuerzos\n- Atención en español\n\n**Por qué vacunarte**\nLa vacuna de la flu reduce el riesgo de enfermarte de gravedad en temporada de gripe, y el toxoide tetánico te protege ante cortes y heridas. Pregúntanos cuál te conviene.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Vaccines are one of the simplest ways to protect your health. At Clínica Hispana Cruz we administer the influenza vaccine and tetanus toxoid safely and quickly.\n\n**What's included?**\n- Annual influenza (flu) vaccine\n- Tetanus toxoid (tetanus booster)\n- Administered by medical staff\n- Guidance on when boosters are due\n- Care in Spanish\n\n**Why get vaccinated**\nThe flu vaccine lowers your risk of getting seriously ill during flu season, and the tetanus toxoid protects you from cuts and wounds. Ask us which one you need.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    "descriptionEn": "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    "longDescription": "Los sueros vitaminados aportan hidratación, vitaminas y minerales directamente a tu organismo. En Clínica Hispana Cruz los aplicamos con personal médico y en un ambiente cómodo y seguro.\n\n**¿Qué incluye?**\n- Evaluación breve para elegir el suero adecuado\n- Hidratación intravenosa\n- Vitaminas y minerales\n- Aplicación y monitoreo por personal médico\n- Atención en español\n\n**Cuándo pueden ayudar**\nDespués de un periodo de cansancio, deshidratación o malestar, un suero vitaminado puede ayudarte a recuperar energía. Te orientamos sobre si es adecuado para ti.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Vitamin IV drips deliver hydration, vitamins and minerals directly into your body. At Clínica Hispana Cruz we administer them with medical staff in a comfortable, safe setting.\n\n**What's included?**\n- A brief evaluation to choose the right drip\n- Intravenous hydration\n- Vitamins and minerals\n- Administration and monitoring by medical staff\n- Care in Spanish\n\n**When they can help**\nAfter a period of fatigue, dehydration or feeling unwell, a vitamin drip can help you recover energy. We advise you on whether it's right for you.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston"
    ],
    "keywordsEn": [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston"
    ],
    "features": [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
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
    "longDescription": "Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Cruz cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.\n\n**¿Qué incluye?**\n- Evaluación y limpieza de la herida\n- Cierre con suturas (puntos)\n- Aplicación de anestesia local\n- Indicaciones de cuidado y signos de alarma\n- Retiro de puntos cuando corresponde\n\n**Cuándo acudir**\nCortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Cruz we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.\n\n**What's included?**\n- Wound evaluation and cleaning\n- Closure with sutures (stitches)\n- Local anesthesia\n- Care instructions and warning signs\n- Suture removal when appropriate\n\n**When to come in**\nDeep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana Cruz limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.\n\n**¿Qué incluye?**\n- Limpieza y desinfección de la herida\n- Aplicación de apósitos y vendajes\n- Cambio periódico de vendajes\n- Vigilancia de signos de infección\n- Indicaciones de cuidado en casa\n\n**Para todo tipo de heridas**\nHeridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana Cruz we clean, treat and dress your wounds, and follow you until they heal.\n\n**What's included?**\n- Wound cleaning and disinfection\n- Application of dressings and bandages\n- Periodic dressing changes\n- Monitoring for signs of infection\n- Home-care instructions\n\n**For all kinds of wounds**\nPost-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Cruz realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.\n\n**¿Qué incluye?**\n- Evaluación del lunar, quiste o lesión\n- Procedimiento ambulatorio con anestesia local\n- Extracción de lunares, quistes y lipomas\n- Indicaciones claras de cuidado posterior\n- Retiro de puntos cuando corresponde\n\n**Rápido y seguro**\nLa mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Cruz we perform minor outpatient surgery with local anesthesia, in a single day.\n\n**What's included?**\n- Evaluation of the mole, cyst or lesion\n- Outpatient procedure with local anesthesia\n- Removal of moles, cysts and lipomas\n- Clear after-care instructions\n- Suture removal when appropriate\n\n**Fast and safe**\nMost of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Cruz lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.\n\n**¿Qué incluye?**\n- Evaluación del absceso o infección de piel\n- Drenaje con anestesia local\n- Limpieza y desinfección de la zona\n- Tratamiento de la infección cuando se requiere\n- Indicaciones de cuidado y seguimiento\n\n**No lo dejes pasar**\nUn bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Cruz we treat it safely to relieve the discomfort and prevent the infection from spreading.\n\n**What's included?**\n- Evaluation of the abscess or skin infection\n- Drainage with local anesthesia\n- Cleaning and disinfection of the area\n- Treatment of the infection when needed\n- Care and follow-up instructions\n\n**Don't let it go**\nA red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "longDescription": "Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Cruz la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.\n\n**¿Qué incluye?**\n- Evaluación de la uña y el dedo\n- Procedimiento con anestesia local\n- Extracción de la porción encarnada de la uña\n- Tratamiento de la infección si la hay\n- Indicaciones de cuidado para evitar que regrese\n\n**Cuándo acudir**\nDolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Cruz we treat it with a simple procedure and local anesthesia to relieve you the same day.\n\n**What's included?**\n- Evaluation of the nail and toe\n- Procedure with local anesthesia\n- Removal of the ingrown portion of the nail\n- Treatment of the infection if present\n- Care instructions to prevent recurrence\n\n**When to come in**\nPain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
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
    "description": "Farmacia en Houston, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español.",
    "descriptionEn": "Pharmacy in Houston, TX inside the clinic. We fill your prescription right after your visit, service in Spanish.",
    "longDescription": "Al terminar tu consulta en Clínica Hispana Cruz puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.\n\n**¿Qué incluye?**\n- Surtido de tu receta justo al terminar la consulta\n- Medicamentos de marca y genéricos\n- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más\n- Asesoría del personal sobre cómo tomar tus medicamentos\n- Resurtido de recetas\n\n**¿Por qué usar nuestra farmacia?**\nTe ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.\n\n**¿Por qué elegir Clínica Hispana Cruz?**\nEn Clínica Hispana Cruz te atendemos 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en 7640 Airline Dr # D, Houston, TX 77037, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston y comunidades cercanas.",
    "longDescriptionEn": "After your visit at Clínica Hispana Cruz you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.\n\n**What's included?**\n- Your prescription filled right after your visit\n- Brand-name and generic medications\n- Over-the-counter (OTC) medications for colds, pain, allergies and more\n- Staff guidance on how to take your medications\n- Prescription refills\n\n**Why use our pharmacy?**\nYou skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.\n\n**Why choose Clínica Hispana Cruz?**\nAt Clínica Hispana Cruz we care for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. We are located at 7640 Airline Dr # D, Houston, TX 77037, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Aldine, Greenspoint, Hidden Valley, Northline, East Aldine, North Houston and nearby communities.",
    "icon": "Pill",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "surtir receta houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "fill prescription houston"
    ],
    "features": [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español"
    ],
    "featuresEn": [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish"
    ],
    "highlighted": false,
    "order": 29
  }
];

export const PROMOTIONS: Promotion[] = [
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
    order: 1,
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
    order: 2,
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
    order: 3,
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
    order: 4,
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
    order: 5,
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
    order: 6,
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
    order: 7,
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
    order: 8,
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
    order: 9,
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
    order: 10,
  },
  {
    slug: "chequeo-completo-salud",
    title: "Chequeo Completo de Salud",
    titleEn: "Complete Health Checkup",
    price: "$99",
    blurb:
      "Chequeo completo de salud con examen general de sangre y examen HA1C (promedio de azúcar en la sangre de los últimos 3 meses), más examen de orina y consulta médica gratis.",
    blurbEn:
      "A complete health checkup with a general blood test and an HA1C test (3-month average blood sugar), plus a free urine test and medical consultation.",
    includes: [
      "Examen general de sangre",
      "Examen HA1C (azúcar de los últimos 3 meses)",
      "Examen general de orina gratis",
      "Consulta médica gratis",
    ],
    includesEn: [
      "General blood test",
      "HA1C test (3-month blood sugar average)",
      "Free general urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-completo-salud.webp",
    alt: "Promoción de chequeo completo de salud por $99 con examen de sangre, HA1C y orina en Clínica Hispana Cruz Houston",
    altEn: "Complete health checkup promotion for $99 with blood test, HA1C and urine test at Clínica Hispana Cruz Houston",
    order: 11,
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
    order: 12,
  },
  {
    slug: "promocion-familiar",
    title: "Promoción Especial para la Familia",
    titleEn: "Special Family Promotion",
    price: null,
    blurb:
      "Cuida tu salud y la de toda tu familia: examen de orina y glucosa (glucotest) gratis, chequeo médico general a bajo costo, para adultos y niños. Pregunta por tu membresía gratis con 20% de descuento y consulta gratis durante 1 año.",
    blurbEn:
      "Take care of your health and your whole family's: free urine test and glucose (glucotest), a low-cost general medical checkup, for adults and children. Ask about your free membership with 20% off and a free consultation for 1 year.",
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
    order: 13,
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
    id: "planes-pago",
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
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
];

export const NAV_ITEMS = [
  { label: "nav.services", href: "/services" },
  { label: "nav.promotions", href: "/promociones" },
  { label: "nav.chronicCare", href: "/#enfermedades-cronicas" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contacto" },
];

