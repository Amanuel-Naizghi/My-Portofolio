import {
    SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiPrisma,
    SiSocketdotio, SiPostgresql, SiMysql, SiFirebase, SiNginx, SiPython,
    SiVercel, SiRender,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';

// Full Tailwind class names keep the icon colors easy to edit and discoverable.
export const skillGroups = [
    {
        title: 'Frontend & styling',
        description: 'Interfaces, interactions, and the details that bring them together.',
        accent: 'bg-violet-100 text-violet-800 dark:bg-violet-400/10 dark:text-violet-200',
        skills: [
            { name: 'HTML', icon: SiHtml5, color: 'text-orange-600 dark:text-orange-400' },
            { name: 'CSS', icon: SiCss, color: 'text-blue-600 dark:text-blue-400' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-600 dark:text-yellow-300' },
            { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-700 dark:text-blue-400' },
            { name: 'React', icon: SiReact, color: 'text-cyan-700 dark:text-cyan-300' },
            { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-900 dark:text-white' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-700 dark:text-cyan-300' },
            { name: 'Bootstrap', icon: SiBootstrap, color: 'text-violet-700 dark:text-violet-400' },
        ],
    },
    {
        title: 'Backend & real-time',
        description: 'The APIs and server logic working behind the screen.',
        accent: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-700 dark:text-green-400' },
            { name: 'Express', icon: SiExpress, color: 'text-slate-700 dark:text-slate-200' },
            { name: 'Socket.IO', icon: SiSocketdotio, color: 'text-slate-800 dark:text-slate-200' },
            { name: 'Prisma', icon: SiPrisma, color: 'text-indigo-800 dark:text-indigo-300' },
        ],
    },
    {
        title: 'Databases & services',
        description: 'Keeping application data connected and organized.',
        accent: 'bg-sky-100 text-sky-800 dark:bg-sky-400/10 dark:text-sky-200',
        skills: [
            { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-800 dark:text-blue-300' },
            { name: 'MySQL', icon: SiMysql, color: 'text-sky-800 dark:text-sky-300' },
            { name: 'Firebase', icon: SiFirebase, color: 'text-orange-600 dark:text-amber-300' },
        ],
    },
    {
        title: 'Cloud & deployment',
        description: 'Taking applications from local development to the web.',
        accent: 'bg-amber-100 text-amber-900 dark:bg-amber-400/10 dark:text-amber-200',
        skills: [
            { name: 'AWS EC2', icon: FaAws, color: 'text-orange-700 dark:text-amber-300' },
            { name: 'AWS RDS', icon: FaAws, color: 'text-orange-700 dark:text-amber-300' },
            { name: 'Nginx', icon: SiNginx, color: 'text-green-700 dark:text-green-400' },
            { name: 'Vercel', icon: SiVercel, color: 'text-slate-900 dark:text-white' },
            { name: 'Render', icon: SiRender, color: 'text-slate-900 dark:text-white' },
        ],
    },
];

export const programmingLanguages = [
    { name: 'Java', icon: FaJava, color: 'text-orange-700 dark:text-orange-300' },
    { name: 'Python', icon: SiPython, color: 'text-blue-700 dark:text-blue-300' },
];
