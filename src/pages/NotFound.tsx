import styles from './notFound.module.scss'

export const NotFound = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>
  );
};

