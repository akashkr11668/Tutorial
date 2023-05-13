const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

const houseSchema = mongoose.Schema({
  Hno: String,
  rooms: Number,
  furniture: String,
  rent: Number,
});

const House = mongoose.model('Houses', houseSchema);

const houses = [
  {
    Hno: '101',
    rooms: 2,
    furniture: 'Sofa',
    rent: 1000,
  },
  {
    Hno: '102',
    rooms: 3,
    furniture: 'Table',
    rent: 1500,
  },
  {
    Hno: '103',
    rooms: 1,
    furniture: 'Bed',
    rent: 800,
  },
];

House.insertMany(houses)
  .then(() => {
    console.log('Houses added to collection');
  })
  .catch((err) => {
    console.error('Error adding houses to collection', err);
  });

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  marks: Number,
});

const Student = mongoose.model('Students', studentSchema);

const students = [
  {
    name: 'John',
    age: 20,
    marks: 80,
  },
  {
    name: 'Jane',
    age: 19,
    marks: 85,
  },
  {
    name: 'Alex',
    age: 21,
    marks: 75,
  },
];

Student.insertMany(students)
  .then(() => {
    console.log('Students added to collection');
  })
  .catch((err) => {
    console.error('Error adding students to collection', err);
  });

Student.find().sort({ marks: 1 }).then((result) => {
  console.log(result);
}).catch((err) => {
  console.error('Error finding students', err);
});
