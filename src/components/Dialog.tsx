import React from 'react'

export default function Dialog() {
  return (
    <div className=' absolute top-16 h-48 bg-slate-500 rounded-lg text-center  w-96'>
      <div className='w-32 relative leading-10 h-10 rounded bg-gray-700 m-auto text-slate-50 my-5'>
        添加歌曲
        <input type="file" className='absolute right-0 top-0 opacity-0 bg-slate-900'/>
      </div>
      <div>
        <input className=' mb-5 rounded px-3 outline-0' type="text" placeholder='歌名'/>
      </div>
      <div>
      <input className=' mb-5 rounded px-3 outline-0' type="text" placeholder='作者'/>
      </div>
    </div>
  )
}
