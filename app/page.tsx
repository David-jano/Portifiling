"use client";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  BsFillMoonStarsFill, 
  BsArrowRight,
  BsCodeSlash,
  BsRocket,
  BsLightning
} from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillApple,
  AiFillFacebook,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload
} from "react-icons/ai";
import { 
  FiFigma, 
  FiCode, 
  FiDatabase,
  FiCloud,
  FiSmartphone
} from "react-icons/fi";

import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";

// Particle background component
const ParticleBackground = () => (
  <div className="particles">
    {[...Array(30)].map((_, i) => (
      <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }} />
    ))}
  </div>
);

// Floating elements component
const FloatingElements = () => (
  <div className="floating-elements">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="floating-element" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      }}>
        {i % 3 === 0 ? '< />' : i % 3 === 1 ? '{ }' : '/* */'}
      </div>
    ))}
  </div>
);

// Tech stack badges
const TechBadge = ({ children, color = "blue" }) => (
  <span className={`tech-badge tech-badge-${color}`}>
    {children}
  </span>
);

// Animated counter
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
};

async function getuserinfo() {
  try {
    const response = await fetch('http://rwandavehiclesplates.atwebpages.com/api.php');
    const feed = await response.json();
    console.log('plate_no is' + feed[0].plate_no);
  } catch (error) {
    console.log("failed to grab an API");
  }
}

