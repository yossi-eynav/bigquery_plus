export default (() => {
    window['isActive'] = true;
    setEventListener();

    function toggle() {
        window['isActive'] = !window['isActive'];

        if(window['isActive']) {
            chrome.browserAction.setIcon({path: "./images/icon-on-32.png"});
        } else {
            chrome.browserAction.setIcon({path: "./images/icon-off-32.png"});
        }
    }

    function setEventListener() {
        chrome.browserAction.onClicked.addListener(toggle);
    }
});

