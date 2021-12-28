const Checkbox = ({ value }) => {
    return (
        <div>
            <input type='checkbox' id={value} value={value}></input>
            <label htmlFor={value}>{value}</label>
        </div>
    )
}

export default Checkbox
