import React from 'react';

export default function Legacy() {
  const milestones = [
    {
      year: "1995",
      title: "The Foundation",
      description: "Established with a vision to provide accessible IT literacy to the youth of Haryana."
    },
    {
      year: "2005",
      title: "Statewide Expansion",
      description: "Reached a milestone of 50+ authorized centers, becoming a household name in computer education."
    },
    {
      year: "2015",
      title: "Digital India Partner",
      description: "Recognized for excellence in skill development and bridging the rural-urban digital divide."
    },
    {
      year: "2024",
      title: "Modern Innovation",
      description: "Incorporating AI, Cloud Computing, and advanced Software Engineering into our core curriculum."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Journey</h2>
            <h3 className="text-5xl font-black text-slate-900 leading-tight">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Educational Excellence
              </span>
            </h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <p className="text-gray-600 text-lg border-l-4 border-blue-600 pl-6">
              For nearly three decades, we have been the cornerstone of technical 
              advancement in the region, transforming over 50,000+ careers 
              through quality education and government-recognized certifications.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="relative group">
              {/* Year Background Watermark */}
              <div className="absolute -top-10 -left-4 text-7xl font-black text-gray-50 group-hover:text-blue-50 transition-colors duration-500 select-none">
                {item.year}
              </div>
              
              <div className="relative pt-10 px-6 pb-8 bg-white border border-gray-100 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-xl font-bold mb-6 shadow-lg shadow-blue-200">
                  {item.year.slice(2)}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Achievement Bar */}
        <div className="mt-20 p-10 bg-slate-900 rounded-3xl flex flex-wrap justify-around items-center gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl font-extrabold mb-1">30+</div>
            <div className="text-slate-400 text-xs uppercase tracking-widest">Years of Trust</div>
          </div>
          <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
          <div className="text-center">
            <div className="text-4xl font-extrabold mb-1">50K+</div>
            <div className="text-slate-400 text-xs uppercase tracking-widest">Alumni Network</div>
          </div>
          <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
          <div className="text-center">
            <div className="text-4xl font-extrabold mb-1">100+</div>
            <div className="text-slate-400 text-xs uppercase tracking-widest">Expert Mentors</div>
          </div>
          <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
          <div className="text-center">
            <div className="text-4xl font-extrabold mb-1">Govt.</div>
            <div className="text-slate-400 text-xs uppercase tracking-widest">Recognized Center</div>
          </div>
        </div>
      </div>
    </section>
  );
}