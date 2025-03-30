
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/6c33e98a-0ef7-4964-bbe9-e15f00dd1e51.png" 
                alt="FundOra Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-2xl font-bold text-fundora-dark">
                Fund<span className="text-fundora-orange">Ora</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-fundora-orange font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-fundora-orange font-medium">
              About
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-fundora-orange font-medium">
              Features
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-fundora-orange font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-fundora-orange text-fundora-orange hover:bg-fundora-orange hover:text-white">
              Log in
            </Button>
            <Button className="bg-fundora-orange hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-fundora-orange"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-fundora-orange">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-fundora-orange">
              About
            </Link>
            <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-fundora-orange">
              Features
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-fundora-orange">
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-3">
              <Button variant="outline" className="w-full border-fundora-orange text-fundora-orange hover:bg-fundora-orange hover:text-white">
                Log in
              </Button>
            </div>
            <div className="mt-3 px-5 pb-3">
              <Button className="w-full bg-fundora-orange hover:bg-orange-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
