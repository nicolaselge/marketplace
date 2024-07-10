import { ref } from 'vue';
import { defineStore } from "pinia"
import { useToast } from 'primevue/usetoast';
import type { Product } from '@/types/interfaces';

export const useWishlistStore = defineStore('wishlist', () => {
    // PROPERTIES
    const toast = useToast();
    const wishlist = ref<Product[]>([]);

    // METHODS
    const addToWishlist = (product: Product) => {
        const findProductInWishlist = wishlist.value.find((p: Product) => p.id === product.id);
        if (!findProductInWishlist) {
            wishlist.value.push(product);
            toast.add({ severity: 'success', summary: 'Favoris', detail: `${product.name} a bien été ajouté aux favoris`, life: 3000 });
        } else {
            removeFromWishlist(product);
        }
    }
    const removeFromWishlist = (product: Product) => {
        const findProductInWishlist = wishlist.value.find((p: Product) => p.id === product.id);
        if (findProductInWishlist) {
            wishlist.value.splice(wishlist.value.indexOf(product), 1);
            toast.add({ severity: 'success', summary: 'Favoris', detail: `${product.name} a bien été retiré des favoris`, life: 3000 });
        }
    }
    const hasProductInWishlist = (product: Product) => {
        const findProductInWishlist = wishlist.value.find((p: Product) => p.id === product.id);
        if (findProductInWishlist) {
            return true;
        } else {
            return false;
        }
    }

    return {
        wishlist,
        addToWishlist,
        removeFromWishlist,
        hasProductInWishlist
    }
})