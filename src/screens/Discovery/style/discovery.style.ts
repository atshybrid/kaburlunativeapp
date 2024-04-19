import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  guestContainer: {
    padding: 16,
    justifyContent: 'center',
    backgroundColor: COLORS.lightwhite,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: COLORS.grey
  },
  guestTxtContainer: {
    marginLeft: 8
  },
  guestTxt: {
    fontSize: 14,
    fontFamily: FONTS.interBold,
    color: COLORS.black
  },
  guestSubTxt: {
    fontSize: 8,
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
    padding: 16,
    backgroundColor: COLORS.white,
  },
  bottomOptionsContainer: {
    margin: 32
  },
  listTitleTxt: {
    fontSize: 14,
    fontFamily: FONTS.interBold,
    color: COLORS.grey
  },
  listDescTxt: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: FONTS.interBold,
    color: COLORS.red
  },
  listIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: COLORS.black
  }
});

export default styles;
