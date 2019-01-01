"use strict";

var Queue = (function () {
    function Queue(dataArray) {
        if (dataArray === undefined) {
            dataArray = [];
        }

        this._dataArray = dataArray;
        this._size = this._dataArray.length;  // === using size
        this._frontIdx = 0;                   // === empty size
    }

    Queue.prototype.clear = function () {
        this._dataArray = [];
        this._size = 0;
        this._frontIdx = 0; 
    };

    Queue.prototype.enqueue = function (element) {
        this._dataArray.push(element);
        (this._size)++;
        return element;
    };

    Queue.prototype.dequeue = function () {
        if (this._size === 0) {
            return null;
        }

        (this._size)--;
        var dequeueData = this._dataArray[this._frontIdx++];
        if(this._frontIdx * 1.5 > this._dataArray.length) {
            this._dataArray = this._dataArray.slice(this._frontIdx);
            this._frontIdx = 0;
        }

        return dequeueData;
    };

    Queue.prototype.empty = function () {
        return (this._size === 0);
    };

    Queue.prototype.front = function () {
        if (this._size === 0) {
            return null;
        }
        return this._dataArray[this._frontIdx];
    };

    Queue.prototype.back = function () {
        if (this._size === 0) {
            return null;
        }
        return this._dataArray[this._dataArray.length - 1];
    };

    Queue.prototype.toString = function () {
        var i, curData;
        var retStr = "[";
        for (i = this._frontIdx; i < this._dataArray.length; ++i) {
            curData = this._dataArray[i];
            if (!!curData && typeof curData === 'object') {
                retStr += "[" + curData + "]";
            }
            else if (!!curData && typeof curData === 'string') {
                retStr += "'" + curData + "'";
            }
            else {
                retStr += curData;
            }
            if (i < this._dataArray.length - 1) {
                retStr += ", ";
            }
        }
        retStr += "]";
        return retStr;
    };

    Queue.prototype.length = function () {
        return this._size;
    };

    Queue.prototype.size = Queue.prototype.length;
    Queue.prototype.push = Queue.prototype.enqueue;
    Queue.prototype.pop = Queue.prototype.dequeue;

    return Queue;
})();

module.exports = Queue;