import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import UserCard from './userCard';

class newTweet extends Component {

    constructor(props) {
        super(props);
        this.state = {
          description: '',
          owner: {}
        };
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
          })
    }
  
    handleSubmit() {

      let token = sessionStorage.getItem('token');

      debugger;

      fetch('http://localhost:3000/api/v1/tweets', {
        method: 'POST',
        body: JSON.stringify({
          description: this.state.description,
          owner: this.state.owner
        }),
        headers: {
          'token': token
        }
      })
        .then(result => result.json())
    }

    componentDidMount() {
      let owner = {};
      owner.name = sessionStorage.getItem('name');
      owner.lastName = sessionStorage.getItem('lastName');
      owner.userName = sessionStorage.getItem('userName');

      this.setState({ owner: owner });
    }

  render() {
    return (
      <div className='tweet'>
        <div>
          <UserCard />
        </div>
        <div>
            <input onChange={e => this.handleChange(e)} placeholder="Que estas pensando?"  type="text" name="description" />
            <Button onClick={() => this.handleSubmit()}>Tweet!</Button>
        </div>
      </div>
    )
  }
}

export default newTweet;