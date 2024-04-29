import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: COLORS.white,
    },
    modalContainer: {
        backgroundColor: COLORS.white,
    },
    modalTopContainer: {
        paddingVertical: 8,
        alignItems: 'center',
        backgroundColor: COLORS.lightgreen,
    },
    modalMainContainer: {
        marginVertical: 32,
        marginHorizontal: 16
    },
    titleTxt: {
        fontSize: 18,
        color: COLORS.lightblack,
        fontFamily: FONTS.interBold,
    },
    subTitleTxt: {
        fontSize: 10,
        color: COLORS.lightblack,
        fontFamily: FONTS.interRegular,
        textAlign: 'justify'
    },
    inputTitleTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
        fontSize: 12,
        marginLeft: 4,
        marginBottom: 4,
    },
    getOTPTxt: {
        fontSize: 10,
        color: COLORS.base,
        fontFamily: FONTS.interBold,
        marginTop: 4,
        textAlign: 'right',
        textTransform: 'uppercase'
    },
    textInput: {
        height: 40
    },
    btnContainer: {
        marginTop: 32,
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
        marginLeft: 8
    },
    nameTxt: {
        fontSize: 14,
        color: COLORS.lightblack,
        fontFamily: FONTS.interBold,
    },
    roleTxt: {
        fontSize: 16,
        color: COLORS.grey,
        fontFamily: FONTS.interMedium,
    },
    subNameTxt: {
        fontSize: 12,
        color: COLORS.grey,
        fontFamily: FONTS.interRegular,
    },
    articleTopContainer: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 8,
        marginHorizontal: 4,
        padding: 16,
        backgroundColor: COLORS.lightsky,
        borderRadius: 12,
    },
    articleTitle: {
        fontSize: 18,
        color: COLORS.sky,
        fontFamily: FONTS.interBold,
        textAlign: 'center'
    },
    articleSubTitle: {
        fontSize: 10,
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
        paddingVertical: 12,
        margin: 4,
        alignItems: 'center',
        borderRadius: 12
    },
    articleItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    totalArticle: {
        fontSize: 24,
        fontFamily: FONTS.interBold,
        marginLeft: 8
    }
});

export default styles;
