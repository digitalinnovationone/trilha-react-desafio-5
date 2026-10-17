import Link from 'next/link';

type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
  return (
    <header className="flex w-full items-center justify-between border-b border-slate-200 py-5 dark:border-slate-800">
      <Link href="/" legacyBehavior>
        <a
          aria-label={`${name} - página inicial`}
          className="flex items-center gap-3 font-semibold text-slate-900 dark:text-white"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white"
          >
            {name.charAt(0).toUpperCase()}
          </span>
          {name}
        </a>
      </Link>
      <nav aria-label="Navegação principal">
        <Link href="/" legacyBehavior>
          <a className="text-sm font-medium text-slate-600 transition hover:text-primary dark:text-slate-300">
            Início
          </a>
        </Link>
      </nav>
    </header>
  );
}
