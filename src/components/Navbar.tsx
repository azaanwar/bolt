import { Link } from 'react-router-dom';
import { HomeIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-pink-600">
            SocialShop
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-pink-600">
              <HomeIcon className="h-6 w-6" />
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-pink-600">
              <ShoppingBagIcon className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-pink-600">
              <UserCircleIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}