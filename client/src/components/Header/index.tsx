import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { IoCartOutline } from 'react-icons/io5';
import { HiOutlineMenu } from 'react-icons/hi';
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';
import Search from '../Search';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Link to="/">
            <div className={styles.logo}>
              <img width="50" height="50" src={logo} alt="Sushi logo" />
              <h1>Tasty sushi</h1>
            </div>
          </Link>
          <div className={styles.filtration}>
            <Search />
            <span>Сортировка</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <BsPerson size={20} />
              <span>Войти</span>
            </button>
            <button className={styles.button}>
              <IoCartOutline size={20} />
              <span>Корзина</span>
            </button>
            <button className={styles.button}>
              <HiOutlineMenu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
