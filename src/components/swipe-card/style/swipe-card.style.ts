import { StatusBar, StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    swipeCard: {
        // position: "absolute",
        width: width,
        height: height - StatusBar.currentHeight,
        backgroundColor: COLORS.white
    }
});

export default styles;