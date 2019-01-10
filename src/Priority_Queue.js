"use strict";

var PriorityQueue = (function () {
    function PriorityQueue() {
        var argLen = arguments.length;
        var i;

        this._dataArray = [];
        this._size = 0;
        if (argLen === 0) {
            this._comparator = this.defaultComp;
        }
        else if (argLen === 1) {
            if (typeof arguments[0] === 'function') {
                this._comparator = arguments[0];
            }
            else {
                this._comparator = this.defaultComp;
                for (i = 0; i < arguments[0].length; ++i) {
                    this.enqueue(arguments[0][i]);
                }
            }
        }
        else if (argLen === 2) {
            if (typeof arguments[0] === 'function') {
                this._comparator = arguments[0];
                for (i = 0; i < arguments[1].length; ++i) {
                    this.enqueue(arguments[1][i]);
                }
            }
            else if (typeof arguments[1] === 'function') {
                this._comparator = arguments[1];
                for (i = 0; i < arguments[0].length; ++i) {
                    this.enqueue(arguments[0][i]);
                }
            }
        }
        else {
            throw new Error("PriorityQueue argument Error!!");
        }
    }

    PriorityQueue.prototype.defaultComp = function (a, b) {
        return a > b ? -1 : a < b ? 1 : 0;
    };


    PriorityQueue.prototype.clear = function () {
        this._dataArray = [];
        this._size = 0;
    };

    PriorityQueue.prototype.empty = function () {
        return this._size === 0;
    };

    PriorityQueue.prototype.length = function () {
        return this._size;
    };

    PriorityQueue.prototype.toString = function () {
        var i, curData;
        var retStr = "[";
        for (i = 0; i < this._size; ++i) {
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
            if (i < this._size - 1) {
                retStr += ", ";
            }
        }
        retStr += "]";
        return retStr;
    };

    PriorityQueue.prototype.enqueue = function (element) {
        var idx = this._size;
        this._dataArray.push(element);
        var parentIdx;

        while (idx > 0) {
            parentIdx = (idx - 1) >> 1;
            if (this._comparator(element, this._dataArray[parentIdx]) > 0) {
                this._dataArray[idx] = this._dataArray[parentIdx];
                idx = parentIdx;
            }
            else {
                break;
            }
        }

        this._dataArray[idx] = element;
        (this._size)++;
        return element;
    };

    PriorityQueue.prototype.dequeue = function () {
        if (this._size <= 0) {
            return null;
        }

        var retData = this._dataArray[0];
        var lastElem = this._dataArray.pop();
        (this._size)--;

        if(this._size == 0) {
            return retData;
        }

        var parentIdx = 0;
        var bestChild, right, left;

        while (1) {
            left = (parentIdx << 1) + 1;
            if(left >= this._size) {
                break;
            }
            bestChild = left;
            right = left + 1;

            if(right < this._size && this._comparator(this._dataArray[right], this._dataArray[left]) > 0) {
                bestChild = right;
            }
            if (this._comparator(this._dataArray[bestChild], lastElem) < 0) {
                break;
            }

            this._dataArray[parentIdx] = this._dataArray[bestChild];
            parentIdx = bestChild;
        }

        this._dataArray[parentIdx] = lastElem;
        return retData;
    };

    PriorityQueue.prototype.size = PriorityQueue.prototype.length;
    PriorityQueue.prototype.push = PriorityQueue.prototype.enqueue;
    PriorityQueue.prototype.pop = PriorityQueue.prototype.dequeue;

    return PriorityQueue;
})();

module.exports = PriorityQueue;