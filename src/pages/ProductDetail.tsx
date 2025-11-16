import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { MapPin, Star, ShoppingCart, Heart, Share2, Store, Package, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useApp } from '../context/AppContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-gray-900 mb-4">Produk tidak ditemukan</h2>
        <Button onClick={() => navigate('/')}>Kembali ke Beranda</Button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link produk berhasil disalin!');
    }
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success('Produk dihapus dari wishlist!');
    } else {
      addToWishlist(product);
      toast.success('Produk ditambahkan ke wishlist!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-amber-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Kembali
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4">
            {product.category}
          </div>

          <h1 className="text-gray-900 mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mr-1" />
              <span className="text-gray-900">{product.rating}</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="text-gray-600">{product.sold} Terjual</div>
          </div>

          <div className="text-amber-700 mb-6">
            Rp {product.price.toLocaleString('id-ID')}
          </div>

          {/* Seller Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Store className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <div className="text-gray-900">{product.seller}</div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {product.location}
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Kunjungi Toko
              </Button>
            </div>
          </div>

          {/* Stock Info */}
          <div className="flex items-center text-gray-600 mb-6">
            <Package className="w-5 h-5 mr-2" />
            Stok: {product.stock} unit tersedia
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-gray-900 mb-2">Deskripsi Produk</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleWishlist}
              className={`flex-shrink-0 ${isWishlisted ? 'bg-red-50 border-red-200' : ''}`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleShare}
              className="flex-shrink-0"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button
              onClick={handleAddToCart}
              variant="outline"
              className="flex-1"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Keranjang
            </Button>
            <Button
              onClick={handleBuyNow}
              className="flex-1 bg-amber-700 hover:bg-amber-800"
            >
              Beli Sekarang
            </Button>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Kondisi</span>
              <span className="text-gray-900">Baru</span>
            </div>
            <div className="flex justify-between">
              <span>Berat</span>
              <span className="text-gray-900">500 gram</span>
            </div>
            <div className="flex justify-between">
              <span>Kategori</span>
              <span className="text-gray-900">{product.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-gray-900 mb-6">Produk Serupa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-900 mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="text-amber-700">
                    Rp {relatedProduct.price.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}