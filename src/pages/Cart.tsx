import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Trash2, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateCartQuantity, getTotalPrice } = useApp();

  const handleRemoveFromCart = (productId: number, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} dihapus dari keranjang`);
  };

  const handleIncreaseQuantity = (productId: number, currentQuantity: number, stock: number) => {
    if (currentQuantity < stock) {
      updateCartQuantity(productId, currentQuantity + 1);
    } else {
      toast.error('Stok tidak mencukupi');
    }
  };

  const handleDecreaseQuantity = (productId: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateCartQuantity(productId, currentQuantity - 1);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-gray-900 mb-2">Keranjang Kosong</h2>
          <p className="text-gray-600 mb-6">
            Belum ada produk dalam keranjang belanja Anda
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
      <h1 className="text-gray-900 mb-6">Keranjang Belanja</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex gap-4">
                <div
                  className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div
                    className="cursor-pointer"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <h3 className="text-gray-900 mb-1 hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-sm text-gray-600 mb-2">{item.category}</div>
                  </div>
                  <div className="text-amber-700 mb-3">
                    Rp {item.price.toLocaleString('id-ID')}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleIncreaseQuantity(item.id, item.quantity, item.stock)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveFromCart(item.id, item.name)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Hapus
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t flex justify-between items-center">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-900">
                  Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-gray-900 mb-4">Ringkasan Belanja</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Total Harga ({cart.reduce((sum, item) => sum + item.quantity, 0)} barang)</span>
                <span>Rp {getTotalPrice().toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Ongkos Kirim</span>
                <span className="text-green-600">GRATIS</span>
              </div>
            </div>

            <div className="border-t pt-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-900">Total Tagihan</span>
                <span className="text-amber-700">
                  Rp {getTotalPrice().toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            <Button
              onClick={() => navigate('/checkout')}
              className="w-full bg-amber-700 hover:bg-amber-800"
            >
              Lanjut ke Pembayaran
            </Button>

            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="w-full mt-2"
            >
              Lanjut Belanja
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
