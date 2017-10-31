import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import { graphql, compose  } from 'react-apollo';
import query from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

class LoginForm extends Component {
  constructor(props){
    super(props);
    console.log("path", props);
    this.state = { errors : []}
  }
  componentWillUpdate(nextProps){
    if(!this.props.data.user && nextProps.data.user){
      hashHistory.push('/dashboard');
    }
  }
  onSubmit({email , password}){
    const self = this;
    this.props.mutate({
      variables: {email , password},
      refetchQueries: [{query}]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      self.setState({errors})
    } )
  }
  render() {
    return (
      <div>
        <AuthForm
          path={this.props.route.path}
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
          />
      </div>
    );
  }
}

export default compose(
  graphql(query),
  graphql(mutation)
)(LoginForm);
