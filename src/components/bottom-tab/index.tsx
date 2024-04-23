import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style/bottom-tab.style';
import { COLORS } from '../../theme';

type ButtonProps = {
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
}: ButtonProps) => {
    return (
        <>
            <View style={styles.tabBarContainer}>
                <TouchableOpacity style={styles.tabBarItem} activeOpacity={1} onPress={() => { }}>
                    <Icon name='menu' size={24} color={COLORS.grey} />
                    <Text>{'Menu'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBarItem} activeOpacity={1} onPress={() => { }}>
                    <Icon name='search' size={24} color={COLORS.grey} />
                    <Text>{'Search'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBarItem} activeOpacity={1} onPress={() => { }}>
                    <Icon name='visibility-off' size={24} color={COLORS.grey} />
                    <Text>{'Unread'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabBarItem} activeOpacity={1} onPress={() => { }}>
                    <Icon name='refresh' size={24} color={COLORS.grey} />
                    <Text>{'Reload'}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
