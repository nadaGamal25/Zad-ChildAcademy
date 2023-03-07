import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

export default function Programmes() {
  return (
    <>
    <div className="container py-5">
    <div className="program-heading d-flex align-items-center justify-content-center">
                <span className="dot dark-grey"></span>
                <span className="dark-grey dot"></span>
                <h1> البرامج والرسوم الدراسية </h1>
                <span className="dark-grey dot"></span>
                <span className="dot dark-grey"></span>
        </div>
        <div className="row programmes py-5 g-4">
            <div className="col-md-3 col-sm-6">
                <div className="programme green h-100">
                    <div className="head-card">
                        <div className="mx-2">
                        <h4>من<span>1</span>إلى<span>3</span>سنوات</h4>
                        </div>
                        <img className='w-100' src={img1} alt="image" />
                    </div>
                    <div className="programme-caption">
                        <div className="my-3 text-center">
                        <h5 className='box'>الحضانة</h5>
                        </div>
                        <ul>
                            <li>من 1 إلى 3 سنوات</li>
                            <li>الرسوم الدراسية للتيرم 2000 ريال سعودي</li>
                        </ul>
                        <div className="text-center registeranchor my-2">
                        <Link to='/register'><i class="fa-solid fa-circle circle-right"></i> <span>تسجيل</span> 
                        <i class="fa-solid fa-circle circle-left"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="programme orange h-100">
                    <div className="head-card">
                        <div className="mx-2">
                        <h4>من<span>3</span>إلى<span>4</span>سنوات</h4>
                        </div>
                        <img className='w-100' src={img2} alt="image" />
                    </div>
                    <div className="programme-caption">
                        <div className="my-3 text-center">
                        <h5 className='box'>المستوى الأول</h5>
                        </div>
                        <ul>
                            <li>من 3 إلى 4 سنوات</li>
                            <li>الرسوم الدراسية للتيرم 2300 ريال سعودي</li>
                        </ul>
                        <div className="text-center registeranchor my-2">
                        <Link to='/register'><i class="fa-solid fa-circle circle-right"></i> <span>تسجيل</span> 
                        <i class="fa-solid fa-circle circle-left"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="programme light-green h-100">
                    <div className="head-card">
                        <div className="mx-2">
                        <h4>من<span>4</span>إلى<span>5</span>سنوات</h4>
                        </div>
                        <img className='w-100' src={img3} alt="image" />
                    </div>
                    <div className="programme-caption">
                        <div className="my-3 text-center">
                        <h5 className='box'>المستوى الثانى</h5>
                        </div>
                        <ul>
                            <li>من 4 إلى 5 سنوات</li>
                            <li>الرسوم الدراسية للتيرم 2300 ريال سعودي</li>
                        </ul>
                        <div className="text-center registeranchor my-2">
                        <Link to='/register'><i class="fa-solid fa-circle circle-right"></i> <span>تسجيل</span> 
                        <i class="fa-solid fa-circle circle-left"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="programme voilet h-100">
                    <div className="head-card">
                        <div className="mx-2">
                        <h4>من<span>5</span>إلى<span>6</span>سنوات</h4>
                        </div>
                        <img className='w-100' src={img4} alt="image" />
                    </div>
                    <div className="programme-caption">
                        <div className="my-3 text-center">
                        <h5 className='box'>المستوى الثالث</h5>
                        </div>
                        <ul>
                            <li>من 5 إلى 6 سنوات</li>
                            <li>الرسوم الدراسية للتيرم 2300 ريال سعودي</li>
                        </ul>
                        <div className="text-center registeranchor my-2">
                        <Link to='/register'><i class="fa-solid fa-circle circle-right"></i> <span>تسجيل</span> 
                        <i class="fa-solid fa-circle circle-left"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
