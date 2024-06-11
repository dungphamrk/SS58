import React from 'react';

interface DeleteStudentModalProps {
  studentId: string;
  onDelete: (id: string) => void;
  onClose: () => void;
}

const DeleteStudentModal: React.FC<DeleteStudentModalProps> = ({ studentId, onDelete, onClose }) => {
  const handleDelete = () => {
    onDelete(studentId);
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Xóa sinh viên</h4>
            <button type="button" className="close" onClick={onClose}>&times;</button>
          </div>
          <div className="modal-body">
            <p>Bạn chắc chắn muốn xóa sinh viên này?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={onClose}>Hủy</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Xóa</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudentModal;
