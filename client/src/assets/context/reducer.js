import { DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case DISPLAY_ALERT:
            return { ...state, alert: { ...state.alert, ...payload } };

        default:
            return state;
    };
};

export default reducer;