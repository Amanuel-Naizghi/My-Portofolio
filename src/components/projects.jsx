import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { projects } from '../data/projects';

const messagingStack = ['React', 'Vite', 'Tailwind CSS', 'Axios', 'Socket.IO Client', 'Node.js', 'Express', 'Passport.js', 'Express Session', 'Socket.IO', 'Multer', 'Prisma', 'PostgreSQL'];

function StackBadges({ stack }) {
    return (
        <ul aria-label="Technology stack" className="flex flex-wrap gap-2">
            {stack.map(technology => (
                <li key={technology} className="rounded-lg border border-violet-100 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-200">
                    {technology}
                </li>
            ))}
        </ul>
    );
}

function ProjectCard({ project }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm transition duration-100 ease-out hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-violet-400 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-800 dark:bg-slate-950">
            <div className="overflow-hidden border-b border-violet-100 dark:border-slate-800">
                <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" className="aspect-video w-full object-cover object-top transition-transform duration-150 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5">
                <div>
                    <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
                </div>
                <StackBadges stack={project.stack} />
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo (new tab)`} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-violet-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-800 focus-visible:outline-violet-500 motion-reduce:transition-none dark:bg-blue-600 dark:hover:bg-blue-700">
                        Live demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub (new tab)`} className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold transition-colors hover:bg-violet-50 focus-visible:outline-violet-500 motion-reduce:transition-none dark:border-slate-700 dark:hover:bg-slate-800">GitHub</a>
                </div>
            </div>
        </article>
    );
}

function MessagingProject() {
    return (
        <article className="mb-10 grid gap-6 rounded-3xl border border-violet-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-7 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
            <div>
                <p className="mb-3 inline-flex -rotate-2 rounded-lg bg-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-950 dark:bg-amber-200/10 dark:text-amber-200">Featured / Full stack</p>
                <h3 className="text-3xl font-extrabold tracking-tight">Messaging App<span className="text-violet-600 dark:text-blue-400">.</span></h3>
                <p className="mb-4 mt-3 leading-relaxed text-slate-600 dark:text-slate-300">A real-time home for conversations. Private messages, group chats, and profile management, backed by session-based authentication and PostgreSQL.</p>
                <ul className="mb-5 grid gap-2 text-sm sm:grid-cols-2">
                    {['Private & group chats', 'Real-time messaging', 'Edit & delete messages', 'Profile picture uploads'].map(feature => (
                        <li key={feature} className="flex gap-2"><span aria-hidden="true" className="text-violet-600 dark:text-blue-400">&rarr;</span>{feature}</li>
                    ))}
                </ul>
                <StackBadges stack={messagingStack} />
                <a
                    href="https://messaging-app-chi-red.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-violet-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-800 focus-visible:outline-violet-500 motion-reduce:transition-none dark:bg-blue-600 dark:hover:bg-blue-700"
                    aria-label="Open Messaging App live demo (new tab)"
                >
                    Try the messaging app
                </a>
                <details className="mt-5 rounded-xl border border-violet-100 bg-orange-50 px-4 py-3 text-sm dark:border-slate-800 dark:bg-black">
                    <summary className="min-h-6 cursor-pointer font-semibold focus-visible:outline-violet-500">Behind the deployment</summary>
                    <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">Frontend on Vercel. Backend on AWS EC2 with Nginx and PM2. PostgreSQL on AWS RDS, HTTPS with Let's Encrypt, and DNS through DuckDNS.</p>
                </details>
            </div>
            {/* An illustrative conversation, not a screenshot of the application. */}
            <div className="flex flex-col justify-center rounded-2xl bg-violet-50 p-4 dark:bg-slate-900 sm:p-6">
                <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <div className="flex items-center gap-3 border-b border-violet-100 p-4 dark:border-slate-800">
                        <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-200 font-mono font-bold text-violet-900">&lt;/&gt;</span>
                        <div><p className="font-semibold">The build room</p><p className="text-xs text-slate-500 dark:text-slate-400">Illustrative group conversation</p></div>
                    </div>
                    <div className="space-y-4 p-4 sm:p-5">
                        <p className="mr-5 rounded-2xl rounded-tl-sm bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">Got an idea worth building?</p>
                        <p className="ml-5 rounded-2xl rounded-tr-sm bg-violet-700 p-3 text-sm text-white dark:bg-blue-600">Let's turn it into something real.</p>
                        <p className="mr-5 rounded-2xl rounded-tl-sm bg-amber-100 p-3 text-sm text-amber-950 dark:bg-slate-800 dark:text-slate-200">Frontend, backend, and everything between.</p>
                    </div>
                </div>
                <p className="mt-4 text-center font-mono text-xs text-violet-700 dark:text-blue-300">React &harr; Express + Socket.IO &harr; PostgreSQL</p>
            </div>
        </article>
    );
}

export default function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme !== 'white' ? 'dark bg-black text-slate-100' : 'bg-orange-50 text-slate-900'}>
            <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
                <div className="mb-8">
                    <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-blue-300">A little curiosity. A lot of building.</p>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Things I've built<span className="text-violet-600 dark:text-blue-400">.</span></h2>
                    <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">From real-time conversations to JavaScript fundamentals. Explore the projects and the tools behind them.</p>
                </div>
                <MessagingProject />
                <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold">More from my workbench</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">React builds & JavaScript foundations</p>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => <ProjectCard key={project.title} project={project} />)}
                </div>
            </div>
        </div>
    );
}
