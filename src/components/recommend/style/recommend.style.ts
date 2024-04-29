import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.base
    },
    centerContainer: {
        marginVertical: 24,
        alignItems: 'center'
    },
    recommendTxt: {
        fontSize: 16,
        color: COLORS.white,
        fontFamily: FONTS.interBold,
        textAlign: 'center',
    },
    articleContainer: {
        flexDirection: 'row',
        padding: 8,
        backgroundColor: '#FF7C64',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 4
    },
    articleImg: {
        width: 80,
        height: 80,
        borderRadius: 8
    },
    infoContainer: {
        flex: 1,
        marginLeft: 8,
    },
    articleTxt: {
        fontSize: 18,
        color: COLORS.white,
        fontFamily: FONTS.interBold
    },
    iconStyle: {
        alignSelf: 'flex-end'
    },
    adContainer: {
        alignSelf: 'center',
        marginTop: 16
    }
});

export default styles;