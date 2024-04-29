import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    buttonContainer: {
        width: width * 0.125,
        alignItems: "center",
    },
    flatList: {
        flex: 1,
    },
    slide: {
        flex: 1,
        width: width,
        justifyContent: "center",
        alignItems: "center",
    },
    imgView: {
        width: width,
        height: height
    },
    paginationContainer: {
        position: 'absolute',
        bottom: height * 0.15,
        alignSelf: 'center',
        zIndex: 1,
        backgroundColor: COLORS.lightblack,
        padding: 2,
        borderRadius: 8,
        flexDirection: "row",
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 4,
    }
});

export default styles;