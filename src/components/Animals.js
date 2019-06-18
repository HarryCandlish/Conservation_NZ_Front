import React, { Component } from "react";
import animalStyles from "./animals.module.scss";

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
        <h1 className={animalStyles.title}>Species</h1>
        <ol className={animalStyles.container}>
          {this.state.animals.map(animal => (
            <li className={animalStyles.flexbox} key={animal.id}>
              <h2 className={animalStyles.type}>{animal.type}</h2>
              {/* <p>{animal.description}</p>
              <p>{animal.conservation_status}</p> */}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Animals;
