import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';

class EventSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      categories: []
    }
  }

  render() {
    return (
      <div className="EventSearch">
        <input type="text" placeholder="location" onChange={this.handleLocation} />
        <div className="categories">
          <div className={ this.state.categories.findIndex(category => {return category === "ARTS_ENTERTAINMENT"}) === -1 ? "category" : "category-active"} id="ARTS_ENTERTAINMENT" onClick={this.handleCatChange}>Arts & Entertainment</div>
          <div className={ this.state.categories.findIndex(category => {return category === "EDUCATION"}) === -1 ? "category" : "category-active"} id="EDUCATION" onClick={this.handleCatChange}>Education</div>
          <div className={ this.state.categories.findIndex(category => {return category === "FITNESS_RECREATION"}) === -1 ? "category" : "category-active"} id="FITNESS_RECREATION" onClick={this.handleCatChange}>Fitness & Recreation</div>
          <div className={ this.state.categories.findIndex(category => {return category === "FOOD_BEVERAGE"}) === -1 ? "category" : "category-active"} id="FOOD_BEVERAGE" onClick={this.handleCatChange}>Food & Beverage</div>
          <div className={ this.state.categories.findIndex(category => {return category === "HOTEL_LODGING"}) === -1 ? "category" : "category-active"} id="HOTEL_LODGING" onClick={this.handleCatChange}>Hotel & Lodging</div>
          <div className={ this.state.categories.findIndex(category => {return category === "MEDICAL_HEALTH"}) === -1 ? "category" : "category-active"} id="MEDICAL_HEALTH" onClick={this.handleCatChange}>Medical & Health</div>
          <div className={ this.state.categories.findIndex(category => {return category === "SHOPPING_RETAIL"}) === -1 ? "category" : "category-active"} id="SHOPPING_RETAIL" onClick={this.handleCatChange}>Shopping & Retail</div>
          <div className={ this.state.categories.findIndex(category => {return category === "TRAVEL_TRANSPORTATION"}) === -1 ? "category" : "category-active"} id="TRAVEL_TRANSPORTATION" onClick={this.handleCatChange}>Travel & Transportation</div>
        </div>
        <button className = "primaryButton" onClick={this.handleSubmit}>Fetch Events</button>
      </div>
    );
  }

  handleLocation = (event) => {
    this.setState({
      location: event.target.value
    })
  };

  handleCatChange = (event) => {
    const clickedCategory = event.target.id;    
    const categoryIndex = this.state.categories.findIndex(category => {
        return category === clickedCategory;
    });
    if (categoryIndex === -1) {
      this.setState(prevState => ({
        categories: [...prevState.categories, clickedCategory]
      }));
    } else {
      const newCategories = this.state.categories;
      newCategories.splice(categoryIndex, 1);
      this.setState(prevState => ({
        categories: newCategories
      }));
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchEvents(
      this.state.location,
      this.state.categories
    );
  };
}

const mapActionsToProps = {
  fetchEvents
};

export default connect(null, mapActionsToProps)(EventSearch);
