import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';
import styles from './style/index.style';
import { COLORS } from '../../theme';
import { Button } from '../../components';
import KaburluLogo from '../../assets/kaburllu_logo_orange.svg';
import country from '../../assets/json/country.json'

interface Country {
    name: string;
    callingCode: string;
    code: string;
    flag: string;
}

export function MobileLoginScreen() {
    const { t } = useTranslation();

    const [countryData, setCountryData] = useState<Country[]>([]);
    const [countryCode, setCountryCode] = useState('91');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [isCountryModalVisible, setCountryModalVisible] = useState(false);

    useEffect(() => {
        setCountryData(country);
    }, []);

    const handleCountryInput = () => {
        setCountryModalVisible(true)
        console.log("countryCode ==>", countryCode);
    };

    const handleCountryChange = (callingCode: string) => {
        setCountryCode(callingCode);
        handleContryModalClose();
    };

    const handlePhoneNumber = (number: string) => {
        setPhoneNumber(number);
    };

    const handleContryModalClose = () => {
        setCountryModalVisible(!isCountryModalVisible);
    };

    // Render item for FlatList
    const renderModalItem = ({ item }: { item: Country }) => (
        <View style={styles.modalItem}>
            <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} activeOpacity={0.8} onPress={() => handleCountryChange(item.callingCode)}>
                <Image source={{ uri: item.flag }} style={styles.countryImg} />
                <Text style={[styles.countryTxt, { marginLeft: 12 }]}>{item.name}</Text>
                <Text style={styles.countryTxt}>{` (${item.code})`}</Text>
            </TouchableOpacity>
            <Text style={styles.countryTxt}>{`(+${item.callingCode})`}</Text>
        </View>
    );

    const renderModal = () => {
        return (
            <View style={styles.modalContainer}>
                <FlatList
                    data={countryData}
                    renderItem={renderModalItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <Modal
                testID={'modal'}
                isVisible={isCountryModalVisible}
                onBackdropPress={handleContryModalClose}
                onBackButtonPress={handleContryModalClose}
                style={styles.modalView}>
                {renderModal()}
            </Modal>
            <View style={{ flex: 1 }}>
                <KaburluLogo />
                <Text style={styles.welcomeTxt}>{'Welcome Back !'}</Text>
                <Text style={styles.mobileTxt}>{'Enter your mobile number'}<Text style={styles.required}>{` *`}</Text></Text>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.countryInput} onPress={handleCountryInput} activeOpacity={0.9}>
                        <Text style={styles.countryTxt}>{`+${countryCode}`}</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Enter Mobile Number'
                        style={styles.mobileInput}
                        cursorColor={COLORS.base}
                        value={phoneNumber}
                        onChangeText={handlePhoneNumber}
                        keyboardType="phone-pad"
                        maxLength={10}
                    />
                </View>
            </View>
            <Button
                buttonTitle="Get OTP"
                onButtonPress={() => { }}
                disabled={!phoneNumber}
            />
        </View>
    );
}
