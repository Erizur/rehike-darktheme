// ==UserScript==
// @name         Switch Hitchhiker to dark theme
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  auto dark theme switcher for rehike, fork this if you wanna add custom styles.
// @author       AM_Erizur
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @resource style https://raw.githubusercontent.com/Erizur/rehike-darktheme/main/css/main.css
// @downloadURL  https://github.com/Erizur/rehike-darktheme/raw/main/main.user.js
// @updateURL    https://github.com/Erizur/rehike-darktheme/raw/main/main.user.js
// @grant        GM_getResourceText
// @run-at       document-start
// ==/UserScript==

var darkStyle;

function checkTime() {
  var date = new Date();
  var hour = date.getHours();
  var darkTime = hour >= 17 || hour <= 6;

  if (darkTime && darkStyle == undefined) darkStyle = addDarkStyle();
  if (darkTime == false && darkStyle !== undefined) darkStyle.remove();
}

async function addDarkStyle() {
  let body = await waitForElm("body");
  let style = document.createElement("style");
  style.innerHTML = GM_getResourceText("style");
  document.body.appendChild(style);

  return style;
}

async function waitForElm(q)
{
    while (document.querySelector(q) == null)
    {
        await new Promise(r => requestAnimationFrame(r));
    }
    return document.querySelector(q);
}

checkTime();
var i = setInterval(checkTime, 100);