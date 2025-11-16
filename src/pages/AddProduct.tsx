import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

export default function AddProduct() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    location: '',
    stock: '',
    description: '',
    seller: '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi form
    if (!formData.name || !formData.price || !formData.category || !imagePreview) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    // Simulasi tambah produk
    toast.success('Produk berhasil ditambahkan!');
    
    // Reset form
    setFormData({
      name: '',
      price: '',
      category: '',
      location: '',
      stock: '',
      description: '',
      seller: '',
    });
    setImagePreview(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-gray-900 mb-6">Tambah Produk Batik</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Upload Foto */}
          <div>
            <Label>Foto Produk *</Label>
            <div className="mt-2">
              {!imagePreview ? (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="mb-2 text-gray-600">
                      <span className="text-amber-700">Klik untuk upload</span> atau drag and drop
                    </p>
                    <p className="text-sm text-gray-500">PNG, JPG atau JPEG (MAX. 5MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Nama Produk */}
          <div>
            <Label htmlFor="name">Nama Produk *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Contoh: Batik Tulis Parang Klasik"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          {/* Kategori */}
          <div>
            <Label>Kategori *</Label>
            <Select
              value={formData.category}
              onValueChange={(value: string) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Kain Batik">Kain Batik</SelectItem>
                <SelectItem value="Pakaian Jadi">Pakaian Jadi</SelectItem>
                <SelectItem value="Aksesoris">Aksesoris</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Harga dan Stok */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Harga (Rp) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="0"
                value={formData.price}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="stock">Stok</Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                placeholder="0"
                value={formData.stock}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
          </div>

          {/* Lokasi dan Penjual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Lokasi</Label>
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="Contoh: Yogyakarta"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="seller">Nama Penjual</Label>
              <Input
                id="seller"
                name="seller"
                type="text"
                placeholder="Contoh: Batik Nusantara"
                value={formData.seller}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
          </div>

          {/* Deskripsi */}
          <div>
            <Label htmlFor="description">Deskripsi Produk</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Deskripsikan produk batik Anda..."
              rows={5}
              value={formData.description}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-amber-700 hover:bg-amber-800">
              Tambah Produk
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => {
                setFormData({
                  name: '',
                  price: '',
                  category: '',
                  location: '',
                  stock: '',
                  description: '',
                  seller: '',
                });
                setImagePreview(null);
              }}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
