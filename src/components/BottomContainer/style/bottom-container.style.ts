import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../theme';

const styles = StyleSheet.create({
    bottomContainer: { flexDirection: 'row', margin: 16 },
    AuthorWrapperContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    AuthorContainer: { flexDirection: 'row', alignItems: 'center' },
    space: {
        marginHorizontal: 8
    },
    spaceIconTxt: {
        marginLeft: 4
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: COLORS.grey
    },
    AuthorInfoContainer: {
        marginLeft: 4
    },
    reporterTxt: {
        fontSize: 10,
        fontFamily: FONTS.interBold,
        color: COLORS.grey
    },
    reporterLocation: {
        fontSize: 8,
        fontFamily: FONTS.interRegular,
        color: COLORS.grey
    },
    publishTimeTxt: {
        fontSize: 12,
        fontFamily: FONTS.interSemiBold,
        color: COLORS.grey,
        marginLeft: 4
    },
    divider: {
        height: 2,
        width: '96%',
        backgroundColor: COLORS.lightwhite,
        alignSelf: 'center'
    }
});

export default styles;
