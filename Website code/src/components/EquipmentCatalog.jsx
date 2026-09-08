import React, { useState } from 'react';
import { 
  ShoppingBag, Search, Filter, Star, CheckCircle2, Plus, 
  Trash2, ArrowRight, ShieldCheck, Tag, Info, Zap, ChevronRight 
} from 'lucide-react';
import { EQUIPMENT_CATALOG } from '../data/solarData';

export default function EquipmentCatalog({ onAddToQuote, selectedEquipment = [], onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Panels', 'Inverters', 'Batteries', 'Mounting', 'Accessories'];

  const filteredEquipment = EQUIPMENT_CATALOG.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalQuoteAmount = selectedEquipment.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <section id="equipment" className="py-20 sm:py-28 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <ShoppingBag className="w-3.5 h-3.5" />
            Solar Installation Equipment & Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            Tier-1 Solar Hardware <span className="solar-gradient-text">& Component Prices</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Explore authentic prices for high-efficiency N-type solar modules, smart hybrid inverters, LiFePO4 battery banks, and wind-tested racking systems certified by Grid Master.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-950 p-4 rounded-3xl border border-slate-800 mb-10">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search solar panels, inverters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => {
            const isAdded = selectedEquipment.some(e => e.id === item.id);

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Price Tag Header */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 font-bold text-[10px]">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="text-2xl font-black text-white font-mono">
                          ${item.price.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-slate-400 block -mt-1 font-mono">
                          {item.priceUnit}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-amber-500/20 px-2 py-0.5 rounded-lg border border-amber-500/30 text-amber-300 text-xs font-bold">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                      Category: {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Specs Box */}
                    <div className="mt-4 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                      <p className="text-[10px] text-amber-400 font-sans font-bold uppercase tracking-wider mb-0.5">
                        Technical Specs
                      </p>
                      {item.specs}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 border-t border-slate-900/80">
                  <button
                    onClick={() => onAddToQuote(item)}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                      isAdded
                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30'
                        : 'bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Added to System Quote</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add Equipment to Quote</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Equipment Quote Bar (If items selected) */}
        {selectedEquipment.length > 0 && (
          <div className="sticky bottom-6 mt-12 z-40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/50 p-4 sm:p-6 rounded-3xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                  {selectedEquipment.length}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Custom Solar Equipment Package Selected
                  </h4>
                  <p className="text-xs text-slate-300">
                    Estimated Component Total: <strong className="text-amber-400 text-base font-mono">${totalQuoteAmount.toLocaleString()}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onOpenBooking(`Custom Equipment Package (${selectedEquipment.length} items - Total $${totalQuoteAmount.toLocaleString()})`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Installation with Selected Equipment</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
