
const FormField = ({ TYPE, NAME, VALUE, ONCHANGEHANDLER, TEXT }) => {
    return (
        <div className="form-row">
            <label htmlFor={NAME} className="form-label">
                {TEXT || NAME}
            </label>

            <input
                type={TYPE}
                value={VALUE}
                name={NAME}
                onChange={ONCHANGEHANDLER}
                className="form-input"
            />
        </div>
    )
}

export default FormField;