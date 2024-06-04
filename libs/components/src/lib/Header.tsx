import Image from 'next/image';
import flags from './flags.svg';
import { Marquee } from './Marquee';

export function Header() {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-amber-500 to-[#cc5538]  h-14 flex items-center text-slate-800 p-2 px-4 justify-between">
        <div className="flex items-center">
          <Image
            className="mr-1 object-cover"
            src={flags}
            alt="Flags"
            width={64}
          />
          <div className="text-xl">
            <a href="/">Automotriz COBA</a>
          </div>
        </div>
        <span className="text-sm text-white">+56 9 9427-51-15</span>
      </div>
      <div className="bg-white h-10"></div>
      <Marquee />
    </div>
  );
}
