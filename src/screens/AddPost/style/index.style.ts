import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32
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
        paddingVertical: 10,
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 8
    },
    topInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 8
    },
    titleTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interRegular,
        fontSize: 12,
        opacity: 0.5
    },
    divider: {
        marginVertical: 8
    },
    inputStyle: {
        borderColor: undefined,
        borderRadius: 0,
        borderWidth: 0,
    },
    inputTitleTxt: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
        fontSize: 12,
        marginLeft: 4,
        marginBottom: 4,
    },
    categoryTitle: {
        color: COLORS.lightblack,
        fontFamily: FONTS.interMedium,
        marginTop: 24,
        marginBottom: 8,
        marginLeft: 4
    },
    categoryTxt: {
        color: COLORS.base,
        fontFamily: FONTS.interMedium,
        fontSize: 12,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
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
