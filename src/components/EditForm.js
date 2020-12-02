
function EditForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <input className="input" type="text" value={props.value} onChange={props.onChange} />
            <button type='submit' className="button-submit change-color">Edit</button>
        </form>
    );
}

export default EditForm;