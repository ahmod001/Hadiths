<script setup>
import Book from '../components/Book.vue';
import axios from 'axios';
import { ref } from 'vue';
import BookPlaceholder from '../components/BookPlaceholder.vue';

const bookList = ref([]);
const showLoading = ref(false);

(async () => {
    try {
        showLoading.value = true;

        const res = await axios.get('https://hadithapi.com/api/books?apiKey=$2y$10$thUOr5z8D639Br5OinFQuDZOmsQ1svRQIikaRzfq7gH8QwOY4Sa');

        bookList.value = res.data?.books
        showLoading.value = !true;
    } catch (error) {
        console.error('Books List:', error.response?.data?.message);
    }
})()


</script>

<template>
    <h3 class="text-2xl text-offgrey-text-color dark:text-dark-text md:text-2xl font-bold  py-10">
        All Books
    </h3>


    <div class="grid lg:grid-cols-3  sm:grid-cols-2 gap-5">
        <BookPlaceholder v-if="showLoading" v-for="(item) in 9" :key="item" />

        <Book v-else v-for="(book) in bookList" :key="book.id" :book="book" />
    </div>
</template>