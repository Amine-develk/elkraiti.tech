/**
 * Remove left padding on multiline-text
 */
export const paddedText = ([text]: TemplateStringsArray) =>
  text
    .replace(/^\n/, "")
    .replace(/\n\s+$/, "")
    .replace(/^\s+\|/gm, "");

export const cv = {
  firstName: "Amine",
  lastName: "El kraiti",
  job: "Software Engineer",
  birth: {
    year: 2004,
    month: 9,
    day: 20,
    city: "Fez",
    country: "Morocco",
  },
  address: {
    number: 89,
    street: "rue Andy Warhol",
    postalCode: "34000",
    city: "Fez",
    country: "Morocco",
  },
  website: "www.elkraiti.tech",
  mail: {
    user: "elkraitia",
    domain: "gmail.com",
  },
  phone: "0657597458",

  languages: ["TypeScript", "JavaScript", "Python", "Swift"],
  frameworks: ["React", "GraphQL", "React Router", "NodeJS"],
  tools: ["VS Code", "Observable", "Figma", "Keynote"],
  hobbies: ["Guitar", "Running", "Graphic Design"],

  social: [
    {
      platform: "GitHub",
      link: "github.com/amine-develk",
    },
    {
      platform: "StackOverflow",
      link: "stackoverflow.com/users/28547242/amine-elkraiti",
    },
    {
      platform: "Twitter",
      link: "twitter.com/KubeKhrm",
    },
  ],

  cursus: [
    {
      date: { from: { year: 2024 }, to: { year: 2026 } },
      title: "1337 Coding School",
      place: "Tetouan",
      subtitle: "Software Engineering",
      url: "https://www.1337.ma",
    },
    {
      date: { from: { year: 2022 }, to: { year: 2024 } },
      title: "IFMOTICA",
      place: "Fez",
      subtitle: "Full-Stack Web Development",
      url: "https://www.ofppt.ma/",
    },
    {
      date: { from: { year: 2019 }, to: { year: 2022 } },
      title: "Lycée Prince Moulay El Hassan",
      place: "Fez",
      subtitle: "Life and Earth Sciences Baccalauréat",
      url: "https://www.google.fr/maps/place/Lycee+Moulay+El+Hassan/@34.022692,-5.0052823,5039m/data=!3m1!1e3!4m15!1m7!3m6!1s0xd9f8b64aa0db395:0x9fa306d280b7b8f6!2sLycee+Moulay+El+Hassan!8m2!3d34.0194519!4d-4.9818827!16s%2Fg%2F11b6xr8zlw!3m6!1s0xd9f8b64aa0db395:0x9fa306d280b7b8f6!8m2!3d34.0194519!4d-4.9818827!15sCiFseWNlZSBwcmluY2UgbW91bGF5IGVsIGhhc3NhbiBmZXOSAQtoaWdoX3NjaG9vbOABAA!16s%2Fg%2F11b6xr8zlw?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ],

  work: [
    {
      date: { from: { month: 2, year: 2025 } },
      title: "New Dev Maroc",
      subtitle: "Web Development Intern",
      url: "https://www.newdevmaroc.com",
      description: [
        "Started while in New York during a period I couldn't work there.",
        "Generalisation of the Virtual Mode project I led at TheFork, simplified to smartly mock any GraphQL project by just reading its GraphQL Schema.",
        "Work in progress, and will be re-thought for AI integration.",
      ],
      stack: [
        "TypeScript",
        "GraphQL",
        "NodeJS",
        "Monaco Editor",
        "React",
        "Tailwind",
      ],
    },
  ],
};

