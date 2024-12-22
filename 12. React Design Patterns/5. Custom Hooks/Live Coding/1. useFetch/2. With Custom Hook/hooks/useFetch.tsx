import { useState, useEffect } from "react";

const useFetch = <T,>(url: string): [T | null] => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = (await response.json()) as T;
        setData(result);
      } catch (error) {
        console.error("Fetch error: ", error);
        setData(null);
      }
    };

    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;
