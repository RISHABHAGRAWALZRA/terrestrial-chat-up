const express = require('express');

const {
    joinedRooms,
    joinRoom
}
    = require('../controller/Join');


const router = express.Router();


router.route('/:emailId')
    .get(joinedRooms);

router.route('/joinroom')
    .post(joinRoom);


module.exports = router;