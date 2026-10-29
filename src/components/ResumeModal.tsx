import React, { useState } from 'react';
import { X, Download, Printer, FileText, CheckCircle2, GraduationCap, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadNotice, setDownloadNotice] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    // Check if the resume.pdf file exists, or trigger print / notice
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = PORTFOLIO_DATA.personal.resumeFileName;
    link.target = '_blank';
    
    // We also show a friendly instruction banner in case Ayush hasn't put his physical PDF into public/ folder yet
    setDownloadNotice(true);
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0b0e17] border border-cyan-500/30 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e1322] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk']">
              Ayush Solanki — Curriculum Vitae Snapshot
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Notice if downloaded */}
        {downloadNotice && (
          <div className="px-6 py-2.5 bg-cyan-950/40 border-b border-cyan-500/20 text-xs text-cyan-300 font-mono flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Download requested for {PORTFOLIO_DATA.personal.resumeFileName}. Ensure your PDF is placed in <code>public/resume.pdf</code>.</span>
            </div>
            <button onClick={() => setDownloadNotice(false)} className="text-slate-400 hover:text-white ml-2 text-xs">
              ✕
            </button>
          </div>
        )}

        {/* Resume Preview Body (Printable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm">
          
          {/* Header Summary */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-cyan-400 font-mono text-xs mt-1">
              {PORTFOLIO_DATA.personal.headline}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400 font-mono">
              <span>Email: {PORTFOLIO_DATA.personal.email}</span>
              <span>Institution: {PORTFOLIO_DATA.personal.institution}</span>
              <span>Location: {PORTFOLIO_DATA.personal.location}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="bg-[#0e1320] p-4 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between font-semibold text-white">
                <span>{PORTFOLIO_DATA.education.degree}</span>
                <span className="text-cyan-400 font-mono text-xs">{PORTFOLIO_DATA.education.expectedYear}</span>
              </div>
              <div className="text-slate-400 text-xs">
                {PORTFOLIO_DATA.education.institution} • {PORTFOLIO_DATA.education.department}
              </div>
              <div className="text-slate-300 text-xs pt-1">
                Status: {PORTFOLIO_DATA.education.status}
              </div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0e1320] p-3 rounded-lg border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Languages</span>
                <p className="text-xs text-white">C, Java, Python (Exploring)</p>
              </div>
              <div className="bg-[#0e1320] p-3 rounded-lg border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Fundamentals</span>
                <p className="text-xs text-white">OOP, Basic DSA, DBMS, Problem-Solving</p>
              </div>
              <div className="bg-[#0e1320] p-3 rounded-lg border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Tools</span>
                <p className="text-xs text-white">VS Code, Git & GitHub, MySQL</p>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Project Demonstrations</span>
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="bg-[#0e1320] p-3.5 rounded-lg border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">{proj.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{proj.problemSolved}</p>
                  <p className="text-[11px] font-mono text-slate-500">
                    Tech: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0d16] border-t border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print View</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs font-mono"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
