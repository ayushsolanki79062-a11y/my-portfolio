import React, { useState } from 'react';
import { Terminal as TerminalIcon, User, GraduationCap, Calendar, Building, Sparkles, Target, Compass, Copy, Check, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'cat profile.json',
      output: JSON.stringify(
        {
          developer: PORTFOLIO_DATA.terminalMeta.developer,
          education: PORTFOLIO_DATA.terminalMeta.education,
          interests: PORTFOLIO_DATA.terminalMeta.interests,
          status: PORTFOLIO_DATA.terminalMeta.status
        },
        null,
        2
      )
    }
  ]);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Available commands: cat profile.json, status, skills, education, clear, contact, date';
        break;
      case 'cat profile.json':
      case 'profile':
        output = `developer = "${PORTFOLIO_DATA.terminalMeta.developer}"\neducation = "${PORTFOLIO_DATA.terminalMeta.education}"\ninterests = ${JSON.stringify(PORTFOLIO_DATA.terminalMeta.interests)}\nstatus = "${PORTFOLIO_DATA.terminalMeta.status}"`;
        break;
      case 'status':
        output = `Status: ${PORTFOLIO_DATA.terminalMeta.status}\nFocus: Strengthening C, Java, and DSA foundations at SRHU.`;
        break;
      case 'skills':
        output = 'Core: C Programming, Java, OOP, Basic DSA, DBMS, MySQL, Git, VS Code.\nCurrently Exploring: Python, Modern Web Technologies.';
        break;
      case 'education':
        output = 'Degree: Bachelor of Computer Applications (BCA)\nInstitution: Swami Rama Himalayan University (SRHU)\nYear: Second Year (2024-2027)';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'contact':
        output = `Email: ${PORTFOLIO_DATA.personal.email}\nGitHub: ${PORTFOLIO_DATA.personal.github}\nLinkedIn: ${PORTFOLIO_DATA.personal.linkedin}`;
        break;
      case 'date':
        output = new Date().toLocaleString();
        break;
      default:
        output = `bash: command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, output }]);
    setTerminalInput('');
  };

  const copyTerminalSnippet = () => {
    const snippet = `developer = "${PORTFOLIO_DATA.terminalMeta.developer}"\neducation = "${PORTFOLIO_DATA.terminalMeta.education}"\ninterests = ${JSON.stringify(PORTFOLIO_DATA.terminalMeta.interests)}\nstatus = "${PORTFOLIO_DATA.terminalMeta.status}"`;
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="about" className="py-20 relative bg-[#090c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Identity & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            A Little About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Main Grid: Narrative & Information Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0e1320]/80 rounded-2xl p-6 sm:p-8 border border-slate-800 backdrop-blur-sm space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed shadow-lg">
              {PORTFOLIO_DATA.personal.aboutText.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/30 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Curious Mindset</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-300 bg-blue-950/30 px-3 py-1.5 rounded-lg border border-blue-500/20">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Consistent Practice</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Clean Code Advocate</span>
                </div>
              </div>
            </div>

            {/* Terminal-Style Section (Requirement #11) */}
            <div className="rounded-xl overflow-hidden bg-[#07090f] border border-cyan-500/30 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e121e] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-300">ayush@dev-box: ~/profile</span>
                </div>
                <button
                  onClick={copyTerminalSnippet}
                  className="flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-mono text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                  title="Copy terminal declaration"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Developer Configuration snippet */}
              <div className="p-4 font-mono text-xs sm:text-sm bg-[#06080e] border-b border-slate-800/80">
                <div className="text-cyan-400">
                  <span className="text-slate-500"># Developer Profile Declaration</span>
                </div>
                <div className="text-slate-200 mt-1 space-y-1">
                  <div>
                    <span className="text-blue-400">developer</span> = <span className="text-emerald-300">"{PORTFOLIO_DATA.terminalMeta.developer}"</span>
                  </div>
                  <div>
                    <span className="text-blue-400">education</span> = <span className="text-emerald-300">"{PORTFOLIO_DATA.terminalMeta.education}"</span>
                  </div>
                  <div>
                    <span className="text-blue-400">interests</span> = [
                    <span className="text-emerald-300">"Programming"</span>, <span className="text-emerald-300">"Software Development"</span>]
                  </div>
                  <div>
                    <span className="text-blue-400">status</span> = <span className="text-cyan-300 font-semibold">"{PORTFOLIO_DATA.terminalMeta.status}"</span>
                  </div>
                </div>
              </div>

              {/* Interactive Terminal Shell */}
              <div className="p-4 font-mono text-xs space-y-2 max-h-48 overflow-y-auto bg-[#070a12]">
                <div className="text-slate-500 text-[11px]">
                  💡 Type <span className="text-cyan-300">help</span> to see interactive terminal commands.
                </div>
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span>$</span>
                      <span className="text-slate-200">{item.cmd}</span>
                    </div>
                    <pre className="text-slate-400 whitespace-pre-wrap pl-4 text-[11px] leading-relaxed">
                      {item.output}
                    </pre>
                  </div>
                ))}

                {/* Command Input Form */}
                <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
                  <span className="text-cyan-400 font-bold">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="type 'help', 'skills', 'education'..."
                    className="flex-1 bg-transparent text-slate-100 outline-none text-xs font-mono placeholder:text-slate-600 focus:ring-0 border-none p-0"
                  />
                  <button type="submit" className="text-slate-500 hover:text-cyan-300" title="Execute command">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Professional Information Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#0e1424] to-[#0a0d18] border border-cyan-500/25 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    Professional Information
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">Student & Developer Dossier</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Key Fields */}
              <div className="mt-5 space-y-4">
                
                {/* Name */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <User className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">Name</span>
                    <span className="text-sm font-semibold text-slate-100">{PORTFOLIO_DATA.personal.name}</span>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <GraduationCap className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">Education</span>
                    <span className="text-sm font-semibold text-slate-100">{PORTFOLIO_DATA.personal.degree}</span>
                  </div>
                </div>

                {/* Academic Year */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <Calendar className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">Academic Year</span>
                    <span className="text-sm font-semibold text-slate-100">{PORTFOLIO_DATA.personal.academicYear} (Expected {PORTFOLIO_DATA.personal.expectedGraduation})</span>
                  </div>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <Building className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">Institution</span>
                    <span className="text-sm font-semibold text-slate-100">{PORTFOLIO_DATA.personal.institution}</span>
                    <span className="block text-xs text-slate-400">Himalayan School of Science and Technology</span>
                  </div>
                </div>

                {/* Primary Interests */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">Primary Interests</span>
                    <span className="text-sm font-semibold text-slate-100">{PORTFOLIO_DATA.personal.primaryInterests}</span>
                  </div>
                </div>

                {/* Current Focus */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <Target className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">Current Focus</span>
                    <span className="text-sm font-semibold text-slate-100">{PORTFOLIO_DATA.personal.currentFocus}</span>
                  </div>
                </div>

                {/* Career Goal */}
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.08)]">
                  <Compass className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Career Goal</span>
                    <span className="text-sm font-bold text-white">{PORTFOLIO_DATA.personal.careerGoal}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

