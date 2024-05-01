import React, { useEffect } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import KaburluLogo from '../../../assets/kaburlu_logo_white.svg';
import { CONSTANTS } from '../../../constants';
import { COLORS } from '../../../theme';

export function SplashScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: CONSTANTS.SPLASH_SCREEN });
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <KaburluLogo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.base,
    },
});
