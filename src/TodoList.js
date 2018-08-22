import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todoList
        const listItems = todos.map((Todo) =>
            <li key={Todo.toString()}>
                {Todo.text},{Todo.priority},{Todo.dueDate.toDateString()}
            </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

}