import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Clock, 
  CheckCircle, 
  Lightbulb, 
  ArrowUpRight, 
  PlusCircle, 
  X,
  Code,
  Terminal,
  FileCode2,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<'All' | 'Completed' | 'In Progress' | 'Planning'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filterStatus === 'All') return true;
    return p.status === filterStatus;
  });

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>Completed</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>In Progress</span>
          </span>
        );
      case 'Planning':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-amber-300 bg-amber-950/40 border border-amber-500/30">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>Planning</span>
          </span>
        );
    }
  };

  const getProjectVisual = (category: string) => {
    switch (category) {
      case 'C Programming':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-[#0c121e] to-[#080d16] border-b border-slate-800 flex flex-col justify-center items-center relative overflow-hidden group-hover:border-cyan-500/30 transition-all">
            <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-cyan-400 select-none p-2 overflow-hidden leading-3">
              #include &lt;stdio.h&gt;<br/>
              typedef struct Node &#123; int val; struct Node* next; &#125;;<br/>
              malloc(sizeof(Node));
            </div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 z-10 group-hover:scale-110 transition-transform">
              <FileCode2 className="w-6 h-6" />
            </div>
            <span className="mt-2 text-xs font-mono text-slate-400 z-10">C System Application</span>
          </div>
        );
      case 'Java':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-[#13111f] to-[#0b0a14] border-b border-slate-800 flex flex-col justify-center items-center relative overflow-hidden group-hover:border-amber-500/30 transition-all">
            <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-amber-400 select-none p-2 overflow-hidden leading-3">
              class DataStructuresLab &#123;<br/>
              public static void main(String[] args) &#123; ... &#125;<br/>
              &#125;
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 z-10 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6" />
            </div>
            <span className="mt-2 text-xs font-mono text-slate-400 z-10">Java OOP & Algorithms</span>
          </div>
        );
      case 'Database':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-[#0e161c] to-[#090e12] border-b border-slate-800 flex flex-col justify-center items-center relative overflow-hidden group-hover:border-cyan-500/30 transition-all">
            <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-teal-400 select-none p-2 overflow-hidden leading-3">
              SELECT * FROM students WHERE year = 2;<br/>
              INNER JOIN courses ON students.id = courses.sid;
            </div>
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 z-10 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="mt-2 text-xs font-mono text-slate-400 z-10">Relational Database & SQL</span>
          </div>
        );
      default:
        return (
          <div className="w-full h-40 bg-gradient-to-br from-[#0c1424] to-[#090d16] border-b border-slate-800 flex flex-col justify-center items-center relative overflow-hidden group-hover:border-cyan-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 z-10 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <span className="mt-2 text-xs font-mono text-slate-400 z-10">Modern Web Architecture</span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              Things I'm Building
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2 font-normal">
              Practical software projects, academic implementations, and modular code repositories. Authentic status tracking.
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-[#0e1320] p-1.5 rounded-xl border border-slate-800 shrink-0">
            {(['All', 'Completed', 'In Progress', 'Planning'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filterStatus === status
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden bg-[#0d121e]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,240,255,0.12)] flex flex-col justify-between group"
            >
              <div>
                {/* Visual Representation / Header */}
                {getProjectVisual(project.category)}

                {/* Content Container */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-['Space_Grotesk']">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-medium mt-1 mb-3">
                    {project.tagline}
                  </p>

                  {/* Problem Solved Callout */}
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1 mb-4">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px] font-semibold">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Problem It Solves</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-[11px]">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/20 text-slate-300 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 bg-[#0a0f19]">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>Details & Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-all border border-slate-800"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-all border border-slate-800"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Easy Future Project Add Placeholder Card */}
          <div className="rounded-xl border-2 border-dashed border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-center items-center text-center bg-[#0a0d16]/50 transition-all group min-h-[360px]">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
              Future Project Ready
            </h3>
            <p className="text-xs text-slate-400 max-w-xs mt-2 leading-relaxed">
              Ready to feature upcoming Java applications, C programming modules, MySQL systems, web platforms, and AI experiments.
            </p>
            <div className="mt-4 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
              src/data/portfolioData.ts
            </div>
          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0e1320] border border-cyan-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {selectedProject.category}
              </span>
              {getStatusBadge(selectedProject.status)}
            </div>

            <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-cyan-300 font-mono mt-1">
              {selectedProject.tagline}
            </p>

            <div className="my-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Problem Statement & Architecture
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.problemSolved}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="text-sm font-semibold text-white">Full Overview:</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="text-sm font-semibold text-white">Engineering Highlights:</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/30 text-cyan-300 border border-cyan-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold text-xs transition-all hover:bg-cyan-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
