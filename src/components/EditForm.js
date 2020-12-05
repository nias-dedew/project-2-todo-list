
function EditForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <input className="input" type="text" value={props.value} onChange={props.onChange} />
            <button type="button" className="button-submit change-color" onClick={props.onSubmit}>Edit</button>
        </form>
    );
}

export default EditForm;