/* ============================================================
   data.js — Enhanced: Morocco MEN Curriculum + Full Content
   Didactics Academy — CERMF / ENS Teacher Exam Prep
   © Omar El Alaoui
   ============================================================ */

/* ---------- TEACHING METHODS --------------------------------- */
const METHODS = [
  {
    id: "gtm",
    short: "GTM",
    name: "Grammar Translation Method",
    era: "19th century — still common in exam-driven contexts",
    definition: "A method that teaches language through explicit grammar rules and translation between the target language and the mother tongue. The written word and literary text are central; speaking is secondary.",
    principles: [
      "Grammar is taught deductively, through explicit rules and paradigms.",
      "Vocabulary is learned through bilingual word lists and translation.",
      "Reading and writing are prioritized over speaking and listening.",
      "Accuracy is valued above fluency.",
      "The mother tongue is used as the medium of instruction."
    ],
    teacherRole: "The authority and source of knowledge; explains rules, corrects errors, and directs translation exercises.",
    studentRole: "Passive recipient who memorizes rules and vocabulary and applies them in translation tasks.",
    advantages: [
      "Useful for understanding the grammatical structure of a language.",
      "Easy to apply in large classes with few resources.",
      "Helpful for reading classical or literary texts."
    ],
    disadvantages: [
      "Neglects oral communication and listening skills.",
      "Can be demotivating — little authentic language use.",
      "Translation does not reflect natural language use."
    ],
    example: "Students translate a passage from English into Arabic/French, then identify and explain every verb tense used in the passage."
  },
  {
    id: "alm",
    short: "ALM",
    name: "Audio-Lingual Method",
    era: "Mid-20th century, rooted in behaviourist psychology",
    definition: "A method based on habit formation through repetition and drilling. Language is taught as a set of patterns to be memorized via stimulus–response–reinforcement.",
    principles: [
      "Language is mainly speech; reading/writing come after oral mastery.",
      "Dialogues and pattern drills are memorized and repeated.",
      "Errors are corrected immediately to prevent bad habits forming.",
      "L1 use is avoided; the target language is used exclusively.",
      "Structures are presented from simple to complex."
    ],
    teacherRole: "Model of correct language and drill leader, controlling pace and correcting instantly.",
    studentRole: "Imitator who repeats and memorizes patterns, with little room for creative language use.",
    advantages: [
      "Builds automaticity and confidence with basic structures.",
      "Effective for pronunciation and structural accuracy.",
      "Clear, structured progression suits beginners."
    ],
    disadvantages: [
      "Mechanical drilling can be boring and demotivating.",
      "Little focus on meaning or real communication.",
      "Learners may struggle to transfer drilled patterns to spontaneous speech."
    ],
    example: "The teacher models 'I go to school every day,' and students substitute drills: 'She ___ to school every day,' repeating the pattern with cued words."
  },
  {
    id: "clt",
    short: "CLT",
    name: "Communicative Language Teaching",
    era: "1970s–present, the dominant paradigm in EFL today",
    definition: "An approach that views language as a tool for communication. Meaning, interaction, and real-life use are prioritized over isolated grammar drills.",
    principles: [
      "Communicative competence is the goal, not just grammatical accuracy.",
      "Authentic materials and meaningful tasks are used.",
      "Fluency and accuracy are both valued, but fluency is not sacrificed.",
      "Learners interact in pairs/groups to negotiate meaning.",
      "Errors are a natural part of learning, not failures to be eliminated."
    ],
    teacherRole: "Facilitator and guide who sets up communicative tasks and monitors interaction rather than controlling every utterance.",
    studentRole: "Active communicator and negotiator of meaning, working collaboratively with peers.",
    advantages: [
      "Develops real communicative ability, not just knowledge about the language.",
      "Increases motivation through meaningful, learner-centred tasks.",
      "Builds confidence in spontaneous use of English."
    ],
    disadvantages: [
      "Can lead to fluency at the expense of grammatical accuracy if unbalanced.",
      "Demands more planning and classroom management skill from the teacher.",
      "Assessment of communicative ability is harder than testing discrete grammar points."
    ],
    example: "In pairs, students role-play booking a hotel room: one is the receptionist, the other a tourist with a list of requirements to negotiate."
  },
  {
    id: "tblt",
    short: "TBLT",
    name: "Task-Based Language Teaching",
    era: "1980s–present, an evolution of CLT",
    definition: "An approach where the curriculum is organised around tasks — purposeful activities with a clear outcome — rather than grammar points. Language is acquired as a by-product of completing the task.",
    principles: [
      "The task (not the grammar point) is the unit of planning.",
      "Tasks have a clear outcome and real-world relevance.",
      "Language form is addressed mainly after task completion (focus on form).",
      "Learners use whatever language they have to achieve the task goal.",
      "Sequence: pre-task, task cycle, language focus (post-task)."
    ],
    teacherRole: "Designer of tasks and facilitator during the task cycle; provides language input mainly at the post-task stage.",
    studentRole: "Problem-solver who uses the target language purposefully to complete a real task.",
    advantages: [
      "Highly motivating because tasks resemble real-life problem solving.",
      "Promotes fluency and strategic communication.",
      "Encourages learner autonomy and negotiation of meaning."
    ],
    disadvantages: [
      "Can be difficult to design appropriate tasks for lower levels.",
      "Risk of fossilised errors if focus on form is neglected.",
      "Requires careful planning and time management."
    ],
    example: "Students plan a class trip: in groups they research a destination, compare prices online, and present the best option with a justified budget."
  },
  {
    id: "clil",
    short: "CLIL",
    name: "Content and Language Integrated Learning",
    era: "1990s–present, popular in bilingual/European education",
    definition: "A dual-focused approach where a subject (e.g., science, history) is taught through a foreign language, so content and language are learned simultaneously.",
    principles: [
      "The 4Cs framework: Content, Communication, Cognition, Culture.",
      "Language is the medium for learning subject content, not the end goal alone.",
      "Scaffolding (visuals, glossaries, graphic organisers) supports comprehension.",
      "Cognitive challenge is matched to linguistic support.",
      "Both subject knowledge and language proficiency are assessed."
    ],
    teacherRole: "Content expert and language scaffolder who simplifies linguistic input without diluting cognitive demand.",
    studentRole: "Learner of both subject matter and language, often relying on visual and contextual support.",
    advantages: [
      "Increases exposure to the target language across the curriculum.",
      "Develops cognitive and academic language alongside everyday language.",
      "Connects language learning to meaningful, cross-curricular content."
    ],
    disadvantages: [
      "Requires teachers competent in both the subject and the language.",
      "Risk of content or language being under-taught if not balanced.",
      "Needs significant material adaptation and scaffolding."
    ],
    example: "In an English-medium geography lesson, students label a world map, learn key vocabulary (continent, climate, equator) and discuss climate zones in English."
  },
  {
    id: "direct",
    short: "DM",
    name: "Direct Method",
    era: "Late 19th – early 20th century",
    definition: "A method that teaches language through direct association of meaning with the target language, using demonstration, visual aids, and no translation.",
    principles: [
      "Classroom instruction is conducted exclusively in the target language.",
      "Only everyday vocabulary and sentences are taught.",
      "New teaching points are taught through modeling and practice.",
      "Both speech and listening comprehension are emphasised.",
      "Correct pronunciation and grammar are stressed."
    ],
    teacherRole: "Partner and guide; demonstrates meaning through objects and actions; encourages speaking.",
    studentRole: "Active participant; associates meaning directly with L2; practices speaking and listening.",
    advantages: [
      "Promotes fluency and natural language use.",
      "Facilitates vocabulary learning through visual aids.",
      "Makes learning enjoyable."
    ],
    disadvantages: [
      "Requires small class sizes and talented teachers.",
      "Neglects reading and writing to some extent.",
      "Demanding for teachers (native-like proficiency needed)."
    ],
    example: "The teacher shows a picture of a dog and says 'This is a dog.' Students repeat and then answer questions like 'Is this a cat?' without using L1."
  },
  {
    id: "tpr",
    short: "TPR",
    name: "Total Physical Response",
    era: "1970s – James Asher",
    definition: "A method where students learn language through physical movement in response to verbal commands, mirroring first language acquisition.",
    principles: [
      "Listening and physical response are emphasised before oral production.",
      "Commands are used to direct student actions.",
      "Humor and stress-free environment are encouraged.",
      "Students are not forced to speak until they feel ready."
    ],
    teacherRole: "Director of a stage play; gives commands and models actions.",
    studentRole: "Listener and performer; monitors own progress; speaks when ready.",
    advantages: [
      "Fun and engaging for beginners.",
      "Reduces anxiety; builds comprehension quickly.",
      "Good for teaching vocabulary related to actions."
    ],
    disadvantages: [
      "Cannot easily explain abstract concepts.",
      "May be challenging for shy students.",
      "Overuse can become boring."
    ],
    example: "The teacher says 'Stand up', 'Turn around', 'Touch your nose' – students perform the actions, then give the commands themselves."
  },
  {
    id: "silent",
    short: "SW",
    name: "Silent Way",
    era: "1970s – Caleb Gattegno",
    definition: "A method where the teacher remains silent as much as possible, encouraging learners to discover language rules through problem-solving and self-correction.",
    principles: [
      "Learning is facilitated by problem-solving and discovery.",
      "The teacher uses gestures, charts, and colored rods to guide.",
      "Errors are seen as a natural part of learning.",
      "Learners become autonomous and responsible."
    ],
    teacherRole: "Silent facilitator; provides minimal guidance; uses cues and gestures.",
    studentRole: "Independent problem-solver; active experimenter; self-corrects.",
    advantages: [
      "Encourages autonomy and deep learning.",
      "Develops pronunciation and self-correction.",
      "Minimises teacher talking time."
    ],
    disadvantages: [
      "Time-consuming; students may struggle without explanation.",
      "Not all students are self-motivated.",
      "Can be expensive due to materials (colored rods, charts)."
    ],
    example: "The teacher points to a colored rod and makes a gesture – students guess the word. The teacher nods or shakes head to indicate correctness."
  },
  {
    id: "suggestopedia",
    short: "SP",
    name: "Suggestopedia",
    era: "1970s – Georgi Lozanov",
    definition: "A method that uses relaxation, music, and suggestion to lower psychological barriers and accelerate language learning.",
    principles: [
      "A relaxed, comfortable environment is essential.",
      "Baroque music is played to enhance mental relaxation.",
      "Students adopt new identities to reduce inhibitions.",
      "Errors are tolerated; focus is on content not form."
    ],
    teacherRole: "Authority figure who creates a positive atmosphere; uses music and art.",
    studentRole: "Child-like, open to suggestion; participates in role-plays and visualisations.",
    advantages: [
      "Reduces anxiety; increases retention.",
      "Uses music and drama to engage learners.",
      "Taps into unused mental capacity."
    ],
    disadvantages: [
      "Not suitable for all contexts (large classes, limited resources).",
      "Lacks focus on grammar and formal testing.",
      "Criticised for being unscientific."
    ],
    example: "Students sit in comfortable chairs, listen to soft baroque music, and read a dialogue with new vocabulary while the teacher reads in a calm, varied voice."
  },
  {
    id: "cll",
    short: "CLL",
    name: "Community Language Learning",
    era: "1970s – Charles Curran",
    definition: "A method based on counselling principles, where the teacher acts as a counsellor and students as clients, working together to build language.",
    principles: [
      "Learning is a collaborative, community effort.",
      "Students decide what they want to learn.",
      "The teacher provides translation and support.",
      "Affective factors (feelings) are prioritised."
    ],
    teacherRole: "Counsellor who provides translations and emotional support; encourages group work.",
    studentRole: "Client and collaborator; works with peers to express themselves.",
    advantages: [
      "Builds a supportive community.",
      "Lowers affective filter; promotes risk-taking.",
      "Encourages learner autonomy."
    ],
    disadvantages: [
      "Time-consuming; not suitable for large classes.",
      "Requires teacher fluency in L1 and L2.",
      "May neglect accuracy in favour of fluency."
    ],
    example: "Students sit in a circle, whisper a sentence in L1 to the teacher, who translates it into L2. The student repeats it aloud, and the group records and discusses the sentences."
  },
  {
    id: "lexical",
    short: "LA",
    name: "Lexical Approach",
    era: "1990s – Michael Lewis",
    definition: "An approach that places vocabulary — especially multi-word chunks, collocations, and fixed expressions — at the centre of language learning, rather than grammar.",
    principles: [
      "Language consists of chunks (collocations, idioms, fixed expressions), not grammar + vocabulary.",
      "Notice, record, and recycle lexical chunks is the core learning cycle.",
      "Grammar emerges from lexis, not the other way around.",
      "Authentic input is central; learners are exposed to large amounts of real language.",
      "Consciousness-raising replaces explicit grammar instruction."
    ],
    teacherRole: "Facilitator who draws attention to lexical patterns; builds noticing skills.",
    studentRole: "Active noticer and collector of lexical chunks; builds a personal vocabulary notebook.",
    advantages: [
      "Produces more natural-sounding language through chunk acquisition.",
      "Vocabulary development is central — motivating for many learners.",
      "Aligns with corpus linguistics research on how language is actually used."
    ],
    disadvantages: [
      "Underspecifies how to sequence or grade lexical input.",
      "Grammar is under-emphasised — risks lack of structural accuracy.",
      "Fewer published course materials built fully around this approach."
    ],
    example: "After reading an article, students highlight collocations (e.g. 'make a decision', 'heavy traffic', 'take responsibility') and enter them in a lexical notebook with context sentences."
  }
];

