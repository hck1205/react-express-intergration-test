// Opera 8.0+
const isOpera =  (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
const isFirefox =  typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]"
const isSafari =  /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
// Internet Explorer 6-11
const isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;
// Chrome 1 - 71
const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
// Blink engine detection
const isBlink = (isChrome || isOpera) && !!window.CSS;

const browserCheck = {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isBlink
} ;

const urlParam = (param) => {
  let results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(window.location.href);
  if (results == null){
    return null;
  }
  else{
    return decodeURI(results[1]) || 0;
  }
};

export {
  browserCheck,
  urlParam
}
