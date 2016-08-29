// ==UserScript==
// @name         Enchanced Duniang CP hint
// @namespace    https://github.com/wcxaaa/EnhancedDuNiangCP
// @version      0.1
// @description  Duniang Commercial Promotion Hint 
// @author       Valorad
// @match        https://www.baidu.com/s*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var dc = document.getElementsByClassName("hint_common_restop");
    if (dc !== undefined) {
        var word = dc[0].innerHTML;
        dc[0].innerHTML = "<span style='font-size:40px; color:red;'>警告！度娘的妈妈爆炸了！</span>";
    }
    else {
        console.log("This script does not support this website");
    }
})();