/* ---------- DIDACTICS TOPICS --------------------------------- */
const DIDACTICS_TOPICS = [
  {
    id: "classroom-management",
    name: "Classroom Management",
    summary: "The set of strategies a teacher uses to organise the physical and social environment of the classroom so that learning can happen effectively.",
    points: [
      "Establishing clear, consistent routines and rules from day one.",
      "Using seating arrangements purposefully (rows, pairs, groups, horseshoe) depending on the task.",
      "Giving clear instructions and checking understanding before starting a task.",
      "Managing transitions between activities efficiently to avoid lost time.",
      "Using positive reinforcement and proximity control rather than only sanctions.",
      "Differentiating instruction to include mixed-ability learners."
    ]
  },
  {
    id: "assessment",
    name: "Assessment & Evaluation",
    summary: "The systematic process of gathering information about learners' progress to inform teaching decisions and report on achievement.",
    points: [
      "Formative assessment (assessment FOR learning): ongoing, informs next steps — e.g. exit tickets, peer feedback.",
      "Summative assessment (assessment OF learning): measures achievement at the end of a unit/course — e.g. final exam.",
      "Diagnostic assessment: identifies learners' needs before instruction begins.",
      "Validity (does it measure what it claims to?) and reliability (consistency of results) are key quality criteria.",
      "Rubrics and clear success criteria make assessment transparent and fair.",
      "Self- and peer-assessment build learner autonomy and metacognition."
    ]
  },
  {
    id: "lesson-planning-theory",
    name: "Principles of Lesson Planning",
    summary: "Lesson planning translates curriculum goals into a coherent sequence of classroom activities with clear aims and logical progression.",
    points: [
      "Every lesson should have a clear, measurable objective (often using action verbs — identify, produce, compare).",
      "The PPP model: Presentation, Practice, Production is common for structural lessons.",
      "Warm-ups activate prior knowledge and lower learners' affective barrier.",
      "Staging should move from controlled to freer practice (scaffolding).",
      "Anticipated problems and solutions should be planned in advance.",
      "Feedback and a closing stage consolidate learning and check objectives were met."
    ]
  },
  {
    id: "learner-differences",
    name: "Learner Differences & Motivation",
    summary: "Learners differ in aptitude, learning style preference, motivation and affective factors — effective teaching accounts for this diversity.",
    points: [
      "Intrinsic motivation (internal interest) tends to produce deeper, longer-lasting learning than purely extrinsic motivation.",
      "Krashen's Affective Filter Hypothesis: anxiety and low confidence can block acquisition.",
      "Multiple intelligences and varied learning preferences call for varied activity types.",
      "The Zone of Proximal Development (Vygotsky): learners progress most with appropriate scaffolding from a more capable other.",
      "Learner autonomy can be fostered through choice, reflection and self-assessment tasks."
    ]
  },
  {
    id: "learning-theories",
    name: "Learning Theories",
    summary: "Major theories explaining how languages are acquired: Behaviourism, Cognitivism, Constructivism, Social Constructivism, and Humanism.",
    points: [
      "Behaviourism: learning through stimulus-response and reinforcement (Pavlov, Skinner, Thorndike).",
      "Cognitivism: learning as mental processing, innate LAD (Chomsky), creativity in language use.",
      "Constructivism: learners build knowledge from experience (Piaget) – assimilation & accommodation.",
      "Social Constructivism: learning via social interaction and scaffolding (Vygotsky) – ZPD.",
      "Humanism: whole-person learning, affective factors, self-esteem, and motivation (Maslow, Rogers)."
    ]
  },
  {
    id: "learning-styles",
    name: "Learning Styles",
    summary: "Different ways individuals prefer to learn: visual, auditory, kinaesthetic, and more.",
    points: [
      "Visual: learn through seeing – prefer diagrams, charts, written instructions.",
      "Auditory: learn through listening – prefer lectures, discussions, audio materials.",
      "Kinaesthetic: learn through doing and moving – prefer hands-on activities, role-play.",
      "Teachers should vary activities to cater to all styles and avoid over-reliance on one mode."
    ]
  },
  {
    id: "multiple-intelligences",
    name: "Multiple Intelligences (Gardner)",
    summary: "Gardner's theory that intelligence is not single but multiple: linguistic, logical-mathematical, spatial, bodily-kinaesthetic, musical, interpersonal, intrapersonal, naturalistic.",
    points: [
      "Linguistic-verbal: sensitivity to spoken and written language.",
      "Logical-mathematical: capacity for deductive reasoning and pattern recognition.",
      "Visual-spatial: ability to perceive and manipulate visual information.",
      "Bodily-kinaesthetic: use of body to express ideas and solve problems.",
      "Musical: sensitivity to pitch, rhythm, and tone.",
      "Interpersonal: understanding and interacting effectively with others.",
      "Intrapersonal: self-awareness and understanding of one's own emotions.",
      "Naturalistic: recognising and categorising natural objects."
    ]
  },
  {
    id: "error-analysis",
    name: "Error & Mistake Analysis",
    summary: "Distinguishing between errors (lack of knowledge) and mistakes (performance slips). Sources: interlingual, intralingual (overgeneralisation), and context of learning.",
    points: [
      "Mistake: a slip due to fatigue or inattention – can be self-corrected.",
      "Error: systematic deviation due to incomplete knowledge – requires remedial teaching.",
      "Interlingual: mother tongue interference (e.g., 'I have 14 years' from Arabic/French).",
      "Intralingual: overgeneralisation of rules (e.g., 'he goed').",
      "Context of learning: mislearning from faulty input.",
      "Error correction types: self-correction, peer-correction, teacher-correction (immediate vs delayed)."
    ]
  },
  {
    id: "bloom-taxonomy",
    name: "Bloom's Taxonomy",
    summary: "A hierarchical model of cognitive skills used to write learning objectives: Remember → Understand → Apply → Analyse → Evaluate → Create.",
    points: [
      "Remember: recall facts and basic concepts (define, list, recall).",
      "Understand: explain ideas or concepts (summarise, classify, explain).",
      "Apply: use information in new situations (use, demonstrate, solve).",
      "Analyse: draw connections, break down information (differentiate, organise, compare).",
      "Evaluate: justify a decision or course of action (judge, defend, critique).",
      "Create: produce a new or original work (design, construct, produce).",
      "Revised taxonomy (Anderson & Krathwohl, 2001): verb forms replace nouns."
    ]
  },
  {
    id: "men-morocco",
    name: "Morocco MEN: National Curriculum Framework",
    summary: "The Moroccan Ministry of National Education (Ministère de l'Éducation Nationale – MEN) prescribes national guidelines, competency frameworks, and pedagogical orientations for all public school English teaching.",
    points: [
      "The 2009 and 2016 Education Reform Acts (La Charte Nationale) set the strategic framework; the 2015–2030 Strategic Vision reinforces quality and equity.",
      "The official curriculum for English (Lycée / High School) focuses on communicative competence and intercultural awareness.",
      "CERMF (Certificat d'Aptitude à l'Enseignement Moyen des Matières Relatives à la Formation Linguistique) targets middle school English teachers; ENS prepares secondary teachers.",
      "Textbooks at the Lycée level (currently Gateway, Ticket to English, and Insights) are MEN-approved and aligned to CEFR levels (A1–B2).",
      "The MEN promotes a learner-centred, competency-based approach (APC – Approche Par Compétences).",
      "Evaluation norms: continuous assessment (contrôle continu) + end-of-semester exams (examens semestriels). The Baccalauréat English exam tests reading, writing and language use.",
      "Teachers are supervised by Inspecteurs Pédagogiques Régionaux (IPR) who conduct classroom observations."
    ]
  },
  {
    id: "apc-morocco",
    name: "APC — Competency-Based Approach (Approche Par Compétences)",
    summary: "The official pedagogical approach mandated by the Moroccan MEN, shifting focus from content coverage to the development of measurable competencies in learners.",
    points: [
      "APC defines a compétence as 'the capacity to mobilise a set of resources (knowledge, skills, attitudes) to solve a complex situation.'",
      "Three types of competencies in the Moroccan English curriculum: communicative, methodological (savoir apprendre), and social/civic.",
      "Lessons are structured around situations-problèmes (problem situations) that learners solve using language.",
      "The lesson sequence follows: Situation → Anticipation → Exploration → Exploitation → Production → Évaluation.",
      "Assessment is competency-based: not just 'what does the learner know?' but 'what can the learner DO?'",
      "APC aligns with CLT and TBLT principles but is adapted for the Moroccan sociolinguistic context (Arabic, French, Darija, Tamazight coexist).",
      "Teachers write lesson plans using the MEN's official fiche pédagogique template."
    ]
  },
  {
    id: "fiche-pedagogique",
    name: "Fiche Pédagogique (MEN Lesson Plan Template)",
    summary: "The official Moroccan MEN lesson plan format required for inspections and CERMF/ENS exams. Contains standardised fields that all teachers must complete.",
    points: [
      "Informations générales: level (niveau), unit (unité), sequence number, duration, date.",
      "Compétences visées: the targeted competencies drawn from the official programme.",
      "Objectifs: measurable learning objectives (what students will be able to DO).",
      "Prérequis: prior knowledge students need to have before this lesson.",
      "Matériel / Support: materials and textbook pages used.",
      "Déroulement: the main lesson stages — Mise en situation, Anticipation/Exploration, Exploitation, Production, Évaluation.",
      "Évaluation: formative checks used during and at the end of the lesson.",
      "Devoirs: homework assigned.",
      "IPR inspectors check that the fiche is complete, that objectives are measurable, and that the déroulement follows APC principles."
    ]
  },
  {
    id: "cefr-morocco",
    name: "CEFR Levels in the Moroccan Context",
    summary: "The Common European Framework of Reference for Languages (CEFR) underpins the Moroccan English curriculum's grading of language proficiency from A1 to C2.",
    points: [
      "A1–A2 (Basic User): 1ère et 2ème année collège — basic everyday expressions.",
      "B1 (Independent User – threshold): 3ème année collège / Tronc Commun — can handle familiar topics.",
      "B1–B2 (Independent User): 1ère et 2ème Baccalauréat — can communicate with reasonable fluency.",
      "The Baccalauréat exam targets B1+ proficiency.",
      "Can-do statements are used to write communicative objectives in lesson plans.",
      "Teachers should refer to CEFR descriptors when writing rubrics and grading writing tasks.",
      "The CEFR's five components of communicative competence: linguistic, sociolinguistic, discourse, strategic, and pragmatic."
    ]
  },
  {
    id: "intercultural",
    name: "Intercultural Competence & EFL",
    summary: "The Moroccan MEN curriculum emphasises that English teaching must develop not just linguistic competence but also intercultural awareness — understanding one's own culture and others'.",
    points: [
      "Byram's model of intercultural communicative competence (ICC): knowledge, skills, attitudes, and critical cultural awareness.",
      "English as a Lingua Franca (ELF): most global English communication today is between non-native speakers.",
      "Moroccan learners bring rich multilingual identities — acknowledging this strengthens motivation.",
      "Authentic materials (films, songs, news, literature) build cultural understanding.",
      "Teachers should avoid cultural stereotyping and present diversity within English-speaking cultures.",
      "The MEN curriculum includes culture units in approved textbooks: British, American, and international English contexts.",
      "Intercultural tasks: compare Moroccan celebrations with those in English-speaking countries; discuss universal values vs cultural differences."
    ]
  },
  {
    id: "scaffolding",
    name: "Scaffolding & Differentiation",
    summary: "Scaffolding provides temporary support to help learners reach a level they could not achieve independently (Vygotsky's ZPD). Differentiation adapts teaching to meet the needs of all learners in a mixed-ability class.",
    points: [
      "Types of scaffolding: modelling, graphic organisers, sentence frames, vocabulary glossaries, worked examples.",
      "Scaffolding should be gradually removed (fading) as learner competence grows.",
      "Differentiation by content: vary reading difficulty or text length.",
      "Differentiation by process: vary grouping, support level, or strategy guidance.",
      "Differentiation by product: accept essays, bullet points, or oral presentations as equally valid outcomes.",
      "In Moroccan classrooms with 35–45 students, differentiation is challenging but achievable through tiered tasks and peer support.",
      "The APC approach supports differentiation by focusing on competencies rather than content uniformity."
    ]
  },
  {
    id: "feedback-correction",
    name: "Feedback & Error Correction Strategies",
    summary: "Effective feedback is specific, timely, and actionable. Knowing when and how to correct errors is one of the most complex skills in language teaching.",
    points: [
      "Corrective feedback types: recasting (teacher reformulates correctly), elicitation, metalinguistic feedback, explicit correction, repetition with rising intonation.",
      "Delayed correction: note errors during fluency tasks; address them collectively at the end.",
      "Immediate correction: used during accuracy-focused exercises to prevent fossilisation.",
      "Peer correction: builds learner autonomy; use structured protocols to avoid embarrassment.",
      "Written feedback: use coded correction (e.g. Sp = spelling, WO = word order) to encourage self-correction.",
      "The sandwich technique: positive comment + correction + positive reinforcement.",
      "Krashen's Input Hypothesis: comprehensible input (i+1) is more beneficial than over-correction."
    ]
  },
  {
    id: "technology-elt",
    name: "Technology & ICT in ELT",
    summary: "The Moroccan MEN's GENIE programme and the 2015–2030 Strategic Vision promote the integration of ICT in all classrooms to modernise education.",
    points: [
      "GENIE (Generalized Technology Use in Education) provides computers, projectors, and internet access to Moroccan public schools.",
      "TICE (Technologies de l'Information et de la Communication pour l'Enseignement) — the French acronym used in official MEN documents.",
      "Web 2.0 tools for ELT: Padlet (collaborative boards), Quizlet (vocabulary), Kahoot (gamified quizzes), Google Classroom.",
      "Blended learning: combining face-to-face instruction with online activities.",
      "CALL (Computer-Assisted Language Learning): using software and digital tools for language practice.",
      "During COVID-19 (2020–2022), the MEN pivoted to distance learning via TelmoodMen (the national e-learning platform).",
      "Critical digital literacy: teaching students to evaluate online sources and use English in digital contexts."
    ]
  },
  {
    id: "reading-writing-skills",
    name: "Teaching Reading & Writing Skills",
    summary: "Reading and writing are the two skills assessed most heavily in the Moroccan Baccalauréat English exam. Effective teaching of these skills requires explicit strategy instruction.",
    points: [
      "Reading models: Bottom-up (decoding letters/words), Top-down (using prior knowledge/schemata), Interactive (both simultaneously).",
      "Reading sub-skills: skimming (gist), scanning (specific information), intensive reading (detailed understanding).",
      "Pre-reading tasks activate schemata; while-reading tasks guide processing; post-reading tasks extend meaning.",
      "Writing process approach: brainstorm → plan → draft → revise → edit → publish.",
      "Text types in the Moroccan Bac: descriptive, narrative, argumentative, and expository essays.",
      "The Moroccan Bac writing task (production écrite) requires ~150–200 words; students are assessed on content, organisation, language accuracy, and vocabulary.",
      "Process writing vs product writing: the MEN encourages process approaches that value drafting and revision."
    ]
  },
  {
    id: "speaking-listening-skills",
    name: "Teaching Speaking & Listening Skills",
    summary: "Though tested less formally in the Moroccan Bac, speaking and listening are central to CLT and the APC approach. Teachers should give them significant classroom time.",
    points: [
      "Speaking sub-skills: fluency, accuracy, pronunciation, interaction, and coherence.",
      "Activities for speaking: information gap, role-play, debate, presentations, storytelling, interviews.",
      "Listening sub-skills: listening for gist, specific information, inference, and attitude.",
      "Listening lesson stages: pre-listening (activate knowledge), while-listening (focused tasks), post-listening (extend and produce).",
      "The Bac oral exam (where applicable) assesses both comprehension and production.",
      "Pronunciation teaching: minimal pairs, word stress, sentence stress, connected speech, and intonation.",
      "Classroom interaction patterns: TTT (Teacher Talking Time) should be balanced with STT (Student Talking Time)."
    ]
  },
  {
    id: "vocabulary-grammar",
    name: "Vocabulary & Grammar Teaching",
    summary: "The relationship between vocabulary and grammar is central to language acquisition. Both require explicit instruction and implicit exposure.",
    points: [
      "Nation's four vocabulary strands: meaning-focused input, meaning-focused output, language-focused learning, fluency development.",
      "Grammar teaching approaches: deductive (rule → example) vs inductive (example → rule discovery).",
      "Focus on Form (FoF): drawing learners' attention to language form during communicative activities.",
      "Focus on Forms (FoFs): pre-selected grammar points taught in isolation (structural syllabus).",
      "Vocabulary depth: knowing a word means knowing its form, meaning, collocations, connotations, and register.",
      "Nation's recommended vocabulary for reading: knowing the top 3,000–5,000 most frequent words.",
      "In the Moroccan context, learners have competing input from Arabic, French, Darija, and Tamazight — vocabulary teaching should leverage cognates and address false friends."
    ]
  }
];

