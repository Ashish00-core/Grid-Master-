import React, { useState } from 'react';
import { 
  FileSpreadsheet, Sparkles, CheckCircle2, Eye, ShieldCheck, 
  Home, Building2, Sun, Zap, Cpu, Award, Download, ArrowRight, X
} from 'lucide-react';
import { DESIGN_SAMPLES } from '../data/solarData';

export default function DesignSamples({ onOpenBooking }) {
  const [filter, setFilter] = useState('all'); // 'all', 'Residential', 'Commercial'
  const [selectedSample, setSelectedSample] = useState(null);

  const filteredSamples = DESIGN_SAMPLES.filter(s => {
    if (filter === 'Residential') return s.type.includes('Residential');
    if (filter === 'Commercial') return s.type.includes('Commercial');
    return true;
  });

  return (
    <section id="design-samples" className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Engineering Portfolio & Case Samples
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            Solar Designing <span className="solar-gradient-text">Samples & CAD Blueprints</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Explore our real-world 3D layout blueprints, shading path models, and single line diagrams created by Head Engineer <strong className="text-amber-400">GANDHAMANENI GOUTHAM</strong> and Solar Designer <strong className="text-amber-300">Ashish Kumar</strong>.
          </p>

          {/* Filter Buttons */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mt-8 gap-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('Residential')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === 'Residential'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Residential Homes</span>
            </button>
            <button
              onClick={() => setFilter('Commercial')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === 'Commercial'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial Buildings</span>
            </button>
          </div>
        </div>

        {/* Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              className="rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center gap-1.5">
                      {sample.type.includes('Home') ? <Home className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                      {sample.type}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-mono font-bold text-xs">
                      {sample.capacity}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest">
                      Client: {sample.client}
                    </p>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {sample.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sample.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-sans block">Annual Generation</span>
                      <span className="text-amber-300 font-bold">{sample.estGeneration}</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-sans block">CO2 Offset Yield</span>
                      <span className="text-emerald-400 font-bold">{sample.co2Saved}</span>
                    </div>
                  </div>

                  {/* Design Team Sign-Off Tag */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Lead Design Approver</span>
                      <span className="text-amber-400 font-semibold">{sample.leadDesigner}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">Solar Designer</span>
                      <span className="text-slate-200 font-medium">{sample.coDesigner}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setSelectedSample(sample)}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/10"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect CAD Blueprint & SLD</span>
                </button>

                <button
                  onClick={() => onOpenBooking(`Custom Design inspired by ${sample.title}`)}
                  className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
                  title="Request Similar Design"
                >
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* DETAILED CAD BLUEPRINT MODAL */}
      {selectedSample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setSelectedSample(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Engineering CAD Blueprint & Single Line Diagram (SLD)
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Project Code: GM-CAD-{selectedSample.id.toUpperCase()}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {selectedSample.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Client: <strong className="text-amber-400">{selectedSample.client}</strong> • Type: {selectedSample.type}
            </p>

            {/* Main Interactive CAD Blueprint Render Box */}
            <div className="mt-6 rounded-2xl bg-slate-950 border-2 border-amber-500/30 p-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">GRID MASTER CAD VIEWER v4.2</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/20">
                    STATUS: AUDITED & CERTIFIED
                  </span>
                </div>
              </div>

              {/* Simulated Electrical Schematics & 3D layout diagram */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <img 
                    src={selectedSample.image} 
                    alt="CAD Solar Array Layout" 
                    className="w-full h-56 object-cover rounded-xl border border-slate-800"
                  />
                  <p className="text-[10px] font-mono text-center text-slate-400 mt-2">
                    Fig 1.1: 3D Rooftop Ray-Tracing & Sun Path Shading Map
                  </p>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Total DC Solar Capacity:</span>
                    <span className="text-amber-400 font-bold">{selectedSample.capacity}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Panel Specifications:</span>
                    <span className="text-white">{selectedSample.panels}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Inverter Architecture:</span>
                    <span className="text-white">{selectedSample.inverter}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Energy Storage Bank:</span>
                    <span className="text-amber-300">{selectedSample.storage}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Roof Pitch & Azimuth:</span>
                    <span className="text-slate-200">{selectedSample.technicalDetails.roofPitch}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">String Inverter Configuration:</span>
                    <span className="text-slate-200">{selectedSample.technicalDetails.stringConfiguration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">MPPT Peak Efficiency:</span>
                    <span className="text-emerald-400 font-bold">{selectedSample.technicalDetails.mpptEfficiency}</span>
                  </div>
                </div>
              </div>

              {/* Signature Seal Banner */}
              <div className="mt-6 pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                    GM
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-white">Engineering Approval Seal</p>
                    <p className="text-amber-400">GANDHAMANENI GOUTHAM — Head Engineer (Solar & Electrical)</p>
                    <p className="text-slate-400 text-[10px]">Co-Designed by Ashish Kumar (Solar Designer)</p>
                  </div>
                </div>

                <div className="text-right font-serif italic text-amber-300 text-sm border-b border-amber-400/40 px-2">
                  G. Goutham, M.Tech
                </div>
              </div>

            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                Want a similar custom CAD blueprint designed specifically for your rooftop?
              </p>

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const blueprintText = `GRID MASTER CAD SAMPLE:\n${selectedSample.title}\nCapacity: ${selectedSample.capacity}\nLead Engineer: GANDHAMANENI GOUTHAM\nSolar Designer: Ashish Kumar`;
                    navigator.clipboard.writeText(blueprintText);
                    alert("Blueprint specs copied to clipboard!");
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  Copy Specs
                </button>

                <button
                  onClick={() => {
                    setSelectedSample(null);
                    onOpenBooking(`Custom Solar CAD Blueprint like ${selectedSample.title}`);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all"
                >
                  Book My Custom Design
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
