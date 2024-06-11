import React from 'react';
import { Student } from './types';

interface StudentTableProps {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: string) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({ students, onEdit, onDelete }) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Tên sinh viên</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Lựa chọn</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.address}</td>
            <td>{student.phone}</td>
            <td>
              <a href="#" onClick={() => onEdit(student)} className="edit"><i className="material-icons" title="Edit">&#xE254;</i></a>
              <a href="#" onClick={() => onDelete(student.id)} className="delete"><i className="material-icons" title="Delete">&#xE872;</i></a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
