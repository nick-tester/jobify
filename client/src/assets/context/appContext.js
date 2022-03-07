import { useState, useReducer, createContext, useContext } from "react";

const initialState = {
    isLoading: false,
    alert: { show: true, type: "danger", msg: "Oops!" }
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    return <AppContext.Provider value={({ ...state, setState })}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext, AppProvider };