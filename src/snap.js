/*
* Snap.js like component to Google Closure Tools.
* (for more info check: http://github.com/xurban42/Snap.js/)
*
* Copyright 2014, Martin Urban
* Released under the MIT Licence
* http://opensource.org/licenses/MIT
*
* Based on http://github.com/jakiestfu/Snap.js/ like GitHub fork.
*
* Github:  http://github.com/xurban42/Snap.js/
* Version: 1.0
*/

goog.provide('xurban42.js.Snap');
goog.require('goog.dom');

var doc = document;
var win = window;

/** @constructor
 * @param {Object} userOpts
 */
xurban42.js.Snap = function(userOpts) {
    var settings = {
        'element': null,
        'dragger': null,
        'disable': 'none',
        'addBodyClasses': true,
        'hyperextensible': true,
        'resistance': 0.5,
        'flickThreshold': 50,
        'transitionSpeed': 0.3,
        'easing': 'ease',
        'maxPosition': 0,
        'minPosition': -0,
        'tapToClose': true,
        'touchToDrag': true,
        'slideIntent': 40, // degrees
        'minDragDistance': 5
    };
    var cache = {
        simpleStates: {
            opening: null,
            towards: null,
            hyperExtending: null,
            halfway: null,
            flick: null,
            translation: {
                absolute: 0,
                relative: 0,
                sinceDirectionChange: 0,
                percentage: 0
            }
        }
    },
    eventList = {},
    utils = {
        sideOpened: '',
        hasTouch: ('ontouchstart' in doc.documentElement || win.navigator.msPointerEnabled),
        eventType: function(action) {
            var eventTypes = {
                    'down': (utils.hasTouch ? 'touchstart' : 'mousedown'),
                    'move': (utils.hasTouch ? 'touchmove' : 'mousemove'),
                    'up': (utils.hasTouch ? 'touchend' : 'mouseup'),
                    'out': (utils.hasTouch ? 'touchcancel' : 'mouseout')
                };
            return eventTypes[action];
        },
        page: function(t, e){
            return (utils.hasTouch && e.touches.length && e.touches[0]) ? e.touches[0]['page'+t] : e['page'+t];
        },
        klass: {
            has: function(el, name){
                return (el.className).indexOf(name) !== -1;
            },
            add: function(el, name){
                if(!utils.klass.has(el, name) && settings['addBodyClasses']){
                    el.className += " "+name;
                }
            },
            remove: function(el, name){
                if(settings['addBodyClasses']){
                    el.className = (el.className).replace(name, "").replace(/^\s+|\s+$/g, '');
                }
            }
        },
        dispatchEvent: function(type) {
            if (typeof eventList[type] === 'function') {
                return eventList[type].call();
            }
        },
        vendor: function(){
            var tmp = doc.createElement("div"),
                prefixes = 'webkit Moz O ms'.split(' '),
                i;
            for (i in prefixes) {
                if (typeof tmp.style[prefixes[i] + 'Transition'] !== 'undefined') {
                    return prefixes[i];
                }
            }
        },
        transitionCallback: function(){
            return (cache.vendor==='Moz' || cache.vendor==='ms') ? 'transitionend' : cache.vendor+'TransitionEnd';
        },
        canTransform: function(){
            return typeof settings['element'].style[cache.vendor+'Transform'] !== 'undefined';
        },
        deepExtend: function(destination, source) {
            var property;
            for (property in source) {
                if (source[property] && source[property].constructor && source[property].constructor === Object) {
                    destination[property] = destination[property] || {};
                    utils.deepExtend(destination[property], source[property]);
                } else {
                    destination[property] = source[property];
                }
            }
            return destination;
        },
        angleOfDrag: function(x, y) {
            var degrees, theta;
            // Calc Theta
            theta = Math.atan2(-(cache.startDragY - y), (cache.startDragX - x));
            if (theta < 0) {
                theta += 2 * Math.PI;
            }
            // Calc Degrees
            degrees = Math.floor(theta * (180 / Math.PI) - 180);
            if (degrees < 0 && degrees > -180) {
                degrees = 360 - Math.abs(degrees);
            }
            return Math.abs(degrees);
        },
        events: {
            addEvent: function addEvent(element, eventName, func) {
                if (element.addEventListener) {
                    return element.addEventListener(eventName, func, false);
                } else if (element.attachEvent) {
                    return element.attachEvent("on" + eventName, func);
                }
            },
            removeEvent: function addEvent(element, eventName, func) {
                if (element.addEventListener) {
                    return element.removeEventListener(eventName, func, false);
                } else if (element.attachEvent) {
                    return element.detachEvent("on" + eventName, func);
                }
            },
            prevent: function(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
            }
        },
        parentUntil: function(el, attr) {
            var isStr = typeof attr === 'string';
            while (el.parentNode) {
                if (isStr && el.getAttribute && el.getAttribute(attr)){
                    return el;
                } else if(!isStr && el === attr){
                    return el;
                }
                el = el.parentNode;
            }
            return null;
        }
    },
    action = {
        translate: {
            get: {
                matrix: function(index) {

                    if( !utils.canTransform() ){
                        return parseInt(settings['element'].style.left, 10);
                    } else {
                        var matrix = win.getComputedStyle(settings['element'])[cache.vendor+'Transform'].match(/\((.*)\)/),
                            ieOffset = 8;
                        if (matrix) {
                            matrix = matrix[1].split(',');
                            if(matrix.length===16){
                                index+=ieOffset;
                            }
                            return parseInt(matrix[index], 10);
                        }
                        return 0;
                    }
                }
            },
            easeCallback: function(){
                settings['element'].style[cache.vendor+'Transition'] = '';
                cache.translation = action.translate.get.matrix(4);
                cache.easing = false;
                clearInterval(cache.animatingInterval);

                if(cache.easingTo===0){
                    utils.klass.remove(doc.body, 'snapjs-right');
                    utils.klass.remove(doc.body, 'snapjs-left');
                    utils.sideOpened = '';
                }
                utils.dispatchEvent('animated');
                utils.dispatchEvent('animated'+utils.sideOpened);
                utils.events.removeEvent(settings['element'], utils.transitionCallback(), action.translate.easeCallback);
            },
            easeTo: function(n) {

                if( !utils.canTransform() ){
                    cache.translation = n;
                    action.translate.x(n);
                } else {
                    cache.easing = true;
                    cache.easingTo = n;

                    settings['element'].style[cache.vendor+'Transition'] = 'all ' + settings['transitionSpeed'] + 's ' + settings['easing'];

                    cache.animatingInterval = setInterval(function() {
                        utils.dispatchEvent('animating');
                    }, 1);
                    
                    utils.events.addEvent(settings['element'], utils.transitionCallback(), action.translate.easeCallback);
                    action.translate.x(n);
                }
                if(n===0){
                       settings['element'].style[cache.vendor+'Transform'] = '';
                   }
            },
            jumpTo: function(n) {

                if( !utils.canTransform() ){
                    cache.translation = n;
                    action.translate.x(n);
                } else {
                    cache.easing = true;
                    cache.easingTo = n;

                    //settings['element'].style[cache.vendor+'Transition'] = 'all ' + settings['transitionSpeed'] + 's ' + settings['easing'];

                    /*cache.animatingInterval = setInterval(function() {
                        utils.dispatchEvent('animating');
                    }, 1);*/

                    action.translate.x(n);
                    action.translate.easeCallback();
                    
                }
                if(n===0){
                   settings['element'].style[cache.vendor+'Transform'] = '';
               }
            },
            x: function(n) {
                if( (settings['disable']==='left' && n>0) ||
                    (settings['disable']==='right' && n<0)
                ){ return; }
                
                if( !settings['hyperextensible'] ){
                    if( n===settings['maxPosition'] || n>settings['maxPosition'] ){
                        n=settings['maxPosition'];
                    } else if( n===settings['minPosition'] || n<settings['minPosition'] ){
                        n=settings['minPosition'];
                    }
                }
                
                n = parseInt(n, 10);
                if(isNaN(n)){
                    n = 0;
                }

                if( utils.canTransform() ){
                    var theTranslate = 'translate3d(' + n + 'px, 0,0)';
                    settings['element'].style[cache.vendor+'Transform'] = theTranslate;
                } else {
                    settings['element'].style.width = (win.innerWidth || doc.documentElement.clientWidth)+'px';

                    settings['element'].style.left = n+'px';
                    settings['element'].style.right = '';
                }
            }
        },
        drag: {
            listen: function() {
                cache.translation = 0;
                cache.easing = false;
                utils.events.addEvent(settings['element'], utils.eventType('down'), action.drag.startDrag);
                utils.events.addEvent(settings['element'], utils.eventType('move'), action.drag.dragging);
                utils.events.addEvent(settings['element'], utils.eventType('up'), action.drag.endDrag);
                utils.events.addEvent(settings['element'], utils.eventType('out'), action.drag.endDrag);
            },
            stopListening: function() {
                utils.events.removeEvent(settings['element'], utils.eventType('down'), action.drag.startDrag);
                utils.events.removeEvent(settings['element'], utils.eventType('move'), action.drag.dragging);
                utils.events.removeEvent(settings['element'], utils.eventType('up'), action.drag.endDrag);
                utils.events.removeEvent(settings['element'], utils.eventType('out'), action.drag.endDrag);
            },
            startDrag: function(e) {
                // No drag on ignored elements
                var target = e.target ? e.target : e.srcElement,
                    ignoreParent = utils.parentUntil(target, 'data-snap-ignore');
                
                if (ignoreParent) {
                    utils.dispatchEvent('ignore');
                    return;
                }
                
                
                if(settings['dragger']){
                    var dragParent = utils.parentUntil(target, settings['dragger']);
                    
                    // Only use dragger if we're in a closed state
                    if( !dragParent && 
                        (cache.translation !== settings['minPosition'] && 
                        cache.translation !== settings['maxPosition']
                    )){
                        return;
                    }
                }
                
                utils.dispatchEvent('start');
                settings['element'].style[cache.vendor+'Transition'] = '';
                cache.isDragging = true;
                cache.hasIntent = null;
                cache.intentChecked = false;
                cache.startDragX = utils.page('X', e);
                cache.startDragY = utils.page('Y', e);
                cache.dragWatchers = {
                    current: 0,
                    last: 0,
                    hold: 0,
                    state: ''
                };
                cache.simpleStates = {
                    opening: null,
                    towards: null,
                    hyperExtending: null,
                    halfway: null,
                    flick: null,
                    translation: {
                        absolute: 0,
                        relative: 0,
                        sinceDirectionChange: 0,
                        percentage: 0
                    }
                };
            },
            dragging: function(e) {
                if (cache.isDragging && settings['touchToDrag']) {

                    var thePageX = utils.page('X', e),
                        thePageY = utils.page('Y', e),
                        translated = cache.translation,
                        absoluteTranslation = action.translate.get.matrix(4),
                        whileDragX = thePageX - cache.startDragX,
                        openingLeft = absoluteTranslation > 0,
                        translateTo = whileDragX,
                        diff;

                    // Shown no intent already
                    if((cache.intentChecked && !cache.hasIntent)){
                        return;
                    }

                    if(settings['addBodyClasses']){
                        if((absoluteTranslation)>0){
                            utils.klass.add(doc.body, 'snapjs-left');
                            utils.sideOpened = 'left';
                            utils.klass.remove(doc.body, 'snapjs-right');
                        } else if((absoluteTranslation)<0){
                            utils.klass.add(doc.body, 'snapjs-right');
                            utils.klass.remove(doc.body, 'snapjs-left');
                            utils.sideOpened = 'right';
                        }
                    }

                    if (cache.hasIntent === false || cache.hasIntent === null) {
                        var deg = utils.angleOfDrag(thePageX, thePageY),
                            inRightRange = (deg >= 0 && deg <= settings['slideIntent']) || (deg <= 360 && deg > (360 - settings['slideIntent'])),
                            inLeftRange = (deg >= 180 && deg <= (180 + settings['slideIntent'])) || (deg <= 180 && deg >= (180 - settings['slideIntent']));
                        if (!inLeftRange && !inRightRange) {
                            cache.hasIntent = false;
                        } else {
                            cache.hasIntent = true;
                        }
                        cache.intentChecked = true;
                    }

                    if (
                        (settings['minDragDistance']>=Math.abs(thePageX-cache.startDragX)) || // Has user met minimum drag distance?
                        (cache.hasIntent === false)
                    ) {
                        return;
                    }

                    utils.events.prevent(e);
                    utils.dispatchEvent('drag');

                    cache.dragWatchers.current = thePageX;
                    // Determine which direction we are going
                    if (cache.dragWatchers.last > thePageX) {
                        if (cache.dragWatchers.state !== 'left') {
                            cache.dragWatchers.state = 'left';
                            cache.dragWatchers.hold = thePageX;
                        }
                        cache.dragWatchers.last = thePageX;
                    } else if (cache.dragWatchers.last < thePageX) {
                        if (cache.dragWatchers.state !== 'right') {
                            cache.dragWatchers.state = 'right';
                            cache.dragWatchers.hold = thePageX;
                        }
                        cache.dragWatchers.last = thePageX;
                    }
                    if (openingLeft) {
                        // Pulling too far to the right
                        if (settings['maxPosition'] < absoluteTranslation) {
                            diff = (absoluteTranslation - settings['maxPosition']) * settings['resistance'];
                            translateTo = whileDragX - diff;
                        }
                        cache.simpleStates = {
                            opening: 'left',
                            towards: cache.dragWatchers.state,
                            hyperExtending: settings['maxPosition'] < absoluteTranslation,
                            halfway: absoluteTranslation > (settings['maxPosition'] / 2),
                            flick: Math.abs(cache.dragWatchers.current - cache.dragWatchers.hold) > settings['flickThreshold'],
                            translation: {
                                absolute: absoluteTranslation,
                                relative: whileDragX,
                                sinceDirectionChange: (cache.dragWatchers.current - cache.dragWatchers.hold),
                                percentage: (absoluteTranslation/settings['maxPosition'])*100
                            }
                        };
                    } else {
                        // Pulling too far to the left
                        if (settings['minPosition'] > absoluteTranslation) {
                            diff = (absoluteTranslation - settings['minPosition']) * settings['resistance'];
                            translateTo = whileDragX - diff;
                        }
                        cache.simpleStates = {
                            opening: 'right',
                            towards: cache.dragWatchers.state,
                            hyperExtending: settings['minPosition'] > absoluteTranslation,
                            halfway: absoluteTranslation < (settings['minPosition'] / 2),
                            flick: Math.abs(cache.dragWatchers.current - cache.dragWatchers.hold) > settings['flickThreshold'],
                            translation: {
                                absolute: absoluteTranslation,
                                relative: whileDragX,
                                sinceDirectionChange: (cache.dragWatchers.current - cache.dragWatchers.hold),
                                percentage: (absoluteTranslation/settings['minPosition'])*100
                            }
                        };
                    }
                    action.translate.x(translateTo + translated);
                }
            },
            endDrag: function(e) {
                if (cache.isDragging) {
                    utils.dispatchEvent('end');
                    var translated = action.translate.get.matrix(4);

                    // Tap Close
                    if (cache.dragWatchers.current === 0 && translated !== 0 && settings['tapToClose']) {
                        utils.dispatchEvent('close');
                        utils.events.prevent(e);
                        action.translate.easeTo(0);
                        cache.isDragging = false;
                        cache.startDragX = 0;
                        return;
                    }

                    // Revealing Left
                    if (cache.simpleStates.opening === 'left') {
                        // Halfway, Flicking, or Too Far Out
                        if ((cache.simpleStates.halfway || cache.simpleStates.hyperExtending || cache.simpleStates.flick)) {
                            if (cache.simpleStates.flick && cache.simpleStates.towards === 'left') { // Flicking Closed
                                action.translate.easeTo(0);
                            } else if (
                                (cache.simpleStates.flick && cache.simpleStates.towards === 'right') || // Flicking Open OR
                                (cache.simpleStates.halfway || cache.simpleStates.hyperExtending) // At least halfway open OR hyperextending
                            ) {
                                action.translate.easeTo(settings['maxPosition']); // Open Left
                            }
                        } else {
                            action.translate.easeTo(0); // Close Left
                        }
                        // Revealing Right
                    } else if (cache.simpleStates.opening === 'right') {
                        // Halfway, Flicking, or Too Far Out
                        if ((cache.simpleStates.halfway || cache.simpleStates.hyperExtending || cache.simpleStates.flick)) {
                            if (cache.simpleStates.flick && cache.simpleStates.towards === 'right') { // Flicking Closed
                                action.translate.easeTo(0);
                            } else if (
                                (cache.simpleStates.flick && cache.simpleStates.towards === 'left') || // Flicking Open OR
                                (cache.simpleStates.halfway || cache.simpleStates.hyperExtending) // At least halfway open OR hyperextending
                            ) {
                                action.translate.easeTo(settings['minPosition']); // Open Right
                            }
                        } else {
                            action.translate.easeTo(0); // Close Right
                        }
                    }
                    cache.isDragging = false;
                    cache.startDragX = utils.page('X', e);
                }
            }
        }
    },
    init = function(opts) {
        if (opts.element) {
            utils.deepExtend(settings, opts);
            cache.vendor = utils.vendor();
            action.drag.listen();
        }
    };
    this._utils = utils;
    this._cache = cache;
    this._action = action;
    this._settings = settings;
    this._eventList = eventList;
    
    init(userOpts);
};

