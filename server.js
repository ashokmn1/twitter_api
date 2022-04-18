const express = require('express')
const method = require('./src/controller')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

app.use(function (req, res, next) {
  const corsWhiteList = ['http://localhost:3000', "https://node-api-twitter.herokuapp.com/"]

  if (corsWhiteList.indexOf(req.headers.origin) !== -1) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  }
  // Pass to next layer of middleware
  next();
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})


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

