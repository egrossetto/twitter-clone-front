import React from 'react';
import Button from '@material-ui/core/Button';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link, Route } from 'react-router-dom';
import { withAlert } from "react-alert";
import signUp from './signUp';

/*class loginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: '',
        password: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  
    handleSubmit() {
        console.log(this.state.userName);
        if (this.state.userName !== '' && this.state.password !== '' ) {
            fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then(result => result.json())
            .then( result => {
                console.log(result);
                debugger;
                sessionStorage.setItem('token', result.token);
                sessionStorage.setItem('name', result.name);
                sessionStorage.setItem('lastName', result.lastName);
                sessionStorage.setItem('userName', result.userName);
                sessionStorage.setItem('mail', result.mail);
                //sessionStorage.setItem('tweets', result.tweets);
                //sessionStorage.setItem('followers', result.followers);
                //sessionStorage.setItem('following', result.following);
                
                window.location.href = "/";
            });
        } else {
            this.props.alert.show("Por favor ingrese todos los campos.");
        }
    }
  
    render() {
      return (
            <div className="login-center">
                <input onChange={e => this.handleChange(e)} placeholder="User Name" type="text" name="userName" />
                <input onChange={e => this.handleChange(e)} placeholder="Password"  type="password" name="password" />
                <Button onClick={() => this.handleSubmit()}>LOGIN</Button>
                <br />
                <Button><Link to='/signup'>SIGN UP</Link></Button>

                <Route path='/signup' component={signUp}></Route>

                
            </div>
      )
    }
  }

  export default withAlert(loginForm);*/

export default Login => {
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        if (loginForm.userName !== '' && loginForm.password !== '' ) {
            fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then(result => result.json())
            .then( result => {
                sessionStorage.setItem('token', result.token);
                sessionStorage.setItem('name', result.name);
                sessionStorage.setItem('lastName', result.lastName);
                sessionStorage.setItem('userName', result.userName);
                sessionStorage.setItem('mail', result.mail);
                //sessionStorage.setItem('tweets', result.tweets);
                //sessionStorage.setItem('followers', result.followers);
                //sessionStorage.setItem('following', result.following);
                
                window.location.href = "/";
            });
        } else {
            alert("Por favor ingrese todos los campos.");
        }
    }

    return(
        <div className="login-center">
            <input onChange={handleChange} placeholder="Username" type="text" name="userName" />
            <input onChange={handleChange} placeholder="Password"  type="password" name="password" />
            <Button onClick={handleSubmit}>LOGIN</Button>
            <br />
            <Button><Link to='/signup'>SIGN UP</Link></Button>
            <Route path='/signup' component={signUp}></Route>        
        </div>
    )
}