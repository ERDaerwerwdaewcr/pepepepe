import styles from './Filter.module.css'

interface FilterProps {
  type: string;
}

export const Filter = ({ type }: FilterProps) => {
  return (
    <div className={styles.filter}>
      <p className={styles.filterText}>{type}</p>
    </div>

  );
};

