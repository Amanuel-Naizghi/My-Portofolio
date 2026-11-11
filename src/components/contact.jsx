import { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { FiSend, FiMessageCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const emptyForm = { name: '', email: '', message: '' };
const inputStyle = 'mt-2 w-full rounded-xl border border-violet-200 bg-orange-50/50 p-3 text-slate-900 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-900';

export default function ContactMe() {
    const { theme } = useContext(ThemeContext);
    const [formData, setFormData] = useState(emptyForm);
    const [status, setStatus] = useState('idle');
    const isSending = status === 'sending';

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        if (status !== 'sending') setStatus('idle');
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (isSending) return;
        setStatus('sending');
        try {
            await emailjs.send('service_1u43ft5', 'template_rb06v9s', formData, 'cS_jDzwuNTCDgoMdz');
            setFormData(emptyForm);
            setStatus('success');
        } catch (error) {
            console.error('EmailJS delivery failed:', error.status, error.text);
            setStatus('error');
        }
    }

    return (
        <div className={theme === 'white' ? 'bg-orange-50 text-slate-900' : 'dark bg-black text-slate-100'}>
            <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
                <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-blue-300">Good things start with a hello</p>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's build something together<span className="text-violet-600 dark:text-blue-400">.</span></h2>
                <div className="mt-8 grid items-start gap-6 md:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6 dark:border-slate-800 dark:bg-slate-950 sm:p-8">
                        <span className="mb-6 inline-flex -rotate-6 rounded-2xl bg-amber-200 p-4 text-violet-900"><FiMessageCircle aria-hidden="true" className="h-7 w-7" /></span>
                        <h3 className="text-2xl font-bold">Have an idea in mind?</h3>
                        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">A project, a collaboration, or a developer opportunity? Tell me a little about it. I'd love to connect.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href="https://github.com/Amanuel-Naizghi" target="_blank" rel="noopener noreferrer" aria-label="GitHub (new tab)" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-violet-200 bg-white px-4 py-2 text-sm font-semibold transition duration-100 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-900"><FaGithub aria-hidden="true" />GitHub</a>
                            <a href="https://www.linkedin.com/in/amanuel-tesfatsion" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (new tab)" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-violet-200 bg-white px-4 py-2 text-sm font-semibold transition duration-100 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-900"><FaLinkedin aria-hidden="true" />LinkedIn</a>
                        </div>
                        <p className="mt-8 font-mono text-xs text-violet-700 dark:text-blue-300">An idea + a conversation = a starting point.</p>
                    </div>
                    <form onSubmit={handleSubmit} aria-busy={isSending} className="rounded-3xl border border-violet-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
                        <h3 className="mb-5 text-xl font-bold">Send me a note</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="text-sm font-semibold">Your name<input name="name" autoComplete="name" placeholder="What should I call you?" value={formData.name} onChange={handleChange} required disabled={isSending} className={inputStyle} /></label>
                            <label className="text-sm font-semibold">Email address<input type="email" name="email" autoComplete="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required disabled={isSending} className={inputStyle} /></label>
                        </div>
                        <label className="mt-5 block text-sm font-semibold">Your message<textarea name="message" rows={5} placeholder="Tell me about your idea..." value={formData.message} onChange={handleChange} required disabled={isSending} className={`${inputStyle} resize-y`} /></label>
                        <button type="submit" disabled={isSending} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white transition-colors duration-100 hover:bg-violet-800 focus-visible:outline-violet-500 disabled:cursor-wait disabled:opacity-60 motion-reduce:transition-none dark:bg-blue-600 dark:hover:bg-blue-700"><FiSend aria-hidden="true" />{isSending ? 'Sending...' : 'Send message'}</button>
                        <div role="status" aria-live="polite" className="mt-3 text-sm leading-relaxed">
                            {status === 'success' && <p className="text-emerald-700 dark:text-emerald-300">Message sent. Thanks for reaching out!</p>}
                            {status === 'error' && <p className="text-red-700 dark:text-red-300">Your message couldn't be sent. Please try again or connect on LinkedIn. Your message is still here.</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