/*
 * Public 
 */

/**
 * @param {string} side
 */
xurban42.js.Snap.prototype.open = function(side) {
    this._utils.dispatchEvent('open');
    this._utils.klass.remove(doc.body, 'snapjs-expand-left');
    this._utils.klass.remove(doc.body, 'snapjs-expand-right');

    if (side === 'left') {
        this._cache.simpleStates.opening = 'left';
        this._cache.simpleStates.towards = 'right';
        this._utils.klass.add(doc.body, 'snapjs-left');
        this._utils.sideOpened = 'left';
        this._utils.klass.remove(doc.body, 'snapjs-right');
        this._action.translate.easeTo(this._settings['maxPosition']);
        this._utils.dispatchEvent('openedLeft');
    } else if (side === 'right') {
        this._cache.simpleStates.opening = 'right';
        this._cache.simpleStates.towards = 'left';
        this._utils.klass.remove(doc.body, 'snapjs-left');
        this._utils.sideOpened = 'right';
        this._utils.klass.add(doc.body, 'snapjs-right');
        this._action.translate.easeTo(this._settings['minPosition']);
        this._utils.dispatchEvent('openedRight');
    }
};

xurban42.js.Snap.prototype.close = function() {
    this._utils.dispatchEvent('close');
    this._action.translate.easeTo(0);
};

