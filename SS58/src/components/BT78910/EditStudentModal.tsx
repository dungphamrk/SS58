import React, { useState } from 'react';
import { Student } from './types';

interface EditStudentModalProps {
  student: Student;
  onUpdate: (student: Student) => void;
  onClose: () => void;
}

const EditStudentModal: React.FC<EditStudentModalProps> = ({ student, onUpdate, onClose }) => {
  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [address, setAddress] = useState(student.address);
  const [phone, setPhone] = useState(student.phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ ...student, name, email, address, phone });
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Sửa thông tin sinh viên</h4>
              <button type="button" className="close" onClick={onClose}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Tên sinh viên</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Địa chỉ</label>
                <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={onClose}>Hủy</button>
              <button type="submit" className="btn btn-info">Lưu</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudentModal;
