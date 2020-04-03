import React from 'react';
import { View, ViewStyle, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import Modal from 'react-native-modal';
import RoundButton from '../Base/RoundButton';
import useConstants from '../../hooks/useConstants';

interface Props {
    hideModal?: () => void;
    isOpen?: boolean;
    submit?: () => void;
};

const CommonModal: React.FunctionComponent<Props> = ({
    isOpen,
    hideModal,
    submit
}) => {
    const theme: AppTheme = useTheme();
    const constants: AppConstants = useConstants();

    return (
        <Modal isVisible={isOpen} style={style.mainContainer}>
            <View style={[style.container]}>
                <TouchableOpacity onPress={hideModal} style={style.backIcon}>
                    <MaterialIcon name="close" size={30} style={[{ color: theme.highlightColor }]} />
                </TouchableOpacity>
                <View style={[style.successBox, { backgroundColor: theme.textColor }]}>
                    <MaterialIcon name="shopping" size={50} style={[style.successIcon, { color: theme.backgroundColor }]} />
                </View>
                <Text style={style.msg}>{constants.demoCartMsg}</Text>
                <Text style={style.successText}>{constants.labelSuccess}</Text>
                <RoundButton label={constants.labelCheckout.toUpperCase()} buttonStyle={[style.checkOutButton, { backgroundColor: theme.highlightColor }]} onPress={submit}/>
            </View>
        </Modal>
    )
};

export default CommonModal;

interface Style {
    mainContainer: ViewStyle;
    container: ViewStyle;
    backIcon: ViewStyle;
    checkOutButton: ViewStyle;
    msg: ViewStyle;
    successBox: ViewStyle;
    successText: ViewStyle;
    successIcon: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 400,
    },
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 15,
        marginLeft: 25,
        marginRight: 25,
        height: 400,
    },
    backIcon: {
        fontSize: 25,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 9,
    },
    checkOutButton: {
        paddingLeft: 20,
        paddingRight: 20,
        minWidth: 200
    },
    msg: {
        fontSize: 16,
        paddingTop: 20,
        paddingBottom: 12,
    },
    successBox: {
        backgroundColor: "red",
        height: 150,
        width: 150,
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    successIcon: {
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
    },
    successText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 8,
    }
});