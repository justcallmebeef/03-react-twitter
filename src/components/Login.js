import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            handle: null,
            password: null,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange (e){
        this.setState({
            [e.target.name]: e.target.value
        }) 
        
    }
    onSubmit (e){
        // e.target.value
        e.preventDefault();
        const { handle, password } = this.state

        if(!handle || !password){
            return;
        }

        console.log(handle, password)
        
    }
    render() {
      return (
        <form onSubmit={this.onSubmit} method="post">
            <input name="handle" type="text" onChange={this.onChange} value={this.state.handle}/>
            <input name="password" type="password" onChange={this.onChange} value={this.state.password}/>
            <button type="submit" className="btn">Login</button>
            <pre>{JSON.stringify(this.state,null,2)}</pre>
        </form>
      );
    }
  }
  
  export default Login;
  