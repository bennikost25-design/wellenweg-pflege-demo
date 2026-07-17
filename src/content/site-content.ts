export const siteConfig = {
  name: "Wellenweg Pflege",
  legalName: "Wellenweg Pflege (Demo)",
  tagline: "Ambulanter Pflegedienst",
  claim: "Unterstützung, die zu Ihrem Alltag passt.",
  city: "Erfurt",
  baseUrl: "https://wellenweg-pflege-demo.vercel.app",
  demoNotice:
    "Fiktive Demo-Website – Unternehmen und Kontaktdaten dienen ausschließlich der Darstellung.",
  legalPlaceholder:
    "Diese Seite ist ein Platzhalter für eine fiktive Demo und stellt keine rechtssichere Vorlage dar.",
} as const;

export const contact = {
  phoneDisplay: "0361 000 42 80",
  phoneHref: "tel:+493610004280",
  email: "hallo@wellenweg-pflege.de",
  emailHref: "mailto:hallo@wellenweg-pflege.de",
  address: {
    street: "Musterufer 12",
    zip: "99084",
    city: "Erfurt",
    full: "Musterufer 12, 99084 Erfurt",
  },
  hours: {
    label: "Montag bis Freitag",
    time: "08:00 bis 17:00 Uhr",
    short: "Mo–Fr 08:00–17:00 Uhr",
  },
} as const;

export const serviceAreas = [
  "Erfurt-Mitte",
  "Andreasvorstadt",
  "Johannesvorstadt",
  "Ilversgehofen",
  "Erfurt-Nord",
] as const;

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerNav = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

export const homeHero = {
  eyebrow: "Ambulante Pflege in Erfurt",
  title: "Unterstützung, die zu Ihrem Alltag passt.",
  intro:
    "Wellenweg Pflege begleitet Menschen dort, wo sie sich am wohlsten fühlen: im eigenen Zuhause. Verständlich, persönlich und abgestimmt auf die jeweilige Lebenssituation.",
  primaryCta: { href: contact.phoneHref, label: "Jetzt anrufen" },
  secondaryCta: { href: "/leistungen", label: "Leistungen ansehen" },
  entries: [
    {
      id: "fuer-mich",
      title: "Ich suche Unterstützung für mich",
      text: "Wenn der Alltag schwerer fällt und Sie zu Hause gut begleitet werden möchten.",
      href: "/#situationen",
      accent: "brand" as const,
    },
    {
      id: "angehoerige",
      title: "Ich kümmere mich um einen Angehörigen",
      text: "Wenn Sie Entlastung suchen und gemeinsam eine passende Versorgung planen möchten.",
      href: "/#situationen",
      accent: "accent" as const,
    },
    {
      id: "orientierung",
      title: "Ich brauche kurzfristig Orientierung",
      text: "Wenn Sie erst einmal wissen möchten, welche Unterstützung überhaupt möglich ist.",
      href: "/kontakt",
      accent: "highlight" as const,
    },
  ],
  chips: [
    "Montag bis Freitag erreichbar",
    "Versorgung in Erfurt",
    "Persönliche Erstberatung",
  ],
} as const;

export const principles = [
  {
    title: "Verständlich beraten",
    text: "Wir erklären Möglichkeiten in klarer Sprache – ohne Fachjargon und ohne Druck.",
  },
  {
    title: "Gemeinsam planen",
    text: "Ihre Situation und Ihre Wünsche stehen im Mittelpunkt. Daraus entsteht ein passender Plan.",
  },
  {
    title: "Zuverlässig begleiten",
    text: "Feste Ansprechpersonen und verlässliche Abläufe geben Sicherheit im Alltag.",
  },
] as const;

export const lifeSituations = [
  {
    id: "alltag",
    title: "Der Alltag wird zunehmend anstrengend",
    support: [
      "Hilfe bei der Körperpflege",
      "Unterstützung beim An- und Auskleiden",
      "Hilfe bei Mahlzeiten und im Haushalt",
    ],
  },
  {
    id: "krankenhaus",
    title: "Nach einem Krankenhausaufenthalt",
    support: [
      "Ärztlich verordnete Versorgung",
      "Medikamentengabe",
      "Wundversorgung",
      "Unterstützung beim Wiedereinstieg zu Hause",
    ],
  },
  {
    id: "entlastung",
    title: "Angehörige brauchen Entlastung",
    support: [
      "Stundenweise Betreuung",
      "Verhinderungspflege",
      "Beratung und gemeinsame Planung",
    ],
  },
] as const;

