import React, { useState } from 'react';
import { Compass, CheckCircle2, Clock, CircleDot, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { LearningStage } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Ongoing' | 'Upcoming'>('All');

  const filteredStages = PORTFOLIO_DATA.learningJourney.filter((stage) => {
    if (filter === 'All') return true;
    return stage.status === filter;
  });

  const getStatusBadge = (status: LearningStage['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Completed Stage</span>
          </span>
        );
      case 'Ongoing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Active Focus</span>
          </span>
        );
      case 'Upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-700">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Next Horizon</span>
          </span>
        );
    }
  };

  return (
    <section id="learning" className="py-20 relative bg-[#090c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Skill Progression</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              Currently Learning & Exploring
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2 font-normal">
              A transparent, evolving roadmap documenting milestones, active practice, and future technologies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#0e1320] p-1.5 rounded-xl border border-slate-800 shrink-0">
            {(['All', 'Ongoing', 'Completed', 'Upcoming'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  filter === tab
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStages.map((stage: LearningStage, index: number) => {
            const isOngoing = stage.status === 'Ongoing';
            const isCompleted = stage.status === 'Completed';

            return (
              <div
                key={stage.id}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group ${
                  isOngoing
                    ? 'bg-gradient-to-b from-[#0f172a] to-[#0b101c] border-2 border-cyan-500/40 shadow-[0_8px_30px_rgba(0,240,255,0.15)]'
                    : 'bg-[#0d121e]/90 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Status & Index */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      STAGE 0{index + 1}
                    </span>
                    {getStatusBadge(stage.status)}
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-cyan-300 transition-colors">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                {/* Key Topics Covered */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Focus Subtopics</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          isOngoing
                            ? 'bg-cyan-950/30 text-cyan-300 border border-cyan-500/30'
                            : isCompleted
                            ? 'bg-emerald-950/20 text-emerald-300/80 border border-emerald-500/20'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Note */}
        <div className="mt-8 flex items-center justify-between p-4 rounded-xl bg-[#0b0e18] border border-slate-800 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CircleDot className="w-4 h-4 text-cyan-400" />
            <span>Growth Philosophy: "Depth in fundamentals before chasing ephemeral trends."</span>
          </div>
          <span className="hidden sm:inline text-cyan-400 font-semibold">2nd Year BCA @ SRHU</span>
        </div>

      </div>
    </section>
  );
};
