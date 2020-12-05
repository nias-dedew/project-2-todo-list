import React, { useRef } from 'react';
import useDoubleClick from 'use-double-click';

const Todo = ({ onDouble, obj, removeTodo, onSingle }) => {
    const buttonRef = useRef()

    useDoubleClick({
        onSingleClick: (e) => {
            const confirm = window.confirm("Are you sure want to get done this item?")
            if (confirm) {
                onSingle(obj)
            }
        },
        onDoubleClick: (e) => {
            const confirm = window.confirm("Are you sure want to edit this item?")
            if (confirm) {
                onDouble(obj)
            }
        }, ref: buttonRef
    })

    return <div className="todo">


        <li ref={buttonRef} className="fas fa-check"> {obj.text} </li>

        <button onClick={removeTodo}>X</button>
    </div>
}

export default Todo;