import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapperContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    headerContainer: {
        paddingVertical: 20,
        backgroundColor: COLORS.white,
        elevation: 5
    },
    headerTxt: {
        textAlign: 'center',
        color: COLORS.lightblack,
        fontFamily: FONTS.interRegular,
    },
    boldText: {
        fontFamily: FONTS.interBold
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.white,
        borderBottomWidth: 3,
        margin: 8,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    selectedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLORS.blue,
        margin: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    gridItem: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor: COLORS.white,
        borderBottomWidth: 3,
        marginHorizontal: 8,
    },
    selectedGridItem: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLORS.blue,
        marginHorizontal: 8,
    },
    languageTxt: {
        fontSize: 48,
        textAlign: 'center',
        fontFamily: FONTS.interRegular
    },
    nameTxt: {
        fontSize: 20,
        textAlign: 'center',
        color: COLORS.grey,
        marginTop: 4,
        fontFamily: FONTS.interRegular
    },
    languageRow: {
        marginBottom: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
});

export default styles;