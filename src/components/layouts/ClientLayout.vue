<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '../../views/client/components/Navbar.vue';
import Footer from '../../views/client/components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <RouterView class="flex-1" />
    <Footer />
  </div>
</template>