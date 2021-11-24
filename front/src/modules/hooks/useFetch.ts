import { useEffect, useState } from "react";

export const useFetch = (initialValue: any = undefined, fetchCb: () => Promise<T>) => {
  const [state, setState] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCb();
        setState(data);
        setLoading(false);
      } catch (e: any) {
        setErr(e);
        setLoading(false);
      }
    })();
  }, []);
  return [state, loading, err];
};
