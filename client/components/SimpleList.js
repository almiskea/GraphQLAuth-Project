import React, { Component } from 'react';
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
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import { Link } from 'react-router';

const styles = theme => ({
  root: {
    margin:'0 auto',
    width: '100%',
    maxWidth: 3600,
    background: theme.palette.background.paper,
  },
});

class SimpleList extends Component {


  constructor(props){
    super(props);
  }
  ArrayPassed(){
    if(!this.props.List){
      return '';
    }
    return this.props.List.map((item, i) => {
      return (<ListItem button key={i}>
        <ListItemSecondaryAction>
                <Checkbox
                />
              </ListItemSecondaryAction><ListItemSecondaryAction>
                      <Checkbox
                      style={{color:"red"}}
                      />
                    </ListItemSecondaryAction>
        <ListItemText primary={item} />
      </ListItem>);
    })
  }
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>{this.props.title}</ListSubheader>}>
          {this.ArrayPassed()}
        </List>
        <Link to="AddBehavior" >
        <Button fab color="accent" style={{float: "right"}} aria-label="add" className={classes.button}>
          <AddIcon  />
        </Button>
        </Link>
        <br /><br /><br /><br />
      </div>
    );
  }

}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
