import React from 'react';
import { View, StatusBar, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider, List } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import styles from './style/discovery.style';
import { COLORS, METRICS } from '../../theme';
import { ROUTES } from '../../constants';

interface NavigationProps {
    navigation: any;
    route: any;
}

interface DiscoveryOptions {
    id: number;
    title: string;
    description: string;
    onPress: () => void;
    icon: JSX.Element;
}

export function DiscoveryScreen({ route, navigation }: NavigationProps) {
    const { t } = useTranslation();

    const topOptionsList: DiscoveryOptions[] = [
        {
            id: 0,
            title: t('select_app_language'),
            description: 'English',
            onPress: () => navigation.navigate(ROUTES.APP_LANGUAGE),
            icon: <Icon name={'translate'} size={METRICS.icons.large} onPress={() => null} />,
        },
        {
            id: 1,
            title: t('select_content_language'),
            description: 'తెలుగు Telugu',
            onPress: () => navigation.navigate(ROUTES.CONTENT_LANGUAGE),
            icon: <Icon name={'language'} size={METRICS.icons.large} onPress={() => null} />,
        },
        {
            id: 2,
            title: t('select_location'),
            description: 'Syamala Residancy, Manikonda (Change)',
            onPress: () => null,
            icon: <Icon name={'pin-drop'} size={METRICS.icons.large} onPress={() => null} />,
        }
    ];

    // const [bottomOptionsList] = useState([
    //     {
    //         id: 0,
    //         title: t('reporter'),
    //         icon: <Icon name={'person'} size={18} onPress={() => null} />,
    //         onPress: () => null,
    //     },
    //     {
    //         id: 1,
    //         title: t('viral'),
    //         icon: <Icon name={'visibility'} size={18} onPress={() => null} />,
    //         onPress: () => null,
    //     },
    //     {
    //         id: 2,
    //         title: t('contact'),
    //         icon: <Icon name={'call'} size={18} onPress={() => null} />,
    //         onPress: () => null,
    //     },
    // ])

    // const renderBottomOptionsItem = ({ item }: any) => (
    //     <>
    //         <Divider />
    //         <List.Item
    //             title={item.title}
    //             description={item.discription}
    //             titleStyle={styles.listTitleTxt}
    //             left={() => item.icon}
    //             right={() => (
    //                 <Icon name={'double-arrow'} size={20} onPress={() => null} />
    //             )}
    //             onPress={item.onPress}
    //         />
    //     </>
    // );

    const renderTopOptionsItem = ({ item }: { item: DiscoveryOptions }) => {
        return (
            <>
                <List.Item
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    style={styles.topOptionsContainer}
                    titleStyle={styles.listTitleTxt}
                    descriptionStyle={styles.listDescTxt}
                    left={() => item.icon}
                    right={() => (
                        <View style={styles.listIconContainer}>
                            <Icon name={'chevron-right'} size={METRICS.icons.medium} color={COLORS.white} />
                        </View>
                    )}
                    onPress={item.onPress}
                />
                <Divider />
            </>
        )
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
            <View style={styles.guestContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                        <Icon name='person-outline' size={METRICS.icons.medium} color={COLORS.white} />
                    </View>
                    <TouchableOpacity
                        style={styles.guestTxtContainer}
                        onPress={() => { }}>
                        <Text style={styles.guestTxt}>{t(`guest`)}</Text>
                        <Text style={styles.guestSubTxt}>
                            <Text style={styles.clickHereTxt}>{t(`click_here`)}</Text>{` ${t('to')} ${t('select_mobile_number')}`}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={topOptionsList}
                renderItem={({ item }) => renderTopOptionsItem({ item })}
                keyExtractor={item => item.id.toString()}
                extraData={topOptionsList}
            />
        </View>
    );
}
