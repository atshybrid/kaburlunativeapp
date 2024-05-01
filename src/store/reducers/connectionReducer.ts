import { CONSTANTS } from "../../constants";

export interface connectionState {
    isConnected: boolean;
}

const initialState: connectionState = {
    isConnected: true,
};

export const connectionReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CONSTANTS.CONNECTION_AVAILABLE:
            return { ...state, isConnected: action.payload };

        default:
            return state;
    }
};