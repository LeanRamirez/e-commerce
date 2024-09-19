import { useState, createContext } from "react"

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchText, setSearchText] = useState("");

    const data = {
        searchText,
        setSearchText,
    };

    return (
        <SearchContext.Provider
            value={data}
        >
            {children}
        </SearchContext.Provider>
    )
}