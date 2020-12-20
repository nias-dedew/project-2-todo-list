export default function TodoForm(props) {
    return (
        <form >
            <input
                type="text"
                className="input"
                value={props.value}
                onChange={props.onChange}
            />
            <button onClick={props.onSubmit} className="button-submit" >Add</button>
            <button
                onClick={props.clearList} className="button-clear">Clear All</button>
        </form>
    )
}