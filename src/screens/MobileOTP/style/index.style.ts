import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: METRICS.baseVerticalSpace * 2,
        backgroundColor: COLORS.white,
    },
    otpTxtContainer: {
        marginVertical: METRICS.baseVerticalSpace * 2,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5
    },
    otpVerifyTxt: {
        fontSize: METRICS.fontScale(24),
        textAlign: 'center',
        fontFamily: FONTS.interSemiBold,
        color: COLORS.grey,
        marginBottom: METRICS.halfVerticalSpace,
        opacity: 0.8
    },
    otpInfoTxt: {
        fontSize: METRICS.fontScale(12),
        textAlign: 'center',
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack,
    },
    otpReceiveTxt: {
        fontSize: METRICS.fontScale(10),
        textAlign: 'right',
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack,
    },
    otpResendTxt: {
        fontSize: METRICS.fontScale(10),
        fontFamily: FONTS.interRegular,
        color: COLORS.base,
    }
});

export default styles;