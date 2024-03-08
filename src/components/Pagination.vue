<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';


const props = defineProps({
    links: Array
})

const route = useRoute();
const currentPage = route.query.page;

if (!currentPage) {
    useRouter().push({ query: { ...route.query, page: 1 } });
}

const pageButtonClass = computed(() => (page) => ({
    'bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-gray-900/20 hover:shadow-lg': currentPage == page,
    'text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20': currentPage != page
}));

</script>

<template>
    <div class="flex items-center gap-4">
        <button
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
            </svg>
            Previous
        </button>
        <div class="flex items-center gap-2">

            <button v-for="(item, index) in items" :key="index" :class="pageButtonClass(index++)"
                class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase  transition-all  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    4
                </span>
            </button>
        </div>
        <button
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
        </button>
    </div>
</template>