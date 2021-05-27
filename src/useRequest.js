
import { useState, useEffect } from 'react';

function useRequest(initialUrl) {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(initialUrl);

  useEffect(async () => {
    if (!url) {
      return;
    }
    setIsloading(true);
    setIsError(false);

    try {
      const result = await fetch(url);
      const parsedResult = await result.json();
      setData(parsedResult);
    } catch (e) {
      setIsError(true)
    }
    setIsloading(false);
  }, [url]);
  return [{ data, isloading, isError }, setUrl]
};

export default useRequest;
