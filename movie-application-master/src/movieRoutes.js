const express = require("express");
const router = express.Router();
const { _getMovies,_getMoviesById, _saveMovie, _updateMovie, _deleteMovieById} = require("./moviesService")

router.route("/").get(_getMovies);
router.route("/:id").get(_getMoviesById);
router.route("/").post( _saveMovie);
router.route("/").patch(_updateMovie);
router.route("/").delete(_deleteMovieById);

module.exports = router;