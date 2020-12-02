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
        </form>
    )
}