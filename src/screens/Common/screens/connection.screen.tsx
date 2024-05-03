import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import NetInfo from "@react-native-community/netinfo";
import { CONSTANTS } from '../../../constants';
import { FONTS, COLORS, METRICS } from '../../../theme';
import { Button } from '../../../components';

export function ConnectionScreen() {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const onRetryBtnPress = () => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                dispatch({
                    type: CONSTANTS.CONNECTION_AVAILABLE,
                    payload: state.isConnected,
                });
            }
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={styles.infoContainer}>
                <LottieView source={require('../../../assets/lottie/no_internet.json')} style={styles.icon} autoPlay loop />
                <Text style={styles.noInternetTitle}>{'No Internet Connection'}</Text>
                <Text style={styles.noInternetSubTitle}>{'Looks like your internet connection is interruted. Please check your network and retry'}</Text>
            </View>
            <Button
                buttonTitle={t('retry')}
                onButtonPress={onRetryBtnPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: METRICS.baseVerticalSpace * 1.5,
        backgroundColor: COLORS.white,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        width: METRICS.icons.xxl,
        height: METRICS.icons.xxl,
        alignSelf: 'center',
        marginBottom: METRICS.baseVerticalSpace
    },
    noInternetTitle: {
        textAlign: 'center',
        fontSize: METRICS.fontScale(20),
        color: COLORS.black,
        fontFamily: FONTS.interBold,
    },
    noInternetSubTitle: {
        textAlign: 'center',
        fontSize: METRICS.fontScale(16),
        color: COLORS.grey,
        fontFamily: FONTS.interRegular,
    }
});
