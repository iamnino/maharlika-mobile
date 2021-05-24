import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import useCachedResources from './src/hooks/useCachedResources';
import { ApolloProvider } from '@apollo/client';
import Router from './src/router';

// UI Kittens
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// Themes
import { default as theme } from './src/theme/theme.json';

// Apollo Client
import client from './src/graphql/client';

// Redux
import { store, persistor } from './src/store';

const App = () => {
    const isLoadingComplete = useCachedResources();
    //   const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
                    <Provider store={store}>
                        <ApolloProvider client={client}>
                            <PersistGate persistor={persistor}>
                                <Router />
                                <StatusBar style="dark" />
                            </PersistGate>
                        </ApolloProvider>
                    </Provider>
                </ApplicationProvider>
            </Fragment>
        );
    }
}

export default App;
