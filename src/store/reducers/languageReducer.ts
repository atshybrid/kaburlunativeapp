import * as Localization from 'react-native-localize';
import i18n from '../../i18n';
import { CONSTANTS } from "../../constants";

export interface languageStateIF {
    lang: string
}

const initialState: languageStateIF = {
    lang: Localization.getLocales()[0]?.languageCode,
};

const splashReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_LANGUAGE:
            return changeLanguage(state, action);

        default:
            return state;
    }
};

function changeLanguage(state: languageStateIF, action: any) {
    const { lang } = action.payload;
    i18n.changeLanguage(lang);
    return {
        ...state,
        lang
    };
}

export default splashReducer;