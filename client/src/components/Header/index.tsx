import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <span>Корзина</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
