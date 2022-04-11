import mongoose from "mongoose";


const tuitsSchema = mongoose.Schema({
    user: {
        avatar: String,
        user: String,
        handler: String,
        lastactive: String,
    },
    blurb: String,
    post:  {
        image: String,
        video: {
            width: String,
            height: String,
            url: String,
            title: String
        },
        title: String,
        content: [String],
        link: [String]
    },
    stats: {
        replies: Number,
        retuits: Number,
        likes: Number,
        dislikes: Number,
        liked: Boolean
    }
}, {collection: "tuits"})

export default tuitsSchema;