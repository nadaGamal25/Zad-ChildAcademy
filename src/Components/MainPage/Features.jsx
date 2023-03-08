import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Features() {
  return (
    <>
    <section className="py-5">
        <div className="container pt-5">
            <Fade top >
            <div className="feature-heading d-flex align-items-center justify-content-center">
                <span className="dot bink"></span>
                <span className="light-green dot"></span>
                <h1> ما يميزنا </h1>
                <span className="light-green dot"></span>
                <span className="dot bink"></span>

            </div>
            </Fade>
            <div className="features row pt-4">
                <Fade top duration={1200}>
                <div className="col-md-6">
                    <div className="feature d-flex bg-orange">
                    <span><i class="fa-solid fa-book"></i></span>
                        <div className="feature-caption">
                            <h2>مناهج دراسية مميزة</h2>
                            <p>تم اختيارها بكل عناية لتناسب أطفالكم حسب أعمارهم.</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature d-flex bg-light-green">
                    <span><i class="fa-solid fa-book-open"></i></span>
                        <div className="feature-caption">
                            <h2>برامج صباحية ومسائية</h2>
                            <p>
                            حرصا منا على راحتكم...الآن يمكنك تسجيل طفلك بالأكاديمية بالفترةالصباحيةوالمسائية حسب مايتناسب مع وقتكم.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature d-flex bg-bink">
                    <span><i class="fa-solid fa-person-arrow-up-from-line"></i></span>
                        <div className="feature-caption">
                            <h2>دروس تقوية</h2>
                            <p>وفرنا لكم دروس تقوية بالأكاديمية لأننا نحرص على زيادة المستوى التعليمي لطفلك.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature d-flex bg-voilet">
                    <span><i class="fa-solid fa-child-reaching"></i></span>
                        <div className="feature-caption">
                            <h2>حضانة للطفل بالساعة</h2>
                            <p>متوفر لدينا بالأكاديمية حضانة للطفل بالساعة واليوم والشهر والتيرم .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature d-flex bg-green">
                    <span><i class="fa-solid fa-graduation-cap"></i></span>
                        <div className="feature-caption">
                            <h2>معلمات ذوات كفاءة</h2>
                            <p>نختار معلماتنا بعناية ذوات مؤهلات علمية وكفاءة عالية .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature d-flex bg-orange">
                    <span><i class="fa-regular fa-comments"></i></span>
                        <div className="feature-caption">
                            <h2>الاستشارات والتواصل</h2>
                            <p>نجيب عن الأسئلة التي تتبادر إلى ذهنك بخصوص طفلك ونرشدك لما هو أفضل له .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature d-flex bg-voilet">
                    <span><i class="fa-solid fa-bus"></i></span>
                        <div className="feature-caption">
                            <h2>النقل</h2>
                            <p>حرصا منا على راحتكم ..نؤمن لكم حافلات مريحةوآمنة لنقل أطفالكم من وإلى الروضة.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature d-flex bg-bink">
                    <span><i class="fa-solid fa-desktop"></i></span>
                        <div className="feature-caption">
                            <h2>التسجيل الإلكتروني</h2>
                            <p>يمكنك تسجيل طفلك إلكترونياوسداد الرسوم عبر التحويل البنكي وأنت في مكانك .</p>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>

    </section>
    </>
  )
}
