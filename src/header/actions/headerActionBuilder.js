import { changeRoute } from './headerActionDispatch';

export const onRouteChange = (route, isTreeDisable) => {
    return dispatch => {
        dispatch(changeRoute(route, isTreeDisable));
    };
};