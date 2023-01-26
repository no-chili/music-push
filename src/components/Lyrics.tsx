import { useRef } from 'react'
import { useMusicS } from '../hooks/useMusicS'
import { usePlayMusic } from '../hooks/usePlayMusic'
type Props={
  lyrics:string,
  source:string
}
export default function Lyrics(props:Props) {
  const {lyrics,source}=props
  const music=useRef<HTMLAudioElement>(null)
  const {currentlyr}=usePlayMusic(lyrics,music)
  const {musicDate}=useMusicS(music)
  return (
    <div 
    > 
      <div className='flex h-24 items-end'>
      {
      [...musicDate.slice(10,60).reverse(),...musicDate.slice(11,60)].map((item,index)=>(
        <div key={index} className='bg-red-400 w-1 h-3 rounded-sm m-0.5' style={{height:item/2}}></div>
      ))
      }
      </div>
      <li className='list-none font-mono text-center transition-all'>{currentlyr}</li>
      <audio ref={music} src={source}></audio>
    </div>
    
  )
}
