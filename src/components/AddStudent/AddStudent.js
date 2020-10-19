import React, { Component } from 'react';

class AddStudent extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            grade: '',
        }
    };
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddStudent(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };


    render() {
        return (
            <>

                <br />
                <h2>Add a Student</h2>
                <div className="addContainer">
                    <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Student's Name</label>
                            <input
                                className="form-control"
                                name="name"
                                value={this.state.formData.name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Student's Grade</label>
                            <input
                                className="form-control"
                                name="grade"
                                value={this.state.formData.grade}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="button" disabled={this.state.invalidForm}><img src='https://i.imgur.com/LTcI0PT.png?1' alt="apple" width="35px" /></button>

                    </form>
                </div>
            </>
        );
    }
}
export default AddStudent;