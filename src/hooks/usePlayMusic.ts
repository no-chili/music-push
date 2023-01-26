import { useEffect, useRef, useState } from "react"
import { MusicRef } from "../types"
export function usePlayMusic(lyrics:string,music:MusicRef){
  const lyr=lyrics.split('\n').map(item=>{
    let time=item.slice(1,9).split(':')
    return {
      time:Number(time[0])*60+Number(time[1]),
      content:item.slice(11)
    }
  }).filter(item=>{
    return item.content&&!isNaN(item.time)
  })
  const [index,setIndex]=useState(1)
  const [currentTime,setCurrentTime]=useState(0)
  let linster=true
  const reload=()=>{
    setCurrentTime(0)
    setIndex(1)
  }
  const play=(e:KeyboardEvent)=>{
    if(e.key!=='Enter')return
    if(music?.current?.currentTime){
      music.current.load()
      reload()
    }else{
      music.current&&music.current.play()
    }
    linster&&music.current&&music.current.addEventListener('timeupdate',()=>{
      const time = music?.current?.currentTime||0
      setCurrentTime(time)
    })
    linster=false
  }
  useEffect(()=>{
    if(index+1===lyr.length)return
    if(currentTime+0.2>lyr[index+1].time){
      setIndex(index+1)
    }
  },[currentTime])
  useEffect(()=>{
    addEventListener('keydown',play)
    return ()=>{
      removeEventListener('keydown',play)
    }
  },[])
  return {
    currentlyr:lyr[index].content,
    linster
  }
}