/* ---------- QUIZ BANK --------------------------------------- */
const QUIZ_BANK = {
  methods: {
    title: "Teaching Methods",
    icon: "🧩",
    questions: [
      { type: "mcq", q: "Which method is based on habit formation and stimulus-response-reinforcement?", options: ["CLT", "ALM", "TBLT", "Silent Way"], answer: 1, explanation: "The Audio-Lingual Method (ALM) is rooted in behaviourist psychology — learning occurs through drilling and habit formation." },
      { type: "tf", q: "In CLT, grammatical accuracy is always prioritised over communicative fluency.", answer: false, explanation: "CLT balances fluency and accuracy, but doesn't sacrifice fluency. Meaning and communication come first." },
      { type: "mcq", q: "The 4Cs framework (Content, Communication, Cognition, Culture) belongs to:", options: ["TBLT", "ALM", "CLIL", "TPR"], answer: 2, explanation: "CLIL's 4Cs are its defining principle: integrating content and language learning in all four dimensions." },
      { type: "matching", q: "Match each method to its key feature:", pairs: [
        { left: "GTM", right: "Translation of texts into L1" },
        { left: "TPR", right: "Physical response to commands" },
        { left: "Silent Way", right: "Teacher remains mostly silent" },
        { left: "TBLT", right: "Real-world tasks as unit of planning" }
      ], explanation: "Each method has a defining feature: GTM uses translation, TPR uses movement, Silent Way minimises teacher talk, TBLT organises around tasks." },
      { type: "short", q: "What is the teacher's role in Task-Based Language Teaching (TBLT)?", acceptable: ["facilitator", "task designer", "guide", "monitor"], explanation: "In TBLT, the teacher designs tasks and facilitates learners without controlling every utterance." },
      { type: "mcq", q: "The Lexical Approach (Michael Lewis) argues that language is best organised around:", options: ["Grammar rules", "Lexical chunks and collocations", "Translation pairs", "Pronunciation patterns"], answer: 1, explanation: "Lewis argued language is stored and learned as multi-word chunks (collocations, fixed expressions), not grammar + vocabulary separately." },
      { type: "tf", q: "Community Language Learning (CLL) was developed by James Asher.", answer: false, explanation: "CLL was developed by Charles Curran. James Asher created Total Physical Response (TPR)." },
      { type: "mcq", q: "In Suggestopedia, what is used to create a relaxed learning atmosphere?", options: ["Translation exercises", "Pattern drills", "Baroque music", "Colored rods"], answer: 2, explanation: "Georgi Lozanov used baroque music and a relaxed environment to lower psychological barriers to learning." },
      { type: "short", q: "Name one advantage of the Direct Method over GTM.", acceptable: ["fluency", "speaking", "natural", "communication", "pronunciation", "motivation"], explanation: "The Direct Method promotes natural language use and speaking skills, which GTM neglects by focusing on translation and writing." },
      { type: "mcq", q: "In TBLT, the 'language focus' stage occurs:", options: ["Before the task begins", "During the task cycle", "After the task is completed", "As homework only"], answer: 2, explanation: "Willis's TBLT framework has the language focus stage AFTER the task cycle — form is addressed once meaning has been established." }
    ]
  },
  theory: {
    title: "Didactics Theory",
    icon: "📘",
    questions: [
      { type: "mcq", q: "Krashen's Affective Filter Hypothesis states that:", options: ["Grammar must be taught before communication", "Anxiety and low confidence can block language acquisition", "All errors should be corrected immediately", "The L1 must be used to explain grammar"], answer: 1, explanation: "Krashen argued that anxiety raises the 'affective filter', blocking comprehensible input from reaching the language acquisition device." },
      { type: "tf", q: "Bloom's 'Create' level is the HIGHEST cognitive skill in his revised taxonomy.", answer: true, explanation: "The revised taxonomy (Anderson & Krathwohl, 2001) places Create at the top: Remember → Understand → Apply → Analyse → Evaluate → Create." },
      { type: "mcq", q: "Vygotsky's Zone of Proximal Development (ZPD) is best described as:", options: ["What a learner can do alone", "The gap between independent and assisted performance", "The teacher's comfort zone", "The level of difficulty below the student's ability"], answer: 1, explanation: "ZPD is the distance between actual developmental level (alone) and potential level (with guidance/scaffolding)." },
      { type: "matching", q: "Match each theorist with their main contribution:", pairs: [
        { left: "Vygotsky", right: "Zone of Proximal Development" },
        { left: "Krashen", right: "Input Hypothesis & Affective Filter" },
        { left: "Piaget", right: "Constructivism: assimilation & accommodation" },
        { left: "Gardner", right: "Theory of Multiple Intelligences" }
      ], explanation: "Each major theorist is associated with a foundational concept in language learning and education." },
      { type: "short", q: "What does 'scaffolding' mean in the context of language teaching?", acceptable: ["support", "temporary", "help", "guide", "assist", "framework"], explanation: "Scaffolding is the temporary support (frames, models, prompts) provided to help learners achieve what they couldn't alone, then gradually removed." },
      { type: "mcq", q: "Which type of assessment is used to measure achievement at the END of a course?", options: ["Formative", "Diagnostic", "Summative", "Peer"], answer: 2, explanation: "Summative assessment ('assessment OF learning') measures overall achievement at the end of a course or unit, e.g., a final exam." },
      { type: "tf", q: "In Bloom's taxonomy, 'Analyse' is a higher-order thinking skill than 'Apply'.", answer: true, explanation: "The hierarchy is: Remember < Understand < Apply < Analyse < Evaluate < Create. Analyse involves breaking down and drawing connections — more complex than applying." },
      { type: "mcq", q: "An interlingual error in English by a Moroccan learner might be:", options: ["Writing 'goed' instead of 'went'", "Saying 'I have 20 years' instead of 'I am 20'", "Forgetting a capital letter", "Mispronouncing 'th'"], answer: 1, explanation: "'I have 20 years' comes from Arabic/French structures ('j'ai 20 ans / عندي 20 سنة') transferred into English — a classic interlingual error." },
      { type: "short", q: "Define 'communicative competence' in one or two key terms.", acceptable: ["use language", "real situations", "interaction", "communication", "functional", "context"], explanation: "Communicative competence (Hymes, Canale & Swain) is the ability to use language appropriately in real social contexts — it includes linguistic, sociolinguistic, discourse, and strategic competence." },
      { type: "mcq", q: "Which seating arrangement BEST promotes communicative pair and group work?", options: ["Rows facing the board", "Horseshoe / U-shape", "Exam-style individual desks", "Teacher-centred circle around the teacher"], answer: 1, explanation: "A horseshoe/U-shape allows easy eye contact between students and teacher, facilitating interaction, pair and group work, and teacher proximity." }
    ]
  },
  classroom: {
    title: "Classroom Management",
    icon: "🏫",
    questions: [
      { type: "mcq", q: "Which classroom management strategy involves moving closer to a disruptive student without speaking?", options: ["Positive reinforcement", "Proximity control", "Assertive discipline", "Time-out"], answer: 1, explanation: "Proximity control is a non-verbal strategy where the teacher moves near a student to redirect behaviour without interrupting the lesson." },
      { type: "tf", q: "Clear instructions should always be given AFTER students have started the task.", answer: false, explanation: "Instructions must be given clearly BEFORE students begin. Checking understanding (e.g., 'What are you going to do first?') avoids confusion and wasted time." },
      { type: "mcq", q: "In a mixed-ability class, differentiation by PROCESS means:", options: ["Giving different texts to different students", "Accepting different final products", "Varying the support or strategy guidance during the task", "Assigning different homework"], answer: 2, explanation: "Differentiating by process means varying HOW students work — e.g., some get a glossary, others don't; some work with a partner, others independently." },
      { type: "short", q: "Name one specific technique to check that ALL students understood an instruction before a task.", acceptable: ["cold call", "show", "demonstrate", "nominate", "ask a student to repeat", "comprehension check", "ccq", "check", "model"], explanation: "Concept Checking Questions (CCQs) or asking a student to repeat/demonstrate the instruction in their own words are reliable ways to confirm understanding." },
      { type: "tf", q: "Seating students in a horseshoe arrangement is most effective for teacher-fronted lecturing.", answer: false, explanation: "A horseshoe promotes interaction and discussion. Rows are better for teacher-fronted input. Both have their place depending on the lesson stage." },
      { type: "mcq", q: "Transition management in the classroom refers to:", options: ["Moving students to a new classroom", "Smoothly shifting between lesson activities to avoid losing learning time", "The teacher changing their tone of voice", "Using music between tasks"], answer: 1, explanation: "Efficient transitions — moving between activities without chaos or lost time — are a key classroom management skill that experienced teachers develop." },
      { type: "mcq", q: "Which of these is an example of EXTRINSIC motivation?", options: ["A student who loves reading in English for pleasure", "A student who studies hard to win a prize or impress parents", "A student who finds grammar fascinating", "A student who sets their own reading goals"], answer: 1, explanation: "Extrinsic motivation is driven by external rewards (prizes, grades, approval). Intrinsic motivation comes from within (genuine interest, enjoyment)." },
      { type: "short", q: "What is the 'affective filter' and why does it matter for language teachers?", acceptable: ["anxiety", "stress", "emotion", "barrier", "block", "confidence", "motivation"], explanation: "The affective filter (Krashen) is an emotional barrier — high anxiety or low motivation can block students from absorbing input. Teachers should create a low-anxiety, supportive environment." }
    ]
  },
  lessonplanning: {
    title: "Lesson Planning",
    icon: "🗂️",
    questions: [
      { type: "mcq", q: "In the PPP model, what does the second 'P' stand for?", options: ["Pronunciation", "Practice", "Production", "Presentation"], answer: 1, explanation: "PPP stands for Presentation (teacher presents new language) → Practice (controlled exercises) → Production (freer communicative use)." },
      { type: "tf", q: "A lesson objective should describe what the TEACHER will do during the lesson.", answer: false, explanation: "Lesson objectives describe what STUDENTS will be able to do by the end — 'Students will be able to...' — not what the teacher will do." },
      { type: "mcq", q: "Which lesson stage aims to move from controlled to freer, more communicative language use?", options: ["Presentation", "Warm-up", "Production", "Feedback"], answer: 2, explanation: "The Production stage gives students the opportunity to use language freely and creatively in a communicative context." },
      { type: "matching", q: "Match the PPP stage to the correct activity type:", pairs: [
        { left: "Presentation", right: "Teacher models new structure with examples" },
        { left: "Practice", right: "Gap-fill exercise with given verbs" },
        { left: "Production", right: "Role-play or information-gap task" },
        { left: "Feedback", right: "Teacher notes errors, elicits self-correction" }
      ], explanation: "Each stage of PPP has a characteristic activity type, moving from input to controlled practice to free output." },
      { type: "short", q: "Why is it important for lesson planning to include 'anticipated problems and solutions'?", acceptable: ["prepare", "unexpected", "ready", "plan", "solve", "manage", "respond"], explanation: "Anticipating problems (e.g., difficult vocabulary, unclear instructions, time management) allows the teacher to prepare solutions in advance and maintain lesson flow." },
      { type: "mcq", q: "The Moroccan MEN fiche pédagogique requires teachers to specify:", options: ["Only the objective and the text used", "Prérequis, objectives, compétences, déroulement, and évaluation", "Only the number of students and their level", "The teacher's name and the time of the lesson only"], answer: 1, explanation: "The official MEN fiche pédagogique is comprehensive — it requires informations générales, compétences visées, objectifs, prérequis, matériel, déroulement, and évaluation at minimum." },
      { type: "tf", q: "The APC (Approche Par Compétences) approach focuses on what students KNOW rather than what they can DO.", answer: false, explanation: "APC is competency-based — it focuses on what students can DO with the language in real situations, not just declarative knowledge." },
      { type: "short", q: "In the Moroccan APC lesson framework, what stage follows 'Exploration'?", acceptable: ["exploitation", "production", "evaluation"], explanation: "The APC déroulement typically follows: Mise en situation → Anticipation → Exploration → Exploitation → Production → Évaluation." }
    ]
  },
  assessment: {
    title: "Assessment",
    icon: "📊",
    questions: [
      { type: "mcq", q: "Assessment that occurs at the END of a unit to measure overall achievement is called:", options: ["Formative assessment", "Diagnostic assessment", "Summative assessment", "Peer assessment"], answer: 2, explanation: "Summative assessment ('assessment OF learning') evaluates achievement at the end of a period of instruction — e.g. the Moroccan Bac exam." },
      { type: "tf", q: "Formative assessment is mainly used to assign final grades.", answer: false, explanation: "Formative assessment is 'assessment FOR learning' — it informs ongoing teaching decisions, not final grading." },
      { type: "mcq", q: "A test that consistently produces the same results under similar conditions has high:", options: ["Validity", "Reliability", "Practicality", "Authenticity"], answer: 1, explanation: "Reliability is consistency of results. Validity refers to whether the test measures what it intends to." },
      { type: "short", q: "Give one benefit of using a rubric for assessing student writing.", acceptable: ["transparent", "fair", "clear criteria", "consistency", "objective", "clarity", "learner knows"], explanation: "Rubrics make success criteria explicit and visible, improving fairness, transparency, and consistency — learners know what's expected." },
      { type: "mcq", q: "In the Moroccan Bac English exam, the writing task (production écrite) typically requires students to write:", options: ["A formal letter only", "A short essay of approximately 150–200 words", "A full-page academic essay", "A translation exercise"], answer: 1, explanation: "The Moroccan Bac production écrite asks for approximately 150–200 words. Students are assessed on content, organisation, vocabulary, and language accuracy." },
      { type: "tf", q: "Peer assessment can build learner autonomy and metacognition.", answer: true, explanation: "When students assess each other's work using clear criteria, they develop metacognitive awareness — understanding what quality looks like — and autonomous learning skills." },
      { type: "mcq", q: "Diagnostic assessment is best used:", options: ["At the end of the school year", "At the beginning of a unit to identify learner needs", "Only for weak students", "As a replacement for summative exams"], answer: 1, explanation: "Diagnostic assessment identifies what learners already know and their gaps BEFORE instruction, helping teachers plan appropriately." },
      { type: "short", q: "What does 'contrôle continu' mean in the Moroccan school system?", acceptable: ["continuous assessment", "ongoing", "regular", "classroom grades", "not just final exam", "formative"], explanation: "Contrôle continu is the continuous assessment component of a student's grade in Moroccan schools — it includes classroom work, homework, and periodic tests, not just the final exam." }
    ]
  },
  learning_theories: {
    title: "Learning Theories",
    icon: "🧠",
    questions: [
      { type: "mcq", q: "Who is associated with Classical Conditioning?", options: ["Skinner", "Pavlov", "Piaget", "Vygotsky"], answer: 1, explanation: "Pavlov's experiments with dogs (salivation at a bell) established classical conditioning — a cornerstone of behaviourism." },
      { type: "tf", q: "Chomsky's Cognitivism supports the existence of an innate Language Acquisition Device (LAD).", answer: true, explanation: "Chomsky argued that humans are born with an innate LAD that enables language acquisition — challenging behaviourist stimulus-response accounts." },
      { type: "mcq", q: "Vygotsky's concept of ZPD stands for:", options: ["Zone of Proximal Development", "Zone of Practical Development", "Zero Point Development", "Zonal Pedagogical Design"], answer: 0, explanation: "ZPD is the gap between what a learner can do independently and what they can achieve with guidance from a teacher or peer." },
      { type: "short", q: "Name one humanistic method (approach) in language teaching.", acceptable: ["suggestopedia", "community language learning", "silent way", "total physical response", "tpr", "cll", "sw"], explanation: "Humanistic methods (Suggestopedia, CLL, Silent Way, TPR) prioritise learner emotions, self-esteem, and the whole person." },
      { type: "mcq", q: "Piaget's concept of 'assimilation' means:", options: ["Rejecting new information that doesn't fit existing schemas", "Fitting new information into existing schemas without changing them", "Changing existing schemas to accommodate new information", "Forgetting previously learned material"], answer: 1, explanation: "Assimilation is incorporating new information into existing mental schemas. Accommodation is changing schemas when new information doesn't fit." },
      { type: "tf", q: "Social Constructivism emphasises that learning is a purely individual, solitary process.", answer: false, explanation: "Social Constructivism (Vygotsky) emphasises that learning is fundamentally social — it occurs through interaction, collaboration, and scaffolding by others." },
      { type: "mcq", q: "Krashen's Input Hypothesis states that acquisition occurs when learners are exposed to:", options: ["Grammar rules slightly above their level", "Comprehensible input slightly beyond their current level (i+1)", "Input at exactly their current level", "Only written input, not spoken"], answer: 1, explanation: "Krashen's i+1 formula: input must be comprehensible but contain language slightly beyond the learner's current competence to drive acquisition." },
      { type: "short", q: "Maslow's hierarchy places which need at the very top (highest level)?", acceptable: ["self-actualisation", "self-actualization", "self-actualise", "growth", "potential"], explanation: "Maslow placed self-actualisation at the peak — the need to realise one's full potential. Humanistic education aims to support this for all learners." }
    ]
  },
  learning_styles: {
    title: "Learning Styles & Intelligences",
    icon: "🎨",
    questions: [
      { type: "mcq", q: "A student who learns best through diagrams and charts is a:", options: ["Visual learner", "Auditory learner", "Kinaesthetic learner", "Logical learner"], answer: 0, explanation: "Visual learners prefer to see information in visual formats — diagrams, colour coding, and written instructions." },
      { type: "mcq", q: "Which intelligence involves understanding oneself and one's emotions?", options: ["Interpersonal", "Intrapersonal", "Naturalistic", "Bodily-kinaesthetic"], answer: 1, explanation: "Intrapersonal intelligence is self-awareness and understanding of one's own emotions, motivations, and goals." },
      { type: "tf", q: "Gardner originally identified seven intelligences.", answer: true, explanation: "Gardner's original 1983 list had seven. He later added naturalistic (and tentatively existential), but the original seven are: linguistic, logical, musical, spatial, bodily-kinaesthetic, interpersonal, intrapersonal." },
      { type: "short", q: "Give one example of a kinaesthetic classroom activity.", acceptable: ["role-play", "drama", "hands-on", "movement", "games", "act", "build", "make"], explanation: "Kinaesthetic learners thrive with physical activity — role-play, drama, building models, or miming vocabulary." },
      { type: "mcq", q: "Which intelligence would be MOST engaged by a debate or class discussion activity?", options: ["Visual-spatial", "Bodily-kinaesthetic", "Interpersonal", "Naturalistic"], answer: 2, explanation: "Interpersonal intelligence involves understanding and interacting with others — debates and discussions directly engage this intelligence." }
    ]
  },
  error_bloom: {
    title: "Error Analysis & Bloom's Taxonomy",
    icon: "📝",
    questions: [
      { type: "mcq", q: "An error caused by applying L1 rules to L2 is called:", options: ["Intralingual", "Interlingual", "Overgeneralisation", "Performance slip"], answer: 1, explanation: "Interlingual errors arise from first language (L1) interference — the learner transfers structures from their native language into the target language." },
      { type: "mcq", q: "Which level of Bloom's Taxonomy involves 'justifying a decision or course of action'?", options: ["Apply", "Analyse", "Evaluate", "Create"], answer: 2, explanation: "Evaluation (Bloom's level 5) requires making judgments based on criteria and evidence — justifying, defending, critiquing." },
      { type: "tf", q: "A mistake is a systematic error due to lack of knowledge.", answer: false, explanation: "Mistakes are performance slips — the learner knows the rule but makes an error due to inattention or fatigue. Errors reflect gaps in knowledge." },
      { type: "short", q: "What is 'overgeneralisation' in error analysis? Give an example.", acceptable: ["apply rule", "wrong rule", "goed", "maked", "extend rule", "overuse"], explanation: "Overgeneralisation (intralingual error) is when a learner applies a rule too broadly — e.g., saying 'he goed' by applying the regular past tense -ed rule to an irregular verb." },
      { type: "mcq", q: "A Bloom's Taxonomy question that asks students to 'Design a lesson plan for teaching reading skills' is at the level of:", options: ["Remember", "Apply", "Evaluate", "Create"], answer: 3, explanation: "Designing an original lesson plan is a 'Create' task — the highest level of Bloom's taxonomy, requiring synthesis and original production." },
      { type: "tf", q: "In the revised Bloom's Taxonomy, 'Synthesis' was renamed 'Create'.", answer: true, explanation: "Anderson & Krathwohl (2001) revised Bloom's taxonomy, changing nouns to verbs. 'Synthesis' became 'Create' and moved to the top of the hierarchy." },
      { type: "mcq", q: "The technique of reformulating a student's error correctly without explicitly pointing it out is called:", options: ["Explicit correction", "Elicitation", "Recasting", "Metalinguistic feedback"], answer: 2, explanation: "A recast is when the teacher reformulates the student's error correctly in their response — e.g., Student: 'I goed home.' Teacher: 'Oh, you went home — and then what happened?'" }
    ]
  },
  men_morocco: {
    title: "Moroccan MEN & APC",
    icon: "🇲🇦",
    questions: [
      { type: "mcq", q: "The APC (Approche Par Compétences) focuses on:", options: ["What students know", "What students can DO in real situations", "How many grammar rules students memorise", "Summative exam results only"], answer: 1, explanation: "APC is competency-based — it prioritises what students can DO with language in complex, authentic situations, not just declarative knowledge." },
      { type: "tf", q: "The Moroccan MEN's GENIE programme aims to integrate ICT into public school education.", answer: true, explanation: "GENIE (Generalized Technology Use in Education) is a national programme providing computers, internet access, and digital training to Moroccan public schools." },
      { type: "mcq", q: "In the Moroccan MEN fiche pédagogique, 'Prérequis' refers to:", options: ["The lesson objective", "Prior knowledge students need before the lesson", "The homework assignment", "The assessment rubric"], answer: 1, explanation: "Prérequis are the prerequisite knowledge and skills students must already have before this lesson — the teacher checks these at the start." },
      { type: "short", q: "Name the official Moroccan MEN e-learning platform used during COVID-19.", acceptable: ["telmoodmen", "telmood", "men", "distance", "platform"], explanation: "TelmoodMen is the Moroccan Ministry's official e-learning platform, used to deliver online lessons during the COVID-19 school closures of 2020–2022." },
      { type: "mcq", q: "The Moroccan Baccalauréat English exam assesses which skills primarily?", options: ["Speaking and listening only", "Reading, writing, and language use", "Translation and grammar drills", "Only grammar and vocabulary"], answer: 1, explanation: "The Moroccan Bac English paper tests comprehension (reading), language use (grammar/vocabulary), and production écrite (writing) — speaking is assessed separately where applicable." },
      { type: "tf", q: "CERMF certification qualifies teachers to teach at the secondary (Lycée) level in Morocco.", answer: false, explanation: "CERMF (Certificat d'Aptitude à l'Enseignement Moyen) qualifies teachers for the COLLÈGE (middle school) level. ENS/CPR qualifications are required for secondary (Lycée) teaching." },
      { type: "mcq", q: "Inspecteurs Pédagogiques Régionaux (IPR) in Morocco are responsible for:", options: ["Writing the national Bac exams", "Conducting classroom observations and evaluating teachers' pedagogical practice", "Designing the national curriculum only", "Administering student grades"], answer: 1, explanation: "IPRs observe teachers' lessons and evaluate their pedagogical practice, including lesson planning (fiche pédagogique), classroom management, and application of APC principles." },
      { type: "matching", q: "Match the Moroccan Bac English exam component to its purpose:", pairs: [
        { left: "Compréhension de l'écrit", right: "Reading comprehension questions" },
        { left: "Langue", right: "Grammar and vocabulary exercises" },
        { left: "Production écrite", right: "Writing a short essay (~150–200 words)" },
        { left: "CEFR B1+", right: "Target proficiency level at Bac" }
      ], explanation: "The Moroccan Bac English paper has three main components: comprehension, language use, and writing production, targeting CEFR B1–B2." }
    ]
  },
  cefr_intercultural: {
    title: "CEFR & Intercultural Competence",
    icon: "🌍",
    questions: [
      { type: "mcq", q: "At CEFR B1 level, a learner can:", options: ["Only greet and introduce themselves", "Deal with most situations likely to arise while travelling in an English-speaking area", "Write a complex argumentative essay with full nuance", "Understand native speakers at full speed in all contexts"], answer: 1, explanation: "B1 (Independent User — Threshold) means the learner can handle familiar topics, manage in everyday travel situations, and produce simple connected text." },
      { type: "tf", q: "English as a Lingua Franca (ELF) means using English primarily to communicate with native speakers.", answer: false, explanation: "ELF refers to English used as a common language BETWEEN non-native speakers — most global English communication today is ELF, not native-to-native." },
      { type: "mcq", q: "Byram's model of Intercultural Communicative Competence (ICC) includes:", options: ["Only linguistic knowledge", "Knowledge, skills, attitudes, and critical cultural awareness", "Grammar, vocabulary, pronunciation, and discourse", "Reading, writing, speaking, and listening"], answer: 1, explanation: "Byram's ICC model has five components: attitudes (openness, curiosity), knowledge (of other cultures), skills of interpreting, skills of discovery, and critical cultural awareness (savoir s'engager)." },
      { type: "short", q: "What does the CEFR 'can-do' descriptor format look like? Give an example.", acceptable: ["can", "able to", "communicate", "express", "understand", "interact"], explanation: "'Can-do' statements describe what a learner CAN DO at each level, e.g., 'Can understand the main points of clear standard speech on familiar matters' (B1 listening)." },
      { type: "mcq", q: "The 2015–2030 Moroccan Education Strategic Vision emphasises:", options: ["A return to traditional grammar-translation teaching", "Quality, equity, and ICT integration in education", "Removing English from the national curriculum", "Replacing CEFR with a national proficiency scale"], answer: 1, explanation: "Morocco's 2015–2030 Vision Stratégique promotes quality education, equity of access, and digital transformation — including ICT in classrooms through GENIE/TICE programmes." }
    ]
  }
};

