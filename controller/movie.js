// import Movie from '../Modle/movie.js';
import {Movie} from '../Modle/movie.js'


//Add movie  
export const addmovie= async(req,res)=>{
 
const title = req.body.title;
// const genre = req.body.genre;
// const releaseDate = req.body.releseDate;
// const director = req.body.director;
// const actors = req.body.actors;
// const description = req.body.description;
// const rating = req.body.rating;
// const imgUrl = req.body.imgUrl;
// const user = req.body.user;
// const createdAt = req.body.createdAt;

  let movie = await Movie.findOne({ title });
  
  if(movie)
    return res.json({ message: " Movie Already Exist..!" });

  movie = await Movie.create({
   title
  //   , genre , releaseDate ,director , actors,description
  //  ,rating,imgUrl,user,createdAt
  });

  res.json({ message: "movie Saved..!" });
};

 export const getmovie = async (req, res) => {
  const movies = await Movie.find();

  res.json({ message: "Movie", movies });
};



// deletemovie
export const deletemovie = async (req, res) => {
  // console.log("Delete route is working..!");
  const id = req.params.id;

  let movie = await Movie.findById(id);

  if (!movie) return res.json({ message: "Id not exist..!" });

  await movie.deleteOne();

  res.json({
    success: true,
    message: "deleted Successfully",
  });
};

//update 

// updatemovies
export const updatemovie = async (req, res) => {
  // console.log(req.params.id);
  const movieId = req.params.id;

  let movie = await Movie.findById(movieId);

  if (!movie) return res.json({ message: "Invalid Id" });

  const { title } = req.body;
movie.title=title

  await movie.save();
  res.json({ movie });
};


  