const pool = require('../dbconnection')
const queries = require('./queries')

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) {
            console.log(error)
            res.status(404)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) {
            console.log(error)
            res.send(error.message)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const addUser = (req, res) => {
    const { avatar, name, email, password, uname, bio } = req.body

    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists')
        }

        // add user to db
        pool.query(queries.addUser, [avatar, name, email, password, uname, bio], (error, results) => {
            if (error) {
                console.log(error)
                res.status(404)
            } else {
                res.status(201).send("Added Sucessfully")
            }
        })
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { active } = req.body

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length
        if (noUserFound) {
            res.send("user not exist please sign up")
        }

        pool.query(queries.updateUser, [id,active], (error, results) => {
            if (error) {
                console.log(error)
                res.status(404)
            } else {
                res.status(200).send("User updated successfully")
            }
        })
    })
}

const getUserByState = (req, res) => {
    const active = parseInt(req.params.active)
    pool.query(queries.getUserByState, [active], (error, results) => {
        if (error) {
            console.log(error)
            res.send(error.message)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const removeUser = (req, res) => {
    const id = parseInt(req.params.id)
    //check user exists
    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length
        if (noUserFound) {
            res.send('User does not exist to delete')
        }
    })
    //remove user
    pool.query(queries.removeUser, [id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(404)
        } else {
            res.status(200).send("User removed successfully.")
        }
    })
}


const getAllTweets = (req, res) => {
    pool.query(queries.getAllTweets, (error, results) => {
        if (error) {
            console.log(error)
            res.status(404)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const addTweets = (req, res) => {
    const { user_id, content, discription } = req.body
    pool.query(queries.addTweets, [user_id, content, discription], (error, results) => {
        if (error) {
            console.log(error)
            res.status(404)
        } else {
            res.status(201).send("Added Sucessfully")
        }
    })
}

const deleteTweetsById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.deleteTweetsById, [id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(404)
        } else {
            res.status(200).send("Tweets deleted successfully.")
        }
    })
}

const getTweetById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getTweetById, [id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(404)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const getTweetByUserId = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getTweetByUserId, [id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(404)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const getCommentBYTweetId = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getCommentBYTweetId, [id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(404)
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const addCommentsByTweetId = (req, res) => {
    const { tweet_id, text } = req.body

    pool.query(queries.addCommentsByTweetId, [tweet_id, text], (error, results) => {
        if (error) {
            console.log(error)
            res.send(error.message)
        } else {
            res.status(201).send(results.rows)
        }
    })

}

const deleteCommentsById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.deleteCommentsById, [id], (error, results) => {
        if (error) {
            console.log(error)
            res.send(error.message)
        } else {
            res.status(200).send("comment deleted successfully.")
        }
    })
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser,
    getAllTweets,
    addTweets,
    deleteTweetsById,
    getTweetById,
    getTweetByUserId,
    getCommentBYTweetId,
    addCommentsByTweetId,
    deleteCommentsById,
    getUserByState
}