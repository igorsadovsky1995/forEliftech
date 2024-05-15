const {Schema,model,Types} = require('mongoose');

const schema = new Schema({
    title: String,
    description: String,
    eventDate: Date,
    organizer: String,
    registeredUsers: [{ type:Schema.Types.ObjectId, ref: 'User' }] 
})

module.exports=model('Event',schema)