<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from "primevue/checkbox";

const auth = getAuth();
const email = ref();
const username = ref();
const confirmpassword = ref();
const password = ref();
const mentions = ref();

createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <section
            class="container mx-auto max-w-xl px-2 xl:px-0 border rounded-xl flex flex-col items-center justify-center py-10 shadow-xl bg-teal-700">
            <div class="flex flex-col justify-center items-center gap-3 w-5/6 mb-10">
                <img src="https://i.ibb.co/5Kg7XkK/undraw-Login-re-4vu2.png" alt="Login image" class="w-40 h-40">
                <h1 class="text-3xl font-serif text-white">Inscription</h1>
            </div>
            <div class="w-5/6 flex flex-col gap-3">
                <InputText v-model="username" placeholder="Pseudo" class="border border-gray-300 rounded p-1"></InputText>
                <InputText v-model="email" placeholder="Email" class="border border-gray-300 rounded p-1"></InputText>
                <InputText v-model="password" placeholder="Mot de passe" class="border border-gray-300 rounded p-1"></InputText>
                <InputText v-model="confirmpassword" placeholder="Confirmer mot de passe" class="border border-gray-300 rounded p-1"></InputText>
                <div class="flex align-items-center my-3">
                    <Checkbox v-model="mentions" inputId="mentions" name="mentions" value="mentions" />
                    <label for="mentions" class="ml-2 text-gray-300 text-xs">J'accepte les <span class="italic text-white underline">conditions générales d'utilisation</span> et les <span class="italic text-white underline">conditions générales de vente</span></label>
                </div>
                <div class="text-end">
                    <Button class="bg-gray-300 hover:bg-gray-400 text-center text-teal-800 font-serif py-1 px-2 rounded">Se connecter</Button>
                </div>
            </div>
        </section>
    </div>
</template>