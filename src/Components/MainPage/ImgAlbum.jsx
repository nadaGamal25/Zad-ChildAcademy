import React from 'react'

export default function ImgAlbum() {
  return (
    <>
    <section className="">
        <div className="container">
        <div className="album-heading d-flex align-items-center justify-content-center">
                <span className="dot green"></span>
                <span className="light-green dot"></span>
                <h1> ألبومات الصور </h1>
                <span className="light-green dot"></span>
                <span className="dot green"></span>
        </div>
        <div className="row text-center g-3 mb-5 py-4">
            <div className="col-md-6 col-sm-6 text-center">
                <div className="grey-col mx-3">
                    <h2 className='green'>أكــاديـمـيــة زاد الـطـفـــل</h2>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 text-center">
                <div className="grey-col mx-3">
                    <h2 className='orange'>أكاديمية قطوف للطفل</h2>
                </div>
            </div>
            <div className="imgs">
            <div className="albums1"></div>
            <div className="albums2"></div>                
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
