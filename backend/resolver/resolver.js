const Movie =require('../model/model')

const resolvers = {
    movies: ()=>{
        return Movie.find({})
    },

    movieByName: ({name})=>{
        return Movie.findOne({name:name})
    },

    addMovie: ({name, genre, year})=>{
        const movie = new Movie({
            name,
            genre,
            year
        })
        movie.save()
        return movie
    }
}

module.exports = resolvers