/* ---------- SKILLS PRACTICE --------------------------------- */
const SKILLS = {
  reading: {
    title: "Reading",
    icon: "📖",
    intro: "Effective reading instruction balances global comprehension strategies (skimming, scanning) with detailed understanding. Practise both below.",
    tips: [
      "Skim first for gist: read titles, headings and the first/last sentence of paragraphs.",
      "Scan for specific information: let your eyes move quickly looking for keywords, numbers or names.",
      "Don't stop at every unknown word — infer meaning from context first.",
      "Read questions before the text to know what information to look for.",
      "In the Moroccan Bac, read the comprehension questions FIRST to guide your reading."
    ],
    text: {
      title: "The APC Approach in Moroccan EFL Classrooms",
      body: "The Approche Par Compétences (APC) has been the official pedagogical framework in Moroccan schools since its adoption by the Ministry of National Education in the early 2000s. Unlike older content-based approaches that measured success by how much information a student could recall, APC evaluates whether students can mobilise their knowledge, skills, and attitudes to solve a complex linguistic situation.\n\nIn practice, an APC-based English lesson begins with a situation-problème — a real-world context that gives the lesson purpose. For example, students might be asked to write a letter to a penfriend describing their city, or to roleplay a dialogue at a doctor's surgery. The teacher's role shifts from knowledge-transmitter to facilitator, guiding learners as they negotiate meaning and co-construct language.\n\nCritics of the APC approach in Morocco point to the reality of large class sizes — often 40 or more students — which make individualised, communicative teaching extremely challenging. Furthermore, the pressure of summative examinations can push teachers back toward test-focused, product-oriented instruction, regardless of the official pedagogical orientation.\n\nDespite these challenges, the 2015–2030 Vision Stratégique reaffirmed the APC approach and added a focus on digital integration through the GENIE programme. Today, effective Moroccan English teachers are expected to design APC-aligned lesson plans using the official fiche pédagogique template, regularly submit these for inspection, and adapt their teaching to diverse learner needs within the constraints of the national curriculum."
    },
    questions: [
      { type: "mcq", q: "(Skimming) What is the main topic of the text?", options: ["The history of the Moroccan education system", "The APC approach in Moroccan English teaching — its principles, challenges, and current status", "How to write a fiche pédagogique", "Why Moroccan students fail the Bac English exam"], answer: 1, explanation: "The text focuses specifically on the APC approach: what it is, how it works in practice, its challenges in Morocco, and its current status." },
      { type: "mcq", q: "(Scanning) What is the typical class size challenge mentioned in the text?", options: ["10–15 students", "20–25 students", "40 or more students", "Any size over 30"], answer: 2, explanation: "The text specifies '40 or more students' as the large class reality that makes communicative, individualised teaching difficult." },
      { type: "tf", q: "The text states that the 2015–2030 Vision Stratégique replaced the APC approach with a new framework.", answer: false, explanation: "The text says the Vision Stratégique REAFFIRMED the APC approach — it did not replace it." }
    ],
    sampleAnswer: "Skimming strategy: Read the title + first and last sentence of each paragraph. Main topic found: APC in Moroccan EFL. Then scan for specific keywords: 'class sizes' found in paragraph 3 — 40+ students. This two-pass approach (skim then scan) is most efficient for the Bac comprehension section."
  },
  listening: {
    title: "Listening",
    icon: "🎧",
    intro: "In the exam, listening tasks often test your ability to extract gist and specific detail from a short lecture-style extract on a didactics topic. Use the placeholder audio script below to practise note-taking even without sound.",
    tips: [
      "Predict content from the title before listening.",
      "Note key words, not full sentences, while listening.",
      "Listen once for gist, then again for specific details.",
      "Watch for signal words ('however', 'for example', 'in conclusion') that signal structure.",
      "Don't panic at unfamiliar vocabulary — listen for the overall message."
    ],
    audioPlaceholder: true,
    script: "[Audio placeholder — replace with a real recording]\n\n\"Today I want to talk about differentiation in mixed-ability classrooms — a topic that's particularly relevant for teachers in Morocco, where class sizes can be very large. Differentiation simply means adapting your teaching so that every learner — regardless of level — can access the lesson and be appropriately challenged. There are three common ways teachers differentiate: by content, by process, and by outcome.\n\nDifferentiating by content might mean giving stronger readers a longer or more complex text, while others work with a shorter, supported version. Differentiating by process might mean letting weaker students use a vocabulary glossary while more advanced students work without one. And differentiating by outcome means accepting different products — for example, a paragraph from one student and a full essay from another, both addressing the same learning objective.\n\nIn the Moroccan APC framework, differentiation is not just good practice — it's a requirement. The fiche pédagogique should anticipate the varying needs of learners, and activities should be designed with tiered levels of support. This is challenging in classes of 40 or more students, but it is achievable through pair work, peer tutoring, and carefully designed task cards.\"",
    questions: [
      { type: "mcq", q: "How many ways of differentiating are mentioned in the script?", options: ["Two", "Three", "Four", "Five"], answer: 1, explanation: "The script mentions exactly three ways: differentiating by content, by process, and by outcome." },
      { type: "short", q: "Give one example of differentiating BY OUTCOME mentioned in the script.", acceptable: ["paragraph", "essay", "different products", "accepting different products", "full essay", "short"], explanation: "The speaker gives the example of accepting a paragraph from one student and a full essay from another — both addressing the same learning objective." },
      { type: "tf", q: "According to the script, differentiation is described as optional good practice in the Moroccan APC framework.", answer: false, explanation: "The script states it is 'not just good practice — it's a requirement' in the Moroccan APC framework, and should appear in the fiche pédagogique." }
    ]
  },
  speaking: {
    title: "Speaking",
    icon: "🗣️",
    intro: "Speaking practice for this exam often takes the form of a viva-style discussion or a role-play demonstrating a teaching technique. Use these prompts to rehearse aloud or with a study partner.",
    tips: [
      "Structure your spoken answer: state your position, justify it, give a classroom example, then conclude.",
      "Use didactics terminology accurately and naturally (scaffolding, formative assessment, ZPD, APC...).",
      "Practise paraphrasing complex ideas simply — examiners value clarity over jargon.",
      "Record yourself and listen back for hesitation and filler words.",
      "In a viva, it's acceptable to say 'That's an interesting question — I'd say...' to gain thinking time."
    ],
    prompts: [
      "Role-play: You are being interviewed by a hiring panel. Explain, in 90 seconds, why you would use CLT over the Grammar Translation Method with a class of teenagers.",
      "Role-play: An IPR inspector asks you to justify your choice of APC lesson structure. How would you explain the déroulement stages?",
      "Demonstration: Model how you would give instructions for a pair-work speaking task to a class of beginners, using simple, comprehensible language.",
      "Discussion: How would you motivate a learner in a Moroccan school who says they 'will never be good at English'?",
      "Discussion: A colleague says that differentiation is impossible in a class of 45 students. How do you respond?"
    ],
    sampleAnswer: "Sample structure for the CLT vs GTM prompt: (1) State position — 'I would favour CLT with teenagers because communication builds genuine motivation'; (2) Justify — 'CLT develops real-world language use, which matters to adolescents who want to interact globally'; (3) Example — 'For instance, a role-play about booking a Moroccan hotel room online in English'; (4) Acknowledge limitation — 'I would still use brief, explicit grammar input when a recurring error needs correcting'; (5) Conclude — 'CLT, within an APC framework, gives students a reason to use English, not just study it.'"
  },
  writing: {
    title: "Writing",
    icon: "✍️",
    intro: "Written exam questions usually ask you to discuss a didactics concept and illustrate it with a classroom example. Strong answers are structured, precise, and example-driven. The Moroccan Bac production écrite requires ~150–200 words.",
    tips: [
      "Plan before writing: introduction → 2–3 body paragraphs → conclusion.",
      "Each body paragraph should make ONE clear point, supported by a classroom example.",
      "Use linking words to show logical progression (furthermore, however, consequently, in addition).",
      "Always relate theory back to practical classroom application — examiners reward this explicitly.",
      "In the Bac exam: check your word count, re-read for grammar and spelling, and ensure you've answered the question."
    ],
    structureGuide: [
      "Introduction: define the concept and state your essay's direction (what you will argue).",
      "Body 1: explain the theoretical principle clearly, using correct didactics terminology.",
      "Body 2: give a concrete, realistic classroom example or application (specific grade level, activity type).",
      "Body 3 (optional): discuss a limitation, challenge, or counter-argument.",
      "Conclusion: summarise your argument and restate the pedagogical value for Moroccan EFL contexts."
    ],
    prompts: [
      "Discuss the role of formative assessment in supporting learner progress in a Moroccan classroom.",
      "To what extent should grammar be taught explicitly in an APC-aligned communicative classroom?",
      "Explain how the Lexical Approach differs from the Grammar Translation Method and which you would prefer to use. Justify your choice.",
      "Discuss the advantages and challenges of applying the Task-Based Language Teaching approach in large Moroccan secondary school classes.",
      "Explain how a teacher can use Bloom's Taxonomy to plan varied question types for different cognitive levels."
    ],
    sampleAnswer: "Sample introduction (Prompt 1): 'Assessment is one of the most powerful tools available to language teachers, shaping not only what learners know but how they feel about learning. In the Moroccan APC context, formative assessment — or contrôle continu — is particularly valuable: it provides ongoing feedback that informs both the teacher's planning and the learner's self-regulation. This essay will argue that timely, specific formative feedback accelerates language development, before considering practical challenges of implementing it in classes of 40 or more students.'"
  }
};

