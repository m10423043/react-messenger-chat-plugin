import"react";import e from"prop-types";const t=e=>{const t=document.getElementsByClassName("fb_customer_chat_icon");if(t&&t.length>0){t[0].style.bottom=`${e}px`}else console.warn("Could not set height of messenger button.");const n=document.getElementsByClassName("anchor_right");if(t&&n.length>0){n[0].style.bottom=`${e+56}px`}else console.warn("Could not set height of messenger dialog container.")},n=e=>{try{console.warn("Messenger could not expand messenger due to the messenger chat not beeing mounted yet.")}catch(e){throw new Error(e)}},o=(e=!1)=>{try{console.warn("Messenger could not hide messenger due to the messenger chat not beeing mounted yet.")}catch(e){throw new Error(e)}},r=()=>{try{console.warn("Messenger could not show dialog due to the messenger chat not beeing mounted yet.")}catch(e){throw new Error(e)}},s=()=>{try{console.warn("Messenger could not hide dialog due to the messenger chat not beeing mounted yet.")}catch(e){throw new Error(e)}};e.string.isRequired,e.string,e.number,e.bool,e.string,e.string,e.string,e.func,e.func,e.func,e.func,e.func,e.func,e.bool;export{n as expandMessenger,s as hideDialog,o as hideMessenger,t as setMessengerHeight,r as showDialog};
