import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style/index.style';
import { COLORS } from '../../theme';
import { Button, SplitInput } from '../../components';
import KaburluLogo from '../../assets/kaburllu_logo_orange.svg';


export function MPinLoginScreen() {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={{ flex: 1 }}>
                <KaburluLogo />
                <Text style={styles.welcomeTxt}>{`Welcome Back${'\n'}XXXX`}</Text>
                <Text style={styles.mPinEnterTxt}>{'Please Enter your MPIN'}</Text>
                <SplitInput
                    length={4}
                    onComplete={(value) => {
                        console.log(`Entered New MPIN: ${value}`);
                    }}
                />
                <Text style={styles.mPinForgotTxt}>{'Forgot MPIN?'}</Text>
            </View>
            <Button
                buttonTitle="Get OTP"
                onButtonPress={() => { }}
            />
        </View>
    );
}
