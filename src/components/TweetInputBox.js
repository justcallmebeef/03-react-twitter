import React, { Component } from 'react';

class TweetInputBox extends Component {
    constructor() {
        super();

        this.state = {
            tweet: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.currentTarget.name] :e.currentTarget.value });
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        this.setState({ tweet: this.state.value });
        // HTTP POST TO API: tweet
    }

    render() {

        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} maxLength="144" name="tweetInputBox" placeholder="What's on your mind?" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );

    }
}

export default TweetInputBox;

