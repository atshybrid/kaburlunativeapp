import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.base
    },
    centerContainer: {
        marginVertical: METRICS.baseVerticalSpace,
        alignItems: 'center'
    },
    recommendTxt: {
        fontSize: METRICS.fontScale(16),
        color: COLORS.white,
        fontFamily: FONTS.interBold,
        textAlign: 'center',
    },
    articleContainer: {
        flexDirection: 'row',
        padding: METRICS.halfVerticalSpace,
        backgroundColor: '#FF7C64',
        borderRadius: METRICS.halfHorizontalSpace,
        marginHorizontal: METRICS.baseHorizontalSpace * 1.5,
        marginVertical: METRICS.halfVerticalSpace / 2
    },
    articleImg: {
        width: METRICS.images.small * 2.5,
        height: METRICS.images.small * 2.5,
        borderRadius: METRICS.halfHorizontalSpace
    },
    infoContainer: {
        flex: 1,
        marginLeft: METRICS.baseHorizontalSpace,
    },
    articleTxt: {
        fontSize: METRICS.fontScale(18),
        color: COLORS.white,
        fontFamily: FONTS.interBold
    },
    iconStyle: {
        alignSelf: 'flex-end'
    },
    adContainer: {
        alignSelf: 'center',
        marginTop: METRICS.baseVerticalSpace
    }
});

export default styles;