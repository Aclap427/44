import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import userService from '../utils/userService';
import studentsService from '../services/studentsService';


import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
//import Apple from '../components/Apple/Apple';
import Footer from '../components/Footer/Footer';
import AddStudent from '../components/AddStudent/AddStudent';
import EditStudent from '../components/EditStudent/EditStudent';

import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import StudentPage from '../pages/StudentPage/StudentPage';



class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const students = await studentsService.getAll();
    this.setState({ students });
  }

  handleAddStudent = async newStudentData => {
    const newStudent = await studentsService.create(newStudentData);
    this.setState(state => ({
      students: [...state.students, newStudent]
    }),
      () => this.props.history.push('/'));
  }

  handleDeleteStudent = async id => {
    await studentsService.deleteOne(id);
    this.setState(state => ({
      students: state.students.filter(s => s._id !== id)
    }), () => this.props.history.push('/'));
  };

  handleUpdateStudent = async updatedStudentData => {
    const updatedStudent = await studentsService.update(updatedStudentData);
    const newStudentsArray = this.state.students.map(s =>
      s._id === updatedStudent._id ? updatedStudent : s
    );
    this.setState(
      { students: newStudentsArray },
      () => this.props.history.push('/')
    );
  };


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <>
        <div><Header /></div>
        <header>
          
          <nav>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          </nav>
        </header>
        <Switch>
          <Route exact path='/' render={() => (
            userService.getUser() ?
              <StudentPage students={this.state.students} user={this.state.user} handleDeleteStudent={this.handleDeleteStudent} />
              :
              <Redirect to='/login' />
          )} />
          <Route exact path='/add' render={() => <AddStudent handleAddStudent={this.handleAddStudent} />}
          />
          <Route
            exact
            path='/edit'
            render={({ location }) => (<EditStudent
              handleUpdateStudent={this.handleUpdateStudent}
              location={location}
            />
            )}
          />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
        </Switch>
        <div><Footer /></div>
      </>
    );
  }
}

export default App;

