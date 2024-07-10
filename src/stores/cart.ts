import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from "primevue/usetoast";
import { Format } from '@/helpers/format';
import type { Total, Delivery, Discount, Product } from '@/types/interfaces';
import { dataDeliveries, dataDiscounts } from '@/data/cart';

export const useCartStore = defineStore('cart', () => {
    // PROPERTIES
    const toast = useToast();
    const cart = ref<Product[]>([]);
    const totals = ref<Total>({ subTotal: 0, promocode: '', discount: 0, shipping: 0, total: 0 });
    const deliveries = ref<Delivery[]>(dataDeliveries);
    const discounts = ref<Discount[]>(dataDiscounts);

    // METHODS
    const getProductLine = (prod: Product) => {
        const findProductInCart = cart.value.find((p: Product) => p.id === prod.id);
        if (findProductInCart) {
            return findProductInCart;
        }
    }
    const addToCart = (product: Product) => {
        const findProductInCart = cart.value.find((p: Product) => p.id === product.id);
        if (findProductInCart) {
            if (findProductInCart.quantity < product.stock) {
                findProductInCart.quantity++;
                toast.add({ severity: 'success', summary: 'Panier', detail: `La quantité de ${findProductInCart.name} est passée à ${findProductInCart.quantity}`, life: 3000 });
            } else {
                toast.add({ severity: 'error', summary: 'Panier', detail: 'Stock insuffisant', life: 3000 });
            }
        } else {
            product.quantity = 1;
            cart.value.push(product);
            toast.add({ severity: 'success', summary: 'Panier', detail: `${product.name} a bien été ajouté à votre panier`, life: 3000 });
        }
    }
    const removeFromCart = (product: Product) => {
        cart.value.splice(cart.value.indexOf(product), 1);
        toast.add({ severity: 'success', summary: 'Panier', detail: `${product.name} a bien été retiré à votre panier`, life: 3000 });
    }
    const incrementQuantity = (product: Product) => {
        const findProductInCart = cart.value.find((p: Product) => p.id === product.id);
        if (findProductInCart && product.stock > (findProductInCart.quantity || 0)) {
            findProductInCart.quantity++;
        } else {
            toast.add({ severity: 'error', summary: 'Panier', detail: `${product.name} est en rupture de stock`, life: 3000 });
        }
    }
    const decrementQuantity = (product: Product) => {
        const findProductInCart = cart.value.find((p: Product) => p.id === product.id);
        if (findProductInCart && findProductInCart.quantity > 1) {
            findProductInCart.quantity--;
        } else {
            removeFromCart(product);
        }
    }
    const getTotalLine = (product: Product) => {
        const findProductInCart = cart.value.find((p: Product) => p.id === product.id);
        if (findProductInCart) {
            return Format.formatPrice(findProductInCart.price * findProductInCart.quantity);
        }
    }

    const getSubTotal = (products: Product[]) => {
        let subTotal = 0;
        for (const product of products) {
            subTotal += product.price * product.quantity;
        }
        totals.value.subTotal = subTotal;
        totals.value.total = subTotal + totals.value.shipping - totals.value.discount;
        return Format.formatPrice(subTotal);
    }

    const getDiscount = () => {
        return Format.formatPrice(totals.value.discount);
    }

    const setDiscount = (discount: number) => {
        totals.value.discount = discount;
    }

    const getShipping = () => {
        return Format.formatPrice(totals.value.shipping);
    }

    const setShipping = (shipping: Delivery) => {
        totals.value.shipping = shipping.price;
    }

    const getTotal = () => {
        return Format.formatPrice(totals.value.total);
    }

    const applyCode = (code: string) => {
        const findPromocode: Discount | undefined = discounts.value.find((d: Discount) => d.code === code);
        if (findPromocode) {
            totals.value.promocode = findPromocode.code;
            if (findPromocode.isPercent) {
                setDiscount(totals.value.subTotal * (findPromocode.value / 100));
            } else {
                setDiscount(findPromocode.value);
            }
        } else {
            totals.value.promocode = '';
            setDiscount(0);
        }
    }

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
        cart,
        deliveries,
        discounts,
        totals,
        getProductLine,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getTotalLine,
        getSeverity,
        getInventoryStatus,
        getSubTotal,
        getDiscount,
        setDiscount,
        getShipping,
        setShipping,
        getTotal,
        applyCode
    }
});