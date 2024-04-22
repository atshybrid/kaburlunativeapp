import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTS } from '../../theme';
import { Divider } from 'react-native-paper';


export const TopContainer = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.txtStyle}>{'సంపుటిక : 1'}</Text>
                <View style={styles.divider} />
                <Text style={styles.txtStyle}>{'సంచిక : 3'}</Text>
                <View style={styles.divider} />
                <Text style={styles.txtStyle}>{'కామారెడ్డి'}</Text>
                <View style={styles.divider} />
                <Text style={styles.txtStyle}>{'గురువారం'}</Text>
                <View style={styles.divider} />
                <Text style={styles.txtStyle}>{'9/11/2023'}</Text>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.base,
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    txtStyle: {
        fontSize: 12,
        fontFamily: FONTS.interBold,
        color: COLORS.white
    },
    divider: {
        width: 2,
        height: '80%',
        backgroundColor: COLORS.white
    }
});
