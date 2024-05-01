import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: COLORS.lightwhite,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        borderRadius: METRICS.baseHorizontalSpace,
        borderWidth: METRICS.hairlineWidth,
        height: METRICS.btnHeight,
        zIndex: 1,
    },
    buttonText: {
        color: COLORS.lightwhite,
        fontFamily: FONTS.interMedium,
    },
    icon: {
        marginRight: METRICS.baseHorizontalSpace,
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        width: '100%',
        borderBottomLeftRadius: METRICS.baseHorizontalSpace,
        borderBottomRightRadius: METRICS.baseHorizontalSpace,
        borderWidth: METRICS.hairlineWidth,
        borderTopWidth: 0,
        borderColor: COLORS.lightwhite
    },
    overlay: {
        width: '80%',
        height: '100%',
        alignSelf: 'center',
    },
    item: {
        paddingHorizontal: METRICS.baseHorizontalSpace,
        paddingVertical: METRICS.baseVerticalSpace,
    },
    labelTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
    }
});

export default styles;
