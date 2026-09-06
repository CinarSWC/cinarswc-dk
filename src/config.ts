
const web3formsAccessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

// Fail the production build loudly rather than shipping a contact form that
// posts to Web3Forms without a key and silently drops every message.
if (import.meta.env.PROD && !web3formsAccessKey) {
  throw new Error(
    "PUBLIC_WEB3FORMS_ACCESS_KEY is not set, so the contact form would not " +
      "work. Set it as a repository secret and make sure the build step in " +
      ".github/workflows/deploy.yml passes it through.",
  );
}

export const site = {
  name: "Cinar Software Consulting",
  shortName: "Cinar SWC",
  domain: "cinarswc.dk",
  url: "https://cinarswc.dk",
  email: "info@cinarswc.dk",
  phone: "42559676",
  phoneHref: "tel:+4542559676",
  cvr: "40755098",
  address: {
    line1: "Toftebuen 90",
    line2: "4000 Roskilde",
  },
  web3formsAccessKey,
  description:
    "Cinar Software Consulting yder specialiseret softwarerådgivning inden for applikationsdesign, web- og mobiludvikling, authentication & authorization, DevOps & infrastruktur samt agentisk workflows og generativ AI.",
  locale: "da_DK",
  language: "da",
} as const;

export const founder = {
  name: "Muhammed Alper Cinar",
  title: "CEO & Stifter, Cinar Software Consulting",
  photo: "/portrait-alper.jpeg",
  bio: "Muhammed Alper er stifter og CEO for Cinar Software Consulting. Med mere end 10 års erfaring som professionel softwarekonsulent har han rådgivet nogle af Danmarks største virksomheder om softwarearkitektur, udvikling og operations. Han har en kandidatgrad i datalogi fra Danmarks Tekniske Universitet (DTU) og bidrager aktivt til open source-projekter.",
  credentials: [
    "Cand.scient. i datalogi, DTU",
    "10+ års erfaring som professionel softwarekonsulent",
    "Ledelse af nearshore-teams i Polen, Rumænien og Tyrkiet",
  ],
} as const;

export const nav = [
  { href: "#ydelser", label: "Ydelser" },
  { href: "#proces", label: "Proces" },
  { href: "#om", label: "Om os" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export type Service = {
  slug: string;
  icon: "layout" | "devices" | "shield" | "server" | "workflow" | "sparkles";
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "applikationsdesign",
    icon: "layout",
    title: "Applikationsdesign og softwarearkitektur",
    summary:
      "Solid arkitektur fra dag ét — eller ryddet op i den, der allerede findes. Vi hjælper med at træffe de rigtige tekniske beslutninger, før de bliver dyre at ændre.",
    bullets: [
      "Forretningsanalyse og teknisk due diligence af eksisterende systemer",
      "Domænemodellering og systemafgrænsning",
      "Valg af arkitektur og teknologistak",
    ],
  },
  {
    slug: "web-mobil",
    icon: "devices",
    title: "Web- og mobiludvikling",
    summary:
      "Moderne, driftssikre applikationer fra prototype til produktion — bygget til at være hurtige, tilgængelige og til at vedligeholde af jeres eget team.",
    bullets: [
      "Webapplikationer og API'er i produktionsklar kvalitet",
      "Native og cross-platform mobilapps",
      "Performance, tilgængelighed og vedligeholdbarhed som fast prioritet",
    ],
  },
  {
    slug: "auth",
    icon: "shield",
    title: "Adgangsstyring, autorisation, compliance og datasikkerhed",
    summary:
      "Adgangsstyring er ofte den sværeste del at få rigtigt — og den dyreste at rette senere. Vi designer løsninger, der er sikre uden at gå på kompromis med brugeroplevelsen.",
    bullets: [
      "MitID, AltID, WebSSO, OIOSaml",
      "Microsoft AD, LDAP, OAuth 2.0, OpenID Connect og Saml",
      "Rolle- og attributbaseret adgangskontrol",
      "Sessionshåndtering og sikkert token-design"
    ],
  },
  {
    slug: "devops-infrastruktur",
    icon: "server",
    title: "DevOps og infrastruktur",
    summary:
      "Kode skaber først værdi, når den er i drift. Vi bygger pipelines og infrastruktur, der gør et deployment til rutine frem for en begivenhed — og som jeres eget team kan drive videre.",
    bullets: [
      "CI/CD-pipelines med automatiseret test og deployment",
      "Infrastructure as code, containere og cloud-opsætning",
      "Overvågning, logging og alarmering i produktion",
    ],
  },
  {
    slug: "agentiske-ai-workflows",
    icon: "workflow",
    title: "Agentiske AI-workflows",
    summary:
      "AI-agenter, der udfører reelt arbejde i jeres forretning — ikke blot en chatbot, men systemer med værktøjer, grænser og tilsyn, designet til at levere pålideligt.",
    bullets: [
      "Værktøjsintegration og orkestrering af flertrinsopgaver",
      "Evaluering, guardrails og fejlhåndtering",
      "Menneskeligt tilsyn indbygget dér, hvor det betyder noget",
    ],
  },
  {
    slug: "generativ-ai",
    icon: "sparkles",
    title: "Generativ AI og embeddings i forretningen",
    summary:
      "Generativ AI forankret i jeres egne data og processer — fra semantisk søgning til talegenkendelse — så teknologien løser konkrete forretningsproblemer.",
    bullets: [
      "Embeddings, semantisk søgning og RAG på egne data",
      "Talegenkendelse (ASR) til transskription og stemmestyring",
      "Integration af sprogmodeller i eksisterende forretningssystemer",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Afklaring",
    description:
      "Vi starter med at forstå forretningen, det tekniske landskab og målet med opgaven — før der skrives en eneste linje kode.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Arkitektur og løsning lægges på papir og udfordres, så de svære beslutninger tages tidligt og billigt.",
  },
  {
    step: "03",
    title: "Implementering",
    description:
      "Løsningen bygges i iterationer med løbende feedback, så retningen kan justeres undervejs.",
  },
  {
    step: "04",
    title: "Overdragelse",
    description:
      "Dokumentation, vidensoverdragelse og et team, der er klædt på til selv at drive og videreudvikle løsningen.",
  },
] as const;
