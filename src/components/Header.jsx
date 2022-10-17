export default function Header() {
  return (
    <header id="header" className="mb-10 md:flex md:items-start">
      <div className="max-w-4xl flex-auto">
        <p className="mb-4 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
          Installation
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
          Get started with Tailwind CSS
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
          Tailwind CSS works by scanning.
        </p>
      </div>
    </header>
  );
}
