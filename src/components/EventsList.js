import React, { Component } from "react";

import eventsListStyles from "./eventsList.module.scss";

class EventsList extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch("/api/events")
      .then(res => res.json())
      .then(events => this.setState({ events }, () => console.log("events")));
  }
  render() {
    return (
      <div>
        <h2 className={eventsListStyles.title}>Events</h2>
        <p className={eventsListStyles.epigraph}>
          Statistics help with identifying the problem but don't offer much in
          regards fixing it
        </p>
        <ol className={eventsListStyles.container}>
          {this.state.events.map(event => (
            <li className={eventsListStyles.flexbox}>
              <h2>{event.type}</h2>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default EventsList;
