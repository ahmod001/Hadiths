<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import GoBackBtn from '../components/GoBackBtn.vue';
import Hadith from '../components/Hadith.vue';
import HadithPlaceholder from '../components/HadithPlaceholder.vue';

const route = useRoute();

const hadithList = ref([]);
const showLoading = ref(false);

(async () => {
    try {
        showLoading.value = true;

        const res = await axios.get(`https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$thUOr5z8D639Br5OinFQuDZOmsQ1svRQIikaRzfq7gH8QwOY4Sa&?chapter=${route.params.chapterId}&?book=${route.params.bookName}`);

        hadithList.value = res.data?.hadiths?.data
        showLoading.value = !true;
    } catch (error) {
        console.error('Hadith List:', error.response?.data?.message);
    }
})()


</script>

<template>
    <header class="flex items-center">
        <GoBackBtn />

        <!-- Title -->
        <h3 class="text-2xl text-offgrey-text-color dark:text-dark-text md:text-2xl font-bold  py-10">
            {{ route.query.c }}
        </h3>
    </header>


    <div class="grid lg:grid-cols-1 gap-5">
        <HadithPlaceholder v-if="showLoading" v-for="(item) in 3" :key="item" />

        <Hadith v-else v-for="(hadith) in hadithList" :key="hadith.id" :hadith="hadith" />
    </div>
</template>../components/HadithPlaceholder.vue