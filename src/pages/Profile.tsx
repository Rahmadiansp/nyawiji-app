import { User, Mail, Phone, MapPin, Briefcase, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header Profile */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 h-32"></div>
        
        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 mb-6">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <div className="w-32 h-32 rounded-full bg-amber-100 flex items-center justify-center">
                <User className="w-16 h-16 text-amber-700" />
              </div>
            </div>
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-gray-900">Rahmadian Setyo Purnomo</h1>
              <p className="text-gray-600">Mahasiswa / Developer</p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Informasi Akademik */}
            <Card>
              <CardHeader>
                <h2 className="text-gray-900 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-amber-700" />
                  Informasi Akademik
                </h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <div className="text-gray-600 w-24 flex-shrink-0">NIM</div>
                  <div className="text-gray-900">21120123140165</div>
                </div>
                <div className="flex items-start">
                  <div className="text-gray-600 w-24 flex-shrink-0">Kelompok</div>
                  <div className="text-gray-900">5</div>
                </div>
                <div className="flex items-start">
                  <div className="text-gray-600 w-24 flex-shrink-0">Program</div>
                  <div className="text-gray-900">Progressive Web App</div>
                </div>
              </CardContent>
            </Card>

            {/* Informasi Kontak */}
            <Card>
              <CardHeader>
                <h2 className="text-gray-900 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-amber-700" />
                  Informasi Kontak
                </h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <div className="text-gray-900">rahmadiansp234@students.undip.ac.id</div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <div className="text-gray-900">+62 812-3456-7890</div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                  <div className="text-gray-900">Semarang, Jawa Tengah</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tentang Proyek */}
          <Card>
            <CardHeader>
              <h2 className="text-gray-900 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-amber-700" />
                Tentang Proyek
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Nyawiji</strong> adalah aplikasi Progressive Web App (PWA) 
                untuk marketplace penjualan batik UMKM Indonesia. Aplikasi ini dikembangkan menggunakan teknologi 
                modern seperti Vite, ReactJS, dan Tailwind CSS.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-700 p-4 rounded">
                <h3 className="text-amber-900 mb-2">Fitur Utama:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Katalog produk batik dari berbagai daerah</li>
                  <li>Pencarian dan filter produk</li>
                  <li>Tambah produk dengan upload foto</li>
                  <li>Detail produk lengkap</li>
                  <li>Desain responsif dan user-friendly</li>
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Vite</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">PWA</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">TypeScript</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
