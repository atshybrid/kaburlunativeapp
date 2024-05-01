import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { I18nextProvider } from 'react-i18next';
import { store, persistor } from './store/store';
import i18n from './i18n';
import { AppNavigation, AppEventsHandler } from './navigators';
import { PersistGate } from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();

const Root = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate loading={false} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <AppEventsHandler>
              <AppNavigation />
            </AppEventsHandler>
          </I18nextProvider>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default Root;