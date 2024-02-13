import { HiMiniPlus } from 'react-icons/hi2';
import { ICard } from './types';
import styles from './Card.module.scss';

const Card = (props: ICard) => {
  const { name, price, imageUrl } = props;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={name} />
      <span className={styles.text}>{name}</span>
      <div className={styles.info}>
        <span className={styles.text}>{price} рублей</span>
        <button className={styles.add}>
          <HiMiniPlus size={50} />
        </button>
      </div>
    </div>
  );
};

export default Card;
