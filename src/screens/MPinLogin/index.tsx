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

export function MPinLoginScreen({ route, navigation }: NavigationProps) {
    const { t } = useTranslation();

    const [mPin, setMPin] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={{ flex: 1 }}>
                <KaburluLogo />
                <Text style={styles.welcomeTxt}>{`${t('welcome_back')}${'\n'}XXXX`}</Text>
                <Text style={styles.mPinEnterTxt}>{t('enter_mpin')}</Text>
                <SplitInput
                    value={mPin}
                    length={4}
                    onComplete={(value) => {
                        setMPin(value);
                        console.log(`Entered New MPIN: ${value}`);
                    }}
                />
                <Text style={styles.mPinForgotTxt}>{t('forgot_mpin')}</Text>
            </View>
            <Button
                buttonTitle={t('get_otp')}
                onButtonPress={() => { navigation.navigate(ROUTES.HOME); }}
            // disabled={!mPin} Add
            />
        </View>
    );
}
