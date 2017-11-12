import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { Link } from 'react-router';

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
  }

  render(){
  const { classes } = this.props;
    return (
      <div >
        <Button className={classes.button}>
          <Link to='dashboard'>BACK</Link>
        </Button>

        <form className={classes.container}  noValidate autoComplete="off">

            <TextField
                required
                id="name"
                label="Name"
                className={classes.textField}
                margin="normal"
              />

              <TextField
                required
                id="Behavior definition"
                label="Behavior definition"
                multiline
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="Frequency"
                label="Frequency"
                defaultValue="once a week"
                className={classes.textField}
                margin="normal"
              />

        </form>
        <Button fab color="accent" aria-label="Add">
          <AddIcon />
        </Button>
      </div>
    );
    }
}

AddBehavior.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddBehavior);
