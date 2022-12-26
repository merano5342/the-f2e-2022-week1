

import { DATA_WORKSHOP as DATA } from './data/DATA'
import Animate from './unit/animation'

const SectionH = () => {
  return (
    <section className="section" id='section-h'>
      <Animate.ScaleIn3>

        <h1 className='title shadowed-title  font-bold text-center'>各界大神接力分享</h1>
      </Animate.ScaleIn3>

      <div className="container px-4 mx-auto mt-10 lg:mt-[100px]">
        {DATA.map((item) => {
          return (
            <Animate.ScaleIn1 key={item.id}>
              <div className="lg:flex my-8 mx-4" >
                <img src={item.img} alt="" className='h-[200px] mx-auto mb-[-10px] z-10 lg:h-[300px] lg:mr-[-20px]' />
                <div className="item-box  bg-white w-full  py-10 px-20" >
                  <h2 className='mb-3 underline underline-offset-8'>{item.title}</h2>
                  <h3 className='inline mb-3'>{item.name}</h3>
                  <h4 className='text-pink inline ml-2'>{item.personTitle}</h4>
                  <h3>{item.time}</h3>
                  <div className="bg-cyan p-2 my-4 rounded-md inline-block">免費公開場</div>
                </div>
              </div>
            </Animate.ScaleIn1>
          )
        })}
      </div>

    </section >
  );
};

export default SectionH;
