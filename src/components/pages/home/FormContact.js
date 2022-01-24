import React, { Component } from 'react'

class FormContact extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Content: "' + this.state.value + '" submitted successfully.');
    console.log("Content: " + this.state.value);
    event.preventDefault();
  }
  
  render(){
    return (
        <form className="footer__contact--form" onSubmit={this.handleSubmit}>
            <input type ="text" value={this.state.value} onChange={this.handleChange} 
            placeholder=" " 
            className="form-input"
            />
            <label className = "form-label">Type a massage</label>
            <input type="submit" className="form-btn" value="Submit" onClick={this.handleSubmit}></input>
        </form>   
    )
  }
}
export default FormContact;
