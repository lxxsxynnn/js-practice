var bias = {
    name: 'Eunseok Song',
    age: 23,
    getInfo: function(){
        return `${this.name} is ${this.age} years old.`;
    }
};

for(var key in bias){
    console.log('key : ${key}');
    console.log('bias[key] : ${bias[key]}');
}