export const dayPath = {
  intro:
    "So könnte ein Tag mit ambulanter Unterstützung aussehen. Tatsächliche Einsätze werden individuell geplant.",
  stations: [
    {
      time: "07:30 Uhr",
      title: "Gut in den Tag starten",
      text: "Unterstützung bei Körperpflege, Ankleiden und Frühstück.",
    },
    {
      time: "12:00 Uhr",
      title: "Sicher durch den Mittag",
      text: "Medikamente, Mahlzeit und ein kurzer Blick auf das Wohlbefinden.",
    },
    {
      time: "17:30 Uhr",
      title: "Den Abend gut vorbereiten",
      text: "Abendliche Versorgung und alles Wichtige für eine ruhige Nacht.",
    },
  ],
} as const;

export const startSteps = [
  {
    step: "01",
    title: "Situation schildern",
    text: "Im Gespräch klären wir, worum es geht und was gerade am wichtigsten ist.",
  },
  {
    step: "02",
    title: "Persönlich kennenlernen",
    text: "Wir nehmen uns Zeit für Sie und Ihre Angehörigen – unverbindlich und in Ruhe.",
  },
  {
    step: "03",
    title: "Versorgung gemeinsam planen",
    text: "Aus Ihren Bedürfnissen entsteht ein verständlicher, alltagstauglicher Plan.",
  },
  {
    step: "04",
    title: "Unterstützung starten",
    text: "Mit klaren Absprachen und verlässlichen Ansprechpersonen beginnt die Begleitung.",
  },
] as const;

export const serviceAreaNote =
  "Sie wohnen knapp außerhalb? Rufen Sie uns trotzdem an. Gemeinsam prüfen wir, was möglich ist.";

export const homeContactClose = {
  title: "Lassen Sie uns gemeinsam herausfinden, was Sie gerade brauchen.",
  text: "Ein Anruf reicht oft aus, um die ersten Fragen zu klären. Wir sind persönlich erreichbar und nehmen uns Zeit.",
} as const;

export const servicesPage = {
  title: "Leistungen für Ihren Alltag",
  intro:
    "Unsere Unterstützung richtet sich nach dem, was im Alltag gerade fehlt – nicht nach komplizierten Fachbegriffen.",
  needGroups: [
    {
      id: "koerper",
      title: "Wenn Körperpflege und Bewegung schwerfallen",
      description:
        "Hilfe bei der täglichen Pflege, beim Ankleiden und dabei, mobil und sicher zu bleiben.",
      serviceIds: ["koerperpflege", "ankleiden", "mobilisation"],
    },
    {
      id: "medizin",
      title: "Wenn ärztlich verordnete Versorgung nötig ist",
      description:
        "Unterstützung bei Medikamenten und Wundversorgung – abgestimmt auf die Verordnung.",
      serviceIds: ["medikamente", "wundversorgung"],
    },
    {
      id: "alltag",
      title: "Wenn Haushalt und Alltag Entlastung brauchen",
      description:
        "Praktische Hilfe zu Hause und Begleitung, damit der Tag strukturiert und erreichbar bleibt.",
      serviceIds: ["haushalt", "betreuung"],
    },
    {
      id: "pause",
      title: "Wenn Angehörige eine Pause brauchen",
      description:
        "Stundenweise Entlastung und Verhinderungspflege, damit Sie Luft zum Durchatmen bekommen.",
      serviceIds: ["verhinderung"],
    },
  ],
  funding: {
    title: "Was übernimmt die Pflege- oder Krankenkasse?",
    text: "Welche Leistungen übernommen werden, hängt unter anderem von Pflegegrad, ärztlicher Verordnung und persönlicher Situation ab. Wellenweg Pflege unterstützt bei der ersten Orientierung. Eine verbindliche Prüfung erfolgt gemeinsam mit den zuständigen Stellen.",
  },
} as const;

