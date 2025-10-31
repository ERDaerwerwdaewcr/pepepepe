import styles from './Filter.module.scss'


interface FilterProps {
  id: number;
  type: string;
  activeId: number;
  onClickType: (id: number) => void;
}

export const Filter = ({ id, type, activeId, onClickType }: FilterProps) => {

  return (
    <div className={styles.filter}>
      <p onClick={() => onClickType(id)}
        className={activeId === id ? styles.active : styles.filterText}
      >
        {type}
      </p>
    </div>

  );
};

