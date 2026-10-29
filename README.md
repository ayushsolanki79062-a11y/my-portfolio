# Ayush Solanki — Developer Portfolio Website

A modern, responsive, high-performance developer portfolio built for **Ayush Solanki**, second-year BCA student at Swami Rama Himalayan University (SRHU), passionate about programming, software engineering, and solving real-world challenges.

![Theme](https://img.shields.io/badge/Theme-Dark%20Charcoal%20%26%20Electric%20Blue-00f0ff)
![React](https://img.shields.io/badge/React-19.x-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-6.x-purple)

---

## 🌟 Key Features

1. **Dark Charcoal & Electric Blue Aesthetic**
   - Clean, futuristic, and distraction-free developer design.
   - Tailored typography with *Space Grotesk*, *Inter*, and *JetBrains Mono*.

2. **Interactive C & Java Code Visualizer**
   - Live multi-tab developer workspace featuring authentic C memory/DSA code and Java OOP structures.
   - Interactive "Run Code" simulation with console output.
   - Copy code snippet button.

3. **Interactive Developer Terminal**
   - Shows developer configuration:
     ```python
     developer = "Ayush Solanki"
     education = "BCA @ SRHU"
     interests = ["Programming", "Software Development"]
     status = "Always Learning"
     ```
   - Interactive CLI supporting commands: `help`, `cat profile.json`, `skills`, `education`, `status`, `contact`, `clear`.

4. **Honest & Grouped Programming Skills**
   - Organized into **Programming Languages**, **CS Fundamentals**, and **Development Tools**.
   - Clear distinction between **Core Foundation** (C, Java, OOP, DSA, DBMS, MySQL, Git) and **Currently Exploring** (Python).
   - Zero fabricated proficiency percentages.

5. **Project Showcase with Authentic Tracking**
   - Status filters: `All`, `Completed`, `In Progress`, `Planning`.
   - Cards display problem solved, technologies, status badge, GitHub repo, and live links.
   - Modal deep-dive specs for every project.
   - Seamless extensibility: add upcoming Java, C, DBMS, or AI projects in seconds.

6. **SRHU Academic Education Timeline**
   - Bachelor of Computer Applications (BCA) at Swami Rama Himalayan University (HSST).
   - Academic focus areas and genuine achievements.

7. **Currently Learning & Exploring Roadmap**
   - Six structured stages spanning fundamentals, OOP, DSA, clean code, database engineering, and full-stack development.

8. **Where I'm Headed (Career Goals)**
   - 5 dedicated ambition cards: Software Development, Problem-Solving, Real-World Projects, Internship Opportunities, Continuous Learning.

9. **Genuine Contact Form & Socials**
   - Client-side validation for name, email, and message.
   - Direct `mailto:` transmission generation that works across all devices.
   - One-click copy for email address.

10. **Resume Modal & PDF Download**
    - Instant preview modal with printer support.
    - Direct download button linked to `public/resume.pdf`.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates optimized static files in the `dist/` directory ready for deployment.

---

## ✏️ How to Customize Your Content

All data across the entire portfolio is stored in one single, clean configuration file:
👉 **`src/data/portfolioData.ts`**

In that file, you can easily:
- Update your email, GitHub, and LinkedIn profile URLs.
- Add or modify projects (add your new C projects, Java tools, or hackathon repos).
- Add new skills or mark technologies from "Currently Learning" to "Core Foundation".
- Update education milestones and semester status.

### Adding Your Resume PDF
Place your resume PDF inside the `public/` directory named `resume.pdf`:
```
ayush-portfolio/
  └── public/
        └── resume.pdf
```
When visitors click **Download PDF**, this file will download automatically.

---

## 🌐 Free Deployment Guide

### Deploy on GitHub Pages
1. Push this repository to your GitHub account (`https://github.com/ayushsolanki/portfolio`).
2. In `vite.config.ts`, you can set `base: '/portfolio/'` if deploying to a repository page, or leave `base: '/'` for `ayushsolanki.github.io`.
3. In your GitHub repository settings, navigate to **Pages** and choose GitHub Actions (Vite template).

### Deploy on Vercel or Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Click **Deploy**!
