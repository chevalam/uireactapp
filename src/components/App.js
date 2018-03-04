import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import LeftDrawer from './LeftDrawer'
import HorizantalToolbar from './HorizantalToolbar'
import {blue500, orange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import {Toolbar,ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ChromeReaderMode from 'material-ui-icons/ChromeReaderMode';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class App extends Component {
  state = {
    contacts: [    {
        "name": "Susy Cuningham",
        "email": "suzy.cuningham@gmail.com",
        "lastLogin": "2017-12-10T00:00:00+00:00"
    },{
        "name": "Bobby Daniels",
        "email": "bobbyD@outlook.com",
        "lastLogin": "2017-11-10T00:00:00+00:00"
    },{
        "name": "John Walker",
        "email": "johnnyWalker@blue.com",
        "lastLogin": "2017-06-10T00:00:00+01:00"
    },{
        "name": "Eddy Stevens",
        "email": "eStevens@yahoo.com",
        "lastLogin": "2016-01-10T00:00:00+00:00"
    },{
        "name": "Jan Williams",
        "email": "jDubz@msn.com",
        "lastLogin": "2015-12-31T00:00:00+00:00"
    }]
  }

  render() {
    return (
      <div className="root">
      <Route exact path='/' render={() => (
      <div>
      <div>
      <AppBar title="Product Name" style={{backgroundColor: blue500}}>
      <IconButton >
          <ChromeReaderMode color="white"/>
      </IconButton>
      </AppBar>
      </div>

      <div className="appFrame">
          <div className="toolBarHeader">
              <Toolbar style={{backgroundColor: "white",borderBottom:"1px"}}>
              <ToolbarTitle text="Users"> </ToolbarTitle>
              </Toolbar>
              <LeftDrawer/>
          </div>

        <div className="content">
          <Toolbar style={{backgroundColor: "white",borderBottom:"1px"}}>
          <ToolbarTitle text="All Users"> </ToolbarTitle>
            <HorizantalToolbar />
          </Toolbar>
          <ListContacts
              contacts={this.state.contacts}
            />
            <div className="button" >
            <FloatingActionButton iconStyle={{backgroundColor: orange500}}>
              <ContentAdd />
            </FloatingActionButton>
            </div>
        </div>
        </div>
        </div>
        )}/>
      </div>
    )
  }
}


export default App;
