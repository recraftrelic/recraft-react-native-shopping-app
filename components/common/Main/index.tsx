import React, { ReactChildren } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import FooterNavigation from '../../../pages/Footer/Index';


interface Props {
    history?: any;
    children: React.ReactNode;
};

const Main: React.FunctionComponent<Props> = ({
    history,
    children
}) => {
    return (
        <View style={style.mainContainer}>
            <View style={style.row1}>
                {children}
            </View>
            <FooterNavigation history={history} />
        </View>
    )
};

export default Main;

interface Style {
    mainContainer: ViewStyle;
    row1: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
    },
    row1: {
        padding: 0,
        margin: 0,
        flex: 1,
        marginBottom: 62,
    },

});
