import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style/bottom-tab.style';
import { COLORS } from '../../theme';
import { ROUTES } from '../../constants';

type Props = {
    onMenuButtonPress?: () => any;
    onSearchButtonPress?: () => any;
    onUnreadButtonPress?: () => any;
    onRealoadButtonPress?: () => any;
};

export const BottomTab = ({
    onMenuButtonPress,
    onSearchButtonPress,
    onUnreadButtonPress,
    onRealoadButtonPress
}: Props) => {
    const { t } = useTranslation();
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <TapGestureHandler enabled={true}>
            <View style={styles.bottomTabBarContainer}>
                <TouchableOpacity style={styles.bottomTabBarItem} activeOpacity={1} onPress={() => { navigation.navigate(ROUTES.DASHBOARD) }}>
                    <Icon name='menu' size={24} color={COLORS.grey} />
                    <Text>{t('menu')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTabBarItem} activeOpacity={1} onPress={() => { navigation.navigate(ROUTES.DISCOVERY) }}>
                    <Icon name='search' size={24} color={COLORS.grey} />
                    <Text>{t('search')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTabBarItem} activeOpacity={1} onPress={() => { navigation.navigate(ROUTES.ADD_STAFF) }}>
                    <Icon name='visibility-off' size={24} color={COLORS.grey} />
                    <Text>{t('unread')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTabBarItem} activeOpacity={1} onPress={() => { }}>
                    <Icon name='refresh' size={24} color={COLORS.grey} />
                    <Text>{t('reload')}</Text>
                </TouchableOpacity>
            </View>
        </TapGestureHandler>
    );
};
