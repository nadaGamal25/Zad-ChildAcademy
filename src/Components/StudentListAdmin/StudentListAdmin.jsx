import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import EditStudentModal from '../EditStudentModal/EditStudentModal';
import PasswordModal from '../PasswordModal/PasswordModal';


export default function StudentListAdmin() {
    const [search, setSearch]= useState('')
  // console.log(search);
  const [studentData , setStudentData]= useState([]);
  useEffect(() => {
    const zadCount = studentData.filter((obj) => obj.kinder === 'زاد الطفل').length;

    const qtoufCount = studentData.filter((obj) => obj.kinder === 'قطوف الطفل').length;    
    document.querySelector('.zad-students').textContent = zadCount;
    document.querySelector('.qtouf-students').textContent = qtoufCount;
  }, [studentData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  async function getStudentData(){
    try {
      // const token = localStorage.getItem('token');
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

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);
  const handleEditClick = (student) => {
    setEditModalOpen(true);
    setEditedStudent(student);
    console.log("yes")
  }
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
        <div className="row py-5 g-4">
            <div className="col-md-6 col-sm-6 col-lg-9 m-auto ">
                <div className="sm-card text-center card1 h-100">
                <i class="fa-solid fa-graduation-cap"></i>
                <h3 className='pb-3'>إجمالى الطلاب</h3>
                <div className="d-flex justify-content-around">
                <div className="d-flex pe-3">
                  <h4>زاد الطفل:</h4>
                  <h4 className='zad-students pt-1'></h4>    
                </div>
                <div className="d-flex pe-3">
                <h4>قطوف الطفل:</h4>
                <h4 className='qtouf-students pt-1'></h4>    
                </div>
                </div>
                </div>
            </div>
            </div>
            <div className="students p-4">
          <div className="row g-2">
            <div className="col-md-6">
            <h3><i class="fa-solid fa-user-graduate ps-2"></i>قائمة الطلاب </h3>
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
      <th scope="col">الجنس</th>
      <th scope="col">الجنسية</th>
      <th scope="col">السجل المدنى</th>
      <th scope="col">الروضة</th>
      <th scope="col">وقت الدوام</th>
      <th scope="col">ولى الأمر</th>
      <th scope="col">جوال الأب</th>
      <th scope="col">جوال الأم</th>
      <th scope="col">الحي</th>
      <th scope="col">اشتراك الباص</th>
      <th></th>
      <th></th>
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
      <td>{item.gender}</td>
      <td>{item.nationality}</td>
      <td>{item.cid}</td>
      <td>{item.kinder}</td>
      <td>{item.time}</td>
      <td>{item.fathername}</td>
      <td>{item.fatherno}</td>
      <td>{item.motherno}</td>
      <td>{item.address}</td>
      <td>{item.bus}</td>
      <td>
        <button className="btn more-btn" onClick={() => openModal(item._id)}>كلمة المرور</button>
      </td>
      <td><button className='edit-btn btn btn-primary' onClick={() => handleEditClick(item)}>تعديل الطالب</button></td>
      {/* <td><button className='delete-btn btn btn-danger' onClick={() => removeStudent(item._id)}>مسح الطالب</button></td> */}
      <td><button
            className="btn btn-danger"
            onClick={() => {
              if (window.confirm('هل انت بالتأكيد تريد مسح هذا الطالب ؟')) {
                axios
                  .get(`https://zadkinder.onrender.com/admin/remove-student/${item._id}`, {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                  })
                  .then((response) => {
                    if (response.data.msg === 'ok') {
                      getStudentData();
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }
            }}
          >
            مسح الطالب
          </button></td>
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
            {editModalOpen && <EditStudentModal student={editedStudent} onClose={() => setEditModalOpen(false)} />}

            <PasswordModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        studentId={selectedStudentId}
      />
    </div>  )
}
