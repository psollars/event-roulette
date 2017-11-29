import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDetail from './EventDetail';
import { filterEvents } from '../actions/';

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      string: "",
    }
  }

  render() {
    const renderEvents = this.props.events.map((event) => {
      return <EventDetail key={event.id} event={event}/>;
    });

    return (
      <div className="Events">
        <input type="string" onChange={this.handleString} />
        <button onClick={this.eventFilter}>Filter Results by String</button>
        <br />
        {renderEvents}
        { this.props.events.length <= 0 ?
          <p>Sorry, no events. :(</p> : null
        }
      </div>
    );
  }

  handleString = (event) => {
    this.setState({
      string: event.target.value
    })
  };

  eventFilter = (event) => {
    event.preventDefault();
    this.props.filterEvents(this.state.string);
  };

}

const mapActionsToProps = {
  filterEvents
};

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Events);
