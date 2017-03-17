import React from 'react'
import { render } from 'react-dom'
import store from './store';
import { Provider } from 'react-redux'
import App from './containers/Dialog'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Messages from './messages/content-handler';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
Messages();

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    setRoot()
);

function setRoot() {
    const elm = document.createElement('div');
    elm.id = 'root';
    document.body.appendChild(elm);
    return elm;
}