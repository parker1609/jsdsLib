"use strict";

var PriorityQueue = (function () {
    function PriorityQueue() {
        var argLen = arguments.length;

        this._dataArray = [null];
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
                for (var i = 0; i < arguments[0].length; ++i) {
                    this.enqueue(arguments[0][i]);
                }
            }
        }
        else if (argLen === 2) {
            if (typeof arguments[0] === 'function') {
                this._comparator = arguments[0];
                for (var i = 0; i < arguments[1].length; ++i) {
                    this.enqueue(arguments[1][i]);
                }
            }
            else if (typeof arguments[1] === 'function') {
                this._comparator = arguments[1];
                for (var i = 0; i < arguments[0].length; ++i) {
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
        this._dataArray = [null];
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
        for (i = 1; i <= this._size; ++i) {
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
            if (i < this._size) {
                retStr += ", ";
            }
        }
        retStr += "]";
        return retStr;
    };

    PriorityQueue.prototype.getHighPriorityChildIdx = function (idx) {
        if ((idx * 2) > this._size) {
            return 0;
        }
        else if ((idx * 2) === this._size) {
            return (idx * 2);
        }
        else {
            if (this._comparator(this._dataArray[(idx * 2)], this._dataArray[(idx * 2 + 1)]) < 0) {
                return (idx * 2 + 1);
            }
            else {
                return (idx * 2);
            }
        }
    };

    PriorityQueue.prototype.getParentIdx = function (idx) {
        if (idx % 2 === 0) {
            return idx / 2;
        }
        else {
            return idx / 2 - 0.5;
        }
    };

    PriorityQueue.prototype.enqueue = function (element) {
        var idx = this._size + 1;
        var parentIdx;

        while (idx !== 1) {
            parentIdx = this.getParentIdx(idx);
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
        if (this.empty()) {
            return null;
        }

        var retData = this._dataArray[1];
        var lastElem = this._dataArray[this._size];

        var parentIdx = 1;
        var childIdx;

        while (childIdx = this.getHighPriorityChildIdx(parentIdx)) {
            if (this._comparator(lastElem, this._dataArray[childIdx]) >= 0) {
                break;
            }

            this._dataArray[parentIdx] = this._dataArray[childIdx];
            parentIdx = childIdx;
        }

        this._dataArray[parentIdx] = lastElem;
        (this._size)--;
        return retData;
    };

    PriorityQueue.prototype.size = PriorityQueue.prototype.length;
    PriorityQueue.prototype.push = PriorityQueue.prototype.enqueue;
    PriorityQueue.prototype.pop = PriorityQueue.prototype.dequeue;

    return PriorityQueue;
})();

module.exports = PriorityQueue;