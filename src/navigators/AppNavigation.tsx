import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
    SplashScreen,
    HomeScreen,
    DiscoveryScreen,
    MobileLoginScreen,
    MobileOTPScreen,
    SetMPinScreen,
    MPinLoginScreen,
    LanguageScreen
} from '../screens';
import { COLORS } from '../theme';
import { navigationRef } from '../navigators';
import { ROUTES } from '../constants';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RootState } from 'store';
import { splashStateIF } from 'store/reducers/splashReducer';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const dispatch = useDispatch();
    const loading = useSelector(
        (state: RootState): splashStateIF => state.splash,
    );
    const options = {
        headerShown: false,
    };
    const whiteHeaderBackOption = {
        headerTitle: '',
        headerStyle: {
            backgroundColor: COLORS.lightwhite,
            elevation: 0,
            shadowOpacity: 0,
        },
    };
    const blackHeaderBackOption = {
        headerTitle: '',
        headerStyle: { backgroundColor: COLORS.base, elevation: 0, shadowOpacity: 0 },
        headerTintColor: COLORS.white,
    };

    if (loading.isActiveSplash) {
        return <SplashScreen />;
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    {/* <Stack.Screen
                        name={ROUTES.LANGUAGE}
                        component={LanguageScreen}
                        options={options}
                    /> */}
                    <Stack.Screen
                        name={ROUTES.MOBILE_LOGIN}
                        component={MobileLoginScreen}
                        options={options}
                    />
                    {/* <Stack.Screen
                        name={ROUTES.MOBILE_OTP}
                        component={MobileOTPScreen}
                        options={options}
                    /> */}
                    {/* <Stack.Screen
                        name={ROUTES.SET_MPIN}
                        component={SetMPinScreen}
                        options={options}
                    /> */}
                    {/* <Stack.Screen
                        name={ROUTES.MPIN_LOGIN}
                        component={MPinLoginScreen}
                        options={options}
                    /> */}
                    {/* <Stack.Screen
                        name={ROUTES.HOME}
                        component={HomeScreen}
                        options={options}
                    /> */}
                    {/* <Stack.Screen
                        name={ROUTES.DISCOVERY}
                        component={DiscoveryScreen}
                        options={options}
                    /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export { AppNavigation };
