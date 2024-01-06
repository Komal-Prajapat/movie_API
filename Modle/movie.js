import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    // genre: {
    //     type: String,
    //     required: true,
    // },
    // releaseDate: {

    //     type: Date,
    //     required: true,
    // },
    // director: {
    //     type: String,
    //     required: true,
    // },
    // actors: {
    //     type: [String],
    //     required: true,
    // },
    
    // description: {
    //     type: String,
    //     required: true,
    // },

    // rating: {
    //     type: Number,
    //     required: true,
    // },
    // imgUrl: {
    //     type: String,
    //     required: true,
    // },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     // required: true,
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
});
export const Movie = mongoose.model("Movie", movieSchema);

