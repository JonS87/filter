import styles from './Toolbar.module.css';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div>
      {filters.map(filter => (
        <button
          key={filter}
          className={`${styles.button} ${selected === filter ? styles.selected : ''}`}
          onClick={() => onSelectFilter(filter)}
          style={{ fontWeight: selected === filter ? 'bold' : 'normal' }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
