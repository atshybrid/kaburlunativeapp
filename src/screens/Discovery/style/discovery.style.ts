import { StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  guestContainer: {
    padding: METRICS.baseVerticalSpace * 1.5,
    justifyContent: 'center',
    backgroundColor: COLORS.lightwhite,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: METRICS.images.small,
    width: METRICS.images.small,
    borderRadius: METRICS.baseHorizontalSpace * 1.5,
    backgroundColor: COLORS.grey
  },
  guestTxtContainer: {
    marginLeft: METRICS.halfHorizontalSpace
  },
  guestTxt: {
    fontSize: METRICS.fontScale(14),
    fontFamily: FONTS.interBold,
    color: COLORS.black
  },
  guestSubTxt: {
    fontSize: METRICS.fontScale(8),
    fontFamily: FONTS.interBold,
    color: COLORS.grey
  },
  clickHereTxt: {
    color: COLORS.red
  },
  optionsContainer: {
    // backgroundColor: COLORS.white
  },
  topOptionsContainer: {
    padding: METRICS.baseVerticalSpace * 1.5,
    backgroundColor: COLORS.white,
  },
  bottomOptionsContainer: {
    margin: METRICS.baseHorizontalSpace * 2
  },
  listTitleTxt: {
    fontSize: METRICS.fontScale(14),
    fontFamily: FONTS.interBold,
    color: COLORS.grey
  },
  listDescTxt: {
    marginTop: METRICS.halfVerticalSpace,
    fontSize: METRICS.fontScale(12),
    fontFamily: FONTS.interBold,
    color: COLORS.red
  },
  listIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: METRICS.icons.medium,
    width: METRICS.icons.medium,
    borderRadius: METRICS.baseHorizontalSpace,
    backgroundColor: COLORS.black
  }
});

export default styles;
