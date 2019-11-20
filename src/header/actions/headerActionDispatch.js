import * as actionTypes from './headerActionTypes';

export const changeRoute = (route, isTreeDisable) => {
    return {
        type: actionTypes.ON_ROUTE_CHANGE,
        route: route,
        isTreeDisable: isTreeDisable
    }
}