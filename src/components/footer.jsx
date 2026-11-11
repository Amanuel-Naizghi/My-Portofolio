import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={theme === 'white' ? 'bg-orange-50 text-slate-900' : 'dark bg-black text-slate-100'}>
            <div className="mx-auto max-w-6xl px-5 md:px-8">
                <div className="flex flex-col gap-5 border-t border-violet-200 py-8 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <a href="/#top" className="text-lg font-extrabold tracking-tight">Amanuel<span className="text-violet-700 dark:text-blue-400">.</span></a>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Full stack developer. Always curious.</p>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Amanuel Tesfatsion</p>
                    </div>
                    <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                        <a href="/#work" className="inline-flex min-h-11 items-center hover:text-violet-700 dark:hover:text-blue-300">Work</a>
                        <a href="/#about" className="inline-flex min-h-11 items-center hover:text-violet-700 dark:hover:text-blue-300">About</a>
                        <a href="/#contact" className="inline-flex min-h-11 items-center hover:text-violet-700 dark:hover:text-blue-300">Contact</a>
                        <a href="/#top" className="inline-flex min-h-11 items-center text-violet-700 dark:text-blue-300">Back to top</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