xurban42.js.Snap.prototype.closeWithoutAnimation = function() {
    this._utils.dispatchEvent('close');
    this._action.translate.jumpTo(0);
};

/**
 * @param {string} side
 */
xurban42.js.Snap.prototype.expand = function(side){
    var to = win.innerWidth || doc.documentElement.clientWidth;

    if(side==='left'){
        this._utils.dispatchEvent('expandLeft');
        this._utils.klass.add(doc.body, 'snapjs-expand-left');
        this._utils.klass.remove(doc.body, 'snapjs-expand-right');
    } else {
        this._utils.dispatchEvent('expandRight');
        this._utils.klass.add(doc.body, 'snapjs-expand-right');
        this._utils.klass.remove(doc.body, 'snapjs-expand-left');
        to *= -1;
    }
    this._action.translate.easeTo(to);
};

/**
 * @param {string} evt
 * @param {function()} fn
 * @return {Object}
 */
xurban42.js.Snap.prototype.on = function(evt, fn) {
    this._eventList[evt] = fn;
    return this;
};

/**
 * @param {string} evt
 */
xurban42.js.Snap.prototype.off = function(evt) {
    if (this._eventList[evt]) {
        this._eventList[evt] = false;
    }
};

xurban42.js.Snap.prototype.enable = function() {
    this._utils.dispatchEvent('enable');
    this._action.drag.listen();
};

