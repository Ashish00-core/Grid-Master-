import React, { useState } from 'react';
import { MessageSquareQuote, Star, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/solarData';

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Client Reviews & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
            What Our Clients Say About <span className="solar-gradient-text">Grid Master</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Read feedback from homeowners and commercial building managers who transformed their energy infrastructure with us.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900">
                <h4 className="text-sm font-bold text-white">{t.name}</h4>
                <p className="text-xs text-amber-400">{t.role}</p>
                <div className="flex justify-between items-center mt-2 text-[10px] text-slate-400 font-mono">
                  <span>System: {t.systemSize}</span>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
              Solar Designing & Installation Clarifications
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
