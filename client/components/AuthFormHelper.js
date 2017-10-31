import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input/Input';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

class Inputs extends Component {
    constructor(props){
      super(props);
      console.log("path", props);
      this.state = {email: '', password: ''};
    }

    onSubmit(){
      this.props.onSubmit(this.state);
    }

render() {
  const classes = this.props.classes;
  //console.log("path", this.props);
  return (
    <div className={classes.container}>
      <Input
        placeholder="Email"
        defaultValue={this.state.email}
        className={classes.input}
        onChange={ e => this.setState({ email : e.target.value})}
        inputProps={{
          'aria-label': 'Description',
        }}
      /><br/>
      <Input
        placeholder="Password"
        defaultValue={this.state.password}
        className={classes.input}

        onChange={ e => this.setState({ password : e.target.value})}
        inputProps={{
          'aria-label': 'Description',
        }}
      /><br/>
      <Button onClick={this.onSubmit.bind(this)}  color="primary" className={classes.button}>
        {this.props.path}
      </Button>


    </div>
  );
}
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);
