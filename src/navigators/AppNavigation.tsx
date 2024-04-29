import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import messaging from "@react-native-firebase/messaging";
import {
    SplashScreen,
    HomeScreen,
    DiscoveryScreen,
    MobileLoginScreen,
    MobileOTPScreen,
    SetMPinScreen,
    MPinLoginScreen,
    CommentScreen,
    AddStaffScreen,
    AddPostScreen,
    DashboardScreen,
    AppLanguageScreen,
    ContentLanguageScreen
} from '../screens';
import { navigationRef } from '../navigators';
import { ROUTES } from '../constants';
import { RootState } from '../store';
import { splashStateIF } from '../store/reducers/splashReducer';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const dispatch = useDispatch();
    const loading = useSelector(
        (state: RootState): splashStateIF => state.splash,
    );

    const requestUserPermission = async (): Promise<boolean> => {
        try {
            const authStatus = await messaging().requestPermission();

            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            );

            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;

            return enabled;
        } catch (error) {
            return false;
        }
    };

    useEffect(() => {
        const initializeMessaging = async () => {
            if (await requestUserPermission()) {
                messaging()
                    .getToken()
                    .then(token => {
                        console.log('Token ==>', token);
                    });
            } else {
                console.log('Failed token status');
            }

            // Check whether an initial notification is available
            messaging()
                .getInitialNotification()
                .then(async remoteMessage => {
                    if (remoteMessage) {
                        console.log(
                            'Notification caused app to open from quit state:',
                            remoteMessage.notification,
                        );
                    }
                });

            // Assume a message-notification contains a "type" property in the data payload of the screen to open
            messaging().onNotificationOpenedApp(async remoteMessage => {
                console.log(
                    'Notification caused app to open from background state:',
                    remoteMessage.notification,
                );
            });

            // Register background handler
            messaging().setBackgroundMessageHandler(async remoteMessage => {
                console.log('Message handled in the background!', remoteMessage);
            });
        };

        initializeMessaging();
    }, [])


    const options = {
        headerShown: false,
    };

    if (loading.isActiveSplash) {
        return <SplashScreen />;
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen
                        name={ROUTES.MOBILE_LOGIN}
                        component={MobileLoginScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.MOBILE_OTP}
                        component={MobileOTPScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.SET_MPIN}
                        component={SetMPinScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.MPIN_LOGIN}
                        component={MPinLoginScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.DASHBOARD}
                        component={DashboardScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.ADD_POST}
                        component={AddPostScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.ADD_STAFF}
                        component={AddStaffScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.HOME}
                        component={HomeScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.COMMENT}
                        component={CommentScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.DISCOVERY}
                        component={DiscoveryScreen}
                        options={options}
                    />
                    <Stack.Screen
                        name={ROUTES.APP_LANGUAGE}
                        component={AppLanguageScreen}
                        options={{ ...options, animation: 'slide_from_bottom' }}
                    />
                    <Stack.Screen
                        name={ROUTES.CONTENT_LANGUAGE}
                        component={ContentLanguageScreen}
                        options={{ ...options, animation: 'slide_from_bottom' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export { AppNavigation };
