import Immutable from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = Immutable.fromJS({
    'dialog': null
});

const reducers = (state = initialState , action) => {
  switch (action.type) {
      case actionTypes.REQUEST_BLOCKED:
        return state.set('dialog', new Immutable.Map({
          title: '[BigQuery+] - A request has been blocked',
          message: 'We aborted your request cause you didn\'t use the `_PARTITIONTIME` param.'
        }));
      case actionTypes.CLOSE_DIALOG:
        return state.remove('dialog');
    default:
      return state
  }
};

export default reducers;