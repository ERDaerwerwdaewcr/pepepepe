import styles from './Sort.module.css'

export const Sort = () => {
  return (
    <div className={styles.sort}>
      <img className={styles.triangle} src="/public/triangle.svg" alt="" />
      <p className={styles.sortText}>Cортировка по </p>
      <p className={styles.sortType}>популярности</p>
    </div>
  );
};