/* ---------- EXAM QUESTIONS ---------------------------------- */
const EXAM_QUESTIONS = [
  {
    id: "e1",
    question: "Discuss Communicative Language Teaching (CLT) and its application in EFL classrooms in Morocco.",
    timeMinutes: 25,
    guide: {
      introduction: "Define CLT and state that this essay will explore its principles and application in the Moroccan context.",
      explanation: "Explain the core principles: communicative competence as the goal, authentic interaction, learner-centred tasks, tolerance of error.",
      example: "Describe a concrete classroom activity (e.g. an information-gap role-play) and explain how it embodies CLT principles. Link to APC.",
      conclusion: "Summarise CLT's value while acknowledging the challenges (large classes, exam pressure) in Moroccan schools."
    }
  },
  {
    id: "e2",
    question: "Design a lesson plan using the Moroccan MEN APC framework for teaching reading strategies (skimming and scanning) to B1 learners.",
    timeMinutes: 30,
    guide: {
      introduction: "State the lesson objective using a 'students will be able to...' format aligned with CEFR B1 and APC compétences.",
      explanation: "Outline the APC déroulement: Mise en situation, Anticipation, Exploration (model strategies), Exploitation (guided practice), Production (independent application), Évaluation.",
      example: "Give a concrete text type and sample task (e.g. scan an events programme for a specific time/place).",
      conclusion: "Explain how you would check the objective was met (exit ticket, comprehension check) and what your fiche pédagogique would include."
    }
  },
  {
    id: "e3",
    question: "Compare the Audio-Lingual Method and Task-Based Language Teaching in terms of the teacher's and the learner's role.",
    timeMinutes: 25,
    guide: {
      introduction: "Briefly define both methods and state that this essay compares their views of teacher/learner roles.",
      explanation: "Contrast ALM's teacher-as-model/drill-leader and learner-as-imitator with TBLT's teacher-as-task-designer/facilitator and learner-as-problem-solver.",
      example: "Give one classroom snippet from each method (a substitution drill vs. a group planning task) to illustrate the contrast.",
      conclusion: "State which contexts might favour one approach over the other (e.g. ALM for beginners/pronunciation; TBLT for intermediate/autonomous learners)."
    }
  },
  {
    id: "e4",
    question: "Explain the importance of formative assessment in supporting learner progress, with reference to the Moroccan contrôle continu system.",
    timeMinutes: 20,
    guide: {
      introduction: "Define formative assessment and distinguish it briefly from summative assessment. Mention the Moroccan contrôle continu.",
      explanation: "Explain how ongoing feedback informs both teacher planning and learner self-regulation. Reference Bloom's taxonomy: higher-order feedback targets higher cognitive levels.",
      example: "Describe a specific technique (e.g. exit tickets, peer feedback checklists, APC évaluation stage) and how it is used in practice.",
      conclusion: "Conclude on the long-term benefit: a classroom culture where assessment supports rather than only measures learning."
    }
  },
  {
    id: "e5",
    question: "Explain the concept of the 'Zone of Proximal Development' (ZPD) and its implications for teaching English in a Moroccan classroom.",
    timeMinutes: 25,
    guide: {
      introduction: "Define ZPD and contrast it with independent performance.",
      explanation: "Explain Vygotsky's theory and the role of scaffolding. Link to the APC notion of 'situation-problème' and differentiation.",
      example: "Give a concrete example of a teacher scaffolding a Moroccan learner (e.g. using sentence frames, vocabulary glossaries, or peer support in a writing task).",
      conclusion: "Summarise how ZPD guides differentiation and challenge in the APC framework."
    }
  },
  {
    id: "e6",
    question: "Discuss the role of error correction in the language classroom. Should teachers correct every error? Justify your position.",
    timeMinutes: 25,
    guide: {
      introduction: "Define error vs mistake and state the dilemma.",
      explanation: "Discuss different correction strategies (recasting, elicitation, metalinguistic feedback, explicit correction) and timing (immediate vs delayed).",
      example: "Give examples of when to correct and when to allow errors (fluency tasks vs accuracy tasks). Reference Krashen's affective filter.",
      conclusion: "Conclude with a balanced approach: correct strategically, not every error, to foster learning without demotivating students."
    }
  },
  {
    id: "e7",
    question: "How can a teacher in a Moroccan secondary school cater to different learning styles and multiple intelligences in a single lesson?",
    timeMinutes: 25,
    guide: {
      introduction: "Acknowledge learner diversity (VAK styles, Gardner's MI) and the importance of variation in a large Moroccan classroom.",
      explanation: "Briefly describe visual/auditory/kinaesthetic styles and at least three of Gardner's intelligences.",
      example: "Describe a lesson that includes visual (charts), auditory (discussion), and kinaesthetic (role-play) activities — all within an APC framework.",
      conclusion: "Emphasise that inclusive, varied planning benefits all students and aligns with APC's goal of serving diverse learners."
    }
  },
  {
    id: "e8",
    question: "Discuss the advantages and limitations of applying the Lexical Approach in a Moroccan EFL classroom.",
    timeMinutes: 25,
    guide: {
      introduction: "Define the Lexical Approach (Michael Lewis) and its central argument: language is organised around lexical chunks, not grammar.",
      explanation: "Explain the key principles: noticing, recording, and recycling collocations and fixed expressions. Contrast with GTM.",
      example: "Describe a practical classroom activity (e.g. a collocation matching exercise from an authentic text, or building a lexical notebook).",
      conclusion: "Acknowledge the limitations: few ready-made materials, grammar under-emphasis, and the challenge of implementation in the Moroccan exam-focused context."
    }
  },
  {
    id: "e9",
    question: "Explain how Bloom's Taxonomy can help a teacher design more effective questions and tasks across a unit of work.",
    timeMinutes: 20,
    guide: {
      introduction: "Introduce Bloom's Taxonomy (revised, 2001) and explain its six cognitive levels from Remember to Create.",
      explanation: "Explain how lower-order questions (recall, comprehension) and higher-order questions (analysis, evaluation, creation) serve different purposes in developing learner thinking.",
      example: "Map a reading lesson onto the taxonomy: vocabulary gap-fill (Remember), summarising (Understand), applying a strategy to a new text (Apply), comparing two texts (Analyse), evaluating an author's argument (Evaluate), writing a similar text (Create).",
      conclusion: "Summarise how using the full taxonomy ensures cognitive variety and prevents lessons from staying at the recall level."
    }
  }
];

