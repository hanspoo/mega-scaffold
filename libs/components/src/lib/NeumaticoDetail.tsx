'use client';
import { Neumatico } from '@coba/api-interfaces';
import Image from 'next/image';
import defaultImage from './good-year.png';
import React from 'react';

type NeumaticoDetailProps = {
  neumatico: Neumatico;
};

export function NeumaticoDetail({ neumatico }: NeumaticoDetailProps) {
  const [fade, setFade] = React.useState(false);

  // React.useEffect(() => {
  //   setTimeout(() => setFade(true), 1000);
  // }, []);

  return (
    <div className="border-2 border-slate-400 p-10 flex items-center justify-center flex-col  ">
      <div className="flex flex-row">
        <Image
          src={defaultImage}
          alt={neumatico.marca}
          width={150}
          className="mx-4"
        />
        <div className="mb-4 flex flex-col items-start justify-center max-w-96">
          <div className="mb-4 ">
            <h2 className="font-bold">Marca: {neumatico.marca}</h2>
            <div className="text-sm text-slate-400">
              <div>Aro: {neumatico.aro}</div>
              <div>Medida: {neumatico.medida}</div>
            </div>
          </div>
          <button className="bg-orange-600 text-white p-2 px-6 rounded-md hover:bg-orange-500">
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  );
}
