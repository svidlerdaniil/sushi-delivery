import { HiMiniPlus } from 'react-icons/hi2';
import { ICard } from './types';
import styles from './Card.module.scss';

const Card: React.FC<ICard> = ({ name, price, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={name} />
      <span className={styles.text}>{name}</span>
      <div className={styles.info}>
        <span className={styles.text}>{price} ₽</span>
        <button className={styles.add}>
          <HiMiniPlus size={50} />
        </button>
      </div>
    </div>
  );
};

export default Card;
