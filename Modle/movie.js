import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
       
    },
    releaseDate: {

        type: Date,
      
    },
    director: {
        type: String,
        
    },
    actors: {
        type: [String],
        
    },
    
    description: {
        type: String,
        
    },

    rating: {
        type: Number,
        
    },
    imgUrl: {
        type: String,
        
    },

});
export const Movie = mongoose.model("Movie", movieSchema);

