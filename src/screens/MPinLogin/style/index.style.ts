import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: METRICS.baseVerticalSpace * 2,
        backgroundColor: COLORS.white,
    },
    welcomeTxt: {
        fontSize: METRICS.fontScale(28),
        fontFamily: FONTS.interBold,
        color: COLORS.base,
        marginVertical: METRICS.baseVerticalSpace * 2,
        opacity: 0.8
    },
    mPinEnterTxt: {
        fontSize: METRICS.fontScale(12),
        fontFamily: FONTS.interBold,
        color: COLORS.black,
    },
    mPinForgotTxt: {
        fontSize: METRICS.fontScale(12),
        fontFamily: FONTS.interBold,
        color: COLORS.base,
        textDecorationLine: 'underline'
    },
});

export default styles;