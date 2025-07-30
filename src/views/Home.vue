<template>
  <div
    class="flex flex-col md:flex-row items-start justify-between text-fontCol"
  >
    <div class="md:fixed md:w-1/2 md:!h-screen bg-main ps-[100px] pt-[100px]">
      <div class="flex flex-col">
        <div>
          <span>Hi, I am</span>
          <h2 class="text-4xl font-bold my-5 font-sans">Yusuf Ismail</h2>
          <span>
            Frontend engineer, who fall in love with
            <a
              class="text-lg hover:underline pb-2"
              href="https://vuejs.org"
              target="_blank"
              >Vue.js</a
            >
          </span>
        </div>
        <div class="text-xl my-28">
          <div class="flex items-center w-auto link cursor-pointer">
            <span class="deco w-[40px] h-[2px] bg-fontCol me-5" />
            <a href="#about" class="text inline-block text-base md:text-lg"
              >About</a
            >
          </div>
          <div class="flex items-center w-auto link cursor-pointer">
            <span class="deco w-[40px] h-[2px] bg-fontCol me-5" />
            <a
              href="#technologies"
              class="text inline-block text-base md:text-lg"
              >Technologies</a
            >
          </div>
          <div class="flex items-center w-auto link cursor-pointer">
            <span class="deco w-[40px] h-[2px] bg-fontCol me-5" />
            <a href="#experience" class="text inline-block text-base md:text-lg"
              >Experience</a
            >
          </div>
          <div class="flex items-center w-auto link cursor-pointer">
            <span class="deco w-[40px] h-[2px] bg-fontCol me-5" />
            <a href="#projects" class="text inline-block text-base md:text-lg"
              >Projects</a
            >
          </div>
        </div>

        <div class="flex items-center justify-between w-1/2">
          <a
            class="text-2xl"
            href="mailto:doniyor17ibragimov@gmail.com"
            target="_blank"
          >
            <i class="fa-solid hover:text-white fa-envelope"></i>
          </a>
          <a
            class="text-2xl"
            href="https://www.linkedin.com/in/yusuf-doniyor-ismail-2b87aa22a/"
            target="_blank"
          >
            <i class="fa-brands hover:text-white fa-linkedin"></i>
          </a>
          <a
            class="text-2xl"
            href="https://www.github.com/doniyor17"
            target="_blank"
          >
            <i class="fa-brands hover:text-white fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 bg-main md:ms-auto px-5">
      <div id="about" class="pt-10">
        <p class="mb-5">
          I began my coding journey in 2019, right after completing my master’s
          degree in South Korea. Today, I build software, teach students, and
          manage a small team in the development field.
        </p>
        <p class="mb-5">
          My current focus is on building impactful products and collaborating
          with experienced teams to gain insights into development and business
          processes. My goal is to gather as much experience and knowledge as
          possible so I can eventually build my own team or business. I’m
          passionate about learning new
          <i class="text-blue-400">"things"</i> and understanding
          <i class="text-blue-400">how</i> they work at a deeper level. I also
          enjoy sharing my knowledge with beginners, teaching topics like
          development, frontend basics, HTML, CSS, and JavaScript as part of my
          part-time job.
        </p>
        <p>
          When I’m not working, I spend my free time playing sports, reading
          books and articles, listening to lectures, or relaxing with family and
          friends.
        </p>
      </div>

      <div id="technologies" class="mt-[60px]">
        <h3 class="my-4 text-2xl">Technologies</h3>
        <div class="flex flex-wrap items-center">
          <span
            v-for="tech of techs"
            :key="tech"
            class="bg-slate-700 me-2 mb-2 p-2 rounded-xl"
          >
            {{ tech }}
          </span>
        </div>
        <h4 class="my-4 text-xl">Not professional skills</h4>
        <div class="flex flex-wrap items-center">
          <span
            v-for="skill of skills"
            :key="skill"
            class="bg-slate-700 me-2 mb-2 p-2 rounded-xl"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div id="experience" class="mt-[60px]">
        <h3 class="my-4 text-2xl">Experience</h3>
        <div v-for="job in jobs" :key="job.duty">
          <experienceCard :job="job" />
        </div>
      </div>

      <div id="projects" class="mt-[60px]">
        <h3 class="my-4 text-2xl">Projects</h3>
        <div v-for="project in projects" :key="project.title">
          <projectCard :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import experienceCard from "../components/card/experience.vue";
