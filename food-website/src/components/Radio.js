const Radio = ({ id, name, value, label }) => {
    return (
        <div>
            <input type='radio' id={id} name={name} value={value}></input>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Radio
