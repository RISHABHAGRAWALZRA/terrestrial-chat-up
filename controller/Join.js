const ErrorRespose = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const Room = require('../models/Room');




// @desc    Joined Rooms
// @routes  GET /chat/joinedrooms/:emailId
// @access  public
exports.joinedRooms = asyncHandler(async (req, res, next) => {

    const email = req.params.emailId;

    console.log(email);

    const user = await User.findOne({ email: email });

    
    let joinedrooms = user.rooms

    const rooms = await Room.find();

    console.log(joinedrooms);

    res.status(200)
        .json({
            success: true,
            rooms : rooms,
            joinedrooms : joinedrooms
        });

    console.log('Get Joined Rooms');

})



// @desc    Join Room
// @routes  POST /chat/joinroom
// @access  public
exports.joinRoom = asyncHandler(async (req, res, next) => {

    const { name, emailId } = req.body;

    //console.log(name + ' is room name');

    const user = await User.findOne({ email: emailId });

    let flag = false;
    user.rooms.forEach(element => {
        if (element.toLowerCase() === name.toLowerCase()) {
            flag = true;
        }
    });

    if (!flag) {
        user.rooms.push(name);

        const details = {
            rooms: user.rooms
        }

        //find User
        const user0 = await User.updateOne({ email: emailId }, details);

        //Find room id
        const room = await Room.findOne({ name: name });

        const id = room._id.valueOf();

        res.status(200)
            .json({
                success: true,
                id: id
            });

        //console.log(`${emailId} Joined to room ${name}`);
    }
    else {
        return next(new ErrorRespose('Already joined in that room', 400));
    }
})
