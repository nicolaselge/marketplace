<script setup lang="ts">
import { useWishlistStore } from '../../../../stores/wishlist';
import HeaderPage from '../../components/HeaderPage.vue';
import DataView from 'primevue/dataview';
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';

const wishlistStore = useWishlistStore();
console.log('🚀 ~ wishlistStore : ', wishlistStore.wishlist)

</script>

<template>
    <div>
        <HeaderPage :title="'Favoris'" />
        <section v-if="wishlistStore.wishlist.length > 0" class="container mx-auto max-w-6xl px-2 xl:px-0 mb-10">
            <DataView :value="wishlistStore.wishlist" layout="list" :dataKey="'id'" :unstyled="true">
                <template #list="slotProps" class="dark:bg-zinc-800 dark:text-zinc-300">
                    <div class="grid grid-cols-1 gap-4">
                        <div v-for="(item, index) in slotProps.items" :key="index" class="">
                            <div class="flex items-center justify-center gap-2 border border-zinc-300 rounded"
                                :class="{ 'border': index !== 0 }">
                                <div class="p-2 relative">
                                    <img class="max-w-24" :src="item.imageCard" :alt="item.name" />
                                    <RouterLink :to="{ name: 'product', params: { id: item.id } }" :product="item">
                                        <Button label="Voir" class="absolute inset-x-1 inset-y-1 uppercase dark:text-zinc-500 hover:bg-zinc-300/50"></Button>
                                    </RouterLink>
                                </div>
                                <div class="flex my-auto justify-between items-center w-full p-2">
                                    <div>
                                        <div class="text-lg font-medium line-clamp-1">{{ item.name }}</div>
                                        <div class="font-base text-xs italic text-zinc-500">{{ item.category }}</div>
                                        <div class="flex items-center">
                                            <div class="font-medium text-lg">{{ item.rating }}</div>
                                            <i class="pi pi-star-fill text-yellow-500 ml-1"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <Button icon="fa-duotone fa-trash-can" label="Supprimer" class="mr-4 text-teal-700" @click="wishlistStore.removeFromWishlist(item)"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </DataView>
        </section>
    </div>
</template>