import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

let app = require('http').createServer;
let io = module.exports.io = require('socket.io')(app);

const PORT = process.env.PORT || 3231;
const SocketManager = require('./SocketManager');
io.connection('connection', SocketManager);
app.listen(PORT, ()=>{
    console.log("Connected to port: " + PORT)
}
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
