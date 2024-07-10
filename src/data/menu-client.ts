import type { MenuItem } from "@/types/interfaces";

export const dataMenuItemLeft: MenuItem[] = [
    { title: 'Accueil', path: 'home' },
    { title: 'Boutique', path: 'shop' },
    { title: 'Aide', path: 'help' },
];

export const dataMenuItemRight: MenuItem[] = [
    { title: 'Profile', path: 'profile', icon: 'fa-duotone fa-user-gear' },
    { title: 'Wishlist', path: 'wishlist', icon: 'fa-duotone fa-heart' },
    { title: 'Cart', path: 'cart', icon: 'fa-duotone fa-shopping-cart' },
];