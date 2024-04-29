import React, { useState } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style/index.style';
import { COLORS } from '../../theme';
import { Button, SplitInput } from '../../components';
import KaburluLogo from '../../assets/kaburllu_logo_orange.svg';
import { ROUTES } from '../../constants';

interface NavigationProps {
    navigation: any;
    route: any;
}

export function MobileOTPScreen({ route, navigation }: NavigationProps) {
    const { t } = useTranslation();

    const [otp, setOtp] = useState('');

    const handleSubmit = () => {
        // const otpValue = otp.join('');
        navigation.navigate(ROUTES.SET_MPIN);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={{ flex: 1 }}>
                <KaburluLogo />
                <View style={styles.otpTxtContainer}>
                    <Text style={styles.otpVerifyTxt}>{t('otp_verification')}</Text>
                    <Text style={styles.otpInfoTxt}>{`${t('otp_instruction')} XXXX`}</Text>
                </View>
                <SplitInput
                    value={otp}
                    length={4}
                    onComplete={(value) => {
                        setOtp(value);
                        console.log(`Entered OTP: ${value}`);
                    }}
                />
                <Text style={styles.otpReceiveTxt}>{`${t('not_receive_otp')} `}<Text style={styles.otpResendTxt}>{`${t('resend_now')}.`}</Text></Text>
            </View>
            <Button
                buttonTitle={t('submit')}
                onButtonPress={handleSubmit}
            // disabled={!otp} Add
            />
        </View>
    );
}
