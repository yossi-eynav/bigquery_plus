import * as actionTypes from '../actions/actionTypes';
import browserAction from './browserAction';
const futile = require('@fiverr/futile');
browserAction();

(() => {
    chrome.webRequest.onBeforeRequest.addListener(
        onBeforeRequestHandler,
        {urls: ['https://*/**'], types: ['xmlhttprequest']},
        ['blocking', 'requestBody']);

    function onBeforeRequestHandler(details) {
        if(!window['isActive']) { return; }
        if(details.method !== 'POST') { return; }

        const url = details.url;
        if(url.match('/jobs?')) {
            const body = parseRawPostBody(details.requestBody);
            const query = futile.resolve('configuration.query.query', body);
            if(!isQueryValid(query)) {
                chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                    chrome.tabs.sendMessage(tabs[0].id, {action: actionTypes.REQUEST_BLOCKED});
                });
                return { cancel: true}
            }
        }
    }


    function isQueryValid(query) {
        if(!query) {return false; }
        if(query.match(/from[ ]+\[[^$]+\$\d{8}\]/gi)) { return true; }
        if(query.match(/_PARTITIONTIME/gi)) { return true; }

        return false;
    }
    function parseRawPostBody(requestBody) {
        let rawPostBody = requestBody.raw;
        if(!Array.isArray(rawPostBody) && rawPostBody.length ) { return null; }

        try {
            rawPostBody = rawPostBody[0].bytes;
            rawPostBody = new TextDecoder('utf-8').decode(rawPostBody);
            return JSON.parse(rawPostBody);
        } catch(e) {
            return null;
        }
    }

})();