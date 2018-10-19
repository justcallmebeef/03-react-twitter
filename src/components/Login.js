import React from 'react';
import {Redirect} from 'react-router';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            handle: '',
            password: '',
            error: null,
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
        e.preventDefault();
        const { handle, password } = this.state

        if(!handle || !password){
            return;
        }
        

        fetch('/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({handle, password})
        })
        .then(response => response.json())
        .then(response => {
            if(response.error){
                this.setState({
                    error: response.error,
                    password: '',
                })
            }
            else{
                const user = response.data
                alert(`${user.name}'s email is ${user.email}`)
                this.props.history.push('/account')

            }
        })
        .catch(response => {
            this.setState({error: response.error || 'Oops!'})
        })
        
    }
    render() {
      return (
        <form onSubmit={this.onSubmit} method="post">
            {this.state.error && <div className="form-error">{this.state.error}</div>}
            <div className="form-field">
                <input name="handle" type="text" onChange={this.onChange} value={this.state.handle}/>
            </div>
            <div className="form-field">
                <input name="password" type="password" onChange={this.onChange} value={this.state.password}/>
            </div>
            <button type="submit" className="btn">Login</button>
        </form>
      );
    }
  }
  
  export default Login;
  