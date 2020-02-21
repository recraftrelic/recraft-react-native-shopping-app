import React from 'react';
import { StyleSheet, View, ViewStyle, Image } from 'react-native';

interface Props {
    src: string;
    height?: number;
    width?: number;
};

const ImageComponent: React.FunctionComponent<Props> = ({
    src,
    height,
    width,
}) => {

    return (
            <View style={style.container}>
               <Image
                    style={{width:width? width: 50, height:height? height: 50, flex: 0  }}
                    source={{uri: src}}
                />
            </View>
    );
};

export default ImageComponent;

interface Style {
    container: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flex: 0    }
})
