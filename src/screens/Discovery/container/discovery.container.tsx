import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider, List } from 'react-native-paper';
import styles from '../style/discovery.style';
import { COLORS } from '../../../theme';
import { useTranslation } from 'react-i18next';


export function DiscoveryScreen() {
  const { t } = useTranslation();

  const [topOptionsList] = useState([
    {
      id: 0,
      title: `${t('app-language')}`,
      discription: `${t('selected-language')}`,
      onPress: () => null,
      icon: <Icon name={'translate'} size={32} onPress={() => null} />,
    },
    {
      id: 1,
      title: `${t('content-language')}`,
      discription: 'తెలుగు Telugu',
      onPress: () => null,
      icon: <Icon name={'language'} size={32} onPress={() => null} />,
    },
    {
      id: 2,
      title: `${t('selected-location')}`,
      discription: 'Syamala Residancy, Manikonda (Change)',
      onPress: () => null,
      icon: <Icon name={'pin-drop'} size={32} onPress={() => null} />,
    }
  ])

  const [bottomOptionsList] = useState([
    {
      id: 0,
      title: t('reporter'),
      icon: <Icon name={'person'} size={18} onPress={() => null} />,
      onPress: () => null,
    },
    {
      id: 1,
      title: t('viral'),
      icon: <Icon name={'visibility'} size={18} onPress={() => null} />,
      onPress: () => null,
    },
    {
      id: 2,
      title: t('contact'),
      icon: <Icon name={'call'} size={18} onPress={() => null} />,
      onPress: () => null,
    },
  ])

  const renderBottomOptionsItem = ({ item }: any) => (
    <>
      <Divider />
      <List.Item
        title={item.title}
        description={item.discription}
        titleStyle={styles.listTitleTxt}
        left={() => item.icon}
        right={() => (
          <Icon name={'double-arrow'} size={20} onPress={() => null} />
        )}
        onPress={item.onPress}
      />
    </>
  );

  const renderTopOptionsItem = ({ item }: any) => (
    <>
      <List.Item
        title={item.title}
        description={item.discription}
        style={styles.topOptionsContainer}
        titleStyle={styles.listTitleTxt}
        descriptionStyle={styles.listDescTxt}
        left={() => item.icon}
        right={() => (
          <TouchableOpacity style={styles.listIconContainer} onPress={() => null}>
            <Icon name={'chevron-right'} size={24} color={COLORS.white} />
          </TouchableOpacity>
        )}
        onPress={item.onPress}
      />
      <Divider />
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
      <View style={styles.guestContainer}>
        <View style={{ flexDirection: 'row', gap: 6 }}>
          <View style={styles.iconContainer}>
            <Icon name='person-outline' size={24} color={COLORS.white} />
          </View>
          <TouchableOpacity
            style={styles.guestTxtContainer}
            onPress={() => { }}>
            <Text style={styles.guestTxt}>{t(`guest`)}</Text>
            <Text style={styles.guestSubTxt}>
              <Text style={styles.clickHereTxt}>Click here </Text> to
              select Mobile Number
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={topOptionsList}
          renderItem={item => renderTopOptionsItem(item)}
          keyExtractor={item => item.id.toString()}
        />
        <FlatList
          data={bottomOptionsList}
          contentContainerStyle={styles.bottomOptionsContainer}
          renderItem={item => renderBottomOptionsItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      {/* <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
        }}>
        <SafeAreaView>
          <FlatList
            data={OptionList}
            renderItem={item => renderItem(item)}
            keyExtractor={item => item?.id}
          />
        </SafeAreaView>
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.heading}>{t('categories')}</Text>
        <View style={styles.wrapper}>
          {[1, 2, 3, 4, 5, 6, 7].map((i, id) => (
            <View
              key={id}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../../assets/categoryImg.png')}
                style={styles.iconImage}
              />
              <Text>ABC</Text>
            </View>
          ))}
        </View>
        <FlatList data={options} renderItem={item => renderBelowItem(item)} />
      </View> */}
    </View>
  );
}
