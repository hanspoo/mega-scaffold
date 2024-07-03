import styles from './kari-components.module.css';

/* eslint-disable-next-line */
export interface KariComponentsProps {}

export function KariComponents(props: KariComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to KariComponents!</h1>
    </div>
  );
}

export default KariComponents;
