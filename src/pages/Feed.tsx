import { useState } from 'react';

interface Post {
  id: number;
  user: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  product?: {
    name: string;
    price: number;
    image: string;
  };
}

export default function Feed() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      user: "Carol Dinkley",
      image: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg",
      likes: 23,
      comments: 34,
      caption: "Missing this trip. Hope to see you guys soon...",
      product: {
        name: "Mango Man Shirt",
        price: 140.00,
        image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg"
      }
    }
  ]);

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow">
          <div className="p-4 flex items-center">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.user}`}
              alt={post.user}
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 font-medium">{post.user}</span>
          </div>
          
          <img src={post.image} alt="" className="w-full" />
          
          <div className="p-4">
            <div className="flex space-x-4 mb-4">
              <button className="flex items-center space-x-1">
                <span>❤️</span>
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1">
                <span>💬</span>
                <span>{post.comments}</span>
              </button>
            </div>
            
            <p className="text-gray-800">{post.caption}</p>
            
            {post.product && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={post.product.image}
                    alt={post.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">{post.product.name}</h3>
                    <p className="text-gray-600">₹{post.product.price}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}