import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: METRICS.baseVerticalSpace * 1.5,
        backgroundColor: COLORS.white,
    },
    modalContainer: {
        backgroundColor: COLORS.white,
    },
    modalTopContainer: {
        paddingVertical: METRICS.baseVerticalSpace,
        alignItems: 'center',
        backgroundColor: COLORS.lightgreen,
    },
    modalMainContainer: {
        marginVertical: METRICS.baseVerticalSpace * 2,
        marginHorizontal: METRICS.baseHorizontalSpace * 1.5
    },
    titleTxt: {
        fontSize: METRICS.fontScale(18),
        color: COLORS.lightblack,
        fontFamily: FONTS.interBold,
    },
    subTitleTxt: {
        fontSize: METRICS.fontScale(10),
        color: COLORS.lightblack,
        fontFamily: FONTS.interRegular,
        textAlign: 'justify'
    },
    inputTitleTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
        fontSize: METRICS.fontScale(12),
        marginLeft: METRICS.halfHorizontalSpace,
        marginBottom: METRICS.halfVerticalSpace,
    },
    getOTPTxt: {
        fontSize: METRICS.fontScale(10),
        color: COLORS.base,
        fontFamily: FONTS.interBold,
        marginTop: METRICS.halfVerticalSpace,
        textAlign: 'right',
        textTransform: 'uppercase'
    },
    textInput: {
        height: METRICS.inputHeight
    },
    btnContainer: {
        marginTop: METRICS.baseVerticalSpace * 2,
        alignSelf: 'center',
        width: '60%',
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.base,
    },
    btnTxt: {
        fontFamily: FONTS.interSemiBold,
        color: COLORS.base
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileImgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtContainer: {
        marginLeft: METRICS.halfHorizontalSpace
    },
    nameTxt: {
        fontSize: METRICS.fontScale(14),
        color: COLORS.lightblack,
        fontFamily: FONTS.interBold,
    },
    roleTxt: {
        fontSize: METRICS.fontScale(16),
        color: COLORS.grey,
        fontFamily: FONTS.interMedium,
    },
    subNameTxt: {
        fontSize: METRICS.fontScale(12),
        color: COLORS.grey,
        fontFamily: FONTS.interRegular,
    },
    articleTopContainer: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: METRICS.halfVerticalSpace,
        marginHorizontal: METRICS.halfHorizontalSpace,
        padding: METRICS.baseVerticalSpace * 1.5,
        backgroundColor: COLORS.lightsky,
        borderRadius: METRICS.baseHorizontalSpace,
    },
    articleTitle: {
        fontSize: METRICS.fontScale(18),
        color: COLORS.sky,
        fontFamily: FONTS.interBold,
        textAlign: 'center'
    },
    articleSubTitle: {
        fontSize: METRICS.fontScale(10),
        color: COLORS.lightblack,
        fontFamily: FONTS.interBold,
        textAlign: 'center'
    },
    articleBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    articleItem: {
        flex: 1,
        paddingVertical: METRICS.baseVerticalSpace,
        margin: METRICS.halfVerticalSpace,
        alignItems: 'center',
        borderRadius: METRICS.baseHorizontalSpace
    },
    articleItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    totalArticle: {
        fontSize: METRICS.fontScale(24),
        fontFamily: FONTS.interBold,
        marginLeft: METRICS.halfHorizontalSpace
    }
});

export default styles;
