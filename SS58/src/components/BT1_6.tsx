import axios from 'axios'
import React from 'react'

export default function BT1_6() {
    let newStudent={
            id: 3,
            student_name: "Nguyễn Thị C",
            email: "nguyenthic@example.com",
            address: "789 Đường C, Quận 3, TP. HCM",
            phone: "0903456789",
            status: true,
            created_at: "2024-03-01"
    }
    let updateStudent={
        id: 4,
        student_name: "Nguyễn Thị 444",
        email: "nguyenthic@example.com",
        address: "74449 Đường 4C, Quận 34, TP. HCM",
        phone: "0903456789",
        status: true,
        created_at: "2024-03-01"
    }
    const getAllStudent=()=>{
        axios.get("http://localhost:3000/student")
        .then(res=>{console.log(res);})
        .catch(error=>{console.log(error);
        })
    }
    const getStudentById=(id:number)=>{
        axios.get(`http://localhost:3000/student/${id}`)
        .then(res=>{console.log(res);})
        .catch(error=>{console.log(error);
        })
    }
    const removeById=(id:number)=>{
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(res=>{console.log(res);})
        .catch(error=>{console.log(error);
        })
    }
    const createStudent=(id:number)=>{
        axios.post(`http://localhost:3000/student/}`,newStudent)
        .then(res=>{console.log(res);})
        .catch(error=>{console.log(error);
        })
    }
    const updateStudentById=(id:number)=>{
        axios.put(`http://localhost:3000/student/${id}}`,updateStudent)
        .then(res=>{console.log(res);})
        .catch(error=>{console.log(error);
        })
    }
  return (
    <div>BT1</div>
  )
}
