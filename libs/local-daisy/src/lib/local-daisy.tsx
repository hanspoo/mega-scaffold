import styles from './local-daisy.module.css';

/* eslint-disable-next-line */
export interface LocalDaisyProps {}

export function LocalDaisy(props: LocalDaisyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LocalDaisy!</h1>
    </div>
  );
}

export default LocalDaisy;
