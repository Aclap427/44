
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';


class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Sign Up</h2>
                    <div className="container">
                        <form onSubmit={this.handleSubmit} >
                            <div>
                                <div>
                                    <div>
                                        <label >Name</label>
                                        <input type="text"  value={this.state.name} name="name" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div >
                                    <div>
                                        <label htmlFor="email" >Email Address</label>
                                        <input type="email"  value={this.state.email} name="email" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label htmlFor="password" >Password</label>
                                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="password" >Confrim Password</label>
                                        <input type="password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div >
                                    <button  disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                  <Link  to='/'>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupForm;