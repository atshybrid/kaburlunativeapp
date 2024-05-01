import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: METRICS.baseVerticalSpace,
    },
    input: {
        width: METRICS.images.medium,
        height: METRICS.images.small * 1.5,
        fontFamily: FONTS.interRegular,
        color: COLORS.black,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: METRICS.fontScale(18),
    }
});

export default styles;