import * as actionTypes from '../mainContent/rcsMessaging/actions/rcsMsgActionTypes';

const intialState = {
    loggedIn: false,
    token: null,
    loading: false
}

const rcsMsgReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_RCSMSG_SUBMIT:
            return {
                ...currentState,
                loggedIn: action.loggedIn
            }
        default:
            return currentState
    }
}

export default rcsMsgReducer;