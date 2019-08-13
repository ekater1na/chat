import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events';
import Loginform from './LoginForm';
import ChatContainer from './chat/ChatContainer'

const socketUrl = "http://192.168.100.4:3231";

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            socket:null,
            user:null
        };
    }
    
    UNSAFE_componentWillMount() {
        this.initSocket()
    }

    initSocket = ()=>{
        const socket = io(socketUrl);
        
        socket.on('connect', ()=>{
            console.log('Connected');
        })
        this.setState({socket})
    }

    setUser = (user)=>{
        const { socket } = this.state;
        socket.emit(USER_CONNECTED, user);
        this.setState({user});
    }

    logout = ()=>{
        const { socket } = this.state;
        socket.emit(LOGOUT);
        this.setState({user:null});
    }

    render() {
        const { socket, user } = this.state;
        return (
            <div className='container'>
               { 
                    !user ?
                    <Loginform socket={socket} setUser={this.setUser}/>
                    : 
                    <ChatContainer socket={socket} user={user} logout={this.logout}/>
               }
            </div>
        );
    }
}

export default Layout;