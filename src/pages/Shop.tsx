import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function Shop() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Pink Headphones",
      price: 199.99,
      image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg",
      description: "Premium wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Mango Man Shirt",
      price: 140.00,
      image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
      description: "Linen shirt loose fit"
    }
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600 mt-1">₹{product.price}</p>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <button className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}