import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: METRICS.baseVerticalSpace,
        backgroundColor: COLORS.white
    },
    txtContainer: {
        marginHorizontal: METRICS.baseHorizontalSpace * 1.5
    },
    categoryTxt: {
        fontSize: METRICS.fontScale(14),
        fontFamily: FONTS.interBold,
        color: COLORS.grey
    },
    titleContainer: {
        marginVertical: METRICS.baseVerticalSpace
    },
    titleTxt: {
        fontSize: METRICS.fontScale(16),
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: FONTS.interSemiBold,
        color: COLORS.orange
    },
    subTitleTxt: {
        fontSize: METRICS.fontScale(32),
        textAlign: 'center',
        fontFamily: FONTS.interBold,
        color: COLORS.lightred
    },
    shortDescTxt: {
        fontSize: METRICS.fontScale(18),
        lineHeight: METRICS.fontScale(24),
        fontFamily: FONTS.interRegular,
        color: COLORS.grey
    },
    imgTitleContainer: {
        paddingVertical: METRICS.halfVerticalSpace,
        backgroundColor: COLORS.lightred,
    },
    imgTitleTxt: {
        fontSize: METRICS.fontScale(16),
        fontFamily: FONTS.interBold,
        color: COLORS.white,
        textAlign: 'center'
    },
    imgStyle: {
        width: METRICS.windowWidth,
    }
});

export default styles;
