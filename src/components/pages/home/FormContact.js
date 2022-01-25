import React, { useState } from "react";

function FormContact() {
  const initialState = {
    value: "",
  };

  const [valueKen, setTodo] = useState(initialState);

  const handleChange = (e) => {
    setTodo({ value: e.target.value });
  };

  const handleSubmit = (e) => {
    alert('Content: "' + valueKen.value + '" submitted successfully.');
    e.preventDefault();
  };

  return (
    <form className="footer__contact--form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={valueKen.value}
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
