import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
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
    ContentLanguageScreen,
    ConnectionScreen
} from '../screens';
import { navigationRef } from '../navigators';
import { ROUTES } from '../constants';
import { RootState } from '../store';
import { splashState } from '../store/reducers/splashReducer';
import { connectionState } from '../store/reducers/connectionReducer';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const connection = useSelector(
        (state: RootState): connectionState => state.connection,
    );
    const splash = useSelector(
        (state: RootState): splashState => state.splash,
    );

    const options = {
        headerShown: false,
    };

    if (splash.isActiveSplash) {
        return <SplashScreen />;
    }

    if (!splash.isActiveSplash && !connection.isConnected) {
        return <ConnectionScreen />
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
