import type { Delivery, Discount } from "@/types/interfaces";

export const dataDeliveries: Delivery[] = [
    { name: '', price: 0, type: null },
    { name: 'Standard', price: 599, type: 'courier' },
    { name: 'Express', price: 999, type: 'courier' },
    { name: 'Relais', price: 299, type: 'relais', company: 'Mondial Relay' },
    { name: 'UPS Standard', price: 799, type: 'transporter', company: 'UPS' },
    { name: 'UPS Express', price: 1499, type: 'transporter', company: 'UPS' },
];

export const dataDiscounts: Discount[] = [
    { code: 'azertyuiop', value: 10, isPercent: true },
    { code: 'qsdfghjklm', value: 5000, isPercent: false },
];