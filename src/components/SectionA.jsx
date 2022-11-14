import Chara from '../assets/images/chara.png'
import QuestionMark from '../assets/images/question-mark.png'



const SectionA = () => {


  return (
    <section id='section-a' className="bg-beige">


      <h2 className='shadowed-title font-bold text-center'>你是否也有以下困擾</h2>

      <div className="pt-[40px] mx-auto max-w-[800px]">


        <div className="dialog dialog-1">
          <p className="typing">

            羨慕別人的酷酷網頁動畫？

          </p>

        </div>

        <div className="dialog dialog-2">
          <p className="typing">
            滿足不了同事的許願？
          </p>
        </div>

        <div className="dialog dialog-3">
          <p className='typing'>動畫技能樹太雜無從下手？</p>
        </div>

      </div>
      <img src={QuestionMark} alt="" className='question-mark' />
      <div className="">
        <img src={Chara} alt="chara" className='chara' />
      </div>



    </section>


  );
};

export default SectionA;
