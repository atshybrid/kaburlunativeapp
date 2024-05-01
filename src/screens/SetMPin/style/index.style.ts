import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: METRICS.baseVerticalSpace * 2,
        backgroundColor: COLORS.white,
    },
    mPinCreateTxt: {
        fontSize: METRICS.fontScale(24),
        textAlign: 'center',
        fontFamily: FONTS.interSemiBold,
        color: COLORS.grey,
        marginVertical: METRICS.baseVerticalSpace * 1.5,
        opacity: 0.8
    },
    mPinEnterTxt: {
        fontSize: METRICS.fontScale(12),
        fontFamily: FONTS.interBold,
        color: COLORS.lightblack,
        marginTop: METRICS.baseVerticalSpace * 1.5
    }
});

export default styles;