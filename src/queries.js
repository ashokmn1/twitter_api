const getUsers = 'SELECT * FROM user_details'
const getUserById = 'SELECT *  FROM user_details WHERE id = $1'
const checkEmailExists = 'SELECT s FROM user_details s WHERE s.email = $1'
const addUser = 'INSERT INTO user_details (avatar,name,email,password,uname,bio) VALUES ($1,$2,$3,$4,$5,$6)'
const removeUser = 'DELETE FROM user_details WHERE id = $1'
const getAllTweets = 'SELECT * FROM tweets JOIN user_details on tweets.user_id=user_details.id'
const addTweets = 'INSERT INTO tweets (user_id,content,discription) VALUES ($1,$2,$3)'
const deleteTweetsById = 'DELETE FROM tweets WHERE id = $1'
const getTweetById = 'SELECT *  FROM tweets WHERE id = $1'
const getTweetByUserId = 'SELECT * FROM tweets WHERE user_id = $1'
const getCommentBYTweetId = 'SELECT * FROM comments WHERE tweet_id = $1'
const addCommentsByTweetId = 'INSERT INTO comments (tweet_id,text) VALUES ($1,$2)'
const deleteCommentsById = 'DELETE FROM comments WHERE id = $1'
const updateUser = 'UPDATE user_details SET active=$2 WHERE id=$1'
const getUserByState = 'SELECT *  FROM user_details WHERE active = $1 '

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser, 
    removeUser,
    getAllTweets,
    addTweets,
    deleteTweetsById,
    getTweetById,
    getTweetByUserId,
    getCommentBYTweetId,
    addCommentsByTweetId,
    deleteCommentsById,
    updateUser,
    getUserByState
}