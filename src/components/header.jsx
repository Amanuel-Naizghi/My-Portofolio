import { useContext, useRef, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import coderIcon from '../assets/coder-menu.svg';
import moonIcon from '../assets/dark.png';
import sunIcon from '../assets/light.png';

const navigationLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Skills', href: '/#skills' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
];

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const isDarkMode = theme !== 'white';

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function handleKeyDown(event) {
        if (event.key === 'Escape' && isMenuOpen) {
            closeMenu();
            menuButtonRef.current?.focus();
        }
    }

    return (
        <header
            className={`${isDarkMode ? 'dark' : ''} fixed inset-x-0 top-0 z-50`}
            onKeyDown={handleKeyDown}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
            }}
        >
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3 focus:text-slate-900"
            >
                Skip to content
            </a>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/20 md:hidden"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            <nav
                aria-label="Main navigation"
                className="relative border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-100"
            >
                <div className="relative mx-auto flex h-[72px] max-w-6xl items-center gap-3 px-4 md:gap-6 md:px-8">
                    <a href="/#top" onClick={closeMenu} className="mr-auto rounded text-xl font-extrabold tracking-tight focus-visible:outline-blue-500">
                        Amanuel<span className="text-blue-600 dark:text-blue-400">.</span>
                    </a>

                    {/* One set of links: a dropdown on mobile, an inline row on desktop. */}
                    <ul
                        id="main-navigation-links"
                        className={`${isMenuOpen ? 'flex' : 'hidden'} absolute inset-x-4 top-20 max-h-[calc(100dvh-6rem)] flex-col gap-1 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-950 md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-2 md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent`}
                    >
                        {navigationLinks.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    onClick={closeMenu}
                                    className="block rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-blue-500 motion-reduce:transition-none dark:hover:bg-slate-800 dark:hover:text-blue-300"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} theme`}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors hover:bg-slate-100 focus-visible:outline-blue-500 motion-reduce:transition-none dark:hover:bg-slate-800"
                    >
                        <img src={isDarkMode ? sunIcon : moonIcon} alt="" className="h-6 w-6" />
                    </button>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-controls="main-navigation-links"
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        className="group flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 px-2 text-blue-600 transition-colors hover:bg-blue-50 focus-visible:outline-blue-500 motion-reduce:transition-none dark:border-slate-700 dark:text-blue-400 dark:hover:bg-slate-800 md:hidden"
                    >
                        <img src={coderIcon} alt="" className="h-9 w-9 transition-transform group-hover:-rotate-6 motion-reduce:transform-none motion-reduce:transition-none" />
                        <span aria-hidden="true" className="text-xl leading-none">{isMenuOpen ? '\u00d7' : '\u2630'}</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
