import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: COLORS.white,
    },
    welcomeTxt: {
        fontSize: 28,
        fontFamily: FONTS.interBold,
        color: COLORS.base,
        marginVertical: 32,
        opacity: 0.8
    },
    mPinEnterTxt: {
        fontSize: 12,
        fontFamily: FONTS.interBold,
        color: COLORS.black,
    },
    mPinForgotTxt: {
        fontSize: 12,
        fontFamily: FONTS.interBold,
        color: COLORS.base,
        textDecorationLine: 'underline'
    },
});

export default styles;