import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    input: {
        width: 64,
        height: 45,
        fontFamily: FONTS.interRegular,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: 18,
    }
});

export default styles;