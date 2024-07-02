import React, { createContext, useContext, useEffect, useState } from 'react';

const SearchContext = createContext();




export const SearchProvider = ({ children }) => {
  const [values, setValues] = useState({
   keyword:"",
   results:[]
  });


  return (
    <SearchContext.Provider value={{ values, setValues }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
