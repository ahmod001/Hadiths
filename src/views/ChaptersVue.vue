<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import BookPlaceholder from '../components/BookPlaceholder.vue';
import Chapter from '../components/Chapter.vue';
import GoBackBtn from '../components/GoBackBtn.vue';

const route = useRoute();

const chapterList = ref([]);
const showLoading = ref(false);

(async () => {
    try {
        showLoading.value = true;

        const res = await axios.get(`https://hadithapi.com/api/${route.params.bookName}/chapters?apiKey=$2y$10$thUOr5z8D639Br5OinFQuDZOmsQ1svRQIikaRzfq7gH8QwOY4Sa`);

        chapterList.value = res.data?.chapters
        showLoading.value = !true;
    } catch (error) {
        console.error('Chapter List:', error.response?.data?.message);
    }
})()


</script>

<template>
    <header class="flex items-center">
        <GoBackBtn />

        <!-- Title -->
        <h3 class="text-2xl text-offgrey-text-color dark:text-dark-text md:text-2xl font-bold  py-10">
            Chapters
        </h3>
    </header>


    <div class="grid lg:grid-cols-1 gap-5">
        <BookPlaceholder v-if="showLoading" v-for="(item) in 9" :key="item" />

        <Chapter v-else v-for="(chapter) in chapterList" :key="chapter.id" :chapter="chapter" />
    </div>
</template>