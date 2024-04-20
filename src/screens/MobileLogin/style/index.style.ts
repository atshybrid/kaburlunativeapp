import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: COLORS.white,
    },
    modalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        padding: 32,
        backgroundColor: COLORS.white,
    },
    modalItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
    },
    countryImg: {
        width: 24,
        height: 16
    },
    welcomeTxt: {
        fontSize: 32,
        textAlign: 'center',
        fontFamily: FONTS.interBold,
        color: COLORS.grey,
        marginVertical: 32,
        opacity: 0.8
    },
    mobileTxt: {
        fontSize: 12,
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack,
    },
    required: {
        color: COLORS.base,
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    countryInput: {
        flex: 0.2,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightwhite,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginRight: 6
    },
    countryTxt: {
        fontFamily: FONTS.interRegular,
        color: COLORS.black,
    },
    mobileInput: {
        flex: 0.8,
        height: 40,
        backgroundColor: COLORS.lightwhite,
        fontFamily: FONTS.interRegular,
        color: COLORS.black,
        borderRadius: 8,
        paddingHorizontal: 16,
    }
});

export default styles;