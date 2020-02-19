import React, { EffectCallback, useEffect } from 'react';
import { BackHandler, NativeEventSubscription } from 'react-native';

const useBackHandler = (handleBackPress: () => void) => {
    useEffect((): EffectCallback => {
        const backHandler: NativeEventSubscription = BackHandler.addEventListener('hardwareBackPress', handleBackPress)
        return () => backHandler.remove();
    });
}

export default useBackHandler;
