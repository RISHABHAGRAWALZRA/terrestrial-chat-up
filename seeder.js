const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({
    path: './config/config.env'
});

// Load models
const Room = require('./models/Room');


//connect to DB
mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

//Read JSON files
const rooms = JSON.parse(fs.readFileSync(`${__dirname}/_data/rooms.json`, 'utf-8'));



//Import into DB
const importData = async() => {
    try {
        await Room.create(rooms);
        
        console.log('Data Imported...'.rainbow.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
}


//Delete Data
const deleteData = async() => {
    try {
        await Room.deleteMany();

        console.log('Data Destroyed...'.rainbow.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
}


if (process.argv[2] == '-i') {
    importData();
} else if (process.argv[2] == '-d') {
    deleteData();
}