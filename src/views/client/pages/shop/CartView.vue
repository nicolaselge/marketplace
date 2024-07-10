<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import { useCartStore } from '../../../../stores/cart';
import HeaderPage from '../../components/HeaderPage.vue';
import type { Delivery } from '@/types/interfaces';
import { useWishlistStore } from '@/stores/wishlist';

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const shipping = ref<Delivery>(cartStore.deliveries[0]);

</script>

<template>
    <div>
        <HeaderPage :title="'Panier'" />
        <main>
            <!-- Produits -->
            <section v-if="cartStore.cart.length > 0" class="container mx-auto max-w-6xl px-2 xl:px-0 mb-10">
                <DataView :value="cartStore.cart" layout="list" :dataKey="'id'" paginator :rows="6" :unstyled="true" paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="page {currentPage} sur {totalPages}">
                    <template #list="slotProps" class="dark:bg-zinc-800 dark:text-zinc-300">
                        <div class="grid grid-cols-1 gap-4">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="">
                                <div class="flex items-start justify-center gap-2 border border-zinc-300 rounded"
                                    :class="{ 'border': index !== 0 }">
                                    <div class="p-2 relative">
                                        <img class="max-w-32" :src="item.imageCard" :alt="item.name" />
                                        <RouterLink :to="{ name: 'product', params: { id: item.id } }" :product="item">
                                            <Button label="Voir"
                                                class="absolute inset-x-1 inset-y-1 uppercase dark:text-zinc-500 hover:bg-zinc-300/50"></Button>
                                        </RouterLink>
                                    </div>
                                    <div class="flex my-auto justify-between items-center w-full p-2">
                                        <div>
                                            <div class="flex items-center gap-x-2 mb-2">
                                                <Tag :value="cartStore.getInventoryStatus(item.stock)"
                                                    :class="cartStore.getSeverity(item.stock)"></Tag>
                                                <div class="flex items-center justify-center">
                                                    <Button :icon="wishlistStore.hasProductInWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" @click="wishlistStore.addToWishlist(item)"
                                                        v-tooltip.top="{ value: 'Ajouter aux favoris', pt: { text: 'text-xs' } }"></Button>
                                                    <div class="flex items-center">
                                                        <div class="font-medium text-lg">{{ item.rating }}</div>
                                                        <i class="pi pi-star-fill text-yellow-500 ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-lg font-medium line-clamp-1">{{ item.name }}</div>
                                            <div class="font-base text-xs italic text-zinc-500">{{ item.category }}</div>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <div class="flex items-center">
                                                <Button icon="pi pi-minus"
                                                    @click="cartStore.decrementQuantity(item)"></Button>
                                                <span class="font-medium text-lg">{{ item.quantity }}</span>
                                                <Button icon="pi pi-plus" :disabled="item.stock === item.quantity"
                                                    @click="cartStore.incrementQuantity(item)"></Button>
                                            </div>
                                        </div>
                                        <div class="text-2xl font-semibold mr-4">{{ cartStore.getTotalLine(item) }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </section>
    
            <section class="block sm:flex items-center justify-beetween container mx-auto px-2 xl:px-0 max-w-6xl mb-10 gap-x-2">
                <div class="w-full">
                    <Dropdown v-model="shipping" :options="cartStore.deliveries" @change="cartStore.setShipping(shipping)" inputClass="p-1"
                        optionLabel="name" placeholder="Livraison" class="border border-zinc-300 rounded-none mb-2 sm:mb-0"></Dropdown>
                </div>
                <div class="flex gap-x-2">
                    <InputText v-model="cartStore.totals.promocode" placeholder="Promotion" class="border border-zinc-300 dark:text-zinc-800 rounded-none p-1">
                    </InputText>
                    <Button @click="cartStore.applyCode(cartStore.totals.promocode)"
                        class="bg-zinc-300 hover:bg-zinc-400 text-center text-teal-800 font-serif py-1 px-2 rounded-none">Appliquer</Button>
                </div>
            </section>
    
            <section
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between container mx-auto px-2 xl:px-0 max-w-6xl mb-10 gap-2">
                <div class="flex items-center border border-zinc-300 p-2 w-full">
                    <p class="text-base leading-none text-zinc-600">Sous-total TTC&nbsp;:&nbsp;</p>
                    <p class="text-base leading-none text-zinc-600">{{ cartStore.getSubTotal(cartStore.cart) }}</p>
                </div>
                <div class="flex items-center border border-zinc-300 p-2 w-full">
                    <p class="text-base leading-none text-zinc-600">Promotion&nbsp;:&nbsp;</p>
                    <p class="text-base leading-none text-zinc-600">{{ cartStore.getDiscount() }}</p>
                </div>
                <div class="flex items-center border border-zinc-300 p-2 w-full">
                    <p class="text-base leading-none text-zinc-600">Livraison&nbsp;:&nbsp;</p>
                    <p class="text-base leading-none text-zinc-600">{{ cartStore.getShipping() }}</p>
                </div>
                <div class="flex items-center border border-zinc-300 p-2 w-full">
                    <p class="text-base leading-none text-zinc-600">Total TTC&nbsp;:&nbsp;</p>
                    <p class="text-base leading-none text-zinc-600">{{ cartStore.getTotal() }}</p>
                </div>
            </section>
        </main>
    </div>
</template>