/* ---------- SAMPLE LESSON PLAN ------------------------------ */
const SAMPLE_LESSON_PLAN = {
  objective: "By the end of the lesson, students will be able to use the present perfect to talk about life experiences (CEFR B1).",
  level: "Intermediate (B1) — 2ème Baccalauréat",
  warmup: "Show images of unusual experiences (e.g. skydiving, visiting a foreign country, meeting a celebrity). Ask: 'Have you ever done this?' to elicit the target structure naturally. Board responses.",
  presentation: "Present the form (have/has + past participle) using a timeline diagram. Highlight the link between past action and present relevance with concrete examples: 'I have visited Marrakech three times.' Drill pronunciation briefly (contractions: I've, she's).",
  practice: "Controlled practice: gap-fill sentences using the present perfect with given verbs (visit, try, see, travel). Pair-check answers. Then a substitution drill: 'Have you ever eaten sushi?' 'No, I haven't. Have you?' Correct errors using recasting.",
  production: "Freer practice: 'Find Someone Who' mingling activity — students ask classmates 'Have you ever...?' questions using prompt cards and note at least 3 interesting answers. Report findings to the class. Teacher monitors and notes errors for delayed feedback.",
  feedback: "Whole-class feedback on interesting findings; teacher writes 3 common errors on the board and elicits self-correction (Bloom's Apply). Quick exit-ticket (APC évaluation): write two original sentences using the present perfect about your own life."
};

