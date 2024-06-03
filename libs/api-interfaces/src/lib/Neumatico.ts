import { capitalize } from './utils';

export class Neumatico {
  constructor(
    public medida: string,
    public aro: string,
    public marca: string,
    public cantidad: number
  ) {}

  static fromLine(line: string): Neumatico | undefined {
    const [medida, aro, marca, cantidad] = line.split(',');
    const reAro = /(r\d+)/i;
    const match = reAro.exec(aro);

    return match
      ? new Neumatico(
          medida,
          match[1].toUpperCase(),
          capitalize(marca),
          parseInt(cantidad)
        )
      : undefined;
  }
}
