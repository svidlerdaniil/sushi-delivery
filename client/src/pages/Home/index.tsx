import axios from 'axios';
import ContentLoader from 'react-content-loader';
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
        {!isLoading ? (
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
        ) : (
          <div className={styles.menu}>
            {new Array(3).fill(undefined).map(() => {
              return (
                <section className={styles.category}>
                  <ContentLoader
                    speed={2}
                    width={165}
                    height={27}
                    viewBox="0 0 165 27"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="10" ry="10" width="165" height="27" />
                  </ContentLoader>
                  <ul className={styles.items}>
                    {new Array(10).fill(undefined).map(() => {
                      return (
                        <ContentLoader
                          speed={2}
                          width={180}
                          height={270}
                          viewBox="0 0 180 270"
                          backgroundColor="#f3f3f3"
                          foregroundColor="#ecebeb"
                        >
                          <rect
                            x="0"
                            y="0"
                            rx="25"
                            ry="25"
                            width="180"
                            height="270"
                          />
                        </ContentLoader>
                      );
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
