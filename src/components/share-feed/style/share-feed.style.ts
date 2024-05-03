import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    modalView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    reportModalContainer: {
        backgroundColor: COLORS.white,
    },
    reportTopContainer: {
        padding: METRICS.baseVerticalSpace * 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reportTitle: {
        fontSize: METRICS.fontScale(20),
        fontFamily: FONTS.interBold,
        color: COLORS.lightblack
    },
    reportItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reportlabelTxt: {
        fontSize: METRICS.fontScale(14),
        fontFamily: FONTS.interRegular,
        color: COLORS.lightblack
    },
    inputStyle: {
        paddingVertical: METRICS.halfVerticalSpace,
        marginVertical: METRICS.baseVerticalSpace * 1.5,
        textAlignVertical: 'top'
    },
    optionsModalContainer: {
        padding: METRICS.baseVerticalSpace,
        backgroundColor: COLORS.white,
    },
    closeiconContainer: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: METRICS.icons.medium,
        height: METRICS.icons.medium,
        backgroundColor: COLORS.lightwhite,
        borderRadius: METRICS.icons.tiny
    },
    optionsItemWrapper: {
        margin: METRICS.baseVerticalSpace
    },
    optionsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: METRICS.baseVerticalSpace
    },
    optionsItemTxt: {
        fontSize: METRICS.fontScale(12),
        color: COLORS.black,
        fontFamily: FONTS.interSemiBold,
        marginLeft: METRICS.baseHorizontalSpace
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: METRICS.baseVerticalSpace * 1.5,
        paddingHorizontal: METRICS.baseHorizontalSpace,
        backgroundColor: COLORS.white
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    middleContainer: {
        position: 'absolute',
        zIndex: 1,
        bottom: METRICS.shareBtn,
        left: (METRICS.windowWidth / 2) - (METRICS.images.medium / 2),
        alignItems: 'center',
    },
    outterIconContainer: {
        width: METRICS.images.medium,
        height: METRICS.images.medium,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: METRICS.images.medium / 2
    },
    innerIconContainer: {
        width: METRICS.images.small * 1.5,
        height: METRICS.images.small * 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.green,
        borderRadius: METRICS.images.tiny
    },
    totalShareTxt: {
        fontSize: METRICS.fontScale(10),
        color: COLORS.lightblack,
        fontFamily: FONTS.interBold,
        textTransform: 'uppercase'
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viralPostTxt: {
        fontSize: METRICS.fontScale(12),
        color: COLORS.base,
        fontFamily: FONTS.interBold,
    }
});

export default styles;