import React from 'react';
import { 
  Sun, Shield, Zap, CheckCircle2, ArrowRight, Home, Building2, 
  Sparkles, Award, FileSpreadsheet, PhoneCall, Cpu 
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/solarData';

export default function Hero({ onOpenBooking, onOpenVisitingCard }) {
  const headEngineer = TEAM_MEMBERS.find(m => m.id === 'g-gowtham');
  const ashishEngineer = TEAM_MEMBERS.find(m => m.id === 'ashish');

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950">
      
      {/* Background Decorative Lighting & Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-lg shadow-amber-500/5">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="font-bold">GRID MASTER</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Advanced Solar Systems Engineering</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Solar Designing, <br />
              <span className="solar-gradient-text">Installation & Integration</span> <br />
              for Homes & Buildings.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Transform your property with precision 3D CAD rooftop layouts, yield simulation, equipment selection, and turnkey electrical grid integration. Lead engineered by <strong className="text-amber-400 font-semibold">GANDHAMANENI GOUTHAM</strong> (Head Engineer — Solar Designing Engineer & Electrical Engineer) and <strong className="text-amber-300 font-semibold">Ashish Kumar</strong> (Solar Designer Engineer).
            </p>

            {/* Quick Scope Badges: Home vs Building */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200">
                <Home className="w-4 h-4 text-amber-400" />
                <span>Home & Residential Solar</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Commercial Buildings & Microgrids</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Smart Energy Storage Integration</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Solar Installation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#design-samples"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <FileSpreadsheet className="w-5 h-5 text-amber-400" />
                <span>Explore Design Samples</span>
              </a>
            </div>

            {/* Engineering Leadership Banner (INITIAL BADGES, NO AVATARS) */}
            <div className="pt-4 border-t border-slate-800/80 mt-6 flex flex-col sm:flex-row items-center gap-4 text-left">
              <div className="flex -space-x-2">
                <div className="w-11 h-11 rounded-xl bg-amber-500 text-slate-950 font-black text-sm font-mono flex items-center justify-center border-2 border-slate-950 shadow-lg">
                  GG
                </div>
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-amber-300 font-black text-sm font-mono flex items-center justify-center border-2 border-slate-950 shadow-lg">
                  AK
                </div>
              </div>

              <div className="text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-400 text-sm">GANDHAMANENI GOUTHAM</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold text-[10px] border border-amber-500/30">
                    HEAD ENGINEER
                  </span>
                </div>
                <p className="text-slate-300">
                  Solar Designing Engineer & Electrical Engineer (Ph: +91 7200745180) • Supported by <strong className="text-white">Ashish Kumar</strong> (Solar Designer).
                </p>
                <button 
                  onClick={onOpenVisitingCard}
                  className="mt-1 text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 flex items-center gap-1"
                >
                  <span>View GANDHAMANENI GOUTHAM's Visiting Card</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Solar System Card / Interactive Preview Box */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 opacity-30 blur-xl"></div>

              <div className="relative rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl glass-panel">
                
                {/* Header inside card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                      Grid Master Interactive Engine
                    </span>
                    <h3 className="text-lg font-bold text-white">System Design Quick Matrix</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-amber-400" />
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 mt-0.5">
                      <Home className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Home Solar Systems</h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        5 kW to 20 kW residential hybrid designs, 100% electricity bill offsets & zero-maintenance battery banks.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Building & Industrial Purpose</h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        50 kW to 2+ MW commercial rooftop BIPV, high-voltage transformer hooks, and peak demand shaving.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Certified Engineering Seal</h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Every CAD design and Single Line Electrical Diagram is signed off by Head Engineer GANDHAMANENI GOUTHAM.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Metric Stats */}
                <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-slate-800 text-center">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-lg font-black text-amber-400">{COMPANY_INFO.projectsCompleted}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Projects</p>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-lg font-black text-amber-400">{COMPANY_INFO.totalMegawatts}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Capacity</p>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-lg font-black text-amber-400">{COMPANY_INFO.customerSatisfaction}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Satisfaction</p>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="mt-6 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs uppercase tracking-wider border border-amber-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Request Instant Site Inspection & Design</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
