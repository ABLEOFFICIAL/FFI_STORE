import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: abortController.signal });
        if (!res) throw new Error("error loading page");
        const data = await res.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
