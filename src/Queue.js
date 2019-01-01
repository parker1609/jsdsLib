"use strict";

var Queue = (function () {
    function Queue(dataArray) {
        if (dataArray === undefined) {
            dataArray = [];
        }

        this._dataArray = dataArray;
        this._size = this._dataArray.length;  // === using size
        this._frontIdx = 0;                   // === empty size
        if (this._size === 0) {
            this._lastIdx = -1;
        }
        else {
            this._lastIdx = this._size + this._frontIdx - 1;
        }
    }

    Queue.prototype.clear = function () {
        this._dataArray = [];
        this._size = 0;
        this._frontIdx = 0; 
        this._lastIdx = -1;
    };

    Queue.prototype.enqueue = function (element) {
        this._dataArray[++this._lastIdx] = element;
        (this._size)++;
        return element;
    };

    Queue.prototype.checkEmptySizeInArray = function () {
        return ((this._lastIdx > 100) && ((this._size * 1.5) < this._frontIdx));
    }

    Queue.prototype.rearrangeArray = function () {
        for (var i = 0; i < this._size; ++i) {
            this._dataArray[i] = this._dataarray[this._frontIdx];
            this._dataarray[this._frontIdx++] = 0;
        }
        this._lastIdx = this._size + this._frontIdx - 1;
    }

    Queue.prototype.dequeue = function () {
        if (this._size === 0) {
            return null;
        }

        var dequeueData = this._dataArray[this._frontIdx++];
        (this._size)--;

        if (this.checkEmptySizeInArray()) {
            this.rearrangeArray();
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
        return this._dataArray[this._lastIdx];
    };

    Queue.prototype.toString = function () {
        var i, curData;
        var retStr = "[";
        for (i = this._frontIdx; i <= this._lastIdx; ++i) {
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
            if (i < this._lastIdx) {
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