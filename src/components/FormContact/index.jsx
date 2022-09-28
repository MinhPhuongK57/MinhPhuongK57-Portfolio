import React, { useState } from "react";

function FormContact() {
    const initialState = {
        value: "",
    };

    const [value, setValue] = useState(initialState);

    const handleChange = (e) => {
        setValue({ value: e.target.value });
    };

    const handleSubmit = (e) => {
        alert('Content test: "' + value.value + '" submitted successfully.');
        e.preventDefault();
    };

    return (
        <form className="footer__contact--form">
            <input
                type="text"
                value={value.value}
                onChange={handleChange}
                placeholder=" "
                className="form-input"
            />
            <label className="form-label">Type a massage</label>
            <input
                type="submit"
                className="form-btn"
                value="Submit"
                onClick={handleSubmit}
            ></input>
        </form>
    );
}
export default FormContact;
