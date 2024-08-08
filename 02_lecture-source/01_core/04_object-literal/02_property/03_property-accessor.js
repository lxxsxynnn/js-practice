var dog = {
    name: 'cookie',
    eat: function(food){
        console.log(`${this.name} is eating ${food}.`);
    }
};

console.log(dog.name);
dog.eat('sweet potato');

console.log(dog['name']);
dog['eat']('sweet potato');

var obj = {
    'dash-key': 'dash-value',
    0:1
};

console.log(obj['dash-key']);

// console.log(obj.0);
console.log(obj['0']);