/* ---------- DOWNLOADABLE NOTES ------------------------------ */
const NOTES_FILES = [
  { id: "n1", title: "Teaching Methods — Quick Reference", desc: "Summary of all 10 methods: GTM, ALM, CLT, TBLT, CLIL, DM, TPR, Silent Way, Suggestopedia, CLL + Lexical Approach.", type: "methods" },
  { id: "n2", title: "Didactics Theory — Key Concepts", desc: "Classroom management, assessment, lesson planning, learner differences, learning theories, Bloom's taxonomy, scaffolding.", type: "didactics" },
  { id: "n3", title: "APC & Moroccan MEN Framework", desc: "Morocco MEN curriculum, APC competency-based approach, fiche pédagogique, CEFR levels, intercultural competence, Bac exam structure.", type: "men_morocco" },
  { id: "n4", title: "Sample Lesson Plan (MEN Format)", desc: "A fully worked APC-aligned fiche pédagogique using the present perfect — B1 level, Moroccan Bac context.", type: "lessonplan" },
  { id: "n5", title: "Exam Essay Structure Guide", desc: "The Introduction–Explanation–Example–Conclusion structure with tips and 9 sample exam questions.", type: "examguide" },
  { id: "n6", title: "Bloom's Taxonomy Verb Chart", desc: "Action verbs for writing objectives and questions at each of the 6 cognitive levels — essential for lesson planning.", type: "bloom" }
];

