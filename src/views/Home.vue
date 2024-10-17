<template>
    <div class="flex flex-col md:flex-row items-start justify-between text-fontCol">
        <div class="md:fixed md:w-1/2 md:!h-screen bg-main ps-[100px] pt-[100px]">
            <div class="flex flex-col">
                <div>
                    <span>Hi, I am</span>
                    <h2 class="text-4xl font-bold my-5 font-sans">Doniyor Ibragimov</h2>
                    <span>
                        Frontend engineer, who fall in love with 
                        <a class="text-lg hover:underline pb-2" href="http://vuejs.org" target="_blank">Vue.js</a>
                    </span>
                </div>
                <div class="text-xl my-28">
                    <div class="flex items-center w-auto link cursor-pointer">
                        <span class="deco w-[40px] h-[2px] bg-fontCol me-5"/>
                        <a href="#about" class="text text-base md:text-lg">About</a>
                    </div>
                    <div class="flex items-center w-auto link cursor-pointer">
                        <span class="deco w-[40px] h-[2px] bg-fontCol me-5"/>
                        <a href="#experience" class="text text-base md:text-lg">Experience</a>
                    </div>
                    <div class="flex items-center w-auto link cursor-pointer">
                        <span class="deco w-[40px] h-[2px] bg-fontCol me-5"/>
                        <a href="#projects" class="text text-base md:text-lg">Projects</a>
                    </div>
                </div>

                <div class="flex items-center justify-between w-1/2">
                    <a class="text-2xl" href="https://t.me/dr_coder17" target="_blank">
                        <i class="fa-brands hover:text-white fa-telegram"></i>
                    </a>
                    <a class="text-2xl" href="https://www.linkedin.com/in/yusuf-doniyor-ismail-2b87aa22a/" target="_blank">
                        <i class="fa-brands hover:text-white fa-linkedin"></i>
                    </a>
                    <a class="text-2xl" href="https://www.github.com/doniyor17" target="_blank">
                        <i class="fa-brands hover:text-white fa-github"></i>
                    </a>
                    <a class="text-2xl" href="tel:+998994887352" target="_blank">
                        <i class="fa-solid hover:text-white fa-phone-alt"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="md:w-1/2 bg-main md:ms-auto px-5">
            <div id="about" class="pt-10">
                <p class="mb-5">I started coding back in the 2019, right after my master's degree in South Korea. Fast-forward to today, and I build software, teach students, manage a small team in development field.</p>

                <p class="mb-5">My main focus these days is building products and working with experienced teams, gather more and more experience and ideas about development and business process so, later I will be able to build my own team or business. I keen on learning new <i class="text-blue-400">"things"</i>, and <i class="text-blue-400">How</i> is it working under the hood. I share my knowledge to beginners about development, frontend, HTML, CSS and JavaScript in my part-time job.</p>

                <p>When I am not at the computer, I mean, in my free time, I do sport, read books and articles, listen to lectures, hang out with my family and friends.</p>
            </div>

            <div id="experience" class="mt-[60px]">
                <h3 class="my-4 text-2xl">Experience</h3>
                <div v-for="job in jobs" :key="job.duty">
                    <experienceCard :job="job"/>
                </div>
            </div>

            <div id="projects" class="mt-[60px]">
                <h3 class="my-4 text-2xl">Projects</h3>
                <div v-for="project in projects" :key="project.title">
                    <projectCard :project="project"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import experienceCard from '../components/card/experience.vue';
import projectCard from '../components/card/project.vue';

import { IJob, IProject } from '../models/interface';

