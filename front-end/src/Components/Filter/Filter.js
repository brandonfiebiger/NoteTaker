import React, { Component } from 'react';
import './Filter.css';


export class Filter extends Component {
  constructor(props) {
    super();

    this.state = {
      date: "",
      tag: "",
      filtered: false
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { date, tag } = this.state;
    this.props.filterNotes([{propertyName: 'date', value: date}, {propertyName: 'tag', value: tag}]);
    this.setState({filtered: true})
  }

  handleShowAll = () => {
    this.setState({filtered: false});
    this.props.showAllNotes();
    document.querySelector('.Filter').reset();
  }


  render() {
    return (
      <form onSubmit={ this.handleSubmit } className="Filter">
        <span>Filter by date:</span>
        <input type="date" name="date" onChange={ this.handleChange } />
        <span>and/or tag:</span>
        <span className="select-container">
          <select name="tag" onChange={ this.handleChange }>
          <option></option>
          <option>Work</option>
          <option>Hobby</option>
          <option>Personal</option>
        </select>
        </span>
        <button>Filter Notes</button>
        {this.state.filtered ? <button onClick={this.handleShowAll}>Show All</button> : ''}
      </form>
    )
  }
}