/*
 * jquery.log.js - jQuery plugin for handy logging
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
define("jquery.log", ["jquery"], function() {

    "use strict";

    var debug = false;

    $.log = function(text, obj) {

        if (debug) {

            if (obj) {
                console.log("___[" + text + "]___" + ":", obj);
            } else {
                console.log("___[" + text + "]___");
            }
        }
    };

    $.log.setDebug = function(value) {
        debug = value;
    };

});
