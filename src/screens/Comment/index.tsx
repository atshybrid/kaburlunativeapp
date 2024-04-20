import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../theme';
import styles from './style/index.style';

export function CommentScreen() {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <Text>Comment Screen</Text>
        </View>
    );
}
