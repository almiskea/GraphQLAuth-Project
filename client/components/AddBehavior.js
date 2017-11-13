import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { Link, hashHistory } from 'react-router';
import AddToBehavior from '../mutations/AddToBehavior';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:400
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    display: 'block',
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right'
  },
});

class AddBehavior extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      definition: '',
      frequency: ''
    }
  }

  onSubmit(event){
    console.log(this.state.name);
    const self = this;
    event.preventDefault();
    this.props.mutate({
      variables:{
        name: self.state.name,
        definition: self.props.definition,
        frequency: self.props.frequency
      }
    }).then( () => {
      self.setState({
        name: '',
        definition: '',
        frequency: ''
      });
      hashHistory.push('/dashboard');
    })


  }

  render(){
  const { classes } = this.props;
    return (
      <div >
        <Button className={classes.button}>
          <Link to='dashboard'>BACK</Link>
        </Button>

        <form className={classes.container} noValidate autoComplete="off">

            <TextField
                required
                id="name"
                label="Name"
                className={classes.textField}
                margin="normal"
                onChange={event => this.setState({ name : event.target.value})}
              />

              <TextField
                required
                id="Behavior definition"
                label="Behavior definition"
                multiline
                className={classes.textField}
                margin="normal"
                onChange={event => this.setState({ definition : event.target.value})}
              />
              <TextField
                required
                id="Frequency"
                label="Frequency"
                defaultValue="once a week"
                className={classes.textField}
                margin="normal"
                onChange={event => this.setState({ frequency : event.target.value})}
              />

        </form>
        <Button onClick={this.onSubmit.bind(this)} fab color="accent" aria-label="Add">
          <AddIcon />
        </Button>
      </div>
    );
    }
}

AddBehavior.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default compose(
  graphql(AddToBehavior)
)((withStyles(styles)(AddBehavior)));
