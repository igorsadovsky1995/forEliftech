const {Router} = require('express')
const router = Router();

const User = require('../models/User')
const Event = require('../models/Event');

router.post('/registration', async(req,res)=>{
    try{
        const {eventId,name,email,dateOfBirth,heardFrom} = req.body;
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: 'Event is not found' });
        }
        const user = new User({eventId,name,email,dateOfBirth,heardFrom}); 
        await user.save();
        event.registeredUsers.push(user._id);
        res.status(201).json({message:"User created"})

    }catch(e){
        console.log(`error server ${e}`)
    }
})

router.get('/:eventId', async (req, res) => {
    const eventId = req.params.eventId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    try {
        const totalUsers = await User.countDocuments({ eventId }); 
        const users = await User.find({ eventId }).skip(skip).limit(limit);
        res.json({
            totalUsers,
            currentPage: page,
            totalPages: Math.ceil(totalUsers / limit),
            users
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports=router;