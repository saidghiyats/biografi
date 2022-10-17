import SideNav from '../../components/SideNav';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export const getStaticPaths = async () => {
  const res = await fetch('https://equran.id/api/surat');
  const data = await res.json();

  const paths = data.map((surah) => {
    return {
      params: {
        surahId: surah.nomor.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const res = await fetch(`https://equran.id/api/surat/${params.surahId}`);
  const data = await res.json();

  return {
    props: {
      surahs: data,
    },
  };
}

export default function Surah({ surahs }) {
  console.log(surahs);
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      {/* <SideNav /> */}
      <div className="lg:pl-[19.5rem]">
        <main className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:max-w-none ">
          <Header />
          <p>{surahs.nama}</p>
        </main>
        <Footer />
      </div>
    </div>
  );
}
