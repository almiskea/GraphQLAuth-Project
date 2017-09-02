import React, { Component } from 'react';
import Inputs from './AuthFormHelper';

class AuthForm extends Component {
  constructor(props){
    super(props);

    this.state = {email: '', password: ''};
  }
  onSubmit(state){


    this.props.onSubmit(state);
  }
  render() {

    return (
      <div className="row">
      <Inputs
      onSubmit={this.onSubmit.bind(this)}
      email={this.state.email}
      password={this.state.password}
      />
        

      </div>
    );
  }
}

export default AuthForm;
