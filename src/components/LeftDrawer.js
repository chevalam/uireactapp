import React, { Component } from 'react';
import List, {ListItem} from 'material-ui/List';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import StarIcon from 'material-ui-icons/Star';
import VerifiedUserIcon from 'material-ui-icons/VerifiedUser';
import PeopleIcon from 'material-ui-icons/People';
import InboxIcon from 'material-ui-icons/Inbox';

class LeftDrawer extends Component {
  render() {
    return (
      <div>
    <List>
        <ListItem
          key={1}
          primaryText="All Users"
          leftIcon={<AccountCircleIcon />}
        />
        <ListItem
          key={2}
          primaryText="Favourites"
          leftIcon={<StarIcon />}
        />
        <ListItem
          key={3}
          primaryText="Administrators"
          leftIcon={<VerifiedUserIcon />}
        />
        <ListItem
          key={4}
          primaryText="Non-Admins"
          leftIcon={<PeopleIcon />}
        />
        <ListItem
          key={5}
          primaryText="Archived"
          leftIcon={<InboxIcon />}
        />
    </List>
    </div>
  )
  }
}
export default LeftDrawer;
