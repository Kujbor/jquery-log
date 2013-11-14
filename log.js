/*
 * log.js - jQuery plugin for handy logging
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
(function($) {

    "use strict";

    var debug = false;

    $.log = function(text, obj) {

        if (debug) {

            var formatedTime = fg.echo.dateFormat(new Date(), true, true, true);
            var clearTime = formatedTime.replace(/&nbsp;/g, ' ');
            var message = '___[' + clearTime + '] [' + text + ']___';

            if (typeof obj !== 'undefined') {
                console.log(message + ':', obj);
            } else {
                console.log(message);
            }
        }
    };

    $.log.setDebug = function(value) {
        debug = value;
    };

})(jQuery);
