export default function Todo(props) {
    return (
        <div>
            <div className="todo">
                <div onDoubleClick={props.onDoubleClick}>
                    {props.todo.text}
                </div>

                <button onClick={props.btnRemove} >x</button>
            </div>

        </div>
    )
}
