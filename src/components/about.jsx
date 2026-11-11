import { useContext } from 'react';
import { FiCode, FiHeart, FiBookOpen, FiUsers } from 'react-icons/fi';
import { ThemeContext } from './ThemeContext';
import sait from '../assets/sait-logo.svg';
import eit from '../assets/eit.jpeg';
import odin from '../assets/odin.jpeg';

const education = [
    {
        school: 'Southern Alberta Institute of Technology',
        program: 'Software Development',
        dates: 'Jan 2026 - Apr 2027 (expected)',
        status: 'In progress',
        image: sait,
        accent: 'bg-violet-100 text-violet-800 dark:bg-violet-400/10 dark:text-violet-200',
    },
    {
        school: 'The Odin Project',
        program: 'Full Stack Development',
        dates: '2024 - 2025',
        image: odin,
        accent: 'bg-amber-100 text-amber-900 dark:bg-amber-400/10 dark:text-amber-200',
    },
    {
        school: 'Eritrea Institute of Technology',
        program: 'B.Sc. in Computer Science',
        dates: '2014 - 2019',
        image: eit,
        accent: 'bg-sky-100 text-sky-800 dark:bg-sky-400/10 dark:text-sky-200',
    },
];

const values = [
    { title: 'Build with purpose', text: 'I enjoy building projects that solve real-world problems.', icon: FiCode },
    { title: 'Stay curious', text: 'There is always something new to learn, try, and improve.', icon: FiBookOpen },
    { title: 'Grow together', text: 'Honest communication and strong relationships matter to me.', icon: FiUsers },
];

export default function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme === 'white' ? 'bg-orange-50 text-slate-900' : 'dark bg-black text-slate-100'}>
            <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
                <div className="mb-8 max-w-2xl">
                    <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-blue-300">The person behind the code</p>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Always building. Always learning<span className="text-violet-600 dark:text-blue-400">.</span></h2>
                    <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">I'm Amanuel, a full stack developer who enjoys turning ideas into useful web applications. My path combines a computer science foundation, hands-on projects, and continued learning in software development.</p>
                </div>

                <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_1fr]">
                    <section aria-labelledby="education-heading" className="rounded-3xl border border-violet-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-6">
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <h3 id="education-heading" className="text-xl font-bold">My learning journey</h3>
                            <span aria-hidden="true" className="-rotate-3 rounded-lg bg-amber-100 px-3 py-1 font-mono text-xs font-semibold text-amber-900 dark:bg-slate-800 dark:text-amber-200">keep growing</span>
                        </div>
                        <ol className="space-y-4">
                            {education.map(item => (
                                <li key={item.school} className="rounded-2xl border border-slate-100 p-4 transition duration-100 ease-out hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50/50 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-900">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-2">
                                            <img src={item.image} alt={`${item.school} logo`} loading="lazy" className="max-h-full w-full object-contain" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">{item.school}</p>
                                            <h4 className="mt-1 font-bold">{item.program}</h4>
                                            <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{item.dates}</p>
                                            {item.status && <span className={`${item.accent} mt-2 inline-block rounded-full px-2.5 py-1 text-xs font-semibold`}>{item.status}</span>}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <div className="space-y-5">
                        <section aria-labelledby="values-heading" className="rounded-3xl border border-violet-200 bg-violet-50 p-5 dark:border-slate-800 dark:bg-slate-950 sm:p-6">
                            <h3 id="values-heading" className="mb-5 text-xl font-bold">What keeps me going</h3>
                            <ul className="space-y-5">
                                {values.map(({ title, text, icon: Icon }) => (
                                    <li key={title} className="flex items-start gap-3">
                                        <span className="flex h-10 w-10 shrink-0 -rotate-3 items-center justify-center rounded-xl bg-white text-violet-700 dark:bg-slate-800 dark:text-blue-300"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                                        <div><h4 className="font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{text}</p></div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section aria-labelledby="outside-heading" className="rounded-3xl border border-amber-200 bg-amber-100/60 p-5 dark:border-slate-800 dark:bg-slate-950 sm:p-6">
                            <FiHeart aria-hidden="true" className="mb-3 h-6 w-6 text-orange-700 dark:text-amber-300" />
                            <h3 id="outside-heading" className="text-lg font-bold">Away from the keyboard</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">You'll find me exploring the outdoors, reading, and connecting with people from different walks of life.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
