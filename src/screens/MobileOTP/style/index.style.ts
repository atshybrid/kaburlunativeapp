import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: COLORS.white,
    },
    otpTxtContainer: {
        marginVertical: 32,
        paddingHorizontal: 16
    },
    otpVerifyTxt: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: FONTS.interSemiBold,
        color: COLORS.grey,
        marginBottom: 8,
        opacity: 0.8
    },
    otpInfoTxt: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack,
    },
    otpReceiveTxt: {
        fontSize: 10,
        textAlign: 'right',
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack,
    },
    otpResendTxt: {
        fontSize: 10,
        fontFamily: FONTS.interRegular,
        color: COLORS.base,
    }
});

export default styles;