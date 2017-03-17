import * as actionTypes from './actionTypes';

function closeDialog() {
    return {
        type: actionTypes.CLOSE_DIALOG
    }
}

export {
    closeDialog
}