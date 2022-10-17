import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function index({ surahs }) {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <SideNav surahs={surahs} />
      <div className="lg:pl-[19.5rem]">
        <main className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:max-w-none ">
          <Header />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
            {surahs.map((surah) => {
              return (
                <div
                  className="card bg-white shadow-xl dark:bg-slate-900"
                  key={surah.nomor}>
                  <div className="card-body ">
                    <h2 className="arabic card-title">{surah.nama}</h2>
                    <p>{surah.nama_latin}</p>
                    <Link href={`/surah/${encodeURIComponent(surah.nomor)}`}>
                      <a>
                        <div className="card-actions justify-end">
                          <button className=" btn border-none bg-sky-400/10 font-medium text-sky-600 hover:bg-sky-400/20 dark:text-sky-400">
                            Baca
                          </button>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://equran.id/api/surat');
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      surahs: data,
    },
  };
}
