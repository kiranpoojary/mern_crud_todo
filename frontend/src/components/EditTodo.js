import React, { Component } from 'react'
import axios from 'axios'

export class EditTodo extends Component {

    constructor(props) {
        super(props)

        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeResponsible = this.onChangeResponsible.bind(this)
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
        this.onChangeCompleted = this.onChangeCompleted.bind(this)
        this.onChangeDelete = this.onChangeDelete.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            description: '',
            responsible: '',
            priority: '',
            completed: false,
            deleteMe: false
        }
    }

    componentDidMount() {
        axios.get("http://192.168.1.14:4000/todo/" + this.props.match.params.id)
            //http://localhost:4000/
            .then(response => {
                this.setState({
                    description: response.data.description,
                    responsible: response.data.responsible,
                    priority: response.data.priority,
                    completed: response.data.completed

                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeResponsible(e) {
        this.setState({
            responsible: e.target.value
        })
    }

    onChangeTodoPriority(e) {
        this.setState({
            priority: e.target.value

        })
    }

    onChangeCompleted(e) {
        this.setState({
            completed: !this.state.completed
        })
    }
    onChangeDelete(e) {
        this.setState({
            deleteMe: !this.state.deleteMe
        })
    }

    onSubmit(e) {
        if (this.state.deleteMe) {
            e.preventDefault()
            axios.post("http://192.168.1.14:4000/todo/delete/" + this.props.match.params.id)
                .then(res => {
                    alert("Todo Deleted")
                    console.log(res.data)
                })
            this.props.history.push('/')

        } else {
            e.preventDefault()
            const obj = {
                description: this.state.description,
                responsible: this.state.responsible,
                priority: this.state.priority,
                completed: this.state.completed
            }
            axios.post("http://192.168.1.14:4000/todo/update/" + this.props.match.params.id, obj)
                .then(res => {
                    alert("Todo Updated")
                    console.log(res.data)
                })
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <h3> Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="form-group">
                        <label>Responsible</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.onChangeResponsible}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOption"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.priority === 'Low'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOption"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.priority === 'Medium'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOption"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.priority === 'High'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox"
                                className="form-check-input"
                                id="completedCheckbox"
                                name="completedCheckbox"
                                onChange={this.onChangeCompleted}
                                checked={this.state.completed}
                                value={this.state.completed}
                            />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br />
                        <div className="form-check">
                            <input type="checkbox"
                                className="form-check-input"
                                id="deleteCheckbox"
                                name="deleteCheckbox"
                                onChange={this.onChangeDelete}
                                value={this.state.deleteMe}
                                checked={this.state.deleteMe}

                            />
                            <label className="form-check-label text-danger" htmlFor="completedCheckbox">
                                Delete this Todo
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" value="Updated" className="btn btn-primary" />
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default EditTodo
