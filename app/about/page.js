import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      
      {/* --- Top Banner Section --- */}
      {/* We use your uploaded image as a background to maintain the layout */}
      <section 
        className="relative w-full h-[450px] bg-cover bg-center flex items-center px-6 md:px-24"
        style={{ backgroundImage: "url('/aboutus-banner.jpg')" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight drop-shadow-md">
            About Company
          </h1>
        </div>

        {/* --- Bottom Curve (Matches the transition in your screenshot) --- */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 100" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 C480,100 960,100 1440,100 L1440,80 C1100,20 340,120 0,60 Z"></path>
          </svg>
        </div>
      </section>

      {/* --- Main Content Area --- */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        
        {/* Intro Quote */}
        <p className="italic text-gray-500 text-lg border-l-4 border-blue-400 pl-4 leading-relaxed">
          "Technology is one of the main ways we change the world. Whether it's a complex technology like the internet, or simple technology like the wheel, one of the basic elements of human civilization is that we use technology."
        </p>

        {/* Our Story */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#1e3a8a]">Our story</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Founded in **2025**, **SAAMPARK TECHNOLOGY & RESEARCH** commenced business as a 
            forward-thinking technology partner. At a time when digital innovation is at its peak, 
            Saampark focused on building complex enterprise-level solutions and high-end software 
            architecture. We have quickly gained a reputation for using emerging technologies to build 
            future-proof systems. Our team lives and breathes tech, and we're excited to be part of the 
            biggest technological shift since the adoption of the PC.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1e3a8a]">Vision</h2>
            <p className="text-gray-600 italic">
              At Saampark Technology, we aspire to be a Premier Company in IT, Branding and Multimedia 
              services sector across the world. To achieve that end, we commit to:
            </p>
            <ul className="space-y-3">
              {["Focus intensely on client requirements.", "Deliver economical yet efficient solutions.", "Adhere to global standards of conduct."].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-blue-500 font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1e3a8a]">Mission</h2>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
              <p className="text-gray-700 leading-relaxed font-medium">
                "Fulfill the needs and Exceed the expectations of the Clients" is the mantra that 
                we passionately follow at Saampark Technology.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                To attain our objective, we formulate proficient as well as result-oriented web, 
                branding, and digital media solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;