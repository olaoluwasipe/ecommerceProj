export const data: FashionStoreData = {
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "description": "A high-quality product with amazing features.",
      "price": 49.99,
      "discount_price": 39.99,
      "images": ["https://uomo-html.flexkitux.com/images/home/demo3/product-5.jpg", "https://uomo-html.flexkitux.com/images/home/demo3/product-6.jpg"],
      "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "slug": "product-a",
      "stock": 100,
      "sku": "SKU123",
      "rating": 4.5,
      "brand": "Brand A",
      "category": 4,
      "featured": true
    },
    {
      "id": 2,
      "name": "Product B",
      "description": "Stylish and comfortable for everyday use.",
      "price": 29.99,
      "discount_price": null,
      "images": ["https://uomo-html.flexkitux.com/images/home/demo3/product-6.jpg", "https://uomo-html.flexkitux.com/images/home/demo3/product-7.jpg"],
      "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "slug": "product-b",
      "stock": 50,
      "sku": "SKU456",
      "rating": 4.0,
      "brand": "Brand B",
      "category": 2,
      "featured": false
    },
    {
      "id": 3,
      "name": "Product C",
      "description": "Powerful and efficient for professional use.",
      "price": 199.99,
      "discount_price": 179.99,
      "images": ["https://uomo-html.flexkitux.com/images/home/demo3/product-7.jpg", "https://uomo-html.flexkitux.com/images/home/demo3/product-4.jpg"],
      "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "slug": "product-c",
      "stock": 75,
      "sku": "SKU789",
      "rating": 4.8,
      "brand": "Brand C",
      "category": 3,
      "featured": true
    },
    {
      "id": 4,
      "name": "Product D",
      "description": "Elegant design with advanced features.",
      "price": 159.99,
      "discount_price": null,
      "images": ["https://uomo-html.flexkitux.com/images/home/demo3/product-9.jpg", "https://uomo-html.flexkitux.com/images/home/demo3/product-11.jpg"],
      "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "slug": "product-d",
      "stock": 120,
      "sku": "SKU987",
      "rating": 4.2,
      "brand": "Brand D",
      "category": 1,
      "featured": true
    },
    {
      "id": 5,
      "name": "Product E",
      "description": "Versatile and comfortable for any occasion.",
      "price": 79.99,
      "discount_price": 69.99,
      "images": ["https://uomo-html.flexkitux.com/images/home/demo3/product-11.jpg", "https://uomo-html.flexkitux.com/images/home/demo3/product-11.jpg"],
      "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "slug": "product-e",
      "stock": 90,
      "sku": "SKU654",
      "rating": 4.6,
      "brand": "Brand E",
      "category": 4,
      "featured": true
    },
    {
      "id": 6,
      "name": "Product F",
      "description": "High-performance device with advanced technology.",
      "price": 349.99,
      "discount_price": 299.99,
      "images": ["https://uomo-html.flexkitux.com/images/home/demo3/product-9.jpg", "https://uomo-html.flexkitux.com/images/home/demo3/product-10.jpg"],
      "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "slug": "product-f",
      "stock": 60,
      "sku": "SKU321",
      "rating": 4.9,
      "brand": "Brand F",
      "category": 3,
      "featured": true
    },
    {
      "id": 7,
      "name": "Product G",
      "description": "Classic and durable design for long-lasting use.",
      "price": 89.99,
      "discount_price": null,
      "images": ["https://uomo-html.flexkitux.com/images/home/demo3/product-10.jpg", "https://uomo-html.flexkitux.com/images/home/demo3/product-1-2.jpg"],
      "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "slug": "product-g",
      "stock": 80,
      "sku": "SKU987",
      "rating": 4.3,
      "brand": "Brand G",
      "category": 2,
      "featured": false
    },
    {
      "id": 8,
      "name": "Product H",
      "description": "Compact and portable for on-the-go convenience.",
      "price": 49.99,
      "discount_price": 44.99,
      "images": ["https://uomo-html.flexkitux.com/images/home/demo3/product-0-2.jpg", "https://uomo-html.flexkitux.com/images/home/demo3/product-2-2.jpg"],
      "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "slug": "product-h",
      "stock": 110,
      "sku": "SKU135",
      "rating": 4.0,
      "brand": "Brand H",
      "category": 1,
      "featured": false
    }
    // Add more products as needed...
  ]
}



  // Define the types for your data
interface Subcategory {
  id: number;
  name: string;
}

interface Product {
  id: number;
  images: Array<string>;
  name: string;
  description: string;
  price: number;
  discount_price: number | null;
  long_description: string;
  slug: string;
  sku: string;
  stock: number;
  brand: string;
  rating: number;
  category: number;
  featured: boolean;
}

interface FashionStoreData {
  products: Product[];
}

// Create a prop interface for your component
interface FashionStoreComponentProps {
  data: FashionStoreData;
}
  