import * as Localization from 'react-native-localize';
import i18n from '../../i18n';
import { CONSTANTS } from "../../constants";

export interface languageState {
    lang: string
}

const initialState: languageState = {
    lang: Localization.getLocales()[0]?.languageCode || 'en',
};

export const languageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_APP_LANGUAGE:
            return changeLanguage(state, action);

        default:
            return state;
    }
};

function changeLanguage(state: languageState, action: any) {
    const { lang } = action.payload;
    i18n.changeLanguage(lang);
    return {
        ...state,
        lang
    };
}