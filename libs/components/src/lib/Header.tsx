import Image from 'next/image';
import flags from './flags.svg';
import race1 from './race1.jpg';
import race2 from './race2.jpg';

export function Header() {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 h-14 flex items-center text-white p-2 px-4 justify-between">
        <div className="flex items-center">
          <Image className="mr-1" src={flags} alt="Flags" width={64} />{' '}
          <em>
            <b>Automotriz COBA</b>
          </em>
        </div>
        <span className="text-sm">+56 9 9427-51-15</span>
      </div>
      <div className="bg-white h-10"></div>
      <div className=" bg-gradient-to-r from-slate-300 to-slate-900 h-60 flex ">
        <Image
          src={race1}
          alt="Sport Car"
          style={{ objectFit: 'contain' }}
          className="h-60"
        />
        <Image
          src={race2}
          alt="Sport Car"
          style={{ objectFit: 'contain' }}
          className="h-60"
        />
      </div>
    </div>
  );
}
