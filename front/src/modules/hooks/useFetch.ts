export const useFetch = (initialValue, url) => {
  const [userList, setUserList] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const abort = new AbortController(); //!To finish OR DO IT WITH REF
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setUserList(json.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  }, []);
  return [userList, loading, err];
};
