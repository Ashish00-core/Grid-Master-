import React from 'react';
import { Sun, Phone, Mail, MapPin, Award, ShieldCheck, Heart, CreditCard } from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/solarData';

export default function Footer({ onOpenBooking, onOpenVisitingCard }) {
  const headEngineer = TEAM_MEMBERS.find(m => m.id === 'g-gowtham');

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 p-0.5 shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <span className="text-2xl font-black text-white tracking-wider">
                GRID<span className="text-amber-400">MASTER</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2">
              <div className="p-3 rounded-2xl bg-slate-900 border border-amber-500/30 inline-flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white">Engineering Oversight</p>
                  <p className="text-amber-400">GANDHAMANENI GOUTHAM — Head Engineer (Solar & Electrical)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Website Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services Scope</a></li>
              <li><a href="#design-samples" className="hover:text-amber-400 transition-colors">Designing Samples & CAD</a></li>
              <li><a href="#equipment" className="hover:text-amber-400 transition-colors">Equipment & Prices</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Solar System Calculator</a></li>
              <li><a href="#team" className="hover:text-amber-400 transition-colors">Engineering Team</a></li>
            </ul>
          </div>

          {/* Col 4: Solar Scope */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Solar Purposes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><button onClick={() => onOpenBooking('Home Solar System')} className="hover:text-amber-400 transition-colors">Home Solar Systems</button></li>
              <li><button onClick={() => onOpenBooking('Building Solar System')} className="hover:text-amber-400 transition-colors">Building & Commercial Purpose</button></li>
              <li><button onClick={() => onOpenBooking('Hybrid Battery Storage')} className="hover:text-amber-400 transition-colors">Hybrid Battery Backup</button></li>
              <li><button onClick={() => onOpenBooking('High-Voltage Grid Integration')} className="hover:text-amber-400 transition-colors">High-Voltage Grid Integration</button></li>
              <li><button onClick={onOpenVisitingCard} className="text-amber-300 font-semibold flex items-center gap-1 hover:underline">
                <CreditCard className="w-3 h-3 text-amber-400" />
                <span>G. Goutham's Visiting Card</span>
              </button></li>
            </ul>
          </div>

          {/* Col 5: Headquarter Contact */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Grid Master HQ
            </h4>
            <ul className="space-y-3 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{COMPANY_INFO.directPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="truncate">goutham4518@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 font-sans text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Grid Master Solar Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Head Engineer: <strong className="text-amber-400">GANDHAMANENI GOUTHAM</strong></span>
            <span>•</span>
            <span>Solar Designer: <strong className="text-slate-300">Ashish Kumar</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
