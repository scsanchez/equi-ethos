import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <span className="font-bold">Equi-ethos</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#whatwedo" className="py-5 px-3 hover:text-gray-900">¿Qué hacemos?</a>
              <a href="#workshops" className="py-5 px-3 hover:text-gray-900">Nuestros talleres</a>
              <a href="#contact" className="py-5 px-3 hover:text-gray-900">Contacto</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
         <a href="#whatwedo"className="block py-2 px-4 text-sm hover:bg-gray-700">¿Qué hacemos?</a>
        <a href="#workshops" className="block py-2 px-4 text-sm hover:bg-gray-700">Nuestros talleres</a>
        <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-700">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
