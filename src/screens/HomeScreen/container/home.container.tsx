import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import styles from '../style/home.style';
import { COLORS } from '../../../theme';
import { useTranslation } from 'react-i18next';
import { FirstTemplate, SecondTemplate, ThirdTemplate, FourthTemplate, FifthTemplate } from '../../../components/Template';
import { newsConst } from '../../../constants';

export function HomeScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
      <FifthTemplate data={newsConst[4]} />
      {/* <Text>{t('welcome')}</Text> */}
    </View>
  );
}
