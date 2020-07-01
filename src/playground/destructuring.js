// *************OBJECT DESTRUCTURING****************** 

// const person = {
//     name: 'Disha',
//     age: 21,
//     location: {
//         city: 'Ghaziabad',
//         temp: 60
//     }
// };

// const {name : firstName = 'Anonymous', age} = person;       //Default value ANONYMOUS is set to the name prop, firstname is the renaming of name.
// console.log(`${firstName} is ${age}.`);

// const {city, temp} = person.location;
// console.log(`It's ${temp} fahrenheit in ${city}`);


const book = {
    name: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name : publisherName = 'Self-published'} = book.publisher;       //publisherName is renaming, self-published is the default value in case no publisher name is mentioned.
console.log(publisherName);



// ********************ARRAY DESTRUCTURING*************************

const address = ['Express greens', 'Vaishali', 'Ghaziabad', '201010'];

const [ , city , state = 'default value' ] = address;         //these 4 variables are matching with the array items in order.
console.log(`You are in ${city} ${state}`);


const item = ['Coffee', '₹10', '₹20', '₹30'];

const [thing, , mediumPrice ] = item;
console.log(`A medium ${thing} costs ${mediumPrice}`);
