import React, { useState } from 'react';
import { 
  X, Calendar, Clock, CheckCircle2, User, Phone, Mail, 
  MapPin, Home, Building2, Sun, ShieldCheck, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/solarData';

export default function BookingModal({ isOpen, onClose, initialService = '' }) {
  const [purpose, setPurpose] = useState('home'); // 'home' or 'building'
  const [serviceType, setServiceType] = useState(initialService || 'Solar Designing & Turnkey Installation');
  const [preferredEngineer, setPreferredEngineer] = useState('g-gowtham');
  const [date, setDate] = useState('2026-09-15');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [propertyAddress, setCustomerAddress] = useState('');
  const [notes, setNotes] = useState('');

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'GM-SR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!bookingConfirmed ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                Grid Master Online Booking Hub
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Book Solar Designing, Installation & Integration
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Schedule an engineering site inspection and 3D solar layout consultation with <strong className="text-amber-400">Head Engineer GANDHAMANENI GOUTHAM</strong> and our certified team.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              
              {/* Purpose Selection */}
              <div>
                <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  1. Installation Purpose
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPurpose('home')}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs border transition-all ${
                      purpose === 'home'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>For Home (Residential)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPurpose('building')}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs border transition-all ${
                      purpose === 'building'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>For Building (Commercial)</span>
                  </button>
                </div>
              </div>

              {/* Service Selection & Preferred Engineer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    2. Primary Requirement
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-medium focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Solar Designing & 3D Simulation">Solar Designing & 3D CAD Blueprint</option>
                    <option value="Turnkey Solar Installation">Turnkey Hardware & Panel Installation</option>
                    <option value="High Voltage Grid Integration">High Voltage Grid Interconnection & Net Metering</option>
                    <option value="Battery Storage & Microgrid Integration">Battery PowerVault Backup Integration</option>
                    <option value="Full Package (Design + Install + Grid Integration)">Full Package (Design + Install + Integration)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    3. Lead Engineer Oversight
                  </label>
                  <select
                    value={preferredEngineer}
                    onChange={(e) => setPreferredEngineer(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-medium focus:border-amber-500 focus:outline-none"
                  >
                    <option value="g-gowtham">GANDHAMANENI GOUTHAM (Head Engineer - Solar & Electrical)</option>
                    <option value="ashish">Ashish Kumar (Solar Designer Engineer)</option>
                    <option value="priya-sharma">Priya Sharma (Integration Specialist)</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Preferred Site Audit Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-medium focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-medium focus:border-amber-500 focus:outline-none"
                  >
                    <option value="09:00 AM">09:00 AM - 11:00 AM</option>
                    <option value="11:00 AM">11:00 AM - 01:00 PM</option>
                    <option value="02:00 PM">02:00 PM - 04:00 PM</option>
                    <option value="04:00 PM">04:00 PM - 06:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Customer & Property Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-500 focus:outline-none"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-500 focus:outline-none"
                />

                <input
                  type="text"
                  required
                  placeholder="Property Location Address / City *"
                  value={propertyAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-500 focus:outline-none"
                />

                <textarea
                  placeholder="Specific requirements (e.g., roof size, target load, inverter preference)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-amber-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all"
              >
                Confirm & Submit Booking Request
              </button>

            </form>
          </div>
        ) : (
          /* CONFIRMATION RECEIPT */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 font-mono font-bold text-xs border border-amber-500/30">
                Booking Reference: {bookingRef}
              </span>
              <h2 className="text-2xl font-black text-white mt-3">
                Solar Integration Request Confirmed!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-white">{customerName}</strong>. Our Head Engineer <strong className="text-amber-400">GANDHAMANENI GOUTHAM</strong> and Solar Designer <strong className="text-amber-300">Ashish Kumar</strong> have been notified of your project request for <strong className="text-white">{purpose === 'home' ? 'Home' : 'Building'} Purpose</strong>.
              </p>
            </div>

            {/* Receipt Details Box */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/30 font-mono text-xs text-slate-300 text-left space-y-2 max-w-lg mx-auto">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Service:</span>
                <span className="text-amber-300 font-bold">{serviceType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Category:</span>
                <span className="text-white">{purpose === 'home' ? 'Home (Residential)' : 'Building (Commercial)'}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Scheduled Audit Date:</span>
                <span className="text-emerald-400">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Lead Engineer:</span>
                <span className="text-amber-400 font-bold">GANDHAMANENI GOUTHAM (Head Eng.)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200 truncate">{propertyAddress}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-2xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              Done & Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