xurban42.js.Snap.prototype.disable = function() {
    this._utils.dispatchEvent('disable');
    this._action.drag.stopListening();
};

/**
 * @param {Object} opts
 */
xurban42.js.Snap.prototype.settings = function(opts){
    this._utils.deepExtend(this._settings, opts);
};

/**
 * @param {string} property
 * @return {Object}
 */
xurban42.js.Snap.prototype.getSettingProp = function(property){
    return this._settings[property];
};

/**
 * @return {Object}
 */
xurban42.js.Snap.prototype.state = function() {
    var state,
        fromLeft = this._action.translate.get.matrix(4);
    if (fromLeft === this._settings['maxPosition']) {
        state = 'left';
    } else if (fromLeft === this._settings['minPosition']) {
        state = 'right';
    } else {
        state = 'closed';
    }
    return {
        state: state,
        info: this._cache.simpleStates
    };
};

goog.exportSymbol('Snap', xurban42.js.Snap);

goog.exportProperty(xurban42.js.Snap.prototype, 'open', xurban42.js.Snap.prototype.open);
goog.exportProperty(xurban42.js.Snap.prototype, 'close', xurban42.js.Snap.prototype.close);
goog.exportProperty(xurban42.js.Snap.prototype, 'expand', xurban42.js.Snap.prototype.expand);
goog.exportProperty(xurban42.js.Snap.prototype, 'on', xurban42.js.Snap.prototype.on);
goog.exportProperty(xurban42.js.Snap.prototype, 'off', xurban42.js.Snap.prototype.off);
goog.exportProperty(xurban42.js.Snap.prototype, 'enable', xurban42.js.Snap.prototype.enable);
goog.exportProperty(xurban42.js.Snap.prototype, 'disable', xurban42.js.Snap.prototype.disable);
goog.exportProperty(xurban42.js.Snap.prototype, 'settings', xurban42.js.Snap.prototype.settings);
goog.exportProperty(xurban42.js.Snap.prototype, 'getSettingProp', xurban42.js.Snap.prototype.getSettingProp);
goog.exportProperty(xurban42.js.Snap.prototype, 'state', xurban42.js.Snap.prototype.state);

