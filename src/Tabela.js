import React, { useState } from 'react';
import StudentForm from './Forms';
import jsonData from './exemplo.json';

function TableData() {
    const [studentData, setStudentData] = useState(jsonData);

    const tableRows = studentData.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.tipo}</td>
                <td>{info.comentario}</td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalStudents = studentData.length;
        data.id = totalStudents + 1;
        const updatedStudentData = [...studentData];
        updatedStudentData.push(data);
        setStudentData(updatedStudentData);
    };

    return (
        <div>
            <table className="table table-stripped">
                <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Tipo</th>
                    <th>Comentario</th>
                </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>

            <br/>
            <StudentForm func={addRows} />
        </div>
    );
}

export default TableData;
