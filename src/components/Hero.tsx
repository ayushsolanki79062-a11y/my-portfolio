import React, { useState } from 'react';
import { ArrowRight, Terminal, Mail, Play, Check, Copy, Sparkles, Code2, Coffee } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'c' | 'java'>('c');
  const [isRunning, setIsRunning] = useState(false);
  const [runOutput, setRunOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const cCode = `// Solution.c - Fundamental DSA & Logic
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char name[32];
    int semester;
    char goal[40];
} Student;

int main() {
    Student ayush = {
        "Ayush Solanki", 
        3, 
        "Software Engineering"
    };

    printf("Developer: %s\\n", ayush.name);
    printf("Status: BCA 2nd Year @ SRHU\\n");
    printf("Mission: Turning logic into code.\\n");
    
    return 0;
}`;

  const javaCode = `// Main.java - Object Oriented Principles
public class Main {
    public static void main(String[] args) {
        Developer ayush = new Developer(
            "Ayush Solanki",
            "SRHU BCA",
            "Continuous Learning"
        );
        
        ayush.solveProblem("Real-World Challenge");
        ayush.displayStatus();
    }
}

class Developer {
    private String name, university, mindset;
    public Developer(String n, String u, String m) {
        this.name = n; this.university = u; this.mindset = m;
    }
    public void solveProblem(String challenge) {
        System.out.println("Breaking down: " + challenge);
    }
    public void displayStatus() {
        System.out.println("Built with logic & dedication.");
    }
}`;

  const handleRunCode = () => {
    setIsRunning(true);
    setRunOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 'c') {
        setRunOutput(`$ gcc Solution.c -o out && ./out\nDeveloper: Ayush Solanki\nStatus: BCA 2nd Year @ SRHU\nMission: Turning logic into code.\nExecution time: 0.002s (Exit code: 0)`);
      } else {
        setRunOutput(`$ javac Main.java && java Main\nBreaking down: Real-World Challenge\nBuilt with logic & dedication.\nCompilation successful: 0 errors, 0 warnings.`);
      }
    }, 600);
  };

  const handleCopyCode = () => {
    const code = activeTab === 'c' ? cCode : javaCode;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Tech Grids & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00f0ff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Technical Projects & Internships</span>
            </div>

            {/* Name & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk']">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg font-mono text-cyan-400/90 font-medium tracking-wide">
                {PORTFOLIO_DATA.personal.headline}
              </p>
            </div>

            {/* Main Headline */}
            <div className="border-l-2 border-cyan-400 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-['Space_Grotesk'] leading-tight">
                "{PORTFOLIO_DATA.personal.tagline}"
              </h2>
            </div>

            {/* Detailed Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.bioIntro}
            </p>

            {/* Three Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 font-medium text-sm transition-all"
              >
                <span>About Me</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent hover:bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-mono text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons with editable profile links */}
            <div className="flex items-center gap-4 pt-3 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect:</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors bg-slate-900/60 px-2.5 py-1.5 rounded border border-slate-800 hover:border-cyan-500/40"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors bg-slate-900/60 px-2.5 py-1.5 rounded border border-slate-800 hover:border-cyan-500/40"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span className="font-mono">LinkedIn</span>
              </a>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-900/40 px-2.5 py-1.5 rounded border border-slate-800/80">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>BCA 2nd Year @ SRHU</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Editor Visual (C & Java) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-xl overflow-hidden bg-[#0c101a] border border-cyan-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    developer-workspace
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#121826] p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => { setActiveTab('c'); setRunOutput(null); }}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'c'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    Solution.c
                  </button>
                  <button
                    onClick={() => { setActiveTab('java'); setRunOutput(null); }}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'java'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Coffee className="w-3.5 h-3.5 text-amber-400" />
                    Main.java
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="relative p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto max-h-[380px] bg-[#0c101a]">
                <div className="flex items-start">
                  {/* Line numbers */}
                  <div className="select-none text-slate-600 pr-4 text-right border-r border-slate-800/80 space-y-0.5">
                    {(activeTab === 'c' ? cCode : javaCode).split('\n').map((_, i) => (
                      <div key={i} className="leading-5">{i + 1}</div>
                    ))}
                  </div>

                  {/* Code contents with syntax coloring */}
                  <pre className="pl-4 text-slate-200 leading-5 overflow-x-auto whitespace-pre">
                    {activeTab === 'c' ? (
                      <code>
                        <span className="text-slate-500">// Solution.c - Fundamental DSA & Logic</span>{'\n'}
                        <span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;stdio.h&gt;</span>{'\n'}
                        <span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;stdlib.h&gt;</span>{'\n'}{'\n'}
                        <span className="text-blue-400">typedef struct</span> {'{'}{'\n'}
                        {'    '}<span className="text-cyan-300">char</span> name[<span className="text-amber-300">32</span>];{'\n'}
                        {'    '}<span className="text-cyan-300">int</span> semester;{'\n'}
                        {'    '}<span className="text-cyan-300">char</span> goal[<span className="text-amber-300">40</span>];{'\n'}
                        {'}'} <span className="text-yellow-300">Student</span>;{'\n'}{'\n'}
                        <span className="text-cyan-300">int</span> <span className="text-blue-300 font-bold">main</span>() {'{'}{'\n'}
                        {'    '}<span className="text-yellow-300">Student</span> ayush = {'{'}{'\n'}
                        {'        '}<span className="text-emerald-300">"Ayush Solanki"</span>,{'\n'}
                        {'        '}<span className="text-amber-300">3</span>,{'\n'}
                        {'        '}<span className="text-emerald-300">"Software Engineering"</span>{'\n'}
                        {'    }'};{'\n'}{'\n'}
                        {'    '}<span className="text-blue-400">printf</span>(<span className="text-emerald-300">"Developer: %s\\n"</span>, ayush.name);{'\n'}
                        {'    '}<span className="text-blue-400">printf</span>(<span className="text-emerald-300">"Status: BCA 2nd Year @ SRHU\\n"</span>);{'\n'}
                        {'    '}<span className="text-blue-400">printf</span>(<span className="text-emerald-300">"Mission: Turning logic into code.\\n"</span>);{'\n'}{'\n'}
                        {'    '}<span className="text-purple-400">return</span> <span className="text-amber-300">0</span>;{'\n'}
                        {'}'}
                      </code>
                    ) : (
                      <code>
                        <span className="text-slate-500">// Main.java - Object Oriented Principles</span>{'\n'}
                        <span className="text-purple-400">public class</span> <span className="text-yellow-300 font-bold">Main</span> {'{'}{'\n'}
                        {'    '}<span className="text-purple-400">public static void</span> <span className="text-blue-300 font-bold">main</span>(String[] args) {'{'}{'\n'}
                        {'        '}<span className="text-yellow-300">Developer</span> ayush = <span className="text-purple-400">new</span> <span className="text-yellow-300">Developer</span>({'\n'}
                        {'            '}<span className="text-emerald-300">"Ayush Solanki"</span>,{'\n'}
                        {'            '}<span className="text-emerald-300">"SRHU BCA"</span>,{'\n'}
                        {'            '}<span className="text-emerald-300">"Continuous Learning"</span>{'\n'}
                        {'        '});{'\n'}{'\n'}
                        {'        '}ayush.<span className="text-blue-400">solveProblem</span>(<span className="text-emerald-300">"Real-World Challenge"</span>);{'\n'}
                        {'        '}ayush.<span className="text-blue-400">displayStatus</span>();{'\n'}
                        {'    }'}{'\n'}
                        {'}'}
                      </code>
                    )}
                  </pre>
                </div>
              </div>

              {/* Editor Bottom Actions */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#090d16] border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-medium transition-all cursor-pointer"
                  >
                    <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
                    <span>{isRunning ? 'Compiling...' : 'Run Code'}</span>
                  </button>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-all"
                    title="Copy code to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>UTF-8</span>
                  <span className="text-slate-600">•</span>
                  <span>{activeTab === 'c' ? 'GCC 13.2' : 'OpenJDK 21'}</span>
                </div>
              </div>

              {/* Simulated Terminal Output */}
              {runOutput && (
                <div className="px-4 py-3 bg-[#06080e] border-t border-cyan-500/20 font-mono text-xs text-cyan-300/90 whitespace-pre animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-1 text-[11px] text-slate-500 uppercase tracking-wider">
                    <span>Console Output</span>
                    <button 
                      onClick={() => setRunOutput(null)}
                      className="hover:text-slate-300"
                    >
                      clear [x]
                    </button>
                  </div>
                  {runOutput}
                </div>
              )}
            </div>

            {/* Micro Badge Underneath */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-mono px-2">
              <span>Interactive Code Sandbox</span>
              <span className="text-cyan-400">SRHU / HSST Curriculum</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
