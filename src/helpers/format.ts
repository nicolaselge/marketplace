export class Format {
    
    constructor() {}

    public static formatPrice = (price: number) => {
        return (price / 100)?.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
    }

    public static formatSize = (size: number) => {
        return size?.toLocaleString('fr-FR', { unit: 'millimeter', style: 'unit' })
    }
}