<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dropdown from 'primevue/dropdown';
import { useCartStore } from '../../../../stores/cart';
import { useProductsStore } from '../../../../stores/products';
import { Format } from '../../../../helpers/format';
import HeaderPage from '../../components/HeaderPage.vue';
import { useWishlistStore } from '@/stores/wishlist';

const productsStore = ref(useProductsStore());
const cartStore = ref(useCartStore());
const wishlistStore = useWishlistStore();
const layout = ref<'grid' | 'list'>('grid');

const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
    { label: 'Nouveauté', value: 'createdAt' },
    { label: 'Prix croissant', value: 'price' },
    { label: 'Prix décroissant', value: '!price' },
    { label: 'Nom croissant', value: 'name' },
    { label: 'Nom décroissant', value: '!name' },
    { label: 'Note croissante', value: 'rating' },
    { label: 'Note décroissante', value: '!rating' },
]);
const onSortChange = (event: { value: { value: any; }; }) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.includes('price')) {
        if (value.indexOf('!') === 0) {
            sortOrder.value = -1;
            sortField.value = value.substring(1, value.length);
            sortKey.value = sortValue;
        }
        else {
            sortOrder.value = 1;
            sortField.value = value;
            sortKey.value = sortValue;
        }
    } else if (value.includes('name')) {
        if (value.indexOf('!') === 0) {
            sortOrder.value = -1;
            sortField.value = value.substring(1, value.length);
            sortKey.value = sortValue;
        } else {
            sortOrder.value = 1;
            sortField.value = value;
            sortKey.value = sortValue;
        }
    } else if (value.includes('rating')) {
        if (value.indexOf('!') === 0) {
            sortOrder.value = -1;
            sortField.value = value.substring(1, value.length);
            sortKey.value = sortValue;
        } else {
            sortOrder.value = 1;
            sortField.value = value;
            sortKey.value = sortValue;
        }
    } else if (value.includes('createdAt')) {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
    }
};

</script>

<template>
    <div>
        <HeaderPage :title="'Boutique'" />
        <main>
            <!-- Barre de recherche + filtres -->
    
            <!-- Produits -->
            <div class="container mx-auto max-w-6xl mb-10">
                <DataView :value="productsStore.products" :layout="layout" :dataKey="'id'" paginator :rows="12"
                    :sortOrder="sortOrder" :sortField="sortField" class="dark:bg-zinc-800 dark:text-zinc-300 px-2 md:px-0"
                    :unstyled="true">
                    <template #header>
                        <div class="flex items-center justify-end gap-x-4 mb-3">
                            <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Trier par"
                                @change="onSortChange($event)" :unstyled="true"
                                class="flex items-center gap-x-3 cursor-pointer focus:ring-transparent"
                                panel-class="dark:bg-zinc-800 dark:text-zinc-300 p-3 rounded cursor-pointer" />
                            <DataViewLayoutOptions v-model="layout" :unstyled="true"
                                class="flex items-center gap-x-3 focus:ring-transparent" />
                        </div>
                    </template>
    
                    <template #list="slotProps" class="dark:bg-zinc-800 dark:text-zinc-300">
                        <div class="grid grid-cols-1 gap-4">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="">
                                <div class="flex items-start justify-center gap-2 border border-zinc-500 rounded"
                                    :class="{ 'border': index !== 0 }">
                                    <div class="p-2 relative">
                                        <img class="max-h-52" :src="item.imageCard" :alt="item.name" />
                                        <RouterLink :to="{ name: 'product', params: { id: item.id } }" :product="item">
                                            <Button label="Voir"
                                                class="absolute inset-x-1 inset-y-1 uppercase hover:bg-zinc-300/50 text-zinc-500"></Button>
                                        </RouterLink>
                                    </div>
                                    <div class="w-full p-2">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <div class="flex items-center justify-start gap-x-2">
                                                    <Tag :value="productsStore.getInventoryStatus(item.stock)"
                                                        :class="productsStore.getSeverity(item.stock)"></Tag>
                                                    <div>
                                                        <span class="font-medium text-lg">{{ item.rating }}</span>
                                                        <i class="pi pi-star-fill text-yellow-500 pb-1 ml-1"></i>
                                                    </div>
                                                </div>
                                                <div class="text-lg font-medium line-clamp-1">{{ item.name }}</div>
                                                <div class="font-base text-xs italic text-zinc-500">{{ item.category }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <div class="text-lg sm:text-2xl font-semibold">{{ Format.formatPrice(item.price) }}</div>
                                            <div class="flex items-center gap-x-2">
                                                <Button :icon="wishlistStore.hasProductInWishlist(item) ? 'fa-regular fa-heart' : 'fa-solid fa-heart'" class="w-auto" :unstyled="true" @click="wishlistStore.addToWishlist(item)"
                                                    v-tooltip.top="{ value: 'Ajouter aux favoris', pt: { text: 'text-xs' } }"></Button>
                                                <Button icon="pi pi-shopping-cart" class="w-auto" :unstyled="true"
                                                    v-tooltip.top="{ value: 'Ajouter au panier', pt: { text: 'text-xs' } }"
                                                    :disabled="item.stock === 0"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
    
                    <template #grid="slotProps" class="dark:bg-zinc-800 dark:text-zinc-300">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="">
                                <div class="block border border-zinc-500 rounded">
                                    <div class="flex justify-center p-2">
                                        <div class="relative">
                                            <img class="w-full" :src="item.imageCard" :alt="item.name" />
                                            <Tag :value="productsStore.getInventoryStatus(item.stock)"
                                                :class="productsStore.getSeverity(item.stock)"
                                                class="absolute left-2 top-2"></Tag>
                                            <RouterLink :to="{ name: 'product', params: { id: item.id } }">
                                                <Button label="Voir"
                                                    class="absolute inset-x-1 inset-y-1 uppercase hover:bg-zinc-300/50 text-zinc-500"></Button>
                                            </RouterLink>
                                        </div>
                                    </div>
                                    <div class="p-2">
                                        <div class="flex justify-between items-start">
                                            <div>
                                                <div v-tooltip.top="{ value: item.name, pt: { text: 'text-xs' } }"
                                                    class="text-lg font-medium line-clamp-1">{{ item.name }}</div>
                                                <div class="font-base text-xs italic text-zinc-500">{{ item.category }}
                                                </div>
                                            </div>
                                            <div>
                                                <div class="flex items-center justify-center">
                                                    <span class="font-medium text-lg">{{ item.rating }}</span>
                                                    <i class="pi pi-star-fill text-yellow-500 pb-1 mx-1"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <div class="text-lg sm:text-2xl font-semibold">{{ Format.formatPrice(item.price) }}</div>
                                            <div class="flex items-center gap-x-2">
                                                <Button :icon="wishlistStore.hasProductInWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" :unstyled="true" @click="wishlistStore.addToWishlist(item)"
                                                    v-tooltip.top="{ value: 'Ajouter aux favoris', pt: { text: 'text-xs' } }"></Button>
                                                <Button icon="pi pi-shopping-cart" @click="cartStore.addToCart(item)" :unstyled="true"
                                                    v-tooltip.top="{ value: 'Ajouter au panier', pt: { text: 'text-xs' } }"
                                                    :disabled="item.stock === 0" class=""></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
        </main>
    </div>
</template>