import { useState, useEffect } from "react";

const useFetch = <T,>(url: string): [T | null, boolean, any] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = (await response.json()) as T;
        setData(result);
      } catch (error) {
        console.error("Fetch error: ", error);
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
