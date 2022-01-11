(function(window, document){
    'use strict';


    function DOM(string) {
        this.element = document.querySelectorAll(string);
    }

    DOM.prototype.on = function on(event, action) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.addEventListener(event, action, false);
        })
    };
    DOM.prototype.off = function off(event, action) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.removeEventListener(event, action, false);
        })
    };
    DOM.prototype.get = function get() {
        return this.element;
    };

    DOM.prototype.forEach = function forEach() {
        Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map() {
        Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter() {
        Array.prototype.filter.apply(this.element, arguments);
    };
    
    DOM.prototype.reduce = function reduce() {
        Array.prototype.reduce.apply(this.element, arguments);
    };
    
    DOM.prototype.reduceRigth = function reduceRigth() {
        Array.prototype.reduceRigth.apply(this.element, arguments);
    };
    
    DOM.prototype.every = function every() {
        Array.prototype.every.apply(this.element, arguments);
    };

    DOM.isArray = function isArray(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]'; 
    }

    DOM.isObject = function isObject(arg) {
        return Object.prototype.toString.call(arg) === '[object Object]'; 
    }

    DOM.isFunction = function isFunction(arg) {
        return Object.prototype.toString.call(arg) === '[object Function]'; 
    }

    DOM.isNumber = function isNumber(arg) {
        return Object.prototype.toString.call(arg) === '[object Number]'; 
    }

    DOM.isString = function isString(arg) {
        return Object.prototype.toString.call(arg) === '[object String]'; 
    }

    DOM.isBoolean = function isBoolean(arg) {
        return Object.prototype.toString.call(arg) === '[object Boolean]'; 
    }

    DOM.isNull = function isNull(arg) {
        return Object.prototype.toString.call(arg) === '[object Null]' || 
        Object.prototype.toString.call(arg) === '[object Undefined]'; 
    }
    window.DOM = DOM;
})(window, document);