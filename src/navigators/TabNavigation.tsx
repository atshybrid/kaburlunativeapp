import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ROUTES } from '../constants';
import { LanguageScreen } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();


    return (
        <Tab.Navigator
            initialRouteName={ROUTES.MENU}
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name={ROUTES.MENU}
                component={LanguageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='menu' size={size} color={color} />
                }}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        // navigation.openDrawer();
                    }
                })}
            />
            <Tab.Screen
                name={ROUTES.SEARCH}
                component={LanguageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='search' size={size} color={color} />
                }}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.openDrawer();
                    }
                })}
            />
            {/* <Tab.Screen
                name={ROUTES.UNREAD}
                component={LanguageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='visibility-off' size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ROUTES.RELOAD}
                component={LanguageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='refresh' size={size} color={color} />
                }}
            /> */}
        </Tab.Navigator>
    );
};

export { TabNavigation };