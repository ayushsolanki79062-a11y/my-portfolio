import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 relative bg-[#080b12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            Education Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 ml-2 sm:ml-4 space-y-12">
          
          {/* Main BCA Card */}
          <div className="relative group">
            {/* Pulsing Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#080b12] border-2 border-cyan-400 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            <div className="rounded-2xl p-6 sm:p-8 bg-[#0d121f]/95 border border-slate-800 group-hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Current Academic Status: {education.status}</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Duration: {education.expectedYear}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{education.location}</span>
                  </span>
                </div>
              </div>

              {/* Degree Title & Institution */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
                {education.degree}
              </h3>

              <div className="flex items-center gap-2 mt-1 text-slate-300 font-medium text-sm sm:text-base">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{education.institution}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-xs sm:text-sm">{education.department}</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                {education.description}
              </p>

              {/* Academic Focus Points (Requirement Specified) */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Core Academic Focus Areas</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {education.curriculumHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Genuine Academic Milestones */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Academic Activities & Milestones</span>
                </h4>
                <div className="space-y-2">
                  {education.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

