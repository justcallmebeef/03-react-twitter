## Start
* `npx create-react-app react-twitter-tutorial`
* `cd react-twitter-tutorial`
* `atom .` (or open in your text editor of choice)
* In package.json, add `"proxy": "http://localhost:8080",` above dependencies
* Copy MessageList.css into the new project folder
* Add `"server": "nodemon server.js",` to the scripts
* Change `"start"` to `"client"`
* Start the React app `yarn run client`
* Wait for browser (should see react stuff)
* Open a new terminal tab and start the server: `yarn run server`
* Open src/App.js
* Remove `import logo from '. /logo.svg';`
* Remove everything inside the outermost `<div>`
* Add a heading: `<h1>React Twitter</h1>`

## Make your first class component: MessageList
* Add a `<MessageList />` component inside the `<div>`
* Import the `<MessageList />` component: `import MessageList from './MessageList;'`
* Create a new file called MessageList.js
* Import React: `import React, { Component } from 'react';`
* Export the component: `export default MessageList;`
* Add a MessageList class in between the import and export: `class MessageList extends Component {}`
* Inside the curly braces, add a render method: `render() {}`
* Inside those curly braces, return a `<div>`: `return (<div></div>)`
* Give the `<div` a className matching the component's name: `className="MessageList"`
* Make a `<p>` element with some dummy text
* Check the browser (should see p)

## Make an API call and set state
* Return to App.js
* Add a state object above the render method: `state = {};`
* Add messages property to state with a value of an empty array: `messages: []`
* Under state, add a componentDidMount method: `componentDidMount() {}`
* In the code block of that method, add a fetch: `fetch()`
* Pass in the URL for the representatives API call as a string: `'/api/hello'`
* Chaining onto `fetch()`, handle the response with `.then()` and convert the streamed response to JSON: `.then(stream => stream.json())`
* Chaining again, add another `.then()` and inside that, pass the res as an argument and console log it: `.then(res => console.log(res));`
* Check the browser console. What do you see?
* Change `/api/helloworld` to `/api/messages`
* What do you see in the browser now?
* Set state. Replace the `console.log()` with: `this.setState({})`
* Add messages and pass in the response: `messages: res.messages`
* Check your work. Add another argument inside `this.setState()`, after the object: a `=>` function in which you `console.log()` this.state.
* Check the browser console. You should now see the updated state.
* Pass the messages into the MessageList component as a prop: `messages={this.state.messages}`

## Make a functional component: Message
* In MessageList.js, inside the render method, destructure the messages from props: `const { messages } = this.props;`
* Delete the `<p>`
* Map over the messages, returning a `<Message />` component for each iteration: `{messages.map(message => <Message />)}`
* Pass the message into the `<Message />` component as a prop: `message={message}`
* Add a functional component called Message above the class component: `const Message = () => {}`
* Inside the functional component, return some JSX: `return (<div></div>)`
* Destructure message from props as an argument for the function
* Add a `<p>` inside the `<div>` and pass in the message `text`: `<p>{message.text}</p>`
* Check the browser. Check the console. What's wrong?
* Give the `<Message />` a key of `messages_id`: `key={message.messages_id}`
* Add the user's handle above the message text (include @): `<p>@{message.handle}</p>`
* Add stars. Start with a `<p>`
* Import font-awesome at the top: `import 'font-awesome/css/font-awesome.min.css';`
* Inside the new `<p>`, add a font-awesome star icon: `<i className="fa fa-star">`
* Next to that, add the number of stars from the message (and leave a space): ` {message.star_count}`
* Add the timestamp. At the top fo the Message function, create a new Date out of the timestamp: `const timestamp = new Date(message.timestamp);`
* Add another `<p>` below the star count
* Inside the `<p>` pass in the timestamp object, and format it with `.toDateString()`: `{timestamp.toDateString()}`
* Add styling. Give the `<div>` inside the functional component a class: `className="Message"`
* :import 'MessageList.css';

## Add user input
* In App.js, add `<MessageInput />` above the `<MessageList />`
* Above the App class, add a new functional component called MessageInput
* Give it an `<input>` with a type of text and a placeholder of Submit: `<input type="text" placeholder="Message"></input>`
* Give it a `<button>` and pass in Submit: `<button>Submit</button>`
* Pass a handler into input using `onChange`: `onChange={handleInput}`
* Pass `handleInput` into the component as a destructured prop: `{ handleInput }`
* Create the `handleInput` method inside App above `render()`: `handleInput = () => {}`
* Pass in target as a destructured argument: `{ target }`
* `Console.log()` target.value
* At the instantiation of the <MessageInput />, pass in the handler as a prop: `handleInput={this.handleInput}`
* Check the browser and console for your input.
* Update state. Add newMessageText as an empty string: `newMessageText: ''`
* Remove the `console.log()` in handleInput, and set state instead: `this.setState({ newMessageText: target.value });`
* Pass newMessageText into the `<MessageInput />`: `newMessageText={this.state.newMessageText}`
* Receive it in the functional component as a prop
* Pass it into the `<input>` as value: `value={newMessageText}`
* Submit the message. Add a onClick prop to the `<button />` with a value of submitMessage: `onClick={submitMessage}`
* Add it to the props at the top of the component
* Pass it into the component at instantiation: `submitMessage={this.submitMessage}`
* Create it: `submitMessage = () => {}`
* Inside, create a new messages variable from state: `const messages = this.state.messages;`
* Create a newMessage object: `const newMessage = {}`
* Give it the following properties:
```
messages_id: messages.length + 1,
handle: '[YOUR HARD CODED HANDLE]',
text: this.state.newMessageText,
stars: 0,
timestamp: Date.now()
```
* Add it to the messages array: `messages.unshift(newMessage);`
* Update state with the new array and clear the newMessageText: `this.setState({ messages: messages, newMessageText: '' });`
* Try adding a message
