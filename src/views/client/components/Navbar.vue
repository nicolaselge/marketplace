<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import type { MenuItem } from '@/types/interfaces';
import { dataMenuItemLeft, dataMenuItemRight } from '@/data/menu-client';
import { useCartStore } from '../../../stores/cart';
import Button from 'primevue/button';

const menuItemLeft = ref<MenuItem[]>(dataMenuItemLeft);
const menuItemRight = ref<MenuItem[]>(dataMenuItemRight);
const cartStore = useCartStore();
</script>

<template>
    <header class="flex items-center justify-between bg-zinc-300 font-serif py-3 text-teal-800">
        <div class="flex items-center gap-x-5 ml-5 md:text-xl">
            <RouterLink v-for="item in menuItemLeft" :key="item.title" :to="{ name: item.path }">
                {{ item.title }}
            </RouterLink>
        </div>
        <div class="flex items-center gap-x-5 mr-5 md:text-xl">
            <RouterLink v-for="item in menuItemRight" :key="item.title" :to="{ name: item.path }">
                <Button v-if="item.title === 'Cart'" :icon="item.icon" :badge="cartStore.cart.length.toString()" />
                <Button v-else :icon="item.icon" :unstyled="true" />
            </RouterLink>
        </div>
    </header>
</template>