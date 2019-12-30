import * as rcsMsgDispatch from './rcsMsgActionDispatch';

export const rcsMsgSubmit = (evt, data) => {
    return dispatch => {
        dispatch(rcsMsgDispatch.onRcsMsgSubmit(data.token ? data.token : null))
    };
};