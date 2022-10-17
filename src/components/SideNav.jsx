import React, { useContext } from 'react';
import { Context } from '../context/Context';
import Link from 'next/link';

export default function SideNav({ surahs }) {
  const { open, setOpen } = useContext(Context);
  return (
    <div
      className={`${open} fixed inset-0 top-[7rem] right-auto z-20 w-[19.5rem] overflow-y-auto bg-white px-8  pb-10 pt-0 duration-300 dark:bg-slate-900 lg:top-[3.8125rem] lg:translate-x-0 `}>
      <nav id="nav" className="relative lg:text-sm lg:leading-6">
        <li className="mt-10 list-none lg:mt-8">
          <h5 className="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
            Core Concepts
          </h5>
          <ul className="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2">
            {surahs.map((surah) => {
              return (
                <Link href={`/surah/${encodeURIComponent(surah.nomor)}`}>
                  <a>
                    <li
                      key={surah.nomor}
                      className="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300">
                      {surah.nama_latin}
                    </li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </li>
      </nav>
    </div>
  );
}
