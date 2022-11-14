
const SectionE = () => {

  return (
    <section id='section-e'>

      <h2 className='mb-6 text-5xl'>區區修煉已經無法滿足了嗎？還有比賽等著你！</h2>

      <div className="grid grid-rows-2 gap-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="box p-8">
          <h2 className='text-left font-bold text-xl bg-white inline-block px-4 py-2 text-purple mb-4'>評審機制</h2>
          <div className="">
            <h3 className="white-border inline-block  m-0 mb-4">
              初選
            </h3>
            <p className=''>將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單
            </p>
            <h3 className="white-border inline-block m-0 mb-4 mt-6">決選</h3>
            <p>
              由六角學院與贊助廠商討論，進行最後篩選
              並於 12/30(五) 由評審進行直播公布名單！
            </p>
          </div>



        </div>

        <div className="box bg-white rounded-2xl p-8">

          <h2 className='text-center font-bold text-xl bg-purple inline-block px-4 py-2 mb-2 lg:mb-4'>獎項</h2>
          <div className="mx-4">
            <li className='mb-4'>
              <span className="font-bold text-xl mr-2">
                初選佳作
              </span>
              共六十位
              <span className="text-red ml-2">
                數位獎狀
              </span>
              <br />
              每週主題個人組十位、團體組十組
            </li>
            <li className='mb-4'>
              <span className="font-bold text-xl mr-2">
                個人企業獎
              </span>
              共六位
              <span className="text-red ml-2">
                NTD 3,000/位
              </span>
              <br />
              每週主題各 2 名，設計 1 位、前端 1 位
            </li>
            <li className='mb-4'>
              <span className="font-bold text-xl mr-2">
                團體企業獎
              </span>
              共三組
              <span className="text-red ml-2">
                NTD 10,000/組
              </span>
              <br />
              每週主題各 1 組
            </li>
            <li>
              以上皆提供完賽數位獎狀
            </li>
          </div>



        </div>
      </div>


    </section>

  );
};

export default SectionE;
