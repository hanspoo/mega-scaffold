'use client';
import { Neumatico, filtrarAro } from '@coba/api-interfaces';
import { Dropdown, DropdownOption } from './utils/Dropdown';
import React, { useState } from 'react';
import { NeumaticoDetail } from './NeumaticoDetail';

type NeumaticosProps = { neumaticos: Array<Neumatico> };

export function Neumaticos({ neumaticos }: NeumaticosProps) {
  const [aro, setAro] = React.useState<string>();
  const [medida, setMedida] = React.useState<string>();
  const [filtrados, setFiltrados] = useState<Neumatico[]>();
  const [medidasAro, setMedidasAro] = React.useState<string[]>();
  const [buscando, setBuscando] = useState(false);

  const aros = React.useMemo(
    () =>
      neumaticos.reduce((acc: Record<string, string>, iter: Neumatico) => {
        acc[iter.aro] = '1';
        return acc;
      }, {}),
    [neumaticos]
  );

  const arosOk: Array<DropdownOption> = Object.keys(aros)
    .sort((a, b) => a.localeCompare(b))
    .map((a) => ({
      value: a,
      label: a,
    }));

  const onSelectAros = (value: string | number) => {
    setBuscando(true);
    setTimeout(() => setBuscando(false), 2000);
    const s = value as string;
    setAro(s);

    const filtrados = filtrarAro(neumaticos, s);
    setFiltrados(filtrados);

    const reMedidas = /((1|2)\d\d)\//;

    const meds = filtrados.reduce(
      (acc: Record<string, string>, iter: Neumatico) => {
        const match = reMedidas.exec(iter.medida);
        if (match) acc[match[1]] = '1';
        else acc[iter.medida] = '1';
        return acc;
      },
      {}
    );

    // console.log(`buscando medidas aro ${value}`);
    // console.log(Object.keys(meds));

    setMedidasAro(Object.keys(meds).sort((a, b) => a.localeCompare(b)));
    setMedida(undefined);
  };

  const onSelectMedida = (medida: string | number) => {
    const m = medida + '';
    setMedida(m);
    const re = new RegExp(m, 'i');
    const filt = filtrarAro(neumaticos, aro || '');
    setFiltrados(filt?.filter((n) => re.test(n.medida)));
  };

  const lista = aro && medida ? filtrados : neumaticos;

  return (
    <div className="p-2">
      <h3 className="text-2xl mb-2">Encuentra tu neumático:</h3>
      <div className="grid grid-cols-2 gap-4">
        <label>Aro</label>
        <label>Medida</label>

        <Dropdown options={arosOk} onSelect={onSelectAros} selected={aro} />
        <Dropdown
          selected={medida}
          options={medidasAro?.map((m) => ({ label: m, value: m })) as any}
          onSelect={onSelectMedida}
          disabled={!aro}
        />
      </div>

      <div className="pt-5"> </div>
      {buscando ? (
        <p className="text-yellow-500">Espere un momento...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 ">
          {lista?.map((n) => (
            <NeumaticoDetail neumatico={n} key={n.id} />
          ))}
        </div>
      )}
    </div>
  );
}
