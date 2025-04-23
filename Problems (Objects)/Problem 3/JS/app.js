let car = {
    make: 'Nissan',
    model: 'Versa',
    year: 2017,
}
console.log(car);

let propertyName = 'model';
console.log('Model:', car[propertyName]);

car['color'] = 'red';
console.log(car);