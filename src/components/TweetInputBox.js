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
        let tweet = this.state.tweetInputBox || '';
        this.setState({ tweet });
        let res = await this.postData('/api/messages', {text: tweet, userId: 1});
    }

    postData(url = ``, data = {}) {
        // Default options are marked with *
          return fetch(url, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, cors, *same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              credentials: "same-origin", // include, same-origin, *omit
              headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  // "Content-Type": "application/x-www-form-urlencoded",
              },
              redirect: "follow", // manual, *follow, error
              referrer: "no-referrer", // no-referrer, *client
              body: JSON.stringify(data), // body data type must match "Content-Type" header
          })
          .then(response => response.json()); // parses response to JSON
      }

    render() {

        return (
            <div className="tweet-form">
                 <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} maxLength="144" name="tweetInputBox" placeholder="What's on your mind?" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );

    }
}

export default TweetInputBox;

