import React, { Fragment } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Styles
import { flex } from './styles/global.styles';

// Helpers
import { 
    navigationRef, 
    transitionSlide, 
    transitionSlideUp, 
    transitionModal 
} from './helpers/navigation.helper';

// Tab Navigator
import TabNavigation from './components/navigation/tab';

// Screens
import EventCreate from './screens/events.create';
import EventDetails from './screens/events.details';

const { Navigator, Screen } = createStackNavigator();

const propTypes = {
    isLoggedIn: PropTypes.bool
};
  
const defaultProps = {
    isLoggedIn: false
};

const Router = () => {
    const isLoggedIn = useSelector((state:any) => state.auth.isLoggedIn);
    return (
        <KeyboardAvoidingView
            style={flex.on}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'} enabled>
            <SafeAreaProvider>
                <NavigationContainer ref={navigationRef}>
                    <Navigator initialRouteName={isLoggedIn ? 'Tab' : 'Atuh'} headerMode={'none'}>
                        { !isLoggedIn &&
                            <Fragment>
                                <Screen name="Tab" component={TabNavigation} options={transitionSlide}/>
                                <Screen name="Event::Create" component={EventCreate} options={transitionSlide}/>
                                <Screen name="Event::Details" component={EventDetails} options={transitionSlide}/>
                            </Fragment>
                        }
                        { isLoggedIn &&
                            <Fragment>
                            </Fragment>
                        }
                    </Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </KeyboardAvoidingView>
    )
}

Router.propTypes = propTypes;
Router.defaultProps = defaultProps;

export default Router;