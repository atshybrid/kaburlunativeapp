import { CONSTANTS } from "../../constants";

export interface splashState {
    isActiveSplash: boolean;
}

const initialState: splashState = {
    isActiveSplash: true,
};

export const splashReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CONSTANTS.SPLASH_SCREEN:
            return { ...state, isActiveSplash: false };

        default:
            return state;
    }
};