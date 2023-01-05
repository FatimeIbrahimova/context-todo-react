import { createContext, useState } from "react";

export const MainContext = createContext(null)

function ContextProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const values = {
        todos,
        setTodos
    }

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider >
    )
}
export default ContextProvider;