var dog = {
    name: 'cookie'
};

dog.name = 'autumn';
console.log(dog);

dog.age = 3;
console.log(dog);

delete dog.age;
delete dog.something;
console.log(dog);
