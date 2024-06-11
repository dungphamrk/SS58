import axios from 'axios';
import { Student } from "./types";

const API_URL = 'http://localhost:3000/students';

export const getStudents = () => axios.get<Student[]>(API_URL);


export const addStudent = (student: Student) => axios.post<Student>(API_URL, student);

export const updateStudent = (student: Student) => axios.put<Student>(`${API_URL}/${student.id}`, student);

export const deleteStudent = (id: string) => axios.delete(`${API_URL}/${id}`).then(res=>{console.log(1);
});
