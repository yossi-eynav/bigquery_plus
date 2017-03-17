import store from '../store';
import * as actionTypes from '../actions/actionTypes';

export default (() => {
    chrome.runtime.onMessage.addListener(
        (request, sender, sendResponse) => {
            console.log(request);
            switch(request.action) {
                case actionTypes.REQUEST_BLOCKED:
                    store.dispatch({ type: actionTypes.REQUEST_BLOCKED});
                    break;
            }
        });

});