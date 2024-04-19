import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style/index.style';
import { COLORS } from '../../theme';
import { Button, SplitInput } from '../../components';
import KaburluLogo from '../../assets/kaburllu_logo_orange.svg';


export function MobileOTPScreen() {
    const { t } = useTranslation();

    const handleSubmit = () => {
        // const otpValue = otp.join('');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={{ flex: 1 }}>
                <KaburluLogo />
                <View style={styles.otpTxtContainer}>
                    <Text style={styles.otpVerifyTxt}>{'OTP Verification'}</Text>
                    <Text style={styles.otpInfoTxt}>{'Enter the 4-digit code sent to your mobile number ending in XXXX'}</Text>
                </View>
                <SplitInput
                    length={4}
                    onComplete={(value) => {
                        console.log(`Entered OTP: ${value}`);
                    }}
                />
                <Text style={styles.otpReceiveTxt}>{`Didn't receive the OTP?`}<Text style={styles.otpResendTxt}>{'Resend'}</Text></Text>
            </View>
            <Button
                buttonTitle="Submit"
                onButtonPress={handleSubmit}
            />
        </View>
    );
}