import projectCard from "../components/card/project.vue";

import { IJob, IProject } from "../models/interface";

const techs = ref<string[]>([
  "HTML5",
  "CSS3",
  "JavaScript",
  "VueJS",
  "Vuex",
  "Vite",
  "Pinia",
  "TailwindCss",
  "Bootstrap",
  "TypeScript",
  "Git/GitHub",
  "Agile/Scrum",
  "NodeJS",
  "BunJS",
  "Telegram Bot",
  "grammY",
  "ExpressJS",
  "Hono",
  "EImzo",
  "MongoDB",
  "PostgreSQL",
  "Firebase / Firestore",
  "Socket.io",
  "Netlify",
  "ApexCharts",
]);

const skills = ref<string[]>([
  "ReactJS",
  "React Native",
  "React-router",
  "Context API",
  "NuxtJS",
  "Docker",
  "Dart",
  "Flutter",
  "Python",
  "Linux",
  "Ubuntu",
  "Kali Linux",
]);

const jobs = ref<IJob[]>([
  {
    company: "Jacob&Jo LLC",
    companyLink: "#",
    duty: "Frontent developer",
    years: "2024 Nov - Present",
    description: `I'm working on projects for Jacob&Jo LLC. My role is to create new UI and optimizing excisting pages. I also made web pages responsive. Most of my projects are web 3 and Decentralized apps.`,
    techs: [
      "VueJS",
      "Pinia",
      "Git/GitHub",
      "TailwindCss",
      "Agile/Scrum",
      "Python",
      "Docker",
      "Linux",
      "Ubuntu",
    ],
  },
  {
    company: "TechCells LLC",
    companyLink: "https://techcells.com/",
    duty: "Frontent VueJS developer",
    years: "2024 March - 2024 Aug",
    description: `I've took part building US based start-up logistics web application. My role was to create new UI and optimizing excisting pages. I also made web pages responsive.`,
    techs: [
      "VueJS",
      "Vuex",
      "Webpack",
      "Git/GitHub",
      "TailwindCss",
      "Bootstrap",
      "Agile/Scrum",
      "PHP",
      "Docker",
      "Laravel",
    ],
  },
  {
    company: "Raqamli Biznes",
    companyLink: "https://digitalbiznes.uz/",
    duty: "Frontent developer",
    years: "2022 Now - 2024 Jan",
    description: `We newly built a business platform for banks and enterpreneurs. Platform includes, admin dashboard with complex management, completely new own auth system with E-Imzo, Styx technologies integration on client side.`,
    techs: [
      "VueJS",
      "Pinia",
      "Vuex",
      "Vite",
      "Git/GitHub",
      "TailwindCss",
      "Bootstrap",
      "TypeScript",
      "Cypess",
      "Agile/Scrum",
      "PHP",
      "C#",
      "Docker",
      "Symphony",
      ".NET",
      "EImzo",
    ],
  },
  {
    company: "Najot Ta'lim",
    companyLink: "http://najottalim.uz/",
    duty: "Frontent developer",
    years: "2021 Now - 2022 Oct",
    description:
      "Shared knowledge to beginners about development, frontend, HTML, CSS and JavaScript Vue and its eco-system",
    techs: [
      "VueJS",
      "TypeScript",
      "JavaScript",
      "Pinia",
      "Vuex",
      "Vite",
      "TailwindCss",
      "HTML",
      "CSS",
    ],
  },
  {
    company: "Authentic Learning Labs",
    companyLink: "https://authenticlabs.io",
    duty: "Frontent developer (internship)",
    years: "2021 jul - 2021 sep",
    description:
      "Maintained current running projects, Created new pages and logics for Songbird Learning Analytics project",
    techs: [
      "VueJS",
      "JavaScript",
      "Vuex",
      "Bootstrap",
      "Slack",
      "GitLab",
      "HTML",
      "CSS",
    ],
  },
  {
    company: "Real Soft",
    companyLink: "https://realsoft.uz/",
    duty: "Fullstack developer (internship)",
    years: "2021 feb - 2021 apr",
    description:
      "Maintained current project, Wrote SQL queries for API, Created new pages",
    techs: ["VueJS", "JavaScript", "Vuex", "TailwindCss", "HTML", "CSS"],
  },
]);

