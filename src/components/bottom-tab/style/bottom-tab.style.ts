import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        width: width,
        padding: 8,
        bottom: 0,
        zIndex: 1,
        backgroundColor: COLORS.white,
    },
    tabBarItem: {
        flex: 1,
        alignItems: 'center'
    }
});

export default styles;
