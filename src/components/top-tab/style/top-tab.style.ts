import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const { height, width } = Dimensions.get('screen')

const itemWidth = (width) / 4;

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
        paddingVertical: 16,
        alignItems: 'center'
    },
    categoryContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryHeading: {
        fontSize: 20,
        fontFamily: FONTS.interBold,
        color: COLORS.lightblack
    },
    topTabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        width: width,
        paddingVertical: 16,
        zIndex: 1,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightwhite
    },
    tabBarItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabBarTxt: {
        color: COLORS.grey,
        fontFamily: FONTS.interBold,
    },
    categoryImg: {
        height: 64,
        width: 64,
        borderRadius: 12,
        backgroundColor: COLORS.lightwhite
    },
    categoryTxt: {
        fontSize: 10,
        color: COLORS.grey,
        fontFamily: FONTS.interSemiBold,
    }
});

export default styles;
