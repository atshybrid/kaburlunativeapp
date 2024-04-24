import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 8,
        backgroundColor: COLORS.white
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    middleContainer: {
        position: 'absolute',
        zIndex: 1,
        bottom: 8,
        left: 0,
        right: 0,
        alignSelf: 'center',
        alignItems: 'center'
    },
    outterIconContainer: {
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 32
    },
    innerIconContainer: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.green,
        borderRadius: 24
    },
    totalShareTxt: {
        fontSize: 10,
        color: COLORS.lightblack,
        fontFamily: FONTS.interBold,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viralPostTxt: {
        fontSize: 12,
        color: COLORS.base,
        fontFamily: FONTS.interBold,
    }
});

export default styles;