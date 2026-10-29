import React, { useState } from 'react';
import { 
  Code, 
  Coffee, 
  Code2, 
  Boxes, 
  Workflow, 
  Database, 
  Lightbulb, 
  FileCode, 
  GitBranch, 
  Server, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Search
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Languages' | 'CS Fundamentals' | 'Tools'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-emerald-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-yellow-400" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-teal-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { label: 'All Domains', value: 'All', count: PORTFOLIO_DATA.skills.length },
    { label: 'Programming Languages', value: 'Languages', count: PORTFOLIO_DATA.skills.filter(s => s.category === 'Languages').length },
    { label: 'CS Fundamentals', value: 'CS Fundamentals', count: PORTFOLIO_DATA.skills.filter(s => s.category === 'CS Fundamentals').length },
    { label: 'Development Tools', value: 'Tools', count: PORTFOLIO_DATA.skills.filter(s => s.category === 'Tools').length },
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#080b12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              Programming Skills & Fundamentals
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2 font-normal">
              Structured knowledge foundation built through university coursework at SRHU and continuous self-study.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills & tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0e1320] border border-slate-800 focus:border-cyan-500/50 rounded-lg pl-9 pr-3 py-2 text-xs font-mono text-slate-200 outline-none transition-all placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                activeCategory === cat.value
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategory === cat.value ? 'bg-cyan-400 text-black font-bold' : 'bg-slate-800 text-slate-400'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: SkillItem) => {
            const isCurrentlyLearning = skill.status === 'Currently Learning';

            return (
              <div
                key={skill.name}
                className="group relative rounded-xl p-5 bg-[#0d121f]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,240,255,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-950/20 transition-all shrink-0">
                      {getIcon(skill.iconName)}
                    </div>

                    {/* Status Badge - Clearly distinguishes Core Foundation from Currently Learning */}
                    {isCurrentlyLearning ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-amber-300 bg-amber-950/30 border border-amber-500/30">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Currently Exploring</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-500/30">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>Core Foundation</span>
                      </span>
                    )}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-['Space_Grotesk'] mb-2">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-slate-600 group-hover:text-cyan-400/80 transition-colors">
                    {isCurrentlyLearning ? 'In Progress' : 'Academic & Practical'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authenticity Notice */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400 font-mono">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span>
            <strong className="text-slate-300">Authentic Portfolio Principle:</strong> Skills reflect real coursework in progress and hands-on practice at SRHU. No fabricated arbitrary percentages.
          </span>
        </div>

      </div>
    </section>
  );
};
