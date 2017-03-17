import React from 'react';
import MaterialDialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Dialog extends React.Component {

    render() {
        console.info('Dialog', this.props);

        const {
            dialog,
            closeDialog,
        } = this.props;

        if(!dialog) {
            return null;
        }

        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                keyboardFocused={true}
                onTouchTap={closeDialog}
            />,
        ];

        return (
            <div>
                <MaterialDialog
                    title={dialog.get('title')}
                    actions={actions}
                    modal={false}
                    open={true}>
                    {dialog.get('message')}
                </MaterialDialog>
            </div>
        );
    }
}
