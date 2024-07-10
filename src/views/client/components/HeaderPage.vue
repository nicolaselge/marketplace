<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    title: String
});
const title = ref(props.title);

</script>

<template>
    <header class="flex items-center justify-center font-serif sm:text-6xl text-2xl sm:py-10 py-4 text-teal-800 mx-4 md:mx-0">
        <h1>{{ title }}</h1>
    </header>
</template>