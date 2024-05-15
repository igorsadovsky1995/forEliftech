const {Schema,model,Types} = require('mongoose');

const schema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Event'
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: String,
        required: true
    },
    heardFrom:{
        type: String,
        required: true
    }
    
})

module.exports=model('Registration',schema)