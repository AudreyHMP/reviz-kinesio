// Banque de questions kinésiologie A1 — éditez questions.json puis lancez build_bank.py
// (Données pures, faciles à modifier. Le quiz se met à jour automatiquement.)
window.BANQUE_KINESIO = {
  "meta": {
    "titre": "Réviz' Kinésio — A1 + A2",
    "version_app": "1.3.2",
    "version_banque": "2.0.0",
    "date_maj": "2026-06-25",
    "version": "2.0.0",
    "examen_cible": "2025-07-03",
    "themes_labels": {
      "naissance_kinesiologie": "Naissance & branches",
      "tfh_principes": "TFH – principes",
      "test_musculaire": "Test musculaire & pré-test",
      "triangle_sante": "Triangle de santé",
      "muscles_meridiens": "Muscles & méridiens",
      "lcf": "Latéralité · Centrage · Focus",
      "repatterning_dennison": "Repatterning (Dennison)",
      "aire_broca": "Aire de Broca",
      "meridiens": "Méridiens (MTC)",
      "neurolymphatiques": "Neuro-lymphatiques",
      "neurovasculaires": "Neuro-vasculaires",
      "cinq_elements": "Cinq Éléments (Ko/Sheng)",
      "alimentation_mtc": "Alimentation & substances",
      "analyse_transactionnelle": "Analyse transactionnelle",
      "hans_selye": "Stress & Hans Selye",
      "os_crane": "Os du crâne & squelette",
      "anatomie": "Anatomie & physiologie",
      "techniques_correction": "Techniques de correction",
      "protocoles_a1": "Protocoles année 1",
      "traits_chakras": "Traits structure/fonction & chakras",
      "protocoles_avances": "Protocoles d'approfondissement",
      "meridiens_trajet": "Méridiens : début / fin / trajet",
      "meridiens_mtc": "Méridiens : heure, élément, couple",
      "objectifs_protocoles": "À quoi sert chaque protocole",
      "mtc_energie": "Énergie vitale, saveurs & cycles (MTC)",
      "muscles_details": "Muscles : action principale",
      "anatomie_facile": "Anatomie en douceur",
      "neuroplasticite": "Neuroplasticité & cerveau",
      "at_a2": "AT approfondie (A2)",
      "tsf_a2": "TSF – structure / fonction (A2)",
      "chakras_a2": "Chakras (A2)",
      "protocoles_a2": "Protocoles pratiques (A2)",
      "reactivite_a2": "Réactivité musculaire (A2)",
      "tibetains_a2": "8 Tibétains (A2)",
      "circuits_a2": "Circuits musculaires (A2)",
      "luscher_a2": "Lüscher & couleurs (A2)",
      "metaphores_a2": "Métaphores (A2)",
      "vision_gym_a2": "Vision Gym (A2)",
      "oligo_a2": "Oligo-éléments (A2)",
      "endocrino_a2": "Endocrino & épiphyse (A2)",
      "ecologie_a2": "Écologie 7 dimensions (A2)",
      "compulsifs_a2": "Comportements compulsifs (A2)",
      "son_a2": "Équilibrage par le son (A2)"
    },
    "sources": [
      "Corrigé examen 2025 (EKI-LIBRE)",
      "Protocoles année 1 (ODT/DOCX)",
      "lcf_bilan.json",
      "Planches muscles/méridiens & roues",
      "Planches méridiens (Cours A1 p.458-471)",
      "Ostéologie (Cours A1 – Steels Baud 2024)",
      "Support pédagogique A1 – Neuroplasticité / amygdale / ivresse mentale",
      "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "Cours A2 EKI-LIBRE (sommaire_officiel_v2)",
      "Cours/_digest/a2_analyse_transactionnelle_p55-114.md",
      "Cours/catalogues/evitements.json",
      "Protocoles des copines (Cours/_apports/Protocoles des copines)"
    ],
    "note": "Banque N°1 (1.0.0) : questions relues (verifie=true). Banque N°2 (2.0.0) : corrigé 2025, A2, enrichissements, supports — verifie=false tant que non confirmées.",
    "journal_version": [
      {
        "version_banque": "2.0.0",
        "version_app": "1.3.2",
        "date": "2026-06-25",
        "resume": "q751-q752 circuits : reformulation + libellés sans parenthèses"
      },
      {
        "version_banque": "2.0.0",
        "version_app": "1.3.2",
        "date": "2026-06-25",
        "resume": "Suppression q602 baromètre (affinage émotions) — doublon avec q601"
      },
      {
        "version_banque": "2.0.0",
        "version_app": "1.3.2",
        "date": "2026-06-25",
        "resume": "28 questions copines : douleur, cartes motivation, Soul Ray/Rose 2, cicatrice, fascia"
      },
      {
        "version_banque": "2.0.0",
        "version_app": "1.3.2",
        "date": "2026-06-25",
        "resume": "20 questions Protocoles des copines (détails pratiques A1/A2)"
      },
      {
        "version_banque": "2.0.0",
        "version_app": "1.3.2",
        "date": "2026-06-24",
        "resume": "Banque N°2 unifiée (2.0+2.1+2.2) + 82 questions corrigé 2025"
      },
      {
        "version_banque": "2.2.0",
        "version_app": "1.3.2",
        "date": "2026-06-24",
        "resume": "Lot neuroplasticité + test musculaire (supports EKI-LIBRE juin 2026)"
      },
      {
        "version_banque": "2.1.3",
        "version_app": "1.3.2",
        "date": "2026-06-24",
        "resume": "Baromètre : côté droit = NON CHOIX / sentiment (pas « zone D »)"
      },
      {
        "version_banque": "2.1.2",
        "version_app": "1.3.1",
        "date": "2026-06-24",
        "resume": "Retours formateur · verifie · suppressions erreurs · Pélérandra · baromètre cours A1"
      },
      {
        "version_banque": "2.1.0",
        "version_app": "1.3.0",
        "date": "2026-06-24",
        "resume": "Filtre v2.1 · questions A1 difficiles · retour accueil en quiz · options plus subtiles"
      },
      {
        "version_banque": "2.0.0",
        "version_app": "1.2.0",
        "date": "2026-06-24",
        "resume": "Filtre par version de banque sur l'accueil"
      },
      {
        "version_banque": "2.0.0",
        "version_app": "1.1.0",
        "date": "2026-06-24",
        "resume": "Banque A2 (AT, chakras, TSF, protocoles) · 585 questions · export/import scores · versioning affiché"
      },
      {
        "version_banque": "1.4.0",
        "version_app": "1.0.0",
        "date": "2026-06-24",
        "resume": "Banque A1 enrichie (~505 questions)"
      }
    ],
    "banque_versions_labels": {
      "1.0.0": "Banque N°1 — fond A1 (relue)",
      "2.0.0": "Banque N°2 — corrigé 2025, A2, enrichissements, supports"
    }
  },
  "themes": [
    "naissance_kinesiologie",
    "tfh_principes",
    "test_musculaire",
    "triangle_sante",
    "muscles_meridiens",
    "lcf",
    "repatterning_dennison",
    "aire_broca",
    "meridiens",
    "neurolymphatiques",
    "neurovasculaires",
    "cinq_elements",
    "alimentation_mtc",
    "analyse_transactionnelle",
    "hans_selye",
    "os_crane",
    "anatomie",
    "techniques_correction",
    "protocoles_a1",
    "traits_chakras",
    "protocoles_avances",
    "meridiens_trajet",
    "meridiens_mtc",
    "objectifs_protocoles",
    "mtc_energie",
    "muscles_details",
    "anatomie_facile",
    "neuroplasticite",
    "at_a2",
    "tsf_a2",
    "chakras_a2",
    "protocoles_a2",
    "reactivite_a2",
    "tibetains_a2",
    "circuits_a2",
    "luscher_a2",
    "metaphores_a2",
    "vision_gym_a2",
    "oligo_a2",
    "endocrino_a2",
    "ecologie_a2",
    "compulsifs_a2",
    "son_a2"
  ],
  "questions": [
    {
      "id": "q001",
      "theme": "naissance_kinesiologie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Étymologiquement, « kinésiologie » signifie :",
      "options": [
        "La science de l'énergie",
        "La science du mouvement",
        "L'étude des méridiens",
        "La thérapie par le toucher"
      ],
      "bonne_reponse": 1,
      "explication": "« La science du mouvement » : technique de rééquilibrage psycho-corporelle.",
      "source": "Corrigé 2025 – Q.92",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q002",
      "theme": "naissance_kinesiologie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où et quand la kinésiologie a-t-elle été fondée, puis arrivée en France ?",
      "options": [
        "URSS années 50 / France années 70",
        "USA années 60 / France années 80",
        "Chine années 40 / France années 90",
        "USA années 80 / France années 2000"
      ],
      "bonne_reponse": 1,
      "explication": "Fondée dans les années 60 aux USA, apparue en France dans les années 80.",
      "source": "Corrigé 2025 – Q.92",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q003",
      "theme": "naissance_kinesiologie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelles sont les trois branches principales de la kinésiologie ?",
      "options": [
        "TFH, Brain Gym, EFT",
        "Touch For Health, Three In One Concept, Edu-K (Brain Gym)",
        "TFH, acupuncture, ostéopathie",
        "Three In One, EFT, sophrologie"
      ],
      "bonne_reponse": 1,
      "explication": "Touch For Health, Three In One Concepts et Brain Gym (Edu-K).",
      "source": "Corrigé 2025 – Q.89 et Q.92",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q004",
      "theme": "naissance_kinesiologie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Sur quel concept traditionnel ancien le TFH (Touch For Health) se base-t-il ?",
      "options": [
        "L'ayurvéda",
        "La médecine traditionnelle chinoise",
        "La naturopathie",
        "La chiropraxie"
      ],
      "bonne_reponse": 1,
      "explication": "Le TFH s'appuie sur la médecine traditionnelle chinoise.",
      "source": "Corrigé 2025 – Q.1",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q005",
      "theme": "tfh_principes",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« L'énergie suit … ». Complétez ce principe fondamental.",
      "options": [
        "le mouvement",
        "l'intention",
        "le méridien dominant",
        "la respiration abdominale"
      ],
      "bonne_reponse": 1,
      "explication": "« L'énergie suit l'intention » — le thème oriente l'équilibrage (pas le méridien seul).",
      "source": "Corrigé 2025 – Q.14",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q006",
      "theme": "tfh_principes",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "En TFH, on commence par équilibrer le VC et le VG car ce sont les réserves d'énergie.",
      "bonne_reponse": true,
      "explication": "On débute par VC/VG (réserves d'énergie), puis l'estomac (impacté par les émotions), puis on suit l'ordre des méridiens.",
      "source": "Corrigé 2025 – Q.12",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q007",
      "theme": "tfh_principes",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Pourquoi tester les muscles dans un ordre précis ?",
      "options": [
        "Pour gagner du temps",
        "Pour suivre l'ordre des méridiens (cycle circadien, plénitude de 2h)",
        "Pour fatiguer le client",
        "C'est aléatoire"
      ],
      "bonne_reponse": 1,
      "explication": "L'ordre suit le cycle circadien des méridiens (chacun en plénitude 2h).",
      "source": "Corrigé 2025 – Q.12",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q008",
      "theme": "tfh_principes",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment l'équilibration des 14 muscles améliore-t-elle la posture ?",
      "options": [
        "En renforçant tous les muscles",
        "Chaque muscle retrouve sa juste place (un muscle trop tendu se détend, trop détendu se contracte)",
        "En étirant la colonne",
        "En massant les fascias"
      ],
      "bonne_reponse": 1,
      "explication": "Chaque muscle retrouve son juste positionnement, ce qui modifie la posture.",
      "source": "Corrigé 2025 – Q.13",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q009",
      "theme": "tfh_principes",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment harmonise-t-on un méridien pour équilibrer l'énergie du corps ?",
      "options": [
        "En le pinçant",
        "Par un brassage du méridien dans son sens de circulation (renforcement possible via NLY, NV…)",
        "En le tapotant à l'envers",
        "Uniquement par l'alimentation"
      ],
      "bonne_reponse": 1,
      "explication": "Brassage dans le sens de circulation ; on peut renforcer aussi via NLY, NV, etc.",
      "source": "Corrigé 2025 – Q.6",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q010",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quels sont les 3 types de réponses au stress que donne le test musculaire ?",
      "options": [
        "Mental, physique, spirituel",
        "Biochimique, physique, émotionnel",
        "Énergétique, structurel, mental",
        "Yin, yang, neutre"
      ],
      "bonne_reponse": 1,
      "explication": "Biochimique, physique et émotionnel.",
      "source": "Corrigé 2025 – Q.4",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q011",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le pré-test de précision, le défi PHYSIQUE correspond à :",
      "options": [
        "Penser à une odeur",
        "Le pinch-dépinch (FNM)",
        "Monter le VC / baisser le VG",
        "Penser à du négatif"
      ],
      "bonne_reponse": 1,
      "explication": "Défi physique = pinch-dépinch (fuseau neuro-musculaire).",
      "source": "Corrigé 2025 – Q.3",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q012",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le pré-test, le défi BIOCHIMIQUE consiste à :",
      "options": [
        "Penser à du positif/négatif",
        "Penser à une odeur agréable et désagréable",
        "Monter/baisser le VC",
        "Boire de l'eau"
      ],
      "bonne_reponse": 1,
      "explication": "Défi biochimique = penser à une odeur agréable puis désagréable.",
      "source": "Corrigé 2025 – Q.3",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q013",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelles vérifications fait-on en pré-test avant un test musculaire de précision ?",
      "options": [
        "Tension artérielle et pouls",
        "Blocage, disjonction (switching), VC/VG, déshydratation, ionisation",
        "Glycémie et hydratation",
        "Souplesse et force"
      ],
      "bonne_reponse": 1,
      "explication": "Pré-test : blocage, disjonction (switching/surcharge), VC/VG, déshydratation, ionisation.",
      "source": "Corrigé 2025 – Q.3",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q014",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle technique donne accès aux informations sur les circuits énergétiques d'une personne ?",
      "options": [
        "La palpation",
        "Le test musculaire",
        "L'observation posturale",
        "Les pouls uniquement"
      ],
      "bonne_reponse": 1,
      "explication": "Le test musculaire établit un dialogue direct avec le corps.",
      "source": "Corrigé 2025 – Q.21",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q015",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "On teste un muscle indicateur tout en touchant légèrement un Point d'Alarme. Que signifie un Tf ?",
      "options": [
        "Pas d'excès dans le méridien",
        "Excès d'énergie dans le méridien",
        "Vide d'énergie",
        "Rien"
      ],
      "bonne_reponse": 1,
      "explication": "Si Tf en touchant le point d'alarme : excès d'énergie dans le méridien (si TF : pas d'excès).",
      "source": "Corrigé 2025 – Q.25",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q016",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Pendant une équilibration, la meilleure description d'un muscle « déverrouillé » est :",
      "options": [
        "Un excès d'énergie",
        "Un déséquilibre",
        "Un vide d'énergie",
        "Un muscle sain"
      ],
      "bonne_reponse": 1,
      "explication": "Un muscle qui déverrouille traduit un déséquilibre.",
      "source": "Corrigé 2025 – Q.24",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q017",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'arrive-t-il à un muscle trop contracté quand on travaille sur son antagoniste ?",
      "options": [
        "Il se contracte plus",
        "Il s'équilibre",
        "Il s'atrophie",
        "Rien"
      ],
      "bonne_reponse": 1,
      "explication": "Il s'équilibre.",
      "source": "Corrigé 2025 – Q.5",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q018",
      "theme": "test_musculaire",
      "type": "vrai_faux",
      "difficulte": 3,
      "enonce": "Une défaillance musculaire cachée est un test Fort qui reste Fort quand le testé effectue un TL des points de correction.",
      "bonne_reponse": true,
      "explication": "Vrai : le muscle reste fort malgré le TL des points de correction.",
      "source": "Corrigé 2025 – Q.62",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q019",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment gérer une crampe ou un spasme musculaire ?",
      "options": [
        "Étirer fortement",
        "Pinch (sédation) dans le ventre + plumage (aller-retours rapides) sur le ventre du muscle",
        "Glace 20 min",
        "Renforcer l'antagoniste"
      ],
      "bonne_reponse": 1,
      "explication": "Pinch (sédation) dans le ventre du muscle puis plumage en surface.",
      "source": "Corrigé 2025 – Q.15",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q020",
      "theme": "triangle_sante",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "La kinésiologie prend en compte le bien-être global de la personne sur les plans :",
      "options": [
        "Physique seulement",
        "Physique, émotionnel et mental",
        "Énergétique seulement",
        "Spirituel seulement"
      ],
      "bonne_reponse": 1,
      "explication": "Elle tient compte des aspects physique, émotionnel et mental.",
      "source": "Corrigé 2025 – Q.92",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q021",
      "theme": "triangle_sante",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quels sont certains bénéfices d'utiliser le TFH ?",
      "options": [
        "Guérir des maladies",
        "Rééquilibrer l'énergie, améliorer la posture, libérer les réactions face au stress, soulager des douleurs",
        "Remplacer un médecin",
        "Diagnostiquer des pathologies"
      ],
      "bonne_reponse": 1,
      "explication": "Rééquilibrer les déséquilibres d'énergie, améliorer la posture, libérer les réactions face au stress, soulager des douleurs.",
      "source": "Corrigé 2025 – Q.2",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q022",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel méridien le PSOAS est-il associé ?",
      "options": [
        "Vessie",
        "Rein",
        "Rate/Pancréas",
        "Foie"
      ],
      "bonne_reponse": 1,
      "explication": "Psoas → Rein (Rn).",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q023",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel méridien le GRAND PECTORAL CLAVICULAIRE est-il associé ?",
      "options": [
        "Estomac",
        "Cœur",
        "Foie",
        "Poumon"
      ],
      "bonne_reponse": 0,
      "explication": "Grand pectoral claviculaire → Estomac (E).",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q024",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel méridien le GRAND DORSAL est-il associé ?",
      "options": [
        "Poumon",
        "Rate/Pancréas",
        "Gros Intestin",
        "Vessie"
      ],
      "bonne_reponse": 1,
      "explication": "Grand dorsal → Rate/Pancréas. (C'est aussi le muscle du Focus.)",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q025",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le QUADRICEPS est associé au méridien :",
      "options": [
        "Estomac",
        "Intestin Grêle",
        "Rein",
        "Vessie"
      ],
      "bonne_reponse": 1,
      "explication": "Quadriceps → Intestin Grêle (IG).",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q026",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le SOUS-SCAPULAIRE est associé au méridien :",
      "options": [
        "Cœur",
        "Maître Cœur",
        "Poumon",
        "Foie"
      ],
      "bonne_reponse": 0,
      "explication": "Sous-scapulaire → Cœur (C).",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q027",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le TENSEUR DU FASCIA LATA est associé au méridien :",
      "options": [
        "Vessie",
        "Gros Intestin",
        "Vésicule Biliaire",
        "Rein"
      ],
      "bonne_reponse": 1,
      "explication": "Tenseur du fascia lata → Gros Intestin (GI).",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q028",
      "theme": "muscles_meridiens",
      "type": "association",
      "difficulte": 3,
      "enonce": "Associez chaque muscle à son méridien (1re série).",
      "paires": [
        [
          "Sus-épineux",
          "Vaisseau Conception (VC)"
        ],
        [
          "Grand pectoral sternal",
          "Foie (F)"
        ],
        [
          "Petit rond",
          "Triple Réchauffeur (TR)"
        ],
        [
          "Deltoïde antérieur",
          "Vésicule Biliaire (VB)"
        ],
        [
          "Quadriceps",
          "Intestin Grêle (IG)"
        ],
        [
          "Sous-scapulaire",
          "Cœur (C)"
        ],
        [
          "Grand pectoral claviculaire",
          "Estomac (E)"
        ]
      ],
      "explication": "Sus-épineux→VC, Grand pectoral sternal→Foie, Petit rond→TR, Deltoïde ant.→VB, Quadriceps→IG, Sous-scapulaire→Cœur, GPC→Estomac.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q029",
      "theme": "muscles_meridiens",
      "type": "association",
      "difficulte": 3,
      "enonce": "Associez chaque muscle à son méridien (2e série).",
      "paires": [
        [
          "Fibulaire (péronier)",
          "Vessie (V)"
        ],
        [
          "Psoas",
          "Rein (Rn)"
        ],
        [
          "Grand dentelé",
          "Poumon (P)"
        ],
        [
          "Grand rond",
          "Vaisseau Gouverneur (VG)"
        ],
        [
          "Tenseur du fascia lata",
          "Gros Intestin (GI)"
        ],
        [
          "Grand dorsal",
          "Rate/Pancréas (Rte)"
        ],
        [
          "Moyen fessier",
          "Maître Cœur (MC)"
        ]
      ],
      "explication": "Fibulaire→Vessie, Psoas→Rein, Grand dentelé→Poumon, Grand rond→VG, TFL→Gros Intestin, Grand dorsal→Rate/Pancréas, Moyen fessier→Maître Cœur.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q030",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le test du Robot (latéralité) utilise quel muscle indicateur ?",
      "options": [
        "Grand dorsal",
        "Sus-épineux",
        "Grand pectoral claviculaire",
        "Deltoïde antérieur"
      ],
      "bonne_reponse": 1,
      "explication": "Latéralité = test du Robot → sus-épineux.",
      "source": "lcf_bilan.json (Cours A1 p.36-39)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q031",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le test du Nageur (centrage) teste principalement :",
      "options": [
        "Grand dorsal",
        "Grand pectoral claviculaire",
        "Trapèze supérieur",
        "Psoas"
      ],
      "bonne_reponse": 1,
      "explication": "Centrage = test du Nageur → grand pectoral claviculaire.",
      "source": "lcf_bilan.json (Cours A1 p.54-55)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q032",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le test du Pingouin (focus) teste :",
      "options": [
        "Grand dorsal",
        "Sus-épineux",
        "Masséter",
        "Sterno-cléido-mastoïdien"
      ],
      "bonne_reponse": 0,
      "explication": "Focus = test du Pingouin → grand dorsal.",
      "source": "lcf_bilan.json (Cours A1 p.64-66)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q033",
      "theme": "lcf",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque test LCF à son axe.",
      "paires": [
        [
          "Test du Robot (sus-épineux)",
          "Latéralité"
        ],
        [
          "Test du Nageur (GPC)",
          "Centrage"
        ],
        [
          "Test du Pingouin (grand dorsal)",
          "Focus"
        ]
      ],
      "explication": "Robot=Latéralité, Nageur=Centrage, Pingouin=Focus.",
      "source": "lcf_bilan.json",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q034",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'inhibition visuelle relève de quel axe ?",
      "options": [
        "Latéralité",
        "Centrage",
        "Focus",
        "Aucun"
      ],
      "bonne_reponse": 0,
      "explication": "Inhibitions visuelles et auditives = axe Latéralité.",
      "source": "Protocole A1 – Inhibition visuelle",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q035",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Les cloaques et l'os hyoïde relèvent de quel axe ?",
      "options": [
        "Latéralité",
        "Centrage",
        "Focus",
        "Énergie"
      ],
      "bonne_reponse": 1,
      "explication": "Démarches, cloaques et os hyoïde = axe Centrage.",
      "source": "lcf_bilan.json",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q036",
      "theme": "lcf",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Rn 27 est une correction agissant sur le domaine de la latéralité.",
      "bonne_reponse": true,
      "explication": "Rn 27 agit sur la latéralité.",
      "source": "Corrigé 2025 – Q.58",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q037",
      "theme": "repatterning_dennison",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Au signe X (marche croisée), quelle activité associe-t-on ?",
      "options": [
        "Compter à voix haute",
        "Chanter / fredonner",
        "Lire en silence",
        "Fermer les yeux"
      ],
      "bonne_reponse": 1,
      "explication": "CC X + marche croisée + chant (hémisphère droit, créatif).",
      "source": "lcf_bilan.json (Cours A1 p.50-53)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q038",
      "theme": "repatterning_dennison",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Au signe II (deux barres parallèles), quelle combinaison est correcte ?",
      "options": [
        "Marche croisée + chanter",
        "Marche à l'amble + compter",
        "Course + silence",
        "Saut + visualisation"
      ],
      "bonne_reponse": 1,
      "explication": "CC II + marche à l'amble + compter (hémisphère gauche, séquentiel).",
      "source": "lcf_bilan.json (Cours A1 p.50-53)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q039",
      "theme": "repatterning_dennison",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez le signe à l'activité du repatterning.",
      "paires": [
        [
          "Signe X (marche croisée)",
          "Chanter (hémisphère droit)"
        ],
        [
          "Signe II (marche à l'amble)",
          "Compter (hémisphère gauche)"
        ]
      ],
      "explication": "X = chant/hémisphère droit ; II = compter/hémisphère gauche.",
      "source": "lcf_bilan.json",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q040",
      "theme": "repatterning_dennison",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quels effets positifs le Cross Crawl (mouvement croisé) peut-il avoir ?",
      "options": [
        "Endormir",
        "Redonner de l'énergie, stimuler les 2 hémisphères, améliorer concentration et lecture",
        "Étirer la colonne",
        "Baisser la tension"
      ],
      "bonne_reponse": 1,
      "explication": "Redonne de l'énergie, stimule les 2 hémisphères → concentration et lecture.",
      "source": "Corrigé 2025 – Q.16",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q041",
      "theme": "repatterning_dennison",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Comment vérifie-t-on qu'un cerveau n'est pas « transposé » lors de la coordination croisée ?",
      "options": [
        "En fermant les yeux",
        "En demandant de compter, main sur la tempe gauche (Tf = transposé)",
        "En sautant",
        "En lisant"
      ],
      "bonne_reponse": 1,
      "explication": "Compter + main sur la tempe gauche : si Tf, cerveau transposé.",
      "source": "Protocole A1 – Coordination croisée",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q042",
      "theme": "aire_broca",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "L'aire de Broca est surtout impliquée dans :",
      "options": [
        "La vision",
        "La production de la parole (langage expressif)",
        "L'équilibre",
        "La digestion"
      ],
      "bonne_reponse": 1,
      "explication": "Aire de Broca = zone dévolue au langage, lobe frontal gauche.",
      "source": "Corrigé 2025 (anatomie) – Q.25",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q043",
      "theme": "aire_broca",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où se situe l'aire de Broca ?",
      "options": [
        "Lobe occipital droit",
        "Lobe frontal du cerveau gauche",
        "Cervelet",
        "Tronc cérébral"
      ],
      "bonne_reponse": 1,
      "explication": "Lobe frontal du cerveau gauche.",
      "source": "Corrigé 2025 (anatomie) – Q.25",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q044",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Lesquels de ces méridiens sont YIN ?",
      "options": [
        "Vessie, Estomac, Gros Intestin",
        "Rein, Foie, Cœur, Maître Cœur, Rate/Pancréas, Poumon",
        "Vésicule Biliaire, Triple Réchauffeur",
        "Intestin Grêle, Vessie"
      ],
      "bonne_reponse": 1,
      "explication": "Yin : Rein, Foie, Cœur, Maître Cœur, Rate/Pancréas, Poumon.",
      "source": "Corrigé 2025 – Q.65",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q045",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Lesquels de ces méridiens sont YANG ?",
      "options": [
        "Rein, Foie, Poumon",
        "Vessie, Vésicule Biliaire, Intestin Grêle, Triple Réchauffeur, Estomac, Gros Intestin",
        "Cœur, Rate, Foie",
        "Maître Cœur, Poumon"
      ],
      "bonne_reponse": 1,
      "explication": "Yang : Vessie, Vésicule Biliaire, Intestin Grêle, Triple Réchauffeur, Estomac, Gros Intestin.",
      "source": "Corrigé 2025 – Q.66",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q046",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quels deux méridiens « extraordinaires » sert-on de réserves d'énergie ?",
      "options": [
        "Cœur et Rein",
        "Vaisseau Conception (VC) et Vaisseau Gouverneur (VG)",
        "Foie et Vésicule Biliaire",
        "Poumon et Gros Intestin"
      ],
      "bonne_reponse": 1,
      "explication": "VC et VG = réserves d'énergie, équilibrés en premier.",
      "source": "Corrigé 2025 – Q.12",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q047",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quels méridiens correspondent à Maître Cœur et Triple Réchauffeur ?",
      "options": [
        "Deux organes du feu (mémoire cellulaire et régulation thermique)",
        "Deux organes de l'eau",
        "Le bois et le métal",
        "La rate et l'estomac"
      ],
      "bonne_reponse": 0,
      "explication": "Maître Cœur = mémoire cellulaire ; Triple Réchauffeur = régule le système thermique.",
      "source": "Protocole A1 – Pouls chinois",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q048",
      "theme": "neurolymphatiques",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Les points neuro-lymphatiques ont été découverts par le Dr Goodheart.",
      "bonne_reponse": false,
      "explication": "Faux : les réflexes neuro-lymphatiques ont été postulés par Chapman et Owen (1937). Goodheart (années 1960) les a ensuite intégrés dans son système, mais ne les a pas découverts.",
      "source": "Cours A1 – Historique de la kinésiologie (Chapman & Owen, 1937)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q049",
      "theme": "neurolymphatiques",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où trouve-t-on principalement les points neuro-lymphatiques ?",
      "options": [
        "Sur le visage",
        "Devant (buste, espaces intercostaux + cuisses) et derrière (dos, de chaque côté de la colonne)",
        "Sur les mains",
        "Sur les pieds"
      ],
      "bonne_reponse": 1,
      "explication": "Devant : buste/intercostaux + cuisses ; derrière : dos de part et d'autre de la colonne.",
      "source": "Corrigé 2025 – Q.8",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q050",
      "theme": "neurolymphatiques",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle pression et quelle durée pour stimuler les NLY ?",
      "options": [
        "Légère, 5 s",
        "Ferme et profonde (« confortablement inconfortable »), ~30 s",
        "Très forte, 2 min",
        "Aucune pression"
      ],
      "bonne_reponse": 1,
      "explication": "Pression ferme et profonde, « confortablement inconfortable », ~30 s (à l'écoute du ressenti).",
      "source": "Corrigé 2025 – Q.9 et Q.10",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q051",
      "theme": "neurovasculaires",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Les points neuro-vasculaires ont été trouvés par le Dr Bennett.",
      "bonne_reponse": true,
      "explication": "Oui, Dr Bennett.",
      "source": "Corrigé 2025 – Q.61",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q052",
      "theme": "neurovasculaires",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quel système du corps est directement impliqué par les Neuro-Vasculaires ?",
      "options": [
        "Le système lymphatique",
        "Le système sanguin",
        "Le système digestif",
        "Le système nerveux"
      ],
      "bonne_reponse": 1,
      "explication": "Le système sanguin.",
      "source": "Corrigé 2025 – Q.11",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q053",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quels sont les deux cycles distincts de la théorie des Cinq Éléments ?",
      "options": [
        "Yin et Yang",
        "Ko et Sheng",
        "Bois et Feu",
        "Plénitude et Vide"
      ],
      "bonne_reponse": 1,
      "explication": "Ko et Sheng.",
      "source": "Corrigé 2025 – Q.26",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q054",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la différence entre Ko et Sheng ?",
      "options": [
        "Ko crée, Sheng contrôle",
        "Ko = loi de contrôle (grand-mère/fille) ; Sheng = loi de création/engendrement (mère/fille nourricière)",
        "Les deux contrôlent",
        "Les deux engendrent"
      ],
      "bonne_reponse": 1,
      "explication": "Ko = contrôle (grand-mère/fille) ; Sheng = engendrement nourricier (mère/fille).",
      "source": "Corrigé 2025 – Q.27",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q055",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel cycle est activé EN PREMIER quand on renforce un muscle (points d'acupression) ?",
      "options": [
        "La loi Ko",
        "La loi Sheng",
        "Le cycle Yin",
        "Le cycle circadien"
      ],
      "bonne_reponse": 1,
      "explication": "La loi Sheng (tonification) ; la loi Ko sert à équilibrer et arrêter le processus.",
      "source": "Corrigé 2025 – Q.42 et Q.43",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q056",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle émotion « nourrit » la colère (loi Sheng) ?",
      "options": [
        "La joie",
        "La peur (l'eau nourrit le bois)",
        "La tristesse",
        "La rumination"
      ],
      "bonne_reponse": 1,
      "explication": "Loi Sheng : l'eau nourrit le bois → la peur nourrit la colère.",
      "source": "Corrigé 2025 – Q.39",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q057",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle émotion « contrôle » le chagrin (loi Ko) ?",
      "options": [
        "La peur",
        "La joie/l'amour (le Feu contrôle le Métal)",
        "La colère",
        "La rumination"
      ],
      "bonne_reponse": 1,
      "explication": "Loi Ko : le Feu contrôle le Métal → la joie/l'amour contrôle le chagrin.",
      "source": "Corrigé 2025 – Q.40",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q058",
      "theme": "cinq_elements",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque élément à son GOÛT.",
      "paires": [
        [
          "Bois",
          "Acide / aigre"
        ],
        [
          "Feu",
          "Amer"
        ],
        [
          "Terre",
          "Doux / sucré"
        ],
        [
          "Métal",
          "Piquant / pimenté"
        ],
        [
          "Eau",
          "Salé"
        ]
      ],
      "explication": "Bois=acide, Feu=amer, Terre=sucré, Métal=piquant, Eau=salé.",
      "source": "Corrigé 2025 – Q.48",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q059",
      "theme": "cinq_elements",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque élément à son ÉMOTION principale.",
      "paires": [
        [
          "Bois",
          "Colère / ressentiment"
        ],
        [
          "Feu",
          "Joie / amour"
        ],
        [
          "Terre",
          "Empathie / rumination"
        ],
        [
          "Métal",
          "Tristesse / chagrin"
        ],
        [
          "Eau",
          "Peur / anxiété"
        ]
      ],
      "explication": "Bois=colère, Feu=joie, Terre=empathie, Métal=tristesse, Eau=peur.",
      "source": "Corrigé 2025 – Q.49",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q060",
      "theme": "cinq_elements",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "L'élément Bois correspond au printemps.",
      "bonne_reponse": true,
      "explication": "Oui, Bois = printemps.",
      "source": "Corrigé 2025 – Q.67",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q061",
      "theme": "cinq_elements",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "L'élément Terre correspond à l'automne.",
      "bonne_reponse": false,
      "explication": "Non. L'automne correspond au Métal (Terre = intersaison / fin d'été).",
      "source": "Corrigé 2025 – Q.68",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q062",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelles lois de la roue servent à déterminer le méridien clé ?",
      "options": [
        "Yin/Yang seulement",
        "Barrage, Triangle, Carré, Midi-minuit (on renforce le 1er Vide le plus proche de l'excès)",
        "Ko et Sheng uniquement",
        "Aucune"
      ],
      "bonne_reponse": 1,
      "explication": "Barrage, Triangle, Carré, Midi-minuit ; on renforce le 1er Vide le plus proche de l'excès.",
      "source": "Corrigé 2025 – Q.28",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q063",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quels sont les points d'acupression équilibrant des méridiens du MÊME élément ?",
      "options": [
        "Points d'alarme",
        "Points Luo (points couple, jonction, passage)",
        "Points NLY",
        "Points NV"
      ],
      "bonne_reponse": 1,
      "explication": "Points Luo (aussi appelés points couple / jonction / passage).",
      "source": "Corrigé 2025 – Q.46",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q064",
      "theme": "alimentation_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Citez les 3 catégories d'aliments/substances selon leur effet :",
      "options": [
        "Acide, neutre, basique",
        "Biogénique (donne de l'énergie), Biostatique (neutre), Biocidique (diminue l'énergie)",
        "Chaud, tiède, froid",
        "Yin, yang, neutre"
      ],
      "bonne_reponse": 1,
      "explication": "Biogénique = donne de l'énergie ; Biostatique = neutre ; Biocidique = diminue l'énergie.",
      "source": "Corrigé 2025 – Q.20",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q065",
      "theme": "alimentation_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Si vous trouvez un Grand Dorsal déverrouillé, quelles substances éviter ?",
      "options": [
        "Le sel et l'eau",
        "Le sucre raffiné, les sucres concentrés, la caféine et le tabac",
        "Les protéines",
        "Les légumes verts"
      ],
      "bonne_reponse": 1,
      "explication": "Éviter sucre raffiné / sucres concentrés, caféine et tabac.",
      "source": "Corrigé 2025 – Q.17",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q066",
      "theme": "alimentation_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel point utilise-t-on en Localisation de Circuit (LC) pour tester les aliments ?",
      "options": [
        "27 Rn",
        "C1 (doit être verrouillé « en clair » avant de tester)",
        "20 VG",
        "21 TR"
      ],
      "bonne_reponse": 1,
      "explication": "C1 ; il doit être verrouillé « en clair », sinon rééquilibrer les PNL antérieurs/postérieurs du VC.",
      "source": "Corrigé 2025 – Q.18",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q067",
      "theme": "alimentation_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le protocole Nutrition +/- , que signifient « + » et « - » ?",
      "options": [
        "Plus ou moins de quantité",
        "Nutrition + = aliment à AJOUTER ; Nutrition - = aliment à SUPPRIMER",
        "Positif/négatif émotionnel",
        "Yin/Yang"
      ],
      "bonne_reponse": 1,
      "explication": "Nutrition + = aliment à ajouter ; Nutrition - = aliment à supprimer.",
      "source": "Protocole A1 – Nutrition +/-",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q068",
      "theme": "alimentation_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Lors d'un syndrome de règles douloureuses, le kinésiologue peut prescrire l'oligo-élément Fer.",
      "bonne_reponse": false,
      "explication": "Non : interdiction de prescrire. Le kinésiologue ne prescrit pas.",
      "source": "Corrigé 2025 – Q.90 et Q.91",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q069",
      "theme": "analyse_transactionnelle",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment se comporter face à une VICTIME (triangle dramatique) ?",
      "options": [
        "La sauver",
        "« On la noie pour qu'elle se sauve toute seule » (ne pas la sauver, sinon elle devient persécutrice)",
        "La fuir",
        "La responsabiliser"
      ],
      "bonne_reponse": 1,
      "explication": "On ne la sauve pas ; si on l'aide, elle devient persécutrice.",
      "source": "Corrigé 2025 – Q.79",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q070",
      "theme": "analyse_transactionnelle",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment se comporter face à un PERSÉCUTEUR ?",
      "options": [
        "On le rassure",
        "On le responsabilise",
        "On le noie",
        "On le fuit"
      ],
      "bonne_reponse": 1,
      "explication": "On le responsabilise.",
      "source": "Corrigé 2025 – Q.80",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q071",
      "theme": "analyse_transactionnelle",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment se comporter face à un SAUVEUR ?",
      "options": [
        "On le responsabilise",
        "On le rassure",
        "On le noie",
        "On l'ignore"
      ],
      "bonne_reponse": 1,
      "explication": "On le rassure.",
      "source": "Corrigé 2025 – Q.81",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q072",
      "theme": "analyse_transactionnelle",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quels sont les 3 étages du Baromètre du comportement ?",
      "options": [
        "Parent, Adulte, Enfant",
        "Conscient, Subconscient, Corps",
        "Pensée, Émotion, Action",
        "Yin, Yang, Neutre"
      ],
      "bonne_reponse": 1,
      "explication": "Conscient, Subconscient, Corps.",
      "source": "Corrigé 2025 – Q.83",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q073",
      "theme": "analyse_transactionnelle",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Les scénarios de vie sont transmis par nos parents.",
      "bonne_reponse": false,
      "explication": "Non.",
      "source": "Corrigé 2025 – Q.82",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q074",
      "theme": "analyse_transactionnelle",
      "type": "vrai_faux",
      "difficulte": 3,
      "enonce": "La compensation du complexe d'abandon est la négation du lien.",
      "bonne_reponse": true,
      "explication": "Oui.",
      "source": "Corrigé 2025 – Q.74",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q075",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qui est Hans Selye et qu'a-t-il défini ?",
      "options": [
        "Un acupuncteur chinois",
        "Le médecin qui définit le stress et le Syndrome Général d'Adaptation (1925, Prague)",
        "L'inventeur du TFH",
        "Le découvreur des méridiens"
      ],
      "bonne_reponse": 1,
      "explication": "Concept de stress et SGA (1925), alors étudiant en médecine à Prague.",
      "source": "Corrigé 2025 – Q.59",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q076",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Citez dans l'ordre les 3 niveaux de stress.",
      "options": [
        "Alarme, choc, mort",
        "Eustress (alarme), Résistance, Épuisement",
        "Léger, moyen, fort",
        "Alarme, adaptation, récupération"
      ],
      "bonne_reponse": 1,
      "explication": "SGA de Selye : Eustress/alarme → Résistance → Épuisement (pas « récupération »).",
      "source": "Corrigé 2025 – Q.75",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q077",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la solution pour rester au niveau 1 de stress ?",
      "options": [
        "Se reposer",
        "S'adapter à la situation (lutte/fuite)",
        "Prendre un médicament",
        "Ignorer"
      ],
      "bonne_reponse": 1,
      "explication": "S'adapter à la situation (lutte/fuite).",
      "source": "Corrigé 2025 – Q.76",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q078",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Que met-on en place au niveau 3 de stress (épuisement) ?",
      "options": [
        "Rien",
        "On s'épuise et, au comportement de résistance, on ajoute un évitement",
        "On guérit",
        "On se repose"
      ],
      "bonne_reponse": 1,
      "explication": "Épuisement : au comportement de résistance déjà installé s'ajoute un évitement.",
      "source": "Corrigé 2025 – Q.78",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q079",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "La réaction de lutte ou fuite est issue des travaux de :",
      "options": [
        "Hans Selye",
        "Walter Cannon (inspiré de Claude Bernard, « milieu intérieur »)",
        "Karpman",
        "Goodheart"
      ],
      "bonne_reponse": 1,
      "explication": "Walter Cannon, inspiré de Claude Bernard.",
      "source": "Protocole A1 – Lutte ou fuite",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q080",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le protocole Lutte ou Fuite, comment corrige-t-on la « fuite » ?",
      "options": [
        "Boxer l'air",
        "Effectuer des mouvements croisés",
        "Respirer en apnée",
        "Crier"
      ],
      "bonne_reponse": 1,
      "explication": "Fuite → mouvements croisés ; Lutte → boxer l'air ou un coussin.",
      "source": "Protocole A1 – Lutte ou fuite",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q081",
      "theme": "os_crane",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Parmi ces os, lequel est un os du crâne ?",
      "options": [
        "Le sternum",
        "L'occipital",
        "La clavicule",
        "Le radius"
      ],
      "bonne_reponse": 1,
      "explication": "Os du crâne : frontal, pariétal, temporal, occipital, sphénoïde…",
      "source": "Corrigé 2025 (squelette) – planche",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q082",
      "theme": "os_crane",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appellent les os de l'oreille interne (moyenne) ?",
      "options": [
        "Malléole, calcanéum, talus",
        "Marteau, enclume, étrier",
        "Sphénoïde, ethmoïde, vomer",
        "Atlas, axis, sacrum"
      ],
      "bonne_reponse": 1,
      "explication": "Marteau, enclume, étrier.",
      "source": "Corrigé 2025 (anatomie) – Q.29",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q083",
      "theme": "os_crane",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans la « constriction des os du crâne », quel point la personne tient-elle ?",
      "options": [
        "27 Rn",
        "Le 20 VG (serre-tête)",
        "21 TR",
        "C1"
      ],
      "bonne_reponse": 1,
      "explication": "La personne tient le 20 VG pendant que le praticien tient les NV de l'angle de la mâchoire.",
      "source": "Protocole A1 – Constriction des os du crâne",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q084",
      "theme": "os_crane",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "L'auto-correction de la constriction crânienne (retenir la respiration ~30 s) agit parce que :",
      "options": [
        "Elle détend les muscles",
        "Elle augmente le CO2 / prive d'O2, obligeant le cerveau à se dilater pour débloquer le crâne",
        "Elle relance le cœur",
        "Elle hydrate"
      ],
      "bonne_reponse": 1,
      "explication": "Hausse du CO2 + privation d'O2 → le cerveau se dilate et débloque le crâne.",
      "source": "Protocole A1 – Constriction des os du crâne",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q085",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "De combien de vertèbres est constituée la colonne et comment se répartissent-elles ?",
      "options": [
        "24 : 7+12+5",
        "33 : 7 cervicales, 12 thoraciques, 5 lombaires, 5 sacrées, 4 coccygiennes",
        "26 : 8+12+6",
        "30 : 10+10+10"
      ],
      "bonne_reponse": 1,
      "explication": "33 vertèbres : 7 cervicales, 12 thoraciques, 5 lombaires, 5 sacrées, 4 coccygiennes.",
      "source": "Corrigé 2025 (anatomie) – Q.2",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q086",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quels sont les trois types de muscles ?",
      "options": [
        "Striés, lisses, cardiaques",
        "Longs, courts, plats",
        "Rouges, blancs, mixtes",
        "Volontaires uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Striés (squelettiques, volontaires), lisses (involontaires), cardiaques.",
      "source": "Corrigé 2025 (anatomie) – Q.4",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q087",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appelle l'extrémité d'un os long, recouverte de cartilage ?",
      "options": [
        "Diaphyse",
        "Épiphyse",
        "Périoste",
        "Métaphyse"
      ],
      "bonne_reponse": 1,
      "explication": "Épiphyse = extrémité ; diaphyse = partie intermédiaire ; métaphyse = jonction ; périoste = membrane.",
      "source": "Corrigé 2025 (anatomie) – Q.1",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q088",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "La moelle épinière est protégée par la colonne vertébrale.",
      "bonne_reponse": true,
      "explication": "Vrai.",
      "source": "Corrigé 2025 (anatomie) – Q.10",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q089",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Les deux hémisphères cérébraux ne communiquent pas entre eux.",
      "bonne_reponse": false,
      "explication": "Faux : ils communiquent via le corps calleux.",
      "source": "Corrigé 2025 (anatomie) – Q.7",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q090",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Il existe 12 paires de nerfs crâniens.",
      "bonne_reponse": true,
      "explication": "Vrai.",
      "source": "Corrigé 2025 (anatomie) – Q.11",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q091",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Le cœur est composé de :",
      "options": [
        "2 oreillettes et 1 ventricule",
        "2 oreillettes (atriums) et 2 ventricules",
        "1 oreillette et 2 ventricules",
        "4 ventricules"
      ],
      "bonne_reponse": 1,
      "explication": "2 oreillettes (atriums) + 2 ventricules.",
      "source": "Corrigé 2025 (anatomie) – Q.13",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q092",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "La contraction des ventricules qui expulse le sang dans les artères s'appelle :",
      "options": [
        "La diastole",
        "La systole",
        "La bricole",
        "La révolution"
      ],
      "bonne_reponse": 1,
      "explication": "La systole.",
      "source": "Corrigé 2025 (anatomie) – Q.14",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q093",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "De combien de lobes est constitué le poumon droit ?",
      "options": [
        "2 lobes",
        "3 lobes",
        "1 lobe",
        "4 lobes"
      ],
      "bonne_reponse": 1,
      "explication": "3 lobes (le gauche est plus petit pour laisser la place au cœur).",
      "source": "Corrigé 2025 (anatomie) – Q.16 et Q.17",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q094",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans quel conduit la bile stockée se déverse-t-elle lors de la digestion ?",
      "options": [
        "L'estomac",
        "Le cholédoque",
        "Le cæcum",
        "L'uretère"
      ],
      "bonne_reponse": 1,
      "explication": "Le cholédoque.",
      "source": "Corrigé 2025 (anatomie) – Q.19",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q095",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelles hormones antagonistes le pancréas produit-il ?",
      "options": [
        "Adrénaline et cortisol",
        "Glucagon et insuline",
        "Insuline et thyroxine",
        "Glucagon et adrénaline"
      ],
      "bonne_reponse": 1,
      "explication": "Glucagon et insuline (régulation de la glycémie).",
      "source": "Corrigé 2025 (anatomie) – Q.34",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q096",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle glande endocrine régule le rythme jour/nuit ?",
      "options": [
        "L'hypophyse",
        "L'épiphyse (glande pinéale)",
        "La thyroïde",
        "Les surrénales"
      ],
      "bonne_reponse": 1,
      "explication": "L'épiphyse (glande pinéale).",
      "source": "Corrigé 2025 (anatomie) – Q.24",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q097",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans quel ordre la digestion sollicite-t-elle les organes ?",
      "options": [
        "Gros intestin → intestin grêle → estomac",
        "Estomac → intestin grêle → gros intestin",
        "Estomac → gros intestin → intestin grêle",
        "Intestin grêle → gros intestin → estomac"
      ],
      "bonne_reponse": 1,
      "explication": "Estomac → intestin grêle → gros intestin.",
      "source": "Corrigé 2025 (anatomie) – Q.31",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q098",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quel organe fabrique la bile ?",
      "options": [
        "La vésicule biliaire",
        "Le foie",
        "Le pancréas",
        "La rate"
      ],
      "bonne_reponse": 1,
      "explication": "Le foie (la vésicule la stocke).",
      "source": "Corrigé 2025 (anatomie) – Q.35",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q099",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où sont concentrées les cellules du Fuseau Neuro-Musculaire (FNM) et comment renforcer ?",
      "options": [
        "Aux tendons ; éloigner les insertions",
        "Dans le ventre du muscle ; pressions fermes du centre vers les extrémités",
        "Sur la peau ; effleurer",
        "Aux articulations ; mobiliser"
      ],
      "bonne_reponse": 1,
      "explication": "FNM dans le ventre du muscle ; pressions du centre vers les extrémités pour renforcer.",
      "source": "Corrigé 2025 – Q.22",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q100",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où sont les récepteurs de l'Organe Tendineux de Golgi et comment renforcer un muscle ?",
      "options": [
        "Dans le ventre ; pincer",
        "Aux extrémités/tendons ; rapprocher origines et insertions vers le centre",
        "Sur les fascias ; étirer",
        "Aux orteils ; masser"
      ],
      "bonne_reponse": 1,
      "explication": "Golgi aux tendons ; rapprocher origines-insertions pour renforcer, éloigner pour diminuer le tonus.",
      "source": "Corrigé 2025 – Q.23",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q101",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Parmi ces techniques, laquelle est une technique de SÉDATION ?",
      "options": [
        "Rapprocher origine et insertion",
        "Tracer un méridien dans le sens inverse (sauf le méridien du Cœur)",
        "Masser les NLY",
        "Renforcer le couplé"
      ],
      "bonne_reponse": 1,
      "explication": "Tracer le méridien à l'envers (sauf Cœur), pinch FNM, tapoter un PNV, plumer un PNL, points d'acupression.",
      "source": "Corrigé 2025 – Q.41",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q102",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelles corrections permettent de renforcer un muscle représentant un méridien ?",
      "options": [
        "Le repos",
        "Points réflexes neuro-émotionnels, Cross Crawl, propriocepteurs",
        "Le massage profond",
        "Les étirements"
      ],
      "bonne_reponse": 1,
      "explication": "Points neuro-émotionnels, Cross Crawl, propriocepteurs.",
      "source": "Corrigé 2025 – Q.57",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q103",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Pour une douleur chronique, quelle technique et quel point d'acupuncture ?",
      "options": [
        "Brassage au point d'alarme du méridien",
        "Tapotement du 1er point de tonification du méridien équilibré",
        "Parcourir le méridien depuis l'extrémité la plus éloignée",
        "Sédation au point Luo du méridien couple"
      ],
      "bonne_reponse": 1,
      "explication": "Tapotement ; on tapote le 1er point de tonification du méridien que l'on équilibre.",
      "source": "Corrigé 2025 – Q.55",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q104",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Pour une douleur RÉCENTE, quelle technique utilise-t-on ?",
      "options": [
        "Tapotement du 1er point de tonification du méridien équilibré",
        "Parcourir le méridien impliqué depuis l'extrémité la plus éloignée ; réévaluer ensuite",
        "Tracer le méridien en sens inverse (sédation)",
        "Pinch sur le fuseau neuro-musculaire"
      ],
      "bonne_reponse": 1,
      "explication": "Parcourir le méridien impliqué depuis l'extrémité la plus éloignée, en tenant les points douloureux.",
      "source": "Corrigé 2025 – Q.35",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q105",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle technique supplémentaire équilibre les muscles abdominaux ?",
      "options": [
        "Cross Crawl intégré après équilibration",
        "Écarter le cuir chevelu pour solliciter le LCR (cérébro-spinale)",
        "Brassage des réflexes neuro-lymphatiques abdominaux",
        "Tapotement des points Shu du dos"
      ],
      "bonne_reponse": 1,
      "explication": "Technique cérébro-spinale : après équilibration, marcher, re-tester, écarter le cuir chevelu pour solliciter le LCR.",
      "source": "Corrigé 2025 – Q.33",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q106",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle technique sert à retenir des informations au sujet d'un muscle ?",
      "options": [
        "Le brassage",
        "La mise en circuit (MC)",
        "Le pinch",
        "Le TL"
      ],
      "bonne_reponse": 1,
      "explication": "MC = mise en circuit : enregistrer l'info testée dans le corps tant que les jambes restent écartées (jusqu'à pieds joints).",
      "source": "Cours A1 — Affirmation par méridien + mise en circuit (PDF)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q107",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le point d'allergie testé dans le protocole Allergie est :",
      "options": [
        "27 Rn",
        "21 TR",
        "20 VG",
        "1 V"
      ],
      "bonne_reponse": 1,
      "explication": "On teste le point d'allergie 21 TR.",
      "source": "Protocole A1 – Allergie",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q108",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le protocole Os Hyoïde, quelle correction fait-on quand une posture est Tf ?",
      "options": [
        "Masser le point Shu-Trait associé",
        "Faire déglutir 3 fois en maintenant la posture trouvée faible",
        "Tapoter le méridien du Cœur",
        "Étirer les muscles supra-hyoïdiens"
      ],
      "bonne_reponse": 1,
      "explication": "Déglutir 3 fois dans la position trouvée faible.",
      "source": "Protocole A1 – Os hyoïde",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q109",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'os hyoïde est lié à quelle problématique ?",
      "options": [
        "La vision",
        "L'expression orale (ce qu'on veut, peut ou n'ose pas exprimer)",
        "La digestion",
        "L'équilibre"
      ],
      "bonne_reponse": 1,
      "explication": "L'os hyoïde (qui suspend la langue) concerne l'expression orale.",
      "source": "Protocole A1 – Os hyoïde",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q110",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Les cloaques révèlent un problème AIGU lorsqu'ils sont :",
      "options": [
        "Postérieurs (à l'arrière)",
        "Antérieurs (à l'avant)",
        "Latéraux",
        "Croisés"
      ],
      "bonne_reponse": 1,
      "explication": "Antérieur = problème aigu ; postérieur = problème chronique.",
      "source": "Protocole A1 – Cloaques",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q111",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La technique cérébro-spinale agit surtout sur :",
      "options": [
        "Le sang",
        "La circulation du liquide céphalo-rachidien (LCR)",
        "Les fascias",
        "Les méridiens"
      ],
      "bonne_reponse": 1,
      "explication": "Elle favorise la circulation du LCR (mobilité des os du crâne).",
      "source": "Protocole A1 – Technique cérébro-spinale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q112",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans le protocole Fixation, quelles glandes sont impliquées ?",
      "options": [
        "Thyroïde et surrénales",
        "Épiphyse et hypophyse (au-dessus du sphénoïde)",
        "Pancréas et foie",
        "Rate et thymus"
      ],
      "bonne_reponse": 1,
      "explication": "Épiphyse et hypophyse, situées au-dessus de l'os sphénoïde.",
      "source": "Protocole A1 – Fixation",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q113",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment teste-t-on la Fixation ?",
      "options": [
        "Yeux fermés",
        "Faire regarder un papier noir et tester (si Tf, corriger)",
        "Compter",
        "Marcher"
      ],
      "bonne_reponse": 1,
      "explication": "Regarder un papier noir + tester ; correction : lumière blanche sur la glabelle.",
      "source": "Protocole A1 – Fixation",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q114",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "L'Aire Commune d'Intégration (ACI) se situe dans :",
      "options": [
        "Le lobe frontal droit",
        "La partie postérieure du lobe temporal dominant (hémisphère gauche)",
        "Le cervelet",
        "Le tronc cérébral"
      ],
      "bonne_reponse": 1,
      "explication": "Partie postérieure du lobe temporal dominant (gauche) ; rôle de survie.",
      "source": "Protocole A1 – ACI",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q115",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Selon l'ACI, chez une personne en souffrance chronique, qu'est-ce qui alerte ?",
      "options": [
        "La douleur elle-même",
        "La peur de la douleur (le changement est perçu comme un danger)",
        "La fatigue",
        "Le froid"
      ],
      "bonne_reponse": 1,
      "explication": "Ce n'est pas la douleur mais la peur de la douleur ; le changement (guérison) est vécu comme danger.",
      "source": "Protocole A1 – ACI",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q116",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le Réflexe respiratoire, quelle est la réponse ATTENDUE en apnée (retenir sa respiration) ?",
      "options": [
        "TF",
        "Tf",
        "Pas de réponse",
        "Douleur"
      ],
      "bonne_reponse": 1,
      "explication": "Respiration normale → TF ; apnée → Tf. Si les réponses sont inversées, on corrige.",
      "source": "Protocole A1 – Réflexe respiratoire",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q117",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans le protocole Style de vie, quelle est la « règle des 4 D » ?",
      "options": [
        "Dormir, Digérer, Détendre, Décider",
        "Divorce, Déménagement, Démission, Discussion",
        "Douleur, Doute, Découragement, Déni",
        "Diète, Détox, Drainage, Dynamisme"
      ],
      "bonne_reponse": 1,
      "explication": "4 D : Divorce, Déménagement, Démission, Discussion.",
      "source": "Protocole A1 – Style de vie",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q118",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le protocole Pouls chinois, quel muscle teste-t-on ?",
      "options": [
        "Le sus-épineux",
        "Le quadriceps",
        "Le grand dorsal",
        "Le psoas"
      ],
      "bonne_reponse": 1,
      "explication": "On teste le quadriceps (appui léger puis fort sur les positions du poignet).",
      "source": "Protocole A1 – Pouls chinois",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q119",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Que mettent en évidence les pouls chinois ?",
      "options": [
        "Un excès récent",
        "Un excès d'énergie profond et chronique (déséquilibre qui perdure)",
        "Une carence en fer",
        "Une déshydratation"
      ],
      "bonne_reponse": 1,
      "explication": "Un excès profond et chronique, un déséquilibre qui perdure.",
      "source": "Corrigé 2025 – Q.88",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q120",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le protocole Fleurs de Bach, combien d'essences au maximum avant de demander les prioritaires ?",
      "options": [
        "3",
        "8",
        "12",
        "Aucune limite"
      ],
      "bonne_reponse": 1,
      "explication": "On ne va pas au-delà de 8 essences, sinon on demande les prioritaires (1 goutte sous la langue).",
      "source": "Protocole A1 – Fleurs de Bach",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q121",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans le Tapotement du temporal, le cerveau GAUCHE (logique) reçoit :",
      "options": [
        "Une double négation",
        "Une formule positive (« Je me porte très bien sans… »)",
        "Aucune phrase",
        "Un chant"
      ],
      "bonne_reponse": 1,
      "explication": "Cerveau gauche → formule positive ; cerveau droit (gestalt) → double négation.",
      "source": "Protocole A1 – Tapotement du temporal",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q122",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "En réactivité musculaire, quelle paire désigne le muscle sur-sollicité et celui qui ne s'engage pas ?",
      "options": [
        "Agoniste / antagoniste",
        "Réacteur / réactif",
        "Primaire / secondaire",
        "Fort / faible"
      ],
      "bonne_reponse": 1,
      "explication": "Réacteur = fait tout le travail ; réactif = réagit (ne fait rien).",
      "source": "Protocole A1 – Réactivité musculaire",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q123",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le protocole Cicatrice, sur quoi la personne se concentre-t-elle pendant la correction ?",
      "options": [
        "Sa respiration uniquement",
        "L'émotion liée, en tenant ses éminences frontales",
        "Un objectif futur",
        "Rien"
      ],
      "bonne_reponse": 1,
      "explication": "On tient les éminences frontales en se concentrant sur l'émotion retenue (effleurement, huile, figures en 8).",
      "source": "Protocole A1 – Réintégration des cicatrices",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q124",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La LSE Passée sert principalement à :",
      "options": [
        "Préparer un examen futur",
        "Désamorcer la charge émotionnelle d'un souvenir/traumatisme passé",
        "Renforcer un muscle",
        "Tester un aliment"
      ],
      "bonne_reponse": 1,
      "explication": "Libérer les effets émotionnels d'expériences passées (lieu sécurisant, points LSE).",
      "source": "Protocole A1 – LSE passée",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q125",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Donnez un exemple de situation où l'on utilise la LSE pour le FUTUR.",
      "options": [
        "Un deuil",
        "Un examen, un entretien d'embauche, un événement",
        "Une cicatrice",
        "Une allergie"
      ],
      "bonne_reponse": 1,
      "explication": "Examen, entretien d'embauche, événements à venir.",
      "source": "Corrigé 2025 – Q.34",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q126",
      "theme": "traits_chakras",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans les Traits de Structure/Fonction, des pommettes proéminentes signifient :",
      "options": [
        "Style chef/dominant",
        "Goût de l'aventure",
        "Grande sensibilité",
        "Esprit analytique"
      ],
      "bonne_reponse": 1,
      "explication": "Pommettes proéminentes = goût de l'aventure.",
      "source": "Corrigé 2025 – Q.84",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q127",
      "theme": "traits_chakras",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Des sourcils à angles aigus indiquent :",
      "options": [
        "Goût de l'aventure",
        "Style productif, chef, dominant",
        "Timidité",
        "Créativité"
      ],
      "bonne_reponse": 1,
      "explication": "Sourcils à angles aigus = style productif/chef/dominant.",
      "source": "Corrigé 2025 – Q.84",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q128",
      "theme": "traits_chakras",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel est le nom et la couleur du 4e chakra ?",
      "options": [
        "Chakra racine, rouge",
        "Chakra du cœur/amour, vert",
        "Chakra de la gorge, bleu",
        "Chakra solaire, jaune"
      ],
      "bonne_reponse": 1,
      "explication": "4e chakra = cœur/amour, couleur verte.",
      "source": "Corrigé 2025 – Q.85",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q129",
      "theme": "traits_chakras",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quelle glande endocrine associe-t-on le chakra de la gorge ?",
      "options": [
        "L'épiphyse",
        "La thyroïde",
        "Le pancréas",
        "Les surrénales"
      ],
      "bonne_reponse": 1,
      "explication": "Chakra de la gorge → thyroïde.",
      "source": "Corrigé 2025 (anatomie) – Q.33",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q130",
      "theme": "traits_chakras",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Citez un mouvement d'Éducation Kinesthésique pour améliorer le focus.",
      "options": [
        "Le pont",
        "La chouette (ou activation du bras, flexion du pied, pompage du mollet…)",
        "Le cobra",
        "La planche"
      ],
      "bonne_reponse": 1,
      "explication": "La chouette, l'activation du bras, la flexion du pied, le pompage du mollet, la glissade, l'enracinement.",
      "source": "Corrigé 2025 – Q.87",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q131",
      "theme": "neurolymphatiques",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Où se situe le point neuro-lymphatique ANTÉRIEUR de l'Estomac ?",
      "options": [
        "À 2,5 cm au-dessus du nombril",
        "Sur la partie gauche du corps, entre la 5e et la 6e côte, sous le sein",
        "Bord supérieur du pubis",
        "De part et d'autre de L5"
      ],
      "bonne_reponse": 1,
      "explication": "NLY antérieur Estomac : partie gauche, entre 5e et 6e côte, sous le sein (postérieur : de chaque côté de la colonne, D5-D6).",
      "source": "Planche NLY (protocole Allergie)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q132",
      "theme": "neurolymphatiques",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Où se situe le point neuro-lymphatique ANTÉRIEUR du Rein ?",
      "options": [
        "Entre la 7e et la 8e côte",
        "À 2,5 cm au-dessus et à côté du nombril",
        "Sous le sein gauche",
        "De part et d'autre de L5"
      ],
      "bonne_reponse": 1,
      "explication": "NLY antérieur Rein : à 2,5 cm au-dessus et à côté du nombril (postérieur : entre D12 et L1, sous la dernière côte).",
      "source": "Planche NLY (protocole Allergie)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q133",
      "theme": "neurolymphatiques",
      "type": "association",
      "difficulte": 3,
      "enonce": "Associez le point neuro-lymphatique ANTÉRIEUR à son méridien.",
      "paires": [
        [
          "Estomac",
          "Entre 5e et 6e côte, sous le sein (gauche)"
        ],
        [
          "Rate",
          "Entre 7e et 8e côte, près du bord (gauche)"
        ],
        [
          "Rein",
          "2,5 cm au-dessus et à côté du nombril"
        ],
        [
          "Vessie",
          "À côté du nombril, bord supérieur du pubis"
        ]
      ],
      "explication": "Emplacements antérieurs des NLY (planches du protocole Allergie).",
      "source": "Planche NLY (protocole Allergie)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q134",
      "theme": "protocoles_a1",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Lors de l'élévation du seuil de tolérance (allergie), il faut penser à se laver les mains entre chaque rajout d'allergène.",
      "bonne_reponse": true,
      "explication": "Oui, on se lave les mains entre chaque ajout ; l'opération se fait 7 fois maximum.",
      "source": "Protocole A1 – Allergie (PDF)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q135",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de fois maximum peut-on répéter l'opération d'élévation du seuil de tolérance (allergie) ?",
      "options": [
        "3 fois",
        "7 fois",
        "10 fois",
        "Autant que nécessaire"
      ],
      "bonne_reponse": 1,
      "explication": "7 fois maximum.",
      "source": "Protocole A1 – Allergie (PDF)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q136",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans le déblocage de fascia, une tension ISOMÉTRIQUE correspond à :",
      "options": [
        "Le muscle se raccourcit en gardant une tension stable",
        "Le muscle génère de la tension SANS se raccourcir",
        "Le muscle s'allonge",
        "Le muscle se relâche"
      ],
      "bonne_reponse": 1,
      "explication": "Isométrique = tension sans raccourcissement ; isotonique = raccourcissement avec tension stable.",
      "source": "Protocole A1 – Déblocage de fascia",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q137",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Comment libère-t-on un fascia bloqué (muscle Tf en pleine extension) ?",
      "options": [
        "On masse les NLY",
        "On tire le fascia fermement dans le sens des fibres puis perpendiculairement",
        "On pince le ventre du muscle",
        "On l'étire 30 s"
      ],
      "bonne_reponse": 1,
      "explication": "Tirer le fascia fermement dans le sens des fibres musculaires et perpendiculairement.",
      "source": "Protocole A1 – Déblocage de fascia",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q138",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le protocole Énergie de la polarité du corps, quel muscle teste-t-on ?",
      "options": [
        "Le sus-épineux",
        "Le quadriceps (doigts réunis = TF si polarités équilibrées)",
        "Le grand dorsal",
        "Le psoas"
      ],
      "bonne_reponse": 1,
      "explication": "On teste le quadriceps pendant que la personne réunit l'extrémité de ses doigts.",
      "source": "Protocole A1 – Énergie de la polarité du corps",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q139",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans les figures en 8 (cicatrices), l'échelle de profondeur va de :",
      "options": [
        "0 = peau → 10 = os",
        "0 = os → 10 = peau",
        "1 à 5",
        "Superficiel à profond sans échelle"
      ],
      "bonne_reponse": 1,
      "explication": "0 = os → 10 = peau ; on cherche la profondeur à travailler avec un MI.",
      "source": "Protocole A1 – Réintégration des cicatrices (PDF)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q140",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Pour une cicatrice interne inaccessible (épisiotomie, déchirure…), quelle méthode utilise-t-on ?",
      "options": [
        "On l'ignore",
        "La méthode de transfert : la personne se griffe le bras ou la jambe avec son ongle",
        "On masse le nombril",
        "On applique de l'huile"
      ],
      "bonne_reponse": 1,
      "explication": "Méthode de transfert : la personne se griffe le bras/jambe (« transfert » de la cicatrice réelle) pour rétablir le flux énergétique.",
      "source": "Protocole A1 – Réintégration des cicatrices (PDF)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q141",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans le travail sur une phobie / comportement compulsif, sur quoi fait-on un TL après avoir collecté les infos (CEN + BC) ?",
      "options": [
        "Le nombril",
        "Les paupières (puis mise en circuit du Tf)",
        "Le sternum",
        "Les tempes"
      ],
      "bonne_reponse": 1,
      "explication": "TL sur les paupières, puis mise en circuit ; RA causale pour trouver l'âge.",
      "source": "Protocole – Comportements compulsifs / phobie",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q142",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans le travail sur l'addiction, quel suivi à domicile encourage-t-on pour consolider ?",
      "options": [
        "Boire plus d'eau",
        "Le tapotement quotidien du thymus / 21 Rte",
        "Marcher 30 min",
        "Tenir un journal"
      ],
      "bonne_reponse": 1,
      "explication": "Tapotement quotidien du thymus / 21 Rte à gauche pour consolider.",
      "source": "Protocole – Addiction",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q143",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Les Élixirs de Rose 2 (Pérélandra) corrigent quelle colonne des modes ?",
      "options": [
        "Électricité",
        "Structure",
        "Émotion",
        "Énergie"
      ],
      "bonne_reponse": 1,
      "explication": "Les Rose 2 corrigent la colonne « structure » ; les Soul Ray corrigent « électricité ».",
      "source": "Protocole – Élixirs de Rose 2 / Soul Ray",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q144",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Les Élixirs Soul Ray corrigent quelle colonne des modes ?",
      "options": [
        "Structure",
        "Électricité",
        "Émotion",
        "Matériel"
      ],
      "bonne_reponse": 1,
      "explication": "Les Soul Ray corrigent la colonne « électricité ».",
      "source": "Protocole – Soul Ray Essences",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q145",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans les Cartes visuelles de motivation, que représente la carte 1 ?",
      "options": [
        "La solution",
        "La problématique (point de départ à reconnaître)",
        "Le vécu avec l'objectif",
        "Le futur"
      ],
      "bonne_reponse": 1,
      "explication": "Carte 1 = problématique ; carte 2 = vécu/ressenti avec l'objectif ; carte 3 (+4) = solution.",
      "source": "Protocole – Cartes visuelles de motivation",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q146",
      "theme": "protocoles_avances",
      "type": "association",
      "difficulte": 2,
      "enonce": "Équilibration du passé : associez l'élément à son émotion dominante.",
      "paires": [
        [
          "Bois",
          "Colère"
        ],
        [
          "Eau",
          "Peur"
        ],
        [
          "Feu",
          "Joie"
        ],
        [
          "Métal",
          "Tristesse"
        ],
        [
          "Terre",
          "Rumination"
        ]
      ],
      "explication": "Bois=colère, Eau=peur, Feu=joie, Métal=tristesse, Terre=rumination.",
      "source": "Protocole – Équilibration du passé",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q147",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel muscle est utilisé tout du long de l'Intégration des polarités gauche/droite du corps ?",
      "options": [
        "Le quadriceps",
        "Le tenseur du fascia lata",
        "Le grand dorsal",
        "Le psoas"
      ],
      "bonne_reponse": 1,
      "explication": "Le tenseur du fascia lata ; on observe aussi l'asymétrie de longueur des jambes.",
      "source": "Protocole – Intégration des polarités G/D",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q148",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Poumon (P) ?",
      "options": [
        "Aisselle",
        "Coccyx",
        "Thorax (sous la clavicule)",
        "Sous l'œil"
      ],
      "bonne_reponse": 2,
      "explication": "Poumon : début « Thorax (sous la clavicule) », fin « Pouce ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q149",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Poumon (P) ?",
      "options": [
        "Côté du thorax (sous l'aisselle)",
        "Pouce",
        "Sous la clavicule",
        "Thorax (hypochondre, 14e côte)"
      ],
      "bonne_reponse": 1,
      "explication": "Poumon : début « Thorax (sous la clavicule) », fin « Pouce ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q150",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Gros Intestin (GI) ?",
      "options": [
        "Aisselle",
        "Index",
        "Gros orteil",
        "Plante du pied"
      ],
      "bonne_reponse": 1,
      "explication": "Gros Intestin : début « Index », fin « Aile du nez ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q151",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Gros Intestin (GI) ?",
      "options": [
        "4e orteil",
        "Petit doigt (auriculaire)",
        "Majeur",
        "Aile du nez"
      ],
      "bonne_reponse": 3,
      "explication": "Gros Intestin : début « Index », fin « Aile du nez ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q152",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Estomac (E) ?",
      "options": [
        "Index",
        "Angle interne de l'œil",
        "Sous l'œil",
        "Thorax (sous la clavicule)"
      ],
      "bonne_reponse": 2,
      "explication": "Estomac : début « Sous l'œil », fin « 2e orteil ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q153",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Estomac (E) ?",
      "options": [
        "Thorax (hypochondre, 14e côte)",
        "Lèvre supérieure (gencive)",
        "Pouce",
        "2e orteil"
      ],
      "bonne_reponse": 3,
      "explication": "Estomac : début « Sous l'œil », fin « 2e orteil ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q154",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Rate/Pancréas (Rte) ?",
      "options": [
        "Gros orteil",
        "Petit doigt (auriculaire)",
        "Aisselle",
        "Index"
      ],
      "bonne_reponse": 0,
      "explication": "Rate/Pancréas : début « Gros orteil », fin « Côté du thorax (sous l'aisselle) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q155",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Rate/Pancréas (Rte) ?",
      "options": [
        "Côté du thorax (sous l'aisselle)",
        "Sous la lèvre inférieure",
        "Petit doigt (auriculaire)",
        "2e orteil"
      ],
      "bonne_reponse": 0,
      "explication": "Rate/Pancréas : début « Gros orteil », fin « Côté du thorax (sous l'aisselle) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q156",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Cœur (C) ?",
      "options": [
        "Plante du pied",
        "Annulaire",
        "Aisselle",
        "Sous l'œil"
      ],
      "bonne_reponse": 2,
      "explication": "Cœur : début « Aisselle », fin « Petit doigt (auriculaire) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q157",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Cœur (C) ?",
      "options": [
        "Petit doigt (auriculaire)",
        "Petit orteil (5e)",
        "Aile du nez",
        "Sous la lèvre inférieure"
      ],
      "bonne_reponse": 0,
      "explication": "Cœur : début « Aisselle », fin « Petit doigt (auriculaire) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q158",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Intestin Grêle (IG) ?",
      "options": [
        "Gros orteil",
        "Coccyx",
        "Angle externe de l'œil",
        "Petit doigt (auriculaire)"
      ],
      "bonne_reponse": 3,
      "explication": "Intestin Grêle : début « Petit doigt (auriculaire) », fin « Devant l'oreille ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q159",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Intestin Grêle (IG) ?",
      "options": [
        "4e orteil",
        "Devant l'oreille",
        "Sous la clavicule",
        "Majeur"
      ],
      "bonne_reponse": 1,
      "explication": "Intestin Grêle : début « Petit doigt (auriculaire) », fin « Devant l'oreille ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q160",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Vessie (V) ?",
      "options": [
        "Aisselle",
        "Index",
        "Sous l'œil",
        "Angle interne de l'œil"
      ],
      "bonne_reponse": 3,
      "explication": "Vessie : début « Angle interne de l'œil », fin « Petit orteil (5e) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q161",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Vessie (V) ?",
      "options": [
        "Majeur",
        "Lèvre supérieure (gencive)",
        "Sous la lèvre inférieure",
        "Petit orteil (5e)"
      ],
      "bonne_reponse": 3,
      "explication": "Vessie : début « Angle interne de l'œil », fin « Petit orteil (5e) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q162",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Rein (Rn) ?",
      "options": [
        "Coccyx",
        "Thorax (sous la clavicule)",
        "Périnée",
        "Plante du pied"
      ],
      "bonne_reponse": 3,
      "explication": "Rein : début « Plante du pied », fin « Sous la clavicule ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q163",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Rein (Rn) ?",
      "options": [
        "Petit orteil (5e)",
        "Petit doigt (auriculaire)",
        "Majeur",
        "Sous la clavicule"
      ],
      "bonne_reponse": 3,
      "explication": "Rein : début « Plante du pied », fin « Sous la clavicule ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q164",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Maître Cœur (MC) ?",
      "options": [
        "Thorax (près du mamelon)",
        "Plante du pied",
        "Sous l'œil",
        "Aisselle"
      ],
      "bonne_reponse": 0,
      "explication": "Maître Cœur : début « Thorax (près du mamelon) », fin « Majeur ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q165",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Maître Cœur (MC) ?",
      "options": [
        "Aile du nez",
        "Majeur",
        "Côté du thorax (sous l'aisselle)",
        "Sous la clavicule"
      ],
      "bonne_reponse": 1,
      "explication": "Maître Cœur : début « Thorax (près du mamelon) », fin « Majeur ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q166",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Triple Réchauffeur (TR) ?",
      "options": [
        "Coccyx",
        "Plante du pied",
        "Annulaire",
        "Aisselle"
      ],
      "bonne_reponse": 2,
      "explication": "Triple Réchauffeur : début « Annulaire », fin « Extrémité du sourcil ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q167",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Triple Réchauffeur (TR) ?",
      "options": [
        "Extrémité du sourcil",
        "Petit orteil (5e)",
        "Pouce",
        "Majeur"
      ],
      "bonne_reponse": 0,
      "explication": "Triple Réchauffeur : début « Annulaire », fin « Extrémité du sourcil ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q168",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Vésicule Biliaire (VB) ?",
      "options": [
        "Thorax (sous la clavicule)",
        "Sous l'œil",
        "Angle externe de l'œil",
        "Aisselle"
      ],
      "bonne_reponse": 2,
      "explication": "Vésicule Biliaire : début « Angle externe de l'œil », fin « 4e orteil ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q169",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Vésicule Biliaire (VB) ?",
      "options": [
        "4e orteil",
        "Lèvre supérieure (gencive)",
        "Petit doigt (auriculaire)",
        "Devant l'oreille"
      ],
      "bonne_reponse": 0,
      "explication": "Vésicule Biliaire : début « Angle externe de l'œil », fin « 4e orteil ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q170",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Foie (F) ?",
      "options": [
        "Petit doigt (auriculaire)",
        "Aisselle",
        "Gros orteil",
        "Thorax (près du mamelon)"
      ],
      "bonne_reponse": 2,
      "explication": "Foie : début « Gros orteil », fin « Thorax (hypochondre, 14e côte) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q171",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Foie (F) ?",
      "options": [
        "Aile du nez",
        "Extrémité du sourcil",
        "Thorax (hypochondre, 14e côte)",
        "Pouce"
      ],
      "bonne_reponse": 2,
      "explication": "Foie : début « Gros orteil », fin « Thorax (hypochondre, 14e côte) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q172",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Vaisseau Conception (VC) ?",
      "options": [
        "Gros orteil",
        "Thorax (sous la clavicule)",
        "Périnée",
        "Sous l'œil"
      ],
      "bonne_reponse": 2,
      "explication": "Vaisseau Conception : début « Périnée », fin « Sous la lèvre inférieure ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q173",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Vaisseau Conception (VC) ?",
      "options": [
        "Sous la lèvre inférieure",
        "Majeur",
        "4e orteil",
        "Sous la clavicule"
      ],
      "bonne_reponse": 0,
      "explication": "Vaisseau Conception : début « Périnée », fin « Sous la lèvre inférieure ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q174",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où COMMENCE le méridien du Vaisseau Gouverneur (VG) ?",
      "options": [
        "Angle interne de l'œil",
        "Aisselle",
        "Périnée",
        "Coccyx"
      ],
      "bonne_reponse": 3,
      "explication": "Vaisseau Gouverneur : début « Coccyx », fin « Lèvre supérieure (gencive) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q175",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où SE TERMINE le méridien du Vaisseau Gouverneur (VG) ?",
      "options": [
        "2e orteil",
        "Lèvre supérieure (gencive)",
        "Majeur",
        "Pouce"
      ],
      "bonne_reponse": 1,
      "explication": "Vaisseau Gouverneur : début « Coccyx », fin « Lèvre supérieure (gencive) ».",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q176",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Poumon (P) ?",
      "options": [
        "Gros orteil → Thorax (hypochondre, 14e côte)",
        "Angle interne de l'œil → Petit orteil (5e)",
        "Thorax (sous la clavicule) → Pouce",
        "Petit doigt (auriculaire) → Devant l'oreille"
      ],
      "bonne_reponse": 2,
      "explication": "Poumon : Thorax (sous la clavicule) → Pouce.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q177",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Gros Intestin (GI) ?",
      "options": [
        "Angle externe de l'œil → 4e orteil",
        "Thorax (sous la clavicule) → Pouce",
        "Index → Aile du nez",
        "Aisselle → Petit doigt (auriculaire)"
      ],
      "bonne_reponse": 2,
      "explication": "Gros Intestin : Index → Aile du nez.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q178",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Estomac (E) ?",
      "options": [
        "Sous l'œil → 2e orteil",
        "Annulaire → Extrémité du sourcil",
        "Gros orteil → Thorax (hypochondre, 14e côte)",
        "Thorax (sous la clavicule) → Pouce"
      ],
      "bonne_reponse": 0,
      "explication": "Estomac : Sous l'œil → 2e orteil.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q179",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Rate/Pancréas (Rte) ?",
      "options": [
        "Plante du pied → Sous la clavicule",
        "Gros orteil → Côté du thorax (sous l'aisselle)",
        "Gros orteil → Thorax (hypochondre, 14e côte)",
        "Sous l'œil → 2e orteil"
      ],
      "bonne_reponse": 1,
      "explication": "Rate/Pancréas : Gros orteil → Côté du thorax (sous l'aisselle).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q180",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Cœur (C) ?",
      "options": [
        "Aisselle → Petit doigt (auriculaire)",
        "Angle interne de l'œil → Petit orteil (5e)",
        "Petit doigt (auriculaire) → Devant l'oreille",
        "Angle externe de l'œil → 4e orteil"
      ],
      "bonne_reponse": 0,
      "explication": "Cœur : Aisselle → Petit doigt (auriculaire).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q181",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Intestin Grêle (IG) ?",
      "options": [
        "Gros orteil → Côté du thorax (sous l'aisselle)",
        "Index → Aile du nez",
        "Petit doigt (auriculaire) → Devant l'oreille",
        "Aisselle → Petit doigt (auriculaire)"
      ],
      "bonne_reponse": 2,
      "explication": "Intestin Grêle : Petit doigt (auriculaire) → Devant l'oreille.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q182",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Vessie (V) ?",
      "options": [
        "Plante du pied → Sous la clavicule",
        "Petit doigt (auriculaire) → Devant l'oreille",
        "Gros orteil → Côté du thorax (sous l'aisselle)",
        "Angle interne de l'œil → Petit orteil (5e)"
      ],
      "bonne_reponse": 3,
      "explication": "Vessie : Angle interne de l'œil → Petit orteil (5e).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q183",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Rein (Rn) ?",
      "options": [
        "Annulaire → Extrémité du sourcil",
        "Angle interne de l'œil → Petit orteil (5e)",
        "Gros orteil → Côté du thorax (sous l'aisselle)",
        "Plante du pied → Sous la clavicule"
      ],
      "bonne_reponse": 3,
      "explication": "Rein : Plante du pied → Sous la clavicule.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q184",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Maître Cœur (MC) ?",
      "options": [
        "Angle interne de l'œil → Petit orteil (5e)",
        "Petit doigt (auriculaire) → Devant l'oreille",
        "Thorax (sous la clavicule) → Pouce",
        "Thorax (près du mamelon) → Majeur"
      ],
      "bonne_reponse": 3,
      "explication": "Maître Cœur : Thorax (près du mamelon) → Majeur.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q185",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Triple Réchauffeur (TR) ?",
      "options": [
        "Annulaire → Extrémité du sourcil",
        "Sous l'œil → 2e orteil",
        "Angle interne de l'œil → Petit orteil (5e)",
        "Angle externe de l'œil → 4e orteil"
      ],
      "bonne_reponse": 0,
      "explication": "Triple Réchauffeur : Annulaire → Extrémité du sourcil.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q186",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Vésicule Biliaire (VB) ?",
      "options": [
        "Annulaire → Extrémité du sourcil",
        "Thorax (sous la clavicule) → Pouce",
        "Angle externe de l'œil → 4e orteil",
        "Angle interne de l'œil → Petit orteil (5e)"
      ],
      "bonne_reponse": 2,
      "explication": "Vésicule Biliaire : Angle externe de l'œil → 4e orteil.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q187",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans quel sens circule le méridien du Foie (F) ?",
      "options": [
        "Annulaire → Extrémité du sourcil",
        "Index → Aile du nez",
        "Gros orteil → Thorax (hypochondre, 14e côte)",
        "Petit doigt (auriculaire) → Devant l'oreille"
      ],
      "bonne_reponse": 2,
      "explication": "Foie : Gros orteil → Thorax (hypochondre, 14e côte).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q188",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Poumon (P) est-il en plénitude ?",
      "options": [
        "7 h – 9 h",
        "11 h – 13 h",
        "3 h – 5 h",
        "17 h – 19 h"
      ],
      "bonne_reponse": 2,
      "explication": "Poumon : plénitude 3 h – 5 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q189",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 3 h – 5 h ?",
      "options": [
        "Estomac",
        "Poumon",
        "Intestin Grêle",
        "Rein"
      ],
      "bonne_reponse": 1,
      "explication": "Entre 3 h – 5 h : Poumon.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q190",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Gros Intestin (GI) est-il en plénitude ?",
      "options": [
        "19 h – 21 h",
        "5 h – 7 h",
        "15 h – 17 h",
        "21 h – 23 h"
      ],
      "bonne_reponse": 1,
      "explication": "Gros Intestin : plénitude 5 h – 7 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q191",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 5 h – 7 h ?",
      "options": [
        "Maître Cœur",
        "Gros Intestin",
        "Foie",
        "Poumon"
      ],
      "bonne_reponse": 1,
      "explication": "Entre 5 h – 7 h : Gros Intestin.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q192",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Estomac (E) est-il en plénitude ?",
      "options": [
        "5 h – 7 h",
        "11 h – 13 h",
        "19 h – 21 h",
        "7 h – 9 h"
      ],
      "bonne_reponse": 3,
      "explication": "Estomac : plénitude 7 h – 9 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q193",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 7 h – 9 h ?",
      "options": [
        "Estomac",
        "Vésicule Biliaire",
        "Foie",
        "Triple Réchauffeur"
      ],
      "bonne_reponse": 0,
      "explication": "Entre 7 h – 9 h : Estomac.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q194",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Rate/Pancréas (Rte) est-il en plénitude ?",
      "options": [
        "7 h – 9 h",
        "23 h – 1 h",
        "9 h – 11 h",
        "17 h – 19 h"
      ],
      "bonne_reponse": 2,
      "explication": "Rate/Pancréas : plénitude 9 h – 11 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q195",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 9 h – 11 h ?",
      "options": [
        "Gros Intestin",
        "Intestin Grêle",
        "Vessie",
        "Rate/Pancréas"
      ],
      "bonne_reponse": 3,
      "explication": "Entre 9 h – 11 h : Rate/Pancréas.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q196",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Cœur (C) est-il en plénitude ?",
      "options": [
        "11 h – 13 h",
        "5 h – 7 h",
        "21 h – 23 h",
        "19 h – 21 h"
      ],
      "bonne_reponse": 0,
      "explication": "Cœur : plénitude 11 h – 13 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q197",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 11 h – 13 h ?",
      "options": [
        "Vésicule Biliaire",
        "Estomac",
        "Cœur",
        "Vessie"
      ],
      "bonne_reponse": 2,
      "explication": "Entre 11 h – 13 h : Cœur.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q198",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Intestin Grêle (IG) est-il en plénitude ?",
      "options": [
        "13 h – 15 h",
        "3 h – 5 h",
        "17 h – 19 h",
        "15 h – 17 h"
      ],
      "bonne_reponse": 0,
      "explication": "Intestin Grêle : plénitude 13 h – 15 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q199",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 13 h – 15 h ?",
      "options": [
        "Rein",
        "Maître Cœur",
        "Intestin Grêle",
        "Rate/Pancréas"
      ],
      "bonne_reponse": 2,
      "explication": "Entre 13 h – 15 h : Intestin Grêle.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q200",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Vessie (V) est-il en plénitude ?",
      "options": [
        "11 h – 13 h",
        "1 h – 3 h",
        "15 h – 17 h",
        "21 h – 23 h"
      ],
      "bonne_reponse": 2,
      "explication": "Vessie : plénitude 15 h – 17 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q201",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 15 h – 17 h ?",
      "options": [
        "Triple Réchauffeur",
        "Rate/Pancréas",
        "Cœur",
        "Vessie"
      ],
      "bonne_reponse": 3,
      "explication": "Entre 15 h – 17 h : Vessie.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q202",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Rein (Rn) est-il en plénitude ?",
      "options": [
        "1 h – 3 h",
        "17 h – 19 h",
        "11 h – 13 h",
        "9 h – 11 h"
      ],
      "bonne_reponse": 1,
      "explication": "Rein : plénitude 17 h – 19 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q203",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 17 h – 19 h ?",
      "options": [
        "Maître Cœur",
        "Rein",
        "Triple Réchauffeur",
        "Vésicule Biliaire"
      ],
      "bonne_reponse": 1,
      "explication": "Entre 17 h – 19 h : Rein.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q204",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Maître Cœur (MC) est-il en plénitude ?",
      "options": [
        "19 h – 21 h",
        "11 h – 13 h",
        "23 h – 1 h",
        "5 h – 7 h"
      ],
      "bonne_reponse": 0,
      "explication": "Maître Cœur : plénitude 19 h – 21 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q205",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 19 h – 21 h ?",
      "options": [
        "Maître Cœur",
        "Rein",
        "Gros Intestin",
        "Poumon"
      ],
      "bonne_reponse": 0,
      "explication": "Entre 19 h – 21 h : Maître Cœur.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q206",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Triple Réchauffeur (TR) est-il en plénitude ?",
      "options": [
        "19 h – 21 h",
        "21 h – 23 h",
        "3 h – 5 h",
        "13 h – 15 h"
      ],
      "bonne_reponse": 1,
      "explication": "Triple Réchauffeur : plénitude 21 h – 23 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q207",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 21 h – 23 h ?",
      "options": [
        "Vessie",
        "Triple Réchauffeur",
        "Intestin Grêle",
        "Foie"
      ],
      "bonne_reponse": 1,
      "explication": "Entre 21 h – 23 h : Triple Réchauffeur.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q208",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Vésicule Biliaire (VB) est-il en plénitude ?",
      "options": [
        "17 h – 19 h",
        "7 h – 9 h",
        "1 h – 3 h",
        "23 h – 1 h"
      ],
      "bonne_reponse": 3,
      "explication": "Vésicule Biliaire : plénitude 23 h – 1 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q209",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 23 h – 1 h ?",
      "options": [
        "Foie",
        "Vésicule Biliaire",
        "Vessie",
        "Cœur"
      ],
      "bonne_reponse": 1,
      "explication": "Entre 23 h – 1 h : Vésicule Biliaire.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q210",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quelle heure le méridien du Foie (F) est-il en plénitude ?",
      "options": [
        "13 h – 15 h",
        "23 h – 1 h",
        "1 h – 3 h",
        "5 h – 7 h"
      ],
      "bonne_reponse": 2,
      "explication": "Foie : plénitude 1 h – 3 h (cycle circadien, 2 h chacun).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q211",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel méridien est en plénitude entre 1 h – 3 h ?",
      "options": [
        "Rein",
        "Cœur",
        "Maître Cœur",
        "Foie"
      ],
      "bonne_reponse": 3,
      "explication": "Entre 1 h – 3 h : Foie.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q212",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Poumon (P) ?",
      "options": [
        "Métal",
        "Terre",
        "Feu",
        "Eau"
      ],
      "bonne_reponse": 0,
      "explication": "Poumon = élément Métal.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q213",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Gros Intestin (GI) ?",
      "options": [
        "Bois",
        "Feu",
        "Terre",
        "Métal"
      ],
      "bonne_reponse": 3,
      "explication": "Gros Intestin = élément Métal.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q214",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Estomac (E) ?",
      "options": [
        "Eau",
        "Terre",
        "Métal",
        "Bois"
      ],
      "bonne_reponse": 1,
      "explication": "Estomac = élément Terre.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q215",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Rate/Pancréas (Rte) ?",
      "options": [
        "Terre",
        "Feu",
        "Eau",
        "Métal"
      ],
      "bonne_reponse": 0,
      "explication": "Rate/Pancréas = élément Terre.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q216",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Cœur (C) ?",
      "options": [
        "Bois",
        "Eau",
        "Feu",
        "Métal"
      ],
      "bonne_reponse": 2,
      "explication": "Cœur = élément Feu.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q217",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Intestin Grêle (IG) ?",
      "options": [
        "Feu",
        "Eau",
        "Bois",
        "Terre"
      ],
      "bonne_reponse": 0,
      "explication": "Intestin Grêle = élément Feu.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q218",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Vessie (V) ?",
      "options": [
        "Métal",
        "Eau",
        "Terre",
        "Feu"
      ],
      "bonne_reponse": 1,
      "explication": "Vessie = élément Eau.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q219",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Rein (Rn) ?",
      "options": [
        "Eau",
        "Feu",
        "Terre",
        "Bois"
      ],
      "bonne_reponse": 0,
      "explication": "Rein = élément Eau.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q220",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Maître Cœur (MC) ?",
      "options": [
        "Eau",
        "Métal",
        "Bois",
        "Feu"
      ],
      "bonne_reponse": 3,
      "explication": "Maître Cœur = élément Feu.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q221",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Triple Réchauffeur (TR) ?",
      "options": [
        "Bois",
        "Feu",
        "Eau",
        "Métal"
      ],
      "bonne_reponse": 1,
      "explication": "Triple Réchauffeur = élément Feu.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q222",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Vésicule Biliaire (VB) ?",
      "options": [
        "Eau",
        "Bois",
        "Feu",
        "Terre"
      ],
      "bonne_reponse": 1,
      "explication": "Vésicule Biliaire = élément Bois.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q223",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quel élément appartient le méridien du Foie (F) ?",
      "options": [
        "Feu",
        "Eau",
        "Métal",
        "Bois"
      ],
      "bonne_reponse": 3,
      "explication": "Foie = élément Bois.",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q224",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Poumon (même élément) ?",
      "options": [
        "Gros Intestin",
        "Cœur",
        "Foie",
        "Rein"
      ],
      "bonne_reponse": 0,
      "explication": "Poumon est couplé à Gros Intestin (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q225",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Gros Intestin (même élément) ?",
      "options": [
        "Foie",
        "Intestin Grêle",
        "Estomac",
        "Poumon"
      ],
      "bonne_reponse": 3,
      "explication": "Gros Intestin est couplé à Poumon (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q226",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Estomac (même élément) ?",
      "options": [
        "Maître Cœur",
        "Rate/Pancréas",
        "Cœur",
        "Intestin Grêle"
      ],
      "bonne_reponse": 1,
      "explication": "Estomac est couplé à Rate/Pancréas (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q227",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Rate/Pancréas (même élément) ?",
      "options": [
        "Estomac",
        "Gros Intestin",
        "Vessie",
        "Rein"
      ],
      "bonne_reponse": 0,
      "explication": "Rate/Pancréas est couplé à Estomac (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q228",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Cœur (même élément) ?",
      "options": [
        "Gros Intestin",
        "Vessie",
        "Estomac",
        "Intestin Grêle"
      ],
      "bonne_reponse": 3,
      "explication": "Cœur est couplé à Intestin Grêle (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q229",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Intestin Grêle (même élément) ?",
      "options": [
        "Vessie",
        "Cœur",
        "Rein",
        "Rate/Pancréas"
      ],
      "bonne_reponse": 1,
      "explication": "Intestin Grêle est couplé à Cœur (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q230",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Vessie (même élément) ?",
      "options": [
        "Rate/Pancréas",
        "Maître Cœur",
        "Gros Intestin",
        "Rein"
      ],
      "bonne_reponse": 3,
      "explication": "Vessie est couplé à Rein (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q231",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Rein (même élément) ?",
      "options": [
        "Vésicule Biliaire",
        "Vessie",
        "Poumon",
        "Estomac"
      ],
      "bonne_reponse": 1,
      "explication": "Rein est couplé à Vessie (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q232",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Maître Cœur (même élément) ?",
      "options": [
        "Poumon",
        "Triple Réchauffeur",
        "Cœur",
        "Gros Intestin"
      ],
      "bonne_reponse": 1,
      "explication": "Maître Cœur est couplé à Triple Réchauffeur (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q233",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Triple Réchauffeur (même élément) ?",
      "options": [
        "Rein",
        "Cœur",
        "Vésicule Biliaire",
        "Maître Cœur"
      ],
      "bonne_reponse": 3,
      "explication": "Triple Réchauffeur est couplé à Maître Cœur (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q234",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Vésicule Biliaire (même élément) ?",
      "options": [
        "Foie",
        "Estomac",
        "Vessie",
        "Maître Cœur"
      ],
      "bonne_reponse": 0,
      "explication": "Vésicule Biliaire est couplé à Foie (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q235",
      "theme": "meridiens_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le méridien couplé du Foie (même élément) ?",
      "options": [
        "Vésicule Biliaire",
        "Maître Cœur",
        "Poumon",
        "Rein"
      ],
      "bonne_reponse": 0,
      "explication": "Foie est couplé à Vésicule Biliaire (même élément).",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q236",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Poumon (P) est de nature Yin.",
      "bonne_reponse": true,
      "explication": "Poumon est Yin. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q237",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Gros Intestin (GI) est de nature Yin.",
      "bonne_reponse": false,
      "explication": "Gros Intestin est Yang. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q238",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Estomac (E) est de nature Yin.",
      "bonne_reponse": false,
      "explication": "Estomac est Yang. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q239",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Rate/Pancréas (Rte) est de nature Yin.",
      "bonne_reponse": true,
      "explication": "Rate/Pancréas est Yin. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q240",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Cœur (C) est de nature Yin.",
      "bonne_reponse": true,
      "explication": "Cœur est Yin. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q241",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Intestin Grêle (IG) est de nature Yin.",
      "bonne_reponse": false,
      "explication": "Intestin Grêle est Yang. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q242",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Vessie (V) est de nature Yin.",
      "bonne_reponse": false,
      "explication": "Vessie est Yang. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q243",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Rein (Rn) est de nature Yin.",
      "bonne_reponse": true,
      "explication": "Rein est Yin. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q244",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Maître Cœur (MC) est de nature Yin.",
      "bonne_reponse": true,
      "explication": "Maître Cœur est Yin. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q245",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Triple Réchauffeur (TR) est de nature Yin.",
      "bonne_reponse": false,
      "explication": "Triple Réchauffeur est Yang. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q246",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Vésicule Biliaire (VB) est de nature Yin.",
      "bonne_reponse": false,
      "explication": "Vésicule Biliaire est Yang. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q247",
      "theme": "meridiens_mtc",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le méridien du Foie (F) est de nature Yin.",
      "bonne_reponse": true,
      "explication": "Foie est Yin. (Yin : P, Rte, C, Rn, MC, F ; Yang : GI, E, IG, V, TR, VB.)",
      "source": "MTC – trajet et cycle classiques des méridiens",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q248",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Poumon (P) ?",
      "options": [
        "Petit rond",
        "Quadriceps",
        "Grand dentelé",
        "Tenseur du fascia lata"
      ],
      "bonne_reponse": 2,
      "explication": "Poumon → Grand dentelé.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q249",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Gros Intestin (GI) ?",
      "options": [
        "Grand dorsal",
        "Grand pectoral claviculaire",
        "Tenseur du fascia lata",
        "Grand pectoral sternal"
      ],
      "bonne_reponse": 2,
      "explication": "Gros Intestin → Tenseur du fascia lata.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q250",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Estomac (E) ?",
      "options": [
        "Grand pectoral claviculaire",
        "Moyen fessier",
        "Grand pectoral sternal",
        "Grand dorsal"
      ],
      "bonne_reponse": 0,
      "explication": "Estomac → Grand pectoral claviculaire.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q251",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Rate/Pancréas (Rte) ?",
      "options": [
        "Sous-scapulaire",
        "Grand dorsal",
        "Moyen fessier",
        "Psoas"
      ],
      "bonne_reponse": 1,
      "explication": "Rate/Pancréas → Grand dorsal.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q252",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Cœur (C) ?",
      "options": [
        "Petit rond",
        "Psoas",
        "Quadriceps",
        "Sous-scapulaire"
      ],
      "bonne_reponse": 3,
      "explication": "Cœur → Sous-scapulaire.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q253",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Intestin Grêle (IG) ?",
      "options": [
        "Quadriceps",
        "Fibulaire (péronier)",
        "Grand pectoral claviculaire",
        "Sous-scapulaire"
      ],
      "bonne_reponse": 0,
      "explication": "Intestin Grêle → Quadriceps.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q254",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Vessie (V) ?",
      "options": [
        "Grand dorsal",
        "Tenseur du fascia lata",
        "Moyen fessier",
        "Fibulaire (péronier)"
      ],
      "bonne_reponse": 3,
      "explication": "Vessie → Fibulaire (péronier).",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q255",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Rein (Rn) ?",
      "options": [
        "Sous-scapulaire",
        "Psoas",
        "Grand pectoral claviculaire",
        "Quadriceps"
      ],
      "bonne_reponse": 1,
      "explication": "Rein → Psoas.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q256",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Maître Cœur (MC) ?",
      "options": [
        "Moyen fessier",
        "Sous-scapulaire",
        "Fibulaire (péronier)",
        "Tenseur du fascia lata"
      ],
      "bonne_reponse": 0,
      "explication": "Maître Cœur → Moyen fessier.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q257",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Triple Réchauffeur (TR) ?",
      "options": [
        "Sous-scapulaire",
        "Fibulaire (péronier)",
        "Deltoïde antérieur",
        "Petit rond"
      ],
      "bonne_reponse": 3,
      "explication": "Triple Réchauffeur → Petit rond.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q258",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Vésicule Biliaire (VB) ?",
      "options": [
        "Grand dorsal",
        "Deltoïde antérieur",
        "Grand pectoral claviculaire",
        "Grand pectoral sternal"
      ],
      "bonne_reponse": 1,
      "explication": "Vésicule Biliaire → Deltoïde antérieur.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q259",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel muscle est associé au méridien du Foie (F) ?",
      "options": [
        "Moyen fessier",
        "Grand pectoral sternal",
        "Psoas",
        "Quadriceps"
      ],
      "bonne_reponse": 1,
      "explication": "Foie → Grand pectoral sternal.",
      "source": "Planche muscles/méridiens (corrigé 2025)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q260",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Fixation » ?",
      "options": [
        "Réguler le cycle jour/nuit en calmant l'épiphyse (mélatonine)",
        "Rééquilibrer l'ancrage et l'expression (zone haute/basse du cerveau)",
        "Calmer les émotions et le stress, équilibrer le système endocrinien",
        "Soulager temporairement une douleur (retirer l'excès d'énergie)"
      ],
      "bonne_reponse": 0,
      "explication": "Fixation : Réguler le cycle jour/nuit en calmant l'épiphyse (mélatonine). (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q261",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Constriction des os du crâne » ?",
      "options": [
        "Faire baisser le stress lié aux émotions négatives d'une situation",
        "Rééquilibrer un chakra et la glande endocrine associée",
        "Desserrer les sutures du crâne pour mieux nourrir le cerveau",
        "Refermer les fuites énergétiques liées à une cicatrice"
      ],
      "bonne_reponse": 2,
      "explication": "Constriction des os du crâne : Desserrer les sutures du crâne pour mieux nourrir le cerveau. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q262",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Technique cérébro-spinale (TCS) » ?",
      "options": [
        "Relancer les hémisphères et calmer l'amygdale via une affirmation",
        "Relancer la circulation du liquide céphalo-rachidien (tassement osseux)",
        "Corriger un problème musculaire au niveau des yeux",
        "Relâcher le cortex préfrontal (globalité / détails, attention)"
      ],
      "bonne_reponse": 1,
      "explication": "Technique cérébro-spinale (TCS) : Relancer la circulation du liquide céphalo-rachidien (tassement osseux). (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q263",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Trompe d'Eustache » ?",
      "options": [
        "Révéler des défaillances invisibles au test musculaire",
        "Repérer et libérer les excès chroniques et profonds d'un organe",
        "Relancer le cerveau et la bonne communication entre les synapses",
        "Relâcher la pression au niveau de l'oreille"
      ],
      "bonne_reponse": 3,
      "explication": "Trompe d'Eustache : Relâcher la pression au niveau de l'oreille. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q264",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « ACI (Aire Commune d'Intégration) » ?",
      "options": [
        "Équilibrer le yin et le yang (réserves d'énergie)",
        "Sortir des vieux schémas et retrouver l'accès au présent et aux solutions",
        "Désensibiliser face à une substance devenue allergène",
        "Reprogrammer le cerveau en contournant le filtre logique"
      ],
      "bonne_reponse": 1,
      "explication": "ACI (Aire Commune d'Intégration) : Sortir des vieux schémas et retrouver l'accès au présent et aux solutions. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q265",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Réintégration des cicatrices » ?",
      "options": [
        "Refermer les fuites énergétiques liées à une cicatrice",
        "Reconnecter la personne à une émotion bloquée",
        "Faire baisser le stress lié aux émotions négatives d'une situation",
        "Ancrer une phrase positive et lever un auto-sabotage"
      ],
      "bonne_reponse": 0,
      "explication": "Réintégration des cicatrices : Refermer les fuites énergétiques liées à une cicatrice. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q266",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Réflexe respiratoire » ?",
      "options": [
        "Relancer le cerveau et la bonne communication entre les synapses",
        "Retrouver une respiration régulière (reprogrammer le réflexe de survie)",
        "Soulager temporairement en retirant l'excès d'énergie local",
        "Ancrer une phrase positive et lever un auto-sabotage"
      ],
      "bonne_reponse": 1,
      "explication": "Réflexe respiratoire : Retrouver une respiration régulière (reprogrammer le réflexe de survie). (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q267",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Eau (hydratation) » ?",
      "options": [
        "Relâcher la pression au niveau de l'oreille",
        "Rééquilibrer l'ancrage et l'expression (zone haute/basse du cerveau)",
        "Relancer le cerveau et la bonne communication entre les synapses",
        "Conseiller un comportement à partir des caractéristiques physiques"
      ],
      "bonne_reponse": 2,
      "explication": "Eau (hydratation) : Relancer le cerveau et la bonne communication entre les synapses. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q268",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Surrénales » ?",
      "options": [
        "Repérer et libérer les excès chroniques et profonds d'un organe",
        "Rééquilibrer la sécrétion de cortisol (fatigue chronique, humeur)",
        "Mesurer le stress et la motivation par rapport à un objectif",
        "Rééquilibrer un muscle via l'alimentation (ajout ou suppression)"
      ],
      "bonne_reponse": 1,
      "explication": "Surrénales : Rééquilibrer la sécrétion de cortisol (fatigue chronique, humeur). (outil d'année 2)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q269",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Wayne Cook » ?",
      "options": [
        "Relancer la circulation du liquide céphalo-rachidien (tassement osseux)",
        "Calmer les émotions et le stress, équilibrer le système endocrinien",
        "Corriger un problème musculaire au niveau des oreilles",
        "Soulager temporairement une douleur (retirer l'excès d'énergie)"
      ],
      "bonne_reponse": 1,
      "explication": "Wayne Cook : Calmer les émotions et le stress, équilibrer le système endocrinien. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q270",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Affirmations par méridiens » ?",
      "options": [
        "Corriger un problème musculaire au niveau des yeux",
        "Ancrer une phrase positive et lever un auto-sabotage",
        "Faire baisser le stress lié aux émotions négatives d'une situation",
        "Conseiller un comportement à partir des caractéristiques physiques"
      ],
      "bonne_reponse": 1,
      "explication": "Affirmations par méridiens : Ancrer une phrase positive et lever un auto-sabotage. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q271",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Fleurs de Bach » ?",
      "options": [
        "Corriger un problème musculaire au niveau des yeux",
        "Faire baisser le stress lié aux émotions négatives d'une situation",
        "Corriger un problème musculaire au niveau des oreilles",
        "Réguler le cycle jour/nuit en calmant l'épiphyse (mélatonine)"
      ],
      "bonne_reponse": 1,
      "explication": "Fleurs de Bach : Faire baisser le stress lié aux émotions négatives d'une situation. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q272",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Lutte ou Fuite » ?",
      "options": [
        "Rééquilibrer un muscle via l'alimentation (ajout ou suppression)",
        "Remettre en action une personne figée (éteindre l'amygdale)",
        "Réguler le cycle jour/nuit en calmant l'épiphyse (mélatonine)",
        "Retrouver une respiration régulière (reprogrammer le réflexe de survie)"
      ],
      "bonne_reponse": 1,
      "explication": "Lutte ou Fuite : Remettre en action une personne figée (éteindre l'amygdale). (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q273",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Points réflexes neuro-émotionnels » ?",
      "options": [
        "Rééquilibrer une loge énergétique « droit au but »",
        "Reconnecter la personne à une émotion bloquée",
        "S'adapter aux obstacles : avancer et changer de direction",
        "Soulager temporairement une douleur (retirer l'excès d'énergie)"
      ],
      "bonne_reponse": 1,
      "explication": "Points réflexes neuro-émotionnels : Reconnecter la personne à une émotion bloquée. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q274",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Modes oculaires » ?",
      "options": [
        "Desserrer les sutures du crâne pour mieux nourrir le cerveau",
        "Retrouver le stress enregistré dans la position des yeux",
        "Reprogrammer le cerveau en contournant le filtre logique",
        "Corriger un problème musculaire au niveau des oreilles"
      ],
      "bonne_reponse": 1,
      "explication": "Modes oculaires : Retrouver le stress enregistré dans la position des yeux. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q275",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Tapotement du temporal » ?",
      "options": [
        "Reprogrammer le cerveau en contournant le filtre logique",
        "Relancer le cerveau et la bonne communication entre les synapses",
        "Desserrer les sutures du crâne pour mieux nourrir le cerveau",
        "Relancer la circulation du liquide céphalo-rachidien (tassement osseux)"
      ],
      "bonne_reponse": 0,
      "explication": "Tapotement du temporal : Reprogrammer le cerveau en contournant le filtre logique. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q276",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Pouls chinois » ?",
      "options": [
        "Identifier et défuser les paires d'émotions liées à l'objectif",
        "Repérer et libérer les excès chroniques et profonds d'un organe",
        "Réguler le cycle jour/nuit en calmant l'épiphyse (mélatonine)",
        "Mesurer le stress et la motivation par rapport à un objectif"
      ],
      "bonne_reponse": 1,
      "explication": "Pouls chinois : Repérer et libérer les excès chroniques et profonds d'un organe. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q277",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Polarité du corps » ?",
      "options": [
        "Relâcher la pression au niveau de l'oreille",
        "Rééquilibrer un chakra et la glande endocrine associée",
        "Réadapter le champ électromagnétique du corps à l'environnement",
        "Désensibiliser face à une substance devenue allergène"
      ],
      "bonne_reponse": 2,
      "explication": "Polarité du corps : Réadapter le champ électromagnétique du corps à l'environnement. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q278",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « VC / VG » ?",
      "options": [
        "Relâcher le cortex préfrontal (globalité / détails, attention)",
        "Équilibrer le yin et le yang (réserves d'énergie)",
        "Faire baisser le stress lié aux émotions négatives d'une situation",
        "Identifier et défuser les paires d'émotions liées à l'objectif"
      ],
      "bonne_reponse": 1,
      "explication": "VC / VG : Équilibrer le yin et le yang (réserves d'énergie). (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q279",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Inhibition visuelle » ?",
      "options": [
        "Sortir des vieux schémas et retrouver l'accès au présent et aux solutions",
        "Remettre en action une personne figée (éteindre l'amygdale)",
        "Corriger un problème musculaire au niveau des yeux",
        "Calmer les émotions et le stress, équilibrer le système endocrinien"
      ],
      "bonne_reponse": 2,
      "explication": "Inhibition visuelle : Corriger un problème musculaire au niveau des yeux. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q280",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Inhibition auriculaire » ?",
      "options": [
        "Anamnèse : adapter la posture thérapeutique (hypothèses, pas de preuves)",
        "Désensibiliser face à une substance devenue allergène",
        "Réguler le cycle jour/nuit en calmant l'épiphyse (mélatonine)",
        "Corriger un problème musculaire au niveau des oreilles"
      ],
      "bonne_reponse": 3,
      "explication": "Inhibition auriculaire : Corriger un problème musculaire au niveau des oreilles. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q281",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Os hyoïde » ?",
      "options": [
        "Refermer les fuites énergétiques liées à une cicatrice",
        "Rééquilibrer l'ancrage et l'expression (zone haute/basse du cerveau)",
        "Rééquilibrer un chakra et la glande endocrine associée",
        "Reconnecter la personne à une émotion bloquée"
      ],
      "bonne_reponse": 1,
      "explication": "Os hyoïde : Rééquilibrer l'ancrage et l'expression (zone haute/basse du cerveau). (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q282",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Démarches (Gaits) » ?",
      "options": [
        "Rééquilibrer une loge énergétique « droit au but »",
        "Mesurer le stress et la motivation par rapport à un objectif",
        "Corriger un problème musculaire au niveau des yeux",
        "S'adapter aux obstacles : avancer et changer de direction"
      ],
      "bonne_reponse": 3,
      "explication": "Démarches (Gaits) : S'adapter aux obstacles : avancer et changer de direction. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q283",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Cloaques » ?",
      "options": [
        "Corriger la circulation du LCR liée aux tensions des chaînes musculaires",
        "Remettre en action une personne figée (éteindre l'amygdale)",
        "Relancer le cerveau et la bonne communication entre les synapses",
        "Reconnecter la personne à une émotion bloquée"
      ],
      "bonne_reponse": 0,
      "explication": "Cloaques : Corriger la circulation du LCR liée aux tensions des chaînes musculaires. (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q284",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Focus » ?",
      "options": [
        "Relâcher le cortex préfrontal (globalité / détails, attention)",
        "Retrouver une respiration régulière (reprogrammer le réflexe de survie)",
        "Anamnèse : adapter la posture thérapeutique (hypothèses, pas de preuves)",
        "Sortir des vieux schémas et retrouver l'accès au présent et aux solutions"
      ],
      "bonne_reponse": 0,
      "explication": "Focus : Relâcher le cortex préfrontal (globalité / détails, attention). (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q285",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Point Luo » ?",
      "options": [
        "Mesurer le stress et la motivation par rapport à un objectif",
        "Remettre en action une personne figée (éteindre l'amygdale)",
        "Rééquilibrer une loge énergétique « droit au but »",
        "Révéler des défaillances invisibles au test musculaire"
      ],
      "bonne_reponse": 2,
      "explication": "Point Luo : Rééquilibrer une loge énergétique « droit au but ». (outil d'année 1)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q286",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Allergies » ?",
      "options": [
        "Conseiller un comportement à partir des caractéristiques physiques",
        "Repérer et libérer les excès chroniques et profonds d'un organe",
        "Désensibiliser face à une substance devenue allergène",
        "Faire baisser le stress lié aux émotions négatives d'une situation"
      ],
      "bonne_reponse": 2,
      "explication": "Allergies : Désensibiliser face à une substance devenue allergène. (outil d'année 2)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q287",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Gestion de la douleur » ?",
      "options": [
        "Mesurer le stress et la motivation par rapport à un objectif",
        "Rééquilibrer un chakra et la glande endocrine associée",
        "Soulager temporairement en retirant l'excès d'énergie local",
        "Corriger un problème musculaire au niveau des yeux"
      ],
      "bonne_reponse": 2,
      "explication": "Gestion de la douleur : Soulager temporairement une douleur (retirer l'excès d'énergie). (outil d'année 3)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q288",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Traits Structure/Fonction » ?",
      "options": [
        "Désensibiliser face à une substance devenue allergène",
        "Sortir des vieux schémas et retrouver l'accès au présent et aux solutions",
        "Conseiller un comportement à partir des caractéristiques physiques",
        "Reconnecter la personne à une émotion bloquée"
      ],
      "bonne_reponse": 2,
      "explication": "Traits Structure/Fonction : Conseiller un comportement à partir des caractéristiques physiques. (outil d'année 2)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q289",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Cartes de motivation » ?",
      "options": [
        "Faire baisser le stress lié aux émotions négatives d'une situation",
        "Désensibiliser face à une substance devenue allergène",
        "Décomposer un objectif pour mieux le comprendre",
        "Relancer les hémisphères et calmer l'amygdale via une affirmation"
      ],
      "bonne_reponse": 2,
      "explication": "Cartes de motivation : Décomposer un objectif pour mieux le comprendre. (outil d'année 2)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q290",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Diamond » ?",
      "options": [
        "Soulager temporairement en retirant l'excès d'énergie local",
        "Relancer les hémisphères et calmer l'amygdale via une affirmation",
        "Faire baisser le stress lié aux émotions négatives d'une situation",
        "Rééquilibrer une loge énergétique « droit au but »"
      ],
      "bonne_reponse": 1,
      "explication": "Diamond : Relancer les hémisphères et calmer l'amygdale via une affirmation. (outil d'année 2)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q291",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Équilibration des chakras » ?",
      "options": [
        "Relancer les hémisphères et calmer l'amygdale via une affirmation",
        "Relâcher le cortex préfrontal (globalité / détails, attention)",
        "Rééquilibrer un chakra et la glande endocrine associée",
        "Reconnecter la personne à une émotion bloquée"
      ],
      "bonne_reponse": 2,
      "explication": "Équilibration des chakras : Rééquilibrer un chakra et la glande endocrine associée. (outil d'année 2)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q292",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Bilan sans test » ?",
      "options": [
        "Relancer le cerveau et la bonne communication entre les synapses",
        "Remettre en action une personne figée (éteindre l'amygdale)",
        "Rééquilibrer l'ancrage et l'expression (zone haute/basse du cerveau)",
        "Anamnèse : adapter la posture thérapeutique (hypothèses, pas de preuves)"
      ],
      "bonne_reponse": 3,
      "explication": "Bilan sans test : Anamnèse : adapter la posture thérapeutique (hypothèses, pas de preuves).",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q293",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Baromètre du comportement » ?",
      "options": [
        "Faire baisser le stress lié aux émotions négatives d'une situation",
        "Relancer les hémisphères et calmer l'amygdale via une affirmation",
        "Identifier et défuser les paires d'émotions liées à l'objectif",
        "Reprogrammer le cerveau en contournant le filtre logique"
      ],
      "bonne_reponse": 2,
      "explication": "Baromètre du comportement : Identifier et défuser les paires d'émotions liées à l'objectif.",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q294",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « CEN / CEP » ?",
      "options": [
        "Soulager temporairement en retirant l'excès d'énergie local",
        "Décomposer un objectif pour mieux le comprendre",
        "Retrouver une respiration régulière (reprogrammer le réflexe de survie)",
        "Mesurer le stress et la motivation par rapport à un objectif"
      ],
      "bonne_reponse": 3,
      "explication": "CEN / CEP : Mesurer le stress et la motivation par rapport à un objectif.",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q295",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Défaillance musculaire cachée » ?",
      "options": [
        "Rééquilibrer un muscle via l'alimentation (ajout ou suppression)",
        "Soulager temporairement en retirant l'excès d'énergie local",
        "Révéler des défaillances invisibles au test musculaire",
        "Réguler le cycle jour/nuit en calmant l'épiphyse (mélatonine)"
      ],
      "bonne_reponse": 2,
      "explication": "Défaillance musculaire cachée : Révéler des défaillances invisibles au test musculaire.",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q296",
      "theme": "objectifs_protocoles",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert le protocole « Nutrition + / - » ?",
      "options": [
        "Corriger un problème musculaire au niveau des oreilles",
        "Décomposer un objectif pour mieux le comprendre",
        "Rééquilibrer la sécrétion de cortisol (fatigue chronique, humeur)",
        "Rééquilibrer un muscle via l'alimentation (ajout ou suppression)"
      ],
      "bonne_reponse": 3,
      "explication": "Nutrition + / - : Rééquilibrer un muscle via l'alimentation (ajout ou suppression). (outil d'année 3)",
      "source": "Catalogue des outils (BDD_CATALOGUE)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q297",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans quel sens circule le cycle d'engendrement (Chen / Sheng) ?",
      "options": [
        "Dans le sens des aiguilles d'une montre",
        "Dans le sens inverse des aiguilles",
        "En étoile à 5 branches",
        "Au hasard"
      ],
      "bonne_reponse": 0,
      "explication": "Le cycle d'engendrement (Chen/Sheng) circule dans le sens des aiguilles d'une montre.",
      "source": "Cours A1 p.148 (Les 5 Éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q298",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le cycle de contrôle (Ko) dessine quelle forme sur la roue ?",
      "options": [
        "Un cercle",
        "Une étoile à 5 branches",
        "Une spirale",
        "Une croix"
      ],
      "bonne_reponse": 1,
      "explication": "Le cycle Ko passe par le centre des éléments et forme une étoile à 5 branches.",
      "source": "Cours A1 p.148 (Les 5 Éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q299",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le cycle d'engendrement, le Bois (printemps) donne naissance à :",
      "options": [
        "la Terre",
        "le Feu",
        "le Métal",
        "l'Eau"
      ],
      "bonne_reponse": 1,
      "explication": "Bois → Feu → Terre → Métal → Eau → Bois (engendrement).",
      "source": "Cours A1 p.148 (Les 5 Éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q300",
      "theme": "cinq_elements",
      "type": "association",
      "difficulte": 3,
      "enonce": "Cycle Ko : associez chaque élément à ce qu'il CONTRÔLE.",
      "paires": [
        [
          "Bois",
          "la Terre (en la couvrant)"
        ],
        [
          "Terre",
          "l'Eau (en l'endiguant)"
        ],
        [
          "Eau",
          "le Feu (en l'éteignant)"
        ],
        [
          "Feu",
          "le Métal (en le fondant)"
        ],
        [
          "Métal",
          "le Bois (en le coupant)"
        ]
      ],
      "explication": "Ko : Bois→Terre, Terre→Eau, Eau→Feu, Feu→Métal, Métal→Bois.",
      "source": "Cours A1 p.148 (Les 5 Éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q301",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le cycle de contrôle (Ko), l'Eau contrôle :",
      "options": [
        "le Bois",
        "le Feu",
        "le Métal",
        "la Terre"
      ],
      "bonne_reponse": 1,
      "explication": "L'Eau contrôle le Feu en l'éteignant.",
      "source": "Cours A1 p.148 (Les 5 Éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q302",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans le cycle de contrôle (Ko), le Métal contrôle :",
      "options": [
        "l'Eau",
        "le Bois",
        "le Feu",
        "la Terre"
      ],
      "bonne_reponse": 1,
      "explication": "Le Métal contrôle le Bois en le coupant.",
      "source": "Cours A1 p.148 (Les 5 Éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q303",
      "theme": "cinq_elements",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque élément à sa COULEUR.",
      "paires": [
        [
          "Bois",
          "Vert"
        ],
        [
          "Feu",
          "Rouge"
        ],
        [
          "Terre",
          "Jaune"
        ],
        [
          "Métal",
          "Blanc"
        ],
        [
          "Eau",
          "Bleu"
        ]
      ],
      "explication": "Bois=vert, Feu=rouge, Terre=jaune, Métal=blanc, Eau=bleu.",
      "source": "Cours A1 p.256-262 (Couleurs des éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q304",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la couleur associée à l'élément Bois ?",
      "options": [
        "Rouge",
        "Blanc",
        "Jaune",
        "Vert"
      ],
      "bonne_reponse": 3,
      "explication": "Bois → Vert.",
      "source": "Cours A1 p.256-262 (Couleurs des éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q305",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la couleur associée à l'élément Feu ?",
      "options": [
        "Vert",
        "Bleu",
        "Jaune",
        "Rouge"
      ],
      "bonne_reponse": 3,
      "explication": "Feu → Rouge.",
      "source": "Cours A1 p.256-262 (Couleurs des éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q306",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la couleur associée à l'élément Terre ?",
      "options": [
        "Rouge",
        "Bleu",
        "Jaune",
        "Vert"
      ],
      "bonne_reponse": 2,
      "explication": "Terre → Jaune.",
      "source": "Cours A1 p.256-262 (Couleurs des éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q307",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la couleur associée à l'élément Métal ?",
      "options": [
        "Bleu",
        "Blanc",
        "Vert",
        "Rouge"
      ],
      "bonne_reponse": 1,
      "explication": "Métal → Blanc.",
      "source": "Cours A1 p.256-262 (Couleurs des éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q308",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la couleur associée à l'élément Eau ?",
      "options": [
        "Rouge",
        "Blanc",
        "Jaune",
        "Bleu"
      ],
      "bonne_reponse": 3,
      "explication": "Eau → Bleu.",
      "source": "Cours A1 p.256-262 (Couleurs des éléments)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q309",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quelle période correspond le PRINTEMPS (élément Bois) ?",
      "options": [
        "mi-février à mi-avril",
        "mi-mai à mi-juillet",
        "mi-août à mi-octobre",
        "mi-novembre à mi-janvier"
      ],
      "bonne_reponse": 0,
      "explication": "Printemps : mi-février à mi-avril (Bois).",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q310",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quelle période correspond l'ÉTÉ (élément Feu) ?",
      "options": [
        "mi-février à mi-avril",
        "mi-mai à mi-juillet",
        "mi-août à mi-octobre",
        "mi-novembre à mi-janvier"
      ],
      "bonne_reponse": 1,
      "explication": "Été : mi-mai à mi-juillet (Feu).",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q311",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quelle période correspond l'AUTOMNE (élément Métal) ?",
      "options": [
        "mi-février à mi-avril",
        "mi-mai à mi-juillet",
        "mi-août à mi-octobre",
        "mi-novembre à mi-janvier"
      ],
      "bonne_reponse": 2,
      "explication": "Automne : mi-août à mi-octobre (Métal).",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q312",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quelle période correspond l'HIVER (élément Eau) ?",
      "options": [
        "mi-février à mi-avril",
        "mi-mai à mi-juillet",
        "mi-août à mi-octobre",
        "mi-novembre à mi-janvier"
      ],
      "bonne_reponse": 3,
      "explication": "Hiver : mi-novembre à mi-janvier (Eau).",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q313",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de temps dure chaque intersaison ?",
      "options": [
        "1 semaine",
        "3 semaines",
        "6 semaines",
        "10 semaines"
      ],
      "bonne_reponse": 1,
      "explication": "Chaque saison dure ~10 semaines ; chaque intersaison dure 3 semaines.",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q314",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « acide » TONIFIE quel méridien ?",
      "options": [
        "Vésicule Biliaire",
        "Vessie",
        "Gros Intestin",
        "Poumon"
      ],
      "bonne_reponse": 3,
      "explication": "La saveur acide tonifie le Poumon, disperse le Foie, harmonise le Cœur.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q315",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « acide » DISPERSE quel méridien ?",
      "options": [
        "Foie",
        "Vésicule Biliaire",
        "Poumon",
        "Intestin Grêle"
      ],
      "bonne_reponse": 0,
      "explication": "La saveur acide disperse le Foie (tonifie le Poumon, harmonise le Cœur).",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q316",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En quantité modérée, la saveur « acide » nourrit quel méridien ?",
      "options": [
        "Vessie",
        "Estomac",
        "Vésicule Biliaire",
        "Foie"
      ],
      "bonne_reponse": 3,
      "explication": "En quantité modérée, le acide nourrit le Foie.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q317",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « amer » TONIFIE quel méridien ?",
      "options": [
        "Cœur",
        "Poumon",
        "Vessie",
        "Rein"
      ],
      "bonne_reponse": 3,
      "explication": "La saveur amer tonifie le Rein, disperse le Rate/Pancréas, harmonise le Poumon.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q318",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « amer » DISPERSE quel méridien ?",
      "options": [
        "Rein",
        "Rate/Pancréas",
        "Triple Réchauffeur",
        "Gros Intestin"
      ],
      "bonne_reponse": 1,
      "explication": "La saveur amer disperse le Rate/Pancréas (tonifie le Rein, harmonise le Poumon).",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q319",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En quantité modérée, la saveur « amer » nourrit quel méridien ?",
      "options": [
        "Poumon",
        "Cœur",
        "Foie",
        "Rate/Pancréas"
      ],
      "bonne_reponse": 1,
      "explication": "En quantité modérée, le amer nourrit le Cœur.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q320",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « doux » TONIFIE quel méridien ?",
      "options": [
        "Rate/Pancréas",
        "Estomac",
        "Vésicule Biliaire",
        "Cœur"
      ],
      "bonne_reponse": 0,
      "explication": "La saveur doux tonifie le Rate/Pancréas, disperse le Cœur, harmonise le Foie.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q321",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « doux » DISPERSE quel méridien ?",
      "options": [
        "Cœur",
        "Intestin Grêle",
        "Poumon",
        "Triple Réchauffeur"
      ],
      "bonne_reponse": 0,
      "explication": "La saveur doux disperse le Cœur (tonifie le Rate/Pancréas, harmonise le Foie).",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q322",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En quantité modérée, la saveur « doux » nourrit quel méridien ?",
      "options": [
        "Rate/Pancréas",
        "Gros Intestin",
        "Estomac",
        "Vésicule Biliaire"
      ],
      "bonne_reponse": 0,
      "explication": "En quantité modérée, le doux nourrit le Rate/Pancréas.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q323",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « piquant » TONIFIE quel méridien ?",
      "options": [
        "Cœur",
        "Maître Cœur",
        "Foie",
        "Rein"
      ],
      "bonne_reponse": 2,
      "explication": "La saveur piquant tonifie le Foie, disperse le Poumon, harmonise le Rein.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q324",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « piquant » DISPERSE quel méridien ?",
      "options": [
        "Poumon",
        "Estomac",
        "Foie",
        "Vessie"
      ],
      "bonne_reponse": 0,
      "explication": "La saveur piquant disperse le Poumon (tonifie le Foie, harmonise le Rein).",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q325",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En quantité modérée, la saveur « piquant » nourrit quel méridien ?",
      "options": [
        "Poumon",
        "Rate/Pancréas",
        "Intestin Grêle",
        "Cœur"
      ],
      "bonne_reponse": 0,
      "explication": "En quantité modérée, le piquant nourrit le Poumon.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q326",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « salé » TONIFIE quel méridien ?",
      "options": [
        "Gros Intestin",
        "Poumon",
        "Vésicule Biliaire",
        "Cœur"
      ],
      "bonne_reponse": 3,
      "explication": "La saveur salé tonifie le Cœur, disperse le Rein, harmonise le Rate/Pancréas.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q327",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur le plan énergétique, la saveur « salé » DISPERSE quel méridien ?",
      "options": [
        "Vessie",
        "Rein",
        "Vésicule Biliaire",
        "Rate/Pancréas"
      ],
      "bonne_reponse": 1,
      "explication": "La saveur salé disperse le Rein (tonifie le Cœur, harmonise le Rate/Pancréas).",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q328",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En quantité modérée, la saveur « salé » nourrit quel méridien ?",
      "options": [
        "Vessie",
        "Rein",
        "Poumon",
        "Estomac"
      ],
      "bonne_reponse": 1,
      "explication": "En quantité modérée, le salé nourrit le Rein.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q329",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "La saveur AMÈRE est contre-indiquée en cas de :",
      "options": [
        "Problèmes musculaires",
        "Problèmes osseux",
        "Faiblesse du Chi",
        "Faiblesse du Sang"
      ],
      "bonne_reponse": 1,
      "explication": "L'amer est contre-indiqué en cas de problèmes osseux (élimination : vomissements).",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q330",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "La saveur ACIDE est contre-indiquée en cas de :",
      "options": [
        "Problèmes osseux",
        "Problèmes musculaires et ligamentaires",
        "Faiblesse du Sang",
        "Faiblesse du Chi"
      ],
      "bonne_reponse": 1,
      "explication": "L'acide (astringent/asséchant) est contre-indiqué pour les problèmes musculaires et ligamentaires.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q331",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle saveur a une action diurétique (élimine l'humidité : œdème, rétention) ?",
      "options": [
        "Le fade (insipide)",
        "L'amer",
        "Le salé",
        "Le piquant"
      ],
      "bonne_reponse": 0,
      "explication": "Le fade/insipide a une action diurétique ; il chasse l'humidité.",
      "source": "Cours A1 p.259 (Les 5 Saveurs)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q332",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelles sont les 4 principales énergies vitales en MTC ?",
      "options": [
        "Yin, Yang, Chaud, Froid",
        "Qi, Jing, Shen, Xue (Sang)",
        "Bois, Feu, Terre, Métal",
        "Ko, Sheng, Luo, Yuan"
      ],
      "bonne_reponse": 1,
      "explication": "Qi (énergie), Jing (essence), Shen (esprit), Xue/Sang.",
      "source": "Cours A1 p.257-258 (Énergie vitale)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q333",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle énergie représente l'essence vitale héritée des parents, stockée dans les reins ?",
      "options": [
        "Le Qi",
        "Le Jing",
        "Le Shen",
        "Le Xue"
      ],
      "bonne_reponse": 1,
      "explication": "Le Jing = essence vitale, héritée des parents, liée aux méridiens Rein et Vessie ; ressource limitée.",
      "source": "Cours A1 p.257-258 (Énergie vitale)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q334",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Le Shen (esprit / conscience) réside dans quel organe ?",
      "options": [
        "Les reins",
        "Le cœur",
        "La rate",
        "Le foie"
      ],
      "bonne_reponse": 1,
      "explication": "Le Shen réside dans le Cœur ; il régule les aspects mentaux et émotionnels.",
      "source": "Cours A1 p.257-258 (Énergie vitale)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q335",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle énergie vitale correspond au Sang qui nourrit et humidifie organes et tissus ?",
      "options": [
        "Le Qi",
        "Le Jing",
        "Le Shen",
        "Le Xue (Sang)"
      ],
      "bonne_reponse": 3,
      "explication": "Le Xue (Sang) nourrit et humidifie ; il est étroitement lié au Qi.",
      "source": "Cours A1 p.257-258 (Énergie vitale)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q336",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "L'énergie de DÉFENSE (Wei Qi) circule en surface et est liée surtout aux méridiens :",
      "options": [
        "Rein et Vessie",
        "Poumon et Gros Intestin",
        "Cœur et Foie",
        "Rate et Estomac"
      ],
      "bonne_reponse": 1,
      "explication": "Wei Qi (défense) circule en surface (peau/muscles) ; liée au Poumon et au Gros Intestin.",
      "source": "Cours A1 p.257-258 (Énergie vitale)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q337",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "L'énergie NUTRITIVE (Ying Qi) est liée en particulier aux méridiens :",
      "options": [
        "Rate et Estomac",
        "Rein et Vessie",
        "Cœur et Intestin Grêle",
        "Foie et Vésicule Biliaire"
      ],
      "bonne_reponse": 0,
      "explication": "Ying Qi (nutritive) circule dans tous les méridiens, avec un lien particulier à la Rate et l'Estomac (digestion).",
      "source": "Cours A1 p.257-258 (Énergie vitale)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q338",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "L'énergie ANCESTRALE (Yuan Qi) réside principalement dans :",
      "options": [
        "Le cœur",
        "Les reins",
        "Le foie",
        "La rate"
      ],
      "bonne_reponse": 1,
      "explication": "Yuan Qi (ancestrale, innée, héritée à la conception) réside principalement dans les reins.",
      "source": "Cours A1 p.257-258 (Énergie vitale)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q339",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le rôle principal du couple Rate / Estomac ?",
      "options": [
        "L'équilibre des liquides organiques",
        "La digestion : fournisseur de l'énergie quotidienne",
        "La respiration et la peau (contrôle le Gros Intestin)",
        "Stocke le sang, régit le drainage et l'évacuation"
      ],
      "bonne_reponse": 1,
      "explication": "Rate / Estomac : La digestion : fournisseur de l'énergie quotidienne.",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q340",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le rôle principal du couple Poumon / Gros Intestin ?",
      "options": [
        "Commande les vaisseaux sanguins et l'activité mentale",
        "L'équilibre des liquides organiques",
        "La digestion : fournisseur de l'énergie quotidienne",
        "La respiration et la peau (contrôle le Gros Intestin)"
      ],
      "bonne_reponse": 3,
      "explication": "Poumon / Gros Intestin : La respiration et la peau (contrôle le Gros Intestin).",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q341",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le rôle principal du couple Rein / Vessie ?",
      "options": [
        "Stocke le sang, régit le drainage et l'évacuation",
        "L'équilibre des liquides organiques",
        "La digestion : fournisseur de l'énergie quotidienne",
        "Commande les vaisseaux sanguins et l'activité mentale"
      ],
      "bonne_reponse": 1,
      "explication": "Rein / Vessie : L'équilibre des liquides organiques.",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q342",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le rôle principal du couple Foie / Vésicule Biliaire ?",
      "options": [
        "Commande les vaisseaux sanguins et l'activité mentale",
        "La digestion : fournisseur de l'énergie quotidienne",
        "Stocke le sang, régit le drainage et l'évacuation",
        "L'équilibre des liquides organiques"
      ],
      "bonne_reponse": 2,
      "explication": "Foie / Vésicule Biliaire : Stocke le sang, régit le drainage et l'évacuation.",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q343",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quel est le rôle principal du couple Cœur / Intestin Grêle ?",
      "options": [
        "Commande les vaisseaux sanguins et l'activité mentale",
        "Stocke le sang, régit le drainage et l'évacuation",
        "L'équilibre des liquides organiques",
        "La respiration et la peau (contrôle le Gros Intestin)"
      ],
      "bonne_reponse": 0,
      "explication": "Cœur / Intestin Grêle : Commande les vaisseaux sanguins et l'activité mentale.",
      "source": "Cours A1 p.260-263 (Saisons & nutrition)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q344",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Deltoïde » est-il associé ?",
      "options": [
        "Triple Réchauffeur",
        "Poumon",
        "Estomac",
        "Cœur"
      ],
      "bonne_reponse": 1,
      "explication": "Deltoïde → Poumon.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q345",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Coraco-brachial » est-il associé ?",
      "options": [
        "Rein",
        "Poumon",
        "Foie",
        "Vessie"
      ],
      "bonne_reponse": 1,
      "explication": "Coraco-brachial → Poumon.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q346",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Long supinateur (brachioradial) » est-il associé ?",
      "options": [
        "Estomac",
        "Vessie",
        "Rate/Pancréas",
        "Foie"
      ],
      "bonne_reponse": 0,
      "explication": "Long supinateur (brachioradial) → Estomac.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q347",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Triceps brachial » est-il associé ?",
      "options": [
        "Rate/Pancréas",
        "Poumon",
        "Estomac",
        "Foie"
      ],
      "bonne_reponse": 0,
      "explication": "Triceps brachial → Rate/Pancréas.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q348",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Rhomboïdes » est-il associé ?",
      "options": [
        "Foie",
        "Intestin Grêle",
        "Cœur",
        "Vésicule Biliaire"
      ],
      "bonne_reponse": 0,
      "explication": "Rhomboïdes → Foie.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q349",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Élévateur de la scapula » est-il associé ?",
      "options": [
        "Maître Cœur",
        "Estomac",
        "Foie",
        "Vésicule Biliaire"
      ],
      "bonne_reponse": 1,
      "explication": "Élévateur de la scapula → Estomac.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q350",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Trapèze moyen » est-il associé ?",
      "options": [
        "Gros Intestin",
        "Rate/Pancréas",
        "Rein",
        "Vésicule Biliaire"
      ],
      "bonne_reponse": 1,
      "explication": "Trapèze moyen → Rate/Pancréas.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q351",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Trapèze inférieur » est-il associé ?",
      "options": [
        "Poumon",
        "Maître Cœur",
        "Rate/Pancréas",
        "Rein"
      ],
      "bonne_reponse": 2,
      "explication": "Trapèze inférieur → Rate/Pancréas.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q352",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Trapèze supérieur » est-il associé ?",
      "options": [
        "Rein",
        "Estomac",
        "Foie",
        "Poumon"
      ],
      "bonne_reponse": 0,
      "explication": "Trapèze supérieur → Rein.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q353",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Fléchisseurs et extenseurs du cou » est-il associé ?",
      "options": [
        "Poumon",
        "Rein",
        "Rate/Pancréas",
        "Estomac"
      ],
      "bonne_reponse": 3,
      "explication": "Fléchisseurs et extenseurs du cou → Estomac.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q354",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Abdominaux (grand droit / obliques) » est-il associé ?",
      "options": [
        "Maître Cœur",
        "Intestin Grêle",
        "Vessie",
        "Triple Réchauffeur"
      ],
      "bonne_reponse": 1,
      "explication": "Abdominaux (grand droit / obliques) → Intestin Grêle.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q355",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Pectiné » est-il associé ?",
      "options": [
        "Maître Cœur",
        "Rate/Pancréas",
        "Vessie",
        "Rein"
      ],
      "bonne_reponse": 0,
      "explication": "Pectiné → Maître Cœur.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q356",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Piriforme (pyramidal) » est-il associé ?",
      "options": [
        "Maître Cœur",
        "Foie",
        "Poumon",
        "Rate/Pancréas"
      ],
      "bonne_reponse": 0,
      "explication": "Piriforme (pyramidal) → Maître Cœur.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q357",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Sartorius (couturier) » est-il associé ?",
      "options": [
        "Gros Intestin",
        "Intestin Grêle",
        "Cœur",
        "Triple Réchauffeur"
      ],
      "bonne_reponse": 3,
      "explication": "Sartorius (couturier) → Triple Réchauffeur.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q358",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Poplité » est-il associé ?",
      "options": [
        "Estomac",
        "Vésicule Biliaire",
        "Rein",
        "Maître Cœur"
      ],
      "bonne_reponse": 1,
      "explication": "Poplité → Vésicule Biliaire.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q359",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Adducteurs » est-il associé ?",
      "options": [
        "Intestin Grêle",
        "Poumon",
        "Gros Intestin",
        "Maître Cœur"
      ],
      "bonne_reponse": 3,
      "explication": "Adducteurs → Maître Cœur.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q360",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Tibial antérieur » est-il associé ?",
      "options": [
        "Cœur",
        "Gros Intestin",
        "Maître Cœur",
        "Vessie"
      ],
      "bonne_reponse": 3,
      "explication": "Tibial antérieur → Vessie.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q361",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Tibial postérieur » est-il associé ?",
      "options": [
        "Poumon",
        "Triple Réchauffeur",
        "Maître Cœur",
        "Vessie"
      ],
      "bonne_reponse": 3,
      "explication": "Tibial postérieur → Vessie.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q362",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Opposant du pouce » est-il associé ?",
      "options": [
        "Rate/Pancréas",
        "Intestin Grêle",
        "Cœur",
        "Vessie"
      ],
      "bonne_reponse": 0,
      "explication": "Opposant du pouce → Rate/Pancréas.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q363",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Diaphragme » est-il associé ?",
      "options": [
        "Maître Cœur",
        "Rein",
        "Poumon",
        "Intestin Grêle"
      ],
      "bonne_reponse": 2,
      "explication": "Diaphragme → Poumon.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q364",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Sacro-spinaux » est-il associé ?",
      "options": [
        "Rein",
        "Estomac",
        "Vessie",
        "Intestin Grêle"
      ],
      "bonne_reponse": 2,
      "explication": "Sacro-spinaux → Vessie.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q365",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Gracile (droit interne) » est-il associé ?",
      "options": [
        "Estomac",
        "Triple Réchauffeur",
        "Gros Intestin",
        "Vessie"
      ],
      "bonne_reponse": 1,
      "explication": "Gracile (droit interne) → Triple Réchauffeur.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q366",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Iliaque » est-il associé ?",
      "options": [
        "Estomac",
        "Maître Cœur",
        "Rein",
        "Vessie"
      ],
      "bonne_reponse": 2,
      "explication": "Iliaque → Rein.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q367",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Grand fessier » est-il associé ?",
      "options": [
        "Foie",
        "Poumon",
        "Vésicule Biliaire",
        "Maître Cœur"
      ],
      "bonne_reponse": 3,
      "explication": "Grand fessier → Maître Cœur.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q368",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Ischio-jambiers » est-il associé ?",
      "options": [
        "Triple Réchauffeur",
        "Gros Intestin",
        "Cœur",
        "Rein"
      ],
      "bonne_reponse": 1,
      "explication": "Ischio-jambiers → Gros Intestin.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q369",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Soléaire » est-il associé ?",
      "options": [
        "Gros Intestin",
        "Vessie",
        "Rate/Pancréas",
        "Triple Réchauffeur"
      ],
      "bonne_reponse": 3,
      "explication": "Soléaire → Triple Réchauffeur.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q370",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Gastrocnémien (jumeaux) » est-il associé ?",
      "options": [
        "Foie",
        "Triple Réchauffeur",
        "Vésicule Biliaire",
        "Rate/Pancréas"
      ],
      "bonne_reponse": 1,
      "explication": "Gastrocnémien (jumeaux) → Triple Réchauffeur.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q371",
      "theme": "muscles_meridiens",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quel méridien le muscle « Carré des lombes » est-il associé ?",
      "options": [
        "Maître Cœur",
        "Poumon",
        "Triple Réchauffeur",
        "Gros Intestin"
      ],
      "bonne_reponse": 3,
      "explication": "Carré des lombes → Gros Intestin.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q372",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Deltoïde » ?",
      "options": [
        "Élévation de l'omoplate",
        "Flexion du genou et adducteur de la cuisse",
        "Abduction du bras",
        "Flexion dorsale et inversion du pied"
      ],
      "bonne_reponse": 2,
      "explication": "Deltoïde : Abduction du bras.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q373",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Triceps brachial » ?",
      "options": [
        "Adducteur de l'omoplate",
        "Flexion plantaire et inversion",
        "Flexion dorsale et inversion du pied",
        "Extension du coude"
      ],
      "bonne_reponse": 3,
      "explication": "Triceps brachial : Extension du coude.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q374",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Rhomboïdes » ?",
      "options": [
        "Flexion du genou et adducteur de la cuisse",
        "Flexion de la tête sur le tronc",
        "Adducteur de l'omoplate",
        "Flexion de la jambe sur la cuisse et rotation du genou"
      ],
      "bonne_reponse": 2,
      "explication": "Rhomboïdes : Adducteur de l'omoplate.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q375",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Trapèze supérieur » ?",
      "options": [
        "Élévation de l'omoplate",
        "Flexion de la hanche",
        "Flexion de la jambe sur la cuisse et rotation du genou",
        "Flexion de la tête sur le tronc"
      ],
      "bonne_reponse": 0,
      "explication": "Trapèze supérieur : Élévation de l'omoplate.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q376",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Abdominaux (grand droit / obliques) » ?",
      "options": [
        "Flexion de la tête sur le tronc",
        "Flexion de la jambe sur la cuisse et rotation du genou",
        "Flexion du tronc et rotation du thorax",
        "Extension du tronc et rotation du thorax"
      ],
      "bonne_reponse": 2,
      "explication": "Abdominaux (grand droit / obliques) : Flexion du tronc et rotation du thorax.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q377",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Sartorius (couturier) » ?",
      "options": [
        "Flexion plantaire",
        "Mobilise l'omoplate vers la colonne",
        "Élévation de l'omoplate",
        "Flexion de la cuisse et rotation externe"
      ],
      "bonne_reponse": 3,
      "explication": "Sartorius (couturier) : Flexion de la cuisse et rotation externe.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q378",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Poplité » ?",
      "options": [
        "Flexion du coude et rotation de l'avant-bras",
        "Flexion de la jambe sur la cuisse et rotation du genou",
        "Flexion dorsale et inversion du pied",
        "Extension du tronc et rotation du thorax"
      ],
      "bonne_reponse": 1,
      "explication": "Poplité : Flexion de la jambe sur la cuisse et rotation du genou.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q379",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Soléaire » ?",
      "options": [
        "Flexion de la hanche",
        "Flexion de l'épaule",
        "Flexion plantaire et inversion",
        "Flexion plantaire"
      ],
      "bonne_reponse": 3,
      "explication": "Soléaire : Flexion plantaire.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q380",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Diaphragme » ?",
      "options": [
        "Flexion plantaire",
        "Abduction du bras",
        "Flexion du tronc et rotation du thorax",
        "Muscle respiratoire"
      ],
      "bonne_reponse": 3,
      "explication": "Diaphragme : Muscle respiratoire.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q381",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Carré des lombes » ?",
      "options": [
        "Élévation de l'omoplate",
        "Opposition du pouce avec le 5e doigt",
        "Élévation du bassin",
        "Flexion du coude et rotation de l'avant-bras"
      ],
      "bonne_reponse": 2,
      "explication": "Carré des lombes : Élévation du bassin.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q382",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Grand fessier » ?",
      "options": [
        "Flexion de la hanche",
        "Extenseur de la cuisse",
        "Mobilise l'omoplate vers le bas",
        "Flexion du coude et rotation de l'avant-bras"
      ],
      "bonne_reponse": 1,
      "explication": "Grand fessier : Extenseur de la cuisse.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q383",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Iliaque » ?",
      "options": [
        "Mobilise l'omoplate vers la colonne",
        "Extension du tronc et rotation du thorax",
        "Flexion de la hanche",
        "Élévation de l'omoplate"
      ],
      "bonne_reponse": 2,
      "explication": "Iliaque : Flexion de la hanche.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q384",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Ischio-jambiers » ?",
      "options": [
        "Flexion de la cuisse et rotation externe",
        "Flexion du genou",
        "Rotation externe de la cuisse",
        "Flexion de l'épaule"
      ],
      "bonne_reponse": 1,
      "explication": "Ischio-jambiers : Flexion du genou.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q385",
      "theme": "muscles_details",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Quelle est l'action principale du muscle « Opposant du pouce » ?",
      "options": [
        "Flexion plantaire et inversion",
        "Opposition du pouce avec le 5e doigt",
        "Flexion du genou",
        "Flexion du coude et rotation de l'avant-bras"
      ],
      "bonne_reponse": 1,
      "explication": "Opposant du pouce : Opposition du pouce avec le 5e doigt.",
      "source": "Cours A1 p.305-330 (29 tests additionnels)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q386",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Combien d'os compte (environ) le squelette d'un adulte ?",
      "options": [
        "106",
        "206",
        "306",
        "406"
      ],
      "bonne_reponse": 1,
      "explication": "Le squelette adulte compte environ 206 os.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q387",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel est l'os le plus long du corps, dans la cuisse ?",
      "options": [
        "L'humérus (bras)",
        "Le fémur (cuisse)",
        "Le tibia (jambe)",
        "Le radius (avant-bras)"
      ],
      "bonne_reponse": 1,
      "explication": "Le fémur est l'os le plus long du corps (cuisse). Ne pas confondre avec le tibia (jambe).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q388",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appelle l'os plat au centre de la poitrine, où s'attachent les côtes ?",
      "options": [
        "La clavicule (épaule)",
        "Le sternum (centre poitrine)",
        "La scapula (omoplate)",
        "Le xiphoïde seul"
      ],
      "bonne_reponse": 1,
      "explication": "Le sternum, au centre de la poitrine.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q389",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appelle l'os du bras, entre l'épaule et le coude ?",
      "options": [
        "Le fémur",
        "L'humérus",
        "Le radius",
        "Le tibia"
      ],
      "bonne_reponse": 1,
      "explication": "L'humérus relie l'épaule au coude.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q390",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel petit os en forme de S relie le bras au tronc, à l'avant de l'épaule ?",
      "options": [
        "La clavicule",
        "L'omoplate",
        "Le sternum",
        "La rotule"
      ],
      "bonne_reponse": 0,
      "explication": "La clavicule.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q391",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Les côtes forment ensemble la… ?",
      "options": [
        "Colonne vertébrale",
        "Cage thoracique",
        "Ceinture pelvienne",
        "Boîte crânienne"
      ],
      "bonne_reponse": 1,
      "explication": "Les côtes forment la cage thoracique, qui protège cœur et poumons.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q392",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel est le plus petit os du corps, situé dans l'oreille ?",
      "options": [
        "L'étrier",
        "La rotule",
        "Le coccyx",
        "Le scaphoïde"
      ],
      "bonne_reponse": 0,
      "explication": "L'étrier, dans l'oreille moyenne (avec le marteau et l'enclume).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q393",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Comment appelle-t-on les petits os empilés qui forment la colonne ?",
      "options": [
        "Les côtes",
        "Les vertèbres",
        "Les phalanges",
        "Les métacarpes"
      ],
      "bonne_reponse": 1,
      "explication": "Les vertèbres, empilées, forment la colonne vertébrale.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q394",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la petite rotule située devant le genou ?",
      "options": [
        "La rotule (patella)",
        "Le ménisque",
        "Le tibia",
        "Le péroné"
      ],
      "bonne_reponse": 0,
      "explication": "La rotule (patella) protège l'avant du genou.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q395",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel organe pompe le sang dans tout le corps ?",
      "options": [
        "Les poumons (échanges gazeux)",
        "Le cœur (pompe le sang)",
        "Le foie (filtre)",
        "La rate (immunité)"
      ],
      "bonne_reponse": 1,
      "explication": "Le cœur, une pompe musculaire.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q396",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelles cellules du sang transportent l'oxygène ?",
      "options": [
        "Les globules blancs",
        "Les globules rouges",
        "Les plaquettes",
        "Les neurones"
      ],
      "bonne_reponse": 1,
      "explication": "Les globules rouges transportent l'oxygène (grâce à l'hémoglobine).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q397",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelles cellules du sang défendent le corps contre les infections ?",
      "options": [
        "Les globules rouges",
        "Les globules blancs",
        "Les plaquettes",
        "Les fibres"
      ],
      "bonne_reponse": 1,
      "explication": "Les globules blancs sont les défenseurs (immunité).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q398",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment appelle-t-on les vaisseaux qui ramènent le sang vers le cœur ?",
      "options": [
        "Les artères",
        "Les veines",
        "Les nerfs",
        "Les tendons"
      ],
      "bonne_reponse": 1,
      "explication": "Les veines ramènent le sang au cœur ; les artères l'en éloignent.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q399",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Grâce à quoi le sang est-il rouge ?",
      "options": [
        "Au calcium",
        "À l'hémoglobine (qui contient du fer)",
        "Au sucre",
        "À l'eau"
      ],
      "bonne_reponse": 1,
      "explication": "L'hémoglobine, riche en fer, donne sa couleur rouge au sang.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q400",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle quantité de sang (environ) circule chez un adulte ?",
      "options": [
        "1 litre",
        "5 litres",
        "12 litres",
        "20 litres"
      ],
      "bonne_reponse": 1,
      "explication": "Environ 5 litres de sang chez un adulte.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q401",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de muscles (environ) dans le corps humain ?",
      "options": [
        "Environ 100",
        "Environ 400",
        "Environ 650",
        "Environ 1 200"
      ],
      "bonne_reponse": 2,
      "explication": "Environ 650 muscles squelettiques (ordre de grandeur courant en cours).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q402",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quel muscle travaille sans arrêt, jour et nuit, sans qu'on y pense ?",
      "options": [
        "Le biceps",
        "Le cœur (muscle cardiaque)",
        "Le mollet",
        "Le fessier"
      ],
      "bonne_reponse": 1,
      "explication": "Le cœur est un muscle qui bat en continu (muscle cardiaque).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q403",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appelle le grand muscle de la respiration, sous les poumons ?",
      "options": [
        "Le diaphragme",
        "Le grand dorsal",
        "Le psoas",
        "Le trapèze"
      ],
      "bonne_reponse": 0,
      "explication": "Le diaphragme, principal muscle de la respiration.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q404",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Par quoi les muscles sont-ils reliés aux os ?",
      "options": [
        "Les ligaments",
        "Les tendons",
        "Les nerfs",
        "Les veines"
      ],
      "bonne_reponse": 1,
      "explication": "Les tendons relient les muscles aux os (les ligaments relient les os entre eux).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q405",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quel muscle puissant forme la fesse ?",
      "options": [
        "Le quadriceps",
        "Le grand fessier",
        "Le mollet",
        "Le deltoïde"
      ],
      "bonne_reponse": 1,
      "explication": "Le grand fessier, l'un des muscles les plus puissants du corps.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q406",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quel organe est le « centre de commande » du corps ?",
      "options": [
        "Le cœur",
        "Le cerveau",
        "Le foie",
        "L'estomac"
      ],
      "bonne_reponse": 1,
      "explication": "Le cerveau commande le corps.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q407",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le cerveau et la moelle épinière forment le… ?",
      "options": [
        "Système digestif",
        "Système nerveux central",
        "Système sanguin",
        "Système musculaire"
      ],
      "bonne_reponse": 1,
      "explication": "Cerveau + moelle épinière = système nerveux central.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q408",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Qui transmet les messages entre le cerveau et le reste du corps ?",
      "options": [
        "Les nerfs",
        "Les tendons",
        "Les artères",
        "Les os"
      ],
      "bonne_reponse": 0,
      "explication": "Les nerfs transmettent les messages dans tout le corps.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q409",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment appelle-t-on les deux moitiés du cerveau ?",
      "options": [
        "Les lobes",
        "Les hémisphères",
        "Les ventricules",
        "Les méninges"
      ],
      "bonne_reponse": 1,
      "explication": "Le cerveau a deux hémisphères (gauche et droit).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q410",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Par où commence la digestion ?",
      "options": [
        "L'estomac",
        "La bouche",
        "L'intestin",
        "Le foie"
      ],
      "bonne_reponse": 1,
      "explication": "La digestion commence dans la bouche (mastication, salive).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q411",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Dans quel organe les aliments sont-ils brassés et digérés après la bouche ?",
      "options": [
        "L'estomac",
        "Le poumon",
        "Le rein",
        "Le cœur"
      ],
      "bonne_reponse": 0,
      "explication": "L'estomac brasse et digère les aliments.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q412",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où la plupart des nutriments passent-ils dans le sang ?",
      "options": [
        "Le gros intestin",
        "L'intestin grêle",
        "L'estomac",
        "L'œsophage"
      ],
      "bonne_reponse": 1,
      "explication": "L'intestin grêle absorbe la majorité des nutriments.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q413",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi sert surtout le gros intestin ?",
      "options": [
        "À digérer les graisses",
        "À réabsorber l'eau et former les selles",
        "À fabriquer le sang",
        "À filtrer l'air"
      ],
      "bonne_reponse": 1,
      "explication": "Le gros intestin réabsorbe l'eau et forme les selles.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q414",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quel organe permet de respirer et d'apporter l'oxygène au sang ?",
      "options": [
        "Le foie",
        "Les poumons",
        "Les reins",
        "Le cœur"
      ],
      "bonne_reponse": 1,
      "explication": "Les poumons assurent les échanges d'oxygène.",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q415",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quel gaz absorbe-t-on en respirant (en inspirant) ?",
      "options": [
        "L'oxygène",
        "Le gaz carbonique",
        "L'azote",
        "L'hélium"
      ],
      "bonne_reponse": 0,
      "explication": "On absorbe l'oxygène et on rejette le gaz carbonique (CO₂).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q416",
      "theme": "anatomie_facile",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Par quel conduit l'air descend-il vers les poumons ?",
      "options": [
        "L'œsophage",
        "La trachée",
        "L'aorte",
        "L'urètre"
      ],
      "bonne_reponse": 1,
      "explication": "L'air passe par la trachée (l'œsophage, lui, conduit les aliments).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q417",
      "theme": "anatomie_facile",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "On possède deux poumons.",
      "bonne_reponse": true,
      "explication": "Oui : un poumon droit (3 lobes) et un poumon gauche (2 lobes, plus petit pour laisser la place au cœur).",
      "source": "Notions d'anatomie générale",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q422",
      "theme": "meridiens",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque abréviation à son méridien (série 1).",
      "paires": [
        [
          "E",
          "Estomac"
        ],
        [
          "RP",
          "Rate/Pancréas"
        ],
        [
          "C",
          "Cœur"
        ],
        [
          "IG",
          "Intestin Grêle"
        ]
      ],
      "explication": "E = Estomac, RP = Rate/Pancréas, C = Cœur, IG = Intestin Grêle.",
      "source": "Planches méridiens – Cours A1 p.460-463",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q423",
      "theme": "meridiens",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque abréviation à son méridien (série 2).",
      "paires": [
        [
          "VB",
          "Vésicule Biliaire"
        ],
        [
          "F",
          "Foie"
        ],
        [
          "TR",
          "Triple Réchauffeur"
        ],
        [
          "MC",
          "Maître Cœur"
        ]
      ],
      "explication": "VB = Vésicule Biliaire, F = Foie, TR = Triple Réchauffeur, MC = Maître Cœur.",
      "source": "Planches méridiens – Cours A1 p.466-469",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q424",
      "theme": "meridiens",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque abréviation à son méridien (série 3).",
      "paires": [
        [
          "P",
          "Poumon"
        ],
        [
          "GI",
          "Gros Intestin"
        ],
        [
          "VC",
          "Vaisseau Conception"
        ],
        [
          "VG",
          "Vaisseau Gouverneur"
        ]
      ],
      "explication": "P = Poumon, GI = Gros Intestin, VC = Vaisseau Conception, VG = Vaisseau Gouverneur.",
      "source": "Planches méridiens – Cours A1 p.458-459, 470-471",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q425",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de points compte le méridien de la Vessie (V), le plus long du corps ?",
      "options": [
        "27",
        "45",
        "67",
        "21"
      ],
      "bonne_reponse": 2,
      "explication": "67 points (V1 à V67). C'est le méridien le plus long.",
      "source": "Planche méridien Vessie – Cours A1 p.464",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q426",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de points compte le méridien de l'Estomac (E) ?",
      "options": [
        "20",
        "45",
        "67",
        "14"
      ],
      "bonne_reponse": 1,
      "explication": "45 points (E1 à E45).",
      "source": "Planche méridien Estomac – Cours A1 p.460",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q427",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de points compte le méridien du Foie (F) ?",
      "options": [
        "9",
        "14",
        "21",
        "27"
      ],
      "bonne_reponse": 1,
      "explication": "14 points (F1 à F14).",
      "source": "Planche méridien Foie – Cours A1 p.469",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q428",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de points compte le méridien du Cœur (C) ?",
      "options": [
        "9",
        "11",
        "14",
        "20"
      ],
      "bonne_reponse": 0,
      "explication": "9 points (C1 à C9).",
      "source": "Planche méridien Cœur – Cours A1 p.462",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q429",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de points compte le méridien du Poumon (P) ?",
      "options": [
        "7",
        "9",
        "11",
        "20"
      ],
      "bonne_reponse": 2,
      "explication": "11 points (P1 à P11).",
      "source": "Planche méridien Poumon – Cours A1 p.470",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q430",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de points compte le méridien du Gros Intestin (GI) ?",
      "options": [
        "14",
        "19",
        "20",
        "23"
      ],
      "bonne_reponse": 2,
      "explication": "20 points (GI1 à GI20).",
      "source": "Planche méridien Gros Intestin – Cours A1 p.471",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q431",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de points compte le méridien du Rein (R) ?",
      "options": [
        "21",
        "27",
        "44",
        "67"
      ],
      "bonne_reponse": 1,
      "explication": "27 points (R1 à R27).",
      "source": "Planche méridien Rein – Cours A1 p.465",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q432",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de points compte le méridien de la Rate/Pancréas (RP) ?",
      "options": [
        "19",
        "21",
        "23",
        "27"
      ],
      "bonne_reponse": 1,
      "explication": "21 points (RP1 à RP21).",
      "source": "Planche méridien Rate/Pancréas – Cours A1 p.461",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q433",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Sur les planches, quel méridien parcourt toute la face postérieure du dos sur deux lignes parallèles ?",
      "options": [
        "Vésicule Biliaire (VB)",
        "Vessie (V)",
        "Vaisseau Gouverneur (VG)",
        "Rein (R)"
      ],
      "bonne_reponse": 1,
      "explication": "Le méridien de la Vessie (V) descend dans le dos sur deux chaînes parallèles de part et d'autre de la colonne.",
      "source": "Planche méridien Vessie – Cours A1 p.464",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q434",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel méridien suit la ligne médiane ANTÉRIEURE du corps (du pubis au menton) ?",
      "options": [
        "Vaisseau Gouverneur (VG)",
        "Vaisseau Conception (VC)",
        "Estomac (E)",
        "Rein (R)"
      ],
      "bonne_reponse": 1,
      "explication": "Le Vaisseau Conception (VC) court sur la ligne médiane avant, de VC1 (périnée) à VC24 (menton).",
      "source": "Planche Vaisseau Conception – Cours A1 p.458",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q435",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel méridien suit la ligne médiane POSTÉRIEURE (le long de la colonne, jusqu'au visage) ?",
      "options": [
        "Vaisseau Conception (VC)",
        "Vaisseau Gouverneur (VG)",
        "Vessie (V)",
        "Vésicule Biliaire (VB)"
      ],
      "bonne_reponse": 1,
      "explication": "Le Vaisseau Gouverneur (VG) court sur la ligne médiane arrière, de VG1 au coccyx jusqu'au visage.",
      "source": "Planche Vaisseau Gouverneur – Cours A1 p.459",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q436",
      "theme": "meridiens_trajet",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Où se situe le point VG20, repère classique au sommet de la tête ?",
      "options": [
        "Au sommet du crâne",
        "Sous le nez",
        "Au bas du dos",
        "Au pli du coude"
      ],
      "bonne_reponse": 0,
      "explication": "VG20 est situé au sommet du crâne (vertex), sur la ligne médiane.",
      "source": "Planche Vaisseau Gouverneur – Cours A1 p.459",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q437",
      "theme": "meridiens_trajet",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le méridien du Poumon se termine au bout du pouce, au point P11.",
      "bonne_reponse": true,
      "explication": "Vrai : sur la planche, P11 est situé à l'extrémité du pouce.",
      "source": "Planche méridien Poumon – Cours A1 p.470",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q438",
      "theme": "meridiens_trajet",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le méridien du Cœur se termine au point C9, au bout du petit doigt (auriculaire).",
      "bonne_reponse": true,
      "explication": "Vrai : C9 est le dernier point, à l'extrémité de l'auriculaire.",
      "source": "Planche méridien Cœur – Cours A1 p.462",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q439",
      "theme": "meridiens_trajet",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le méridien de la Vessie est le plus long du corps avec 67 points.",
      "bonne_reponse": true,
      "explication": "Vrai : la Vessie compte 67 points, c'est le méridien le plus long.",
      "source": "Planche méridien Vessie – Cours A1 p.464",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q440",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "En quelles deux grandes parties divise-t-on le squelette humain ?",
      "options": [
        "Axial et appendiculaire",
        "Long et court",
        "Central et périphérique",
        "Antérieur et postérieur"
      ],
      "bonne_reponse": 0,
      "explication": "Squelette axial (crâne, colonne, côtes, sternum) et squelette appendiculaire (membres + ceintures).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q441",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Que comprend le squelette AXIAL ?",
      "options": [
        "Les membres et les ceintures",
        "Le crâne, la colonne, les côtes et le sternum",
        "Les bras et les jambes",
        "La ceinture scapulaire et pelvienne uniquement"
      ],
      "bonne_reponse": 1,
      "explication": "Le crâne, la colonne vertébrale, les côtes et le sternum ; son rôle est de protéger les organes vitaux.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q442",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Que comprend le squelette APPENDICULAIRE ?",
      "options": [
        "Le crâne et la colonne",
        "Les côtes et le sternum",
        "Les membres et les ceintures scapulaire et pelvienne",
        "Les vertèbres et le sacrum"
      ],
      "bonne_reponse": 2,
      "explication": "Les membres supérieurs et inférieurs ainsi que les ceintures scapulaire et pelvienne ; il assure soutien et mouvement.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q443",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Le carpe et le tarse sont des exemples de quel type d'os ?",
      "options": [
        "Os longs",
        "Os courts",
        "Os plats",
        "Os sésamoïdes"
      ],
      "bonne_reponse": 1,
      "explication": "Ce sont des os courts (longueur, largeur et épaisseur équivalentes).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q444",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Les os pariétaux et l'os iliaque sont des exemples de quel type d'os ?",
      "options": [
        "Os courts",
        "Os longs",
        "Os plats",
        "Os irréguliers"
      ],
      "bonne_reponse": 2,
      "explication": "Ce sont des os plats (minces et souvent courbés).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q445",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Les vertèbres et les os de la face sont classés comme :",
      "options": [
        "Os plats",
        "Os irréguliers",
        "Os courts",
        "Os sésamoïdes"
      ],
      "bonne_reponse": 1,
      "explication": "Os irréguliers : forme complexe n'entrant pas dans les autres catégories.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q446",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La patella (rotule) est un exemple de quel type d'os ?",
      "options": [
        "Os long",
        "Os court",
        "Os plat",
        "Os sésamoïde"
      ],
      "bonne_reponse": 3,
      "explication": "Os sésamoïde : petit os incorporé dans un tendon, proche d'une articulation.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q447",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appelle le corps (partie centrale) d'un os long ?",
      "options": [
        "Épiphyse",
        "Diaphyse",
        "Métaphyse",
        "Périoste"
      ],
      "bonne_reponse": 1,
      "explication": "La diaphyse, constituée d'os compact.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q448",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appelle la jonction entre l'épiphyse et la diaphyse ?",
      "options": [
        "Périoste",
        "Métaphyse",
        "Endoste",
        "Cartilage articulaire"
      ],
      "bonne_reponse": 1,
      "explication": "La métaphyse.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q449",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appelle la fine membrane vascularisée qui entoure la diaphyse ?",
      "options": [
        "Le périoste",
        "Le cartilage",
        "L'épiphyse",
        "La moelle"
      ],
      "bonne_reponse": 0,
      "explication": "Le périoste, membrane protectrice accolée à la diaphyse et à la métaphyse.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q450",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Combien de vertèbres cervicales possède-t-on (C1 à C7) ?",
      "options": [
        "5",
        "7",
        "12",
        "4"
      ],
      "bonne_reponse": 1,
      "explication": "7 vertèbres cervicales, plus fines et plus mobiles.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q451",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Combien de vertèbres thoraciques (dorsales) compte-t-on (T1 à T12) ?",
      "options": [
        "7",
        "10",
        "12",
        "5"
      ],
      "bonne_reponse": 2,
      "explication": "12 vertèbres thoraciques, qui s'articulent avec les côtes.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q452",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Combien de vertèbres lombaires compte-t-on (L1 à L5) ?",
      "options": [
        "7",
        "5",
        "4",
        "12"
      ],
      "bonne_reponse": 1,
      "explication": "5 vertèbres lombaires, les plus massives.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q453",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le sacrum est formé de :",
      "options": [
        "4 vertèbres soudées",
        "5 vertèbres soudées",
        "7 vertèbres mobiles",
        "3 vertèbres soudées"
      ],
      "bonne_reponse": 1,
      "explication": "5 vertèbres soudées (S1 à S5), qui s'articulent avec les os iliaques.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q454",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle ouverture de la vertèbre laisse passer la moelle épinière ?",
      "options": [
        "Le corps vertébral",
        "Le foramen vertébral",
        "Le processus épineux",
        "Le pédicule"
      ],
      "bonne_reponse": 1,
      "explication": "Le foramen vertébral, créé par l'arc neural.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q455",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appelle l'extension osseuse postérieure d'une vertèbre, palpable sous la peau ?",
      "options": [
        "Le processus transverse",
        "Le processus épineux",
        "Le corps vertébral",
        "La métaphyse"
      ],
      "bonne_reponse": 1,
      "explication": "Le processus épineux.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q456",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Combien de paires de côtes possède l'être humain ?",
      "options": [
        "7",
        "10",
        "12",
        "24"
      ],
      "bonne_reponse": 2,
      "explication": "12 paires de côtes.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q457",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Les deux dernières paires de côtes, non rattachées à l'avant, s'appellent :",
      "options": [
        "Vraies côtes",
        "Côtes flottantes",
        "Côtes sternales",
        "Fausses côtes supérieures"
      ],
      "bonne_reponse": 1,
      "explication": "Les côtes flottantes (les 11e et 12e paires).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q458",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelles sont les trois parties du sternum ?",
      "options": [
        "Manubrium, corps, appendice xiphoïde",
        "Tête, col, diaphyse",
        "Ilion, ischion, pubis",
        "Épiphyse, métaphyse, diaphyse"
      ],
      "bonne_reponse": 0,
      "explication": "Manubrium, corps et appendice xiphoïde.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q459",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'os coxal (de chaque côté du bassin) résulte de la fusion de :",
      "options": [
        "Sacrum, coccyx et ilion",
        "Ilion, ischion et pubis",
        "Fémur, patella et tibia",
        "Pubis, sacrum et fémur"
      ],
      "bonne_reponse": 1,
      "explication": "L'ilion (os iliaque), l'ischion et le pubis.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q460",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quels sont les deux os de l'avant-bras ?",
      "options": [
        "Tibia et fibula",
        "Radius et ulna",
        "Humérus et radius",
        "Carpe et métacarpe"
      ],
      "bonne_reponse": 1,
      "explication": "Le radius et l'ulna (anciennement cubitus).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q461",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quels sont les deux os de la jambe (sous le genou) ?",
      "options": [
        "Radius et ulna",
        "Fémur et patella",
        "Tibia et fibula",
        "Tarse et métatarse"
      ],
      "bonne_reponse": 2,
      "explication": "Le tibia et la fibula (anciennement péroné).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q462",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien d'os compte le tarse (arrière du pied) ?",
      "options": [
        "5",
        "7",
        "8",
        "14"
      ],
      "bonne_reponse": 1,
      "explication": "7 os : talus, calcanéus, cuboïde, naviculaire et 3 cunéiformes.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q463",
      "theme": "os_crane",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans la boîte crânienne, quels os existent par paire (au nombre de deux) ?",
      "options": [
        "Les pariétaux et les temporaux",
        "L'occiput et le frontal",
        "Le sphénoïde et l'ethmoïde",
        "La mandibule et le frontal"
      ],
      "bonne_reponse": 0,
      "explication": "Les pariétaux et les temporaux (2 chacun) ; l'occiput, le sphénoïde, l'ethmoïde, le frontal et la mandibule sont uniques.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q464",
      "theme": "os_crane",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le plan SAGITTAL coupe le corps en :",
      "options": [
        "Une partie haute et une partie basse",
        "Deux parties droite et gauche",
        "Une partie avant et une partie arrière",
        "Deux parties interne et externe"
      ],
      "bonne_reponse": 1,
      "explication": "Deux parties symétriques, droite et gauche.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q465",
      "theme": "os_crane",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le plan FRONTAL coupe le corps en :",
      "options": [
        "Droite et gauche",
        "Avant et arrière",
        "Haut et bas",
        "Interne et externe"
      ],
      "bonne_reponse": 1,
      "explication": "Une partie antérieure (avant) et une partie postérieure (arrière).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q466",
      "theme": "os_crane",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le plan HORIZONTAL (transverse) coupe le corps en :",
      "options": [
        "Avant et arrière",
        "Droite et gauche",
        "Supérieure et inférieure",
        "Interne et externe"
      ],
      "bonne_reponse": 2,
      "explication": "Une partie supérieure et une partie inférieure.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q467",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En vocabulaire anatomique, « proximal » désigne ce qui est :",
      "options": [
        "Au plus proche de la racine d'un membre",
        "Le plus loin de la racine d'un membre",
        "Proche de l'axe médian",
        "Dans la région inférieure"
      ],
      "bonne_reponse": 0,
      "explication": "Au plus proche de la racine d'un membre (à l'opposé de distal).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q468",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En vocabulaire anatomique, « crânial (céphalique) » se rapporte à :",
      "options": [
        "La région supérieure du corps",
        "La région inférieure du corps",
        "L'axe médian",
        "Ce qui s'éloigne du centre"
      ],
      "bonne_reponse": 0,
      "explication": "La région supérieure du corps (à l'opposé de caudal).",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q469",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'ostéoporose se définit comme :",
      "options": [
        "Une perte de densité osseuse augmentant le risque de fractures",
        "Une maladie auto-immune des articulations",
        "Une infection osseuse bactérienne",
        "Une déformation de la colonne"
      ],
      "bonne_reponse": 0,
      "explication": "Une dégénérescence de la densité osseuse, qui augmente le risque de fractures.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q470",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'arthrite rhumatoïde est :",
      "options": [
        "Une dégradation du cartilage liée à l'âge",
        "Une maladie auto-immune inflammatoire des articulations",
        "Une perte de densité osseuse",
        "Une infection des os"
      ],
      "bonne_reponse": 1,
      "explication": "Une maladie auto-immune provoquant une inflammation des articulations.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q471",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'arthrose est :",
      "options": [
        "Une maladie auto-immune",
        "Une dégénérescence du cartilage articulaire",
        "Une infection bactérienne de l'os",
        "Une déformation de la colonne dans 3 plans"
      ],
      "bonne_reponse": 1,
      "explication": "Une maladie dégénérative caractérisée par la dégradation du cartilage.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q472",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'ostéomyélite est :",
      "options": [
        "Une infection des os (souvent bactérienne)",
        "Une perte de densité osseuse",
        "Une tumeur osseuse",
        "Une dégénérescence du cartilage"
      ],
      "bonne_reponse": 0,
      "explication": "Une infection des os, généralement d'origine bactérienne.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q473",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La scoliose est :",
      "options": [
        "Une fracture de la colonne",
        "Une déformation de la colonne dans les 3 plans",
        "Une inflammation auto-immune",
        "Une perte de densité osseuse"
      ],
      "bonne_reponse": 1,
      "explication": "Une déformation de la colonne vertébrale dans les trois plans.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q474",
      "theme": "anatomie",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque type d'os à un exemple.",
      "paires": [
        [
          "Os long",
          "Fémur"
        ],
        [
          "Os court",
          "Os du carpe"
        ],
        [
          "Os plat",
          "Os pariétal"
        ],
        [
          "Os sésamoïde",
          "Patella"
        ]
      ],
      "explication": "Long → fémur ; court → os du carpe ; plat → os pariétal ; sésamoïde → patella.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q475",
      "theme": "anatomie",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque région vertébrale à son nombre de vertèbres.",
      "paires": [
        [
          "Cervicales",
          "7"
        ],
        [
          "Thoraciques (dorsales)",
          "12"
        ],
        [
          "Lombaires",
          "5"
        ]
      ],
      "explication": "Cervicales = 7, thoraciques = 12, lombaires = 5.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q476",
      "theme": "anatomie",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque partie de l'os long à sa description.",
      "paires": [
        [
          "Diaphyse",
          "Corps central de l'os"
        ],
        [
          "Épiphyse",
          "Extrémité recouverte de cartilage"
        ],
        [
          "Périoste",
          "Membrane externe vascularisée"
        ]
      ],
      "explication": "Diaphyse = corps central (os compact) ; épiphyse = extrémité recouverte de cartilage ; périoste = membrane externe vascularisée.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q477",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Les 7 premières paires de côtes sont appelées « vraies côtes ».",
      "bonne_reponse": true,
      "explication": "Vrai : les 7 premières sont les vraies côtes ; les paires 8 à 10 sont costales, et les 2 dernières flottantes.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q478",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "La patella est un os sésamoïde.",
      "bonne_reponse": true,
      "explication": "Vrai : c'est un os incorporé dans le tendon, devant le genou.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q479",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le rôle principal du squelette axial est de protéger les organes vitaux.",
      "bonne_reponse": true,
      "explication": "Vrai : crâne, colonne, côtes et sternum protègent les organes vitaux.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q480",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le coccyx est formé de 4 vertèbres soudées.",
      "bonne_reponse": true,
      "explication": "Vrai : 4 vertèbres soudées forment le coccyx.",
      "source": "Cours A1 – Ostéologie (Steels Baud 2024)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q481",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Qu'est-ce que la neuroplasticité ?",
      "options": [
        "La capacité du cerveau à se modifier tout au long de la vie",
        "La rigidité définitive du cerveau adulte",
        "La capacité des muscles à s'étirer",
        "La production d'hormones par le cerveau"
      ],
      "bonne_reponse": 0,
      "explication": "La capacité du cerveau à se modifier, se réorganiser et s'adapter tout au long de la vie.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q482",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelles sont les trois formes principales de plasticité décrites dans le cours ?",
      "options": [
        "Synaptique, fonctionnelle et structurelle",
        "Motrice, sensorielle et cognitive",
        "Rapide, lente et intermédiaire",
        "Corticale, limbique et spinale"
      ],
      "bonne_reponse": 0,
      "explication": "Synaptique, fonctionnelle et structurelle.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q483",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment appelle-t-on la création de nouveaux neurones ?",
      "options": [
        "La synaptogenèse",
        "La neurogenèse",
        "La myélinisation",
        "La plasticité fonctionnelle"
      ],
      "bonne_reponse": 1,
      "explication": "La neurogenèse.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q484",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Comment nomme-t-on le renforcement durable d'une connexion synaptique, présenté comme un mécanisme clé de la mémoire ?",
      "options": [
        "La neurogenèse",
        "La potentialisation à long terme (PLT)",
        "Le conditionnement de la peur",
        "La synaptogenèse inverse"
      ],
      "bonne_reponse": 1,
      "explication": "La potentialisation à long terme (PLT / LTP).",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q485",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Que dit la règle de Hebb citée dans le cours ?",
      "options": [
        "Les neurones qui s'activent ensemble se connectent ensemble",
        "Un neurone actif inhibe ses voisins",
        "Le cerveau adulte ne change plus",
        "Chaque souvenir occupe un seul neurone"
      ],
      "bonne_reponse": 0,
      "explication": "« Les neurones qui s'activent ensemble se connectent ensemble. »",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q486",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Selon le cours, quelle protéine, stimulée par environ 20 min de mouvement par jour, favorise la plasticité ?",
      "options": [
        "Le cortisol",
        "Le BDNF",
        "L'insuline",
        "La mélatonine"
      ],
      "bonne_reponse": 1,
      "explication": "Le BDNF (Brain Derived Neurotrophic Factor).",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q487",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Selon le cours, quel facteur de transcription est présenté comme un marqueur précoce d'activation neuronale ?",
      "options": [
        "Le c-Fos",
        "L'adrénaline",
        "La dopamine",
        "Le glucose"
      ],
      "bonne_reponse": 0,
      "explication": "Le c-Fos, considéré dans le cours comme un marqueur immédiat d'activation neuronale.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q488",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans ce module, à quoi sert le test musculaire en kinésiologie ?",
      "options": [
        "À mesurer la force physique maximale",
        "À identifier la zone de blocage / les boucles stressantes",
        "À poser un diagnostic médical",
        "À évaluer la souplesse articulaire"
      ],
      "bonne_reponse": 1,
      "explication": "À identifier la zone de blocage et les boucles neuronales stressantes à travailler.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q489",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelles sont, dans l'ordre, les 4 étapes du changement en kinésiologie via la neuroplasticité ?",
      "options": [
        "Activation, Désactivation, Réinstallation, Ancrage",
        "Ancrage, Activation, Désactivation, Réinstallation",
        "Désactivation, Ancrage, Activation, Réinstallation",
        "Réinstallation, Activation, Ancrage, Désactivation"
      ],
      "bonne_reponse": 0,
      "explication": "Activation, Désactivation, Réinstallation, Ancrage.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q490",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le protocole SAINT (Stanford) est une version accélérée de quelle technique ?",
      "options": [
        "L'électrochoc",
        "La stimulation magnétique transcrânienne (TMS)",
        "L'acupuncture",
        "La méditation guidée"
      ],
      "bonne_reponse": 1,
      "explication": "La stimulation magnétique transcrânienne (TMS).",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q491",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle zone le protocole SAINT cible-t-il principalement ?",
      "options": [
        "L'amygdale",
        "Le cortex préfrontal dorsolatéral",
        "Le cervelet",
        "La moelle épinière"
      ],
      "bonne_reponse": 1,
      "explication": "Le cortex préfrontal dorsolatéral (gauche), impliqué dans la régulation de l'humeur.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q492",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "SAINT a été développé pour traiter :",
      "options": [
        "L'épilepsie",
        "La dépression résistante aux médicaments",
        "Les migraines",
        "Les phobies"
      ],
      "bonne_reponse": 1,
      "explication": "La dépression résistante aux médicaments, avec près de 80 % de rémission selon l'étude citée.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q493",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel outil personnalise les paramètres de stimulation dans le protocole SAINT ?",
      "options": [
        "Le test musculaire",
        "L'EEG (électroencéphalogramme)",
        "Une prise de sang",
        "Le scanner"
      ],
      "bonne_reponse": 1,
      "explication": "L'EEG (électroencéphalogramme), pour adapter la stimulation aux rythmes cérébraux.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q494",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Selon le cours, quel parallèle est établi entre SAINT et la kinésiologie ?",
      "options": [
        "Toutes deux utilisent des aimants",
        "Toutes deux provoquent un changement fonctionnel par une stimulation ciblée",
        "Toutes deux nécessitent des médicaments",
        "Toutes deux agissent sur les muscles uniquement"
      ],
      "bonne_reponse": 1,
      "explication": "Les deux visent à provoquer un changement fonctionnel par une stimulation ciblée (technologique pour SAINT, corporelle/énergétique en kinésiologie). C'est une analogie proposée par le cours, non une équivalence prouvée.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q495",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel rôle principal le cours attribue-t-il à l'amygdale ?",
      "options": [
        "Stocker les souvenirs à long terme",
        "Détecter le danger et déclencher la réponse de stress",
        "Réguler la température du corps",
        "Produire la dopamine"
      ],
      "bonne_reponse": 1,
      "explication": "Un détecteur de danger qui déclenche les réponses de stress (fuite, lutte ou immobilisation).",
      "source": "Support pédagogique A1 – L'amygdale (p.396)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q496",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Selon le cours, l'hyperactivité de l'amygdale entraîne une libération excessive de quelle hormone du stress ?",
      "options": [
        "L'insuline",
        "Le cortisol",
        "La mélatonine",
        "La sérotonine"
      ],
      "bonne_reponse": 1,
      "explication": "Le cortisol.",
      "source": "Support pédagogique A1 – L'amygdale (p.396)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q497",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quand l'amygdale « prend le pouvoir » sous stress, quelle zone de la prise de décision est inhibée ?",
      "options": [
        "Le cervelet",
        "Le cortex préfrontal",
        "L'hypophyse",
        "Le tronc cérébral"
      ],
      "bonne_reponse": 1,
      "explication": "Le cortex préfrontal, d'où des comportements plus impulsifs.",
      "source": "Support pédagogique A1 – L'amygdale (p.396)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q498",
      "theme": "neuroplasticite",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Selon le cours, le cerveau adulte est figé et ne peut plus se modifier.",
      "bonne_reponse": false,
      "explication": "Faux : la neuroplasticité remet en cause cette ancienne croyance ; le cerveau change tout au long de la vie.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q499",
      "theme": "neuroplasticite",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Selon le cours, l'hippocampe joue un rôle clé dans la mémoire et l'apprentissage.",
      "bonne_reponse": true,
      "explication": "Vrai : l'hippocampe est présenté comme une structure clé de la mémoire.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q500",
      "theme": "neuroplasticite",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le cours résume la plasticité par la formule : « Pas de plasticité sans répétition + émotion + mouvement ».",
      "bonne_reponse": true,
      "explication": "Vrai : c'est la formule donnée pour renforcer la plasticité après la séance.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q501",
      "theme": "neuroplasticite",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque étape du changement en kinésiologie à son objectif.",
      "paires": [
        [
          "Activation",
          "Mettre en lumière le circuit automatique"
        ],
        [
          "Désactivation",
          "Affaiblir la boucle neuronale dominante"
        ],
        [
          "Réinstallation",
          "Créer une nouvelle voie neuronale"
        ],
        [
          "Ancrage",
          "Renforcer et stabiliser la connexion"
        ]
      ],
      "explication": "Activation = mettre en lumière le circuit automatique ; Désactivation = affaiblir la boucle dominante ; Réinstallation = créer une nouvelle voie ; Ancrage = renforcer et stabiliser.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q502",
      "theme": "neuroplasticite",
      "type": "association",
      "difficulte": 3,
      "enonce": "Associez chaque forme de plasticité à un exemple du cours.",
      "paires": [
        [
          "Synaptique",
          "Apprendre une nouvelle langue"
        ],
        [
          "Fonctionnelle",
          "Récupération après un AVC"
        ],
        [
          "Structurelle",
          "Hippocampe agrandi par la méditation"
        ]
      ],
      "explication": "Synaptique = apprendre une langue / désactiver un réflexe de stress ; fonctionnelle = récupération post-AVC ; structurelle = hippocampe agrandi par la méditation.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.159-170)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q503",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que « l'ivresse mentale » décrite dans le cours ?",
      "options": [
        "Une intoxication alcoolique légère",
        "Un état semblable à l'ivresse, sans alcool",
        "Une maladie du foie",
        "Un trouble du sommeil"
      ],
      "bonne_reponse": 1,
      "explication": "Un état psychologique et émotionnel ressemblant à une intoxication alcoolique, mais sans consommation d'alcool.",
      "source": "Support pédagogique A1 – Ivresse mentale (p.400-401)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q504",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est une cause possible de l'ivresse mentale selon le cours ?",
      "options": [
        "Une carence en fer",
        "Un stress intense",
        "Un excès de sommeil",
        "Une déshydratation légère"
      ],
      "bonne_reponse": 1,
      "explication": "Un stress intense (accumulation d'émotions négatives) ; aussi le sevrage et l'évitement de la réalité.",
      "source": "Support pédagogique A1 – Ivresse mentale (p.400-401)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q505",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la différence clé entre ivresse mentale et alcoolisme ?",
      "options": [
        "L'ivresse mentale implique plus d'alcool",
        "L'ivresse mentale n'implique aucune consommation d'alcool",
        "Il n'y a aucune différence",
        "L'alcoolisme ne touche pas le comportement"
      ],
      "bonne_reponse": 1,
      "explication": "L'ivresse mentale n'implique aucune consommation d'alcool, contrairement à l'alcoolisme.",
      "source": "Support pédagogique A1 – Ivresse mentale (p.400-401)",
      "banque_version": "1.0.0",
      "verifie": true
    },
    {
      "id": "q506",
      "theme": "at_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "L'analyse transactionnelle a été développée par Eric Berne.",
      "bonne_reponse": true,
      "explication": "Eric Berne est le fondateur de l'AT.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q507",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien d'états du Moi distingue-t-on en AT ?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "bonne_reponse": 1,
      "explication": "Parent, Adulte, Enfant.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q508",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Une transaction « parallèle » signifie :",
      "options": [
        "Rupture et conflit",
        "Stimulus et réponse sur le même canal (fluide)",
        "Silence prolongé",
        "Double message"
      ],
      "bonne_reponse": 1,
      "explication": "Parallèle = échange fluide ; croisée = rupture.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q509",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le complexe d'infériorité compense typiquement par :",
      "options": [
        "Sacrifice et auto-sabotage",
        "Devenir fort et éviter l'échec",
        "Rupture du lien affectif",
        "Dissimulation"
      ],
      "bonne_reponse": 1,
      "explication": "Peur de ne pas être à la hauteur → éviter l'échec, devenir fort.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q510",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le complexe de culpabilité est lié au rôle de :",
      "options": [
        "Victime",
        "Sauveur",
        "Persécuteur",
        "Adulte"
      ],
      "bonne_reponse": 2,
      "explication": "Culpabilité ↔ persécuteur (triangle dramatique).",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q511",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le complexe d'abandon est lié au rôle de :",
      "options": [
        "Persécuteur",
        "Sauveur",
        "Victime",
        "Parent"
      ],
      "bonne_reponse": 2,
      "explication": "Abandon ↔ victime.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q512",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le scénario « Sans joie » correspond au message :",
      "options": [
        "« Tu ne comprendras rien »",
        "« Ne te réjouis pas trop »",
        "« Tu n'es pas digne d'être aimé »",
        "« Ne pense pas »"
      ],
      "bonne_reponse": 1,
      "explication": "Sans joie : anhédonie, perfectionnisme, sabotage des moments heureux.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q513",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le scénario « Sans amour » correspond au message :",
      "options": [
        "« Ne te réjouis pas trop »",
        "« Tu n'es pas digne d'être aimé »",
        "« Tu ne comprendras rien »",
        "« Ne fais pas »"
      ],
      "bonne_reponse": 1,
      "explication": "Sans amour : isolement, faux-self, peur d'abandon.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q514",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le scénario « Sans raison » correspond au message :",
      "options": [
        "« Tu ne comprendras rien »",
        "« Ne ressens pas »",
        "« Ne sois pas proche »",
        "« Sois parfait »"
      ],
      "bonne_reponse": 0,
      "explication": "Sans raison : vide, fatalisme, addictions d'engourdissement.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q515",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En test AT (injonctions), on retient celle qui :",
      "options": [
        "Tf en premier",
        "Tf en dernier",
        "Ne Tf jamais",
        "Tf deux fois"
      ],
      "bonne_reponse": 0,
      "explication": "Le 1er qui Tf parmi les 12 injonctions.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q516",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'injonction « Ne réussis pas » appartient surtout au scénario :",
      "options": [
        "Sans amour",
        "Sans raison",
        "Sans joie",
        "Gagnant"
      ],
      "bonne_reponse": 1,
      "explication": "Grille pédagogique : Sans raison ↔ Ne réussis pas, Ne pense pas…",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q517",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'injonction « Ne ressens pas » appartient surtout au scénario :",
      "options": [
        "Sans joie",
        "Sans raison",
        "Sans amour",
        "Anti-scénario"
      ],
      "bonne_reponse": 0,
      "explication": "Sans joie ↔ Ne ressens pas, Ne grandis pas…",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q518",
      "theme": "at_a2",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque driver à son idée.",
      "paires": [
        [
          "Sois parfait",
          "Erreurs interdites"
        ],
        [
          "Dépêche-toi",
          "Urgence permanente"
        ],
        [
          "Sois fort",
          "Pas de faiblesse visible"
        ],
        [
          "Fais plaisir",
          "Plaire aux autres"
        ]
      ],
      "explication": "Les 5 drivers : parfait, dépêche-toi, efforts, plaisir, fort.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q519",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le scénario de temps « Presque » décrit :",
      "options": [
        "Projets inachevés",
        "Fatalisme total",
        "Vivre à l'opposé du script",
        "Répétition sans fin"
      ],
      "bonne_reponse": 0,
      "explication": "Presque : n'achève pas, projets laissés en plan.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q520",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le scénario de temps « Jamais » décrit :",
      "options": [
        "Retarder avant d'engager",
        "Ne pas atteindre ce qu'on souhaite",
        "Payer le prix après succès",
        "Vide après réussite"
      ],
      "bonne_reponse": 1,
      "explication": "Jamais : fatalisme, n'atteint pas l'objectif.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q521",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de scénarios de temps compte la grille AT du cours ?",
      "options": [
        "5",
        "6",
        "7",
        "12"
      ],
      "bonne_reponse": 2,
      "explication": "7 : Avant, Après, Jamais, Toujours, Presque, Sans fin, Anti-scénario.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q522",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans le triangle de Karpman, les trois rôles sont :",
      "options": [
        "Parent nourricier, Parent critique, Adulte",
        "Persécuteur, Victime, Sauveur",
        "Enfant libre, Enfant adapté, Enfant rebelle",
        "Complexe d'infériorité, culpabilité, abandon"
      ],
      "bonne_reponse": 1,
      "explication": "Karpman : persécuteur, victime, sauveur — bascule en cours d'interaction.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q523",
      "theme": "at_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Un « coup de théâtre » valide le scénario et le bénéfice secondaire du jeu.",
      "bonne_reponse": true,
      "explication": "Retournement final qui entretient le jeu psychologique.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q524",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'évitement de la colère correspond au besoin sous-jacent :",
      "options": [
        "Être utile",
        "Être parfait(e)",
        "Se sentir spécial(e)",
        "Paix/harmonie"
      ],
      "bonne_reponse": 1,
      "explication": "Colère → besoin d'être parfait ; affirmation : « Ce que je fais me satisfait ».",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel + evitements.json",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q525",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'évitement de l'échec est souvent associé à la fleur de Bach :",
      "options": [
        "Chestnut Bud",
        "Oak",
        "Clematis",
        "Agrimony"
      ],
      "bonne_reponse": 1,
      "explication": "Échec → Oak.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel + evitements.json",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q526",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'évitement du conflit est souvent associé à la fleur de Bach :",
      "options": [
        "Rock Water",
        "Scleranthus",
        "Water Violet",
        "Mustard"
      ],
      "bonne_reponse": 1,
      "explication": "Conflit → Scleranthus ; médiateur, évite confrontation.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel + evitements.json",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q527",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En correction d'un système de croyance, la DSE sert à :",
      "options": [
        "Tester les méridiens",
        "Balancer peur du changement / douleur de ne pas changer",
        "Mesurer l'hydratation",
        "Localiser une cicatrice"
      ],
      "bonne_reponse": 1,
      "explication": "DSE = balance motivation changement.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q528",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Si évitement Tf en système de croyance, une piste du cours est :",
      "options": [
        "Wayne Cook seul",
        "Pélérandra",
        "Repatterning X",
        "Test du pont"
      ],
      "bonne_reponse": 1,
      "explication": "Pélérandra si évitement Tf (p.71).",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q529",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À quoi servent les 6 avantages de Berne en AT ?",
      "options": [
        "Identifier les gains cachés qui entretiennent un jeu psychologique malgré la souffrance",
        "Classer les douze injonctions parentales testées en récession d'âge",
        "Mesurer le pourcentage CEN à l'étape baromètre du comportement",
        "Décrypter le coup de théâtre final d'un scénario de vie"
      ],
      "bonne_reponse": 0,
      "explication": "6 avantages = gains psychologiques (internes) et sociaux (externes) qui expliquent pourquoi le jeu se maintient (p.102–103).",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q530",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "À l'étape AT « 12 injonctions », que fait-on ?",
      "options": [
        "Tester les douze messages parentaux et retenir le premier qui Tf",
        "Tester les douze méridiens dans l'ordre circadien",
        "Localiser la douzième vertèbre avant la récession d'âge",
        "Équilibrer les douze paires cranio-sacrales avant la DSE"
      ],
      "bonne_reponse": 0,
      "explication": "Protocole scénario de vie p.84 / p.113.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q531",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'évitement du besoin (trop servir les autres) → fleur :",
      "options": [
        "Oak",
        "Chestnut Bud",
        "Rock Water",
        "Water Violet"
      ],
      "bonne_reponse": 1,
      "explication": "Besoin → Chestnut Bud.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel + evitements.json",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q532",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'évitement de la faiblesse correspond au besoin :",
      "options": [
        "Paix",
        "Se sentir fort(e)",
        "Comprendre tout",
        "Conformité"
      ],
      "bonne_reponse": 1,
      "explication": "Faiblesse → besoin de paraître fort.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel + evitements.json",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q533",
      "theme": "at_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "En AT kinésiologie, l'objectif n'est pas seulement comprendre mais changer le comportement.",
      "bonne_reponse": true,
      "explication": "Correction = responsabilisation + changement comportemental.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q534",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Le jeu « Oui mais… » est un exemple de :",
      "options": [
        "Un cycle de contrôle MTC entre deux éléments voisins",
        "Un jeu psychologique où toute solution proposée est écartée",
        "Un test de latéralité du protocole LCF (Robot)",
        "Une correction Diamond sur le méridien du Feu"
      ],
      "bonne_reponse": 1,
      "explication": "Exemple de jeu cité p.101–105.",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q535",
      "theme": "at_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'injonction « Ne fais pas » est surtout liée au scénario :",
      "options": [
        "Sans amour",
        "Sans joie",
        "Sans raison",
        "Gagnant"
      ],
      "bonne_reponse": 0,
      "explication": "Sans amour ↔ Ne fais pas, N'appartiens pas…",
      "source": "Cours A2 p.55–114 — digest AT + baromètre transactionnel",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q536",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la couleur du 1er (racine) chakra ?",
      "options": [
        "Rouge",
        "Jaune",
        "Bleu",
        "Orange"
      ],
      "bonne_reponse": 0,
      "explication": "1er (racine) → Rouge. Localisation : Base de la colonne / périnée.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q537",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la couleur du 2e (sacré) chakra ?",
      "options": [
        "Orange",
        "Vert",
        "Indigo",
        "Jaune"
      ],
      "bonne_reponse": 0,
      "explication": "2e (sacré) → Orange. Localisation : Bas-ventre / bassin.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q538",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 1,
      "enonce": "Quelle est la couleur du 3e (plexus solaire) chakra ?",
      "options": [
        "Jaune",
        "Bleu",
        "Violet ou blanc",
        "Vert"
      ],
      "bonne_reponse": 0,
      "explication": "3e (plexus solaire) → Jaune. Localisation : Estomac / diaphragme.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q539",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la couleur du 4e (cœur) chakra ?",
      "options": [
        "Vert",
        "Indigo",
        "Rouge",
        "Bleu"
      ],
      "bonne_reponse": 0,
      "explication": "4e (cœur) → Vert. Localisation : Centre thoracique.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q540",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la couleur du 5e (gorge) chakra ?",
      "options": [
        "Bleu",
        "Violet ou blanc",
        "Orange",
        "Indigo"
      ],
      "bonne_reponse": 0,
      "explication": "5e (gorge) → Bleu. Localisation : Cou / gorge.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q541",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la couleur du 6e (3e œil) chakra ?",
      "options": [
        "Indigo",
        "Rouge",
        "Jaune",
        "Violet ou blanc"
      ],
      "bonne_reponse": 0,
      "explication": "6e (3e œil) → Indigo. Localisation : Front / entre les sourcils.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q542",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la couleur du 7e (couronne) chakra ?",
      "options": [
        "Violet ou blanc",
        "Orange",
        "Vert",
        "Rouge"
      ],
      "bonne_reponse": 0,
      "explication": "7e (couronne) → Violet ou blanc. Localisation : Sommet du crâne.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q543",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de chakras principaux compte la tradition enseignée (A2) ?",
      "options": [
        "5",
        "6",
        "7",
        "12"
      ],
      "bonne_reponse": 2,
      "explication": "7 chakras principaux.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q544",
      "theme": "chakras_a2",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chakra et localisation.",
      "paires": [
        [
          "Racine",
          "Base colonne"
        ],
        [
          "Cœur",
          "Centre poitrine"
        ],
        [
          "Gorge",
          "Cou"
        ],
        [
          "Couronne",
          "Sommet tête"
        ]
      ],
      "explication": "Repères corporels des 7 chakras.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q545",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le chakra du cœur est associé à l'élément :",
      "options": [
        "Terre",
        "Eau",
        "Air / équilibre amour",
        "Feu uniquement"
      ],
      "bonne_reponse": 2,
      "explication": "4e chakra = amour, lien, équilibre (cours A2).",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q546",
      "theme": "chakras_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le chakra de la gorge est relié à la thyroïde.",
      "bonne_reponse": true,
      "explication": "5e chakra ↔ thyroïde (cohérent A1 corrigé Q.33).",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q547",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le chakra couronne concerne surtout :",
      "options": [
        "Digestion",
        "Sexualité",
        "Conscience / spiritualité",
        "Colère"
      ],
      "bonne_reponse": 2,
      "explication": "7e chakra = sommet, conscience, connexion.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q548",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un chakra « fermé » ou déséquilibré peut se traduire par :",
      "options": [
        "Uniquement une fracture osseuse",
        "Troubles psycho-émotionnels ou énergétiques liés à sa fonction",
        "Une allergie alimentaire obligatoire",
        "Une luxation"
      ],
      "bonne_reponse": 1,
      "explication": "Approche holistique A2 : lien corps-émotions-énergie.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q549",
      "theme": "chakras_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'énergie des chakras (p.130) s'inscrit dans :",
      "options": [
        "Seulement l'ostéopathie",
        "L'équilibration énergétique globale du cours A2",
        "Uniquement la pharmacologie",
        "Le repatterning Dennison"
      ],
      "bonne_reponse": 1,
      "explication": "Chapitre « Énergie des chakras » A2.",
      "source": "Cours A2 p.39–54 — Chakras",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q550",
      "theme": "tsf_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En TSF, les « traits de structure » concernent surtout :",
      "options": [
        "Les muscles et le mouvement",
        "L'os, la posture, le squelette",
        "Les émotions uniquement",
        "Les méridiens"
      ],
      "bonne_reponse": 1,
      "explication": "Structure = squelette, os, posture.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q551",
      "theme": "tsf_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Les « traits de fonction » concernent surtout :",
      "options": [
        "Le crâne rigide",
        "Muscles, souplesse, mobilité",
        "Les dents",
        "Le périoste"
      ],
      "bonne_reponse": 1,
      "explication": "Fonction = musculaire, dynamique.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q552",
      "theme": "tsf_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "TSF signifie Traits de Structure et Traits de Fonction.",
      "bonne_reponse": true,
      "explication": "Initiation TSF p.3–38 A2.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q553",
      "theme": "tsf_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Des pommettes proéminentes en lecture TSF suggèrent :",
      "options": [
        "Timidité extrême",
        "Goût de l'aventure",
        "Rigidité osseuse seule",
        "Peur de parler"
      ],
      "bonne_reponse": 1,
      "explication": "Aligné corrigé 2025 Q.84.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q554",
      "theme": "tsf_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Des sourcils à angles aigus suggèrent :",
      "options": [
        "Style productif / chef / dominant",
        "Fonction digestive",
        "Chakra racine fermé",
        "Hypothyroïdie certaine"
      ],
      "bonne_reponse": 0,
      "explication": "Corrigé 2025 Q.84.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q555",
      "theme": "tsf_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La lecture TSF s'utilise en kinésiologie pour :",
      "options": [
        "Prescrire des médicaments",
        "Mieux comprendre le terrain structure/fonction de la personne",
        "Remplacer le test musculaire",
        "Diagnostiquer une tumeur"
      ],
      "bonne_reponse": 1,
      "explication": "Outil de compréhension, pas diagnostic médical.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q556",
      "theme": "tsf_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un profil plutôt « structure » aura tendance à :",
      "options": [
        "Être très souple sans force",
        "Être plus rigide, carré, tenace",
        "Ne jamais avoir mal aux os",
        "Avoir uniquement des traits de fonction"
      ],
      "bonne_reponse": 1,
      "explication": "Structure = tenacité, carré, résistance.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q557",
      "theme": "tsf_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un profil plutôt « fonction » aura tendance à :",
      "options": [
        "Être immobile",
        "Être souple, adaptable, orienté mouvement",
        "Avoir un squelette plus lourd",
        "Rejeter tout exercice"
      ],
      "bonne_reponse": 1,
      "explication": "Fonction = souplesse, adaptabilité.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q558",
      "theme": "tsf_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "TSF et chakras sont deux chapitres distincts du cours A2.",
      "bonne_reponse": true,
      "explication": "TSF p.3–38 puis Chakras p.39–54.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q559",
      "theme": "tsf_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En séance, TSF aide surtout à :",
      "options": [
        "Choisir la couleur des fleurs de Bach",
        "Affiner la compréhension du client (structure vs fonction)",
        "Mesurer la tension artérielle",
        "Remplacer l'anamnèse"
      ],
      "bonne_reponse": 1,
      "explication": "Complément d'observation clinique kiné.",
      "source": "Cours A2 p.3–38 — TSF",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q560",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Une hernie hiatale implique surtout :",
      "options": [
        "Le genou",
        "Une partie de l'estomac qui remonte par le hiatus diaphragmatique",
        "Une fracture du fémur",
        "Une otite"
      ],
      "bonne_reponse": 1,
      "explication": "Hiatus œsophagien du diaphragme — estomac qui remonte.",
      "source": "Cours A2 — protocoles EKI-LIBRE p.122–124",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q561",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le protocole Hernie hiatale vise surtout à :",
      "options": [
        "Cicatriser une plaie cutanée",
        "Rééquilibrer diaphragme / estomac / sphincter œsophagien (terrain reflux)",
        "Traiter une entorse de cheville",
        "Mesurer la vue"
      ],
      "bonne_reponse": 1,
      "explication": "Approche kinésiologique du terrain hiatal.",
      "source": "Cours A2 — protocoles EKI-LIBRE p.122–124",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q562",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La valvule iléo-cæcale se situe entre :",
      "options": [
        "Estomac et œsophage",
        "Intestin grêle et cæcum (gros intestin)",
        "Rein et vessie",
        "Cœur et poumon"
      ],
      "bonne_reponse": 1,
      "explication": "Jonction IG–cæcum ; plis de Houston voisins (p.115–118).",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q563",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le protocole Diamond utilise notamment :",
      "options": [
        "Une affirmation pour relancer les hémisphères et calmer l'amygdale",
        "Un test de glycémie",
        "Une radiographie",
        "Un seul point NV"
      ],
      "bonne_reponse": 0,
      "explication": "Diamond A2 — catalogue outils.",
      "source": "Cours A2 — protocoles EKI-LIBRE p.125–126",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q564",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'épuisement des surrénales se manifeste souvent par :",
      "options": [
        "Fracture du radius",
        "Fatigue chronique, stress, troubles de l'humeur",
        "Myopie uniquement",
        "Appendicite"
      ],
      "bonne_reponse": 1,
      "explication": "Cortisol / surrénal — protocole A2.",
      "source": "Cours A2 — protocoles EKI-LIBRE p.119–121",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q565",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le couple de torsion durale concerne :",
      "options": [
        "Les cheveux",
        "Les tensions de la dure-mère / torsion du corps",
        "Les ongles",
        "La langue uniquement"
      ],
      "bonne_reponse": 1,
      "explication": "Torsion durale p.127–128.",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q566",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le protocole Deuil aide à :",
      "options": [
        "Guérir une entorse",
        "Accompagner le processus de deuil et libérer les émotions bloquées",
        "Apprendre le piano",
        "Mesurer la tension artérielle"
      ],
      "bonne_reponse": 1,
      "explication": "Chapitre Deuil p.131.",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q567",
      "theme": "protocoles_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le protocole Allergie A2 vise à désensibiliser une substance devenue allergène.",
      "bonne_reponse": true,
      "explication": "Objectif catalogue — complète A1 (seuil de tolérance).",
      "source": "Cours A2 — protocoles EKI-LIBRE p.132–133",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q568",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Réintégration des cicatrices : la personne se concentre souvent sur :",
      "options": [
        "Une couleur au hasard",
        "La cicatrice et la sensation / émotion liée",
        "Un muscle des jambes uniquement",
        "Le nombril seul"
      ],
      "bonne_reponse": 1,
      "explication": "Cohérent protocole A1 cicatrice — A2 p.134–135.",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q569",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le déblocage de fascia travaille sur :",
      "options": [
        "Les dents",
        "Les tensions des fascias / tissus conjonctifs",
        "La vue uniquement",
        "Les oligo-éléments"
      ],
      "bonne_reponse": 1,
      "explication": "Fascia p.153.",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q570",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le canal carpien concerne surtout :",
      "options": [
        "La cheville",
        "Le poignet (nerf médian comprimé)",
        "Le crâne",
        "Le foie"
      ],
      "bonne_reponse": 1,
      "explication": "Canal carpien p.150–152.",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q571",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'intégration des polarités gauche/droite du corps vise :",
      "options": [
        "Supprimer un méridien",
        "Réharmoniser les polarités énergétiques et posturales du corps",
        "Traiter uniquement la main droite",
        "Remplacer la DSE"
      ],
      "bonne_reponse": 1,
      "explication": "Polarités GD p.139.",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q572",
      "theme": "protocoles_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Les élixirs de roses 2 (Pélérandra) relèvent du chapitre :",
      "options": [
        "Méridiens A1",
        "Structure énergétique Pélérandra (roses)",
        "Ostéologie",
        "8 Tibétains"
      ],
      "bonne_reponse": 1,
      "explication": "Élixirs roses p.154.",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q573",
      "theme": "protocoles_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Le rééquilibrage des plexus en Édu-K est un protocole d'une page (p.129).",
      "bonne_reponse": true,
      "explication": "Plexus Édu-K — chapitre court A2.",
      "source": "Cours A2 — protocoles EKI-LIBRE",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q574",
      "theme": "reactivite_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La réactivité musculaire en A2 étudie surtout :",
      "options": [
        "Les os du crâne",
        "Comment un muscle réagit (test) selon le contexte / le stress",
        "La couleur des yeux",
        "Les oligo uniquement"
      ],
      "bonne_reponse": 1,
      "explication": "Chapitre p.172–177.",
      "source": "Cours A2 p.172–177 — Réactivité musculaire",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q575",
      "theme": "reactivite_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "La réactivité musculaire complète le travail sur les 42 muscles.",
      "bonne_reponse": true,
      "explication": "Lié au chapitre posture 42 muscles p.216–220.",
      "source": "Cours A2 p.172–177 — Réactivité musculaire",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q576",
      "theme": "tibetains_a2",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Les 8 Tibétains sont :",
      "options": [
        "Huit séquences de mouvements énergétiques tibétains (type yoga)",
        "Huit points Shu du dos à tonifier en fin de séance",
        "Huit fleurs de Bach utilisées dans le protocole GPS",
        "Huit tests musculaires de la latéralité (LCF)"
      ],
      "bonne_reponse": 0,
      "explication": "Technique p.178–180.",
      "source": "Cours A2 p.178–180 — 8 Tibétains",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q577",
      "theme": "tibetains_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Les 8 Tibétains visent à revitaliser corps et esprit par des mouvements répétés.",
      "bonne_reponse": true,
      "explication": "Routine quotidienne enseignée A2.",
      "source": "Cours A2 p.178–180 — 8 Tibétains",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q578",
      "theme": "circuits_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Les circuits musculaires relient :",
      "options": [
        "Uniquement les os",
        "Des groupes de muscles en chaînes fonctionnelles",
        "Les dents aux méridiens",
        "Rien"
      ],
      "bonne_reponse": 1,
      "explication": "Circuits p.140–149.",
      "source": "Cours A2 p.140–149 — Circuits musculaires",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q579",
      "theme": "luscher_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le test de Lüscher en contexte de conflit utilise :",
      "options": [
        "Une seule couleur",
        "Les 5 couleurs de base pour repérer le conflit émotionnel",
        "Un stéthoscope",
        "Un tensiomètre"
      ],
      "bonne_reponse": 1,
      "explication": "Lüscher p.159–161.",
      "source": "Cours A2 p.159–161 — Lüscher",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q580",
      "theme": "metaphores_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En kinésiologie, une métaphore sert à :",
      "options": [
        "Remplacer le test musculaire",
        "Parler au subconscient via images / récits pour faciliter le changement",
        "Prescrire des antibiotiques",
        "Mesurer la glycémie"
      ],
      "bonne_reponse": 1,
      "explication": "Métaphores p.181–208.",
      "source": "Cours A2 p.181–208 — Métaphores",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q581",
      "theme": "metaphores_a2",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "Les métaphores peuvent aider à contourner la résistance rationnelle du client.",
      "bonne_reponse": true,
      "explication": "Travail symbolique et ancrage.",
      "source": "Cours A2 p.181–208 — Métaphores",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q582",
      "theme": "vision_gym_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Vision Gym et cercles de vision concernent :",
      "options": [
        "L'ouïe",
        "Exercices visuels et auto-enlacements pour la vision / posture",
        "La digestion",
        "Les oligo"
      ],
      "bonne_reponse": 1,
      "explication": "Vision Gym p.221–255.",
      "source": "Cours A2 p.221–255 — Vision Gym",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q583",
      "theme": "oligo_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Les oligo-éléments en kiné A2 sont testés pour :",
      "options": [
        "Remplacer l'eau",
        "Compléter un terrain carencé (émotions, stress, fatigue…)",
        "Coudre une plaie",
        "Mesurer la température"
      ],
      "bonne_reponse": 1,
      "explication": "Oligo p.268–283.",
      "source": "Cours A2 p.268–283 — Oligo-éléments",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q584",
      "theme": "oligo_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le lithium en oligo est souvent cité pour :",
      "options": [
        "La vue",
        "L'équilibre émotionnel / terrain dépressif (à tester)",
        "La fracture",
        "L'appendicite"
      ],
      "bonne_reponse": 1,
      "explication": "protocoles_energie_guide.json.",
      "source": "Cours A2 p.268–283 — Oligo-éléments",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q585",
      "theme": "endocrino_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le chapitre endocrino/épiphyse A2 lie surtout :",
      "options": [
        "Dents et mâchoire",
        "Glandes, symbolique et épiphyse (pinéale)",
        "Uniquement les cheveux",
        "Le genou"
      ],
      "bonne_reponse": 1,
      "explication": "p.284–326.",
      "source": "Cours A2 p.284–326 — Endocrinologie & épiphyse",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q586",
      "theme": "endocrino_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'épiphyse (pinéale) est associée au chakra :",
      "options": [
        "Racine",
        "Cœur",
        "3e œil / couronne (selon enseignement)",
        "Sacré uniquement"
      ],
      "bonne_reponse": 2,
      "explication": "Lien 6e–7e chakra et mélatonine (cohérent Fixation A1).",
      "source": "Cours A2 p.284–326 — Endocrinologie & épiphyse",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q587",
      "theme": "ecologie_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'écologie personnelle et les 7 dimensions concernent :",
      "options": [
        "Seulement l'alimentation",
        "L'équilibre du mouvement et des dimensions de vie (corps, émotions…)",
        "La météo",
        "Les taxes"
      ],
      "bonne_reponse": 1,
      "explication": "p.256–267.",
      "source": "Cours A2 p.256–267 — Écologie 7D",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q588",
      "theme": "compulsifs_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Les comportements compulsifs en kiné A2 visent à :",
      "options": [
        "Forcer une habitude",
        "Identifier et désamorcer des schémas compulsifs répétitifs",
        "Apprendre le latin",
        "Traiter une entorse"
      ],
      "bonne_reponse": 1,
      "explication": "p.155–158.",
      "source": "Cours A2 p.155–158 — Comportements compulsifs",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q589",
      "theme": "son_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'équilibrage énergétique par le son utilise :",
      "options": [
        "Uniquement le silence",
        "Vibrations / sons (voix, instruments) pour rééquilibrer",
        "Une radiographie",
        "Un ECG"
      ],
      "bonne_reponse": 1,
      "explication": "p.170–171.",
      "source": "Cours A2 p.170–171 — Équilibrage son",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q590",
      "theme": "naissance_kinesiologie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Qui a popularisé le Touch for Health (TFH) à partir des travaux de Goodheart ?",
      "options": [
        "Eric Berne",
        "John Thie",
        "Paul Dennison",
        "Hans Selye"
      ],
      "bonne_reponse": 1,
      "explication": "John Thie — TFH (années 1970). Goodheart = kinésiologie appliquée ; Dennison = Brain Gym.",
      "source": "Cours A1 — Historique & pionniers kinésiologie",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q591",
      "theme": "naissance_kinesiologie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Paul et Gail Dennison sont surtout associés à :",
      "options": [
        "L'analyse transactionnelle",
        "Brain Gym / Edu-K",
        "Les oligo-éléments",
        "La vision gym"
      ],
      "bonne_reponse": 1,
      "explication": "Edu-K / Brain Gym — coordination cérébrale et mouvements.",
      "source": "Cours A1 — Historique & pionniers kinésiologie",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q592",
      "theme": "naissance_kinesiologie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "George Goodheart est considéré comme le fondateur de la kinésiologie appliquée moderne.",
      "bonne_reponse": true,
      "explication": "Goodheart (chiropracteur, années 1960) — test musculaire comme outil de diagnostic énergétique.",
      "source": "Cours A1 — Historique & pionniers kinésiologie",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q593",
      "theme": "naissance_kinesiologie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Chapman et Owen (1937) sont associés à :",
      "options": [
        "Les points neuro-vasculaires",
        "Les réflexes neuro-lymphatiques",
        "Le repatterning",
        "Les 8 Tibétains"
      ],
      "bonne_reponse": 1,
      "explication": "Postulat des réflexes neuro-lymphatiques, intégrés ensuite par Goodheart.",
      "source": "Cours A1 – Historique (Chapman & Owen, 1937)",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q594",
      "theme": "neurolymphatiques",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Goodheart a surtout intégré les points de Chapman dans :",
      "options": [
        "Le baromètre transactionnel",
        "La kinésiologie appliquée / TFH",
        "La vision gym",
        "Les oligo uniquement"
      ],
      "bonne_reponse": 1,
      "explication": "Pont entre réflexes lymphatiques et test musculaire en kiné occidentale.",
      "source": "Cours A1 — Historique & pionniers kinésiologie",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q596",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "En correction baromètre, on cherche surtout à :",
      "options": [
        "Identifier une paire d'émotions liées à l'objectif et défuser la charge",
        "Mesurer uniquement la glycémie",
        "Remplacer la DSE",
        "Tester 42 muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Défuser les paires d'émotions (négative / positive) liées au thème.",
      "source": "Cours A1 p.70+ — Baromètre du comportement (1).pdf",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q597",
      "theme": "protocoles_a1",
      "type": "association",
      "difficulte": 3,
      "enonce": "Associez l'étage du baromètre à sa zone.",
      "paires": [
        [
          "Conscient",
          "Pensées, jugements"
        ],
        [
          "Subconscient",
          "Émotions, mémoires"
        ],
        [
          "Corps",
          "Sensations, posture"
        ]
      ],
      "explication": "3 étages : conscient / subconscient / corps.",
      "source": "Cours A1 p.70+ — Baromètre du comportement (1).pdf",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q598",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Dans le protocole baromètre (p.72), la colonne de droite signifie :",
      "options": [
        "L'état d'être (« je suis »)",
        "Le sentiment (« je me sens »)",
        "Le cycle nourricier (Sheng)",
        "La latéralité"
      ],
      "bonne_reponse": 1,
      "explication": "Colonne de droite = sentiment (NON CHOIX, ce qu'il faut arrêter). Colonne de gauche = état d'être (CHOIX, ce qu'il faut démarrer).",
      "source": "Cours/Baromètre du comportement (1).pdf — p.72",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q599",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "« COLÈRE » et « DISPOSITION » dans le baromètre sont :",
      "options": [
        "Deux méridiens",
        "Une paire négative / positive sur un même objectif",
        "Deux évitements AT",
        "Deux fleurs de Bach"
      ],
      "bonne_reponse": 1,
      "explication": "Travail par paires émotionnelles (correction BC).",
      "source": "Cours A1 p.70+ — Baromètre du comportement (1).pdf",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q600",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Le mot-clé émotionnel du baromètre sert surtout à :",
      "options": [
        "Prescrire un médicament",
        "Ancrer le travail sur l'objectif de séance",
        "Remplacer le test LCF",
        "Choisir un os du crâne"
      ],
      "bonne_reponse": 1,
      "explication": "Le client choisit / valide un mot — lien objectif ↔ émotion.",
      "source": "Cours A1 p.70+ — Baromètre du comportement (1).pdf",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q601",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Pour affiner une émotion du baromètre, on utilise surtout :",
      "options": [
        "Un test de glycémie",
        "Les définitions détaillées du baromètre (catégories et sous-mots, 3 niveaux)",
        "Les 42 muscles uniquement",
        "Le repatterning seul"
      ],
      "bonne_reponse": 1,
      "explication": "Le client lit les définitions du baromètre (cours A1 p.70+) et choisit le mot qui résonne.",
      "source": "Cours A1 p.70+ — Baromètre du comportement (1).pdf",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q603",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Les élixirs de jardin Pélérandra servent surtout à :",
      "options": [
        "Remplacer les 12 méridiens",
        "Aider à corriger les 9 évitements (comportements face à la douleur)",
        "Tester la latéralité",
        "Remplacer les fleurs de Bach obligatoirement"
      ],
      "bonne_reponse": 1,
      "explication": "18 élixirs de jardin (et roses selon protocole) — outil pour travailler les 9 évitements, pas une correspondance 1:1 mécanique avec Bach.",
      "source": "Cours A1 — Élixirs de jardin Pélérandra ou roses (formateur Eki-Libre)",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q604",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Les élixirs de roses I (Pélérandra) concernent surtout :",
      "options": [
        "La digestion",
        "La relation à l'autre",
        "Les os du crâne",
        "La latéralité"
      ],
      "bonne_reponse": 1,
      "explication": "Roses I = croyances limitantes dans les relations.",
      "source": "Cours A1 — Élixirs de jardin Pélérandra ou roses (formateur Eki-Libre)",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q605",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "L'élixir de jardin « Chou-fleur » (Pélérandra) est surtout lié au pôle :",
      "options": [
        "Enthousiasme / Hostilité",
        "Acceptation / Antagonisme",
        "Choix / Non-choix",
        "Égalité / Chagrin-culpabilité"
      ],
      "bonne_reponse": 1,
      "explication": "Chou-fleur : acceptation, réveil « qui on est ».",
      "source": "Cours A1 — Élixirs de jardin Pélérandra ou roses (formateur Eki-Libre)",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q606",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Brocoli (Pélérandra) est associé au thème :",
      "options": [
        "Indifférence",
        "Puissance / Unité-Séparation",
        "Non-choix seul",
        "Peur de perdre"
      ],
      "bonne_reponse": 1,
      "explication": "Brocoli : force pour agir, retrouver un sens.",
      "source": "Cours A1 — Élixirs de jardin Pélérandra ou roses (formateur Eki-Libre)",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q607",
      "theme": "protocoles_a1",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "En séance, Pélérandra peut compléter Bach et les modes après la DSE.",
      "bonne_reponse": true,
      "explication": "Étape 5/12 GPS — essences jardin, roses, soul ray selon protocole.",
      "source": "Protocoles A1 — DSE / Bach / Pélérandra",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q608",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Si plus de 8 fleurs de Bach testent positives, on :",
      "options": [
        "Abandonne le protocole",
        "Demande les essences prioritaires (1 goutte S.L.)",
        "En met 16",
        "Remplace par Pélérandra obligatoirement"
      ],
      "bonne_reponse": 1,
      "explication": "Règle des 8 essences max avant priorisation.",
      "source": "Protocole A1 – Fleurs de Bach",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q610",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "En cycle Sheng (cycle nourricier / engendrement), le Bois génère :",
      "options": [
        "L'Eau",
        "Le Feu",
        "La Terre",
        "Le Métal"
      ],
      "bonne_reponse": 1,
      "explication": "Sheng (cycle nourricier) : Bois → Feu → Terre → Métal → Eau. Ko = cycle de contrôle (étoile).",
      "source": "Cours A1 p.148+ — Cinq Éléments (Sheng / Ko)",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q611",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La mise en circuit (MC) permet surtout de :",
      "options": [
        "Rétablir le flux énergétique d'un méridien en le parcourant",
        "Garder « en circuit » l'information testée tant que les jambes restent écartées",
        "Mesurer la latéralité (test du Robot)",
        "Tonifier un point Shu du dos"
      ],
      "bonne_reponse": 1,
      "explication": "Enregistrement du test dans le corps : jambes écartées pendant le test, corrections liées jusqu'à pieds joints.",
      "source": "Cours A1 — Affirmation par méridien + mise en circuit (PDF)",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q616",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Sur l'affiche du baromètre, le côté droit est libellé :",
      "options": [
        "CHOIX",
        "NON CHOIX",
        "Conscient",
        "Subconscient"
      ],
      "bonne_reponse": 1,
      "explication": "Côté gauche = CHOIX (état d'être) ; côté droit = NON CHOIX (sentiment). Pas de « zone D » sur l'affiche.",
      "source": "Cours/Baromètre du comportement (1).pdf — p.71",
      "banque_version": "2.0.0",
      "verifie": true
    },
    {
      "id": "q617",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Selon le support EKI-LIBRE, qu'est-ce que l'effet idéomoteur ?",
      "options": [
        "Une contraction volontaire maximale du muscle testé",
        "Une activité motrice involontaire sous l'influence d'une représentation mentale",
        "Un blocage énergétique permanent du méridien",
        "Une technique de tonification par les points Shu"
      ],
      "bonne_reponse": 1,
      "explication": "Une idée peut devenir un mouvement sans que la personne ait conscience d'avoir initié ce mouvement — d'où l'importance de la neutralité en kinésiologie.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q618",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En kinésiologie, le test musculaire est présenté dans ce support comme un indicateur de quoi ?",
      "options": [
        "D'une maladie ou d'un diagnostic médical",
        "Des capacités adaptatives du consultant à un instant donné",
        "De la force physique maximale du muscle",
        "D'une vérité psychologique absolue sur le passé"
      ],
      "bonne_reponse": 1,
      "explication": "Il renseigne sur un état d'adaptation à un instant donné, pas sur une maladie ni une vérité psychologique figée.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q619",
      "theme": "test_musculaire",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Selon le support, le biais de confirmation peut faire du test musculaire un outil de validation d'une croyance préexistante.",
      "bonne_reponse": true,
      "explication": "Vrai : praticien ou consultant peut inconsciemment chercher à confirmer une hypothèse déjà formée.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q620",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'effet Rosenthal rappelle au kinésiologue que le consultant capte inconsciemment notamment :",
      "options": [
        "Uniquement les mots prononcés à voix haute",
        "La posture, la respiration, les micro-expressions et la tension du praticien",
        "La couleur des vêtements du praticien uniquement",
        "Le nombre de muscles testés dans la séance"
      ],
      "bonne_reponse": 1,
      "explication": "Le praticien communique en permanence par son corps : posture, respiration, micro-expressions, rythme, tension.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q621",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Avant chaque test, le support invite le praticien à se poser trois questions. Laquelle en fait partie ?",
      "options": [
        "Quel est le diagnostic médical probable ?",
        "Qu'est-ce que j'espère obtenir ?",
        "Quel muscle est le plus fort du corps ?",
        "Quelle fleur de Bach prescrire en fin de séance ?"
      ],
      "bonne_reponse": 1,
      "explication": "Les trois garde-fous : « Qu'est-ce que je crois déjà savoir ? », « Qu'est-ce que j'espère obtenir ? », « Comment puis-je réduire mon influence ? »",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q622",
      "theme": "test_musculaire",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Selon EKI-LIBRE, présenter le test musculaire comme une preuve irréfutable de l'inconscient constitue une dérive professionnelle.",
      "bonne_reponse": true,
      "explication": "Vrai : le danger apparaît quand le test est présenté comme vérité absolue, preuve irréfutable ou lecture garantie du passé.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q623",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans l'exercice pédagogique du support (situations A, B, C), quelle situation vise un cadre le plus neutre ?",
      "options": [
        "Situation A : le praticien ne formule aucune attente",
        "Situation B : le praticien espère secrètement une réponse",
        "Situation C : le consultant espère secrètement une réponse",
        "Les trois sont équivalentes pour la fiabilité du test"
      ],
      "bonne_reponse": 0,
      "explication": "Situation A = aucune attente formulée ; B et C montrent l'influence des attentes du praticien ou du consultant.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q624",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "En séance de kinésiologie, l'effet nocebo correspond surtout à :",
      "options": [
        "Une attente positive qui soutient l'adaptation",
        "Une attente négative qui amplifie stress, douleur ou inconfort",
        "L'absence totale de relation entre praticien et consultant",
        "La stimulation des points neuro-vasculaires"
      ],
      "bonne_reponse": 1,
      "explication": "Le nocebo : une anticipation négative augmente la vigilance et peut amplifier stress, douleur et réactions émotionnelles — d'où l'importance du langage du praticien.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q625",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Selon le support, l'alliance thérapeutique en kinésiologie signifie surtout :",
      "options": [
        "Que le praticien impose son interprétation au consultant",
        "Une collaboration fondée sur confiance, respect, sécurité et écoute",
        "L'utilisation exclusive d'un seul protocole standardisé",
        "Le remplacement du test musculaire par un questionnaire"
      ],
      "bonne_reponse": 1,
      "explication": "Alliance = qualité de la collaboration (confiance, respect, sécurité, écoute, clarté des objectifs) — souvent plus prédictive que la technique seule.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q626",
      "theme": "test_musculaire",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque pilier de la posture EKI-LIBRE à sa définition dans le support.",
      "paires": [
        [
          "Neutralité",
          "Observer sans imposer une interprétation"
        ],
        [
          "Sécurité",
          "Le consultant reste libre de ses choix et de son rythme"
        ],
        [
          "Autonomie",
          "Favoriser les ressources du consultant, pas la dépendance"
        ]
      ],
      "explication": "Neutralité = observer sans imposer ; Sécurité = liberté de choix et de rythme ; Autonomie = ne pas créer de dépendance à l'accompagnant.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q627",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le pendule de Chevreul, cité dans le support kinésiologie, illustre surtout :",
      "options": [
        "La circulation des méridiens d'acupuncture",
        "Comment une attente mentale peut produire un mouvement involontaire",
        "Le fonctionnement du système lymphatique",
        "La latéralité cérébrale mesurée par Brain Gym"
      ],
      "bonne_reponse": 1,
      "explication": "De minuscules contractions musculaires imperceptibles, déclenchées par l'anticipation d'un mouvement, suffisent à mettre le pendule en mouvement.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q628",
      "theme": "test_musculaire",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Selon le support, la neutralité professionnelle en kinésiologie consiste à suspendre ses croyances, hypothèses et attentes avant d'observer un test.",
      "bonne_reponse": true,
      "explication": "Vrai : la neutralité est une compétence — suspendre croyances, hypothèses et attentes pour observer le plus objectivement possible.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q629",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le support présente la kinésiologie comme une interface :",
      "options": [
        "Exclusivement mentale, sans passer par le corps",
        "Somato-neuronale : par le corps pour parler au cerveau",
        "Médicale : diagnostic et prescription",
        "Uniquement énergétique, sans lien avec le système nerveux"
      ],
      "bonne_reponse": 1,
      "explication": "La kinésiologie passe par le corps pour identifier et reprogrammer les schémas encodés dans les circuits neuronaux et le système nerveux autonome.",
      "source": "Support pédagogique A1 – Neuroplasticité & kinésiologie (p.165-168)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q630",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "En kinésiologie, le « doute cognitif » stratégique sert surtout à :",
      "options": [
        "Renforcer l'autoroute neuronale de l'ancienne croyance",
        "Créer une faille dans l'ancien schéma pour initier une nouvelle voie neuronale",
        "Éviter toute correction corporelle",
        "Remplacer le test musculaire par une visualisation seule"
      ],
      "bonne_reponse": 1,
      "explication": "Questions du type « Est-ce toujours vrai ? » : le doute signale au cerveau d'arrêter de répéter et de chercher — base de la plasticité.",
      "source": "Support pédagogique A1 – Neuroplasticité & kinésiologie (p.167)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q631",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Selon le support, pourquoi le c-Fos est-il cité en lien avec une séance de kinésiologie ?",
      "options": [
        "Il mesure la force musculaire du deltoïde",
        "Une stimulation suffisante (émotion, mouvement, visualisation) peut laisser une trace biologique durable",
        "Il indique toujours un blocage du méridien du Foie",
        "Il remplace le test musculaire en pré-test"
      ],
      "bonne_reponse": 1,
      "explication": "Sans expression de facteurs comme c-Fos, pas de stabilisation des nouvelles voies : la séance peut aussi programmer au niveau génétique local des neurones activés.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.160)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q632",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans la comparaison SAINT / kinésiologie du support, l'outil de détection côté kinésiologie est :",
      "options": [
        "L'IRM cérébrale",
        "Le test musculaire",
        "L'électrocardiogramme",
        "La prise de sang"
      ],
      "bonne_reponse": 1,
      "explication": "SAINT : EEG + IRM ; kinésiologie : test musculaire pour repérer la zone de blocage (mental, émotionnel, énergétique, postural).",
      "source": "Support pédagogique A1 – Neuroplasticité appliquée (p.163-164)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q633",
      "theme": "neuroplasticite",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Selon le support, chaque correction kinésiologique bien ciblée envoie au cerveau un message pour créer une alternative neuronale.",
      "bonne_reponse": true,
      "explication": "Vrai : « Chaque correction kinésiologique, lorsqu'elle est bien ciblée, est un message envoyé au cerveau pour créer une alternative neuronale. »",
      "source": "Support pédagogique A1 – Neuroplasticité appliquée (p.164)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q634",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'exercice pratique du support (libération de croyance limitante) utilise notamment le tapotement bilatéral pour :",
      "options": [
        "Tonifier le méridien du Rein uniquement",
        "Stimuler la communication entre les hémisphères cérébraux",
        "Remplacer l'ancrage kinesthésique",
        "Mesurer la déshydratation en pré-test"
      ],
      "bonne_reponse": 1,
      "explication": "Tapotements rythmés de part et d'autre du corps (genoux, épaules, bras croisés) ~1 min pour favoriser l'intégration inter-hémisphérique.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.169-170)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q635",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Après une correction kinésiologique, le support relie cross crawl et réflexes archaïques à l'activation de :",
      "options": [
        "Uniquement le système digestif",
        "Le cervelet, l'hippocampe et le cortex préfrontal",
        "Seulement la rate et le pancréas",
        "Les points neuro-lymphatiques du dos"
      ],
      "bonne_reponse": 1,
      "explication": "Stimulations bilatérales et mouvements d'intégration sensorimotrice : zones clés de la neuroplasticité émotionnelle et comportementale.",
      "source": "Support pédagogique A1 – Neuroplasticité & kinésiologie (p.167)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q636",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Dans l'exemple kinésiologique « Je dois tout contrôler », le muscle faible cité (trapèze supérieur) est relié au méridien du :",
      "options": [
        "Estomac",
        "Triple Réchauffeur",
        "Foie",
        "Rein"
      ],
      "bonne_reponse": 1,
      "explication": "Cas du support : hypervigilance, anxiété, tension nuque — trapèze supérieur / triple réchauffeur (stress, survie).",
      "source": "Support pédagogique A1 – Neuroplasticité (p.166)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q637",
      "theme": "neuroplasticite",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "L'étape « Réinstallation » du protocole neuroplasticité en kinésiologie vise surtout à :",
      "options": [
        "Affaiblir la boucle neuronale dominante",
        "Proposer un nouveau cadre, une nouvelle croyance ou un nouvel état d'être",
        "Identifier le circuit automatique via le test musculaire",
        "Répéter et incarner physiquement la nouvelle version de soi"
      ],
      "bonne_reponse": 1,
      "explication": "Réinstallation = créer une nouvelle voie neuronale (nouveau cadre / croyance / état d'être). Ancrage = renforcer et stabiliser.",
      "source": "Support pédagogique A1 – Neuroplasticité (p.166)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q638",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Selon le support, le « Predictive Processing » rappelle au kinésiologue que le cerveau :",
      "options": [
        "Reçoit passivement la réalité sans anticipation",
        "Anticipe en permanence et ajuste perception, attention et tonus musculaire",
        "Ne modifie jamais le tonus sous l'effet des émotions",
        "Fonctionne indépendamment des attentes du consultant"
      ],
      "bonne_reponse": 1,
      "explication": "Le cerveau anticipe constamment (machine prédictive) : cette anticipation influence perception, attention, posture et activité musculaire.",
      "source": "Support pédagogique – Comprendre le test musculaire (EKI-LIBRE, éd. 1, juin 2026)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q639",
      "theme": "neurolymphatiques",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Selon le corrigé, comment la stimulation des points neuro-lymphatiques peut-elle verrouiller les muscles ?",
      "source": "Corrigé 2025 – Q.7",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Uniquement par refroidissement local",
        "Hypothèse électromagnétique : NLY comme « disjoncteurs » reliés aux ganglions lymphatiques",
        "Par blocage mécanique des tendons uniquement",
        "Par injection de cortisol"
      ],
      "bonne_reponse": 1,
      "explication": "Niveau électromagnétique ; disjoncteurs qui « sautent » si surcharge ; liens ganglionnaires ; massage dissout le « bouchon » toxique."
    },
    {
      "id": "q640",
      "theme": "alimentation_mtc",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Pourquoi est-il préférable de tester les aliments avec un muscle qui déverrouille ?",
      "source": "Corrigé 2025 – Q.19",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Parce qu'un muscle fort ne réagit jamais",
        "Il peut se renforcer devant un aliment utile — démonstration éducative du tonus retrouvé",
        "Pour éviter tout pré-test",
        "Parce que seul le deltoïde postérieur convient"
      ],
      "bonne_reponse": 1,
      "explication": "Le muscle déverrouillé peut se renforcer si l'aliment est nécessaire ; le TF montre le tonus retrouvé à la personne."
    },
    {
      "id": "q641",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelles lois des 5 éléments utilise-t-on pour déterminer le méridien clé ?",
      "source": "Corrigé 2025 – Q.29",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "On renforce le 1er vide Yin le plus proche de l'excès (priorité couple Yin, Shen/Ko Yin, etc.)",
        "Uniquement la loi Ko sur le Yang",
        "Toujours le méridien du Foie en premier",
        "Aucune loi : tirage au sort"
      ],
      "bonne_reponse": 0,
      "explication": "1er vide Yin proche de l'excès ; priorités : couple Yin, Shen/Ko Yin, autre Yin, couple Yang, Shen/Ko Yang, autre Yang."
    },
    {
      "id": "q642",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Que fait-on pour déterminer le méridien prioritaire (corrigé Q.30) ?",
      "source": "Corrigé 2025 – Q.30",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Poser excès/vides sur roue + 5 éléments, demander à la personne, éventuellement LC",
        "Toujours renforcer le Rein en premier",
        "Ignorer les lois Ko et Sheng",
        "Tester uniquement le méridien du moment (heure)"
      ],
      "bonne_reponse": 0,
      "explication": "Placer excès/vides sur les 2 schémas ; demander quelle loi/méridien « parle » ; LC pour vérifier si la correction renforce les autres méridiens."
    },
    {
      "id": "q643",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la procédure pour équilibrer selon la loi des Cinq Éléments (corrigé) ?",
      "source": "Corrigé 2025 – Q.31",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Renforcer le méridien en vide après excès ; priorité Yin sur Yang ; tester le méridien prioritaire ou LC",
        "Toujours sédater le Yang avant le Yin",
        "Uniquement balayer le méridien du Cœur en sens inverse",
        "Commencer par le Gros Intestin quel que soit le tableau"
      ],
      "bonne_reponse": 0,
      "explication": "Vide après excès, Yin prioritaire sur Yang, pas d'ordre fixe entre Ko et Sheng ; test ou LC si doute."
    },
    {
      "id": "q644",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Pourquoi vérifier les points d'alarme après une équilibration ?",
      "source": "Corrigé 2025 – Q.32",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Pour mesurer la température corporelle",
        "Pour voir s'il reste un excès ; sinon balayage inverse ou renfort du méridien couplé",
        "Pour choisir une fleur de Bach au hasard",
        "Ce n'est jamais nécessaire"
      ],
      "bonne_reponse": 1,
      "explication": "Vérifier excès résiduel ; si oui : balayer à l'envers ou renforcer le couplé (surtout si excès Cœur)."
    },
    {
      "id": "q645",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle technique supplémentaire équilibre les abdominaux après PNL/PNV (corrigé) ?",
      "source": "Corrigé 2025 – Q.33",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Technique cérébro-spinale : marcher, re-tester, écarter le cuir chevelu vers les oreilles",
        "Tapotement du point Shu du Rein uniquement",
        "Cross crawl 30 minutes",
        "Aucune — les abdominaux ne se re-testent pas"
      ],
      "bonne_reponse": 0,
      "explication": "Après équilibration abdominale : marcher, re-tester ; si Tf, écarter ~5× de la ligne médiane vers les oreilles (LCR), re-tester et refaire marcher."
    },
    {
      "id": "q646",
      "theme": "cinq_elements",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'équilibrer soi-même en tenant compte de l'heure de la journée ?",
      "source": "Corrigé 2025 – Q.36",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "PNL VC/VG puis PNL/PNV + balayage du méridien en plénitude à ce moment",
        "Uniquement masser les pieds",
        "Sédater le méridien du Foie systématiquement",
        "Ne jamais utiliser les points horaires"
      ],
      "bonne_reponse": 0,
      "explication": "PNL VC/VG, PNL/PNV et balayage du muscle/méridien en plénitude correspondant à l'heure."
    },
    {
      "id": "q647",
      "theme": "muscles_meridiens",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le Carré des lombes peut être testé debout, allongé sur le dos ou sur le ventre.",
      "source": "Corrigé 2025 – Q.37",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": true,
      "explication": "Vrai (corrigé)."
    },
    {
      "id": "q648",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle technique pour les décalages horaires (voyage en avion) ?",
      "source": "Corrigé 2025 – Q.38",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Équilibration selon l'heure : PNL VC/VG, puis PNL/PNV du méridien actif au pays d'arrivée, toutes les 2 h",
        "Sédater uniquement le Triple Réchauffeur",
        "Ne rien faire pendant 48 h",
        "Renforcer le Gros Intestin uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "PNL VC/VG ; stimuler selon décalage horaire le méridien du pays d'arrivée ; répéter toutes les 2 h (points horaires ou balayage possible)."
    },
    {
      "id": "q649",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Pourquoi le 2e point d'acupressure est-il le même en renforcement et en sédation ?",
      "source": "Corrigé 2025 – Q.44",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Par erreur dans le manuel",
        "C'est la « grand-mère » (loi Ko) qui régule l'apport ou la libération d'énergie",
        "Parce que le Rein et le Foie sont identiques",
        "Uniquement en séance de groupe"
      ],
      "bonne_reponse": 1,
      "explication": "La grand-mère contrôle et régule l'apport (tonification) ou la libération (sédation)."
    },
    {
      "id": "q650",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Sédation du méridien Rein (théorie des points d'acupressure) : quels méridiens aux points 1° et 2° ?",
      "source": "Corrigé 2025 – Q.45",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "1° Rein–Foie / 2° Rein–Rate-Pancréas",
        "1° Rein–Estomac / 2° Rein–Vessie",
        "1° Cœur–Intestin grêle / 2° Cœur–Vessie",
        "1° Foie–VB / 2° Foie–Rein"
      ],
      "bonne_reponse": 0,
      "explication": "Points 1° : rein associé au foie ; points 2° : rein associé à la rate-pancréas."
    },
    {
      "id": "q651",
      "theme": "neurolymphatiques",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Si un PNL est chatouilleux ou sensible, quelle technique utiliser ?",
      "source": "Corrigé 2025 – Q.47",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Abandonner la correction",
        "Tenir le PNL d'une main et le début ou la fin du méridien (~30 s) de l'autre",
        "Appuyer très fort 5 minutes",
        "Utiliser uniquement le cross crawl"
      ],
      "bonne_reponse": 1,
      "explication": "Tenir PNL + extrémité la plus pratique/la moins invasive du méridien ~30 s."
    },
    {
      "id": "q652",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle technique retient des informations au sujet d'un muscle ?",
      "source": "Corrigé 2025 – Q.50",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "La mise en circuit (MC)",
        "Le cross crawl seul",
        "L'ionisation",
        "Le tapotement chronique"
      ],
      "bonne_reponse": 0,
      "explication": "MC = mise en circuit."
    },
    {
      "id": "q653",
      "theme": "techniques_correction",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le testeur ET la personne testée peuvent tous deux utiliser la mise en circuit (MC).",
      "source": "Corrigé 2025 – Q.51",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": true,
      "explication": "Oui (corrigé)."
    },
    {
      "id": "q654",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'équilibre-t-on en corrigeant les Gaits (démarches) ?",
      "source": "Corrigé 2025 – Q.52",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Démarche, équilibre, centrage, énergie dans la marche ; muscles synergiques de la marche",
        "Uniquement la latéralité",
        "Seulement le méridien du Poumon",
        "Les 14 muscles dans l'ordre circadien"
      ],
      "bonne_reponse": 0,
      "explication": "Démarche plus alerte/enthousiaste ; muscles synergiques pour la mise en action (note manuscrite corrigé)."
    },
    {
      "id": "q655",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Si une personne veut faire les Gaits elle-même, que peut-elle faire ?",
      "source": "Corrigé 2025 – Q.53",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Se masser les points situés sur ses pieds",
        "Courir 10 km sans échauffement",
        "Prendre uniquement des oligo-éléments",
        "Éviter tout mouvement croisé"
      ],
      "bonne_reponse": 0,
      "explication": "Auto-massage des points des pieds."
    },
    {
      "id": "q656",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce qu'un « environnement sécurisant » (corrigé) ?",
      "source": "Corrigé 2025 – Q.54",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Un lieu sans perturbation musculaire, sûr, où visualiser si stress (passé, LSE passée, stress postural)",
        "Une pièce sans lumière obligatoirement",
        "Un hôpital uniquement",
        "Un endroit où le praticien impose ses interprétations"
      ],
      "bonne_reponse": 0,
      "explication": "Lieu sûr sans stress ni perturbation TM ; ressource de visualisation si trop de stress en équilibration du passé."
    },
    {
      "id": "q657",
      "theme": "techniques_correction",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Douleur chronique : de quel côté tapote-t-on d'abord le 1er point de tonification ?",
      "source": "Corrigé 2025 – Q.56",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Côté opposé à la douleur, puis côté douleur si besoin",
        "Toujours côté douleur uniquement",
        "Uniquement au niveau du crâne",
        "Jamais du côté opposé"
      ],
      "bonne_reponse": 0,
      "explication": "D'abord côté opposé ; si la douleur ne diminue plus, terminer côté douleur."
    },
    {
      "id": "q658",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Sous stress, quel hémisphère cérébral prend le contrôle (corrigé) ?",
      "source": "Corrigé 2025 – Q.63",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Le gauche",
        "Le droit",
        "Les deux également",
        "Aucun — seule la moelle"
      ],
      "bonne_reponse": 0,
      "explication": "Gauche (corrigé examen 2025)."
    },
    {
      "id": "q659",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quels modes sont prévus pour effectuer un dépistage (corrigé Q.71) ?",
      "source": "Corrigé 2025 – Q.71",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Remodelage latéralité, TCS, ACI, Fixation, Ionisation — les cinq",
        "Uniquement la Fixation",
        "Seulement l'Ionisation",
        "Aucun mode standardisé"
      ],
      "bonne_reponse": 0,
      "explication": "Les cinq sont entourés dans le corrigé : latéralité, cérébro-spinale, ACI, fixation, ionisation."
    },
    {
      "id": "q660",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Intégration des réflexes archaïques : le travail isométrique se fait de…",
      "source": "Corrigé 2025 – Q.73",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "7 à 8 secondes, 3 à 4 fois",
        "3 à 4 secondes, 7 à 8 fois",
        "30 secondes, 1 fois",
        "1 seconde, 20 fois"
      ],
      "bonne_reponse": 0,
      "explication": "7–8 secondes, répété 3 à 4 fois (corrigé : réponse C)."
    },
    {
      "id": "q661",
      "theme": "hans_selye",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Au niveau 2 de stress (résistance), que met-on en place selon le corrigé ?",
      "source": "Corrigé 2025 – Q.77",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "On tient le coup : changement de comportement pour accepter le stress (face à la douleur)",
        "On s'adapte par lutte/fuite (niveau 1)",
        "On ajoute un évitement (niveau 3)",
        "On ne change rien"
      ],
      "bonne_reponse": 0,
      "explication": "Résistance : on change nos comportements pour accepter le stress."
    },
    {
      "id": "q662",
      "theme": "traits_chakras",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quels symptômes d'un déséquilibre du 4e chakra cite le corrigé ?",
      "source": "Corrigé 2025 – Q.86",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Solitude, isolement, difficulté à se connecter, confiance/partage, relations difficiles",
        "Douleurs uniquement au genou",
        "Excès de thyroïde",
        "Amélioration automatique des relations"
      ],
      "bonne_reponse": 0,
      "explication": "Solitude, isolement, difficulté à faire confiance ou partager ; relations amoureuses/amicales difficiles."
    },
    {
      "id": "q663",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "De quoi est composée la diaphyse d'un os long ?",
      "source": "Corrigé 2025 (anatomie) – Q.1",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Os compact (partie intermédiaire)",
        "Cartilage articulaire",
        "Moelle uniquement",
        "Muscle strié"
      ],
      "bonne_reponse": 0,
      "explication": "Diaphyse = partie intermédiaire en os compact ; épiphyse aux extrémités, métaphyse jonction, périoste enveloppe."
    },
    {
      "id": "q664",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Combien de vertèbres compose la colonne vertébrale (corrigé) ?",
      "source": "Corrigé 2025 (anatomie) – Q.2",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "33 (7 cervicales, 12 dorsales, 5 lombaires, 5 sacrées, 4 coccygiennes)",
        "26",
        "24",
        "40"
      ],
      "bonne_reponse": 0,
      "explication": "33 au total selon le corrigé."
    },
    {
      "id": "q665",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quelle est la différence entre arthrose et ostéoporose ?",
      "source": "Corrigé 2025 (anatomie) – Q.3",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Arthrose = dégénérescence articulaire (cartilage) ; ostéoporose = perte de densité osseuse",
        "Ce sont deux noms pour la même maladie",
        "Arthrose = os ; ostéoporose = cartilage uniquement",
        "Arthrose = inflammation aiguë ; ostéoporose = fracture obligatoire"
      ],
      "bonne_reponse": 0,
      "explication": "Arthrose : articulation/cartilage ; ostéoporose : densité osseuse."
    },
    {
      "id": "q666",
      "theme": "anatomie",
      "type": "association",
      "difficulte": 2,
      "enonce": "Associez chaque type de muscle à sa description (corrigé).",
      "source": "Corrigé 2025 (anatomie) – Q.4",
      "banque_version": "2.0.0",
      "verifie": false,
      "paires": [
        [
          "Strié squelettique",
          "Volontaire, attaché aux os, aspect strié"
        ],
        [
          "Lisse",
          "Involontaire, parois des organes internes"
        ],
        [
          "Cardiaque",
          "Strié spécialisé du cœur"
        ]
      ],
      "explication": "Trois types : strié squelettique, lisse, cardiaque."
    },
    {
      "id": "q667",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Le deltoïde : quelle action du faisceau moyen ?",
      "source": "Corrigé 2025 (anatomie) – Q.5",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Abduction (ABD) du bras",
        "Flexion uniquement",
        "Extension uniquement",
        "Rotation interne seule"
      ],
      "bonne_reponse": 0,
      "explication": "Antérieur : flexion/RI ; moyen : ABD ; postérieur : extension/RE."
    },
    {
      "id": "q668",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "De quoi est composé le système nerveux central ?",
      "source": "Corrigé 2025 (anatomie) – Q.6",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Cerveau et moelle épinière (tronc cérébral aussi accepté)",
        "Uniquement les nerfs crâniens",
        "Seulement la moelle",
        "Les ganglions lymphatiques"
      ],
      "bonne_reponse": 0,
      "explication": "SNC = cerveau + moelle ; tronc cérébral accepté."
    },
    {
      "id": "q669",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le cerveau primitif (reptilien) est aussi appelé télencéphale.",
      "source": "Corrigé 2025 (anatomie) – Q.8",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": false,
      "explication": "Faux : le télencéphale est une autre structure."
    },
    {
      "id": "q670",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Si la moelle est coupée au niveau cervical, on perd uniquement l'usage des jambes.",
      "source": "Corrigé 2025 (anatomie) – Q.9",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": false,
      "explication": "Faux : bras et tronc peuvent être touchés."
    },
    {
      "id": "q673",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "En stress, c'est le système orthosympathique qui prépare le terrain.",
      "source": "Corrigé 2025 (anatomie) – Q.12",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": true,
      "explication": "Vrai (lutte/fuite)."
    },
    {
      "id": "q674",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Extension de jambe assis : le quadriceps travaille en concentrique.",
      "source": "Corrigé 2025 (anatomie) – Q.18",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": true,
      "explication": "Concentrique : fibres qui raccourcissent."
    },
    {
      "id": "q675",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Les cellules élémentaires du foie s'appellent hépatocytes.",
      "source": "Corrigé 2025 (anatomie) – Q.21",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": true,
      "explication": "Vrai."
    },
    {
      "id": "q676",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "La multiplication cellulaire s'appelle la mitose.",
      "source": "Corrigé 2025 (anatomie) – Q.22",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": true,
      "explication": "Vrai."
    },
    {
      "id": "q677",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Les brûlures d'estomac ont toujours pour origine un stress important.",
      "source": "Corrigé 2025 (anatomie) – Q.28",
      "banque_version": "2.0.0",
      "verifie": false,
      "bonne_reponse": false,
      "explication": "Faux (bactéries, etc.)."
    },
    {
      "id": "q678",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La bile stockée dans la vésicule se déverse dans :",
      "source": "Corrigé 2025 (anatomie) – Q.19",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Le cholédoque",
        "L'estomac",
        "Le caecum",
        "L'œsophage"
      ],
      "bonne_reponse": 0,
      "explication": "Cholédoque (corrigé : B)."
    },
    {
      "id": "q680",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comment s'appellent les os de l'oreille interne ?",
      "source": "Corrigé 2025 (anatomie) – Q.29",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Marteau, enclume, étrier",
        "Radius, cubitus, carpe",
        "Frontal, pariétal, temporal",
        "Ilion, sacrum, coccyx"
      ],
      "bonne_reponse": 0,
      "explication": "Marteau, enclume, étrier."
    },
    {
      "id": "q681",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "La digestion sollicite dans l'ordre :",
      "source": "Corrigé 2025 (anatomie) – Q.31",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Estomac → intestin grêle → gros intestin",
        "Gros intestin → grêle → estomac",
        "Grêle → estomac → gros intestin",
        "Estomac → gros intestin → grêle"
      ],
      "bonne_reponse": 0,
      "explication": "Option C du corrigé."
    },
    {
      "id": "q682",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'endomètre ?",
      "source": "Corrigé 2025 (anatomie) – Q.32",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "La muqueuse utérine",
        "La paroi de l'estomac",
        "Le cartilage de la trachée",
        "La membrane du péritoine"
      ],
      "bonne_reponse": 0,
      "explication": "Muqueuse utérine."
    },
    {
      "id": "q683",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'appendicite ?",
      "source": "Corrigé 2025 (anatomie) – Q.36",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de l'appendice",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de l'appendice."
    },
    {
      "id": "q684",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la cholécystite ?",
      "source": "Corrigé 2025 (anatomie) – Q.37",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de la vésicule biliaire",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de la vésicule biliaire."
    },
    {
      "id": "q685",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la gastro-entérite ?",
      "source": "Corrigé 2025 (anatomie) – Q.38",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de la muqueuse gastrique et intestinale",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de la muqueuse gastrique et intestinale."
    },
    {
      "id": "q686",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'hépatite ?",
      "source": "Corrigé 2025 (anatomie) – Q.39",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de le foie",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de le foie."
    },
    {
      "id": "q687",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la œsophagite ?",
      "source": "Corrigé 2025 (anatomie) – Q.40",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de l'œsophage",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de l'œsophage."
    },
    {
      "id": "q688",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la péritonite ?",
      "source": "Corrigé 2025 (anatomie) – Q.41",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de le péritoine",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de le péritoine."
    },
    {
      "id": "q689",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la rectocolite ?",
      "source": "Corrigé 2025 (anatomie) – Q.42",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de le rectum et le colon",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de le rectum et le colon."
    },
    {
      "id": "q690",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la colite ?",
      "source": "Corrigé 2025 (anatomie) – Q.43",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de le colon",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de le colon."
    },
    {
      "id": "q691",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la gastrite ?",
      "source": "Corrigé 2025 (anatomie) – Q.44",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de l'estomac",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de l'estomac."
    },
    {
      "id": "q692",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la glossite ?",
      "source": "Corrigé 2025 (anatomie) – Q.45",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de la langue",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de la langue."
    },
    {
      "id": "q693",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la pancréatite ?",
      "source": "Corrigé 2025 (anatomie) – Q.46",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de le pancréas",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de le pancréas."
    },
    {
      "id": "q694",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'arthrite ?",
      "source": "Corrigé 2025 (anatomie) – Q.47",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les articulations",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les articulations."
    },
    {
      "id": "q695",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'ostéomyélite ?",
      "source": "Corrigé 2025 (anatomie) – Q.48",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les os et la moelle osseuse",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les os et la moelle osseuse."
    },
    {
      "id": "q696",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'artérite ?",
      "source": "Corrigé 2025 (anatomie) – Q.49",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les parois des artères",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les parois des artères."
    },
    {
      "id": "q697",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la péricardite ?",
      "source": "Corrigé 2025 (anatomie) – Q.50",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de le péricarde",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de le péricarde."
    },
    {
      "id": "q698",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'endocardite ?",
      "source": "Corrigé 2025 (anatomie) – Q.51",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de l'endocarde",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de l'endocarde."
    },
    {
      "id": "q699",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la cystite ?",
      "source": "Corrigé 2025 (anatomie) – Q.52",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de la vessie",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de la vessie."
    },
    {
      "id": "q700",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la néphrite ?",
      "source": "Corrigé 2025 (anatomie) – Q.53",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les reins",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les reins."
    },
    {
      "id": "q701",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la pyélonéphrite ?",
      "source": "Corrigé 2025 (anatomie) – Q.54",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les voies urinaires",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les voies urinaires."
    },
    {
      "id": "q702",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'urétérite ?",
      "source": "Corrigé 2025 (anatomie) – Q.55",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de l'uretère",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de l'uretère."
    },
    {
      "id": "q703",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'urétrite ?",
      "source": "Corrigé 2025 (anatomie) – Q.56",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de l'urètre",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de l'urètre."
    },
    {
      "id": "q704",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la bronchite ?",
      "source": "Corrigé 2025 (anatomie) – Q.57",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les bronches",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les bronches."
    },
    {
      "id": "q705",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la trachéite ?",
      "source": "Corrigé 2025 (anatomie) – Q.58",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de la trachée",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de la trachée."
    },
    {
      "id": "q706",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la laryngite ?",
      "source": "Corrigé 2025 (anatomie) – Q.59",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de le larynx",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de le larynx."
    },
    {
      "id": "q707",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'otite ?",
      "source": "Corrigé 2025 (anatomie) – Q.60",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de l'oreille moyenne",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de l'oreille moyenne."
    },
    {
      "id": "q708",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la rhinite ?",
      "source": "Corrigé 2025 (anatomie) – Q.61",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les muqueuses nasales",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les muqueuses nasales."
    },
    {
      "id": "q709",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la sinusite ?",
      "source": "Corrigé 2025 (anatomie) – Q.62",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les sinus",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les sinus."
    },
    {
      "id": "q710",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la mastoïdite ?",
      "source": "Corrigé 2025 (anatomie) – Q.63",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de la mastoïde",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de la mastoïde."
    },
    {
      "id": "q711",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que l'encéphalite ?",
      "source": "Corrigé 2025 (anatomie) – Q.64",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de l'encéphale",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de l'encéphale."
    },
    {
      "id": "q712",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Qu'est-ce que la méningite ?",
      "source": "Corrigé 2025 (anatomie) – Q.65",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Inflammation de les méninges",
        "Inflammation du foie",
        "Inflammation de la peau",
        "Inflammation des muscles"
      ],
      "bonne_reponse": 0,
      "explication": "Inflammation de les méninges."
    },
    {
      "id": "q713",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel terme médical désigne les douleurs lombaires ?",
      "source": "Corrigé 2025 (anatomie) – Q.66",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Lombalgie",
        "Migraine",
        "Dyspnée",
        "Tachycardie"
      ],
      "bonne_reponse": 0,
      "explication": "Lombalgie (corrigé)."
    },
    {
      "id": "q714",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel terme médical désigne les douleurs musculaires ?",
      "source": "Corrigé 2025 (anatomie) – Q.67",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Myalgie",
        "Migraine",
        "Dyspnée",
        "Tachycardie"
      ],
      "bonne_reponse": 0,
      "explication": "Myalgie (corrigé)."
    },
    {
      "id": "q715",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel terme médical désigne les douleurs articulaires ?",
      "source": "Corrigé 2025 (anatomie) – Q.68",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Arthralgie",
        "Migraine",
        "Dyspnée",
        "Tachycardie"
      ],
      "bonne_reponse": 0,
      "explication": "Arthralgie (corrigé)."
    },
    {
      "id": "q716",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel terme médical désigne les douleurs gastriques ?",
      "source": "Corrigé 2025 (anatomie) – Q.69",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "Gastralgie",
        "Migraine",
        "Dyspnée",
        "Tachycardie"
      ],
      "bonne_reponse": 0,
      "explication": "Gastralgie (corrigé)."
    },
    {
      "id": "q717",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un dermatologue est spécialiste de :",
      "source": "Corrigé 2025 (anatomie) – Q.70",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "la peau",
        "Les os uniquement",
        "Les dents uniquement",
        "Les muscles uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Spécialiste de la peau."
    },
    {
      "id": "q718",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un ophtalmologue est spécialiste de :",
      "source": "Corrigé 2025 (anatomie) – Q.71",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "les yeux",
        "Les os uniquement",
        "Les dents uniquement",
        "Les muscles uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Spécialiste de les yeux."
    },
    {
      "id": "q719",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un néphrologue est spécialiste de :",
      "source": "Corrigé 2025 (anatomie) – Q.72",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "les reins",
        "Les os uniquement",
        "Les dents uniquement",
        "Les muscles uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Spécialiste de les reins."
    },
    {
      "id": "q720",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un gastro-entérologue est spécialiste de :",
      "source": "Corrigé 2025 (anatomie) – Q.73",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "l'appareil digestif (estomac…)",
        "Les os uniquement",
        "Les dents uniquement",
        "Les muscles uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Spécialiste de l'appareil digestif (estomac…)."
    },
    {
      "id": "q721",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un stomatologue est spécialiste de :",
      "source": "Corrigé 2025 (anatomie) – Q.74",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "la bouche",
        "Les os uniquement",
        "Les dents uniquement",
        "Les muscles uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Spécialiste de la bouche."
    },
    {
      "id": "q722",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un gynécologue est spécialiste de :",
      "source": "Corrigé 2025 (anatomie) – Q.75",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "l'utérus (urologue pour l'homme)",
        "Les os uniquement",
        "Les dents uniquement",
        "Les muscles uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Spécialiste de l'utérus (urologue pour l'homme)."
    },
    {
      "id": "q723",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Un endocrinologue est spécialiste de :",
      "source": "Corrigé 2025 (anatomie) – Q.76",
      "banque_version": "2.0.0",
      "verifie": false,
      "options": [
        "les glandes endocrines",
        "Les os uniquement",
        "Les dents uniquement",
        "Les muscles uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Spécialiste des glandes endocrines."
    },
    {
      "id": "q724",
      "theme": "test_musculaire",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Pendant une équilibration, quelle est la meilleure description d'un muscle déverrouillé ?",
      "options": [
        "Un vide d'énergie",
        "Un excès d'énergie",
        "Un déséquilibre",
        "Une fracture musculaire"
      ],
      "bonne_reponse": 2,
      "explication": "Déséquilibre (corrigé Q.24 — réponse C).",
      "source": "Corrigé 2025 – Q.24",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q725",
      "theme": "meridiens",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "L'énergie dans les méridiens Yin circule du haut vers le bas.",
      "bonne_reponse": false,
      "explication": "Non (corrigé Q.64).",
      "source": "Corrigé 2025 – Q.64",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q726",
      "theme": "cinq_elements",
      "type": "vrai_faux",
      "difficulte": 1,
      "enonce": "L'élément BOIS correspond au printemps.",
      "bonne_reponse": true,
      "explication": "Oui (corrigé Q.67).",
      "source": "Corrigé 2025 – Q.67",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q727",
      "theme": "cinq_elements",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "L'élément TERRE correspond à l'automne.",
      "bonne_reponse": false,
      "explication": "Non : la Terre correspond à l'intersaison (fin d'été / transition). L'automne est associé au Métal.",
      "source": "Corrigé 2025 – Q.68",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q728",
      "theme": "test_musculaire",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Tous les tests donnant un muscle qui déverrouille sont à corriger.",
      "bonne_reponse": false,
      "explication": "Non (corrigé Q.69).",
      "source": "Corrigé 2025 – Q.69",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q729",
      "theme": "neurolymphatiques",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Les points neuro-lymphatiques ont été découverts par le Dr Goodheart.",
      "bonne_reponse": false,
      "explication": "Non : Chapman & Owen (1937) ; Goodheart les a intégrés ensuite (corrigé Q.60).",
      "source": "Corrigé 2025 – Q.60",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q730",
      "theme": "lcf",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le corps calleux fait passer les informations du cerveau dominant au cerveau droit.",
      "bonne_reponse": false,
      "explication": "Non (corrigé Q.72) : le corps calleux relie les deux hémisphères, sans ce schéma « dominant → droit ».",
      "source": "Corrigé 2025 – Q.72",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q731",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Lors d'un effort physique intense, que fait la fréquence cardiaque et pourquoi ?",
      "options": [
        "Elle diminue pour économiser l'énergie",
        "Elle augmente pour apporter l'oxygène nécessaire aux muscles",
        "Elle reste stable",
        "Elle s'arrête quelques secondes"
      ],
      "bonne_reponse": 1,
      "explication": "Augmentation pour oxygéner les muscles et soutenir l'effort (corrigé anatomie Q.15).",
      "source": "Corrigé 2025 (anatomie) – Q.15",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q732",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Quel est le rôle du pancréas cité dans le corrigé ?",
      "options": [
        "Régulation glycémique par sécrétions exocrines uniquement",
        "Digestion des protides et lipides grâce aux protéases et lipases",
        "Production de bile",
        "Filtration du sang comme le rein"
      ],
      "bonne_reponse": 1,
      "explication": "Proteases et lipases pour digestion protides/lipides (corrigé Q.20, réponse C).",
      "source": "Corrigé 2025 (anatomie) – Q.20",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q733",
      "theme": "anatomie",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "Le système nerveux parasympathique est aussi appelé vagal.",
      "bonne_reponse": true,
      "explication": "Vrai (corrigé anatomie Q.23 — parmi plusieurs items).",
      "source": "Corrigé 2025 (anatomie) – Q.23",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q734",
      "theme": "aire_broca",
      "type": "vrai_faux",
      "difficulte": 3,
      "enonce": "L'aire de Broca peut être responsable d'une aphasie avec trouble de la compréhension.",
      "bonne_reponse": true,
      "explication": "Oui (corrigé anatomie Q.26).",
      "source": "Corrigé 2025 (anatomie) – Q.26",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q735",
      "theme": "anatomie",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Une prolifération de cellules malignes au niveau des ganglions lymphatiques se nomme :",
      "options": [
        "Leucémie",
        "Myélome",
        "Lymphome",
        "Méningite"
      ],
      "bonne_reponse": 2,
      "explication": "Lymphome (corrigé anatomie Q.27).",
      "source": "Corrigé 2025 (anatomie) – Q.27",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q736",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "À quoi servent les fleurs de Bach selon le corrigé anatomie ?",
      "options": [
        "Soulager stress/angoisses et rétablir l'équilibre émotionnel (une fleur par émotion)",
        "Remplacer les médicaments pour l'arthrose",
        "Tonifier les méridiens Yang",
        "Mesurer la latéralité"
      ],
      "bonne_reponse": 0,
      "explication": "Méthode naturelle pour apaiser maux/angoisses ; chaque fleur correspond à une émotion (corrigé anatomie Q.30).",
      "source": "Corrigé 2025 (anatomie) – Q.30",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q737",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Inhibition visuelle : si le test est Tf avec les yeux à GAUCHE, cela indique surtout :",
      "options": [
        "Des difficultés à voir les différences et les nouveautés",
        "Des difficultés à se rappeler visuellement et à trouver les similitudes",
        "Un problème uniquement d'équilibre postural",
        "Une carence en vitamine D"
      ],
      "bonne_reponse": 1,
      "explication": "Yeux à gauche Tf → mémoire visuelle / similitudes. Yeux à droite Tf → différences / nouveautés.",
      "source": "Protocoles des copines — Inhibition visuelle",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q738",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Inhibition visuelle : correction yeux gauche/droite — quels points stimuler ?",
      "options": [
        "27Rn + main sur le nombril, yeux dans la position qui a Tf",
        "Uniquement le point Shu du Rein",
        "Cross crawl 5 minutes",
        "Tapotement du temporal"
      ],
      "bonne_reponse": 0,
      "explication": "Gauche/droite : 27Rn + nombril + yeux dans la direction stressée. Haut : lèvre supérieure ; bas : lèvre inférieure.",
      "source": "Protocoles des copines — Inhibition visuelle",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q739",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Protocole Cloaques : à quoi sert-il principalement ?",
      "options": [
        "Synchroniser crâne et sacrum via le liquide céphalo-rachidien",
        "Mesurer la glycémie",
        "Tonifier le méridien du Foie uniquement",
        "Remplacer le baromètre du comportement"
      ],
      "bonne_reponse": 0,
      "explication": "Cloaques = synchronisation des mouvements crâne/sacrum via le LCR ; renforcement immunitaire en correction.",
      "source": "Protocoles des copines — Cloaques",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q740",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Cloaques : un problème CHRONIQUE se révèle plutôt au test :",
      "options": [
        "Antérieur",
        "Postérieur",
        "Uniquement sur le quadriceps",
        "Sur le méridien du Cœur"
      ],
      "bonne_reponse": 1,
      "explication": "Avant du corps = problème aigu ; arrière = problème chronique.",
      "source": "Protocoles des copines — Cloaques",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q741",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Trompe d'Eustache : sur quel axe relève ce protocole ?",
      "options": [
        "Structure",
        "Latéralité uniquement",
        "Génétique uniquement",
        "Vision Gym"
      ],
      "bonne_reponse": 0,
      "explication": "Axe structure : équilibre pression oreille moyenne/interne, clarté auditive, stabilité physique.",
      "source": "Protocoles des copines — Trompe d'Eustache",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q742",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Trompe d'Eustache : comment teste-t-on la polarité près de l'oreille ?",
      "options": [
        "Paume à quelques cm, puis dos de la main à quelques cm — tester à chaque fois",
        "Uniquement en tapotant le temporal",
        "En massant le psoas",
        "En fermant les yeux 30 secondes"
      ],
      "bonne_reponse": 0,
      "explication": "Test 1 : paume près de l'oreille ; test 2 : dos de la main (polarité inversée) ; même chose de l'autre côté.",
      "source": "Protocoles des copines — Trompe d'Eustache",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q743",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Pouls chinois : la loge du Maître Cœur est associée à :",
      "options": [
        "La mémoire cellulaire",
        "La régulation du système thermique",
        "Uniquement la digestion",
        "La latéralité"
      ],
      "bonne_reponse": 0,
      "explication": "MC = mémoire cellulaire ; Triple Réchauffeur = régulation du système thermique.",
      "source": "Protocoles des copines — Pouls chinois",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q744",
      "theme": "meridiens",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Pouls chinois : la loge du Triple Réchauffeur correspond surtout à :",
      "options": [
        "La régulation du système thermique",
        "La mémoire cellulaire",
        "Le drainage lymphatique des jambes",
        "La latéralité visuelle"
      ],
      "bonne_reponse": 0,
      "explication": "TR = système thermique ; MC = mémoire cellulaire.",
      "source": "Protocoles des copines — Pouls chinois",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q745",
      "theme": "endocrino_a2",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Protocole Fixation : l'épiphyse (glande pinéale) est surtout responsable de :",
      "options": [
        "Le cycle jour/nuit et la réception de la lumière",
        "La production d'insuline",
        "La digestion des lipides",
        "La latéralité motrice"
      ],
      "bonne_reponse": 0,
      "explication": "Épiphyse = cycle jour/nuit, lumière, « 3e œil » ; personnes travaillant de nuit → luminothérapie avant le boulot.",
      "source": "Protocoles des copines — Fixation",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q746",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "ACI : comment teste-t-on l'Aire Commune d'Intégration ?",
      "options": [
        "Tapoter derrière l'oreille gauche en maintenant le contact + tester",
        "Masser uniquement le psoas",
        "Regarder un papier noir",
        "Tenir le point C1 alimentation"
      ],
      "bonne_reponse": 0,
      "explication": "Tapotement derrière l'oreille gauche + contact maintenu ; si Tf → corriger (pincer talons d'Achille, genoux, adducteurs, trapèze…).",
      "source": "Protocoles des copines — ACI",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q747",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Réflexe respiratoire : en apnée (retenir sa respiration), la réponse attendue du test est :",
      "options": [
        "TF (fort)",
        "Tf (faible)",
        "Aucune réponse attendue",
        "Toujours switching"
      ],
      "bonne_reponse": 1,
      "explication": "Inspiration/expiration normale → TF ; apnée → Tf. Si inversé → correction (MC + modes digitaux).",
      "source": "Protocoles des copines — Réflexe respiratoire",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q748",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Lutte ou fuite : si la personne doit LUTTER, on observe surtout :",
      "options": [
        "Tf sur les muscles du haut du corps",
        "Tf sur le quadriceps (bas du corps)",
        "TF sur tous les muscles sans exception",
        "Aucun changement de tonus"
      ],
      "bonne_reponse": 0,
      "explication": "Lutte → Tf haut ; fuite → Tf bas (quadriceps). Correction lutte : boxer l'air ; fuite : cross crawl.",
      "source": "Protocoles des copines — Lutte ou fuite",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q749",
      "theme": "mtc_energie",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Énergie de la polarité du corps : test d'équilibre avec doigts réunis + quadriceps — si polarités OK :",
      "options": [
        "TF",
        "Tf",
        "Switching obligatoire",
        "Test impossible"
      ],
      "bonne_reponse": 0,
      "explication": "Doigts réunis + test quadriceps = TF si polarités équilibrées ; sinon correction 27Rn (+/+ praticien/personne) + mode polarité.",
      "source": "Protocoles des copines — Énergie polarité du corps",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q750",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Gaits — démarche AVANT (« donne, mais ne prend pas ») : muscles testés et point de correction aux pieds ?",
      "options": [
        "Deltoïde antérieur + quadriceps opposés — masser point 3F (métatarses)",
        "Triceps + grand fessier — point 3Rte",
        "Moyen fessier + deltoïde médian — point 43E",
        "Psoas + grand pectoral — point 1Rn"
      ],
      "bonne_reponse": 0,
      "explication": "Démarche avant : deltoïde ant + quadriceps croisés ; bras Tf = peur de prendre ; jambe Tf = peur d'avancer ; correction 3F métatarses.",
      "source": "Protocoles des copines — Démarches (Gaits)",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q751",
      "theme": "circuits_a2",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Circuits musculaires — lors du test dans l'ordre, un muscle reste TF (blocage). Quelle est la première correction indiquée ?",
      "options": [
        "Masser les réflexes neuro-lymphatiques du muscle bloqué",
        "Rapprocher origine et insertion du muscle bloqué sans autre étape",
        "Appliquer le mode digital en premier",
        "Pinch dans le ventre du muscle principal à nouveau"
      ],
      "bonne_reponse": 0,
      "explication": "Correction 1 : NL du muscle bloqué. Si persiste → renforcer le principal en rapprochant O/I, puis pinch, re-tester. Mode digital émotions avec MI en Tf = si blocage persiste après mise en circuit.",
      "source": "Protocoles des copines — Circuits musculaires",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q752",
      "theme": "circuits_a2",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Circuits musculaires — au test, étape 1 : comment affaiblir le muscle principal pour que les autres muscles du circuit passent Tf ?",
      "options": [
        "Pinch dans le ventre du muscle",
        "Rapprocher origine et insertion",
        "Éloigner origine et insertion",
        "Masser les réflexes neuro-lymphatiques du principal"
      ],
      "bonne_reponse": 0,
      "explication": "Étape 1 du test : pinch au ventre du principal. Affaiblir au sens général = éloigner O/I ; renforcer = rapprocher O/I — ce n'est pas la même chose que le pinch de l'étape 1.",
      "source": "Protocoles des copines — Circuits musculaires",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q753",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "LSE passée : un TF sur le test MI après exploration du souvenir indique :",
      "options": [
        "Le stress émotionnel est libéré",
        "La séance doit être arrêtée immédiatement",
        "Il faut obligatoirement une RA",
        "Le switching est permanent"
      ],
      "bonne_reponse": 0,
      "explication": "Après stimulation points LSE et exploration multisensorielle du souvenir → MI TF = libération du stress émotionnel.",
      "source": "Protocoles des copines — LSE passée",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q754",
      "theme": "alimentation_mtc",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Nutrition +/- (copines) : pour le méridien TR / muscle Petit rond, quels nutriments sont cités ?",
      "options": [
        "Vitamine B5, C et iode",
        "Vitamine A, F et méthionine",
        "Protéines et iode uniquement",
        "Lactobacille acidophile uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Tableau copines : TR/Petit rond → B5, C, iode. Ex. VG/Grand rond → protéines, iode.",
      "source": "Protocoles des copines — Nutrition +/-",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q755",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "ACI : chez une personne en souffrance chronique, qu'est-ce qui alerte en priorité ?",
      "options": [
        "La peur de la douleur plus que la douleur elle-même",
        "Uniquement la faim",
        "Un excès de vitamine C",
        "Un blocage du méridien du Poumon uniquement"
      ],
      "bonne_reponse": 0,
      "explication": "Changement = danger ; la guérison (changement) peut être rejetée — la douleur devient garantie de sécurité inconsciente.",
      "source": "Protocoles des copines — ACI",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q756",
      "theme": "lcf",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Os hyoïde : quelle correction fait-on quand une mobilisation est Tf ?",
      "options": [
        "Correction immédiate + 3 déglutitions dans la position Tf",
        "Cross crawl 10 minutes",
        "Sédater le méridien du Foie",
        "Aucune — on ignore le Tf"
      ],
      "bonne_reponse": 0,
      "explication": "Mobiliser hyoïde (gauche, droite, haut, bas, horaire, anti-horaire) ; corriger de suite + 3 déglutitions en position Tf.",
      "source": "Protocoles des copines — Os hyoïde",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q757",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Comportements face à la douleur — « Inquiétude face à la douleur » : quel comportement positif est proposé ?",
      "options": [
        "Mettre de l'attention sur chaque petit progrès",
        "Ignorer toute sensation",
        "Augmenter les médicaments systématiquement",
        "Éviter toute activité physique"
      ],
      "bonne_reponse": 0,
      "explication": "Mal de vivre : préoccupation constante, hostilité possible. Positif : valoriser chaque petit progrès.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q758",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Confiance dans les médications » (mal de vivre) correspond surtout à :",
      "options": [
        "Besoin de béquilles : médicaments, alcool, chocolat, cigarette, jogging…",
        "Refus total de toute aide",
        "Confiance uniquement en la kinésiologie sans corps",
        "Absence de douleur chronique"
      ],
      "bonne_reponse": 0,
      "explication": "Béquilles multiples ; comportement positif : relaxation programmée, ralentir le rythme.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q759",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Anxiété et dépression » — comportement positif recommandé :",
      "options": [
        "Accepter de demander de l'aide et poursuivre ses objectifs avec persévérance",
        "Attendre que la solution vienne uniquement de l'extérieur",
        "Refuser toute relation",
        "Nier la douleur"
      ],
      "bonne_reponse": 0,
      "explication": "Mal de vivre : la solution doit venir de l'extérieur. Positif : demander de l'aide + persévérance.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q760",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Lèches-médecins » — quel comportement positif est indiqué ?",
      "options": [
        "Se fier à soi-même comme source de sa propre guérison et bien-être",
        "Dépendre totalement des autres pour guérir",
        "Éviter tout engagement thérapeutique",
        "Multiplier les consultations sans limite"
      ],
      "bonne_reponse": 0,
      "explication": "Mal de vivre : peur de l'engagement/intimité ; l'autre doit combler ce qu'on ne sait pas faire.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q761",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Exclusion de toute vie sociale » (mal de vivre) évoque surtout :",
      "options": [
        "Phobie scolaire / retrait social",
        "Hyperactivité sociale",
        "Confiance excessive en groupe",
        "Latéralité inversée"
      ],
      "bonne_reponse": 0,
      "explication": "Positif : se sentir plus fort dans les échanges sociaux.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q762",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Retrait de la vie sexuelle active » — mal de vivre décrit :",
      "options": [
        "Retrait du plaisir ; sexe comme outil de manipulation",
        "Excès de plaisir sans limite",
        "Uniquement un problème hormonal",
        "Latéralité non corrigée"
      ],
      "bonne_reponse": 0,
      "explication": "Positif : rétablir le plaisir dans la vie sexuelle et la vie tout court.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q763",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Incidents « hystériques » (exaspération) — comportement positif :",
      "options": [
        "Adopter une attitude empathique envers soi-même",
        "Culpabiliser les autres systématiquement",
        "Réprimer toute émotion sans correction",
        "Augmenter le rythme de vie"
      ],
      "bonne_reponse": 0,
      "explication": "Mal de vivre : peur de perdre, manque de communication/transparence.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q764",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Identification avec la souffrance des autres » — comportement positif :",
      "options": [
        "Se concentrer sur le fait d'aller mieux soi-même",
        "Souffrir avec l'autre en permanence",
        "Ignorer sa propre douleur",
        "Éviter toute relation d'aide"
      ],
      "bonne_reponse": 0,
      "explication": "Mal de vivre : souffrir avec l'autre.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q765",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Développement d'une culpabilité » — mal de vivre typique :",
      "options": [
        "Culpabilité en excès : « il faut souffrir pour mériter »",
        "Absence totale de culpabilité",
        "Joie permanente",
        "Refus de toute responsabilité"
      ],
      "bonne_reponse": 0,
      "explication": "Positif : arrêter l'autopunition, (se) pardonner.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q766",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Négation de tout autre problème que la douleur » — comportement positif :",
      "options": [
        "Reconnaître la douleur, la gérer de façon supportable et poursuivre son chemin",
        "Faire de la douleur sa seule identité",
        "Refuser toute kinésiologie",
        "Nier toute émotion"
      ],
      "bonne_reponse": 0,
      "explication": "Mal de vivre : la douleur comme raison d'être — rien d'autre n'existe.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q767",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Cartes visuelles de motivation : combien de cartes propose-t-on généralement ?",
      "options": [
        "3 ou 4 cartes, testées dans l'ordre",
        "12 cartes obligatoires à chaque fois",
        "1 seule carte",
        "Uniquement en fin de séance RA"
      ],
      "bonne_reponse": 0,
      "explication": "Permission de travailler ; 3 ou 4 cartes ; à chaque changement d'indicateur → carte en circuit.",
      "source": "Protocoles des copines — Cartes visuelles de motivation",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q768",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Cartes motivation — correction d'une phrase négative :",
      "options": [
        "Faire le 8 + éminences frontales + finir en éloignant la carte en cercle",
        "Tapoter le temporal uniquement",
        "Cross crawl sans lecture",
        "Sédater le méridien du Cœur"
      ],
      "bonne_reponse": 0,
      "explication": "8 avec chaque carte + éminences ; phrase négative = cercle en s'éloignant ; positive = en rapprochant.",
      "source": "Protocoles des copines — Cartes visuelles de motivation",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q769",
      "theme": "protocoles_avances",
      "type": "association",
      "difficulte": 3,
      "enonce": "Cartes motivation — associez carte et pierre (copines).",
      "paires": [
        [
          "Carte 1 (cerveau gauche)",
          "Améthyste"
        ],
        [
          "Carte 2 (ligne médiane)",
          "Aigue-marine"
        ],
        [
          "Carte 4 (en paix)",
          "Lapis lazuli"
        ],
        [
          "Carte 8 (piégé)",
          "Quartz rose"
        ]
      ],
      "explication": "Carte 1 améthyste ; 2 aigue-marine ; 4 lapis lazuli ; 8 quartz rose (ressentiment → enthousiasme).",
      "source": "Protocoles des copines — Cartes visuelles de motivation",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q770",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Carte 3 des cartes motivation (copines) correspond à :",
      "options": [
        "Cerveau droit — dialogue intérieur, spontanéité de l'hémisphère droit",
        "Solution uniquement sans test",
        "Méridien du Rein",
        "Latéralité motrice"
      ],
      "bonne_reponse": 0,
      "explication": "Carte 3 = cerveau droit ; pierre émeraude (acceptation de soi, instant présent).",
      "source": "Protocoles des copines — Cartes visuelles de motivation",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q771",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Élixir Rose 2 « Mr Lincoln » (Pélérandra) sert surtout à :",
      "options": [
        "Réguler le rythme du LCR lors d'une expansion",
        "Tonifier le méridien du Foie",
        "Remplacer le baromètre du comportement",
        "Corriger la colonne électricité"
      ],
      "bonne_reponse": 0,
      "explication": "Mr Lincoln = pulsations LCR qui se synchronisent avec l'expansion.",
      "source": "Protocoles des copines — Élixirs Rose 2",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q772",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Élixir Rose 2 « Chicago Peace » harmonise surtout :",
      "options": [
        "Mouvements os crâniens, LCR et sacrum",
        "Uniquement la digestion",
        "La latéralité visuelle",
        "Le méridien du Poumon seul"
      ],
      "bonne_reponse": 0,
      "explication": "Chicago Peace = crâne + LCR + sacrum pour une expansion fluide.",
      "source": "Protocoles des copines — Élixirs Rose 2",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q773",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Élixir Rose 2 « Oregold » intervient surtout :",
      "options": [
        "En conclusion d'un cycle d'expansion (stabiliser crâne, SNC, LCR, sacrum)",
        "Uniquement en pré-test",
        "Pour la colonne électricité",
        "Comme fleur de Bach"
      ],
      "bonne_reponse": 0,
      "explication": "Oregold = retour à l'équilibre après cycle d'expansion.",
      "source": "Protocoles des copines — Élixirs Rose 2",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q774",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Si la colonne « électricité » est en jeu et la personne refuse un Soul Ray :",
      "options": [
        "Faire le protocole de la colonne électricité (ou MC + autre correction)",
        "Abandonner la séance",
        "Utiliser uniquement Rose 2",
        "Ignorer la colonne"
      ],
      "bonne_reponse": 0,
      "explication": "Soul Ray si oui → chercher l'élixir + gouttes ; si non → protocole colonne électricité ou mise en circuit.",
      "source": "Protocoles des copines — Soul Ray Essences",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q775",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Soul Ray Élixir 7 sert surtout à :",
      "options": [
        "Renforcer le lien corps–âme et le sentiment de « chez soi »",
        "Réguler uniquement le LCR",
        "Corriger la colonne structure",
        "Tonifier le quadriceps"
      ],
      "bonne_reponse": 0,
      "explication": "Élixir 7 = connexion corps-âme ; Élixir 4 = équilibre électrique par plan d'ouverture.",
      "source": "Protocoles des copines — Soul Ray Essences",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q776",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Réintégration cicatrice — avant correction, on identifie souvent :",
      "options": [
        "TL sur la cicatrice + émotion (BC) emprisonnée dans la cicatrice",
        "Uniquement l'âge du client",
        "Le méridien du Foie sans test",
        "La couleur des fleurs de Bach"
      ],
      "bonne_reponse": 0,
      "explication": "Test localisation TL cicatrice ; BC pour l'émotion retenue.",
      "source": "Protocoles des copines — Réintégration des cicatrices",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q777",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Cicatrice — technique « Effleurement » :",
      "options": [
        "Effleurer dans la direction qui teste faible, avec respiration qui renforce + émotion + éminences",
        "Masser fort en sens inverse du méridien du Cœur",
        "Cross crawl 20 minutes",
        "Tapotement du 1er point de tonification"
      ],
      "bonne_reponse": 0,
      "explication": "TL cicatrice → MI change ; effleurer direction faible ; coordonner respiration ; éminences + émotion.",
      "source": "Protocoles des copines — Réintégration des cicatrices",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q778",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Cicatrice — « Huile et étirement » convient surtout aux cicatrices :",
      "options": [
        "Anciennes et bien guéries",
        "Rouges et inflammatoires du jour",
        "Internes uniquement sans transfert",
        "Invisibles sans figures en 8"
      ],
      "bonne_reponse": 0,
      "explication": "Huile + étirement pour ouvrir ; figures en 8 surtout cicatrices invisibles/internes.",
      "source": "Protocoles des copines — Réintégration des cicatrices",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q779",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 3,
      "enonce": "Cicatrice — figures en 8 : après avoir trouvé point, profondeur et direction, on :",
      "options": [
        "Trace un ∞ au point, éminences + émotion, puis vérifie TL / autres profondeurs ou points",
        "Sédater le méridien du Cœur uniquement",
        "Faire uniquement du cross crawl",
        "Ne jamais re-tester"
      ],
      "bonne_reponse": 0,
      "explication": "Profondeur 0 os → 10 peau ; ∞ direction trouvée ; re-test autres profondeurs/points si besoin.",
      "source": "Protocoles des copines — Réintégration des cicatrices",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q780",
      "theme": "protocoles_avances",
      "type": "vrai_faux",
      "difficulte": 2,
      "enonce": "La réintégration des cicatrices vise surtout à rétablir le flux énergétique et la mémoire émotionnelle, pas à faire disparaître le tissu cicatriciel.",
      "bonne_reponse": true,
      "explication": "Vrai : flux énergétique + libération émotionnelle ; pas réduction du tissu cicatriciel lui-même.",
      "source": "Protocoles des copines — Réintégration des cicatrices",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q781",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Déblocage de fascia : le fascia est :",
      "options": [
        "Un tissu conjonctif fibreux entourant/séparant les muscles",
        "Un méridien d'acupuncture",
        "Un os du crâne",
        "Une fleur de Bach"
      ],
      "bonne_reponse": 0,
      "explication": "Fascia = conjonctif élastique ; tension prolongée → étirement permanent perturbant le muscle.",
      "source": "Protocoles des copines — Déblocage de fascia",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q782",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Déblocage fascia — séquence correcte :",
      "options": [
        "Tester en contraction → étirer à pleine extension → si Tf tirer fascia (sens fibres + perpendiculaire) → re-tester TF",
        "Tonifier d'abord le Rein sans test",
        "Cross crawl puis arrêt",
        "Uniquement massage NLY du visage"
      ],
      "bonne_reponse": 0,
      "explication": "1) contraction TF/Tf ; 2) extension pleine ; 3) fascia bloqué → tirer sens fibres + perpendiculaire ; 4) muscle TF.",
      "source": "Protocoles des copines — Déblocage de fascia",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q783",
      "theme": "protocoles_avances",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "Rose 2 (Pélérandra) — si la personne accepte et colonne « structure » en jeu :",
      "options": [
        "Chercher l'élixir adapté et le nombre de gouttes",
        "Utiliser Soul Ray obligatoirement",
        "Ignorer la colonne structure",
        "Faire uniquement RA sans test"
      ],
      "bonne_reponse": 0,
      "explication": "Permission ; si oui → élixir + gouttes ; si non → protocole structure ou MC + autre correction.",
      "source": "Protocoles des copines — Élixirs Rose 2",
      "banque_version": "2.0.0",
      "verifie": false
    },
    {
      "id": "q784",
      "theme": "protocoles_a1",
      "type": "qcm",
      "difficulte": 2,
      "enonce": "« Attente d'échec et perspective pessimiste » — comportement positif :",
      "options": [
        "Être disposé à risquer de réussir, de se faire plaisir",
        "Rester fataliste",
        "Refuser tout changement",
        "Multiplier les béquilles"
      ],
      "bonne_reponse": 0,
      "explication": "Mal de vivre : anticipation de l'échec, fatalisme.",
      "source": "Protocoles des copines — Comportements face à la douleur",
      "banque_version": "2.0.0",
      "verifie": false
    }
  ]
};
