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
import EditBehaviorMutation from '../mutations/EditBehavior';
import fetchBehavior from '../queries/fetchBehavior';
import fetchBehaviors from '../queries/fetchBehaviors';

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

class EditBehavior extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      definition: '',
      frequency: '',
      id: ''
    }
  }
componentWillMount(){
  if(this.props.data.loading){
    this.sleep(1000).then(() => {
      this.updateState();
    });
  }

}

sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
  updateState() {

    if(this.props.data.behavior){
      const {id,name, frequency, definition} = this.props.data.behavior;
      console.log("data : ",this.props.data)
      console.log("behavior : ",{id,name, frequency, definition})
      this.setState({
        id,
        name,
        definition,
        frequency
      });
    }
  }

  onSubmit(event){
    console.log(this.state.name);
    const self = this;
    event.preventDefault();
    this.props.mutate({
      variables:{
        id: self.state.id,
        name: self.state.name,
        definition: self.props.definition,
        frequency: self.props.frequency
      },
      refetchQueries:[{
        query:fetchBehaviors}]
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
                value={this.state.name}
                onChange={event => this.setState({ name : event.target.value})}
              />

              <TextField
                required
                id="Behavior definition"
                label="Behavior definition"
                multiline
                className={classes.textField}
                margin="normal"
                value={this.state.definition}
                onChange={event => this.setState({ definition : event.target.value})}
              />
              <TextField
                required
                id="Frequency"
                label="Frequency"
                className={classes.textField}
                margin="normal"
                value={this.state.frequency}
                onChange={event => this.setState({ frequency : event.target.value})}
              />

        </form>
        <Button onClick={this.onSubmit.bind(this)} fab color="accent" aria-label="Add">
          Submit
        </Button>
      </div>
    );
    }
}

EditBehavior.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default compose(
  graphql(fetchBehavior, {
  options: (props) => { return { variables: {id: props.params.id}}}
  }),
  graphql(EditBehaviorMutation)
)((withStyles(styles)(EditBehavior)));
