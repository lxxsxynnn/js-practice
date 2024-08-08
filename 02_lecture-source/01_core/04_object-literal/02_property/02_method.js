var dog = {
    name: 'cookie',
    eat: function(food){
        console.log(`${this.name} is eating ${food}.`);
    }
};

dog.eat('some snacks');