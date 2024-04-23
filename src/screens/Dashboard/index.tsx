import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../theme';
import styles from './style/index.style';
import { Button, Input } from '../../components';

export function DashboardScreen() {
    const { t } = useTranslation();

    const [isKYCModalVisible, setKYCModalVisible] = useState(false);

    const [aadhar, setAadhar] = useState('');
    const [otp, setOtp] = useState('');

    const handleProfileOnPress = () => {
        setKYCModalVisible(true);
    };

    const handleKYCModalClose = () => {
        setKYCModalVisible(!isKYCModalVisible);
    };

    const renderKYCModal = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.modalTopContainer}>
                    <Text style={[styles.titleTxt, { color: COLORS.green }]}>{'KYC Verification'}</Text>
                </View>
                <View style={styles.modalMainContainer}>
                    <Text style={styles.titleTxt}>{'We need to verify you.'}</Text>
                    <Text style={styles.subTitleTxt}>{'We need to confirm your identity. The reason for this is to fight fraud and keep the business secure'}</Text>
                    <Text style={[styles.inputTitleTxt, { marginTop: 16 }]}>{'Proof of identity'}</Text>
                    <Input
                        placeholder="i.e Aadhar Number"
                        keyboardType='number-pad'
                        onChangeText={text => {
                            setAadhar(text)
                        }}
                        value={aadhar}
                        maxLength={12}
                        containerStyle={styles.textInput}
                    />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                        <Text style={styles.getOTPTxt}>{'GET OTP'}</Text>
                    </TouchableOpacity>
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{'Verify OTP'}</Text>
                    <Input
                        placeholder="i.e Enter OTP"
                        keyboardType='number-pad'
                        onChangeText={text => {
                            setOtp(text)
                        }}
                        value={otp}
                        maxLength={6}
                        containerStyle={styles.textInput}
                    />
                    <Button
                        buttonTitle="Verify"
                        onButtonPress={() => { }}
                        buttonTextStyle={styles.btnTxt}
                        containerStyle={styles.btnContainer}
                    />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <Modal
                testID={'modal'}
                isVisible={isKYCModalVisible}
                onBackdropPress={handleKYCModalClose}
                onBackButtonPress={handleKYCModalClose}>
                {renderKYCModal()}
            </Modal>
            <View style={styles.profileContainer}>
                <View style={styles.profileImgContainer}>
                    <TouchableOpacity activeOpacity={0.8} onPress={handleProfileOnPress}>
                        <Icon name='person-circle' size={96} color={COLORS.grey} />
                    </TouchableOpacity>
                    <View style={styles.txtContainer}>
                        <Text style={styles.nameTxt}>{'Nagendra Reddy'}</Text>
                        <Text style={styles.roleTxt}>{'Reporter'}</Text>
                        <Text style={styles.subNameTxt}>{'Kamareddy'}</Text>
                    </View>
                </View>
                <Icon name='settings-outline' size={24} color={COLORS.grey} />
            </View>
            <View style={styles.articleTopContainer}>
                <Icon name='newspaper-outline' size={24} color={COLORS.sky} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.articleTitle}>{'Post Articles'}</Text>
                    <Text style={styles.articleSubTitle}>{'You can post a new article by clicking here'}</Text>
                </View>
                <Icon name='chevron-forward' size={24} color={COLORS.sky} />
            </View>
            <View style={styles.articleBottomContainer}>
                <View style={[styles.articleItem, { backgroundColor: COLORS.lightgreen }]}>
                    <View style={styles.articleItemContainer}>
                        <Icon name='newspaper-outline' size={24} color={COLORS.green} />
                        <Text style={[styles.totalArticle, { color: COLORS.green }]}>{'8'}</Text>
                    </View>
                    <Text style={[styles.subNameTxt, { marginTop: 4 }]}>{'Published'}</Text>
                </View>
                <View style={[styles.articleItem, { backgroundColor: COLORS.lightpurple }]}>
                    <View style={styles.articleItemContainer}>
                        <Icon name='newspaper-outline' size={24} color={COLORS.purple} />
                        <Text style={[styles.totalArticle, { color: COLORS.purple }]}>{'10'}</Text>
                    </View>
                    <Text style={[styles.subNameTxt, { marginTop: 4 }]}>{'Submitted'}</Text>
                </View>
                <View style={[styles.articleItem, { backgroundColor: COLORS.lighttomato }]}>
                    <View style={styles.articleItemContainer}>
                        <Icon name='newspaper-outline' size={24} color={COLORS.tomato} />
                        <Text style={[styles.totalArticle, { color: COLORS.tomato }]}>{'2'}</Text>
                    </View>
                    <Text style={[styles.subNameTxt, { marginTop: 8 }]}>{'Rejected'}</Text>
                </View>
            </View>
        </View>
    );
}