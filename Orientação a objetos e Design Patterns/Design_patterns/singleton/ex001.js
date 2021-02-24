function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;
    }

    return MyApp.instance;
}

const app = MyApp.call({name:'google'});
const app2 = MyApp.call({name: 'Custom Nme'});

console.log(app);
console.log(app2);