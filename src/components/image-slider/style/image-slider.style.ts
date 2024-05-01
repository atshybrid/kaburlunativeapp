import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        width: METRICS.windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    imgView: {
        width: METRICS.windowWidth,
        height: METRICS.windowHeight
    },
    paginationContainer: {
        position: 'absolute',
        bottom: METRICS.windowHeight * 0.15,
        alignSelf: 'center',
        zIndex: 1,
        backgroundColor: COLORS.lightblack,
        padding: METRICS.halfVerticalSpace / 2,
        borderRadius: METRICS.halfHorizontalSpace,
        flexDirection: "row",
    },
    dot: {
        width: METRICS.halfHorizontalSpace,
        height: METRICS.halfHorizontalSpace,
        borderRadius: METRICS.halfHorizontalSpace / 2,
        marginHorizontal: METRICS.halfHorizontalSpace / 2,
    }
});

export default styles;