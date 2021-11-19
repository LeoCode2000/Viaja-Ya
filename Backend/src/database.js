const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular-admin', {
    //useNewUrlParser: true,
    //useUnifieldTopology: true
})
    .then(db => console.log("Database is conected"))
    .catch(err => console.log(err));