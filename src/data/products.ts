export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  sold: number;
  category: string;
  description: string;
  stock: number;
  seller: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Batik Tulis Parang Klasik",
    price: 450000,
    image: "https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwYmF0aWslMjBmYWJyaWMlMjBwYXR0ZXJufGVufDF8fHx8MTc2MzI3MTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Yogyakarta",
    rating: 4.9,
    sold: 156,
    category: "Kain Batik",
    description: "Batik tulis halus dengan motif parang klasik. Dibuat dengan teknik tradisional menggunakan canting dan malam. Cocok untuk acara formal dan resmi.",
    stock: 25,
    seller: "Batik Nusantara"
  },
  {
    id: 2,
    name: "Batik Cap Mega Mendung",
    price: 280000,
    image: "https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHRleHRpbGUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjMyNzE0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Cirebon",
    rating: 4.8,
    sold: 203,
    category: "Kain Batik",
    description: "Batik cap dengan motif mega mendung khas Cirebon. Warna cerah dan motif yang indah, cocok untuk berbagai keperluan.",
    stock: 40,
    seller: "Batik Cirebon Heritage"
  },
  {
    id: 3,
    name: "Dress Batik Modern Casual",
    price: 350000,
    image: "https://images.unsplash.com/photo-1749677546513-f223050f1d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGRyZXNzJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzMjcxNDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Jakarta",
    rating: 4.7,
    sold: 89,
    category: "Pakaian Jadi",
    description: "Dress batik modern dengan desain casual yang nyaman untuk kegiatan sehari-hari. Bahan katun premium yang adem dan tidak mudah kusut.",
    stock: 30,
    seller: "Batik Fashion House"
  },
  {
    id: 4,
    name: "Kemeja Batik Pria Lengan Panjang",
    price: 320000,
    image: "https://images.unsplash.com/photo-1760457356908-807c70c1ebd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHNoaXJ0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjMyNzE0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Solo",
    rating: 4.9,
    sold: 312,
    category: "Pakaian Jadi",
    description: "Kemeja batik pria lengan panjang dengan motif kawung. Cocok untuk acara formal maupun casual. Bahan katun halus dan nyaman dipakai.",
    stock: 50,
    seller: "Batik Solo Makmur"
  },
  {
    id: 5,
    name: "Batik Tulis Truntum Premium",
    price: 580000,
    image: "https://images.unsplash.com/photo-1761516659547-3000a0b1c0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZhYnJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzYzMjcxNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Yogyakarta",
    rating: 5.0,
    sold: 67,
    category: "Kain Batik",
    description: "Batik tulis premium dengan motif truntum yang sangat detail. Kualitas terbaik dengan pewarnaan alami. Cocok untuk acara pernikahan dan acara penting.",
    stock: 15,
    seller: "Batik Nusantara"
  },
  {
    id: 6,
    name: "Selendang Batik Sutra",
    price: 220000,
    image: "https://images.unsplash.com/photo-1759599870816-8419bf6b58a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHNjYXJmJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzYzMjcxNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Pekalongan",
    rating: 4.8,
    sold: 124,
    category: "Aksesoris",
    description: "Selendang batik dari bahan sutra halus dengan motif elegan. Bisa digunakan untuk berbagai acara formal maupun casual.",
    stock: 35,
    seller: "Batik Pekalongan Indah"
  },
  {
    id: 7,
    name: "Batik Cap Kawung Modern",
    price: 295000,
    image: "https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwYmF0aWslMjBmYWJyaWMlMjBwYXR0ZXJufGVufDF8fHx8MTc2MzI3MTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Solo",
    rating: 4.7,
    sold: 178,
    category: "Kain Batik",
    description: "Batik cap dengan motif kawung yang dimodernisasi. Perpaduan motif tradisional dengan warna-warna kontemporer.",
    stock: 45,
    seller: "Batik Solo Makmur"
  },
  {
    id: 8,
    name: "Kemeja Batik Wanita Casual",
    price: 275000,
    image: "https://images.unsplash.com/photo-1749677546513-f223050f1d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGRyZXNzJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzMjcxNDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Jakarta",
    rating: 4.6,
    sold: 145,
    category: "Pakaian Jadi",
    description: "Kemeja batik wanita dengan model casual dan modern. Nyaman untuk aktivitas sehari-hari dengan tetap terlihat stylish.",
    stock: 38,
    seller: "Batik Fashion House"
  }
];
