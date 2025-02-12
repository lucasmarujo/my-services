// import React from 'react';
import adapitfy from './images/adapitfy.png'
import lumark from './images/lumark-profile.png'
import packia from './images/packia.png'
import { Github } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Adapitfy Cursos",
    price: "R$29.99",
    image: adapitfy,
    link: "https://pay.kiwify.com.br/lkjbC2H"
  },
  {
    id: 2,
    title: "Pack + de 600 IA's",
    price: "R$49.99",
    image: packia,
    link: "https://pay.kiwify.com.br/RYF8yfR"
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Profile Section */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-[90px] h-[90px] rounded-full border-2 border-green-500 overflow-hidden mb-2">
            <img
              src={lumark}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-medium text-gray-800">@lumark.ia</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-800 mb-1 group-hover:text-green-600 transition-colors truncate">
                  {product.title}
                </h3>
                <p className="text-green-600 font-semibold text-sm">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <a
            href="https://github.com/lucasmarujo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900 mt-2 sm:mt-0"
          >
            <Github className="w-5 h-5 mr-2" />
            <span>GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;