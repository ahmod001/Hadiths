<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="sticky top-0 bg-white z-50">
        <header class=" flex flex-wrap items-center py-4 max-w-5xl mx-auto px-5">
            <RouterLink to="/" class="flex items-center space-x-2">
                <img src="../assets/hadiths.svg" alt="AL Hadith">
                <h3 class="text-xl md:text-2xl text-green-600 font-medium uppercase">AL Hadith</h3>
            </RouterLink>
            <!-- 
            <label for="menu-toggle" class="pointer-cursor md:hidden block">
                <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label> -->
            <!-- <input class="hidden" type="checkbox" id="menu-toggle" /> -->

            <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <!-- <li><a class="md:p-4 py-3 px-0 block" href="#">AboutUs</a></li> -->
                    </ul>
                </nav>
            </div>
        </header>
    </nav>
</template>