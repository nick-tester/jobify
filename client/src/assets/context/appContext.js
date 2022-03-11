import { useReducer, createContext, useContext } from "react";

import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
import reducer from "./reducer";

const initialState = {
    isLoading: false,
    alert: { show: false, type: "danger", msg: "Oops!" }
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = (payload) => {
        dispatch({ type: DISPLAY_ALERT, payload });

        setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
    };

    return <AppContext.Provider value={({ ...state, displayAlert })}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext, AppProvider };