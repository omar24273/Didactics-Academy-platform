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
      "Demanding for teachers (native-like accent needed)."
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
      "Cannot explain abstract concepts.",
      "May be challenging for shy students.",
      "Overuse can become boring."
    ],
    example: "The teacher says 'Stand up', 'Turn around', 'Touch your nose' – students perform the actions."
  },
  {
    id: "silent",
    short: "SW",
    name: "Silent Way",
    era: "1970s – Caleb Gattegno",
    definition: "A method where the teacher remains silent as much as possible, encouraging learners to discover language rules through problem-solving and self-correction.",
    principles: [
      "Learning is facilitated by problem-solving and discovery.",
      "The teacher uses gestures, charts, and rods to guide.",
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
      "Not all students are motivated.",
      "Can be expensive due to materials (colored rods, charts)."
    ],
    example: "The teacher points to a colored rod and makes a gesture – students guess the word. The teacher nods or shakes head to indicate correctness."
  },
  {
    id: "suggestopedia",
    short: "S",
    name: "Suggestopedia",
    era: "1970s – Georgi Lozanov",
    definition: "A method that uses relaxation, music, and suggestion to lower psychological barriers and accelerate learning.",
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
      "Lacks focus on grammar and testing.",
      "Criticised for being unscientific."
    ],
    example: "Students sit in comfortable chairs, listen to soft baroque music, and read a dialogue with new vocabulary while the teacher reads in a calm voice."
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
    example: "Students sit in a circle, whisper a sentence in L1 to the teacher, who translates it into L2. The student repeats the translation, and the group records and discusses the sentences."
  }
];

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
      "Teachers should vary activities to cater to all styles."
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
      "Interlingual: mother tongue interference (e.g., 'I have 14 years').",
      "Intralingual: overgeneralisation of rules (e.g., 'he shoulds').",
      "Context of learning: mislearning from faulty input.",
      "Error correction types: self-correction, peer-correction, teacher-correction."
    ]
  },
  {
    id: "bloom-taxonomy",
    name: "Bloom's Taxonomy",
    summary: "Hierarchy of cognitive learning objectives: Remember, Understand, Apply, Analyse, Evaluate, Create.",
    points: [
      "Remember: recall facts (define, list, recite).",
      "Understand: explain ideas (summarise, interpret, classify).",
      "Apply: use information in new situations (solve, implement, demonstrate).",
      "Analyse: draw connections (compare, contrast, examine).",
      "Evaluate: justify a stand (criticise, defend, appraise).",
      "Create: produce new work (design, invent, construct)."
    ]
  },
  {
    id: "top-down-bottom-up",
    name: "Top-down & Bottom-up Processing",
    summary: "Two approaches to processing language: top-down (global to specific) and bottom-up (specific to global).",
    points: [
      "Top-down: using prior knowledge and context to predict meaning (e.g., predicting from a headline).",
      "Bottom-up: analysing individual elements (words, sounds) to build meaning (e.g., decoding phonetic details).",
      "Effective readers/listeners use both strategies flexibly."
    ]
  }
];

