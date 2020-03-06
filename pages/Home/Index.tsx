import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterNavigation from '../Footer/Index';

interface Props extends RouteComponentProps {
    dispatch: Dispatch,
    history
}

const typeList = ["Woman", "Man", "Kids"]

// @ts-ignore
const ImagePath = require("../../shopping.jpg")

const Home: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const constants: AppConstants = useConstants();

    const goToLogin = () => {
        history.push('/login')
    }

    const backButton = () => {
        history.push('/')
    }

    return (
        <View style={style.mainContainer}>
            <View style={style.fistView}>
                <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} >
                    <View style={style.fistViewContent}>
                        <Text style={style.fistViewText}>{"FASHION"}</Text>
                        <Text style={style.fistViewText}>{"SALE"}</Text>
                        <RoundButton buttonStyle={style.fistViewButton} labelStyle={{ fontSize: 17 }} label="CHECK" onPress={goToLogin} />
                    </View>
                   
                </ImageBackground>
            </View>

            <View style={style.secondView}>
                <View style={style.typeList}>
                    {typeList.map(res => {
                        return  <RoundButton buttonStyle={style.typeListTab} labelStyle={{ fontSize: 17 }} label={res} onPress={goToLogin} />
                    })}                   
                </View>
                <View style={style.newItemList}>
                <Text style={style.secondViewText}>{"Pending Listing"}</Text>
                </View>
               
            </View>
            <FooterNavigation history={history} />
        </View>

    )
};

export default Home;

interface Style {
    mainContainer: ViewStyle;
    fistView: ViewStyle;
    secondView: ViewStyle;
    fistViewButton: ViewStyle;
    fistViewText: TextStyle;
    secondViewText: TextStyle;
    fistViewContent: ViewStyle;
    typeList: ViewStyle;
    newItemList: ViewStyle;
    typeListTab: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        padding: 0,
        margin: 0,
        flex: 1,
    },
    fistView: {
        flex: 3,
        height: '100%',
        backgroundColor: 'red',
    },
    secondView: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    fistViewText: {
        fontSize: 35,
        color: '#000000',
        fontWeight: '900',
    },
    secondViewText: {
        fontSize: 35,
        color: '#000000'
    },
    fistViewButton: {
        backgroundColor: '#e13e3d',
        maxWidth: 180,
        borderColor: '#e13e3d',
        textAlign: 'center',
        minWidth: 230,
    },
    fistViewContent: {
        position: 'absolute',
        bottom: 30,
        left: 20,
    },
    typeList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    typeListTab: {
        backgroundColor: '#37adf4',
        borderColor: '#37adf4',
        textAlign: 'center',
        minWidth: 120,
        marginTop: 24
    },
    newItemList: {
        flex: 2,
        backgroundColor: 'green',
    }
});
