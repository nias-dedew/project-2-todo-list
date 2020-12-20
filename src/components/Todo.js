import React, { useRef } from 'react';
import useDoubleClick from 'use-double-click';

const Todo = ({ onDouble, obj, removeTodo }) => {
    const buttonRef = useRef()
    useDoubleClick({
        onDoubleClick: (e) => {
            const confirm = window.confirm("Are you sure want to edit this item?")
            if (confirm) {
                onDouble(obj)
            }
        }, ref: buttonRef
    })

    return <div className="todo">

        <input type="checkbox" /><p ref={buttonRef}>{obj.text}</p >

        <button onClick={removeTodo}>X</button>
    </div >
}

export default Todo;