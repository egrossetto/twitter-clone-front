import React, { Component } from 'react'

export default class userCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            owner: {}
        }
    }

    componentDidMount() {
        
        let owner = {};
        owner.user = sessionStorage.getItem('user');
        owner.lastName = sessionStorage.getItem('lastName');
        owner.userName = sessionStorage.getItem('userName');
        
        this.setState({ owner: owner });

    }

  render() {
    return (
      <div>
        @{ this.state.owner.userName }
      </div>
    )
  }
}