/* QUIZ BANK ------------------------------------------------- */
const QUIZ_BANK = {
  methods: {
    title: "Teaching Methods",
    icon: "🧩",
    questions: [
      { type: "mcq", q: "Which method relies heavily on stimulus–response drilling rooted in behaviourism?", options: ["Grammar Translation Method", "Audio-Lingual Method", "CLIL", "TBLT"], answer: 1, explanation: "The Audio-Lingual Method is grounded in behaviourist psychology, using repetition and drills to form habits." },
      { type: "mcq", q: "In CLT, what is the primary goal of instruction?", options: ["Grammatical accuracy above all", "Memorizing vocabulary lists", "Communicative competence", "Translating literary texts"], answer: 2, explanation: "CLT aims to develop learners' ability to communicate meaningfully, not just produce correct forms." },
      { type: "tf", q: "In Task-Based Language Teaching, grammar is normally taught first, before the task begins.", answer: false, explanation: "In TBLT, focus on form usually comes AFTER the task cycle, not before — language emerges from completing the task." },
      { type: "tf", q: "CLIL is built on a framework known as the 4Cs: Content, Communication, Cognition, Culture.", answer: true, explanation: "Coyle's 4Cs framework is the foundation of CLIL methodology." },
      { type: "matching", q: "Match each method to its most defining feature.", pairs: [
          { left: "Grammar Translation Method", right: "Bilingual translation of texts" },
          { left: "Audio-Lingual Method", right: "Pattern drills and repetition" },
          { left: "CLT", right: "Negotiation of meaning through interaction" },
          { left: "CLIL", right: "Subject content taught through the L2" }
        ], explanation: "Each method is defined by its core classroom practice: GTM=translation, ALM=drills, CLT=interaction, CLIL=content+language." },
      { type: "short", q: "Name one disadvantage of the Audio-Lingual Method.", acceptable: ["mechanical", "boring", "demotivating", "no meaning", "lack of meaning", "rote", "no transfer", "limited creativity"], explanation: "Common answers: drilling can be mechanical/boring, focuses on form over meaning, and learners may not transfer patterns to spontaneous speech." }
    ]
  },
  didactics: {
    title: "Didactics Theory",
    icon: "📘",
    questions: [
      { type: "mcq", q: "Vygotsky's Zone of Proximal Development refers to:", options: ["What a learner can do without any help", "The gap between what a learner can do alone and with guided support", "The final exam syllabus", "A grammar teaching technique"], answer: 1, explanation: "The ZPD is the space between independent and assisted performance, where scaffolding is most effective." },
      { type: "mcq", q: "Which is an example of scaffolding in a CLIL lesson?", options: ["Ignoring vocabulary difficulties", "Providing glossaries and visual organisers", "Testing only language, not content", "Speaking only in the L1"], answer: 1, explanation: "Scaffolding tools like glossaries and visual organisers support comprehension of cognitively demanding content." },
      { type: "tf", q: "Krashen's Affective Filter Hypothesis suggests that anxiety can hinder language acquisition.", answer: true, explanation: "High anxiety raises the 'affective filter', blocking input from being processed for acquisition." },
      { type: "short", q: "Give one example of intrinsic motivation in a language classroom.", acceptable: ["interest", "enjoyment", "curiosity", "personal goal", "love of language", "genuine interest"], explanation: "Intrinsic motivation comes from internal interest or enjoyment — e.g. a student who reads English novels for pleasure." }
    ]
  },
  classroom: {
    title: "Classroom Management",
    icon: "🧑‍🏫",
    questions: [
      { type: "mcq", q: "Which seating arrangement is best suited for whole-class discussion?", options: ["Rows facing the board", "Horseshoe/circle", "Isolated individual desks", "Back-to-back pairs"], answer: 1, explanation: "A horseshoe or circle arrangement allows eye contact and equal participation in discussion." },
      { type: "tf", q: "Giving instructions after distributing materials usually improves classroom management.", answer: false, explanation: "Instructions should generally be given BEFORE materials are distributed, to keep learners' attention focused." },
      { type: "mcq", q: "Proximity control refers to:", options: ["Grading students close together", "A teacher moving near a disruptive student to refocus them", "Seating students by ability", "Using a microphone in class"], answer: 1, explanation: "Proximity control is a non-verbal management technique: the teacher's physical presence redirects behaviour." },
      { type: "short", q: "Name one strategy to manage transitions between activities efficiently.", acceptable: ["timer", "clear signal", "routine", "countdown", "signal", "set time limit"], explanation: "Using a clear signal, a timer, or an established routine helps minimise lost time during transitions." }
    ]
  },
  planning: {
    title: "Lesson Planning",
    icon: "🗂️",
    questions: [
      { type: "mcq", q: "In the PPP model, what comes immediately after 'Presentation'?", options: ["Production", "Feedback", "Practice", "Warm-up"], answer: 2, explanation: "PPP = Presentation → Practice → Production. Controlled practice follows presentation before freer production." },
      { type: "tf", q: "A lesson objective should ideally be observable and measurable.", answer: true, explanation: "Well-written objectives use action verbs (identify, produce, compare) so achievement can be observed and assessed." },
      { type: "matching", q: "Match each lesson stage to its purpose.", pairs: [
          { left: "Warm-up", right: "Activates prior knowledge, lowers anxiety" },
          { left: "Presentation", right: "Introduces new language/content" },
          { left: "Practice", right: "Controlled use of the target language" },
          { left: "Production", right: "Freer, creative use of the target language" }
        ], explanation: "Each stage builds toward learner independence, from controlled input to free output." },
      { type: "short", q: "Why is a 'warm-up' stage important at the start of a lesson?", acceptable: ["engage", "activate prior knowledge", "motivate", "lower anxiety", "focus attention", "interest"], explanation: "Warm-ups engage learners, activate relevant prior knowledge, and reduce anxiety before new content is introduced." }
    ]
  },
  assessment: {
    title: "Assessment",
    icon: "📊",
    questions: [
      { type: "mcq", q: "Assessment that occurs at the END of a unit to measure overall achievement is called:", options: ["Formative assessment", "Diagnostic assessment", "Summative assessment", "Peer assessment"], answer: 2, explanation: "Summative assessment ('assessment OF learning') evaluates achievement at the end of a period of instruction." },
      { type: "tf", q: "Formative assessment is mainly used to assign final grades.", answer: false, explanation: "Formative assessment is 'assessment FOR learning' — it informs ongoing teaching, not final grading." },
      { type: "mcq", q: "A test that consistently produces the same results under similar conditions has high:", options: ["Validity", "Reliability", "Practicality", "Authenticity"], answer: 1, explanation: "Reliability refers to the consistency of test results; validity refers to whether the test measures what it intends to." },
      { type: "short", q: "Give one benefit of using a rubric for assessing student writing.", acceptable: ["transparent", "fair", "clear criteria", "consistency", "objective", "clarity"], explanation: "Rubrics make success criteria explicit, improving fairness, transparency, and consistency of grading." }
    ]
  },
  learning_theories: {
    title: "Learning Theories",
    icon: "🧠",
    questions: [
      { type: "mcq", q: "Who is associated with Classical Conditioning?", options: ["Skinner", "Pavlov", "Piaget", "Vygotsky"], answer: 1, explanation: "Pavlov's dog experiments are the classic example." },
      { type: "tf", q: "Cognitivism rejects the idea of an innate Language Acquisition Device.", answer: false, explanation: "Cognitivism (Chomsky) proposes LAD as innate." },
      { type: "mcq", q: "Vygotsky's concept of ZPD stands for:", options: ["Zone of Proximal Development", "Zone of Practical Development", "Zero Point Development", "Zonal Pedagogical Design"], answer: 0, explanation: "ZPD is the gap between what a learner can do alone and with guidance." },
      { type: "short", q: "Name one humanistic method (approach) in language teaching.", acceptable: ["suggestopedia", "community language learning", "silent way", "total physical response"], explanation: "Methods like Suggestopedia, CLL, SW, TPR are humanistic." }
    ]
  },
  learning_styles: {
    title: "Learning Styles & Intelligences",
    icon: "🎨",
    questions: [
      { type: "mcq", q: "A student who learns best through diagrams and charts is a:", options: ["Visual learner", "Auditory learner", "Kinaesthetic learner", "Logical learner"], answer: 0, explanation: "Visual learners prefer seeing information." },
      { type: "mcq", q: "Which intelligence involves understanding oneself and one's emotions?", options: ["Interpersonal", "Intrapersonal", "Naturalistic", "Bodily-kinaesthetic"], answer: 1, explanation: "Intrapersonal intelligence is self-awareness." },
      { type: "tf", q: "Gardner originally identified seven intelligences.", answer: false, explanation: "He originally identified seven, later added naturalistic and existential." },
      { type: "short", q: "Give one example of a kinaesthetic classroom activity.", acceptable: ["role-play", "drama", "hands-on", "movement", "games"], explanation: "Activities that involve physical movement or doing." }
    ]
  },
  error_bloom: {
    title: "Error Analysis & Bloom",
    icon: "📝",
    questions: [
      { type: "mcq", q: "An error caused by applying L1 rules to L2 is called:", options: ["Intralingual", "Interlingual", "Overgeneralisation", "Performance slip"], answer: 1, explanation: "Interlingual errors are due to L1 interference." },
      { type: "mcq", q: "Which level of Bloom's Taxonomy involves 'justifying a decision'?", options: ["Apply", "Analyse", "Evaluate", "Create"], answer: 2, explanation: "Evaluation requires making judgments based on criteria." },
      { type: "tf", q: "A mistake is a systematic error due to lack of knowledge.", answer: false, explanation: "Mistakes are performance slips, not lack of knowledge." },
      { type: "short", q: "Name one type of error correction that involves the whole class.", acceptable: ["class correction", "teacher correction", "peer correction"], explanation: "Class correction involves the entire class in correcting." }
    ]
  }
};

