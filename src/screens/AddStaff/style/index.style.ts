import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        paddingVertical: METRICS.baseVerticalSpace * 2
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        padding: METRICS.baseVerticalSpace * 1.5,
        borderRadius: METRICS.halfHorizontalSpace
    },
    inputTitleTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
        fontSize: METRICS.fontScale(12),
        marginLeft: METRICS.halfHorizontalSpace,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: METRICS.inputHeight,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        borderColor: COLORS.lightwhite,
        borderRadius: METRICS.baseHorizontalSpace,
        borderWidth: METRICS.hairlineWidth,
    },
    dateTxt: {
        fontSize: METRICS.fontScale(12),
        fontFamily: FONTS.interMedium,
        color: COLORS.lightblack
    },
    dateInfoTxt: {
        fontSize: METRICS.fontScale(10),
        fontFamily: FONTS.interMedium,
        color: COLORS.lightblack,
        marginTop: METRICS.halfVerticalSpace,
        marginLeft: METRICS.halfHorizontalSpace
    },
    textInput: {
        height: METRICS.inputHeight
    },
    required: {
        color: COLORS.red
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: METRICS.baseVerticalSpace * 1.5,
        paddingVertical: METRICS.baseVerticalSpace,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        backgroundColor: COLORS.white,
        borderRadius: METRICS.halfHorizontalSpace
    },
    switchOutter: {
        flexDirection: 'row',
        width: METRICS.switchWidth,
        height: METRICS.switchHeight,
        backgroundColor: COLORS.lightwhite,
        borderRadius: 12,
    },
    switchInner: {
        width: METRICS.baseHorizontalSpace * 2,
        height: METRICS.switchHeight,
        backgroundColor: COLORS.lightblack,
        borderRadius: METRICS.baseHorizontalSpace,
    },
    btnContainer: {
        marginTop: METRICS.baseVerticalSpace * 2,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.base,
        borderRadius: 0
    },
    btnTxt: {
        fontFamily: FONTS.interSemiBold,
        color: COLORS.base
    }
});

export default styles;
