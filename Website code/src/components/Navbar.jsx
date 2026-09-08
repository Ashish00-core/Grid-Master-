import React, { useState, useEffect } from 'react';
import { Sun, Zap, Calendar, UserCheck, Shield, Phone, Menu, X, CreditCard } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function Navbar({ onOpenBooking, onOpenVisitingCard }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Design Samples', href: '#design-samples' },
    { name: 'Equipment & Prices', href: '#equipment' },
    { name: 'System Calculator', href: '#calculator' },
    { name: 'Engineering Team', href: '#team' },
    { name: 'Visiting Card', href: '#visiting-card' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl' 
        : 'bg-gradient-to-b from-slate-950/80 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sun className="w-6 h-6 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  GRID<span className="text-amber-400">MASTER</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 hidden sm:inline-block">
                  Solar Engineering
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">
                Design • Installation • Integration
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-amber-400 px-3 py-2 rounded-lg hover:bg-slate-900/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVisitingCard}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-amber-500/30 text-xs font-semibold text-amber-300 hover:bg-amber-500/10 hover:border-amber-400 transition-all shadow-sm"
              title="View Head Engineer Visiting Card"
            >
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              <span>G. Goutham's Card</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs xl:text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Integration</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenVisitingCard()}
              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 sm:hidden"
              title="Head Engineer Visiting Card"
            >
              <CreditCard className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 px-3 py-2 rounded-lg hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitingCard();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 text-sm font-semibold"
            >
              <CreditCard className="w-4 h-4 text-amber-400" />
              <span>G. Goutham's Visiting Card (Head Eng.)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Solar Installation / Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