/* SKILLS PRACTICE -------------------------------------------- */
const SKILLS = {
  reading: {
    title: "Reading",
    icon: "📖",
    intro: "Effective reading instruction balances global comprehension strategies (skimming, scanning) with detailed understanding. Practise both below.",
    tips: [
      "Skim first for gist: read titles, headings and the first/last sentence of paragraphs.",
      "Scan for specific information: let your eyes move quickly looking for keywords, numbers or names.",
      "Don't stop at every unknown word — infer meaning from context first.",
      "Read questions before the text to know what information to look for."
    ],
    text: {
      title: "Why Task-Based Teaching Works",
      body: "Task-Based Language Teaching (TBLT) has become one of the most influential approaches in modern EFL classrooms. Unlike traditional grammar-focused lessons, TBLT places a real-world task at the centre of the lesson — planning a trip, solving a problem, or designing a poster. Learners are encouraged to use whatever language resources they already have to complete the task, rather than waiting until they have 'learned enough grammar' to speak. \n\nResearch suggests that this task-first approach increases motivation because learners see an immediate purpose for using English. It also encourages negotiation of meaning: when learners don't understand each other, they must rephrase, clarify or ask questions — all valuable communicative skills. \n\nCritics note that TBLT can lead to fossilised errors if teachers never return to correct recurring mistakes. For this reason, most TBLT lessons end with a 'language focus' stage, where the teacher highlights useful or problematic language that emerged during the task. This balance between fluency-building tasks and a brief focus on accuracy is what makes TBLT both motivating and pedagogically sound."
    },
    questions: [
      { type: "mcq", q: "(Skimming) What is the text mainly about?", options: ["The history of grammar teaching", "Why TBLT increases motivation and how it is structured", "How to design a poster", "Common grammar mistakes"], answer: 1, explanation: "The text's overall purpose is to explain why TBLT works and how its stages are organised." },
      { type: "mcq", q: "(Scanning) According to the text, what happens at the end of most TBLT lessons?", options: ["A grammar test", "A language focus stage", "A translation exercise", "Free time"], answer: 1, explanation: "The text states lessons typically 'end with a language focus stage' to address accuracy." },
      { type: "tf", q: "The text claims TBLT has no weaknesses.", answer: false, explanation: "The text explicitly mentions a criticism: the risk of fossilised errors." }
    ],
    sampleAnswer: "Sample skimming approach: read the title + first sentence of each paragraph → identify topic (TBLT and motivation) → then scan paragraph 3 for the keyword 'criticism' to locate the weakness mentioned."
  },
  listening: {
    title: "Listening",
    icon: "🎧",
    intro: "In the exam, listening tasks often test your ability to extract gist and specific detail from a short lecture-style extract on a didactics topic. Use the placeholder audio script below to practise note-taking even without sound.",
    tips: [
      "Predict content from the title before listening.",
      "Note key words, not full sentences, while listening.",
      "Listen once for gist, then again for specific details.",
      "Watch for signal words ('however', 'for example', 'in conclusion') that signal structure."
    ],
    audioPlaceholder: true,
    script: "[Audio placeholder — replace with a real recording] \n\n\"Today I want to talk briefly about differentiation in mixed-ability classrooms. Differentiation simply means adapting your teaching so that every learner — regardless of level — can access the lesson and be appropriately challenged. There are three common ways teachers differentiate: by content, by process, and by outcome. Differentiating content might mean giving stronger readers a longer text. Differentiating process might mean letting weaker students use a glossary while others work without one. And differentiating outcome means accepting different products — for example, a paragraph from one student and a full essay from another, both addressing the same objective.\"",
    questions: [
      { type: "mcq", q: "How many ways of differentiating are mentioned?", options: ["Two", "Three", "Four", "Five"], answer: 1, explanation: "The script mentions exactly three: content, process, and outcome." },
      { type: "short", q: "Give one example of differentiating BY OUTCOME mentioned in the script.", acceptable: ["paragraph", "essay", "different products", "accepting different products"], explanation: "The speaker gives the example of accepting a paragraph from one student and a full essay from another." }
    ]
  },
  speaking: {
    title: "Speaking",
    icon: "🗣️",
    intro: "Speaking practice for this exam often takes the form of a viva-style discussion or a role-play demonstrating a teaching technique. Use these prompts to rehearse aloud or with a study partner.",
    tips: [
      "Structure your spoken answer: state your position, justify it, give a classroom example, then conclude.",
      "Use didactics terminology accurately and naturally (scaffolding, formative assessment, ZPD...).",
      "Practise paraphrasing complex ideas simply — examiners value clarity over jargon.",
      "Record yourself and listen back for hesitation and filler words."
    ],
    prompts: [
      "Role-play: You are being interviewed by a hiring panel. Explain, in 90 seconds, why you would use CLT over the Grammar Translation Method with a class of teenagers.",
      "Role-play: A colleague says drilling is 'old-fashioned and useless.' Defend a balanced view of when drilling can still be useful.",
      "Demonstration: Model how you would give instructions for a pair-work speaking task to a class of beginners, using simple, comprehensible language.",
      "Discussion: How would you motivate a learner who says they 'will never be good at English'?"
    ],
    sampleAnswer: "Sample structure for the first prompt: (1) State position — 'I would generally favour CLT with teenagers because...'; (2) Justify — 'CLT increases motivation through meaningful interaction, which matters for this age group'; (3) Example — 'For instance, a role-play negotiating a class trip budget'; (4) Conclusion — 'However, I would still use brief, explicit grammar input when a recurring error needs correcting.'"
  },
  writing: {
    title: "Writing",
    icon: "✍️",
    intro: "Written exam questions usually ask you to discuss a didactics concept and illustrate it with a classroom example. Strong answers are structured, precise, and example-driven.",
    tips: [
      "Plan before writing: introduction → 2–3 body paragraphs → conclusion.",
      "Each body paragraph should make ONE clear point, supported by a classroom example.",
      "Use linking words to show logical progression (furthermore, however, consequently).",
      "Always relate theory back to practical classroom application — examiners reward this explicitly."
    ],
    structureGuide: ["Introduction: define the concept and state your essay's direction.", "Body 1: explain the theoretical principle.", "Body 2: give a concrete classroom example or application.", "Body 3 (optional): discuss a limitation or counter-argument.", "Conclusion: summarise and restate the pedagogical value."],
    prompts: [
      "Discuss the role of feedback in language learning, with reference to formative assessment.",
      "To what extent should grammar be taught explicitly in a communicative classroom? Justify your view with examples.",
      "Explain how scaffolding can support learners in the Zone of Proximal Development.",
      "Discuss the advantages and limitations of using authentic materials in the EFL classroom."
    ],
    sampleAnswer: "Sample introduction (Prompt 1): 'Feedback is one of the most powerful tools available to language teachers, shaping not only what learners know but how they feel about learning. This essay will argue that timely, formative feedback — delivered as part of an ongoing assessment cycle rather than a final judgement — is essential for sustained language development, before considering its practical limitations in large classes.'"
  }
};

