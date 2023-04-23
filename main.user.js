// ==UserScript==
// @name         Switch Hitchhiker to dark theme
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @resource style https://raw.githubusercontent.com/Erizur/rehike-darktheme/main/css/main.css
// @downloadURL  https://github.com/Erizur/rehike-darktheme/raw/main/main.user.js
// @updateURL    https://github.com/Erizur/rehike-darktheme/raw/main/main.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-end
// ==/UserScript==

var darkStyle;

function checkTime()
{
    var date = new Date();
    var darkTime = date.getHours() >= 19 ? true : false;

    if(darkTime && darkStyle == undefined) darkStyle = GM_addStyle(GM_getResourceText('style'));
    if(darkTime == false && darkStyle !== undefined) darkStyle.remove();
}

function start_refresh(){
    var refresh = 60000; // Refresh rate in milli seconds
    setTimeout(checkTime(),refresh);
}

start_refresh();
