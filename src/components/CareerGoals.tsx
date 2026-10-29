import React from 'react';
import { Target, Code, Cpu, Rocket, Briefcase, Compass, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { CareerGoal } from '../data/portfolioData';

export const CareerGoals: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-purple-400" />;
      default:
        return <Target className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="goals" className="py-20 relative bg-[#080b12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Future Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            Where I'm Headed
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3 mb-4" />
          
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {PORTFOLIO_DATA.personal.careerOverview}
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.careerGoals.map((goal: CareerGoal, idx: number) => (
            <div
              key={goal.title}
              className={`rounded-2xl p-6 bg-[#0d121f]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] flex flex-col justify-between group ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-[#0e1628] to-[#0c101d]' : ''
              }`}
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-950/20 transition-all">
                    {getIcon(goal.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-['Space_Grotesk']">
                  {goal.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-mono text-cyan-400/90 font-medium mt-1 mb-3">
                  {goal.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              {/* Bottom Subtle Pill */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>College Milestones</span>
                <span className="flex items-center gap-1 text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Aiming High</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
