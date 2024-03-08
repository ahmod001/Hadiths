<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue';
</script>

<template>
    <Navbar/>
    <section class="bg-gray-100 min-h-screen">
        <main class="max-w-5xl mx-auto px-5 py-10">
            <router-view></router-view>
        </main>
    </section>
    <Footer/>
</template>