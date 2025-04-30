
export interface Product {
  id: number;
  name: string;
  price: number;
  salePrice: number;
  image: string;
  description: string;
}

export const saleProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    salePrice: 199.99,
    image: "/placeholder.svg",
    description: "Experience crystal-clear audio with our premium noise-cancelling headphones. Limited-time offer!"
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: 149.99,
    salePrice: 99.99,
    image: "/placeholder.svg",
    description: "Track your fitness goals with advanced health monitoring features. Water-resistant and long battery life."
  }
];
