import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapperContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: METRICS.baseHorizontalSpace,
    },
    headerContainer: {
        paddingVertical: METRICS.baseVerticalSpace * 1.5,
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
        borderBottomWidth: METRICS.hairlineWidth,
        margin: METRICS.halfVerticalSpace,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        paddingVertical: METRICS.halfVerticalSpace
    },
    selectedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: METRICS.halfHorizontalSpace,
        borderColor: COLORS.blue,
        margin: METRICS.halfVerticalSpace,
        paddingHorizontal: METRICS.baseHorizontalSpace * 1.5,
        paddingVertical: METRICS.halfVerticalSpace,
    },
    gridItem: {
        flex: 1,
        paddingVertical: METRICS.halfVerticalSpace,
        backgroundColor: COLORS.white,
        borderBottomWidth: METRICS.hairlineWidth,
        marginHorizontal: METRICS.halfHorizontalSpace,
    },
    selectedGridItem: {
        flex: 1,
        paddingVertical: METRICS.halfVerticalSpace,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: METRICS.halfHorizontalSpace,
        borderColor: COLORS.blue,
        marginHorizontal: METRICS.halfHorizontalSpace,
    },
    languageTxt: {
        fontSize: METRICS.fontScale(48),
        textAlign: 'center',
        fontFamily: FONTS.interRegular
    },
    nameTxt: {
        fontSize: METRICS.fontScale(16),
        textAlign: 'center',
        color: COLORS.grey,
        marginTop: METRICS.halfVerticalSpace,
        fontFamily: FONTS.interRegular
    },
    languageRow: {
        marginBottom: METRICS.halfVerticalSpace,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: METRICS.halfVerticalSpace,
    },
});

export default styles;