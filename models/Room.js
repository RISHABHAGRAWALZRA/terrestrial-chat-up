const mongoose = require('mongoose');


const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique : true
    }
});


module.exports = mongoose.model('Room', RoomSchema);