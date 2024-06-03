import { Neumatico } from '@coba/api-interfaces';
import * as fs from 'fs';

export class DAONeumaticos {
  data: Array<Neumatico> = [];

  loadFromCSV(file: string) {
    const buff = fs.readFileSync(file).toString('utf-8');
    const list = buff
      .split('\n')
      .map((l: string) => Neumatico.fromLine(l))
      .filter((x) => x !== undefined) as Neumatico[];

    this.data = list.sort((a, b) =>
      `${a.aro}${a.medida}`.localeCompare(`${b.aro}${b.medida}`)
    );
    return this;
  }

  neumaticos() {
    return this.data;
  }
}
