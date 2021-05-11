import { useState, useContext, createContext } from "react";

const Context = createContext(null);

function useSearchInternal() {
  const [searchState, setSearchState] = useState({});

  const returnVal = {
    state: searchState,
    setFunction: setSearchState,
  };
  return returnVal;
}

function SearchProvider({ children }) {
  const val = useSearchInternal();

  return <Context.Provider value={val}>{children}</Context.Provider>;
}

function useSearch() {
  const search = useContext(Context);

  if (search === null) throw new Error("Need to wrap app in search provider");
  else {
    return search;
  }
}

export default useSearch;
export { SearchProvider };
