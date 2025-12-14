import styles from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Find contact by name
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Search contacts..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
