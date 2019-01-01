"use strict";

var Deque = (function () {
    function Node(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    function Deque() {
        this._head = new Node("head");
        this._tail = new Node("tail");
        this._head.next = this._tail;
        this._tail.prev = this._head;
        this._size = 0;
    }

    Deque.prototype.clear = function() {
        this._head.next = this._tail;
        this._head.prev = null;
        this._tail.next = null;
        this._tail.prev = this._head;
        this._size = 0;
    };

    Deque.prototype.push_front = function(newElement) {
        var newNode = new Node(newElement);
        var headNextNode = this._head.next;

        newNode.prev = this._head;
        newNode.next = headNextNode;

        headNextNode.prev.next = newNode;
        headNextNode.prev = newNode;

        (this._size)++;
    };

    Deque.prototype.pop_front = function() {
        if(this._size === 0) {
            return null;
        }

        var deleteNode = this._head.next;

        deleteNode.next.prev = this._head;
        this._head.next = deleteNode.next;

        (this._size)--;

        return deleteNode;
    }

    Deque.prototype.push_back = function(newElement) {
        var newNode = new Node(newElement);
        var tailPrevNode = this._tail.prev;

        newNode.prev = tailPrevNode;
        newNode.next = this._tail;

        tailPrevNode.next = newNode;
        this._tail.prev = newNode;

        (this._size)++;
    };

    Deque.prototype.pop_back = function() {
        if(this._size === 0) {
            return null;
        }

        var deleteNode = this._tail.prev;

        deleteNode.prev.next = this._tail;
        this._tail.prev = deleteNode.prev;

        (this._size)--;

        return deleteNode;
    }

    Deque.prototype.toString = function() {
        var i, curData;
        var retStr = "[";

        var curNode = this._head.next;
        while(curNode !== this._tail) {
            curData = curNode.element;

            if(!!curData && typeof curData === 'object') {
                retStr += "[" + curData + "]" ;
            }
            else if(!!curData && typeof curData === 'string') {
                retStr += "'" + curData + "'";
            }
            else {
                retStr += curData;
            }

            if(curNode !== this._tail.prev) {
                retStr += ", ";
            }

            curNode = curNode.next;
        }
        retStr += "]";
        return retStr;
    };

    Deque.prototype.length = function () {
        return this._size;
    }

    Deque.prototype.size = Deque.prototype.length;
    Deque.prototype.enqueue = Deque.prototype.push_front;
    Deque.prototype.unshift = Deque.prototype.push_front;
    Deque.prototype.dequeue = Deque.prototype.pop_front;
    Deque.prototype.shift = Deque.prototype.pop_front;
    Deque.prototype.push = Deque.prototype.push_back;
    Deque.prototype.pop = Deque.prototype.pop_back;

    return Deque;
})();

module.exports = Deque;