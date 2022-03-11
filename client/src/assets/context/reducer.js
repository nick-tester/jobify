import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case DISPLAY_ALERT:
            return { ...state, alert: { ...state.alert, ...payload } };

        case CLEAR_ALERT:
            return { ...state, alert: { ...state.alert, show: false, type: "", msg: "" } }

        default:
            return state;
    };
};

export default reducer;