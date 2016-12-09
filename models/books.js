var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BooksSchema = new Schema({
    owner: {
        type: String,
        required: true,
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
    },
    cover: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    comments: [
        {
            comment: {
                type: String,
                required: true
            },
            stars: {
                type: Number,
                required: true,
                default: 1
            },
            user: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ]
});

var Model = mongoose.model('Books', BooksSchema);

module.exports = Model;