import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    swipeCard: {
        position: "absolute",
        width: METRICS.windowWidth,
        height: METRICS.windowHeight,
        backgroundColor: COLORS.white
    }
});

export default styles;