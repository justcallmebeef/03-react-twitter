import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userApi from '../../api/userApi';
import * as loginActions from '../../actions/loginActions';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      handle: 'johndoe',
      password: 'password',
      error: null,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const { handle, password } = this.state
    if (!handle || !password) { return; }

    userApi.login(handle, password).then((data) => {
      if (data.error) {
        this.setState({
          error: data.error
        });
        return false;
      }

      this.props.loginActions.setUser(data.data);
      this.props.history.push('/');
    });

  }


  render() {
    return (
      <form onSubmit={this.onSubmit} method="post" className="login">
        {this.state.error && <div className="form-error">{this.state.error}</div>}
        <div className="form-field">
          <label htmlFor="handle" className="form-label">Username</label>
          <input type="text" id="handle" className="form-input" onChange={this.onChange} value={this.state.handle} />
        </div>
        <div className="form-field">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-input" onChange={this.onChange} value={this.state.password} />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    app: state.app,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
