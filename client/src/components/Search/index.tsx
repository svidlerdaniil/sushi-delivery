import { IoIosSearch } from 'react-icons/io';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <label>
      <span>
        <IoIosSearch size={25} />
      </span>
      <input className={styles.input} type="text" placeholder="Поиск..." />
    </label>
  );
};

export default Search;
