import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style/index.style';
import { COLORS } from '../../theme';
import { Button, SplitInput } from '../../components';
import KaburluLogo from '../../assets/kaburllu_logo_orange.svg';


export function SetMPinScreen() {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={{ flex: 1 }}>
                <KaburluLogo />
                <Text style={styles.mPinCreateTxt}>{'Create MPIN'}</Text>
                <Text style={styles.mPinEnterTxt}>{'Enter New MPIN'}</Text>
                <SplitInput
                    length={4}
                    onComplete={(value) => {
                        console.log(`Entered New MPIN: ${value}`);
                    }}
                />
                <Text style={styles.mPinEnterTxt}>{'Enter Confirm MPIN'}</Text>
                <SplitInput
                    length={4}
                    onComplete={(value) => {
                        console.log(`Enter Confirm MPIN: ${value}`);
                    }}
                />
            </View>
            <Button
                buttonTitle="Set MPIN"
                onButtonPress={() => { }}
            />
        </View>
    );
}
