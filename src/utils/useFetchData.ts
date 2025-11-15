import { useState, useEffect } from "react";
import { type Questions } from "./interfaces";

export const useFetchData = (url: string) => {
  const [data, setData] = useState<Questions>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async function () {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error] as const;
};
