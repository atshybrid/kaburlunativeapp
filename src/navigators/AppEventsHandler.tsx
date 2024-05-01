import React, { useEffect, ReactNode } from 'react';
import { PermissionsAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import messaging from "@react-native-firebase/messaging";
import { CONSTANTS } from '../constants';

export const AppEventsHandler = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        dispatch({
          type: CONSTANTS.CONNECTION_AVAILABLE,
          payload: state.isConnected,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
  }, []);

  return (
    <>
      {children}
    </>
  );
};

