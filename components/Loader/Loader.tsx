import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.spinnerBox}>
      <div className={styles.leoBorder1}>
        <div className={styles.leoCore1}></div>
      </div>
      <div className={styles.leoBorder2}>
        <div className={styles.leoCore2}></div>
      </div>
    </div>
  );
}

