import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li className={styles.link}>Контакты</li>
        <li className={styles.link}>О нас</li>
        <li className={styles.link}>Пользовательское соглашение</li>
        <li className={styles.link}>Технологии</li>
      </ul>
    </footer>
  );
};

export default Footer;
