import axios from 'axios';
import { useEffect, useState } from 'react';

interface ICategory {
  id: string;
  name: string;
}

interface IItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  categoryId: string;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [items, setItems] = useState<IItem[]>([]);

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
      {!isLoading && (
        <>
          <ul>
            {categories.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.name}
                  {item.price}
                  <img src={item.imageUrl} alt="Food" />
                  {item.description}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Home;
