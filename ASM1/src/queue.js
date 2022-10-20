class FunixQueue {
    elements = [];

    size() {
        return this.elements.length;
    }

    add(element) {
        this.elements.push(element);
        return this.elements.length;
    }

    peek() {
        return this.elements[0];
    }

    dequeue() {
        if (this.elements.length == 0) {
            throw "There are no elements on the queue";
        }
        return this.elements.shift();
    }
}

module.exports = FunixQueue;