import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    textInputStyle: {
        paddingLeft: 16,
        borderColor: COLORS.lightwhite,
        borderRadius: 12,
        borderWidth: 2,
        color: COLORS.lightblack
    },
    error: {
        color: COLORS.red,
        fontFamily: FONTS.interMedium,
        fontSize: 10,
        lineHeight: 12,
    },
});

export default styles;