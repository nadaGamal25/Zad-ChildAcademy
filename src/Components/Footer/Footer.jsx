import React from 'react'
import imgfooter from '../../assets/zadFooter.png'

export default function Footer() {
  return (
    <>
    <div className="colors-footer"></div>
    <footer>
      <div className="overlay-footer w-100"></div>
      <div className="container footercontain px-4">
        <div className="row">
        <div className="col-md-6 footer-info pt-2">
          <div className="zad m-auto">
            <h3>أكاديمية زاد الطفل</h3>
            <h3> 0502357555<i class="fa-solid fa-phone-volume"></i></h3>
            <h5><i class="fa-solid fa-location-dot"></i> خميس مشيط - حي الرصراص
مقابل مسجد الفالح</h5> 
          </div>
          <div className="qtouf m-auto my-2">
          <h3>أكاديمية قطوف الطفل</h3>
            <h3> 0507802302<i class="fa-solid fa-phone-volume"></i></h3>
            <h5><i class="fa-solid fa-location-dot"></i> خميس مشيط - طريق المدينة
العسكرية - خلف مطاعم السده</h5>
          </div>
          <div className="suggestions m-auto">
            <h5>للشكاوى والمقترحات :</h5>
            <h4> 0537044097<i class="fa-solid fa-phone-volume"></i></h4>
          </div>
        </div>
        <div className="col-md-6">
          <img src={imgfooter} className="w-100" alt="img footer" />
          
        </div>
        </div>
      </div>
    </footer>
    </>
  )
}
