import styles from './Filter.module.scss'
import clsx from 'clsx';


interface FilterProps {
  id: number;
  type: string;
  filterId: number;
  onClickType: (id: number) => void;
}

export const Filter = ({ id, type, filterId, onClickType }: FilterProps) => {
  return (
    <div className={styles.filter}>
      <p onClick={() => onClickType(id)}
        className={clsx(styles.filterText, { [styles.active]: filterId === id })}
      >
        {type}
      </p>
    </div>

  );
};

