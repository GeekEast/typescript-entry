"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedListCollection = (function () {
    function LinkedListCollection() {
        this.head = null;
    }
    LinkedListCollection.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head)
            return (this.head = node);
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedListCollection.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var node = this.head;
            var length = 1;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedListCollection.prototype.at = function (index) {
        if (!this.head)
            throw new Error('index out of bound');
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index)
                return node;
            counter++;
            node = node.next;
        }
        throw new Error('index out of bound');
    };
    LinkedListCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedListCollection.prototype.swap = function (leftIndex, rightIndex) {
        if (leftIndex < 0 || rightIndex > this.length)
            throw new Error('Index out of bound.');
        var beforeLeftNode = null;
        try {
            beforeLeftNode = this.at(leftIndex - 1);
        }
        catch (e) { }
        var leftNode = this.at(leftIndex);
        var afterLeftNode = leftNode.next;
        var beforeRightNode = null;
        try {
            beforeRightNode = this.at(rightIndex - 1);
        }
        catch (e) { }
        var rightNode = this.at(rightIndex);
        var afterRightNode = rightNode.next;
        if (beforeLeftNode)
            beforeLeftNode.next = rightNode;
        if (!beforeLeftNode)
            this.head = rightNode;
        if (beforeRightNode)
            beforeRightNode.next = leftNode;
        if (!beforeRightNode)
            this.head = leftNode;
        leftNode.next = afterRightNode;
        rightNode.next = afterLeftNode;
    };
    LinkedListCollection.prototype.forEach = function (func) {
        var node = this.head;
        while (node) {
            func(node.data);
            node = node.next;
        }
    };
    return LinkedListCollection;
}());
exports.default = LinkedListCollection;
