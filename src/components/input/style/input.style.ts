import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    textInputStyle: {
        paddingVertical: 0,
        textAlignVertical: 'center',
        paddingLeft: METRICS.baseHorizontalSpace * 1.5,
        borderColor: COLORS.lightwhite,
        borderRadius: METRICS.baseHorizontalSpace,
        borderWidth: METRICS.hairlineWidth,
        color: COLORS.lightblack
    },
    error: {
        color: COLORS.red,
        fontFamily: FONTS.interMedium,
        fontSize: METRICS.fontScale(12)
    },
});

export default styles;