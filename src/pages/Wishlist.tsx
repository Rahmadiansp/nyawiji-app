import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Trash2, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export default function Wishlist() {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist, addToCart } = useApp();

  const handleRemoveFromWishlist = (productId: number, productName: string) => {
    removeFromWishlist(productId);
    toast.success(`${productName} dihapus dari wishlist`);
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Heart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-gray-900 mb-2">Wishlist Kosong</h2>
          <p className="text-gray-600 mb-6">
            Belum ada produk yang ditambahkan ke wishlist
          </p>
          <Button
            onClick={() => navigate('/')}
            className="bg-amber-700 hover:bg-amber-800"
          >
            Mulai Belanja
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-gray-900 mb-6">Wishlist Saya</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">{wishlist.length} produk dalam wishlist</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div
                className="aspect-square overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="inline-block px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-gray-900 mb-2 line-clamp-2 hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-amber-700 mb-3">
                    Rp {product.price.toLocaleString('id-ID')}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-amber-700 hover:bg-amber-800"
                    size="sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Keranjang
                  </Button>
                  <Button
                    onClick={() => handleRemoveFromWishlist(product.id, product.name)}
                    variant="outline"
                    size="sm"
                    className="border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
