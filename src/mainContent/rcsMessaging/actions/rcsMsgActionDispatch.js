import * as actionTypes from './rcsMsgActionTypes';

export const onRcsMsgSubmit = (res) => {
    return {
        type: actionTypes.ON_RCSMSG_SUBMIT,
        loggedIn: res ? true : false
    };
};