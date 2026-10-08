interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "condiciones-cronicas": {
    "faqs": [
      {
        "question": "¿Puedo traer las lecturas de presión que tomo en casa?",
        "answer": "Sí, y ayudan mucho. Anota la fecha, la hora y el brazo de cada lectura, o trae el aparato. El equipo médico las compara con la presión tomada en la clínica para decidir si tu tratamiento necesita algún ajuste."
      },
      {
        "question": "¿Mi control de azúcar y colesterol lleva ayuno de la noche anterior?",
        "answer": "Solo si te van a sacar glucosa o perfil de lípidos en ayunas. En ese caso evita comer de 8 a 12 horas antes y pregunta qué hacer con tu insulina o tus pastillas para el azúcar esa mañana."
      },
      {
        "question": "¿Qué hago si se me acabaron las pastillas de la presión antes del control?",
        "answer": "No las suspendas por tu cuenta y ven a la clínica con el frasco vacío. El equipo médico revisa tu presión y decide cómo continuar; los medicamentos indicados en la consulta se entregan ahí mismo."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I bring the blood pressure readings I take at home?",
        "answer": "Yes, they are very useful. Write down the date, time and arm for each reading, or bring the device itself. The medical team compares them with the clinic reading to decide whether your treatment needs a change."
      },
      {
        "question": "Do I need to fast before a diabetes or cholesterol follow-up?",
        "answer": "Only if fasting glucose or a fasting lipid panel is planned. In that case avoid food for 8 to 12 hours and ask what to do with your insulin or diabetes pills that morning."
      },
      {
        "question": "What if I run out of blood pressure pills before my follow-up?",
        "answer": "Don't stop them on your own; come in with the empty bottle. The medical team checks your pressure and decides how to continue, and medicines prescribed during the visit are handed to you at the clinic."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿La biotina puede cambiar el resultado de la tiroides?",
        "answer": "Sí. La biotina, común en suplementos para cabello y uñas, puede interferir con algunas pruebas de laboratorio y dar valores engañosos. Avisa al equipo médico si la tomas para que te indique si conviene pausarla antes del análisis."
      },
      {
        "question": "¿Por qué me piden repetir la TSH después de cambiar la dosis?",
        "answer": "Porque el cuerpo tarda unas semanas en acomodarse a la nueva dosis de hormona. Repetir la TSH en ese momento muestra si la cantidad es la correcta o si hay que subirla o bajarla un poco."
      },
      {
        "question": "¿Cómo debo tomar la pastilla para la tiroides?",
        "answer": "Lo habitual es tomarla en la mañana con el estómago vacío y solo con agua, esperando antes de desayunar. Sepárala del café, el calcio y el hierro, que pueden reducir cuánto absorbe tu cuerpo."
      }
    ],
    "faqsEn": [
      {
        "question": "Can biotin change my thyroid results?",
        "answer": "Yes. Biotin, common in hair and nail supplements, can interfere with some lab tests and produce misleading values. Tell the medical team if you take it so they can advise whether to pause it before your blood draw."
      },
      {
        "question": "Why do I have to repeat the TSH after a dose change?",
        "answer": "Your body needs a few weeks to settle on a new hormone dose. Checking TSH at that point shows whether the amount is right or needs to go up or down a little."
      },
      {
        "question": "How should I take my thyroid pill?",
        "answer": "It is usually taken in the morning on an empty stomach with water only, waiting a while before breakfast. Keep it apart from coffee, calcium and iron, which can lower how much your body absorbs."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Por qué me empezaron las alergias de adulto si de niño nunca tuve?",
        "answer": "Es más común de lo que parece. Mudarte a una zona con otro tipo de polen, como Houston, un trabajo nuevo o la humedad en casa pueden despertar alergias a cualquier edad. El equipo médico revisa qué cambió para encontrar el desencadenante."
      },
      {
        "question": "¿Las ronchas que me salen después de comer son alergia?",
        "answer": "Pueden serlo. Anota qué comiste y cuánto tardaron en aparecer. Si además se te hinchan los labios o te cuesta respirar, es una emergencia y debes llamar al 911; si solo hay ronchas, ven a que te revisen."
      },
      {
        "question": "¿Sirve de algo cerrar las ventanas en temporada de polen?",
        "answer": "Sí, reduce el polen que entra a tu casa, sobre todo en las mañanas con viento. Combinado con el aire acondicionado, el baño al llegar del trabajo y el lavado semanal de sábanas, suele notarse menos congestión."
      }
    ],
    "faqsEn": [
      {
        "question": "Why did I develop allergies as an adult when I never had them as a kid?",
        "answer": "It's more common than you'd think. Moving to an area with different pollen, like Houston, a new job or dampness at home can trigger allergies at any age. The medical team looks at what changed to find the trigger."
      },
      {
        "question": "Are the hives I get after eating an allergy?",
        "answer": "They can be. Write down what you ate and how long the hives took to appear. If your lips swell or breathing gets hard, it's an emergency and you should call 911; if it's only hives, come in to be checked."
      },
      {
        "question": "Does keeping windows closed in pollen season really help?",
        "answer": "Yes, it cuts how much pollen gets indoors, especially on windy mornings. Combined with air conditioning, a shower after work and washing sheets weekly, most people notice less congestion."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Cómo se distingue la influenza del COVID si los síntomas se parecen?",
        "answer": "A simple vista es difícil: ambos dan fiebre, tos y dolor de cuerpo. Por eso se hacen las dos pruebas rápidas con hisopo nasal y el resultado sale en minutos, durante la visita, antes de decidir el tratamiento."
      },
      {
        "question": "¿Por qué no siempre me dan antibiótico cuando tengo flu?",
        "answer": "Solo si el equipo médico encuentra una infección bacteriana, como faringitis por estreptococo. La influenza y el COVID son virus y los antibióticos no los curan; en la influenza a veces se indica un antiviral."
      },
      {
        "question": "¿Cuándo puede volver mi hijo a la escuela después de la fiebre?",
        "answer": "La regla práctica: un día entero con temperatura normal sin acetaminofén ni ibuprofeno, y que ya coma y juegue casi como siempre. Si la tos o el cansancio siguen fuertes, conviene que el equipo médico lo revise antes."
      }
    ],
    "faqsEn": [
      {
        "question": "How can you tell flu from COVID when the symptoms look alike?",
        "answer": "You can't by symptoms alone: both cause fever, cough and body aches. That's why both rapid nasal-swab tests are run, with results in minutes during the visit, before treatment is decided."
      },
      {
        "question": "Why don't I always get an antibiotic when I have the flu?",
        "answer": "Only if the medical team finds a bacterial infection, such as strep throat. Flu and COVID are viruses and antibiotics don't treat them; for influenza an antiviral is sometimes prescribed."
      },
      {
        "question": "My kid had a fever with the flu; how do I know they're ready for class again?",
        "answer": "Once they've gone a full day without fever, without fever-reducing medicine, and have more energy. If the cough or tiredness is still strong, it's best to have the medical team check them first."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Puede venir mi hijo con un familiar que no sea el papá o la mamá?",
        "answer": "Lo ideal es que venga con el padre, la madre o el tutor legal, porque muchos formularios piden su firma y datos del historial médico. Si no es posible, pregunta antes qué documento de autorización acepta la escuela o la liga."
      },
      {
        "question": "¿Qué pasa si en el examen sale la presión alta o mala vista?",
        "answer": "No siempre impide hacer deporte. El equipo médico te explica el hallazgo, puede repetir la medición y te indica los siguientes pasos, como un examen de la vista o una referencia a un especialista si hace falta."
      },
      {
        "question": "Tengo la hoja de la escuela y la de la liga de futbol, ¿las llenan en una sola visita?",
        "answer": "Muchas veces sí, si traes los dos formularios en la misma visita y ambos piden la misma revisión. Algunas ligas exigen su propio formato, así que revisa los requisitos y trae cada hoja impresa."
      }
    ],
    "faqsEn": [
      {
        "question": "Can my child come with a relative who isn't a parent?",
        "answer": "Ideally a parent or legal guardian comes along, since many forms ask for their signature and medical history details. If that isn't possible, ask the school or league ahead of time which authorization document they accept."
      },
      {
        "question": "What if the physical shows high blood pressure or poor vision?",
        "answer": "It doesn't always rule out sports. The medical team explains the finding, may repeat the measurement and tells you the next steps, such as an eye exam or a referral to a specialist when needed."
      },
      {
        "question": "Can one physical cover both school and a sports team?",
        "answer": "Often yes, if you bring both forms to the same visit and they ask for the same exam. Some leagues require their own form, so check the requirements and bring each sheet printed."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "Me bajó la regla justo el día que pensaba ir, ¿igual me toman el Pap?",
        "answer": "Lo mejor es esperar a que termine el sangrado, porque la sangre puede alterar la muestra. Si solo es un manchado ligero, coméntalo al llegar y el equipo médico decide si se puede tomar la prueba ese día o conviene regresar."
      },
      {
        "question": "¿El flujo con mal olor siempre es una infección?",
        "answer": "No siempre, pero el olor fuerte, el flujo grisáceo o con grumos y la comezón suelen indicar una infección por bacterias u hongos. El cultivo vaginal ayuda a saber cuál es y a elegir el tratamiento que sí funciona."
      },
      {
        "question": "¿Duele la toma del Papanicolaou?",
        "answer": "La mayoría siente presión o una molestia breve al colocar el espéculo, no dolor fuerte. Respirar despacio y relajar el abdomen ayuda. Puedes pedir un espéculo más pequeño o que se detengan si te sientes incómoda."
      }
    ],
    "faqsEn": [
      {
        "question": "My period started on the day I planned to come in. Can I still get my Pap?",
        "answer": "It's best to wait until bleeding stops, because blood can affect the sample. If it's only light spotting, mention it at check-in and the medical team will decide whether to take the test or have you come back."
      },
      {
        "question": "Does discharge with a bad smell always mean an infection?",
        "answer": "Not always, but a strong odor, gray or clumpy discharge and itching usually point to a bacterial or yeast infection. A vaginal culture helps identify which one so the treatment actually works."
      },
      {
        "question": "Does a Pap smear hurt?",
        "answer": "Most women feel pressure or brief discomfort when the speculum goes in, not strong pain. Slow breathing and relaxing your belly help. You can ask for a smaller speculum or ask to stop if you feel uncomfortable."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "¿Cuántos días de atraso necesito para que salga positiva?",
        "answer": "Desde el primer día de atraso la prueba de orina suele ser confiable. Antes de eso puede dar un falso negativo porque la hormona aún está baja. Si sale negativa y la regla no baja, repítela unos días después."
      },
      {
        "question": "¿Por qué me harían prueba de sangre si ya salió positiva en orina?",
        "answer": "La prueba de sangre mide cuánta hormona hay, no solo si está presente. Ayuda cuando el resultado de orina es dudoso, cuando hay sangrado o dolor, o para seguir cómo avanza el embarazo en las primeras semanas."
      },
      {
        "question": "¿Qué hago después de un resultado positivo?",
        "answer": "Empieza a tomar ácido fólico, evita alcohol y cigarro y no tomes medicinas sin preguntar. En la clínica te damos información sobre el control prenatal y la referencia para iniciarlo lo antes posible."
      }
    ],
    "faqsEn": [
      {
        "question": "How late does my period need to be for a positive result?",
        "answer": "From the first day of a missed period a urine test is usually reliable. Earlier than that it can give a false negative because the hormone is still low. If it's negative and your period doesn't come, test again a few days later."
      },
      {
        "question": "Why would I need a blood test if the urine test was already positive?",
        "answer": "A blood test measures how much hormone is present, not just whether it's there. It helps when the urine result is unclear, when there's bleeding or pain, or to track how the pregnancy progresses early on."
      },
      {
        "question": "What should I do after a positive result?",
        "answer": "Start taking folic acid, avoid alcohol and smoking, and don't take medicines without asking first. At the clinic you'll get information about prenatal care and a referral to start it as early as possible."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué hago si se me olvidó una pastilla anticonceptiva?",
        "answer": "Tómala en cuanto te acuerdes, aunque te toque tomar dos el mismo rato, y sigue con el paquete. Si olvidaste dos o más, usa condón unos días y pregunta en la clínica, porque el riesgo de embarazo aumenta."
      },
      {
        "question": "Uso la inyección, ¿cómo sé cuándo me toca la siguiente?",
        "answer": "La versión que más se pone en clínicas como esta dura unas doce semanas por aplicación. Anota la fecha de la siguiente dosis en tu celular; si te pasas varias semanas, el equipo médico puede pedirte una prueba de embarazo antes de aplicarla."
      },
      {
        "question": "¿Puedo usar pastillas anticonceptivas si fumo?",
        "answer": "Depende de tu edad y del tipo de pastilla. Las que combinan dos hormonas no se recomiendan en mujeres fumadoras mayores de 35 años por el riesgo de coágulos. El equipo médico te orienta hacia una opción más segura."
      }
    ],
    "faqsEn": [
      {
        "question": "What should I do if I forget a birth control pill?",
        "answer": "Swallow the forgotten one once it comes to mind, even if today's pill follows shortly after, then finish the pack on schedule. If you missed two or more, use condoms for a few days and check with the clinic, since pregnancy risk goes up."
      },
      {
        "question": "I'm on the shot. How do I know when my next one is due?",
        "answer": "The version most clinics use lasts about twelve weeks per dose. Save your next date on your phone; if you're several weeks late, the medical team may ask for a pregnancy test before giving it."
      },
      {
        "question": "Can I use birth control pills if I smoke?",
        "answer": "It depends on your age and the type of pill. Pills that combine two hormones aren't recommended for women who smoke and are over 35 because of clot risk. The medical team can guide you to a safer option."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Me puedo embarazar justo después de quitarme el implante?",
        "answer": "Sí. La fertilidad suele regresar rápido una vez que sale la varilla. Si no buscas embarazarte, empieza otro método en ese momento; en la clínica te pueden iniciar pastillas o inyección durante la misma visita."
      },
      {
        "question": "¿Queda cicatriz después del retiro del implante?",
        "answer": "El corte es de pocos milímetros, así que suele quedar una marca pequeña que se aclara con el tiempo. Mantener la herida limpia y seca y no quitar antes de tiempo las cintas adhesivas ayuda a que cierre bien."
      },
      {
        "question": "¿Qué pasa si mi implante ya venció hace tiempo?",
        "answer": "No es peligroso tenerlo puesto, pero ya no te protege del embarazo de forma confiable. Usa condón mientras tanto y ven a retirarlo; el procedimiento es el mismo que con un implante vigente."
      }
    ],
    "faqsEn": [
      {
        "question": "Once the rod is out, how soon could I get pregnant?",
        "answer": "Yes. Fertility usually returns quickly once the rod is removed. If you're not planning a pregnancy, start another method right then; the clinic can start you on the pill or the shot during the same visit."
      },
      {
        "question": "Will the removal leave a scar?",
        "answer": "The cut is only a few millimeters long, so it usually leaves a small mark that fades over time. Keeping the wound clean and dry and not pulling the adhesive strips off early helps it heal well."
      },
      {
        "question": "What if my implant expired a while ago?",
        "answer": "Leaving it in isn't dangerous, but it no longer protects you from pregnancy reliably. Use condoms in the meantime and come in to have it removed; the procedure is the same as for an implant that hasn't expired."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿Tengo que venir en ayunas para el examen de PSA?",
        "answer": "Para el PSA no hace falta ayuno. Lo que sí conviene es evitar eyacular y hacer bicicleta o ejercicio pesado los dos días anteriores, y avisar si tuviste una infección urinaria reciente, porque eso puede elevarlo."
      },
      {
        "question": "Me salió el antígeno prostático elevado, ¿me debo asustar?",
        "answer": "No necesariamente. Una próstata agrandada, una inflamación o una infección también lo suben. El equipo médico lo interpreta con tu edad y tus síntomas y decide si se repite el análisis o se hace una referencia."
      },
      {
        "question": "¿Por qué me levanto tantas veces en la noche a orinar?",
        "answer": "Puede deberse a una próstata agrandada, a tomar líquidos tarde, al azúcar alta o a ciertos medicamentos. Vale la pena revisarlo: con la historia, un examen de orina y el PSA se suele aclarar la causa."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast for a PSA test?",
        "answer": "No fasting is needed for PSA. What helps is avoiding ejaculation and cycling or heavy exercise for two days beforehand, and mentioning any recent urinary infection, since that can raise the number."
      },
      {
        "question": "My PSA came back elevated. Should I be scared?",
        "answer": "Not necessarily. An enlarged prostate, inflammation or an infection can raise it too. The medical team reads it with your age and symptoms and decides whether to repeat the test or arrange a referral."
      },
      {
        "question": "Why do I get up so many times at night to pee?",
        "answer": "It can come from an enlarged prostate, drinking fluids late, high blood sugar or certain medicines. It's worth checking: your history, a urine test and a PSA usually make the cause clear."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿Qué pasa si comí algo antes de un análisis que pedía ayuno?",
        "answer": "Avísale al equipo médico antes de la extracción. Algunas pruebas se pueden hacer igual y otras, como la glucosa o las grasas, pueden salir alteradas; en ese caso te recomendamos volver otro día sin desayunar para que el resultado sea confiable."
      },
      {
        "question": "¿Puedo traer la orden de laboratorio que me dieron en otro lugar?",
        "answer": "Sí. Trae la hoja con las pruebas que te pidieron y el equipo médico revisa cuáles se pueden hacer aquí. Si no traes orden, también puedes venir: en la consulta se decide qué análisis te convienen según tu salud."
      },
      {
        "question": "¿Me pueden sacar sangre si me mareo con las agujas?",
        "answer": "Claro. Dilo al llegar y te tomamos la muestra acostado o reclinado, con calma. Comer algo ligero antes (si tu prueba no pide ayuno) y tomar agua ayuda a que no te bajes de presión."
      }
    ],
    "faqsEn": [
      {
        "question": "What if I ate before a test that required fasting?",
        "answer": "Tell the medical team before the draw. Some tests can still be done, but others, like glucose or the lipid panel, may come out skewed; in that case we suggest coming back another morning without breakfast so the result is reliable."
      },
      {
        "question": "Can I bring a lab order I got somewhere else?",
        "answer": "Yes. Bring the sheet listing the requested tests and the medical team will check which ones can be done here. If you don't have an order, you can still come: the visit itself decides which labs make sense for your health."
      },
      {
        "question": "Can you draw my blood if needles make me lightheaded?",
        "answer": "Of course. Let us know when you arrive and we'll draw the sample with you lying down or reclined, at a calm pace. A light snack beforehand (if your test doesn't require fasting) and some water help keep you from feeling faint."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Puedo hacerme el examen de orina si estoy embarazada?",
        "answer": "Sí, y conviene no esperar: en el embarazo una infección urinaria necesita atención pronta aunque las molestias sean leves. Avisa al equipo médico que estás embarazada para que elija un tratamiento seguro para ti y el bebé y valore si hace falta urocultivo."
      },
      {
        "question": "Ya empecé un antibiótico que tenía en casa, ¿igual me sirve venir?",
        "answer": "Sí. Trae la caja o dinos el nombre y desde cuándo lo tomas. Ese antibiótico puede cambiar lo que muestra el examen de orina y quizá no sea el adecuado para tu infección, así que el equipo médico lo toma en cuenta antes de indicarte el tratamiento."
      },
      {
        "question": "¿Los hombres también pueden tener infección urinaria?",
        "answer": "Sí, aunque es menos común que en las mujeres. En los hombres el equipo médico revisa con más cuidado la causa, porque a veces está relacionada con la próstata u otro problema, y puede pedir estudios adicionales o una referencia a un especialista."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get a urine test if I'm pregnant?",
        "answer": "Yes, and it's better not to wait: during pregnancy a urinary infection needs prompt care even when symptoms are mild. Tell the medical team you're pregnant so they choose a treatment that is safe for you and the baby and decide whether a urine culture is needed."
      },
      {
        "question": "I already started an antibiotic I had at home. Is it still worth coming in?",
        "answer": "Yes. Bring the box or tell us its name and when you started it. That antibiotic can change what the urine test shows and may not be the right one for your infection, so the medical team takes it into account before giving you a treatment."
      },
      {
        "question": "Can men get urinary tract infections too?",
        "answer": "Yes, although it's less common than in women. In men the medical team looks more carefully for the cause, since it is sometimes linked to the prostate or another issue, and may order extra tests or a referral to a specialist."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Puedo traer la muestra en cualquier recipiente de casa?",
        "answer": "Mejor no. Un frasco de cocina puede tener restos de comida o jabón que alteran el análisis. Pide el recipiente en la clínica: viene limpio, cierra bien y trae su paletita para tomar la cantidad justa."
      },
      {
        "question": "¿Tengo que dejar de tomar medicinas antes del examen de heces?",
        "answer": "Algunos productos, como antidiarreicos, laxantes, antibióticos o antiparasitarios, pueden afectar lo que se encuentra en la muestra. No los suspendas por tu cuenta: dile al equipo médico qué tomas y te indica si conviene esperar antes de recogerla."
      },
      {
        "question": "Mi hijo tiene comezón en el trasero por las noches, ¿le sirve este examen?",
        "answer": "Esa comezón nocturna suele relacionarse con oxiuros, unos gusanitos que a veces no aparecen en un examen de heces común. Tráelo a consulta: el equipo médico lo revisa y decide si basta con la muestra de heces o hace falta otra forma de detectarlos."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I bring the sample in any container from home?",
        "answer": "Better not. A kitchen jar can hold traces of food or soap that throw off the analysis. Ask for the container at the clinic: it's clean, seals well and comes with a small scoop to take just the right amount."
      },
      {
        "question": "Do I need to stop any medicines before a stool test?",
        "answer": "Some products, like anti-diarrheals, laxatives, antibiotics or deworming pills, can change what shows up in the sample. Keep taking them until you've talked it over; the medical team reviews your list and says whether the sample should wait a few days."
      },
      {
        "question": "My child's bottom itches at night. Will this test help?",
        "answer": "Nighttime itching is often linked to pinworms, tiny worms that don't always show up in a regular stool test. Bring your child in: the medical team checks them and decides whether the stool sample is enough or another way of detecting them is needed."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Puedo darle medicina para la fiebre a mi hijo antes de la prueba?",
        "answer": "Sí, bajar la fiebre no cambia el resultado del hisopado. Solo apunta qué le diste, la cantidad y la hora, para que el equipo médico lo sepa. Lo que sí conviene evitar es empezar antibióticos sobrantes de otra enfermedad antes de la prueba."
      },
      {
        "question": "¿Por qué no me dan antibiótico si la prueba salió negativa?",
        "answer": "Porque la mayoría de las gargantas irritadas son por virus, y el antibiótico no les hace nada; solo expone a efectos secundarios y a que las bacterias se vuelvan resistentes. El equipo médico te indica qué ayuda a aliviar el dolor y cuándo regresar si empeoras."
      },
      {
        "question": "¿Un adulto también puede contagiarse de strep en la garganta?",
        "answer": "Sí, aunque es más frecuente en niños y adolescentes. Los adultos que conviven con niños o trabajan con ellos se contagian con facilidad. La prueba rápida es la misma para cualquier edad y el resultado también se tiene en minutos."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I give my child fever medicine before the test?",
        "answer": "Yes, bringing the fever down doesn't change the swab result. Just note what you gave, how much and when, so the medical team knows. What you should avoid is starting leftover antibiotics from another illness before the test."
      },
      {
        "question": "Why won't I get an antibiotic if my strep test was negative?",
        "answer": "Because most sore throats are caused by viruses, and antibiotics do nothing against them; they only bring side effects and help bacteria become resistant. The medical team tells you what eases the pain and when to come back if you get worse."
      },
      {
        "question": "Can adults get strep throat too?",
        "answer": "Yes, although it's more common in children and teens. Adults who live or work with kids catch it easily. The rapid test is the same at any age, and the result is also ready within minutes."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "Si de niño recibí la vacuna BCG en mi país, ¿me sirve el PPD?",
        "answer": "Sí. Haber recibido la BCG no te impide hacerte el PPD, pero esa vacuna puede hacer que la piel reaccione aunque no tengas la bacteria. Coméntalo en la aplicación; si el resultado sale positivo, el equipo médico te explica qué estudio adicional pide tu trámite para aclararlo."
      },
      {
        "question": "¿El PPD es seguro durante el embarazo?",
        "answer": "Sí, la prueba cutánea se considera segura durante el embarazo. Avísale al equipo médico de todos modos para que lo anote en tu expediente y, si el resultado sale positivo, te oriente sobre los pasos siguientes pensando en ti y en el bebé."
      },
      {
        "question": "¿Qué pasa si no puedo regresar en la fecha de lectura?",
        "answer": "La reacción solo se puede medir dentro de un margen corto; si se pasa, el resultado ya no es válido y hay que aplicar la prueba otra vez. Por eso conviene que la apliques en un día en que sepas que podrás volver para la lectura."
      }
    ],
    "faqsEn": [
      {
        "question": "I had the BCG shot as a kid back home. Does the PPD still work for me?",
        "answer": "Yes. The BCG vaccine doesn't rule out the test, although it sometimes causes a positive reaction. Mention it at placement; if the result is positive, the medical team explains which extra test your paperwork calls for to sort it out."
      },
      {
        "question": "Can I take the TB skin test while pregnant?",
        "answer": "Yes, the skin test is considered safe during pregnancy. Still let the medical team know so they note it in your record and, if the result is positive, guide you on next steps with both you and the baby in mind."
      },
      {
        "question": "What if I can't come back on my reading date?",
        "answer": "The reaction can only be measured within a short window; once it passes, the result is no longer valid and the test has to be placed again. That's why it's best to get it on a day when you know you can return for the reading."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Mis resultados de ETS le llegan a alguien más?",
        "answer": "No. Tus resultados forman parte de tu expediente médico y se comparten solo contigo. Si eres mayor de edad, nadie de tu familia ni tu pareja se entera por la clínica; tú decides a quién contarle."
      },
      {
        "question": "¿Me tengo que revisar aunque no tenga ninguna molestia?",
        "answer": "Sí, vale la pena. Varias infecciones de transmisión sexual, como la clamidia, a menudo no dan síntomas y aun así se pueden contagiar o causar problemas con el tiempo. Una revisión después de una relación de riesgo es la única manera de saberlo."
      },
      {
        "question": "Si ya me trataron, ¿mi pareja también necesita tratamiento?",
        "answer": "En muchos casos sí, porque si tu pareja sigue con la infección te la puede volver a pasar. El equipo médico te explica cómo hablarlo y lo ideal es que tu pareja también venga a revisarse antes de que vuelvan a tener relaciones."
      }
    ],
    "faqsEn": [
      {
        "question": "Does anyone else get my STI results?",
        "answer": "No. Your results are part of your medical record and are shared only with you. If you're an adult, nobody in your family and not your partner finds out from the clinic; you decide whom to tell."
      },
      {
        "question": "Should I get checked even if nothing feels wrong?",
        "answer": "Yes, it's worth it. Several sexually transmitted infections, such as chlamydia, often cause no symptoms yet can still be passed on or cause problems over time. Getting checked after a risky encounter is the only way to know."
      },
      {
        "question": "If I've been treated, does my partner need treatment too?",
        "answer": "Often yes, because if your partner still has the infection they can pass it back to you. The medical team explains how to bring it up, and ideally your partner gets checked too before you have sex again."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿La semilla de amapola o el CBD pueden salir en la prueba de drogas?",
        "answer": "Es posible. Los panes con semilla de amapola en gran cantidad y algunos productos con CBD, que pueden contener restos de THC, a veces dan un resultado positivo. Si consumiste algo así, dilo antes de dar la muestra para que quede registrado."
      },
      {
        "question": "¿Qué hago si mi empleador pide un tipo de prueba específico?",
        "answer": "Trae por escrito lo que te pidieron: el formulario, el correo o el nombre de la prueba. Así confirmamos en recepción que el examen que te hacemos coincide con lo que tu empleador necesita, antes de tomar la muestra."
      },
      {
        "question": "¿Puedo hacerme la prueba si no logro orinar al llegar?",
        "answer": "Sí. Te podemos dar agua en una cantidad razonable y esperar un rato hasta que puedas dar la muestra. Lo que no conviene es tomar demasiada agua antes de venir, porque una orina muy diluida puede invalidar el resultado."
      }
    ],
    "faqsEn": [
      {
        "question": "Can poppy seeds or CBD show up on a drug test?",
        "answer": "It's possible. Eating a lot of poppy seed bread and some CBD products, which may contain traces of THC, can sometimes trigger a positive result. If you've had something like that, mention it before giving the sample so it's on record."
      },
      {
        "question": "What if my employer asks for a specific type of test?",
        "answer": "Bring in writing what they asked for: the form, the email or the name of the test. That way we confirm at the front desk that the test we do matches what your employer needs, before the sample is collected."
      },
      {
        "question": "Can I still be tested if I can't pee when I get there?",
        "answer": "Yes. We can give you a reasonable amount of water and wait a while until you're able to give the sample. What you shouldn't do is drink a lot of water before coming in, because very diluted urine can invalidate the result."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿Un electrocardiograma normal quiere decir que mi corazón está perfecto?",
        "answer": "No siempre. El EKG muestra cómo late el corazón durante esos minutos; algunos problemas solo aparecen con esfuerzo o de forma intermitente. Si tus síntomas siguen, el equipo médico puede recomendar otros estudios y una referencia a un especialista."
      },
      {
        "question": "¿Puedo tomar café o hacer ejercicio antes del EKG?",
        "answer": "Lo ideal es llegar tranquilo: evita el ejercicio fuerte justo antes y no exageres con el café o las bebidas energéticas, que pueden acelerar el ritmo. Siéntate unos minutos al llegar para que el trazo refleje tu estado en reposo."
      },
      {
        "question": "¿Pueden hacerle un electrocardiograma a una persona mayor o con marcapasos?",
        "answer": "Sí, el estudio es seguro a cualquier edad y también con marcapasos. Solo avisa del aparato al llegar, porque cambia la forma del trazo y el personal médico lo tiene en cuenta al interpretarlo."
      }
    ],
    "faqsEn": [
      {
        "question": "If my EKG comes back normal, can I rule out heart trouble?",
        "answer": "Not always. The tracing captures only the minutes you spend on the table, and certain problems show up just with effort or appear on and off. If your symptoms continue, the medical team may suggest other tests and a referral to a specialist."
      },
      {
        "question": "Can I have coffee or exercise before the EKG?",
        "answer": "It's best to arrive relaxed: avoid hard exercise right before and go easy on coffee or energy drinks, which can speed up your rhythm. Sit for a few minutes when you get here so the tracing reflects your heart at rest."
      },
      {
        "question": "Can an older adult or someone with a pacemaker get an EKG?",
        "answer": "Yes, the test is safe at any age and with a pacemaker too. Just mention the device when you arrive, since it changes the shape of the tracing and medical staff take it into account when reading it."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿Puedo ir al baño antes de un ultrasonido pélvico?",
        "answer": "Mejor no. Con la vejiga llena, la orina hace a un lado los intestinos y el útero y los ovarios se ven con más claridad. Si no aguantas, avisa en recepción: a veces se puede orinar un poco para aliviarte sin vaciarla por completo."
      },
      {
        "question": "¿Puedo llevar a alguien conmigo al ultrasonido de embarazo?",
        "answer": "Sí, tu pareja, tu mamá o alguien de confianza puede estar contigo en el cuarto mientras se hace el estudio. Si traes niños pequeños, conviene que otra persona los cuide en la sala de espera para que puedas estar tranquila en la camilla."
      },
      {
        "question": "¿Qué pasa si encuentran una bolita o un quiste en el ultrasonido?",
        "answer": "Muchos hallazgos de este tipo son benignos, pero el equipo médico te explica qué se ve, su tamaño y sus características. Según el caso, puede recomendar vigilarlo con otro ultrasonido más adelante, hacer más estudios o darte una referencia."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I use the restroom before a pelvic ultrasound?",
        "answer": "Better not. For a pelvic scan, a full bladder works like a window that lets the uterus and ovaries be seen. If you can't hold it, tell the front desk: sometimes you can release a little for relief without emptying it completely."
      },
      {
        "question": "Can I bring someone with me to my pregnancy ultrasound?",
        "answer": "Yes, your partner or a family member can come along during the scan. If you're bringing young children, it helps to have another adult watch them in the waiting room so you can relax on the exam table."
      },
      {
        "question": "What if the ultrasound finds a lump or a cyst?",
        "answer": "Many findings like these are benign, but the medical team explains what is seen, its size and its features. Depending on the case, they may suggest watching it with another ultrasound later, doing more tests or giving you a referral."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "Tengo presión alta, ¿puedo pasar el examen DOT?",
        "answer": "Muchas personas con presión alta controlada lo pasan. Lo importante es que tomes tu tratamiento como siempre y llegues descansado. Si la presión sale elevada, el certificado puede ser por menos tiempo o te pedirán regresar cuando esté controlada."
      },
      {
        "question": "¿Puedo usar mis lentes durante la prueba de la vista del DOT?",
        "answer": "Sí. Si con lentes o lentes de contacto alcanzas la visión requerida, puedes pasar, y en el certificado se anota que debes manejar siempre con ellos. Tráelos puestos o en su estuche el día del examen."
      },
      {
        "question": "Tengo diabetes y uso insulina, ¿qué debo traer al examen DOT?",
        "answer": "Trae la lista de tus medicinas y la información de tu tratamiento, como el registro de tus niveles de azúcar o una nota de quien te atiende la diabetes. Con eso el equipo médico puede evaluar tu caso con los criterios federales para conductores que usan insulina."
      }
    ],
    "faqsEn": [
      {
        "question": "I have high blood pressure. Can I pass the DOT exam?",
        "answer": "Many people with controlled high blood pressure pass. What matters is taking your treatment as usual and arriving rested. If your pressure reads high, the certificate may be issued for a shorter time or you may be asked to come back once it's under control."
      },
      {
        "question": "Can I wear my glasses during the DOT vision test?",
        "answer": "Yes. If you reach the required vision with glasses or contacts, you can pass, and the certificate notes that you must always drive wearing them. Wear them or bring them in their case on exam day."
      },
      {
        "question": "I have diabetes and use insulin. What should I bring to my DOT physical?",
        "answer": "Bring your medication list and information about your treatment, such as your blood sugar log or a note from whoever manages your diabetes. With that, the medical team can assess your case under the federal criteria for drivers who use insulin."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿Quién pone la firma en mi I-693 y sella el sobre?",
        "answer": "Lo firma un Civil Surgeon designado por USCIS, que es el único tipo de profesional cuya firma acepta USCIS en este formulario. Ese profesional revisa tu examen, tus vacunas y tus pruebas antes de sellar el sobre."
      },
      {
        "question": "Traigo mis vacunas de mi país en una cartilla vieja, ¿sirve?",
        "answer": "Sí, tráela. El equipo médico revisa cada dosis anotada y la compara con la lista de USCIS. Lo que esté documentado puede contar, y lo que falte se aplica en la clínica para completar tu formulario."
      },
      {
        "question": "¿Debo hacer ayuno para el examen migratorio?",
        "answer": "En general no se pide ayuno para el I-693. Come normal, toma tus medicamentos de siempre y trae la lista de ellos. Si tienes una condición especial, coméntala al llegar para que el equipo médico la anote."
      }
    ],
    "faqsEn": [
      {
        "question": "Whose signature goes on my I-693, and who seals the envelope?",
        "answer": "A USCIS-designated Civil Surgeon signs it, the only kind of provider whose signature USCIS accepts on this form. The Civil Surgeon reviews your exam, vaccines and test results before sealing the envelope."
      },
      {
        "question": "My vaccine card is old and from my home country. Will it count?",
        "answer": "Yes, bring it. The medical team checks every recorded dose against the USCIS list. Documented doses can count, and anything missing is given at the clinic so your form can be completed."
      },
      {
        "question": "Do I need to fast before the immigration exam?",
        "answer": "Fasting is usually not needed for the I-693. Eat normally, take your regular medications and bring a list of them. If you have a special condition, mention it when you arrive so the medical team can note it."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "Me corté con un metal oxidado, ¿necesito la vacuna del tétanos?",
        "answer": "Depende de cuándo fue tu último refuerzo. Si fue hace 5 años o más, o no lo recuerdas, el equipo médico puede indicarte el toxoide tetánico al revisar la herida. Ven pronto para que también limpien bien la cortada."
      },
      {
        "question": "¿Puedo ponerme la vacuna de la flu y la del tétanos en la misma visita?",
        "answer": "Normalmente sí: una va en el brazo izquierdo y la otra en el derecho. El equipo médico confirma antes tus antecedentes y te explica qué esperar de cada una para que decidas con calma."
      },
      {
        "question": "Ya me vacuné contra la flu el año pasado, ¿tengo que repetir?",
        "answer": "Sí. El virus de la influenza cambia y la protección de la vacuna baja con los meses, por eso se recomienda una dosis nueva en cada temporada, de preferencia al comenzar el otoño."
      }
    ],
    "faqsEn": [
      {
        "question": "I cut myself on rusty metal. Do I need a tetanus shot?",
        "answer": "The answer hinges on the date of your last tetanus booster. If it was 5 or more years ago, or you can't remember, the medical team may recommend the tetanus toxoid while checking the wound. Come in soon so the cut gets properly cleaned too."
      },
      {
        "question": "Can I get the flu shot and the tetanus shot at the same visit?",
        "answer": "Usually yes: one goes in your left arm and the other in your right. The medical team first checks your health history and explains what to expect from each one so you can decide calmly."
      },
      {
        "question": "I got a flu shot last year. Do I need another one?",
        "answer": "Yes. The influenza virus changes and the vaccine's protection fades over the months, so a new dose is recommended every season, ideally at the start of fall."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Me pueden negar el suero después de la revisión?",
        "answer": "Sí, puede pasar. Si el equipo médico ve que una condición del corazón, los riñones u otro factor hace que el suero no sea apropiado para ti ese día, te lo explica y te orienta sobre otras opciones de atención."
      },
      {
        "question": "¿Duele cuando colocan la vía del suero?",
        "answer": "Se siente un pinchazo breve, parecido al de una toma de sangre. Después solo queda el catéter delgado en la vena. Si en algún momento arde o se hincha la zona, avisa al personal para que lo revise."
      },
      {
        "question": "¿Puedo manejar después de la terapia IV?",
        "answer": "La mayoría de las personas se va por su cuenta. Antes de irte, el personal confirma que te sientes bien. Si te mareaste durante la sesión, quédate un rato más en la sala o pide que alguien te recoja."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I be turned down for the IV after the check?",
        "answer": "Yes, it can happen. If the medical team sees that a heart or kidney condition, or another factor, makes the IV inappropriate for you that day, they explain why and point you to other care options."
      },
      {
        "question": "Does it hurt when they place the IV line?",
        "answer": "You feel a brief pinch, similar to a blood draw. After that, only the thin catheter stays in the vein. If the area starts burning or swelling at any point, tell the staff so they can check it."
      },
      {
        "question": "Can I drive after IV therapy?",
        "answer": "Most people leave on their own. Before you go, the staff confirms you feel well. If you got dizzy during the session, stay a little longer in the waiting area or ask someone to pick you up."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "Me corté anoche y no fui, ¿todavía me pueden coser?",
        "answer": "Ven de todas formas. Una herida que lleva muchas horas abierta tiene más riesgo de infección, así que el equipo médico evalúa si todavía conviene suturarla o si es mejor manejarla con curaciones."
      },
      {
        "question": "¿Se siente algo mientras me ponen los puntos?",
        "answer": "Solo notarás el pinchazo de la anestesia local, que arde unos segundos. Después la zona queda dormida y puedes sentir presión o jalones leves, pero no el dolor del cierre."
      },
      {
        "question": "¿Quién me quita los puntos cuando ya sanó la herida?",
        "answer": "Puedes regresar a la clínica para el retiro. El momento depende de la parte del cuerpo donde está la herida, y el equipo médico te lo indica al terminar la sutura."
      }
    ],
    "faqsEn": [
      {
        "question": "I cut myself last night and didn't go in. Can it still be stitched?",
        "answer": "Come in anyway. A wound that has been open for many hours carries more infection risk, so the medical team decides whether stitching still makes sense or wound care is the better route."
      },
      {
        "question": "Will I feel anything while the stitches go in?",
        "answer": "You will only feel the local anesthetic shot, which stings for a few seconds. After that the area is numb, and you may feel light pressure or tugging, but not the pain of the closure."
      },
      {
        "question": "Who removes my stitches once the wound heals?",
        "answer": "You can come back to the clinic to have them taken out. Timing depends on where the wound is on your body, and the medical team tells you when to return once the stitching is done."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Cada cuánto tengo que venir a la curación?",
        "answer": "Una úlcera que drena mucho suele pedir visitas más seguidas que una herida quirúrgica limpia. Al terminar cada curación el equipo médico te dice cuándo regresar, y espacia las visitas conforme la piel va cerrando."
      },
      {
        "question": "Me operaron en otro lugar, ¿pueden hacerme la curación de la herida?",
        "answer": "Sí. Trae la hoja de alta del hospital o del lugar donde te operaron. El equipo médico revisa la herida, hace la limpieza y el cambio de apósito, y te avisa si algo requiere volver con quien te operó."
      },
      {
        "question": "¿Se puede mojar el vendaje en la regadera?",
        "answer": "Mejor que no. Al bañarte, cúbrelo con una bolsa de plástico sellada con cinta, salvo que te indiquen otra cosa, y deja tinas, albercas y el mar para cuando la piel haya cerrado por completo."
      }
    ],
    "faqsEn": [
      {
        "question": "How many dressing visits will my wound need?",
        "answer": "A heavily draining ulcer usually needs closer visits than a clean surgical incision. After each dressing change you'll hear when to come back, and the gaps between visits grow as the skin closes."
      },
      {
        "question": "I had surgery somewhere else. Can you take care of my incision?",
        "answer": "Yes. Bring the discharge sheet from the hospital or center where you had the operation. The medical team checks the incision, cleans it, changes the dressing and tells you if anything means going back to your surgeon."
      },
      {
        "question": "Can the dressing get wet in the shower?",
        "answer": "Better not. Cover it with a plastic bag taped shut while you shower, unless you were told otherwise, and save tubs, pools and the ocean for when the skin has fully closed."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿El lipoma o el quiste puede volver a salir?",
        "answer": "Puede pasar, sobre todo con algunos quistes si queda parte de la pared. Por eso el equipo médico procura retirar la lesión completa. Si notas que el bulto reaparece en la misma zona, regresa para revisarlo."
      },
      {
        "question": "¿Me va a quedar cicatriz después de quitarme un lunar?",
        "answer": "Toda incisión deja una marca, que suele ser una línea fina y se aclara con los meses. Cuidar la herida, no rascarla y protegerla del sol mientras sana ayuda a que se note menos."
      },
      {
        "question": "¿Puedo trabajar después de una cirugía menor?",
        "answer": "Muchas personas vuelven a sus actividades enseguida. Si tu trabajo exige cargar peso o mover mucho la zona operada, el equipo médico te indica cuánto reposo conviene para no abrir los puntos."
      }
    ],
    "faqsEn": [
      {
        "question": "Can a lipoma or cyst come back?",
        "answer": "It can, especially with some cysts if part of the wall remains. That is why the medical team aims to remove the whole lesion. If you notice the lump returning in the same spot, come back to have it checked."
      },
      {
        "question": "Will removing a mole leave a scar?",
        "answer": "Every incision leaves a mark, usually a thin line that fades over the months. Caring for the wound, not scratching it and keeping it out of the sun while it heals help it show less."
      },
      {
        "question": "Can I go back to work after minor surgery?",
        "answer": "Many people return to their routine right away. If your job involves heavy lifting or a lot of movement in the treated area, the medical team tells you how much rest you need so the stitches don't open."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿Basta con tomar antibiótico para quitar un absceso?",
        "answer": "Muchas veces no. Cuando ya se formó una bolsa de pus, el antibiótico solo llega con dificultad y lo que más alivia es drenarlo. El equipo médico decide si además necesitas antibiótico según el tamaño y la zona."
      },
      {
        "question": "Ya es mi tercer absceso este año, ¿es normal?",
        "answer": "No es raro que se repitan, por bacterias que viven en la piel, por roce, por vellos encarnados o por condiciones como la diabetes. Si te pasa seguido, coméntalo en la consulta para buscar la causa y recibir medidas de prevención."
      },
      {
        "question": "¿Qué hago con la gasa que dejaron dentro de la herida?",
        "answer": "No la saques por tu cuenta a menos que te lo indiquen. Normalmente se retira o se cambia en la revisión. Si se sale sola, cubre la herida con un vendaje limpio y avísanos."
      }
    ],
    "faqsEn": [
      {
        "question": "Isn't an antibiotic enough to get rid of an abscess?",
        "answer": "Often it isn't. Once a pocket of pus has formed, antibiotics have trouble reaching it, and draining it is what brings relief. The medical team decides whether you also need an antibiotic based on its size and location."
      },
      {
        "question": "This is my third abscess this year. Is that normal?",
        "answer": "Repeat abscesses are not unusual; they can come from bacteria living on the skin, friction, ingrown hairs or conditions like diabetes. If it happens often, bring it up during your visit so the cause can be looked into and you get prevention tips."
      },
      {
        "question": "What should I do with the gauze left inside the wound?",
        "answer": "Don't pull it out yourself unless you were told to. It is usually removed or changed at the follow-up visit. If it falls out on its own, cover the wound with a clean dressing and let us know."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Me van a quitar toda la uña del dedo?",
        "answer": "Por lo general no. En la mayoría de los casos se retira solo la franja lateral que se está enterrando y el resto de la uña se queda. El equipo médico te explica qué parte se quita antes de empezar."
      },
      {
        "question": "¿Puedo traer a mi hijo adolescente con uña enterrada?",
        "answer": "Sí. Es común en adolescentes por el calzado deportivo y el corte de uñas. Un padre o tutor debe acompañarlo, y el equipo médico evalúa el dedo antes de proponer el procedimiento."
      },
      {
        "question": "¿Cuándo puedo volver a usar tenis o zapato cerrado?",
        "answer": "Cuando el dedo ya no duela al apoyarlo y la zona esté seca. Mientras tanto usa calzado abierto o amplio. En la revisión el equipo médico te confirma si ya puedes volver a tu calzado normal."
      }
    ],
    "faqsEn": [
      {
        "question": "Will you remove my whole toenail?",
        "answer": "Usually not. In most cases only the side strip that is digging in is removed, and the rest of the nail stays. The medical team explains which part comes off before starting."
      },
      {
        "question": "Can I bring my teenager with an ingrown toenail?",
        "answer": "Yes. It is common in teens because of athletic shoes and how nails are trimmed. A parent or guardian should come along, and the medical team examines the toe before suggesting the procedure."
      },
      {
        "question": "When can I wear sneakers or closed shoes again?",
        "answer": "Once the toe no longer hurts when you step on it and the area is dry. Until then, wear open or roomy footwear. At the follow-up the medical team confirms whether you can go back to your usual shoes."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Me dan genérico o de marca?",
        "answer": "Depende del medicamento que te indicaron y de lo que haya disponible. Los genéricos tienen el mismo ingrediente activo que los de marca. Si prefieres uno u otro, coméntalo al recibirlo y te explican las opciones."
      },
      {
        "question": "Olvidé cómo tomar el medicamento que me dieron, ¿qué hago?",
        "answer": "Revisa primero la etiqueta, que trae la dosis y el horario. Si sigues con dudas, llama o escribe a la clínica y te lo explican de nuevo. No dupliques la dosis para compensar una toma olvidada."
      },
      {
        "question": "¿Tienen medicamentos de venta libre para los niños?",
        "answer": "Hay opciones de venta libre para el dolor, la fiebre y las alergias. En niños la dosis depende del peso y la edad, así que pregunta al personal antes de dárselo y usa siempre el medidor que trae el envase."
      }
    ],
    "faqsEn": [
      {
        "question": "Will I get a generic or a brand-name drug?",
        "answer": "It depends on the medication you were prescribed and what is available. Generics have the same active ingredient as brand-name drugs. If you prefer one or the other, mention it when you pick it up and staff will explain your options."
      },
      {
        "question": "I forgot how to take the medicine I was given. What now?",
        "answer": "Check the label first; it lists the dose and schedule. If you still have questions, call or message the clinic and they will explain it again. Don't double up a dose to make up for a missed one."
      },
      {
        "question": "Do you carry over-the-counter medicine for children?",
        "answer": "There are over-the-counter options for pain, fever and allergies. For children the dose depends on weight and age, so ask the staff before giving it and always use the measuring device that comes in the package."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
