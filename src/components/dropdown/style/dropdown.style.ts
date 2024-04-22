import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: COLORS.lightwhite,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 2,
        height: 40,
        zIndex: 1,
    },
    buttonText: {
        color: COLORS.lightwhite,
        fontFamily: FONTS.interMedium,
    },
    icon: {
        marginRight: 10,
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        width: '100%',
        shadowColor: COLORS.black,
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: COLORS.lightwhite
    },
    overlay: {
        width: '80%',
        height: '100%',
        alignSelf: 'center',
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    labelTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
    }
});

export default styles;
