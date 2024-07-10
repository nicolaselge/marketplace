import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from "primevue/usetoast";
import { data } from '@/data/products';
import type { Product } from '@/types/interfaces';

export const useProductsStore = defineStore('products', () => {
    // PROPERTIES
    const toast = useToast();
    const products = ref<Product[]>(data);

    // METHODS
    const getProductById = (id: number): Product => {
        return products.value.find((product: Product) => product.id === id) as Product;
    };
    const getSeverity = (stock: number): string => {
        if (stock === 0) {
            return 'bg-red-700';
        } else if (stock < 3) {
            return 'bg-orange-700';
        } else {
            return 'bg-green-700';
        }
    };
    
    const getInventoryStatus = (stock: number): string => {
        if (stock === 0) {
            return 'Hors stock';
        } else if (stock < 3) {
            return 'Stock faible';
        } else {
            return 'En stock';
        }
    };

    return {
        toast,
        products,
        getProductById,
        getSeverity,
        getInventoryStatus
    }
});