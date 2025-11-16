import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  sold: number;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  location,
  rating,
  sold,
  category,
}: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="inline-block px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs mb-2">
            {category}
          </div>
          <h3 className="text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
            {name}
          </h3>
          <div className="text-amber-700 mb-2">
            Rp {price.toLocaleString('id-ID')}
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{rating}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Terjual {sold}
          </div>
        </div>
      </div>
    </Link>
  );
}
