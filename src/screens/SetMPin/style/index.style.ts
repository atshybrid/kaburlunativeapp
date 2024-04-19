import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: COLORS.white,
    },
    mPinCreateTxt: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: FONTS.interSemiBold,
        color: COLORS.grey,
        marginVertical: 16,
        opacity: 0.8
    },
    mPinEnterTxt: {
        fontSize: 12,
        fontFamily: FONTS.interBold,
        color: COLORS.lightblack,
        marginTop: 16
    }
});

export default styles;