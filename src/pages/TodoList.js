import React, { useRef } from 'react';
import useDoubleClick from 'use-double-click';
import EditForm from '../components/EditForm';
// import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

// let obj;

const List = ({ onDouble, obj, removeTodo }) => {
    const buttonRef = useRef()

    useDoubleClick({
        onDoubleClick: (e) => {
            onDouble(obj)
        }, ref: buttonRef
    })

    // return <p ref={buttonRef}>{obj.text}</p>
    return <div>
        <p ref={buttonRef}>
            {obj.text}
        </p>
        <button onClick={removeTodo}>X</button>
    </div>
}

class TodoList extends React.Component {
    state = {
        todos: [
            // { id: 1, text: '' }, { id: 2, text: '' }
        ],
        newValue: '',
        isEdit: false,
        editIndex: {},
        idEdit: {},
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
        const remove = this.state.todos.splice(event, 1)
        this.setState({ remove })
    }

    // onDoubleClick = (event) => {
    //     obj = event.target.outerText
    //     this.setState({
    //         isEdit: !this.state.isEdit
    //     })
    // }

    render() {
        return (
            <div className="todo-list" >
                {this.state.todos.map((todo, index) => (
                    <div key={index}>
                        {/* <Todo
                            todo={todo}
                            key={index}
                            btnRemove={() => this.removeInput(index)}
                            onDoubleClick={this.onDoubleClick}
                        /> */}
                        <List
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

                    onSubmit={() => {
                        console.log(this.state.editIndex, 'edit')
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
                    }}
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
                    />
                }
            </div >
        )
    }
}

export default TodoList;
