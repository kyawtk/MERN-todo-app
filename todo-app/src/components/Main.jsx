import React, { Component, useEffect } from "react";
import Input from "./Input";
import TodoItem from "./Todoitem";
import axios from "axios";
const url = "http://localhost:5000/todos";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount = () => {
    axios.get(url).then((res) => {
      this.setState({ todos: res.data.data });
    });
  };

  addtodo = (tododata) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(url, tododata, config)
      .then((res) => {
        console.log(res.data.data);
        const newtodo = [res.data.data, ...this.state.todos];
        this.setState({ todos: newtodo });
      })
      .catch((err) => console.log(err));
  };
  handledelete = (id) => {
    axios.delete(`${url}/${id}`).then((res) => {
      console.log(res);
    });
    let deletedtodo = this.state.todos.filter((todo) => {
      return todo._id !== id;
    });
    this.setState({ todos: deletedtodo });
  };

  render() {
    const list = this.state.todos ? (
      this.state.todos.map((todoobj) => {
        return (
          <TodoItem
            passtodo={todoobj}
            date={new Date()}
            key={todoobj._id}
            deltodo={this.handledelete}
          />
        );
      })
    ) : (
      <h1>Yay, you have nothing to do for now.</h1>
    );
    return (
      <div className="container">
        <Input passfun={this.addtodo}></Input>
        <div className="todoswrapper">{list}</div>
      </div>
    );
  }
}

export default Main;
