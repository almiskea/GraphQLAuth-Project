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
import { LinearProgress } from 'material-ui/Progress';

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

  onSubmit(event){
    const self = this;
    let {name, definition, frequency, id} = this.state;
    event.preventDefault();
    //console.log("Event : ", event)
    console.log("behavior : ",{name, definition, frequency, id});
    this.props.mutate({
      variables:{
        id: id? id : this.props.data.behavior.id,
        name: name? name : this.props.data.behavior.name,
        definition: definition? definition : this.props.data.behavior.definition,
        frequency: frequency? frequency : this.props.data.behavior.frequency
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
    const { loading } = this.props.data;

    if (loading) {
      return (<LinearProgress color="accent" />);
    }
    const {frequency, definition, name } = this.props.data.behavior;
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
                value={this.state.name? this.state.name : name}
                onChange={event => this.setState({ name : event.target.value})}
              />

              <TextField
                required
                id="Behavior definition"
                label="Behavior definition"
                multiline
                className={classes.textField}
                margin="normal"
                value={this.state.definition? this.state.definition : definition }
                onChange={event => this.setState({ definition : event.target.value})}
              />
              <TextField
                required
                id="Frequency"
                label="Frequency"
                className={classes.textField}
                margin="normal"
                value={this.state.frequency? this.state.frequency : frequency }
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
