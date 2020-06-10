const ErrorRespose = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');





// @desc    Register
// @routes  POST /register
// @access  public
exports.register = asyncHandler(async (req, res, next) => {

    const { name, email, password } = req.body;


    //Create User
    const user = await User.create({
        name,
        email,
        password
    });

    res.status(200)
        .json({
            success: true
        });

    console.log('Register is done');



})







// @desc    Login user
// @routes  POST /
// @access  public
exports.login = asyncHandler(async (req, res, next) => {

    const { email, password } = req.body;

    //Validate email and password
    if (!email || !password) {
        return next(new ErrorRespose('Please provide an email and password', 400));
    }

    //Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorRespose('Invalid Credential', 401));
    }

    //Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorRespose('Invalid Credential', 401));
    }

    res.status(200)
        .json({
            success: true,
            user : user
        });

    console.log('Login is done');

})



