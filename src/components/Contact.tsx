import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, AlertCircle, ExternalLink, MessageSquare, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'info' | 'error'; text: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    // Prepare mailto link with encoded message so submission is 100% genuine and never lost
    const mailtoSubject = encodeURIComponent(formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Ayush,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      // Trigger the genuine email client
      window.location.href = mailtoUrl;

      setStatusMessage({
        type: 'success',
        text: 'Opening your email client to send this message directly to Ayush Solanki. If your email app does not launch automatically, you can copy the message or email directly.'
      });
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3 mb-4" />
          
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {PORTFOLIO_DATA.personal.contactInvitation}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy Button */}
            <div className="rounded-xl p-5 bg-[#0d121f] border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-sm sm:text-base font-mono text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="rounded-xl p-5 bg-[#0d121f] border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                Code Repositories
              </div>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-mono text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-xl p-5 bg-[#0d121f] border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                Professional Network
              </div>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-mono text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* Location & University Card */}
            <div className="rounded-xl p-5 bg-[#0a0e18] border border-slate-800/80">
              <div className="flex items-start gap-3 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200">Current Base:</span> {PORTFOLIO_DATA.personal.location}
                  <div className="text-[11px] text-slate-500 mt-0.5">Swami Rama Himalayan University (SRHU) Campus</div>
                </div>
              </div>
            </div>

          </div>

          {/* Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0d121f]/95 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2 text-white font-bold font-['Space_Grotesk']">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Send a Message</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400">Genuine Email Delivery</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className={`w-full bg-[#080b12] border ${
                      errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-cyan-500'
                    } rounded-lg px-4 py-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className={`w-full bg-[#080b12] border ${
                      errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-cyan-500'
                    } rounded-lg px-4 py-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project Collaboration / Internship Discussion"
                    className="w-full bg-[#080b12] border border-slate-800 focus:border-cyan-500 rounded-lg px-4 py-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note, idea, or questions here..."
                    className={`w-full bg-[#080b12] border ${
                      errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-cyan-500'
                    } rounded-lg px-4 py-2.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Message Banner */}
                {statusMessage && (
                  <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 leading-relaxed font-mono flex items-start gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Transmission...' : 'Transmit Message to Ayush'}</span>
                </button>
              </form>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-slate-500 font-mono">
                  Guaranteed privacy: No private API keys exposed in browser bundle.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
