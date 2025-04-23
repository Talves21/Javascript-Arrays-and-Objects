// Syntax for Objects
let favoriteCharacter = {
    fName: 'Bob',
    lName: 'Ro',
    hobbies: ['painting', 'Animal Caring'],
    age: 52
};
console.log(favoriteCharacter);

// Selecting a single property
console.log(`My favorite character's first name is ${favoriteCharacter.fName}.`)

// Selecting a property within an array
console.log(`One of my favorite characters hobbies is ${favoriteCharacter.hobbies[1]}.`)

// Updating property value
favoriteCharacter.lName = 'Ross';
console.log(favoriteCharacter);

// Adding new property value
favoriteCharacter.paintingSkills = 100;
console.log(favoriteCharacter);