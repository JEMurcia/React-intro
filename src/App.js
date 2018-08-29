import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        /*const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
                  {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
                  {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];*/
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">TODO React App</h1>
            </header>
            <p className="App-intro">
              Welcome
            </p>
            <TodoList todoList={this.state.items} />
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <input
                    id="new-todo"
                    name="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <p></p>
                <label htmlFor="new-todo-prior">
                    With Prioriry of:
                </label>
                <input
                    id="new-todo-prior"
                    name="priority"
                    onChange={this.handleChange}
                    value={this.state.priority}
                />
                <p></p>
                <button>
                    Add #{this.state.items.length + 1}
                </button>
            </form>
          </div>
        );
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: new Date()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: ''
        }));
    }
}

export default App;
