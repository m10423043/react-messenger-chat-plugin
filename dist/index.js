"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),require("react");var t=e(require("prop-types"));t.default.string.isRequired,t.default.string,t.default.number,t.default.bool,t.default.string,t.default.string,t.default.string,t.default.func,t.default.func,t.default.func,t.default.func,t.default.func,t.default.func,t.default.bool,exports.expandMessenger=e=>{try{console.warn("Messenger could not expand messenger due to the messenger chat not beeing mounted yet.")}catch(e){throw new Error(e)}},exports.hideDialog=()=>{try{console.warn("Messenger could not hide dialog due to the messenger chat not beeing mounted yet.")}catch(e){throw new Error(e)}},exports.hideMessenger=(e=!1)=>{try{console.warn("Messenger could not hide messenger due to the messenger chat not beeing mounted yet.")}catch(e){throw new Error(e)}},exports.setMessengerHeight=e=>{const t=document.getElementsByClassName("fb_customer_chat_icon");if(t&&t.length>0){t[0].style.bottom=`${e}px`}else console.warn("Could not set height of messenger button.");const o=document.getElementsByClassName("anchor_right");if(t&&o.length>0){o[0].style.bottom=`${e+56}px`}else console.warn("Could not set height of messenger dialog container.")},exports.showDialog=()=>{try{console.warn("Messenger could not show dialog due to the messenger chat not beeing mounted yet.")}catch(e){throw new Error(e)}};