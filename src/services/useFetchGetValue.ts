import { useEffect, useState } from 'react';
import { DataInterface } from '../types/FetchGetValue.type';

export const useFetchGetValue = () => {
  const [valueFetch, setValueFetch] = useState<DataInterface>();
  const url = '/data.json';

  useEffect(() => {
    const fetchGet = async () => {
      try {
        const fetchValue = await fetch(url);
        const data = await fetchValue.json();
        setValueFetch(data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };
    fetchGet();
  }, []);

  return { valueFetch };
};
