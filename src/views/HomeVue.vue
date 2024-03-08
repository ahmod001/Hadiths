<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue';
import RandomHadith from '../components/RandomHadith.vue';
</script>

<template>
    <Navbar />
    <section class=" relative">
        <div class="absolute inset-0 bg-[#2b9e76] opacity-95 z-0"></div> <!-- Overlay -->
        <main class="max-w-5xl mx-auto px-5 py-10 relative z-10 min-h-screen">
            <RandomHadith/>
        </main>
    </section>
    <Footer />
</template>

<style scoped>
section {
    background-image: url('../assets/hero.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: auto;
}
</style>
