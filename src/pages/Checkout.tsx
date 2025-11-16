import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CreditCard, Wallet, Building2, CheckCircle2, MapPin, User, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { toast } from 'sonner';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  });

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
    
    if (!paymentMethod) {
      toast.error('Pilih metode pembayaran terlebih dahulu');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast.error('Mohon lengkapi data pengiriman');
      return;
    }

    // Simulasi pembayaran
    toast.success('Pesanan berhasil dibuat!');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-gray-900 mb-2">Keranjang Kosong</h2>
          <p className="text-gray-600 mb-6">
            Tidak ada produk untuk checkout
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
      <h1 className="text-gray-900 mb-6">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-amber-700" />
                Informasi Pengiriman
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="name">Nama Lengkap *</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      className="pl-10"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Nomor Telepon *</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      className="pl-10"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="address">Alamat Lengkap *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Jalan, nomor rumah, RT/RW"
                    rows={3}
                    className="mt-1"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="city">Kota *</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Nama kota"
                    className="mt-1"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="postalCode">Kode Pos</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    placeholder="12345"
                    className="mt-1"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="notes">Catatan Pesanan (Opsional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Catatan untuk penjual..."
                    rows={2}
                    className="mt-1"
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-gray-900 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-amber-700" />
                Metode Pembayaran
              </h2>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  {/* Bank Transfer */}
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer" className="flex items-center cursor-pointer flex-1">
                      <Building2 className="w-5 h-5 mr-3 text-blue-600" />
                      <div className="flex-1">
                        <div className="text-gray-900">Transfer Bank</div>
                        <div className="text-sm text-gray-500">BCA, BNI, Mandiri, BRI</div>
                      </div>
                    </Label>
                  </div>

                  {/* E-Wallet */}
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="e-wallet" id="e-wallet" />
                    <Label htmlFor="e-wallet" className="flex items-center cursor-pointer flex-1">
                      <Wallet className="w-5 h-5 mr-3 text-green-600" />
                      <div className="flex-1">
                        <div className="text-gray-900">E-Wallet</div>
                        <div className="text-sm text-gray-500">GoPay, OVO, Dana, ShopeePay</div>
                      </div>
                    </Label>
                  </div>

                  {/* Credit Card */}
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center cursor-pointer flex-1">
                      <CreditCard className="w-5 h-5 mr-3 text-purple-600" />
                      <div className="flex-1">
                        <div className="text-gray-900">Kartu Kredit/Debit</div>
                        <div className="text-sm text-gray-500">Visa, Mastercard, JCB</div>
                      </div>
                    </Label>
                  </div>

                  {/* COD */}
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex items-center cursor-pointer flex-1">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-amber-600" />
                      <div className="flex-1">
                        <div className="text-gray-900">Bayar di Tempat (COD)</div>
                        <div className="text-sm text-gray-500">Bayar saat barang diterima</div>
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-gray-900 mb-4">Ringkasan Pesanan</h2>
              
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 text-sm">
                    <div className="text-gray-600">{item.quantity}x</div>
                    <div className="flex-1">
                      <div className="text-gray-900 line-clamp-1">{item.name}</div>
                      <div className="text-gray-600">Rp {item.price.toLocaleString('id-ID')}</div>
                    </div>
                    <div className="text-gray-900">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3 space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rp {getTotalPrice().toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Ongkos Kirim</span>
                  <span className="text-green-600">GRATIS</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Biaya Layanan</span>
                  <span>Rp 1.000</span>
                </div>
              </div>

              <div className="border-t pt-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900">Total Pembayaran</span>
                  <span className="text-amber-700">
                    Rp {(getTotalPrice() + 1000).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800"
              >
                Bayar Sekarang
              </Button>

              <Button
                type="button"
                onClick={() => navigate('/cart')}
                variant="outline"
                className="w-full mt-2"
              >
                Kembali ke Keranjang
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
