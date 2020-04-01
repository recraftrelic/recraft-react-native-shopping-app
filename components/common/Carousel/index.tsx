import React, {Component} from 'react';
import { View, Text, ViewStyle , StyleSheet} from 'react-native';
import Carousel from 'react-native-carousel';
 
class MyCarousel extends Component {
 
    render () {
        return (
        <Carousel 
        loop={true}
        animate={false}
        indicatorAtBottom={true}
        indicatorSpace={25}
        indicatorSize={40}
        inactiveIndicatorColor="#999999"
        indicatorColor="red"
        hideIndicators={false}
        >
            {this.props.children}
        </Carousel>
        );
    }
}

export default MyCarousel;

interface Style {
    container: ViewStyle;
}

// const styles: Style = StyleSheet.create<Style>({
//     container: {
//       width: 375,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'transparent',
//     },
//   });
