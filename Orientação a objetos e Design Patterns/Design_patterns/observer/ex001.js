class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(obs => obs !== fn )
    }

    notify(data) {
        this.observers.forEach(fn => fn(data))
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscriber 1: ${data}`);
const logData2 = data => console.log(`Subscriber 2: ${data}`);
const logData3 = data => console.log(`Subscriber 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2')