import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { withAlert } from "react-alert";

export default class signUp extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastName: '',
            userName: '',
            password: '',
            mail: ''
        }
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
        if(this.state.name !== "" && this.state.lastName !== "" && this.state.userName !== "" && this.state.password !== "" && this.state.mail !== ""){
            fetch('http://localhost:3000/api/v1/login/signup', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
                .then(result => result.json())
                .then(result => {
                    fetch('http://localhost:3000/api/v1/login', {
                        method: 'POST',
                        body: JSON.stringify({
                            userName: result.userName,
                            password: result.password
                        }),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        }
                    })
                    .then(result => result.json())
                    .then( result => {
                        console.log(result);
                        sessionStorage.setItem('token', result.token);
                        window.location.href = "/";
                    });
                })
                })
        }else{
            this.props.alert.show("Por favor ingrese todos los campos.");
        }
    }
    
    render() {
    
        return (
            <div>
                <h1> SIGN UP TO CREATE TWITTER ACCOUNT </h1>
                <input onChange={e => this.handleChange(e)} placeholder="Nombre" type="text" name="name" ></input>
                <input onChange={e => this.handleChange(e)} placeholder="Apellido" type="text" name="lastName" ></input>
                <input onChange={e => this.handleChange(e)} placeholder="Username" type="text" name="userName" ></input>
                <input onChange={e => this.handleChange(e)} placeholder="E-Mail" type="text" name="mail" ></input>
                <input onChange={e => this.handleChange(e)} placeholder="Password" type="password" name="password" ></input>
                <Button onClick={() => this.handleSubmit()}></Button>
            </div>
    )
  }
}
