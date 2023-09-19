import React, { type FC } from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from '../src/navigators';

import { persistor, store } from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow'
  }
};

// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

export const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
    // <Provider store={store.store}>
    //     <PersistGate loading={null} persistor={store.persistor}>
    //         <ApiProvider api={productsApi}>
    //             <ThemeProvider theme={theme}>
    //                 <Navigator />
    //             </ThemeProvider>
    //         </ApiProvider>
    //     </PersistGate>
    // </Provider>
  );
};