/* EXAM PRACTICE MODE ------------------------------------------ */
const EXAM_QUESTIONS = [
  {
    id: "e1",
    question: "Discuss Communicative Language Teaching (CLT) and its application in EFL classrooms.",
    timeMinutes: 25,
    guide: {
      introduction: "Define CLT and state that this essay will explore its principles and classroom application.",
      explanation: "Explain the core principles: communicative competence as the goal, authentic interaction, learner-centred tasks, tolerance of error.",
      example: "Describe a concrete classroom activity (e.g. an information-gap role-play) and explain how it embodies CLT principles.",
      conclusion: "Summarise CLT's value while acknowledging the need to balance fluency with accuracy."
    }
  },
  {
    id: "e2",
    question: "Design a lesson plan for teaching reading skimming and scanning strategies to intermediate learners.",
    timeMinutes: 30,
    guide: {
      introduction: "State the lesson objective (e.g. learners will be able to apply skimming and scanning strategies to locate information efficiently).",
      explanation: "Outline the stages: warm-up (predicting from title), presentation (modelling the two strategies), practice (timed skimming/scanning tasks), production (applying strategies to a new text).",
      example: "Give a concrete text type and a sample task (e.g. scan a timetable for a specific train time).",
      conclusion: "Explain how you would check the objective was met (e.g. via a short comprehension check)."
    }
  },
  {
    id: "e3",
    question: "Compare the Audio-Lingual Method and Task-Based Language Teaching in terms of the teacher's and the learner's role.",
    timeMinutes: 25,
    guide: {
      introduction: "Briefly define both methods and state that this essay compares their views of teacher/learner roles.",
      explanation: "Contrast ALM's teacher-as-model/drill-leader and learner-as-imitator with TBLT's teacher-as-facilitator and learner-as-problem-solver.",
      example: "Give one classroom snippet from each method (a substitution drill vs. a group task) to illustrate the contrast.",
      conclusion: "State which contexts might favour one approach over the other (e.g. beginners vs. more autonomous learners)."
    }
  },
  {
    id: "e4",
    question: "Explain the importance of formative assessment in supporting learner progress.",
    timeMinutes: 20,
    guide: {
      introduction: "Define formative assessment and distinguish it briefly from summative assessment.",
      explanation: "Explain how ongoing feedback informs both teacher planning and learner self-regulation.",
      example: "Describe a specific technique (e.g. exit tickets, peer feedback checklists) and how it is used in practice.",
      conclusion: "Conclude on the long-term benefit: a classroom culture where assessment supports rather than only measures learning."
    }
  },
  {
    id: "e5",
    question: "Explain the concept of 'Zone of Proximal Development' and its implications for classroom teaching.",
    timeMinutes: 25,
    guide: {
      introduction: "Define ZPD and contrast it with independent performance.",
      explanation: "Explain Vygotsky's theory and the role of scaffolding.",
      example: "Give a concrete example of a teacher scaffolding a learner.",
      conclusion: "Summarise how ZPD guides differentiation and challenge."
    }
  },
  {
    id: "e6",
    question: "Discuss the role of error correction in the language classroom. Should teachers correct every error? Why or why not?",
    timeMinutes: 25,
    guide: {
      introduction: "Define error vs mistake and state the dilemma.",
      explanation: "Discuss different correction strategies (self, peer, teacher) and timing (immediate vs delayed).",
      example: "Give examples of when to correct and when to let errors slide (fluency vs accuracy).",
      conclusion: "Conclude with a balanced approach that fosters learning without demotivation."
    }
  },
  {
    id: "e7",
    question: "How can teachers cater to different learning styles and multiple intelligences in a single lesson?",
    timeMinutes: 25,
    guide: {
      introduction: "Acknowledge learner diversity and the importance of variation.",
      explanation: "Briefly describe learning styles and Gardner's intelligences.",
      example: "Describe a lesson that includes visual, auditory, and kinaesthetic activities.",
      conclusion: "Emphasise that inclusive planning benefits all students."
    }
  }
];

