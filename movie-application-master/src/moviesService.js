// Import the axios library
const axios = require('axios')

const _getMovies = (req,res,done) => {
  // get all movies
  axios.get("http://localhost:3000/movies").then((res)=>{
    res.writeHead(200,{
      'content-type': 'application/json'
     })
     res.end(res)
  }).catch((err)=>{
    res.writeHead(404,{
      'content-type': 'application/json'
     })
     res.end(err, "Data not found")
  })

  
     
}

const _getMoviesById = (movieId, done) => {
  // get movie by id
}

const _saveMovie = function (newMovie, done) {
  // save the details of a movie read from the request body
}

const _updateMovie = function (movieId, updateData, done) {
  // update movie details of a specific movie
 }

 const _deleteMovieById = function (movieId, done) {
  // delete a specific movie 
}

const getMovies = (done) => {
  // get all movies
}

const getMoviesById = (movieId, done) => {
  // get movie by id
}

const saveMovie = function (newMovie, done) {
  // save the details of a movie read from the request body
}

const updateMovie = function (movieId, updateData, done) {
 // update movie details of a specific movie
}

const deleteMovieById = function (movieId, done) {
  // delete a specific movie 
}



module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById,
  _getMovies,
  _getMoviesById,
  _saveMovie,
  _updateMovie,
  _deleteMovieById
}
