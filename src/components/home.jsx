import { useContext } from 'react';
import profile from '../assets/profile-img1.jpeg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import { ThemeContext } from './ThemeContext';
import Experience from './experience';
import Projects from './projects';
import About from './about';
import ContactMe from './contact';

export default function Home() {
    const { theme } = useContext(ThemeContext);
    const isDarkMode = theme !== 'white';

    return (
        <main id="main-content" className={`${isDarkMode ? 'dark bg-black text-white' : 'bg-orange-50 text-slate-900'} min-h-screen`}>
            <section id="top" aria-labelledby="hero-title" className="relative isolate mx-auto grid max-w-6xl items-center gap-10 overflow-hidden px-6 py-12 md:grid-cols-[1.2fr_1fr] md:gap-12 md:px-8 md:py-20">
                <div className="motion-safe:animate-enter">
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-800 dark:border-slate-700 dark:bg-slate-900 dark:text-blue-300">
                        <span aria-hidden="true">&lt;/&gt;</span> Ideas into interfaces. And beyond.
                    </p>
                    <p className="mb-2 text-lg text-slate-600 dark:text-slate-300">Hello, I'm Amanuel Tesfatsion</p>
                    <h1 id="hero-title" className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Full Stack<br /><span className="text-violet-700 dark:text-blue-400">Developer<span className="text-orange-600 dark:text-blue-300">.</span></span>
                    </h1>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                        I build responsive web applications, from thoughtful React interfaces to Node.js APIs, databases, and cloud deployment.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <a href="#work" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-800 focus-visible:outline-violet-500 motion-reduce:transform-none motion-reduce:transition-none dark:bg-blue-600 dark:hover:bg-blue-700">
                            Explore my work <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="/AMANUEL-TESFATSION.pdf" className="inline-flex min-h-12 items-center rounded-xl border border-slate-300 bg-white/70 px-5 py-3 font-semibold transition hover:-translate-y-1 hover:bg-white focus-visible:outline-violet-500 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">View resume</a>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <a href="https://github.com/Amanuel-Naizghi" className="rounded-full bg-white p-2 transition-transform hover:-translate-y-1 focus-visible:outline-violet-500 motion-reduce:transform-none motion-reduce:transition-none"><img src={github} alt="GitHub" className="h-6 w-6" /></a>
                        <a href="https://www.linkedin.com/in/amanuel-tesfatsion" className="rounded-full bg-white p-2 transition-transform hover:-translate-y-1 focus-visible:outline-violet-500 motion-reduce:transform-none motion-reduce:transition-none"><img src={linkedin} alt="LinkedIn" className="h-6 w-6" /></a>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">AWS Certified Cloud Practitioner</span>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-sm px-5 pb-6 pt-3 motion-safe:animate-enter">
                    <div aria-hidden="true" className="absolute inset-8 -rotate-6 rounded-[3rem] bg-violet-200 dark:bg-slate-900" />
                    <div aria-hidden="true" className="absolute right-1 top-0 flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl bg-amber-200 font-mono text-xl font-bold text-violet-900 dark:bg-slate-800 dark:text-blue-300 motion-safe:animate-bob">&lt;/&gt;</div>
                    <img src={profile} alt="Amanuel Tesfatsion" className="relative aspect-square w-full rounded-[2.5rem] border-4 border-white object-cover shadow-lg transition-transform duration-300 hover:rotate-2 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-800" />
                    <p className="relative -mt-5 ml-4 w-fit -rotate-3 rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">Frontend + Backend + a little curiosity</p>
                </div>
            </section>
            <section id="work" aria-label="Selected work"><Projects /></section>
            <section id="skills" aria-label="Skills"><Experience /></section>
            <section id="about" aria-label="About me"><About /></section>
            <section id="contact" aria-label="Contact"><ContactMe /></section>
        </main>
    );
}
