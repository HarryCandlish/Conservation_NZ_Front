import React, { Component } from "react";
import "./animals.css";

class Animals extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    };
  }

  componentDidMount() {
    fetch("/api/animals")
      .then(res => res.json())
      .then(animals =>
        this.setState({ animals }, () => console.log("animals"))
      );
  }

  render() {
    return (
      <div>
        <h1>Animals</h1>
        <ul>
          {this.state.animals.map(animal => (
            <li key={animal.id}>{animal.type}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Animals;
