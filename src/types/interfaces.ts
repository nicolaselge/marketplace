export interface MenuItem {
    title: string
    path: string
    icon?: string
    children?: MenuItem[]
}

export interface Total {
    subTotal: number;
    promocode: string;
    discount: number;
    shipping: number;
    total: number;
}

export interface Delivery {
    name: string;
    price: number;
    type: string | null;
    company?: string;
}

export interface Discount {
    code: string;
    value: number;
    isPercent: boolean;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    images: Image[];
    colors: string[];
    color: string;
    sizes: string[];
    stock: number;
    reference: string;
    length: number;
    height: number;
    depth: number;
    composition: string;
    quantity: number;
    imageCard: string;
    status: string,
    note: number,
    rating: number,
    createdAt: Date
}

export interface Image {
    title: string;
    alt: string;
    url: string;
    thumbnail: string;
}

export interface User {
    id: number
    username: string
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    avatar: string
    status: string
    role: 'admin' | 'client' | 'vendor'
    certification: string
  }