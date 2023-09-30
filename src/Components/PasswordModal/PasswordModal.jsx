import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root'); 

const PasswordModal = ({ isOpen, onRequestClose, studentId }) => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://zadkinder.onrender.com/admin/students/${studentId}`, {
        password,
      },{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      });

      window.alert('تم حفظ كلمة المرور بنجاح')
      onRequestClose();
      setPassword('');
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };
  const [visible , setVisible] =useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Change Password"
    >
        <div className="p-5 bg-light" >
      <h3>إضافة كلمة مرور للطالب :</h3>
      <form onSubmit={handleSubmit}>
        <label className='fs-5 my-1'>
           كلمة المرور:
        </label>
        <br/>
        <div className='pass-box'>
        <input className='form-control' 
        type={visible? "text" :"password"}
        value={password} onChange={handleChange}/>
        <span onClick={()=> setVisible(!visible)} className="seenpass">
      {visible?<i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash "></i> }
      </span>
      </div>
<br/>  
        <button className='btn btn-primary m-1' type="submit">حفظ</button>
        <button className='btn btn-danger m-1' type="button" onClick={onRequestClose}>
        إغلاق
        </button>
      </form>
      </div>
    </Modal>
  );
};

export default PasswordModal;
