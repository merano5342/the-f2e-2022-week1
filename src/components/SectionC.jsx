import Pic1 from '../assets/images/theme-1.png'
import Pic2 from '../assets/images/theme-2.png'
import Pic3 from '../assets/images/theme-3.png'


const DATA_THEME = [{
  'id': 'w1',
  'week': 'week1',
  'tag': '視差滾動',
  'img': Pic1,
  'title': 'The F2E 活動網站設計',
  'sponsor': '版塊設計',
  'detailUrl': 'https://2022.thef2e.com/news/week1'
},
{
  'id': 'w2',
  'week': 'week2',
  'tag': 'Canvas',
  'img': Pic2,
  'title': '今晚，我想來點點簽',
  'sponsor': '凱鈿行動科技',
  'detailUrl': 'https://2022.thef2e.com/news/week2'
},
{
  'id': 'w3',
  'week': 'week3',
  'tag': 'JS draggable',
  'img': Pic3,
  'title': 'Scrum 新手村',
  'sponsor': '鈦坦科技',
  'detailUrl': 'https://2022.thef2e.com/news/week3'
}]

const SectionC = () => {
  return (
    <section id='section-c'>

      <h2 className='mb-7 white-border py-3'>年度最強合作，三大主題來襲</h2>
      <h3 className='mb-6'>各路廠商強強聯手，<br />共同設計出接地氣的網頁互動挑戰關卡</h3>

      <div className="flex flex-col md:grid md:grid-cols-3">
        {DATA_THEME.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.img} alt="" className='card-img' />
              <div className="flex flex-col justify-between">
                <div className="card-info">
                  <div className=" bg-purple text-white py-2 px-3 md:text-sm md:px-2 inline uppercase">
                    {item.week}
                  </div>
                  <div className="py-2 px-3 m-1 text-purple md:text-sm md:px-2 inline uppercase">
                    # {item.tag}
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
    </section>
  );
};

export default SectionC;
