
import Image from 'next/image'

import search from '../../assets/search.svg'

function DashboardLayout() {
  return (
    <section className='min-h-screen grid grid-cols-12'>
      {/* TOP BAR */}
      <div className=" col-span-10 order-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-400 h-12">
        <div className="flex justify-around">
            <form action="">
              <div className="py-2 relative">
                <div className="absolute top-4 left-1">
                  <Image width={18} src={search} alt='search'/>
                </div>
              <input className='focus:outline-none p-1 pl-8 rounded-lg' placeholder='Search here...' type="text" name="" id="" />
              </div>
            </form>
        </div>
      </div>
      {/* LEFT BAR */}
      <div className="lg:col-span-2 bg-gradient-to-b from-blue-400 via-indigo-400 to-indigo-500 min-h-screen">
        left
      </div>
    </section>
  )
}

export default DashboardLayout