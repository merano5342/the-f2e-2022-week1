import sp1 from '../assets/images/speakers/speaker-1.png'
import sp2 from '../assets/images/speakers/speaker-2.png'
import sp3 from '../assets/images/speakers/speaker-3.png'
import sp4 from '../assets/images/speakers/speaker-4.png'


const data = [{
  'id': 'p1',
  'title': '網站的動態趨勢',
  'name': '李明',
  'personTitle': '板塊設計創辦人暨設計總監',
  'time': '# 11/3 (四) 20:00 - 21:30',
  'img': sp1
},
{
  'id': 'p2',
  'title': 'jQuery 也可以做到的互動效果',
  'name': 'Leo',
  'personTitle': 'Angular Taiwan 傳教士',
  'time': '# 11/10 (四) 20:00 - 21:30',
  'img': sp2

}, {
  'id': 'p3',
  'title': '做事不能拖拖拉拉，但網頁可以：draggable.js 介紹',
  'name': '邱繼緯',
  'personTitle': '前端工程師',
  'time': '#11/17 (四) 20:00 - 21:30',
  'img': sp3

}, {
  'id': 'p4',
  'title': '互動式網頁設計工程師該具備哪些技能？',
  'name': '吳哲宇',
  'personTitle': '墨雨互動設計 創辦人、生成式藝術家',
  'time': '# 11/24 (四) 20:00 - 21:30',
  'img': sp4

}]

const SectionH = () => {
  return (
    <section className="section" id='section-h'>

      <h1 className='title shadowed-title  font-bold text-center'>各界大神接力分享</h1>
      <div className="container px-4 mx-auto mt-10 lg:mt-[100px]">
        {data.map((item) => {
          return (
            <div className="lg:flex my-8 mx-4" key={item.id}>
              <img src={item.img} alt="" className='h-[200px] mx-auto mb-[-10px] z-10 lg:h-[300px] lg:mr-[-20px]' />
              <div className="item-box  bg-white w-full  py-10 px-20" >
                <h2 className='mb-3 underline underline-offset-8'>{item.title}</h2>
                <h3 className='inline mb-3'>{item.name}</h3>
                <h4 className='text-pink inline ml-2'>{item.personTitle}</h4>
                <h3>{item.time}</h3>
                <div className="bg-cyan p-2 my-4 rounded-md inline-block">免費公開場</div>
              </div>

            </div>




          )
        })}
      </div>

    </section >
  );
};

export default SectionH;