getuserinfo();

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    { id: 1, img: web1, title: "E-Commerce Platform", category: "web", tech: ["React", "Node.js", "MongoDB"] },
    { id: 2, img: web2, title: "Fintech Dashboard", category: "web", tech: ["Vue.js", "Python", "PostgreSQL"] },
    { id: 3, img: web3, title: "Mobile Fitness App", category: "mobile", tech: ["React Native", "Firebase"] },
    { id: 4, img: web4, title: "AI Analytics Tool", category: "ai", tech: ["Python", "TensorFlow", "FastAPI"] },
    { id: 5, img: web5, title: "Blockchain Explorer", category: "web", tech: ["Next.js", "Ethereum", "Web3"] }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <>
      <Head>
        <title>David | Fullstack Developer & Designer</title>
        <meta name="description" content="Fullstack web developer and designer based in Rwanda. Creating stunning digital experiences with modern technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={darkMode ? "dark" : ""}>
        <style jsx global>{`
          :root {
            --primary: #0ea5e9;
            --secondary: #06d6a0;
            --accent: #f59e0b;
            --dark: #0f172a;
            --light: #f8fafc;
          }

          .dark {
            --bg-primary: #0f172a;
            --bg-secondary: #1e293b;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
          }

          .light {
            --bg-primary: #ffffff;
            --bg-secondary: #f1f5f9;
            --text-primary: #0f172a;
            --text-secondary: #475569;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            transition: all 0.3s ease;
            overflow-x: hidden;
          }

          /* Particles Background */
          .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
          }

          .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary);
            border-radius: 50%;
            animation: float 20s infinite linear;
          }

          @keyframes float {
            0% {
              transform: translateY(100vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100px) rotate(360deg);
              opacity: 0;
            }
          }

          /* Floating Elements */
          .floating-elements {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
          }

          .floating-element {
            position: absolute;
            color: rgba(14, 165, 233, 0.1);
            font-family: monospace;
            font-size: 1.2rem;
            animation: float-slow 15s infinite ease-in-out;
          }

          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          /* Tech Badges */
          .tech-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            margin: 2px;
          }

          .tech-badge-blue {
            background: rgba(14, 165, 233, 0.1);
            color: #0ea5e9;
            border: 1px solid rgba(14, 165, 233, 0.3);
          }

          .tech-badge-green {
            background: rgba(6, 214, 160, 0.1);
            color: #06d6a0;
            border: 1px solid rgba(6, 214, 160, 0.3);
          }

          .tech-badge-amber {
            background: rgba(245, 158, 11, 0.1);
            color: #f59e0b;
            border: 1px solid rgba(245, 158, 11, 0.3);
          }

          /* Enhanced Components */
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .dark .glass-effect {
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .gradient-text {
            background: linear-gradient(135deg, #0ea5e9, #06d6a0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-gradient {
            background: linear-gradient(135deg, #0ea5e9 0%, #06d6a0 50%, #f59e0b 100%);
          }

          /* Stats Section */
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
          }

          .stat-card {
            text-align: center;
            padding: 2rem;
            border-radius: 1rem;
            background: var(--bg-secondary);
            transition: all 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .stat-number {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #0ea5e9, #06d6a0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Enhanced Project Cards */
          .project-card {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            transition: all 0.3s ease;
            background: var(--bg-secondary);
          }

          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .project-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(6, 214, 160, 0.9));
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;
          }

          .project-card:hover .project-overlay {
            opacity: 1;
          }

          /* Custom animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }

          /* Responsive improvements */
          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .stat-number {
              font-size: 2rem;
            }
          }
        `}</style>

        <ParticleBackground />
        <FloatingElements />

        <main className="bg-white dark:bg-slate-900 px-5 md:px-20 lg:px-40 w-full relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center relative">
            <nav className="absolute top-0 left-0 right-0 py-10 px-5 md:px-20 lg:px-40 flex justify-between items-center glass-effect rounded-b-3xl">
              <h1 className="text-xl font-bold gradient-text">David.dev</h1>
              <ul className="flex items-center space-x-6">
                <li>
                  <BsFillMoonStarsFill 
                    className="cursor-pointer text-2xl text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
                <li>
                  <a 
                    href="/resume" 
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Resume</span>
                    <AiOutlineDownload className="text-lg" />
                  </a>
                </li>
              </ul>
            </nav>

            <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 hero-gradient blur-3xl opacity-30 rounded-full"></div>
                <div className="relative bg-gradient-to-b from-teal-500 to-cyan-600 rounded-full w-80 h-80 mx-auto overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                  <Image src={deved} alt="David - Fullstack Developer" layout="fill" objectFit="cover" />
                </div>
              </div>

              <h2 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Hi, I'm David</span>
              </h2>
              <h3 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-light">
                Fullstack Developer & Digital Craftsman
              </h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
                I create stunning digital experiences using modern technologies. 
                Passionate about clean code, intuitive design, and cutting-edge solutions 
                that make a difference.
              </p>

              <div className="flex justify-center space-x-6 mb-12">
                {[
                  { Icon: AiFillGithub, color: "hover:text-gray-700 dark:hover:text-white" },
                  { Icon: AiFillLinkedin, color: "hover:text-blue-600" },
                  { Icon: AiFillTwitterCircle, color: "hover:text-blue-400" },
                  { Icon: AiFillYoutube, color: "hover:text-red-600" }
                ].map(({ Icon, color }, index) => (
                  <Icon 
                    key={index}
                    className={`text-4xl text-slate-400 dark:text-slate-500 cursor-pointer transition-all duration-300 transform hover:scale-110 ${color}`}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <BsArrowRight className="text-lg" />
                </button>
                <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 px-8 py-4 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300">
                  Let's Talk
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20">
            <div className="stats-grid">
              {[
                { number: <AnimatedCounter end={50} />, label: "Projects Completed" },
                { number: <AnimatedCounter end={3} />, label: "Years Experience" },
                { number: <AnimatedCounter end={25} />, label: "Happy Clients" },
                { number: <AnimatedCounter end={15} />, label: "Technologies" }
              ].map((stat, index) => (
                <div key={index} className="stat-card animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold gradient-text mb-4">What I Do</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                I offer comprehensive digital solutions from concept to deployment, 
                ensuring every project exceeds expectations
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  icon: <FiCode className="text-4xl" />, 
                  title: "Fullstack Development", 
                  description: "End-to-end web application development using modern frameworks and best practices.",
                  tools: ["React", "Node.js", "MongoDB", "PostgreSQL"],
                  color: "blue"
                },
                { 
                  icon: <FiSmartphone className="text-4xl" />, 
                  title: "Mobile Development", 
                  description: "Cross-platform mobile applications that deliver native-like performance and experience.",
                  tools: ["React Native", "Flutter", "iOS", "Android"],
                  color: "green"
                },
                { 
                  icon: <FiDatabase className="text-4xl" />, 
                  title: "Backend & APIs", 
                  description: "Scalable server architecture, RESTful APIs, and database design for robust applications.",
                  tools: ["Express.js", "Python", "GraphQL", "Firebase"],
                  color: "amber"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, toolIndex) => (
                      <TechBadge key={toolIndex} color={service.color}>
                        {tool}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="py-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                A showcase of my recent work and creative solutions
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["all", "web", "mobile", "ai"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="project-card animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={project.img}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500"
                    />
                    <div className="project-overlay">
                      <div className="text-center text-white p-6">
                        <h4 className="text-xl font-bold mb-4">{project.title}</h4>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button className="bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Let's Build Something Amazing</h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                  Start a Project
                </button>
                <button className="border-2 border-slate-600 text-slate-300 px-8 py-3 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Connect</h4>
              <div className="flex space-x-4 mb-6">
                {[AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube].map((Icon, index) => (
                  <Icon 
                    key={index}
                    className="text-2xl text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors duration-300"
                  />
                ))}
              </div>
              <p className="text-slate-400 text-sm">
                📧 hello@david.dev<br />
                📱 +250 784 988 283<br />
                🗺️ Kigali, Rwanda
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>© {new Date().getFullYear()} David. Crafted with passion and modern technology.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
