var dog = {
    name: 'cookie',
    eat: function(food){
        console.log(`${this.name} is eating ${food}.`);
    }
};

dog.eat('sweet potato');

var dog2 = {
    name: 'tissue',
    eat(food){
        console.log(`${this.name} is eating ${food}.`);
    }
};

dog2.eat('potato');