import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: METRICS.baseVerticalSpace * 2,
        backgroundColor: COLORS.white,
    },
    modalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        padding: METRICS.baseVerticalSpace * 2,
        backgroundColor: COLORS.white,
    },
    modalItem: {
        flexDirection: 'row',
        paddingVertical: METRICS.baseVerticalSpace,
        alignItems: 'center'
    },
    countryImg: {
        width: METRICS.icons.medium,
        height: METRICS.icons.tiny
    },
    welcomeTxt: {
        fontSize: METRICS.fontScale(32),
        textAlign: 'center',
        fontFamily: FONTS.interBold,
        color: COLORS.grey,
        marginVertical: METRICS.baseVerticalSpace * 3,
        opacity: 0.8
    },
    mobileTxt: {
        fontSize: METRICS.fontScale(12),
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack,
    },
    required: {
        color: COLORS.base,
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: METRICS.halfVerticalSpace
    },
    countryInput: {
        flex: 0.2,
        height: METRICS.inputHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightwhite,
        borderRadius: METRICS.halfHorizontalSpace,
        paddingHorizontal: METRICS.baseHorizontalSpace,
        marginRight: METRICS.halfHorizontalSpace
    },
    countryTxt: {
        fontFamily: FONTS.interRegular,
        color: COLORS.black,
    },
    mobileInput: {
        flex: 0.8,
        height: METRICS.inputHeight,
        backgroundColor: COLORS.lightwhite,
        fontFamily: FONTS.interRegular,
        color: COLORS.black,
        borderRadius: METRICS.halfHorizontalSpace,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        textAlignVertical: 'center',
        paddingVertical: 0
    }
});

export default styles;