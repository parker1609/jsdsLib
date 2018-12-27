"use strict";

var List = (function () {
    function Node(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    function List() {
        this._head = new Node("head");
        this._tail = new Node("tail");
        this._head.next = this._tail;
        this._tail.prev = this._head;
        this._size = 0;
    }

    List.prototype.clear = function() {
        this._head.next = this._tail;
        this._head.prev = null;
        this._tail.next = null;
        this._tail.prev = this._head;
        this._size = 0;
    };

    List.prototype.find = function(item) {
        var curNode = this._head.next;
        while(curNode !== this._tail) {
            if(curNode.element === item) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return null;
    };

    List.prototype.find_reverse = function(item) {
        var curNode = this._tail.prev;
        while(curNode !== this._head) {
            if(curNode.element === item) {
                return curNode;
            }
            curNode = curNode.prev;
        }
        return null;
    };

    List.prototype.push_front = function(newElement) {
        var newNode = new Node(newElement);
        var headNextNode = this._head.next;

        newNode.prev = this._head;
        newNode.next = headNextNode;

        headNextNode.prev.next = newNode;
        headNextNode.prev = newNode;

        (this._size)++;
    };

    List.prototype.push_back = function(newElement) {
        var newNode = new Node(newElement);
        var tailPrevNode = this._tail.prev;

        newNode.prev = tailPrevNode;
        newNode.next = this._tail;

        tailPrevNode.next = newNode;
        this._tail.prev = newNode;

        (this._size)++;
    };

    List.prototype.insert = function(newElement, item) {
        var newNode = new Node(newElement);
        var curNode = this.find(item);

        if(curNode == null) {
            return null;
        }

        newNode.prev = curNode;
        newNode.next = curNode.next;

        curNode.next.prev = newNode;
        curNode.next = newNode;

        (this._size)++;
    };

    List.prototype.insert_prev = function(newElement, item) {
        var newNode = new Node(newElement);
        var curNode = this.find(item);

        if(curNode == null) {
            return null;
        }

        newNode.next = curNode;
        newNode.prev = curNode.prev;

        curNode.prev.next = newNode;
        curNode.prev = newNode;

        (this._size)++;
    };

    List.prototype.remove = function(item) {
        var curNode = this.find(item);
        if(curNode == null) {
            return null;
        }

        var nextNode = curNode.next;
        var prevNode = curNode.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        (this._size)--;

        return item;
    };

    List.prototype.merge = function(otherList) {
        if(!(otherList instanceof List)) {
            throw new Error("Argument must be list objext!!");
        }

        this._tail.prev.next = otherList._head.next;
        otherList._head.next.prev = this._tail.prev;
        this._tail = otherList._tail;

        this._size += otherList.size();
    };

    List.prototype.toString = function() {
        var i, curData;
        var retStr = "[";

        var curNode = this._head.next;
        while(curNode !== this._tail) {
            curData = curNode.element;

            if(!!curData && curData === 'object') {
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

    List.prototype.length = function () {
        return this._size;
    }

    List.prototype.size = List.prototype.length;

    return List;
})();

module.exports = List;