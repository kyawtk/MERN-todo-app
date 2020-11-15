import React, { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "", day: "Monday"};
  }
  handletodochange = (event) => {
    this.setState({ todo: event.target.value });
  };
  handledaychange = (event) => {
    this.setState({ day: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  
    this.props.passfun(this.state);
    this.setState({
      todo:'',day:'Monday',
    })
  };
  render() {
    return (
      <div className="inputwrapper">
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="todo">
            <label htmlFor="todo">To do</label>
            <input
              type="text"
              id="todo"
              required
              autoComplete="off"
              value={this.state.todo}
              onChange={this.handletodochange}
            />
          </div>
          <div className="day">
            <label htmlFor="day">Day</label>
            <select
              name="day"
              id="day"
              value={this.state.day}
              onChange={this.handledaychange}
            >
              <option value="Monday">Mon</option>
              <option value="Tuesday">Tue</option>
              <option value="Wednesday">Wed</option>
              <option value="Thursday">Thr</option>
              <option value="Friday">Fri</option>
              <option value="Saturday">Sat</option>
              <option value="Sunday">Sun</option>
            </select>
          </div>
          <button type="submit">Add +</button>
        </form>
      </div>
    );
  }
}

export default Input;
