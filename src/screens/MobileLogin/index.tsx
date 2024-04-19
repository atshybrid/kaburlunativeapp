import React, { useState } from 'react';
import { View, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style/index.style';
import { COLORS } from '../../theme';
import { Button } from '../../components';
import KaburluLogo from '../../assets/kaburllu_logo_orange.svg';


export function MobileLoginScreen() {
    const { t } = useTranslation();

    const [countryCode, setCountryCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryCodeChange = () => {
        console.log("countryCode ==>", countryCode);
    };

    const handlePhoneNumberChange = (number: string) => {
        setPhoneNumber(number);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={{ flex: 1 }}>
                <KaburluLogo />
                <Text style={styles.welcomeTxt}>Welcome Back !</Text>
                <Text style={styles.mobileTxt}>Enter your mobile number<Text style={styles.required}>{` *`}</Text></Text>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.countryInput} onPress={handleCountryCodeChange}>
                        <Text style={styles.countryTxt}>{countryCode}</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.mobileInput}
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                        keyboardType="phone-pad"
                        maxLength={10}
                    />
                </View>
            </View>
            <Button
                buttonTitle="Get OTP"
                onButtonPress={() => { }}
            />
        </View>
    );
}
