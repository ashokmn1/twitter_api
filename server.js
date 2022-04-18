const express = require('express')
const client = require('./dbconnection')
const method = require('./src/controller')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

client.connect()

app.get("/", (req, res) => {
    res.send('API READY')
})

app.get('/users',method.getUsers)
app.post('/user',method.addUser)
app.get('/user/:id',method.getUserById)
app.delete('/user/:id',method.removeUser)
app.get('/users/tweets',method.getAllTweets)
app.post('/user/tweet',method.addTweets)
app.delete('/user/tweet/:id',method.deleteTweetsById)
app.get('/user/tweet/:id',method.getTweetById)
app.get('/user/:id/tweets',method.getTweetByUserId)
app.get('/users/tweet/:id/comment',method.getCommentBYTweetId)
app.post('/user/tweet/:id/comment',method.addCommentsByTweetId)
app.delete('/user/tweet/:id/comment/:id',method.deleteCommentsById)

