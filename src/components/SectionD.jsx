import star from '../assets/images/banner/star.png'
import charaY from '../assets/images/chara-y.png'
import charaB from '../assets/images/chara-b.png'
import Shape from '../assets/images/banner/banner-shape.png'
import Animate from './unit/animation'




const SectionD = () => {



  return (
    <section className="section relative" id='section-d'>
      <img src={Shape} alt="Shape" className='shape w-[90%] absolute top-80 z-0' />

      <Animate.Opacity1>
        <h2 className='mb-7 white-border py-3 max-w-5xl mx-auto '>活動時程</h2>
      </Animate.Opacity1>

      <Animate.ScaleIn1>
        <img src={charaY} alt="" className='absolute h-[500px] left-[-290px] top-[-50px] z-10' />
      </Animate.ScaleIn1>

      <Animate.Opacity1>

        <div className="content relative top-[100px] left-0 z-10 md:left-[20%] lg:left-[40%]">
          <div className="timeline-box">
            <img src={star} alt="" className='star' />
            <h2>報名開始 Sign Up</h2>
            <p className='white-border'>10/13</p>
            <p className="px-3">-</p>
            <p className='white-border'>10/30</p>
          </div>
          <div className="timeline-box">
            <img src={star} alt="" className='star' />

            <h2>各組上傳作品 Upload</h2>
            <div className="mb-4">
              <p className='white-border'>10/31</p>
              <p className="pl-3">UI / 團體組開賽 </p>
            </div>
            <div className="">
              <p className='white-border'>11/7</p>
              <p className="pl-3">前端組開賽 </p>
            </div>
          </div>
          <div className="timeline-box">
            <img src={star} alt="" className='star' />

            <h2>線上直播 Stream</h2>
            <p className='white-border'>11/3</p>
            <p className="px-3">-</p>
            <p className='white-border'>11/24</p>
          </div>
        </div>
      </Animate.Opacity1>

      <Animate.ScaleIn2>
        <img src={charaB} alt="" className='absolute h-[500px] right-[-290px] bottom-[50px] z-10' />
      </Animate.ScaleIn2>
      <div className="challenge max-w-5xl">
        <div className="content">
          <div className="challenge-box">
            <img src={star} alt="" className='star' />
            <h2>週一<br />中午 12:00</h2>
            <p>獲得新主題</p>
          </div>
          <div className="challenge-box">
            <img src={star} alt="" className='star' />
            <h2>隔週一<br />中午 12:00</h2>
            <p>UI / 團體組 - 登陸作品 <br /> 前端組 - 認領設計稿</p>
            <p></p>

          </div>

          <div className="challenge-box">
            <img src={star} alt="" className='star' />
            <h2>再隔週一<br />中午 12:00</h2>
            <p>前端組 /團體組 - 登陸作品</p>
          </div>
        </div>
        <div className='text-sm text-pink text-center m-4'>活動採用 UI、前端接力合作形式，前端工程師可採用 UI 設計師的設計稿，一同產出完整作品。</div>
      </div>

    </section >
  );
};

export default SectionD;
