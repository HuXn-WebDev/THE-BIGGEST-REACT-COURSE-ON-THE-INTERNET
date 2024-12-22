import { useState, useEffect } from "react";

interface DataFetcherProps<T> {
  url: string;
  render: (
    data: T | null,
    isLoading: boolean,
    error: string | null
  ) => JSX.Element;
}

function DataFetcher<T>({ url, render }: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);

  return render(data, isLoading, error);
}

export default DataFetcher;
