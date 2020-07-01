import { useState } from 'react';

const useFetchHandler = (curr) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const handleFetch = (fetchPromise, page) => {
    fetchPromise
      .then((data) => {
        if (page === curr) {
          setError(false);
          setData(data);
        }
      }, 
      () => {
        setError(true);
        setData(null);
      }
    )
  };
  
  return {
    error,
    data,
    handleFetch
  };
};
export {
  useFetchHandler
};