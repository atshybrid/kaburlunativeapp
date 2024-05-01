import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    bottomTabBarContainer: {
        flexDirection: 'row',
        position: 'absolute',
        width: METRICS.windowWidth,
        bottom: 0,
        zIndex: 1,
        backgroundColor: COLORS.white,
        borderTopWidth: METRICS.hairlineWidth,
        borderTopColor: COLORS.lightwhite
    },
    bottomTabBarItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: METRICS.halfVerticalSpace
    }
});

export default styles;
