var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('lodash'),
    timestamps = require('mongoose-timestamp'),
    Definitions = require('../model-definitions');


var UserSchema = new Schema({
    email: Definitions.string(100, true),
    name: Definitions.string(100),
    userId: Definitions.string(100, true)
});

UserSchema.plugin(timestamps);
module.exports = mongoose.model('User', UserSchema);
