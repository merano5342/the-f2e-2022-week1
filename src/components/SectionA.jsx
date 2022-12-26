import Chara from '../assets/images/chara.png'
import QuestionMark from '../assets/images/question-mark.png'
import Animate from './unit/animation'



const SectionA = () => {


  return (
    <section id='section-a' className="p-4">
      <Animate.ScaleIn3>

        <h2 className='shadowed-title font-bold text-center z-10'>你是否也有以下困擾</h2>
      </Animate.ScaleIn3>

      <div className="pt-[40px] mx-auto max-w-[800px] z-20">
        <Animate.ScaleIn1>
          <div className="dialog dialog-1">
            <p className="typing">羨慕別人的酷酷網頁動畫？</p>
          </div>
        </Animate.ScaleIn1>
        <Animate.ScaleIn2>

          <div className="dialog dialog-2">
            <p className="typing">滿足不了同事的許願？</p>
          </div>
        </Animate.ScaleIn2>
        <Animate.ScaleIn1>

          <div className="dialog dialog-3">
            <p className='typing'>動畫技能樹太雜無從下手？</p>
          </div>
        </Animate.ScaleIn1>

      </div >
      <img src={QuestionMark} alt="" className='question-mark top-[440px]' />
      <div className="">
        <img src={Chara} alt="chara" className='chara z-10' />
      </div>
    </section >
  );
};

export default SectionA;