/* SAMPLE LESSON PLAN ------------------------------------------- */
const SAMPLE_LESSON_PLAN = {
  objective: "By the end of the lesson, students will be able to use the present perfect to talk about life experiences.",
  level: "Intermediate (B1)",
  warmup: "Show images of unusual experiences (e.g. skydiving, meeting a celebrity). Ask: 'Have you ever done this?' to elicit the target structure naturally.",
  presentation: "Present the form (have/has + past participle) using a timeline diagram. Highlight the link between past action and present relevance with concrete examples.",
  practice: "Controlled practice: gap-fill sentences using the present perfect with given verbs. Pair-check answers.",
  production: "Freer practice: 'Find Someone Who' mingling activity — students ask classmates 'Have you ever...?' questions and report findings to the class.",
  feedback: "Whole-class feedback on interesting findings; teacher notes common errors on the board and elicits self-correction. Quick exit-ticket: write one new sentence using the present perfect."
};

/* DOWNLOADABLE NOTES ------------------------------------------- */
const NOTES_FILES = [
  { id: "n1", title: "Teaching Methods — Quick Reference", desc: "One-page summary of GTM, ALM, CLT, TBLT and CLIL.", type: "methods" },
  { id: "n2", title: "Didactics Theory — Key Concepts", desc: "Classroom management, assessment, lesson planning and learner differences.", type: "didactics" },
  { id: "n3", title: "Sample Lesson Plan", desc: "A fully worked example lesson plan using the platform's template.", type: "lessonplan" },
  { id: "n4", title: "Exam Essay Structure Guide", desc: "The Introduction–Explanation–Example–Conclusion structure with tips.", type: "examguide" }
];