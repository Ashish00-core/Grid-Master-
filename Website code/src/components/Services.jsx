import React, { useState } from 'react';
import { 
  Home, Building2, DraftingCompass, Wrench, Zap, 
  BatteryCharging, CheckCircle2, Shield, ArrowRight, Layers
} from 'lucide-react';
import { SERVICES_LIST } from '../data/solarData';

export default function Services({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'home', 'building'

  const filteredServices = SERVICES_LIST.filter(s => {
    if (activeTab === 'home') return s.forHome;
    if (activeTab === 'building') return s.forBuilding;
    return true;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            Engineering & Integration Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            Complete Solar Solutions for <br className="hidden sm:block" />
            <span className="solar-gradient-text">Homes & Commercial Buildings</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            From single-family rooftop designs to megawatt commercial building integration, Grid Master delivers end-to-end solar engineering, installation, and utility grid interconnection.
          </p>

          {/* Home vs Building Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800 mt-8 gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'home'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>For Homes</span>
            </button>
            <button
              onClick={() => setActiveTab('building')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'building'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Buildings</span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 group"
            >
              <div>
                {/* Header Icon & Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    {service.icon === 'DraftingCompass' && <DraftingCompass className="w-7 h-7" />}
                    {service.icon === 'Wrench' && <Wrench className="w-7 h-7" />}
                    {service.icon === 'Zap' && <Zap className="w-7 h-7" />}
                    {service.icon === 'BatteryCharging' && <BatteryCharging className="w-7 h-7" />}
                    {service.icon === 'Building2' && <Building2 className="w-7 h-7" />}
                  </div>

                  <div className="flex gap-1">
                    {service.forHome && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Home
                      </span>
                    )}
                    {service.forBuilding && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Building
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-amber-400 mt-1">
                  {service.subtitle}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-2 border-t border-slate-800/80 pt-4">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="mt-8 pt-4 border-t border-slate-800/60">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-amber-500/30 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Working Style & Execution Workflow Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 p-8 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Company Engineering Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              How Grid Master Executes Your Project
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Our 5-step engineering process ensures max solar efficiency, full regulatory safety compliance, and direct oversight by Head Engineer GANDHAMANENI GOUTHAM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center relative">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-3">
                1
              </span>
              <h4 className="text-sm font-bold text-white">3D Roof Audit</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Drone mapping, roof load calculation & shade path analysis.
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center relative">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-3">
                2
              </span>
              <h4 className="text-sm font-bold text-white">CAD Engineering</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                G. Goutham & Ashish Kumar draft single line diagrams & string specs.
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center relative">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-3">
                3
              </span>
              <h4 className="text-sm font-bold text-white">Equipment Pick</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Transparent component selection from Tier-1 panels & inverters.
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center relative">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-3">
                4
              </span>
              <h4 className="text-sm font-bold text-white">Precision Assembly</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Master electricians perform structural racking & DC/AC wiring.
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center relative">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-3">
                5
              </span>
              <h4 className="text-sm font-bold text-white">Grid Interconnection</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Bi-directional net metering setup & SCADA telemetry activation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
