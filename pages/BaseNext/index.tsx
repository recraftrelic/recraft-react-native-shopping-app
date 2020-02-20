import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import Button from '../../components/Base/ButtonItem';

const BaseNext: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToBaseHome = () => {
        history.push('/')
    }  

    return (
        <>
        <Button
          label="Back"
          onButtonPress={goToBaseHome}
        />
        </>
    );
}

export default BaseNext;
