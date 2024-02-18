<script setup lang="ts">
import { IJob } from '../../models/interface.ts'
defineProps<{
    job: IJob
}>()
</script>

<template>
    <div class="card hover:bg-hoverBox transition-all duration-200 p-[10px] my-3 rounded-md">
        <div class="text-fontDark uppercase">{{ job.years }}</div>
        <div class="">
            <a :href="job.companyLink" target="_blank">{{ job.company }}  <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
            <p class="my-5">{{ job.duty }}</p>
            <p class="mb-4">{{ job.description }}</p>
        </div>
        <div class="flex flex-wrap items-center">
            <span v-for="tech in job.techs" :key="tech" class="bg-slate-700 me-2 mb-2 p-1 rounded-xl">
                {{ tech }}
            </span>
        </div>
    </div>
</template>

<style scoped>
.card:hover {
    box-shadow: 0 0 5px 0.5px #4e4e4e;
}
</style>