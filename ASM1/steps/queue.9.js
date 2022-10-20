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
}

module.exports = FunixQueue;