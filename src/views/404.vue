<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <body class="overflow-hidden">
        <div class="text-center py-32 px-4 lg:py-40 pb-32 flex flex-col items-center justify-center">
            <div class="grid place-content-center">
                <img src="https://i.ibb.co/ncJJqTq/undraw-page-not-found-su7k-2-1-1-1.png" alt="404 animation" />
            </div>
            <h1 class="lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 py-4 md:py-8">On dirait que vous êtes perdu</h1>
            <p class="text-base text-gray-600 py-2 ">
                Désolé, nous n'avons pas pu trouver la page que vous cherchiez. Nous n'avons pas pu trouver la page que vous
                recherchez. Veuillez vérifier l'URL dans la <br class="md:block hidden" /> barre d'adresse et réessayez.
            </p>
            <div class="my-4 md:my-8 w-full">
                <RouterLink :to="{ name: 'home' }" class="text-center text-base font-medium text-white p-4 md:w-auto w-full bg-indigo-700 border rounded-md hover:bg-indigo-800">
                    Retour vers la page d'accueil
                </RouterLink>
            </div>
        </div>
</body></template>