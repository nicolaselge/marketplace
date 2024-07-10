<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import Button from 'primevue/button';
import HeaderPage from '../../components/HeaderPage.vue';
import Carousel from 'primevue/carousel';
import type { Product } from '@/types/interfaces';
import { Format } from '../../../../helpers/format';
import { useCartStore } from '../../../../stores/cart';
import { useProductsStore } from '../../../../stores/products';
import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import Tag from 'primevue/tag';
import { useWishlistStore } from '@/stores/wishlist';

const route = useRouter();
const id = parseInt(route.currentRoute.value.params.id as string);

const cartStore = useCartStore();
const productsStore = useProductsStore();
const wishlistStore = useWishlistStore();

const product = ref<Product>(productsStore.getProductById(id));
const images = ref(product.value.images);

</script>

<template>
    <div>
        <RouterLink :to="{ name: 'shop' }" class="mx-2 sm:mx-4 md:mx-0">
            <Button
                class="bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-400 text-center text-teal-800 font-serif py-1 px-2 rounded my-4">
                <i class="pi pi-arrow-left"></i>
                <span class="ml-2">Retour</span>
            </Button>
        </RouterLink>
        <div class="container mx-auto mb-8">
            <Card class="sm:max-w-3xl sm:mx-auto mx-2 dark:bg-zinc-800" style="overflow: hidden">
                <template #header>
                    <Galleria :value="images" :numVisible="1" :circular="true" :autoPlay="true" :showItemNavigators="true" :showItemNavigatorsOnHover="true" :showThumbnails="false">
                        <template #item="slotProps">
                            <img :src="slotProps.item.url" :alt="slotProps.item.alt" class="w-full" />
                        </template>
                    </Galleria>
                </template>
                <template #title>
                    <div class="dark:text-zinc-200">{{ product.name }}</div>
                </template>
                <template #subtitle>
                    <div class="text-zinc-600 dark:text-zinc-400 text-sm">
                        {{ product.reference }}
                    </div>
                </template>
                <template #content>
                    <div class="w-full flex flex-col gap-3 mb-4">
                        <p class="text-sm leading-none text-zinc-600">
                            <Tag :value="product?.category" class="bg-teal-700 text-zinc-800 font-normal"></Tag>
                        </p>
                        <p class="block text-base leading-none text-zinc-600 dark:text-zinc-300">
                            <span>{{ product?.description }}</span>
                        </p>
                    </div>
                    <div class="inline-flex flex-col items-start justify-start mb-4">
                        <p class="text-base leading-normal text-zinc-600 dark:text-zinc-300"><span class="text-sm text-zinc-500 dark:text-zinc-400 italic">Longueur : </span>{{ Format.formatSize(product?.length) }}</p>
                        <p class="text-base leading-normal text-zinc-600 dark:text-zinc-300"><span class="text-sm text-zinc-500 dark:text-zinc-400 italic">Hauteur : </span>{{ Format.formatSize(product?.height) }}</p>
                        <p class="text-base leading-normal text-zinc-600 dark:text-zinc-300"><span class="text-sm text-zinc-500 dark:text-zinc-400 italic">Profondeur : </span>{{ Format.formatSize(product?.depth) }}</p>
                        <p class="w-full text-base leading-normal text-zinc-600 dark:text-zinc-300"><span class="text-sm text-zinc-500 dark:text-zinc-400 italic">Composition : </span>{{ product?.composition }}</p>
                    </div>
                    <div class="w-full flex gap-3 mb-4">
                        <div v-for="color of product?.colors" class="flex items-center gap-2">
                            <div :class="`w-6 h-6 cursor-pointer ${color}`"></div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-3 mb-4">
                        <p class="text-2xl font-medium leading-none">
                            <span>{{ Format.formatPrice(product?.price) }}</span>
                        </p>
                    </div>
                </template>
                <template #footer>
                    <div class="flex items-center justify-end gap-x-8 mt-1">
                        <Button @click="wishlistStore.addToWishlist(product)" :icon="wishlistStore.hasProductInWishlist(product) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" iconClass="text-xl text-teal-800 hover:text-zinc-300" class="flex items-center gap-x-2 font-semibold dark:text-zinc-300 text-zinc-800 border border-teal-800 dark:hover:bg-teal-800 hover:bg-teal-800 rounded px-2" label="Favoris" :unstyled="true" />
                        <Button @click="cartStore.addToCart(product)" icon="fa-duotone fa-cart-plus" iconClass="text-xl text-teal-800 hover:text-zinc-300" class="flex items-center gap-x-2 font-semibold dark:text-zinc-300 text-zinc-800 border border-teal-800 dark:hover:bg-teal-800 hover:bg-teal-800 rounded px-2" label="Ajouter" :unstyled="true" />
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>