const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require('cors')

mongoose.connect('mongodb+srv://apostata:mu1t4tr3t4@cluster0.tmwdm.mongodb.net/moviemaker?retryWrites=true&w=majority' ,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Mongo Atlas connected!')
}).catch(e=>{
    console.log(e)
})

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql:true,
    rootValue : resolvers
}))

app.get('/', (req, res)=>{
    res.send('hello from backend!')
})

app.listen(4000, ()=>{
    console.log('Server running on port 4000')
})