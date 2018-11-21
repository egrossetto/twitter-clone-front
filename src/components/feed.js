import React, { Component } from 'react';
import Tweet from './tweet';
import '../index';
import NewTweet from './newTweet';

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            tweets: []
        }
    }
    
    componentDidMount() {

        let token = sessionStorage.getItem('token');
        
        fetch('http://localhost:3000/api/v1/tweets', {
            method: 'GET',
            headers: {
                'token': token
            }   
        })
        .then(result => result.json())
        .then(tweets => {
            console.log(tweets);
            console.log('tweets');
            this.setState({ tweets: tweets})
        });
    }

    render() {

        let tweets = this.state.tweets.map(tweet => {
            return <Tweet userName={tweet.owner.userName} description={tweet.description} />
        })
        
        return(
            <div className="row">
                <div className="column left">
                    <NewTweet />
                </div>
                <div className="column right">
                    {tweets}
                </div>
            </div>
        )
    }
}

export default Feed;