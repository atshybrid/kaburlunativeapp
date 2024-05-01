import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const itemWidth = (METRICS.windowWidth) / 4;

const styles = StyleSheet.create({
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
    categoryHeading: {
        fontSize: METRICS.fontScale(18),
        fontFamily: FONTS.interBold,
        color: COLORS.lightblack
    },
    topTabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        width: METRICS.windowWidth,
        paddingVertical: METRICS.baseHorizontalSpace,
        zIndex: 1,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightwhite
    },
    tabBarItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: METRICS.halfVerticalSpace,
    },
    tabBarTxt: {
        color: COLORS.grey,
        fontFamily: FONTS.interBold,
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
    }
});

export default styles;
