import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

import { bg, flex } from '../../styles/global.styles';

// Colors
import Colors from '../../constants/colors';

// Icons
import CaptureIcon from '../icons/capture';
import ChatIcon from '../icons/chat';
import PinIcon from '../icons/pin';
import SmileIcon from '../icons/smile';
import StoreIcon from '../icons/store';

// Components
import Text from '../text';

// Tabs Screens
import Account from '../../screens/account';
import Explore from '../../screens/explore';
import Create from '../../screens/create';
import Nearby from '../../screens/nearby';
import Messages from '../../screens/messages';

// Custom Styles
const styles = StyleSheet.create({
    wrapper: {
        ...flex.on,
        ...bg.white
    },
    navigation: {
        height: 55,
        // borderTopColor: "#E5E5EA",
        // borderTopWidth: 1,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.05,
    },
    text: {
        marginTop: 0,
        fontSize: 12,
        color: Colors.light.tabIconDefault
    },
    activeText: {
        color: Colors.light.tabIconSelected
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
            <Text label={props.label} type={'semiBold'} 
                style={{...styles.text, ...(isActive(props.value) ? styles.activeText : {}) }}/>
        )
    };

    return (
        <BottomNavigation
            style={[styles.navigation]}
            appearance='noIndicator'
            selectedIndex={state.index}
            onSelect={onSelect}>
            <BottomNavigationTab
                title={() => <Label label={'Explore'} value={'Explore'} />}
                icon={() => <StoreIcon active={isActive("Explore")} width={29} height={29} />} />
            <BottomNavigationTab
                title={() => <Label label={'Nearby'} value={'Nearby'} />}
                icon={() => <PinIcon active={isActive("Nearby")} width={29} height={29} />} />
             <BottomNavigationTab
                title={() => <Label label={'Create'} value={'Create'} />}
                icon={() => <CaptureIcon active={isActive("Create")} width={29} height={29} />} />
            <BottomNavigationTab
                title={() => <Label label={'Messages'} value={'Messages'} />}
                icon={() => <ChatIcon active={isActive("Messages")} width={29} height={29} />} />
            <BottomNavigationTab
                title={() => <Label label={'Account'} value={'Account'} />}
                icon={() => <SmileIcon active={isActive("Account")} width={29} height={29} />} />
        </BottomNavigation>
    )
};

// Tabs Screen Navigations
const TabNavigation = () => (
    <SafeAreaView style={styles.wrapper} edges={['right', 'bottom', 'left']}>
        <Navigator tabBar={(props) => <TabBar {...props} />}>
            <Screen name='Explore' component={Explore} />
            <Screen name='Nearby' component={Nearby} />
            <Screen name='Create' component={Create} />
            <Screen name='Messages' component={Messages} />
            <Screen name='Account' component={Account} />
        </Navigator>
    </SafeAreaView>
);

// Rendered output then skips unnecessary rendering
export default React.memo(TabNavigation);