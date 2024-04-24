import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    bottomTabBarContainer: {
        flexDirection: 'row',
        position: 'absolute',
        width: width,
        padding: 8,
        bottom: 0,
        zIndex: 1,
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightwhite
    },
    bottomTabBarItem: {
        flex: 1,
        alignItems: 'center'
    }
});

export default styles;