/* ---------- MEN MOROCCO MODULE ------------------------------ */
const MEN_CONTENT = {
  curriculum: {
    title: "Official English Curriculum (Lycée)",
    body: `The Moroccan Ministry of National Education (MEN) publishes an official programme for English across all school levels. At the Lycée (secondary) level, the programme is organised around themes, competencies, and CEFR-referenced proficiency targets.

<b>Key structural features:</b>
<ul>
<li><b>Tronc Commun (1st year):</b> CEFR A2–B1 — foundational communicative skills, introductory grammar, everyday topics.</li>
<li><b>1ère Bac (2nd year):</b> CEFR B1 — wider thematic range (environment, technology, society), essay writing introduced.</li>
<li><b>2ème Bac (3rd year):</b> CEFR B1–B2 — argumentative writing, complex reading, preparation for the Baccalauréat exam.</li>
</ul>

<b>Approved textbooks:</b> Gateway (Macmillan), Ticket to English, and Insights (for some branches). These are the ONLY officially approved textbooks and must be used as the primary resource.

<b>Official evaluation norms:</b>
<ul>
<li>Contrôle continu: 25–50% of the final grade (varies by level).</li>
<li>Examens semestriels: end-of-semester tests set by the teacher or regional authority.</li>
<li>Baccalauréat: national standardised exam — reading comprehension, language use (grammar/vocabulary), and production écrite (~150–200 words).</li>
</ul>`
  },
  fiche: {
    title: "Official Fiche Pédagogique — Complete Template",
    body: `The fiche pédagogique is the official MEN lesson plan format. Every teacher is expected to complete it for each lesson and have it available during IPR inspections.

<b>Section 1 — Informations Générales</b>
<ul>
<li>Établissement: school name</li>
<li>Professeur: teacher name</li>
<li>Classe / Niveau: e.g. 2ème Bac Sciences, B1</li>
<li>Unité / Séquence: unit number and title</li>
<li>Durée: lesson duration (55 minutes standard)</li>
<li>Date: date of the lesson</li>
</ul>

<b>Section 2 — Compétences Visées</b>
The targeted competencies from the official programme (communicative, methodological, socio-cultural).

<b>Section 3 — Objectif(s)</b>
Measurable learning objectives: <i>"By the end of the lesson, students will be able to..."</i>

<b>Section 4 — Prérequis</b>
Prior knowledge learners must already have. The teacher checks these at the start.

<b>Section 5 — Matériel / Support</b>
Textbook page, handout, audio file, projector content, etc.

<b>Section 6 — Déroulement (APC Stages)</b>
<ol>
<li><b>Mise en situation:</b> context-setting; link to a real-world situation-problème.</li>
<li><b>Anticipation:</b> activate prior knowledge; prediction activities.</li>
<li><b>Exploration:</b> first encounter with the text/audio/input; gist tasks.</li>
<li><b>Exploitation:</b> detailed comprehension; language focus; guided practice.</li>
<li><b>Production:</b> freer communicative task aligned to the objective.</li>
<li><b>Évaluation:</b> formative check that the objective was met (exit ticket, CCQ, mini-task).</li>
</ol>

<b>Section 7 — Devoirs</b>
Homework assignment, aligned to the lesson objective.`
  },
  bac: {
    title: "Moroccan Baccalauréat English Exam — Full Structure",
    body: `<b>Duration:</b> 2 hours (Sciences / Techno branches: 1h30)
<b>Total marks:</b> 20 points

<b>Part I — Comprehension de l'Écrit (Reading Comprehension)</b>
<ul>
<li>An authentic or adapted text (200–400 words) on a thematic topic.</li>
<li>Questions test: gist, detail, inference, vocabulary in context, and reference.</li>
<li>Question types: True/False + justification, multiple choice, short-answer, vocabulary matching.</li>
<li>CEFR target: B1–B2 reading comprehension skills.</li>
</ul>

<b>Part II — Langue (Language Use)</b>
<ul>
<li>Grammar: fill-in-the-blank, error correction, or transformation exercises on key grammar points from the programme (tenses, conditionals, modals, passive, reported speech, relative clauses).</li>
<li>Vocabulary: definitions, synonyms, antonyms, or contextual meaning.</li>
</ul>

<b>Part III — Production Écrite (Writing)</b>
<ul>
<li>One writing task (~150–200 words).</li>
<li>Task types vary by year: a letter, an essay, a report, a description, or an argumentative paragraph.</li>
<li>Assessed on: content relevance, organisation (structure), linguistic accuracy, and vocabulary range.</li>
<li>Tip: plan with a mind map before writing; leave 5 minutes at the end to proofread.</li>
</ul>

<b>Common exam topics (recent years):</b> Technology & social media, Environment & climate change, Youth & citizenship, Cultural exchange, Education reform, Health & wellbeing.`
  }
};
