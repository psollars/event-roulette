import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import Card from './Card';

class EventCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEventIndex: 0,
    };
  }

  render() {
    /// map through events and displays them on card format
    const showEvents = this.props.events.map((event, index) => {
      return <Card
                key={event.id}
                event={event}
                active={index + 1}
                length={this.props.events.length}
              />;
    })
    return (
      <div className="EventCards">
          {this.props.events.length > 1 ? <div className="previousEventButton" onClick={this.previousEvent}>&lt;</div> : null}
          {this.props.events.length > 1 ? <div className="nextEventButton" onClick={this.nextEvent}>&gt;</div> : null}
          <SwipeableViews className="swipeable-views" index={this.state.activeEventIndex} onChangeIndex={this.handleChangeIndex}>
            {showEvents}
          </SwipeableViews>
      </div>
    );
  }

  nextEvent = () => {
    if (this.state.activeEventIndex === this.props.events.length - 1) {
      return;
    } else {
      let newIndex = this.state.activeEventIndex + 1;
      this.setState({
        activeEventIndex: newIndex
      })
    }
  }

  previousEvent = () => {
    if (this.state.activeEventIndex === 0) {
      return;
    } else {
      let newIndex = this.state.activeEventIndex - 1;
      this.setState({
        activeEventIndex: newIndex
      })
    }
  }

}

export default EventCards;
