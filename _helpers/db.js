const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions, (err) => {
    if (!err) { console.log('MongoDB connection successful!'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2))}
});

require('../users/user.model');