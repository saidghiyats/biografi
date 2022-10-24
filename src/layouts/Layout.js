import Fot from '../components/Fot';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import NavImg from '../components/NavImg';

export default function Layout({ children }) {
  return (
    <>
      <div>
        <NavImg />
        <Navbar />
        <main className="mx-auto max-w-[52rem] px-4 sm:px-6 md:px-8 lg:max-w-6xl xl:px-12">
          <Head />
          {children}
          <Fot />
        </main>
      </div>
    </>
  );
}
