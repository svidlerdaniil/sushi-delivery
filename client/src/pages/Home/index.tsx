import axios from 'axios';
import { useEffect, useState } from 'react';
import { ICategory } from './types';
import { ICard } from '../../components/Card/types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import styles from './Home.module.scss';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [items, setItems] = useState<ICard[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/categories').then((response) => {
      setCategories(response.data);
    });
    axios.get('http://localhost:5000/items').then((response) => {
      setItems(response.data);
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.content}>
        {!isLoading && (
          <>
            {categories.map((item) => {
              return (
                <>
                  <h2 key={item.id}>{item.name}</h2>
                  <ul className={styles.items}>
                    {items.map((meal) => {
                      return meal.categoryId === item.id && <Card {...meal} />;
                    })}
                  </ul>
                </>
              );
            })}
            {/* <ul className={styles.items}>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <Card {...item} />
                </li>
              );
            })}
          </ul> */}
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
