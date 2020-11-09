import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Todo = props => (
    <tr>
        <td className={props.todo.completed ? 'completed' : ''}>{props.todo.description}</td>
        <td className={props.todo.completed ? 'completed' : ''}>{props.todo.responsible}</td>
        <td className={props.todo.completed ? 'completed' : ''}>{props.todo.priority}</td>
        <td className={props.todo.completed ? 'completed' : ''}>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)


export class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get("http://192.168.1.14:4000/todo")
            .then(response => {
                this.setState({
                    todos: response.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    componentDidUpdate() {

        this.axiosCancelSource = axios.CancelToken.source()
        //, { cancelToken: this.axiosCancelSource.token }
        axios.get("http://192.168.1.14:4000/todo", { cancelToken: this.axiosCancelSource.token })
            .then(response => {
                this.setState({
                    todos: response.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentWillUnmount() {
        this.axiosCancelSource.cancel('axios unsubscribed')
    }

    todoList() {
        return this.state.todos.map((currentTodo, i) => {
            return <Todo todo={currentTodo} key={i} />
        })
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>
                                Description
                            </th>
                            <th>
                                Responsibility
                            </th>
                            <th>
                                Priority
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.todoList()
                        }
                    </tbody>
                </table>
            </div >
        )
    }
}

export default TodoList
