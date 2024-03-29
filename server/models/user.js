const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Club   = require('./club')

const clubSchema = require('./club')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter valid Email!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    clubs: [Club.schema]
},
{
    toJSON: {
        virtuals: true
    }
}
);

userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User