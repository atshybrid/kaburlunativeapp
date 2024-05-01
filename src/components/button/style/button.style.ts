import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    buttonViewStyle: {
        height: METRICS.btnHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.base,
        borderRadius: METRICS.halfVerticalSpace,
    },
    buttonTextStyle: {
        fontSize: METRICS.fontScale(16),
        fontFamily: FONTS.interBold,
        textAlign: 'center',
        color: COLORS.white
    },
});

export default styles;
