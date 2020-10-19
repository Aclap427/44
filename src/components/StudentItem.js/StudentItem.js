import React from 'react';
import { Link } from 'react-router-dom';
import './StudentItem.css';
import studentsService from '../../services/studentsService';

function StudentItem(props) {

    function handleDeleteStudent() {
        studentsService.deleteOne(props.student._id).then(res => props.setChange(!props.change))
    }
    return (
        <div className="container">
            <div className="center">
                <h2>{props.student.name}</h2>
                <p>Grade: {props.student.grade}</p>
                <Link to={{ pathname: '/records', state: { student: props.student } }}>
                    -RECORDS- <br />
                </Link>
                <Link to={{ pathname: '/edit', state: { student: props.student } }}>
                    -EDIT STUDENT- <br />
                </Link>
                <button onClick={handleDeleteStudent}>
                    -DELETE STUDENT-
                </button>
            </div>
        </div>
    );
}

export default StudentItem;  