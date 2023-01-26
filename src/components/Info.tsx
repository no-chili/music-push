type Props={
  songTitle:string,
  autor:string,
  album:string
}
export default function Info(props:Props) {
  const {songTitle,autor,album}=props
  return (
    <>
      <div className=' w-96'>
        <div className='relative w-full h-60 overflow-hidden text-center'>
          <div className='transition-transform font-mono pt-20'>
            <div className='text-2xl font-sans text-center font-bold'>{songTitle}</div>
            <li className='list-none pt-10 mt-1 font-bold text-xl'>
              歌手: {autor}
            </li>
            <li className='list-none mt-1 font-bold text-xl'>
              专辑: {album}
            </li>
          </div>
          {/* <div className='absolute w-full top-0 h-32 bg-gradient-to-b from-teal-400'>
          </div>
          <div className='absolute w-full bottom-0 h-32 bg-gradient-to-t from-teal-400'>
          </div> */}
        </div>
      </div>
    </>
  )
}
