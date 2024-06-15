import styles from './desde-algolia.module.css';

/* eslint-disable-next-line */
export interface DesdeAlgoliaProps {}

export function DesdeAlgolia(props: DesdeAlgoliaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DesdeAlgolia!</h1>
    </div>
  );
}

export default DesdeAlgolia;
