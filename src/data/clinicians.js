// import YaraPFP from "public/images/yara-profile-photo.png";
// import AnvitaPFP from "public/images/anvita-profile-photo.png";
// import AnnabelPFP from "public/images/annabel-profile-photo.png";
// import ImranPFP from "public/images/imran-profile-photo.png";
// import PriyankaPFP from "public/images/priyanka-profile-photo.jpeg";
// import GhaniaPFP from "public/images/ghania-profile-photo.jpeg"
// import GrahamPFP from "public/images/graham-profile-photo.jpeg"
// import SadiaPFP from "public/images/sadia-profile-photo.png"
export const clinicians = [

  {
    id: "1",
    url: "imran-mushtaq",
    name: "Dr.  Imran Mushtaq",
    title: "Medical Director & Consultant Psychiatrist",
    specializations: [
        "Child & Adolescent Psychiatry",
        "Attention-Deficit/Hyperactivity Disorder (ADHD)",
        "Autism Spectrum Disorder (ASD)",
        "Learning Difficulties & Learning Disabilities",
        "Behavioural & Oppositional Disorders",
        "Depression",
        "Anxiety Disorders",
        "Psychiatric Assessment & Diagnosis",
        "Systemic Therapy",
        "Cognitive Behavioural Therapy (CBT)",
        "Adult Psychiatry (Limited Referrals)"
    ],
    experience: "+20 years",
    education: [
        "Medical Training in the United Kingdom",
        "Specialty Training in Psychiatry",
        "Background Training in Paediatrics"
    ],
    certifications: [
        "Consultant Psychiatrist",
        "Licensed by Dubai Health Authority (UAE)",
        "Licensed by General Medical Council (UK)",
        "Licensed by Irish Medical Council (Ireland)",
        "Fellow of the Royal College of Psychiatrists (UK)",
        "Fellow of the Royal College of Paediatrics and Child Health (UK)",
        "Fellow of the European Board of Psychiatry (FEBP)"
    ],
    bio: `Dr Imran Mushtaq is a UK-trained Consultant Psychiatrist with over 20 years of expertise in the psychiatry field. He is licensed by the Dubai Health Authority (UAE), General Medical Council (UK) and Irish Medical Council (Ireland). 
    
    He specialises in child and adolescent mental health and is known for his calm, gentle, and composed approach to patient care. With extensive experience in assessing, diagnosing, and treating mental health conditions, he is particularly skilled in working with children and young people facing various psychological challenges and disorders. Dr. Mushtaq's primary focus is on children and adolescents, though he also accepts referrals for adults. 
    
    He started out his career as a paediatrician and then he gained experience in the area of psychiatry. He has worked as a consultant psychiatrist in the UK, Australia and Ireland. He has been awarded Fellowships by the Royal College of Psychiatrists (UK), the Royal College of Paediatrics and Child Health (UK), as well as the European Board of Psychiatry (FEBP). He has been involved in teaching, training and supervision of medical students, junior doctors, nurses and higher trainees in child and adolescent psychiatry in the UK, Ireland and Australia. He has an honorary position with a medical university in Africa. 
    
    Although Dr Mushtaq can treat any psychiatry-related disorders, he specialises in ADHD, ASD, Learning Difficulties/Learning Disabilities, Behavioural Problems/Oppositional Behaviours, Depression, and Anxiety Disorders. He is particularly interested in Systemic and Cognitive Behavioural Therapy (CBT). 
    
    His therapies include a variety of holistic approaches in supporting a person to overcome their difficulties and problems. He can support patients who speak English, Urdu, Punjabi and Hindi. Dr Mushtaq is unable to provide medico-legal opinions or reports or provide care for clients with substance use disorders.
    
    Dr Mushtaq has published more than 40 articles in peer-reviewed scientific journals. He has presented at national and international conferences in the UK, Europe, Asia and Australia. He reviews journals' articles related to child and adolescent mental health. He is a children's writer and writes in the Urdu language. He has published many award-winning children's books and is also the chief editor of an Urdu Children's monthly magazine.`,
    // email: "j.thompson@britishpremier.com",
    // phone: "(416) 555-0126",
    image: "/images/imran-profile-photo.png",
    // availability: "Monday - Friday, 9:00 AM - 3:00 PM"
  },
 {
    id: "2",
    url: "farah-qadir",
    name: "Dr. Farah Qadir",
    title: "Immersive Therapy Practitioner",
    specializations: [
        "Mental Health Enhancement & Optimal Well-Being",
        "Cognitive-Affective Restructuring",
        "Somatic Integration",
        "Relational Pattern Analysis",
        "Trauma Resolution",
        "Executive & Peak-Performance Coaching",
        "Neuro-Linguistic Programming (NLP)",
        "Cross-Cultural & Multi-Ethnic Psychotherapy",
        "Bespoke Immersive Interventions (ELIXIR Program)"
    ],
    experience: "+20 years",
    education: [
        "Ph.D., Psychiatric Epidemiology — Institute of Psychiatry, King's College London, UK (2002–2005)",
        "M.A., Counselling Psychology — Boston College, Chestnut Hill, MA (1992–1994)"
    ],
    certifications: [
        "Chartered Psychologist, accredited by the British Psychological Society, UK (2016)",
        "Licensed Practitioner for Neuro-Linguistic Programming (NLP) — NLP for Life by Richard Bandler, co-creator of NLP, London, UK (2015)",
        "British Psychological Society Certified Occupational Test User — Ability Tests (Level A) and Personality Tests (Level B), Pearson: Talent Lens, London, UK (2015)"
    ],
    // New subheading: the population ELIXIR/Dr. Qadir's bespoke work is designed for
    idealFor: [
        "Creatives",
        "Leaders",
        "Visionaries",
        "Legacy founders"
    ],
    bio: `Dr Farah Qadir is a clinician dedicated to mental health enhancement and optimal well-being. She has over two decades of experience spanning four continents, having worked across many multicultural hubs and metropolises, with her work covering diverse cultural, religious, and ethnic experiential landscapes.

    She serves individuals who are deeply invested in their own evolution and who seek meaning, fulfillment, and enduring happiness across all dimensions of life. Her approach is grounded in evidence-based modalities and neurobiological principles, centering on cognitive-affective restructuring, somatic integration, and relational pattern analysis to facilitate measurable change.

    Dr Qadir holds a Ph.D. in Psychiatric Epidemiology from the Institute of Psychiatry, King's College London, and an M.A. in Counselling Psychology from Boston College. She is a Chartered Psychologist accredited by the British Psychological Society and a Licensed Practitioner of Neuro-Linguistic Programming, trained directly under NLP co-creator Richard Bandler.

    Since 2016, Dr Qadir has offered bespoke, immersive programs that are not a quick fix, but a catalytic accelerator for those who believe in growth and self-actualization — for those willing to work on self-enhancement but who have hit a ceiling. Her signature program, ELIXIR, provides the structure, expertise, and intensity needed to break through that ceiling, transforming not just symptoms but the very architecture of the self, helping individuals work with the brain's natural mechanisms rather than against them.

    This approach is designed specifically for those who operate at the highest echelons of professional and public life — leaders, visionaries, and families — who require profound, accelerated, and lasting behavioral transformation.`,
    // Generic reusable field — any clinician can use this for extra structured
    // content beyond bio/specializations/education/certifications. Each entry is
    // rendered as its own subheading, with either a paragraph (`content`) or a
    // bullet list (`items`).
    extraSections: [
        {
            heading: "ELIXIR",
            content: "ELIXIR is not a linear program. It is a dynamic, adaptive system that fuses the depth of psychotherapy with the forward-momentum of executive coaching, delivered in real time as the client's life unfolds. Every session is a bespoke intervention crafted from the client's neuroplasticity and their emotional, cognitive, and relational ecosystem."
        },
        {
            heading: "What ELIXIR stands for",
            items: [
                { label: "Elite", text: "The client is treated as an elite athlete, continually refining their form in pursuit of mastery rather than an external goal." },
                { label: "Life", text: "A holistic concept for high achievers, spanning personal, professional, and relational dimensions." },
                { label: "Immersive", text: "Protocols that are intensive, real-time, and high-impact." },
                { label: "eXperiential", text: "Built on subjective experience that is felt, not only recorded — experienced by both self and brain." },
                { label: "Intervention", text: "Spans the full spectrum from trauma resolution to peak-performance strategy, with Dr Qadir selecting the modality in real time based on the client's state." },
                { label: "Real-time", text: "Support responds to situations as they arise — during a conflict, a panic attack, a negotiation, a creative block — via secure, encrypted audio, video, or text channels." }
            ]
        },
        {
            heading: "Outcomes from ELIXIR",
            items: [
                { text: "Achievement of previously blocked goals, such as public speaking, conflict resolution, or creative breakthroughs, with greater ease and consistency" },
                { text: "Improved relational depth and communication" },
                { text: "Sustained neuroplastic gains" },
                { text: "Reduction in anxiety and depressive symptoms within four to six weeks" },
                { text: "Enhanced emotional regulation in high-stakes professional and personal contexts" }
            ]
        }
    ],
    faqs: [
        {
            question: "What services are included in ELIXIR?",
            answer: "ELIXIR offers five core services: a neuro-qualia baseline and plasticity protocol that establishes a personalized blueprint for neural change; a real-time precision intervention during high-stakes moments such as negotiations or acute stress; a multi-day relational neuro-integration intensive for a client and partner; a private executive neuroplasticity retreat; and an ongoing continuum neuroplasticity membership combining deep-dive sessions, real-time micro-interventions, and progress tracking. All services are reviewed and delivered personally by Dr Qadir."
        },
        {
            question: "Who is ELIXIR designed for?",
            answer: "ELIXIR is designed for individuals who have both the resources and the priority to invest in profound psychological growth — accomplished leaders, visionary founders, and other high-responsibility individuals who require a highly discreet, dedicated clinical partnership and are prepared to commit significant time and focus to the work."
        },
        {
            question: "How does ELIXIR fit into a demanding schedule?",
            answer: "ELIXIR is built to work within an existing schedule rather than compete with it. Because interventions happen in real time, clients don't need to set aside separate blocks of clinical time — support is delivered through brief, high-impact micro-interventions during the day, or through intensives timed to a client's natural rhythms."
        },
        {
            question: "How is client privacy protected?",
            answer: "Privacy is treated as a core part of the programme's design, not an add-on policy. All communication runs through fully encrypted, proprietary channels with no third-party access, and client information is handled with the same level of security as sensitive intellectual property."
        },
        {
            question: "How are results measured?",
            answer: "Progress is tracked against the neural blueprint established at the outset, looking at measurable shifts such as improved cognitive flexibility, faster and clearer decision-making, fewer reactive episodes in high-stakes moments, and deeper relational coherence — so clients can observe change rather than take it on faith."
        }
    ],
    // email: "",
    // phone: "",
    image: "/images/farah-profile-photo.jpeg",
    // availability: ""
  },
    {
    id: "3",
    url: "graham-williams",
    name: "Dr. Graham Williams",
    title: "Clinical Psychologist",
    specializations: [
    "Child & Adolescent Psychology",
    "Adult Mental Health",
    "Trauma",
    "Post-Traumatic Stress Disorder (PTSD)",
    "Anxiety Disorders",
    "Depression / Low Mood",
    "Behavioural Issues",
    "Neurodevelopmental Disorders (ADHD)",
    "Traumatic Brain Injury (TBI)",
    "Paediatric Psychology",
    "Maternity & Perinatal Psychology",
    "Forensic Psychology",
    "Psychological Assessments",
    "Expert Witness Assessments (Family Courts)",
    "Clinical Supervision & Training",
    "Cognitive Behavioural Therapy (CBT)",
    "Eye Movement Desensitisation and Reprocessing (EMDR)",
    "Dialectical Behaviour Therapy (DBT)"
    ],
    experience: "+20 years",
    education: [
    "Doctorate in Clinical Psychology (DClinPsy) - University of Hertfordshire",
    "Bachelor's Degree in Psychology with Clinical Psychology (Hons) - University of Kent, Canterbury"
    ],
    certifications: [
    "Dubai Health Authority (DHA) Licensed Clinical Psychologist",
    "Health and Care Professions Council (HCPC), UK Licensed Clinical Psychologist",
    "Trained in Cognitive Behavioural Therapy (CBT)",
    "Trained in Eye Movement Desensitisation and Reprocessing (EMDR)",
    "Trained in Dialectical Behaviour Therapy (DBT)",
    "Clinical Supervision Training - Oxford Doctorate in Clinical Psychology Programme"
    ],
    bio: `Born, raised and educated in Great Britain, Dr Graham Williams is a British Clinical Psychologist with over 20 years' experience in the field of mental health working with children, young people, adults and families. He brings to Dubai more than two decades of invaluable experience in mental health and specialist services in the British National Health Service and the highest standards of UK-trained clinical practice.  His clinical skills are regarded by peers, colleagues and patients as of a very high calibre in the assessment, treatment and management of the full spectrum of mental health problems and neurodevelopmental difficulties.  
    
    Dr. Graham earned his Doctorate in Clinical Psychology (DClinPsy) from the University of Hertfordshire and a bachelor's degree (Psychology with Clinical Psychology, Hons) from the University of Kent, Canterbury. He holds dual licensing for Dubai (Dubai Health Authority) and Great Britain (Health and Care Professions Council), reflecting his long-standing dedication to professional excellence and ethical care. Known for his grounded, methodical and thoughtful approach to therapy, he brings together scientific research, empathy, and practical understanding to help people find clarity and emotional balance in their lives. His doctoral research explored traumatic brain injury in children and young people, an experience that continues to guide his work with resilience and recovery. 

    Before moving to Dubai, he spent many years working in the English NHS, where he supported children, young people, and families facing challenges such as anxiety, low mood, trauma, behavioural concerns, and developmental conditions like ADHD. His time in child and adolescent services saw him become the service lead for trauma. Over time, his expertise grew to include paediatric and specialist adult services, including maternity-related psychology.  
    
    A highly experienced and versatile clinician, Dr. Graham's therapeutic style blends structure, direction, and warmth. Trained in multiple evidence-based therapies (Cognitive Behaviour Therapy (CBT), Eye Movement Desensitisation and Reprocessing (EMDR), and Dialectical Behaviour Therapy (DBT)), Dr. Graham often works eclectically - a skill developed through experience - integrating different therapies that he adapts to each client's unique needs. His sessions are collaborative and reflective, helping people understand the contexts and patterns behind their struggles and develop tools and skills for lasting change. Whether working with children, adolescents, or adults, he focuses on building trust and creating an environment where clients can safely explore, understand, and heal. 

    Trained in clinical supervision by the Oxford Doctorate in Clinical Psychology programme, Dr Graham is an active clinical supervisor and provides training and supervision to other psychologists - locally and internationally. His experience also extends to forensic and prison settings in the UK, and he has served as an Independent Expert Witness for Family Courts, providing psychological assessments for both children and adults. 

    Outside of traditional clinical work, Dr. Graham took a career break to volunteer with an NGO supporting street children in Quito, Ecuador, a time that deepened his sense of compassion and cultural understanding. These experiences, combined with his calm and insightful personality, shape his ability to connect with people from all walks of life. 

    Today, at British Premier Psychiatry and Psychology Centre in Dubai, Dr. Graham continues his dedication to helping others navigate life's challenges with integrity, sensitivity, and professionalism. His clients often describe him as someone who truly listens, who helps them make sense of their experiences and find a way forward, one step at a time. `,
    // email:"test@gmail.com",
    // phone: "(416) 555-0123",
    image: "/images/graham-profile-photo.jpeg",
    // availability: "Monday - Friday, 9:00 AM - 5:00 PM"
  },
    {
    id: "4",
    url: "sadia-mohammed",
    name: "Dr. Sadia Mohammed",
    title: "Consultant Child & Adolescent Psychiatrist",
    specializations: [
      "Child & Adolescent Psychiatry",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Autism Spectrum Disorder (ASD)",
      "Learning Difficulties / Learning Disabilities",
      "Low Mood / Depression / Mood Disorders",
      "Anxiety Disorders",
      "Obsessive-Compulsive Disorder",
      "Eating Disorders",
      "Psychiatric Assessment, Diagnosis & Treatment",
    ],
    experience: "+20 years",
    education: [
      "MBChB (UK)",
      "MRCPsych (UK)",
      "CCT in Child & Adolescent Psychiatry (UK)"
    ],
    certifications: [
      "Consultant Child & Adolescent Psychiatrist",
      "Licensed by Dubai Health Authority (UAE)",
      "Licensed by General Medical Council (UK)",
      "Certified Professional Life Coach (ICF Accredited)"
    ],
    bio: `Dr Sadia Mohammed is a British born and trained Consultant Child and Adolescent Psychiatrist with over 20 years of experience in mental health. She is licensed by the Dubai Health Authority (DHA), UAE and General Medical Council (GMC), UK.
    
    Dr Sadia trained and worked at Consultant Psychiatrist level in the largest NHS health board in the UK.  She is highly experienced in the assessment, diagnosis and treatment of the diverse range of mental health and neurodevelopmental conditions affecting children and young people.  Dr Sadia adopts a bio-psycho-social-spiritual model in her clinical work, involving families in the decision-making process, and working collaboratively with allied professionals to ensure a comprehensive treatment plan for each individual case.  Dr Sadia draws on a variety of therapeutic modalities (psychological, psychosocial, educational and medical) in line with best clinical practice, devising holistic treatment plans accordingly. 
    
    Dr Sadia has been involved in teaching, training and supervision of medical students, junior doctors, trainee psychiatrists and other healthcare professionals in the UK.  She has presented at national and international conferences, as well as educational programmes abroad.  Dr Sadia has been an examiner for medical school undergraduate examinations in the UK.  Recently, Dr Sadia co-authored a scientific paper on sexual side effects of antidepressant medication.

    Dr Sadia has held leadership positions on the executive board of medical and psychiatric organisations.  She has been engaged in mental health activism, addressing stigma and raising the profile of mental health and providing public education through community engagement initiatives and performances on radio, TV and social media.

    Dr Sadia is fluent in English, Urdu, Punjabi and Hindi.  She is an amateur modern Urdu poet, exemplifying its role as a form of self-therapy and in developing emotional resilience.  Her work has been presented at art exhibitions and poetic events.

    Dr Sadia has a passionate interest in personal development and is published author of the book “Secrets To Infinite Success”.  Dr Sadia is also a Certified Life Coach, committed to empowering individuals to achieve personal growth and fulfilment.  

    At the time of relocating to Dubai, Dr Sadia was awarded the ZYN Inspirational Professional Award (2024) and was a finalist in the Professional of the Year category at the Scottish Muslim Awards (2024), in recognition of her impact and achievements. `,
    // email: "e.rodriguez@britishpremier.com",
    // phone: "(416) 555-0125",
    image: "/images/sadia-profile-photo.png",
    // availability: "Monday - Thursday, 10:00 AM - 6:00 PM"
  },
    {
    id: "5",
    url: "kiran-nijabat",
    name: "Dr. Kiran Nijabat",
    title: "Consultant Child & Adolescent Psychiatrist",
    specializations: [
        "Child & Adolescent Psychiatry",
        "Attention Deficit Hyperactivity Disorder (ADHD)",
        "Autism Spectrum Disorder (ASD)",
        "Neurodevelopmental Conditions",
        "Child & Adolescent Mental Health",
        "Psychiatric Assessment, Diagnosis & Formulation",
        "Treatment & Medication Management",
        "Parent Psychoeducation",
        "ADHD Coaching",
        "School-Based Mental Health",
        "Mental Health Education & Wellbeing Programmes",
    ],
    experience: "+15 years",
    education: [
        "Higher Specialist Training at Tavistock and Portman NHS Foundation Trust (UK)",
    ],
    certifications: [
        "Senior Mental Health Lead Trainer",
        "Mental Health Innovation Awards Judge for the Independent Schools Association (ISA)",
        "Highly Commended by ACAMHS for Teaching in CAMHS",
        "Developer of 10 CPD-accredited Mental Health Courses",
    ],
    bio: `Dr. Kiran Nijabat is a UK Consultant Child & Adolescent Psychiatrist, Founder and Clinical Director of Family Wellness Practice, with over 15 years of experience in child and adolescent mental health, neurodevelopmental conditions and school-based mental health.

    Having recently relocated from the UK to the United Arab Emirates, Dr. Kiran continues to lead her established UK clinic while maintaining clinical practice across London, Abu Dhabi, Dubai and Bahrain. Her international practice enables her to work with children, young people and families from diverse cultural and educational backgrounds.

    Dr. Kiran specialises in ADHD, autism and wider child and adolescent mental health, offering comprehensive assessments, diagnosis and formulation alongside ongoing treatment and medication management. She uses a systemic approach, drawing on her higher specialist training at the Tavistock and Portman NHS Foundation Trust in the UK, considering the young person within the context of their family, relationships, school and wider environment.

    Her work extends beyond assessment to provide families with practical, ongoing support, including parent psychoeducation, ADHD coaching and medication management. She also develops and delivers mental-health education and wellbeing programmes for schools, professionals and families, alongside bespoke wellbeing retreats and workshops.

    Through Family Wellness Practice, Dr. Kiran has supported over 10,000 staff, parents and students across the UK and internationally. She is a Senior Mental Health Lead Trainer and Mental Health Innovation Awards Judge for the Independent Schools Association (ISA), has been Highly Commended by ACAMHS for teaching in CAMHS, and has developed 10 CPD-accredited mental-health courses.

    She is also a regular keynote speaker at national and international mental-health conferences and is passionate about bringing together clinical expertise, education, family support and practical strategies to help children and young people thrive.`,
    // email: "",
    // phone: "",
    image: "/images/kiran-profile-photo.png",
    // availability: ""
    },
    {
    id: "6",
    url: "ghania-kabbara",
    name: "Ms. Ghania Kabbara",
    title: "Clinical Psychologist",
    specializations: [
        "Depression",
        "Bipolar Disorders",
        "Anxiety Disorders",
        "Obsessive-Compulsive Disorder (OCD)",
        "Post-Traumatic Stress Disorder (PTSD)",
        "Trauma-Related Disorders",
        "Personality Disorders",
        "Adjustment Difficulties",
        "Bereavement",
        "Relationship Challenges",
        "Couples Therapy",
        "Family Therapy",
        "Child & Adolescent Psychology",
        "Adult Mental Health",
        "Cross-Cultural Therapy",
        "Cognitive Behavioural Therapy (CBT)",
        "Eye Movement Desensitization and Reprocessing (EMDR)"
    ],
    experience: "+15 years",
    education: [
        "Bachelor's Degree in Psychology - Lebanese American University",
        "Master's Degree in Clinical Psychology - Haigazian University, Lebanon"
    ],
    certifications: [
        "DHA-Licensed Clinical Psychologist",
        "Certified EMDR Therapist",
        "Member of Lebanese Psychological Association",
        "Member of EMDR/EMDRIA Associations (Lebanon & USA)"
    ],
    bio: `"Ms. Ghania Kabbara is a French-Lebanese DHA-licensed clinical psychologist with over 15 years of professional experience. Having lived in France and in the Middle East, she brings a deep cross-cultural understanding to her clinical work, supporting children, adolescents, adults, couples, and families from diverse backgrounds. She is committed to offering a safe, empathetic, and confidential therapeutic space where clients can explore their past traumas, navigate their current challenges, and improve their emotional wellbeing.
    
    Ms. Ghania completed her Bachelor's degree in Psychology at the Lebanese American University and earned her Master's in Clinical Psychology from Haigazian University in Lebanon. She is a Certified EMDR Therapist and an active member of both the Lebanese Psychological Association and the EMDR/EMDRIA Associations in Lebanon and the USA. In her practice, she primarily integrates CBT and EMDR therapy, tailoring her approach to each client's needs and preferred language—English, French, or Arabic. 
    
    Ms. Ghania works with a wide range of psychological conditions, including depression and bipolar disorders, anxiety disorders, OCD, PTSD and trauma-related concerns, personality disorders, adjustment difficulties, bereavement, and relationship challenges involving couples and families. Grounded in empathy and open-minded collaboration, her therapeutic philosophy centers on helping individuals understand their experiences, build resilience, and move forward with clarity and strength. She resonates strongly with the guiding words: “Do what you can, with what you have, where you are.” — Theodore Roosevelt."`,
    // email: "e.rodriguez@britishpremier.com",
    // phone: "(416) 555-0125",
    image: "/images/ghania-profile-photo.jpeg",
    // availability: "Monday - Thursday, 10:00 AM - 6:00 PM"
  },
    {
    id: "7",
    url: "priyanka-mahendru",
    name: "Ms. Priyanka Bhatia Mahendru",
    title: "Social Therapist - Psychologist",
    specializations: [
        "Anxiety Disorders & Panic",
        "Low Mood and Depression",
        "Trauma and adverse life events",
        "Personal growth and self- development",
        "Personality Disorders",
        "Emotional Regulation",
        "Stress, Burnout & Emotional Exhaustion",
        "Identity Development & Self-Esteem",
        "Grief, Bereavement & Loss",
        "Adjustment to life events or transitions",
        "Relationship Difficulties (Non- romantic)",
        "Attachment & Relational Patterns",
        "Couples Counselling",
        "Infertility, Maternal Mental Health & Family-Building Journeys",
        "Adoption & Adoption-Related Experiences",
        "Parenting support"
    ],
    experience: "+10 years",
    education: [
        "M.A. Counselling Psychology (Depth Psychology) Pacifica Graduate Institute (U.S.)",
        "M.A. Counselling Psychology (India)",
    ],
    certifications: [
        "Internal Family systems",
        "Somatic experiencing Practitioner",
        "Eating Disorder",
        "Circle of Security (Parenting)",
        "Brainspotting Level I and II",
        "British Infertility Counselling Association",
        "Acceptance & Commitment therapy",
        "Emotional Focused therapy (Couples)",
        "Gottman therapy (Couples)",
        "Certified Life Coach",
        "CDA Licensed"
    ],
    bio: `Priyanka Bhatia Mahendru is a CDA-licensed psychologist and Certified Professional Coach with over 12 years of experience supporting adolescents, adults, and couples through emotional challenges, relationship difficulties, and major life transitions. She believes healing begins when we feel truly seen, heard, and accepted — including the parts of ourselves we may struggle to share. She strives to create a warm, collaborative, and non-judgmental space where clients can safely explore their inner world, relationships, emotions, and life experiences with curiosity and compassion. 
    
    She works with a wide range of concerns including trauma, anxiety disorders, depression and mood disorders, stress, personality disorders, eating disorders, maternal mental health, bereavement and loss as well as burnout. She has extensive experience supporting individuals and couples navigating parenting concerns, infertility and its treatments, adoption-related experiences, as well as family- building journeys. 
    
    Her approach is integrative and tailored to each individual, drawing from evidence-based Cognitive Behavioural Therapy (CBT) to Trauma focused, Nervous system and Body-based modalities such as Somatic Experiencing® and Brainspotting, as well as Internal Family Systems (IFS), to support emotional regulation, trauma healing, and a deeper sense of safety and balance. She works relationally and insightfully, helping clients understand unconscious patterns, attachment dynamics, and past experiences that may continue to shape their present emotional world and relationships.  
    
    In couples therapy, Priyanka combines the Gottman Method and Emotionally Focused Therapy (EFT) to strengthen communication, deepen emotional connection, and foster more secure and resilient relationships. Alongside insight-oriented therapy, she integrates short term solution-focused coaching principles to help clients clarify goals, move through periods of feeling stuck, and create meaningful change. 
    
    She works collaboratively with clients to deepen self-awareness, understand patterns that may be keeping them stuck, and support meaningful, lasting change so they can live with greater peace, authenticity, and connection to themselves and others. Known for her calm, compassionate, and reflective approach, Priyanka creates a safe and supportive therapeutic space where clients can explore difficult emotions and work toward lasting psychological growth. 
    
    Priyanka holds dual Master's degrees in Counselling Psychology from Pacifica Graduate Institute, United States and from India, and works with clients from diverse cultural backgrounds.`,
    // email: "e.rodriguez@britishpremier.com",
    // phone: "(416) 555-0125",
    image: "/images/priyanka-profile-photo.jpeg",
    // availability: "Monday - Thursday, 10:00 AM - 6:00 PM"
  },
  {
    id: "8",
    url: "anvita-kamath",
    name: "Ms. Anvita Kamath",
    title: "Social Therapist - Psychologist",
    specializations: [
        "Child & Adolescent Psychology",
        "Young Adult Mental Health",
        "Autism Spectrum Disorder (ASD)", 
        "Attention-Deficit/Hyperactivity Disorder (ADHD)",
        "Learning Difficulties",
        "Mood Disorders",
        "Anxiety Disorders",
        "Behavioural Issues",
        "Trauma",
        "Grief & Loss",
        "Comprehensive Psychoeducational Assessments"
    ],
    // experience: "15+ years",
    education: [
        "Master of Arts in Clinical Psychology - Eastern Illinois University"
    ],
    certifications: [
        "Licensed Professional Counselor (LPC) - Illinois Department of Financial and Professional Regulation (IDFPR)",
        "Licensed Psychologist - Community Development Authority (CDA), Dubai"
    ],
    bio: `Anvita Kamath is a US-trained and certified Psychologist with a Master of Arts in Clinical Psychology from Eastern Illinois University. She is licensed in the US in the State of Illinois and by the Community Development Authority (CDA) in Dubai.

    Her clinical experience spans care homes, private clinics, schools, and community settings in both the US and Dubai. She specializes in working with individuals facing challenges such as Autism, ADHD, learning difficulties, mood disorders, anxiety, interpersonal challenges, behavioural issues, trauma, and grief
    
    Anvita brings with her a deep cultural relatability and sensitivity, and is dedicated to understanding and supporting the subjective cultural experiences and challenges that shape her clients’ lifestyle. She integrates evidence-based therapies like CBT, DBT, and mindfulness along with a person-centered approach to therapy. 

    Currently supporting clients within the UAE, Anvita works with children, adolescents and adults experiencing a wide range of emotional, behavioural, and developmental challenges. She also utilizes diverse neuropsychological/psychological assessments to accurately identify developmental and social-emotional concerns and create individualized treatment plans. She further aims to empower the adults in a child’s life and facilitates parent guidance workshops to help create a thriving environment for the child.`,
    // email: "test@gmail.com",
    // phone: "(416) 555-0124",
    image: "/images/anvita-profile-photo.png",
    // availability: "Tuesday - Saturday, 8:00 AM - 4:00 PM"
  },
// {
//   id: "9",
//   url: "aoife-mohan",
//   name: "Ms. Aoife Mohan",
//   title: "Psychologist",
//   specializations: [
//     "Anxiety, Panic and Stress",
//     "Depression and Low Mood",
//     "Self-Esteem and Confidence",
//     "Relationships and Attachment",
//     "Grief, Bereavement and Loss",
//     "Family Relationships and Parenting Challenges",
//     "Adolescent Mental Health and School-Related Difficulties",
//     "Neuroaffirming and Post-Diagnostic Support",
//     "Life Transitions and Adjustment",
//     "Women's Psychological Wellbeing",
//     "Professional Stress and Burnout",
//     "Expatriate Adjustment, Isolation and Belonging",
//     "Cultural and Societal Pressures",
//   ],
// //   experience: "",
//   education: [
//     "MSc Psychology (UK)",
//     "International Advanced Diploma in Clinical Hypnotherapy, Psychotherapy and Counselling (UK)",
//     "Doctoral Candidate in Counselling Psychology and Psychotherapy, Middlesex University, London / New School of Psychotherapy and Counselling",
//   ],
//   certifications: [
//     "CDA Licensed Psychologist",
//     "CBT Diploma in the Psychology and Treatment of Eating Disorders",
//     "CBT Diploma for the Treatment of Obsessive Compulsive Disorder (OCD)",
//     "Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) Certification",
//     "Triple P Positive Parenting Programme - Accredited Provider",
//   ],
//   bio: `Originally from Ireland, Aoife is a CDA-licensed Psychologist with an established background supporting adults, adolescents and families. Having lived and worked in Dubai for many years, she brings considerable experience and a genuine understanding of the complexities of life within a diverse international community.

// Aoife's practice spans anxiety, depression, stress, relationship difficulties, self-esteem, grief and the challenges that come with significant life changes. She has particular experience with adolescent emotional and behavioural concerns, parenting challenges and complex family dynamics. Her work also includes offering neuro affirming support to individuals and families navigating an autism or ADHD diagnosis, helping them better understand their strengths and needs, and make sense of what a diagnosis might mean for them and their families.

// Her interests also include women's psychological wellbeing, particularly the changing sense of self that can accompany motherhood, menopause and illness. Alongside this, she supports those facing professional pressures, burnout, high expectations and the demands of balancing work and personal life.

// Her therapeutic approach is integrative and evidence-informed, drawing on Cognitive Behavioural Therapy (CBT), Person-Centred Therapy, Existential Psychotherapy, Family Systems Thinking and Clinical Hypnotherapy. She combines practical strategies with opportunities for deeper reflection and understanding, adapting her approach to each person's individual needs and circumstances.

// At the heart of her approach is the belief that therapy is, above all, a human relationship. She recognises that taking the first step towards therapy can feel daunting and places real importance on helping clients feel comfortable from the outset. Warm, perceptive and down to earth, her approach is collaborative, grounded in a genuine desire to understand each person's perspective without judgement. Through thoughtful questions and, when helpful, gentle challenge, she encourages clients to explore different ways of seeing and understanding their experiences.`,
//   // email: "",
//   // phone: "",
//   image: "/images/aoife-profile-photo.png",
//   // availability: ""
// },

  // {
  //   id: "9",
  //   name: "Ms. Yara",
  //   title: "Psychotherapist",
  //   specializations: [
  //       "Trauma and PTSD",
  //       "Sexual Trauma",
  //       "Emotional Regulation",
  //       "Mood and Anxiety",
  //       "Relationships and Attachment",
  //       "Identity and Self-Esteem",
  //       "Life Transitions and Grief",
  //       "Women's and Multicultural Issues",
  //       "Couples Counseling",
  //       "Family Therapy"
  //   ],
  //   // experience: "12+ years",
  //   education: [
  //       "Master's Degree in Professional Clinical Counseling (PCC)"
  //   ],
  //   certifications: [
  //       "CDA-Licensed Psychotherapist in Dubai, UAE",
  //       "Licensed Associate Professional Counselor (LAPC), Pennsylvania, U.S",
  //       "National Certified Counselor (NCC)",
  //       "Certificate in Traumatic Stress Studies, Trauma Research Foundation",
  //       "Acceptance and Commitment Therapy (ACT) - Specialized Clinical Training"
  //   ],
  //   bio: `Yara Abu Hussein is a bilingual psychotherapist fluent in Arabic and English, with education and clinical training in the United States. She holds a master's degree in Professional Clinical Counseling (PCC) and is CDA-licensed in Dubai.
    
  //   Yara's work is rooted in compassion and resilience. She sees therapy not as a process of “fixing” people, but as a space to help them feel more like themselves and more connected to what matters to them.

  //   She works with adolescents (14+), adults, couples, and families who are navigating emotional regulation difficulties, mood and anxiety concerns, trauma, relationship challenges, identity exploration, and major life transitions.
    
  //   She aims to create a warm, nonjudgmental, and culturally sensitive space where clients feel supported, understood, and respected. Her style is collaborative and grounded in curiosity, with the belief that you are the expert in your own life. She helps clients build insight, reconnect with their strengths, and move toward meaningful, sustainable change.

  //   Her work is trauma-informed and integrative, drawing from both depth-oriented and evidence-based approaches. She is trained in Acceptance and Commitment Therapy (ACT), Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy (DBT), emotion-focused (EFT), and solution-focused approaches, while also integrating psychodynamic perspectives.

  //   She brings a strong multicultural, holistic, and trauma-informed lens to her work, with particular sensitivity to identity, cultural context, and relational and sexual trauma.`,
  //   // email:"test@gmail.com",
  //   // phone: "(416) 555-0123",
  //   image: YaraPFP,
  //   // availability: "Monday - Friday, 9:00 AM - 5:00 PM"
  // },
//   {
//     id: "10",
//     name: "Ms. Annabel George",
//     title: "Psychologist",
//     specializations: [
//       "Self-Improvement & Personal Growth",
//       "Stress Management",
//       "Academic & Career Concerns",
//       "Anxiety Disorders",
//       "Phobias",
//       "Mood Disorders",
//       "Family Concerns",
//       "Relationship Issues",
//       "Procrastination",
//       "Behavioural Issues",
//       "Self-Harm",
//       "Abuse & Trauma",
//       "Student & Young Adult Mental Health",
//       "Corporate & Workplace Mental Health",
//       "Group Therapy & Workshops"
//     ],
//     // experience: "10+ years",
//     education: [
//       "Master's Degree in Counselling Psychology - University of Mumbai (Distinction)"
//     ],
//     certifications: [
//       "Psychologist - India",
//       "Psychologist - United Arab Emirates",
//       "Consultant Psychologist (Online Platforms)"
//     ],
//     bio: `Ms. Annabel George is a Psychologist with a master's in counselling psychology from University of Mumbai, India where she earned her degree with distinction. 
    
//     She has worked as a psychologist at various schools and centres  back in India and the UAE. She is also a consultant psychologist on several online platform. 
    
//     She works with clients from a wide variety of age-groups and backgrounds - students, parents, young adults, as well as people in the corporate sector. She has been successful in assisting them as they deal with several different issues such as stress, anxiety, phobias, academic concern or career related issues, mood disorders, family concerns, relationships, procrastination, behavioural issues, self-harm, abuse and has also worked with clients focused on self-improvement. 
    
//     Apart from individual sessions she also held group sessions and several workshops on confidence building, communication skills, non-judgmental listening, and career growth. 
    
//     She makes use of Cognitive behavioural therapy, art and play therapy, interpersonal psychotherapy and solution-focused brief therapy in her sessions depending on what is relevant for the client. 
    
//     She wants to help people deal with the challenges and concerns they are faced with. To help them grow as individuals and live their lives to the fullest. Additionally, she wants people to understand the importance of mental health and wellbeing and freely seek help when it's required.
    
//     “In my sessions, the aim is on identifying the client's concerns and working through it together. I believe that people know the path that they are on… and when their car breaks down along the way… I'd like to be the one who provides them with the right tools so that they know how to fix it and deal with it should such a situation arise again”.`,
//     // email: "e.rodriguez@britishpremier.com",
//     // phone: "(416) 555-0125",
//     image: AnnabelPFP,
//     // availability: "Monday - Thursday, 10:00 AM - 6:00 PM"
//   },
];