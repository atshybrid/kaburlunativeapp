import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const itemWidth = (METRICS.windowWidth) / 4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        paddingVertical: METRICS.baseVerticalSpace * 2
    },
    modalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        backgroundColor: COLORS.white,
    },
    modalItem: {
        width: itemWidth,
        paddingVertical: METRICS.baseVerticalSpace,
        alignItems: 'center'
    },
    categoryContainer: {
        padding: METRICS.baseVerticalSpace,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        borderRadius: METRICS.halfHorizontalSpace
    },
    topInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        paddingTop: METRICS.halfVerticalSpace
    },
    titleTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interRegular,
        fontSize: METRICS.fontScale(12),
        opacity: 0.5
    },
    divider: {
        marginVertical: METRICS.halfVerticalSpace
    },
    inputStyle: {
        textAlignVertical: 'top',
        borderColor: undefined,
        borderRadius: 0,
        borderWidth: 0,
        marginBottom: METRICS.halfVerticalSpace
    },
    inputTitleTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
        fontSize: METRICS.fontScale(12),
        marginLeft: METRICS.halfHorizontalSpace,
    },
    categoryTitle: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
        marginTop: METRICS.baseVerticalSpace * 1.5,
        marginBottom: METRICS.halfVerticalSpace,
        marginLeft: METRICS.halfHorizontalSpace
    },
    categoryHeading: {
        fontSize: METRICS.fontScale(18),
        fontFamily: FONTS.interBold,
        color: COLORS.lightblack
    },
    categoryImg: {
        height: METRICS.images.medium,
        width: METRICS.images.medium,
        borderRadius: METRICS.baseHorizontalSpace,
        backgroundColor: COLORS.lightwhite
    },
    categoryTxt: {
        fontSize: METRICS.fontScale(10),
        color: COLORS.grey,
        fontFamily: FONTS.interSemiBold,
    },
    selectedCategoryTxt: {
        color: COLORS.base,
        fontFamily: FONTS.interMedium,
        fontSize: METRICS.fontScale(12),
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: METRICS.baseVerticalSpace * 1.5,
        paddingVertical: METRICS.baseVerticalSpace,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        backgroundColor: COLORS.white,
        borderRadius: 8
    },
    rightHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    languageSwitchOutter: {
        flexDirection: 'row',
        alignItems: 'center',
        width: METRICS.switchWidth,
        height: METRICS.switchHeight,
        backgroundColor: COLORS.grey,
        borderRadius: 12,
        marginLeft: 8
    },
    languageSwitchInner: {
        alignItems: 'center',
        justifyContent: 'center',
        width: METRICS.baseHorizontalSpace * 2,
        height: METRICS.baseHorizontalSpace * 2,
        backgroundColor: COLORS.base,
        borderRadius: METRICS.baseHorizontalSpace,
    },
    langTxt: {
        fontSize: METRICS.fontScale(10),
        fontFamily: FONTS.interSemiBold,
        color: COLORS.white,
    },
    switchOutter: {
        flexDirection: 'row',
        width: METRICS.switchWidth,
        height: METRICS.switchHeight,
        backgroundColor: COLORS.lightwhite,
        borderRadius: METRICS.baseHorizontalSpace,
    },
    switchInner: {
        width: METRICS.baseHorizontalSpace * 2,
        height: METRICS.switchHeight,
        borderRadius: METRICS.baseHorizontalSpace,
    },
    btnContainer: {
        marginTop: METRICS.baseVerticalSpace,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.base,
        borderRadius: 0
    },
    btnTxt: {
        fontFamily: FONTS.interSemiBold,
        color: COLORS.base
    },
});

export default styles;
