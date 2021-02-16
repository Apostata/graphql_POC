const Movie =require('../model/model')

const movies = [
    { id:1, name: "John Wick Parabellum", genre:"Action", year:2019 },
    { id:2, name: "John Wick Parabellum 2", genre:"Action", year:2019 },
    { id:3, name: "John Wick Parabellum 3", genre:"Action", year:2019 },
    { id:4, name: "John Wick Parabellum 4", genre:"Action", year:2019 },
    { id:5, name: "John Wick Parabellum 5", genre:"Action", year:2019 },
    { id:6, name: "John Wick Parabellum 6", genre:"Action", year:2019 },
    { id:7, name: "John Wick Parabellum 7", genre:"Action", year:2019 },
    { id:8, name: "John Wick Parabellum 8", genre:"Action", year:2019 },
    { id:9, name: "John Wick Parabellum 9", genre:"Action", year:2019 },
    { id:10, name: "John Wick Parabellum 10", genre:"Action", year:2019 },
]

const resolvers = {
    movies: ()=>{
        return movies
    },
    addMovie: (args)=>{
        return {
            name: args.name
        }
    }
}

module.exports = resolvers