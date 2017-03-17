import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import Dialog from '../components/Dialog'

const mapStateToProps = (state) => {
  console.info('state', state);

  return {
      dialog: state.get('dialog'),
    }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const DialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);

export default DialogContainer;