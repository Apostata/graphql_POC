import {gql} from '@apollo/client' 

export const allMovies = gql`
    {
        movies {
            name,
            genre,
            year
        }
    }
`
export const addMovieMutation = gql`
mutation AddMovie($name:String!, $genre:String!, $year:String!){
    addMovie(name:$name, genre:$genre, year:$year) {
        name,
        genre,
        year
    }
}
`