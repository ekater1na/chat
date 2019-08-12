// eslint-disable-next-line no-unused-vars
const io = require('./index.js').io;

module.exports = function(socket){
    console.log('Socket ID:' + socket.id)
}