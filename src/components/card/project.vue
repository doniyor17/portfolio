<script setup lang="ts">
import { IProject } from '../../models/interface.ts'
defineProps<{
    project: IProject
}>();

function getImageUrl(name: string) {
    return new URL(`../../assets/img/${name}.png`, import.meta.url);
}
</script>

<template>
    <div class="card flex flex-col lg:flex-row md:items-center hover:bg-hoverBox transition-all duration-200 p-[10px] my-3 rounded-md">
        <img class="w-full lg:w-1/2 h-auto lg:h-full object-cover mb-2" :src="getImageUrl(project.imgPath).pathname" alt="">
        <div class="ps-2 !text-left">
            <a class="text-fontDark" :href="project.titleLink" target="_blank">{{ project.title }}  <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
            <p class="mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap items-center">
                <span v-for="tech in project.techs" :key="tech" class="bg-slate-700 me-2 mb-2 p-1 rounded-xl">
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card:hover {
    box-shadow: 0 0 5px 0.5px #4e4e4e;
}
</style>