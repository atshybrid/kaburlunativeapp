import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../theme';
import styles from './style/index.style';
import { Button, Input } from '../../components';
import { ROUTES } from '../../constants';

interface NavigationProps {
    navigation: any;
    route: any;
}

export function DashboardScreen({ route, navigation }: NavigationProps) {
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
                    <Text style={[styles.titleTxt, { color: COLORS.green }]}>{t('kyc_verification')}</Text>
                </View>
                <View style={styles.modalMainContainer}>
                    <Text style={styles.titleTxt}>{t('need_to_verify')}</Text>
                    <Text style={styles.subTitleTxt}>{t('identity_instruction')}</Text>
                    <Text style={[styles.inputTitleTxt, { marginTop: 16 }]}>{t('id_proof')}</Text>
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
                        <Text style={styles.getOTPTxt}>{t('get_otp')}</Text>
                    </TouchableOpacity>
                    <Text style={[styles.inputTitleTxt, { marginTop: 8 }]}>{t('verify_otp')}</Text>
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
                        buttonTitle={t('verify')}
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
            <TouchableOpacity style={styles.articleTopContainer} activeOpacity={1} onPress={() => { navigation.navigate(ROUTES.ADD_POST); }}>
                <Icon name='newspaper-outline' size={24} color={COLORS.sky} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.articleTitle}>{t('post_articles')}</Text>
                    <Text style={styles.articleSubTitle}>{t('post_instruction')}</Text>
                </View>
                <Icon name='chevron-forward' size={24} color={COLORS.sky} />
            </TouchableOpacity>
            <View style={styles.articleBottomContainer}>
                <View style={[styles.articleItem, { backgroundColor: COLORS.lightgreen }]}>
                    <View style={styles.articleItemContainer}>
                        <Icon name='newspaper-outline' size={24} color={COLORS.green} />
                        <Text style={[styles.totalArticle, { color: COLORS.green }]}>{'8'}</Text>
                    </View>
                    <Text style={[styles.subNameTxt, { marginTop: 4 }]}>{t('published')}</Text>
                </View>
                <View style={[styles.articleItem, { backgroundColor: COLORS.lightpurple }]}>
                    <View style={styles.articleItemContainer}>
                        <Icon name='newspaper-outline' size={24} color={COLORS.purple} />
                        <Text style={[styles.totalArticle, { color: COLORS.purple }]}>{'10'}</Text>
                    </View>
                    <Text style={[styles.subNameTxt, { marginTop: 4 }]}>{t('submitted')}</Text>
                </View>
                <View style={[styles.articleItem, { backgroundColor: COLORS.lighttomato }]}>
                    <View style={styles.articleItemContainer}>
                        <Icon name='newspaper-outline' size={24} color={COLORS.tomato} />
                        <Text style={[styles.totalArticle, { color: COLORS.tomato }]}>{'2'}</Text>
                    </View>
                    <Text style={[styles.subNameTxt, { marginTop: 8 }]}>{t('rejected')}</Text>
                </View>
            </View>
        </View>
    );
}