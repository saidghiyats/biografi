import HeroSec from '../components/biografi/HeroSec';

export default function Layout({ children }) {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <HeroSec />
      </div>
    </>
  );
}
