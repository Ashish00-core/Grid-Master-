import React, { useState } from 'react';
import { 
  Calculator, Sun, Zap, DollarSign, Calendar, Clock, 
  CheckCircle2, ArrowRight, ShieldCheck, Home, Building2, Battery, Award 
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/solarData';

export default function SolarCalculator({ onOpenBooking }) {
  const [purpose, setPurpose] = useState('home'); // 'home' or 'building'
  const [roofArea, setRoofArea] = useState(800); // sq ft
  const [monthlyBill, setMonthlyBill] = useState(250); // $ USD
  const [includeBattery, setIncludeBattery] = useState(true);

  // Calculation Logic
  const estimatedCapacity = Math.min(
    Math.max(Math.round((purpose === 'home' ? monthlyBill / 25 : monthlyBill / 20) * 10) / 10, 3),
    purpose === 'home' ? 30 : 500
  );

  const estimatedMonthlyGen = Math.round(estimatedCapacity * 125); // kWh
  const estimatedMonthlySavings = Math.round(estimatedMonthlyGen * 0.22); // $

  const equipmentCost = Math.round(estimatedCapacity * (purpose === 'home' ? 1100 : 950));
  const batteryCost = includeBattery ? (purpose === 'home' ? 3800 : 12500) : 0;
  const engineeringDesignFee = 450; // Custom CAD by GANDHAMANENI GOUTHAM
  const installationIntegrationFee = Math.round(equipmentCost * 0.18);

  const totalProjectCost = equipmentCost + batteryCost + engineeringDesignFee + installationIntegrationFee;
  const paybackYears = (totalProjectCost / (estimatedMonthlySavings * 12)).toFixed(1);
  const twentyFiveYearSavings = Math.round((estimatedMonthlySavings * 12 * 25) - totalProjectCost);

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            Interactive System Design & ROI Engine
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            Calculate Solar Needs for <br className="hidden sm:block" />
            <span className="solar-gradient-text">Your Home or Building</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Input your property specifications below to receive an instant estimate of solar generation, cost breakdown, ROI timeline, and custom equipment sizing.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs Column */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Step 1: Purpose Selection */}
            <div>
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-3">
                1. Select Installation Purpose
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setPurpose('home');
                    if (roofArea > 2000) setRoofArea(800);
                  }}
                  className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm border transition-all ${
                    purpose === 'home'
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Home / Residential</span>
                </button>

                <button
                  onClick={() => {
                    setPurpose('building');
                    if (roofArea < 1500) setRoofArea(3500);
                    if (monthlyBill < 500) setMonthlyBill(1200);
                  }}
                  className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm border transition-all ${
                    purpose === 'building'
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Building / Commercial</span>
                </button>
              </div>
            </div>

            {/* Step 2: Available Roof Area */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  2. Available Rooftop Area
                </label>
                <span className="text-xs font-mono font-bold text-white bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                  {roofArea.toLocaleString()} Sq. Ft.
                </span>
              </div>
              <input
                type="range"
                min={purpose === 'home' ? 200 : 1000}
                max={purpose === 'home' ? 3000 : 25000}
                step={purpose === 'home' ? 50 : 500}
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>{purpose === 'home' ? '200 sq ft' : '1,000 sq ft'}</span>
                <span>{purpose === 'home' ? '3,000 sq ft' : '25,000 sq ft'}</span>
              </div>
            </div>

            {/* Step 3: Current Monthly Electricity Bill */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  3. Average Monthly Electricity Bill ($ USD)
                </label>
                <span className="text-xs font-mono font-bold text-amber-300 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                  ${monthlyBill.toLocaleString()} / month
                </span>
              </div>
              <input
                type="range"
                min={purpose === 'home' ? 50 : 300}
                max={purpose === 'home' ? 1200 : 10000}
                step={purpose === 'home' ? 25 : 100}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
            </div>

            {/* Step 4: Battery Storage Option */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Battery className="w-5 h-5 text-amber-400" />
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Include Battery Energy Storage Bank?
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {purpose === 'home' ? '15.2 kWh PowerVault Battery' : '50 kWh Industrial Commercial Container'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIncludeBattery(!includeBattery)}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  includeBattery ? 'bg-amber-500' : 'bg-slate-800'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-slate-950 absolute top-1 transition-transform ${
                    includeBattery ? 'right-1' : 'left-1'
                  }`}
                ></span>
              </button>
            </div>

            {/* Lead Engineer Oversight Banner */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3 text-xs">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <p className="text-slate-300">
                Calculations verified by Head Engineer <strong className="text-amber-400">GANDHAMANENI GOUTHAM</strong> for optimal grid synchronization & safety compliance.
              </p>
            </div>

          </div>

          {/* Right Results Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl gold-border-glow">
            
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Estimated System Blueprint
                </span>
                <h3 className="text-xl font-black text-white">
                  {purpose === 'home' ? 'Home Solar' : 'Commercial Building'} Sizing Summary
                </h3>
              </div>

              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono">
                {estimatedCapacity} kW System
              </span>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Est. Generation
                </span>
                <p className="text-xl font-black text-amber-300 font-mono mt-0.5">
                  {estimatedMonthlyGen.toLocaleString()} <span className="text-xs">kWh/mo</span>
                </p>
              </div>

              <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Est. Monthly Savings
                </span>
                <p className="text-xl font-black text-emerald-400 font-mono mt-0.5">
                  ${estimatedMonthlySavings.toLocaleString()} <span className="text-xs">/mo</span>
                </p>
              </div>

              <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Payback Period
                </span>
                <p className="text-xl font-black text-white font-mono mt-0.5">
                  {paybackYears} <span className="text-xs">Years</span>
                </p>
              </div>

              <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  25-Year Clean Savings
                </span>
                <p className="text-xl font-black text-amber-400 font-mono mt-0.5">
                  ${twentyFiveYearSavings > 0 ? twentyFiveYearSavings.toLocaleString() : '12,500'}
                </p>
              </div>
            </div>

            {/* Price Breakdown Accordion / List */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Tier-1 Solar Panels & Inverter:</span>
                <span className="text-white">${equipmentCost.toLocaleString()}</span>
              </div>
              {includeBattery && (
                <div className="flex justify-between text-slate-300">
                  <span>Battery Energy Vault:</span>
                  <span className="text-amber-300">${batteryCost.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-300">
                <span>CAD Designing & Engineering (G. Goutham):</span>
                <span className="text-amber-400">${engineeringDesignFee}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Installation & Grid Interconnection:</span>
                <span className="text-white">${installationIntegrationFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-800 text-sm font-bold font-sans">
                <span className="text-white">Estimated Total Project Investment:</span>
                <span className="text-amber-400 font-mono text-base">${totalProjectCost.toLocaleString()}</span>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <button
              onClick={() => onOpenBooking(`Calculated ${estimatedCapacity} kW ${purpose === 'home' ? 'Home' : 'Building'} System (Est. $${totalProjectCost.toLocaleString()})`)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Installation for this Calculated Design</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
