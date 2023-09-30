import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PasswordModal from '../PasswordModal/PasswordModal';
import jwtDecode from 'jwt-decode';


export default function ChangePassAdmin() {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('https://zadkinder.onrender.com/admin/change-password', {
          email,
          password: oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
  
        console.log(response.data);
        window.alert('تم تغيير كلمة المرور بنجاح')
      } catch (error) {
        console.error(error);
        window.alert(error.response.data.msg)
      }
    };
    const [visible1 , setVisible1] =useState(false);
    const [visible2 , setVisible2] =useState(false);
  
    const [studentData , setStudentData]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [search, setSearch]= useState('')
  
    async function getStudentData(){
      try {
        const response = await axios.get(`https://zadkinder.onrender.com/admin/students`, {
          params: { page: currentPage, limit: 20 },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
  
        setStudentData(response.data.data);
        console.log(response.data.data)
        setCurrentPage(response.data.pagination.currentPage);
        setNumberOfPages(response.data.pagination.numberOfPages);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
     
    }
    useEffect(() => {
      getStudentData();
    }, [currentPage]);
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < numberOfPages) {
        setCurrentPage(currentPage + 1);
      }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const openModal = (studentId) => {
    setSelectedStudentId(studentId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudentId(null);
  };
  
  return (
    <div className="p-5">
    <div className="p-4 change-pass">
    <h3>تغيير كلمة المرور للأدمن :</h3>
    <form onSubmit={handleSubmit}>
<div>
  <label htmlFor="email">البريد الإلكتروني:</label>
  <input className='form-control'
    type="email"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)} required
  />
</div>
<div>
  <label htmlFor="oldPassword">كلمة المرور الحالية:</label>
  <div className='pass-box'>
  <input className='form-control'
    type={visible1? "text" :"password"}
    id="oldPassword"
    value={oldPassword}
    onChange={(e) => setOldPassword(e.target.value)} required
  />
  <span onClick={()=> setVisible1(!visible1)} className="seenpass">
{visible1?<i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash "></i> }
</span>
  </div>
</div>
<div>
  <label htmlFor="newPassword">كلمة المرور الجديدة:</label>
  <div className='pass-box'>
  <input className='form-control'
    type={visible2? "text" :"password"}
    id="newPassword"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)} required
  />
  <span onClick={()=> setVisible2(!visible2)} className="seenpass">
{visible2?<i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash "></i> }
</span>
  </div>
</div>
<button className='btn btn-success my-3' type="submit">تغيير كلمة المرور</button>
</form>

  </div>
  <div className="students p-4 mt-5">
          <div className="row g-2">
            <div className="col-md-6">
            <h4>كلمة مرور الطالب: </h4>
            </div>
            <div className="col-md-6">
              <div class="search-input d-flex align-items-center">
              <button class="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input name="search" id="searchInput" onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="بحث بالأسم.."/>
                
                </div>
          </div>
          </div>
            <div className="student-table py-3">
            <table class="table bg-white">
   <thead>
    <tr>
      <th scope="col"><i class="fa-solid fa-clipboard-user"></i></th>
      <th scope="col">الإسم</th>
      <th scope="col">ولى الأمر</th>     
      <th scope="col">السجل المدنى</th>
      <th scope="col">activated </th>      
      <th></th>
    </tr>
   </thead>
  <tbody>
  
    {Array.isArray(studentData) && studentData.filter((item)=>{
      return search === ''? item : item.name.includes(search);
    }).map((item,index)=>{
      return(
        <tr key={index}>
      <th scope="row">{index +1}</th>
      <td>{item.name}</td>
      <td>{item.fathername}</td>
      <td>{item.cid}</td>
      {item.activated?(<td>true</td>):(<td> false </td>)}
          
      <td>
        <button className="btn more-btn" onClick={() => openModal(item._id)}>وضع كلمة مرور </button>
      </td>
      
    </tr>
      )
    })}
    
    
  </tbody>
            </table>
            {/* <button className="btn more-btn" onClick={showMoreStudents}>عرض المزيد</button> */}
            <div>
        <button className="btn more-btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
          الصفحة السابقة 
        </button>
        <span className='px-1'>
          Page {currentPage} of {numberOfPages}
        </span>
        <button className="btn more-btn" onClick={handleNextPage} disabled={currentPage === numberOfPages}>
          الصفحة التالية 
        </button>
      </div>
            </div>

            </div>

            <PasswordModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        studentId={selectedStudentId}
      />
  </div>
   
  )
}
