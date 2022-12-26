import { DATA_THEME } from "./data/DATA";
import Animate from './unit/animation'

const SectionC = () => {
  return (
    <section id='section-c' >
      <Animate.ScaleIn3>
        <h2 className='mb-8 white-border py-2 max-w-5xl mx-auto' > 年度最強合作，三大主題來襲</ h2>
      </Animate.ScaleIn3>

      <h3 className='mb-6'>各路廠商強強聯手，<br />共同設計出接地氣的網頁互動挑戰關卡</h3>

      <div className="flex flex-col mx-auto gap-6 lg:grid lg:grid-cols-3 max-w-6xl ">
        {DATA_THEME.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.img} alt="" className='card-img' />
              <div className="flex flex-col justify-between">
                <div className="card-info">
                  <div className="flex flex-col text-center md:block ">
                    <div className=" bg-purple text-white py-2 px-3 lg:text-sm lg:px-2 md:text-left inline uppercase">
                      {item.week}
                    </div>
                    <div className="py-2 px-3 m-1 text-purple lg:text-sm lg:px-2 inline uppercase">
                      # {item.tag}
                    </div>
                  </div>

                  <h3>{item.title}</h3>
                  <h5 className='pt-1 text-red'>贊助商：{item.sponsor}</h5>
                </div>
                <button className="m-4 py-2 bg-cyan  border-cyan  border-2  rounded-full hover:bg-white">
                  <h5 className='text-center font-bold' href={item.detailUrl}>
                    查看關卡細節

                  </h5>
                </button>
              </div>

            </div>
          )
        })}
      </div>
    </section >
  );
};

export default SectionC;