const jobs = ref<IJob[]>([
    {
        company: "TechCells LLC",
        companyLink: "https://techcells.com/",
        duty: 'Frontent VueJS developer',
        years: '2024 March - 2024 Aug',
        description: `I've took part building US based start-up logistics web application. My role was to create new UI and optimizing excisting pages. I also made web pages responsive.`,
        techs: ['VueJS', 'Vuex', 'Webpack', 'Git/GitHub', 'TailwindCss', 'Bootstrap', 'Agile/Scrum', 'PHP', 'Docker', 'Laravel']
    },
    {
        company: "Raqamli Biznes",
        companyLink: "http://digitalbiznes.uz/",
        duty: 'Frontent developer',
        years: '2022 Now - 2024 Jan',
        description: `We newly built a business platform for banks and enterpreneurs. Platform includes, admin dashboard with complex management, completely new own auth system with E-Imzo, Styx technologies integration on client side.`,
        techs: ['VueJS', 'Pinia', 'Vuex', 'Vite', 'Git/GitHub', 'TailwindCss', 'Bootstrap', 'TypeScript', 'Cypess', 'Agile/Scrum', 'PHP', 'C#', 'Docker', 'Symphony', '.NET', 'EImzo']
    },
    {
        company: "Najot Ta'lim",
        companyLink: "http://najottalim.uz/",
        duty: 'Frontent developer',
        years: '2022 Now - 2022',
        description: 'Shared knowledge to beginners about development, frontend, HTML, CSS and JavaScript Vue and its eco-system',
        techs: ['VueJS', 'TypeScript', 'JavaScript', 'Pinia', 'Vuex', 'Vite', 'TailwindCss', 'HTML', 'CSS']
    },
    {
        company: "Authentic Learning Labs",
        companyLink: "https://authenticlabs.io",
        duty: 'Frontent developer (internship)',
        years: '2021 jul - 2021 sep',
        description: 'Maintained current running projects, Created new pages and logics for Songbird Learning Analytics project',
        techs: ['VueJS', 'JavaScript', 'Vuex','Bootstrap', 'Slack', 'GitLab', 'HTML', 'CSS']
    },
    {
        company: "Real Soft",
        companyLink: "https://realsoft.uz/",
        duty: 'Fullstack developer (internship)',
        years: '2021 feb - 2021 apr',
        description: 'Maintained current project, Wrote SQL queries for API, Created new pages',
        techs: ['VueJS', 'JavaScript', 'Vuex', 'TailwindCss', 'HTML', 'CSS']
    },
])

const projects = ref<IProject[]>([
    {
        title: "Top Helpers",
        titleLink: "https://tophelpers.com/",
        description: 'Top Helpers - platform for moving anything from one place to another. Platform serves to users to find movers for their needs.',
        techs: ['VueJS', 'Vuex', 'Git/GitHub', 'TailwindCss', 'Bootstrap', 'Agile/Scrum', 'PHP'],
        imgPath: 'toph'
    },
    {
        title: "DGB",
        titleLink: "http://my.dgb.uz/",
        description: 'Platform build to receive, reslove e-documents, multiple type of money transfers for companies.Furthemore, utilities, monitoring of bank account, employee data, tax informations and other facilities added.',
        techs: ['VueJS', 'Pinia', 'Vuex', 'Vite', 'Git/GitHub', 'TailwindCss', 'Bootstrap', 'TypeScript', 'Cypess', 'Agile/Scrum', 'PHP', 'C#', 'Docker', 'Symphony', '.NET', 'MongoDB', 'PostgreSQL', 'EImzo'],
        imgPath: 'dgb'
    },
    {
        title: "Mockelts",
        titleLink: "#",
        description: 'Platform is building for taking IELTS exam online. Admin can add new questions data, manage real time exam with socket: pause/continue, after time is up move to another sections (listening, writing, reading), finish after overall time, see result of studens. Platform is in building now, not published yet',
        techs: ['VueJS 3', 'Pinia', 'Vite', 'Git/GitHub', 'TailwindCss', 'TypeScript', 'Socket.io', 'Agile/Scrum', 'NodeJS', 'Fastify', 'MongoDB'],
        imgPath: 'mockelts'
    },
    {
        title: "Nuru Ayniy",
        titleLink: "https://nuruayniy.netlify.app/",
        description: 'Project serves to accept new orders, list of orders. User can manage order such as change status, delete after finished and change payment amount. Serverless application saves data on Real time Firebase store.',
        techs: ['VueJS 3', 'Vite', 'Git/GitHub', 'TailwindCss', 'TypeScript', 'Firebase / Firestore', 'Netlify'],
        imgPath: 'nuru'
    },
    {
        title: "Body&Mind",
        titleLink: "https://body-mind.netlify.app/",
        description: 'GYM website web-copy. Client required to just versatiling in pure JS, HTML5 and CSS. I have no information about website.',
        techs: ['HTML', 'CSS', 'Git/GitHub', 'JavaScript', 'Netlify'],
        imgPath: 'bodymind'
    },
    {
        title: "Cars Gallery",
        titleLink: "https://cars-gallery.netlify.app/",
        description: 'Versatiled some 3D css animation.',
        techs: ['HTML', 'CSS', 'Git/GitHub', 'Netlify'],
        imgPath: 'ballAnim'
    },
    {
        title: "Cube animation",
        titleLink: "https://cube-gallery.netlify.app/",
        description: 'Versatiled some 3D css animation.',
        techs: ['HTML', 'CSS', 'Git/GitHub', 'Netlify'],
        imgPath: 'cubeAnim'
    },
])
</script>

<style scoped>
    .deco {
        transition: all 200ms ease-in-out;
    }
    .link:hover > .deco {
        width: 60px;
    }
    .link:hover > .text {
        color: '#FFF';
    }
</style>