import React from 'react'

export default function AdminDashboard() {
  return (
    <>
    <div className="p-5">
        <div className="admin-heading">
            <h1>لوحة التحكم</h1>
        </div>
        <div className="row py-5 g-4">
            <div className="col-md-3 col-sm-6 ">
                <div className="sm-card text-center card1">
                <i class="fa-solid fa-graduation-cap"></i>
                <h3>إجمالى الطلاب</h3>
                <span> % </span>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="sm-card bg-bink text-center card2">
                <i class="fa-solid fa-person-chalkboard"></i>
                <h3>إجمالى المعلمين</h3>
                <span> % </span>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="sm-card bg-orange text-center card3">
                <i class="fa-solid fa-book-open-reader"></i>
                <h3>إجمالى المواد الدراسية</h3>
                <span> % </span>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="sm-card bg-green text-center card4">
                <i class="fa-brands fa-buromobelexperte"></i>
                <h3>إجمالى الفصول</h3>
                <span> % </span>
                </div>
            </div>
            </div> 
        <div className="students p-4">
            <h3><i class="fa-solid fa-user-graduate ps-2"></i>قائمة الطلاب </h3>
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
      <th scope="col">الفئة العمرية</th>
      <th scope="col">جوال الأب</th>
      <th scope="col">جوال الأم</th>
      <th scope="col">الحي</th>
      <th scope="col">اشتراك الباص</th>
    </tr>
   </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>

            </div>    
    </div>
    </>
  )
}
