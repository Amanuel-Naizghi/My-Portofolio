import { useContext } from 'react';
import { FaAws } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import { skillGroups, programmingLanguages } from '../data/skills';

function SkillTile({ skill }) {
    const Icon = skill.icon;

    return (
        <li className="group flex min-w-0 flex-col items-center gap-3 rounded-xl border border-slate-100 bg-orange-50/60 px-2 py-4 transition duration-100 ease-out hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-50 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 dark:hover:bg-slate-800">
            <Icon aria-hidden="true" className={`${skill.color} h-8 w-8 shrink-0 transition-transform duration-100 group-hover:-rotate-6 motion-reduce:transform-none motion-reduce:transition-none`} />
            <span className="text-center text-xs font-semibold leading-relaxed sm:text-sm">{skill.name}</span>
        </li>
    );
}

export default function Experience() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme === 'white' ? 'bg-orange-50 text-slate-900' : 'dark bg-black text-slate-100'}>
            <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
                <div className="mb-8">
                    <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-blue-300">Tools of the trade</p>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">My developer toolbox<span className="text-violet-600 dark:text-blue-400">.</span></h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">From the first HTML tag to a deployed full stack application, these are the tools I build with.</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {skillGroups.map((group, index) => (
                        <article key={group.title} className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-6">
                            <div className="mb-3 flex items-center gap-3">
                                <span aria-hidden="true" className={`${group.accent} flex h-9 w-9 shrink-0 -rotate-3 items-center justify-center rounded-lg font-mono text-xs font-bold`}>0{index + 1}</span>
                                <h3 className="text-lg font-bold tracking-tight">{group.title}</h3>
                            </div>
                            <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{group.description}</p>
                            <ul className="grid grid-cols-2 gap-3 min-[360px]:grid-cols-3 lg:grid-cols-4">
                                {group.skills.map(skill => <SkillTile key={skill.name} skill={skill} />)}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                        <div className="mr-auto"><h3 className="font-bold">Programming languages</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Building solutions with Java and Python.</p></div>
                        {programmingLanguages.map(({ name, icon: Icon, color }) => (
                            <span key={name} className="inline-flex items-center gap-2 text-sm font-semibold"><Icon aria-hidden="true" className={`${color} h-6 w-6`} />{name}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-100/60 p-5 dark:border-slate-800 dark:bg-slate-950">
                        <FaAws aria-hidden="true" className="h-10 w-10 shrink-0 text-orange-700 dark:text-amber-300" />
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-amber-900 dark:text-amber-200">Certification</p>
                            <p className="mt-1 font-bold">AWS Certified Cloud Practitioner</p>
                            <a
                                href="https://www.credly.com/badges/fc6ecbcd-dd5d-402b-8210-67fa54e4d134/linked_in_profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Verify AWS Certified Cloud Practitioner on Credly (new tab)"
                                className="mt-2 inline-flex min-h-11 items-center rounded text-sm font-semibold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900 focus-visible:outline-violet-500 dark:text-blue-300 dark:hover:text-blue-200"
                            >
                                Verify on Credly
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
