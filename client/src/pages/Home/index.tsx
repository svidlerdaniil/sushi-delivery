import axios from 'axios';
import { useEffect, useState } from 'react';
import { ICategory } from './types';
import { ICard } from '../../components/Card/types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Search from '../../components/Search';
import styles from './Home.module.scss';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [items, setItems] = useState<ICard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get<ICategory[]>(
          'http://localhost:5000/categories'
        );
        setCategories(categoriesResponse.data);

        const itemsResponse = await axios.get<ICard[]>(
          'http://localhost:5000/items'
        );
        setItems(itemsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.content}>
        {!isLoading && (
          <div className={styles.menu}>
            {categories.map((item) => {
              return (
                <section className={styles.category}>
                  <h2 key={item.id}>{item.name}</h2>
                  <ul className={styles.items}>
                    {items.map((meal) => {
                      return meal.categoryId === item.id && <Card {...meal} />;
                    })}
                  </ul>
                </section>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
