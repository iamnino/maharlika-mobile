import React from 'react';
import { CardStyleInterpolators } from '@react-navigation/stack';

export const navigationRef:any = React.createRef();

export const navigate = (name: string, params: any, key: string) => {
    navigationRef.current?.navigate({ name, key, params });
}

export const transitionSlide = ({ route, navigation }: any) => ({
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
});

export const transitionSlideUp = ({ route, navigation }: any) => ({
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
});

export const transitionModal = ({ route, navigation }: any) => ({
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
});