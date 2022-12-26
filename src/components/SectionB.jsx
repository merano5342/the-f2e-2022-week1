
import CharaBlue from '../assets/images/chara-b.png'
import CharaYellow from '../assets/images/chara-y.png'

import Animate from './unit/animation'

const SectionB = () => {


  return (
    <section id='section-b' className="relative flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="chara-box">
          <Animate.ScaleIn1>
            <img src={CharaYellow} alt="" className='chara top-0 left-[-40%] md:top-[90%] lg:top-[-50vh]' />
          </Animate.ScaleIn1>
          <Animate.ScaleIn2>
            <img src={CharaBlue} alt="" className='chara left-[100px] top-[240px]  md:left-[20%] lg:top-[10vh]' />
          </Animate.ScaleIn2>
        </div>
        <div>
          <Animate.Opacity1>
            <div className="absolute right-0 top-0 text m-10 ">
              <h2 className='white-border'>本屆主題</h2>
              <h2 className='p-2'>／ 互動式網頁設計</h2>
            </div>

            <div className="text absolute left-0 bottom-20  m-10">
              <h2 className='p-2'>UI 設計師 × 前端工程師</h2>
              <h2 className='white-border'>攜手合作</h2>
            </div>
          </Animate.Opacity1>

        </div>



      </div>


    </section >

  );
};

export default SectionB;
