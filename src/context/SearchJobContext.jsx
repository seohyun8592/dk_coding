import { createContext, useContext } from "react";
import MockData from "../api/mockData";

export const SearchJobContext = createContext();

const searchJob = new MockData();

export function SearchJobProvider({ children }) {
  return (
    <SearchJobContext.Provider value={{ searchJob }}>
      {children}
    </SearchJobContext.Provider>
  );
}

export function useSearchJob() {
  return useContext(SearchJobContext);
}
