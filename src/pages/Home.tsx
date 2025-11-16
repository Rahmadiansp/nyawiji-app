import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState('all');

  const categories = ['Semua', 'Kain Batik', 'Pakaian Jadi', 'Aksesoris'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
      
      let matchesPrice = true;
      if (priceRange === 'low') {
        matchesPrice = product.price < 300000;
      } else if (priceRange === 'medium') {
        matchesPrice = product.price >= 300000 && product.price < 500000;
      } else if (priceRange === 'high') {
        matchesPrice = product.price >= 500000;
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sorting
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      filtered.sort((a, b) => b.sold - a.sold);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-amber-50 mb-2">Selamat Datang di Nyawiji</h1>
        <p className="text-amber-100 max-w-2xl">
          Marketplace Batik UMKM Indonesia - Temukan batik berkualitas langsung dari pengrajin lokal
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Cari produk batik..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleFilterChange();
              }}
            />
          </div>
          <Select
            value={sortBy}
            onValueChange={(value: string) => {
              setSortBy(value);
              handleFilterChange();
            }}
          >
            <SelectTrigger className="sm:w-[200px] w-full">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="popular">Terpopuler</SelectItem>
              <SelectItem value="rating">Rating Tertinggi</SelectItem>
              <SelectItem value="price-asc">Harga Terendah</SelectItem>
              <SelectItem value="price-desc">Harga Tertinggi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category and Price Filter */}
        <div className="flex gap-4 flex-wrap items-center">
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  handleFilterChange();
                }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
          
          <Select
            value={priceRange}
            onValueChange={(value: string) => {
              setPriceRange(value);
              handleFilterChange();
            }}
          >
            <SelectTrigger className="sm:w-[180px] w-full">
              <SelectValue placeholder="Rentang Harga" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Harga</SelectItem>
              <SelectItem value="low">&lt; Rp 300.000</SelectItem>
              <SelectItem value="medium">Rp 300.000 - 500.000</SelectItem>
              <SelectItem value="high">&gt; Rp 500.000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-900">Produk Batik</h2>
          <span className="text-gray-600">{filteredAndSortedProducts.length} produk</span>
        </div>
        
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? 'default' : 'outline'}
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? 'bg-amber-700 hover:bg-amber-800' : ''}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">Tidak ada produk yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}