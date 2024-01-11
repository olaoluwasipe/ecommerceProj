export const data: FashionStoreData = {
    "categories": [
      {
        "id": 1,
        "image": 'https://uomo-html.flexkitux.com/images/home/demo3/category_3.png',
        "name": "Men's Clothing",
        "subcategories": [
          {
            "id": 101,
            "name": "T-Shirts"
          },
          {
            "id": 102,
            "name": "Jeans"
          },
          {
            "id": 103,
            "name": "Jackets"
          }
        ]
      },
      {
        "id": 2,
        "image": 'https://uomo-html.flexkitux.com/images/home/demo3/category_3.png',
        "name": "Women's Clothing",
        "subcategories": [
          {
            "id": 201,
            "name": "Dresses"
          },
          {
            "id": 202,
            "name": "Skirts"
          },
          {
            "id": 203,
            "name": "Blouses"
          }
        ]
      },
      {
        "id": 3,
        "image": 'https://uomo-html.flexkitux.com/images/home/demo3/category_3.png',
        "name": "Footwear",
        "subcategories": [
          {
            "id": 301,
            "name": "Sneakers"
          },
          {
            "id": 302,
            "name": "Boots"
          },
          {
            "id": 303,
            "name": "Sandals"
          }
        ]
      },
      {
        "id": 4,
        "image": 'https://uomo-html.flexkitux.com/images/home/demo3/category_3.png',
        "name": "Accessories",
        "subcategories": [
          {
            "id": 401,
            "name": "Hats"
          },
          {
            "id": 402,
            "name": "Scarves"
          },
          {
            "id": 403,
            "name": "Bags"
          }
        ]
      }
    ]
  }

  // Define the types for your data
interface Subcategory {
  id: number;
  name: string;
}

interface Category {
  id: number;
  image: string;
  name: string;
  subcategories: Subcategory[];
}

interface FashionStoreData {
  categories: Category[];
}

// Create a prop interface for your component
interface FashionStoreComponentProps {
  data: FashionStoreData;
}
  