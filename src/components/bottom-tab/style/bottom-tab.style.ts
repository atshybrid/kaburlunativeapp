import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    bottomTabBarContainer: {
        flexDirection: 'row',
        position: 'absolute',
        width: width,
        bottom: 0,
        zIndex: 1,
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightwhite
    },
    bottomTabBarItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8
    }
});

export default styles;
