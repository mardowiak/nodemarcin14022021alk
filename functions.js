const helloWorld = () => console.log('New Hello World');
const add= (a,b) => console.log(a+b);
const subtitle='Zajecia backend';
const sample = () => 'proba funkcji';

module.exports = {
    helloWorld,
    add,
    subtitle,
    sample
}

console.log('functions.js loaded correctly');