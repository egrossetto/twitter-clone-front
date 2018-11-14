import React, { Component } from 'react';
import '../index';
import MaterialIcon from 'material-icons-react';

class Tweet extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            createdOn: '',
            owner: ''
        }
    }

    render(){

        return (
            <div class="tweet">
                <div class="tweet-container">
                    <h4 class="tweet-container-h4">@{this.props.userName}</h4>
                    <p class="tweet-container-p">{this.props.description}</p>
                </div>
                <div class="tweet-footer">
                    <MaterialIcon class="tweet-buttons-i" icon="comment" />
                    <MaterialIcon class="tweet-buttons-i" icon="sync" />
                    <MaterialIcon class="tweet-buttons-i" icon="favorite" />
                </div>
            </div>
        )
    }
}

export default Tweet;