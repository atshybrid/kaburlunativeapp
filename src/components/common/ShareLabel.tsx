import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import KaburluLogo from '../../assets/kaburlu_logo_white.svg'
import { COLORS, FONTS, METRICS } from '../../theme';

export const ShareLabel = () => {
    return (
        <>
            <View style={styles.shareLabelContainer}>
                <Text style={styles.labelTxt}>{"Top Traditional Short News App"}</Text>
                <View style={styles.rightLabel}>
                    <Text style={styles.downloadTxt}>{"Download"}</Text>
                    <KaburluLogo height={METRICS.images.tiny} width={METRICS.images.small * 1.5} />
                </View>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    shareLabelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: METRICS.halfVerticalSpace,
        backgroundColor: COLORS.black
    },
    labelTxt: {
        fontSize: METRICS.fontScale(12),
        fontFamily: FONTS.interSemiBold,
        color: COLORS.white,
    },
    rightLabel: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    downloadTxt: {
        fontSize: METRICS.fontScale(8),
        fontFamily: FONTS.interSemiBold,
        color: COLORS.white,
    }
});
