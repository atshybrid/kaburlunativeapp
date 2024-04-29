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

export function SetMPinScreen({ route, navigation }: NavigationProps) {
    const { t } = useTranslation();

    const [newMPin, setNewMPin] = useState('');
    const [confirmMPin, setConfirmMPin] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={{ flex: 1 }}>
                <KaburluLogo />
                <Text style={styles.mPinCreateTxt}>{t('create_mpin')}</Text>
                <Text style={styles.mPinEnterTxt}>{t('new_mpin')}</Text>
                <SplitInput
                    value={newMPin}
                    length={4}
                    onComplete={(value) => {
                        console.log(`Entered New MPIN: ${value}`);
                        setNewMPin(value)
                    }}
                />
                <Text style={styles.mPinEnterTxt}>{t('confirm_mpin')}</Text>
                <SplitInput
                    value={confirmMPin}
                    length={4}
                    onComplete={(value) => {
                        console.log(`Enter Confirm MPIN: ${value}`);
                        setConfirmMPin(value)
                    }}
                />
            </View>
            <Button
                buttonTitle={t('set_mpin')}
                onButtonPress={() => { navigation.navigate(ROUTES.MPIN_LOGIN); }}
            // disabled={!newMPin || !confirmMPin || newMPin !== confirmMPin} Add
            />
        </View>
    );
}
