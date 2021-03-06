const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, (err) => {
    if (!err) { console.log('MongoDB connection successful!'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2))}
});

require('../users/user.model');