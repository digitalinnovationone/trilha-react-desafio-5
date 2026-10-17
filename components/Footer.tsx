import { useEffect, useState } from 'react';

type FooterProps = {
  copyrightText: string;
};

export default function Footer({ copyrightText }: FooterProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const setTheme = (theme: 'dark' | 'light') => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    setIsDark(theme === 'dark');
  };

  return (
    <footer className="mt-20 flex flex-col items-center gap-5 border-t border-slate-200 py-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <p>{copyrightText}</p>
      <div
        aria-label="Tema do site"
        className="flex rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900"
        role="group"
      >
        <button
          aria-pressed={!isDark}
          className="rounded-full px-4 py-2 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary dark:hover:bg-slate-800"
          onClick={() => setTheme('light')}
          type="button"
        >
          Claro
        </button>
        <button
          aria-pressed={isDark}
          className="rounded-full px-4 py-2 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary dark:hover:bg-slate-800"
          onClick={() => setTheme('dark')}
          type="button"
        >
          Escuro
        </button>
      </div>
    </footer>
  );
}
