import { Link, useLocation } from 'react-router-dom';
import { Home, PlusCircle, User, ShoppingBag, ShoppingCart, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Header() {
  const location = useLocation();
  const { getTotalItems, wishlist } = useApp();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-amber-700" />
            <span className="text-amber-900">Nyawiji</span>
          </Link>
          
          <nav className="flex space-x-4 md:space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/') 
                  ? 'text-amber-700 bg-amber-50' 
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="hidden sm:inline">Beranda</span>
            </Link>
            
            <Link
              to="/add-product"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/add-product') 
                  ? 'text-amber-700 bg-amber-50' 
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <PlusCircle className="h-5 w-5" />
              <span className="hidden sm:inline">Tambah</span>
            </Link>

            <Link
              to="/wishlist"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors relative ${
                isActive('/wishlist') 
                  ? 'text-amber-700 bg-amber-50' 
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Heart className="h-5 w-5" />
              <span className="hidden sm:inline">Favorit</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors relative ${
                isActive('/cart') 
                  ? 'text-amber-700 bg-amber-50' 
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Keranjang</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                isActive('/profile') 
                  ? 'text-amber-700 bg-amber-50' 
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Profil</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}