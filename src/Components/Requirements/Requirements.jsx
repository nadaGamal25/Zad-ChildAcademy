import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Requirements() {
  return (
    <>
    <div className="container py-5 require">
    <Fade top diatance="20%" duration={1200}>
    <div className="require-heading pt-5 d-flex align-items-center justify-content-center">
                <span className="dot voilet"></span>
                <span className="voilet dot"></span>
                <h1> متطلبات التسجيل </h1>
                <span className="voilet dot"></span>
                <span className="dot voilet"></span>
        </div>
        </Fade>
        <div className='pb-5'>
        <Fade top diatance="20%" duration={1200}>
            <h3>عند الحضور للروضة لأول مرة يرجي إحضار الأوراق الثبوتية التالية لإكمال
عملية التسجيل:</h3>
        </Fade>
            <ul>
            <Fade top duration={1200}>
                <li>
                 <i class="fa-regular fa-square-check"></i> شهادة الميلاد + صورة منها
                </li>
                <li>
                <i class="fa-regular fa-square-check"></i> كرت العائلة + صورة منه
                </li>
                <li>
                <i class="fa-regular fa-square-check"></i> كرت التطعيم + صورة منه
                </li>
                <li>
                <i class="fa-regular fa-square-check"></i> عدد 5 صورة شخصية للطالب
                </li>
                </Fade>
            </ul>
        </div>
    </div>
    </>
  )
}
