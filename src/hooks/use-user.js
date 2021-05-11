import { useState, useEffect } from "react";

function useUser(auth) {
  const [data, setData] = useState({ user: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    const onChange = (currentUser) => {
      setData({ user: currentUser });
    };
    const onError = (e) => setError(e);
    const unsubscribe = auth.onAuthStateChanged(onChange, onError);
    return unsubscribe;
  }, [auth]);
  const { user } = data;
  return user;
}

export default useUser;
