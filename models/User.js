const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    likedPosts: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'author'],
        default: 'user'
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId]
    }
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the salt
        const hash = await bcrypt.hash(this.password, salt);

        // Replace the plaintext password with the hash
        this.password = hash;

        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', UserSchema);
