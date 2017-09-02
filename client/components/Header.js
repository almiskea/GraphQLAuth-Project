import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';
import query from '../queries/CurrentUser';
import { Link } from 'react-router';
import mutation from '../mutations/Logout';
import ButtonAppBar from './headerHelper';
import Button from 'material-ui/Button';


class Header extends Component{
  onLogoutClick(){
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons(){
    const { loading , user } = this.props.data;
    if(loading){
      return <div/>;
    }
    if(user){
      return (
              <Button>
                <a onClick={this.onLogoutClick.bind(this)} className="">Logout</a>
              </Button>
      );
    }else{
      return (
        <span>
        <Button color="contrast">

            <Link to="/signup">
            SignUp
            </Link>
            </Button>

<Button color="contrast">
<Link to="/login">
Login
</Link>
        </Button>
        </span>
      );
    }
  }



  render(){
    return (
      <div>
        <ButtonAppBar
        button = {this.renderButtons.bind(this)}
        />
      </div>
    );
  }
}


export default compose(
  graphql(query),
  graphql(mutation)
)(Header);
