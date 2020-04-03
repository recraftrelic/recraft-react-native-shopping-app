import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-carousel';

var width = Dimensions.get('window').width; //full width

interface Props {
    children: React.ReactNode;
};

const CarouselComponent: React.FunctionComponent<Props> = ({
    children
}) => {
    return (
        <Carousel
            width={width}
            loop={true}
            animate={false}
            indicatorAtBottom={true}
            indicatorSpace={25}
            indicatorSize={50}
            indicatorOffset={10}
            inactiveIndicatorColor="#ffffff"
            indicatorColor="#000000"
            hideIndicators={false}
            indicatorText= '•'
            inactiveIndicatorText= '•'
        >
            {children}
        </Carousel>
    )
};

export default CarouselComponent;