const projects = ref<IProject[]>([
  {
    title: "Trade Notes",
    titleLink: "https://trade-notes.xyz/",
    description: `I started trading journal app start-up. In version one, I published free trading journal website which can watch trades, calculate Profit/Loss, do reports in excel file, save screenshots and notes of each trade. Now I am building paid version which can connect via API key to exchanges (Binance, Bitget) and auto sync trades and list trades, active trades calculate PnL more features also works in telegram bot`,
    techs: [
      "VueJS",
      "Pinia",
      "Git/GitHub",
      "TailwindCss",
      "Vuetify",
      "Agile/Scrum",
      "Bun",
      "Hono",
    ],
    imgPath: "trade",
  },
  {
    title: "Top Helpers",
    titleLink: "https://tophelpers.com/",
    description: `Contributed to the development of TopHelpers, a platform simplifying the connection between users and moving services. Focused on building a user-friendly frontend that streamlined search and booking functionality while ensuring an efficient and responsive user experience. Collaborated with the team to optimize performance and deliver a reliable, hassle-free platform.`,
    techs: [
      "VueJS",
      "Vuex",
      "Git/GitHub",
      "TailwindCss",
      "Bootstrap",
      "Agile/Scrum",
      "PHP",
    ],
    imgPath: "toph",
  },
  {
    title: "DGB",
    titleLink: "http://my.dgb.uz/",
    description:
      "Platform build to receive, reslove e-documents, multiple type of money transfers for companies.Furthemore, utilities, monitoring of bank account, employee data, tax informations and other facilities added.",
    techs: [
      "VueJS",
      "Pinia",
      "Vuex",
      "Vite",
      "Git/GitHub",
      "TailwindCss",
      "Bootstrap",
      "TypeScript",
      "Cypess",
      "Agile/Scrum",
      "PHP",
      "C#",
      "Docker",
      "Symphony",
      ".NET",
      "MongoDB",
      "PostgreSQL",
      "EImzo",
    ],
    imgPath: "dgb",
  },
  {
    title: "Mockelts",
    titleLink: "#",
    description:
      "Platform is building for taking IELTS exam online. Admin can add new questions data, manage real time exam with socket: pause/continue, after time is up move to another sections (listening, writing, reading), finish after overall time, see result of studens. Platform is in production, however, it is running on localhost of our client.",
    techs: [
      "VueJS 3",
      "Pinia",
      "Vite",
      "Git/GitHub",
      "TailwindCss",
      "TypeScript",
      "Socket.io",
      "Agile/Scrum",
      "NodeJS",
      "Fastify",
      "MongoDB",
    ],
    imgPath: "mockelts",
  },
  {
    title: "Nuru Ayniy",
    titleLink: "https://nuruayniy.netlify.app/",
    description:
      "Project serves to accept new orders, list of orders. User can manage order such as change status, delete after finished and change payment amount. Serverless application saves data on Real time Firebase store.",
    techs: [
      "VueJS 3",
      "Vite",
      "Git/GitHub",
      "TailwindCss",
      "TypeScript",
      "Firebase / Firestore",
      "Netlify",
    ],
    imgPath: "nuru",
  },
  {
    title: "Body&Mind",
    titleLink: "https://body-mind.netlify.app/",
    description:
      "GYM website web-copy. Client required to just versatiling in pure JS, HTML5 and CSS. I have no information about website.",
    techs: ["HTML", "CSS", "Git/GitHub", "JavaScript", "Netlify"],
    imgPath: "bodymind",
  },
  {
    title: "Cars Gallery",
    titleLink: "https://cars-gallery.netlify.app/",
    description: "Versatiled some 3D css animation.",
    techs: ["HTML", "CSS", "Git/GitHub", "Netlify"],
    imgPath: "ballAnim",
  },
  {
    title: "Cube animation",
    titleLink: "https://cube-gallery.netlify.app/",
    description: "Versatiled some 3D css animation.",
    techs: ["HTML", "CSS", "Git/GitHub", "Netlify"],
    imgPath: "cubeAnim",
  },
]);
</script>

<style scoped>
.deco {
  transition: all 400ms ease-in-out;
}
.link:hover > .deco {
  width: 60px;
}
.link:hover > .text {
  color: "#FFF";
}
</style>
