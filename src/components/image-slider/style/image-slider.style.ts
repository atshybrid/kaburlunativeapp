import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        width: METRICS.windowWidth,
    },
    watermarkTxt: {
        position: 'absolute',
        fontSize: METRICS.fontScale(48),
        fontFamily: FONTS.interBold,
        color: COLORS.lightwhite,
        transform: [
            { rotate: '270deg' },
            { translateX: - METRICS.windowHeight / 2.5 },
            { translateY: - METRICS.horizontalScale(72) }],
        zIndex: 1,
        opacity: 0.3,
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