const uuidv4 = require('uuid/v4');

// Create a user
const createUser = ({name = ""} = {})=>(
{
    id: uuidv4(),
    name
})

// Create message
const createMessage = ({message = "", sender = ""} = {})=>(
    {
        id:uuidv4(),
        time:getTime(new Date(Date.now())),
        message,
        sender
    }
)


// Create chat
const createChat = ({messages = [], name = "Community", user = []} = {})=>(
    {
        id:uuidv4(),
        name,
        messages,
        users,
        typingUsers:[]
    }
)

// Chenge time format
const getTime = (date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
    createMessage,
    createChat,
    createUser
}