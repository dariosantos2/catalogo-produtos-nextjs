'use client';

import { Product } from '../data/products';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col">
      {/* Container da imagem com altura fixa */}
      <div className="h-40 overflow-hidden"> {/* 16rem = 160px */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-blue-600">
            R$ {product.price.toFixed(2)}
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;