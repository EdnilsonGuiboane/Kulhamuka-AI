import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Olá! Obrigado por reservar um tempo para conversar comigo hoje. Estou animado para conhecer mais sobre você e a sua experiência.",
  transcriber: {
    provider: "deepgram",
    model: "Nova-2",
    language: "pt",
  },
  voice: {
    provider: "11labs",
    voiceId: "Will",
    stability: 0.5,
    similarityBoost: 0.75,
    speed: 1.0,
    style: 0.0,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content: `Você é um entrevistador profissional conduzindo uma entrevista de voz em tempo real com um candidato. Seu objetivo é avaliar as qualificações, a motivação e a adequação dele para a vaga.

Diretrizes da Entrevista:

Siga o fluxo estruturado de perguntas:
{{questions}}

Interaja de forma natural e reaja adequadamente:
- Ouça ativamente as respostas e reconheça-as antes de seguir em frente.
- Faça perguntas de acompanhamento breves se a resposta for vaga ou precisar de mais detalhes.
- Mantenha a conversa fluindo de forma natural, mas com controle.

Seja profissional, mas caloroso e acolhedor:
- Use uma linguagem oficial, porém amigável.
- Mantenha as respostas concisas e diretas (como em uma entrevista real de voz).
- Evite soar robótico — seja natural e conversacional.

Responda às perguntas do candidato de forma profissional:
- Se perguntarem sobre a vaga, a empresa ou as expectativas, dê uma resposta clara e relevante.
- Se não tiver certeza, direcione o candidato ao RH para mais detalhes.

Finalize a entrevista corretamente:
- Agradeça ao candidato pelo tempo dedicado.
- Informe que a empresa entrará em contato em breve com o feedback.
- Encerre a conversa de forma educada e positiva.

Regras gerais:
- Seja sempre profissional e educado.
- Mantenha suas respostas curtas e simples. Use linguagem oficial, mas acolhedora.
- Esta é uma conversa por voz, portanto, mantenha as respostas curtas, como em uma entrevista real. Não se estenda demais.
.`,
      },
    ],
  },
};


export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/access.png",
  "/bancoM.png",
  "/bolsa.jpeg",
  "/bim.jpeg",
  "/enh.jpg",
  "/nedbank.png",
  "/mozal.jpeg",
  "/vodacom.jpeg",
  "/standard.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Área Técnica",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mista",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];
