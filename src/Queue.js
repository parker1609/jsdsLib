"use strict";

var Queue = (function () {
    function Queue(dataArray) {
        if (dataArray == null) {
            dataArray = [];
        }

        this._dataArray = dataArray;
        this._size = this._dataArray.length;
    }

    Queue.prototype.clear = function() {
        this._dataArray = [];
        this._size = 0;
    };

    Queue.prototype.enqueue = function (element) {
        this._dataArray.push(element);
        this._size++;
        return element;
    };

    Queue.prototype.dequeue = function () {
        if (this._size === 0) {
            return null;
        }
        var dequeueData = this._dataArray.shift();
        this._size--;
        return dequeueData;
    };

    Queue.prototype.empty = function () {
        return (this._size === 0);
    };

    Queue.prototype.front = function () {
        if (this._size === 0) {
            return null;
        }
        return this._dataArray[0];
    };

    Queue.prototype.back = function () {
        if (this._size === 0) {
            return null;
        }
        return this._dataArray[this._size - 1];
    };

    Queue.prototype.toString = function() {
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

    Queue.prototype.length = function() {
        return this._size;
    };

    Queue.prototype.size = Queue.prototype.length;
    Queue.prototype.push = Queue.prototype.enqueue;
    Queue.prototype.pop = Queue.prototype.dequeue;
    
    return Queue;
})();

module.exports = Queue;
