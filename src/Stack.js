"use strict";

var Stack = (function () {
    function Stack(dataArray) {
        if (dataArray == null) {
            dataArray = [];
        }

        this._dataArray = dataArray;
        this._size = this._dataArray.length;
    }

    Stack.prototype.clear = function() {
        this._dataArray = [];
        this._size = 0;
    };

    Stack.prototype.push = function (element) {
        this._dataArray.push(element);
        this._size++;
        return element;
    };

    Stack.prototype.pop = function () {
        if (this._size === 0) {
            return null;
        }
        var popData = this._dataArray.pop();
        this._size--;
        return popData;
    };

    Stack.prototype.peek = function () {
        if(this._size === 0) {
            return null;
        }
        return this._dataArray[_size - 1];
    };

    Stack.prototype.toString = function() {
        var i, curData;
        var retStr = "[";
        for(i = 0; i < this._size; ++i) {
            curData = this._dataArray[i];
            if(!!curData && curData === 'object') {
                retStr += "[" + curData + "]" ;
            }
            else if(!!curData && typeof curData === 'string') {
                retStr += "'" + curData + "'";
            }
            else {
                retStr += curData;
            }
            if(i !== this._size - 1) {
                retStr += ", ";
            }
        }
        retStr += "]";
        return retStr;
    };

    Stack.prototype.empty = function () {
        return (this._size === 0);
    };

    Stack.prototype.length = function () {
        return this._size;
    };

    Stack.prototype.size = Stack.prototype.length;

    return Stack;
})();

module.exports = Stack;