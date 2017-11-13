import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItemSecondaryAction,ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import ListSubheader from 'material-ui/List/ListSubheader';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import { Link } from 'react-router';
import fetchBehaviors from '../queries/fetchBehaviors';
import DeleteBehavior from '../mutations/DeleteBehavior';

const styles = theme => ({
  root: {
    margin:'0 auto',
    width: '100%',
    maxWidth: 3600,
    background: theme.palette.background.paper,
  },
});

class Behaviors extends Component {


  constructor(props){
    super(props);
  }

  deleteBehavior(id){
    console.log(id);
    const self = this;
    this.props.mutate({
      variables:{
        id: id
      },
      refetchQueries:[{
        query:fetchBehaviors}]
    });
  }

  behaviors(){
    const { classes } = this.props;
    if(this.props.data.behaviors)
    return this.props.data.behaviors.map((item, i) => {
      return (<ListItem button key={i}>
              <ListItemSecondaryAction>
                      <Checkbox
                      style={{color:"red"}}
                      />

                    </ListItemSecondaryAction>
                    <Button   onClick={event => this.deleteBehavior(item.id)} >
                      <DeleteIcon/>
                    </Button>
        <ListItemText primary={item.name} />

      </ListItem>);
    })
  }
  render(){
    console.log("data : ",this.props.data);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>{this.props.title}</ListSubheader>}>
          {this.behaviors()}
          <Link to="AddBehavior" >
          <Button fab color="accent" style={{float: "right"}} aria-label="add" className={classes.button}>
            <AddIcon  />
          </Button>
          </Link>
        </List>
      </div>
    );
  }

}

Behaviors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  graphql(fetchBehaviors),
  graphql(DeleteBehavior)
)((withStyles(styles)(Behaviors)));
