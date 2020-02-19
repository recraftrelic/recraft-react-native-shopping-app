import React, { useCallback } from 'react';
import useBackHandler from '../../hooks/useBackHandler';
import { withRouter, RouteChildrenProps } from 'react-router';

const BackHandlerHOC: React.FunctionComponent<RouteChildrenProps> = ({
    history,
    location,
    children
}: Props) => {
    const handleBackPress: () => void = useCallback(() => {
        if (location.pathname !== "/") {
            history.goBack();
            return true;
        };

        return false;
    }, [history, location]);

    useBackHandler(handleBackPress);

    return children;
}

export default withRouter(BackHandlerHOC);
