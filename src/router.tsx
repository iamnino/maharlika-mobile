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

import Post from './screens/post';
import Filter from './screens/filter';
import Search from './screens/search';
import CreateForm from './screens/create.form';
import CreatePreview from './screens/create.preview';
import Chat from './screens/chat';
import Category from './screens/category';
import CategoryLists from './screens/category.lists';

// Auth Screens
import Birth from './screens/auth/auth.birth';
import Code from './screens/auth/auth.code';
import Gender from './screens/auth/auth.gender';
import Intro from './screens/auth/auth.intro';
import Mobile from './screens/auth/auth.mobile';
import Photo from './screens/auth/auth.photo';
import Username from './screens/auth/auth.username';

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
                    <Navigator initialRouteName={isLoggedIn ? 'Tab' : 'Auth::Intro'} headerMode={'none'}>
                        { !isLoggedIn &&
                            <Fragment>
                                <Screen name="Tab" component={TabNavigation} options={transitionSlide}/>
                                <Screen name="Event::Create" component={EventCreate} options={transitionSlide}/>
                                <Screen name="Event::Details" component={EventCreate} options={transitionSlide}/>

                                <Screen name="Post" component={Post} options={transitionSlide}/>
                                <Screen name="Filter" component={Filter} options={transitionSlide}/>
                                <Screen name="Search" component={Search} options={transitionSlide}/>
                                <Screen name="Create::Form" component={CreateForm} options={transitionSlide}/>
                                <Screen name="Create::Preview" component={CreatePreview} options={transitionSlide}/>
                                <Screen name="Chat" component={Chat} options={transitionSlide}/>
                                <Screen name="Category" component={Category} options={transitionSlide}/>
                                <Screen name="Category::Lists" component={CategoryLists} options={transitionSlide}/>
                            </Fragment>
                        }
                        { isLoggedIn &&
                            <Fragment>
                                <Screen name="Auth::Intro" component={Intro} options={transitionSlide}/>
                                <Screen name="Auth::Mobile" component={Mobile} options={transitionSlide}/>
                                <Screen name="Auth::Code" component={Code} options={transitionSlide}/>
                                <Screen name="Auth::Username" component={Username} options={transitionSlide}/>
                                <Screen name="Auth::Birth" component={Birth} options={transitionSlide}/>
                                <Screen name="Auth::Gender" component={Gender} options={transitionSlide}/>
                                <Screen name="Auth::Photo" component={Photo} options={transitionSlide}/>
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