export const services = [
  {
    id: "koerperpflege",
    title: "Unterstützung bei der Körperpflege",
    text: "Hilfe beim Waschen, Duschen und bei der täglichen Hygiene – behutsam und in Ihrem Tempo.",
  },
  {
    id: "ankleiden",
    title: "Hilfe beim An- und Auskleiden",
    text: "Unterstützung beim Anziehen, Ausziehen und bei der Auswahl passender Kleidung.",
  },
  {
    id: "mobilisation",
    title: "Mobilisation und Bewegung",
    text: "Begleitung beim Aufstehen, Gehen und bei Bewegungsübungen für mehr Sicherheit im Alltag.",
  },
  {
    id: "medikamente",
    title: "Medikamentengabe",
    text: "Erinnerung und Gabe von Medikamenten nach ärztlicher Verordnung – klar und zuverlässig.",
  },
  {
    id: "wundversorgung",
    title: "Wundversorgung",
    text: "Fachgerechte Versorgung von Wunden im Rahmen der verordneten Behandlungspflege.",
  },
  {
    id: "haushalt",
    title: "Unterstützung im Haushalt",
    text: "Hilfe bei alltäglichen Aufgaben wie Einkaufen, Aufräumen oder Zubereiten von Mahlzeiten.",
  },
  {
    id: "betreuung",
    title: "Betreuung und Alltagsbegleitung",
    text: "Gesellschaft, Gespräche und Begleitung zu Terminen oder Spaziergängen.",
  },
  {
    id: "verhinderung",
    title: "Verhinderungspflege",
    text: "Entlastung für pflegende Angehörige, wenn eine Pause oder Vertretung nötig ist.",
  },
] as const;

export const contactPage = {
  title: "Kontakt aufnehmen",
  intro:
    "Kein Formular nötig. Rufen Sie uns an, schreiben Sie eine E-Mail oder vereinbaren Sie einen Termin – so, wie es für Sie am einfachsten ist.",
  pathways: [
    {
      id: "anrufen",
      title: "Anrufen",
      text: "Am schnellsten klären wir Ihre Fragen persönlich am Telefon.",
      actionLabel: "Jetzt anrufen",
      href: contact.phoneHref,
    },
    {
      id: "email",
      title: "E-Mail schreiben",
      text: "Schildern Sie kurz Ihr Anliegen – wir melden uns werktags zurück.",
      actionLabel: "E-Mail öffnen",
      href: contact.emailHref,
    },
    {
      id: "vorort",
      title: "Termin abstimmen",
      text: "Gerne lernen wir uns persönlich kennen. Einen Termin stimmen wir telefonisch ab.",
      actionLabel: "Telefonisch Termin klären",
      href: contact.phoneHref,
    },
  ],
  firstCall: {
    title: "Was ist beim ersten Gespräch hilfreich?",
    note: "Sie müssen beim ersten Anruf noch nicht alle Antworten kennen.",
    prompts: [
      "Für wen wird Unterstützung gesucht?",
      "In welchem Stadtteil wohnt die Person?",
      "Wobei wird im Alltag Unterstützung benötigt?",
      "Gibt es bereits einen Pflegegrad oder eine ärztliche Verordnung?",
      "Wann ist ein Rückruf gut möglich?",
    ],
  },
  process: {
    title: "So läuft der Erstkontakt ab",
    steps: [
      "Sie schildern Ihre Situation in eigenen Worten.",
      "Wir hören zu und stellen gezielte Rückfragen.",
      "Gemeinsam klären wir die nächsten sinnvollen Schritte.",
      "Bei Bedarf vereinbaren wir ein persönliches Kennenlernen.",
    ],
  },
} as const;

export const metadataContent = {
  home: {
    title: "Wellenweg Pflege | Ambulante Pflege in Erfurt",
    description:
      "Demo-Website für Wellenweg Pflege: ambulante Unterstützung zu Hause in Erfurt – verständlich, persönlich und alltagsnah.",
  },
  leistungen: {
    title: "Leistungen | Wellenweg Pflege",
    description:
      "Körperpflege, Medikamente, Haushalt, Betreuung und Verhinderungspflege – Leistungen nach Alltagssituation erklärt.",
  },
  kontakt: {
    title: "Kontakt | Wellenweg Pflege",
    description:
      "Telefon, E-Mail und Anschrift von Wellenweg Pflege in Erfurt. Persönlich erreichbar – ohne Kontaktformular.",
  },
  impressum: {
    title: "Impressum | Wellenweg Pflege (Demo)",
    description:
      "Impressum der fiktiven Demo-Website Wellenweg Pflege. Keine rechtssichere Vorlage.",
  },
  datenschutz: {
    title: "Datenschutz | Wellenweg Pflege (Demo)",
    description:
      "Datenschutzhinweise der fiktiven Demo-Website Wellenweg Pflege. Keine Trackingdienste, kein Kontaktformular.",
  },
  notFound: {
    title: "Seite nicht gefunden | Wellenweg Pflege",
    description: "Diese Seite existiert nicht. Zurück zur Startseite von Wellenweg Pflege.",
  },
} as const;
