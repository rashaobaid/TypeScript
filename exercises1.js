"use strict";
exports.__esModule = true;
var users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(" - " + user.name + ", " + user.age);
}
console.log('Users:');
users.forEach(logPerson);
