const express = require('express');
const router = express.Router();
const Event = require('../models/Event');


router.get('/all', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    try {
        const totalEvents = await Event.countDocuments(); 
        const events = await Event.find().skip(skip).limit(limit);
        res.json({
            totalEvents,
            currentPage: page,
            totalPages: Math.ceil(totalEvents / limit),
            events
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;