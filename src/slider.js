/**
 * @author martin.urban@klokantech.com (Martin Urban)
 *
 * Copyright 2014 Klokan Technologies Gmbh (www.klokantech.com)
 */

goog.provide('xurban42.js.Slider');

goog.require('goog.History');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.iframe');
goog.require('xurban42.js.Snap');

/**
 * Create slider.
 * @constructor
 *
 * @param {string} el 
 */
xurban42.js.Slider = function(el) {
  var sliderEl = goog.dom.getElement(el);

  var settings = {
      'element': sliderEl,
      'dragger': null,
      'disable': 'none',
      'addBodyClasses': true,
      'hyperextensible': true,
      'resistance': 0.5,
      'flickThreshold': 50,
      'transitionSpeed': 0.3,
      'easing': 'ease',
      'maxPosition': 360,
      'minPosition': -360,
      'tapToClose': false,
      'touchToDrag': true,
      'slideIntent': 40,
      'minDragDistance': 5
  }
  this.snapJs = new xurban42.js.Snap(settings);
  this.snapJs.on('animatedleft', goog.bind(function() {
    this.reinitSnapJsLeft();
  }, this));
  this.snapJs.on('animatedright', goog.bind(function() {
    this.reinitSnapJsRight();
  }, this));

  this.prevEl = goog.dom.getElementByClass('prev');
  this.activeEl = goog.dom.getElementByClass('active');
  this.nextEl = goog.dom.getElementByClass('next');
}
  
/**
 */
xurban42.js.Slider.prototype.openSnap = function(side) {
  this.snapJs.open(side);
};

/**
 */
xurban42.js.Slider.prototype.setSnapSettings = function(settings) {
  this.snapJs.settings(settings);
};

/**
 */
xurban42.js.Slider.prototype.reinitSnapJsLeft = function() {
  this.goToPrevPage();
  this.snapJs.closeWithoutAnimation();
}

/**
 */
xurban42.js.Slider.prototype.reinitSnapJsRight = function() {
  this.goToNextPage();
  this.snapJs.closeWithoutAnimation();
}

/**
 */
xurban42.js.Slider.prototype.goToNextPage = function() {
  goog.dom.classes.add(this.activeEl,
      'prev');

  goog.dom.classes.remove(this.activeEl,
      'active');

  goog.dom.classes.add(this.nextEl,
      'active');
  goog.dom.classes.remove(this.nextEl,
      'next');

  goog.dom.classes.add(this.prevEl,
      'next');
  goog.dom.classes.remove(this.prevEl,
      'prev');

  var tmp = this.activeEl;
  this.activeEl = this.nextEl;
  this.nextEl = this.prevEl;
  this.prevEl = tmp;
};

/**
 */
xurban42.js.Slider.prototype.goToPrevPage = function() {
  goog.dom.classes.add(this.activeEl,
      'next');
  goog.dom.classes.remove(this.activeEl,
      'active');

  goog.dom.classes.add(this.prevEl,
      'active');
  goog.dom.classes.remove(this.prevEl,
      'prev');

  goog.dom.classes.add(this.nextEl,
      'prev');
  goog.dom.classes.remove(this.nextEl,
      'next');

  var tmp = this.activeEl;
  this.activeEl = this.prevEl;
  this.prevEl = this.nextEl;
  this.nextEl = tmp;
};

goog.exportSymbol('Slider', xurban42.js.Slider);

