import React from "react";
import StudentItem from "../../components/StudentItem.js/StudentItem.js";

function StudentPage(props) {
    return (
        <>
            <div>
                {props.students.map(student => (
                    <StudentItem user={props.user} student={student} key={student._id} name={student.name} grade={student.grade} handleDeleteStudent={props.handleDeleteStudent} />
                ))}
            </div>
        </>
    );
}
export default StudentPage;