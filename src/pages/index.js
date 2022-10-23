import HeroSec from '../components/biografi/HeroSec';
import Cn1 from '../components/biografi/Cn1';

export default function index() {
  return (
    <>
      <div className="flex  flex-wrap justify-center space-y-20 overflow-hidden sm:space-y-32 md:space-y-40">
        <header className="relative max-w-[520px] ">
          <HeroSec />
        </header>
      </div>
      <div className="flex  flex-wrap justify-center space-y-20 overflow-hidden sm:space-y-32 md:space-y-40 ">
        <div className="relative max-w-[520px]">
          <Cn1 />
        </div>
      </div>
    </>
  );
}
