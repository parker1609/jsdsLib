"use strict";

var Deque = (function () {
    var isArray = Array.isArray;

    function Deque(capacity) {
        this._capacity = this.getCapacity(capacity);
        this._size = 0;
        this._front = 0;                  
        if (isArray(capacity)) {
            var len = capacity.length;
            for (var i = 0; i < len; ++i) {
                this[i] = capacity[i];
            }
            this._size = len;
        }
    }

    Deque.prototype.clear = function () {
        var size = this._size;
        var front = this._front;
        var capacity = this._capacity;
        for (var j = 0; j < size; ++j) {
            this[(front + j) & (capacity - 1)] = void 0;
        }
        this._size = 0;
        this._front = 0;
    };

    Deque.prototype.empty = function () {
        return this._size === 0;
    };

    Deque.prototype.front = function () {
        if (this._size === 0) {
            return null;
        }
        return this[this._front];
    };

    Deque.prototype.back = function () {
        if (this._size === 0) {
            return null;
        }
        var size = this._size;
        var index = (this._front + size - 1) & (this._capacity - 1);
        return this[index];
    };

    Deque.prototype.push_front = function (element) {
        var size = this._size;
        var capacity = this._capacity;
        var i = (((( this._front - 1 ) &
            ( capacity - 1) ) ^ capacity ) - capacity );
        this._checkCapacity(size + 1);
        this[i] = element;
        this._size = size + 1;
        this._front = i;
    };

    Deque.prototype.pop_front = function () {
        if (this._size === 0) {
            return null;
        }

        var size = this._size;
        var front = this._front;
        var frontData = this[front];
        this[front] = void 0;
        this._front = (front + 1) & (this._capacity - 1);
        this._size = size - 1;
        return frontData;
    };

    Deque.prototype.push_back = function (element) {
        var size = this._size;

        this._checkCapacity(size + 1);
        var i = (this._front + size) & (this._capacity - 1);
        this[i] = element;
        this._size = size + 1;
        return size + 1;
    };

    Deque.prototype.pop_back = function () {
        if (this._size === 0) {
            return null;
        }
        var size = this._size;
        var i = (this._front + size - 1) & (this._capacity - 1);
        var backData = this[i];
        this[i] = void 0;
        this._size = size - 1;
        return backData;
    };

    Deque.prototype.toString = function () {
        var size = this._size;
        var dataArray = new Array(size);
        var front = this._front;
        var capacity = this._capacity;
        var i, curData;
        var retStr = "[";

        for (i = 0; i < size; ++i) {
            dataArray[i] = this[(front + i) & (capacity - 1)];
        }

        for (i = 0; i < size; ++i) {
            curData = dataArray[i];
            if (!!curData && typeof curData === 'object') {
                retStr += "[" + curData + "]";
            }
            else if (!!curData && typeof curData === 'string') {
                retStr += "'" + curData + "'";
            }
            else {
                retStr += curData;
            }
            if (i < size - 1) {
                retStr += ", ";
            }
        }
        retStr += "]";
        return retStr;
    };

    Deque.prototype.length = function () {
        return this._size;
    };

    Deque.prototype.size = Deque.prototype.length;
    Deque.prototype.unshift = Deque.prototype.push_front;
    Deque.prototype.dequeue = Deque.prototype.pop_front;
    Deque.prototype.shift = Deque.prototype.pop_front;
    Deque.prototype.enqueue = Deque.prototype.push_back;
    Deque.prototype.push = Deque.prototype.push_back;
    Deque.prototype.pop = Deque.prototype.pop_back;

    Deque.prototype._checkCapacity = function (size) {
        if (this._capacity < size) {
            this._resizeTo(this.getCapacity(this._capacity * 1.5 + 16));
        }
    };

    Deque.prototype._resizeTo = function (capacity) {
        var front = this._front;
        var size = this._size;
        var oldCapacity = this._capacity;
        this._capacity = capacity;
        if (front + size > oldCapacity) {
            var moveItemsCount = (front + size) & (oldCapacity - 1);
            this.arrayMove(this, 0, this, oldCapacity, moveItemsCount);
        }
    };

    Deque.prototype.arrayMove = function (src, srcIndex, dst, dstIndex, len) {
        for (var j = 0; j < len; ++j) {
            dst[j + dstIndex] = src[j + srcIndex];
            src[j + srcIndex] = void 0;
        }
    };

    Deque.prototype.pow2AtLeast = function (n) {
        n = n >>> 0;
        n = n - 1;
        n = n | (n >> 1);
        n = n | (n >> 2);
        n = n | (n >> 4);
        n = n | (n >> 8);
        n = n | (n >> 16);
        return n + 1;
    };

    Deque.prototype.getCapacity = function (capacity) {
        if (typeof capacity !== "number") {
            if (isArray(capacity)) {
                capacity = capacity.length;
            }
            else {
                return 16;
            }
        }

        return this.pow2AtLeast(
            Math.min(
                Math.max(16, capacity), 1073741824)
        );
    };

    return Deque;
})();

module.exports = Deque;