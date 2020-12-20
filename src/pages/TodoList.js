import React from 'react';
import EditForm from '../components/EditForm';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

class TodoList extends React.Component {
    state = {
        todos: [],
        newValue: '',
        isEdit: false,
        editIndex: {},
        idEdit: {},
        completed: false,
    };

    setTodos = (todos) => this.setState({
        todos
    });

    addTodo = (text) => {
        const newTodos = this.state.todos.concat({ text });
        this.setTodos(newTodos);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.newValue) return;
        this.addTodo(this.state.newValue);
        this.setState({
            newValue: "",
        });
    };

    removeInput = (event) => {
        const confirm = window.confirm("Are you sure want to delete this item?")
        if (confirm) {
            const remove = this.state.todos.splice(event, 1)
            this.setState({ remove })
        }

    }

    onSubmit = (e) => {
        const newData = this.state.todos.map((val, index) => {
            if (index === this.state.idEdit) {
                return this.state.editIndex
            }
            return val
        })
        this.setState({
            todos: newData,
            newValue: '',
            isEdit: false
        })
    }

    clearList = (e) => {
        const confirm = window.confirm("Are you sure want to clear all this item?")
        if (confirm) {
            this.setState({
                todos: []
            })
        }

    }

    render() {
        return (
            <div className="todo-list" >

                {this.state.todos.map((todo, index) => (
                    <div key={index}>
                        <Todo
                            onDouble={(data) => {
                                this.setState({
                                    editIndex: data,
                                    isEdit: !this.state.isEdit,
                                    idEdit: index,
                                })
                            }}
                            obj={todo}
                            removeTodo={() => this.removeInput(index)}
                        />
                    </div>

                ))
                }

                {this.state.isEdit ? <EditForm
                    onSubmit={this.onSubmit}
                    value={this.state.editIndex.text}

                    onChange={(e) => {
                        this.setState({
                            editIndex: {
                                ...this.state.editIndex,
                                text: e.target.value
                            }
                        })
                    }}
                /> :
                    < TodoForm
                        value={this.state.newValue}
                        onSubmit={this.handleSubmit}
                        onChange={(e) => this.setState({
                            newValue: e.target.value,
                        })
                        }
                        clearList={this.clearList}
                    />
                }

            </div >
        )
    }
}

export default TodoList;
