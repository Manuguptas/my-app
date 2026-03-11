"use client";

import React from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#2d2a29] text-white overflow-hidden min-h-[600px]">
      
      {/* --- Wave Animation Top --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-24">
        <svg className="relative block w-[200%] h-full animate-wave-slow" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#736afc" opacity="0.6"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/10 pb-16">
          
          {/* Left Side: Logo & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start space-y-6">
              {/* --- Round Logo --- */}
              <div className="w-36 h-36 rounded-full overflow-hidden bg-black border-4 border-[#3d3a39] shadow-xl flex-shrink-0">
                <img 
                  src="/logoLatter.png" 
                  alt="SAAMPARK Logo" 
                  className="w-full h-full object-cover scale-110" 
                />
              </div>

              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#00c853] shrink-0 mt-1" />
                  <p>Balichok, Medinipur, Kolkata, West Bengal 721101</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#00c853] shrink-0" />
                  <p className="break-all">saamparktechnologyresearch@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#00c853] shrink-0" />
                  <div>
                    <p>+91 9091518567</p>
                    <p>+91 9091518569</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
               <div>
                  <h4 className="font-bold mb-4 text-gray-300 uppercase tracking-widest text-xs">Company</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer transition-colors">About us</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Contact us</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">What we do</h4>
                  <ul className="space-y-2 text-sm">
                    {['Hosting & Domain', 'APP Development', 'Website development', 'Game development'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-400">
                        <CheckCircle2 size={14} className="text-[#00c853]" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* Right Side: Demo Request */}
          <div className="relative flex flex-col justify-center">
            <span className="text-[#ff5722] font-bold text-xs uppercase tracking-widest">Demo</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-8 leading-tight">Request a<br />Demo</h2>
            
            <div className="relative max-w-md z-30">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-white text-black rounded-full py-4 px-6 outline-none text-base"
              />
              <button className="absolute right-1.5 top-1.5 bg-[#ff5722] p-2.5 rounded-full hover:scale-105 transition-transform shadow-lg">
                <ArrowRight size={24} className="text-white" />
              </button>
            </div>

            {/* --- Main Character: Anchored to Bottom --- */}
            <img 
              src="/footer.png" 
              alt="Person with laptop" 
              className="absolute -right-8 bottom-[-64px] w-64 md:w-80 hidden lg:block select-none pointer-events-none z-10"
            />
          </div>
        </div>

        {/* Bottom Bar Area */}
        <div className="relative mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] md:text-xs text-gray-500 font-medium z-20 w-full md:w-auto text-center md:text-left">
            <p>© 2026 SAAMPARK TECHNOLOGY & RESEARCH PVT. LTD.</p>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer">Support</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Cookie Policy</span>
            </div>
          </div>

          {/* --- Secondary Characters: Cleaned up positioning --- */}
          <div className="absolute left-0 bottom-[-32px] flex items-end pointer-events-none z-0 opacity-40 md:opacity-90">
             <img src="/footer3.png" className="h-32 md:h-40" alt="illus 1" />
             <img src="/footer2.png" className="h-48 md:h-56 -ml-12" alt="illus 2" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave-slow {
          animation: waveMove 18s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;