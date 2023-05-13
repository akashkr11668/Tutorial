const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/myCarDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB', err));

// define the car schema
const carSchema = mongoose.Schema({
    Model: String,
    Company: String,
    Mileage: Number,
    color: String,
    Owner: String,
    Salary:Number,
});

// create the car model
const Car = mongoose.model('Car', carSchema);

const addCars = async () => {
    // add cars to the collection
    const newCars = await Car.insertMany([
        {
            Model: 'Model S',
            Company: 'Tesla',
            Mileage: 25,
            color: 'red',
            Owner: 'John Doe',
            Salary: 5000
        },
        {
            Model: 'Camry',
            Company: 'Toyota',
            Mileage: 30,
            color: 'blue',
            Owner: 'Jane Smith',
            Salary: 8000
        },
        {
            Model: 'Kash',
            Company: 'Toyota',
            Mileage: 5,
            color: 'purple',
            Owner: 'Akash kumar',
            Salary: 12000
        }
    ]);

    console.log('Cars added to collection:', newCars);

    // find cars with more than a specific mileage
    const query = { Salary: { $gt: 5000 } };
    const cars = await Car.find(query);
    console.log('Cars with salary > 5000:', cars);
};

addCars();
