import { useEffect, useState } from 'react';
import { DATA_Q } from './data/DATA';



const SectionG = () => {
  const [tab, setTab] = useState('group1')
  const [sortData, setSortData] = useState([])

  useEffect(() => {
    const theGroup = DATA_Q.find((group) => {
      return group.sorts === tab
    })
    setSortData(theGroup.content)
  }, [tab])

  return (
    <section className='pt-[70px] p-8' id='section-g'>
      <h2 className='py-10 text-white'>
        常見問答
      </h2>

      {/* tab title */}
      <div className="flex justify-center">
        {DATA_Q.map((group) => {
          return (
            <button
              className="white-border text-white data-[active=true]:text-purple data-[active=true]:font-bold  data-[active=true]:bg-cyan"
              key={group.sorts}
              onClick={() => setTab(group.sorts)}
              data-active={group.sorts === tab} >
              {group.title}
            </button>
          )
        })}
      </div>

      {/* tab content */}
      <div className="max-w-[680px] pt-6 mx-auto ">
        {sortData.map((item) => {
          return (
            <div className="mx-4 my-6 flex" key={item.id}>
              <h2 className='mr-3 '>{item.id} </h2>
              <div className="">
                <h3 className="text-white text-left font-bold" >
                  {item.Q}
                </h3>
                <h4 className="text-cyan">
                  {item.A}
                </h4>
              </div>

            </div>
          )
        })}
      </div>
    </ section >
  );
};

export default SectionG;
