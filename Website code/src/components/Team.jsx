import React from 'react';
import { 
  Users, Award, Sparkles, ShieldCheck, Mail, Phone, 
  CreditCard, CheckCircle2, Cpu, Wrench, ChevronRight 
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/solarData';

export default function Team({ onOpenVisitingCard, onOpenBooking }) {
  const headEngineer = TEAM_MEMBERS.find(m => m.id === 'g-gowtham');
  const ashishEngineer = TEAM_MEMBERS.find(m => m.id === 'ashish');
  const otherEngineers = TEAM_MEMBERS.filter(m => m.id !== 'g-gowtham' && m.id !== 'ashish');

  return (
    <section id="team" className="py-20 sm:py-28 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            Engineering Leadership & Team Roster
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            Our Certified <span className="solar-gradient-text">Solar & Electrical Engineers</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Meet the Grid Master engineering team dedicated to high-performance residential and commercial solar designs, electrical schematics, and seamless grid integration.
          </p>
        </div>

        {/* FEATURED HEAD ENGINEER CARD: GANDHAMANENI GOUTHAM */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/60 border-2 border-amber-500/50 p-6 sm:p-10 shadow-2xl gold-border-glow relative overflow-hidden group">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Initials Badge (NO PHOTO AVATAR) */}
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block mx-auto">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-1 shadow-2xl shadow-amber-500/30 mx-auto">
                  <div className="w-full h-full bg-slate-950 rounded-[22px] flex flex-col items-center justify-center border-2 border-amber-500/40">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-amber-400 tracking-wider">
                      GG
                    </span>
                    <span className="text-[10px] uppercase font-bold text-amber-300 tracking-widest mt-1">
                      M.Tech Electrical
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 px-3.5 py-1 rounded-full font-black text-[11px] uppercase tracking-wider shadow-md whitespace-nowrap">
                  HEAD ENGINEER
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                <button
                  onClick={onOpenVisitingCard}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 font-bold text-xs transition-all flex items-center gap-1.5 shadow-md"
                >
                  <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                  <span>View GANDHAMANENI GOUTHAM Visiting Card</span>
                </button>
              </div>
            </div>

            {/* Right Head Engineer Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    Lead Solar & Electrical Specialist
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 flex items-center gap-2">
                    {headEngineer.name}
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                    {headEngineer.experience} Experience
                  </span>
                </div>
              </div>

              <p className="text-sm font-semibold text-amber-300">
                {headEngineer.specialization}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {headEngineer.bio}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {headEngineer.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono">
                    ✓ {skill}
                  </span>
                ))}
              </div>

              {/* Direct Contacts */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-4">
                  <a href={`tel:${headEngineer.phone}`} className="flex items-center gap-1.5 hover:text-amber-400 font-bold text-amber-300 text-sm">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{headEngineer.phone}</span>
                  </a>
                  <a href={`mailto:${headEngineer.email}`} className="flex items-center gap-1.5 hover:text-amber-400">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>{headEngineer.email}</span>
                  </a>
                </div>

                <button
                  onClick={() => onOpenBooking(`Consultation with Head Engineer GANDHAMANENI GOUTHAM`)}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all"
                >
                  Book Consultation
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* OTHER TEAM MEMBERS GRID (NO PHOTO AVATARS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Ashish Kumar (Solar Designer Engineer) */}
          <div className="rounded-3xl bg-slate-950 border-2 border-amber-500/30 p-6 flex flex-col justify-between hover:border-amber-400 transition-all group">
            <div>
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-amber-400 flex items-center justify-center text-amber-300 font-black font-mono text-xl shadow-md">
                  {ashishEngineer.initials}
                </div>
                <span className="absolute bottom-0 left-12 translate-y-1 px-2 py-0.5 bg-amber-500 text-slate-950 font-black text-[9px] uppercase rounded">
                  DESIGNER
                </span>
              </div>

              <h3 className="text-lg font-bold text-white flex items-center gap-1">
                {ashishEngineer.name}
              </h3>
              <p className="text-xs font-bold text-amber-400 mt-0.5">
                Solar Designer Engineer
              </p>
              <p className="text-[11px] text-slate-400 font-mono mt-1">
                {ashishEngineer.credentials}
              </p>

              <p className="text-xs text-slate-300 mt-3 leading-snug">
                {ashishEngineer.bio}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900 text-xs font-mono">
              <a href={`mailto:${ashishEngineer.email}`} className="text-slate-400 hover:text-amber-300 truncate block">
                {ashishEngineer.email}
              </a>
            </div>
          </div>

          {/* Remaining Engineers */}
          {otherEngineers.map((engineer) => (
            <div
              key={engineer.id}
              className="rounded-3xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all group"
            >
              <div>
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 font-black font-mono text-xl shadow-md">
                    {engineer.initials}
                  </div>
                  <span className="absolute bottom-0 left-12 translate-y-1 px-2 py-0.5 bg-slate-800 text-amber-300 font-bold text-[9px] uppercase rounded">
                    SPECIALIST
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {engineer.name}
                </h3>
                <p className="text-xs font-bold text-amber-400 mt-0.5">
                  {engineer.title}
                </p>
                <p className="text-[11px] text-slate-400 font-mono mt-1">
                  {engineer.credentials}
                </p>

                <p className="text-xs text-slate-300 mt-3 leading-snug">
                  {engineer.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 text-xs font-mono">
                <a href={`mailto:${engineer.email}`} className="text-slate-400 hover:text-amber-300 truncate block">
                  {engineer.email}
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
