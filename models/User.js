const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'] 
    },
    googleId: {
        type: String,
        unique: true
      },
    resetPasswordToken: String,
    followedCategories: [{ type: String }],
 
    resetPasswordExpires: Date,
    date: {
        type: Date,
        default: Date.now
    },
    completedPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
      policyAccepted: { 
        type: Boolean,
        default: false
    }


});

module.exports = mongoose.model('User', userSchema);
