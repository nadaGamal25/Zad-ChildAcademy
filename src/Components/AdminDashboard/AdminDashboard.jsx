import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TheFormRegister from '../TheFormRegister/TheFormRegister';
import EditStudentModal from '../EditStudentModal/EditStudentModal';
import Logout from '../LoginAdmin/Logout ';
import { useNavigate } from 'react-router-dom';


export default function AdminDashboard({setToken}) {
  const [search, setSearch]= useState('')
  // console.log(search);
  const [studentData , setStudentData]= useState([]);
  const [visible, setVisible] =useState(10);
  let navigate= useNavigate(); //hoke

  const showMoreStudents =()=>{
    setVisible((prevValue) => prevValue + 10);
  }
  useEffect(() => {
    // Count the number of objects with kinder equal to 'زاد الطفل'
    const zadCount = studentData.filter((obj) => obj.kinder === 'زاد الطفل').length;

    // Count the number of objects with kinder equal to 'قطوف الطفل'
    const qtoufCount = studentData.filter((obj) => obj.kinder === 'قطوف الطفل').length;

    
    document.querySelector('.zad-students').textContent = zadCount;
    document.querySelector('.qtouf-students').textContent = qtoufCount;
  }, [studentData]);

  const removeStudent = async (id) => {
    try {
      const response = await axios.get(
        `https://zadkinder.onrender.com/admin/remove-student/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
        console.log(response.data.msg);
      // Update the studentData state by removing the deleted student
      setStudentData(studentData.filter((student) => student._id !== id));
        // If the student was successfully removed, update the student data
        // getStudentData(10);
      
    } catch (error) {
      console.error(error);
    }
  };
  

  async function getStudentData(){
    try {
     
      const { data } = await axios.get(
        `https://zadkinder.onrender.com/admin/students/0`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(data.data);
      setStudentData(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getStudentData(10);
  }, []);
   
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);
  const handleEditClick = (student) => {
    setEditModalOpen(true);
    setEditedStudent(student);
    console.log("yes")
  }
  function logout(){
    localStorage.removeItem("token");
    setToken(null);
    navigate('/loginAdmin')
  }
  const handleLogout = async () => {
    await fetch("https://zadkinder.onrender.com/admin/login", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    localStorage.removeItem("token");
    setToken(null);
  }
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

  
  return (
    <>
    <div className="p-5">
    <div className="admin-heading">
            <h1>لوحة التحكم</h1>
        </div>
        <div className="row py-5 g-4">
            <div className="col-md-6 col-sm-6 col-lg-4 ">
                <div className="sm-card text-center card1 h-100">
                <i class="fa-solid fa-graduation-cap"></i>
                <h3 className='pb-3'>إجمالى الطلاب</h3>
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
            <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="sm-card bg-bink text-center card2 h-100">
                <i class="fa-solid fa-person-chalkboard"></i>
                <h3 className='pb-3'>إجمالى المعلمات</h3>
                <div className="d-flex pe-3">
                  <h4>زاد الطفل:</h4>
                  <h4 className='zad-teachers pt-1'></h4>    
                </div>
                <div className="d-flex pe-3">
                <h4>قطوف الطفل:</h4>
                <h4 className='qtouf-teachers pt-1'></h4>    
                </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="sm-card bg-orange text-center card3 h-100">
                <i class="fa-solid fa-book-open-reader"></i>
                <h3 className='pb-3'>إجمالى المتطوعات </h3>
                <div className="d-flex pe-3">
                  <h4>زاد الطفل:</h4>
                  <h4 className='zad-volunteers pt-1'></h4>    
                </div>
                <div className="d-flex pe-3">
                <h4>قطوف الطفل:</h4>
                <h4 className='qtouf-volunteers pt-1'></h4>    
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
    </tr>
   </thead>
  <tbody>
  
    {Array.isArray(studentData) && studentData.filter((item)=>{
      return search === ''? item : item.name.includes(search);
    }).slice(0,visible).map((item,index)=>{
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
            <button className="btn more-btn" onClick={showMoreStudents}>عرض المزيد</button>
            </div>

            </div> 
            
    {editModalOpen && <EditStudentModal student={editedStudent} onClose={() => setEditModalOpen(false)} />}
  
    <div className="student-register p-4 my-3 register-container"> 
        <h2><i class="fa-solid ps-2 fa-user"></i>اضافة طالب جديد :</h2>
        <TheFormRegister/>
        </div> 
        <div className="p-4 mt-5 change-pass">
          <h3>تغيير كلمة المرور</h3>
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
      <button className='btn green-btn my-3' type="submit">تغيير كلمة المرور</button>
    </form>

        </div>
         
        {/* <Logout setToken={setToken} /> */}
        <button className="m-5 btn btn-danger text-center" onClick={logout}>
       {/* <i class="fa-solid fa-right-from-bracket"></i> */}
       تسجيل الخروج
    </button>
    </div>
    </>
  )
}
 /*
 

          
  .....
  <div className="col-md-6 col-sm-6 col-lg-3">
                <div className="sm-card bg-green text-center card4 h-100">
                <i class="fa-brands fa-buromobelexperte"></i>
                <h3>إجمالى الفصول</h3>
                <span> % </span>
                </div>
            </div>

        */