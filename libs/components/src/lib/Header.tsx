import Image from 'next/image';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import flags from './flags.svg';
import { Marquee } from './Marquee';

export function Header() {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-amber-500 to-[#cc5538]  h-14 flex items-center text-white p-2 px-4 justify-between">
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

        <div className="flex items-center">
          <ShoppingCartIcon className="w-6 text-white mr-2" />
          <UserCircleIcon className="w-6 text-white" />
        </div>
      </div>
      <div className="bg-white h-10 flex items-center p-4 text-black">
        <span className=" flex text-sm">+56 9 9427-51-15</span>
      </div>
      <Marquee />
    </div>
  );
}
