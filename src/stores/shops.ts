import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'primevue/usetoast'
import type { Product, User } from '@/types/interfaces'

export interface Shop {
    id: number
    name: string
    description: string
    mentions: Mention
    products: Product[]
    testimonials: Testimonial[]
}

export interface Mention {
    user: User
    adress: Adress[]
    website: string
    socials: string[]
    siret: string
    tva: string
    status: string
}

export interface Adress {
    adress: string
    zipcode: string
    city: string
    country: string
}

export interface Testimonial {
    title: string
    description: string
    note: number
    user: User
}

export const useShopsStore = defineStore('shops', () => {
    // PROPERTIES
    const toast = useToast()
    const shops = ref(data)

    // METHODS

    return {
        shops
    }
})

export const data: Shop[] = [
    {
        id: 1,
        name: 'Boutique 1',
        description: 'malesuada. Integer id magna et ipsum',
        mentions: {
            user: {
                id: 4,
                username: 'boutique1',
                firstname: 'Jason',
                lastname: 'Doe',
                email: 'jasondoe@me.com',
                password: 'password',
                phone: '0555555555',
                status: 'active',
                role: 'vendor',
                certification: 'standard',
                avatar: ''
            },
            adress: [
                {
                    adress: '123 Main St',
                    zipcode: '12345',
                    city: 'Paris',
                    country: 'France'
                },
                {
                    adress: '456 Main St',
                    zipcode: '12345',
                    city: 'Paris',
                    country: 'France'
                }
            ],
            website: 'www.boutique1.com',
            socials: [
                'https://twitter.com/boutique1',
                'https://facebook.com/boutique1',
                'https://instagram.com/boutique1'
            ],
            siret: '123456789',
            tva: 'FR123456789',
            status: 'active'
        },
        products: [
            {
                id: 1,
                name: 'enim, sit amet ornare',
                description: 'malesuada. Integer id magna et ipsum',
                price: 7879,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 8,
                reference: 'LYW46WVI7CD',
                length: 116,
                height: 399,
                depth: 547,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 21,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 2,
                name: 'lectus pede et',
                description:
                    'vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien.',
                price: 6062,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 13,
                reference: 'HCD47YIS1WL',
                length: 102,
                height: 264,
                depth: 891,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 90,
                rating: 5,
                createdAt: new Date()
            },
            {
                id: 3,
                name: 'posuere at, velit.',
                description: 'sollicitudin',
                price: 8607,
                category: 'stews',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 20,
                reference: 'OJG12XUN4VI',
                length: 990,
                height: 918,
                depth: 620,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 58,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 4,
                name: 'sollicitudin commodo ipsum.',
                description: 'Nullam scelerisque',
                price: 1187,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 8,
                reference: 'UIQ41PJO7XH',
                length: 660,
                height: 517,
                depth: 317,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 68,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 5,
                name: 'tellus non',
                description:
                    'ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit',
                price: 2129,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 3,
                reference: 'GLX56ISL6VO',
                length: 410,
                height: 132,
                depth: 51,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 72,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 6,
                name: 'Class',
                description:
                    'feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis',
                price: 5184,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 19,
                reference: 'GPS85XPO3KE',
                length: 214,
                height: 668,
                depth: 256,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 135,
                rating: 5,
                createdAt: new Date()
            },
            {
                id: 7,
                name: 'Aliquam nisl. Nulla',
                description: 'Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim.',
                price: 6294,
                category: 'sandwiches',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 7,
                reference: 'ITM36YCU1LE',
                length: 689,
                height: 602,
                depth: 748,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 24,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 8,
                name: 'fermentum vel, mauris. Integer',
                description: 'sed dui. Fusce aliquam, enim nec tempus',
                price: 4354,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 13,
                reference: 'KUB45RQQ8TG',
                length: 321,
                height: 584,
                depth: 755,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 124,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 9,
                name: 'urna. Vivamus',
                description: 'ipsum non arcu. Vivamus sit amet risus. Donec',
                price: 7862,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 11,
                reference: 'CLF68ROC5AN',
                length: 79,
                height: 682,
                depth: 731,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 122,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 10,
                name: 'velit.',
                description: 'mi lorem, vehicula et, rutrum eu,',
                price: 1433,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 15,
                reference: 'TTI91UKY7TH',
                length: 298,
                height: 117,
                depth: 368,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 105,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 11,
                name: 'ipsum. Suspendisse non leo.',
                description:
                    'volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl.',
                price: 8771,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 9,
                reference: 'GGA79VXU0AB',
                length: 984,
                height: 448,
                depth: 209,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 173,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 12,
                name: 'tortor nibh sit amet',
                description: 'Pellentesque habitant morbi',
                price: 5211,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 23,
                reference: 'NTP31HDC4AF',
                length: 29,
                height: 730,
                depth: 430,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 166,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 13,
                name: 'vel',
                description:
                    'Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu',
                price: 435,
                category: 'desserts',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 3,
                reference: 'DLW54RMH8OQ',
                length: 509,
                height: 804,
                depth: 663,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 65,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 14,
                name: 'euismod in, dolor. Fusce',
                description: 'Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus',
                price: 3644,
                category: 'soups',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 14,
                reference: 'DXV26QWN7EK',
                length: 657,
                height: 744,
                depth: 701,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 115,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 15,
                name: 'ac libero nec ligula',
                description:
                    'at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum',
                price: 3389,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 15,
                reference: 'MHE14YKY1SW',
                length: 757,
                height: 76,
                depth: 366,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 158,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 16,
                name: 'pharetra nibh.',
                description:
                    'convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec',
                price: 5903,
                category: 'noodles',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 19,
                reference: 'NUX61FPK6MR',
                length: 722,
                height: 55,
                depth: 355,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 75,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 17,
                name: 'habitant morbi',
                description: 'lorem, vehicula',
                price: 2976,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 1,
                reference: 'EAO49XKA4WI',
                length: 713,
                height: 711,
                depth: 435,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 135,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 18,
                name: 'sapien, gravida non, sollicitudin',
                description: 'lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue,',
                price: 4304,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 8,
                reference: 'FRW89GUY0NB',
                length: 124,
                height: 535,
                depth: 758,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 12,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 19,
                name: 'eget varius ultrices,',
                description: 'sem. Nulla interdum. Curabitur',
                price: 2574,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 12,
                reference: 'HEX25EUV2FJ',
                length: 620,
                height: 769,
                depth: 139,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 42,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 20,
                name: 'Donec dignissim',
                description:
                    'neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat.',
                price: 6145,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 2,
                reference: 'STX38ITO1IW',
                length: 208,
                height: 400,
                depth: 215,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 136,
                rating: 2,
                createdAt: new Date()
            }
        ],
        testimonials: [
            {
                title: 'title 1',
                description: 'description testimonial 1',
                note: 5,
                user: {
                    id: 2,
                    username: 'johndoe',
                    firstname: 'John',
                    lastname: 'Doe',
                    email: 'johndoe@me.com',
                    password: 'password',
                    phone: '0606060606',
                    status: 'active',
                    role: 'client',
                    certification: 'standard',
                    avatar: ''
                }
            },
            {
                title: 'title 2',
                description: 'description testimonial 2',
                note: 4,
                user: {
                    id: 3,
                    username: 'janedoe',
                    firstname: 'Jane',
                    lastname: 'Doe',
                    email: 'janedoe@me.com',
                    password: 'password',
                    phone: '0707070707',
                    status: 'active',
                    role: 'client',
                    certification: 'standard',
                    avatar: ''
                }
            }
        ]
    },
    {
        id: 2,
        name: 'Boutique 2',
        description:
            'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique',
        mentions: {
            user: {
                id: 5,
                username: 'boutique2',
                firstname: 'Jason',
                lastname: 'Doe',
                email: 'jasondoe@me.com',
                password: 'password',
                phone: '0555555555',
                status: 'active',
                role: 'vendor',
                certification: 'premium',
                avatar: ''
            },
            adress: [
                {
                    adress: '123 Main St',
                    zipcode: '12345',
                    city: 'Paris',
                    country: 'France'
                },
                {
                    adress: '456 Main St',
                    zipcode: '12345',
                    city: 'Paris',
                    country: 'France'
                }
            ],
            website: 'www.boutique2.com',
            socials: [
                'https://twitter.com/boutique2',
                'https://facebook.com/boutique2',
                'https://instagram.com/boutique2'
            ],
            siret: '123456789',
            tva: 'FR123456789',
            status: 'active'
        },
        products: [
            {
                id: 21,
                name: 'dolor. Donec fringilla.',
                description:
                    'facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim',
                price: 2185,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 8,
                reference: 'IDB48PIP4PO',
                length: 289,
                height: 711,
                depth: 495,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 136,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 22,
                name: 'a, arcu.',
                description:
                    'et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam',
                price: 655,
                category: 'desserts',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 2,
                reference: 'FLC48NCX3TO',
                length: 199,
                height: 93,
                depth: 649,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 122,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 23,
                name: 'rutrum urna,',
                description:
                    'justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et',
                price: 1757,
                category: 'stews',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 9,
                reference: 'TSS56UPN0PQ',
                length: 434,
                height: 88,
                depth: 386,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 55,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 24,
                name: 'fermentum metus.',
                description: 'dui, in sodales elit erat vitae risus.',
                price: 1242,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 2,
                reference: 'KVX82EXK0CN',
                length: 609,
                height: 665,
                depth: 892,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 98,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 25,
                name: 'quis turpis vitae purus',
                description:
                    'natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque',
                price: 4187,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 9,
                reference: 'DIJ32OOL6MT',
                length: 245,
                height: 421,
                depth: 709,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 197,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 26,
                name: 'nibh',
                description:
                    'libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat',
                price: 8416,
                category: 'soups',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 2,
                reference: 'EPI14GEP5SU',
                length: 981,
                height: 160,
                depth: 418,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 194,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 27,
                name: 'orci, adipiscing non, luctus',
                description:
                    'nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin',
                price: 4251,
                category: 'sandwiches',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 3,
                reference: 'ZVF55PRY6CY',
                length: 347,
                height: 250,
                depth: 586,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 67,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 28,
                name: 'ornare tortor at',
                description:
                    'pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc',
                price: 1415,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 16,
                reference: 'TBJ04NRE5DK',
                length: 244,
                height: 717,
                depth: 507,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 66,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 29,
                name: 'eleifend vitae, erat.',
                description:
                    'ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes,',
                price: 4890,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 15,
                reference: 'WPA35ABC7BF',
                length: 686,
                height: 413,
                depth: 481,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 26,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 30,
                name: 'ut eros',
                description: 'magna nec quam.',
                price: 3540,
                category: 'stews',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 11,
                reference: 'IYW71SQU5VT',
                length: 856,
                height: 972,
                depth: 501,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 185,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 31,
                name: 'aptent taciti',
                description:
                    'Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat',
                price: 5202,
                category: 'sandwiches',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 10,
                reference: 'YYG24LKQ7SI',
                length: 963,
                height: 71,
                depth: 475,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 71,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 32,
                name: 'risus,',
                description: 'feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut',
                price: 4439,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 1,
                reference: 'KYQ88UYI3DV',
                length: 225,
                height: 289,
                depth: 568,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 110,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 33,
                name: 'non, dapibus',
                description: 'Curabitur massa.',
                price: 9510,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 21,
                reference: 'OST53YJB1WN',
                length: 426,
                height: 46,
                depth: 179,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 21,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 34,
                name: 'condimentum.',
                description:
                    'facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                price: 8293,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 21,
                reference: 'EPH76NVQ5NV',
                length: 404,
                height: 17,
                depth: 26,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 159,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 35,
                name: 'tortor.',
                description:
                    'magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi.',
                price: 9651,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 21,
                reference: 'GCZ82PCH6WL',
                length: 952,
                height: 468,
                depth: 914,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 42,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 36,
                name: 'egestas. Aliquam nec',
                description:
                    'accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus',
                price: 1929,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 22,
                reference: 'LFE46JDE8QH',
                length: 636,
                height: 456,
                depth: 127,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 43,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 37,
                name: 'euismod urna. Nullam',
                description:
                    'In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta',
                price: 8017,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 21,
                reference: 'DTQ03JGZ6IN',
                length: 326,
                height: 747,
                depth: 231,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 37,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 38,
                name: 'Curabitur egestas',
                description:
                    'Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed',
                price: 6776,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 6,
                reference: 'VEG81GJJ1NQ',
                length: 600,
                height: 239,
                depth: 396,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 0,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 39,
                name: 'Praesent',
                description:
                    'elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus.',
                price: 6401,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 23,
                reference: 'LDX02LON5AP',
                length: 611,
                height: 78,
                depth: 985,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 85,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 40,
                name: 'eu, eleifend nec,',
                description: 'ullamcorper. Duis cursus, diam at pretium aliquet, metus urna',
                price: 9519,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 11,
                reference: 'YOW53IUF5JG',
                length: 933,
                height: 746,
                depth: 283,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 178,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 41,
                name: 'pede ac urna. Ut',
                description:
                    'pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque',
                price: 9832,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 13,
                reference: 'BDL85OIF1FD',
                length: 218,
                height: 204,
                depth: 359,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 108,
                rating: 5,
                createdAt: new Date()
            },
            {
                id: 42,
                name: 'Donec',
                description:
                    'est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum.',
                price: 2783,
                category: 'soups',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 13,
                reference: 'CZV28IXP6FV',
                length: 720,
                height: 342,
                depth: 190,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 90,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 43,
                name: 'Sed dictum. Proin',
                description: 'sit amet, consectetuer adipiscing elit. Etiam laoreet, libero',
                price: 5081,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 24,
                reference: 'QCA23VZQ0XM',
                length: 483,
                height: 538,
                depth: 286,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 177,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 44,
                name: 'nisi dictum augue malesuada',
                description:
                    'quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam',
                price: 9289,
                category: 'sandwiches',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 24,
                reference: 'QPZ29ZPY6FW',
                length: 591,
                height: 492,
                depth: 314,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 182,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 45,
                name: 'venenatis lacus. Etiam',
                description:
                    'lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis',
                price: 5939,
                category: 'stews',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 25,
                reference: 'OKM82BRM2OW',
                length: 323,
                height: 810,
                depth: 597,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 181,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 46,
                name: 'adipiscing elit.',
                description:
                    'In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie',
                price: 1682,
                category: 'desserts',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 4,
                reference: 'BUC61YCQ7FV',
                length: 802,
                height: 504,
                depth: 404,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 163,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 47,
                name: 'aliquet nec, imperdiet',
                description:
                    'venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies',
                price: 4298,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 7,
                reference: 'MAC55LUX8ML',
                length: 866,
                height: 169,
                depth: 89,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 38,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 48,
                name: 'Aliquam rutrum',
                description:
                    'et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam',
                price: 9868,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 8,
                reference: 'YXC43SYG4KU',
                length: 211,
                height: 108,
                depth: 459,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 144,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 49,
                name: 'Proin',
                description:
                    'diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie',
                price: 7005,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 9,
                reference: 'IJX88NSO0WK',
                length: 311,
                height: 72,
                depth: 226,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 40,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 50,
                name: 'ante. Vivamus non',
                description:
                    'ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus',
                price: 9875,
                category: 'soups',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 0,
                reference: 'BHF66RQQ2GL',
                length: 405,
                height: 612,
                depth: 855,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 81,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 51,
                name: 'accumsan',
                description: 'non, luctus sit amet, faucibus ut, nulla. Cras eu tellus',
                price: 2425,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 7,
                reference: 'FEI78FFP8KL',
                length: 836,
                height: 462,
                depth: 255,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 62,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 52,
                name: 'velit. Cras',
                description: 'magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis',
                price: 7612,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 15,
                reference: 'BTU59TYH2SL',
                length: 517,
                height: 917,
                depth: 613,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 39,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 53,
                name: 'ac mi',
                description: 'Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non,',
                price: 8654,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 18,
                reference: 'JXL55JQA0SM',
                length: 950,
                height: 88,
                depth: 306,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 139,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 54,
                name: 'eu tempor erat',
                description:
                    'natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida',
                price: 3561,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 19,
                reference: 'GIM74ELC2OK',
                length: 339,
                height: 371,
                depth: 375,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 155,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 55,
                name: 'dis parturient',
                description:
                    'semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget,',
                price: 7644,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 22,
                reference: 'DLW87CUI4LJ',
                length: 868,
                height: 817,
                depth: 479,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 181,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 56,
                name: 'auctor',
                description:
                    'eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus',
                price: 3399,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 15,
                reference: 'HTT48VGE1QA',
                length: 963,
                height: 519,
                depth: 335,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 47,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 57,
                name: 'nulla. Integer',
                description:
                    'nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc',
                price: 2957,
                category: 'soups',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 3,
                reference: 'TMS38VZX3PD',
                length: 38,
                height: 46,
                depth: 845,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 116,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 58,
                name: 'id, mollis',
                description:
                    'vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam',
                price: 1177,
                category: 'noodles',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 23,
                reference: 'HER38CKH9GC',
                length: 812,
                height: 764,
                depth: 613,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 54,
                rating: 5,
                createdAt: new Date()
            },
            {
                id: 59,
                name: 'velit in aliquet',
                description:
                    'natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit',
                price: 3556,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 22,
                reference: 'NIM13TBR6ON',
                length: 501,
                height: 870,
                depth: 172,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 17,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 60,
                name: 'libero. Morbi accumsan',
                description:
                    'ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc',
                price: 5027,
                category: 'soups',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 14,
                reference: 'NUB19PXG0EN',
                length: 408,
                height: 946,
                depth: 464,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 188,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 61,
                name: 'vestibulum',
                description: 'Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec,',
                price: 266,
                category: 'soups',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 2,
                reference: 'FUN02JRR0GC',
                length: 876,
                height: 597,
                depth: 92,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 25,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 62,
                name: 'Phasellus at augue id',
                description:
                    'vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus',
                price: 3002,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 17,
                reference: 'QJN91LBK2SB',
                length: 197,
                height: 112,
                depth: 411,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 188,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 63,
                name: 'Mauris magna.',
                description: 'Sed malesuada augue ut',
                price: 4974,
                category: 'noodles',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 10,
                reference: 'VIY16KON7IT',
                length: 431,
                height: 611,
                depth: 372,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 179,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 64,
                name: 'in, hendrerit',
                description: 'elit pede, malesuada vel, venenatis vel,',
                price: 5527,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 9,
                reference: 'RTM93WCV7MU',
                length: 543,
                height: 147,
                depth: 471,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 132,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 65,
                name: 'Pellentesque tincidunt tempus',
                description: 'libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus',
                price: 8136,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 2,
                reference: 'QVF74QJX8UT',
                length: 595,
                height: 853,
                depth: 384,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 119,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 66,
                name: 'neque non',
                description:
                    'libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique',
                price: 331,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 3,
                reference: 'XTD66DBX1DF',
                length: 577,
                height: 197,
                depth: 875,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 14,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 67,
                name: 'Donec feugiat',
                description:
                    'vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam',
                price: 1503,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 23,
                reference: 'XJP15WGJ7ES',
                length: 410,
                height: 339,
                depth: 835,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 16,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 68,
                name: 'sem',
                description:
                    'penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam',
                price: 2045,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 10,
                reference: 'UEU27SCE2MM',
                length: 920,
                height: 89,
                depth: 933,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 169,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 69,
                name: 'magnis',
                description:
                    'eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum',
                price: 446,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 16,
                reference: 'TBR79TWM1DB',
                length: 833,
                height: 709,
                depth: 48,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 43,
                rating: 2,
                createdAt: new Date()
            }
        ],
        testimonials: [
            {
                title: 'title 1',
                description: 'description testimonial 1',
                note: 5,
                user: {
                    id: 2,
                    username: 'johndoe',
                    firstname: 'John',
                    lastname: 'Doe',
                    email: 'johndoe@me.com',
                    password: 'password',
                    phone: '0606060606',
                    status: 'active',
                    role: 'client',
                    certification: 'standard',
                    avatar: ''
                }
            },
            {
                title: 'title 2',
                description: 'description testimonial 2',
                note: 4,
                user: {
                    id: 3,
                    username: 'janedoe',
                    firstname: 'Jane',
                    lastname: 'Doe',
                    email: 'janedoe@me.com',
                    password: 'password',
                    phone: '0707070707',
                    status: 'active',
                    role: 'client',
                    certification: 'standard',
                    avatar: ''
                }
            }
        ]
    },
    {
        id: 3,
        name: 'Boutique 3',
        description:
            'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique',
        mentions: {
            user: {
                id: 5,
                username: 'boutique3',
                firstname: 'Jason',
                lastname: 'Doe',
                email: 'jasondoe@me.com',
                password: 'password',
                phone: '0555555555',
                status: 'active',
                role: 'vendor',
                certification: 'stantard',
                avatar: ''
            },
            adress: [
                {
                    adress: '123 Main St',
                    zipcode: '12345',
                    city: 'Paris',
                    country: 'France'
                },
                {
                    adress: '456 Main St',
                    zipcode: '12345',
                    city: 'Paris',
                    country: 'France'
                }
            ],
            website: 'www.boutique3.com',
            socials: [
                'https://twitter.com/boutique3',
                'https://facebook.com/boutique3',
                'https://instagram.com/boutique3'
            ],
            siret: '123456789',
            tva: 'FR123456789',
            status: 'active'
        },
        products: [
            {
                id: 70,
                name: 'ligula. Aenean gravida',
                description:
                    'est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus',
                price: 4755,
                category: 'desserts',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 17,
                reference: 'SRS12KUU5KW',
                length: 932,
                height: 904,
                depth: 81,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 144,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 71,
                name: 'Aenean egestas hendrerit neque.',
                description:
                    'erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae',
                price: 6177,
                category: 'noodles',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 2,
                reference: 'OKL55FSG5MB',
                length: 813,
                height: 243,
                depth: 407,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 76,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 72,
                name: 'elit. Etiam laoreet, libero',
                description: 'elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae',
                price: 5747,
                category: 'soups',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 23,
                reference: 'WPH73GEA3ES',
                length: 851,
                height: 529,
                depth: 87,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 193,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 73,
                name: 'consequat auctor, nunc',
                description:
                    'dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum',
                price: 5333,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 18,
                reference: 'ANQ78FOA5OO',
                length: 828,
                height: 79,
                depth: 948,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 47,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 74,
                name: 'vitae, sodales at,',
                description:
                    'congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat.',
                price: 5983,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 1,
                reference: 'VRU27DPB7WK',
                length: 991,
                height: 368,
                depth: 966,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 24,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 75,
                name: 'penatibus et magnis',
                description:
                    'Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum',
                price: 7557,
                category: 'stews',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 22,
                reference: 'OEG31XKV2GE',
                length: 198,
                height: 176,
                depth: 795,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 11,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 76,
                name: 'orci, consectetuer',
                description: 'felis. Nulla tempor augue ac ipsum.',
                price: 5915,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 16,
                reference: 'OUI66VEV8WJ',
                length: 579,
                height: 559,
                depth: 54,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 122,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 77,
                name: 'magnis dis parturient',
                description:
                    'sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero',
                price: 5317,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 9,
                reference: 'UUF62VQK9OM',
                length: 330,
                height: 645,
                depth: 524,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 80,
                rating: 5,
                createdAt: new Date()
            },
            {
                id: 78,
                name: 'libero mauris, aliquam',
                description:
                    'hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus',
                price: 1935,
                category: 'sandwiches',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 3,
                reference: 'VUY46CEH0LD',
                length: 336,
                height: 234,
                depth: 231,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 175,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 79,
                name: 'magna. Sed',
                description:
                    'et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam',
                price: 3780,
                category: 'desserts',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 12,
                reference: 'XFF98IDL1FP',
                length: 697,
                height: 627,
                depth: 494,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 179,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 80,
                name: 'sodales elit erat vitae',
                description:
                    'vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum',
                price: 4344,
                category: 'noodles',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 10,
                reference: 'GTE78IJB7TB',
                length: 895,
                height: 25,
                depth: 89,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 177,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 81,
                name: 'elit, pretium et,',
                description:
                    'in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim.',
                price: 4221,
                category: 'sandwiches',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 6,
                reference: 'FVB40YRX7LO',
                length: 846,
                height: 688,
                depth: 532,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 116,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 82,
                name: 'risus varius orci, in',
                description:
                    'lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis',
                price: 5143,
                category: 'noodles',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 17,
                reference: 'VQB72OMV6NU',
                length: 510,
                height: 778,
                depth: 478,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 56,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 83,
                name: 'et,',
                description:
                    'Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed',
                price: 1788,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 4,
                reference: 'VKN28QRC6HL',
                length: 872,
                height: 264,
                depth: 556,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 94,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 84,
                name: 'morbi tristique',
                description: 'nec metus',
                price: 6862,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 4,
                reference: 'CSH07USA0XW',
                length: 316,
                height: 390,
                depth: 913,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 129,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 85,
                name: 'sodales purus, in',
                description:
                    'erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc',
                price: 7054,
                category: 'noodles',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 23,
                reference: 'ICF15ETP9CL',
                length: 609,
                height: 294,
                depth: 298,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 73,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 86,
                name: 'amet',
                description:
                    'ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo.',
                price: 7406,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 22,
                reference: 'RWV34VYB1LG',
                length: 266,
                height: 138,
                depth: 892,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 45,
                rating: 3,
                createdAt: new Date()
            },
            {
                id: 87,
                name: 'facilisis lorem',
                description: 'mus. Aenean eget magna. Suspendisse tristique',
                price: 7214,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 16,
                reference: 'APE61YFC3OV',
                length: 872,
                height: 831,
                depth: 445,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 134,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 88,
                name: 'lacus, varius',
                description: 'odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor',
                price: 9184,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'yellow',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 24,
                reference: 'VPF75OFW0GJ',
                length: 389,
                height: 212,
                depth: 774,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 53,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 89,
                name: 'Suspendisse commodo tincidunt nibh.',
                description:
                    'non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium',
                price: 4552,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 15,
                reference: 'BOD75PKG8PB',
                length: 514,
                height: 733,
                depth: 774,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 172,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 90,
                name: 'dolor sit',
                description:
                    'orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus',
                price: 4633,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'indigo',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 5,
                reference: 'CAK75EOY3LE',
                length: 148,
                height: 999,
                depth: 996,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 20,
                rating: 2,
                createdAt: new Date()
            },
            {
                id: 91,
                name: 'Nam ac nulla.',
                description: 'vitae velit egestas lacinia. Sed congue,',
                price: 4643,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 12,
                reference: 'TJE73QMD5RY',
                length: 666,
                height: 909,
                depth: 976,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 84,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 92,
                name: 'a feugiat',
                description:
                    'diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet,',
                price: 4614,
                category: 'seafood',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 7,
                reference: 'FQS72WZG6HV',
                length: 779,
                height: 77,
                depth: 856,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 139,
                rating: 0,
                createdAt: new Date()
            },
            {
                id: 93,
                name: 'mollis. Phasellus',
                description: 'eu turpis. Nulla aliquet. Proin velit. Sed',
                price: 424,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'green',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 5,
                reference: 'MYQ41VLF5BT',
                length: 383,
                height: 680,
                depth: 432,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 146,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 94,
                name: 'felis. Nulla tempor',
                description:
                    'pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
                price: 2645,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 12,
                reference: 'EGI84UPG7GL',
                length: 368,
                height: 783,
                depth: 438,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 156,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 95,
                name: 'Nunc ut',
                description:
                    'ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum',
                price: 5065,
                category: 'stews',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 18,
                reference: 'WQP11MOJ6LY',
                length: 804,
                height: 388,
                depth: 460,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 100,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 96,
                name: 'arcu.',
                description:
                    'Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a,',
                price: 7962,
                category: 'noodles',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'blue',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 24,
                reference: 'YHU58UBH7DO',
                length: 709,
                height: 415,
                depth: 216,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 16,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 97,
                name: 'Proin',
                description: 'luctus sit amet, faucibus ut, nulla.',
                price: 9500,
                category: 'pasta',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 22,
                reference: 'QLI52TCE3BQ',
                length: 883,
                height: 697,
                depth: 206,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 72,
                rating: 4,
                createdAt: new Date()
            },
            {
                id: 98,
                name: 'a nunc. In at',
                description: 'adipiscing elit. Etiam laoreet, libero et tristique',
                price: 7491,
                category: 'pies',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'orange',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 2,
                reference: 'FWJ24JNO3HM',
                length: 61,
                height: 96,
                depth: 496,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 54,
                rating: 5,
                createdAt: new Date()
            },
            {
                id: 99,
                name: 'erat, in',
                description: 'sodales purus, in',
                price: 140,
                category: 'salads',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'violet',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 16,
                reference: 'WUK18KHM6RR',
                length: 555,
                height: 958,
                depth: 564,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 139,
                rating: 1,
                createdAt: new Date()
            },
            {
                id: 100,
                name: 'placerat, augue. Sed molestie.',
                description: 'Nunc mauris. Morbi non sapien molestie',
                price: 5038,
                category: 'cereals',
                images: [
                    {
                        title: 'image 1',
                        alt: 'image 1',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    },
                    {
                        title: 'image 2',
                        alt: 'image 2',
                        url: 'https://picsum.photos/seed/picsum/400/400',
                        thumbnail: 'https://picsum.photos/seed/picsum/400/400'
                    }
                ],
                colors: ['gray', 'green', 'blue', 'red'],
                color: 'red',
                sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                stock: 1,
                reference: 'XTB86DTB1FQ',
                length: 613,
                height: 329,
                depth: 33,
                composition: '100% cuir de veau, intérieur : 100% cuir d"agneau',
                quantity: 0,
                imageCard: 'https://picsum.photos/seed/picsum/400/400',
                status: 'Nouveau',
                note: 162,
                rating: 3,
                createdAt: new Date()
            }
        ],
        testimonials: [
            {
                title: 'title 1',
                description: 'description testimonial 1',
                note: 5,
                user: {
                    id: 2,
                    username: 'johndoe',
                    firstname: 'John',
                    lastname: 'Doe',
                    email: 'johndoe@me.com',
                    password: 'password',
                    phone: '0606060606',
                    status: 'active',
                    role: 'client',
                    certification: 'standard',
                    avatar: ''
                }
            },
            {
                title: 'title 2',
                description: 'description testimonial 2',
                note: 4,
                user: {
                    id: 3,
                    username: 'janedoe',
                    firstname: 'Jane',
                    lastname: 'Doe',
                    email: 'janedoe@me.com',
                    password: 'password',
                    phone: '0707070707',
                    status: 'active',
                    role: 'client',
                    certification: 'standard',
                    avatar: ''
                }
            }
        ]
    }
]
