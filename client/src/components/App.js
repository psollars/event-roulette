import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventSearch from './EventSearch';
import Events from './Events';



class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.initialSearch ? 
          <EventSearch /> :
          <Events />
        }
            
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialSearch: state.initialSearch
  };
}

export default connect(mapStateToProps)(App);
