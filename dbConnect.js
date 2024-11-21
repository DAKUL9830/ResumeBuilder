const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('MongoDB is connected!');
});
connection.on('error', (error) => {
    console.log(error);
});
