import { Neumatico } from './Neumatico';

export function filtrarAro(neumaticos: Neumatico[], aro: string): Neumatico[] {
  const re = new RegExp(aro, 'i');
  return neumaticos.filter((n) => {
    const es = re.test(n.aro);
    return es;
  });
}

export function capitalize(s: string): string {
  if (!s || s.trim().length < 3) return 'problemas al convertir';
  return s
    .trim()
    .split(/\s+/)
    .map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join(' ');
}
