import React from 'react'
import child from '../../assets/child.png'

export default function Account() {
  return (
    <>
    <div className="account container">
        <div className="row py-5">
            <div className="col-md-4">
                <div className="hello bink">
                    <h2>مرحبا بك فى <span>أكاديمية زاد الطفل</span></h2>
                </div>
            </div>
            <div className="col-md-8">
                <div className="quote d-flex light-green">
                    <h4>
                     العلم هو النبراس الذي ينير لنا طرق الحياة، فلولاه لظللنا نتخبط في الظلام، وهو أساس كل شيء، به تكمن البدايات وتُنار الدروب
                .</h4>
                <img src={child} alt="child" />
                </div>
            </div>
        </div>
        <div className="student-data p-4 mb-3">
            <h2>بيانات الطالب :</h2>
            <div className="data">
                <h3>الإسم : </h3>
                <h4>محمد عبد الناصر احمد</h4>
            </div>
            <div className="data">
                <h3>الجنس : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>الجنسية : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>رقم السجل المدني : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>الروضة : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>وقت دوام الطالب : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>اسم ولي الأمر : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>الفئة العمرية : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>رقم جوال الأب : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>رقم جوال الأم : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>الحي : </h3>
                <h4></h4>
            </div>
            <div className="data">
                <h3>الإشتراك في الباص : </h3>
                <h4></h4>
            </div>

        </div>
    </div>
    </>
  )
}
