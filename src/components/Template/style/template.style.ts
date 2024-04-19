import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 32
    },
    txtContainer: {
        marginHorizontal: 24
    },
    categoryTxt: {
        fontSize: 14,
        fontFamily: FONTS.interBold,
        color: COLORS.grey
    },
    titleContainer: {
        marginVertical: 16
    },
    titleTxt: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: FONTS.interSemiBold,
        color: COLORS.orange
    },
    subTitleTxt: {
        fontSize: 32,
        textAlign: 'center',
        fontFamily: FONTS.interBold,
        color: COLORS.lightred
    },
    shortDescTxt: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: FONTS.interRegular,
        color: COLORS.grey
    },
    imgTitleContainer: {
        paddingVertical: 8,
        backgroundColor: COLORS.lightred,
    },
    imgTitleTxt: {
        fontSize: 16,
        fontFamily: FONTS.interBold,
        color: COLORS.white,
        textAlign: 'center'
    },
    imgStyle: {
        width: '100%',
    }
});

export default styles;
