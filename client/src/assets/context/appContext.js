import { useReducer, createContext, useContext } from "react";

import { DISPLAY_ALERT } from "./actions";
import reducer from "./reducer";

const initialState = {
    isLoading: false,
    alert: { show: false, type: "danger", msg: "Oops!" }
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = (payload) => {
        dispatch({ type: DISPLAY_ALERT, payload })
    }

    return <AppContext.Provider value={({ ...state, displayAlert })}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext, AppProvider };