import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 8
    },
    inputTitleTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
        fontSize: 12,
        marginLeft: 4,
        marginBottom: 4,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        paddingHorizontal: 16,
        borderColor: COLORS.lightwhite,
        borderRadius: 12,
        borderWidth: 2,
    },
    dateTxt: {
        fontSize: 12,
        fontFamily: FONTS.interMedium,
        color: COLORS.lightblack
    },
    dateInfoTxt: {
        fontSize: 10,
        fontFamily: FONTS.interMedium,
        color: COLORS.lightblack,
        marginTop: 4,
        marginLeft: 4
    },
    textInput: {
        height: 40
    },
    required: {
        color: COLORS.red
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: COLORS.white,
        borderRadius: 8
    },
    switchOutter: {
        flexDirection: 'row',
        width: 40,
        height: 20,
        backgroundColor: COLORS.lightwhite,
        borderRadius: 12,
    },
    switchInner: {
        width: 24,
        height: 20,
        backgroundColor: COLORS.lightblack,
        borderRadius: 12,
    },
    btnContainer: {
        marginTop: 16,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.base,
        borderRadius: 0
    },
    btnTxt: {
        fontFamily: FONTS.interSemiBold,
        color: COLORS.base
    }
});

export default styles;
