import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Student } from './types';
import { getStudents, addStudent, updateStudent, deleteStudent } from './services';
import StudentTable from './StudentTables';
import AddStudentModal from './AddStudentModal';
import EditStudentModal from './EditStudentModal';
import DeleteStudentModal from './DeleteStudentModal';

const StudentManager: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
    console.log(response.data);
    
  };

  const handleAddStudent = async (student: Student) => {
    await addStudent(student);
    fetchStudents();
    setAddModalOpen(false);
  };

  const handleUpdateStudent = async (student: Student) => {
    await updateStudent(student);
    fetchStudents();
    setEditModalOpen(false);
  };

  const handleDeleteStudent = async (id: string) => {
    await deleteStudent(id);
    fetchStudents();
    setDeleteModalOpen(false);
  };

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>Quản lý <b>sinh viên</b></h2>
              </div>
              <div className="col-sm-6">
                <button onClick={() => setAddModalOpen(true)} className="btn btn-success">
                  <i className="material-icons">&#xE147;</i> <span>Thêm mới sinh viên</span>
                </button>
              </div>
            </div>
          </div>
          <StudentTable students={students} onEdit={(student) => { setSelectedStudent(student); setEditModalOpen(true); }} onDelete={(id) => { setSelectedStudent(students.find(student => student.id == id) || null); setDeleteModalOpen(true); }} />
        </div>
      </div>

      {isAddModalOpen && <AddStudentModal onAdd={handleAddStudent} onClose={() => setAddModalOpen(false)} />}
      {isEditModalOpen && selectedStudent && <EditStudentModal student={selectedStudent} onUpdate={handleUpdateStudent} onClose={() => setEditModalOpen(false)} />}
      {isDeleteModalOpen && selectedStudent && <DeleteStudentModal studentId={selectedStudent.id} onDelete={handleDeleteStudent} onClose={() => setDeleteModalOpen(false)} />}
    </div>
  );
};

export default StudentManager;
