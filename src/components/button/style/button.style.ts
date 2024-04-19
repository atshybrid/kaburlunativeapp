import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    buttonViewStyle: {
        paddingVertical: 6,
        alignItems: 'center',
        backgroundColor: COLORS.base,
        borderRadius: 5,
    },
    buttonTextStyle: {
        fontSize: 16,
        fontFamily: FONTS.interBold,
        textAlign: 'center',
        color: COLORS.white
    },
});

export default styles;
