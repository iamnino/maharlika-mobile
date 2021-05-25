import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

import { bg, flex } from '../../styles/global.styles';

// Icons
import HomeIcon from '../icons/home';
import SearchIcon from '../icons/search';
import CalendarIcon from '../icons/calendar';
import LifeBouyIcon from '../icons/life-bouy';
import SmileIcon from '../icons/smile';

// Components
import Text from '../text';

// Tabs Screens
import Home from '../../screens/home';
import Search from '../../screens/search';
import Events from '../../screens/events';
import Activity from '../../screens/activity';
import Account from '../../screens/account';



// Custom Styles
const styles = StyleSheet.create({
    wrapper: {
        ...flex.on,
        backgroundColor: '#387CFE'
    },
    navigation: {
        height: 55,
        // borderTopColor: "#E5E5EA",
        // borderTopWidth: 1,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.05,
        backgroundColor: '#387CFE'
    },
    text: {
        marginTop: 0,
        fontSize: 13.5,
        color: '#FFFFFF',
        opacity: 0.5
    },
    activeText: {
        opacity: 1
    },
    border: {
        marginBottom: 1.5
    }
});

const { Navigator, Screen } = createBottomTabNavigator();

// Bottom Navigations
const TabBar = ({ navigation, state }: any) => {

    const isActive: any = (key: string) => {
        return state.routeNames[state.index] === key;
    };

    const onSelect: any = (index: any) => {
        return navigation.navigate(state.routeNames[index]);
    };

    const Label: any = (props: any) => {
        return (
            <Text label={props.label} type={'medium'} 
                style={{...styles.text, ...(isActive(props.value) ? styles.activeText : {}) }}/>
        )
    };

    const setColor: any = (key: string) => {
        return isActive(key) ? '#FFFFFF': '#9BBDFE';
    }

    return (
        <BottomNavigation
            style={[styles.navigation]}
            appearance='noIndicator'
            selectedIndex={state.index}
            onSelect={onSelect}>
            <BottomNavigationTab
                title={() => <Label label={'Home'} value={'Home'} />}
                icon={() => <HomeIcon color={setColor('Home')} size={24} style={styles.border}/> }/>
            <BottomNavigationTab
                title={() => <Label label={'Search'} value={'Search'} />}
                icon={() => <SearchIcon color={setColor('Search')} size={24} style={styles.border}/> }/>
             <BottomNavigationTab
                title={() => <Label label={'Events'} value={'Events'} />}
                icon={() => <CalendarIcon color={setColor('Events')} size={24} style={styles.border}/> }/>
            <BottomNavigationTab
                title={() => <Label label={'Activity'} value={'Activity'} />}
                icon={() => <LifeBouyIcon color={setColor('Activity')} size={24} style={styles.border}/> }/>
            <BottomNavigationTab
                title={() => <Label label={'Account'} value={'Account'} />}
                icon={() => <SmileIcon color={setColor('Account')} size={24} style={styles.border}/> }/>
        </BottomNavigation>
    )
};

// Tabs Screen Navigations
const TabNavigation = () => (
    <SafeAreaView style={styles.wrapper} edges={['right', 'bottom', 'left']}>
        <Navigator tabBar={(props) => <TabBar {...props} />}>
            <Screen name='Home' component={Home} />
            <Screen name='Search' component={Search} />
            <Screen name='Events' component={Events} />
            <Screen name='Activity' component={Activity} />
            <Screen name='Account' component={Account} />
        </Navigator>
    </SafeAreaView>
);

// Rendered output then skips unnecessary rendering
export default React.memo(TabNavigation);