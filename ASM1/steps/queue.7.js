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

    }
}

module.exports = FunixQueue;