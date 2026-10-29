import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { CareerGoals } from './components/CareerGoals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080a10] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans relative">
      {/* Global Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-20 bg-radial-gradient from-cyan-500/30 to-transparent blur-3xl -z-10" />

      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me & Interactive Terminal */}
        <About />

        {/* Programming Skills & Fundamentals */}
        <Skills />

        {/* Projects (Things I'm Building) */}
        <Projects />

        {/* Education Timeline */}
        <Education />

        {/* Learning Journey Roadmap */}
        <LearningJourney />

        {/* Career Goals */}
        <CareerGoals />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
