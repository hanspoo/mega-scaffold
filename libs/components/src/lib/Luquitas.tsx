import { useState } from 'react';

type Banner = {
  label: string;
  imagen: string;
  imagen2?: string;
  cuerpo?: string;
};

const b1: Banner = {
  label: 'Compra promo con Papitas Full',
  imagen: 'papitas.jpg',
};
const b2: Banner = {
  label: 'Full burger invierno',
  imagen: 'burger.jpg',
};
const b3: Banner = {
  label: 'Cocal cola light 3.0',
  imagen: 'coca.jpg',
};

const banners = [b1, b2, b3];

export function Luquitas() {
  const [actual, setActual] = useState<Banner>(b1);
  return (
    <div>
      <div>
        {banners.map((b) => (
          <button onClick={() => setActual(b)}>{b.label}</button>
        ))}
      </div>
      <div>
        <h1>{actual.label}</h1>
        <img src={actual.imagen} alt={b1.label}></img>
      </div>
    </div>
  );
}
