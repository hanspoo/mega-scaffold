import { capitalize } from './utils';

export class Neumatico {
  constructor(
    public id: string,
    public medida: string,
    public aro: string,
    public marca: string,
    public cantidad: number,
    public valor: number
  ) {}

  static fromLine(line: string): Neumatico | undefined {
    const [id, medida, aro, marca, cantidad, valor] = line.split(';');
    const reAro = /(r\d+)/i;
    const match = reAro.exec(aro);

    return match
      ? new Neumatico(
          id,
          medida,
          match[1].toUpperCase(),
          capitalize(marca),
          parseInt(cantidad),
          parseFloat(valor)
        )
      : undefined;
  }
}
