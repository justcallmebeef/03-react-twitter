import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            handle: null,
            password: null,
        };
        this.onChange = this.onChange.bind(this);

    }


    onChange (e){
        // e.target.value
        
    }
    render() {
      return (
        <form>
            <input type="text" onChange={this.onChange} value={this.state.handle}/>
            <input type="password" onChange={this.onChange} value={this.state.password}/>
            <button type="submit" className="btn">Login</button>

        </form>
      );
    }
  }
  
  export default Login;
  